const fs = require('fs');
function Loggin(req,res,next){
    const now = new Date();
    const info = `[${now.toISOString().slice(0,10)}] : The Request Method is [${req.method}] and The Path is [${req.path}]`;
    console.log(info);

    fs.appendFile('Loggin.txt',`${info}\n`,(err)=>{
        if(err) throw err;
    });
    next();
}


module.exports={
    Loggin
}