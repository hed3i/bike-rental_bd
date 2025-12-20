module.exports = (sequelize, Sequelize) => {
  const Author = sequelize.define("author", {
    fullName: {
      type: Sequelize.STRING,
      allowNull: false
    },
    birthYear: {
      type: Sequelize.INTEGER
    }
  });
  return Author;
};