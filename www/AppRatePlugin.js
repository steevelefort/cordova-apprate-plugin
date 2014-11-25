var exec = require('cordova/exec');
/**
 * Constructor
 */
function AppRatePlugin() {}

AppRatePlugin.prototype.start = function(options) {

    if (device.platform=='iOS') linksPlugin.openlink("http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewContentsUserReviews?id="+options.AppStoreId+"&pageNumber=0&sortOrdering=2&type=Purple+Software&mt=8");
    if (device.platform=='Android') linksPlugin.openlink("http://play.google.com/store/apps/details?id="+options.PlayStoreId);
}

var appRatePlugin = new AppRatePlugin();
module.exports = appRatePlugin