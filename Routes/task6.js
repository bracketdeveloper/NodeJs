/*
Task 6: E-commerce API
    GET /store, /store/:productId, POST /store, PUT /store/:productId, 
    DELETE /store/:productId
    GET /store/:productId/reviews, POST /store/:productId/reviews
    GET /orders/:userId, POST /orders/:userId/checkout
    Handle multiple query params: ?category=electronics&price=500&inStock=true
*/
const express = require('express'); const app = express()


app.post('/orders/:userId/checkout',(req,res)=>res.send(`Add order to checkout for user [${req.params.userId}]`))
app.get('/orders/:userId',(req,res)=>res.send(`All order for user [${req.params.userId}]`))
app.post('/store/:productId/reviews', (req,res)=> res.send(`Review created for product: [${req.params.productId}]`))
app.get('/store/:productId/reviews', (req,res)=> res.send(`Reviews for product: [${req.params.productId}]`))
app.delete('/store/:productId',(req,res)=>res.send(`product deleted: [${req.params.productId}]`))
app.put('/store/:productId',(req,res)=>res.send(`product updated: [${req.params.productId}]`))
app.post('/store',(req,res)=>res.send(`Product created`))
app.get('/store/:productId',(req,res) => res.send(`Product: [${req.params.productId}]`))
app.get('/store', (req, res) => {
    (req.query.category && req.query.price && req.query.inStock)
    ?
        res.send(`Products filtered by category: [${req.query.category}], price: [${req.query.price}], inStock: [${req.query.inStock}]`)
    :
        res.send(`All products`)
})

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});

