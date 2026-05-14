/* Task 2:Create a login-style form with email and password display 
(no authentication) 
Routes: GET /login POST /login 
Server logic: Extract req.body.email and req.body.password Send 
{ email, password } to EJS 
Template logic: Form with email and password fields 
Display submitted values on result page 
Goal: Practice handling multiple form fields with POST */
const express = require('express');
const app = express();
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs');
app.get('/login', (req, res) => {
  res.render('login')
});
app.post('/login', (req, res) => {
    const {email,password} = req.body;
    res.render('login-result', {email,password})
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});