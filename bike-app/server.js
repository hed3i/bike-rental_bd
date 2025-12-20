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
db.sequelize.sync()
  .then(() => console.log("База данных синхронизирована."))
  .catch(err => console.log("Ошибка синхронизации БД:", err.message));

const PORT = process.env.NODE_DOCKER_PORT || 8080;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});