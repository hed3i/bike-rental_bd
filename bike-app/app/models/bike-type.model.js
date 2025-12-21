module.exports = (sequelize, Sequelize) => {
  const BikeType = sequelize.define("bikeType", {
    typeName: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    hourlyRate: {
      type: Sequelize.DECIMAL(8, 2),
      allowNull: false
    }
  });

  return BikeType;
};