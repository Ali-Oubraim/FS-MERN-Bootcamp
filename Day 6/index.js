const { readFileAsync, writeFileAsync } = require('./fileOperation');
const {  addTimestamp,reverseContent,ToUpper } = require('./processingLogic');

async function processFiles() {
    try {
        const file = './text.txt';

        let content = await readFileAsync(file);
        
        //Example processing: reversing content
        content = reverseContent(content);

        // Example processing: converting content to uppercase
        content = ToUpper(content);

        // Example processing: adding a timestamp
        content = addTimestamp(content);

        const newFilePath = file.replace('.txt', '_modified.txt');

        await writeFileAsync(newFilePath,content);
        
        console.log(`File processed and saved successfuly`);
            
    } catch (error) {
        console.error(error);
    }
}

processFiles();










