const { mountpath } = require('../../../app');
const Movie = require('../../models/MovieModel');
const { movieSuccess } = require('./mocks/movieMock');
const {
  movieValidation
} = require('../validations/movieValidation');

describe("Test units moves",  () => {
  it('should create move success!', async () => {
      const {error, value} = movieValidation.validate(movieSuccess);
      if(!error) {
        const movie = await Movie.create(value); 
        return movie;
        expect(movie.title).toEqual(movieSuccess.title);
        expect(movie.synopsis).toEqual(movieSuccess.synopsis);
        expect(movie.genre).toEqual(movieSuccess.genre);
        expect(movie.releaseDate).toEqual(movieSuccess.releaseDate);
        expect(movie.language).toEqual(movieSuccess.language);
        expect(movie.subtitled).toEqual(movieSuccess.subtitled);
        expect(movie.director).toEqual(movieSuccess.director);
        expect(movie.linkImb).toEqual(movieSuccess.linkImb);
        expect(movie.amount).toEqual(movieSuccess.amount);
      }
  });
});