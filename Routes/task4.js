/*
Task 4: Multiple Parameters & Query Strings
    GET /products/:category/:id → "Category: [category], Product ID: [id]"
    GET /products?sort=price&order=asc → return query parameters
    GET /products/:category?filter=instock → both route param and query string
*/
const express = require('express'); const app = express()
app.get('/products/:category/:id',(req,res)=>{
    res.send(`Category: [${req.params.category}], Product ID: [${req.params.id}]`)
})
app.get('/products',(req,res)=>{
    res.send(`Sort: [${req.query.sort}] Order: [${req.query.order}]`)
})
app.get('/products/:category', (req,res)=>{
    res.send(`Category: [${req.params.category}] Filter: [${req.query.filter}]`)
})
app.listen(3000,()=>{
    console.log("App is running");
})