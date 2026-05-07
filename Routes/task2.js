/*
Task 2: HTTP Methods Explorer
    GET /products → "Showing all products"
    POST /products → "Product created"
    DELETE /products → "Product deleted"
    Test with Postman/Thunder Client
*/
const express = require('express')
const app = express()
app.listen(3000,()=>{
    console.log("app started");
})

app.get('/products',(req,res)=>{
    res.send("Showing all products")
})
app.post('/products',(req,res)=>{
    res.send("Product created")
})
app.delete("/products",(req,res)=>{
    res.send("Product deleted");
})

