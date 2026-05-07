/*
Task 8: Method Chaining & Complex Responses (Advanced Challenge)
    GET / → chain: res.status(200).type('json').json(userData)
    GET /api/error → chain: res.status(400).set('X-Error', 'true').json({error: msg})
    POST /api/create → chain: res.status(201).location('/api/item/1').json(newItem)
    GET /download → chain: res.set('Content-Type', 'text/plain').download(file)
    GET /redirect → chain: res.status(301).location('/new').redirect('/new')
    Create 5+ different chaining scenarios
    Validate parameter inputs and return appropriate chained responses
*/
const express = require('express');
const app = express();
const path = require('path');

const newItem = {id: 1, name: "New Item"};
const userData = {id: 1, username: "john", email: "john@example.com"};

// 1. GET / - basic chaining
app.get('/', (req, res) => {
    res.status(200).type('application/json').json(userData)
});

// 2. GET /api/error - error chaining
app.get('/api/error', (req, res) => {
    res.status(400).set('X-Error', 'true').json({error: "Error Message"})
});

// 3. POST /api/create - create with location
app.post('/api/create', (req, res) => {
    res.status(201).location('/api/item/1').json(newItem)
});

// 4. GET /download - download file
app.get('/download', (req, res) => {
    res.download(path.join(__dirname, './files/file.txt'))
});

// 5. GET /redirect - redirect with status
app.get('/redirect', (req, res) => {
    res.status(301).location('/new').redirect('/new')
});

// 6. GET /new - redirect destination
app.get('/new', (req, res) => {
    res.send("New page")
});

// 7. GET /api/user/:id - user with validation
app.get('/api/user/:id', (req, res) => {
    if (isNaN(req.params.id)) {
        return res.status(400).type('application/json').json({error: "ID must be numeric"})
    }
    res.status(200).type('application/json').json({userId: req.params.id})
});

// 8. GET /api/products/:id - product with validation
app.get('/api/products/:id', (req, res) => {
    if (req.params.id > 100) {
        return res.status(404).set('X-Product-Error', 'not-found').json({error: "Product not found"})
    }
    res.status(200).type('application/json').json({product: `Product ${req.params.id}`})
});

// 9. POST /api/data - post with multiple headers
app.post('/api/data', (req, res) => {
    res.status(201).set('X-Created', 'true').set('X-ID', '123').json({created: true, id: 123})
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});