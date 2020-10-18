'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Rentals', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      moviesId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Movies",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      amount: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      rentalDate: {
        type: Sequelize.STRING,
        allowNull: false
      },
      deadlineForReturn: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lessor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      returnDate: {
        type: Sequelize.STRING,
        allowNull: true
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Rentals')
  }
};
