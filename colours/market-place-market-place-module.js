(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["market-place-market-place-module"],{

/***/ "./src/app/market-place/market-place.component.css":
/*!*********************************************************!*\
  !*** ./src/app/market-place/market-place.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hcmtldC1wbGFjZS9tYXJrZXQtcGxhY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/market-place/market-place.component.html":
/*!**********************************************************!*\
  !*** ./src/app/market-place/market-place.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"card card-pricing \">\n            <div class=\"card-header\">\n              <h6 class=\"card-category\"> Alpha Pack</h6>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-icon icon-primary \">\n                <i class=\"nc-icon nc-spaceship\"></i>\n              </div>\n              <h3 class=\"card-title\">69$</h3>\n              <ul>\n                <li>New project has been created, its located in {{ project.location }}</li>\n                <li>6 months access to the library</li>\n              </ul>\n            </div>\n            <div class=\"card-footer\">\n              <a href=\"#pablo\" class=\"btn btn-round btn-primary\">Add to Cart</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"card card-stats\">\n            <div class=\"card-body\" style=\"padding-top: 0px;\">\n              <div class=\"row\" style=\"height: 66px;\">\n                <div class=\"col-5 col-md-8\">\n                  <div class=\"icon-big pull-left icon-warning\" style=\"left:3em\">\n                    <p><i class=\"fa fa-rss text-warning\" style=\"font-size:24px\">....</i>\n                    <span style=\"font-size:22px\">Colours Marketplace News Feeds</span></p>\n                  </div>\n                </div>\n                <div class=\"col-8 col-md-8\">\n                  <div class=\"numbers\">\n                    \n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"card\" data-background-color=\"blue\">\n                \n                <span>\n                    <marquee>\n                        <p>\n                            <a *ngFor = \"let project of allColoursProjects | async\" style=\"color: red\" routerLink=\"#\" >New project in {{project.sector}} has been created, its located in {{project.location}}....... <span class=\"spacer\" style=\"width:3em\"></span></a>\n                        </p>\n                    </marquee>\n                </span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/market-place/market-place.component.ts":
/*!********************************************************!*\
  !*** ./src/app/market-place/market-place.component.ts ***!
  \********************************************************/
/*! exports provided: MarketPlaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPlaceComponent", function() { return MarketPlaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var app_services_initialise_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/initialise.service */ "./src/app/services/initialise.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MarketPlaceComponent = /** @class */ (function () {
    function MarketPlaceComponent(is, afAuth, router, authService, afs) {
        this.is = is;
        this.afAuth = afAuth;
        this.router = router;
        this.authService = authService;
        this.afs = afs;
        // this.allColoursProjects = this.afs.collection('Projects').snapshotChanges().pipe(
        //   map(actions => actions.map(a => {
        //     const data = a.payload.doc.data() as Project;
        //     const id = a.payload.doc.id;
        //     return { id, ...data };
        //     }))
        //   );
        // }
        this.project = this.is.getSelectedProject();
    }
    MarketPlaceComponent.prototype.OnInit = function () { };
    MarketPlaceComponent.prototype.ngOnInit = function () {
        this.allColoursProjects = this.afs.collection('Projects', function (ref) { return ref.limit(5).orderBy('createdOn', "asc"); }).valueChanges();
    };
    MarketPlaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-market-place',
            template: __webpack_require__(/*! ./market-place.component.html */ "./src/app/market-place/market-place.component.html"),
            styles: [__webpack_require__(/*! ./market-place.component.css */ "./src/app/market-place/market-place.component.css")]
        }),
        __metadata("design:paramtypes", [app_services_initialise_service__WEBPACK_IMPORTED_MODULE_5__["InitialiseService"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], MarketPlaceComponent);
    return MarketPlaceComponent;
}());



/***/ }),

/***/ "./src/app/market-place/market-place.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/market-place/market-place.module.ts ***!
  \*****************************************************/
/*! exports provided: MarketPlaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPlaceModule", function() { return MarketPlaceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _market_place_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./market-place.component */ "./src/app/market-place/market-place.component.ts");
/* harmony import */ var _market_place_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./market-place.routing */ "./src/app/market-place/market-place.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MarketPlaceModule = /** @class */ (function () {
    function MarketPlaceModule() {
    }
    MarketPlaceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_market_place_routing__WEBPACK_IMPORTED_MODULE_5__["MarketPlaceRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_market_place_component__WEBPACK_IMPORTED_MODULE_4__["MarketPlaceComponent"]]
        })
    ], MarketPlaceModule);
    return MarketPlaceModule;
}());



/***/ }),

/***/ "./src/app/market-place/market-place.routing.ts":
/*!******************************************************!*\
  !*** ./src/app/market-place/market-place.routing.ts ***!
  \******************************************************/
/*! exports provided: MarketPlaceRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketPlaceRoutes", function() { return MarketPlaceRoutes; });
/* harmony import */ var _market_place_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./market-place.component */ "./src/app/market-place/market-place.component.ts");

var MarketPlaceRoutes = [{
        path: '',
        children: [{
                path: 'market-place',
                component: _market_place_component__WEBPACK_IMPORTED_MODULE_0__["MarketPlaceComponent"]
            }]
    }];


/***/ })

}]);
//# sourceMappingURL=market-place-market-place-module.js.map