// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var loaded_callback = args.loaded_callback;
console.log("args", args);

var SamuelEastDevPicker = Ti.UI.createPicker({
	height : 200,
	width : Titanium.UI.FILL,
	type : args.type
});

if (args.values && args.values.length > 0) {

	var data = [];
	for (var i = 0; i < args.values.length; i++) {

		var row = Ti.UI.createPickerRow({
			data : args.values[i]
		});

		var label = Ti.UI.createLabel({
			text : args.values[i].title,
			color : "black",
			font : {
				fontSize : 16,
				fontFamily : "Avenir-Book"
			},
			width : Ti.UI.FILL,
			textAlign : Titanium.UI.TEXT_ALIGNMENT_CENTER,
			height : Ti.UI.SIZE
		});
		row.add(label);
		data.push(row);

	};
	SamuelEastDevPicker.add(data);

}

$.dialogPicker.add(SamuelEastDevPicker);

SamuelEastDevPicker.selectionIndicator = true;
SamuelEastDevPicker.setSelectedRow(0, 0);

$.dialogBoxButton1.addEventListener('click', function() {

	$.dialogBox.animate(Ti.UI.createAnimation({
		top : Alloy.Globals.Device.height,
		duration : 250,
	}));

	$.dimmedBackground.animate(Ti.UI.createAnimation({
		duration : 350,
		opacity : 0,
	}), function(_event) {

		loaded_callback({
			success : false
		});

	});

});

$.dialogBoxButton2.addEventListener('click', function() {

	$.dialogBox.animate(Ti.UI.createAnimation({
		top : Alloy.Globals.Device.height,
		duration : 250,
	}));

	$.dimmedBackground.animate(Ti.UI.createAnimation({
		duration : 350,
		opacity : 0,
	}), function(_event) {

		loaded_callback({
			success : true,
			value : (SamuelEastDevPicker.value) ? SamuelEastDevPicker.value : SamuelEastDevPicker.getSelectedRow().data
		});

	});

});

$.dimmedBackground.animate(Ti.UI.createAnimation({
	opacity : 0.6,
}), function(_event) {

});

// Animate the view
$.dialogBox.animate(Ti.UI.createAnimation({
	top : (Alloy.Globals.Device.height / 2) - (370 / 2),
	duration : 250,
}), function(_event) {

});
