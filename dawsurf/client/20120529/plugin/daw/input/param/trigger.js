(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};define(["jquery","underscore","strategy/touch","lib/guardian"],function(b,c,d){var e;return e=function(){function e(){this._on_touchmove=a(this._on_touchmove,this),this.stop_sampling=a(this.stop_sampling,this),this.touch_tap=a(this.touch_tap,this),this.touch_start=a(this.touch_start,this)}return e.prototype.on_trigger=function(){},e.prototype.touch_start=function(c,e){var f;return assert(a(function(){return this._$target==null},this)),f=[e.pageX,e.pageY],this._x0=f[0],this._y0=f[1],(this._$target=b(assert(function(){return e.target}))).on(d.event_name_move,{e:c},a(function(a){return this._on_touchmove(d.get_raw_event(a))},this))},e.prototype.touch_tap=function(a,b){return this.on_trigger(a,c.extend(b,{is_tap:!0}))},e.prototype.stop_sampling=function(){if(!this._$target)return;return this._$target.off(d.event_name_move),this._$target=void 0},e.prototype._on_touchmove=function(b){var d,e,f,g,h,i;assert(a(function(){return this._$target!=null},this)),h=[b.pageX-this._x0,b.pageY-this._y0],d=h[0],e=h[1],i=[Math.abs(d),Math.abs(e)],f=i[0],g=i[1];if(!(f>this._MOVE_THRESHOLD||g>this._MOVE_THRESHOLD))return;this.stop_sampling();if(f>g&&f/g>this._XY_TOLERANCE)return this.on_trigger(b.data.e,c.extend(b,{is_tap:!1}))},e}(),new e})}).call(this);