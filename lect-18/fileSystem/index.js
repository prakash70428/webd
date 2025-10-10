let fs = require('fs');
// console.log(fs)

//we will perform CRUD

//create or write in fs
let data = 'utkarsh kal tak sab revise karke rakhna and code karke bhi'
let data2 = 'changed data hu mein'

// fs.writeFile('abc.txt',data,{
//     encoding : 'utf-8',
//     flag : 'w'
// } , (err) => {
//     if(err) { throw err }
//     console.log('file written succefully');
// });

// fs.writeFileSync('abc.txt',data2);

//update or appendFile
// fs.appendFile('abc.txt',
//     '-- akash barish ho rahi hai',
//     (err) => {
//     if(err) { throw err }
//     console.log('update kardiya hai bhai!');
// }
// )

// fs.appendFileSync('abc.txt','  ----ye dekho maine phirse update kardiya');

//Delelte or unlink
// fs.unlink('abc.txt', (err) => {
//   if (err) throw err;
//   console.log('bhai file delete hogyi hai.');
// });

// fs.unlinkSync('abc.txt');
