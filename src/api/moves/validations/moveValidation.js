const Joi = require('@hapi/joi');

const moveValidation = Joi.object({
  title: Joi.string().required(),
  synopsis: Joi.string().required(),
  genre: Joi.string().required(),
  releaseDate: Joi.string().optional(),
  language: Joi.string().required(),
  subtitled: Joi.string().required(),
  director: Joi.string().optional(),
  linkImb: Joi.string().optional(),
  amount: Joi.number().required(),
});

module.exports = moveValidation;