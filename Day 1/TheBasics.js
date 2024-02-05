
//---The Basics---
//#Task 1 : Warm up

let firstname = "Ali";
let lastname = "Oubraim";
const PI = 3.14;
var radius = 33;
var favoriteSuperhero = "Mr.Ibrahim";
var favoriteQuote = "Difficult roads often leads to beautiful destinations";

//#Task 2 : Speed run
//1-Tell Your name:
let fullName = firstname +" "+ lastname;
console.log("My name is "+fullName);

//2-Maths :
var area = PI*radius**2;
console.log("The result of area is : "+area);

var perimeter = 2*PI*radius;
console.log("The result of perimeter is : "+perimeter);

//3-Motivation : 
console.log("A wise man named "+favoriteSuperhero+" said: "+favoriteQuote);

//#Task 3 : Variable swap :

let a = 3;
let b = 10;

console.log("Befor swapping: a="+a+" and b="+b);
//==>swapping code :
let c = 0;
c=b;
b=a;
a=c;
console.log("After swapping: a="+a+" and b="+b);

//---Conditional Statments

//#Task 1 : Even or Odd
let num = 5;
if (num%2==0) {
    console.log("The number "+num+" is Even");
}else {
    console.log("The number "+num+" is Odd");
}
    //==>Ternary Operator :
num%2==0? console.log("The number Even"):console.log("The number Odd");

//#Task 2 : Days of the week
var day=3;

//let day = prompt("Please Enter a Number From 1 to 7");

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednsday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
    default:
        console.log("Unvalid Day");
        break;
}

//#Task 3 : Maximum
let x = -15;
let y = 6;
let z = 2.6;

if (x>y && x>z) {
    console.log("The Max number is : "+x);
}else if(y>x && y>z){
    console.log("The Max number is : "+y);
}else if(z>x && z>y){
    console.log("The Max number is : "+x);
}
console.log("The Max number is : "+Math.max(x,y,z));
//#Task 4: The Teacher

let score = 18;


if (score>0 && score<=100) {
    if (score>85) {
    console.log("grade is A");
    }else if (score<=85 && score>70) {
        console.log("grade is B");
    }else if (score<=70 && score>55) {
        console.log("grade is C");
    }else if (score<=55 && score>40) {
        console.log("grade is D");
    }else if (score<=40 && score>15) {
        console.log("grade is E");
    }else if (score<=15) {
        console.log("grade is D");
    }
}else{
    console.log("Please try a number between 0 and 100");
}
