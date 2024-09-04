
const express = require('express');
const app = express();
const PORT = 3000;
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/about', (req, res) => {
  res.send('This is the about page.');
});


app.get('/contact', (req, res) => {
  res.send('This is the contact page.');
});


app.get('/user/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}!`);
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});







