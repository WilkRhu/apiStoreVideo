'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Moves', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sinopse: {
        type: Sequelize.TEXT,
        allowNull: false,
      },

      genero: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      dataLancamento: {
        type: Sequelize.STRING,
        allowNull: true,
      },

      idioma: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      legendado: {
        type: Sequelize.STRING,
        allowNull: false
      },
      diretor: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      link_imdb: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    return queryInterface.dropTable('Moves');
  }
};
