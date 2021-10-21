const {Client} = require("pg");
const db = require("./db");
console.log(db.env.password);

const client = new Client({
    host: "localhost",
    user: db.env.user,
    port: 5432,
    password:db.env.password,
    database: "postgres"
})

module.exports = client;