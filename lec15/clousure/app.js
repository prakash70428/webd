// function someFunc() {
//     let username = 'einstein';
//     function printName(){
//         console.log(username);
//     }

//     return printName;
// }

// let returnedValue = someFunc();
// returnedValue(); //function printName(){
                 //console.log(username);
                // } 
                
 //closures -> A function bundled together with reference to its surrounding state or lexical environment
            //    that is called Clouseres   
            
//   function anything(){
//     let naam = 'Utkarsh';

//     function printNaam(){
//         console.log(naam);
//     }

//     // printNaam();
//     return printNaam;
//   }          

//  let fun = anything();
//  fun();

//  real life uses
// function Counter() {
//     let count = 0;

//     function getCount(){
//         return count;
//     }

//     return getCount;
// }

// let counter1 = Counter();
// console.log(counter1());
// console.log(counter1.getCount());

// function Counter() {
//     let count = 0;

//     return {
//         getCount : function(){
//             return count;
//         }
//     };
// }

// let counter1 = Counter();
// console.log(counter1.getCount());

//small application
function Counter(){
    let count = 0;

    return {
        getCount : function(){
            return count;
        },
        increment : function(){
            count += 1;
        },
        decrement : function(){
            count -= 1;
        },
        reset : function(){
            count = 0;
        }
    }
}

let counter1 = Counter();
console.log(counter1.getCount());
counter1.increment();
counter1.increment();
counter1.increment();
console.log(counter1.getCount());
counter1.decrement();
console.log(counter1.getCount());
counter1.reset();
console.log(counter1.getCount());

