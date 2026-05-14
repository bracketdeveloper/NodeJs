/* Task 1: Build a simple form page that takes a username 
and shows it back on a result page. 
Routes: GET /form POST /submit 
Server logic (JS → EJS): GET /form sends no data POST /submit reads 
req.body.username Pass { username } to EJS result page 
Template logic (EJS): Create a form with method POST and action /submit 
Show submitted username using <%= username %> 
Goal: Understand basic form :submission and reading POST data */
const express = require('express');
const app = express();
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.get('/form', (req, res) => {
  res.render('form',{username:null})
});
app.post('/submit', (req, res) => {
    const username = req.body.username
    res.render('form', {username})
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});