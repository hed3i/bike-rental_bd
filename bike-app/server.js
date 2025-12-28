require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Добро пожаловать на сайт проката велосипедов!" });
});

const db = require("./app/models");
db.sequelize.sync({ force: true })
  .then(() => {
    console.log("База данных синхронизирована. Все таблицы созданы!");
  })
  .catch(err => {
    console.error("Ошибка синхронизации БД:");
    console.error(err);
  });


require("./app/routes/client.routes")(app);
require("./app/routes/bike-type.routes")(app);
require("./app/routes/station.routes")(app);
require("./app/routes/bike.routes")(app);
require("./app/routes/rental.routes")(app);


const PORT = process.env.NODE_DOCKER_PORT || 8080;

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});