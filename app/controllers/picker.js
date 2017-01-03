// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

/**
 * Left button click send anywhere
 * @param {object} data
 * @return {null}
 * @author sam
 */
function leftClick(_event) {

	$.Window.close();

}

function plain() {

	var Picker = Alloy.createWidget('samueleastdev.crossplatorm.picker', 'widget', {
		title : "Plain Picker",
		subtitle : "Example of a plain picker",
		type : Titanium.UI.PICKER_TYPE_PLAIN,
		values : [{
			title : "male",
			value : 0
		}, {
			title : "female",
			value : 1
		}],
		loaded_callback : function(_response) {

			console.log("_response", _response);

			$.Window.remove(Picker.dialogBoxWidget);

		}
	});

	$.Window.add(Picker.dialogBoxWidget);

}

function time() {

	var Picker = Alloy.createWidget('samueleastdev.crossplatorm.picker', 'widget', {
		title : "Time Picker",
		subtitle : "Example of a Time picker",
		type : Titanium.UI.PICKER_TYPE_TIME,
		values : null,
		loaded_callback : function(_response) {

			console.log("_response", _response);

			$.Window.remove(Picker.dialogBoxWidget);

		}
	});

	$.Window.add(Picker.dialogBoxWidget);

}

function date() {

	var Picker = Alloy.createWidget('samueleastdev.crossplatorm.picker', 'widget', {
		title : "Date Picker",
		subtitle : "Example of a Date picker",
		type : Titanium.UI.PICKER_TYPE_DATE,
		values : null,
		loaded_callback : function(_response) {

			console.log("_response", _response);

			$.Window.remove(Picker.dialogBoxWidget);

		}
	});

	$.Window.add(Picker.dialogBoxWidget);

}

function dateandtime() {

	var Picker = Alloy.createWidget('samueleastdev.crossplatorm.picker', 'widget', {
		title : "Date & Time Picker",
		subtitle : "Example of a Date & Time picker",
		type : Titanium.UI.PICKER_TYPE_DATE_AND_TIME,
		values : null,
		loaded_callback : function(_response) {

			console.log("_response", _response);

			$.Window.remove(Picker.dialogBoxWidget);

		}
	});

	$.Window.add(Picker.dialogBoxWidget);

}

function countdown() {

	var Picker = Alloy.createWidget('samueleastdev.crossplatorm.picker', 'widget', {
		title : "Countdown Picker",
		subtitle : "Example of a Countdown picker",
		type : Titanium.UI.PICKER_TYPE_COUNT_DOWN_TIMER,
		values : null,
		loaded_callback : function(_response) {

			console.log("_response", _response);

			$.Window.remove(Picker.dialogBoxWidget);

		}
	});

	$.Window.add(Picker.dialogBoxWidget);

}