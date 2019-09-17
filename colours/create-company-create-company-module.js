(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["create-company-create-company-module"],{

/***/ "./src/app/create-company/create-company.component.css":
/*!*************************************************************!*\
  !*** ./src/app/create-company/create-company.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link-clrs {\r\n    display: block;\r\n    padding: 0rem;\r\n}\r\n\r\n.clrs-tabs {\r\n    /* max-width: 12em; */\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWNvbXBhbnkvY3JlYXRlLWNvbXBhbnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLWNvbXBhbnkvY3JlYXRlLWNvbXBhbnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluay1jbHJzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMHJlbTtcclxufVxyXG5cclxuLmNscnMtdGFicyB7XHJcbiAgICAvKiBtYXgtd2lkdGg6IDEyZW07ICovXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/create-company/create-company.component.html":
/*!**************************************************************!*\
  !*** ./src/app/create-company/create-company.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5>Vertical Tabs</h5>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"clrs-tabs\">\n              <div class=\"nav-tabs-navigation vertical-navs\">\n                <div class=\"nav-tabs-wrapper\">\n                  <ul class=\"nav nav-tabs flex-column nav-stacked text-left\" role=\"tablist\">\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link active\" href=\"#info\" role=\"tab\" data-toggle=\"tab\">Dashboard</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#description\" role=\"tab\" data-toggle=\"tab\">Standards</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#concept\" role=\"tab\" data-toggle=\"tab\">Setup</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#support\" role=\"tab\" data-toggle=\"tab\">Planning</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#extra\" role=\"tab\" data-toggle=\"tab\">Implementation</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#reports\" role=\"tab\" data-toggle=\"tab\">Reporting</a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-9 col-md-10 col-sm-8 col-12 ml-auto mr-auto\">\n              <!-- Tab panes -->\n              <div class=\"tab-content\">\n                <div class=\"tab-pane active\" id=\"info\">\n                  <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth\n                    metal surface that seamlessly meets the new Retina HD display.</p>\n                  <p>It’s one continuous form where hardware and software function in perfect unison, creating a new\n                    generation of phone that’s better by any measure.</p>\n                </div>\n                <div class=\"tab-pane\" id=\"description\">\n                  <p>The first thing you notice when you hold the phone is how great it feels in your hand. The cover\n                    glass curves down around the sides to meet the anodized aluminum enclosure in a remarkable,\n                    simplified design. </p>\n                  <p>There are no distinct edges. No gaps. Just a smooth, seamless bond of metal and glass that feels\n                    like one continuous surface.</p>\n                </div>\n                <div class=\"tab-pane\" id=\"concept\">\n                  <p>It’s one continuous form where hardware and software function in perfect unison, creating a new\n                    generation of phone that’s better by any measure.</p>\n                  <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth\n                    metal surface that seamlessly meets the new Retina HD display. </p>\n                </div>\n                <div class=\"tab-pane\" id=\"support\">\n                  <p>From the seamless transition of glass and metal to the streamlined profile, every detail was\n                    carefully considered to enhance your experience. So while its display is larger, the phone feels\n                    just right.</p>\n                  <p>It’s one continuous form where hardware and software function in perfect unison, creating a new\n                    generation of phone that’s better by any measure.</p>\n                </div>\n                <div class=\"tab-pane\" id=\"extra\">\n                  <p>It’s one continuous form where hardware and software function in perfect unison, creating a new\n                    generation of phone that’s better by any measure.</p>\n                  <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth\n                    metal surface that seamlessly meets the new Retina HD display. </p>\n                </div>\n                <div class=\"tab-pane\" id=\"reports\">\n                  <p>The first thing you notice when you hold the phone is how great it feels in your hand. The cover\n                    glass curves down around the sides to meet the anodized aluminum enclosure in a remarkable,\n                    simplified design. </p>\n                  <p>There are no distinct edges. No gaps. Just a smooth, seamless bond of metal and glass that feels\n                    like one continuous surface.</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/create-company/create-company.component.ts":
/*!************************************************************!*\
  !*** ./src/app/create-company/create-company.component.ts ***!
  \************************************************************/
/*! exports provided: CreateCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCompanyComponent", function() { return CreateCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CreateCompanyComponent = /** @class */ (function () {
    function CreateCompanyComponent() {
    }
    CreateCompanyComponent.prototype.OnInit = function () { };
    CreateCompanyComponent.prototype.ngOnInit = function () {
    };
    CreateCompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-company',
            template: __webpack_require__(/*! ./create-company.component.html */ "./src/app/create-company/create-company.component.html"),
            styles: [__webpack_require__(/*! ./create-company.component.css */ "./src/app/create-company/create-company.component.css")]
        })
    ], CreateCompanyComponent);
    return CreateCompanyComponent;
}());



/***/ }),

/***/ "./src/app/create-company/create-company.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/create-company/create-company.module.ts ***!
  \*********************************************************/
/*! exports provided: CreateCompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCompanyModule", function() { return CreateCompanyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _create_company_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-company.component */ "./src/app/create-company/create-company.component.ts");
/* harmony import */ var _create_company_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-company.routing */ "./src/app/create-company/create-company.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CreateCompanyModule = /** @class */ (function () {
    function CreateCompanyModule() {
    }
    CreateCompanyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_create_company_routing__WEBPACK_IMPORTED_MODULE_5__["CreateCompanyRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_create_company_component__WEBPACK_IMPORTED_MODULE_4__["CreateCompanyComponent"]]
        })
    ], CreateCompanyModule);
    return CreateCompanyModule;
}());



/***/ }),

/***/ "./src/app/create-company/create-company.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/create-company/create-company.routing.ts ***!
  \**********************************************************/
/*! exports provided: CreateCompanyRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCompanyRoutes", function() { return CreateCompanyRoutes; });
/* harmony import */ var _create_company_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-company.component */ "./src/app/create-company/create-company.component.ts");

var CreateCompanyRoutes = [{
        path: '',
        children: [{
                path: 'enterprises/create-company',
                component: _create_company_component__WEBPACK_IMPORTED_MODULE_0__["CreateCompanyComponent"]
            }]
    }];


/***/ })

}]);
//# sourceMappingURL=create-company-create-company-module.js.map