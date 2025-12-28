const db = require("../models");
const Client = db.Client;

exports.create = (req, res) => {
  Client.create(req.body)
    .then(data => res.status(201).send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findAll = (req, res) => {
  Client.findAll()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.findOne = (req, res) => {
  const id = req.params.id;
  Client.findByPk(id)
    .then(data => data ? res.send(data) : res.status(404).send({ message: "Клиент не найден" }))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.update = (req, res) => {
  const id = req.params.id;
  Client.update(req.body, { where: { id } })
    .then(num => num[0] ? res.send({ message: "Клиент обновлён" }) : res.status(404).send({ message: "Клиент не найден" }))
    .catch(err => res.status(500).send({ message: err.message }));
};

exports.delete = (req, res) => {
  const id = req.params.id;
  Client.destroy({ where: { id } })
    .then(num => num ? res.send({ message: "Клиент удалён" }) : res.status(404).send({ message: "Клиент не найден" }))
    .catch(err => res.status(500).send({ message: err.message }));
};