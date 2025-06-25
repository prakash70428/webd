//grade calculator

function gradeCalculator(marks){
    if(marks >= 80){
        return 'O+';
    }
    else if(marks >= 60){
        return 'A+';
    }
    else if(marks >= 40){
        return 'B+';
    }
    else if(marks >= 20){
        return 'C+';
    }
    else{
         return 'Fail';
    }
}

// console.log(gradeCalculator(45));
// console.log(gradeCalculator(1000));
// console.log(gradeCalculator('utkarsh'));

// function sum(num1 , num2){
//     return num1 + num2;
// }
// console.log(sum(10,20));

function sum(num1 , num2){
    return num1 + num2;
}

// let ans = sum(10,'utkarsh');
// let ans = sum(10,true);
// let ans = sum(10,false);
let ans = sum('100',false);

console.log(ans);
console.log(typeof(ans));