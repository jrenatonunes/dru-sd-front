webpackJsonp([19],{

/***/ 724:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonAlert", function() { return Alert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonAlertController", function() { return AlertController; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__ = __webpack_require__(752);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_core_js__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chunk_d97dc981_js__ = __webpack_require__(755);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__chunk_2f96b3d2_js__ = __webpack_require__(753);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__chunk_8b4dfddb_js__ = __webpack_require__(758);
function iosEnterAnimation(e,t){var r=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var a=new e;a.addElement(t.querySelector(".alert-wrapper")),n.fromTo("opacity",.01,.3),a.fromTo("opacity",.01,1).fromTo("scale",1.1,1);var i=r.addElement(t).easing("ease-in-out").duration(200).add(n).add(a);return Promise.resolve(i)}function iosLeaveAnimation(e,t){var r=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var a=new e;a.addElement(t.querySelector(".alert-wrapper")),n.fromTo("opacity",.3,0),a.fromTo("opacity",.99,0).fromTo("scale",1,.9);var i=r.addElement(t).easing("ease-in-out").duration(200).add(n).add(a);return Promise.resolve(i)}function mdEnterAnimation(e,t){var r=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var a=new e;return a.addElement(t.querySelector(".alert-wrapper")),n.fromTo("opacity",.01,.32),a.fromTo("opacity",.01,1).fromTo("scale",.9,1),Promise.resolve(r.addElement(t).easing("ease-in-out").duration(150).add(n).add(a))}function mdLeaveAnimation(e,t){var r=new e,n=new e;n.addElement(t.querySelector("ion-backdrop"));var a=new e;return a.addElement(t.querySelector(".alert-wrapper")),n.fromTo("opacity",.32,0),a.fromTo("opacity",.99,0),Promise.resolve(r.addElement(t).easing("ease-in-out").duration(150).add(n).add(a))}var Alert=function(){function e(){this.processedInputs=[],this.processedButtons=[],this.presented=!1,this.keyboardClose=!0,this.buttons=[],this.inputs=[],this.backdropDismiss=!0,this.translucent=!1,this.animated=!0}return e.prototype.buttonsChanged=function(){this.processedButtons=this.buttons.map(function(e){return"string"==typeof e?{text:e,role:"cancel"===e.toLowerCase()?"cancel":void 0}:e})},e.prototype.inputsChanged=function(){var e=this,t=this.inputs,r=new Set(t.map(function(e){return e.type}));r.has("checkbox")&&r.has("radio")&&console.warn("Alert cannot mix input types: "+Array.from(r.values()).join("/")+". Please see alert docs for more info."),this.inputType=r.values().next().value,this.processedInputs=t.map(function(t,r){return{type:t.type||"text",name:t.name||""+r,placeholder:t.placeholder||"",value:t.value,label:t.label,checked:!!t.checked,disabled:!!t.disabled,id:t.id||"alert-input-"+e.overlayIndex+"-"+r,handler:t.handler,min:t.min,max:t.max}})},e.prototype.componentWillLoad=function(){this.inputsChanged(),this.buttonsChanged()},e.prototype.onBackdropTap=function(){this.dismiss(void 0,__WEBPACK_IMPORTED_MODULE_2__chunk_d97dc981_js__["a"])},e.prototype.dispatchCancelHandler=function(e){if(Object(__WEBPACK_IMPORTED_MODULE_2__chunk_d97dc981_js__["b"])(e.detail.role)){var t=this.processedButtons.find(function(e){return"cancel"===e.role});this.callButtonHandler(t)}},e.prototype.present=function(){return Object(__WEBPACK_IMPORTED_MODULE_2__chunk_d97dc981_js__["c"])(this,"alertEnter",iosEnterAnimation,mdEnterAnimation)},e.prototype.dismiss=function(e,t){return Object(__WEBPACK_IMPORTED_MODULE_2__chunk_d97dc981_js__["d"])(this,e,t,"alertLeave",iosLeaveAnimation,mdLeaveAnimation)},e.prototype.onDidDismiss=function(){return Object(__WEBPACK_IMPORTED_MODULE_2__chunk_d97dc981_js__["e"])(this.el,"ionAlertDidDismiss")},e.prototype.onWillDismiss=function(){return Object(__WEBPACK_IMPORTED_MODULE_2__chunk_d97dc981_js__["e"])(this.el,"ionAlertWillDismiss")},e.prototype.rbClick=function(e){for(var t=0,r=this.processedInputs;t<r.length;t++){var n=r[t];n.checked=n===e}this.activeId=e.id,e.handler&&e.handler(e),this.el.forceUpdate()},e.prototype.cbClick=function(e){e.checked=!e.checked,e.handler&&e.handler(e),this.el.forceUpdate()},e.prototype.buttonClick=function(e){var t=e.role,r=this.getValues();if(Object(__WEBPACK_IMPORTED_MODULE_2__chunk_d97dc981_js__["b"])(t))return this.dismiss({values:r},t);var n=this.callButtonHandler(e,r);return!1!==n?this.dismiss(Object.assign({values:r},n),e.role):Promise.resolve(!1)},e.prototype.callButtonHandler=function(e,t){if(e&&e.handler){var r=e.handler(t);if(!1===r)return!1;if("object"==typeof r)return r}return{}},e.prototype.getValues=function(){if(0!==this.processedInputs.length){if("radio"===this.inputType){var e=this.processedInputs.find(function(e){return!!e.checked});return e?e.value:void 0}if("checkbox"===this.inputType)return this.processedInputs.filter(function(e){return e.checked}).map(function(e){return e.value});var t={};return this.processedInputs.forEach(function(e){t[e.name]=e.value||""}),t}},e.prototype.renderAlertInputs=function(e){switch(this.inputType){case"checkbox":return this.renderCheckbox(e);case"radio":return this.renderRadio(e);default:return this.renderInput(e)}},e.prototype.renderCheckbox=function(e){var t=this,r=this.processedInputs;return 0===r.length?null:Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("div",{class:"alert-checkbox-group","aria-labelledby":e},r.map(function(e){return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("button",{type:"button",onClick:function(){return t.cbClick(e)},"aria-checked":""+e.checked,id:e.id,disabled:e.disabled,tabIndex:0,role:"checkbox",class:"alert-tappable alert-checkbox alert-checkbox-button ion-focusable"},Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("div",{class:"alert-button-inner"},Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("div",{class:"alert-checkbox-icon"},Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("div",{class:"alert-checkbox-inner"})),Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("div",{class:"alert-checkbox-label"},e.label)),"md"===t.mode&&Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("ion-ripple-effect",null))}))},e.prototype.renderRadio=function(e){var t=this,r=this.processedInputs;return 0===r.length?null:Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("div",{class:"alert-radio-group",role:"radiogroup","aria-labelledby":e,"aria-activedescendant":this.activeId},r.map(function(e){return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("button",{type:"button",onClick:function(){return t.rbClick(e)},"aria-checked":""+e.checked,disabled:e.disabled,id:e.id,tabIndex:0,class:"alert-radio-button alert-tappable alert-radio ion-focusable",role:"radio"},Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("div",{class:"alert-button-inner"},Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("div",{class:"alert-radio-icon"},Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("div",{class:"alert-radio-inner"})),Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("div",{class:"alert-radio-label"},e.label)))}))},e.prototype.renderInput=function(e){var t=this.processedInputs;return 0===t.length?null:Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("div",{class:"alert-input-group","aria-labelledby":e},t.map(function(e){return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("div",{class:"alert-input-wrapper"},Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("input",{placeholder:e.placeholder,value:e.value,type:e.type,min:e.min,max:e.max,onInput:function(t){return e.value=t.target.value},id:e.id,disabled:e.disabled,tabIndex:0,class:"alert-input"}))}))},e.prototype.hostData=function(){var e;return{role:"dialog","aria-modal":"true",style:{zIndex:2e4+this.overlayIndex},class:Object.assign({},Object(__WEBPACK_IMPORTED_MODULE_3__chunk_2f96b3d2_js__["a"])(this.cssClass),(e={},e[""+this.mode]=!0,e["alert-translucent"]=this.translucent,e))}},e.prototype.renderAlertButtons=function(){var e=this,t=this.processedButtons;return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("div",{class:{"alert-button-group":!0,"alert-button-group-vertical":t.length>2}},t.map(function(t){return Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("button",{type:"button",class:buttonClass(t),tabIndex:0,onClick:function(){return e.buttonClick(t)}},Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("span",{class:"alert-button-inner"},t.text),"md"===e.mode&&Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("ion-ripple-effect",null))}))},e.prototype.render=function(){var e,t="alert-"+this.overlayIndex+"-hdr",r="alert-"+this.overlayIndex+"-sub-hdr",n="alert-"+this.overlayIndex+"-msg";return void 0!==this.header?e=t:void 0!==this.subHeader&&(e=r),[Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("ion-backdrop",{tappable:this.backdropDismiss}),Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("div",{class:"alert-wrapper"},Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("div",{class:"alert-head"},this.header&&Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("h2",{id:t,class:"alert-title"},this.header),this.subHeader&&Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("h2",{id:r,class:"alert-sub-title"},this.subHeader)),Object(__WEBPACK_IMPORTED_MODULE_1__ionic_core_js__["b" /* h */])("div",{id:n,class:"alert-message",innerHTML:Object(__WEBPACK_IMPORTED_MODULE_4__chunk_8b4dfddb_js__["a"])(this.message)}),this.renderAlertInputs(e),this.renderAlertButtons())]},Object.defineProperty(e,"is",{get:function(){return"ion-alert"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"scoped"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},backdropDismiss:{type:Boolean,attr:"backdrop-dismiss"},buttons:{type:"Any",attr:"buttons",watchCallbacks:["buttonsChanged"]},config:{context:"config"},cssClass:{type:String,attr:"css-class"},dismiss:{method:!0},el:{elementRef:!0},enterAnimation:{type:"Any",attr:"enter-animation"},header:{type:String,attr:"header"},inputs:{type:"Any",attr:"inputs",mutable:!0,watchCallbacks:["inputsChanged"]},keyboardClose:{type:Boolean,attr:"keyboard-close"},leaveAnimation:{type:"Any",attr:"leave-animation"},message:{type:String,attr:"message"},mode:{type:String,attr:"mode"},onDidDismiss:{method:!0},onWillDismiss:{method:!0},overlayIndex:{type:Number,attr:"overlay-index"},present:{method:!0},subHeader:{type:String,attr:"sub-header"},translucent:{type:Boolean,attr:"translucent"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionAlertDidPresent",method:"didPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertWillPresent",method:"willPresent",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertWillDismiss",method:"willDismiss",bubbles:!0,cancelable:!0,composed:!0},{name:"ionAlertDidDismiss",method:"didDismiss",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"listeners",{get:function(){return[{name:"ionBackdropTap",method:"onBackdropTap"},{name:"ionAlertWillDismiss",method:"dispatchCancelHandler"}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".sc-ion-alert-ios-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-family:var(--ion-font-family,inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1000}.overlay-hidden.sc-ion-alert-ios-h{display:none}.alert-top.sc-ion-alert-ios-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-ios{margin-top:0}.alert-sub-title.sc-ion-alert-ios, .alert-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-ios{margin-top:5px;font-weight:400}.alert-message.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-group.sc-ion-alert-ios::-webkit-scrollbar, .alert-message.sc-ion-alert-ios::-webkit-scrollbar, .alert-radio-group.sc-ion-alert-ios::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-ios{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-ios{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-ios{display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button.ion-focused.sc-ion-alert-ios, .alert-tappable.ion-focused.sc-ion-alert-ios{background:var(--ion-color-step-100,#e6e6e6)}.alert-button-inner.sc-ion-alert-ios{-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%}.alert-button-inner.sc-ion-alert-ios, .alert-tappable.sc-ion-alert-ios{display:-ms-flexbox;display:flex;width:100%}.alert-tappable.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;border:0;background:transparent;font-size:inherit;line-height:normal;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:strict}.alert-button.sc-ion-alert-ios, .alert-checkbox.sc-ion-alert-ios, .alert-input.sc-ion-alert-ios, .alert-radio.sc-ion-alert-ios{outline:none}.alert-checkbox-icon.sc-ion-alert-ios, .alert-checkbox-inner.sc-ion-alert-ios, .alert-radio-icon.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box}.sc-ion-alert-ios-h{--background:var(--ion-overlay-background-color,var(--ion-color-step-150,#f9f9f9));--max-width:270px;font-size:14px}.alert-wrapper.sc-ion-alert-ios{border-radius:13px;-webkit-box-shadow:none;box-shadow:none;overflow:hidden}.alert-translucent.sc-ion-alert-ios-h   .alert-wrapper.sc-ion-alert-ios{background:rgba(var(--ion-background-color-rgb,255,255,255),.9);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}.alert-head.sc-ion-alert-ios{padding-left:16px;padding-right:16px;padding-top:12px;padding-bottom:7px;text-align:center}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-head.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.alert-title.sc-ion-alert-ios{margin-top:8px;color:var(--ion-text-color,#000);font-size:17px;font-weight:600}.alert-sub-title.sc-ion-alert-ios{color:var(--ion-color-step-600,#666);font-size:14px}.alert-input-group.sc-ion-alert-ios, .alert-message.sc-ion-alert-ios{padding-left:16px;padding-right:16px;padding-top:0;padding-bottom:21px;color:var(--ion-text-color,#000);font-size:13px;text-align:center}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-input-group.sc-ion-alert-ios, .alert-message.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}.alert-message.sc-ion-alert-ios{max-height:240px}.alert-message.sc-ion-alert-ios:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:12px}.alert-input.sc-ion-alert-ios{border-radius:4px;margin-top:10px;padding-left:6px;padding-right:6px;padding-top:6px;padding-bottom:6px;border:.55px solid var(--ion-color-step-250,#bfbfbf);background-color:var(--ion-background-color,#fff);-webkit-appearance:none;-moz-appearance:none;appearance:none}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-input.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px}}.alert-input.sc-ion-alert-ios::-webkit-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios:-ms-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-input-placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::placeholder{color:var(--ion-placeholder-color,var(--ion-color-step-400,#999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-clear{display:none}.alert-checkbox-group.sc-ion-alert-ios, .alert-radio-group.sc-ion-alert-ios{-ms-scroll-chaining:none;overscroll-behavior:contain;max-height:240px;border-top:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);overflow-y:auto;-webkit-overflow-scrolling:touch}.alert-tappable.sc-ion-alert-ios{height:44px}.alert-radio-label.sc-ion-alert-ios{padding-left:13px;padding-right:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;-ms-flex-order:0;order:0;color:var(--ion-text-color,#000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-radio-label.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px}}[aria-checked=true].sc-ion-alert-ios   .alert-radio-label.sc-ion-alert-ios{color:var(--ion-color-primary,#3880ff)}.alert-radio-icon.sc-ion-alert-ios{position:relative;-ms-flex-order:1;order:1;min-width:30px}[aria-checked=true].sc-ion-alert-ios   .alert-radio-inner.sc-ion-alert-ios{left:7px;top:-7px;position:absolute;width:6px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary,#3880ff)}[dir=rtl].sc-ion-alert-ios-h   [aria-checked=true].sc-ion-alert-ios   .alert-radio-inner.sc-ion-alert-ios, [dir=rtl]   .sc-ion-alert-ios-h   [aria-checked=true].sc-ion-alert-ios   .alert-radio-inner.sc-ion-alert-ios, [dir=rtl].sc-ion-alert-ios   [aria-checked=true].sc-ion-alert-ios   .alert-radio-inner.sc-ion-alert-ios{left:unset;right:unset;right:7px}.alert-checkbox-label.sc-ion-alert-ios{padding-left:13px;padding-right:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-text-color,#000);text-overflow:ellipsis;white-space:nowrap;overflow:hidden}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-checkbox-label.sc-ion-alert-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px}}.alert-checkbox-icon.sc-ion-alert-ios{border-radius:50%;margin-left:16px;margin-right:6px;margin-top:10px;margin-bottom:10px;position:relative;width:24px;height:24px;border-width:1px;border-style:solid;border-color:var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-150,#c8c7cc)));background-color:var(--ion-item-background,var(--ion-background-color,#fff));contain:strict}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-checkbox-icon.sc-ion-alert-ios{margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:6px;margin-inline-end:6px}}[aria-checked=true].sc-ion-alert-ios   .alert-checkbox-icon.sc-ion-alert-ios{border-color:var(--ion-color-primary,#3880ff);background-color:var(--ion-color-primary,#3880ff)}[aria-checked=true].sc-ion-alert-ios   .alert-checkbox-inner.sc-ion-alert-ios{left:9px;top:4px;position:absolute;width:5px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:1px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-background-color,#fff)}[dir=rtl].sc-ion-alert-ios-h   [aria-checked=true].sc-ion-alert-ios   .alert-checkbox-inner.sc-ion-alert-ios, [dir=rtl]   .sc-ion-alert-ios-h   [aria-checked=true].sc-ion-alert-ios   .alert-checkbox-inner.sc-ion-alert-ios, [dir=rtl].sc-ion-alert-ios   [aria-checked=true].sc-ion-alert-ios   .alert-checkbox-inner.sc-ion-alert-ios{left:unset;right:unset;right:9px}.alert-button-group.sc-ion-alert-ios{margin-right:-.55px;-ms-flex-wrap:wrap;flex-wrap:wrap}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.alert-button-group.sc-ion-alert-ios{margin-right:unset;-webkit-margin-end:-.55px;margin-inline-end:-.55px}}.alert-button.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:0;-ms-flex:1 1 auto;flex:1 1 auto;min-width:50%;height:44px;border-top:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);border-right:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2);background-color:transparent;color:var(--ion-color-primary,#3880ff);font-size:17px;overflow:hidden}[dir=rtl].sc-ion-alert-ios-h   .alert-button.sc-ion-alert-ios:first-child, [dir=rtl]   .sc-ion-alert-ios-h   .alert-button.sc-ion-alert-ios:first-child, [dir=rtl].sc-ion-alert-ios   .alert-button.sc-ion-alert-ios:first-child{border-right:0}.alert-button.sc-ion-alert-ios:last-child{border-right:0;font-weight:700}[dir=rtl].sc-ion-alert-ios-h   .alert-button.sc-ion-alert-ios:last-child, [dir=rtl]   .sc-ion-alert-ios-h   .alert-button.sc-ion-alert-ios:last-child, [dir=rtl].sc-ion-alert-ios   .alert-button.sc-ion-alert-ios:last-child{border-right:.55px solid rgba(var(--ion-text-color-rgb,0,0,0),.2)}.alert-button.activated.sc-ion-alert-ios{background-color:rgba(var(--ion-text-color-rgb,0,0,0),.1)}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),e}();function buttonClass(e){return Object.assign({"alert-button":!0,"ion-focusable":!0,"ion-activatable":!0},Object(__WEBPACK_IMPORTED_MODULE_3__chunk_2f96b3d2_js__["a"])(e.cssClass))}var AlertController=function(){function e(){}return e.prototype.create=function(e){return Object(__WEBPACK_IMPORTED_MODULE_2__chunk_d97dc981_js__["f"])(this.doc.createElement("ion-alert"),e)},e.prototype.dismiss=function(e,t,r){return Object(__WEBPACK_IMPORTED_MODULE_2__chunk_d97dc981_js__["g"])(this.doc,e,t,"ion-alert",r)},e.prototype.getTop=function(){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(e){return[2,Object(__WEBPACK_IMPORTED_MODULE_2__chunk_d97dc981_js__["h"])(this.doc,"ion-alert")]})})},Object.defineProperty(e,"is",{get:function(){return"ion-alert-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{create:{method:!0},dismiss:{method:!0},doc:{context:"document"},getTop:{method:!0}}},enumerable:!0,configurable:!0}),e}();

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

/***/ 758:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sanitizeDOMString; });
var sanitizeDOMString=function(e){try{if("string"!=typeof e||""===e)return e;var t=document.createDocumentFragment(),r=document.createElement("div");t.appendChild(r),r.innerHTML=e,blockedTags.forEach(function(e){for(var r=t.querySelectorAll(e),n=r.length-1;n>=0;n--){var i=r[n];i.parentNode?i.parentNode.removeChild(i):t.removeChild(i);for(var l=getElementChildren(i),a=0;a<l.length;a++)sanitizeElement(l[a])}});for(var n=getElementChildren(t),i=0;i<n.length;i++)sanitizeElement(n[i]);var l=document.createElement("div");l.appendChild(t);var a=l.querySelector("div");return null!==a?a.innerHTML:l.innerHTML}catch(e){return console.error(e),""}},sanitizeElement=function(e){if(!e.nodeType||1===e.nodeType){for(var t=e.attributes.length-1;t>=0;t--){var r=e.attributes[t],n=r.name;if(allowedAttributes.includes(n.toLowerCase())){var i=r.value;null!=i&&i.toLowerCase().includes("javascript:")&&e.removeAttribute(n)}else e.removeAttribute(n)}var l=getElementChildren(e);for(t=0;t<l.length;t++)sanitizeElement(l[t])}},getElementChildren=function(e){return null!=e.children?e.children:e.childNodes},allowedAttributes=["class","id","href","src","name","slot"],blockedTags=["script","style","iframe","meta","link","object","embed"];

/***/ })

});
//# sourceMappingURL=19.js.map