goog.provide('starter.browser');
goog.require('cljs.core');
var module$node_modules$graphql$index=shadow.js.require("module$node_modules$graphql$index", {});
starter.browser.start = (function starter$browser$start(){
return console.log("start");
});
starter.browser.init = (function starter$browser$init(){
console.log("init");

return starter.browser.start();
});
goog.exportSymbol('starter.browser.init', starter.browser.init);
starter.browser.stop = (function starter$browser$stop(){
return console.log("stop");
});

//# sourceMappingURL=starter.browser.js.map
