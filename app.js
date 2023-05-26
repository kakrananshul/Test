
const express = require('express');
const connectToDatabase = require('./db');
const multerConfig = require('./multer'); 
const app = express();

app.use(multerConfig.upload.single('file'));
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
const multer = require('multer');

// Use the dbConnection object to perform database operations

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
