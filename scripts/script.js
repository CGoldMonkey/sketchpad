$(document).ready(function(){
	//$('.firstRow').after('<div>Test</div>');
	//$('#container').append($('div'))
//	createGrid(); //create a 16x16 grid of square divs
	createNewGrid(16);
	//set up a hover effect so the square changes color when passed over
	$('#container > div').hover(function() {
		$(this).css('background-color', 'yellow');

	});

//	$('#container > div').on('hover', '#container > div', function() {
//		$(this).css('background-color','red');
//	});

	//prompt for the number of sides when the buton is clicked
	$('button').on('click', function(){
//		$('#container').find('div').empty();
//		$('#container').empty();
//		$('#container > div').css('background-color', 'white');
		$('#container').find('div').remove();


//		createNewGrid(17);
//		var divLength = 960/17;
//		$('#container').find('div').css({'width': divLength, 'height': divLength});

//		$('#container').css('background-color', 'red');
		var input = prompt('How many sides should the new grid have?');
		var numSides = parseInt(input);
//		prompt(numSides);
		createNewGrid(numSides);
		var divLength = 960/numSides;
		$('#container').find('div').css({'width': divLength, 'height': divLength});

	$('#container > div').hover(function() {
		$(this).css('background-color', 'yellow');

	});

	});


});

//creates 16x16 square grid
function createGrid() {
	for(var row = 1;row < 17; row++){
		for(var col = 1;col < 17; col++){
			$('.grid').before('<div></div>');
			if(col === 16){
				$('.grid').before('<br/>');
			}
		}
	}
}

//function clears current grid, prompts for # of sides for new grid,
// and makes the new grid
function createNewGrid(sides){
	for(var row = 0;row < sides; row++){
		for(var col = 0;col < sides; col++){
			$('.grid').before('<div></div>');
			if(col === sides-1){
				$('.grid').before('<br/>');
			}
		}
	}
}