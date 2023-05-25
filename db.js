const mysql = require('mysql2');

// Database configuration
const dbConfig = {
  host: 'localhost',
  user: 'test1',
  password: 'Anshul@123',
  database: 'Node',
};

// Create a connection pool
const pool = mysql.createPool(dbConfig);

// Get a connection from the pool
function getConnection() {
  return pool.promise();
}

// Export the connection function
module.exports = getConnection;

