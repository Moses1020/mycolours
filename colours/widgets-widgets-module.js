(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["widgets-widgets-module"],{

/***/ "./src/app/widgets/widgets.component.css":
/*!***********************************************!*\
  !*** ./src/app/widgets/widgets.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpZGdldHMvd2lkZ2V0cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/widgets/widgets.component.html":
/*!************************************************!*\
  !*** ./src/app/widgets/widgets.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"row\">\n        <div class=\"col-lg-6\">\n          <div class=\"card card-pricing \">\n            <div class=\"card-header\">\n              <h6 class=\"card-category\"> Alpha Pack</h6>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-icon icon-primary \">\n                <i class=\"nc-icon nc-spaceship\"></i>\n              </div>\n              <h3 class=\"card-title\">69$</h3>\n              <ul>\n                <li>Working materials in EPS</li>\n                <li>6 months access to the library</li>\n              </ul>\n            </div>\n            <div class=\"card-footer\">\n              <a href=\"#pablo\" class=\"btn btn-round btn-primary\">Add to Cart</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <div class=\"card card-pricing card-plain\">\n            <div class=\"card-header\">\n              <h6 class=\"card-category\"> Bravo Pack</h6>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-icon icon-warning \">\n                <i class=\"nc-icon nc-shop\"></i>\n              </div>\n              <h3 class=\"card-title\">10$</h3>\n              <ul>\n                <li>Complete documentation</li>\n                <li>Working materials in Sketch</li>\n              </ul>\n            </div>\n            <div class=\"card-footer\">\n              <a href=\"#pablo\" class=\"btn btn-round btn-neutral btn-warning\">Add to Cart</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card card-testimonial\">\n        <div class=\"card-body \">\n          <div class=\"icon icon-primary\">\n            <i class=\"fa fa-quote-right\"></i>\n          </div>\n          <p class=\"card-description\">\n            The networking at Web Summit is like no other European tech conference.\n          </p>\n        </div>\n        <div class=\"card-footer \">\n          <h4 class=\"card-title\">Gina Andrew</h4>\n          <h6 class=\"card-category\">@ginaandrew</h6>\n          <div class=\"card-avatar\">\n            <a href=\"#pablo\">\n              <img class=\"img\" src=\"./assets/img/faces/joe-gardner-2.jpg\">\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/widgets/widgets.component.ts":
/*!**********************************************!*\
  !*** ./src/app/widgets/widgets.component.ts ***!
  \**********************************************/
/*! exports provided: WidgetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsComponent", function() { return WidgetsComponent; });
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

var WidgetsComponent = /** @class */ (function () {
    function WidgetsComponent() {
    }
    WidgetsComponent.prototype.ngOnInit = function () {
    };
    WidgetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-widgets',
            template: __webpack_require__(/*! ./widgets.component.html */ "./src/app/widgets/widgets.component.html"),
            styles: [__webpack_require__(/*! ./widgets.component.css */ "./src/app/widgets/widgets.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WidgetsComponent);
    return WidgetsComponent;
}());



/***/ }),

/***/ "./src/app/widgets/widgets.module.ts":
/*!*******************************************!*\
  !*** ./src/app/widgets/widgets.module.ts ***!
  \*******************************************/
/*! exports provided: WidgetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsModule", function() { return WidgetsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _widgets_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./widgets.component */ "./src/app/widgets/widgets.component.ts");
/* harmony import */ var _widgets_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./widgets.routing */ "./src/app/widgets/widgets.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var WidgetsModule = /** @class */ (function () {
    function WidgetsModule() {
    }
    WidgetsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_widgets_routing__WEBPACK_IMPORTED_MODULE_5__["WidgetsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_widgets_component__WEBPACK_IMPORTED_MODULE_4__["WidgetsComponent"]]
        })
    ], WidgetsModule);
    return WidgetsModule;
}());



/***/ }),

/***/ "./src/app/widgets/widgets.routing.ts":
/*!********************************************!*\
  !*** ./src/app/widgets/widgets.routing.ts ***!
  \********************************************/
/*! exports provided: WidgetsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WidgetsRoutes", function() { return WidgetsRoutes; });
/* harmony import */ var _widgets_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./widgets.component */ "./src/app/widgets/widgets.component.ts");

var WidgetsRoutes = [{
        path: '',
        children: [{
                path: 'enterprises/widgets',
                component: _widgets_component__WEBPACK_IMPORTED_MODULE_0__["WidgetsComponent"]
            }]
    }];


/***/ })

}]);
//# sourceMappingURL=widgets-widgets-module.js.map