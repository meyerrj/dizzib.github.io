(function(n){n(["when","meld","./lib/functional","./lib/connection"],function(n,t,e,o){return{wire$plugin:function i(e,i){var u=[];function r(n,e,o){return t.on(n,e,o)}function c(n,t,e){u.push(r(n,t,e))}function f(n,t,e,i){return o.parse(n,t,e,i,c)}function a(t,e){var o,i,u;u=e.options;i=[];for(o in u){i.push(f(e,o,u[o],t))}return n.all(i)}i.then(function l(){for(var n=u.length-1;n>=0;n--){u[n].remove()}});return{facets:{connect:{connect:function(t,e,o){n.chain(a(o,e),t)}}}}}}})})(typeof define=="function"?define:function(n,t){module.exports=t.apply(this,n.map(function(n){return require(n)}))});