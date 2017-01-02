// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

// Show the loader
$.SamuelEastDevLoader.show();

// hide the loader after 20 seconds
setTimeout(function(){
	
	$.SamuelEastDevLoader.hide();
	
},20000);

/**
 * Left button click send anywhere
 * @param {object} data
 * @return {null}
 * @author sam
 */
function leftClick(_event) {

	$.Window.close();

}