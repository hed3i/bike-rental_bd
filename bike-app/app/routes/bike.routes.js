/**
 * @swagger
 * tags:
 *   name: Bikes
 *   description: Велосипеды
 */

/**
 * @swagger
 * /api/bikes:
 *   post:
 *     summary: Добавить велосипед
 *     tags: [Bikes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [model, bike_type_id, station_id]
 *             properties:
 *               model:
 *                 type: string
 *                 example: "Trek Marlin 7"
 *               bike_type_id:
 *                 type: integer
 *                 example: 1
 *               station_id:
 *                 type: integer
 *                 example: 1
 *               is_available:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Велосипед добавлен
 */

/**
 * @swagger
 * /api/bikes:
 *   get:
 *     summary: Получить все велосипеды
 *     tags: [Bikes]
 *     responses:
 *       200:
 *         description: Список велосипедов
 */

/**
 * @swagger
 * /api/bikes/{id}:
 *   get:
 *     summary: Получить велосипед по ID
 *     tags: [Bikes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Велосипед найден
 */

/**
 * @swagger
 * /api/bikes/{id}:
 *   put:
 *     summary: Обновить велосипед
 *     tags: [Bikes]
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
 * /api/bikes/{id}:
 *   delete:
 *     summary: Удалить велосипед
 *     tags: [Bikes]
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
  const bikes = require("../controllers/bike.controller");
  app.post("/api/bikes", bikes.create);
  app.get("/api/bikes", bikes.findAll);
  app.get("/api/bikes/:id", bikes.findOne);
  app.put("/api/bikes/:id", bikes.update);
  app.delete("/api/bikes/:id", bikes.delete);
};