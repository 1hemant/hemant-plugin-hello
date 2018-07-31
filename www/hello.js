/*global cordova, module*/
//'use strict';
module.exports = {
    
    greet: function (name, successCallback, errorCallback) {
        'use strict';
        cordova.exec(successCallback, errorCallback, "Hello", "greet", [name]);
    }
};
