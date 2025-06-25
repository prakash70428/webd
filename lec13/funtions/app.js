//function defination
function sum(){
    let num1 = 10;
    let num2 = 30;
    console.log(num1 + num2);
}

//function calling
// sum();
// sum();
// sum();

//parametrized function
function triple(num3){ //parameter
    let num1 = 10;
    let num2 = 20;
    console.log(num1 + num2 + num3);
}

// triple(100); //arguments

//returning something from a function
function sum2(){
    let num1 = 10;
    let num2 = 30;
    return (num1 + num2);
}
// console.log(sum2());

//multiple parameters
function praky(num1,num2){
    return (num1 + num2);
}
// console.log(praky(30,40));

function praky(num1,num2){
    return (num1 + num2);
}
// console.log(praky(30));

function praky1(num1,num2){
    console.log(num1);
    console.log(num2);
}
// console.log(praky1(30))

//default parametrized function
function praky2(num1,num2=40){ //default parameter
    console.log(num1);
    console.log(num2);
}

// praky2(20);
// praky2(20,50);

function praky2(num1=40,num2){ //default parameter
    console.log(num1);
    console.log(num2);
}

console.log(praky2(20));

