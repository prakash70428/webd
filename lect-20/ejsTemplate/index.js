const express = require('express');
const app = express();
const path = require('path')

app.set('view engine' , 'ejs');

// app.set('views' , path.join(__dirname + 'views')); //better

//root route
app.get('/' , (req,res) => {
    // res.send("Hi utkarsh")
    // res.render('/views/index.ejs) default
    res.render('index');
})

//random file route
app.get('/random' , (req,res) => {
    //logic likhne ke baad ans ko template ke andr bhej dengey
    let number = Math.floor( Math.random() * 100 );
    res.render('random' , { number })
})

app.listen(8080 , () => {
    console.log('start hogya hai server!')
})