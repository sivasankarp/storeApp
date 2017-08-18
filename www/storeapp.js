/**
 * storeapp
	
	Phonegap plugin for check or launch other application in android device (iOS support).
*/
var exec = require('cordova/exec');

module.exports = {
    /** 
     * Set application params
     *
     * @param {Mixed} params				params, view documentation 
     * @param {Mixed} extra   				Extra fields
     * @param {Function} errorCallback		The callback that is called when an error occurred when the program starts.
     *
     */

    set: function(params, extra) {
        var output = [params];

        if (extra != undefined) {
            output.push(extra);
        } else {
            output.push(null);
        }

        return {
            start: function(completeCallback, errorCallback) {
                completeCallback = completeCallback || function() {};
                errorCallback = errorCallback || function() {};

                exec(completeCallback, errorCallback, "storeapp", "start", output);
            },
            check: function(completeCallback, errorCallback) {
                completeCallback = completeCallback || function() {};
                errorCallback = errorCallback || function() {};

                exec(completeCallback, errorCallback, "storeapp", "check", output);
            },
            go: function(completeCallback, errorCallback) {
                completeCallback = completeCallback || function() {};
                errorCallback = errorCallback || function() {};

                exec(completeCallback, errorCallback, "storeapp", "go", output);
            }
        }
    },
    /**
     * extra values
     */
    getExtras: function(completeCallback, errorCallback) {
        exec(completeCallback, errorCallback, "storeapp", "getExtras", []);
    },
    getExtra: function(extraValue, completeCallback, errorCallback) {
        exec(completeCallback, errorCallback, "storeapp", "getExtra", [extraValue]);
    },
    hasExtra: function(extraValue, completeCallback, errorCallback) {
        this.getExtra(extraValue, completeCallback, errorCallback);
    }
}
