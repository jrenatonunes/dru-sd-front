webpackJsonp([3],{

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonPopover", function() { return Popover; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonPopoverController", function() { return PopoverController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_core_js__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chunk_d97dc981_js__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chunk_2f96b3d2_js__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chunk_99929188_js__ = __webpack_require__(760);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__chunk_90d954cd_js__ = __webpack_require__(759);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chunk_19910bac_js__ = __webpack_require__(762);
function iosEnterAnimation(e,t,o){var n="top",r="left",i=t.querySelector(".popover-content"),s=i.getBoundingClientRect(),a=s.width,l=s.height,p=t.ownerDocument.defaultView.innerWidth,c=t.ownerDocument.defaultView.innerHeight,d=o&&o.target&&o.target.getBoundingClientRect(),m=null!=d&&"top"in d?d.top:c/2-l/2,u=null!=d&&"left"in d?d.left:p/2,f=d&&d.width||0,v=d&&d.height||0,h=t.querySelector(".popover-arrow"),y=h.getBoundingClientRect(),b=y.width,P=y.height;null==d&&(h.style.display="none");var D={top:m+v,left:u+f/2-b/2},g={top:m+v+(P-1),left:u+f/2-a/2},O=!1,_=!1;g.left<POPOVER_IOS_BODY_PADDING+25?(O=!0,g.left=POPOVER_IOS_BODY_PADDING):a+POPOVER_IOS_BODY_PADDING+g.left+25>p&&(_=!0,g.left=p-a-POPOVER_IOS_BODY_PADDING,r="right"),m+v+l>c&&m-l>0?(D.top=m-(P+1),g.top=m-l-(P-1),t.className=t.className+" popover-bottom",n="bottom"):m+v+l>c&&(i.style.bottom=POPOVER_IOS_BODY_PADDING+"%"),h.style.top=D.top+"px",h.style.left=D.left+"px",i.style.top=g.top+"px",i.style.left=g.left+"px",O&&(i.style.left="calc("+g.left+"px + var(--ion-safe-area-left, 0px))"),_&&(i.style.left="calc("+g.left+"px - var(--ion-safe-area-right, 0px))"),i.style.transformOrigin=n+" "+r;var w=new e,E=new e;E.addElement(t.querySelector("ion-backdrop")),E.fromTo("opacity",.01,.08);var A=new e;return A.addElement(t.querySelector(".popover-wrapper")),A.fromTo("opacity",.01,1),Promise.resolve(w.addElement(t).easing("ease").duration(100).add(E).add(A))}var POPOVER_IOS_BODY_PADDING=5;function iosLeaveAnimation(e,t){var o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),n.fromTo("opacity",.08,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(n).add(r))}function mdEnterAnimation(e,t,o){var n=t.ownerDocument,r="rtl"===n.dir,i="top",s=r?"right":"left",a=t.querySelector(".popover-content"),l=a.getBoundingClientRect(),p=l.width,c=l.height,d=n.defaultView.innerWidth,m=n.defaultView.innerHeight,u=o&&o.target&&o.target.getBoundingClientRect(),f=null!=u&&"bottom"in u?u.bottom:m/2-c/2,v=u&&u.height||0,h={top:f,left:null!=u&&"left"in u?r?u.left-p+u.width:u.left:d/2-p/2};h.left<POPOVER_MD_BODY_PADDING?(h.left=POPOVER_MD_BODY_PADDING,s="left"):p+POPOVER_MD_BODY_PADDING+h.left>d&&(h.left=d-p-POPOVER_MD_BODY_PADDING,s="right"),f+v+c>m&&f-c>0?(h.top=f-c-v,t.className=t.className+" popover-bottom",i="bottom"):f+v+c>m&&(a.style.bottom=POPOVER_MD_BODY_PADDING+"px"),a.style.top=h.top+"px",a.style.left=h.left+"px",a.style.transformOrigin=i+" "+s;var y=new e,b=new e;b.addElement(t.querySelector("ion-backdrop")),b.fromTo("opacity",.01,.32);var P=new e;P.addElement(t.querySelector(".popover-wrapper")),P.fromTo("opacity",.01,1);var D=new e;D.addElement(t.querySelector(".popover-content")),D.fromTo("scale",.001,1);var g=new e;return g.addElement(t.querySelector(".popover-viewport")),g.fromTo("opacity",.01,1),Promise.resolve(y.addElement(t).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).add(b).add(P).add(D).add(g))}var POPOVER_MD_BODY_PADDING=12;function mdLeaveAnimation(e,t){var o=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var r=new e;return r.addElement(t.querySelector(".popover-wrapper")),r.fromTo("opacity",.99,0),n.fromTo("opacity",.32,0),Promise.resolve(o.addElement(t).easing("ease").duration(500).add(n).add(r))}var Popover=function(){function e(){this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0}return e.prototype.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),this.dismiss()},e.prototype.onBackdropTap=function(){this.dismiss(void 0,__WEBPACK_IMPORTED_MODULE_2__chunk_d97dc981_js__["a"])},e.prototype.lifecycle=function(e){var t=this.usersElement,o=LIFECYCLE_MAP[e.type];if(t&&o){var n=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});t.dispatchEvent(n)}},e.prototype.present=function(){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var e,t,o;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(n){switch(n.label){case 0:if(this.presented)return[2];if(!(e=this.el.querySelector(".popover-content")))throw new Error("container is undefined");return t=Object.assign({},this.componentProps,{popover:this.el}),o=this,[4,Object(__WEBPACK_IMPORTED_MODULE_4__chunk_99929188_js__["a"])(this.delegate,e,this.component,["popover-viewport",this.el["s-sc"]],t)];case 1:return o.usersElement=n.sent(),[4,Object(__WEBPACK_IMPORTED_MODULE_6__chunk_19910bac_js__["a"])(this.usersElement)];case 2:return n.sent(),[2,Object(__WEBPACK_IMPORTED_MODULE_2__chunk_d97dc981_js__["c"])(this,"popoverEnter",iosEnterAnimation,mdEnterAnimation,this.event)]}})})},e.prototype.dismiss=function(e,t){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var o;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(n){switch(n.label){case 0:return[4,Object(__WEBPACK_IMPORTED_MODULE_2__chunk_d97dc981_js__["d"])(this,e,t,"popoverLeave",iosLeaveAnimation,mdLeaveAnimation,this.event)];case 1:return(o=n.sent())?[4,Object(__WEBPACK_IMPORTED_MODULE_4__chunk_99929188_js__["b"])(this.delegate,this.usersElement)]:[3,3];case 2:n.sent(),n.label=3;case 3:return[2,o]}})})},e.prototype.onDidDismiss=function(){return Object(__WEBPACK_IMPORTED_MODULE_2__chunk_d97dc981_js__["e"])(this.el,"ionPopoverDidDismiss")},e.prototype.onWillDismiss=function(){return Object(__WEBPACK_IMPORTED_MODULE_2__chunk_d97dc981_js__["e"])(this.el,"ionPopoverWillDismiss")},e.prototype.hostData=function(){var e;return{"aria-modal":"true","no-router":!0,style:{zIndex:2e4+this.overlayIndex},class:Object.assign({},Object(__WEBPACK_IMPORTED_MODULE_3__chunk_2f96b3d2_js__["a"])(this.cssClass),(e={},e[""+this.mode]=!0,e["popover-translucent"]=this.translucent,e))}},e.prototype.render=function(){return[Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop}),Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("div",{class:"popover-wrapper"},Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("div",{class:"popover-arrow"}),Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("div",{class:"popover-content"}))]},Object.defineProperty(e,"is",{get:function(){return"ion-popover"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},component:{type:String,attr:"component"},componentProps:{type:"Any",attr:"component-props"},config:{context:"config"},cssClass:{type:String,attr:"css-class"},delegate:{type:"Any",attr:"delegate"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},event:{type:"Any",attr:"event"},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},showBackdrop:{type:Boolean,attr:"show-backdrop"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionPopoverDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionPopoverDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionDismiss",method:"onDismiss"},{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionPopoverDidPresent",method:"lifecycle"},{name:"ionPopoverWillPresent",method:"lifecycle"},{name:"ionPopoverWillDismiss",method:"lifecycle"},{name:"ionPopoverDidDismiss",method:"lifecycle"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-popover-ios-h{--background:var(--ion-background-color,#fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:var(--ion-text-color,#000);z-index:1000}.overlay-hidden.sc-ion-popover-ios-h{display:none}.popover-wrapper.sc-ion-popover-ios{opacity:0;z-index:10}.popover-content.sc-ion-popover-ios{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport.sc-ion-popover-ios{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px}.sc-ion-popover-ios-h{--width:200px;--max-height:90%;--box-shadow:none}.popover-content.sc-ion-popover-ios{border-radius:10px}.popover-arrow.sc-ion-popover-ios{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow.sc-ion-popover-ios:after{left:3px;top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:\"\";z-index:10}[dir=rtl].sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios:after, [dir=rtl]   .sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios:after, [dir=rtl].sc-ion-popover-ios   .popover-arrow.sc-ion-popover-ios:after{left:unset;right:unset;right:3px}.popover-bottom.sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios{top:auto;bottom:-10px}.popover-bottom.sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios:after{top:-6px}.popover-translucent.sc-ion-popover-ios-h   .popover-arrow.sc-ion-popover-ios:after, .popover-translucent.sc-ion-popover-ios-h   .popover-content.sc-ion-popover-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}(),LIFECYCLE_MAP={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"},PopoverController=function(){function e(){}return e.prototype.create=function(e){return Object(__WEBPACK_IMPORTED_MODULE_2__chunk_d97dc981_js__["f"])(this.doc.createElement("ion-popover"),e)},e.prototype.dismiss=function(e,t,o){return Object(__WEBPACK_IMPORTED_MODULE_2__chunk_d97dc981_js__["g"])(this.doc,e,t,"ion-popover",o)},e.prototype.getTop=function(){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(e){return[2,Object(__WEBPACK_IMPORTED_MODULE_2__chunk_d97dc981_js__["h"])(this.doc,"ion-popover")]})})},Object.defineProperty(e,"is",{get:function(){return"ion-popover-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}();

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

/***/ 753:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getClassMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return openURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createColorClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return hostContext; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__ = __webpack_require__(752);
function hostContext(t,r){return null!==r.closest(t)}function createColorClasses(t){var r;return"string"==typeof t&&t.length>0?((r={"ion-color":!0})["ion-color-"+t]=!0,r):void 0}function getClassList(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t}):[]}function getClassMap(t){var r={};return getClassList(t).forEach(function(t){return r[t]=!0}),r}var SCHEME=/^[a-z][a-z0-9+\-.]*:/;function openURL(t,r,n,e){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var o;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(s){switch(s.label){case 0:return null==r||"#"===r[0]||SCHEME.test(r)?[3,2]:(o=t.document.querySelector("ion-router"))?(null!=n&&n.preventDefault(),[4,o.componentOnReady()]):[3,2];case 1:return s.sent(),[2,o.push(r,e)];case 2:return[2,!1]}})})}

