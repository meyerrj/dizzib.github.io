(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};define(["jquery","strategy/touch","lib/guardian","css!./desk.panner.css"],function(b,c){var d;return d=function(){function d(){this.set_pan_x_on=a(this.set_pan_x_on,this),this.set_pan_x_off=a(this.set_pan_x_off,this),this.set_pan_on=a(this.set_pan_on,this),this.set_pan_off=a(this.set_pan_off,this),this.set_pan_pos=a(this.set_pan_pos,this),this.get_pan_pos=a(this.get_pan_pos,this),this.kill=a(this.kill,this),this.ready=a(this.ready,this),this.init=a(this.init,this)}return d.prototype._MOVE_THRESHOLD=10,d.prototype._SCROLL_DURATION=2e3,d.prototype.init=function(a){return this._$panner=b("<div/>").attr({id:"desk_panner"}).appendTo(assert(function(){return a!=null?a.$root:void 0})),this.on_init({$root:this._$panner})},d.prototype.ready=function(){return this._$panner.scrollview({moveThreshold:this._MOVE_THRESHOLD}),this._$panner.on("scrollstart",a(function(){return this.on_pan_roll_start()},this)),this._$panner.on("scrollstop",a(function(){return this.on_pan_roll_stop()},this))},d.prototype.kill=function(){return this.on_kill(),this._$panner.remove()},d.prototype.on_init=function(){},d.prototype.on_kill=function(){},d.prototype.on_pan_roll_start=function(){},d.prototype.on_pan_roll_stop=function(){},d.prototype.on_resize=function(){},d.prototype.on_touch_stop=function(){},d.prototype.get_pan_pos=function(){return this._$panner.scrollview("getScrollPosition")},d.prototype.set_pan_pos=function(a,b,c){return this._$panner.scrollview("scrollTo",a,b,c)},d.prototype.set_pan_off=function(){return this._$panner.scrollview({moveThreshold:9999,scrollDuration:1}),this._$panner.trigger(c.event_name_end),this._$panner.scrollview("_stopMScroll")},d.prototype.set_pan_on=function(){return this._$panner.scrollview({moveThreshold:this._MOVE_THRESHOLD,scrollDuration:this._SCROLL_DURATION})},d.prototype.set_pan_x_off=function(){return this._$panner.scrollview({direction:"y"})},d.prototype.set_pan_x_on=function(){return this._$panner.scrollview({direction:null})},d}(),new d})}).call(this);