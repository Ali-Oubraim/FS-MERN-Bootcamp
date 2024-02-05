//Importe the fs module 
const fs = require('fs');

//readFileAsync function 
function readFileAsync(filePath) {
    //console.log(filePath);
    return new Promise((resolve, reject) => {
        //Using fs.readFile to read files
        fs.readFile(filePath,"utf8",(err,data) => {
            if (err) {
                reject(`Error reading file: ${err.message}`);
            } else {
                resolve(data);
            }
        });
    });
}


function writeFileAsync(filePath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content,(err) => {
            //console.log(content);
            if (err) {
                reject(`Error writing to file: ${err.message}`);
            } else {
                resolve();
            }
        });
    });
}

module.exports = {
    readFileAsync,
    writeFileAsync
};




