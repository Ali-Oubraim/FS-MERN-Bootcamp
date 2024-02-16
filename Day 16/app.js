const express = require('express');

const app = new express();

const port = 3000;

app.get('/Home',(req,res)=>{
    const page = req.query.page
    res.send('Welcome to my Express.js server!, You are in page '+page);
})
app.get('/Home/:id',(req,res)=>{
    const id = req.params.id;
    res.send('Welcome to my Express.js server! '+id);
})
app.all('*',(req, res) => {
    res.status(404).send("YOU ARE IN THE WRONG PLACE !!!")
})
app.listen(port,()=>{
    console.log('App listning on port on http://localhost:3000');
})