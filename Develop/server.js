//created server.js file
const express = require('express');
const fs = require('fs');

const app = express(); //added
const PORT = 3001;
app.use(express.static('public'));

// Import custom middleware
//app.use(middleWare);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);


// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);

// Wildcard route to direct users to a 404 page
// app.get('*', (req, res) =>
//   res.sendFile(path.join(__dirname, 'public/pages/404.html'))
// );

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
