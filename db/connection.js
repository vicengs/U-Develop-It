const mysql = require('mysql2');
// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      user: 'vicente',
      // Your MySQL password
      password: 'Bootcamp',
      database: 'election'
    },
    console.log('Connected to the election database.')
);
module.exports = db;