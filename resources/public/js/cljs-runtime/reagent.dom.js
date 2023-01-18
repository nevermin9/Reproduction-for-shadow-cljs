goog.provide('reagent.dom');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
if((typeof reagent !== 'undefined') && (typeof reagent.dom !== 'undefined') && (typeof reagent.dom.roots !== 'undefined')){
} else {
reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__16562 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__16563 = true;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__16563);

try{return module$node_modules$react_dom$index.render((comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)),container,(function (){
var _STAR_always_update_STAR__orig_val__16567 = reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__16568 = false;
(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__16568);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(reagent.dom.roots,cljs.core.assoc,container,comp);

reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__16567);
}}));
}finally {(reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__16562);
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element.
 *   The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var G__16570 = arguments.length;
switch (G__16570) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,reagent.impl.template.default_compiler);
}));

(reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback_or_compiler){
reagent.ratom.flush_BANG_();

var vec__16571 = ((cljs.core.fn_QMARK_(callback_or_compiler))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.impl.template.default_compiler,callback_or_compiler], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback_or_compiler,new cljs.core.Keyword(null,"callback","callback",-705136228).cljs$core$IFn$_invoke$arity$1(callback_or_compiler)], null));
var compiler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16571,(0),null);
var callback = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16571,(1),null);
var f = (function (){
return reagent.impl.protocols.as_element(compiler,((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return reagent.dom.render_comp(f,container,callback);
}));

(reagent.dom.render.cljs$lang$maxFixedArity = 3);

/**
 * Remove a component from the given DOM node.
 */
reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_();

var seq__16574_16591 = cljs.core.seq(cljs.core.deref(reagent.dom.roots));
var chunk__16575_16592 = null;
var count__16576_16593 = (0);
var i__16577_16594 = (0);
while(true){
if((i__16577_16594 < count__16576_16593)){
var vec__16584_16595 = chunk__16575_16592.cljs$core$IIndexed$_nth$arity$2(null,i__16577_16594);
var container_16596 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16584_16595,(0),null);
var comp_16597 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16584_16595,(1),null);
reagent.dom.re_render_component(comp_16597,container_16596);


var G__16598 = seq__16574_16591;
var G__16599 = chunk__16575_16592;
var G__16600 = count__16576_16593;
var G__16601 = (i__16577_16594 + (1));
seq__16574_16591 = G__16598;
chunk__16575_16592 = G__16599;
count__16576_16593 = G__16600;
i__16577_16594 = G__16601;
continue;
} else {
var temp__5804__auto___16602 = cljs.core.seq(seq__16574_16591);
if(temp__5804__auto___16602){
var seq__16574_16603__$1 = temp__5804__auto___16602;
if(cljs.core.chunked_seq_QMARK_(seq__16574_16603__$1)){
var c__5568__auto___16604 = cljs.core.chunk_first(seq__16574_16603__$1);
var G__16605 = cljs.core.chunk_rest(seq__16574_16603__$1);
var G__16606 = c__5568__auto___16604;
var G__16607 = cljs.core.count(c__5568__auto___16604);
var G__16608 = (0);
seq__16574_16591 = G__16605;
chunk__16575_16592 = G__16606;
count__16576_16593 = G__16607;
i__16577_16594 = G__16608;
continue;
} else {
var vec__16587_16609 = cljs.core.first(seq__16574_16603__$1);
var container_16610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16587_16609,(0),null);
var comp_16611 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__16587_16609,(1),null);
reagent.dom.re_render_component(comp_16611,container_16610);


var G__16612 = cljs.core.next(seq__16574_16603__$1);
var G__16613 = null;
var G__16614 = (0);
var G__16615 = (0);
seq__16574_16591 = G__16612;
chunk__16575_16592 = G__16613;
count__16576_16593 = G__16614;
i__16577_16594 = G__16615;
continue;
}
} else {
}
}
break;
}

return reagent.impl.batching.flush_after_render();
});

//# sourceMappingURL=reagent.dom.js.map
