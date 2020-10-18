const Joi = require('@hapi/joi');

const rentalValidation = Joi.object({
  moviesId: Joi.number().required(),
  amount: Joi.number().required(),
  deadlineForReturn: Joi.string().required(),
  lessor: Joi.string().required(),
  returnDate: Joi.string().optional(),
});

module.exports = rentalValidation;