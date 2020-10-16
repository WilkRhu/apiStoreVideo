const {getMockReq, getMockRes} = require('@jest-mock/express');
const { moveMockSuccess } = require('./mocks/moveMock');
const {req, res, clearMockRes} = getMockRes();
const Move = require('../../models/MoveModel');


beforeEach(() => {
  clearMockRes()
});

describe("Test units moves",  () => {
  it('should create move success!', async () => {
    const req = getMockReq({body: moveMockSuccess});
    const res = getMockRes().res.status(200)
    const moves = await Move.create(req);
    console.log(moves)
  });
});