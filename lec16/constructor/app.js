// function fun(){

// }

// let naam = fun();
// console.log(naam);

//constructor
// function user(){
//     this.username = 'utkarsh';
//     this.email = 'utkarshkumar.india@gmail.com'
// }

// let user1 = new user();
// console.log(user1)
//--------------------
// function User(user , mail){
//     this.username = user;
//     this.email = mail;
// }

// let user1 = new User('utkarsh','utkarshkumar.india@gmail.com');
// let user2 = new User('prakash','prakashkumar.india@gmail.com');

// console.log(user1);
// console.log(user2);

//----------------
// function User(user , mail){
//     this.username = user;
//     this.email = mail;

//     this.descripton = function(){
//         return (`my name is ${this.username}`)
//     }
// }

// let user1 = new User('utkarsh','utkarshkumar.india@gmail.com');
// let user2 = new User('prakash','prakashkumar.india@gmail.com');

// console.log(user1);
// console.log(user1.descripton())
// console.log(user2);
// console.log(user2.descripton())

// ------------

function User(user , mail){
    this.username = user;
    this.email = mail;
}

User.prototype.descripton = function(){
        return (`my name is ${this.username}`)
}

let user1 = new User('utkarsh','utkarshkumar.india@gmail.com');
let user2 = new User('prakash','prakashkumar.india@gmail.com');

console.log(user1);
console.log(user1.descripton())
console.log(user2);
console.log(user2.descripton())