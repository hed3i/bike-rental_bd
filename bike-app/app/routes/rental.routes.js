module.exports = app => {
  const rentals = require("../controllers/rental.controller");
  app.post("/api/rentals", rentals.create);
  app.get("/api/rentals", rentals.findAll);
  app.get("/api/rentals/:id", rentals.findOne);
  app.put("/api/rentals/:id", rentals.update);
  app.delete("/api/rentals/:id", rentals.delete);
};