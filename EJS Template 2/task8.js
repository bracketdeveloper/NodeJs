/* Task 8: Serve CSS file and apply styling to form page
Route: GET /styled-form
Server: logic Send no special data
Template logic: Link CSS file using /styles.css Style form inputs and buttons
Goal: Learn serving static CSS files */
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.get('/styled-form', (req, res) => {
  res.render('styled-form')
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});