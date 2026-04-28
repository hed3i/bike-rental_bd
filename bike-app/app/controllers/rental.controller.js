const db = require("../models");
const Rental = db.Rental;

exports.create = (req, res) => {
  Rental.create(req.body)
    .then(data => res.status(201).send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findAll = (req, res) => {
  Rental.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Rental.findByPk(id)
    .then(data => data ? res.send(data) : res.status(404).send({ message: "Аренда не найдена" }))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Rental.destroy({ where: { id } })
    .then(num => num ? res.send({ message: "Аренда удалена" }) : res.status(404).send({ message: "Аренда не найдена" }))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
  const Rental = req.db.rentals;
  Rental.update(req.body, { where: { id: req.params.id } })
    .then(num => num == 1 
      ? res.send({ message: "Обновлено" }) 
      : res.status(404).send({ message: "Не найдено" })
    )
    .catch(err => res.status(500).send({ message: err.message }));
};