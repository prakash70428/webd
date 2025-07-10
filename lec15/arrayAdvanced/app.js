// let arr = [10,20,30,40,50];
// for(let item of arr){
//     console.log(item);
// }

//1.forEach() -> methods(array)
// let fruits = ['apple','pineapple','mango','grapes','guava'];

// fruits.forEach( function(item){
//     console.log(item)
// } );

// fruits.forEach( function(item,index){
//     console.log(`index was ${index} -> juice was ${item}`)
// } )

//2. map() -> array
// let marks = [10,15,18,9,28,12,5,40];

// let newMarksArray = marks.map( function(item){
//     return item*2;
// } )

// let newMarksArray = marks.map( function(item,index){
//     return [item*2,index];
// } )


// console.log(newMarksArray);
// console.log(marks);

//3. filter() -> array
// let marks = [1,2,3,4,5,6,7,8,9,10];

// let filteredArray = marks.filter( function(item){
//     if(item >= 5){
//         return true;
//     }
//     return false;
// } )

// console.log(filteredArray);
// console.log(marks);

//4. sort 
// let arr = [16,12,2,34,53,88,90,36,76];
let arr = ['sam' ,'samridhi', 'aryan' ,'aarav','ayush','AArav','Ayush' ]

let newArray = arr.sort( function(a,b){
    // return a - b; //asc
    return b - a;
} )

console.log(newArray);