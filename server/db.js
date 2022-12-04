const pg = require("pg"); // POSTGRES
require("dotenv").config();
const pgUrl = process.env.PG_URL;
console.log("pgurl", pgUrl);
const pool = new pg.Pool({ connectionString: pgUrl });

//EXPORT QUERY FUNCTION THAT RETURNS A QUERY OF THE POOL
module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};
