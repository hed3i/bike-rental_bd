const db = require("../models");
const Station = db.Station;

exports.create = (req, res) => {
  Station.create(req.body)
    .then(data => res.status(201).send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findAll = (req, res) => {
  Station.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Station.findByPk(id)
    .then(data => data ? res.send(data) : res.status(404).send({ message: "Пункт не найден" }))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
  const id = req.params.id;
  Station.update(req.body, { where: { id } })
    .then(num => num[0] ? res.send({ message: "Пункт обновлён" }) : res.status(404).send({ message: "Пункт не найден" }))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Station.destroy({ where: { id } })
    .then(num => num ? res.send({ message: "Пункт удалён" }) : res.status(404).send({ message: "Пункт не найден" }))
    .catch(err => res.status(500).send({ message: err.message }));
};