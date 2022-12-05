const db = require("../db");

const userController = {};

userController.dbCheck = (request, response, next) => {
  const sqlQuery = `CREATE TABLE IF NOT EXISTS users (
        email VARCHAR(25) PRIMARY KEY,
        password VARCHAR(25) NOT NULL,
        balance INTEGER DEFAULT 100
        ); `;
  //username, password and  EMAIL

  db.query(sqlQuery, (error, result) => {
    if (error) {
      return response.status(400).send("Error while creating user table");
    }
    next();
  });
};

userController.createAccount = (request, response, next) => {
  const { email, password } = request.body;
  if (!email || !password)
    return response
      .status(400)
      .send("Must enter valid email & password. no blanks!");
  const sqlQuery = "INSERT INTO users (email, password) VALUES ($1, $2);";

  db.query(sqlQuery, [email, password], (error, result) => {
    if (error) {
      return response.status(400).send("Error while creating new user");
    }
    next();
  });
};

userController.logInUser = (request, response, next) => {
  const { email, password } = request.body;
  if (!email || !password)
    return response.status(400).send("Must enter valid email & password");
  const sqlQuery = "SELECT * FROM users WHERE email = $1 AND password = $2;";

  db.query(sqlQuery, [email, password], (error, result) => {
    if (error) {
      return response.status(400).send("Error while logging in");
    }
    console.log(result);
    return response.status(202).json(result.rows[0]);
  });
};

userController.checkBalance = (request, response, next) => {
  const { email } = request.body;
  if (!email) return response.status(400).send("Must enter valid amount");
  const sqlQuery = "SELECT balance FROM users WHERE email = $1;";

  db.query(sqlQuery, [email], (error, result) => {
    if (error) {
      return response.status(400).send("transaction not successful");
    }
    console.log(result);
    return response.status(202).json(result.rows[0]);
  });
};

userController.deposit = (request, response, next) => {
  const { amount, balance, email } = request.body;
  if (!amount || !balance || !email)
    return response.status(400).send("must enter valid data");
  const sqlQuery = "UPDATE users SET balance = $1 WHERE email = $2;";
  const sum = Number(amount) + Number(balance);

  db.query(sqlQuery, [sum, email], (error, result) => {
    if (error) {
      return response.status(400).send("not valid number");
    }
    next();
  });
};

userController.withdraw = (request, response, next) => {
  const { amount, balance, email } = request.body;
  if (!amount || !balance || !email)
    return response.status(400).send("must enter valid data");
  const sqlQuery = "UPDATE users SET balance = $1 WHERE email = $2;";
  const sum = Number(balance) - Number(amount);

  db.query(sqlQuery, [sum, email], (error, result) => {
    if (error) {
      return response.status(400).send("not valid number");
    }
    next();
  });
};

module.exports = userController;
