/*
Task 5: Blog Route System
    GET /blog → list all posts | GET /blog/:postId → get specific post
    POST /blog → create new post | PUT /blog/:postId → update post
    DELETE /blog/:postId → delete post
    GET /blog?author=john&year=2024 → filter by query
*/
const express = require("express");
const app = express();
app.get("/blog", (req, res) => {
  req.query.author && req.query.year
    ? res.send(
        `Posts filter by Author: [${req.query.author}] and Year [${req.query.year}]`,
      )
    : res.send("All posts");
});
app.get("/blog/:postId", (req, res) => {
  res.send(`Post details of post id : [${req.params.postId}]`);
});
app.post("/blog", (req, res) => res.send("create new post"));
app.put("/blog/:postId", (req, res) =>
  res.send(`Update post id: [${req.params.postId}]`),
);
app.delete("/blog/:postId", (req, res) =>
  res.send(`Delete post id: [${req.params.postId}]`),
);
app.listen(3000, () => {
  console.log("App is running");
});
