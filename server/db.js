const pg = require("pg"); // POSTGRES
const pgUrl =
  "postgres://roozknyn:0qhW3ZtZTHbFbg_QMq_ahtk4BBUV4I8j@peanut.db.elephantsql.com/roozknyn";
const pool = new pg.Pool({ connectionString: pgUrl });

//EXPORT QUERY FUNCTION THAT RETURNS A QUERY OF THE POOL
module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};
