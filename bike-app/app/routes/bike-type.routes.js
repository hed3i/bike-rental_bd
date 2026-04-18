/**
 * @swagger
 * tags:
 *   name: Bike Types
 *   description: Типы велосипедов
 */

/**
 * @swagger
 * /api/bike-types:
 *   post:
 *     summary: Создать новый тип велосипеда
 *     tags: [Bike Types]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name]
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Горный"
 *               description:
 *                 type: string
 *                 example: "Велосипеды для бездорожья"
 *     responses:
 *       201:
 *         description: Тип создан успешно
 *       400:
 *         description: Ошибка валидации
 */

/**
 * @swagger
 * /api/bike-types:
 *   get:
 *     summary: Получить все типы велосипедов
 *     tags: [Bike Types]
 *     responses:
 *       200:
 *         description: Список типов
 */

/**
 * @swagger
 * /api/bike-types/{id}:
 *   get:
 *     summary: Получить тип по ID
 *     tags: [Bike Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Тип найден
 *       404:
 *         description: Не найдено
 */

/**
 * @swagger
 * /api/bike-types/{id}:
 *   put:
 *     summary: Обновить тип велосипеда
 *     tags: [Bike Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Обновлено
 *       404:
 *         description: Не найдено
 */

/**
 * @swagger
 * /api/bike-types/{id}:
 *   delete:
 *     summary: Удалить тип велосипеда
 *     tags: [Bike Types]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Удалено
 *       404:
 *         description: Не найдено
 */

module.exports = app => {
  const types = require("../controllers/bike-type.controller");
  app.post("/api/bike-types", types.create);
  app.get("/api/bike-types", types.findAll);
  app.get("/api/bike-types/:id", types.findOne);
  app.put("/api/bike-types/:id", types.update);
  app.delete("/api/bike-types/:id", types.delete);
};