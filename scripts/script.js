$(document).ready(function(){
	//$('.firstRow').after('<div>Test</div>');
	//$('#container').append($('div'))
	createGrid();

});

function createGrid() {
	for(var x = 0;x < 17; x++){
		$('.grid').after('<div>Test'+x+'</div>');

	}

}