cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-image-picker.ImagePicker",
        "file": "plugins/cordova-plugin-image-picker/www/imagepicker.js",
        "pluginId": "cordova-plugin-image-picker",
        "clobbers": [
            "plugins.imagePicker"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.geolocation",
        "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
        "pluginId": "cordova-plugin-geolocation",
        "clobbers": [
            "navigator.geolocation"
        ]
    },
    {
        "id": "cordova-plugin-geolocation.PositionError",
        "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
        "pluginId": "cordova-plugin-geolocation",
        "runs": true
    },
    {
        "id": "cordova-plugin-fastrde-checkgps.CheckGPS",
        "file": "plugins/cordova-plugin-fastrde-checkgps/www/CheckGPS.js",
        "pluginId": "cordova-plugin-fastrde-checkgps",
        "clobbers": [
            "CheckGPS"
        ]
    },
    {
        "id": "cordova-plugin-request-location-accuracy.RequestLocationAccuracy",
        "file": "plugins/cordova-plugin-request-location-accuracy/www/android/RequestLocationAccuracy.js",
        "pluginId": "cordova-plugin-request-location-accuracy",
        "clobbers": [
            "cordova.plugins.locationAccuracy"
        ]
    },
    {
        "id": "cordova-plugin-whitelist.whitelist",
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "pluginId": "cordova-plugin-whitelist",
        "runs": true
    },
    {
        "id": "phonegap-plugin-push.PushNotification",
        "file": "plugins/phonegap-plugin-push/www/push.js",
        "pluginId": "phonegap-plugin-push",
        "clobbers": [
            "PushNotification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-image-picker": "1.1.1",
    "cordova-plugin-compat": "1.0.0",
    "cordova-plugin-geolocation": "2.2.0",
    "cordova-plugin-fastrde-checkgps": "0.9.9",
    "cordova-plugin-request-location-accuracy": "2.0.0",
    "cordova-plugin-whitelist": "1.2.1",
    "phonegap-plugin-push": "1.5.3"
};
// BOTTOM OF METADATA
});