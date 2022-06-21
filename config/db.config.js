const dotenv = require('dotenv');
dotenv.config();
module.exports = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
    dialect: process.env.DB_DIALECT,
    port: parseInt(process.env.DB_PORT),
    pool: {
      max: parseInt(process.env.DB_POOL_MAX),
      min: parseInt(process.env.DB_POOL_MIN),
      acquire: parseInt(process.env.DB_POOL_ACQUIRE),
      idle: parseInt(process.env.DB_POOL_IDLE)
    },
 
  listPerPage: parseInt(process.env.DB_LIMIT_PER_PAGE)
};