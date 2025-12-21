module.exports = (db) => {
  db.BikeType.hasMany(db.Bike, { as: "bikesByType", foreignKey: "bikeTypeId" });
  db.Bike.belongsTo(db.BikeType, { as: "bikeType", foreignKey: "bikeTypeId" });

  db.Station.hasMany(db.Bike, { as: "bikesByStation", foreignKey: "stationId" });
  db.Bike.belongsTo(db.Station, { as: "station", foreignKey: "stationId" });

  db.Client.hasMany(db.Rental, { as: "rentals", foreignKey: "clientId" });
  db.Rental.belongsTo(db.Client, { as: "client", foreignKey: "clientId" });

  db.Bike.hasMany(db.Rental, { as: "rentalRecords", foreignKey: "bikeId" });
  db.Rental.belongsTo(db.Bike, { as: "bike", foreignKey: "bikeId" });
};