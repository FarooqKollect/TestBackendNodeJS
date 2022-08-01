 const Pool = require("pg").Pool;

 const pool = new Pool({
    user: "kollect",
    password: "kollect1234",
    host: "localhost",
    port: 5432,
    database:"api"
 });

 module.exports = pool;