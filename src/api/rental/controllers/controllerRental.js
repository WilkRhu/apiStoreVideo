const Movies = require('../../models/MovieModel');
const Rental = require('../../models/RentalModel');
const {
  returnObjectRental,
  returnObjectsRentals,
  returnContractRental
} = require('../utils/returnObjectRental');
const {
  deadLineReturn,
  amountFunction,
  expiresFunction,
  expiresOneFunction
} = require('../utils/logicFunctions');
const rentalValidation = require('../validations/rentalValidation');
const {
  formatDate
} = require('../utils/formatDate');


const getAllRental = async (req, res) => {
  try {
    const rentals = await Rental.findAll({});
    if (rentals.length !== 0) {
      const objects = returnObjectsRentals(rentals);
      return res.status(200).json(objects);
    }
    return res.status(404).json({
      error: "Rentals not found on database!"
    })
  } catch (err) {
    return res.status(400).json({
      error: err.message
    })
  }
};

const getExpireList = async (req, res) => {
  try {
    const rental = await Rental.findAll({});
    const expire = await expiresFunction(rental);
    return res.status(200).json(expire);
  } catch (err) {
    return res.status(400).json({
      error: err.message
    })
  }
}



const store = async (req, res) => {
  try {
    const rental = req.body;
    const movies = await Movies.findOne({
      where: {
        id: rental.moviesId
      }
    });
    if (movies) {
      const {date, error, message} = await deadLineReturn(movies.amount, rental.amount);
      if (date) {
        const contractRental = await returnObjectRental(rental, date);
        const amount = await amountFunction(movies, rental.amount);
        if (amount.status !== 400) {
          const { error, value } = await rentalValidation.validate(contractRental);
          if (!error) {
            const storeRental = await Rental.create(value);
            const newRental = returnContractRental(storeRental);
            return res.status(201).json(newRental);
          }
          return res.status(400).json({
            error: error.message
          });
        }
        return res.status(400).json({
          error: amount.error,
          available: amount.available
        });
      }
      return res.status(returnPeriod.status).json({
        error: error,
        message: message
      });
    }
    return res.status(404).json({
      error: "Movie Not Found!"
    })
  } catch (err) {
    return res.status(400).json({
      error: err.message
    })
  }
};

const devolveRental = async (req, res) => {
  try {
    const {
      id
    } = req.body;
    const rental = await Rental.findOne({
      where: {
        id
      }
    });
    const verifyDare = expiresOneFunction([rental]);
    if (verifyDare.status === 200) {
      const dateDevolve = await formatDate(new Date());
      await Rental.update({
        returnDate: dateDevolve
      }, {
        where: {
          id
        }
      });
      return res.status(201).json({
        data: {
          rental: rental,
          message: verifyDare.message
        }
      })
    }
    const dateDevolve = await formatDate(new Date());
    await Rental.update({
      returnDate: dateDevolve
    }, {
      where: {
        id
      }
    });
    return res.status(201).json(verifyDare);
  } catch (err) {
    return res.status(400).json({
      error: err.message
    })
  }
}


module.exports = {
  store,
  getAllRental,
  getExpireList,
  devolveRental
}