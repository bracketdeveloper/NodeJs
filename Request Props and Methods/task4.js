/* Task 4: Query String Extraction (EASY-MEDIUM)
Objective:
Extract and process data from URL query strings.
Route Details:
Path: GET /search
What to do:
Extract the search query parameter
Extract the page query parameter (if provided, default to 1)
Extract the limit query parameter (if provided, default to 10)
Display all values with defaults applied */
const express = require("express");
const app = express();

app.get("/search", (req, res) => {
  const search = req.query.search || "";
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  res.send({
    search,
    page,
    limit,
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
