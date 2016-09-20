$(document).ready(function(){
	//$('.firstRow').after('<div>Test</div>');
	//$('#container').append($('div'))
	createGrid();


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