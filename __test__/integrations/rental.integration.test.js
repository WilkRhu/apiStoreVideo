const app = require('../../src/app');
const request = require('supertest');
const Rental = require('../../src/api/models/RentalModel');
const {postMockRental} = require('../mocks/rentalMock');
const { movieSuccess } = require('../mocks/movieMock');
const { move } = require('../../src/app');

describe('Test integration Rental', () => {
  let rental;
  let movie;

  beforeAll(async () => {
    movie = await request(app).post('/movie').send(movieSuccess);
  });

  describe('POST /rental', () => {
    it('should success create rental', async () => {
      postMockRental.moviesId = movie.body.id;
      rental = await request(app).post('/rental').send(postMockRental);
      expect(rental.status).toBe(201)
      expect(rental.body.amount).toBe(postMockRental.amount)
      expect(rental.body.lessor).toBe(postMockRental.lessor)
    });

    it('should error create rental', async () => {
      postMockRental.moviesId = undefined;
      rental = await request(app).post('/rental').send(postMockRental);
      expect(rental.status).toBe(400)
      expect(rental.body.error).toBe('WHERE parameter "id" has invalid "undefined" value')
    });
  })
}); 

describe('GET /rental find All list', () => {
  it('should return list rental', async () => {
    const findAll = await request(app).get('/rental');
    expect(findAll.status).toBe(200);
    expect(findAll.body).toBeInstanceOf(Array);
  })
});
