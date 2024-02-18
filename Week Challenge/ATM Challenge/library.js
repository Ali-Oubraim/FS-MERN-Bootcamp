const fs = require('fs');
const EventEmitter = require('events');
const atmEvent = new EventEmitter();
const readline = require('readline');
const rl = readline.createInterface({input:process.stdin,output:process.stdout});


const readUsersFile = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject('Error occurred while reading file: ' + err);
                return;
            }
            try {
                const users = JSON.parse(data || '[]');
                resolve(users);
            } catch (error) {
                reject('Error while parsing data: ' + error);
            }
        });
    });
}



function prompt(question) {
    return new Promise((resolve, reject) => {
        rl.question(question,(answer)=>{
            resolve(answer);
        })
    })
}

const generateRandomID = ()=>{
    
    const NewId = `ACC${Math.floor(10000*Math.random())}`;
    return NewId;
}

const generateRandomPin =()=>{
    const NewPin = Math.floor(10000*Math.random());
    return NewPin;
}
// console.log(generateRandomPin());

const saveData = async (data) => {
    try {
        // fs.unlink('./users.json', (err) => {
        // if (err) console.log('Error deleting file: ' + err);  
        // });
        fs.writeFile('./users.json', JSON.stringify(data, null, 2), (err) => {
            if (err) {
                console.log('Error writing file: ' + err);
                return; 
            }
        });
    } catch (error) {
        console.log(error); 
    }
}

// atmEvent.on('addUser',(name)=>{
//     if(!name.toString()) 
//     console.log('Invalid Name'); 
//     return;
// })

const UserMenu = async (currentUser)=>{
    try {
        if (!currentUser) {
            console.log('User Not Found !');
            return;
        }
        console.log(`-------------Welcome ${currentUser.name}---------------`);
       
        do {
            console.log('\n\n1-Check Your Balance.\n2-Deposit Money.\n3-Withdraw Money.\n4-View Transactions History.\n5-Logout.\n');
            const choice = await prompt('Please Choose Your Operation : '); 
            switch (choice) {
                case '1':
                    atmEvent.emit('checkBalance');
                    break;
                case '2':
                    const amount = await prompt('Enter Your Deposit Amount :')
                    atmEvent.emit('deposit',amount);
                    break;
                case '3':
                    const withdrawAmount = await prompt('Enter Your Withdraw Amount :')
                    atmEvent.emit('withdarw',withdrawAmount);                    
                    break;
                case '4':
                    atmEvent.emit('transactionHis');
                    break;
                case '5':
                    currentUser = null;
                    mainMenu();
                    break;
                default:
                    console.log('Invalid Choice !!');
                    break;
            }
        } while (currentUser);

    } catch (error) {
        console.log(error);
    }
}

const mainMenu = async ()=>{
    try {        
        console.log('1- New User .\n2- Login.\n3- Exite.');
        let choose = await prompt('Please Choose Somthing : ');
        switch (choose) {
            case '1':
                let n = await prompt('Enter Your Name : ');
                let p = await prompt('Please Enter Your PIN : ');
                while(p < 1000 || p > 9999) {
                    p = await prompt('Please Try Again With 4-Digits PIN : ');
                }
                atmEvent.emit('addUser',n,p);
                // saveData(USERS);
                break;
            case '2':
                const accountID = await prompt('Your Account ID :');
                const pin = await prompt('Your PIN :');
                atmEvent.emit('login',accountID,pin);
                break;
            case '3':
                rl.close();
                break;
            default:
                console.log('your choice is wrong !!');
                break;
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    atmEvent,
    rl,
    prompt,
    readUsersFile,
    saveData,
    mainMenu,
    UserMenu,
    generateRandomID
    
}