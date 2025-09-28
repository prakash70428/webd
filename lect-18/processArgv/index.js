// let arr = process.argv;
// console.log(arr);

// let arr = process.argv.slice(2);
// console.log(arr);

// for(let i of arr){
//     console.log(`hello from ${i}`);
// }

//--------------
// let arr = process.argv.slice(2);
// console.log(arr);

const arr = parseInt(process.argv.pop());
console.log(arr);

for(let i=1 ;i <= arr;i++){
    console.log(i);
}

