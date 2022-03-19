const mysql = require("mysql2");

module.exports = mysql.createConnection({
    host: "localhost",
    port: "3310",
    user: "newuser",
    password: "00000000",
    database: "farmAggregator"
})