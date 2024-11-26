// app.js
const express = require('express');
const app = express();
const port = 3000;

// Import the Kora routes
const koraRoutes = require('./Routes/koraRoutes');
const FileManagerRoutes = require('./Routes/FileManagerRoutes');
const movie = require('./Routes/movies');
// Middleware to parse JSON
app.use(express.json());

// Use the Kora App routes
app.use('/koraApp', koraRoutes);
app.use('/FileManagerApp', FileManagerRoutes);
app.use('/movies', movies);

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
