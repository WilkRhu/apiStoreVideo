
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
      id: data[i].id,
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

const returnContractRental = (data) => {
  const rental = {
    id: data.id,
    moviesId: data.moviesId,
    amount: data.amount,
    deadlineForReturn: data.deadlineForReturn,
    lessor: data.lessor,
    rentalDate: data.rentalDate,
    returnDate: data.returnDate
  }
  return rental;
};

module.exports = {
  returnObjectRental,
  returnObjectsRentals,
  returnContractRental
};