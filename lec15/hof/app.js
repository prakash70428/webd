//cond 1
// function A(fn){
//     console.log('hi i am inside A');
//     fn();
// }
// function B(){
//     console.log('hi i am inside B');
// }

// A(B);

//cond2
// function a(){
//     console.log('inside a');
//     function b(){
//         console.log('inside b');
//     }

//     return b;
// }

// let temp = a();
// console.log(temp);

//read life usage
let arr = ['utkarsh','codeyuva',10,20,true,false,30,true];

// function getBoolean(arr){
//     let result = [];
//     for(let item of arr){
//         if(typeof item == 'boolean'){
//             result.push(item);
//         }
//     }

//     return result;
// }
// function getString(arr){
//     let result = [];
//     for(let item of arr){
//         if(typeof item == 'string'){
//             result.push(item);
//         }
//     }

//     return result;
// }
// function getNumber(arr){
//     let result = [];
//     for(let item of arr){
//         if(typeof item == 'number'){
//             result.push(item);
//         }
//     }

//     return result;
// }

// console.log(getBoolean(arr));
// console.log(getString(arr));
// console.log(getNumber(arr));

//----------------------------------------
//Optimised HOF way
function getBoolean(item){
    return typeof item == 'boolean';
}
function getString(item){
    return typeof item == 'string';
}
function getNumber(item){
    return typeof item == 'number';
}

//loop and result append karna
function get(arr,fn){
    let result = [];
    for(let item of arr){
        if(fn(item)){
            result.push(item);
        }
    }

    return result;
}

console.log(get(arr,getBoolean));
console.log(get(arr,getString));
console.log(get(arr,getNumber));

