const db = require("../db");

const userController = {};

userController.dbCheck = (request, response, next) => {
  const sqlQuery = `CREATE TABLE IF NOT EXISTS users (
        username VARCHAR(25) PRIMARY KEY,
        password VARCHAR(25) NOT NULL,
        name VARCHAR(25) NOT NULL
        ); `;
  //username, password and  EMAIL

  db.query(sqlQuery, (error, result) => {
    if (error) {
      return response.status(400).send("Error while creating user table");
    }
    next();
  });
};

module.exports = userController;
