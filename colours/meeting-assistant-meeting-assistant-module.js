(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["meeting-assistant-meeting-assistant-module"],{

/***/ "./src/app/meeting-assistant/meeting-assistant.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/meeting-assistant/meeting-assistant.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZXRpbmctYXNzaXN0YW50L21lZXRpbmctYXNzaXN0YW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/meeting-assistant/meeting-assistant.component.html":
/*!********************************************************************!*\
  !*** ./src/app/meeting-assistant/meeting-assistant.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"col-md-5 mr-auto ml-auto text-center\">\n    <p>\n      Meeting Assistant coming soon!\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/meeting-assistant/meeting-assistant.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/meeting-assistant/meeting-assistant.component.ts ***!
  \******************************************************************/
/*! exports provided: MeetingAssistantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingAssistantComponent", function() { return MeetingAssistantComponent; });
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

var MeetingAssistantComponent = /** @class */ (function () {
    function MeetingAssistantComponent() {
    }
    MeetingAssistantComponent.prototype.ngOnInit = function () {
    };
    MeetingAssistantComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-meeting-assistant',
            template: __webpack_require__(/*! ./meeting-assistant.component.html */ "./src/app/meeting-assistant/meeting-assistant.component.html"),
            styles: [__webpack_require__(/*! ./meeting-assistant.component.css */ "./src/app/meeting-assistant/meeting-assistant.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MeetingAssistantComponent);
    return MeetingAssistantComponent;
}());



/***/ }),

/***/ "./src/app/meeting-assistant/meeting-assistant.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/meeting-assistant/meeting-assistant.module.ts ***!
  \***************************************************************/
/*! exports provided: MeetingAssistantModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingAssistantModule", function() { return MeetingAssistantModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _meeting_assistant_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./meeting-assistant.component */ "./src/app/meeting-assistant/meeting-assistant.component.ts");
/* harmony import */ var _meeting_assistant_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./meeting-assistant.routing */ "./src/app/meeting-assistant/meeting-assistant.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MeetingAssistantModule = /** @class */ (function () {
    function MeetingAssistantModule() {
    }
    MeetingAssistantModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_meeting_assistant_routing__WEBPACK_IMPORTED_MODULE_5__["MeetingAssistantRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_meeting_assistant_component__WEBPACK_IMPORTED_MODULE_4__["MeetingAssistantComponent"]]
        })
    ], MeetingAssistantModule);
    return MeetingAssistantModule;
}());



/***/ }),

/***/ "./src/app/meeting-assistant/meeting-assistant.routing.ts":
/*!****************************************************************!*\
  !*** ./src/app/meeting-assistant/meeting-assistant.routing.ts ***!
  \****************************************************************/
/*! exports provided: MeetingAssistantRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingAssistantRoutes", function() { return MeetingAssistantRoutes; });
/* harmony import */ var _meeting_assistant_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meeting-assistant.component */ "./src/app/meeting-assistant/meeting-assistant.component.ts");

var MeetingAssistantRoutes = [{
        path: '',
        children: [{
                path: 'meeting-assistant',
                component: _meeting_assistant_component__WEBPACK_IMPORTED_MODULE_0__["MeetingAssistantComponent"]
            }]
    }];


/***/ })

}]);
//# sourceMappingURL=meeting-assistant-meeting-assistant-module.js.map