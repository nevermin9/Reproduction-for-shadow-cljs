goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21181 = arguments.length;
var i__5770__auto___21182 = (0);
while(true){
if((i__5770__auto___21182 < len__5769__auto___21181)){
args__5775__auto__.push((arguments[i__5770__auto___21182]));

var G__21183 = (i__5770__auto___21182 + (1));
i__5770__auto___21182 = G__21183;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20897){
var G__20898 = cljs.core.first(seq20897);
var seq20897__$1 = cljs.core.next(seq20897);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20898,seq20897__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20899 = cljs.core.seq(sources);
var chunk__20900 = null;
var count__20901 = (0);
var i__20902 = (0);
while(true){
if((i__20902 < count__20901)){
var map__20909 = chunk__20900.cljs$core$IIndexed$_nth$arity$2(null,i__20902);
var map__20909__$1 = cljs.core.__destructure_map(map__20909);
var src = map__20909__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20909__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20909__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20909__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20909__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20910){var e_21184 = e20910;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21184);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21184.message)].join('')));
}

var G__21185 = seq__20899;
var G__21186 = chunk__20900;
var G__21187 = count__20901;
var G__21188 = (i__20902 + (1));
seq__20899 = G__21185;
chunk__20900 = G__21186;
count__20901 = G__21187;
i__20902 = G__21188;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20899);
if(temp__5804__auto__){
var seq__20899__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20899__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20899__$1);
var G__21189 = cljs.core.chunk_rest(seq__20899__$1);
var G__21190 = c__5568__auto__;
var G__21191 = cljs.core.count(c__5568__auto__);
var G__21192 = (0);
seq__20899 = G__21189;
chunk__20900 = G__21190;
count__20901 = G__21191;
i__20902 = G__21192;
continue;
} else {
var map__20911 = cljs.core.first(seq__20899__$1);
var map__20911__$1 = cljs.core.__destructure_map(map__20911);
var src = map__20911__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20911__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20911__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20911__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20911__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20912){var e_21193 = e20912;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21193);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21193.message)].join('')));
}

var G__21194 = cljs.core.next(seq__20899__$1);
var G__21195 = null;
var G__21196 = (0);
var G__21197 = (0);
seq__20899 = G__21194;
chunk__20900 = G__21195;
count__20901 = G__21196;
i__20902 = G__21197;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20913 = cljs.core.seq(js_requires);
var chunk__20914 = null;
var count__20915 = (0);
var i__20916 = (0);
while(true){
if((i__20916 < count__20915)){
var js_ns = chunk__20914.cljs$core$IIndexed$_nth$arity$2(null,i__20916);
var require_str_21198 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21198);


var G__21199 = seq__20913;
var G__21200 = chunk__20914;
var G__21201 = count__20915;
var G__21202 = (i__20916 + (1));
seq__20913 = G__21199;
chunk__20914 = G__21200;
count__20915 = G__21201;
i__20916 = G__21202;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20913);
if(temp__5804__auto__){
var seq__20913__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20913__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20913__$1);
var G__21203 = cljs.core.chunk_rest(seq__20913__$1);
var G__21204 = c__5568__auto__;
var G__21205 = cljs.core.count(c__5568__auto__);
var G__21206 = (0);
seq__20913 = G__21203;
chunk__20914 = G__21204;
count__20915 = G__21205;
i__20916 = G__21206;
continue;
} else {
var js_ns = cljs.core.first(seq__20913__$1);
var require_str_21207 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21207);


