// alert("hello");


// document.getElementById('root').innerHTML = "Raiyan";

// $('h1').text("Raiyan");
// $('h1').css("color","red");

$('#fetchbtn').text('Fetching the data');

let btn = $('#fetchbtn');

btn.text('Hello there');

btn.on("click",buttonclickhandler);


function buttonclickhandler() { 
    // alert('Button is clicked');

    console.log('button is clicked');



    //adding ajax in website
    let xhr = new XMLHttpRequest();
    console.log(xhr);

   xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

//This is optional
   xhr.onprogress = function () { 
       console.log('On progress');
    }

    //what to do when response is ready
    xhr.onload = function(){

        //cheching status
if(this.status == 200){

   

    let sum = 0;

    
    function myFunction(item) {
      sum += item;
      
      //   $('#getdata').text(sum);
      
    }
    
    
    // console.log(jsondata);
    
    // var jsondata = this.responseText;
    // jsondata.forEach(myFunction);
    // $('#getdata').text(jsondata);




    // $('#getdata').text(this.resp onseText);


    var jsondata = this.responseText;
    
    console.log(jsondata);
    console.log(jsondata.length);

    for(i=0; i<=jsondata.length ; i++){
     $('#getdata').html(

        '<ul><li>'+ jsondata['title'] + '</li></ul>');
    }

}
else{
    console.error("file not found");
}

    }

    //for sending the data
    xhr.send();
 }

 $('#fetchbtn2').on("click",fetchbtn2);

 function fetchbtn2(){

    // alert("On progress");   

    let xhr = new XMLHttpRequest();
    // xhr.open('GET','/raiyan.txt', true);

    // getting the request from the website
    xhr.open('GET','https://jsonplaceholder.typicode.com/posts', true);


    xhr.onprogress = function(){
        console.log("Data is on progress");
    }


    xhr.onload = function () {
        
        // getting the response in thee json format
        let jsonres = JSON.parse(this.responseText);
        console.log(jsonres);

        let id = "";
        let userid = "";
        let title = "";

        for(let val in jsonres){
            id += "<tr><td>" +jsonres[val].id+ "</td></tr>";
            userid += "<tr><td>" +jsonres[val].userId+ "</td></tr>";
            title += "<tr><td>" +jsonres[val].title+ "</td></tr>";
        }
        $('#id').html(id);
        $('#userid').html(userid);
        $('#title').html(title);
     }
     xhr.send();
 }



 $('#fetchfile').on("click", fetchingfile);
 function fetchingfile(){  
    
    // alert("clickd");

    let xhr = new XMLHttpRequest();

    xhr.open('GET','raiyan.txt', true);

    xhr.onload = function(){


        
        $('#data').text(this.responseText);
    }
    xhr.send();
 }






