/**
 * @swagger
 * tags:
 *   name: Rentals
 *   description: Аренды велосипедов
 */

/**
 * @swagger
 * /api/rentals:
 *   post:
 *     summary: Оформить аренду
 *     tags: [Rentals]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [client_id, bike_id, rental_date]
 *             properties:
 *               client_id:
 *                 type: integer
 *               bike_id:
 *                 type: integer
 *               rental_date:
 *                 type: string
 *                 format: date-time
 *     responses:
 *       201:
 *         description: Аренда оформлена
 */

/**
 * @swagger
 * /api/rentals:
 *   get:
 *     summary: Получить все аренды
 *     tags: [Rentals]
 *     responses:
 *       200:
 *         description: Список аренд
 */

/**
 * @swagger
 * /api/rentals/{id}:
 *   get:
 *     summary: Получить аренду по ID
 *     tags: [Rentals]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Аренда найдена
 */

/**
 * @swagger
 * /api/rentals/{id}:
 *   put:
 *     summary: Обновить аренду
 *     tags: [Rentals]
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
 * /api/rentals/{id}:
 *   delete:
 *     summary: Удалить аренду
 *     tags: [Rentals]
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
  const rentals = require("../controllers/rental.controller");
  app.post("/api/rentals", rentals.create);
  app.get("/api/rentals", rentals.findAll);
  app.get("/api/rentals/:id", rentals.findOne);
  app.put("/api/rentals/:id", rentals.update);
  app.delete("/api/rentals/:id", rentals.delete);
};