/* Task 6: Create a reusable header using EJS partials 
Route: GET /home GET /about 
Server logic: Send { title } depending on route 
Template logic: Create header.ejs partial Include it using 
<%- include('partials/header') %> Show dynamic title 
Goal: Learn reusable layout components */
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.get('/home', (req, res) => {
  res.render('home',{title:'Home'})
});
app.get('/about', (req, res) => {
   res.render('about',{title:'About'});
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});