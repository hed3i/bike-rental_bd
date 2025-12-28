module.exports = app => {
  const bikes = require("../controllers/bike.controller");
  app.post("/api/bikes", bikes.create);
  app.get("/api/bikes", bikes.findAll);
  app.get("/api/bikes/:id", bikes.findOne);
  app.put("/api/bikes/:id", bikes.update);
  app.delete("/api/bikes/:id", bikes.delete);
};