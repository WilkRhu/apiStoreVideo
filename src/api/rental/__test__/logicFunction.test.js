const {deadLineReturn} = require('../utils/logicFunctions');

describe('Test logic rental functions', () =>{
  it('should success on function deadLineReturn', () =>{
    const deadline = deadLineReturn(50, 10);
    expect(expect.stringContaining(deadline));
  });

  it('should error on function deadLineReturn exceeded the number of films available ', () =>{
    const deadline = deadLineReturn(10, 20);
    expect(deadline).toBe("You have exceeded the number of films available");
  });
});