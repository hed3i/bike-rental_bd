/**
 * @swagger
 * tags:
 *   name: Stations
 *   description: Станции проката
 */

/**
 * @swagger
 * /api/stations:
 *   post:
 *     summary: Создать станцию
 *     tags: [Stations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *     responses:
 *       201:
 *         description: Станция создана
 */

/**
 * @swagger
 * /api/stations:
 *   get:
 *     summary: Получить все станции
 *     tags: [Stations]
 *     responses:
 *       200:
 *         description: Список станций
 */

/**
 * @swagger
 * /api/stations/{id}:
 *   get:
 *     summary: Получить станцию по ID
 *     tags: [Stations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Станция найдена
 */

/**
 * @swagger
 * /api/stations/{id}:
 *   put:
 *     summary: Обновить станцию
 *     tags: [Stations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Обновлено
 */

/**
 * @swagger
 * /api/stations/{id}:
 *   delete:
 *     summary: Удалить станцию
 *     tags: [Stations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Удалено
 */

module.exports = app => {
  const stations = require("../controllers/station.controller");
  app.post("/api/stations", stations.create);
  app.get("/api/stations", stations.findAll);
  app.get("/api/stations/:id", stations.findOne);
  app.put("/api/stations/:id", stations.update);
  app.delete("/api/stations/:id", stations.delete);
};