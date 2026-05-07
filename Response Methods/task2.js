/*
 Task 2: Status Codes with res.status()
    GET /products/:id → return 200 with product data
    GET /products/invalid → return 404 with error message
    POST /products → return 201 with created product
    DELETE /products/:id → return 204 (no content)
*/
const express = require('express');const app = express();

app.delete('/products/:id', (req, res) => {
    res.status(204)
    res.end()
});
app.post('/products', (req, res) => {
    res.status(201)
    res.send(`Product created`)
});
app.get('/products/invalid', (req, res) => {
    res.status(404)
    res.send(`Error: The product not found`)
});

app.get('/products/:id', (req, res) => {
    res.status(200)
    res.send(`The Product details for id [${req.params.id}]`)
});
app.listen(3000, () => {
    console.log('App listening on port 3000!');
});
