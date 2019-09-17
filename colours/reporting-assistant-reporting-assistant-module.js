(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reporting-assistant-reporting-assistant-module"],{

/***/ "./src/app/reporting-assistant/reporting-assistant.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/reporting-assistant/reporting-assistant.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlcG9ydGluZy1hc3Npc3RhbnQvcmVwb3J0aW5nLWFzc2lzdGFudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/reporting-assistant/reporting-assistant.component.html":
/*!************************************************************************!*\
  !*** ./src/app/reporting-assistant/reporting-assistant.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"col-md-5 mr-auto ml-auto text-center\">\n    <p>\n      Reporting Assistant coming soon!\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/reporting-assistant/reporting-assistant.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/reporting-assistant/reporting-assistant.component.ts ***!
  \**********************************************************************/
/*! exports provided: ReportingAssistantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingAssistantComponent", function() { return ReportingAssistantComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportingAssistantComponent = /** @class */ (function () {
    function ReportingAssistantComponent() {
    }
    ReportingAssistantComponent.prototype.ngOnInit = function () {
    };
    ReportingAssistantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reporting-assistant',
            template: __webpack_require__(/*! ./reporting-assistant.component.html */ "./src/app/reporting-assistant/reporting-assistant.component.html"),
            styles: [__webpack_require__(/*! ./reporting-assistant.component.css */ "./src/app/reporting-assistant/reporting-assistant.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportingAssistantComponent);
    return ReportingAssistantComponent;
}());



/***/ }),

/***/ "./src/app/reporting-assistant/reporting-assistant.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/reporting-assistant/reporting-assistant.module.ts ***!
  \*******************************************************************/
/*! exports provided: ReportingAssistantModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingAssistantModule", function() { return ReportingAssistantModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _reporting_assistant_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reporting-assistant.component */ "./src/app/reporting-assistant/reporting-assistant.component.ts");
/* harmony import */ var _reporting_assistant_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reporting-assistant.routing */ "./src/app/reporting-assistant/reporting-assistant.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ReportingAssistantModule = /** @class */ (function () {
    function ReportingAssistantModule() {
    }
    ReportingAssistantModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_reporting_assistant_routing__WEBPACK_IMPORTED_MODULE_5__["ReportingAssistantRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_reporting_assistant_component__WEBPACK_IMPORTED_MODULE_4__["ReportingAssistantComponent"]]
        })
    ], ReportingAssistantModule);
    return ReportingAssistantModule;
}());



/***/ }),

/***/ "./src/app/reporting-assistant/reporting-assistant.routing.ts":
/*!********************************************************************!*\
  !*** ./src/app/reporting-assistant/reporting-assistant.routing.ts ***!
  \********************************************************************/
/*! exports provided: ReportingAssistantRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportingAssistantRoutes", function() { return ReportingAssistantRoutes; });
/* harmony import */ var _reporting_assistant_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reporting-assistant.component */ "./src/app/reporting-assistant/reporting-assistant.component.ts");

var ReportingAssistantRoutes = [{
        path: '',
        children: [{
                path: 'reporting-assistant',
                component: _reporting_assistant_component__WEBPACK_IMPORTED_MODULE_0__["ReportingAssistantComponent"]
            }]
    }];


/***/ })

}]);
//# sourceMappingURL=reporting-assistant-reporting-assistant-module.js.map