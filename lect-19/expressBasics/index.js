//used for making server
const express = require('express') //function
const app = express() //object or instance

// app.get('/', (req, res) => {
//   // res.send('Utkarsh tumhara web server connected hogya bhai!!')
//   // res.send('<p>some html</p>')
//   res.status(404).send('Sorry, we cannot find that!')
// })

// app.get('/akash', (req, res) => {
//   res.send('hello from akash')
// })

//adding app.use
//without path i.e for all incoming request
// app.use((req,res) => {
//   //callback function
//   // console.log(req);
//   // console.log(res);
//   console.log("You made a request utkarsh!")
//   res.send('<h1>aaj november hai </h1>')
// })

app.use('/middleware' , (req,res) => {
  console.log('you made a request at specific path middleware');
  res.send('<h>Horn Ok Please</h>')
})



//ask server to listen to your requests
app.listen(8080 , () => {
    console.log("server connected at port 8080");
})
