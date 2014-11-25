#appRatePlugin
=======================

Open store rate window for Apache Cordova 3.x
Works on iOS and Android

##INSTALLATION

In your Cordova project directory : 
cordova plugin add https://github.com/steevelefort/cordova-apprate-plugin

##USE IT

	appRatePlugin.start({ 
	    AppStoreId: "012345678",
	    PlayStoreId : "com.domain.app",
	    PopupTitle : 'Rate my app',
	    PopupText : 'Do you like this app ? Please, rate it !',
	    ButtonRate : "Rate this app",
	    ButtonLater : "Remind me later",
	    ButtonStop : "No, thanks",
	    AppVersion : "1"
	});

##OPTIONS

###AppStoreId
Your app ID in Apple App Store

###PlayStoreId
Your app ID in Google Play

###PopupTitle
Title of the popup

###PopupText
Message display in the popup

###ButtonRate
Your label for the "rate now" button

###ButtonLater
Your label for the "remind me later" button

###ButtonStop
Your label for the "No, thanks" button

###AppVersion
You app version. Don't forget to change it for each version.
