$(document).ready(function(){
	createNewGrid(16); //create a 16x16 grid of square divs
	var $divInContainer = $('#container > div'); //store the div in the container

	//set up a hover effect so the square changes color to yellow when passed over
	$divInContainer.hover(function() {
		$(this).css('background-color', 'yellow');
	});

	//If the button is clicked clear the grid and prompt for the number of sides
	$('button').on('click', function(){
		$('#container').find('div').remove();

		var input = prompt('How many sides should the new grid have?');
		var numSides = parseInt(input); //convert it to an integer
		var divLength = 960/numSides; //find the length the the squares of the grid should be

		createNewGrid(numSides); //create a new grid of the size prompted

		$divInContainer = $('#container > div'); //store the new divs in the container
		//set the width and height of the squares
		$divInContainer.css({'width': divLength+'px', 'height': divLength+'px'});

		//set up a hover effect so the square changes color to yellow when passed over
		$divInContainer.hover(function() {
			$(this).css('background-color', 'yellow');
		});
	});
});

// makes a square grid (960px width and height)
//parameter side determine lengthxwidth, so 16 would give a 16x16 square grid
function createNewGrid(sides){
	var $startPoint = $('.grid');
	for(var row = 0;row < sides; row++){
		for(var col = 0;col < sides; col++){ //write a whole row of div's
			$startPoint.before('<div></div>');//insert the divs before the startpoint
			if(col === sides-1){ //start on the next row
				$startPoint.before('<br/>');
			}
		}
	}
}