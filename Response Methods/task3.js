/*
Task 3: res.sendStatus() Shorthand
    GET /health → res.sendStatus(200)
    POST /create → res.sendStatus(201)
    GET /notfound → res.sendStatus(404)
    GET /error → res.sendStatus(500)
    Send only status code, no message
*/
const express = require('express'); const app = express()

app.get('/error', (req, res) => {
    res.sendStatus(500)
});
app.get('/notfound', (req, res) => {
    res.sendStatus(404)
});
app.post('/create', (req, res) => {
    res.sendStatus(201)
});
app.get('/health', (req, res) => {
    res.sendStatus(200)
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});