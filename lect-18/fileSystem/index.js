let fs = require('fs');
// console.log(fs)

//we will perform CRUD

//create or write in fs
let data = 'utkarsh kal tak sab revise karke rakhna and code karke bhi'

fs.writeFile('abc.txt',data,{
    encoding : 'utf-8',
    flag : 'w'
} , (err) => {
    if(err) { throw err }
    console.log('file written succefully');
});

// fs.writeFileSync('abc.txt',data);