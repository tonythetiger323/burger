// Set up MySQL connection.
const mysql = require('mysql');
require('dotenv').config();

const sqlPw = process.env.SQL_PASSWORD;
let connection;

if (process.env.MYSQL_URL) {
  connection = mysql.createConnection(process.env.MYSQL_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: sqlPw,
    database: 'burgers_db'
  });
}
// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
