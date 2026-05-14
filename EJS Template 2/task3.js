/* Task 3: Create a feedback form and show confirmation message 
Route: GET /feedback POST /feedback 
Server logic: Read req.body.feedback Send { feedback, status: "received" } 
Template logic: Form textarea for feedback Show feedback + status message 
Goal: Learn handling textarea inputs and response messages */
const express = require('express');
const app = express();
app.use(express.urlencoded({extended:false}))
app.set('view engine', 'ejs');

app.get('/feedback', (req, res) => {
  res.render('feedback',{data:null})
});
app.post('/feedback', (req, res) => {
    const {feedback} = req.body
    const status = 'received'
    res.render('feedback', {data:{feedback,status}})
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});