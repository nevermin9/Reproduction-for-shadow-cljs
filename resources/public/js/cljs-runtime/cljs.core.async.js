goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14309 = (function (f,blockable,meta14310){
this.f = f;
this.blockable = blockable;
this.meta14310 = meta14310;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14311,meta14310__$1){
var self__ = this;
var _14311__$1 = this;
return (new cljs.core.async.t_cljs$core$async14309(self__.f,self__.blockable,meta14310__$1));
}));

(cljs.core.async.t_cljs$core$async14309.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14311){
var self__ = this;
var _14311__$1 = this;
return self__.meta14310;
}));

(cljs.core.async.t_cljs$core$async14309.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14309.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14309.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14309.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14309.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14310","meta14310",2058036936,null)], null);
}));

(cljs.core.async.t_cljs$core$async14309.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14309.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14309");

(cljs.core.async.t_cljs$core$async14309.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14309");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14309.
 */
cljs.core.async.__GT_t_cljs$core$async14309 = (function cljs$core$async$__GT_t_cljs$core$async14309(f,blockable,meta14310){
return (new cljs.core.async.t_cljs$core$async14309(f,blockable,meta14310));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14294 = arguments.length;
switch (G__14294) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14309(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14360 = arguments.length;
switch (G__14360) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14370 = arguments.length;
switch (G__14370) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14392 = arguments.length;
switch (G__14392) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17305 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17305) : fn1.call(null,val_17305));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17305) : fn1.call(null,val_17305));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14413 = arguments.length;
switch (G__14413) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___17309 = n;
var x_17310 = (0);
while(true){
if((x_17310 < n__5636__auto___17309)){
(a[x_17310] = x_17310);

var G__17311 = (x_17310 + (1));
x_17310 = G__17311;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14459 = (function (flag,meta14460){
this.flag = flag;
this.meta14460 = meta14460;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14459.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14461,meta14460__$1){
var self__ = this;
var _14461__$1 = this;
return (new cljs.core.async.t_cljs$core$async14459(self__.flag,meta14460__$1));
}));

(cljs.core.async.t_cljs$core$async14459.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14461){
var self__ = this;
var _14461__$1 = this;
return self__.meta14460;
}));

(cljs.core.async.t_cljs$core$async14459.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14459.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14459.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14459.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14459.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14460","meta14460",1178209279,null)], null);
}));

(cljs.core.async.t_cljs$core$async14459.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14459.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14459");

(cljs.core.async.t_cljs$core$async14459.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14459");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14459.
 */
cljs.core.async.__GT_t_cljs$core$async14459 = (function cljs$core$async$__GT_t_cljs$core$async14459(flag,meta14460){
return (new cljs.core.async.t_cljs$core$async14459(flag,meta14460));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14459(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14462 = (function (flag,cb,meta14463){
this.flag = flag;
this.cb = cb;
this.meta14463 = meta14463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14464,meta14463__$1){
var self__ = this;
var _14464__$1 = this;
return (new cljs.core.async.t_cljs$core$async14462(self__.flag,self__.cb,meta14463__$1));
}));

(cljs.core.async.t_cljs$core$async14462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14464){
var self__ = this;
var _14464__$1 = this;
return self__.meta14463;
}));

(cljs.core.async.t_cljs$core$async14462.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14462.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14462.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14462.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14462.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14463","meta14463",172777226,null)], null);
}));

