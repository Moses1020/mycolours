(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["departmental-rpts-departmental-rpts-module"],{

/***/ "./src/app/departmental-rpts/departmental-rpts.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/departmental-rpts/departmental-rpts.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user_table {\r\n    height: 10em;\r\n    overflow: hidden;\r\n    overflow-y: scroll\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVwYXJ0bWVudGFsLXJwdHMvZGVwYXJ0bWVudGFsLXJwdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2RlcGFydG1lbnRhbC1ycHRzL2RlcGFydG1lbnRhbC1ycHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlcl90YWJsZSB7XHJcbiAgICBoZWlnaHQ6IDEwZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/departmental-rpts/departmental-rpts.component.html":
/*!********************************************************************!*\
  !*** ./src/app/departmental-rpts/departmental-rpts.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 text-center\">\n      <div class=\"card  card-tasks\">\n        <div class=\"card-header \">\n          <h4 class=\"card-title\">Departmental-Reports</h4>\n        </div>\n        <div class=\"card-body\">\n          <nav aria-label=\"Page navigation example\">\n            <ul class=\"nav nav-pills nav-pills-primary nav-pills-icons justify-content-right\" role=\"tablist\"\n              style=\"margin-top: -30px;\">\n              <li class=\"nav-item\">\n                <a class=\"pagination pagination-primary active\" title=\"click to see the overview\" data-toggle=\"tab\"\n                  href=\"#link7\" role=\"tablist\">\n                  Total time spent\n                </a>\n              </li>\n              <span style=\"color:darkslategrey\"> -|- </span>\n              <li class=\"nav-item\">\n                <a class=\"pagination pagination-primary\" title=\"click to see the timesheet\" data-toggle=\"tab\"\n                  href=\"#link8\" role=\"tablist\">\n                  Task Activity log\n                </a>\n              </li>\n              <span style=\"color:darkslategrey\"> -|- </span>\n              <li class=\"nav-item\">\n                <a class=\"pagination pagination-primary\" title=\"click to see the other reports\" data-toggle=\"tab\"\n                  href=\"#link9\" role=\"tablist\">\n                  Others\n                </a>\n              </li>\n            </ul>\n          </nav>\n          <div class=\"tab-content tab-space tab-subcategories col-md-12\">\n            <div class=\"tab-pane active\" id=\"link7\">\n              <div class=\"col-md-12\">\n                <div class=\"card-header text-left\">Total time spent</div><br>\n\n              </div>\n            </div>\n            <div class=\"tab-pane\" id=\"link8\">\n              <div class=\"col-md-12\">\n                <div class=\"card-header text-left\">Task Activity log</div><br>\n\n              </div>\n              <br>\n            </div>\n            <div class=\"tab-pane\" id=\"link9\">\n              <div class=\"card-header text-left\">Other reports</div><br>\n\n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer \">\n          <hr>\n          <div class=\"stats\">\n            <i class=\"fa fa-refresh spin\"></i> Updated 3 minutes ago\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/departmental-rpts/departmental-rpts.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/departmental-rpts/departmental-rpts.component.ts ***!
  \******************************************************************/
/*! exports provided: DepartmentalRptsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentalRptsComponent", function() { return DepartmentalRptsComponent; });
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

var DepartmentalRptsComponent = /** @class */ (function () {
    function DepartmentalRptsComponent() {
    }
    // OnInit() {}
    DepartmentalRptsComponent.prototype.NgOnInit = function () {
    };
    DepartmentalRptsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-departmental-rpts',
            template: __webpack_require__(/*! ./departmental-rpts.component.html */ "./src/app/departmental-rpts/departmental-rpts.component.html"),
            styles: [__webpack_require__(/*! ./departmental-rpts.component.css */ "./src/app/departmental-rpts/departmental-rpts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DepartmentalRptsComponent);
    return DepartmentalRptsComponent;
}());



/***/ }),

/***/ "./src/app/departmental-rpts/departmental-rpts.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/departmental-rpts/departmental-rpts.module.ts ***!
  \***************************************************************/
/*! exports provided: DepartmentalRptsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentalRptsModule", function() { return DepartmentalRptsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _departmental_rpts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./departmental-rpts.component */ "./src/app/departmental-rpts/departmental-rpts.component.ts");
/* harmony import */ var _departmental_rpts_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./departmental-rpts.routing */ "./src/app/departmental-rpts/departmental-rpts.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DepartmentalRptsModule = /** @class */ (function () {
    function DepartmentalRptsModule() {
    }
    DepartmentalRptsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_departmental_rpts_routing__WEBPACK_IMPORTED_MODULE_5__["DepartmentalRptsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_departmental_rpts_component__WEBPACK_IMPORTED_MODULE_4__["DepartmentalRptsComponent"]]
        })
    ], DepartmentalRptsModule);
    return DepartmentalRptsModule;
}());



/***/ }),

/***/ "./src/app/departmental-rpts/departmental-rpts.routing.ts":
/*!****************************************************************!*\
  !*** ./src/app/departmental-rpts/departmental-rpts.routing.ts ***!
  \****************************************************************/
/*! exports provided: DepartmentalRptsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentalRptsRoutes", function() { return DepartmentalRptsRoutes; });
/* harmony import */ var _departmental_rpts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./departmental-rpts.component */ "./src/app/departmental-rpts/departmental-rpts.component.ts");

var DepartmentalRptsRoutes = [{
        path: '',
        children: [{
                path: 'Individual-reports',
                component: _departmental_rpts_component__WEBPACK_IMPORTED_MODULE_0__["DepartmentalRptsComponent"]
            }]
    }];


/***/ })

}]);
//# sourceMappingURL=departmental-rpts-departmental-rpts-module.js.map