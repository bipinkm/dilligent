const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  endpoint: process.env.API_URL,
  port: process.env.PORT,
  env:process.env.NODE_ENV,
  dbconnection:process.env.DB_URI,
};
