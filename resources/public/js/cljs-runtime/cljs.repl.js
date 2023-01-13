goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19595){
var map__19596 = p__19595;
var map__19596__$1 = cljs.core.__destructure_map(map__19596);
var m = map__19596__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19596__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19596__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19602_19975 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19603_19976 = null;
var count__19604_19977 = (0);
var i__19605_19978 = (0);
while(true){
if((i__19605_19978 < count__19604_19977)){
var f_19979 = chunk__19603_19976.cljs$core$IIndexed$_nth$arity$2(null,i__19605_19978);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19979], 0));


var G__19980 = seq__19602_19975;
var G__19981 = chunk__19603_19976;
var G__19982 = count__19604_19977;
var G__19983 = (i__19605_19978 + (1));
seq__19602_19975 = G__19980;
chunk__19603_19976 = G__19981;
count__19604_19977 = G__19982;
i__19605_19978 = G__19983;
continue;
} else {
var temp__5804__auto___19988 = cljs.core.seq(seq__19602_19975);
if(temp__5804__auto___19988){
var seq__19602_19989__$1 = temp__5804__auto___19988;
if(cljs.core.chunked_seq_QMARK_(seq__19602_19989__$1)){
var c__5568__auto___19991 = cljs.core.chunk_first(seq__19602_19989__$1);
var G__19993 = cljs.core.chunk_rest(seq__19602_19989__$1);
var G__19994 = c__5568__auto___19991;
var G__19995 = cljs.core.count(c__5568__auto___19991);
var G__19996 = (0);
seq__19602_19975 = G__19993;
chunk__19603_19976 = G__19994;
count__19604_19977 = G__19995;
i__19605_19978 = G__19996;
continue;
} else {
var f_20002 = cljs.core.first(seq__19602_19989__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_20002], 0));


var G__20005 = cljs.core.next(seq__19602_19989__$1);
var G__20006 = null;
var G__20008 = (0);
var G__20009 = (0);
seq__19602_19975 = G__20005;
chunk__19603_19976 = G__20006;
count__19604_19977 = G__20008;
i__19605_19978 = G__20009;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_20010 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_20010], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_20010)))?cljs.core.second(arglists_20010):arglists_20010)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19614_20022 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19615_20023 = null;
var count__19616_20024 = (0);
var i__19617_20025 = (0);
while(true){
if((i__19617_20025 < count__19616_20024)){
var vec__19631_20026 = chunk__19615_20023.cljs$core$IIndexed$_nth$arity$2(null,i__19617_20025);
var name_20030 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19631_20026,(0),null);
var map__19634_20031 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19631_20026,(1),null);
var map__19634_20032__$1 = cljs.core.__destructure_map(map__19634_20031);
var doc_20033 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19634_20032__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20034 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19634_20032__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20030], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20034], 0));

if(cljs.core.truth_(doc_20033)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20033], 0));
} else {
}


var G__20053 = seq__19614_20022;
var G__20054 = chunk__19615_20023;
var G__20055 = count__19616_20024;
var G__20056 = (i__19617_20025 + (1));
seq__19614_20022 = G__20053;
chunk__19615_20023 = G__20054;
count__19616_20024 = G__20055;
i__19617_20025 = G__20056;
continue;
} else {
var temp__5804__auto___20067 = cljs.core.seq(seq__19614_20022);
if(temp__5804__auto___20067){
var seq__19614_20069__$1 = temp__5804__auto___20067;
if(cljs.core.chunked_seq_QMARK_(seq__19614_20069__$1)){
var c__5568__auto___20071 = cljs.core.chunk_first(seq__19614_20069__$1);
var G__20072 = cljs.core.chunk_rest(seq__19614_20069__$1);
var G__20073 = c__5568__auto___20071;
var G__20074 = cljs.core.count(c__5568__auto___20071);
var G__20075 = (0);
seq__19614_20022 = G__20072;
chunk__19615_20023 = G__20073;
count__19616_20024 = G__20074;
i__19617_20025 = G__20075;
continue;
} else {
var vec__19636_20076 = cljs.core.first(seq__19614_20069__$1);
var name_20077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19636_20076,(0),null);
var map__19639_20078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19636_20076,(1),null);
var map__19639_20079__$1 = cljs.core.__destructure_map(map__19639_20078);
var doc_20080 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19639_20079__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20081 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19639_20079__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20077], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20081], 0));

if(cljs.core.truth_(doc_20080)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20080], 0));
} else {
}


var G__20100 = cljs.core.next(seq__19614_20069__$1);
var G__20101 = null;
var G__20102 = (0);
var G__20103 = (0);
seq__19614_20022 = G__20100;
chunk__19615_20023 = G__20101;
count__19616_20024 = G__20102;
i__19617_20025 = G__20103;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19645 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19646 = null;
var count__19647 = (0);
var i__19648 = (0);
while(true){
if((i__19648 < count__19647)){
var role = chunk__19646.cljs$core$IIndexed$_nth$arity$2(null,i__19648);
var temp__5804__auto___20110__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20110__$1)){
var spec_20112 = temp__5804__auto___20110__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20112)], 0));
} else {
}


