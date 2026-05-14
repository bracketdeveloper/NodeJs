/* Task 4: Create a user profile form with name and city 
Route: GET /profile POST /profile 
Server logic: Extract name and city Send { name, city } 
Template logic: Form with two inputs Display profile summary after submit 
Goal: Work with structured form data */
const express = require('express');
const app = express();
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs');
app.get('/profile', (req, res) => {
    const data = null
    res.render('profile', {data})
});
app.post('/profile', (req, res) => {
    const {name, city} = req.body
    res.render('profile',{data:{name,city}})
    
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});