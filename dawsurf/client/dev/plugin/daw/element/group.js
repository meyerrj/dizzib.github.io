(function(){var t=function(t,e){return function(){return t.apply(e,arguments)}};define(["jquery","underscore","lib/guardian","./box","./param","text!./group.html","css!./cell","css!./group"],function(e,n,r,a,i,o){var s;return new(s=function(){function s(){this.auto_expand=t(this.auto_expand,this);this.create=t(this.create,this);this.add=t(this.add,this);this.init=t(this.init,this)}s.prototype._AUTO_EXPAND_WILD_GROUP_THRESHOLD=8;s.prototype.init=function(t){t.$desk.on("safe-tap",".wild .group",{on_toggle:this.on_toggle},function(t){var n,r;(r=e(this)).toggleClass("collapsed");(n=r.siblings(".param[data-group-id='"+r.attr("id")+"']")).toggleClass("hidden");t.data.on_toggle({$target:r});r.animate({left:"+=0"},0,function(){n.indicate();return r.indicate()});return t.handled=true});t.$desk.on("safe-tap",".tame .group",{toggle:a.toggle},function(t){t.data.toggle(e(this));return t.handled=true});return this._render=n.template(o)};s.prototype.on_toggle=function(){};s.prototype.add=function(t){var e;e=t.$box.find("#"+r.assert(function(){return t.group_uid}));e.after(this._create_params(t));if(e.parents(".wild").length){return e.siblings(".param[data-group-id='"+t.group_uid+"']").addClass("hidden")}};s.prototype.create=function(t){var n;t.$cells.append(n=e(this._render(t)));if(n.parents(".wild").length){return n.addClass("collapsed")}};s.prototype.auto_expand=function(t){var e,n;if((n=(e=t.find(".wild")).find(".group")).length<=this._AUTO_EXPAND_WILD_GROUP_THRESHOLD){n.removeClass("collapsed");e.find(".param").removeClass("hidden");return this.on_toggle()}};s.prototype._create_params=function(t){var n,r,a,o,s,d;r="";d=t.group_params;for(o=0,s=d.length;o<s;o++){a=d[o];r+=i.render(t,a)}(n=e(r)).filter(".param").each(function(){return i.setup(e(this))});return n};return s}())})}).call(this);