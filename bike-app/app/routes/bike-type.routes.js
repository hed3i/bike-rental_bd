module.exports = app => {
  const types = require("../controllers/bike-type.controller");
  app.post("/api/bike-types", types.create);
  app.get("/api/bike-types", types.findAll);
  app.get("/api/bike-types/:id", types.findOne);
  app.put("/api/bike-types/:id", types.update);
  app.delete("/api/bike-types/:id", types.delete);
};