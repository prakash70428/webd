// let obj = {
//     evs : 90,
//     cn : 90,
//     web : 100,
//     maths : 28,
//     total : function(){
//         // console.log(90+90+100+28);
//         return (90+90+100+28);
//     },
//     bulao : function(){
//         return ("utkarsh ko bulao!!!")
//     }
// }

let obj2 = {
    name : 'Utkarsh',
    evs : 100,
    cn : 90,
    web : 100,
    maths : 28,
    total : function(){
        // console.log(90+90+100+28);
        return (this.evs+this.cn+this.web+this.maths);
    },
    bulao : function(){
        return (`${this.name} ko bulao!!!`)
    }
}

console.log(obj2.total());
console.log(obj2.bulao());

