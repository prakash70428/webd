const express = require('express') //function
const app = express() //object or instance



//ask server to listen to your requests
app.listen(8080 , () => {
    console.log("server connected at port 8080");
})