var G__21208 = cljs.core.next(seq__20913__$1);
var G__21209 = null;
var G__21210 = (0);
var G__21211 = (0);
seq__20913 = G__21208;
chunk__20914 = G__21209;
count__20915 = G__21210;
i__20916 = G__21211;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20920){
var map__20921 = p__20920;
var map__20921__$1 = cljs.core.__destructure_map(map__20921);
var msg = map__20921__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20921__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20921__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20922(s__20923){
return (new cljs.core.LazySeq(null,(function (){
var s__20923__$1 = s__20923;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20923__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20928 = cljs.core.first(xs__6360__auto__);
var map__20928__$1 = cljs.core.__destructure_map(map__20928);
var src = map__20928__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20928__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20928__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__20923__$1,map__20928,map__20928__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20921,map__20921__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20922_$_iter__20924(s__20925){
return (new cljs.core.LazySeq(null,((function (s__20923__$1,map__20928,map__20928__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20921,map__20921__$1,msg,info,reload_info){
return (function (){
var s__20925__$1 = s__20925;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20925__$1);
if(temp__5804__auto____$1){
var s__20925__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20925__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20925__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20927 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20926 = (0);
while(true){
if((i__20926 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__20926);
cljs.core.chunk_append(b__20927,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21212 = (i__20926 + (1));
i__20926 = G__21212;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20927),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20922_$_iter__20924(cljs.core.chunk_rest(s__20925__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20927),null);
}
} else {
var warning = cljs.core.first(s__20925__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20922_$_iter__20924(cljs.core.rest(s__20925__$2)));
}
} else {
return null;
}
break;
}
});})(s__20923__$1,map__20928,map__20928__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20921,map__20921__$1,msg,info,reload_info))
,null,null));
});})(s__20923__$1,map__20928,map__20928__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20921,map__20921__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20922(cljs.core.rest(s__20923__$1)));
} else {
var G__21213 = cljs.core.rest(s__20923__$1);
s__20923__$1 = G__21213;
continue;
}
} else {
var G__21214 = cljs.core.rest(s__20923__$1);
s__20923__$1 = G__21214;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20929_21215 = cljs.core.seq(warnings);
var chunk__20930_21216 = null;
var count__20931_21217 = (0);
var i__20932_21218 = (0);
while(true){
if((i__20932_21218 < count__20931_21217)){
var map__20935_21219 = chunk__20930_21216.cljs$core$IIndexed$_nth$arity$2(null,i__20932_21218);
var map__20935_21220__$1 = cljs.core.__destructure_map(map__20935_21219);
var w_21221 = map__20935_21220__$1;
var msg_21222__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20935_21220__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21223 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20935_21220__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21224 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20935_21220__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21225 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20935_21220__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21225)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21223),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21224),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21222__$1)].join(''));


var G__21226 = seq__20929_21215;
var G__21227 = chunk__20930_21216;
var G__21228 = count__20931_21217;
var G__21229 = (i__20932_21218 + (1));
seq__20929_21215 = G__21226;
chunk__20930_21216 = G__21227;
count__20931_21217 = G__21228;
i__20932_21218 = G__21229;
continue;
} else {
var temp__5804__auto___21230 = cljs.core.seq(seq__20929_21215);
if(temp__5804__auto___21230){
var seq__20929_21231__$1 = temp__5804__auto___21230;
if(cljs.core.chunked_seq_QMARK_(seq__20929_21231__$1)){
var c__5568__auto___21232 = cljs.core.chunk_first(seq__20929_21231__$1);
var G__21233 = cljs.core.chunk_rest(seq__20929_21231__$1);
var G__21234 = c__5568__auto___21232;
var G__21235 = cljs.core.count(c__5568__auto___21232);
var G__21236 = (0);
seq__20929_21215 = G__21233;
chunk__20930_21216 = G__21234;
count__20931_21217 = G__21235;
i__20932_21218 = G__21236;
continue;
} else {
var map__20936_21237 = cljs.core.first(seq__20929_21231__$1);
var map__20936_21238__$1 = cljs.core.__destructure_map(map__20936_21237);
var w_21239 = map__20936_21238__$1;
var msg_21240__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20936_21238__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21241 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20936_21238__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21242 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20936_21238__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21243 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20936_21238__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21243)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21241),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21242),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21240__$1)].join(''));


