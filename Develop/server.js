//created server.js file
const express = require('express');
const htmlRoutes = require('./routes/html.js')
const api = require("./routes/api")
const app = express(); //added
const PORT = process.env.PORT || 3001;



// Middleware for parsing JSON and urlencoded form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// GET Route for homepage
 app.use(htmlRoutes)
 app.use(api)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
