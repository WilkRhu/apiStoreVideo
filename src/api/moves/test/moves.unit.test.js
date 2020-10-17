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
        expect(move.titulo).toEqual(moveSuccess.titulo);
        expect(move.sinopse).toEqual(moveSuccess.sinopse);
        expect(move.genero).toEqual(moveSuccess.genero);
        expect(move.dataLancamento).toEqual(moveSuccess.dataLancamento);
        expect(move.legendado).toEqual(moveSuccess.legendado);
        expect(move.diretor).toEqual(moveSuccess.diretor);
        expect(move.link_imdb).toEqual(moveSuccess.link_imdb);
      }
  });
});