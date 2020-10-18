const { Model, DataTypes } = require('sequelize');
const {formatDate} = require('../rental/utils/formatDate');
class Rentals extends Model {
  static init(connection) {
    super.init({
      moviesId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Movies",
          key: "id"
        }
      },
      amount: DataTypes.INTEGER,
      rentalDate: DataTypes.STRING,
      deadlineForReturn: DataTypes.STRING,
      lessor: DataTypes.STRING,
      returnDate: DataTypes.STRING
    }, {
      sequelize: connection,
      modelName: "Rentals"
    })
    Rentals.beforeCreate(async (rentals) => {
        const dateRental = await formatDate(new Date());
        return rentals.rentalDate = dateRental;
    });
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
