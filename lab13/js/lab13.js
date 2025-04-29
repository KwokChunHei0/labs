"use strict;"
/* AST10962 Lab12 Sample JS*/
$(document).ready(function() {

  $(document).keydown(function() {
  var $key = event.which;
  $('content').text($key);
  if($key == 38){
    $('content').text("UP!");
    $('body').css('background-image','url(images/bg0.jpg)');
    }else if($key == 40){
    $('content').text("DOWN!");
  }
});

  // Lab 12 Task 3
  // var $index = 0;
  // var $pics = ['bg0.jpg', 'bg1.jpg', 'bg2.jpg', 'bg3.jpg'];
  // $(document).keydown(function() {
  //   var $key = event.which;
	//
  //   //check point 3: complete the logic with if-else or switch
	//
  //   var $imageUrl = 'images/' + $pics[$index];
  //   $('body').css('background-image', 'url(' + $imageUrl + ')');
  // });
});
