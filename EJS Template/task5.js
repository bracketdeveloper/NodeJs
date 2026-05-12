/* Task 5: Cleaner Syntax with forEach
Refactor the previous iteration logic by replacing the traditional for loop 
with the modern .forEach() method.
Server Logic: Reuse the /fruits route or create a new /tools route with an 
array of strings.
Template Logic: Inside your EJS file, use <% items.forEach(item => { %> to 
iterate. Inside the loop, output the item using <%= item %>.
Goal: Utilize more readable, functional JavaScript syntax within EJS to 
handle arrays without managing a manual counter variable. */
const express = require('express');
const app = express();
app.set('view engine', 'ejs')
app.get('/fruits', (req, res) => {
  const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Kiwi']
  res.render('fruits1',{fruits})
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});