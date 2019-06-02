webpackJsonp([168],{

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startHardwareBackButton", function() { return startHardwareBackButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__ = __webpack_require__(752);
function startHardwareBackButton(t){var e=!1;t.document.addEventListener("backbutton",function(){if(!e){var n=[],r=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register:function(t,e){n.push({priority:t,handler:e})}}});if(t.document.dispatchEvent(r),n.length>0){var i,a=Number.MIN_SAFE_INTEGER;n.forEach(function(t){var e=t.priority;e>=a&&(a=e,i=t.handler)}),e=!0,executeAction(i).then(function(){return e=!1})}}})}function executeAction(t){return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["a" /* __awaiter */](this,void 0,void 0,function(){var e,n;return __WEBPACK_IMPORTED_MODULE_0__polyfills_tslib_js__["c" /* __generator */](this,function(r){switch(r.label){case 0:return r.trys.push([0,3,,4]),t?null==(e=t())?[3,2]:[4,e]:[3,2];case 1:r.sent(),r.label=2;case 2:return[3,4];case 3:return n=r.sent(),console.error(n),[3,4];case 4:return[2]}})})}

/***/ })

});
//# sourceMappingURL=168.js.map