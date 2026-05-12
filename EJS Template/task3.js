/* Task 4: Conditional Logic
Create a GET route at /dashboard that accepts a role query parameter 
(e.g., /dashboard?role=admin).
Server Logic: Capture the role from req.query and pass it to the template.
Template Logic: Use if, else if, and else blocks to show a "Delete User" 
button for admins and a "View Profile" link for regular users.
Goal: Master conditional rendering to create dynamic interfaces based on 
specific state or user permissions. */
const express = require('express');
const app = express();
app.set('view engine', 'ejs')
app.get('/dashboard', (req, res) => {
  const role = (req.query.role || "guest").toLowerCase();
  res.render('dashboard',{role})
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});