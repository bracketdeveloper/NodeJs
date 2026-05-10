/* Task 3: Route Parameters Extraction (EASY-MEDIUM)
Objective:
Capture dynamic data from URL path parameters.
Route Details:
Path: GET /users/:userId/posts/:postId
What to do:
Extract the userId from the URL
Extract the postId from the URL
Display both parameters
Optionally show if they are numeric or not */
const express = require("express");
const app = express();

app.get("/users/:userId/posts/:postId", (req, res) => {
  const userId = req.params.userId;
  const postId = req.params.postId;
  res.send({
    userId,
    postId,
    isUserIdNumeric: Number.isInteger(Number(userId)),
    isPostIdNumeric: Number.isInteger(Number(postId)),
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
