(function(){var a=function(a,b){return function(){return a.apply(b,arguments)}};define(["underscore","lib/platform/features","lib/platform/net","lib/guardian","lib/datatype.extension/string"],function(b,c,d){var e;return e=function(){function e(){this._get_no_connect_msg=a(this._get_no_connect_msg,this),this._init=a(this._init,this),this._trigger=a(this._trigger,this),this._trigger_throttled=a(this._trigger_throttled,this),this.trigger=a(this.trigger,this),this.stop=a(this.stop,this),this.start=a(this.start,this)}return e.prototype._THROTTLE_FREQ_HZ=20,e.prototype._WS_STATE_CONNECTING=0,e.prototype._WS_STATE_OPEN=1,e.prototype._WS_STATE_CLOSING=2,e.prototype._WS_STATE_CLOSED=3,e.prototype._ws=void 0,e.prototype._ws_state_trailing=void 0,e.prototype.on_connect=function(){},e.prototype.on_command=function(){},e.prototype.on_disconnect=function(){},e.prototype.on_error=function(){},e.prototype.on_trigger=function(){},e.prototype.start=function(b){var e,f;if(!c.websockets){this.on_error({message:"Cannot connect because web sockets are not supported. Please upgrade your browser."});return}try{return f=["ws://"+assert(function(){return b!=null?b.server:void 0})+":"+assert(function(){return b!=null?b.port:void 0})+"/websession",""],this._url=f[0],e=f[1],this._ws=assert(a(function(){return d.create_websocket(this._url)},this)),this._init()}catch(g){return this.on_error({message:this._get_no_connect_msg(" "+g.message)})}},e.prototype.stop=function(){assert(a(function(){var a;return((a=this._ws)!=null?a.readyState:void 0)===this._WS_STATE_OPEN},this));try{return this._ws.close()}catch(b){return this.on_error({message:"Error on socket close: "+b.message})}},e.prototype.trigger=function(a){return this._trigger_throttled(a)},e.prototype._trigger_throttled=function(a){return b.throttle(this._trigger(a),1e3/this._THROTTLE_FREQ_HZ,!0)},e.prototype._trigger=function(b){try{return assert(a(function(){return this._ws},this)).send(this._pack(b)),this.on_trigger(b)}catch(c){return this.on_error({message:"Unable to send packet "+b+" to "+url+". "+c.message})}},e.prototype._init=function(){this._ws_state_trailing=this._WS_STATE_CLOSED,this._ws.onerror=a(function(a){var b;return b=(a!=null?a.reason:void 0)?" "+a.reason:(a!=null?a.message:void 0)?" "+a.message:"",this.on_error({message:"A network error occurred."+b})},this),this._ws.onopen=a(function(){return assert(a(function(){return this._ws.readyState===this._WS_STATE_OPEN},this)),this.on_connect({message:"Connected!"}),this._ws_state_trailing=this._ws.readyState},this),this._ws.onmessage=a(function(a){return this.on_command(this._unpack(a.data))},this),this._ws.onclose=a(function(b){var c;return assert(a(function(){return this._ws.readyState===this._WS_STATE_CLOSED},this)),c=(b!=null?b.reason:void 0)?" "+b.reason:"",this._ws_state_trailing===this._WS_STATE_OPEN?this.on_disconnect({message:"Disconnected."+c}):this.on_error({message:this._get_no_connect_msg(c)}),this._ws_state_trailing=this._ws.readyState},this)},e.prototype._pack=function(a){var b,c;return c=a[0],b=a[1],assert(function(){return c!=null&&c.length>0}),(""+c+" "+(b!=null?JSON.stringify(b):"")).trim_lr()},e.prototype._unpack=function(a){var b;assert(function(){return a!=null&&a.length>0});if((b=a.split(/\s(.+)/)).length!==3)throw"unable to unpack due to unexpected message format: "+a;return[b[0],JSON.parse(b[1])]},e.prototype._get_no_connect_msg=function(a){return"Unable to connect to "+this._url+"."+a},e}(),new e})}).call(this);