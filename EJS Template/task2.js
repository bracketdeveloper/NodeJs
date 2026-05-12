/* Task 2: Multiple Variables
Pass an object containing a name, an age, and a boolean status from the server 
to a template. Display these values using interpolation.
Goal: Understand how to inject diverse data types from the backend into 
the frontend UI. */
const express = require('express');
const app = express();
app.set('view engine', 'ejs')
app.get('/task2', (req, res) => {
  res.render('task2',{name:"Mian", age:31, status:true})
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});