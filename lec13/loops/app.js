//for loop
// for(let i=0;i <= 5;i++){
//     for(let j=0;j <= 5;j++){
//         if(i == j){
//             break;
//         }
//         console.log(i , j);
//     }
// }

//while loop
//output -> 100 90 80 ______ 0
// let num = 100;
// while(num >= 0){
//     console.log(num);

//     num = num - 10;
// }

//for-in (object)
// let person = {
//     name : 'utkarsh',
//     age : 25,
//     isMale : true
// }

// for(let item in person){
//     console.log(` ${item} --> ${person[item]} `)
// }

//for-of (array,map,lists,vector)
let array = ['mango','apple','orange','pineapple','lichi']
for(let item of array){
    console.log(item);
}