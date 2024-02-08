const Add = (a,b)=>{
    return a+b;
}

const Subtract = (a,b)=>{
    return a-b;
}

const Multiply = (a,b)=>{
    if (a===0 || b===0) {
        console.log("you can't multiply on 0");
    }
    return a*b;
}

const Divide = (a,b)=>{
    if (b===0) {
        console.log("you can't divide by 0 !!");
    }
    return a/b;
}


