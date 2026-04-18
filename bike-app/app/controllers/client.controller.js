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


const { QueryTypes } = require("sequelize");

exports.getClientRentals = async (req, res) => {
  try {
    const clientId = req.params.id;
    const rentals = await db.sequelize.query(
      `SELECT
         c.full_name,
         c.email,
         b.model AS bike_model,
         bt.type_name,
         s.location AS station,
         r.start_time,
         r.end_time
       FROM rentals r
       JOIN clients c ON r.client_id = c.id
       JOIN bikes b ON r.bike_id = b.id
       JOIN bike_types bt ON b.bike_type_id = bt.id
       JOIN stations s ON b.station_id = s.id
       WHERE c.id = ?
      `,
      {
        replacements: [clientId],
        type: QueryTypes.SELECT
      }
    );
    res.send(rentals);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};


exports.getClientTotalSpent = async (req, res) => {
  try {
    const data = await db.sequelize.query(
      `SELECT
        c.full_name AS "clientName",
        c.email,
        COALESCE(SUM(r.total_cost), 0) AS "totalSpent"
      FROM clients c
      LEFT JOIN rentals r ON c.id = r.client_id
      GROUP BY c.id, c.full_name, c.email
      ORDER BY "totalSpent" DESC`,
      { type: QueryTypes.SELECT }
    );
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};


exports.getClientsWithoutRentals = async (req, res) => {
  try {
    const data = await db.sequelize.query(
      `SELECT
        c.id,
        c.full_name AS "clientName",
        c.email,
        c.registration_date AS "registrationDate"
      FROM clients c
      LEFT JOIN rentals r ON c.id = r.client_id
      WHERE r.id IS NULL`,
      { type: QueryTypes.SELECT }
    );
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};


exports.getTopRentalClients = async (req, res) => {
  try {
    const data = await db.sequelize.query(
      `SELECT
        c.full_name AS "clientName",
        c.email,
        COUNT(r.id) AS "rentalCount"
      FROM clients c
      JOIN rentals r ON c.id = r.client_id
      GROUP BY c.id, c.full_name, c.email
      ORDER BY "rentalCount" DESC
      LIMIT 3`,
      { type: QueryTypes.SELECT }
    );
    res.send(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};


exports.getRevenueByDateRange = async (req, res) => {
  try {
    const { start, end } = req.query;
    if (!start || !end) {
      return res.status(400).send({ message: "Укажите start и end в формате YYYY-MM-DD" });
    }

    const data = await db.sequelize.query(
      `SELECT
        SUM(r.total_cost) AS "totalRevenue",
        COUNT(r.id) AS "totalRentals"
      FROM rentals r
      WHERE r.start_time >= :start AND r.start_time <= :end`,
      {
        replacements: { start, end },
        type: QueryTypes.SELECT
      }
    );
    res.send(data[0]);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};


module.exports = exports;