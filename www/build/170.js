webpackJsonp([170],{

/***/ 768:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startStatusTap", function() { return startStatusTap; });
function startStatusTap(t,n){t.addEventListener("statusTap",function(){n.read(function(){var e=t.document.elementFromPoint(t.innerWidth/2,t.innerHeight/2);if(e){var o=e.closest("ion-content");o&&o.componentOnReady().then(function(){n.write(function(){return o.scrollToTop(300)})})}})})}

/***/ })

});
//# sourceMappingURL=170.js.map