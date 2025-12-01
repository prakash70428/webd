const express = require('express'); //function
const app = express(); //object or instance

app.get('/search', (req, res) => {
//    console.log(res.query);
//    console.log(res.query.search); //key : output 1
   let { search } = req.query; //destructure
   console.log(search);

   res.send('hello utkarsh!');
//    res.send(req.query);
   res.send(req.query.search);
})

//ask server to listen to your requests
app.listen(8080 , () => {
    console.log("server connected at port 8080");
})