#appRatePlugin
=======================

Open store review window / Cordova3
Works on iOS and Android


##INSTALLATION

In your Cordova project directory : 
cordova plugin add https://github.com/steevelefort/cordova-links-plugin

Verify if you config.xml file contains :

&lt;feature name="LinksPlugin"&gt;
	    &lt;param name="ios-package" value="LinksPlugin" /&gt;
&lt;/feature&gt;

##USE IT
linksPlugin.openlink("http://www.google.fr");
