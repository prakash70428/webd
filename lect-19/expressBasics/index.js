//used for making server
const express = require('express') //function
const app = express() //object or instance

app.get('/', (req, res) => {
  res.send('Utkarsh tumhara web server connected hogya bhai!!')
})

app.get('/akash', (req, res) => {
  res.send('hello from akash')
})

app.use((req,res) => {
  //callback function
  // console.log(req);
  // console.log(res);
  console.log("You made a request utkarsh!")
})


//ask server to listen to your requests
app.listen(8080 , () => {
    console.log("server connected at port 8080");
})
