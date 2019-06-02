webpackJsonp([17],{

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonRoute", function() { return Route; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonRouteRedirect", function() { return RouteRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonRouter", function() { return Router; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonRouterOutlet", function() { return RouterOutlet; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_core_js__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chunk_6d7d2f8c_js__ = __webpack_require__(754);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chunk_99929188_js__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chunk_90d954cd_js__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chunk_19910bac_js__ = __webpack_require__(762);
var Route=function(){function t(){this.url=""}return t.prototype.onUpdate=function(t){this.ionRouteDataChanged.emit(t)},t.prototype.onComponentProps=function(t,e){if(t!==e){var n=t?Object.keys(t):[],r=e?Object.keys(e):[];if(n.length===r.length)for(var o=0,i=n;o<i.length;o++){var a=i[o];if(t[a]!==e[a])return void this.onUpdate(t)}else this.onUpdate(t)}},t.prototype.componentDidLoad=function(){this.ionRouteDataChanged.emit()},t.prototype.componentDidUnload=function(){this.ionRouteDataChanged.emit()},Object.defineProperty(t,"is",{get:function(){return"ion-route"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{component:{type:String,attr:"component",watchCallbacks:["onUpdate"]},componentProps:{type:"Any",attr:"component-props",watchCallbacks:["onComponentProps"]},url:{type:String,attr:"url",watchCallbacks:["onUpdate"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionRouteDataChanged",method:"ionRouteDataChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),t}(),RouteRedirect=function(){function t(){}return t.prototype.propDidChange=function(){this.ionRouteRedirectChanged.emit()},t.prototype.componentDidLoad=function(){this.ionRouteRedirectChanged.emit()},t.prototype.componentDidUnload=function(){this.ionRouteRedirectChanged.emit()},Object.defineProperty(t,"is",{get:function(){return"ion-route-redirect"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{from:{type:String,attr:"from",watchCallbacks:["propDidChange"]},to:{type:String,attr:"to",watchCallbacks:["propDidChange"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionRouteRedirectChanged",method:"ionRouteRedirectChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),t}(),ROUTER_INTENT_NONE="root",ROUTER_INTENT_FORWARD="forward",ROUTER_INTENT_BACK="back";function generatePath(t){return"/"+t.filter(function(t){return t.length>0}).join("/")}function chainToPath(t){for(var e=[],n=0,r=t;n<r.length;n++)for(var o=r[n],i=0,a=o.path;i<a.length;i++){var s=a[i];if(":"===s[0]){var u=o.params&&o.params[s.slice(1)];if(!u)return null;e.push(u)}else""!==s&&e.push(s)}return e}function writePath(t,e,n,r,o,i){var a=generatePath(parsePath(e).concat(r));n&&(a="#"+a),o===ROUTER_INTENT_FORWARD?t.pushState(i,"",a):t.replaceState(i,"",a)}function removePrefix(t,e){if(t.length>e.length)return null;if(t.length<=1&&""===t[0])return e;for(var n=0;n<t.length;n++)if(t[n].length>0&&t[n]!==e[n])return null;return e.length===t.length?[""]:e.slice(t.length)}function readPath(t,e,n){var r=t.pathname;if(n){var o=t.hash;r="#"===o[0]?o.slice(1):""}return removePrefix(parsePath(e),parsePath(r))}function parsePath(t){if(null==t)return[""];var e=t.split("/").map(function(t){return t.trim()}).filter(function(t){return t.length>0});return 0===e.length?[""]:e}function printRoutes(t){console.group("[ion-core] ROUTES["+t.length+"]");for(var e=function(t){var e=[];t.forEach(function(t){return e.push.apply(e,t.path)});var n=t.map(function(t){return t.id});generatePath(e),n.join(", ")},n=0,r=t;n<r.length;n++)e(r[n]);console.groupEnd()}function printRedirects(t){console.group("[ion-core] REDIRECTS["+t.length+"]");for(var e=0,n=t;e<n.length;e++){var r=n[e];r.to&&(generatePath(r.from),generatePath(r.to))}console.groupEnd()}function writeNavState(t,e,n,r,o){return void 0===o&&(o=!1),__WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var i,a,s,u;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(c){switch(c.label){case 0:return c.trys.push([0,6,,7]),i=searchNavNode(t),r>=e.length||!i?[2,o]:[4,i.componentOnReady()];case 1:return c.sent(),[4,i.setRouteId((a=e[r]).id,a.params,n)];case 2:return(s=c.sent()).changed&&(n=ROUTER_INTENT_NONE,o=!0),[4,writeNavState(s.element,e,n,r+1,o)];case 3:return o=c.sent(),s.markVisible?[4,s.markVisible()]:[3,5];case 4:c.sent(),c.label=5;case 5:return[2,o];case 6:return u=c.sent(),console.error(u),[2,!1];case 7:return[2]}})})}function readNavState(t){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var e,n,r,o;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(i){switch(i.label){case 0:e=[],r=t,i.label=1;case 1:return(n=searchNavNode(r))?[4,n.getRouteId()]:[3,3];case 2:return(o=i.sent())?(r=o.element,o.element=void 0,e.push(o),[3,4]):[3,5];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:e,outlet:n}]}})})}function waitUntilNavNode(t){return searchNavNode(t.document.body)?Promise.resolve():new Promise(function(e){t.addEventListener("ionNavWillLoad",e,{once:!0})})}var QUERY=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet";function searchNavNode(t){if(t)return t.matches(QUERY)?t:t.querySelector(QUERY)||void 0}function matchesRedirect(t,e){var n=e.from;if(void 0===e.to)return!1;if(n.length>t.length)return!1;for(var r=0;r<n.length;r++){var o=n[r];if("*"===o)return!0;if(o!==t[r])return!1}return n.length===t.length}function routeRedirect(t,e){return e.find(function(e){return matchesRedirect(t,e)})}function matchesIDs(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n&&t[r].toLowerCase()===e[r].id;r++);return r}function matchesPath(t,e){for(var n,r=new RouterSegments(t),o=!1,i=0;i<e.length;i++){var a=e[i].path;if(""===a[0])o=!0;else{for(var s=0,u=a;s<u.length;s++){var c=u[s],h=r.next();if(":"===c[0]){if(""===h)return null;((n=n||[])[i]||(n[i]={}))[c.slice(1)]=h}else if(h!==c)return null}o=!1}}return o&&o!==(""===r.next())?null:n?e.map(function(t,e){return{id:t.id,path:t.path,params:mergeParams(t.params,n[e])}}):e}function mergeParams(t,e){return!t&&e?e:t&&!e?t:t&&e?Object.assign({},t,e):void 0}function routerIDsToChain(t,e){for(var n=null,r=0,o=t.map(function(t){return t.id}),i=0,a=e;i<a.length;i++){var s=a[i],u=matchesIDs(o,s);u>r&&(n=s,r=u)}return n?n.map(function(e,n){return{id:e.id,path:e.path,params:mergeParams(e.params,t[n]&&t[n].params)}}):null}function routerPathToChain(t,e){for(var n=null,r=0,o=0,i=e;o<i.length;o++){var a=matchesPath(t,i[o]);if(null!==a){var s=computePriority(a);s>r&&(r=s,n=a)}}return n}function computePriority(t){for(var e=1,n=1,r=0,o=t;r<o.length;r++)for(var i=0,a=o[r].path;i<a.length;i++){var s=a[i];":"===s[0]?e+=Math.pow(1,n):""!==s&&(e+=Math.pow(2,n)),n++}return e}var RouterSegments=function(){function t(t){this.path=t.slice()}return t.prototype.next=function(){return this.path.length>0?this.path.shift():""},t}();function readRedirects(t){return Array.from(t.children).filter(function(t){return"ION-ROUTE-REDIRECT"===t.tagName}).map(function(t){var e=readProp(t,"to");return{from:parsePath(readProp(t,"from")),to:null==e?void 0:parsePath(e)}})}function readRoutes(t){return flattenRouterTree(readRouteNodes(t))}function readRouteNodes(t,e){return void 0===e&&(e=t),Array.from(e.children).filter(function(t){return"ION-ROUTE"===t.tagName&&t.component}).map(function(e){var n=readProp(e,"component");if(null==n)throw new Error("component missing in ion-route");return{path:parsePath(readProp(e,"url")),id:n.toLowerCase(),params:e.componentProps,children:readRouteNodes(t,e)}})}function readProp(t,e){return e in t?t[e]:t.hasAttribute(e)?t.getAttribute(e):null}function flattenRouterTree(t){for(var e=[],n=0,r=t;n<r.length;n++)flattenNode([],e,r[n]);return e}function flattenNode(t,e,n){var r=t.slice();if(r.push({id:n.id,path:n.path,params:n.params}),0!==n.children.length)for(var o=0,i=n.children;o<i.length;o++)flattenNode(r,e,i[o]);else e.push(r)}var Router=function(){function t(){this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}return t.prototype.componentWillLoad=function(){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(t){switch(t.label){case 0:return[4,waitUntilNavNode(this.win)];case 1:return t.sent(),[4,this.onRoutesChanged()];case 2:return t.sent(),[2]}})})},t.prototype.componentDidLoad=function(){this.win.addEventListener("ionRouteRedirectChanged",Object(__WEBPACK_IMPORTED_MODULE_2__chunk_6d7d2f8c_js__["i" /* j */])(this.onRedirectChanged.bind(this),10)),this.win.addEventListener("ionRouteDataChanged",Object(__WEBPACK_IMPORTED_MODULE_2__chunk_6d7d2f8c_js__["i" /* j */])(this.onRoutesChanged.bind(this),100))},t.prototype.onPopState=function(){var t=this.historyDirection(),e=this.getPath();return this.writeNavStateRoot(e,t)},t.prototype.onBackButton=function(t){var e=this;t.detail.register(0,function(){return e.back()})},t.prototype.push=function(t,e){void 0===e&&(e="forward"),t.startsWith(".")&&(t=new URL(t,this.win.location.href).pathname);var n=parsePath(t);return this.setPath(n,e),this.writeNavStateRoot(n,e)},t.prototype.back=function(){return this.win.history.back(),Promise.resolve(this.waitPromise)},t.prototype.printDebug=function(){this.getPath(),printRoutes(readRoutes(this.el)),printRedirects(readRedirects(this.el))},t.prototype.navChanged=function(t){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var e,n,r,o,i,a;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(s){switch(s.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, navChanged was cancelled"),[2,!1]):[4,readNavState(this.win.document.body)];case 1:return e=s.sent(),n=e.ids,r=e.outlet,o=readRoutes(this.el),(i=routerIDsToChain(n,o))?(a=chainToPath(i))?(this.setPath(a,t),[4,this.safeWriteNavState(r,i,ROUTER_INTENT_NONE,a,null,n.length)]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1]):(console.warn("[ion-router] no matching URL for ",n.map(function(t){return t.id})),[2,!1]);case 2:return s.sent(),[2,!0]}})})},t.prototype.onRedirectChanged=function(){var t=this.getPath();t&&routeRedirect(t,readRedirects(this.el))&&this.writeNavStateRoot(t,ROUTER_INTENT_NONE)},t.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),ROUTER_INTENT_NONE)},t.prototype.historyDirection=function(){var t=this.win;null===t.history.state&&(this.state++,t.history.replaceState(this.state,t.document.title,t.document.location&&t.document.location.href));var e=t.history.state,n=this.lastState;return this.lastState=e,e>n?ROUTER_INTENT_FORWARD:e<n?ROUTER_INTENT_BACK:ROUTER_INTENT_NONE},t.prototype.writeNavStateRoot=function(t,e){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var n,r,o,i,a;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(s){return t?(n=readRedirects(this.el),r=routeRedirect(t,n),o=null,r&&(this.setPath(r.to,e),o=r.from,t=r.to),i=readRoutes(this.el),(a=routerPathToChain(t,i))?[2,this.safeWriteNavState(this.win.document.body,a,e,t,o)]:(console.error("[ion-router] the path does not match any route"),[2,!1])):(console.error("[ion-router] URL is not part of the routing set"),[2,!1])})})},t.prototype.safeWriteNavState=function(t,e,n,r,o,i){return void 0===i&&(i=0),__WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var a,s,u;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(c){switch(c.label){case 0:return[4,this.lock()];case 1:a=c.sent(),s=!1,c.label=2;case 2:return c.trys.push([2,4,,5]),[4,this.writeNavState(t,e,n,r,o,i)];case 3:return s=c.sent(),[3,5];case 4:return u=c.sent(),console.error(u),[3,5];case 5:return a(),[2,s]}})})},t.prototype.lock=function(){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var t,e;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(n){switch(n.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise(function(t){return e=t}),void 0===t?[3,2]:[4,t];case 1:n.sent(),n.label=2;case 2:return[2,e]}})})},t.prototype.writeNavState=function(t,e,n,r,o,i){return void 0===i&&(i=0),__WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var a,s;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(u){switch(u.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, transition was cancelled"),[2,!1]):(this.busy=!0,(a=this.routeChangeEvent(r,o))&&this.ionRouteWillChange.emit(a),[4,writeNavState(t,e,n,i)]);case 1:return s=u.sent(),this.busy=!1,a&&this.ionRouteDidChange.emit(a),[2,s]}})})},t.prototype.setPath=function(t,e){this.state++,writePath(this.win.history,this.root,this.useHash,t,e,this.state)},t.prototype.getPath=function(){return readPath(this.win.location,this.root,this.useHash)},t.prototype.routeChangeEvent=function(t,e){var n=this.previousPath,r=generatePath(t);return this.previousPath=r,r===n?null:{from:n,redirectedFrom:e?generatePath(e):null,to:r}},Object.defineProperty(t,"is",{get:function(){return"ion-router"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{back:{method:!0},config:{context:"config"},el:{elementRef:!0},navChanged:{method:!0},printDebug:{method:!0},push:{method:!0},queue:{context:"queue"},root:{type:String,attr:"root"},useHash:{type:Boolean,attr:"use-hash"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionRouteWillChange",method:"ionRouteWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionRouteDidChange",method:"ionRouteDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"window:popstate",method:"onPopState"},{name:"document:ionBackButton",method:"onBackButton"}]},enumerable:!0,configurable:!0}),t}(),RouterOutlet=function(){function t(){this.animated=!0}return t.prototype.swipeHandlerChanged=function(){this.gesture&&this.gesture.setDisabled(void 0===this.swipeHandler)},t.prototype.componentWillLoad=function(){this.ionNavWillLoad.emit()},t.prototype.componentDidLoad=function(){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var t,e=this;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(n){switch(n.label){case 0:return t=this,[4,__webpack_require__.e/* import() */(166/* duplicate */).then(__webpack_require__.bind(null, 766))];case 1:return t.gesture=n.sent().createSwipeBackGesture(this.el,this.queue,function(){return!!e.swipeHandler&&e.swipeHandler.canStart()},function(){return e.swipeHandler&&e.swipeHandler.onStart()},function(t){return e.ani&&e.ani.progressStep(t)},function(t,n,r){e.ani&&e.ani.progressEnd(t,n,r),e.swipeHandler&&e.swipeHandler.onEnd(t)}),this.swipeHandlerChanged(),[2]}})})},t.prototype.componentDidUnload=function(){this.activeEl=this.activeComponent=void 0,this.gesture&&(this.gesture.destroy(),this.gesture=void 0)},t.prototype.commit=function(t,e,n){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var r,o,i;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(a){switch(a.label){case 0:return[4,this.lock()];case 1:r=a.sent(),o=!1,a.label=2;case 2:return a.trys.push([2,4,,5]),[4,this.transition(t,e,n)];case 3:return o=a.sent(),[3,5];case 4:return i=a.sent(),console.error(i),[3,5];case 5:return r(),[2,o]}})})},t.prototype.setRouteId=function(t,e,n){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(r){switch(r.label){case 0:return[4,this.setRoot(t,e,{duration:"root"===n?0:void 0,direction:"back"===n?"back":"forward"})];case 1:return[2,{changed:r.sent(),element:this.activeEl}]}})})},t.prototype.getRouteId=function(){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var t;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(e){return[2,(t=this.activeEl)?{id:t.tagName,element:t}:void 0]})})},t.prototype.setRoot=function(t,e,n){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var r,o;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(i){switch(i.label){case 0:return this.activeComponent===t?[2,!1]:(r=this.activeEl,[4,Object(__WEBPACK_IMPORTED_MODULE_3__chunk_99929188_js__["a"])(this.delegate,this.el,t,["ion-page","ion-page-invisible"],e)]);case 1:return o=i.sent(),this.activeComponent=t,this.activeEl=o,[4,this.commit(o,r,n)];case 2:return i.sent(),[4,Object(__WEBPACK_IMPORTED_MODULE_3__chunk_99929188_js__["b"])(this.delegate,r)];case 3:return i.sent(),[2,!0]}})})},t.prototype.transition=function(t,e,n){return void 0===n&&(n={}),__WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var r,o,i,a,s,u,c,h=this;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(l){switch(l.label){case 0:return e===t?[2,!1]:(this.ionNavWillChange.emit(),o=(r=this).mode,i=r.queue,a=r.win,s=r.el,u=this.animated&&this.config.getBoolean("animated",!0),c=this.animation||n.animationBuilder||this.config.get("navAnimation"),[4,Object(__WEBPACK_IMPORTED_MODULE_5__chunk_19910bac_js__["c"])(Object.assign({mode:o,queue:i,animated:u,animationBuilder:c,window:a,enteringEl:t,leavingEl:e,baseEl:s,progressCallback:n.progressAnimation?function(t){return h.ani=t}:void 0},n))]);case 1:return l.sent(),this.ionNavDidChange.emit(),[2,!0]}})})},t.prototype.lock=function(){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var t,e;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(n){switch(n.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise(function(t){return e=t}),void 0===t?[3,2]:[4,t];case 1:n.sent(),n.label=2;case 2:return[2,e]}})})},t.prototype.render=function(){return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-router-outlet"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animation:{type:"Any",attr:"animation"},commit:{method:!0},config:{context:"config"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},getRouteId:{method:!0},mode:{type:String,attr:"mode"},queue:{context:"queue"},setRouteId:{method:!0},swipeHandler:{type:"Any",attr:"swipe-handler",watchCallbacks:["swipeHandlerChanged"]},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!1,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!1,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-router-outlet-h{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}"},enumerable:!0,configurable:!0}),t}();

/***/ }),

/***/ 752:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = __extends;
/* unused harmony export __assign */
/* unused harmony export __rest */
/* unused harmony export __decorate */
/* unused harmony export __param */
/* unused harmony export __metadata */
/* harmony export (immutable) */ __webpack_exports__["a"] = __awaiter;
/* harmony export (immutable) */ __webpack_exports__["c"] = __generator;
/* unused harmony export __exportStar */
/* unused harmony export __values */
/* unused harmony export __read */
/* unused harmony export __spread */
/* unused harmony export __await */
/* unused harmony export __makeTemplateObject */
/* unused harmony export __importStar */
/* unused harmony export __importDefault */
// REV: 9dd9aa322c893e5e0b3f1609b1126314ccf37bbb

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
          t[p[i]] = s[p[i]];
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

function __exportStar(m, exports) {
  for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
  var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
  if (m) return m.call(o);
  return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result.default = mod;
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

/***/ }),

