/* 
Task 1: Your First Route
  GET / → "Welcome to my server"
  GET /about → "This is the about page"
*/
const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Task 1 is started");
});
app.get("/", (req, res) => {
  res.send("Welcome to my server");
});
app.get("/about", (req, res) => {
  res.send("This is about page");
});
