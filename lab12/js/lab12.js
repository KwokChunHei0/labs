"use strict";
/*You can use strict mode in all your programs. It helps you to write cleaner code, like preventing you from using undeclared variables. - w3schools*/

$(document).ready(function(){

	$("#testing").mouseenter(function(){ // event
		$("h2").text("Hello World!"); //action 1
		$("h2").css("color","red"); //action 2
		$("h2").css("font-size","50px"); //action 3
	 });

	 $('#newacc').click(function(){ //event
	 $('#newacc').text(); //get the data
	 $('#newacc').text($a + "clicked"); //action 1
	 $('label').toggleClass("new-style"); //action 2

	//  $('label').css("color","blue"); //action 1
	//  $('label').css("font-size","20px"); //action 2
	//  $('label').css("font-weight","bold"); //action 3
	 });
	 $('submit').click( function(){
			var $username = $('#username').val();
			var $password = $('#password').val();
			$('feedback').text($username + ":" +$password);
	 });
});



/* Lab 10 Task 3 */
/*
//checkUsername() – jQuery version
$(
function(){
	$('_________')._________(function(){
		if ($('_________').val().length< 6) {
			$('_________').removeClass('tip');
			$('_________').addClass('warning');
			$('_________').text('too short..');
		}
		else
		{
			$('_________').text('');
		}
	});
}
);
//tipUsername - jQuery version
$(
function(){
	$('_________')._________(function(){
		$('_________').addClass('tip');
		$('_________').text('Username must be at least 6 characters');
	});
}
);
*/
