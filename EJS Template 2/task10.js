/* Task 10: Setup express.static middleware and build asset-based page
Route: GET /assets-demo Server logic No dynamic data required
Template logic: Use CSS, JS, images from /public folder Add interactive 
button using JS
Goal: Learn static folder setup and asset access */
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.get('/assets-demo', (req, res) => {
  res.render('assets-demo',{title:'Assets',year:2026})
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});