goog.provide('sight_fe.main');
console.log("true");
console.log("false");
console.log("whatever");
sight_fe.main.root = (function sight_fe$main$root(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav","nav",719540477),"navigation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sight_fe.pages.home.page], null)], null)], null);
});
sight_fe.main.app_el = goog.dom.getElement("app");
sight_fe.main.mount_app = (function sight_fe$main$mount_app(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(sight_fe.main.root,sight_fe.main.app_el,(function (){
return console.log("rendered");
}));
});
sight_fe.main.mount_app();
sight_fe.main.start = (function sight_fe$main$start(){
return console.log("start");
});
sight_fe.main.stop = (function sight_fe$main$stop(){
return console.log("stop");
});

//# sourceMappingURL=sight_fe.main.js.map
