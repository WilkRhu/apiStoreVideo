const Sequelize = require('sequelize');
const { prod, test } = require('../configDatabase');
const db = process.env.NODE_ENV === 'prod' ? prod : test;

const Movie = require('../../src/api/models/MovieModel');

const connection = new Sequelize(db);

Movie.init(connection);

module.exports = connection;