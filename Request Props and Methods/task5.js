/* Task 5: Request Body Handling (MEDIUM)
Objective:
Extract and display data sent in the POST request body.
Route Details:
Path: POST /create-user
Method: POST
What to do:
Receive JSON data in the request body containing: name, email, age
Extract all three fields
Display them in a readable format
Check if all required fields are present */
const express = require('express');
const app = express();
app.use(express.json());
app.post('/create-user', (req, res) => {
  const { name, email, age } = req.body;
  if(!name || !email || !age){
    return res.status(400).send('Error: Missing required fields (name, email, age)')
  }
  res.send(`
    User Created:
    Name: ${name}
    Email: ${email}
    Age: ${age}
  `);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});