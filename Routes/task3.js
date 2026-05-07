/*
Task 3: Route Parameters - User Profile
    GET /user/:id → "User ID: [id]"
    GET /user/:id/profile → "Profile for user [id]"
    GET /user/:id/posts → "Posts by user [id]"
*/
const express = require('express')
const app = express()
app.get('/user/:id',(req,res)=>{
    res.send(`User ID: [${req.params.id}]`)
})
app.get('/user/:id/profile',(req,res)=>{
    res.send(`Profile for user [${req.params.id}]`)
})
app.get('/user/:id/posts',(req,res)=>{
    res.send(`Posts by user [${req.params.id}]`)
})
app.listen(3000, ()=>{
    console.log("app is running");
})
