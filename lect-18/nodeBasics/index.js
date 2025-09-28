console.log("Hello Utkarsh✌");
console.log("aaj se ham nodejs mein kaam karengey")

let PI = 3.14;
let magicNum = 68;
console.log('utkarsh sab kuch js mein shikha hai');

function sqr(num){
    // console.log(num * num);
    return num * num;
}

let obj = {
    first : 'utkarsh',
    last : 'kumar',
    age : '25',
    getNaam : function(){
        console.log(this.first + " " + this.last);
    }
}

console.log(PI);
console.log(magicNum);
console.log(sqr(6));
console.log(obj.getNaam());