/***/ 754:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return rIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return now; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hasShadowDom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return findItemLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return renderHiddenInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return debounceEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isEndSide; });
/* unused harmony export h */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return clamp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return pointerCoord; });
function rIC(e){"requestIdleCallback"in window?window.requestIdleCallback(e):setTimeout(e,32)}function hasShadowDom(e){return!!e.shadowRoot&&!!e.attachShadow}function findItemLabel(e){var n=e.closest("ion-item");return n?n.querySelector("ion-label"):null}function renderHiddenInput(e,n,t,a,r){if(e||hasShadowDom(n)){var o=n.querySelector("input.aux-input");o||((o=n.ownerDocument.createElement("input")).type="hidden",o.classList.add("aux-input"),n.appendChild(o)),o.disabled=r,o.name=t,o.value=a||""}}function clamp(e,n,t){return Math.max(e,Math.min(n,t))}function assert(e,n){if(!e){var t="ASSERT: "+n;throw console.error(t),new Error(t)}}function now(e){return e.timeStamp||Date.now()}function pointerCoord(e){if(e){var n=e.changedTouches;if(n&&n.length>0){var t=n[0];return{x:t.clientX,y:t.clientY}}if(void 0!==e.pageX)return{x:e.pageX,y:e.pageY}}return{x:0,y:0}}function isEndSide(e,n){var t="rtl"===e.document.dir;switch(n){case"start":return t;case"end":return!t;default:throw new Error('"'+n+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function debounceEvent(e,n){var t=e._original||e;return{_original:e,emit:debounce(t.emit.bind(t),n)}}function debounce(e,n){var t;return void 0===n&&(n=0),function(){for(var a=[],r=0;r<arguments.length;r++)a[r]=arguments[r];clearTimeout(t),t=setTimeout.apply(void 0,[e,n].concat(a))}}

/***/ }),

/***/ 759:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LIFECYCLE_WILL_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LIFECYCLE_WILL_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LIFECYCLE_DID_ENTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return LIFECYCLE_DID_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return LIFECYCLE_WILL_UNLOAD; });
var LIFECYCLE_WILL_ENTER="ionViewWillEnter",LIFECYCLE_DID_ENTER="ionViewDidEnter",LIFECYCLE_WILL_LEAVE="ionViewWillLeave",LIFECYCLE_DID_LEAVE="ionViewDidLeave",LIFECYCLE_WILL_UNLOAD="ionViewWillUnload";

