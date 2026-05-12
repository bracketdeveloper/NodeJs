/* Task 1: Simple Hello World
Create a GET route that renders a basic EJS template. 
The template should display a static "Hello World" message.
Goal: Successfully configure the EJS view engine and 
establish the connection between a route and a template file. */
const express = require('express');
const app = express();
app.set('view engine', 'ejs')
app.get('/hello', (req, res) => {
  res.render('hello')
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});