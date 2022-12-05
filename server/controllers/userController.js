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
    console.log(result);
    return response.status(202).json(result);
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

module.exports = userController;
