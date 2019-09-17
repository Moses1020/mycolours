(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["document-manager-document-manager-module"],{

/***/ "./src/app/document-manager/document-manager.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/document-manager/document-manager.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RvY3VtZW50LW1hbmFnZXIvZG9jdW1lbnQtbWFuYWdlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/document-manager/document-manager.component.html":
/*!******************************************************************!*\
  !*** ./src/app/document-manager/document-manager.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"col-md-5 mr-auto ml-auto text-center\">\n    <p>\n      Document Manager coming soon!\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/document-manager/document-manager.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/document-manager/document-manager.component.ts ***!
  \****************************************************************/
/*! exports provided: DocumentManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentManagerComponent", function() { return DocumentManagerComponent; });
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

var DocumentManagerComponent = /** @class */ (function () {
    function DocumentManagerComponent() {
    }
    DocumentManagerComponent.prototype.ngOnInit = function () {
    };
    DocumentManagerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-document-manager',
            template: __webpack_require__(/*! ./document-manager.component.html */ "./src/app/document-manager/document-manager.component.html"),
            styles: [__webpack_require__(/*! ./document-manager.component.css */ "./src/app/document-manager/document-manager.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DocumentManagerComponent);
    return DocumentManagerComponent;
}());



/***/ }),

/***/ "./src/app/document-manager/document-manager.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/document-manager/document-manager.module.ts ***!
  \*************************************************************/
/*! exports provided: DocumentManagerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentManagerModule", function() { return DocumentManagerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _document_manager_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./document-manager.component */ "./src/app/document-manager/document-manager.component.ts");
/* harmony import */ var _document_manager_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./document-manager.routing */ "./src/app/document-manager/document-manager.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DocumentManagerModule = /** @class */ (function () {
    function DocumentManagerModule() {
    }
    DocumentManagerModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_document_manager_routing__WEBPACK_IMPORTED_MODULE_5__["DocumentManagerRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_document_manager_component__WEBPACK_IMPORTED_MODULE_4__["DocumentManagerComponent"]]
        })
    ], DocumentManagerModule);
    return DocumentManagerModule;
}());



/***/ }),

/***/ "./src/app/document-manager/document-manager.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/document-manager/document-manager.routing.ts ***!
  \**************************************************************/
/*! exports provided: DocumentManagerRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentManagerRoutes", function() { return DocumentManagerRoutes; });
/* harmony import */ var _document_manager_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./document-manager.component */ "./src/app/document-manager/document-manager.component.ts");

var DocumentManagerRoutes = [{
        path: '',
        children: [{
                path: 'document-manager',
                component: _document_manager_component__WEBPACK_IMPORTED_MODULE_0__["DocumentManagerComponent"]
            }]
    }];


/***/ })

}]);
//# sourceMappingURL=document-manager-document-manager-module.js.map