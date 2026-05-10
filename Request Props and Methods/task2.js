/* Task 2: Client Security and IP Detection (EASY)
Objective:
Identify client details including their IP address and connection security 
status.
Route Details:
Path: GET /client-details
What to do:
Extract the client's IP address
Check if the connection is secure (HTTPS)
Display whether it's a secure or insecure connection
Show the client's IP in a readable format */
const express = require('express');
const app = express();

app.get('/client-details', (req, res) => {
  const clientIp = req.ip;
  const isSecure = req.secure;
  const protocol = req.protocol;
  res.send({
    isSecure:isSecure,
    clientIp,
    protocol:`${protocol} (${isSecure ? 'Secure' : 'Insecure'})`
  })
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});