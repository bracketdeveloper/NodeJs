/**
 * Task 7: Complete API with Response Methods (Blending with Routes)
Build a product API combining all response methods:
    GET /api/products → res.json() with 200 status
    GET /api/products/:id → return JSON or 404 if not found
    POST /api/products → return 201 with created product
    PUT /api/products/:id → return 200 with updated product
    DELETE /api/products/:id → return 204 (no content)
    GET /api/products/export/csv → use res.download() CSV file
    GET /api/health → use res.sendStatus(200)
    Set appropriate headers, status codes, content types 
 */
const express = require('express');
const app = express();
const path = require('path');

app.get('/api/health', (req, res) => {
    res.sendStatus(200)
});
app.get('/api/products/export/csv', (req, res) => {
    res.download(path.join(__dirname,'./files/file.csv'))
});
app.delete('/api/products/:id', (req, res) => {
    res.status(204).end()
});
app.put('/api/products/:id', (req, res) => {
    res.status(200).type('application/json').json({code:200,message:`Product updated id [${req.params.id}]`})
});
app.post('/api/products', (req, res) => {
    res.status(201).type('application/json').json({code:201,message:"Product created"})
});
app.get('/api/products/:id', (req, res) => { 
    if (req.params.id === '999') {
        return res.status(404).json({code: 404, error: `Product not found for id [${req.params.id}]`})
    }
    res.status(200).json({code: 200, product: `Product ${req.params.id}`})
});
app.get('/api/products', (req, res) => {
  res.status(200).type('application/json').json({code:200,product:"My Product"})
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});