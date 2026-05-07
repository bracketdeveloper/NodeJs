/*
Task 7: Advanced Social Media Routes
    GET /user/:userId/posts, GET /user/:userId/posts/:postId, POST/PUT/DELETE posts
    GET /user/:userId/posts/:postId/comments, POST/DELETE comments
    GET /user/:userId/posts?sort=date&limit=10&skip=20 (pagination)
    Validate all parameters, return error messages
*/
const express = require('express');
const app = express()

const isNumeric = (value) => !isNaN(value) && value !== ''

app.delete('/user/:userId/posts/:postId/comments/:commentId',(req,res)=>{
    if (!isNumeric(req.params.userId) || !isNumeric(req.params.postId) || !isNumeric(req.params.commentId)) {
        return res.send("Error: userId, postId, and commentId must be numbers")
    }
    res.send(`Comment [${req.params.commentId}] on Post [${req.params.postId}] is deleted by user [${req.params.userId}]`)
})
app.post('/user/:userId/posts/:postId/comments',(req,res)=>{
    if (!isNumeric(req.params.userId) || !isNumeric(req.params.postId)) {
        return res.send("Error: userId and postId must be numbers")
    }
    res.send(`Post [${req.params.postId}] is commented by user [${req.params.userId}]`)
})
app.get('/user/:userId/posts/:postId/comments',(req,res)=>{
    if (!isNumeric(req.params.userId) || !isNumeric(req.params.postId)) {
        return res.send("Error: userId and postId must be numbers")
    }
    res.send(`All comments on post [${req.params.postId}] by user [${req.params.userId}]`)
})
app.delete('/user/:userId/posts/:postId', (req,res)=>{
    if (!isNumeric(req.params.userId) || !isNumeric(req.params.postId)) {
        return res.send("Error: userId and postId must be numbers")
    }
    res.send(`Post [${req.params.postId}] is deleted by user [${req.params.userId}]`)
})
app.put('/user/:userId/posts/:postId',(req,res)=>{
    if (!isNumeric(req.params.userId) || !isNumeric(req.params.postId)) {
        return res.send("Error: userId and postId must be numbers")
    }
    res.send(`Post [${req.params.postId}] is updated by user [${req.params.userId}]`)
})
app.post('/user/:userId/posts',(req,res)=>{
    if (!isNumeric(req.params.userId)) {
        return res.send("Error: userId must be a number")
    }
    res.send(`Post created by user [${req.params.userId}]`)
})
app.get('/user/:userId/posts/:postId',(req,res)=>{
    if (!isNumeric(req.params.userId) || !isNumeric(req.params.postId)) {
        return res.send("Error: userId and postId must be numbers")
    }
    res.send(`Specific post [${req.params.postId}] by user [${req.params.userId}]`)
})
app.get('/user/:userId/posts',(req,res)=>{
    if (!isNumeric(req.params.userId)) {
        return res.send("Error: userId must be a number")
    }
    if (req.query.sort && req.query.limit && req.query.skip) {
        if (isNaN(req.query.limit) || isNaN(req.query.skip)) {
            return res.send("Error: limit and skip must be numbers")
        }
        res.send(`Posts sorted by: [${req.query.sort}], limit: [${req.query.limit}], skip: [${req.query.skip}]`)
    } else {
        res.send(`All posts by user [${req.params.userId}]`)
    }
})

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});