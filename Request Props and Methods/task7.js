/* Task 7: Content Negotiation - Accept Types (MEDIUM-HARD)
Objective:
Determine what content type the client accepts and respond accordingly.
Route Details:
Path: GET /data
What to do:
Check what content types the client accepts using Accept header
Use req.accepts() method to check if client accepts:
application/json
text/html
text/plain
Display which format the client prefers
Return data in the preferred format (or a message about preference) */
const express = require('express');
const app = express();

app.get('/data', (req, res) => {
  const acceptsJson = req.accepts('json');
  const acceptsHtml = req.accepts('html');
  const acceptsText = req.accepts('text');
  const preferredType = req.accepts(['json', 'html', 'text']);
  res.send({
    "Client Accepts JSON": !!acceptsJson,
    "Client Accepts HTML": !!acceptsHtml,
    "Client Accepts Text": !!acceptsText,
    "Preferred Format": preferredType,
    "Response Type": preferredType === 'json' ? 'JSON' : 'Text/HTML'
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});