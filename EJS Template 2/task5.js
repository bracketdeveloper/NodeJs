/* Task 5: Enable URL encoded middleware for form handling 
Route: GET /register POST /register 
Server logic: Use express.urlencoded({ extended: true }) Extract 
req.body.username, req.body.email Send data to EJS 
Template logic: Create registration form Display submitted user info 
Goal Understand: express.urlencoded and form parsing */
const express = require('express');
const app = express();
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs');
app.get('/register', (req, res) => {
  res.render('register',{data:null})
});
app.post('/register', (req, res) => {
    const {username,email} = req.body
    res.render('register',{data:{username,email}})
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});