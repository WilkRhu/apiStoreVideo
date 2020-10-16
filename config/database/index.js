const Sequelize = require('sequelize');
const dbConfig = require('../configDatabase');

const Move = require('../../src/api/models/MoveModel');

const connection = new Sequelize(dbConfig);

Move.init(connection);

module.exports = connection;