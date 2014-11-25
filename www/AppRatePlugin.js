var exec = require('cordova/exec');
/**
 * Constructor
 */
function AppRatePlugin() {}

AppRatePlugin.prototype.start = function(options) {

    if (typeof options.AppVersion == "undefined") { options.AppVersion = "1"; }   
    if (typeof options.PopupTitle == "undefined") { options.PopupTitle = "Rate this app"; }   
    if (typeof options.PopupText == "undefined") { options.PopupText = "If you enjoy using this app, would you mind taking a moment to rate it?"; }   
    if (typeof options.ButtonRate == "undefined") { options.ButtonRate = "Yes, rate it"; }   
    if (typeof options.ButtonLater == "undefined") { options.ButtonLater = "Remind me later"; }   
    if (typeof options.ButtonStop == "undefined") { options.ButtonStop = "No, thanks"; }   

    if (localStorage.getItem("count"+options.AppVersion) === null){
        localStorage.setItem("count"+options.AppVersion,1);
    } else {
        if (parseInt(localStorage.getItem("count"+options.AppVersion))>0)
            localStorage.setItem("count"+options.AppVersion,parseInt(localStorage.getItem("count"+options.AppVersion))+1);       
    }

    if (parseInt(localStorage.getItem("count"+options.AppVersion))>2){
        navigator.notification.confirm(
            options.PopupText,
            function(index){ 
                switch(index) {
                    case 1:
                        if (device.platform=='iOS') linksPlugin.openlink("http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewContentsUserReviews?id="+options.AppStoreId+"&pageNumber=0&sortOrdering=2&type=Purple+Software&mt=8");
                        if (device.platform=='Android') linksPlugin.openlink("http://play.google.com/store/apps/details?id="+options.PlayStoreId);
                        localStorage.setItem("count"+options.AppVersion,0);
                        break;
                    case 2:
                        localStorage.removeItem("count"+options.AppVersion);
                        break;
                    case 3:
                        localStorage.setItem("count"+options.AppVersion,0);
                        break;
                }
            },
            options.PopupTitle,       
            [options.ButtonRate, options.ButtonLater, options.ButtonStop]
        );
    }

}

var appRatePlugin = new AppRatePlugin();
module.exports = appRatePlugin