var G__21244 = cljs.core.next(seq__20929_21231__$1);
var G__21245 = null;
var G__21246 = (0);
var G__21247 = (0);
seq__20929_21215 = G__21244;
chunk__20930_21216 = G__21245;
count__20931_21217 = G__21246;
i__20932_21218 = G__21247;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20919_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20919_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20937){
var map__20938 = p__20937;
var map__20938__$1 = cljs.core.__destructure_map(map__20938);
var msg = map__20938__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20938__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20938__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20939 = cljs.core.seq(updates);
var chunk__20941 = null;
var count__20942 = (0);
var i__20943 = (0);
while(true){
if((i__20943 < count__20942)){
var path = chunk__20941.cljs$core$IIndexed$_nth$arity$2(null,i__20943);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21053_21248 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21057_21249 = null;
var count__21058_21250 = (0);
var i__21059_21251 = (0);
while(true){
if((i__21059_21251 < count__21058_21250)){
var node_21252 = chunk__21057_21249.cljs$core$IIndexed$_nth$arity$2(null,i__21059_21251);
if(cljs.core.not(node_21252.shadow$old)){
var path_match_21253 = shadow.cljs.devtools.client.browser.match_paths(node_21252.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21253)){
var new_link_21254 = (function (){var G__21085 = node_21252.cloneNode(true);
G__21085.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21253),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21085;
})();
(node_21252.shadow$old = true);

(new_link_21254.onload = ((function (seq__21053_21248,chunk__21057_21249,count__21058_21250,i__21059_21251,seq__20939,chunk__20941,count__20942,i__20943,new_link_21254,path_match_21253,node_21252,path,map__20938,map__20938__$1,msg,updates,reload_info){
return (function (e){
var seq__21086_21255 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21088_21256 = null;
var count__21089_21257 = (0);
var i__21090_21258 = (0);
while(true){
if((i__21090_21258 < count__21089_21257)){
var map__21094_21259 = chunk__21088_21256.cljs$core$IIndexed$_nth$arity$2(null,i__21090_21258);
var map__21094_21260__$1 = cljs.core.__destructure_map(map__21094_21259);
var task_21261 = map__21094_21260__$1;
var fn_str_21262 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21094_21260__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21263 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21094_21260__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21264 = goog.getObjectByName(fn_str_21262,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21263)].join(''));

(fn_obj_21264.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21264.cljs$core$IFn$_invoke$arity$2(path,new_link_21254) : fn_obj_21264.call(null,path,new_link_21254));


var G__21265 = seq__21086_21255;
var G__21266 = chunk__21088_21256;
var G__21267 = count__21089_21257;
var G__21268 = (i__21090_21258 + (1));
seq__21086_21255 = G__21265;
chunk__21088_21256 = G__21266;
count__21089_21257 = G__21267;
i__21090_21258 = G__21268;
continue;
} else {
var temp__5804__auto___21269 = cljs.core.seq(seq__21086_21255);
if(temp__5804__auto___21269){
var seq__21086_21270__$1 = temp__5804__auto___21269;
if(cljs.core.chunked_seq_QMARK_(seq__21086_21270__$1)){
var c__5568__auto___21271 = cljs.core.chunk_first(seq__21086_21270__$1);
var G__21272 = cljs.core.chunk_rest(seq__21086_21270__$1);
var G__21273 = c__5568__auto___21271;
var G__21274 = cljs.core.count(c__5568__auto___21271);
var G__21275 = (0);
seq__21086_21255 = G__21272;
chunk__21088_21256 = G__21273;
count__21089_21257 = G__21274;
i__21090_21258 = G__21275;
continue;
} else {
var map__21095_21276 = cljs.core.first(seq__21086_21270__$1);
var map__21095_21277__$1 = cljs.core.__destructure_map(map__21095_21276);
var task_21278 = map__21095_21277__$1;
var fn_str_21279 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21095_21277__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21095_21277__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21281 = goog.getObjectByName(fn_str_21279,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21280)].join(''));

(fn_obj_21281.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21281.cljs$core$IFn$_invoke$arity$2(path,new_link_21254) : fn_obj_21281.call(null,path,new_link_21254));


var G__21282 = cljs.core.next(seq__21086_21270__$1);
var G__21283 = null;
var G__21284 = (0);
var G__21285 = (0);
seq__21086_21255 = G__21282;
chunk__21088_21256 = G__21283;
count__21089_21257 = G__21284;
i__21090_21258 = G__21285;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21252);
});})(seq__21053_21248,chunk__21057_21249,count__21058_21250,i__21059_21251,seq__20939,chunk__20941,count__20942,i__20943,new_link_21254,path_match_21253,node_21252,path,map__20938,map__20938__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21253], 0));

goog.dom.insertSiblingAfter(new_link_21254,node_21252);


var G__21286 = seq__21053_21248;
var G__21287 = chunk__21057_21249;
var G__21288 = count__21058_21250;
var G__21289 = (i__21059_21251 + (1));
seq__21053_21248 = G__21286;
chunk__21057_21249 = G__21287;
count__21058_21250 = G__21288;
i__21059_21251 = G__21289;
continue;
} else {
var G__21290 = seq__21053_21248;
var G__21291 = chunk__21057_21249;
var G__21292 = count__21058_21250;
var G__21293 = (i__21059_21251 + (1));
seq__21053_21248 = G__21290;
chunk__21057_21249 = G__21291;
count__21058_21250 = G__21292;
i__21059_21251 = G__21293;
continue;
}
} else {
var G__21294 = seq__21053_21248;
var G__21295 = chunk__21057_21249;
var G__21296 = count__21058_21250;
var G__21297 = (i__21059_21251 + (1));
seq__21053_21248 = G__21294;
chunk__21057_21249 = G__21295;
count__21058_21250 = G__21296;
i__21059_21251 = G__21297;
continue;
}
} else {
var temp__5804__auto___21298 = cljs.core.seq(seq__21053_21248);
if(temp__5804__auto___21298){
var seq__21053_21299__$1 = temp__5804__auto___21298;
if(cljs.core.chunked_seq_QMARK_(seq__21053_21299__$1)){
var c__5568__auto___21300 = cljs.core.chunk_first(seq__21053_21299__$1);
var G__21301 = cljs.core.chunk_rest(seq__21053_21299__$1);
var G__21302 = c__5568__auto___21300;
var G__21303 = cljs.core.count(c__5568__auto___21300);
var G__21304 = (0);
seq__21053_21248 = G__21301;
chunk__21057_21249 = G__21302;
count__21058_21250 = G__21303;
i__21059_21251 = G__21304;
continue;
} else {
var node_21305 = cljs.core.first(seq__21053_21299__$1);
if(cljs.core.not(node_21305.shadow$old)){
var path_match_21306 = shadow.cljs.devtools.client.browser.match_paths(node_21305.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21306)){
var new_link_21307 = (function (){var G__21096 = node_21305.cloneNode(true);
G__21096.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21306),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21096;
})();
(node_21305.shadow$old = true);

(new_link_21307.onload = ((function (seq__21053_21248,chunk__21057_21249,count__21058_21250,i__21059_21251,seq__20939,chunk__20941,count__20942,i__20943,new_link_21307,path_match_21306,node_21305,seq__21053_21299__$1,temp__5804__auto___21298,path,map__20938,map__20938__$1,msg,updates,reload_info){
return (function (e){
var seq__21097_21308 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21099_21309 = null;
var count__21100_21310 = (0);
var i__21101_21311 = (0);
while(true){
if((i__21101_21311 < count__21100_21310)){
var map__21105_21312 = chunk__21099_21309.cljs$core$IIndexed$_nth$arity$2(null,i__21101_21311);
var map__21105_21313__$1 = cljs.core.__destructure_map(map__21105_21312);
var task_21314 = map__21105_21313__$1;
var fn_str_21315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21105_21313__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21105_21313__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21317 = goog.getObjectByName(fn_str_21315,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21316)].join(''));

(fn_obj_21317.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21317.cljs$core$IFn$_invoke$arity$2(path,new_link_21307) : fn_obj_21317.call(null,path,new_link_21307));


var G__21318 = seq__21097_21308;
var G__21319 = chunk__21099_21309;
var G__21320 = count__21100_21310;
var G__21321 = (i__21101_21311 + (1));
seq__21097_21308 = G__21318;
chunk__21099_21309 = G__21319;
count__21100_21310 = G__21320;
i__21101_21311 = G__21321;
continue;
} else {
var temp__5804__auto___21322__$1 = cljs.core.seq(seq__21097_21308);
if(temp__5804__auto___21322__$1){
var seq__21097_21323__$1 = temp__5804__auto___21322__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21097_21323__$1)){
var c__5568__auto___21324 = cljs.core.chunk_first(seq__21097_21323__$1);
var G__21325 = cljs.core.chunk_rest(seq__21097_21323__$1);
var G__21326 = c__5568__auto___21324;
var G__21327 = cljs.core.count(c__5568__auto___21324);
var G__21328 = (0);
seq__21097_21308 = G__21325;
chunk__21099_21309 = G__21326;
count__21100_21310 = G__21327;
i__21101_21311 = G__21328;
continue;
} else {
var map__21106_21329 = cljs.core.first(seq__21097_21323__$1);
var map__21106_21330__$1 = cljs.core.__destructure_map(map__21106_21329);
var task_21331 = map__21106_21330__$1;
var fn_str_21332 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21106_21330__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21333 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21106_21330__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21334 = goog.getObjectByName(fn_str_21332,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21333)].join(''));

(fn_obj_21334.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21334.cljs$core$IFn$_invoke$arity$2(path,new_link_21307) : fn_obj_21334.call(null,path,new_link_21307));


var G__21335 = cljs.core.next(seq__21097_21323__$1);
var G__21336 = null;
var G__21337 = (0);
var G__21338 = (0);
seq__21097_21308 = G__21335;
chunk__21099_21309 = G__21336;
count__21100_21310 = G__21337;
i__21101_21311 = G__21338;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21305);
});})(seq__21053_21248,chunk__21057_21249,count__21058_21250,i__21059_21251,seq__20939,chunk__20941,count__20942,i__20943,new_link_21307,path_match_21306,node_21305,seq__21053_21299__$1,temp__5804__auto___21298,path,map__20938,map__20938__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21306], 0));

goog.dom.insertSiblingAfter(new_link_21307,node_21305);


var G__21339 = cljs.core.next(seq__21053_21299__$1);
var G__21340 = null;
var G__21341 = (0);
var G__21342 = (0);
seq__21053_21248 = G__21339;
chunk__21057_21249 = G__21340;
count__21058_21250 = G__21341;
i__21059_21251 = G__21342;
continue;
} else {
var G__21343 = cljs.core.next(seq__21053_21299__$1);
var G__21344 = null;
var G__21345 = (0);
var G__21346 = (0);
seq__21053_21248 = G__21343;
chunk__21057_21249 = G__21344;
count__21058_21250 = G__21345;
i__21059_21251 = G__21346;
continue;
}
} else {
var G__21347 = cljs.core.next(seq__21053_21299__$1);
var G__21348 = null;
var G__21349 = (0);
var G__21350 = (0);
seq__21053_21248 = G__21347;
chunk__21057_21249 = G__21348;
count__21058_21250 = G__21349;
i__21059_21251 = G__21350;
continue;
}
}
} else {
}
}
break;
}


