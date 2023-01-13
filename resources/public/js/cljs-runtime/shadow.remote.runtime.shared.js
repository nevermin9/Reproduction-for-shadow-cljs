goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__18568,res){
var map__18571 = p__18568;
var map__18571__$1 = cljs.core.__destructure_map(map__18571);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18571__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18571__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__18578 = res;
var G__18578__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18578,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__18578);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18578__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__18578__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__18601 = arguments.length;
switch (G__18601) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__18611,msg,handlers,timeout_after_ms){
var map__18612 = p__18611;
var map__18612__$1 = cljs.core.__destructure_map(map__18612);
var runtime = map__18612__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18612__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18891 = arguments.length;
var i__5770__auto___18892 = (0);
while(true){
if((i__5770__auto___18892 < len__5769__auto___18891)){
args__5775__auto__.push((arguments[i__5770__auto___18892]));

var G__18895 = (i__5770__auto___18892 + (1));
i__5770__auto___18892 = G__18895;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__18619,ev,args){
var map__18621 = p__18619;
var map__18621__$1 = cljs.core.__destructure_map(map__18621);
var runtime = map__18621__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18621__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__18623 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18626 = null;
var count__18627 = (0);
var i__18628 = (0);
while(true){
if((i__18628 < count__18627)){
var ext = chunk__18626.cljs$core$IIndexed$_nth$arity$2(null,i__18628);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18897 = seq__18623;
var G__18898 = chunk__18626;
var G__18899 = count__18627;
var G__18900 = (i__18628 + (1));
seq__18623 = G__18897;
chunk__18626 = G__18898;
count__18627 = G__18899;
i__18628 = G__18900;
continue;
} else {
var G__18901 = seq__18623;
var G__18902 = chunk__18626;
var G__18903 = count__18627;
var G__18904 = (i__18628 + (1));
seq__18623 = G__18901;
chunk__18626 = G__18902;
count__18627 = G__18903;
i__18628 = G__18904;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18623);
if(temp__5804__auto__){
var seq__18623__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18623__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18623__$1);
var G__18908 = cljs.core.chunk_rest(seq__18623__$1);
var G__18909 = c__5568__auto__;
var G__18910 = cljs.core.count(c__5568__auto__);
var G__18911 = (0);
seq__18623 = G__18908;
chunk__18626 = G__18909;
count__18627 = G__18910;
i__18628 = G__18911;
continue;
} else {
var ext = cljs.core.first(seq__18623__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18912 = cljs.core.next(seq__18623__$1);
var G__18913 = null;
var G__18914 = (0);
var G__18915 = (0);
seq__18623 = G__18912;
chunk__18626 = G__18913;
count__18627 = G__18914;
i__18628 = G__18915;
continue;
} else {
var G__18916 = cljs.core.next(seq__18623__$1);
var G__18917 = null;
var G__18918 = (0);
var G__18919 = (0);
seq__18623 = G__18916;
chunk__18626 = G__18917;
count__18627 = G__18918;
i__18628 = G__18919;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq18614){
var G__18615 = cljs.core.first(seq18614);
var seq18614__$1 = cljs.core.next(seq18614);
var G__18616 = cljs.core.first(seq18614__$1);
var seq18614__$2 = cljs.core.next(seq18614__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__18615,G__18616,seq18614__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__18643,p__18644){
var map__18645 = p__18643;
var map__18645__$1 = cljs.core.__destructure_map(map__18645);
var runtime = map__18645__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18645__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18646 = p__18644;
var map__18646__$1 = cljs.core.__destructure_map(map__18646);
var msg = map__18646__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18646__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__18647 = cljs.core.deref(state_ref);
var map__18647__$1 = cljs.core.__destructure_map(map__18647);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18647__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18647__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__18649){
var map__18650 = p__18649;
var map__18650__$1 = cljs.core.__destructure_map(map__18650);
var runtime = map__18650__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18650__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__18651,msg){
var map__18652 = p__18651;
var map__18652__$1 = cljs.core.__destructure_map(map__18652);
var runtime = map__18652__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18652__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__18653,key,p__18654){
var map__18655 = p__18653;
var map__18655__$1 = cljs.core.__destructure_map(map__18655);
var state = map__18655__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18655__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__18656 = p__18654;
var map__18656__$1 = cljs.core.__destructure_map(map__18656);
var spec = map__18656__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18656__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__18658,key,spec){
var map__18659 = p__18658;
var map__18659__$1 = cljs.core.__destructure_map(map__18659);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18659__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__18661_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__18661_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__18662_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__18662_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__18663_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__18663_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__18664_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__18664_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__18665_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__18665_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__18666,key){
var map__18667 = p__18666;
var map__18667__$1 = cljs.core.__destructure_map(map__18667);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18667__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__18668,msg){
var map__18669 = p__18668;
var map__18669__$1 = cljs.core.__destructure_map(map__18669);
var runtime = map__18669__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18669__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__18688,p__18689){
var map__18704 = p__18688;
var map__18704__$1 = cljs.core.__destructure_map(map__18704);
var runtime = map__18704__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18704__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18705 = p__18689;
var map__18705__$1 = cljs.core.__destructure_map(map__18705);
var msg = map__18705__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18705__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18705__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__18768 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18770 = null;
var count__18771 = (0);
var i__18772 = (0);
while(true){
if((i__18772 < count__18771)){
var map__18878 = chunk__18770.cljs$core$IIndexed$_nth$arity$2(null,i__18772);
var map__18878__$1 = cljs.core.__destructure_map(map__18878);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18878__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18953 = seq__18768;
var G__18954 = chunk__18770;
var G__18955 = count__18771;
var G__18956 = (i__18772 + (1));
seq__18768 = G__18953;
chunk__18770 = G__18954;
count__18771 = G__18955;
i__18772 = G__18956;
continue;
} else {
var G__18957 = seq__18768;
var G__18958 = chunk__18770;
var G__18959 = count__18771;
var G__18960 = (i__18772 + (1));
seq__18768 = G__18957;
chunk__18770 = G__18958;
count__18771 = G__18959;
i__18772 = G__18960;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18768);
if(temp__5804__auto__){
var seq__18768__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18768__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18768__$1);
var G__18962 = cljs.core.chunk_rest(seq__18768__$1);
var G__18963 = c__5568__auto__;
var G__18964 = cljs.core.count(c__5568__auto__);
var G__18965 = (0);
seq__18768 = G__18962;
chunk__18770 = G__18963;
count__18771 = G__18964;
i__18772 = G__18965;
continue;
} else {
var map__18881 = cljs.core.first(seq__18768__$1);
var map__18881__$1 = cljs.core.__destructure_map(map__18881);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18881__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18967 = cljs.core.next(seq__18768__$1);
var G__18968 = null;
var G__18969 = (0);
var G__18970 = (0);
seq__18768 = G__18967;
chunk__18770 = G__18968;
count__18771 = G__18969;
i__18772 = G__18970;
continue;
} else {
var G__18972 = cljs.core.next(seq__18768__$1);
var G__18974 = null;
var G__18975 = (0);
var G__18976 = (0);
seq__18768 = G__18972;
chunk__18770 = G__18974;
count__18771 = G__18975;
i__18772 = G__18976;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
