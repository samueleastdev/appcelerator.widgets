
/**
 * Left button click send anywhere
 * @param {object} data
 * @return {null}
 * @author sam
 */
function leftClick(_event) {

	alert("Left click");

}

/**
 * right button click send anywhere
 * @param {object} data
 * @return {null}
 * @author sam
 */
function rightClick(_event) {

	alert("Right click");

}

/**
 * open a widget controller
 * @param {object} data
 * @return {null}
 * @author sam
 */
function openController(_event) {

	console.log("click event", _event.source.controller);

	var Window = Alloy.createController(_event.source.controller, {
		data : "Sending this string through"
	}).getView();

	Window.open();

}

$.Window.open();
