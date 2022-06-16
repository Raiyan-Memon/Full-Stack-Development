const express = require('express');
const bodyparser = require('body-parser');
const app = express();


app.use(bodyparser.urlencoded({extended: true}));


app.get('/welcome', function(req, res){
    res.send("Welcome to the calculator");
});

app.get('/',function(req, res){
    res.sendFile(__dirname + '/index.html');
});


app.get('/bmicalculator',function(req, res){

    res.sendFile(__dirname + '/bmicalculator.html');
});

app.post('/bmicalculator', function (req, res) { 


    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);

    var total = height  + weight;

    res.send('You total BMI is '+ total);


 });

app.post('/',function(req, res){

    // console.log(req.body.num1);

    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);

    var total = num1 + num2;



    res.send('Total is ' + total);
})

app.listen(3000, function () { 
    console.log("hello Raiyan Server started at 3000");
 });