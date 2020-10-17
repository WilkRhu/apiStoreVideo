const request = require('supertest');
const Move = require('../../src/api/models/MoveModel');
const app = require('../../src/app');
const {
  moveSuccess
} = require('../mocks/moveMock');

describe('Integrarions test', () => {
  let move;

  beforeAll(async () => {
    move = await request(app).post('/moves').send(moveSuccess);
  });


  describe('Create Move Success', () => {
    it('should create move success!', async () => {
      expect(move.status).toBe(201);
      expect(move.body.title).toBe(moveSuccess.title);
      expect(move.body.synopsis).toBe(moveSuccess.synopsis);
      expect(move.body.genre).toBe(moveSuccess.genre);
      expect(move.body.releaseDate).toBe(moveSuccess.releaseDate);
      expect(move.body.subtitled).toBe(moveSuccess.subtitled);
      expect(move.body.director).toBe(moveSuccess.director);
      expect(move.body.linkImb).toBe(moveSuccess.linkImb);
      expect(move.body.amount).toBe(moveSuccess.amount);

    });

    it('should returm moves creates', async () => {
      const moves = await request(app).get('/moves');
      expect(moves.status).toBe(200)
      expect(moves.body).toBeInstanceOf(Array)
    });

    it('should return move for id', async () => {
      const moveId = await request(app).get(`/moves/${move.body.id}`);
      expect(moveId.status).toBe(200)
      expect(moveId.body).toBeInstanceOf(Object)
      expect(moveId.body.title).toBe(move.body.title);
    });

    it('should  success update move', async () => {
      const title = "New title";
      const moveUpdate = await request(app).put(`/moves/${move.body.id}`)
        .send({
          title
        });
      expect(moveUpdate.body.title).toBe("New title");
      expect(moveUpdate.status).toBe(201);
    });

    it('should success delete move for id', async () => {
      const moveDelete = await request(app).delete(`/moves/${move.body.id}`);
      expect(moveDelete.body.message).toBe("Filme deletado com sucesso!");
      expect(moveDelete.status).toBe(200)
    })

  });

  describe('Create move error', () => {
    describe('Validations error', () => {
      it('should error create title required', async () => {
        moveSuccess.title = undefined;
        const move = await request(app).post('/moves')
          .send(moveSuccess);
          expect(move.status).toBe(400)
          expect(move.body.error).toBe('"title" is required');
      });

      it('should error create title synopsis', async () => {
        moveSuccess.title = undefined;
        const move = await request(app).post('/moves')
          .send(moveSuccess);
          expect(move.status).toBe(400)
          expect(move.body.error).toBe('"synopsis" is required');
      })
    })
  })

  afterAll(async () => {
    await request(app).delete(`/moves/${move.id}`);
  })

});