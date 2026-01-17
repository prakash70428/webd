const express = require('express');
const app = express();
const path = require('path'); //module of nodejs no need to install

//dummy array instead of DB
let comments = [
    {
        id : 0,
        username : "Utkarsh" ,
        comment : "kuch nahi"
    },
    {
        id : 1,
        username : "Akash",
        comment : "kaun hai"
    },
    {
        id : 2,
        username : "javed",
        comment : "laal hai"
    },
    {
        id : 1,
        username : "Akshay",
        comment : "puls aagyi puls"
    }
]

app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));

app.get('/' , (req,res) => {
    res.send("root mein aapka swagat hai....")
})

app.listen(8080 , () => {
    console.log("server running at port 8080");
})