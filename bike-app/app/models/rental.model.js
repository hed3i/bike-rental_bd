module.exports = (sequelize, Sequelize) => {
  const Rental = sequelize.define("rental", {
    startTime: {
      type: Sequelize.DATE,
      allowNull: false
    },
    endTime: {
      type: Sequelize.DATE
    },
    totalCost: {
      type: Sequelize.DECIMAL(8, 2)
    }
  });

  return Rental;
};