/***/ }),

/***/ 760:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return attachComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return detachComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__ = __webpack_require__(752);
function attachComponent(e,t,n,o,r){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var a;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(i){switch(i.label){case 0:if(e)return[2,e.attachViewToDom(t,n,r,o)];if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n,o&&o.forEach(function(e){return a.classList.add(e)}),r&&Object.assign(a,r),t.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2,a]}})})}function detachComponent(e,t){if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}

/***/ }),

/***/ 762:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return deepReady; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lifecycle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return transition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return setPageHidden; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chunk_90d954cd_js__ = __webpack_require__(759);
var iosTransitionAnimation=function(){return __webpack_require__.e/* import() */(174).then(__webpack_require__.bind(null, 763))},mdTransitionAnimation=function(){return __webpack_require__.e/* import() */(173).then(__webpack_require__.bind(null, 764))};function transition(e){return new Promise(function(n,i){e.queue.write(function(){beforeTransition(e),runTransition(e).then(function(i){i.animation&&i.animation.destroy(),afterTransition(e),n(i)},function(n){afterTransition(e),i(n)})})})}function beforeTransition(e){var n=e.enteringEl,i=e.leavingEl;setZIndex(n,i,e.direction),e.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),setPageHidden(n,!1),i&&setPageHidden(i,!1)}function runTransition(e){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var n;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(i){switch(i.label){case 0:return[4,getAnimationBuilder(e)];case 1:return[2,(n=i.sent())?animation(n,e):noAnimation(e)]}})})}function afterTransition(e){var n=e.leavingEl;e.enteringEl.classList.remove("ion-page-invisible"),void 0!==n&&n.classList.remove("ion-page-invisible")}function getAnimationBuilder(e){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var n;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(i){switch(i.label){case 0:return e.leavingEl&&e.animated&&0!==e.duration?e.animationBuilder?[2,e.animationBuilder]:"ios"!==e.mode?[3,2]:[4,iosTransitionAnimation()]:[2,void 0];case 1:return n=i.sent().iosTransitionAnimation,[3,4];case 2:return[4,mdTransitionAnimation()];case 3:n=i.sent().mdTransitionAnimation,i.label=4;case 4:return[2,n]}})})}function animation(e,n){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var i;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(t){switch(t.label){case 0:return[4,waitForReady(n,!0)];case 1:return t.sent(),[4,__webpack_require__.e/* import() */(165/* duplicate */).then(__webpack_require__.bind(null, 757)).then(function(i){return i.create(e,n.baseEl,n)})];case 2:return i=t.sent(),fireWillEvents(n.enteringEl,n.leavingEl),[4,playTransition(i,n)];case 3:return t.sent(),n.progressCallback&&n.progressCallback(void 0),i.hasCompleted&&fireDidEvents(n.enteringEl,n.leavingEl),[2,{hasCompleted:i.hasCompleted,animation:i}]}})})}function noAnimation(e){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var n,i;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(t){switch(t.label){case 0:return n=e.enteringEl,i=e.leavingEl,[4,waitForReady(e,!1)];case 1:return t.sent(),fireWillEvents(n,i),fireDidEvents(n,i),[2,{hasCompleted:!0}]}})})}function waitForReady(e,n){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var i;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(t){switch(t.label){case 0:return i=(void 0!==e.deepWait?e.deepWait:n)?[deepReady(e.enteringEl),deepReady(e.leavingEl)]:[shallowReady(e.enteringEl),shallowReady(e.leavingEl)],[4,Promise.all(i)];case 1:return t.sent(),[4,notifyViewReady(e.viewIsReady,e.enteringEl)];case 2:return t.sent(),[2]}})})}function notifyViewReady(e,n){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(i){switch(i.label){case 0:return e?[4,e(n)]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2]}})})}function playTransition(e,n){var i=n.progressCallback,t=new Promise(function(n){return e.onFinish(n)});return i?(e.progressStart(),i(e)):e.play(),t}function fireWillEvents(e,n){lifecycle(n,__WEBPACK_IMPORTED_MODULE_1__chunk_90d954cd_js__["a"]),lifecycle(e,__WEBPACK_IMPORTED_MODULE_1__chunk_90d954cd_js__["b"])}function fireDidEvents(e,n){lifecycle(e,__WEBPACK_IMPORTED_MODULE_1__chunk_90d954cd_js__["c"]),lifecycle(n,__WEBPACK_IMPORTED_MODULE_1__chunk_90d954cd_js__["d"])}function lifecycle(e,n){if(e){var i=new CustomEvent(n,{bubbles:!1,cancelable:!1});e.dispatchEvent(i)}}function shallowReady(e){return e&&e.componentOnReady?e.componentOnReady():Promise.resolve()}function deepReady(e){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var n;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(i){switch(i.label){case 0:return(n=e)?null==n.componentOnReady?[3,2]:[4,n.componentOnReady()]:[3,4];case 1:if(null!=i.sent())return[2];i.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(deepReady))];case 3:i.sent(),i.label=4;case 4:return[2]}})})}function setPageHidden(e,n){n?(e.setAttribute("aria-hidden","true"),e.classList.add("ion-page-hidden")):(e.hidden=!1,e.removeAttribute("aria-hidden"),e.classList.remove("ion-page-hidden"))}function setZIndex(e,n,i){void 0!==e&&(e.style.zIndex="back"===i?"99":"101"),void 0!==n&&(n.style.zIndex="100")}

/***/ })

});
//# sourceMappingURL=17.js.map