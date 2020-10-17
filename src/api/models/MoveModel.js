const {Model, DataTypes} = require('sequelize');

class Moves extends Model {
  static init(connection) {
    super.init({
      title: DataTypes.STRING,
      synopsis: DataTypes.TEXT,
      genre: DataTypes.STRING,
      releaseDate: DataTypes.STRING,
      language: DataTypes.STRING,
      subtitled: DataTypes.STRING,
      director: DataTypes.STRING,
      linkImb: DataTypes.STRING,
      amount: DataTypes.INTEGER,
    }, {
      sequelize: connection
    })
  }
}

module.exports = Moves