goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_18631 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_18631(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_18642 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_18642(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17409 = coll;
var G__17410 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17409,G__17410) : shadow.dom.lazy_native_coll_seq.call(null,G__17409,G__17410));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17450 = arguments.length;
switch (G__17450) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17465 = arguments.length;
switch (G__17465) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17469 = arguments.length;
switch (G__17469) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17480 = arguments.length;
switch (G__17480) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17491 = arguments.length;
switch (G__17491) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__17515 = arguments.length;
switch (G__17515) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e17536){if((e17536 instanceof Object)){
var e = e17536;
return console.log("didnt support attachEvent",el,e);
} else {
throw e17536;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__17550 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__17551 = null;
var count__17552 = (0);
var i__17553 = (0);
while(true){
if((i__17553 < count__17552)){
var el = chunk__17551.cljs$core$IIndexed$_nth$arity$2(null,i__17553);
var handler_18690__$1 = ((function (seq__17550,chunk__17551,count__17552,i__17553,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17550,chunk__17551,count__17552,i__17553,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18690__$1);


var G__18700 = seq__17550;
var G__18701 = chunk__17551;
var G__18702 = count__17552;
var G__18703 = (i__17553 + (1));
seq__17550 = G__18700;
chunk__17551 = G__18701;
count__17552 = G__18702;
i__17553 = G__18703;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17550);
if(temp__5804__auto__){
var seq__17550__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17550__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17550__$1);
var G__18706 = cljs.core.chunk_rest(seq__17550__$1);
var G__18707 = c__5568__auto__;
var G__18708 = cljs.core.count(c__5568__auto__);
var G__18709 = (0);
seq__17550 = G__18706;
chunk__17551 = G__18707;
count__17552 = G__18708;
i__17553 = G__18709;
continue;
} else {
var el = cljs.core.first(seq__17550__$1);
var handler_18710__$1 = ((function (seq__17550,chunk__17551,count__17552,i__17553,el,seq__17550__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__17550,chunk__17551,count__17552,i__17553,el,seq__17550__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_18710__$1);


var G__18711 = cljs.core.next(seq__17550__$1);
var G__18712 = null;
var G__18713 = (0);
var G__18714 = (0);
seq__17550 = G__18711;
chunk__17551 = G__18712;
count__17552 = G__18713;
i__17553 = G__18714;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__17563 = arguments.length;
switch (G__17563) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__17571 = cljs.core.seq(events);
var chunk__17572 = null;
var count__17573 = (0);
var i__17574 = (0);
while(true){
if((i__17574 < count__17573)){
var vec__17586 = chunk__17572.cljs$core$IIndexed$_nth$arity$2(null,i__17574);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17586,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17586,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18727 = seq__17571;
var G__18728 = chunk__17572;
var G__18729 = count__17573;
var G__18730 = (i__17574 + (1));
seq__17571 = G__18727;
chunk__17572 = G__18728;
count__17573 = G__18729;
i__17574 = G__18730;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17571);
if(temp__5804__auto__){
var seq__17571__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17571__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17571__$1);
var G__18732 = cljs.core.chunk_rest(seq__17571__$1);
var G__18733 = c__5568__auto__;
var G__18734 = cljs.core.count(c__5568__auto__);
var G__18735 = (0);
seq__17571 = G__18732;
chunk__17572 = G__18733;
count__17573 = G__18734;
i__17574 = G__18735;
continue;
} else {
var vec__17589 = cljs.core.first(seq__17571__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17589,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17589,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__18736 = cljs.core.next(seq__17571__$1);
var G__18737 = null;
var G__18738 = (0);
var G__18739 = (0);
seq__17571 = G__18736;
chunk__17572 = G__18737;
count__17573 = G__18738;
i__17574 = G__18739;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__17596 = cljs.core.seq(styles);
var chunk__17597 = null;
var count__17598 = (0);
var i__17599 = (0);
while(true){
if((i__17599 < count__17598)){
var vec__17631 = chunk__17597.cljs$core$IIndexed$_nth$arity$2(null,i__17599);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17631,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17631,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18740 = seq__17596;
var G__18741 = chunk__17597;
var G__18742 = count__17598;
var G__18743 = (i__17599 + (1));
seq__17596 = G__18740;
chunk__17597 = G__18741;
count__17598 = G__18742;
i__17599 = G__18743;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17596);
if(temp__5804__auto__){
var seq__17596__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17596__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17596__$1);
var G__18744 = cljs.core.chunk_rest(seq__17596__$1);
var G__18745 = c__5568__auto__;
var G__18746 = cljs.core.count(c__5568__auto__);
var G__18747 = (0);
seq__17596 = G__18744;
chunk__17597 = G__18745;
count__17598 = G__18746;
i__17599 = G__18747;
continue;
} else {
var vec__17642 = cljs.core.first(seq__17596__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17642,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17642,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__18750 = cljs.core.next(seq__17596__$1);
var G__18751 = null;
var G__18752 = (0);
var G__18753 = (0);
seq__17596 = G__18750;
chunk__17597 = G__18751;
count__17598 = G__18752;
i__17599 = G__18753;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__17655_18757 = key;
var G__17655_18758__$1 = (((G__17655_18757 instanceof cljs.core.Keyword))?G__17655_18757.fqn:null);
switch (G__17655_18758__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_18762 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_18762,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_18762,"aria-");
}
})())){
el.setAttribute(ks_18762,value);
} else {
(el[ks_18762] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__17673){
var map__17674 = p__17673;
var map__17674__$1 = cljs.core.__destructure_map(map__17674);
var props = map__17674__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17674__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__17675 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17675,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17675,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17675,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__17678 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__17678,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__17678;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__17685 = arguments.length;
switch (G__17685) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__17697){
var vec__17701 = p__17697;
var seq__17702 = cljs.core.seq(vec__17701);
var first__17704 = cljs.core.first(seq__17702);
var seq__17702__$1 = cljs.core.next(seq__17702);
var nn = first__17704;
var first__17704__$1 = cljs.core.first(seq__17702__$1);
var seq__17702__$2 = cljs.core.next(seq__17702__$1);
var np = first__17704__$1;
var nc = seq__17702__$2;
var node = vec__17701;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17708 = nn;
var G__17709 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17708,G__17709) : create_fn.call(null,G__17708,G__17709));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__17713 = nn;
var G__17714 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__17713,G__17714) : create_fn.call(null,G__17713,G__17714));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__17720 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17720,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17720,(1),null);
var seq__17724_18780 = cljs.core.seq(node_children);
var chunk__17725_18781 = null;
var count__17726_18782 = (0);
var i__17727_18783 = (0);
while(true){
if((i__17727_18783 < count__17726_18782)){
var child_struct_18784 = chunk__17725_18781.cljs$core$IIndexed$_nth$arity$2(null,i__17727_18783);
var children_18785 = shadow.dom.dom_node(child_struct_18784);
if(cljs.core.seq_QMARK_(children_18785)){
var seq__17764_18786 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18785));
var chunk__17766_18787 = null;
var count__17767_18788 = (0);
var i__17768_18789 = (0);
while(true){
if((i__17768_18789 < count__17767_18788)){
var child_18790 = chunk__17766_18787.cljs$core$IIndexed$_nth$arity$2(null,i__17768_18789);
if(cljs.core.truth_(child_18790)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18790);


var G__18791 = seq__17764_18786;
var G__18792 = chunk__17766_18787;
var G__18793 = count__17767_18788;
var G__18794 = (i__17768_18789 + (1));
seq__17764_18786 = G__18791;
chunk__17766_18787 = G__18792;
count__17767_18788 = G__18793;
i__17768_18789 = G__18794;
continue;
} else {
var G__18795 = seq__17764_18786;
var G__18796 = chunk__17766_18787;
var G__18797 = count__17767_18788;
var G__18798 = (i__17768_18789 + (1));
seq__17764_18786 = G__18795;
chunk__17766_18787 = G__18796;
count__17767_18788 = G__18797;
i__17768_18789 = G__18798;
continue;
}
} else {
var temp__5804__auto___18799 = cljs.core.seq(seq__17764_18786);
if(temp__5804__auto___18799){
var seq__17764_18800__$1 = temp__5804__auto___18799;
if(cljs.core.chunked_seq_QMARK_(seq__17764_18800__$1)){
var c__5568__auto___18801 = cljs.core.chunk_first(seq__17764_18800__$1);
var G__18802 = cljs.core.chunk_rest(seq__17764_18800__$1);
var G__18803 = c__5568__auto___18801;
var G__18804 = cljs.core.count(c__5568__auto___18801);
var G__18805 = (0);
seq__17764_18786 = G__18802;
chunk__17766_18787 = G__18803;
count__17767_18788 = G__18804;
i__17768_18789 = G__18805;
continue;
} else {
var child_18806 = cljs.core.first(seq__17764_18800__$1);
if(cljs.core.truth_(child_18806)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18806);


var G__18807 = cljs.core.next(seq__17764_18800__$1);
var G__18808 = null;
var G__18809 = (0);
var G__18810 = (0);
seq__17764_18786 = G__18807;
chunk__17766_18787 = G__18808;
count__17767_18788 = G__18809;
i__17768_18789 = G__18810;
continue;
} else {
var G__18811 = cljs.core.next(seq__17764_18800__$1);
var G__18812 = null;
var G__18813 = (0);
var G__18814 = (0);
seq__17764_18786 = G__18811;
chunk__17766_18787 = G__18812;
count__17767_18788 = G__18813;
i__17768_18789 = G__18814;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18785);
}


var G__18815 = seq__17724_18780;
var G__18816 = chunk__17725_18781;
var G__18817 = count__17726_18782;
var G__18818 = (i__17727_18783 + (1));
seq__17724_18780 = G__18815;
chunk__17725_18781 = G__18816;
count__17726_18782 = G__18817;
i__17727_18783 = G__18818;
continue;
} else {
var temp__5804__auto___18819 = cljs.core.seq(seq__17724_18780);
if(temp__5804__auto___18819){
var seq__17724_18820__$1 = temp__5804__auto___18819;
if(cljs.core.chunked_seq_QMARK_(seq__17724_18820__$1)){
var c__5568__auto___18821 = cljs.core.chunk_first(seq__17724_18820__$1);
var G__18822 = cljs.core.chunk_rest(seq__17724_18820__$1);
var G__18823 = c__5568__auto___18821;
var G__18824 = cljs.core.count(c__5568__auto___18821);
var G__18825 = (0);
seq__17724_18780 = G__18822;
chunk__17725_18781 = G__18823;
count__17726_18782 = G__18824;
i__17727_18783 = G__18825;
continue;
} else {
var child_struct_18826 = cljs.core.first(seq__17724_18820__$1);
var children_18827 = shadow.dom.dom_node(child_struct_18826);
if(cljs.core.seq_QMARK_(children_18827)){
var seq__17789_18828 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_18827));
var chunk__17791_18829 = null;
var count__17792_18830 = (0);
var i__17793_18831 = (0);
while(true){
if((i__17793_18831 < count__17792_18830)){
var child_18832 = chunk__17791_18829.cljs$core$IIndexed$_nth$arity$2(null,i__17793_18831);
if(cljs.core.truth_(child_18832)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18832);


var G__18835 = seq__17789_18828;
var G__18836 = chunk__17791_18829;
var G__18837 = count__17792_18830;
var G__18838 = (i__17793_18831 + (1));
seq__17789_18828 = G__18835;
chunk__17791_18829 = G__18836;
count__17792_18830 = G__18837;
i__17793_18831 = G__18838;
continue;
} else {
var G__18839 = seq__17789_18828;
var G__18840 = chunk__17791_18829;
var G__18841 = count__17792_18830;
var G__18842 = (i__17793_18831 + (1));
seq__17789_18828 = G__18839;
chunk__17791_18829 = G__18840;
count__17792_18830 = G__18841;
i__17793_18831 = G__18842;
continue;
}
} else {
var temp__5804__auto___18843__$1 = cljs.core.seq(seq__17789_18828);
if(temp__5804__auto___18843__$1){
var seq__17789_18844__$1 = temp__5804__auto___18843__$1;
if(cljs.core.chunked_seq_QMARK_(seq__17789_18844__$1)){
var c__5568__auto___18845 = cljs.core.chunk_first(seq__17789_18844__$1);
var G__18846 = cljs.core.chunk_rest(seq__17789_18844__$1);
var G__18847 = c__5568__auto___18845;
var G__18848 = cljs.core.count(c__5568__auto___18845);
var G__18849 = (0);
seq__17789_18828 = G__18846;
chunk__17791_18829 = G__18847;
count__17792_18830 = G__18848;
i__17793_18831 = G__18849;
continue;
} else {
var child_18850 = cljs.core.first(seq__17789_18844__$1);
if(cljs.core.truth_(child_18850)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_18850);


var G__18851 = cljs.core.next(seq__17789_18844__$1);
var G__18852 = null;
var G__18853 = (0);
var G__18854 = (0);
seq__17789_18828 = G__18851;
chunk__17791_18829 = G__18852;
count__17792_18830 = G__18853;
i__17793_18831 = G__18854;
continue;
} else {
var G__18855 = cljs.core.next(seq__17789_18844__$1);
var G__18856 = null;
var G__18857 = (0);
var G__18858 = (0);
seq__17789_18828 = G__18855;
chunk__17791_18829 = G__18856;
count__17792_18830 = G__18857;
i__17793_18831 = G__18858;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_18827);
}


var G__18859 = cljs.core.next(seq__17724_18820__$1);
var G__18860 = null;
var G__18861 = (0);
var G__18862 = (0);
seq__17724_18780 = G__18859;
chunk__17725_18781 = G__18860;
count__17726_18782 = G__18861;
i__17727_18783 = G__18862;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__17821 = cljs.core.seq(node);
var chunk__17822 = null;
var count__17823 = (0);
var i__17824 = (0);
while(true){
if((i__17824 < count__17823)){
var n = chunk__17822.cljs$core$IIndexed$_nth$arity$2(null,i__17824);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18865 = seq__17821;
var G__18866 = chunk__17822;
var G__18867 = count__17823;
var G__18868 = (i__17824 + (1));
seq__17821 = G__18865;
chunk__17822 = G__18866;
count__17823 = G__18867;
i__17824 = G__18868;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17821);
if(temp__5804__auto__){
var seq__17821__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17821__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17821__$1);
var G__18869 = cljs.core.chunk_rest(seq__17821__$1);
var G__18870 = c__5568__auto__;
var G__18871 = cljs.core.count(c__5568__auto__);
var G__18872 = (0);
seq__17821 = G__18869;
chunk__17822 = G__18870;
count__17823 = G__18871;
i__17824 = G__18872;
continue;
} else {
var n = cljs.core.first(seq__17821__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__18873 = cljs.core.next(seq__17821__$1);
var G__18874 = null;
var G__18875 = (0);
var G__18876 = (0);
seq__17821 = G__18873;
chunk__17822 = G__18874;
count__17823 = G__18875;
i__17824 = G__18876;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__17829 = arguments.length;
switch (G__17829) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__17831 = arguments.length;
switch (G__17831) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__17842 = arguments.length;
switch (G__17842) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18946 = arguments.length;
var i__5770__auto___18947 = (0);
while(true){
if((i__5770__auto___18947 < len__5769__auto___18946)){
args__5775__auto__.push((arguments[i__5770__auto___18947]));

var G__18948 = (i__5770__auto___18947 + (1));
i__5770__auto___18947 = G__18948;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__17861_18949 = cljs.core.seq(nodes);
var chunk__17862_18950 = null;
var count__17863_18951 = (0);
var i__17864_18952 = (0);
while(true){
if((i__17864_18952 < count__17863_18951)){
var node_18961 = chunk__17862_18950.cljs$core$IIndexed$_nth$arity$2(null,i__17864_18952);
fragment.appendChild(shadow.dom._to_dom(node_18961));


var G__18971 = seq__17861_18949;
var G__18973 = chunk__17862_18950;
var G__18977 = count__17863_18951;
var G__18978 = (i__17864_18952 + (1));
seq__17861_18949 = G__18971;
chunk__17862_18950 = G__18973;
count__17863_18951 = G__18977;
i__17864_18952 = G__18978;
continue;
} else {
var temp__5804__auto___18979 = cljs.core.seq(seq__17861_18949);
if(temp__5804__auto___18979){
var seq__17861_18980__$1 = temp__5804__auto___18979;
if(cljs.core.chunked_seq_QMARK_(seq__17861_18980__$1)){
var c__5568__auto___18984 = cljs.core.chunk_first(seq__17861_18980__$1);
var G__18985 = cljs.core.chunk_rest(seq__17861_18980__$1);
var G__18986 = c__5568__auto___18984;
var G__18987 = cljs.core.count(c__5568__auto___18984);
var G__18988 = (0);
seq__17861_18949 = G__18985;
chunk__17862_18950 = G__18986;
count__17863_18951 = G__18987;
i__17864_18952 = G__18988;
continue;
} else {
var node_18994 = cljs.core.first(seq__17861_18980__$1);
fragment.appendChild(shadow.dom._to_dom(node_18994));


var G__18995 = cljs.core.next(seq__17861_18980__$1);
var G__18996 = null;
var G__18997 = (0);
var G__18998 = (0);
seq__17861_18949 = G__18995;
chunk__17862_18950 = G__18996;
count__17863_18951 = G__18997;
i__17864_18952 = G__18998;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq17855){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq17855));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__17899_19000 = cljs.core.seq(scripts);
var chunk__17900_19001 = null;
var count__17901_19002 = (0);
var i__17902_19003 = (0);
while(true){
if((i__17902_19003 < count__17901_19002)){
var vec__17919_19004 = chunk__17900_19001.cljs$core$IIndexed$_nth$arity$2(null,i__17902_19003);
var script_tag_19005 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17919_19004,(0),null);
var script_body_19006 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17919_19004,(1),null);
eval(script_body_19006);


var G__19007 = seq__17899_19000;
var G__19008 = chunk__17900_19001;
var G__19009 = count__17901_19002;
var G__19010 = (i__17902_19003 + (1));
seq__17899_19000 = G__19007;
chunk__17900_19001 = G__19008;
count__17901_19002 = G__19009;
i__17902_19003 = G__19010;
continue;
} else {
var temp__5804__auto___19012 = cljs.core.seq(seq__17899_19000);
if(temp__5804__auto___19012){
var seq__17899_19013__$1 = temp__5804__auto___19012;
if(cljs.core.chunked_seq_QMARK_(seq__17899_19013__$1)){
var c__5568__auto___19014 = cljs.core.chunk_first(seq__17899_19013__$1);
var G__19015 = cljs.core.chunk_rest(seq__17899_19013__$1);
var G__19016 = c__5568__auto___19014;
var G__19017 = cljs.core.count(c__5568__auto___19014);
var G__19018 = (0);
seq__17899_19000 = G__19015;
chunk__17900_19001 = G__19016;
count__17901_19002 = G__19017;
i__17902_19003 = G__19018;
continue;
} else {
var vec__17930_19019 = cljs.core.first(seq__17899_19013__$1);
var script_tag_19020 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17930_19019,(0),null);
var script_body_19021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17930_19019,(1),null);
eval(script_body_19021);


var G__19022 = cljs.core.next(seq__17899_19013__$1);
var G__19023 = null;
var G__19024 = (0);
var G__19025 = (0);
seq__17899_19000 = G__19022;
chunk__17900_19001 = G__19023;
count__17901_19002 = G__19024;
i__17902_19003 = G__19025;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__17935){
var vec__17937 = p__17935;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17937,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__17937,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__17955 = arguments.length;
switch (G__17955) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__17976 = cljs.core.seq(style_keys);
var chunk__17977 = null;
var count__17978 = (0);
var i__17979 = (0);
while(true){
if((i__17979 < count__17978)){
var it = chunk__17977.cljs$core$IIndexed$_nth$arity$2(null,i__17979);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19028 = seq__17976;
var G__19029 = chunk__17977;
var G__19030 = count__17978;
var G__19031 = (i__17979 + (1));
seq__17976 = G__19028;
chunk__17977 = G__19029;
count__17978 = G__19030;
i__17979 = G__19031;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17976);
if(temp__5804__auto__){
var seq__17976__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17976__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__17976__$1);
var G__19032 = cljs.core.chunk_rest(seq__17976__$1);
var G__19033 = c__5568__auto__;
var G__19034 = cljs.core.count(c__5568__auto__);
var G__19035 = (0);
seq__17976 = G__19032;
chunk__17977 = G__19033;
count__17978 = G__19034;
i__17979 = G__19035;
continue;
} else {
var it = cljs.core.first(seq__17976__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19036 = cljs.core.next(seq__17976__$1);
var G__19037 = null;
var G__19038 = (0);
var G__19039 = (0);
seq__17976 = G__19036;
chunk__17977 = G__19037;
count__17978 = G__19038;
i__17979 = G__19039;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k17982,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18001 = k17982;
var G__18001__$1 = (((G__18001 instanceof cljs.core.Keyword))?G__18001.fqn:null);
switch (G__18001__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k17982,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18009){
var vec__18010 = p__18009;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18010,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18010,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__17981){
var self__ = this;
var G__17981__$1 = this;
return (new cljs.core.RecordIter((0),G__17981__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this17983,other17984){
var self__ = this;
var this17983__$1 = this;
return (((!((other17984 == null)))) && ((((this17983__$1.constructor === other17984.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17983__$1.x,other17984.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17983__$1.y,other17984.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this17983__$1.__extmap,other17984.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k17982){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18037 = k17982;
var G__18037__$1 = (((G__18037 instanceof cljs.core.Keyword))?G__18037.fqn:null);
switch (G__18037__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k17982);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__17981){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18039 = cljs.core.keyword_identical_QMARK_;
var expr__18040 = k__5352__auto__;
if(cljs.core.truth_((pred__18039.cljs$core$IFn$_invoke$arity$2 ? pred__18039.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18040) : pred__18039.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__18040)))){
return (new shadow.dom.Coordinate(G__17981,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18039.cljs$core$IFn$_invoke$arity$2 ? pred__18039.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18040) : pred__18039.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__18040)))){
return (new shadow.dom.Coordinate(self__.x,G__17981,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__17981),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__17981){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__17981,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__17989){
var extmap__5385__auto__ = (function (){var G__18047 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__17989,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__17989)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18047);
} else {
return G__18047;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__17989),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__17989),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18054,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18061 = k18054;
var G__18061__$1 = (((G__18061 instanceof cljs.core.Keyword))?G__18061.fqn:null);
switch (G__18061__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18054,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18068){
var vec__18070 = p__18068;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18070,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18070,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18053){
var self__ = this;
var G__18053__$1 = this;
return (new cljs.core.RecordIter((0),G__18053__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18055,other18056){
var self__ = this;
var this18055__$1 = this;
return (((!((other18056 == null)))) && ((((this18055__$1.constructor === other18056.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18055__$1.w,other18056.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18055__$1.h,other18056.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18055__$1.__extmap,other18056.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18054){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18118 = k18054;
var G__18118__$1 = (((G__18118 instanceof cljs.core.Keyword))?G__18118.fqn:null);
switch (G__18118__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18054);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18053){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18125 = cljs.core.keyword_identical_QMARK_;
var expr__18126 = k__5352__auto__;
if(cljs.core.truth_((pred__18125.cljs$core$IFn$_invoke$arity$2 ? pred__18125.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18126) : pred__18125.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__18126)))){
return (new shadow.dom.Size(G__18053,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18125.cljs$core$IFn$_invoke$arity$2 ? pred__18125.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18126) : pred__18125.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__18126)))){
return (new shadow.dom.Size(self__.w,G__18053,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18053),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18053){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18053,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18058){
var extmap__5385__auto__ = (function (){var G__18180 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18058,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18058)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18180);
} else {
return G__18180;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18058),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18058),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__19088 = (i + (1));
var G__19089 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19088;
ret = G__19089;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18266){
var vec__18275 = p__18266;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18275,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18275,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18294 = arguments.length;
switch (G__18294) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19097 = ps;
var G__19098 = (i + (1));
el__$1 = G__19097;
i = G__19098;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18355 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18355,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18355,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18355,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18361_19102 = cljs.core.seq(props);
var chunk__18362_19103 = null;
var count__18363_19104 = (0);
var i__18364_19105 = (0);
while(true){
if((i__18364_19105 < count__18363_19104)){
var vec__18406_19107 = chunk__18362_19103.cljs$core$IIndexed$_nth$arity$2(null,i__18364_19105);
var k_19108 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18406_19107,(0),null);
var v_19109 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18406_19107,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19108);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19108),v_19109);


var G__19110 = seq__18361_19102;
var G__19111 = chunk__18362_19103;
var G__19112 = count__18363_19104;
var G__19113 = (i__18364_19105 + (1));
seq__18361_19102 = G__19110;
chunk__18362_19103 = G__19111;
count__18363_19104 = G__19112;
i__18364_19105 = G__19113;
continue;
} else {
var temp__5804__auto___19114 = cljs.core.seq(seq__18361_19102);
if(temp__5804__auto___19114){
var seq__18361_19115__$1 = temp__5804__auto___19114;
if(cljs.core.chunked_seq_QMARK_(seq__18361_19115__$1)){
var c__5568__auto___19116 = cljs.core.chunk_first(seq__18361_19115__$1);
var G__19117 = cljs.core.chunk_rest(seq__18361_19115__$1);
var G__19118 = c__5568__auto___19116;
var G__19119 = cljs.core.count(c__5568__auto___19116);
var G__19120 = (0);
seq__18361_19102 = G__19117;
chunk__18362_19103 = G__19118;
count__18363_19104 = G__19119;
i__18364_19105 = G__19120;
continue;
} else {
var vec__18420_19121 = cljs.core.first(seq__18361_19115__$1);
var k_19122 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18420_19121,(0),null);
var v_19123 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18420_19121,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19122);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19122),v_19123);


var G__19124 = cljs.core.next(seq__18361_19115__$1);
var G__19125 = null;
var G__19126 = (0);
var G__19127 = (0);
seq__18361_19102 = G__19124;
chunk__18362_19103 = G__19125;
count__18363_19104 = G__19126;
i__18364_19105 = G__19127;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18435 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18435,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18435,(1),null);
var seq__18439_19128 = cljs.core.seq(node_children);
var chunk__18441_19129 = null;
var count__18442_19130 = (0);
var i__18443_19131 = (0);
while(true){
if((i__18443_19131 < count__18442_19130)){
var child_struct_19132 = chunk__18441_19129.cljs$core$IIndexed$_nth$arity$2(null,i__18443_19131);
if((!((child_struct_19132 == null)))){
if(typeof child_struct_19132 === 'string'){
var text_19133 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19133),child_struct_19132].join(''));
} else {
var children_19138 = shadow.dom.svg_node(child_struct_19132);
if(cljs.core.seq_QMARK_(children_19138)){
var seq__18465_19139 = cljs.core.seq(children_19138);
var chunk__18467_19140 = null;
var count__18468_19141 = (0);
var i__18469_19142 = (0);
while(true){
if((i__18469_19142 < count__18468_19141)){
var child_19143 = chunk__18467_19140.cljs$core$IIndexed$_nth$arity$2(null,i__18469_19142);
if(cljs.core.truth_(child_19143)){
node.appendChild(child_19143);


var G__19147 = seq__18465_19139;
var G__19148 = chunk__18467_19140;
var G__19149 = count__18468_19141;
var G__19150 = (i__18469_19142 + (1));
seq__18465_19139 = G__19147;
chunk__18467_19140 = G__19148;
count__18468_19141 = G__19149;
i__18469_19142 = G__19150;
continue;
} else {
var G__19151 = seq__18465_19139;
var G__19152 = chunk__18467_19140;
var G__19153 = count__18468_19141;
var G__19154 = (i__18469_19142 + (1));
seq__18465_19139 = G__19151;
chunk__18467_19140 = G__19152;
count__18468_19141 = G__19153;
i__18469_19142 = G__19154;
continue;
}
} else {
var temp__5804__auto___19155 = cljs.core.seq(seq__18465_19139);
if(temp__5804__auto___19155){
var seq__18465_19156__$1 = temp__5804__auto___19155;
if(cljs.core.chunked_seq_QMARK_(seq__18465_19156__$1)){
var c__5568__auto___19157 = cljs.core.chunk_first(seq__18465_19156__$1);
var G__19158 = cljs.core.chunk_rest(seq__18465_19156__$1);
var G__19159 = c__5568__auto___19157;
var G__19160 = cljs.core.count(c__5568__auto___19157);
var G__19161 = (0);
seq__18465_19139 = G__19158;
chunk__18467_19140 = G__19159;
count__18468_19141 = G__19160;
i__18469_19142 = G__19161;
continue;
} else {
var child_19162 = cljs.core.first(seq__18465_19156__$1);
if(cljs.core.truth_(child_19162)){
node.appendChild(child_19162);


var G__19163 = cljs.core.next(seq__18465_19156__$1);
var G__19164 = null;
var G__19165 = (0);
var G__19166 = (0);
seq__18465_19139 = G__19163;
chunk__18467_19140 = G__19164;
count__18468_19141 = G__19165;
i__18469_19142 = G__19166;
continue;
} else {
var G__19167 = cljs.core.next(seq__18465_19156__$1);
var G__19168 = null;
var G__19169 = (0);
var G__19170 = (0);
seq__18465_19139 = G__19167;
chunk__18467_19140 = G__19168;
count__18468_19141 = G__19169;
i__18469_19142 = G__19170;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19138);
}
}


var G__19171 = seq__18439_19128;
var G__19172 = chunk__18441_19129;
var G__19173 = count__18442_19130;
var G__19174 = (i__18443_19131 + (1));
seq__18439_19128 = G__19171;
chunk__18441_19129 = G__19172;
count__18442_19130 = G__19173;
i__18443_19131 = G__19174;
continue;
} else {
var G__19175 = seq__18439_19128;
var G__19176 = chunk__18441_19129;
var G__19177 = count__18442_19130;
var G__19178 = (i__18443_19131 + (1));
seq__18439_19128 = G__19175;
chunk__18441_19129 = G__19176;
count__18442_19130 = G__19177;
i__18443_19131 = G__19178;
continue;
}
} else {
var temp__5804__auto___19179 = cljs.core.seq(seq__18439_19128);
if(temp__5804__auto___19179){
var seq__18439_19180__$1 = temp__5804__auto___19179;
if(cljs.core.chunked_seq_QMARK_(seq__18439_19180__$1)){
var c__5568__auto___19181 = cljs.core.chunk_first(seq__18439_19180__$1);
var G__19182 = cljs.core.chunk_rest(seq__18439_19180__$1);
var G__19183 = c__5568__auto___19181;
var G__19184 = cljs.core.count(c__5568__auto___19181);
var G__19185 = (0);
seq__18439_19128 = G__19182;
chunk__18441_19129 = G__19183;
count__18442_19130 = G__19184;
i__18443_19131 = G__19185;
continue;
} else {
var child_struct_19186 = cljs.core.first(seq__18439_19180__$1);
if((!((child_struct_19186 == null)))){
if(typeof child_struct_19186 === 'string'){
var text_19187 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19187),child_struct_19186].join(''));
} else {
var children_19188 = shadow.dom.svg_node(child_struct_19186);
if(cljs.core.seq_QMARK_(children_19188)){
var seq__18545_19189 = cljs.core.seq(children_19188);
var chunk__18547_19190 = null;
var count__18548_19191 = (0);
var i__18549_19192 = (0);
while(true){
if((i__18549_19192 < count__18548_19191)){
var child_19193 = chunk__18547_19190.cljs$core$IIndexed$_nth$arity$2(null,i__18549_19192);
if(cljs.core.truth_(child_19193)){
node.appendChild(child_19193);


var G__19194 = seq__18545_19189;
var G__19195 = chunk__18547_19190;
var G__19196 = count__18548_19191;
var G__19197 = (i__18549_19192 + (1));
seq__18545_19189 = G__19194;
chunk__18547_19190 = G__19195;
count__18548_19191 = G__19196;
i__18549_19192 = G__19197;
continue;
} else {
var G__19198 = seq__18545_19189;
var G__19199 = chunk__18547_19190;
var G__19200 = count__18548_19191;
var G__19202 = (i__18549_19192 + (1));
seq__18545_19189 = G__19198;
chunk__18547_19190 = G__19199;
count__18548_19191 = G__19200;
i__18549_19192 = G__19202;
continue;
}
} else {
var temp__5804__auto___19205__$1 = cljs.core.seq(seq__18545_19189);
if(temp__5804__auto___19205__$1){
var seq__18545_19206__$1 = temp__5804__auto___19205__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18545_19206__$1)){
var c__5568__auto___19207 = cljs.core.chunk_first(seq__18545_19206__$1);
var G__19208 = cljs.core.chunk_rest(seq__18545_19206__$1);
var G__19209 = c__5568__auto___19207;
var G__19210 = cljs.core.count(c__5568__auto___19207);
var G__19211 = (0);
seq__18545_19189 = G__19208;
chunk__18547_19190 = G__19209;
count__18548_19191 = G__19210;
i__18549_19192 = G__19211;
continue;
} else {
var child_19212 = cljs.core.first(seq__18545_19206__$1);
if(cljs.core.truth_(child_19212)){
node.appendChild(child_19212);


var G__19213 = cljs.core.next(seq__18545_19206__$1);
var G__19214 = null;
var G__19215 = (0);
var G__19216 = (0);
seq__18545_19189 = G__19213;
chunk__18547_19190 = G__19214;
count__18548_19191 = G__19215;
i__18549_19192 = G__19216;
continue;
} else {
var G__19217 = cljs.core.next(seq__18545_19206__$1);
var G__19218 = null;
var G__19219 = (0);
var G__19220 = (0);
seq__18545_19189 = G__19217;
chunk__18547_19190 = G__19218;
count__18548_19191 = G__19219;
i__18549_19192 = G__19220;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19188);
}
}


var G__19221 = cljs.core.next(seq__18439_19180__$1);
var G__19222 = null;
var G__19223 = (0);
var G__19224 = (0);
seq__18439_19128 = G__19221;
chunk__18441_19129 = G__19222;
count__18442_19130 = G__19223;
i__18443_19131 = G__19224;
continue;
} else {
var G__19225 = cljs.core.next(seq__18439_19180__$1);
var G__19226 = null;
var G__19227 = (0);
var G__19228 = (0);
seq__18439_19128 = G__19225;
chunk__18441_19129 = G__19226;
count__18442_19130 = G__19227;
i__18443_19131 = G__19228;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19229 = arguments.length;
var i__5770__auto___19233 = (0);
while(true){
if((i__5770__auto___19233 < len__5769__auto___19229)){
args__5775__auto__.push((arguments[i__5770__auto___19233]));

var G__19234 = (i__5770__auto___19233 + (1));
i__5770__auto___19233 = G__19234;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq18564){
var G__18565 = cljs.core.first(seq18564);
var seq18564__$1 = cljs.core.next(seq18564);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18565,seq18564__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__18577 = arguments.length;
switch (G__18577) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__14221__auto___19243 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14222__auto__ = (function (){var switch__13734__auto__ = (function (state_18589){
var state_val_18590 = (state_18589[(1)]);
if((state_val_18590 === (1))){
var state_18589__$1 = state_18589;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_18589__$1,(2),once_or_cleanup);
} else {
if((state_val_18590 === (2))){
var inst_18586 = (state_18589[(2)]);
var inst_18587 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_18589__$1 = (function (){var statearr_18599 = state_18589;
(statearr_18599[(7)] = inst_18586);

return statearr_18599;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_18589__$1,inst_18587);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__13736__auto__ = null;
var shadow$dom$state_machine__13736__auto____0 = (function (){
var statearr_18600 = [null,null,null,null,null,null,null,null];
(statearr_18600[(0)] = shadow$dom$state_machine__13736__auto__);

(statearr_18600[(1)] = (1));

return statearr_18600;
});
var shadow$dom$state_machine__13736__auto____1 = (function (state_18589){
while(true){
var ret_value__13738__auto__ = (function (){try{while(true){
var result__13739__auto__ = switch__13734__auto__(state_18589);
if(cljs.core.keyword_identical_QMARK_(result__13739__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__13739__auto__;
}
break;
}
}catch (e18604){var ex__13740__auto__ = e18604;
var statearr_18606_19244 = state_18589;
(statearr_18606_19244[(2)] = ex__13740__auto__);


if(cljs.core.seq((state_18589[(4)]))){
var statearr_18607_19245 = state_18589;
(statearr_18607_19245[(1)] = cljs.core.first((state_18589[(4)])));

} else {
throw ex__13740__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__13738__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19246 = state_18589;
state_18589 = G__19246;
continue;
} else {
return ret_value__13738__auto__;
}
break;
}
});
shadow$dom$state_machine__13736__auto__ = function(state_18589){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__13736__auto____0.call(this);
case 1:
return shadow$dom$state_machine__13736__auto____1.call(this,state_18589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__13736__auto____0;
shadow$dom$state_machine__13736__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__13736__auto____1;
return shadow$dom$state_machine__13736__auto__;
})()
})();
var state__14223__auto__ = (function (){var statearr_18608 = f__14222__auto__();
(statearr_18608[(6)] = c__14221__auto___19243);

return statearr_18608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14223__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
