const Move = require('../../models/MoveModel');
const moveValidation = require('../validations/moveValidation');

const findAll = async (req, res) => {
  try {
    const move = await Move.findAll({});
    return res.status(200).json(move);
  } catch(err) {
    return res.status(400).json({
      error: err.message
    });
  }
}

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const moveId = await Move.findOne({ where: { id }});
    if(moveId) {
      return res.status(200).json(moveId);
    }
    return res.status(404).json({
      error: "Filme não encontrado na base de dados!"
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
    const { error, value } = await moveValidation.validate(move);
    if(!error) {
      const createMove = await Move.create(value);
      return res.status(201).json(createMove);
    }
    return res.status(400).json({
      error: error.message
    })
  } catch(err) {
    return res.status(400).json({
      error: err.message
    })
  }
}

const findUpdate  = async (req, res) => {
  try {
    const { id } = req.params;
    const move = req.body;
     await Move.update(move, {where: { id }});
     const moveUpdate = await Move.findOne({where: { id }});
     if(moveUpdate) {
       return res.status(201).json(moveUpdate);
     }
     return res.status(404).json({
       error: "Filme não encontrado para atualização"
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
    const deleteMove = await Move.destroy({ where: {id: id} });
    if(deleteMove !== 0) {
      return res.status(200).json({
        message: "Filme deletado com sucesso!"
      });
    }
    return res.status(404).json({
      error: "Filme não encontrado na base de dados, ou já deletado!"
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