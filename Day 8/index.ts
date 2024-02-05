//Practice some TypeScript

var nom:string = "ali";
var age:number=25;
var hasName:boolean=true;

var phoneNumber:string|number= '+212651994290';


console.log("My name is "+nom+",my age is "+age+" And he has a name = "+hasName+" My phone numbe is "+phoneNumber);
var arr :number[]=[44,66,5];

console.log(arr.reduce((sum,arr)=>{return sum + arr}));

var ourTupl : [string,number,boolean];

ourTupl = ['hello',25,true];

ourTupl.forEach(element => {
    console.log(element);
});

