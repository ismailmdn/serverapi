// app.js
const express = require('express');
const app = express();
const port = 3000;


const koraRoutes = require('./koraRoutes');


app.use(express.json());

app.use('/koraApp', koraRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
