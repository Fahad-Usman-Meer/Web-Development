$(document).ready(function () {
	
	// This method execute on every Button click.

	$(".btn").on('click', function (event) {
		event.stopPropagation();
		event.stopImmediatePropagation();

	    $('.btn').css('background-color', "rgb(239, 239, 239)");  // setting default color to all Buttons
	    $('.btn').css('color', 'black');   // setting font color to all Buttons

	    $(this).css('background-color', 'red'); // setting red color to selected Button
	    $(this).css('color', 'white');  // setting white font color to selected Button. (because 'black font color' on 'Red Button' requires too much focus for users)

	    $('#div-main-content').text("");  // remove previous content from center div
		
	    var tempID = '#div-content-' + $(this).attr('id');   
	    var contentForSelectedButton = $(tempID).html();
	    
	    $('#div-main-content').html(contentForSelectedButton);  // setting new content to center div
	});
});

