const Movies = require("../../models/MovieModel");
const {
  formatDate,
  dateReturn
} = require("./formatDate");
const moment = require('moment');

const deadLineReturn = (movieAmount, rentalAmount) => {
  if (movieAmount >= 1) {
    const date = new Date();
    const currentDate = new Date();
    const amountForRental = amountForRentalFunction(rentalAmount);
    const newDate = currentDate.setDate(date.getDate() + amountForRental);
    const DeadDate = formatDate(newDate);
    if (DeadDate) {
      return DeadDate;
    }
    return false
  }
  return "You have exceeded the number of films available"

};

/* const deadLineReturn = (amount) => {
  return amountForRentalFunction(amount);
}; */

const amountFunction = async (movies, amountRental) => {
  if (movies.amount >= 1 && amountRental <= movies.amount) {
    const amountMoveCurrent = movies.amount;
    const updateAmount = amountMoveCurrent - amountRental;
    const upTableMovie = await Movies.update({
      amount: updateAmount
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
  if (rentalAmount == 1) {
    return 1
  } else if (rentalAmount <= 5) {
    return 3
  } else if (rentalAmount <= 9) {
    return 5
  } else if (rentalAmount > 9) {
    return 10
  }
};

const expiresFunction = (data) => {
  const now = moment(new Date());
  const info = [];
  for (let i = 0; i < data.length; i++) {
    const element = data[i].dataValues;
    const returnDate = dateReturn(element.deadlineForReturn);
    const duration = moment.duration(now.diff(returnDate));
    const delayedDays = Math.sign(duration._data.days);
    if (delayedDays === 1) {
      info.push({
        data: data[i],
        message: `The user ${data[i].lessor} delayed ${duration._data.days} days ${duration._data.hours} hours ${duration._data.minutes} minutes and ${duration._data.seconds} seconds or the delivery of the movie`
      })
    }
  }
  if(info.length !== 0) {
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
  if(info.length > 0) {
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