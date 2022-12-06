const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
// const db = require("./db");
const userController = require("./controllers/userController");

//app
const app = express();
app.use(bodyParser.json());

//static files
app.use("/assets", express.static(path.resolve(__dirname, "../client/assets")));
app.use("/js", express.static(path.resolve(__dirname, "../client/js")));

app.get("/", userController.dbCheck, (request, response) => {
  response
    .status(200)
    .sendFile(path.join(__dirname, "../client/assets/index.html"));
});

app.post("/create", userController.createAccount, userController.logInUser);
app.post("/verify", userController.logInUser);
app.post("/deposit", userController.deposit, userController.checkBalance);
app.post("/withdraw", userController.withdraw, userController.checkBalance);
app.listen(5000, () => {
  console.log("server started at 3000");
});

module.exports = app;
