const Joi = require('@hapi/joi');

const moveValidation = Joi.object({
  titulo: Joi.string().required(),
  sinopse: Joi.string().required(),
  genero: Joi.string().required(),
  dataNascimento: Joi.string().optional(),
  idioma: Joi.string().required(),
  legendado: Joi.string().required(),
  diretor: Joi.string().optional(),
  link_imdb: Joi.string().optional(),
  quantidade: Joi.number().required(),
});

module.exports = moveValidation;