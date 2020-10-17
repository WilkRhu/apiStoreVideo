const { mountpath } = require('../../../app');
const Move = require('../../models/MoveModel');
const { moveSuccess } = require('./mocks/moveMock');
const moveValidation = require('../validations/moveValidation');

describe("Test units moves",  () => {
  it('should create move success!', async () => {
      const {error, value} = moveValidation.validate(moveSuccess);
      if(!error) {
        const move = await Move.create(value); 
        return move;
        expect(move.title).toEqual(moveSuccess.title);
        expect(move.synopsis).toEqual(moveSuccess.synopsis);
        expect(move.genre).toEqual(moveSuccess.genre);
        expect(move.releaseDate).toEqual(moveSuccess.releaseDate);
        expect(move.language).toEqual(moveSuccess.language);
        expect(move.subtitled).toEqual(moveSuccess.subtitled);
        expect(move.director).toEqual(moveSuccess.director);
        expect(move.linkImb).toEqual(moveSuccess.linkImb);
        expect(move.amount).toEqual(moveSuccess.amount);
      }
  });
});