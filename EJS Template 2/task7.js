/* Task 7: Create a footer partial used in multiple pages 
Route: GET /services 
Server logic: Send { year: 2026 } 
Template logic: Create footer.ejs partial Include footer in all pages 
Display year dynamically 
Goal: Practice shared UI components */
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.get('/services', (req, res) => {
  res.render('services',{title:'Services',year:2026})
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});