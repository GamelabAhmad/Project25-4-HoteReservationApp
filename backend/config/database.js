const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Create a Sequelize instance
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
);

module.exports = { sequelize };
