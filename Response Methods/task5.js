/*
Task 5: Redirects and Headers (res.redirect() & res.set())
    GET /old-page → redirect to /new-page (302)
    GET /home → redirect to /dashboard (301)
    GET /api/data → set custom header X-Custom-Header: value
    GET /user → set multiple headers with res.set()
*/
const express = require("express");
const app = express();

app.get('/user', (req, res) => {
    res.set('Other-Header', "Other value")
    res.set('Other-Header-1', "Other value 1")
    res.send("User data")
});

app.get('/api/data', (req, res) => {
    res.set('X-Custom-Header', "Value")
    res.json({message: "API data"})
});

app.get('/home', (req, res) => {
    res.redirect(301, '/dashboard')
});

app.get('/dashboard', (req, res) => {
    res.send("Dashboard")
});

app.get('/old-page', (req, res) => {
    res.redirect(302, '/new-page')
});

app.get('/new-page', (req, res) => {
    res.send('New Page')
});

app.get("/", (req, res) => res.send("Hello World!"));

app.listen(3000, () => console.log(`App listening on port 3000!\nhttp://localhost:3000`));