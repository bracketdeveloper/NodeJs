/*
    Task 1: res.send() vs res.json()
    GET /api/user → use res.send() with string
    GET /api/data → use res.json() with object
    GET /api/message → use res.send() with HTML
    Show difference between text and JSON responses
*/
const express = require('express'); const app = express();

app.get('/api/message', (req, res) => {
    res.send("<h1>This is html message</h1>")
});
app.get('/api/data', (req, res) => {
    const user = {
        username:"mianammarsalar",
        age:31
    }
    res.json(user)
});
app.get('/api/user', (req, res) => {
    res.send(`this is string`)
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});