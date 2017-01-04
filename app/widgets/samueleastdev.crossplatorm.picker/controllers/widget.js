// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;
var loaded_callback = args.loaded_callback;
console.log("args", args);

var SamuelEastDevPicker = Ti.UI.createPicker({
	height : 200,
	width : Titanium.UI.FILL,
	type : args.type
});

if (OS_ANDROID) {

	if (args.type === -1) {

		var androidOpts = [];
		var options = args.values;
		for (var i = 0; i < options.length; i++) {
			androidOpts.push(options[i].title);
		};
		androidOpts.push("Cancel");
		var opts = {
			options : androidOpts,
			title : "Select options"
		};
		opts.cancel = (opts.options.length - 1);
		var defaultPickerAndroid = Ti.UI.createOptionDialog(opts);
		defaultPickerAndroid.addEventListener("click", function(_event) {

			if (_event.cancel) {
				return;
			}

			var selectedIndex = _event.source.selectedIndex;
			var ret = androidOpts[selectedIndex];

			loaded_callback({
				success : true,
				value : ret
			});

		});
		defaultPickerAndroid.show();

	}

	/*
	 * Open Titanium.UI.PICKER_TYPE_TIME
	 */
	if (args.type === 0) {

		SamuelEastDevPicker.showTimePickerDialog({
			value : args.setValue,
			callback : function(_event) {
				if (_event.cancel) {

				} else {

					loaded_callback({
						success : true,
						value : _event.value
					});

				}
			}
		});

	}

	/*
	 * Open Titanium.UI.PICKER_TYPE_DATE
	 */
	if (args.type === 1) {

		SamuelEastDevPicker.showDatePickerDialog({
			value : args.setValue,
			callback : function(_event) {
				if (_event.cancel) {

				} else {

					loaded_callback({
						success : true,
						value : _event.value
					});

				}
			}
		});

	}

	/*
	 * Open Titanium.UI.PICKER_TYPE_DATE
	 */
	if (args.type === 2) {

		SamuelEastDevPicker.showDatePickerDialog({
			value : new Date(),
			callback : function(_event) {

				var date = _event.value;
				if (_event.cancel) {

				} else {

					SamuelEastDevPicker.showTimePickerDialog({
						value : new Date(),
						callback : function(_event) {

							var time = _event.value;
							if (_event.cancel) {

							} else {

								var datetime = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes(), time.getSeconds());

								loaded_callback({
									success : true,
									value : datetime
								});

							}
						}
					});

				}
			}
		});

	}

}

if (OS_IOS) {

	// Set the ui
	$.dialogBoxTitleLabel.text = (args.title) ? args.title : "Title";
	$.dialogBoxLabel.text = (args.subtitle) ? args.subtitle : "More information here";

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

}
