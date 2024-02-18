const fs = require('fs');
const {
    atmEvent,
    rl,
    prompt,
    readUsersFile,
    saveData,
    mainMenu,
    UserMenu,
    generateRandomID
} = require('./library');

const data = require('../users.json');

const USERS = data;

// console.log(USERS);

let currentUser = null;

atmEvent.on('addUser',async (name,pin)=>{
    try {
        if (!name) {
            console.log('Invalid Information !!');
            return;
        }
       
        // let newUser = [];
        let accountID;
        do {
            accountID = generateRandomID();
        } while (USERS.find((u)=>u.accountID===accountID));
        // newUser.push({});
        USERS.push({
            accountID,name,pin,balance:0,transactions:[]
        });
        console.log('\nCongrutolation You Account Created : \n');
        console.log(`Your Login Information is :\nAccount ID [${accountID}]\nPIN : [${pin}]`);
        // console.log(USERS);
        saveData(USERS);
        // mainMenu();
    } catch (error) {
        console.log(error);
    }
})

atmEvent.on('login',async (ID,P)=>{
    try {
        
        const foundUser = USERS.find((user)=>user.accountID===ID && user.pin===P);
        console.log(foundUser);
        if (!foundUser) {
            console.log('ID or PIN Inccorect !!');
            return;
        }
        currentUser = foundUser;
        // await UserMenu(currentUser);
    } catch (error) {
        console.log(error);
    }
})

atmEvent.on('checkBalance',()=>{
    try {
        console.log(`Your Balance is : ${currentUser.balance}`);
    } catch (error) {
        console.log(error);
    }
})

atmEvent.on('deposit',(amount)=>{
    let a = parseInt(amount);
    if (isNaN(a)) {
        console.log('Invalid Amount !');
        return;
    }
    const type = 'deposit';
    const date = new Date().toLocaleDateString();
    const transaction = {type,amount:a,date};
    currentUser.balance += parseInt(a);
    currentUser.transactions.push(transaction);
    saveData(USERS);
})

atmEvent.on('withdarw',(amount)=>{
    let w = parseInt(amount);
    if (isNaN(w)) {
        console.log('Invalid Amount !');
        return;
    }
    if (currentUser.balance<w) {
        console.log('Insufficient funds !');
        return;
    }
    const type = 'withdraw';
    const date = new Date().toLocaleDateString();
    const transaction = {type,w,date};
    currentUser.balance -= w;
    currentUser.transactions.push(transaction);
    console.log('\t\tYour Withdrawn Amoun is '+w);
    console.log('Your Current Balance is '+currentUser.balance);
    saveData(USERS);
})

atmEvent.on('transactionHis',()=>{
    try {
        console.log('-------------Transactions History-------------');
        currentUser.transactions.forEach(t => {
            console.log(`
            [Transaction Date]: ${t.date} ,
            [Transaction Type]: ${t.type} ,
            [Transaction Amount]: ${t.amount}\n
            `);
        });
    } catch (error) {
        console.log(error);
    }
})

// let foundUser = USERS.find((user)=>user.accountID==='ACC1001' && user.pin==='1234');
// console.log(foundUser);
async function atm() {
    rl.on("SIGINT", async () => {
        await saveData(USERS);
        console.log("Exiting...");
        rl.close();
      });
    do {
        if(currentUser) {
          await UserMenu(currentUser);
          currentUser = null;
        }
        else {
          await mainMenu();
        }
      } while (true);
}
// const foundUser = USERS.find((user)=>user.accountID==='ACC5935' && user.pin==='1555');
// console.log(foundUser);
// atmEvent.emit('login','ACC5935','1555');
atm();

// var date = new Date().toLocaleDateString();
// console.log(date);
