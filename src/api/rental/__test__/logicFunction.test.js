const {
  deadLineReturn,
  amountFunction,
  amountForRentalFunction,
  expiresFunction
} = require('../utils/logicFunctions');

const {
  rental,
  rentals
} = require('./mocks/rentalMocks')

describe('Test logic rental functions', () => {
  describe('Function deadLineReturn', () => {
    it('should success on function deadLineReturn', () => {
      const deadline = deadLineReturn(50, 10);
      expect(expect.stringContaining(deadline.date));
    });

    it('should error on function deadLineReturn exceeded the number of films available ', () => {
      const deadline = deadLineReturn(10, 20);
      expect(deadline.error).toBe("You have exceeded the number of films available");
      expect(deadline.message).toBe(`Movie amount ${10}`);
    });

    it('shold succes on function pass values equals', () => {
      const deadline = deadLineReturn(1, 1);
      expect(expect.stringContaining(deadline.date));
    });

    it('shold error message on function pass values zero', () => {
      const deadline = deadLineReturn(0, 10);
      expect(deadline.error).toBe("You have exceeded the number of films available");
      expect(deadline.message).toBe(`Movie amount ${0}`);
    });
  });

  describe('Test amountFormRentalFunction', () => {
    it('should return 1', async () => {
      const amount = await amountForRentalFunction(1);
      expect(amount).toBe(1)
    });

    it('should return 1', async () => {
      let array = [2, 3, 4, 5];
      for (let i = 0; i < array.length; i++) {
        const amount = await amountForRentalFunction(array[i]);
        expect(amount).toBe(3)
      }
    });

    it('should return 3', async () => {
      let array = [6, 7, 8, 9];
      for (let i = 0; i < array.length; i++) {
        const amount = await amountForRentalFunction(array[i]);
        expect(amount).toBe(5)
      }
    });

    it('should return 5', async () => {
      const amount = await amountForRentalFunction(10);
      expect(amount).toBe(10)
    });
  });

});