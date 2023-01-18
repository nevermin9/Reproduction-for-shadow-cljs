goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__16223__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__16223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16224__i = 0, G__16224__a = new Array(arguments.length -  0);
while (G__16224__i < G__16224__a.length) {G__16224__a[G__16224__i] = arguments[G__16224__i + 0]; ++G__16224__i;}
  args = new cljs.core.IndexedSeq(G__16224__a,0,null);
} 
return G__16223__delegate.call(this,args);};
G__16223.cljs$lang$maxFixedArity = 0;
G__16223.cljs$lang$applyTo = (function (arglist__16225){
var args = cljs.core.seq(arglist__16225);
return G__16223__delegate(args);
});
G__16223.cljs$core$IFn$_invoke$arity$variadic = G__16223__delegate;
return G__16223;
})()
);

(o.error = (function() { 
var G__16226__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__16226 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16227__i = 0, G__16227__a = new Array(arguments.length -  0);
while (G__16227__i < G__16227__a.length) {G__16227__a[G__16227__i] = arguments[G__16227__i + 0]; ++G__16227__i;}
  args = new cljs.core.IndexedSeq(G__16227__a,0,null);
} 
return G__16226__delegate.call(this,args);};
G__16226.cljs$lang$maxFixedArity = 0;
G__16226.cljs$lang$applyTo = (function (arglist__16228){
var args = cljs.core.seq(arglist__16228);
return G__16226__delegate(args);
});
G__16226.cljs$core$IFn$_invoke$arity$variadic = G__16226__delegate;
return G__16226;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
