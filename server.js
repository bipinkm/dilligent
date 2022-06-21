const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const errorHandler = require("./_helpers/error-handler");
const apiRoutes = require("./config/api-routes");
const db = require("./_helpers/db");
const { endpoint, env, port } = require("./config/app.config");

const app = express();

//Static folder
app.use('/public',express.static(__dirname + "/public"));

app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ limit: "500mb", extended: true }));
//create a cors middleware
app.use(function (req, res, next) {
  //set headers to allow cross origin request.
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, Authorization, X-Requested-With, Content-Type, Accept, x-access-token, skipauthtoken"
  );
  next();
});

db.sequelize.sync();

// Send message for default URL
app.get("/", (req, res) =>
  res.send("Hello Diligent Server is up and running...")
);

// Use Api routes in the App
app.use(endpoint, apiRoutes);

// global error handler
app.use(errorHandler);

// Launch app to listen to specified port
app.listen(port, function () {
  console.log("******************************************************");
  console.log("Diligent SERVER STARTED");
  console.log("Environment: " + env);
  console.log("Port: " + port);
  console.log("******************************************************");
});
