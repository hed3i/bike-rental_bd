module.exports = app => {
  const stations = require("../controllers/station.controller");
  app.post("/api/stations", stations.create);
  app.get("/api/stations", stations.findAll);
  app.get("/api/stations/:id", stations.findOne);
  app.put("/api/stations/:id", stations.update);
  app.delete("/api/stations/:id", stations.delete);
};