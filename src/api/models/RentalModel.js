const { Model, DataTypes } = require('sequelize');

class Rentals extends Model {
  static init(connection) {
    super.init({
      moviesId: DataTypes.INTEGER,
      amount: DataTypes.INTEGER,
      rentalDate: DataTypes.DATE,
      deadlineForReturn: DataTypes.STRING,
      lessor: DataTypes.STRING,
      returnDate: DataTypes.STRING
    }, {
      sequelize: connection,
      modelName: "Rentals"
    })
  }
  static associate(models) {
    this.belongsTo(models.Movies, {
      foreignKey: "moviesId",
      onDelete: "cascade",
      onUpdate: "cascade",
    });
  }
}

module.exports = Rentals;
