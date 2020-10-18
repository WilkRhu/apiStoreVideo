const Movie = require('../../models/MovieModel');
const {
  movieValidation,
  movieValidationUpdate
} = require('../validations/movieValidation');

const findAll = async (req, res) => {
  try {
    const movie = await Movie.findAll({});
    if(movie.length !== 0) {
      return res.status(200).json(movie);
    } 
    return res.status(404).json({
      error: "Moves not found on database"
    })
  } catch(err) {
    return res.status(400).json({
      error: err.message
    });
  }
}

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const moveId = await Movie.findOne({ where: { id }});
    if(moveId) {
      return res.status(200).json(moveId);
    }
    return res.status(404).json({
      error: "Movie not found in the database!"
    });
  } catch(err) {
    return res.status(400).json({
      error: err.message
    })
  }
}

const create = async (req, res) => {
  try {
    const move = req.body;
    const { error, value } = await movieValidation.validate(move);
    if(!error) {
      const createMove = await Movie.create(value);
      return res.status(201).json(createMove);
    }
    return res.status(400).json({
      error: error.message
    });
  } catch(err) {
    return res.status(400).json({
      error: err.message
    });
  }
}

const findUpdate  = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = req.body;
    
    const { error, value } = await movieValidationUpdate.validate(movie);
    if(!error) {
      await Movie.update(value, {where: { id }});
      const movieUpdate = await Movie.findOne({where: { id }});
      if(movieUpdate) {
        return res.status(201).json(movieUpdate);
      }
      return res.status(404).json({
        error: "Movie not found for update"
      });
    }
    return res.status(400).json({
      error: error.message
    });
  } catch(err) {
    return res.status(400).json({
      error: err.message
    })
  }
}

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteMove = await Movie.destroy({ where: {id: id} });
    if(deleteMove !== 0) {
      return res.status(200).json({
        message: "Movie successfully deleted!"
      });
    }
    return res.status(404).json({
      error: "Movie not found in the database, or already deleted!"
    })
  } catch(err) {
    return res.status(400).json({
      error: err.message
    })
  }
}

module.exports = {
  findAll,
  findById,
  create,
  findUpdate,
  destroy
}