var G__21351 = seq__20939;
var G__21352 = chunk__20941;
var G__21353 = count__20942;
var G__21354 = (i__20943 + (1));
seq__20939 = G__21351;
chunk__20941 = G__21352;
count__20942 = G__21353;
i__20943 = G__21354;
continue;
} else {
var G__21355 = seq__20939;
var G__21356 = chunk__20941;
var G__21357 = count__20942;
var G__21358 = (i__20943 + (1));
seq__20939 = G__21355;
chunk__20941 = G__21356;
count__20942 = G__21357;
i__20943 = G__21358;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20939);
if(temp__5804__auto__){
var seq__20939__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20939__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20939__$1);
var G__21359 = cljs.core.chunk_rest(seq__20939__$1);
var G__21360 = c__5568__auto__;
var G__21361 = cljs.core.count(c__5568__auto__);
var G__21362 = (0);
seq__20939 = G__21359;
chunk__20941 = G__21360;
count__20942 = G__21361;
i__20943 = G__21362;
continue;
} else {
var path = cljs.core.first(seq__20939__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21107_21363 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21111_21364 = null;
var count__21112_21365 = (0);
var i__21113_21366 = (0);
while(true){
if((i__21113_21366 < count__21112_21365)){
var node_21367 = chunk__21111_21364.cljs$core$IIndexed$_nth$arity$2(null,i__21113_21366);
if(cljs.core.not(node_21367.shadow$old)){
var path_match_21368 = shadow.cljs.devtools.client.browser.match_paths(node_21367.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21368)){
var new_link_21369 = (function (){var G__21139 = node_21367.cloneNode(true);
G__21139.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21368),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21139;
})();
(node_21367.shadow$old = true);

(new_link_21369.onload = ((function (seq__21107_21363,chunk__21111_21364,count__21112_21365,i__21113_21366,seq__20939,chunk__20941,count__20942,i__20943,new_link_21369,path_match_21368,node_21367,path,seq__20939__$1,temp__5804__auto__,map__20938,map__20938__$1,msg,updates,reload_info){
return (function (e){
var seq__21140_21370 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21142_21371 = null;
var count__21143_21372 = (0);
var i__21144_21373 = (0);
while(true){
if((i__21144_21373 < count__21143_21372)){
var map__21148_21374 = chunk__21142_21371.cljs$core$IIndexed$_nth$arity$2(null,i__21144_21373);
var map__21148_21375__$1 = cljs.core.__destructure_map(map__21148_21374);
var task_21376 = map__21148_21375__$1;
var fn_str_21377 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21148_21375__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21378 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21148_21375__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21379 = goog.getObjectByName(fn_str_21377,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21378)].join(''));

(fn_obj_21379.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21379.cljs$core$IFn$_invoke$arity$2(path,new_link_21369) : fn_obj_21379.call(null,path,new_link_21369));


var G__21380 = seq__21140_21370;
var G__21381 = chunk__21142_21371;
var G__21382 = count__21143_21372;
var G__21383 = (i__21144_21373 + (1));
seq__21140_21370 = G__21380;
chunk__21142_21371 = G__21381;
count__21143_21372 = G__21382;
i__21144_21373 = G__21383;
continue;
} else {
var temp__5804__auto___21384__$1 = cljs.core.seq(seq__21140_21370);
if(temp__5804__auto___21384__$1){
var seq__21140_21385__$1 = temp__5804__auto___21384__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21140_21385__$1)){
var c__5568__auto___21386 = cljs.core.chunk_first(seq__21140_21385__$1);
var G__21387 = cljs.core.chunk_rest(seq__21140_21385__$1);
var G__21388 = c__5568__auto___21386;
var G__21389 = cljs.core.count(c__5568__auto___21386);
var G__21390 = (0);
seq__21140_21370 = G__21387;
chunk__21142_21371 = G__21388;
count__21143_21372 = G__21389;
i__21144_21373 = G__21390;
continue;
} else {
var map__21149_21391 = cljs.core.first(seq__21140_21385__$1);
var map__21149_21392__$1 = cljs.core.__destructure_map(map__21149_21391);
var task_21393 = map__21149_21392__$1;
var fn_str_21394 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21149_21392__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21395 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21149_21392__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21396 = goog.getObjectByName(fn_str_21394,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21395)].join(''));

(fn_obj_21396.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21396.cljs$core$IFn$_invoke$arity$2(path,new_link_21369) : fn_obj_21396.call(null,path,new_link_21369));


var G__21397 = cljs.core.next(seq__21140_21385__$1);
var G__21398 = null;
var G__21399 = (0);
var G__21400 = (0);
seq__21140_21370 = G__21397;
chunk__21142_21371 = G__21398;
count__21143_21372 = G__21399;
i__21144_21373 = G__21400;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21367);
});})(seq__21107_21363,chunk__21111_21364,count__21112_21365,i__21113_21366,seq__20939,chunk__20941,count__20942,i__20943,new_link_21369,path_match_21368,node_21367,path,seq__20939__$1,temp__5804__auto__,map__20938,map__20938__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21368], 0));

goog.dom.insertSiblingAfter(new_link_21369,node_21367);


var G__21401 = seq__21107_21363;
var G__21402 = chunk__21111_21364;
var G__21403 = count__21112_21365;
var G__21404 = (i__21113_21366 + (1));
seq__21107_21363 = G__21401;
chunk__21111_21364 = G__21402;
count__21112_21365 = G__21403;
i__21113_21366 = G__21404;
continue;
} else {
var G__21405 = seq__21107_21363;
var G__21406 = chunk__21111_21364;
var G__21407 = count__21112_21365;
var G__21408 = (i__21113_21366 + (1));
seq__21107_21363 = G__21405;
chunk__21111_21364 = G__21406;
count__21112_21365 = G__21407;
i__21113_21366 = G__21408;
continue;
}
} else {
var G__21409 = seq__21107_21363;
var G__21410 = chunk__21111_21364;
var G__21411 = count__21112_21365;
var G__21412 = (i__21113_21366 + (1));
seq__21107_21363 = G__21409;
chunk__21111_21364 = G__21410;
count__21112_21365 = G__21411;
i__21113_21366 = G__21412;
continue;
}
} else {
var temp__5804__auto___21413__$1 = cljs.core.seq(seq__21107_21363);
if(temp__5804__auto___21413__$1){
var seq__21107_21414__$1 = temp__5804__auto___21413__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21107_21414__$1)){
var c__5568__auto___21415 = cljs.core.chunk_first(seq__21107_21414__$1);
var G__21416 = cljs.core.chunk_rest(seq__21107_21414__$1);
var G__21417 = c__5568__auto___21415;
var G__21418 = cljs.core.count(c__5568__auto___21415);
var G__21419 = (0);
seq__21107_21363 = G__21416;
chunk__21111_21364 = G__21417;
count__21112_21365 = G__21418;
i__21113_21366 = G__21419;
continue;
} else {
var node_21420 = cljs.core.first(seq__21107_21414__$1);
if(cljs.core.not(node_21420.shadow$old)){
var path_match_21421 = shadow.cljs.devtools.client.browser.match_paths(node_21420.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21421)){
var new_link_21422 = (function (){var G__21150 = node_21420.cloneNode(true);
G__21150.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21421),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21150;
})();
(node_21420.shadow$old = true);

(new_link_21422.onload = ((function (seq__21107_21363,chunk__21111_21364,count__21112_21365,i__21113_21366,seq__20939,chunk__20941,count__20942,i__20943,new_link_21422,path_match_21421,node_21420,seq__21107_21414__$1,temp__5804__auto___21413__$1,path,seq__20939__$1,temp__5804__auto__,map__20938,map__20938__$1,msg,updates,reload_info){
return (function (e){
var seq__21151_21423 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21153_21424 = null;
var count__21154_21425 = (0);
var i__21155_21426 = (0);
while(true){
if((i__21155_21426 < count__21154_21425)){
var map__21159_21427 = chunk__21153_21424.cljs$core$IIndexed$_nth$arity$2(null,i__21155_21426);
var map__21159_21428__$1 = cljs.core.__destructure_map(map__21159_21427);
var task_21429 = map__21159_21428__$1;
var fn_str_21430 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21159_21428__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21431 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21159_21428__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21432 = goog.getObjectByName(fn_str_21430,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21431)].join(''));

(fn_obj_21432.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21432.cljs$core$IFn$_invoke$arity$2(path,new_link_21422) : fn_obj_21432.call(null,path,new_link_21422));


var G__21433 = seq__21151_21423;
var G__21434 = chunk__21153_21424;
var G__21435 = count__21154_21425;
var G__21436 = (i__21155_21426 + (1));
seq__21151_21423 = G__21433;
chunk__21153_21424 = G__21434;
count__21154_21425 = G__21435;
i__21155_21426 = G__21436;
continue;
} else {
var temp__5804__auto___21437__$2 = cljs.core.seq(seq__21151_21423);
if(temp__5804__auto___21437__$2){
var seq__21151_21438__$1 = temp__5804__auto___21437__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21151_21438__$1)){
var c__5568__auto___21439 = cljs.core.chunk_first(seq__21151_21438__$1);
var G__21440 = cljs.core.chunk_rest(seq__21151_21438__$1);
var G__21441 = c__5568__auto___21439;
var G__21442 = cljs.core.count(c__5568__auto___21439);
var G__21443 = (0);
seq__21151_21423 = G__21440;
chunk__21153_21424 = G__21441;
count__21154_21425 = G__21442;
i__21155_21426 = G__21443;
continue;
} else {
var map__21160_21444 = cljs.core.first(seq__21151_21438__$1);
var map__21160_21445__$1 = cljs.core.__destructure_map(map__21160_21444);
var task_21446 = map__21160_21445__$1;
var fn_str_21447 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21160_21445__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21448 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21160_21445__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21449 = goog.getObjectByName(fn_str_21447,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21448)].join(''));

(fn_obj_21449.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21449.cljs$core$IFn$_invoke$arity$2(path,new_link_21422) : fn_obj_21449.call(null,path,new_link_21422));


var G__21450 = cljs.core.next(seq__21151_21438__$1);
var G__21451 = null;
var G__21452 = (0);
var G__21453 = (0);
seq__21151_21423 = G__21450;
chunk__21153_21424 = G__21451;
count__21154_21425 = G__21452;
i__21155_21426 = G__21453;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21420);
});})(seq__21107_21363,chunk__21111_21364,count__21112_21365,i__21113_21366,seq__20939,chunk__20941,count__20942,i__20943,new_link_21422,path_match_21421,node_21420,seq__21107_21414__$1,temp__5804__auto___21413__$1,path,seq__20939__$1,temp__5804__auto__,map__20938,map__20938__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21421], 0));

