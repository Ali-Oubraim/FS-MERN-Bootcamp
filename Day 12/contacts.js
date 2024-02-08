const readline = require('readline');//importing the readline module
const EventEmitter = require('events');//importing the events module

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})//create interface for read the inputs and return the outputs

const event = new EventEmitter();//instance an event from the class EventEmitter

const contacts = [];//Create an array to store contact object in it

//var choose = null;

//this function is for taking the inputs from the user
const prompt = (str)=>{
    return new Promise((resolve,reject)=>{
        rl.question(str,answer=>{
            resolve(answer);
        });    
    }) 
}

//add event 
event.on("add",async (Name,PhoneNumber)=>{
    console.log("Adding New Contact Event Start : \n");
    try {
        Name = await prompt("Please Enter Your Name : ");
        PhoneNumber = await prompt(`Hi ${Name}, Please Enter Your Phone Number : `);
        const contact = {Name,PhoneNumber};
        contacts.push(contact);
        console.log(`${Name}'s Contact Added Successfuly !`);             
        processContacts();
    } catch (error) {
        console.log(error);
    }
})

//search event
event.on("search",async (Name)=>{
    try {
        console.log("Search Event Start : ");
        Name = await prompt("Please Enter The Name Of The Contact : ");
        const findContact = contacts.filter((contact)=>contact.Name == Name) ;
        if (findContact.length == 0) {
            console.log("The Contact Information Not Found !!");
            processContacts();
        }else{
            console.log("The Contact Exist : \n");
            console.log(findContact);
            processContacts();
        }
    } catch (error) {
        console.log(error);
    }
})

//display event
event.on("display",()=>{
    try {
        console.log("Display Event Start : \n");
        if (contacts.length==0) {
            console.log("The Contact List Is Empty !!");
            processContacts();
        }else{
            console.log(contacts);
            processContacts();
        }
    } catch (error) {
        console.log(error);
    }
})

//menu event
event.on("menu",async ()=>{
    console.log("\n\t\t1-If you want add contact enter \"Add\".\n\t\t2-If you want to search for a contact enter \"Search\".\n\t\t3-Enter \"Display\" to view the contact list.\n\t\t4-Enter \"Exit\" to exit.");
})

//process contact function
const processContacts = async ()=>{
    event.emit('menu');
    let check = false;
    while(check==false){
        let choose = await prompt("\n\tPlease Choose Somthing : ");
        switch (choose.toLowerCase()) {
            case "add":
                event.emit("add");
                break;
            case "search":
                event.emit("search");
                break;
            case "display":
                event.emit("display");
                break;
            case "exit":
                check = true;
                console.log("Application is closed");
                rl.close();
                break;
            default:
                console.log("You choice is wrong !! Try Again");
                break;
        }
    }

}

//excut the application
processContacts();





