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
// let obj2 = {
//     num : 20,
//     fn : function(){
//             function calculate(){
//                 console.log(this);
//             }
//             calculate();
//         }
// }

// obj2.fn();

//3. constructor function calling
// function CreateObj(){
//     this.x = 20;
// }

// let obj = new CreateObj();
// console.log(obj);
// console.log(obj.x);
//newly created object ko this point krega hamesha

//4. .call() , .apply() , .bind()
// let obj = {
//     a : 20,
//     fn : function(a,b,c){
//         console.log(this ,  a, b, c);
//     }
// }

// let obj2 = {
//     a : 50   
// }

// let obj3 = {
//     name : 'utkarsh'
// }

// obj.fn();
// obj2.fn(); //error

// obj.fn.call(obj3);

//jab bhi tum .call() method ko istemaal kr rahe hote ho tab jo aap  call ke andar
// mention karte ho aapka this usse point karta hai.

// obj.fn.call(obj, 1, 2, 3);
// obj.fn.apply(obj,[5, 6, 7]);

//.bind()

// let obj3 = {
//     num : 3,
//     fn : function(){
//         console.log(this);
//     }
// }

// let myFun = obj3.fn.bind(obj3);
// myFun(); //regular invocation

//5. arrow function
//traditional function
function add(a , b){
    return a +b;
}
//Arrow function
const add = (a,b) => {
    return a + b;
}



