const http = require('http');
const url = require('url');
const {checkForCity} = require('./data');


const server = http.createServer(async (req,res)=>{
try {
    const parsedUrl = url.parse(req.url,true);
    const path = parsedUrl.pathname;
    const query = parsedUrl.query;
    if (path === `/weather`) {
        let city = query.city;
        const cityInfo = await checkForCity(city);
        res.writeHead(200,{'Content-Type':'text/plain'})
        .end(`The Weather Information for ${city} : ${cityInfo} `);               
    } else{
        res.writeHead(404,{'Content-Type':'text/plain'})
        .end('This endpoint not exist');
    }
} catch (error) {
    throw new Error(error)
}    
});

server.listen(3000,()=>{
    console.log('the server is listening on port 3000');
})


