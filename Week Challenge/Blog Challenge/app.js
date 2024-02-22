/**
 * --I Finish the ATM Challenge and i push it in GitHub
 * --and after that i finish quizes that i had to finish and the evaluation too
 * --I Start the Blog Challenge and i try to finish it today Inchaalah
 */
const express = require('express');
const blogRouter = require('./Routes/blogRoutes');
const middlewares = require('./Miidlewares/Logging');
const app = express();

app.use(express.json());
app.use(middlewares.Loggin)
app.use('/blogs',blogRouter);

app.listen(9000,()=>{
    console.log('Server For Blogs Running..');
})