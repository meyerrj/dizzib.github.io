(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};define(["jquery","underscore","input/touch","lib/guardian"],function(b,c,d){var e;return e=function(){function e(){this._on_touchmove=a(this._on_touchmove,this),this.stop_sampling=a(this.stop_sampling,this),this.touch_tap=a(this.touch_tap,this),this.touch_start=a(this.touch_start,this)}return e.prototype._MOVE_THRESHOLD=10,e.prototype._XY_TOLERANCE=0,e.prototype.on_trigger=function(){},e.prototype.touch_start=function(a,c){var e,f,g=this;if(this._$target!=null)return;return e=d.get_raw_event(c),f=[e.pageX,e.pageY,b(e.target)],this._x0=f[0],this._y0=f[1],this._$target=f[2],this._$target.on(d.event_name_move,function(b){return g._on_touchmove(a,b)}),this._$target.on(d.event_name_end,function(a){return g.stop_sampling()})},e.prototype.touch_tap=function(a,b){return this.on_trigger(a,c.extend(b,{is_tap:!0}))},e.prototype.stop_sampling=function(){if(!this._$target)return;return this._$target.off(d.event_name_move),this._$target=void 0},e.prototype._on_touchmove=function(a,b){var e,f,g,h,i,j,k,l=this;assert(function(){return l._$target!=null}),b.preventDefault(),g=d.get_raw_event(b),j=[g.pageX-this._x0,g.pageY-this._y0],e=j[0],f=j[1],k=[Math.abs(e),Math.abs(f)],h=k[0],i=k[1];if(h>this._MOVE_THRESHOLD||i>this._MOVE_THRESHOLD){this.stop_sampling();if(h>i&&h/i>this._XY_TOLERANCE)return this.on_trigger(a,c.extend(g,{is_tap:!1}));return}return},e}(),new e})}).call(this);