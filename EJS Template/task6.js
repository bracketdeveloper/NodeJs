/* Task 6: Arrays of Objects in Tables
Create a GET route at /users that passes an array containing multiple 
user objects (e.g., [ {id: 1, name: "Alice", role: "Admin"}, 
{id: 2, name: "Bob", role: "User"} ]).
Server Logic: Define an array of at least three objects, each with 
the same keys (id, name, role).
Template Logic: Construct an HTML <table> structure. Use a loop to 
generate a new <tr> for every object in the array, and 
<td> tags for each property.
Goal: Learn how to organize structured, multi-dimensional data into 
a clean, tabular grid.*/
const express = require("express");
const app = express();
app.set("view engine", "ejs");
app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice", role: "Admin" },
    { id: 2, name: "Bob", role: "User" },
    { id: 3, name: "Jack", role: "User" }
  ];
  res.render('users', {users})
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
