
/*
Guys, good evening. Since today was just an intro to NodeJS, 
it is good for you to try and solve the following exercise to solidify your 
knowledge in modules and asynchronous programming. The exercise is to transform 
this CSV file into a JSON file containing an array of cities, each city is an 
object having the keys as the column 
titles and the values as the corresponding values for each city. Have fun ! 
*/
const fs = require('fs');

const readCSVFile = (pathFile) =>{
    try {
        return new Promise((resolve,reject)=>{
            fs.readFile(pathFile,'utf8',(err,data)=>{
                if (err) {
                    reject(err);
                }else{
                    resolve(data);
                    //console.log(data);
                    return data;
                }
                
            })
            
        })
        
    } catch (error) {
        console.log(error);
    }

} 

const writeJsonFile = (filePath,content) =>{
    return new Promise((resolve,reject)=>{
        fs.writeFile(filePath,content,(err)=>{
            if (err) {
                reject(`Error Happen when writing the file : ${err.message}`)
            }else{
                resolve();                
            }
        })
    })
}

const processCsvFile =async (filePath)=>{
    const worldCities = await readCSVFile(filePath);
    //console.log(worldCities);
    let citiesObj = [];
    let lines = worldCities.split('\n');
    //console.log(lines[0]);
    let headers = lines[0].split(',');
    // headers.forEach(element => {
    //     console.log(element);
    // });
    
    for (let i = 1; i < lines.length ; i++) {
        var rowCities = lines[i].split(',');
        //.replace('\"','');
        var cityObj = {};
        //console.log(rowCities);
        for (let j = 0; j < lines.length ; j++) { 
            //console.table(`${headers[j]}:${rowCities[j]}`); 
            cityObj[headers[j]] = rowCities[j];
            //cityObj[headers[j].replace('\"','').replace('\"','')] = rowCities[j].replace('\"','').replace('\"','');            
        }
        citiesObj.push(cityObj);
    }

    const JsonCities = JSON.stringify(citiesObj,null,' ');

    const newFile = filePath.replace('.csv','.json');

    await writeJsonFile(newFile,JsonCities);
    
    //console.table(citiesObj);
}

processCsvFile('worldcities.csv');









