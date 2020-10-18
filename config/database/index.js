const Sequelize = require('sequelize');
const { prod, test } = require('../configDatabase');
const db = process.env.NODE_ENV === 'prod' ? prod : test;

const Movie = require('../../src/api/models/MovieModel');
const Rental = require('../../src/api/models/RentalModel');

const connection = new Sequelize(db);

Movie.init(connection);
Rental.init(connection);
Rental.associate(connection.models);

module.exports = connection;