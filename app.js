
const express = require('express');
const connectToDatabase = require('./db');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Define other routes as needed
app.get('/users', (req, res) => {
  res.send('List of users');
});

app.post('/users', (req, res) => {
  res.send('Create a new user');
});

// Establish the database connection
const dbConnection = connectToDatabase();

// Use the dbConnection object to perform database operations

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
