// document.querySelector('h1').style.color = 'red';

//with jquery
$('h1').css("color","red");

$('h1').addClass('text font');
//this is how we can add multiple classes

$('h1').removeClass('font text');
//this is how we can remove multiple classes

$('h1').text("bye");
//changing the text

$('button').text('<strong>button</strong>');
//Every button will change the text with 'button'

$('button').html('<strong>button</strong>');
//This takes tags as well as text

console.log($('a').attr("href"));
//getting the attribute of the a tag

$('a').attr("href","https://www.bing.com");
//changing the attribute of the a tag


// Eventlisteners with jQuery

$('button').click(function(){
    $('h1').css("color", "green");
});

//keypress eventlisteners with jquery

// $('body').keypress(function (event) { 
//     // alert("hello this is pressed");

//     console.log(event.key);
//     //This will show which key was clicked
// });

$('input').keypress(function (event) { 
    // alert("hello this is pressed");

    console.log(event.key);
    //This will show which key was clicked inside the input tag
});


//Showing the keypress inside the h1 tag

$(document).keypress(function (event) { 
    $('h1').text(event.key);
 });


 //Hiding the tag on click
//  $('h3').click(function () { 
//      $('h3').hide();
//   })


//---or------


// Another way of writing the eventlisteners
  $('button').on("click", function(){
      $('h3').toggle();
  })

  //fading animation

  $('button').on("click",function(){
      $('h1').fadeToggle();
  })

  //multiple animation on one tag
  $('button').on("click", function(){
      $('h1').slideUp().slideDown().animate({opacity:0.5});
  })