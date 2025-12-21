module.exports = (sequelize, Sequelize) => {
  const Station = sequelize.define("station", {
    location: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    workingHours: {
      type: Sequelize.STRING, 
    },
    managerName: {
      type: Sequelize.STRING
    }
  });

  return Station;
};