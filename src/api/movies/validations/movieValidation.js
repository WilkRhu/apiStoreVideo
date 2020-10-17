const Joi = require('@hapi/joi');

const movieValidation = Joi.object({
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

const movieValidationUpdate = Joi.object({
  title: Joi.string().optional(),
  synopsis: Joi.string().optional(),
  genre: Joi.string().optional(),
  releaseDate: Joi.string().optional(),
  language: Joi.string().optional(),
  subtitled: Joi.string().optional(),
  director: Joi.string().optional(),
  linkImb: Joi.string().optional(),
  amount: Joi.number().optional(),
});

module.exports = {
  movieValidation,
  movieValidationUpdate
};