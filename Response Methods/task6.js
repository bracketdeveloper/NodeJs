/*
Task 6: Response Headers Management (res.get(), res.append(), res.type())
    GET /json → set content type to JSON
    GET /html → set content type to HTML
    GET /xml → set content type to XML
    GET /file → use res.append() to add headers
    Use res.get() to check existing headers
*/
const express = require('express');
const app = express();
app.get('/file', (req, res) => {
    res.type('text/plain')
    res.append('X-Custom-Header', 'Custom Value')
    res.append('X-Another-Header', "Another Values")

    const contentType = res.get('Content-type')
    const customHeader = res.get('X-Custom-Header')
    res.send(`Content-Type: ${contentType}\nCustom Header: ${customHeader}`)
    
});
app.get('/xml', (req, res) => {
    res.type('application/xml')
    res.send('<message>Content type is xml</message>')
});
app.get('/html', (req, res) => {
    res.type('text/html')
    res.send('<h1>Content type is html</h1>')
});
app.get('/json', (req, res) => {
  res.type('application/json')
  res.json({message:'Content type is json'})
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});