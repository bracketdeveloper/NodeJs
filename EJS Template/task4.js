/* Task 5: Iteration Basics
Create a GET route at /fruits that passes an array of strings: 
['Apple', 'Banana', 'Orange', 'Mango']
Server Logic: Define the array and send it to a new template called 
fruits.ejs.
Template Logic: Use a standard JavaScript for loop inside <% %> tags to 
iterate through the array and wrap each fruit in an <li> tag.
Goal: Automate the creation of repetitive HTML elements using data 
collections. */
const express = require('express');
const app = express();
app.set('view engine', 'ejs')
app.get('/fruits', (req, res) => {
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango']
  res.render('fruits',{fruits})
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});