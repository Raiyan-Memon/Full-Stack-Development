const express = require('express');
const app = express();

app.get('/', function (request, response) { 

    response.send("<h1>Hello, World!</h1>");
    // console.log(response);
 })

 app.get('/contact', function(req, res){
     res.send("Contact me at raiyan@gmail.com");
 })

 app.get('/about', function (req, res) { 
     res.send("This is about Page");
  })

  app.get('/welome', function(req, res){
      res.send("welcome to the server");
  })


app.listen(3000, function(){
    console.log("Hello Raiyan Memon - Server started on port 3000");
});