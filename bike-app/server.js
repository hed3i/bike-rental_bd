require("dotenv").config();
const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Добро пожаловать на сайт проката велосипедов!" });
});

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Bike Rental API",
      version: "1.0.0",
      description: "REST API для системы проката велосипедов",
    },
    servers: [
      {
        url: `http://localhost:${process.env.NODE_DOCKER_PORT || 8080}`
      }
    ]
  },
  apis: ["./app/routes/*.js"] 
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const db = require("./app/models");
db.sequelize.sync({ alter: false })
  .then(() => console.log("База данных синхронизирована."))
  .catch(err => console.error("Ошибка синхронизации БД:", err));

require("./app/routes/client.routes")(app);
require("./app/routes/bike-type.routes")(app);
require("./app/routes/station.routes")(app);
require("./app/routes/bike.routes")(app);
require("./app/routes/rental.routes")(app);

const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});