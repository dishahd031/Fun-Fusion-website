const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "your_db_name"
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected 🐬");
});

module.exports = db;
