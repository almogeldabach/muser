// get the client
const mysql = require('mysql2');
vvvvvvvvvvvv
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'test'
});