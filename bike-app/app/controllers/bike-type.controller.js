const db = require("../models");
const BikeType = db.BikeType;

exports.create = (req, res) => {
  BikeType.create(req.body)
    .then(data => res.status(201).send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findAll = (req, res) => {
  BikeType.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  BikeType.findByPk(id)
    .then(data => data ? res.send(data) : res.status(404).send({ message: "Тип не найден" }))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
  const id = req.params.id;
  BikeType.update(req.body, { where: { id } })
    .then(num => num[0] ? res.send({ message: "Тип обновлён" }) : res.status(404).send({ message: "Тип не найден" }))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  const id = req.params.id;
  BikeType.destroy({ where: { id } })
    .then(num => num ? res.send({ message: "Тип удалён" }) : res.status(404).send({ message: "Тип не найден" }))
    .catch(err => res.status(500).send({ message: err.message }));
};