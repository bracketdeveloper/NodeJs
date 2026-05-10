/* Task 1: Basic Route and URL Information (EASY)Objective:
Create a route that displays fundamental information about the 
HTTP request.Route 
Path: GET /info
What to do:
Extract and display the request's method
Extract and display the protocol (http or https)
Extract and display the hostname
Extract and display the originalUrl */
const express = require('express');
const app = express();
app.get('/info', (req, res) => {
    const method = req.method;
  const protocol = req.protocol;
  const hostname = req.hostname;
  const originalUrl = req.originalUrl;
  res.send({method,protocol,hostname,originalUrl})
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});