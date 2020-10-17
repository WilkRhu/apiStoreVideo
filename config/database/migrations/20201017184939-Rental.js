'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Rental', {
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
        type: Sequelize.DATE,
        default: new DATE()
      },
      deadlineForReturn: {
        type: Sequelize.STRING,
        allowNull: false
      },
      lessor: {
        type: Sequelize.STRING,
        allowNull: true
      },
      returnDate: {
        type: Sequelize.STRING,
        allowNull: true
      }

    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Rental')
  }
};
