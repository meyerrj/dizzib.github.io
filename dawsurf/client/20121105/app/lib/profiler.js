(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}},b=Array.prototype.slice;define(["underscore","lib/guardian","lib/datatype.extension/string","js!lib.3p/stacktrace-0.3.min.js"],function(c){var d;return d=function(){function d(){this.profile=a(this.profile,this)}return d.prototype.profile=function(a){var d,e,f,g,h,i,j=this;if(a.__is_profiling!=null)return;a.__is_profiling=!0,e=this._get_module_name(a),f=function(c){var d,f;return d=a[c],f=""+e+"."+c,a[c]=function(){var a,c,e,g;return a=1<=arguments.length?b.call(arguments,0):[],g=(new Date).getTime(),console.log(""+g+" "+f+" -->",a),e=d.apply(null,a),c=(new Date).getTime(),console.log(""+c+" "+f+" <-- "+(c-g)+"ms",e!==void 0?e:void 0),e}},i=c.functions(a);for(g=0,h=i.length;g<h;g++)d=i[g],f(d);return a},d.prototype._get_module_name=function(a){var b;return(b=a.module_name)!=null?b:a.__proto__.constructor.name.replace(/Object/,"")},d}(),new d})}).call(this);