(cljs.core.async.t_cljs$core$async14462.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14462.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14462");

(cljs.core.async.t_cljs$core$async14462.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14462");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14462.
 */
cljs.core.async.__GT_t_cljs$core$async14462 = (function cljs$core$async$__GT_t_cljs$core$async14462(flag,cb,meta14463){
return (new cljs.core.async.t_cljs$core$async14462(flag,cb,meta14463));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14462(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14465_SHARP_){
var G__14467 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14465_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14467) : fret.call(null,G__14467));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14466_SHARP_){
var G__14468 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14466_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14468) : fret.call(null,G__14468));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17323 = (i + (1));
i = G__17323;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17324 = arguments.length;
var i__5770__auto___17325 = (0);
while(true){
if((i__5770__auto___17325 < len__5769__auto___17324)){
args__5775__auto__.push((arguments[i__5770__auto___17325]));

var G__17326 = (i__5770__auto___17325 + (1));
i__5770__auto___17325 = G__17326;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14544){
var map__14545 = p__14544;
var map__14545__$1 = cljs.core.__destructure_map(map__14545);
var opts = map__14545__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14469){
var G__14470 = cljs.core.first(seq14469);
var seq14469__$1 = cljs.core.next(seq14469);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14470,seq14469__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14553 = arguments.length;
switch (G__14553) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14221__auto___17337 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14222__auto__ = (function (){var switch__13734__auto__ = (function (state_14840){
var state_val_14849 = (state_14840[(1)]);
if((state_val_14849 === (7))){
var inst_14650 = (state_14840[(2)]);
var state_14840__$1 = state_14840;
var statearr_14859_17338 = state_14840__$1;
(statearr_14859_17338[(2)] = inst_14650);

(statearr_14859_17338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (1))){
var state_14840__$1 = state_14840;
var statearr_14860_17339 = state_14840__$1;
(statearr_14860_17339[(2)] = null);

(statearr_14860_17339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (4))){
var inst_14564 = (state_14840[(7)]);
var inst_14564__$1 = (state_14840[(2)]);
var inst_14626 = (inst_14564__$1 == null);
var state_14840__$1 = (function (){var statearr_14862 = state_14840;
(statearr_14862[(7)] = inst_14564__$1);

return statearr_14862;
})();
if(cljs.core.truth_(inst_14626)){
var statearr_14863_17340 = state_14840__$1;
(statearr_14863_17340[(1)] = (5));

} else {
var statearr_14864_17341 = state_14840__$1;
(statearr_14864_17341[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (13))){
var state_14840__$1 = state_14840;
var statearr_14866_17342 = state_14840__$1;
(statearr_14866_17342[(2)] = null);

(statearr_14866_17342[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (6))){
var inst_14564 = (state_14840[(7)]);
var state_14840__$1 = state_14840;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14840__$1,(11),to,inst_14564);
} else {
if((state_val_14849 === (3))){
var inst_14655 = (state_14840[(2)]);
var state_14840__$1 = state_14840;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14840__$1,inst_14655);
} else {
if((state_val_14849 === (12))){
var state_14840__$1 = state_14840;
var statearr_14867_17346 = state_14840__$1;
(statearr_14867_17346[(2)] = null);

(statearr_14867_17346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (2))){
var state_14840__$1 = state_14840;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14840__$1,(4),from);
} else {
if((state_val_14849 === (11))){
var inst_14643 = (state_14840[(2)]);
var state_14840__$1 = state_14840;
if(cljs.core.truth_(inst_14643)){
var statearr_14868_17347 = state_14840__$1;
(statearr_14868_17347[(1)] = (12));

} else {
var statearr_14869_17348 = state_14840__$1;
(statearr_14869_17348[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (9))){
var state_14840__$1 = state_14840;
var statearr_14870_17350 = state_14840__$1;
(statearr_14870_17350[(2)] = null);

(statearr_14870_17350[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (5))){
var state_14840__$1 = state_14840;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14871_17352 = state_14840__$1;
(statearr_14871_17352[(1)] = (8));

} else {
var statearr_14872_17354 = state_14840__$1;
(statearr_14872_17354[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (14))){
var inst_14648 = (state_14840[(2)]);
var state_14840__$1 = state_14840;
var statearr_14873_17356 = state_14840__$1;
(statearr_14873_17356[(2)] = inst_14648);

(statearr_14873_17356[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (10))){
var inst_14640 = (state_14840[(2)]);
var state_14840__$1 = state_14840;
var statearr_14875_17357 = state_14840__$1;
(statearr_14875_17357[(2)] = inst_14640);

(statearr_14875_17357[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14849 === (8))){
var inst_14637 = cljs.core.async.close_BANG_(to);
var state_14840__$1 = state_14840;
var statearr_14876_17359 = state_14840__$1;
(statearr_14876_17359[(2)] = inst_14637);

(statearr_14876_17359[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13736__auto__ = null;
var cljs$core$async$state_machine__13736__auto____0 = (function (){
var statearr_14877 = [null,null,null,null,null,null,null,null];
(statearr_14877[(0)] = cljs$core$async$state_machine__13736__auto__);

(statearr_14877[(1)] = (1));

return statearr_14877;
});
var cljs$core$async$state_machine__13736__auto____1 = (function (state_14840){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13734__auto__(state_14840);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e14878){var ex__13740__auto__ = e14878;
var statearr_14879_17362 = state_14840;
(statearr_14879_17362[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_14840[(4)]))){
var statearr_14880_17363 = state_14840;
(statearr_14880_17363[(1)] = cljs.core.first((state_14840[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17364 = state_14840;
state_14840 = G__17364;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$state_machine__13736__auto__ = function(state_14840){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13736__auto____1.call(this,state_14840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13736__auto____0;
cljs$core$async$state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13736__auto____1;
return cljs$core$async$state_machine__13736__auto__;
})()
})();
var state__14223__auto__ = (function (){var statearr_14881 = f__14222__auto__();
(statearr_14881[(6)] = c__14221__auto___17337);

return statearr_14881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14223__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__14884){
var vec__14885 = p__14884;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14885,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14885,(1),null);
var job = vec__14885;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14221__auto___17367 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14222__auto__ = (function (){var switch__13734__auto__ = (function (state_14892){
var state_val_14893 = (state_14892[(1)]);
if((state_val_14893 === (1))){
var state_14892__$1 = state_14892;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14892__$1,(2),res,v);
} else {
if((state_val_14893 === (2))){
var inst_14889 = (state_14892[(2)]);
var inst_14890 = cljs.core.async.close_BANG_(res);
var state_14892__$1 = (function (){var statearr_14901 = state_14892;
(statearr_14901[(7)] = inst_14889);

return statearr_14901;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14892__$1,inst_14890);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____0 = (function (){
var statearr_14904 = [null,null,null,null,null,null,null,null];
(statearr_14904[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__);

(statearr_14904[(1)] = (1));

return statearr_14904;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____1 = (function (state_14892){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13734__auto__(state_14892);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e14905){var ex__13740__auto__ = e14905;
var statearr_14910_17372 = state_14892;
(statearr_14910_17372[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_14892[(4)]))){
var statearr_14919_17373 = state_14892;
(statearr_14919_17373[(1)] = cljs.core.first((state_14892[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17376 = state_14892;
state_14892 = G__17376;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__ = function(state_14892){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____1.call(this,state_14892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__;
})()
})();
var state__14223__auto__ = (function (){var statearr_14920 = f__14222__auto__();
(statearr_14920[(6)] = c__14221__auto___17367);

return statearr_14920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14223__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14921){
var vec__14922 = p__14921;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14922,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14922,(1),null);
var job = vec__14922;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___17379 = n;
var __17380 = (0);
while(true){
if((__17380 < n__5636__auto___17379)){
var G__14925_17381 = type;
var G__14925_17382__$1 = (((G__14925_17381 instanceof cljs.core.Keyword))?G__14925_17381.fqn:null);
switch (G__14925_17382__$1) {
case "compute":
var c__14221__auto___17384 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17380,c__14221__auto___17384,G__14925_17381,G__14925_17382__$1,n__5636__auto___17379,jobs,results,process__$1,async){
return (function (){
var f__14222__auto__ = (function (){var switch__13734__auto__ = ((function (__17380,c__14221__auto___17384,G__14925_17381,G__14925_17382__$1,n__5636__auto___17379,jobs,results,process__$1,async){
return (function (state_14938){
var state_val_14939 = (state_14938[(1)]);
if((state_val_14939 === (1))){
var state_14938__$1 = state_14938;
var statearr_14941_17385 = state_14938__$1;
(statearr_14941_17385[(2)] = null);

(statearr_14941_17385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14939 === (2))){
var state_14938__$1 = state_14938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14938__$1,(4),jobs);
} else {
if((state_val_14939 === (3))){
var inst_14936 = (state_14938[(2)]);
var state_14938__$1 = state_14938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14938__$1,inst_14936);
} else {
if((state_val_14939 === (4))){
var inst_14928 = (state_14938[(2)]);
var inst_14929 = process__$1(inst_14928);
var state_14938__$1 = state_14938;
if(cljs.core.truth_(inst_14929)){
var statearr_14942_17386 = state_14938__$1;
(statearr_14942_17386[(1)] = (5));

} else {
var statearr_14943_17387 = state_14938__$1;
(statearr_14943_17387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14939 === (5))){
var state_14938__$1 = state_14938;
var statearr_14944_17388 = state_14938__$1;
(statearr_14944_17388[(2)] = null);

(statearr_14944_17388[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14939 === (6))){
var state_14938__$1 = state_14938;
var statearr_14945_17389 = state_14938__$1;
(statearr_14945_17389[(2)] = null);

(statearr_14945_17389[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14939 === (7))){
var inst_14934 = (state_14938[(2)]);
var state_14938__$1 = state_14938;
var statearr_14946_17390 = state_14938__$1;
(statearr_14946_17390[(2)] = inst_14934);

(statearr_14946_17390[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17380,c__14221__auto___17384,G__14925_17381,G__14925_17382__$1,n__5636__auto___17379,jobs,results,process__$1,async))
;
return ((function (__17380,switch__13734__auto__,c__14221__auto___17384,G__14925_17381,G__14925_17382__$1,n__5636__auto___17379,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____0 = (function (){
var statearr_14947 = [null,null,null,null,null,null,null];
(statearr_14947[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__);

(statearr_14947[(1)] = (1));

return statearr_14947;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____1 = (function (state_14938){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13734__auto__(state_14938);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e14948){var ex__13740__auto__ = e14948;
var statearr_14949_17391 = state_14938;
(statearr_14949_17391[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_14938[(4)]))){
var statearr_14950_17392 = state_14938;
(statearr_14950_17392[(1)] = cljs.core.first((state_14938[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17393 = state_14938;
state_14938 = G__17393;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__ = function(state_14938){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____1.call(this,state_14938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__;
})()
;})(__17380,switch__13734__auto__,c__14221__auto___17384,G__14925_17381,G__14925_17382__$1,n__5636__auto___17379,jobs,results,process__$1,async))
})();
var state__14223__auto__ = (function (){var statearr_14951 = f__14222__auto__();
(statearr_14951[(6)] = c__14221__auto___17384);

return statearr_14951;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14223__auto__);
});})(__17380,c__14221__auto___17384,G__14925_17381,G__14925_17382__$1,n__5636__auto___17379,jobs,results,process__$1,async))
);


break;
case "async":
var c__14221__auto___17394 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17380,c__14221__auto___17394,G__14925_17381,G__14925_17382__$1,n__5636__auto___17379,jobs,results,process__$1,async){
return (function (){
var f__14222__auto__ = (function (){var switch__13734__auto__ = ((function (__17380,c__14221__auto___17394,G__14925_17381,G__14925_17382__$1,n__5636__auto___17379,jobs,results,process__$1,async){
return (function (state_14964){
var state_val_14965 = (state_14964[(1)]);
if((state_val_14965 === (1))){
var state_14964__$1 = state_14964;
var statearr_14967_17399 = state_14964__$1;
(statearr_14967_17399[(2)] = null);

(statearr_14967_17399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (2))){
var state_14964__$1 = state_14964;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14964__$1,(4),jobs);
} else {
if((state_val_14965 === (3))){
var inst_14962 = (state_14964[(2)]);
var state_14964__$1 = state_14964;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14964__$1,inst_14962);
} else {
if((state_val_14965 === (4))){
var inst_14954 = (state_14964[(2)]);
var inst_14955 = async(inst_14954);
var state_14964__$1 = state_14964;
if(cljs.core.truth_(inst_14955)){
var statearr_14970_17403 = state_14964__$1;
(statearr_14970_17403[(1)] = (5));

} else {
var statearr_14971_17404 = state_14964__$1;
(statearr_14971_17404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (5))){
var state_14964__$1 = state_14964;
var statearr_14972_17405 = state_14964__$1;
(statearr_14972_17405[(2)] = null);

(statearr_14972_17405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (6))){
var state_14964__$1 = state_14964;
var statearr_14973_17406 = state_14964__$1;
(statearr_14973_17406[(2)] = null);

(statearr_14973_17406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (7))){
var inst_14960 = (state_14964[(2)]);
var state_14964__$1 = state_14964;
var statearr_14974_17408 = state_14964__$1;
(statearr_14974_17408[(2)] = inst_14960);

(statearr_14974_17408[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17380,c__14221__auto___17394,G__14925_17381,G__14925_17382__$1,n__5636__auto___17379,jobs,results,process__$1,async))
;
return ((function (__17380,switch__13734__auto__,c__14221__auto___17394,G__14925_17381,G__14925_17382__$1,n__5636__auto___17379,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____0 = (function (){
var statearr_14978 = [null,null,null,null,null,null,null];
(statearr_14978[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__);

(statearr_14978[(1)] = (1));

return statearr_14978;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____1 = (function (state_14964){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13734__auto__(state_14964);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e14979){var ex__13740__auto__ = e14979;
var statearr_14980_17415 = state_14964;
(statearr_14980_17415[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_14964[(4)]))){
var statearr_14981_17416 = state_14964;
(statearr_14981_17416[(1)] = cljs.core.first((state_14964[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17417 = state_14964;
state_14964 = G__17417;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__ = function(state_14964){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____1.call(this,state_14964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__;
})()
;})(__17380,switch__13734__auto__,c__14221__auto___17394,G__14925_17381,G__14925_17382__$1,n__5636__auto___17379,jobs,results,process__$1,async))
})();
var state__14223__auto__ = (function (){var statearr_14982 = f__14222__auto__();
(statearr_14982[(6)] = c__14221__auto___17394);

return statearr_14982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14223__auto__);
});})(__17380,c__14221__auto___17394,G__14925_17381,G__14925_17382__$1,n__5636__auto___17379,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14925_17382__$1)].join('')));

}

var G__17418 = (__17380 + (1));
__17380 = G__17418;
continue;
} else {
}
break;
}

var c__14221__auto___17419 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14222__auto__ = (function (){var switch__13734__auto__ = (function (state_15007){
var state_val_15008 = (state_15007[(1)]);
if((state_val_15008 === (7))){
var inst_15003 = (state_15007[(2)]);
var state_15007__$1 = state_15007;
var statearr_15010_17420 = state_15007__$1;
(statearr_15010_17420[(2)] = inst_15003);

(statearr_15010_17420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15008 === (1))){
var state_15007__$1 = state_15007;
var statearr_15011_17422 = state_15007__$1;
(statearr_15011_17422[(2)] = null);

(statearr_15011_17422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15008 === (4))){
var inst_14985 = (state_15007[(7)]);
var inst_14985__$1 = (state_15007[(2)]);
var inst_14989 = (inst_14985__$1 == null);
var state_15007__$1 = (function (){var statearr_15012 = state_15007;
(statearr_15012[(7)] = inst_14985__$1);

return statearr_15012;
})();
if(cljs.core.truth_(inst_14989)){
var statearr_15013_17424 = state_15007__$1;
(statearr_15013_17424[(1)] = (5));

} else {
var statearr_15014_17425 = state_15007__$1;
(statearr_15014_17425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15008 === (6))){
var inst_14985 = (state_15007[(7)]);
var inst_14993 = (state_15007[(8)]);
var inst_14993__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14994 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14995 = [inst_14985,inst_14993__$1];
var inst_14996 = (new cljs.core.PersistentVector(null,2,(5),inst_14994,inst_14995,null));
var state_15007__$1 = (function (){var statearr_15021 = state_15007;
(statearr_15021[(8)] = inst_14993__$1);

return statearr_15021;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15007__$1,(8),jobs,inst_14996);
} else {
if((state_val_15008 === (3))){
var inst_15005 = (state_15007[(2)]);
var state_15007__$1 = state_15007;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15007__$1,inst_15005);
} else {
if((state_val_15008 === (2))){
var state_15007__$1 = state_15007;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15007__$1,(4),from);
} else {
if((state_val_15008 === (9))){
var inst_15000 = (state_15007[(2)]);
var state_15007__$1 = (function (){var statearr_15031 = state_15007;
(statearr_15031[(9)] = inst_15000);

return statearr_15031;
})();
var statearr_15032_17445 = state_15007__$1;
(statearr_15032_17445[(2)] = null);

(statearr_15032_17445[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15008 === (5))){
var inst_14991 = cljs.core.async.close_BANG_(jobs);
var state_15007__$1 = state_15007;
var statearr_15034_17457 = state_15007__$1;
(statearr_15034_17457[(2)] = inst_14991);

(statearr_15034_17457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15008 === (8))){
var inst_14993 = (state_15007[(8)]);
var inst_14998 = (state_15007[(2)]);
var state_15007__$1 = (function (){var statearr_15035 = state_15007;
(statearr_15035[(10)] = inst_14998);

return statearr_15035;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15007__$1,(9),results,inst_14993);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____0 = (function (){
var statearr_15036 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15036[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__);

(statearr_15036[(1)] = (1));

return statearr_15036;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____1 = (function (state_15007){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13734__auto__(state_15007);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e15038){var ex__13740__auto__ = e15038;
var statearr_15039_17466 = state_15007;
(statearr_15039_17466[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_15007[(4)]))){
var statearr_15040_17467 = state_15007;
(statearr_15040_17467[(1)] = cljs.core.first((state_15007[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17470 = state_15007;
state_15007 = G__17470;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__ = function(state_15007){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____1.call(this,state_15007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__;
})()
})();
var state__14223__auto__ = (function (){var statearr_15041 = f__14222__auto__();
(statearr_15041[(6)] = c__14221__auto___17419);

return statearr_15041;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14223__auto__);
}));


var c__14221__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14222__auto__ = (function (){var switch__13734__auto__ = (function (state_15091){
var state_val_15092 = (state_15091[(1)]);
if((state_val_15092 === (7))){
var inst_15087 = (state_15091[(2)]);
var state_15091__$1 = state_15091;
var statearr_15097_17477 = state_15091__$1;
(statearr_15097_17477[(2)] = inst_15087);

(statearr_15097_17477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15092 === (20))){
var state_15091__$1 = state_15091;
var statearr_15098_17479 = state_15091__$1;
(statearr_15098_17479[(2)] = null);

(statearr_15098_17479[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15092 === (1))){
var state_15091__$1 = state_15091;
var statearr_15099_17481 = state_15091__$1;
(statearr_15099_17481[(2)] = null);

(statearr_15099_17481[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15092 === (4))){
var inst_15052 = (state_15091[(7)]);
var inst_15052__$1 = (state_15091[(2)]);
var inst_15053 = (inst_15052__$1 == null);
var state_15091__$1 = (function (){var statearr_15100 = state_15091;
(statearr_15100[(7)] = inst_15052__$1);

return statearr_15100;
})();
if(cljs.core.truth_(inst_15053)){
var statearr_15101_17487 = state_15091__$1;
(statearr_15101_17487[(1)] = (5));

} else {
var statearr_15102_17488 = state_15091__$1;
(statearr_15102_17488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15092 === (15))){
var inst_15069 = (state_15091[(8)]);
var state_15091__$1 = state_15091;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15091__$1,(18),to,inst_15069);
} else {
if((state_val_15092 === (21))){
var inst_15082 = (state_15091[(2)]);
var state_15091__$1 = state_15091;
var statearr_15103_17490 = state_15091__$1;
(statearr_15103_17490[(2)] = inst_15082);

(statearr_15103_17490[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15092 === (13))){
var inst_15084 = (state_15091[(2)]);
var state_15091__$1 = (function (){var statearr_15104 = state_15091;
(statearr_15104[(9)] = inst_15084);

return statearr_15104;
})();
var statearr_15105_17494 = state_15091__$1;
(statearr_15105_17494[(2)] = null);

(statearr_15105_17494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15092 === (6))){
var inst_15052 = (state_15091[(7)]);
var state_15091__$1 = state_15091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15091__$1,(11),inst_15052);
} else {
if((state_val_15092 === (17))){
var inst_15077 = (state_15091[(2)]);
var state_15091__$1 = state_15091;
if(cljs.core.truth_(inst_15077)){
var statearr_15106_17495 = state_15091__$1;
(statearr_15106_17495[(1)] = (19));

} else {
var statearr_15107_17496 = state_15091__$1;
(statearr_15107_17496[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15092 === (3))){
var inst_15089 = (state_15091[(2)]);
var state_15091__$1 = state_15091;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15091__$1,inst_15089);
} else {
if((state_val_15092 === (12))){
var inst_15062 = (state_15091[(10)]);
var state_15091__$1 = state_15091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15091__$1,(14),inst_15062);
} else {
if((state_val_15092 === (2))){
var state_15091__$1 = state_15091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15091__$1,(4),results);
} else {
if((state_val_15092 === (19))){
var state_15091__$1 = state_15091;
var statearr_15108_17497 = state_15091__$1;
(statearr_15108_17497[(2)] = null);

(statearr_15108_17497[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15092 === (11))){
var inst_15062 = (state_15091[(2)]);
var state_15091__$1 = (function (){var statearr_15109 = state_15091;
(statearr_15109[(10)] = inst_15062);

return statearr_15109;
})();
var statearr_15110_17498 = state_15091__$1;
(statearr_15110_17498[(2)] = null);

(statearr_15110_17498[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15092 === (9))){
var state_15091__$1 = state_15091;
var statearr_15111_17499 = state_15091__$1;
(statearr_15111_17499[(2)] = null);

(statearr_15111_17499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15092 === (5))){
var state_15091__$1 = state_15091;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15112_17500 = state_15091__$1;
(statearr_15112_17500[(1)] = (8));

} else {
var statearr_15113_17501 = state_15091__$1;
(statearr_15113_17501[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15092 === (14))){
var inst_15069 = (state_15091[(8)]);
var inst_15071 = (state_15091[(11)]);
var inst_15069__$1 = (state_15091[(2)]);
var inst_15070 = (inst_15069__$1 == null);
var inst_15071__$1 = cljs.core.not(inst_15070);
var state_15091__$1 = (function (){var statearr_15114 = state_15091;
(statearr_15114[(8)] = inst_15069__$1);

(statearr_15114[(11)] = inst_15071__$1);

return statearr_15114;
})();
if(inst_15071__$1){
var statearr_15115_17502 = state_15091__$1;
(statearr_15115_17502[(1)] = (15));

} else {
var statearr_15116_17503 = state_15091__$1;
(statearr_15116_17503[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15092 === (16))){
var inst_15071 = (state_15091[(11)]);
var state_15091__$1 = state_15091;
var statearr_15117_17504 = state_15091__$1;
(statearr_15117_17504[(2)] = inst_15071);

(statearr_15117_17504[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15092 === (10))){
var inst_15059 = (state_15091[(2)]);
var state_15091__$1 = state_15091;
var statearr_15118_17505 = state_15091__$1;
(statearr_15118_17505[(2)] = inst_15059);

(statearr_15118_17505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15092 === (18))){
var inst_15074 = (state_15091[(2)]);
var state_15091__$1 = state_15091;
var statearr_15119_17506 = state_15091__$1;
(statearr_15119_17506[(2)] = inst_15074);

(statearr_15119_17506[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15092 === (8))){
var inst_15056 = cljs.core.async.close_BANG_(to);
var state_15091__$1 = state_15091;
var statearr_15120_17507 = state_15091__$1;
(statearr_15120_17507[(2)] = inst_15056);

(statearr_15120_17507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____0 = (function (){
var statearr_15122 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15122[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__);

(statearr_15122[(1)] = (1));

return statearr_15122;
});
var cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____1 = (function (state_15091){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13734__auto__(state_15091);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e15123){var ex__13740__auto__ = e15123;
var statearr_15124_17509 = state_15091;
(statearr_15124_17509[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_15091[(4)]))){
var statearr_15125_17510 = state_15091;
(statearr_15125_17510[(1)] = cljs.core.first((state_15091[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17511 = state_15091;
state_15091 = G__17511;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__ = function(state_15091){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____1.call(this,state_15091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__13736__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__13736__auto__;
})()
})();
var state__14223__auto__ = (function (){var statearr_15126 = f__14222__auto__();
(statearr_15126[(6)] = c__14221__auto__);

return statearr_15126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14223__auto__);
}));

return c__14221__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15133 = arguments.length;
switch (G__15133) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15148 = arguments.length;
switch (G__15148) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15152 = arguments.length;
switch (G__15152) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14221__auto___17518 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14222__auto__ = (function (){var switch__13734__auto__ = (function (state_15184){
var state_val_15185 = (state_15184[(1)]);
if((state_val_15185 === (7))){
var inst_15179 = (state_15184[(2)]);
var state_15184__$1 = state_15184;
var statearr_15190_17519 = state_15184__$1;
(statearr_15190_17519[(2)] = inst_15179);

(statearr_15190_17519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (1))){
var state_15184__$1 = state_15184;
var statearr_15191_17520 = state_15184__$1;
(statearr_15191_17520[(2)] = null);

(statearr_15191_17520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (4))){
var inst_15160 = (state_15184[(7)]);
var inst_15160__$1 = (state_15184[(2)]);
var inst_15161 = (inst_15160__$1 == null);
var state_15184__$1 = (function (){var statearr_15192 = state_15184;
(statearr_15192[(7)] = inst_15160__$1);

return statearr_15192;
})();
if(cljs.core.truth_(inst_15161)){
var statearr_15193_17521 = state_15184__$1;
(statearr_15193_17521[(1)] = (5));

} else {
var statearr_15194_17522 = state_15184__$1;
(statearr_15194_17522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (13))){
var state_15184__$1 = state_15184;
var statearr_15195_17523 = state_15184__$1;
(statearr_15195_17523[(2)] = null);

(statearr_15195_17523[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (6))){
var inst_15160 = (state_15184[(7)]);
var inst_15166 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15160) : p.call(null,inst_15160));
var state_15184__$1 = state_15184;
if(cljs.core.truth_(inst_15166)){
var statearr_15196_17524 = state_15184__$1;
(statearr_15196_17524[(1)] = (9));

} else {
var statearr_15197_17525 = state_15184__$1;
(statearr_15197_17525[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (3))){
var inst_15181 = (state_15184[(2)]);
var state_15184__$1 = state_15184;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15184__$1,inst_15181);
} else {
if((state_val_15185 === (12))){
var state_15184__$1 = state_15184;
var statearr_15198_17526 = state_15184__$1;
(statearr_15198_17526[(2)] = null);

(statearr_15198_17526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (2))){
var state_15184__$1 = state_15184;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15184__$1,(4),ch);
} else {
if((state_val_15185 === (11))){
var inst_15160 = (state_15184[(7)]);
var inst_15170 = (state_15184[(2)]);
var state_15184__$1 = state_15184;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15184__$1,(8),inst_15170,inst_15160);
} else {
if((state_val_15185 === (9))){
var state_15184__$1 = state_15184;
var statearr_15201_17527 = state_15184__$1;
(statearr_15201_17527[(2)] = tc);

(statearr_15201_17527[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (5))){
var inst_15163 = cljs.core.async.close_BANG_(tc);
var inst_15164 = cljs.core.async.close_BANG_(fc);
var state_15184__$1 = (function (){var statearr_15205 = state_15184;
(statearr_15205[(8)] = inst_15163);

return statearr_15205;
})();
var statearr_15206_17528 = state_15184__$1;
(statearr_15206_17528[(2)] = inst_15164);

(statearr_15206_17528[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (14))){
var inst_15177 = (state_15184[(2)]);
var state_15184__$1 = state_15184;
var statearr_15207_17529 = state_15184__$1;
(statearr_15207_17529[(2)] = inst_15177);

(statearr_15207_17529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (10))){
var state_15184__$1 = state_15184;
var statearr_15208_17530 = state_15184__$1;
(statearr_15208_17530[(2)] = fc);

(statearr_15208_17530[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15185 === (8))){
var inst_15172 = (state_15184[(2)]);
var state_15184__$1 = state_15184;
if(cljs.core.truth_(inst_15172)){
var statearr_15210_17531 = state_15184__$1;
(statearr_15210_17531[(1)] = (12));

} else {
var statearr_15211_17532 = state_15184__$1;
(statearr_15211_17532[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13736__auto__ = null;
var cljs$core$async$state_machine__13736__auto____0 = (function (){
var statearr_15221 = [null,null,null,null,null,null,null,null,null];
(statearr_15221[(0)] = cljs$core$async$state_machine__13736__auto__);

(statearr_15221[(1)] = (1));

return statearr_15221;
});
var cljs$core$async$state_machine__13736__auto____1 = (function (state_15184){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13734__auto__(state_15184);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e15233){var ex__13740__auto__ = e15233;
var statearr_15234_17533 = state_15184;
(statearr_15234_17533[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_15184[(4)]))){
var statearr_15235_17534 = state_15184;
(statearr_15235_17534[(1)] = cljs.core.first((state_15184[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17535 = state_15184;
state_15184 = G__17535;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$state_machine__13736__auto__ = function(state_15184){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13736__auto____1.call(this,state_15184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13736__auto____0;
cljs$core$async$state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13736__auto____1;
return cljs$core$async$state_machine__13736__auto__;
})()
})();
var state__14223__auto__ = (function (){var statearr_15240 = f__14222__auto__();
(statearr_15240[(6)] = c__14221__auto___17518);

return statearr_15240;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14223__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14221__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14222__auto__ = (function (){var switch__13734__auto__ = (function (state_15273){
var state_val_15274 = (state_15273[(1)]);
if((state_val_15274 === (7))){
var inst_15269 = (state_15273[(2)]);
var state_15273__$1 = state_15273;
var statearr_15281_17537 = state_15273__$1;
(statearr_15281_17537[(2)] = inst_15269);

(statearr_15281_17537[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15274 === (1))){
var inst_15251 = init;
var inst_15252 = inst_15251;
var state_15273__$1 = (function (){var statearr_15283 = state_15273;
(statearr_15283[(7)] = inst_15252);

return statearr_15283;
})();
var statearr_15284_17538 = state_15273__$1;
(statearr_15284_17538[(2)] = null);

(statearr_15284_17538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15274 === (4))){
var inst_15256 = (state_15273[(8)]);
var inst_15256__$1 = (state_15273[(2)]);
var inst_15257 = (inst_15256__$1 == null);
var state_15273__$1 = (function (){var statearr_15285 = state_15273;
(statearr_15285[(8)] = inst_15256__$1);

return statearr_15285;
})();
if(cljs.core.truth_(inst_15257)){
var statearr_15286_17539 = state_15273__$1;
(statearr_15286_17539[(1)] = (5));

} else {
var statearr_15287_17540 = state_15273__$1;
(statearr_15287_17540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15274 === (6))){
var inst_15256 = (state_15273[(8)]);
var inst_15252 = (state_15273[(7)]);
var inst_15260 = (state_15273[(9)]);
var inst_15260__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15252,inst_15256) : f.call(null,inst_15252,inst_15256));
var inst_15261 = cljs.core.reduced_QMARK_(inst_15260__$1);
var state_15273__$1 = (function (){var statearr_15288 = state_15273;
(statearr_15288[(9)] = inst_15260__$1);

return statearr_15288;
})();
if(inst_15261){
var statearr_15289_17541 = state_15273__$1;
(statearr_15289_17541[(1)] = (8));

} else {
var statearr_15290_17542 = state_15273__$1;
(statearr_15290_17542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15274 === (3))){
var inst_15271 = (state_15273[(2)]);
var state_15273__$1 = state_15273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15273__$1,inst_15271);
} else {
if((state_val_15274 === (2))){
var state_15273__$1 = state_15273;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15273__$1,(4),ch);
} else {
if((state_val_15274 === (9))){
var inst_15260 = (state_15273[(9)]);
var inst_15252 = inst_15260;
var state_15273__$1 = (function (){var statearr_15291 = state_15273;
(statearr_15291[(7)] = inst_15252);

return statearr_15291;
})();
var statearr_15292_17543 = state_15273__$1;
(statearr_15292_17543[(2)] = null);

(statearr_15292_17543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15274 === (5))){
var inst_15252 = (state_15273[(7)]);
var state_15273__$1 = state_15273;
var statearr_15293_17544 = state_15273__$1;
(statearr_15293_17544[(2)] = inst_15252);

(statearr_15293_17544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15274 === (10))){
var inst_15267 = (state_15273[(2)]);
var state_15273__$1 = state_15273;
var statearr_15294_17545 = state_15273__$1;
(statearr_15294_17545[(2)] = inst_15267);

(statearr_15294_17545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15274 === (8))){
var inst_15260 = (state_15273[(9)]);
var inst_15263 = cljs.core.deref(inst_15260);
var state_15273__$1 = state_15273;
var statearr_15296_17546 = state_15273__$1;
(statearr_15296_17546[(2)] = inst_15263);

(statearr_15296_17546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__13736__auto__ = null;
var cljs$core$async$reduce_$_state_machine__13736__auto____0 = (function (){
var statearr_15299 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15299[(0)] = cljs$core$async$reduce_$_state_machine__13736__auto__);

(statearr_15299[(1)] = (1));

return statearr_15299;
});
var cljs$core$async$reduce_$_state_machine__13736__auto____1 = (function (state_15273){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13734__auto__(state_15273);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e15301){var ex__13740__auto__ = e15301;
var statearr_15302_17547 = state_15273;
(statearr_15302_17547[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_15273[(4)]))){
var statearr_15303_17548 = state_15273;
(statearr_15303_17548[(1)] = cljs.core.first((state_15273[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17549 = state_15273;
state_15273 = G__17549;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__13736__auto__ = function(state_15273){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__13736__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__13736__auto____1.call(this,state_15273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__13736__auto____0;
cljs$core$async$reduce_$_state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__13736__auto____1;
return cljs$core$async$reduce_$_state_machine__13736__auto__;
})()
})();
var state__14223__auto__ = (function (){var statearr_15305 = f__14222__auto__();
(statearr_15305[(6)] = c__14221__auto__);

return statearr_15305;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14223__auto__);
}));

return c__14221__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14221__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14222__auto__ = (function (){var switch__13734__auto__ = (function (state_15315){
var state_val_15316 = (state_15315[(1)]);
if((state_val_15316 === (1))){
var inst_15310 = cljs.core.async.reduce(f__$1,init,ch);
var state_15315__$1 = state_15315;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15315__$1,(2),inst_15310);
} else {
if((state_val_15316 === (2))){
var inst_15312 = (state_15315[(2)]);
var inst_15313 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15312) : f__$1.call(null,inst_15312));
var state_15315__$1 = state_15315;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15315__$1,inst_15313);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__13736__auto__ = null;
var cljs$core$async$transduce_$_state_machine__13736__auto____0 = (function (){
var statearr_15317 = [null,null,null,null,null,null,null];
(statearr_15317[(0)] = cljs$core$async$transduce_$_state_machine__13736__auto__);

(statearr_15317[(1)] = (1));

return statearr_15317;
});
var cljs$core$async$transduce_$_state_machine__13736__auto____1 = (function (state_15315){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13734__auto__(state_15315);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e15319){var ex__13740__auto__ = e15319;
var statearr_15320_17557 = state_15315;
(statearr_15320_17557[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_15315[(4)]))){
var statearr_15321_17558 = state_15315;
(statearr_15321_17558[(1)] = cljs.core.first((state_15315[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17560 = state_15315;
state_15315 = G__17560;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__13736__auto__ = function(state_15315){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__13736__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__13736__auto____1.call(this,state_15315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__13736__auto____0;
cljs$core$async$transduce_$_state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__13736__auto____1;
return cljs$core$async$transduce_$_state_machine__13736__auto__;
})()
})();
var state__14223__auto__ = (function (){var statearr_15322 = f__14222__auto__();
(statearr_15322[(6)] = c__14221__auto__);

return statearr_15322;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14223__auto__);
}));

return c__14221__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15324 = arguments.length;
switch (G__15324) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14221__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14222__auto__ = (function (){var switch__13734__auto__ = (function (state_15349){
var state_val_15350 = (state_15349[(1)]);
if((state_val_15350 === (7))){
var inst_15331 = (state_15349[(2)]);
var state_15349__$1 = state_15349;
var statearr_15353_17570 = state_15349__$1;
(statearr_15353_17570[(2)] = inst_15331);

(statearr_15353_17570[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (1))){
var inst_15325 = cljs.core.seq(coll);
var inst_15326 = inst_15325;
var state_15349__$1 = (function (){var statearr_15354 = state_15349;
(statearr_15354[(7)] = inst_15326);

return statearr_15354;
})();
var statearr_15355_17580 = state_15349__$1;
(statearr_15355_17580[(2)] = null);

(statearr_15355_17580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (4))){
var inst_15326 = (state_15349[(7)]);
var inst_15329 = cljs.core.first(inst_15326);
var state_15349__$1 = state_15349;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15349__$1,(7),ch,inst_15329);
} else {
if((state_val_15350 === (13))){
var inst_15343 = (state_15349[(2)]);
var state_15349__$1 = state_15349;
var statearr_15356_17595 = state_15349__$1;
(statearr_15356_17595[(2)] = inst_15343);

(statearr_15356_17595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (6))){
var inst_15334 = (state_15349[(2)]);
var state_15349__$1 = state_15349;
if(cljs.core.truth_(inst_15334)){
var statearr_15357_17600 = state_15349__$1;
(statearr_15357_17600[(1)] = (8));

} else {
var statearr_15358_17607 = state_15349__$1;
(statearr_15358_17607[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (3))){
var inst_15347 = (state_15349[(2)]);
var state_15349__$1 = state_15349;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15349__$1,inst_15347);
} else {
if((state_val_15350 === (12))){
var state_15349__$1 = state_15349;
var statearr_15359_17617 = state_15349__$1;
(statearr_15359_17617[(2)] = null);

(statearr_15359_17617[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (2))){
var inst_15326 = (state_15349[(7)]);
var state_15349__$1 = state_15349;
if(cljs.core.truth_(inst_15326)){
var statearr_15360_17634 = state_15349__$1;
(statearr_15360_17634[(1)] = (4));

} else {
var statearr_15361_17635 = state_15349__$1;
(statearr_15361_17635[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (11))){
var inst_15340 = cljs.core.async.close_BANG_(ch);
var state_15349__$1 = state_15349;
var statearr_15362_17645 = state_15349__$1;
(statearr_15362_17645[(2)] = inst_15340);

(statearr_15362_17645[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (9))){
var state_15349__$1 = state_15349;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15363_17646 = state_15349__$1;
(statearr_15363_17646[(1)] = (11));

} else {
var statearr_15364_17654 = state_15349__$1;
(statearr_15364_17654[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (5))){
var inst_15326 = (state_15349[(7)]);
var state_15349__$1 = state_15349;
var statearr_15365_17659 = state_15349__$1;
(statearr_15365_17659[(2)] = inst_15326);

(statearr_15365_17659[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (10))){
var inst_15345 = (state_15349[(2)]);
var state_15349__$1 = state_15349;
var statearr_15368_17663 = state_15349__$1;
(statearr_15368_17663[(2)] = inst_15345);

(statearr_15368_17663[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15350 === (8))){
var inst_15326 = (state_15349[(7)]);
var inst_15336 = cljs.core.next(inst_15326);
var inst_15326__$1 = inst_15336;
var state_15349__$1 = (function (){var statearr_15369 = state_15349;
(statearr_15369[(7)] = inst_15326__$1);

return statearr_15369;
})();
var statearr_15370_17664 = state_15349__$1;
(statearr_15370_17664[(2)] = null);

(statearr_15370_17664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13736__auto__ = null;
var cljs$core$async$state_machine__13736__auto____0 = (function (){
var statearr_15371 = [null,null,null,null,null,null,null,null];
(statearr_15371[(0)] = cljs$core$async$state_machine__13736__auto__);

(statearr_15371[(1)] = (1));

return statearr_15371;
});
var cljs$core$async$state_machine__13736__auto____1 = (function (state_15349){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13734__auto__(state_15349);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e15372){var ex__13740__auto__ = e15372;
var statearr_15373_17665 = state_15349;
(statearr_15373_17665[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_15349[(4)]))){
var statearr_15374_17666 = state_15349;
(statearr_15374_17666[(1)] = cljs.core.first((state_15349[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17667 = state_15349;
state_15349 = G__17667;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$state_machine__13736__auto__ = function(state_15349){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13736__auto____1.call(this,state_15349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13736__auto____0;
cljs$core$async$state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13736__auto____1;
return cljs$core$async$state_machine__13736__auto__;
})()
})();
var state__14223__auto__ = (function (){var statearr_15375 = f__14222__auto__();
(statearr_15375[(6)] = c__14221__auto__);

return statearr_15375;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14223__auto__);
}));

return c__14221__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15378 = arguments.length;
switch (G__15378) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_17669 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_17669(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_17670 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_17670(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_17671 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_17671(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_17672 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_17672(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15396 = (function (ch,cs,meta15397){
this.ch = ch;
this.cs = cs;
this.meta15397 = meta15397;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15398,meta15397__$1){
var self__ = this;
var _15398__$1 = this;
return (new cljs.core.async.t_cljs$core$async15396(self__.ch,self__.cs,meta15397__$1));
}));

(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15398){
var self__ = this;
var _15398__$1 = this;
return self__.meta15397;
}));

(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15396.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15396.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15397","meta15397",2040931615,null)], null);
}));

(cljs.core.async.t_cljs$core$async15396.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15396.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15396");

(cljs.core.async.t_cljs$core$async15396.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15396");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15396.
 */
cljs.core.async.__GT_t_cljs$core$async15396 = (function cljs$core$async$__GT_t_cljs$core$async15396(ch,cs,meta15397){
return (new cljs.core.async.t_cljs$core$async15396(ch,cs,meta15397));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15396(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14221__auto___17684 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14222__auto__ = (function (){var switch__13734__auto__ = (function (state_15542){
var state_val_15543 = (state_15542[(1)]);
if((state_val_15543 === (7))){
var inst_15538 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
var statearr_15544_17686 = state_15542__$1;
(statearr_15544_17686[(2)] = inst_15538);

(statearr_15544_17686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (20))){
var inst_15439 = (state_15542[(7)]);
var inst_15452 = cljs.core.first(inst_15439);
var inst_15453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15452,(0),null);
var inst_15454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15452,(1),null);
var state_15542__$1 = (function (){var statearr_15545 = state_15542;
(statearr_15545[(8)] = inst_15453);

return statearr_15545;
})();
if(cljs.core.truth_(inst_15454)){
var statearr_15546_17687 = state_15542__$1;
(statearr_15546_17687[(1)] = (22));

} else {
var statearr_15549_17688 = state_15542__$1;
(statearr_15549_17688[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (27))){
var inst_15486 = (state_15542[(9)]);
var inst_15408 = (state_15542[(10)]);
var inst_15484 = (state_15542[(11)]);
var inst_15491 = (state_15542[(12)]);
var inst_15491__$1 = cljs.core._nth(inst_15484,inst_15486);
var inst_15492 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15491__$1,inst_15408,done);
var state_15542__$1 = (function (){var statearr_15552 = state_15542;
(statearr_15552[(12)] = inst_15491__$1);

return statearr_15552;
})();
if(cljs.core.truth_(inst_15492)){
var statearr_15553_17689 = state_15542__$1;
(statearr_15553_17689[(1)] = (30));

} else {
var statearr_15554_17690 = state_15542__$1;
(statearr_15554_17690[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (1))){
var state_15542__$1 = state_15542;
var statearr_15559_17691 = state_15542__$1;
(statearr_15559_17691[(2)] = null);

(statearr_15559_17691[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (24))){
var inst_15439 = (state_15542[(7)]);
var inst_15461 = (state_15542[(2)]);
var inst_15462 = cljs.core.next(inst_15439);
var inst_15417 = inst_15462;
var inst_15418 = null;
var inst_15419 = (0);
var inst_15420 = (0);
var state_15542__$1 = (function (){var statearr_15560 = state_15542;
(statearr_15560[(13)] = inst_15417);

(statearr_15560[(14)] = inst_15418);

(statearr_15560[(15)] = inst_15419);

(statearr_15560[(16)] = inst_15461);

(statearr_15560[(17)] = inst_15420);

return statearr_15560;
})();
var statearr_15563_17695 = state_15542__$1;
(statearr_15563_17695[(2)] = null);

(statearr_15563_17695[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (39))){
var state_15542__$1 = state_15542;
var statearr_15569_17696 = state_15542__$1;
(statearr_15569_17696[(2)] = null);

(statearr_15569_17696[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (4))){
var inst_15408 = (state_15542[(10)]);
var inst_15408__$1 = (state_15542[(2)]);
var inst_15409 = (inst_15408__$1 == null);
var state_15542__$1 = (function (){var statearr_15575 = state_15542;
(statearr_15575[(10)] = inst_15408__$1);

return statearr_15575;
})();
if(cljs.core.truth_(inst_15409)){
var statearr_15576_17699 = state_15542__$1;
(statearr_15576_17699[(1)] = (5));

} else {
var statearr_15577_17700 = state_15542__$1;
(statearr_15577_17700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (15))){
var inst_15417 = (state_15542[(13)]);
var inst_15418 = (state_15542[(14)]);
var inst_15419 = (state_15542[(15)]);
var inst_15420 = (state_15542[(17)]);
var inst_15435 = (state_15542[(2)]);
var inst_15436 = (inst_15420 + (1));
var tmp15565 = inst_15417;
var tmp15566 = inst_15418;
var tmp15567 = inst_15419;
var inst_15417__$1 = tmp15565;
var inst_15418__$1 = tmp15566;
var inst_15419__$1 = tmp15567;
var inst_15420__$1 = inst_15436;
var state_15542__$1 = (function (){var statearr_15582 = state_15542;
(statearr_15582[(13)] = inst_15417__$1);

(statearr_15582[(14)] = inst_15418__$1);

(statearr_15582[(15)] = inst_15419__$1);

(statearr_15582[(17)] = inst_15420__$1);

(statearr_15582[(18)] = inst_15435);

return statearr_15582;
})();
var statearr_15584_17707 = state_15542__$1;
(statearr_15584_17707[(2)] = null);

(statearr_15584_17707[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (21))){
var inst_15465 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
var statearr_15588_17712 = state_15542__$1;
(statearr_15588_17712[(2)] = inst_15465);

(statearr_15588_17712[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (31))){
var inst_15491 = (state_15542[(12)]);
var inst_15495 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15491);
var state_15542__$1 = state_15542;
var statearr_15590_17715 = state_15542__$1;
(statearr_15590_17715[(2)] = inst_15495);

(statearr_15590_17715[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (32))){
var inst_15486 = (state_15542[(9)]);
var inst_15484 = (state_15542[(11)]);
var inst_15483 = (state_15542[(19)]);
var inst_15485 = (state_15542[(20)]);
var inst_15497 = (state_15542[(2)]);
var inst_15498 = (inst_15486 + (1));
var tmp15585 = inst_15484;
var tmp15586 = inst_15483;
var tmp15587 = inst_15485;
var inst_15483__$1 = tmp15586;
var inst_15484__$1 = tmp15585;
var inst_15485__$1 = tmp15587;
var inst_15486__$1 = inst_15498;
var state_15542__$1 = (function (){var statearr_15593 = state_15542;
(statearr_15593[(9)] = inst_15486__$1);

(statearr_15593[(21)] = inst_15497);

(statearr_15593[(11)] = inst_15484__$1);

(statearr_15593[(19)] = inst_15483__$1);

(statearr_15593[(20)] = inst_15485__$1);

return statearr_15593;
})();
var statearr_15595_17723 = state_15542__$1;
(statearr_15595_17723[(2)] = null);

(statearr_15595_17723[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (40))){
var inst_15511 = (state_15542[(22)]);
var inst_15515 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15511);
var state_15542__$1 = state_15542;
var statearr_15597_17729 = state_15542__$1;
(statearr_15597_17729[(2)] = inst_15515);

(statearr_15597_17729[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (33))){
var inst_15501 = (state_15542[(23)]);
var inst_15503 = cljs.core.chunked_seq_QMARK_(inst_15501);
var state_15542__$1 = state_15542;
if(inst_15503){
var statearr_15598_17736 = state_15542__$1;
(statearr_15598_17736[(1)] = (36));

} else {
var statearr_15599_17737 = state_15542__$1;
(statearr_15599_17737[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (13))){
var inst_15429 = (state_15542[(24)]);
var inst_15432 = cljs.core.async.close_BANG_(inst_15429);
var state_15542__$1 = state_15542;
var statearr_15601_17738 = state_15542__$1;
(statearr_15601_17738[(2)] = inst_15432);

(statearr_15601_17738[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (22))){
var inst_15453 = (state_15542[(8)]);
var inst_15458 = cljs.core.async.close_BANG_(inst_15453);
var state_15542__$1 = state_15542;
var statearr_15609_17739 = state_15542__$1;
(statearr_15609_17739[(2)] = inst_15458);

(statearr_15609_17739[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (36))){
var inst_15501 = (state_15542[(23)]);
var inst_15505 = cljs.core.chunk_first(inst_15501);
var inst_15506 = cljs.core.chunk_rest(inst_15501);
var inst_15507 = cljs.core.count(inst_15505);
var inst_15483 = inst_15506;
var inst_15484 = inst_15505;
var inst_15485 = inst_15507;
var inst_15486 = (0);
var state_15542__$1 = (function (){var statearr_15625 = state_15542;
(statearr_15625[(9)] = inst_15486);

(statearr_15625[(11)] = inst_15484);

(statearr_15625[(19)] = inst_15483);

(statearr_15625[(20)] = inst_15485);

return statearr_15625;
})();
var statearr_15629_17740 = state_15542__$1;
(statearr_15629_17740[(2)] = null);

(statearr_15629_17740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (41))){
var inst_15501 = (state_15542[(23)]);
var inst_15517 = (state_15542[(2)]);
var inst_15518 = cljs.core.next(inst_15501);
var inst_15483 = inst_15518;
var inst_15484 = null;
var inst_15485 = (0);
var inst_15486 = (0);
var state_15542__$1 = (function (){var statearr_15631 = state_15542;
(statearr_15631[(9)] = inst_15486);

(statearr_15631[(25)] = inst_15517);

(statearr_15631[(11)] = inst_15484);

(statearr_15631[(19)] = inst_15483);

(statearr_15631[(20)] = inst_15485);

return statearr_15631;
})();
var statearr_15638_17741 = state_15542__$1;
(statearr_15638_17741[(2)] = null);

(statearr_15638_17741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (43))){
var state_15542__$1 = state_15542;
var statearr_15660_17742 = state_15542__$1;
(statearr_15660_17742[(2)] = null);

(statearr_15660_17742[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (29))){
var inst_15526 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
var statearr_15661_17743 = state_15542__$1;
(statearr_15661_17743[(2)] = inst_15526);

(statearr_15661_17743[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (44))){
var inst_15535 = (state_15542[(2)]);
var state_15542__$1 = (function (){var statearr_15662 = state_15542;
(statearr_15662[(26)] = inst_15535);

return statearr_15662;
})();
var statearr_15663_17744 = state_15542__$1;
(statearr_15663_17744[(2)] = null);

(statearr_15663_17744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (6))){
var inst_15475 = (state_15542[(27)]);
var inst_15474 = cljs.core.deref(cs);
var inst_15475__$1 = cljs.core.keys(inst_15474);
var inst_15476 = cljs.core.count(inst_15475__$1);
var inst_15477 = cljs.core.reset_BANG_(dctr,inst_15476);
var inst_15482 = cljs.core.seq(inst_15475__$1);
var inst_15483 = inst_15482;
var inst_15484 = null;
var inst_15485 = (0);
var inst_15486 = (0);
var state_15542__$1 = (function (){var statearr_15668 = state_15542;
(statearr_15668[(9)] = inst_15486);

(statearr_15668[(27)] = inst_15475__$1);

(statearr_15668[(11)] = inst_15484);

(statearr_15668[(19)] = inst_15483);

(statearr_15668[(20)] = inst_15485);

(statearr_15668[(28)] = inst_15477);

return statearr_15668;
})();
var statearr_15669_17745 = state_15542__$1;
(statearr_15669_17745[(2)] = null);

(statearr_15669_17745[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (28))){
var inst_15483 = (state_15542[(19)]);
var inst_15501 = (state_15542[(23)]);
var inst_15501__$1 = cljs.core.seq(inst_15483);
var state_15542__$1 = (function (){var statearr_15670 = state_15542;
(statearr_15670[(23)] = inst_15501__$1);

return statearr_15670;
})();
if(inst_15501__$1){
var statearr_15671_17753 = state_15542__$1;
(statearr_15671_17753[(1)] = (33));

} else {
var statearr_15672_17754 = state_15542__$1;
(statearr_15672_17754[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (25))){
var inst_15486 = (state_15542[(9)]);
var inst_15485 = (state_15542[(20)]);
var inst_15488 = (inst_15486 < inst_15485);
var inst_15489 = inst_15488;
var state_15542__$1 = state_15542;
if(cljs.core.truth_(inst_15489)){
var statearr_15673_17755 = state_15542__$1;
(statearr_15673_17755[(1)] = (27));

} else {
var statearr_15674_17756 = state_15542__$1;
(statearr_15674_17756[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (34))){
var state_15542__$1 = state_15542;
var statearr_15675_17757 = state_15542__$1;
(statearr_15675_17757[(2)] = null);

(statearr_15675_17757[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (17))){
var state_15542__$1 = state_15542;
var statearr_15676_17759 = state_15542__$1;
(statearr_15676_17759[(2)] = null);

(statearr_15676_17759[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (3))){
var inst_15540 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15542__$1,inst_15540);
} else {
if((state_val_15543 === (12))){
var inst_15470 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
var statearr_15678_17760 = state_15542__$1;
(statearr_15678_17760[(2)] = inst_15470);

(statearr_15678_17760[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (2))){
var state_15542__$1 = state_15542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15542__$1,(4),ch);
} else {
if((state_val_15543 === (23))){
var state_15542__$1 = state_15542;
var statearr_15679_17761 = state_15542__$1;
(statearr_15679_17761[(2)] = null);

(statearr_15679_17761[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (35))){
var inst_15524 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
var statearr_15680_17762 = state_15542__$1;
(statearr_15680_17762[(2)] = inst_15524);

(statearr_15680_17762[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (19))){
var inst_15439 = (state_15542[(7)]);
var inst_15443 = cljs.core.chunk_first(inst_15439);
var inst_15444 = cljs.core.chunk_rest(inst_15439);
var inst_15446 = cljs.core.count(inst_15443);
var inst_15417 = inst_15444;
var inst_15418 = inst_15443;
var inst_15419 = inst_15446;
var inst_15420 = (0);
var state_15542__$1 = (function (){var statearr_15681 = state_15542;
(statearr_15681[(13)] = inst_15417);

(statearr_15681[(14)] = inst_15418);

(statearr_15681[(15)] = inst_15419);

(statearr_15681[(17)] = inst_15420);

return statearr_15681;
})();
var statearr_15682_17763 = state_15542__$1;
(statearr_15682_17763[(2)] = null);

(statearr_15682_17763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (11))){
var inst_15439 = (state_15542[(7)]);
var inst_15417 = (state_15542[(13)]);
var inst_15439__$1 = cljs.core.seq(inst_15417);
var state_15542__$1 = (function (){var statearr_15683 = state_15542;
(statearr_15683[(7)] = inst_15439__$1);

return statearr_15683;
})();
if(inst_15439__$1){
var statearr_15684_17770 = state_15542__$1;
(statearr_15684_17770[(1)] = (16));

} else {
var statearr_15685_17771 = state_15542__$1;
(statearr_15685_17771[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (9))){
var inst_15472 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
var statearr_15686_17772 = state_15542__$1;
(statearr_15686_17772[(2)] = inst_15472);

(statearr_15686_17772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (5))){
var inst_15415 = cljs.core.deref(cs);
var inst_15416 = cljs.core.seq(inst_15415);
var inst_15417 = inst_15416;
var inst_15418 = null;
var inst_15419 = (0);
var inst_15420 = (0);
var state_15542__$1 = (function (){var statearr_15696 = state_15542;
(statearr_15696[(13)] = inst_15417);

(statearr_15696[(14)] = inst_15418);

(statearr_15696[(15)] = inst_15419);

(statearr_15696[(17)] = inst_15420);

return statearr_15696;
})();
var statearr_15704_17773 = state_15542__$1;
(statearr_15704_17773[(2)] = null);

(statearr_15704_17773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (14))){
var state_15542__$1 = state_15542;
var statearr_15709_17774 = state_15542__$1;
(statearr_15709_17774[(2)] = null);

(statearr_15709_17774[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (45))){
var inst_15532 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
var statearr_15710_17775 = state_15542__$1;
(statearr_15710_17775[(2)] = inst_15532);

(statearr_15710_17775[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (26))){
var inst_15475 = (state_15542[(27)]);
var inst_15528 = (state_15542[(2)]);
var inst_15529 = cljs.core.seq(inst_15475);
var state_15542__$1 = (function (){var statearr_15711 = state_15542;
(statearr_15711[(29)] = inst_15528);

return statearr_15711;
})();
if(inst_15529){
var statearr_15712_17776 = state_15542__$1;
(statearr_15712_17776[(1)] = (42));

} else {
var statearr_15713_17777 = state_15542__$1;
(statearr_15713_17777[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (16))){
var inst_15439 = (state_15542[(7)]);
var inst_15441 = cljs.core.chunked_seq_QMARK_(inst_15439);
var state_15542__$1 = state_15542;
if(inst_15441){
var statearr_15717_17779 = state_15542__$1;
(statearr_15717_17779[(1)] = (19));

} else {
var statearr_15718_17780 = state_15542__$1;
(statearr_15718_17780[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (38))){
var inst_15521 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
var statearr_15719_17781 = state_15542__$1;
(statearr_15719_17781[(2)] = inst_15521);

(statearr_15719_17781[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (30))){
var state_15542__$1 = state_15542;
var statearr_15721_17785 = state_15542__$1;
(statearr_15721_17785[(2)] = null);

(statearr_15721_17785[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (10))){
var inst_15418 = (state_15542[(14)]);
var inst_15420 = (state_15542[(17)]);
var inst_15428 = cljs.core._nth(inst_15418,inst_15420);
var inst_15429 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15428,(0),null);
var inst_15430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15428,(1),null);
var state_15542__$1 = (function (){var statearr_15722 = state_15542;
(statearr_15722[(24)] = inst_15429);

return statearr_15722;
})();
if(cljs.core.truth_(inst_15430)){
var statearr_15723_17786 = state_15542__$1;
(statearr_15723_17786[(1)] = (13));

} else {
var statearr_15724_17787 = state_15542__$1;
(statearr_15724_17787[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (18))){
var inst_15468 = (state_15542[(2)]);
var state_15542__$1 = state_15542;
var statearr_15725_17788 = state_15542__$1;
(statearr_15725_17788[(2)] = inst_15468);

(statearr_15725_17788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (42))){
var state_15542__$1 = state_15542;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15542__$1,(45),dchan);
} else {
if((state_val_15543 === (37))){
var inst_15408 = (state_15542[(10)]);
var inst_15511 = (state_15542[(22)]);
var inst_15501 = (state_15542[(23)]);
var inst_15511__$1 = cljs.core.first(inst_15501);
var inst_15512 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15511__$1,inst_15408,done);
var state_15542__$1 = (function (){var statearr_15727 = state_15542;
(statearr_15727[(22)] = inst_15511__$1);

return statearr_15727;
})();
if(cljs.core.truth_(inst_15512)){
var statearr_15728_17796 = state_15542__$1;
(statearr_15728_17796[(1)] = (39));

} else {
var statearr_15729_17797 = state_15542__$1;
(statearr_15729_17797[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15543 === (8))){
var inst_15419 = (state_15542[(15)]);
var inst_15420 = (state_15542[(17)]);
var inst_15422 = (inst_15420 < inst_15419);
var inst_15423 = inst_15422;
var state_15542__$1 = state_15542;
if(cljs.core.truth_(inst_15423)){
var statearr_15732_17798 = state_15542__$1;
(statearr_15732_17798[(1)] = (10));

} else {
var statearr_15733_17799 = state_15542__$1;
(statearr_15733_17799[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__13736__auto__ = null;
var cljs$core$async$mult_$_state_machine__13736__auto____0 = (function (){
var statearr_15735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15735[(0)] = cljs$core$async$mult_$_state_machine__13736__auto__);

(statearr_15735[(1)] = (1));

return statearr_15735;
});
var cljs$core$async$mult_$_state_machine__13736__auto____1 = (function (state_15542){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13734__auto__(state_15542);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e15738){var ex__13740__auto__ = e15738;
var statearr_15740_17801 = state_15542;
(statearr_15740_17801[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_15542[(4)]))){
var statearr_15742_17802 = state_15542;
(statearr_15742_17802[(1)] = cljs.core.first((state_15542[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17803 = state_15542;
state_15542 = G__17803;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__13736__auto__ = function(state_15542){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__13736__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__13736__auto____1.call(this,state_15542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__13736__auto____0;
cljs$core$async$mult_$_state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__13736__auto____1;
return cljs$core$async$mult_$_state_machine__13736__auto__;
})()
})();
var state__14223__auto__ = (function (){var statearr_15743 = f__14222__auto__();
(statearr_15743[(6)] = c__14221__auto___17684);

return statearr_15743;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14223__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15746 = arguments.length;
switch (G__15746) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_17808 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_17808(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17809 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_17809(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17810 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17810(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17811 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_17811(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17812 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17812(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17815 = arguments.length;
var i__5770__auto___17816 = (0);
while(true){
if((i__5770__auto___17816 < len__5769__auto___17815)){
args__5775__auto__.push((arguments[i__5770__auto___17816]));

var G__17817 = (i__5770__auto___17816 + (1));
i__5770__auto___17816 = G__17817;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15881){
var map__15885 = p__15881;
var map__15885__$1 = cljs.core.__destructure_map(map__15885);
var opts = map__15885__$1;
var statearr_15887_17825 = state;
(statearr_15887_17825[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15889_17826 = state;
(statearr_15889_17826[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15893_17827 = state;
(statearr_15893_17827[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15827){
var G__15828 = cljs.core.first(seq15827);
var seq15827__$1 = cljs.core.next(seq15827);
var G__15829 = cljs.core.first(seq15827__$1);
var seq15827__$2 = cljs.core.next(seq15827__$1);
var G__15830 = cljs.core.first(seq15827__$2);
var seq15827__$3 = cljs.core.next(seq15827__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15828,G__15829,G__15830,seq15827__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15911 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15912){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15912 = meta15912;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15913,meta15912__$1){
var self__ = this;
var _15913__$1 = this;
return (new cljs.core.async.t_cljs$core$async15911(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15912__$1));
}));

(cljs.core.async.t_cljs$core$async15911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15913){
var self__ = this;
var _15913__$1 = this;
return self__.meta15912;
}));

(cljs.core.async.t_cljs$core$async15911.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15911.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15911.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15911.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15911.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15911.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15911.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15911.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15911.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15912","meta15912",2110078353,null)], null);
}));

(cljs.core.async.t_cljs$core$async15911.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15911.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15911");

(cljs.core.async.t_cljs$core$async15911.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15911");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15911.
 */
cljs.core.async.__GT_t_cljs$core$async15911 = (function cljs$core$async$__GT_t_cljs$core$async15911(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15912){
return (new cljs.core.async.t_cljs$core$async15911(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15912));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async15911(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14221__auto___17860 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14222__auto__ = (function (){var switch__13734__auto__ = (function (state_15996){
var state_val_15997 = (state_15996[(1)]);
if((state_val_15997 === (7))){
var inst_15955 = (state_15996[(2)]);
var state_15996__$1 = state_15996;
if(cljs.core.truth_(inst_15955)){
var statearr_15998_17871 = state_15996__$1;
(statearr_15998_17871[(1)] = (8));

} else {
var statearr_15999_17872 = state_15996__$1;
(statearr_15999_17872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (20))){
var inst_15946 = (state_15996[(7)]);
var state_15996__$1 = state_15996;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15996__$1,(23),out,inst_15946);
} else {
if((state_val_15997 === (1))){
var inst_15927 = calc_state();
var inst_15928 = cljs.core.__destructure_map(inst_15927);
var inst_15929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15928,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15928,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15931 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15928,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15932 = inst_15927;
var state_15996__$1 = (function (){var statearr_16000 = state_15996;
(statearr_16000[(8)] = inst_15929);

(statearr_16000[(9)] = inst_15930);

(statearr_16000[(10)] = inst_15931);

(statearr_16000[(11)] = inst_15932);

return statearr_16000;
})();
var statearr_16001_17879 = state_15996__$1;
(statearr_16001_17879[(2)] = null);

(statearr_16001_17879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (24))){
var inst_15937 = (state_15996[(12)]);
var inst_15932 = inst_15937;
var state_15996__$1 = (function (){var statearr_16002 = state_15996;
(statearr_16002[(11)] = inst_15932);

return statearr_16002;
})();
var statearr_16003_17880 = state_15996__$1;
(statearr_16003_17880[(2)] = null);

(statearr_16003_17880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (4))){
var inst_15946 = (state_15996[(7)]);
var inst_15949 = (state_15996[(13)]);
var inst_15945 = (state_15996[(2)]);
var inst_15946__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15945,(0),null);
var inst_15947 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15945,(1),null);
var inst_15949__$1 = (inst_15946__$1 == null);
var state_15996__$1 = (function (){var statearr_16004 = state_15996;
(statearr_16004[(14)] = inst_15947);

(statearr_16004[(7)] = inst_15946__$1);

(statearr_16004[(13)] = inst_15949__$1);

return statearr_16004;
})();
if(cljs.core.truth_(inst_15949__$1)){
var statearr_16005_17881 = state_15996__$1;
(statearr_16005_17881[(1)] = (5));

} else {
var statearr_16006_17882 = state_15996__$1;
(statearr_16006_17882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (15))){
var inst_15970 = (state_15996[(15)]);
var inst_15938 = (state_15996[(16)]);
var inst_15970__$1 = cljs.core.empty_QMARK_(inst_15938);
var state_15996__$1 = (function (){var statearr_16007 = state_15996;
(statearr_16007[(15)] = inst_15970__$1);

return statearr_16007;
})();
if(inst_15970__$1){
var statearr_16008_17883 = state_15996__$1;
(statearr_16008_17883[(1)] = (17));

} else {
var statearr_16009_17884 = state_15996__$1;
(statearr_16009_17884[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (21))){
var inst_15937 = (state_15996[(12)]);
var inst_15932 = inst_15937;
var state_15996__$1 = (function (){var statearr_16014 = state_15996;
(statearr_16014[(11)] = inst_15932);

return statearr_16014;
})();
var statearr_16016_17897 = state_15996__$1;
(statearr_16016_17897[(2)] = null);

(statearr_16016_17897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (13))){
var inst_15963 = (state_15996[(2)]);
var inst_15964 = calc_state();
var inst_15932 = inst_15964;
var state_15996__$1 = (function (){var statearr_16017 = state_15996;
(statearr_16017[(17)] = inst_15963);

(statearr_16017[(11)] = inst_15932);

return statearr_16017;
})();
var statearr_16019_17898 = state_15996__$1;
(statearr_16019_17898[(2)] = null);

(statearr_16019_17898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (22))){
var inst_15990 = (state_15996[(2)]);
var state_15996__$1 = state_15996;
var statearr_16020_17903 = state_15996__$1;
(statearr_16020_17903[(2)] = inst_15990);

(statearr_16020_17903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (6))){
var inst_15947 = (state_15996[(14)]);
var inst_15953 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15947,change);
var state_15996__$1 = state_15996;
var statearr_16021_17907 = state_15996__$1;
(statearr_16021_17907[(2)] = inst_15953);

(statearr_16021_17907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (25))){
var state_15996__$1 = state_15996;
var statearr_16023_17912 = state_15996__$1;
(statearr_16023_17912[(2)] = null);

(statearr_16023_17912[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (17))){
var inst_15947 = (state_15996[(14)]);
var inst_15939 = (state_15996[(18)]);
var inst_15972 = (inst_15939.cljs$core$IFn$_invoke$arity$1 ? inst_15939.cljs$core$IFn$_invoke$arity$1(inst_15947) : inst_15939.call(null,inst_15947));
var inst_15973 = cljs.core.not(inst_15972);
var state_15996__$1 = state_15996;
var statearr_16025_17914 = state_15996__$1;
(statearr_16025_17914[(2)] = inst_15973);

(statearr_16025_17914[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (3))){
var inst_15994 = (state_15996[(2)]);
var state_15996__$1 = state_15996;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15996__$1,inst_15994);
} else {
if((state_val_15997 === (12))){
var state_15996__$1 = state_15996;
var statearr_16032_17915 = state_15996__$1;
(statearr_16032_17915[(2)] = null);

(statearr_16032_17915[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (2))){
var inst_15937 = (state_15996[(12)]);
var inst_15932 = (state_15996[(11)]);
var inst_15937__$1 = cljs.core.__destructure_map(inst_15932);
var inst_15938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15937__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15939 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15937__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15940 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15937__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15996__$1 = (function (){var statearr_16034 = state_15996;
(statearr_16034[(16)] = inst_15938);

(statearr_16034[(18)] = inst_15939);

(statearr_16034[(12)] = inst_15937__$1);

return statearr_16034;
})();
return cljs.core.async.ioc_alts_BANG_(state_15996__$1,(4),inst_15940);
} else {
if((state_val_15997 === (23))){
var inst_15981 = (state_15996[(2)]);
var state_15996__$1 = state_15996;
if(cljs.core.truth_(inst_15981)){
var statearr_16035_17923 = state_15996__$1;
(statearr_16035_17923[(1)] = (24));

} else {
var statearr_16037_17927 = state_15996__$1;
(statearr_16037_17927[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (19))){
var inst_15976 = (state_15996[(2)]);
var state_15996__$1 = state_15996;
var statearr_16039_17928 = state_15996__$1;
(statearr_16039_17928[(2)] = inst_15976);

(statearr_16039_17928[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (11))){
var inst_15947 = (state_15996[(14)]);
var inst_15960 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15947);
var state_15996__$1 = state_15996;
var statearr_16041_17929 = state_15996__$1;
(statearr_16041_17929[(2)] = inst_15960);

(statearr_16041_17929[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (9))){
var inst_15947 = (state_15996[(14)]);
var inst_15938 = (state_15996[(16)]);
var inst_15967 = (state_15996[(19)]);
var inst_15967__$1 = (inst_15938.cljs$core$IFn$_invoke$arity$1 ? inst_15938.cljs$core$IFn$_invoke$arity$1(inst_15947) : inst_15938.call(null,inst_15947));
var state_15996__$1 = (function (){var statearr_16042 = state_15996;
(statearr_16042[(19)] = inst_15967__$1);

return statearr_16042;
})();
if(cljs.core.truth_(inst_15967__$1)){
var statearr_16043_17933 = state_15996__$1;
(statearr_16043_17933[(1)] = (14));

} else {
var statearr_16044_17934 = state_15996__$1;
(statearr_16044_17934[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (5))){
var inst_15949 = (state_15996[(13)]);
var state_15996__$1 = state_15996;
var statearr_16045_17936 = state_15996__$1;
(statearr_16045_17936[(2)] = inst_15949);

(statearr_16045_17936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (14))){
var inst_15967 = (state_15996[(19)]);
var state_15996__$1 = state_15996;
var statearr_16047_17940 = state_15996__$1;
(statearr_16047_17940[(2)] = inst_15967);

(statearr_16047_17940[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (26))){
var inst_15986 = (state_15996[(2)]);
var state_15996__$1 = state_15996;
var statearr_16048_17941 = state_15996__$1;
(statearr_16048_17941[(2)] = inst_15986);

(statearr_16048_17941[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (16))){
var inst_15978 = (state_15996[(2)]);
var state_15996__$1 = state_15996;
if(cljs.core.truth_(inst_15978)){
var statearr_16049_17942 = state_15996__$1;
(statearr_16049_17942[(1)] = (20));

} else {
var statearr_16050_17943 = state_15996__$1;
(statearr_16050_17943[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (10))){
var inst_15992 = (state_15996[(2)]);
var state_15996__$1 = state_15996;
var statearr_16052_17944 = state_15996__$1;
(statearr_16052_17944[(2)] = inst_15992);

(statearr_16052_17944[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (18))){
var inst_15970 = (state_15996[(15)]);
var state_15996__$1 = state_15996;
var statearr_16053_17945 = state_15996__$1;
(statearr_16053_17945[(2)] = inst_15970);

(statearr_16053_17945[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15997 === (8))){
var inst_15946 = (state_15996[(7)]);
var inst_15958 = (inst_15946 == null);
var state_15996__$1 = state_15996;
if(cljs.core.truth_(inst_15958)){
var statearr_16054_17946 = state_15996__$1;
(statearr_16054_17946[(1)] = (11));

} else {
var statearr_16055_17947 = state_15996__$1;
(statearr_16055_17947[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__13736__auto__ = null;
var cljs$core$async$mix_$_state_machine__13736__auto____0 = (function (){
var statearr_16056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16056[(0)] = cljs$core$async$mix_$_state_machine__13736__auto__);

(statearr_16056[(1)] = (1));

return statearr_16056;
});
var cljs$core$async$mix_$_state_machine__13736__auto____1 = (function (state_15996){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13734__auto__(state_15996);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e16057){var ex__13740__auto__ = e16057;
var statearr_16058_17951 = state_15996;
(statearr_16058_17951[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_15996[(4)]))){
var statearr_16059_17952 = state_15996;
(statearr_16059_17952[(1)] = cljs.core.first((state_15996[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17954 = state_15996;
state_15996 = G__17954;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__13736__auto__ = function(state_15996){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__13736__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__13736__auto____1.call(this,state_15996);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__13736__auto____0;
cljs$core$async$mix_$_state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__13736__auto____1;
return cljs$core$async$mix_$_state_machine__13736__auto__;
})()
})();
var state__14223__auto__ = (function (){var statearr_16061 = f__14222__auto__();
(statearr_16061[(6)] = c__14221__auto___17860);

return statearr_16061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14223__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_17958 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_17958(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17959 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_17959(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17963 = (function() {
var G__17964 = null;
var G__17964__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__17964__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__17964 = function(p,v){
switch(arguments.length){
case 1:
return G__17964__1.call(this,p);
case 2:
return G__17964__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17964.cljs$core$IFn$_invoke$arity$1 = G__17964__1;
G__17964.cljs$core$IFn$_invoke$arity$2 = G__17964__2;
return G__17964;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16084 = arguments.length;
switch (G__16084) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17963(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17963(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16100 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16101){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16101 = meta16101;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16100.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16102,meta16101__$1){
var self__ = this;
var _16102__$1 = this;
return (new cljs.core.async.t_cljs$core$async16100(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16101__$1));
}));

(cljs.core.async.t_cljs$core$async16100.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16102){
var self__ = this;
var _16102__$1 = this;
return self__.meta16101;
}));

(cljs.core.async.t_cljs$core$async16100.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16100.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16100.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16100.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16100.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16100.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16100.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16100.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16101","meta16101",954498071,null)], null);
}));

(cljs.core.async.t_cljs$core$async16100.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16100.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16100");

(cljs.core.async.t_cljs$core$async16100.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16100");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16100.
 */
cljs.core.async.__GT_t_cljs$core$async16100 = (function cljs$core$async$__GT_t_cljs$core$async16100(ch,topic_fn,buf_fn,mults,ensure_mult,meta16101){
return (new cljs.core.async.t_cljs$core$async16100(ch,topic_fn,buf_fn,mults,ensure_mult,meta16101));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16091 = arguments.length;
switch (G__16091) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16087_SHARP_){
if(cljs.core.truth_((p1__16087_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16087_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16087_SHARP_.call(null,topic)))){
return p1__16087_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16087_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16100(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14221__auto___17987 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14222__auto__ = (function (){var switch__13734__auto__ = (function (state_16207){
var state_val_16208 = (state_16207[(1)]);
if((state_val_16208 === (7))){
var inst_16198 = (state_16207[(2)]);
var state_16207__$1 = state_16207;
var statearr_16213_17988 = state_16207__$1;
(statearr_16213_17988[(2)] = inst_16198);

(statearr_16213_17988[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (20))){
var state_16207__$1 = state_16207;
var statearr_16214_17991 = state_16207__$1;
(statearr_16214_17991[(2)] = null);

(statearr_16214_17991[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (1))){
var state_16207__$1 = state_16207;
var statearr_16216_17995 = state_16207__$1;
(statearr_16216_17995[(2)] = null);

(statearr_16216_17995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (24))){
var inst_16180 = (state_16207[(7)]);
var inst_16190 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16180);
var state_16207__$1 = state_16207;
var statearr_16244_17996 = state_16207__$1;
(statearr_16244_17996[(2)] = inst_16190);

(statearr_16244_17996[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (4))){
var inst_16124 = (state_16207[(8)]);
var inst_16124__$1 = (state_16207[(2)]);
var inst_16125 = (inst_16124__$1 == null);
var state_16207__$1 = (function (){var statearr_16246 = state_16207;
(statearr_16246[(8)] = inst_16124__$1);

return statearr_16246;
})();
if(cljs.core.truth_(inst_16125)){
var statearr_16247_17997 = state_16207__$1;
(statearr_16247_17997[(1)] = (5));

} else {
var statearr_16248_17998 = state_16207__$1;
(statearr_16248_17998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (15))){
var inst_16174 = (state_16207[(2)]);
var state_16207__$1 = state_16207;
var statearr_16252_17999 = state_16207__$1;
(statearr_16252_17999[(2)] = inst_16174);

(statearr_16252_17999[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (21))){
var inst_16195 = (state_16207[(2)]);
var state_16207__$1 = (function (){var statearr_16253 = state_16207;
(statearr_16253[(9)] = inst_16195);

return statearr_16253;
})();
var statearr_16255_18000 = state_16207__$1;
(statearr_16255_18000[(2)] = null);

(statearr_16255_18000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (13))){
var inst_16152 = (state_16207[(10)]);
var inst_16155 = cljs.core.chunked_seq_QMARK_(inst_16152);
var state_16207__$1 = state_16207;
if(inst_16155){
var statearr_16258_18002 = state_16207__$1;
(statearr_16258_18002[(1)] = (16));

} else {
var statearr_16260_18003 = state_16207__$1;
(statearr_16260_18003[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (22))){
var inst_16186 = (state_16207[(2)]);
var state_16207__$1 = state_16207;
if(cljs.core.truth_(inst_16186)){
var statearr_16261_18004 = state_16207__$1;
(statearr_16261_18004[(1)] = (23));

} else {
var statearr_16263_18005 = state_16207__$1;
(statearr_16263_18005[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (6))){
var inst_16182 = (state_16207[(11)]);
var inst_16180 = (state_16207[(7)]);
var inst_16124 = (state_16207[(8)]);
var inst_16180__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16124) : topic_fn.call(null,inst_16124));
var inst_16181 = cljs.core.deref(mults);
var inst_16182__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16181,inst_16180__$1);
var state_16207__$1 = (function (){var statearr_16269 = state_16207;
(statearr_16269[(11)] = inst_16182__$1);

(statearr_16269[(7)] = inst_16180__$1);

return statearr_16269;
})();
if(cljs.core.truth_(inst_16182__$1)){
var statearr_16272_18006 = state_16207__$1;
(statearr_16272_18006[(1)] = (19));

} else {
var statearr_16273_18007 = state_16207__$1;
(statearr_16273_18007[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (25))){
var inst_16192 = (state_16207[(2)]);
var state_16207__$1 = state_16207;
var statearr_16275_18008 = state_16207__$1;
(statearr_16275_18008[(2)] = inst_16192);

(statearr_16275_18008[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (17))){
var inst_16152 = (state_16207[(10)]);
var inst_16162 = cljs.core.first(inst_16152);
var inst_16164 = cljs.core.async.muxch_STAR_(inst_16162);
var inst_16165 = cljs.core.async.close_BANG_(inst_16164);
var inst_16167 = cljs.core.next(inst_16152);
var inst_16135 = inst_16167;
var inst_16136 = null;
var inst_16137 = (0);
var inst_16138 = (0);
var state_16207__$1 = (function (){var statearr_16279 = state_16207;
(statearr_16279[(12)] = inst_16138);

(statearr_16279[(13)] = inst_16137);

(statearr_16279[(14)] = inst_16136);

(statearr_16279[(15)] = inst_16165);

(statearr_16279[(16)] = inst_16135);

return statearr_16279;
})();
var statearr_16280_18013 = state_16207__$1;
(statearr_16280_18013[(2)] = null);

(statearr_16280_18013[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (3))){
var inst_16200 = (state_16207[(2)]);
var state_16207__$1 = state_16207;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16207__$1,inst_16200);
} else {
if((state_val_16208 === (12))){
var inst_16176 = (state_16207[(2)]);
var state_16207__$1 = state_16207;
var statearr_16285_18016 = state_16207__$1;
(statearr_16285_18016[(2)] = inst_16176);

(statearr_16285_18016[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (2))){
var state_16207__$1 = state_16207;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16207__$1,(4),ch);
} else {
if((state_val_16208 === (23))){
var state_16207__$1 = state_16207;
var statearr_16288_18019 = state_16207__$1;
(statearr_16288_18019[(2)] = null);

(statearr_16288_18019[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (19))){
var inst_16182 = (state_16207[(11)]);
var inst_16124 = (state_16207[(8)]);
var inst_16184 = cljs.core.async.muxch_STAR_(inst_16182);
var state_16207__$1 = state_16207;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16207__$1,(22),inst_16184,inst_16124);
} else {
if((state_val_16208 === (11))){
var inst_16152 = (state_16207[(10)]);
var inst_16135 = (state_16207[(16)]);
var inst_16152__$1 = cljs.core.seq(inst_16135);
var state_16207__$1 = (function (){var statearr_16294 = state_16207;
(statearr_16294[(10)] = inst_16152__$1);

return statearr_16294;
})();
if(inst_16152__$1){
var statearr_16296_18026 = state_16207__$1;
(statearr_16296_18026[(1)] = (13));

} else {
var statearr_16297_18027 = state_16207__$1;
(statearr_16297_18027[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (9))){
var inst_16178 = (state_16207[(2)]);
var state_16207__$1 = state_16207;
var statearr_16301_18028 = state_16207__$1;
(statearr_16301_18028[(2)] = inst_16178);

(statearr_16301_18028[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (5))){
var inst_16132 = cljs.core.deref(mults);
var inst_16133 = cljs.core.vals(inst_16132);
var inst_16134 = cljs.core.seq(inst_16133);
var inst_16135 = inst_16134;
var inst_16136 = null;
var inst_16137 = (0);
var inst_16138 = (0);
var state_16207__$1 = (function (){var statearr_16305 = state_16207;
(statearr_16305[(12)] = inst_16138);

(statearr_16305[(13)] = inst_16137);

(statearr_16305[(14)] = inst_16136);

(statearr_16305[(16)] = inst_16135);

return statearr_16305;
})();
var statearr_16306_18030 = state_16207__$1;
(statearr_16306_18030[(2)] = null);

(statearr_16306_18030[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (14))){
var state_16207__$1 = state_16207;
var statearr_16311_18031 = state_16207__$1;
(statearr_16311_18031[(2)] = null);

(statearr_16311_18031[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (16))){
var inst_16152 = (state_16207[(10)]);
var inst_16157 = cljs.core.chunk_first(inst_16152);
var inst_16158 = cljs.core.chunk_rest(inst_16152);
var inst_16159 = cljs.core.count(inst_16157);
var inst_16135 = inst_16158;
var inst_16136 = inst_16157;
var inst_16137 = inst_16159;
var inst_16138 = (0);
var state_16207__$1 = (function (){var statearr_16315 = state_16207;
(statearr_16315[(12)] = inst_16138);

(statearr_16315[(13)] = inst_16137);

(statearr_16315[(14)] = inst_16136);

(statearr_16315[(16)] = inst_16135);

return statearr_16315;
})();
var statearr_16318_18038 = state_16207__$1;
(statearr_16318_18038[(2)] = null);

(statearr_16318_18038[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (10))){
var inst_16138 = (state_16207[(12)]);
var inst_16137 = (state_16207[(13)]);
var inst_16136 = (state_16207[(14)]);
var inst_16135 = (state_16207[(16)]);
var inst_16144 = cljs.core._nth(inst_16136,inst_16138);
var inst_16146 = cljs.core.async.muxch_STAR_(inst_16144);
var inst_16147 = cljs.core.async.close_BANG_(inst_16146);
var inst_16149 = (inst_16138 + (1));
var tmp16307 = inst_16137;
var tmp16308 = inst_16136;
var tmp16309 = inst_16135;
var inst_16135__$1 = tmp16309;
var inst_16136__$1 = tmp16308;
var inst_16137__$1 = tmp16307;
var inst_16138__$1 = inst_16149;
var state_16207__$1 = (function (){var statearr_16323 = state_16207;
(statearr_16323[(12)] = inst_16138__$1);

(statearr_16323[(13)] = inst_16137__$1);

(statearr_16323[(14)] = inst_16136__$1);

(statearr_16323[(16)] = inst_16135__$1);

(statearr_16323[(17)] = inst_16147);

return statearr_16323;
})();
var statearr_16324_18048 = state_16207__$1;
(statearr_16324_18048[(2)] = null);

(statearr_16324_18048[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (18))){
var inst_16170 = (state_16207[(2)]);
var state_16207__$1 = state_16207;
var statearr_16326_18052 = state_16207__$1;
(statearr_16326_18052[(2)] = inst_16170);

(statearr_16326_18052[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16208 === (8))){
var inst_16138 = (state_16207[(12)]);
var inst_16137 = (state_16207[(13)]);
var inst_16140 = (inst_16138 < inst_16137);
var inst_16141 = inst_16140;
var state_16207__$1 = state_16207;
if(cljs.core.truth_(inst_16141)){
var statearr_16330_18057 = state_16207__$1;
(statearr_16330_18057[(1)] = (10));

} else {
var statearr_16332_18059 = state_16207__$1;
(statearr_16332_18059[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13736__auto__ = null;
var cljs$core$async$state_machine__13736__auto____0 = (function (){
var statearr_16334 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16334[(0)] = cljs$core$async$state_machine__13736__auto__);

(statearr_16334[(1)] = (1));

return statearr_16334;
});
var cljs$core$async$state_machine__13736__auto____1 = (function (state_16207){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13734__auto__(state_16207);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e16338){var ex__13740__auto__ = e16338;
var statearr_16339_18066 = state_16207;
(statearr_16339_18066[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_16207[(4)]))){
var statearr_16340_18069 = state_16207;
(statearr_16340_18069[(1)] = cljs.core.first((state_16207[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18077 = state_16207;
state_16207 = G__18077;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$state_machine__13736__auto__ = function(state_16207){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13736__auto____1.call(this,state_16207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13736__auto____0;
cljs$core$async$state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13736__auto____1;
return cljs$core$async$state_machine__13736__auto__;
})()
})();
var state__14223__auto__ = (function (){var statearr_16344 = f__14222__auto__();
(statearr_16344[(6)] = c__14221__auto___17987);

return statearr_16344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14223__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16351 = arguments.length;
switch (G__16351) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16408 = arguments.length;
switch (G__16408) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16454 = arguments.length;
switch (G__16454) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14221__auto___18081 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14222__auto__ = (function (){var switch__13734__auto__ = (function (state_16519){
var state_val_16520 = (state_16519[(1)]);
if((state_val_16520 === (7))){
var state_16519__$1 = state_16519;
var statearr_16521_18082 = state_16519__$1;
(statearr_16521_18082[(2)] = null);

(statearr_16521_18082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16520 === (1))){
var state_16519__$1 = state_16519;
var statearr_16522_18083 = state_16519__$1;
(statearr_16522_18083[(2)] = null);

(statearr_16522_18083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16520 === (4))){
var inst_16479 = (state_16519[(7)]);
var inst_16477 = (state_16519[(8)]);
var inst_16481 = (inst_16479 < inst_16477);
var state_16519__$1 = state_16519;
if(cljs.core.truth_(inst_16481)){
var statearr_16523_18084 = state_16519__$1;
(statearr_16523_18084[(1)] = (6));

} else {
var statearr_16524_18085 = state_16519__$1;
(statearr_16524_18085[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16520 === (15))){
var inst_16505 = (state_16519[(9)]);
var inst_16510 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16505);
var state_16519__$1 = state_16519;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16519__$1,(17),out,inst_16510);
} else {
if((state_val_16520 === (13))){
var inst_16505 = (state_16519[(9)]);
var inst_16505__$1 = (state_16519[(2)]);
var inst_16506 = cljs.core.some(cljs.core.nil_QMARK_,inst_16505__$1);
var state_16519__$1 = (function (){var statearr_16525 = state_16519;
(statearr_16525[(9)] = inst_16505__$1);

return statearr_16525;
})();
if(cljs.core.truth_(inst_16506)){
var statearr_16526_18086 = state_16519__$1;
(statearr_16526_18086[(1)] = (14));

} else {
var statearr_16527_18087 = state_16519__$1;
(statearr_16527_18087[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16520 === (6))){
var state_16519__$1 = state_16519;
var statearr_16528_18092 = state_16519__$1;
(statearr_16528_18092[(2)] = null);

(statearr_16528_18092[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16520 === (17))){
var inst_16512 = (state_16519[(2)]);
var state_16519__$1 = (function (){var statearr_16535 = state_16519;
(statearr_16535[(10)] = inst_16512);

return statearr_16535;
})();
var statearr_16536_18093 = state_16519__$1;
(statearr_16536_18093[(2)] = null);

(statearr_16536_18093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16520 === (3))){
var inst_16517 = (state_16519[(2)]);
var state_16519__$1 = state_16519;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16519__$1,inst_16517);
} else {
if((state_val_16520 === (12))){
var _ = (function (){var statearr_16537 = state_16519;
(statearr_16537[(4)] = cljs.core.rest((state_16519[(4)])));

return statearr_16537;
})();
var state_16519__$1 = state_16519;
var ex16532 = (state_16519__$1[(2)]);
var statearr_16538_18095 = state_16519__$1;
(statearr_16538_18095[(5)] = ex16532);


if((ex16532 instanceof Object)){
var statearr_16543_18096 = state_16519__$1;
(statearr_16543_18096[(1)] = (11));

(statearr_16543_18096[(5)] = null);

} else {
throw ex16532;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16520 === (2))){
var inst_16476 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16477 = cnt;
var inst_16479 = (0);
var state_16519__$1 = (function (){var statearr_16545 = state_16519;
(statearr_16545[(11)] = inst_16476);

(statearr_16545[(7)] = inst_16479);

(statearr_16545[(8)] = inst_16477);

return statearr_16545;
})();
var statearr_16546_18097 = state_16519__$1;
(statearr_16546_18097[(2)] = null);

(statearr_16546_18097[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16520 === (11))){
var inst_16483 = (state_16519[(2)]);
var inst_16484 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16519__$1 = (function (){var statearr_16547 = state_16519;
(statearr_16547[(12)] = inst_16483);

return statearr_16547;
})();
var statearr_16548_18098 = state_16519__$1;
(statearr_16548_18098[(2)] = inst_16484);

(statearr_16548_18098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16520 === (9))){
var inst_16479 = (state_16519[(7)]);
var _ = (function (){var statearr_16550 = state_16519;
(statearr_16550[(4)] = cljs.core.cons((12),(state_16519[(4)])));

return statearr_16550;
})();
var inst_16490 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16479) : chs__$1.call(null,inst_16479));
var inst_16491 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16479) : done.call(null,inst_16479));
var inst_16492 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16490,inst_16491);
var ___$1 = (function (){var statearr_16551 = state_16519;
(statearr_16551[(4)] = cljs.core.rest((state_16519[(4)])));

return statearr_16551;
})();
var state_16519__$1 = state_16519;
var statearr_16552_18099 = state_16519__$1;
(statearr_16552_18099[(2)] = inst_16492);

(statearr_16552_18099[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16520 === (5))){
var inst_16503 = (state_16519[(2)]);
var state_16519__$1 = (function (){var statearr_16553 = state_16519;
(statearr_16553[(13)] = inst_16503);

return statearr_16553;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16519__$1,(13),dchan);
} else {
if((state_val_16520 === (14))){
var inst_16508 = cljs.core.async.close_BANG_(out);
var state_16519__$1 = state_16519;
var statearr_16558_18100 = state_16519__$1;
(statearr_16558_18100[(2)] = inst_16508);

(statearr_16558_18100[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16520 === (16))){
var inst_16515 = (state_16519[(2)]);
var state_16519__$1 = state_16519;
var statearr_16559_18101 = state_16519__$1;
(statearr_16559_18101[(2)] = inst_16515);

(statearr_16559_18101[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16520 === (10))){
var inst_16479 = (state_16519[(7)]);
var inst_16495 = (state_16519[(2)]);
var inst_16497 = (inst_16479 + (1));
var inst_16479__$1 = inst_16497;
var state_16519__$1 = (function (){var statearr_16560 = state_16519;
(statearr_16560[(7)] = inst_16479__$1);

(statearr_16560[(14)] = inst_16495);

return statearr_16560;
})();
var statearr_16561_18103 = state_16519__$1;
(statearr_16561_18103[(2)] = null);

(statearr_16561_18103[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16520 === (8))){
var inst_16501 = (state_16519[(2)]);
var state_16519__$1 = state_16519;
var statearr_16562_18104 = state_16519__$1;
(statearr_16562_18104[(2)] = inst_16501);

(statearr_16562_18104[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13736__auto__ = null;
var cljs$core$async$state_machine__13736__auto____0 = (function (){
var statearr_16563 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16563[(0)] = cljs$core$async$state_machine__13736__auto__);

(statearr_16563[(1)] = (1));

return statearr_16563;
});
var cljs$core$async$state_machine__13736__auto____1 = (function (state_16519){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13734__auto__(state_16519);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e16564){var ex__13740__auto__ = e16564;
var statearr_16565_18105 = state_16519;
(statearr_16565_18105[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_16519[(4)]))){
var statearr_16566_18106 = state_16519;
(statearr_16566_18106[(1)] = cljs.core.first((state_16519[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18107 = state_16519;
state_16519 = G__18107;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$state_machine__13736__auto__ = function(state_16519){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13736__auto____1.call(this,state_16519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13736__auto____0;
cljs$core$async$state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13736__auto____1;
return cljs$core$async$state_machine__13736__auto__;
})()
})();
var state__14223__auto__ = (function (){var statearr_16567 = f__14222__auto__();
(statearr_16567[(6)] = c__14221__auto___18081);

return statearr_16567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14223__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16570 = arguments.length;
switch (G__16570) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14221__auto___18110 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14222__auto__ = (function (){var switch__13734__auto__ = (function (state_16606){
var state_val_16607 = (state_16606[(1)]);
if((state_val_16607 === (7))){
var inst_16582 = (state_16606[(7)]);
var inst_16581 = (state_16606[(8)]);
var inst_16581__$1 = (state_16606[(2)]);
var inst_16582__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16581__$1,(0),null);
var inst_16583 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16581__$1,(1),null);
var inst_16584 = (inst_16582__$1 == null);
var state_16606__$1 = (function (){var statearr_16608 = state_16606;
(statearr_16608[(7)] = inst_16582__$1);

(statearr_16608[(9)] = inst_16583);

(statearr_16608[(8)] = inst_16581__$1);

return statearr_16608;
})();
if(cljs.core.truth_(inst_16584)){
var statearr_16609_18111 = state_16606__$1;
(statearr_16609_18111[(1)] = (8));

} else {
var statearr_16610_18112 = state_16606__$1;
(statearr_16610_18112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (1))){
var inst_16571 = cljs.core.vec(chs);
var inst_16572 = inst_16571;
var state_16606__$1 = (function (){var statearr_16611 = state_16606;
(statearr_16611[(10)] = inst_16572);

return statearr_16611;
})();
var statearr_16612_18113 = state_16606__$1;
(statearr_16612_18113[(2)] = null);

(statearr_16612_18113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (4))){
var inst_16572 = (state_16606[(10)]);
var state_16606__$1 = state_16606;
return cljs.core.async.ioc_alts_BANG_(state_16606__$1,(7),inst_16572);
} else {
if((state_val_16607 === (6))){
var inst_16599 = (state_16606[(2)]);
var state_16606__$1 = state_16606;
var statearr_16613_18114 = state_16606__$1;
(statearr_16613_18114[(2)] = inst_16599);

(statearr_16613_18114[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (3))){
var inst_16604 = (state_16606[(2)]);
var state_16606__$1 = state_16606;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16606__$1,inst_16604);
} else {
if((state_val_16607 === (2))){
var inst_16572 = (state_16606[(10)]);
var inst_16574 = cljs.core.count(inst_16572);
var inst_16575 = (inst_16574 > (0));
var state_16606__$1 = state_16606;
if(cljs.core.truth_(inst_16575)){
var statearr_16615_18115 = state_16606__$1;
(statearr_16615_18115[(1)] = (4));

} else {
var statearr_16616_18116 = state_16606__$1;
(statearr_16616_18116[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (11))){
var inst_16572 = (state_16606[(10)]);
var inst_16592 = (state_16606[(2)]);
var tmp16614 = inst_16572;
var inst_16572__$1 = tmp16614;
var state_16606__$1 = (function (){var statearr_16617 = state_16606;
(statearr_16617[(11)] = inst_16592);

(statearr_16617[(10)] = inst_16572__$1);

return statearr_16617;
})();
var statearr_16618_18132 = state_16606__$1;
(statearr_16618_18132[(2)] = null);

(statearr_16618_18132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (9))){
var inst_16582 = (state_16606[(7)]);
var state_16606__$1 = state_16606;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16606__$1,(11),out,inst_16582);
} else {
if((state_val_16607 === (5))){
var inst_16597 = cljs.core.async.close_BANG_(out);
var state_16606__$1 = state_16606;
var statearr_16619_18133 = state_16606__$1;
(statearr_16619_18133[(2)] = inst_16597);

(statearr_16619_18133[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (10))){
var inst_16595 = (state_16606[(2)]);
var state_16606__$1 = state_16606;
var statearr_16620_18134 = state_16606__$1;
(statearr_16620_18134[(2)] = inst_16595);

(statearr_16620_18134[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16607 === (8))){
var inst_16582 = (state_16606[(7)]);
var inst_16583 = (state_16606[(9)]);
var inst_16581 = (state_16606[(8)]);
var inst_16572 = (state_16606[(10)]);
var inst_16587 = (function (){var cs = inst_16572;
var vec__16577 = inst_16581;
var v = inst_16582;
var c = inst_16583;
return (function (p1__16568_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16568_SHARP_);
});
})();
var inst_16588 = cljs.core.filterv(inst_16587,inst_16572);
var inst_16572__$1 = inst_16588;
var state_16606__$1 = (function (){var statearr_16621 = state_16606;
(statearr_16621[(10)] = inst_16572__$1);

return statearr_16621;
})();
var statearr_16623_18135 = state_16606__$1;
(statearr_16623_18135[(2)] = null);

(statearr_16623_18135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13736__auto__ = null;
var cljs$core$async$state_machine__13736__auto____0 = (function (){
var statearr_16624 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16624[(0)] = cljs$core$async$state_machine__13736__auto__);

(statearr_16624[(1)] = (1));

return statearr_16624;
});
var cljs$core$async$state_machine__13736__auto____1 = (function (state_16606){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13734__auto__(state_16606);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e16625){var ex__13740__auto__ = e16625;
var statearr_16626_18143 = state_16606;
(statearr_16626_18143[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_16606[(4)]))){
var statearr_16627_18144 = state_16606;
(statearr_16627_18144[(1)] = cljs.core.first((state_16606[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18145 = state_16606;
state_16606 = G__18145;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$state_machine__13736__auto__ = function(state_16606){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13736__auto____1.call(this,state_16606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13736__auto____0;
cljs$core$async$state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13736__auto____1;
return cljs$core$async$state_machine__13736__auto__;
})()
})();
var state__14223__auto__ = (function (){var statearr_16628 = f__14222__auto__();
(statearr_16628[(6)] = c__14221__auto___18110);

return statearr_16628;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14223__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16643 = arguments.length;
switch (G__16643) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14221__auto___18150 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14222__auto__ = (function (){var switch__13734__auto__ = (function (state_16673){
var state_val_16674 = (state_16673[(1)]);
if((state_val_16674 === (7))){
var inst_16654 = (state_16673[(7)]);
var inst_16654__$1 = (state_16673[(2)]);
var inst_16655 = (inst_16654__$1 == null);
var inst_16656 = cljs.core.not(inst_16655);
var state_16673__$1 = (function (){var statearr_16678 = state_16673;
(statearr_16678[(7)] = inst_16654__$1);

return statearr_16678;
})();
if(inst_16656){
var statearr_16679_18151 = state_16673__$1;
(statearr_16679_18151[(1)] = (8));

} else {
var statearr_16680_18152 = state_16673__$1;
(statearr_16680_18152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (1))){
var inst_16649 = (0);
var state_16673__$1 = (function (){var statearr_16681 = state_16673;
(statearr_16681[(8)] = inst_16649);

return statearr_16681;
})();
var statearr_16682_18153 = state_16673__$1;
(statearr_16682_18153[(2)] = null);

(statearr_16682_18153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (4))){
var state_16673__$1 = state_16673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16673__$1,(7),ch);
} else {
if((state_val_16674 === (6))){
var inst_16667 = (state_16673[(2)]);
var state_16673__$1 = state_16673;
var statearr_16683_18154 = state_16673__$1;
(statearr_16683_18154[(2)] = inst_16667);

(statearr_16683_18154[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (3))){
var inst_16669 = (state_16673[(2)]);
var inst_16670 = cljs.core.async.close_BANG_(out);
var state_16673__$1 = (function (){var statearr_16684 = state_16673;
(statearr_16684[(9)] = inst_16669);

return statearr_16684;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16673__$1,inst_16670);
} else {
if((state_val_16674 === (2))){
var inst_16649 = (state_16673[(8)]);
var inst_16651 = (inst_16649 < n);
var state_16673__$1 = state_16673;
if(cljs.core.truth_(inst_16651)){
var statearr_16685_18155 = state_16673__$1;
(statearr_16685_18155[(1)] = (4));

} else {
var statearr_16686_18156 = state_16673__$1;
(statearr_16686_18156[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (11))){
var inst_16649 = (state_16673[(8)]);
var inst_16659 = (state_16673[(2)]);
var inst_16660 = (inst_16649 + (1));
var inst_16649__$1 = inst_16660;
var state_16673__$1 = (function (){var statearr_16687 = state_16673;
(statearr_16687[(8)] = inst_16649__$1);

(statearr_16687[(10)] = inst_16659);

return statearr_16687;
})();
var statearr_16688_18157 = state_16673__$1;
(statearr_16688_18157[(2)] = null);

(statearr_16688_18157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (9))){
var state_16673__$1 = state_16673;
var statearr_16689_18158 = state_16673__$1;
(statearr_16689_18158[(2)] = null);

(statearr_16689_18158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (5))){
var state_16673__$1 = state_16673;
var statearr_16690_18159 = state_16673__$1;
(statearr_16690_18159[(2)] = null);

(statearr_16690_18159[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (10))){
var inst_16664 = (state_16673[(2)]);
var state_16673__$1 = state_16673;
var statearr_16691_18160 = state_16673__$1;
(statearr_16691_18160[(2)] = inst_16664);

(statearr_16691_18160[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16674 === (8))){
var inst_16654 = (state_16673[(7)]);
var state_16673__$1 = state_16673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16673__$1,(11),out,inst_16654);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13736__auto__ = null;
var cljs$core$async$state_machine__13736__auto____0 = (function (){
var statearr_16692 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16692[(0)] = cljs$core$async$state_machine__13736__auto__);

(statearr_16692[(1)] = (1));

return statearr_16692;
});
var cljs$core$async$state_machine__13736__auto____1 = (function (state_16673){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13734__auto__(state_16673);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e16693){var ex__13740__auto__ = e16693;
var statearr_16694_18161 = state_16673;
(statearr_16694_18161[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_16673[(4)]))){
var statearr_16695_18162 = state_16673;
(statearr_16695_18162[(1)] = cljs.core.first((state_16673[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18163 = state_16673;
state_16673 = G__18163;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$state_machine__13736__auto__ = function(state_16673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13736__auto____1.call(this,state_16673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13736__auto____0;
cljs$core$async$state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13736__auto____1;
return cljs$core$async$state_machine__13736__auto__;
})()
})();
var state__14223__auto__ = (function (){var statearr_16696 = f__14222__auto__();
(statearr_16696[(6)] = c__14221__auto___18150);

return statearr_16696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14223__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16704 = (function (f,ch,meta16699,_,fn1,meta16705){
this.f = f;
this.ch = ch;
this.meta16699 = meta16699;
this._ = _;
this.fn1 = fn1;
this.meta16705 = meta16705;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16706,meta16705__$1){
var self__ = this;
var _16706__$1 = this;
return (new cljs.core.async.t_cljs$core$async16704(self__.f,self__.ch,self__.meta16699,self__._,self__.fn1,meta16705__$1));
}));

(cljs.core.async.t_cljs$core$async16704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16706){
var self__ = this;
var _16706__$1 = this;
return self__.meta16705;
}));

(cljs.core.async.t_cljs$core$async16704.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16704.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16704.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16704.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16697_SHARP_){
var G__16707 = (((p1__16697_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16697_SHARP_) : self__.f.call(null,p1__16697_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16707) : f1.call(null,G__16707));
});
}));

(cljs.core.async.t_cljs$core$async16704.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16699","meta16699",1569251947,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16698","cljs.core.async/t_cljs$core$async16698",436205962,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16705","meta16705",-1499519495,null)], null);
}));

(cljs.core.async.t_cljs$core$async16704.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16704.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16704");

(cljs.core.async.t_cljs$core$async16704.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16704");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16704.
 */
cljs.core.async.__GT_t_cljs$core$async16704 = (function cljs$core$async$__GT_t_cljs$core$async16704(f,ch,meta16699,_,fn1,meta16705){
return (new cljs.core.async.t_cljs$core$async16704(f,ch,meta16699,_,fn1,meta16705));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16698 = (function (f,ch,meta16699){
this.f = f;
this.ch = ch;
this.meta16699 = meta16699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16700,meta16699__$1){
var self__ = this;
var _16700__$1 = this;
return (new cljs.core.async.t_cljs$core$async16698(self__.f,self__.ch,meta16699__$1));
}));

(cljs.core.async.t_cljs$core$async16698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16700){
var self__ = this;
var _16700__$1 = this;
return self__.meta16699;
}));

(cljs.core.async.t_cljs$core$async16698.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16698.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16698.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16698.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16698.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16704(self__.f,self__.ch,self__.meta16699,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16711 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16711) : self__.f.call(null,G__16711));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16698.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16698.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16698.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16699","meta16699",1569251947,null)], null);
}));

(cljs.core.async.t_cljs$core$async16698.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16698.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16698");

(cljs.core.async.t_cljs$core$async16698.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16698");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16698.
 */
cljs.core.async.__GT_t_cljs$core$async16698 = (function cljs$core$async$__GT_t_cljs$core$async16698(f,ch,meta16699){
return (new cljs.core.async.t_cljs$core$async16698(f,ch,meta16699));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16698(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16712 = (function (f,ch,meta16713){
this.f = f;
this.ch = ch;
this.meta16713 = meta16713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16714,meta16713__$1){
var self__ = this;
var _16714__$1 = this;
return (new cljs.core.async.t_cljs$core$async16712(self__.f,self__.ch,meta16713__$1));
}));

(cljs.core.async.t_cljs$core$async16712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16714){
var self__ = this;
var _16714__$1 = this;
return self__.meta16713;
}));

(cljs.core.async.t_cljs$core$async16712.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16712.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16712.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16712.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16712.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16712.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16712.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16713","meta16713",-42970091,null)], null);
}));

(cljs.core.async.t_cljs$core$async16712.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16712");

(cljs.core.async.t_cljs$core$async16712.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16712");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16712.
 */
cljs.core.async.__GT_t_cljs$core$async16712 = (function cljs$core$async$__GT_t_cljs$core$async16712(f,ch,meta16713){
return (new cljs.core.async.t_cljs$core$async16712(f,ch,meta16713));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16712(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16718 = (function (p,ch,meta16719){
this.p = p;
this.ch = ch;
this.meta16719 = meta16719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16720,meta16719__$1){
var self__ = this;
var _16720__$1 = this;
return (new cljs.core.async.t_cljs$core$async16718(self__.p,self__.ch,meta16719__$1));
}));

(cljs.core.async.t_cljs$core$async16718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16720){
var self__ = this;
var _16720__$1 = this;
return self__.meta16719;
}));

(cljs.core.async.t_cljs$core$async16718.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16718.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16718.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16718.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16718.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16718.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16718.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16719","meta16719",1600944485,null)], null);
}));

(cljs.core.async.t_cljs$core$async16718.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16718");

(cljs.core.async.t_cljs$core$async16718.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16718");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16718.
 */
cljs.core.async.__GT_t_cljs$core$async16718 = (function cljs$core$async$__GT_t_cljs$core$async16718(p,ch,meta16719){
return (new cljs.core.async.t_cljs$core$async16718(p,ch,meta16719));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16718(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__16725 = arguments.length;
switch (G__16725) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14221__auto___18182 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14222__auto__ = (function (){var switch__13734__auto__ = (function (state_16759){
var state_val_16760 = (state_16759[(1)]);
if((state_val_16760 === (7))){
var inst_16755 = (state_16759[(2)]);
var state_16759__$1 = state_16759;
var statearr_16761_18183 = state_16759__$1;
(statearr_16761_18183[(2)] = inst_16755);

(statearr_16761_18183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16760 === (1))){
var state_16759__$1 = state_16759;
var statearr_16762_18184 = state_16759__$1;
(statearr_16762_18184[(2)] = null);

(statearr_16762_18184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16760 === (4))){
var inst_16738 = (state_16759[(7)]);
var inst_16738__$1 = (state_16759[(2)]);
var inst_16739 = (inst_16738__$1 == null);
var state_16759__$1 = (function (){var statearr_16763 = state_16759;
(statearr_16763[(7)] = inst_16738__$1);

return statearr_16763;
})();
if(cljs.core.truth_(inst_16739)){
var statearr_16764_18185 = state_16759__$1;
(statearr_16764_18185[(1)] = (5));

} else {
var statearr_16765_18186 = state_16759__$1;
(statearr_16765_18186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16760 === (6))){
var inst_16738 = (state_16759[(7)]);
var inst_16746 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16738) : p.call(null,inst_16738));
var state_16759__$1 = state_16759;
if(cljs.core.truth_(inst_16746)){
var statearr_16772_18187 = state_16759__$1;
(statearr_16772_18187[(1)] = (8));

} else {
var statearr_16773_18188 = state_16759__$1;
(statearr_16773_18188[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16760 === (3))){
var inst_16757 = (state_16759[(2)]);
var state_16759__$1 = state_16759;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16759__$1,inst_16757);
} else {
if((state_val_16760 === (2))){
var state_16759__$1 = state_16759;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16759__$1,(4),ch);
} else {
if((state_val_16760 === (11))){
var inst_16749 = (state_16759[(2)]);
var state_16759__$1 = state_16759;
var statearr_16774_18189 = state_16759__$1;
(statearr_16774_18189[(2)] = inst_16749);

(statearr_16774_18189[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16760 === (9))){
var state_16759__$1 = state_16759;
var statearr_16775_18190 = state_16759__$1;
(statearr_16775_18190[(2)] = null);

(statearr_16775_18190[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16760 === (5))){
var inst_16741 = cljs.core.async.close_BANG_(out);
var state_16759__$1 = state_16759;
var statearr_16776_18191 = state_16759__$1;
(statearr_16776_18191[(2)] = inst_16741);

(statearr_16776_18191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16760 === (10))){
var inst_16752 = (state_16759[(2)]);
var state_16759__$1 = (function (){var statearr_16777 = state_16759;
(statearr_16777[(8)] = inst_16752);

return statearr_16777;
})();
var statearr_16778_18193 = state_16759__$1;
(statearr_16778_18193[(2)] = null);

(statearr_16778_18193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16760 === (8))){
var inst_16738 = (state_16759[(7)]);
var state_16759__$1 = state_16759;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16759__$1,(11),out,inst_16738);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13736__auto__ = null;
var cljs$core$async$state_machine__13736__auto____0 = (function (){
var statearr_16779 = [null,null,null,null,null,null,null,null,null];
(statearr_16779[(0)] = cljs$core$async$state_machine__13736__auto__);

(statearr_16779[(1)] = (1));

return statearr_16779;
});
var cljs$core$async$state_machine__13736__auto____1 = (function (state_16759){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13734__auto__(state_16759);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e16780){var ex__13740__auto__ = e16780;
var statearr_16781_18197 = state_16759;
(statearr_16781_18197[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_16759[(4)]))){
var statearr_16782_18198 = state_16759;
(statearr_16782_18198[(1)] = cljs.core.first((state_16759[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18199 = state_16759;
state_16759 = G__18199;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$state_machine__13736__auto__ = function(state_16759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13736__auto____1.call(this,state_16759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13736__auto____0;
cljs$core$async$state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13736__auto____1;
return cljs$core$async$state_machine__13736__auto__;
})()
})();
var state__14223__auto__ = (function (){var statearr_16786 = f__14222__auto__();
(statearr_16786[(6)] = c__14221__auto___18182);

return statearr_16786;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14223__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16788 = arguments.length;
switch (G__16788) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14221__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14222__auto__ = (function (){var switch__13734__auto__ = (function (state_16856){
var state_val_16857 = (state_16856[(1)]);
if((state_val_16857 === (7))){
var inst_16849 = (state_16856[(2)]);
var state_16856__$1 = state_16856;
var statearr_16858_18214 = state_16856__$1;
(statearr_16858_18214[(2)] = inst_16849);

(statearr_16858_18214[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (20))){
var inst_16819 = (state_16856[(7)]);
var inst_16830 = (state_16856[(2)]);
var inst_16831 = cljs.core.next(inst_16819);
var inst_16802 = inst_16831;
var inst_16803 = null;
var inst_16804 = (0);
var inst_16805 = (0);
var state_16856__$1 = (function (){var statearr_16871 = state_16856;
(statearr_16871[(8)] = inst_16803);

(statearr_16871[(9)] = inst_16830);

(statearr_16871[(10)] = inst_16802);

(statearr_16871[(11)] = inst_16805);

(statearr_16871[(12)] = inst_16804);

return statearr_16871;
})();
var statearr_16872_18215 = state_16856__$1;
(statearr_16872_18215[(2)] = null);

(statearr_16872_18215[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (1))){
var state_16856__$1 = state_16856;
var statearr_16873_18216 = state_16856__$1;
(statearr_16873_18216[(2)] = null);

(statearr_16873_18216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (4))){
var inst_16791 = (state_16856[(13)]);
var inst_16791__$1 = (state_16856[(2)]);
var inst_16792 = (inst_16791__$1 == null);
var state_16856__$1 = (function (){var statearr_16874 = state_16856;
(statearr_16874[(13)] = inst_16791__$1);

return statearr_16874;
})();
if(cljs.core.truth_(inst_16792)){
var statearr_16875_18217 = state_16856__$1;
(statearr_16875_18217[(1)] = (5));

} else {
var statearr_16876_18218 = state_16856__$1;
(statearr_16876_18218[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (15))){
var state_16856__$1 = state_16856;
var statearr_16880_18219 = state_16856__$1;
(statearr_16880_18219[(2)] = null);

(statearr_16880_18219[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (21))){
var state_16856__$1 = state_16856;
var statearr_16881_18221 = state_16856__$1;
(statearr_16881_18221[(2)] = null);

(statearr_16881_18221[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (13))){
var inst_16803 = (state_16856[(8)]);
var inst_16802 = (state_16856[(10)]);
var inst_16805 = (state_16856[(11)]);
var inst_16804 = (state_16856[(12)]);
var inst_16815 = (state_16856[(2)]);
var inst_16816 = (inst_16805 + (1));
var tmp16877 = inst_16803;
var tmp16878 = inst_16802;
var tmp16879 = inst_16804;
var inst_16802__$1 = tmp16878;
var inst_16803__$1 = tmp16877;
var inst_16804__$1 = tmp16879;
var inst_16805__$1 = inst_16816;
var state_16856__$1 = (function (){var statearr_16898 = state_16856;
(statearr_16898[(8)] = inst_16803__$1);

(statearr_16898[(10)] = inst_16802__$1);

(statearr_16898[(11)] = inst_16805__$1);

(statearr_16898[(12)] = inst_16804__$1);

(statearr_16898[(14)] = inst_16815);

return statearr_16898;
})();
var statearr_16899_18239 = state_16856__$1;
(statearr_16899_18239[(2)] = null);

(statearr_16899_18239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (22))){
var state_16856__$1 = state_16856;
var statearr_16900_18243 = state_16856__$1;
(statearr_16900_18243[(2)] = null);

(statearr_16900_18243[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (6))){
var inst_16791 = (state_16856[(13)]);
var inst_16800 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16791) : f.call(null,inst_16791));
var inst_16801 = cljs.core.seq(inst_16800);
var inst_16802 = inst_16801;
var inst_16803 = null;
var inst_16804 = (0);
var inst_16805 = (0);
var state_16856__$1 = (function (){var statearr_16901 = state_16856;
(statearr_16901[(8)] = inst_16803);

(statearr_16901[(10)] = inst_16802);

(statearr_16901[(11)] = inst_16805);

(statearr_16901[(12)] = inst_16804);

return statearr_16901;
})();
var statearr_16902_18247 = state_16856__$1;
(statearr_16902_18247[(2)] = null);

(statearr_16902_18247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (17))){
var inst_16819 = (state_16856[(7)]);
var inst_16823 = cljs.core.chunk_first(inst_16819);
var inst_16824 = cljs.core.chunk_rest(inst_16819);
var inst_16825 = cljs.core.count(inst_16823);
var inst_16802 = inst_16824;
var inst_16803 = inst_16823;
var inst_16804 = inst_16825;
var inst_16805 = (0);
var state_16856__$1 = (function (){var statearr_16903 = state_16856;
(statearr_16903[(8)] = inst_16803);

(statearr_16903[(10)] = inst_16802);

(statearr_16903[(11)] = inst_16805);

(statearr_16903[(12)] = inst_16804);

return statearr_16903;
})();
var statearr_16904_18248 = state_16856__$1;
(statearr_16904_18248[(2)] = null);

(statearr_16904_18248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (3))){
var inst_16851 = (state_16856[(2)]);
var state_16856__$1 = state_16856;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16856__$1,inst_16851);
} else {
if((state_val_16857 === (12))){
var inst_16839 = (state_16856[(2)]);
var state_16856__$1 = state_16856;
var statearr_16905_18252 = state_16856__$1;
(statearr_16905_18252[(2)] = inst_16839);

(statearr_16905_18252[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (2))){
var state_16856__$1 = state_16856;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16856__$1,(4),in$);
} else {
if((state_val_16857 === (23))){
var inst_16847 = (state_16856[(2)]);
var state_16856__$1 = state_16856;
var statearr_16906_18264 = state_16856__$1;
(statearr_16906_18264[(2)] = inst_16847);

(statearr_16906_18264[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (19))){
var inst_16834 = (state_16856[(2)]);
var state_16856__$1 = state_16856;
var statearr_16913_18265 = state_16856__$1;
(statearr_16913_18265[(2)] = inst_16834);

(statearr_16913_18265[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (11))){
var inst_16802 = (state_16856[(10)]);
var inst_16819 = (state_16856[(7)]);
var inst_16819__$1 = cljs.core.seq(inst_16802);
var state_16856__$1 = (function (){var statearr_16914 = state_16856;
(statearr_16914[(7)] = inst_16819__$1);

return statearr_16914;
})();
if(inst_16819__$1){
var statearr_16915_18273 = state_16856__$1;
(statearr_16915_18273[(1)] = (14));

} else {
var statearr_16916_18274 = state_16856__$1;
(statearr_16916_18274[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (9))){
var inst_16841 = (state_16856[(2)]);
var inst_16842 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16856__$1 = (function (){var statearr_16917 = state_16856;
(statearr_16917[(15)] = inst_16841);

return statearr_16917;
})();
if(cljs.core.truth_(inst_16842)){
var statearr_16927_18278 = state_16856__$1;
(statearr_16927_18278[(1)] = (21));

} else {
var statearr_16928_18279 = state_16856__$1;
(statearr_16928_18279[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (5))){
var inst_16794 = cljs.core.async.close_BANG_(out);
var state_16856__$1 = state_16856;
var statearr_16929_18280 = state_16856__$1;
(statearr_16929_18280[(2)] = inst_16794);

(statearr_16929_18280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (14))){
var inst_16819 = (state_16856[(7)]);
var inst_16821 = cljs.core.chunked_seq_QMARK_(inst_16819);
var state_16856__$1 = state_16856;
if(inst_16821){
var statearr_16930_18281 = state_16856__$1;
(statearr_16930_18281[(1)] = (17));

} else {
var statearr_16931_18282 = state_16856__$1;
(statearr_16931_18282[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (16))){
var inst_16837 = (state_16856[(2)]);
var state_16856__$1 = state_16856;
var statearr_16935_18283 = state_16856__$1;
(statearr_16935_18283[(2)] = inst_16837);

(statearr_16935_18283[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16857 === (10))){
var inst_16803 = (state_16856[(8)]);
var inst_16805 = (state_16856[(11)]);
var inst_16813 = cljs.core._nth(inst_16803,inst_16805);
var state_16856__$1 = state_16856;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16856__$1,(13),out,inst_16813);
} else {
if((state_val_16857 === (18))){
var inst_16819 = (state_16856[(7)]);
var inst_16828 = cljs.core.first(inst_16819);
var state_16856__$1 = state_16856;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16856__$1,(20),out,inst_16828);
} else {
if((state_val_16857 === (8))){
var inst_16805 = (state_16856[(11)]);
var inst_16804 = (state_16856[(12)]);
var inst_16807 = (inst_16805 < inst_16804);
var inst_16808 = inst_16807;
var state_16856__$1 = state_16856;
if(cljs.core.truth_(inst_16808)){
var statearr_16942_18286 = state_16856__$1;
(statearr_16942_18286[(1)] = (10));

} else {
var statearr_16943_18287 = state_16856__$1;
(statearr_16943_18287[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__13736__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__13736__auto____0 = (function (){
var statearr_16944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16944[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__13736__auto__);

(statearr_16944[(1)] = (1));

return statearr_16944;
});
var cljs$core$async$mapcat_STAR__$_state_machine__13736__auto____1 = (function (state_16856){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13734__auto__(state_16856);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e16945){var ex__13740__auto__ = e16945;
var statearr_16946_18289 = state_16856;
(statearr_16946_18289[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_16856[(4)]))){
var statearr_16953_18291 = state_16856;
(statearr_16953_18291[(1)] = cljs.core.first((state_16856[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18292 = state_16856;
state_16856 = G__18292;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__13736__auto__ = function(state_16856){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__13736__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__13736__auto____1.call(this,state_16856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__13736__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__13736__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__13736__auto__;
})()
})();
var state__14223__auto__ = (function (){var statearr_16954 = f__14222__auto__();
(statearr_16954[(6)] = c__14221__auto__);

return statearr_16954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14223__auto__);
}));

return c__14221__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16956 = arguments.length;
switch (G__16956) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__16960 = arguments.length;
switch (G__16960) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__16963 = arguments.length;
switch (G__16963) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14221__auto___18304 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14222__auto__ = (function (){var switch__13734__auto__ = (function (state_16988){
var state_val_16989 = (state_16988[(1)]);
if((state_val_16989 === (7))){
var inst_16982 = (state_16988[(2)]);
var state_16988__$1 = state_16988;
var statearr_16993_18305 = state_16988__$1;
(statearr_16993_18305[(2)] = inst_16982);

(statearr_16993_18305[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16989 === (1))){
var inst_16964 = null;
var state_16988__$1 = (function (){var statearr_16994 = state_16988;
(statearr_16994[(7)] = inst_16964);

return statearr_16994;
})();
var statearr_16995_18307 = state_16988__$1;
(statearr_16995_18307[(2)] = null);

(statearr_16995_18307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16989 === (4))){
var inst_16967 = (state_16988[(8)]);
var inst_16967__$1 = (state_16988[(2)]);
var inst_16968 = (inst_16967__$1 == null);
var inst_16969 = cljs.core.not(inst_16968);
var state_16988__$1 = (function (){var statearr_16996 = state_16988;
(statearr_16996[(8)] = inst_16967__$1);

return statearr_16996;
})();
if(inst_16969){
var statearr_16997_18308 = state_16988__$1;
(statearr_16997_18308[(1)] = (5));

} else {
var statearr_16998_18313 = state_16988__$1;
(statearr_16998_18313[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16989 === (6))){
var state_16988__$1 = state_16988;
var statearr_16999_18314 = state_16988__$1;
(statearr_16999_18314[(2)] = null);

(statearr_16999_18314[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16989 === (3))){
var inst_16984 = (state_16988[(2)]);
var inst_16985 = cljs.core.async.close_BANG_(out);
var state_16988__$1 = (function (){var statearr_17000 = state_16988;
(statearr_17000[(9)] = inst_16984);

return statearr_17000;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16988__$1,inst_16985);
} else {
if((state_val_16989 === (2))){
var state_16988__$1 = state_16988;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16988__$1,(4),ch);
} else {
if((state_val_16989 === (11))){
var inst_16967 = (state_16988[(8)]);
var inst_16976 = (state_16988[(2)]);
var inst_16964 = inst_16967;
var state_16988__$1 = (function (){var statearr_17001 = state_16988;
(statearr_17001[(10)] = inst_16976);

(statearr_17001[(7)] = inst_16964);

return statearr_17001;
})();
var statearr_17002_18315 = state_16988__$1;
(statearr_17002_18315[(2)] = null);

(statearr_17002_18315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16989 === (9))){
var inst_16967 = (state_16988[(8)]);
var state_16988__$1 = state_16988;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16988__$1,(11),out,inst_16967);
} else {
if((state_val_16989 === (5))){
var inst_16967 = (state_16988[(8)]);
var inst_16964 = (state_16988[(7)]);
var inst_16971 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16967,inst_16964);
var state_16988__$1 = state_16988;
if(inst_16971){
var statearr_17010_18316 = state_16988__$1;
(statearr_17010_18316[(1)] = (8));

} else {
var statearr_17011_18317 = state_16988__$1;
(statearr_17011_18317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16989 === (10))){
var inst_16979 = (state_16988[(2)]);
var state_16988__$1 = state_16988;
var statearr_17012_18318 = state_16988__$1;
(statearr_17012_18318[(2)] = inst_16979);

(statearr_17012_18318[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16989 === (8))){
var inst_16964 = (state_16988[(7)]);
var tmp17009 = inst_16964;
var inst_16964__$1 = tmp17009;
var state_16988__$1 = (function (){var statearr_17013 = state_16988;
(statearr_17013[(7)] = inst_16964__$1);

return statearr_17013;
})();
var statearr_17014_18319 = state_16988__$1;
(statearr_17014_18319[(2)] = null);

(statearr_17014_18319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13736__auto__ = null;
var cljs$core$async$state_machine__13736__auto____0 = (function (){
var statearr_17015 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17015[(0)] = cljs$core$async$state_machine__13736__auto__);

(statearr_17015[(1)] = (1));

return statearr_17015;
});
var cljs$core$async$state_machine__13736__auto____1 = (function (state_16988){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13734__auto__(state_16988);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e17016){var ex__13740__auto__ = e17016;
var statearr_17017_18320 = state_16988;
(statearr_17017_18320[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_16988[(4)]))){
var statearr_17018_18321 = state_16988;
(statearr_17018_18321[(1)] = cljs.core.first((state_16988[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18322 = state_16988;
state_16988 = G__18322;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$state_machine__13736__auto__ = function(state_16988){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13736__auto____1.call(this,state_16988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13736__auto____0;
cljs$core$async$state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13736__auto____1;
return cljs$core$async$state_machine__13736__auto__;
})()
})();
var state__14223__auto__ = (function (){var statearr_17019 = f__14222__auto__();
(statearr_17019[(6)] = c__14221__auto___18304);

return statearr_17019;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14223__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17026 = arguments.length;
switch (G__17026) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14221__auto___18324 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14222__auto__ = (function (){var switch__13734__auto__ = (function (state_17075){
var state_val_17076 = (state_17075[(1)]);
if((state_val_17076 === (7))){
var inst_17071 = (state_17075[(2)]);
var state_17075__$1 = state_17075;
var statearr_17077_18325 = state_17075__$1;
(statearr_17077_18325[(2)] = inst_17071);

(statearr_17077_18325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (1))){
var inst_17030 = (new Array(n));
var inst_17031 = inst_17030;
var inst_17032 = (0);
var state_17075__$1 = (function (){var statearr_17078 = state_17075;
(statearr_17078[(7)] = inst_17032);

(statearr_17078[(8)] = inst_17031);

return statearr_17078;
})();
var statearr_17079_18326 = state_17075__$1;
(statearr_17079_18326[(2)] = null);

(statearr_17079_18326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (4))){
var inst_17035 = (state_17075[(9)]);
var inst_17035__$1 = (state_17075[(2)]);
var inst_17036 = (inst_17035__$1 == null);
var inst_17037 = cljs.core.not(inst_17036);
var state_17075__$1 = (function (){var statearr_17080 = state_17075;
(statearr_17080[(9)] = inst_17035__$1);

return statearr_17080;
})();
if(inst_17037){
var statearr_17081_18331 = state_17075__$1;
(statearr_17081_18331[(1)] = (5));

} else {
var statearr_17082_18332 = state_17075__$1;
(statearr_17082_18332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (15))){
var inst_17064 = (state_17075[(2)]);
var state_17075__$1 = state_17075;
var statearr_17086_18333 = state_17075__$1;
(statearr_17086_18333[(2)] = inst_17064);

(statearr_17086_18333[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (13))){
var state_17075__$1 = state_17075;
var statearr_17089_18334 = state_17075__$1;
(statearr_17089_18334[(2)] = null);

(statearr_17089_18334[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (6))){
var inst_17032 = (state_17075[(7)]);
var inst_17060 = (inst_17032 > (0));
var state_17075__$1 = state_17075;
if(cljs.core.truth_(inst_17060)){
var statearr_17090_18335 = state_17075__$1;
(statearr_17090_18335[(1)] = (12));

} else {
var statearr_17091_18336 = state_17075__$1;
(statearr_17091_18336[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (3))){
var inst_17073 = (state_17075[(2)]);
var state_17075__$1 = state_17075;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17075__$1,inst_17073);
} else {
if((state_val_17076 === (12))){
var inst_17031 = (state_17075[(8)]);
var inst_17062 = cljs.core.vec(inst_17031);
var state_17075__$1 = state_17075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17075__$1,(15),out,inst_17062);
} else {
if((state_val_17076 === (2))){
var state_17075__$1 = state_17075;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17075__$1,(4),ch);
} else {
if((state_val_17076 === (11))){
var inst_17050 = (state_17075[(2)]);
var inst_17052 = (new Array(n));
var inst_17031 = inst_17052;
var inst_17032 = (0);
var state_17075__$1 = (function (){var statearr_17097 = state_17075;
(statearr_17097[(7)] = inst_17032);

(statearr_17097[(8)] = inst_17031);

(statearr_17097[(10)] = inst_17050);

return statearr_17097;
})();
var statearr_17110_18346 = state_17075__$1;
(statearr_17110_18346[(2)] = null);

(statearr_17110_18346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (9))){
var inst_17031 = (state_17075[(8)]);
var inst_17048 = cljs.core.vec(inst_17031);
var state_17075__$1 = state_17075;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17075__$1,(11),out,inst_17048);
} else {
if((state_val_17076 === (5))){
var inst_17032 = (state_17075[(7)]);
var inst_17031 = (state_17075[(8)]);
var inst_17043 = (state_17075[(11)]);
var inst_17035 = (state_17075[(9)]);
var inst_17042 = (inst_17031[inst_17032] = inst_17035);
var inst_17043__$1 = (inst_17032 + (1));
var inst_17044 = (inst_17043__$1 < n);
var state_17075__$1 = (function (){var statearr_17113 = state_17075;
(statearr_17113[(12)] = inst_17042);

(statearr_17113[(11)] = inst_17043__$1);

return statearr_17113;
})();
if(cljs.core.truth_(inst_17044)){
var statearr_17117_18347 = state_17075__$1;
(statearr_17117_18347[(1)] = (8));

} else {
var statearr_17119_18348 = state_17075__$1;
(statearr_17119_18348[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (14))){
var inst_17068 = (state_17075[(2)]);
var inst_17069 = cljs.core.async.close_BANG_(out);
var state_17075__$1 = (function (){var statearr_17121 = state_17075;
(statearr_17121[(13)] = inst_17068);

return statearr_17121;
})();
var statearr_17126_18349 = state_17075__$1;
(statearr_17126_18349[(2)] = inst_17069);

(statearr_17126_18349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (10))){
var inst_17055 = (state_17075[(2)]);
var state_17075__$1 = state_17075;
var statearr_17127_18350 = state_17075__$1;
(statearr_17127_18350[(2)] = inst_17055);

(statearr_17127_18350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17076 === (8))){
var inst_17031 = (state_17075[(8)]);
var inst_17043 = (state_17075[(11)]);
var tmp17120 = inst_17031;
var inst_17031__$1 = tmp17120;
var inst_17032 = inst_17043;
var state_17075__$1 = (function (){var statearr_17129 = state_17075;
(statearr_17129[(7)] = inst_17032);

(statearr_17129[(8)] = inst_17031__$1);

return statearr_17129;
})();
var statearr_17130_18351 = state_17075__$1;
(statearr_17130_18351[(2)] = null);

(statearr_17130_18351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13736__auto__ = null;
var cljs$core$async$state_machine__13736__auto____0 = (function (){
var statearr_17131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17131[(0)] = cljs$core$async$state_machine__13736__auto__);

(statearr_17131[(1)] = (1));

return statearr_17131;
});
var cljs$core$async$state_machine__13736__auto____1 = (function (state_17075){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13734__auto__(state_17075);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e17132){var ex__13740__auto__ = e17132;
var statearr_17133_18352 = state_17075;
(statearr_17133_18352[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_17075[(4)]))){
var statearr_17138_18353 = state_17075;
(statearr_17138_18353[(1)] = cljs.core.first((state_17075[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18354 = state_17075;
state_17075 = G__18354;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$state_machine__13736__auto__ = function(state_17075){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13736__auto____1.call(this,state_17075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13736__auto____0;
cljs$core$async$state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13736__auto____1;
return cljs$core$async$state_machine__13736__auto__;
})()
})();
var state__14223__auto__ = (function (){var statearr_17143 = f__14222__auto__();
(statearr_17143[(6)] = c__14221__auto___18324);

return statearr_17143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14223__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17149 = arguments.length;
switch (G__17149) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14221__auto___18359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14222__auto__ = (function (){var switch__13734__auto__ = (function (state_17208){
var state_val_17209 = (state_17208[(1)]);
if((state_val_17209 === (7))){
var inst_17204 = (state_17208[(2)]);
var state_17208__$1 = state_17208;
var statearr_17211_18360 = state_17208__$1;
(statearr_17211_18360[(2)] = inst_17204);

(statearr_17211_18360[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (1))){
var inst_17157 = [];
var inst_17158 = inst_17157;
var inst_17159 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17208__$1 = (function (){var statearr_17212 = state_17208;
(statearr_17212[(7)] = inst_17159);

(statearr_17212[(8)] = inst_17158);

return statearr_17212;
})();
var statearr_17216_18365 = state_17208__$1;
(statearr_17216_18365[(2)] = null);

(statearr_17216_18365[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (4))){
var inst_17165 = (state_17208[(9)]);
var inst_17165__$1 = (state_17208[(2)]);
var inst_17169 = (inst_17165__$1 == null);
var inst_17170 = cljs.core.not(inst_17169);
var state_17208__$1 = (function (){var statearr_17217 = state_17208;
(statearr_17217[(9)] = inst_17165__$1);

return statearr_17217;
})();
if(inst_17170){
var statearr_17218_18366 = state_17208__$1;
(statearr_17218_18366[(1)] = (5));

} else {
var statearr_17219_18367 = state_17208__$1;
(statearr_17219_18367[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (15))){
var inst_17158 = (state_17208[(8)]);
var inst_17196 = cljs.core.vec(inst_17158);
var state_17208__$1 = state_17208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17208__$1,(18),out,inst_17196);
} else {
if((state_val_17209 === (13))){
var inst_17191 = (state_17208[(2)]);
var state_17208__$1 = state_17208;
var statearr_17220_18371 = state_17208__$1;
(statearr_17220_18371[(2)] = inst_17191);

(statearr_17220_18371[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (6))){
var inst_17158 = (state_17208[(8)]);
var inst_17193 = inst_17158.length;
var inst_17194 = (inst_17193 > (0));
var state_17208__$1 = state_17208;
if(cljs.core.truth_(inst_17194)){
var statearr_17224_18372 = state_17208__$1;
(statearr_17224_18372[(1)] = (15));

} else {
var statearr_17225_18373 = state_17208__$1;
(statearr_17225_18373[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (17))){
var inst_17201 = (state_17208[(2)]);
var inst_17202 = cljs.core.async.close_BANG_(out);
var state_17208__$1 = (function (){var statearr_17230 = state_17208;
(statearr_17230[(10)] = inst_17201);

return statearr_17230;
})();
var statearr_17233_18374 = state_17208__$1;
(statearr_17233_18374[(2)] = inst_17202);

(statearr_17233_18374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (3))){
var inst_17206 = (state_17208[(2)]);
var state_17208__$1 = state_17208;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17208__$1,inst_17206);
} else {
if((state_val_17209 === (12))){
var inst_17158 = (state_17208[(8)]);
var inst_17184 = cljs.core.vec(inst_17158);
var state_17208__$1 = state_17208;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17208__$1,(14),out,inst_17184);
} else {
if((state_val_17209 === (2))){
var state_17208__$1 = state_17208;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17208__$1,(4),ch);
} else {
if((state_val_17209 === (11))){
var inst_17165 = (state_17208[(9)]);
var inst_17173 = (state_17208[(11)]);
var inst_17158 = (state_17208[(8)]);
var inst_17181 = inst_17158.push(inst_17165);
var tmp17236 = inst_17158;
var inst_17158__$1 = tmp17236;
var inst_17159 = inst_17173;
var state_17208__$1 = (function (){var statearr_17240 = state_17208;
(statearr_17240[(7)] = inst_17159);

(statearr_17240[(8)] = inst_17158__$1);

(statearr_17240[(12)] = inst_17181);

return statearr_17240;
})();
var statearr_17241_18375 = state_17208__$1;
(statearr_17241_18375[(2)] = null);

(statearr_17241_18375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (9))){
var inst_17159 = (state_17208[(7)]);
var inst_17177 = cljs.core.keyword_identical_QMARK_(inst_17159,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17208__$1 = state_17208;
var statearr_17242_18376 = state_17208__$1;
(statearr_17242_18376[(2)] = inst_17177);

(statearr_17242_18376[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (5))){
var inst_17165 = (state_17208[(9)]);
var inst_17173 = (state_17208[(11)]);
var inst_17174 = (state_17208[(13)]);
var inst_17159 = (state_17208[(7)]);
var inst_17173__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17165) : f.call(null,inst_17165));
var inst_17174__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17173__$1,inst_17159);
var state_17208__$1 = (function (){var statearr_17243 = state_17208;
(statearr_17243[(11)] = inst_17173__$1);

(statearr_17243[(13)] = inst_17174__$1);

return statearr_17243;
})();
if(inst_17174__$1){
var statearr_17244_18377 = state_17208__$1;
(statearr_17244_18377[(1)] = (8));

} else {
var statearr_17246_18378 = state_17208__$1;
(statearr_17246_18378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (14))){
var inst_17165 = (state_17208[(9)]);
var inst_17173 = (state_17208[(11)]);
var inst_17186 = (state_17208[(2)]);
var inst_17187 = [];
var inst_17188 = inst_17187.push(inst_17165);
var inst_17158 = inst_17187;
var inst_17159 = inst_17173;
var state_17208__$1 = (function (){var statearr_17251 = state_17208;
(statearr_17251[(14)] = inst_17186);

(statearr_17251[(7)] = inst_17159);

(statearr_17251[(8)] = inst_17158);

(statearr_17251[(15)] = inst_17188);

return statearr_17251;
})();
var statearr_17252_18379 = state_17208__$1;
(statearr_17252_18379[(2)] = null);

(statearr_17252_18379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (16))){
var state_17208__$1 = state_17208;
var statearr_17253_18382 = state_17208__$1;
(statearr_17253_18382[(2)] = null);

(statearr_17253_18382[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (10))){
var inst_17179 = (state_17208[(2)]);
var state_17208__$1 = state_17208;
if(cljs.core.truth_(inst_17179)){
var statearr_17254_18386 = state_17208__$1;
(statearr_17254_18386[(1)] = (11));

} else {
var statearr_17255_18389 = state_17208__$1;
(statearr_17255_18389[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (18))){
var inst_17198 = (state_17208[(2)]);
var state_17208__$1 = state_17208;
var statearr_17256_18391 = state_17208__$1;
(statearr_17256_18391[(2)] = inst_17198);

(statearr_17256_18391[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17209 === (8))){
var inst_17174 = (state_17208[(13)]);
var state_17208__$1 = state_17208;
var statearr_17257_18392 = state_17208__$1;
(statearr_17257_18392[(2)] = inst_17174);

(statearr_17257_18392[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__13736__auto__ = null;
var cljs$core$async$state_machine__13736__auto____0 = (function (){
var statearr_17264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17264[(0)] = cljs$core$async$state_machine__13736__auto__);

(statearr_17264[(1)] = (1));

return statearr_17264;
});
var cljs$core$async$state_machine__13736__auto____1 = (function (state_17208){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13734__auto__(state_17208);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e17265){var ex__13740__auto__ = e17265;
var statearr_17266_18399 = state_17208;
(statearr_17266_18399[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_17208[(4)]))){
var statearr_17268_18400 = state_17208;
(statearr_17268_18400[(1)] = cljs.core.first((state_17208[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18401 = state_17208;
state_17208 = G__18401;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
cljs$core$async$state_machine__13736__auto__ = function(state_17208){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__13736__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__13736__auto____1.call(this,state_17208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__13736__auto____0;
cljs$core$async$state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__13736__auto____1;
return cljs$core$async$state_machine__13736__auto__;
})()
})();
var state__14223__auto__ = (function (){var statearr_17269 = f__14222__auto__();
(statearr_17269[(6)] = c__14221__auto___18359);

return statearr_17269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14223__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
