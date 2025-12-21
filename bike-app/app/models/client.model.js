module.exports = (sequelize, Sequelize) => {
  const Client = sequelize.define("client", {
    fullName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true
    },
    phone: {
      type: Sequelize.STRING
    },
    registrationDate: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });

  return Client;
};