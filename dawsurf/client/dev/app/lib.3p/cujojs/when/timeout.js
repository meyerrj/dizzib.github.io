(function(e){e(["./when"],function(e){var n;return function t(t,o){var i,u;i=e.defer();u=setTimeout(function r(){u&&i.reject(new Error("timed out"))},o);function f(){clearTimeout(u);u=n}e(t,function(e){f();i.resolve(e)},function(e){f();i.reject(e)});return i.promise}})})(typeof define=="function"?define:function(e,n){typeof module!="undefined"?module.exports=n(require("./when")):this.when_timeout=n(this.when)});