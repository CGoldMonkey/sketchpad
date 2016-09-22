# sketchpad
a browser version of something between a sketchpad and an Etch-A-Sketch

Will involve jQuery, CSS, and HTML

1.) Create a web page with a 16x16 grid of square divs.
	--Will be created using Javascript/jQuery
	--The grids will be put inside a 'container' div
	--Text-align: center helps center the div
	--Setting font-size to 0 for the container div helped get rid
	of the spacing between the divs from the line break

2.)Set up a hover effect so it changes the color of the square when your 
mouse passes over it, leaving a (pixelated) trail through your grid like 
a pen would. 

3.) Add a button to the top of the screen which will clear the current grid 
and send the user a popup asking for how many squares per side to make the 
new grid. Once entered, the new grid should be generated in the same total 
space as before (e.g. 960px wide) and now you've got a new sketch pad. 
	--<button> tag
	--prompt user for the number of squares per side for new grid
	--generate new grid in same total space, 960px wide