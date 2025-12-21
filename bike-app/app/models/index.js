const dbConfig = require("../config/db.config.js");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
    operatorsAliases: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Client = require("./client.model.js")(sequelize, Sequelize);
db.BikeType = require("./bike-type.model.js")(sequelize, Sequelize);
db.Bike = require("./bike.model.js")(sequelize, Sequelize);
db.Station = require("./station.model.js")(sequelize, Sequelize);
db.Rental = require("./rental.model.js")(sequelize, Sequelize);

db.Bike.belongsTo(db.Station, { as: "station", foreignKey: "stationId" });
db.Station.hasMany(db.Bike, { as: "bikes", foreignKey: "stationId" });

module.exports = db;