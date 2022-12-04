const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
// const db = require("./db");
const userController = require("./controllers/userController");

//app
const app = express();

//static files
app.use("/assets", express.static(path.resolve(__dirname, "../client/assets")));
app.use("/js", express.static(path.resolve(__dirname, "../client/js")));

app.get("/", userController.dbCheck, (request, response) => {
  response
    .status(206)
    .sendFile(path.join(__dirname, "../client/assets/index.html"));
});

app.listen(3000, () => {
  console.log("server started at 3000");
});

module.exports = app;
