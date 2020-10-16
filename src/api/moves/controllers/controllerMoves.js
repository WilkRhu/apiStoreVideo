const Move = require('../../models/MoveModel');

const create = async (req, res) => {
  try {
    const move = req.body;
    const createMove = await Move.create(move);
    if(createMove) {
      return res.status(201).json(createMove);
    }
    return res.status(400).json("error")
  } catch(err) {
    return res.status(400).json({
      error: err.message
    })
  }
}

module.exports = {
  create
}