let person = {
    firstName:"Ali",
    lastName:"Oubraim",
    age:25,
    get fullName(){
        return `My name is ${this.firstName} ${this.lastName}`;
    },
    set fullName(name){
        const parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
  
}

person.fullName = "Mohamed Aissa";
console.log(person.fullName);
console.log(person.firstName);

//Task : Are you Older Than me ?
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    compareAge(otherPerson){
        if (this.age>otherPerson.age) {
            console.log(`${otherPerson.name} is older than me.`); 
        }else if (this.age<otherPerson.age) {
            console.log(`${otherPerson.name} is younger than me.`); 
        }else {
            console.log(`${otherPerson.name} i the same age as me.`); 
        }
    }
}

p1 = new Person("Ahmed",22);
p2 = new Person("Ibrahim",33);
p3 = new Person("Ali",25);

p1.compareAge(p2);
p2.compareAge(p1);
p3.compareAge(p1);


