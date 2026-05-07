/*
Task 4: File Operations (res.sendFile() & res.download())
    GET /download/pdf → use res.download() to download file
    GET /view/image → use res.sendFile() to display file
    GET /document → download a text file
    Create sample files to serve
*/
const express = require("express");
const path = require('path');
const app = express();

app.get('/document', (req, res) => {
    res.download(path.join(__dirname, './files/file.txt'))
});
app.get('/view/image', (req, res) => {
    res.sendFile(path.join(__dirname, './files/image.jpg'))
});
app.get("/download/pdf", (req, res) =>{
    res.download(path.join(__dirname, './files/file.pdf'))
});
app.listen(3000, () => console.log(`App listening on port 3000!\nhttp://localhost:3000`));