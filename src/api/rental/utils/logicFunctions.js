const Movies = require("../../models/MovieModel");
const {
  formatDate,
  dateReturn
} = require("./formatDate");
const moment = require('moment');

const deadLineReturn = (movieAmount, rentalAmount) => {
  var subtraction = Math.sign(movieAmount - rentalAmount);
  if (subtraction >= 1 || subtraction === 0 && movieAmount !== 0) {
    let date = currentDate = new Date();
    const amountForRental = amountForRentalFunction(rentalAmount);
    const newDate = currentDate.setDate(date.getDate() + amountForRental);
    const DeadDate = formatDate(newDate);
    if (DeadDate) {
      return {
        date: DeadDate
      };
    }
    return false
  }
  return {
    error:"You have exceeded the number of films available",
    status: 400,
    message: `Movie amount ${movieAmount}`
  }

};


const amountFunction = async (movies, amountRental) => {
  var subtraction = Math.sign(movies.amount - amountRental);
  if (subtraction >= 1 || subtraction === 0 && movies.amount !== 0) {
    const subtractionFromUpdateAmount =  (movies.amount - amountRental);
    const upTableMovie = await Movies.update({
      amount: subtractionFromUpdateAmount
    }, {
      where: {
        id: movies.id
      }
    });
    if (upTableMovie) {
      return true;
    }
    return false;
  }
  return {
    status: 400,
    error: "There are no copies available for rental",
    available: movies.amount
  }
}

const amountForRentalFunction = (rentalAmount) => {
  let value;
  rentalAmount === 1 ?
  value = 1 : rentalAmount <= 5 ?
  value = 3 : rentalAmount <= 9 ?
  value = 5 : value = 10;

  return value;
};

const expiresFunction = (data) => {
  const now = moment(new Date());
  const info = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].dataValues.returnDate === null || data[i].dataValues.returnDate ==='') {
      const returnDate = dateReturn(data[i].dataValues.deadlineForReturn);
      const duration = moment.duration(now.diff(returnDate));
      const delayedDays = Math.sign(duration._data.days);
      if (delayedDays === 1) {
        info.push({
          data: data[i],
          message: `The user ${data[i].lessor} delayed ${duration._data.days} days ${duration._data.hours} hours ${duration._data.minutes} minutes and ${duration._data.seconds} seconds or the delivery of the movie`
        })
      }
    } else {
      return {
        message: "There is no delayed film"
      }
    }
  }
  if (info.length !== 0) {
    return info;
  }
  
}

const expiresOneFunction = (data) => {
  const now = moment(new Date());
  const info = [];
  data.map(item => {
    const element = item.dataValues;
    const returnDate = dateReturn(element.deadlineForReturn);
    const duration = moment.duration(now.diff(returnDate));
    const delayedDays = Math.sign(duration._data.days);
    if (delayedDays === 1) {
      info.push({
        data: item,
        message: `The user ${item.lessor} delayed ${duration._data.days} days ${duration._data.hours} hours ${duration._data.minutes} minutes and ${duration._data.seconds} seconds or the delivery of the movie`
      })
    }
  });
  if (info.length > 0) {
    return {
      info: info
    };
  }
  return {
    status: 200,
    message: "User did not delay delivery"
  }
}

module.exports = {
  deadLineReturn,
  amountFunction,
  amountForRentalFunction,
  expiresFunction,
  expiresOneFunction
}