goog.dom.insertSiblingAfter(new_link_21422,node_21420);


var G__21454 = cljs.core.next(seq__21107_21414__$1);
var G__21455 = null;
var G__21456 = (0);
var G__21457 = (0);
seq__21107_21363 = G__21454;
chunk__21111_21364 = G__21455;
count__21112_21365 = G__21456;
i__21113_21366 = G__21457;
continue;
} else {
var G__21458 = cljs.core.next(seq__21107_21414__$1);
var G__21459 = null;
var G__21460 = (0);
var G__21461 = (0);
seq__21107_21363 = G__21458;
chunk__21111_21364 = G__21459;
count__21112_21365 = G__21460;
i__21113_21366 = G__21461;
continue;
}
} else {
var G__21462 = cljs.core.next(seq__21107_21414__$1);
var G__21463 = null;
var G__21464 = (0);
var G__21465 = (0);
seq__21107_21363 = G__21462;
chunk__21111_21364 = G__21463;
count__21112_21365 = G__21464;
i__21113_21366 = G__21465;
continue;
}
}
} else {
}
}
break;
}


var G__21466 = cljs.core.next(seq__20939__$1);
var G__21467 = null;
var G__21468 = (0);
var G__21469 = (0);
seq__20939 = G__21466;
chunk__20941 = G__21467;
count__20942 = G__21468;
i__20943 = G__21469;
continue;
} else {
var G__21470 = cljs.core.next(seq__20939__$1);
var G__21471 = null;
var G__21472 = (0);
var G__21473 = (0);
seq__20939 = G__21470;
chunk__20941 = G__21471;
count__20942 = G__21472;
i__20943 = G__21473;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__21161){
var map__21162 = p__21161;
var map__21162__$1 = cljs.core.__destructure_map(map__21162);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21162__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__21163){
var map__21164 = p__21163;
var map__21164__$1 = cljs.core.__destructure_map(map__21164);
var _ = map__21164__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21164__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21165,done,error){
var map__21166 = p__21165;
var map__21166__$1 = cljs.core.__destructure_map(map__21166);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21166__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21167,done,error){
var map__21168 = p__21167;
var map__21168__$1 = cljs.core.__destructure_map(map__21168);
var msg = map__21168__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21168__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21168__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21168__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21169){
var map__21170 = p__21169;
var map__21170__$1 = cljs.core.__destructure_map(map__21170);
var src = map__21170__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21170__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21171 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21171) : done.call(null,G__21171));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21172){
var map__21173 = p__21172;
var map__21173__$1 = cljs.core.__destructure_map(map__21173);
var msg__$1 = map__21173__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21173__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21174){var ex = e21174;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21175){
var map__21176 = p__21175;
var map__21176__$1 = cljs.core.__destructure_map(map__21176);
var env = map__21176__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21176__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21177){
var map__21178 = p__21177;
var map__21178__$1 = cljs.core.__destructure_map(map__21178);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21178__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21178__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21179){
var map__21180 = p__21179;
var map__21180__$1 = cljs.core.__destructure_map(map__21180);
var svc = map__21180__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21180__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
