//1. regular invocation
// function fn(){
//     console.log(this);
// }
// fn();

//2. methond invocation
// let obj = {
//     num : 2,
//     fn : function(){
//         console.log(this);
//     }
// }

// obj.fn();

//qusetion 1 :
// let obj = {
//     number : 2,
//     fn : function(){
//         console.log(this);
//     }
// }

// let myFun = obj.fn;
// myFun();

//question 2 :
let obj2 = {
    num : 20,
    fn : function(){
            function calculate(){
                console.log(this);
            }
            calculate();
        }
}

obj2.fn();