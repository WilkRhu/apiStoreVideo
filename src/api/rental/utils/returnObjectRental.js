const {formatDate} = require("./formatDate");

const returnObjectRental = (data,  returnPeriod) => {
  const rental = {
    moviesId: data.moviesId,
    amount: data.amount,
    deadlineForReturn: returnPeriod,
    lessor: data.lessor,
  }
  return rental;
};

const returnObjectsRentals = (data) => {
  const returnObject = [];

  for (let i = 0; i < data.length; i++) {
    const rentals = {
      moviesId: data[i].moviesId,
      amount: data[i].amount,
      deadlineForReturn: data[i].deadlineForReturn,
      lessor: data[i].lessor,
      rentalDate: data[i].rentalDate,
      returnDate: data[i].returnDate,
    }
    returnObject.push(rentals);
  }
  return returnObject.sort();
}

module.exports = {
  returnObjectRental,
  returnObjectsRentals
};