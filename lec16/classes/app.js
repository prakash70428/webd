//constructor function
// function Person(firstname,lastname,mail){
    // this.firstName = firstname;
    // this.lastName = lastname;
    // this.email = mail;
// }
// Person.prototype.printName = function(){
//     console.log(`My name is ${this.firstName} ${this.lastName} `)
// }
// Person.prototype.getName = function(){
//     return (`${this.firstName} ${this.lastName}`)
// }

// let perso1 = new Person('utkarsh','kumar','utkarsh.india@ggmail.com');
// console.log(perso1);
// console.log(perso1.email);
// console.log(perso1.printName());
// console.log(perso1.getName());

// -----------------------
// class syntax
class Person{
    constructor(firstname,lastname,mail){
        this.firstName = firstname;
        this.lastName = lastname;
        this.email = mail;
    }
    getName(){
          return (`${this.firstName} ${this.lastName}`);
    }
    printName(){
          console.log(`My name is ${this.firstName} ${this.lastName} `);
    }
}

let person1 = new Person('ms','dhoni','msd@gmail.com');

console.log(person1);
console.log(person1.email);
console.log(person1.lastName);
console.log(person1.printName());
console.log(person1.getName());