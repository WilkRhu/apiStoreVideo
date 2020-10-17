const request = require('supertest');
const Movie = require('../../src/api/models/MovieModel');
const app = require('../../src/app');
const {
  movieSuccess,
  movieSuccessNew,
  movieErrorFields
} = require('../mocks/movieMock');

describe('Integrarions test', () => {
  let movie;

  beforeAll(async () => {
    movie = await request(app).post('/movie').send(movieSuccess);
  });

  describe('Create Move Success', () => {
    it('should create move success!', async () => {
      expect(movie.status).toBe(201);
      expect(movie.body.title).toBe(movieSuccess.title);
      expect(movie.body.synopsis).toBe(movieSuccess.synopsis);
      expect(movie.body.genre).toBe(movieSuccess.genre);
      expect(movie.body.releaseDate).toBe(movieSuccess.releaseDate);
      expect(movie.body.subtitled).toBe(movieSuccess.subtitled);
      expect(movie.body.director).toBe(movieSuccess.director);
      expect(movie.body.linkImb).toBe(movieSuccess.linkImb);
      expect(movie.body.amount).toBe(movieSuccess.amount);

    });

    it('should returm movie creates', async () => {
      const movies = await request(app).get('/movie');
      expect(movies.status).toBe(200)
      expect(movies.body).toBeInstanceOf(Array)
    });

    it('should return move for id', async () => {
      const movieId = await request(app).get(`/movie/${movie.body.id}`);
      expect(movieId.status).toBe(200)
      expect(movieId.body).toBeInstanceOf(Object)
      expect(movieId.body.title).toBe(movie.body.title);
    });

    it('should error return movie for id', async () => {
      const movieId = await request(app).get(`/movie/5591`);
      expect(movieId.status).toBe(404)
      expect(movieId.body.error).toBe("Movie not found in the database!")
    });

    it('should  success update movie', async () => {
      const title = "New title";
      const movieUpdate = await request(app).put(`/movie/${movie.body.id}`)
        .send({
          title
        });
      expect(movieUpdate.body.title).toBe("New title");
      expect(movieUpdate.status).toBe(201);
    });

    it('should error update movie', async () => {
      const movieId = await request(app).put(`/movie/5591`);
      expect(movieId.status).toBe(404)
      expect(movieId.body.error).toBe("Movie not found for update")
    });

    it('should success delete move for id', async () => {
      const movieDelete = await request(app).delete(`/movie/${movie.body.id}`);
      expect(movieDelete.body.message).toBe("Movie successfully deleted!");
      expect(movieDelete.status).toBe(200)
    });

    it('should error delete movie id', async () => {
      const movieId = await request(app).delete(`/movie/5591`);
      expect(movieId.status).toBe(404)
      expect(movieId.body.error).toBe("Movie not found in the database, or already deleted!")
    });

  });

  describe('Create move error', () => {
    describe('Validations error', () => {
      
      it('should error create move fields required', async () => {
        const quantMovie = Object.keys(movieSuccess);
        const contMovie = Object.values(movieSuccessNew);

        for (let i = 0; i < quantMovie.length; i++) {
          movieSuccess[`${quantMovie[i]}`] = undefined;
          const movie = await request(app).post('/movie')
          .send(movieSuccess);
          if(movie.status === 400 && movie.body.error !== 'SQLITE_ERROR: no such table: Movie'){
            expect(movie.status).toBe(400)
            expect(movie.body.error).toBe(`"${quantMovie[i]}" is required`)
          }
          movieSuccess[`${quantMovie[i]}`] = contMovie[i];
        }
      });

    });

  })

  afterAll(async () => {
    await request(app).delete(`/moves/${move.body.id}`);
  })

});