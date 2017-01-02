// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

// Setup the image array
var imgs = [];
for (var i = 0; i < 121; i++) {
	imgs.push(WPATH("/images/Layer-" + i + ".png"));
};
$.loadingImages.images = imgs;

// Add event listener to close loader
$.alertTransparentBackground.addEventListener("click", function(_event) {

	$.hide();

});

$.show = function(_args) {

	$.loadingWindow.visible = true;
	$.loadingImages.start();
	$.alertTransparentBackground.animate(Ti.UI.createAnimation({
		opacity : 0.6,
	}), function(_event) {

	});

};

$.hide = function() {

	$.alertTransparentBackground.opacity = 0;
	$.loadingImages.stop();
	$.loadingWindow.visible = false;

};
