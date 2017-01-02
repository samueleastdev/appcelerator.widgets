/**
 * Device information, some come from the Ti API calls and can be referenced
 * from here so multiple bridge calls aren't necessary, others generated here
 * for ease of calculations and such.
 *
 * @type {Object}
 * @param {String} version The version of the OS
 * @param {Number} versionMajor The major version of the OS
 * @param {Number} versionMinor The minor version of the OS
 * @param {Number} width The width of the device screen
 * @param {Number} height The height of the device screen
 * @param {Number} dpi The DPI of the device screen
 * @param {String} orientation The device orientation, either "landscape" or "portrait"
 * @param {String} statusBarOrientation A Ti.UI orientation value
 */
Alloy.Globals.Device = {
	currentLanguage : Ti.Locale.currentLanguage,
	currentLocale : Ti.Locale.currentLocal,
	version : Ti.Platform.version,
	versionMajor : parseInt(Ti.Platform.version.split(".")[0], 10),
	versionMinor : parseInt(Ti.Platform.version.split(".")[1], 10),
	width : (Ti.Platform.displayCaps.platformWidth > Ti.Platform.displayCaps.platformHeight) ? Ti.Platform.displayCaps.platformHeight : Ti.Platform.displayCaps.platformWidth,
	height : (Ti.Platform.displayCaps.platformWidth > Ti.Platform.displayCaps.platformHeight) ? Ti.Platform.displayCaps.platformWidth : Ti.Platform.displayCaps.platformHeight,
	dpi : Ti.Platform.displayCaps.dpi,
	orientation : [Titanium.UI.PORTRAIT]
};

if (OS_ANDROID) {
	Alloy.Globals.Device.width = (Alloy.Globals.Device.width / (Alloy.Globals.Device.dpi / 160));
	Alloy.Globals.Device.height = (Alloy.Globals.Device.height / (Alloy.Globals.Device.dpi / 160));
}

if (OS_IOS) {

}

// Sets the Global Brand Alloy.Globals.Brand.mainBorderColor
Alloy.Globals.Brand = {
	font : (OS_IOS) ? "Avenir-Book" : "Montserrat-UltraLight",
	fontBold : (OS_IOS) ? "Avenir-Black" : "Montserrat-Bold",
	fontItalic : (OS_IOS) ? "Avenir-HeavyOblique" : "Montserrat-Bold"
};

// added during app creation. this will automatically login to
// ACS for your application and then fire an event (see below)
// when connected or errored. if you do not use ACS in your
// application as a client, you should remove this block
(function() {
	var ACS = require('ti.cloud'),
	    env = Ti.App.deployType.toLowerCase() === 'production' ? 'production' : 'development',
	    username = Ti.App.Properties.getString('acs-username-' + env),
	    password = Ti.App.Properties.getString('acs-password-' + env);

	// if not configured, just return
	if (!env || !username || !password) {
		return;
	}
	/**
	 * Appcelerator Cloud (ACS) Admin User Login Logic
	 *
	 * fires login.success with the user as argument on success
	 * fires login.failed with the result as argument on error
	 */
	ACS.Users.login({
		login : username,
		password : password,
	}, function(result) {
		if (env === 'development') {
			Ti.API.info('ACS Login Results for environment `' + env + '`:');
			Ti.API.info(result);
		}
		if (result && result.success && result.users && result.users.length) {
			Ti.App.fireEvent('login.success', result.users[0], env);
		} else {
			Ti.App.fireEvent('login.failed', result, env);
		}
	});

})();