/***/ }),

/***/ 755:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BACKDROP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return present; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dismiss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return eventMethod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return dismissOverlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getOverlay; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__ = __webpack_require__(752);
var lastId=0;function createOverlay(e,t){var n=e.ownerDocument;connectListeners(n),Object.assign(e,t),e.classList.add("overlay-hidden");var i=lastId++;return e.overlayIndex=i,e.hasAttribute("id")||(e.id="ion-overlay-"+i),getAppRoot(n).appendChild(e),e.componentOnReady()}function connectListeners(e){0===lastId&&(lastId=1,e.addEventListener("focusin",function(t){var n=getOverlay(e);if(n&&n.backdropDismiss&&!isDescendant(n,t.target)){var i=n.querySelector("input,button");i&&i.focus()}}),e.addEventListener("ionBackButton",function(t){var n=getOverlay(e);n&&n.backdropDismiss&&t.detail.register(100,function(){return n.dismiss(void 0,BACKDROP)})}),e.addEventListener("keyup",function(t){if("Escape"===t.key){var n=getOverlay(e);n&&n.backdropDismiss&&n.dismiss(void 0,BACKDROP)}}))}function dismissOverlay(e,t,n,i,r){var a=getOverlay(e,i,r);return a?a.dismiss(t,n):Promise.reject("overlay does not exist")}function getOverlays(e,t){var n=Array.from(getAppRoot(e).children).filter(function(e){return e.overlayIndex>0});return void 0===t?n:(t=t.toUpperCase(),n.filter(function(e){return e.tagName===t}))}function getOverlay(e,t,n){var i=getOverlays(e,t);return void 0===n?i[i.length-1]:i.find(function(e){return e.id===n})}function present(e,t,n,i,r){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var a;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(o){switch(o.label){case 0:return e.presented?[2]:(e.presented=!0,e.willPresent.emit(),a=e.enterAnimation?e.enterAnimation:e.config.get(t,"ios"===e.mode?n:i),[4,overlayAnimation(e,a,e.el,r)]);case 1:return o.sent()&&e.didPresent.emit(),[2]}})})}function dismiss(e,t,n,i,r,a,o){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var s,c;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(d){switch(d.label){case 0:if(!e.presented)return[2,!1];e.presented=!1,d.label=1;case 1:return d.trys.push([1,3,,4]),e.willDismiss.emit({data:t,role:n}),s=e.leaveAnimation?e.leaveAnimation:e.config.get(i,"ios"===e.mode?r:a),[4,overlayAnimation(e,s,e.el,o)];case 2:return d.sent(),e.didDismiss.emit({data:t,role:n}),[3,4];case 3:return c=d.sent(),console.error(c),[3,4];case 4:return e.el.remove(),[2,!0]}})})}function getAppRoot(e){return e.querySelector("ion-app")||e.body}function overlayAnimation(e,t,n,i){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var r,a,o,s;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(c){switch(c.label){case 0:return e.animation?(e.animation.destroy(),e.animation=void 0,[2,!1]):(n.classList.remove("overlay-hidden"),r=n.shadowRoot||e.el,o=e,[4,__webpack_require__.e/* import() */(165/* duplicate */).then(__webpack_require__.bind(null, 757)).then(function(e){return e.create(t,r,i)})]);case 1:return a=o.animation=c.sent(),e.animation=a,e.animated&&e.config.getBoolean("animated",!0)||a.duration(0),e.keyboardClose&&a.beforeAddWrite(function(){var e=n.ownerDocument.activeElement;e&&e.matches("input, ion-input, ion-textarea")&&e.blur()}),[4,a.playAsync()];case 2:return c.sent(),s=a.hasCompleted,a.destroy(),e.animation=void 0,[2,s]}})})}function eventMethod(e,t){var n,i=new Promise(function(e){return n=e});return onceEvent(e,t,function(e){n(e.detail)}),i}function onceEvent(e,t,n){var i=function(r){e.removeEventListener(t,i),n(r)};e.addEventListener(t,i)}function isCancel(e){return"cancel"===e||e===BACKDROP}function isDescendant(e,t){for(;t;){if(t===e)return!0;t=t.parentElement}return!1}var BACKDROP="backdrop";

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
//# sourceMappingURL=3.js.map