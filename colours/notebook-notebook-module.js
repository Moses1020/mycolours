(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["notebook-notebook-module"],{

/***/ "./src/app/notebook/notebook.component.css":
/*!*************************************************!*\
  !*** ./src/app/notebook/notebook.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGVib29rL25vdGVib29rLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/notebook/notebook.component.html":
/*!**************************************************!*\
  !*** ./src/app/notebook/notebook.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"col-md-5 mr-auto ml-auto text-center\">\n    <p>\n      Notebook coming soon!\n    </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/notebook/notebook.component.ts":
/*!************************************************!*\
  !*** ./src/app/notebook/notebook.component.ts ***!
  \************************************************/
/*! exports provided: NotebookComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotebookComponent", function() { return NotebookComponent; });
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

var NotebookComponent = /** @class */ (function () {
    function NotebookComponent() {
    }
    NotebookComponent.prototype.ngOnInit = function () {
    };
    NotebookComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-notebook',
            template: __webpack_require__(/*! ./notebook.component.html */ "./src/app/notebook/notebook.component.html"),
            styles: [__webpack_require__(/*! ./notebook.component.css */ "./src/app/notebook/notebook.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotebookComponent);
    return NotebookComponent;
}());



/***/ }),

/***/ "./src/app/notebook/notebook.module.ts":
/*!*********************************************!*\
  !*** ./src/app/notebook/notebook.module.ts ***!
  \*********************************************/
/*! exports provided: NotebookModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotebookModule", function() { return NotebookModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _notebook_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./notebook.component */ "./src/app/notebook/notebook.component.ts");
/* harmony import */ var _notebook_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./notebook.routing */ "./src/app/notebook/notebook.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NotebookModule = /** @class */ (function () {
    function NotebookModule() {
    }
    NotebookModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_notebook_routing__WEBPACK_IMPORTED_MODULE_5__["NotebookRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_notebook_component__WEBPACK_IMPORTED_MODULE_4__["NotebookComponent"]]
        })
    ], NotebookModule);
    return NotebookModule;
}());



/***/ }),

/***/ "./src/app/notebook/notebook.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/notebook/notebook.routing.ts ***!
  \**********************************************/
/*! exports provided: NotebookRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotebookRoutes", function() { return NotebookRoutes; });
/* harmony import */ var _notebook_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notebook.component */ "./src/app/notebook/notebook.component.ts");

var NotebookRoutes = [{
        path: '',
        children: [{
                path: 'notebook',
                component: _notebook_component__WEBPACK_IMPORTED_MODULE_0__["NotebookComponent"]
            }]
    }];


/***/ })

}]);
//# sourceMappingURL=notebook-notebook-module.js.map