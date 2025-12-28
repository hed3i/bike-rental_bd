const db = require("../models");
const Bike = db.Bike;

exports.create = (req, res) => {
  Bike.create(req.body)
    .then(data => res.status(201).send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findAll = (req, res) => {
  Bike.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Bike.findByPk(id)
    .then(data => data ? res.send(data) : res.status(404).send({ message: "Велосипед не найден" }))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
  const id = req.params.id;
  Bike.update(req.body, { where: { id } })
    .then(num => num[0] ? res.send({ message: "Велосипед обновлён" }) : res.status(404).send({ message: "Велосипед не найден" }))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Bike.destroy({ where: { id } })
    .then(num => num ? res.send({ message: "Велосипед удалён" }) : res.status(404).send({ message: "Велосипед не найден" }))
    .catch(err => res.status(500).send({ message: err.message }));
};