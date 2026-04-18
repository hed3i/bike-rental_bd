/**
 * @swagger
 * tags:
 *   name: Clients
 *   description: Клиенты проката
 */

/**
 * @swagger
 * /api/clients:
 *   post:
 *     summary: Зарегистрировать клиента
 *     tags: [Clients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, phone]
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Иван Петров"
 *               phone:
 *                 type: string
 *                 example: "+79991234567"
 *     responses:
 *       201:
 *         description: Клиент зарегистрирован
 */

/**
 * @swagger
 * /api/clients:
 *   get:
 *     summary: Получить всех клиентов
 *     tags: [Clients]
 *     responses:
 *       200:
 *         description: Список клиентов
 */

/**
 * @swagger
 * /api/clients/{id}:
 *   get:
 *     summary: Получить клиента по ID
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Клиент найден
 */

/**
 * @swagger
 * /api/clients/{id}/rentals:
 *   get:
 *     summary: Получить аренды клиента
 *     tags: [Clients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Список аренд
 */

/**
 * @swagger
 * /api/clients/spent:
 *   get:
 *     summary: Общая сумма расходов клиентов
 *     tags: [Clients]
 *     responses:
 *       200:
 *         description: Сумма расходов
 */

/**
 * @swagger
 * /api/clients/no-rentals:
 *   get:
 *     summary: Клиенты без аренд
 *     tags: [Clients]
 *     responses:
 *       200:
 *         description: Список клиентов
 */

/**
 * @swagger
 * /api/clients/top:
 *   get:
 *     summary: Топ клиентов по арендам
 *     tags: [Clients]
 *     responses:
 *       200:
 *         description: Топ клиентов
 */

/**
 * @swagger
 * /api/clients/revenue:
 *   get:
 *     summary: Выручка по периоду
 *     tags: [Clients]
 *     parameters:
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *     responses:
 *       200:
 *         description: Выручка за период
 */

/**
 * @swagger
 * /api/clients/{id}:
 *   put:
 *     summary: Обновить клиента
 *     tags: [Clients]
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
 * /api/clients/{id}:
 *   delete:
 *     summary: Удалить клиента
 *     tags: [Clients]
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
  const clients = require("../controllers/client.controller");
  app.post("/api/clients", clients.create);
  app.get("/api/clients", clients.findAll);
  app.get("/api/clients/:id", clients.findOne);
  app.get("/api/clients/:id/rentals", clients.getClientRentals);
  app.get("/api/clients/spent", clients.getClientTotalSpent);
  app.get("/api/clients/no-rentals", clients.getClientsWithoutRentals);
  app.get("/api/clients/top", clients.getTopRentalClients);
  app.get("/api/clients/revenue", clients.getRevenueByDateRange);
  app.put("/api/clients/:id", clients.update);
  app.delete("/api/clients/:id", clients.delete);
};