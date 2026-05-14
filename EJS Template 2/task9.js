/* Task 9: Serve images in an EJS page
Route: GET /gallery
Server logic: Send { images: ["img1.jpg", "img2.jpg"] }
Template logic: Loop through images Use <img src="/images/img1.jpg">
Goal: Understand static image serving */
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'))
app.get('/gallery', (req, res) => {
  res.render('gallery',{title:'Gallery',year:2026,images:['img1.jpg','img2.jpg']})
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});