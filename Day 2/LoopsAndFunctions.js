//---Loops---
//#Task 1 : Factorial
    var num = 5;
    var res = 1;
    
    if (num===0 || num===1) {
        console.log("Please Give a number above 1");
    }else{
    for (let i = 1; i <= num ; i++) {
        res *= i;  
    }
    }
    console.log("Factorial of "+num+" is " +res);

//#Task 2 : How many digits ?

    /*Divide the integer by 10 and update the integer with the 
    result (integer = integer / 10). The value of the count variable 
    will be the number of digits in the original integer.
    */

    let n = 123334;
    let count = 1;
    while(n/10 >=1){
        n = n/10;
        count++;
    }
    console.log(`The number of digits is ${count}`);
    

//#Task 3 :  Time to draw !
    
    var Tree = "";
    var nbr = 5;
    var space = nbr-1;
    for (let i = 1; i <= nbr; i++) {
        for (let k = 0; k < space ; k++) {
            Tree+=" ";
        }
        space--;
        for (let j = 1; j <=i; j++) { 
           Tree += " *";
        }
        Tree += "\n";
    }

    console.log(Tree);

//---Functions---
//#Task 1 : Going back in time :
//_Factorial =>
function Factorial(n) {
    var res = 1;
    
    if ( n<1 ) {
        console.log("Please enter a positive number");
    }else{
        for (let i = 1; i <= n ; i++) {
        res *= i;
    }
    return res;
    }
    
}

console.log(Factorial(5));

//_nDigits =>
function nDigits(number) {
    
    let count = 1;
    while(number/10 >=1){
        number = number/10;
        count++;
    }
    console.log(`The number of Digits is ${count}`);
}
nDigits(123);

//_numberToDay
function numberToDay(number) {
    switch (number) {
        case 1:
            console.log("Today is Monday");
            break;
        case 2:
            console.log("Today is Tuesday");
            break;
        case 3:
            console.log("Today is Wednsday");
            break;
        case 4:
            console.log("Today is Thursday");
            break;
        case 5:
            console.log("Today is Friday");
            break;
        case 6:
            console.log("Today is Saturday");
            break;
        case 7:
            console.log("Today is Sunday");
        default:
            console.log("Unvalid Day");
            break;
    }

}

numberToDay(5);

//_Max =>
function Max(x,y,z) {
    if (x>y && x>z) {
        console.log("The Max number is : "+x);
    }else if(y>x && y>z){
        console.log("The Max number is : "+y);
    }else if(z>x && z>y){
        console.log("The Max number is : "+x);
    }

    //console.log("The Max number is : "+Math.max(x,y,z));
}
Max(33,5,99);

//_MyGrade =>
function MyGrade(score) {
    if (score>0 && score<=100) {
        if (score>85) {
        console.log("Your grade is A");
        }else if (score<=85 && score>70) {
            console.log("Your grade is B");
        }else if (score<=70 && score>55) {
            console.log("Your grade is C");
        }else if (score<=55 && score>40) {
            console.log("Your grade is D");
        }else if (score<=40 && score>15) {
            console.log("Your grade is E");
        }else if (score<=15) {
            console.log("Your grade is D");
        }
    }else{
        console.log("Please try a number between 0 and 100");
    }
}

MyGrade(33);

//#Task 2 : The Exdended Factorial :
function ExFactorial(a,b) {
    
    if (a<b || a>0 || b>0) {
        
        let res = Factorial(a) / (Factorial(b)*Factorial(a-b));
        return res;
    }
}
console.log(ExFactorial(5,2));
//#Task 3 : calculator fonction :
function calculator(n1,sign="",n2) {
    switch (sign) {
        case "+":
        console.log(`The Addition of ${n1} and ${n2} = ${n1+n2}`);
        break;
        case "*":
        console.log(`The Multiplication of ${n1} and ${n2} = ${n1*n2}`);
        break;
        case "/":
        console.log(`The Division of ${n1} and ${n2} = ${n1/n2}`);
        break;
        case "-":
        console.log(`The Substraction of ${n1} and ${n2} = ${n1-n2}`);
        break;
        case "%":
        console.log(`The Modulo of ${n1} and ${n2} = ${n1%n2}`);
        break;
        default:
            console.log("Somthing went wrong!!");
            break;
    }
}

calculator(2,"+",5);
calculator(2,"*",5);
calculator(2,"-",5);
calculator(2,"/",5);
calculator(2,"%",5);
