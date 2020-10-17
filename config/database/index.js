const Sequelize = require('sequelize');
const { prod, test } = require('../configDatabase');
const db = process.env.NODE_ENV === 'prod' ? prod : test;

const Move = require('../../src/api/models/MoveModel');

const connection = new Sequelize(db);

Move.init(connection);

module.exports = connection;