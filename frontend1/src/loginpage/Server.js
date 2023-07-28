const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(cors());

// Database connection setup (change the database credentials as per your setup)
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'hualian800',
  database: 'NewsApplication',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database!');
});

// API endpoint to handle user signup
app.post('/api/signup', (req, res) => {
  const { firstName, lastName, email, mobileNumber, password } = req.body;

  // Insert user data into the database
  const sql = 'INSERT INTO users (firstName, lastName, email, mobileNumber, password) VALUES (?, ?, ?, ?, ?)';
  db.query(sql, [firstName, lastName, email, mobileNumber, password], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Internal server error' });
      return;
    }

    console.log('User data inserted:', result);
    res.json({ success: true });
  });
});

// Start the server on a specified port
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
