const {Model, DataTypes} = require('sequelize');

class Moves extends Model {
  static init(connection) {
    super.init({
      titulo: DataTypes.STRING,
      sinopse: DataTypes.STRING,
      genero: DataTypes.STRING,
      dataNascimento: DataTypes.STRING,
      idioma: DataTypes.STRING,
      legendado: DataTypes.STRING,
      diretor: DataTypes.STRING,
      link_imdb: DataTypes.STRING,
      quantidade: DataTypes.INTEGER,
    }, {
      sequelize: connection
    })
  }
}

module.exports = Moves