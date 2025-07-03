//q1
// var b = 10;

// function fun(){
//     console.log(b);
// }

// fun();

//q2
// var a = 10;
// function f1(){
//     console.log("hello");
//     function fun2(){
//         console.log(a);
//     }
//     fun2();
// }

// console.log(a);
// f1();

//q3
console.log(a);
var a = 10;

function fun(){
    var b = 100;
    function fun2(){
        console.log(a);
        console.log(b);
    }
    fun2();
}

fun();