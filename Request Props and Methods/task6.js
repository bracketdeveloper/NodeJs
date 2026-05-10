/* Task 6: Custom HTTP Headers (MEDIUM)
Objective:
Read and display custom HTTP headers from the request.
Route Details:
Path: GET /headers
What to do:
Extract the User-Agent header
Extract the Content-Type header
Extract a custom header called X-API-Key (if provided)
Extract the Accept-Language header
Display all extracted headers */
const express = require("express");
const app = express();

app.get("/headers", (req, res) => {
  const userAgent = req.headers["user-agent"];
  const contentType = req.headers["content-type"];
  const apiKey = req.headers["x-api-key"] || "";
  const acceptLanguage = req.headers["preferred-language"];
  res.send({
    userAgent,
    contentType,
    apiKey,
    acceptLanguage,
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
