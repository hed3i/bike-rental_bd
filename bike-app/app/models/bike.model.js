module.exports = (sequelize, Sequelize) => {
  const Bike = sequelize.define("bike", {
    model: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.STRING,
      defaultValue: "доступен"
    },
    deposit: {
      type: Sequelize.DECIMAL(8, 2),
      allowNull: false
    }
  });

  return Bike;
};