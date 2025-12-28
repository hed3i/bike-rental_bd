module.exports = app => {
  const clients = require("../controllers/client.controller");
  app.post("/api/clients", clients.create);
  app.get("/api/clients", clients.findAll);
  app.get("/api/clients/:id", clients.findOne);
  app.put("/api/clients/:id", clients.update);
  app.delete("/api/clients/:id", clients.delete);
};