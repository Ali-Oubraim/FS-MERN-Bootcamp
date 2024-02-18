const express = require('express');
const data = require('./blogs.json');
const blog = require('./Models/blog')

const posts = data;

const app = express();

app.use(express.json());

app.get('/blogs',(req,res)=>{
    try {
        
        if (req.url==='/blogs') {
            res.json(posts);
        } else {
            res.status(500).send("Error : Endpoint Not Found!!");
        }
    } catch (error) {
        // res.json({"Error":error});
    }
})

app.get('/blogs/:id',(req,res)=>{
    try {
        if (req.params.id) {
            const id = req.params.id;
            // console.log(typeof(req.params.id));
            const post = posts.find((p)=>p.id===id);
            // console.log(post);
            if (post) {
                res.json(post);
            } else {
                res.json({Error:"Post not Found !!"});
            }
        } else {
            res.status(500).send("Error : Endpoint Not Found!!");
        }
    } catch (error) {
        // res.json({"Error":error});
    }
})

app.post('/blog',(req ,res ) => {
    try {
        
    } catch (error) {
        console.log(error);
    }
})
// console.log(posts);

app.listen(9000,()=>{
    console.log('Server Running..');
})