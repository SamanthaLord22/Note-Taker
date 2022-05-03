//created server.js file
const express = require('express');
const htmlRoutes = require('./routes/html.js')

const app = express(); //added
const PORT = process.env.PORT || 3001;
app.use(express.static('public'));


// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// GET Route for homepage
 app.use('/', htmlRoutes)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