var G__20114 = seq__19645;
var G__20115 = chunk__19646;
var G__20116 = count__19647;
var G__20117 = (i__19648 + (1));
seq__19645 = G__20114;
chunk__19646 = G__20115;
count__19647 = G__20116;
i__19648 = G__20117;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19645);
if(temp__5804__auto____$1){
var seq__19645__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19645__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19645__$1);
var G__20122 = cljs.core.chunk_rest(seq__19645__$1);
var G__20123 = c__5568__auto__;
var G__20124 = cljs.core.count(c__5568__auto__);
var G__20125 = (0);
seq__19645 = G__20122;
chunk__19646 = G__20123;
count__19647 = G__20124;
i__19648 = G__20125;
continue;
} else {
var role = cljs.core.first(seq__19645__$1);
var temp__5804__auto___20127__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20127__$2)){
var spec_20129 = temp__5804__auto___20127__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20129)], 0));
} else {
}


var G__20130 = cljs.core.next(seq__19645__$1);
var G__20131 = null;
var G__20132 = (0);
var G__20133 = (0);
seq__19645 = G__20130;
chunk__19646 = G__20131;
count__19647 = G__20132;
i__19648 = G__20133;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20140 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20141 = cljs.core.ex_cause(t);
via = G__20140;
t = G__20141;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19851 = datafied_throwable;
var map__19851__$1 = cljs.core.__destructure_map(map__19851);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19851__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19851__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19851__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19852 = cljs.core.last(via);
var map__19852__$1 = cljs.core.__destructure_map(map__19852);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19852__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19852__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19852__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19853 = data;
var map__19853__$1 = cljs.core.__destructure_map(map__19853);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19853__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19853__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19853__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19854 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19854__$1 = cljs.core.__destructure_map(map__19854);
var top_data = map__19854__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19854__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19856 = phase;
var G__19856__$1 = (((G__19856 instanceof cljs.core.Keyword))?G__19856.fqn:null);
switch (G__19856__$1) {
case "read-source":
var map__19857 = data;
var map__19857__$1 = cljs.core.__destructure_map(map__19857);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19857__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19857__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19858 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19858__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19858,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19858);
var G__19858__$2 = (cljs.core.truth_((function (){var fexpr__19859 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19859.cljs$core$IFn$_invoke$arity$1 ? fexpr__19859.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19859.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19858__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19858__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19858__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19858__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19860 = top_data;
var G__19860__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19860,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19860);
var G__19860__$2 = (cljs.core.truth_((function (){var fexpr__19861 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19861.cljs$core$IFn$_invoke$arity$1 ? fexpr__19861.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19861.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19860__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19860__$1);
var G__19860__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19860__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19860__$2);
var G__19860__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19860__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19860__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19860__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19860__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19862 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19862,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19862,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19862,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19862,(3),null);
var G__19867 = top_data;
var G__19867__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19867,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19867);
var G__19867__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19867__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19867__$1);
var G__19867__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19867__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19867__$2);
var G__19867__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19867__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19867__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19867__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19867__$4;
}

break;
case "execution":
var vec__19868 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19868,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19868,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19868,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19868,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19842_SHARP_){
var or__5045__auto__ = (p1__19842_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__19871 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19871.cljs$core$IFn$_invoke$arity$1 ? fexpr__19871.cljs$core$IFn$_invoke$arity$1(p1__19842_SHARP_) : fexpr__19871.call(null,p1__19842_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__19872 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19872__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19872,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19872);
var G__19872__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19872__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19872__$1);
var G__19872__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19872__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19872__$2);
var G__19872__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19872__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19872__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19872__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19872__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19856__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19876){
var map__19877 = p__19876;
var map__19877__$1 = cljs.core.__destructure_map(map__19877);
var triage_data = map__19877__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19877__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19877__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19877__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19877__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19877__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19877__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19877__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19877__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19894 = phase;
var G__19894__$1 = (((G__19894 instanceof cljs.core.Keyword))?G__19894.fqn:null);
switch (G__19894__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19902 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19903 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19904 = loc;
var G__19905 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19916_20221 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19917_20222 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19918_20223 = true;
var _STAR_print_fn_STAR__temp_val__19919_20224 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19918_20223);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19919_20224);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19874_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19874_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19917_20222);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19916_20221);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19902,G__19903,G__19904,G__19905) : format.call(null,G__19902,G__19903,G__19904,G__19905));

break;
case "macroexpansion":
var G__19921 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19922 = cause_type;
var G__19923 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19924 = loc;
var G__19925 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19921,G__19922,G__19923,G__19924,G__19925) : format.call(null,G__19921,G__19922,G__19923,G__19924,G__19925));

break;
case "compile-syntax-check":
var G__19926 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19927 = cause_type;
var G__19928 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19929 = loc;
var G__19930 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19926,G__19927,G__19928,G__19929,G__19930) : format.call(null,G__19926,G__19927,G__19928,G__19929,G__19930));

break;
case "compilation":
var G__19932 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19933 = cause_type;
var G__19934 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19935 = loc;
var G__19936 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19932,G__19933,G__19934,G__19935,G__19936) : format.call(null,G__19932,G__19933,G__19934,G__19935,G__19936));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19939 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19940 = symbol;
var G__19941 = loc;
var G__19942 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19943_20243 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19944_20244 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19945_20245 = true;
var _STAR_print_fn_STAR__temp_val__19946_20246 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19945_20245);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19946_20246);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19875_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19875_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19944_20244);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19943_20243);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19939,G__19940,G__19941,G__19942) : format.call(null,G__19939,G__19940,G__19941,G__19942));
} else {
var G__19950 = "Execution error%s at %s(%s).\n%s\n";
var G__19951 = cause_type;
var G__19952 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19953 = loc;
var G__19954 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19950,G__19951,G__19952,G__19953,G__19954) : format.call(null,G__19950,G__19951,G__19952,G__19953,G__19954));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19894__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
