$(document).ready(function() {
  // - Unlike a normal closure, we don't have to call it
  // - jQuery will call it when the page is loaded

  // first lets grab the <body></body>
   var $body = $('body');

  // 1. Can you create a <div> with the class "duck" and name it "$duck"

// var $duckDiv = $('<div/>').addClass('duck');
// $body.append($duckDiv);
  // 2. Next, use setInterval to toggle the "flap" class on the duck every 250 ms (1/4 second)
  // setInterval(function(){
  //   $('div').toggleClass('flap');
  // }, 250); 
  // 3. Fantastic!  Now, let's move the duck using CSS "top" and "left"
  // $duckDiv.css({
  // 'top' : '400px' ,
  // 'left': '600px'
  // });
  // 4. Try making the duck move to a different location after 1 second
  // $duckDiv.animate({
  //   'top' : '400px' ,
  //   'left': '600px'
  //   });
  // 5. Congratulations!

//})


// setInterval(function(){
//   $('div').toggleClass('flap');
// }, 250); 

// $duckDiv.animate({
//   'top' : '400px' ,
//   'left': '600px'
//   });


// 5. ——— Part 2: Here we go! —— 
  // 6. Things are getting a bit messy. Put everything from problems 1-4 in a new function 
  // called createDuck that "returns" the duck object

  // 7. Now, let's create lots of ducks!  Use a "for" loop to create 5 ducks
  //    using our fancy new createDuck() function

  // 8a. If you go to the dev tools you’ll see that we made 5 ducks, but they are all in the same place! Modify createDuck so 
  // each time it creates a duck, it appears in a random location. 
  // 8b. The ducks should also move to a random location after 1 second
  // HINT: Use Math.random() * window.innerWidth    for "left"
  //       And Math.random() * window.innerHeight   for "top"

  // 9. Our ducks are going to be easy targets if they only move once.
  //    Modify createDuck() so the ducks keep moving around!

  // 10. Well Done!  

  // ——— Part 3:  We're almost there! —— 

  // 11. BOOM. Attach a "click" handler that adds the "shot" class to
  //     the duck when you click on it!

  // 12. After a duck has been clicked on, remove it from the DOM after
  //     a short delay (1 second)

  // 13. Create a new function named checkForWinner() that reads the DOM
  //     to see if there are any ducks left. If not, alert "YOU WIN!"

  // 14. BONUS: The ducks are moving pretty erratically, can you think
  //     of a way to adjust the ducks speed based on how far needs to move?

  // 15. BONUS: Add the "left" and "right" class to the duck based on the
  //     direction the duck is flying

  // FIN. You win 1 trillion tokens.  Play the day away!

var $createDuck = function(){
  var x = Math.floor((Math.random() * 10) + 1);
  var $duckDiv = $('<div/>').addClass('duck');
  x = $body.append($duckDiv);

  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var $top = (Math.random()*(windowHeight-400))+100 +'px';
  var $left = Math.random()*(windowWidth-600)+ 'px';

  $duckDiv.animate({
    'top' : `${$top}` ,
    'left': `${$left}`
    });
    setInterval(function(){
      $('div').toggleClass('flap');
    }, 250); 

  }

for(var i=0 ; i<5 ; i++){
  $createDuck();
}
 
var duckClick;
$(".duck").click(function(){
if( duckClick!= true ) {
    duckClick= true;
    var $shotkDiv = $('<div/>').addClass('shot');
    //$('.duck').remove();
     x=$body.append($shotkDiv) ;
     $shotkDiv.css({ 
     'position': 'absolute',
      'background-image': 'url(images/shot.png)',
      'background-position': '-100px -160px',
      'width': '110px',
      'height': '115px',
      'transition': 'top 1s, left 1s'
});

} })
// var $checkForWinner= function(){
//   if(x = 0){
//     alert(You Win !);
//   }
// } 

console.log($createDuck());

})