module.exports = {
  HOST: process.env.DB_HOST || "localhost",
  USER: process.env.DB_USER || "bike_user",
  PASSWORD: process.env.DB_PASSWORD || "123",
  DB: process.env.DB_NAME || "bike-rental_db",
  PORT: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};