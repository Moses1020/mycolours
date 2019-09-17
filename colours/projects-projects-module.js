(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["projects-projects-module"],{

/***/ "./src/app/projects/join-project/join-project.component.css":
/*!******************************************************************!*\
  !*** ./src/app/projects/join-project/join-project.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-cell{\r\n     padding-left: 12px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvam9pbi1wcm9qZWN0L2pvaW4tcHJvamVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0tBQ0ssa0JBQWtCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcHJvamVjdHMvam9pbi1wcm9qZWN0L2pvaW4tcHJvamVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYi1jZWxse1xyXG4gICAgIHBhZGRpbmctbGVmdDogMTJweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/projects/join-project/join-project.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/projects/join-project/join-project.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" *ngIf=\"afAuth.user | async as user\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"row\">\n        <div class=\"card col-lg-12\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <!-- <h3>Some Title Here</h3> -->\n                <h5 class=\"title na-am\">Search a Project<br><small>by filtering...</small></h5>\n                <div class=\"card \">\n                  <div class=\"card-body\">\n                    <div class=\"nav-tabs-navigation\">\n                      <div class=\"nav-tabs-wrapper\">\n                        <ul id=\"tabs\" class=\"nav nav-tabs sma na-p\" role=\"tablist\">\n                          <li class=\"nav-item\">\n                            <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\" (click)=\"clearSearchData()\" role=\"tab\" aria-expanded=\"true\">Search\n                              by Location</a>\n                          </li>\n                          <li class=\"nav-item\">\n                            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#profile\" (click)=\"clearSearchData()\" role=\"tab\" aria-expanded=\"false\">Sector</a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                    <div id=\"my-tab-content\" class=\"tab-content text-center\">\n                      <div class=\"tab-pane active\" id=\"home\" role=\"tabpanel\" aria-expanded=\"true\">\n                        <div class=\"card-body \">\n                          <div class=\"row\">\n                            <div class=\"col-md-8 ml-auto mr-auto\">\n                              <form class=\"form-horizontal\">\n                                <div class=\"form-group\">\n                                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchData\" name=\"location_input\"\n                                    placeholder=\"Enter location\">\n                                </div>\n                              </form>\n                            </div>\n                            <div class=\"col-md-4 card-footer \">\n                              <button type=\"submit\" class=\"info btn-link\" (click)=\"search('location', searchData);showTable()\">Search</button>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"tab-pane\" id=\"profile\" role=\"tabpanel\" aria-expanded=\"false\">\n                        <div class=\"card-body \">\n                          <div class=\"row\">\n                            <div class=\"col-md-8 ml-auto mr-auto\">\n                              <form class=\"form-horizontal\">\n                                <div class=\"form-group\">\n                                  <input type=\"text\" [(ngModel)]=\"searchData\" name=\"sector_input\" class=\"form-control\"\n                                    placeholder=\"Input sector\">\n                                </div>\n                              </form>\n                            </div>\n                            <div class=\"col-md-4 card-footer \">\n                              <button type=\"submit\" class=\"info btn-link\" (click)=\"search('sector', searchData);showTable()\">Search</button>                            \n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <ng-container *ngIf=\"showSearch\">\n                <div class=\"col-sm-6\">\n                  <h5 class=\"title na-am\" style=\"margin-left: 15px;\">Project search results</h5>    \n                  <div class=\"card-body \">\n                    <p class=\"sma na-p\">Projects in {{ searchData }} </p>\n                    <div class=\"table-responsive cont scrol-em\">\n                      <table class=\"table\">\n                        <thead class=\"sma na-sma\">\n                          <th class=\"text-left\">Project</th>\n                          <th class=\"text-left\">Sector</th>\n                          <th class=\"text-left\">Location</th>\n                          <th>Action</th>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let project of selectedProjects | async \">\n                            <td class=\"text-left tab-cell\">{{ project.name }} </td>\n                            <td class=\"text-left tab-cell\">{{ project.sector }}</td>\n                            <td class=\"text-left tab-cell\">{{ project.location }}</td>\n                            <td class=\"text-center\">\n                              <button class=\"success btn-link join\" rel=\"tooltip\" title=\"Connect to {{project.name}}\"\n                                (click)=\"selectPoject(project)\" data-toggle=\"modal\" data-target=\"#myModalNO\">\n                                <font size=2>Join </font>\n                              </button>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" hidden>\n        <div class=\"col-lg-12\">\n          <div class=\"card card-pricing \">\n            <div class=\"card-header text-left\">\n              <h6 class=\"card-category\"> All Companies</h6>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-12\">\n                <div class=\"card-body \">\n                  <code hidden>All Companies</code>\n                  <div class=\"table-responsive pro_info\">\n                    <table class=\"table\">\n                      <thead>\n                        <th class=\"text-left\">Name</th>\n                        <th class=\"text-left\">Sector</th>\n                        <th class=\"text-left\">Location</th>\n                        <th>Action</th>\n                      </thead>\n                      <tbody>\n                        <tr *ngFor=\"let enterprise of enterprises | async \">\n                          <td class=\"text-left tab-cell\">{{ enterprise.name }} </td>\n                          <td class=\"text-left tab-cell\">{{ enterprise.sector }}</td>\n                          <td class=\"text-left tab-cell\">{{ enterprise.location }}</td>\n                          <td class=\"text-center\">\n                            <button class=\"success btn-link join\" rel=\"tooltip\" title=\"Connect to {{enterprise.name}}\"\n                              (click)=\"selectCompany(enterprise)\" data-toggle=\"modal\" data-target=\"#myModal\">\n                              <font size=2>connect </font>\n                            </button>\n                        </tr>\n                      </tbody>\n                    </table>\n\n                    <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\"\n                      aria-hidden=\"true\">\n\n                      <div class=\"modal-dialog modal-sm\">\n                        <div class=\"modal-content\">\n                          <div class=\"modal-header justify-content-center\">\n                            <div class=\"modal-profile ml-auto mr-auto text-warning\">\n                              <i class=\"nc-icon nc-bulb-63\"></i>\n                            </div>\n                          </div>\n                          <div class=\"modal-body\">\n                            <p>Cornfirm, you want to connect to <b class=\"primary-color\">{{ (selectedCompany)?.name\n                                }}</b></p>\n                          </div>\n                          <div class=\"modal-footer\">\n                            <div class=\"left-side\">\n                              <button type=\"button\" class=\"btn btn-link btn-link\" data-dismiss=\"modal\">Close</button>\n                            </div>\n                            <div class=\"divider\"></div>\n                            <div class=\"right-side\">\n                              <!-- <button type=\"button\" class=\"btn btn-link btn-link\" (click)=\"connect2Enterprise(selectedCompany)\" -->\n                              <button type=\"button\" class=\"btn btn-link btn-link\"\n                                data-dismiss=\"modal\"> Confirm</button>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"myModalNO\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header justify-content-center\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <i class=\"nc-icon nc-simple-remove\"></i>\n        </button>\n        <p class=\"title-up clrs-h1\">Select Company to Join {{ (projectToJoin)?.name }} project.<br>\n      </div>\n      <div class=\"card-body \">\n        \n        <!-- <form class=\"form-horizontal\"> -->\n          <div class=\"row\">\n            <label class=\"col-md-3 col-form-label text-left\" style=\"margin-left: 2em;\">Company</label>\n            <div class=\"col-md-9 col-lg-8 col-sm-7\">\n              <ng-select [items]=\"enterprises2nd | async\" bindLabel=\"name\" name=\"WorkAction\" placeholder=\"Select company\"\n                (change)=\"selectCompany(ent)\" [(ngModel)]=\"ent\">\n              </ng-select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-md-3 col-form-label text-left\" style=\"margin-left: 2em;\">Champion</label>\n            <div class=\"col-md-9 col-lg-8 col-sm-7\">\n              <ng-select [items]=\"staff | async\" bindLabel=\"name\" name=\"WorkAction\" placeholder=\"Select champion\"\n                (change)=\"selectStaff(person)\" [(ngModel)]=\"person\">\n              </ng-select>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-md-3 col-form-label text-left\" style=\"margin-left: 2em; margin-bottom: 0px; margin-top: 12px;\">Roles</label>\n            <div class=\"col-md-9 col-lg-8 col-sm-7\">\n              <tag-input [(ngModel)]='roles' theme='minimal'></tag-input>\n            </div>\n          </div>\n        <!-- </form> -->\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"left-side\">\n          <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n          <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"sendRequest()\" data-dismiss=\"modal\">Confirm</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/projects/join-project/join-project.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/projects/join-project/join-project.component.ts ***!
  \*****************************************************************/
/*! exports provided: JoinProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinProjectComponent", function() { return JoinProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_services_initialise_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/initialise.service */ "./src/app/services/initialise.service.ts");
/* harmony import */ var app_services_enterprise_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/enterprise.service */ "./src/app/services/enterprise.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var JoinProjectComponent = /** @class */ (function () {
    function JoinProjectComponent(afAuth, router, is, es, afs) {
        this.afAuth = afAuth;
        this.router = router;
        this.is = is;
        this.es = es;
        this.afs = afs;
        this.showme = false;
        this.showText = false;
        this.showCompUser = false;
        this.showRole = false;
        this.showCompWorkers = false;
        this.showSearch = false;
        this.show = true;
        this.buttonName = 'Show';
        this.selectedCompany = this.is.getSelectedCompany();
        this.company = this.is.getSelectedCompany();
        this.selectedProject = this.is.getSelectedProject();
        this.searchData = "";
        this.projectToJoin = { name: "", type: "", by: "", byId: "", joiningCompanyChampion: "" };
    }
    JoinProjectComponent.prototype.clearSearchData = function () {
        this.searchData = "";
    };
    JoinProjectComponent.prototype.toggle = function () {
        this.show = !this.show;
        if (this.show)
            this.buttonName = "Hide";
        else
            this.buttonName = "Show";
    };
    JoinProjectComponent.prototype.toggleName = function () {
        this.showme = true;
        this.hideEnterpriseTable();
        this.showText2();
        // this.showUsersTable()
    };
    JoinProjectComponent.prototype.showTable = function () {
        this.showSearch = true;
    };
    JoinProjectComponent.prototype.hideEnterpriseTable = function () {
        this.show = false;
    };
    JoinProjectComponent.prototype.showEnterpriseTable = function () {
        this.show = true;
    };
    JoinProjectComponent.prototype.hideText2 = function () {
        this.showText = false;
        this.showUsersTable();
    };
    JoinProjectComponent.prototype.showText2 = function () {
        this.showText = true;
    };
    JoinProjectComponent.prototype.hideUsersTable = function () {
        this.showCompWorkers = false;
    };
    JoinProjectComponent.prototype.showUsersTable = function () {
        this.showCompWorkers = true;
    };
    JoinProjectComponent.prototype.showUser = function () {
        this.showCompUser = true;
        this.hideUsersTable();
        this.showRoleInput();
    };
    JoinProjectComponent.prototype.showRoleInput = function () {
        this.showRole = true;
    };
    JoinProjectComponent.prototype.selectPoject = function (project) {
        console.log(project);
        this.projectToJoin = project;
        this.projectId = project.id;
        console.log(this.projectToJoin);
    };
    JoinProjectComponent.prototype.selectCompany = function (company) {
        // console.log(company.id);
        console.log(company);
        this.selectedCompany = company;
        console.log(this.selectedCompany);
        var companyId = company.id;
        this.staff = this.es.getStaff(companyId);
    };
    JoinProjectComponent.prototype.selectStaff = function (user) {
        console.log(user);
        if (user.id) {
            var userId = user.id;
            this.selectedStaff = user;
            console.log(this.selectedStaff);
        }
    };
    JoinProjectComponent.prototype.check = function () {
    };
    JoinProjectComponent.prototype.minimizeSidebar = function () {
        var body = document.getElementsByTagName('body')[0];
        if (misc.sidebar_mini_active === true) {
            body.classList.remove('sidebar-mini');
            misc.sidebar_mini_active = false;
        }
        else {
            setTimeout(function () {
                body.classList.add('sidebar-mini');
                // misc.sidebar_mini_active = true;
            }, 300);
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    JoinProjectComponent.prototype.search = function (testVariavle, x) {
        // this.viewEnterprises(testVariavle, x);
        var xCapitalized = x.charAt(0).toUpperCase() + x.slice(1);
        this.minimizeSidebar();
        console.log(testVariavle + " " + xCapitalized);
        this.viewProjects(testVariavle, xCapitalized);
    };
    JoinProjectComponent.prototype.viewProjects = function (checkVariable, testData) {
        this.selectedProjects = this.afs.collection('Projects', function (ref) { return ref.where(checkVariable, '==', testData); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        return this.selectedProjects;
    };
    JoinProjectComponent.prototype.sendRequest = function () {
        var companyId = this.ent.id;
        console.log(companyId);
        console.log(this.ent);
        this.ent.roles = this.roles;
        // let project = this.projectToJoin;
        var project = {
            name: this.projectToJoin.name,
            id: this.projectToJoin.id,
            location: this.projectToJoin.location,
            sector: this.projectToJoin.sector,
            type: this.projectToJoin.type,
            companyName: this.projectToJoin.companyName,
            companyId: this.projectToJoin.companyId,
        };
        var champId = this.projectToJoin.champion.id;
        var champById = this.projectToJoin.byId;
        console.log(champId);
        var partId;
        console.log(this.user);
        partId = this.user.uid;
        console.log(companyId);
        var projectId = this.projectToJoin.id;
        var champion;
        champion = this.selectedStaff;
        champion.project = project;
        champion.company = this.ent;
        var me;
        me = this.myData;
        me.project = project;
        me.company = this.ent;
        var championdataId = champId + moment__WEBPACK_IMPORTED_MODULE_7__().format('DDDDYYYY');
        champion.dataId = championdataId;
        var champion2dataId = champById + moment__WEBPACK_IMPORTED_MODULE_7__().format('DDDDYYYY');
        me.dataId = champion2dataId;
        if (champId != "") {
            if (champId == this.userId) {
                this.afs.collection('Users').doc(this.projectToJoin.byId).collection('ProjectRequests').doc(championdataId).set(me);
                this.afs.collection('Projects').doc(projectId).collection('ProjectRequests').doc(championdataId).set(me);
                // this.showNotification('inviteCompnay', 'top', 'right');
            }
            else {
                this.afs.collection('Users').doc(champId).collection('ProjectRequests').doc(championdataId).set(champion);
                this.afs.collection('Projects').doc(projectId).collection('ProjectRequests').doc(championdataId).set(champion);
                // this.showNotification('inviteCompnay', 'top', 'right');
            }
        }
        if (champId == "") {
            this.afs.collection('Users').doc(this.projectToJoin.byId).collection('ProjectRequests').doc(champion2dataId).set(me);
            this.afs.collection('Projects').doc(projectId).collection('ProjectRequests').doc(champion2dataId).set(me);
            // this.showNotification('inviteCompnay', 'top', 'right');
        }
        this.resetForm();
    };
    JoinProjectComponent.prototype.resetForm = function () {
        this.selectedCompany = this.is.getSelectedCompany();
    };
    JoinProjectComponent.prototype.connect2Project = function () {
        console.log(this.selectedCompany);
        console.log(this.projectToJoin);
        console.log(this.selectedStaff);
        var user;
        user.project = this.projectToJoin.
            user.company = this.selectedCompany;
        user = this.selectedStaff;
        var me;
        me.project = this.projectToJoin;
        me.company = this.selectedCompany;
        me = this.myData;
        this.selectedCompany.champion = user;
        console.log(this.selectedCompany);
        var projectId = this.projectToJoin.id;
        console.log(projectId);
        var scompanyId = this.selectedCompany.id;
        this.projectToJoin.companyName = this.selectedCompany.name;
        this.projectToJoin.companyId = this.selectedCompany.id;
        var projectsRef = this.afs.collection('Projects');
        var companysRef = this.afs.collection('Enterprises');
        companysRef.doc(scompanyId).collection('projects').doc(projectId).set(this.projectToJoin);
        var allMyProjectsRef = this.afs.collection('/Users').doc(this.userId).collection('projects').doc(projectId); //point to project doc
        allMyProjectsRef.set(this.projectToJoin); // set the project
        var setCompany = projectsRef.doc(projectId).collection('enterprises').doc(scompanyId);
        setCompany.set(this.selectedCompany);
        setCompany.collection('labour').doc(this.userId).set(me);
        projectsRef.doc(projectId).collection('Participants').doc(this.userId).set(me);
        companysRef.doc(this.compId).collection('projects').doc(projectId).collection('labour').doc(this.userId).set(me);
        setCompany.collection('labour').doc(user.id).set(user);
        projectsRef.doc(projectId).collection('Participants').doc(user.id).set(user);
        companysRef.doc(this.compId).collection('projects').doc(projectId).collection('labour').doc(user.id).set(user);
    };
    JoinProjectComponent.prototype.dataCall = function () {
        var _this = this;
        this.myDocument = this.afs.collection('Users').doc(this.userId);
        this.userProfile = this.myDocument.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (a) {
            var data = a.payload.data();
            var id = a.payload.id;
            return __assign({ id: id }, data);
        }));
        this.userProfile.subscribe(function (userData) {
            console.log(userData);
            var myData = {
                name: _this.user.displayName,
                email: _this.user.email,
                bus_email: userData.bus_email,
                id: _this.user.uid,
                phoneNumber: _this.user.phoneNumber,
                photoURL: _this.user.photoURL,
                address: userData.address,
                nationalId: userData.nationalId,
                nationality: userData.nationality,
            };
            if (userData.address == "" || userData.address == null || userData.address == undefined) {
                userData.address = "";
            }
            else {
            }
            if (userData.phoneNumber == "" || userData.phoneNumber == null || userData.phoneNumber == undefined) {
                userData.phoneNumber = "";
            }
            else {
            }
            if (userData.bus_email == "" || userData.bus_email == null || userData.bus_email == undefined) {
                userData.bus_email = "";
            }
            else {
            }
            if (userData.nationalId == "" || userData.nationalId == null || userData.nationalId == undefined) {
                userData.nationalId = "";
            }
            else {
            }
            if (userData.nationality == "" || userData.nationality == null || userData.nationality == undefined) {
                userData.nationality = "";
            }
            else {
            }
            _this.myData = myData;
            _this.userData = userData;
        });
        this.enterprises = this.es.getCompanies(this.userId);
        this.enterprises2nd = this.es.getCompanies(this.userId);
    };
    JoinProjectComponent.prototype.OnInit = function () { };
    JoinProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.user.subscribe(function (user) {
            _this.userId = user.uid;
            _this.user = user;
            _this.coloursUsername = user.displayName;
            console.log(_this.userId);
            console.log(_this.user);
            _this.dataCall();
        });
    };
    JoinProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-join-project',
            template: __webpack_require__(/*! ./join-project.component.html */ "./src/app/projects/join-project/join-project.component.html"),
            styles: [__webpack_require__(/*! ./join-project.component.css */ "./src/app/projects/join-project/join-project.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], app_services_initialise_service__WEBPACK_IMPORTED_MODULE_5__["InitialiseService"], app_services_enterprise_service__WEBPACK_IMPORTED_MODULE_6__["EnterpriseService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], JoinProjectComponent);
    return JoinProjectComponent;
}());



/***/ }),

/***/ "./src/app/projects/p-create/p-create.component.css":
/*!**********************************************************!*\
  !*** ./src/app/projects/p-create/p-create.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loBorder{\r\n    border-top: none;\r\n    border-left: 0px;\r\n    border-right: 0px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcC1jcmVhdGUvcC1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3AtY3JlYXRlL3AtY3JlYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9Cb3JkZXJ7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDBweDtcclxuICAgIGJvcmRlci1yaWdodDogMHB4XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/projects/p-create/p-create.component.html":
/*!***********************************************************!*\
  !*** ./src/app/projects/p-create/p-create.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xs-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"nav-tabs-navigation\" style=\"margin-bottom: 0px;\">\r\n                        <div class=\"nav-tabs-wrapper\">\r\n                            <ul id=\"tabs\" class=\"nav nav-tabs\" role=\"tablist\">\r\n                                <!-- <li class=\"nav-item\">\r\n                                    <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#project\" role=\"tab\" aria-expanded=\"true\">Projects</a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#company\" role=\"tab\" aria-expanded=\"false\">Enterprise</a>\r\n                                </li> -->\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link active\" data-toggle=\"tab\" routerLink=\"/projects/p-create\" role=\"tab\" aria-expanded=\"true\">Projects</a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" data-toggle=\"tab\" routerLink=\"/enterprises/create\" role=\"tab\" aria-expanded=\"false\">Enterprise</a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <div id=\"my-tab-content\" class=\"tab-content\">\r\n                        <div class=\"tab-pane active\" id=\"project\" role=\"tabpanel\" aria-expanded=\"true\">\r\n                            <div class=\"col-md-12 ml-auto mr-auto\">\r\n                                <div class=\"card\">\r\n                                    <div *ngIf=\"pfirstPage\" class=\"col-md-12\">\r\n                                        <div class=\"card-header \">\r\n                                            <div class=\"row\">\r\n                                                <h5 class=\"title na-am\">Create new Project</h5>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"pSecondPage\" class=\"col-md-12\">\r\n                                        <div class=\"card-header \">\r\n                                            <div class=\"row\">\r\n                                                <h5 class=\"title na-am\">{{ project.name }} <br> <small>Add Project\r\n                                                        Description</small></h5>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"pfirstPage\" class=\"col-md-10 ml-auto mr-auto\">\r\n                                        <div class=\"card-body \">\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Project Name</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <p *ngIf=\"projectNameFieldStatus\" class=\"category text-danger\"\r\n                                                        style=\"margin-top:-1em; cursor: pointer;\">Name Required</p>\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"project.name\" name=\"enterprise_name\"\r\n                                                            class=\"form-control\" placeholder=\"e.g..Bob Corp\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Industry Sector</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <p *ngIf=\"projectSectorFieldStatus\" class=\"category text-danger\"\r\n                                                        style=\"margin-bottom:0em; cursor: pointer;\">Sector Required</p>\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"project.sector\" class=\"form-control\"\r\n                                                            placeholder=\"e.g..Transport\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Location</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <p *ngIf=\"projectLocationFieldStatus\" class=\"category text-danger\"\r\n                                                        style=\"margin-bottom:0em; cursor: pointer;\">Location Required</p>\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"project.location\" name=\"enterprise_location\"\r\n                                                            class=\"form-control\" placeholder=\"e.g..Mutare\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Project Type</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <p *ngIf=\"projectTypeFieldStatus\" class=\"category text-danger\"\r\n                                                        style=\"margin-bottom:0em; cursor: pointer;\">Type Required</p>\r\n                                                    <div class=\"form-group\">\r\n                                                        <ng-select [items]=\"projectType\" title=\"Select Project Type\"\r\n                                                            bindLabel=\"name\" name=\"ptype\" placeholder=\"Project Type\"\r\n                                                            (change)=\"checkType(typeSet)\" [(ngModel)]=\"typeSet\">\r\n                                                        </ng-select>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\" *ngIf=\"showComp\">\r\n                                                <label class=\"col-md-3 col-form-label\">Select Company</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <p *ngIf=\"projectCompanyFieldStatus\" class=\"category text-danger\"\r\n                                                        style=\"margin-bottom:0em; cursor: pointer;\">Company Required</p>\r\n                                                    <div class=\"form-group\">\r\n                                                        <ng-select [items]=\"myEnterprises | async\" title=\"Select Company\"\r\n                                                            bindLabel=\"name\" name=\"pCompany\" placeholder=\"Company\"\r\n                                                            (change)=\"showCompanyTeam(setCompany)\" [(ngModel)]=\"setCompany\">\r\n                                                        </ng-select>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\" *ngIf=\"showComp\">\r\n                                                <label class=\"col-md-3 col-form-label\">Select Champion</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <p *ngIf=\"projectCompCampFieldStatus\" class=\"category text-danger\"\r\n                                                        style=\"margin-bottom:0em; cursor: pointer;\">Champ Required</p>\r\n                                                    <div class=\"form-group\">\r\n                                                        <ng-select [items]=\"comWorkers | async\" title=\"Select Company\"\r\n                                                            bindLabel=\"name\" name=\"pChampion\" placeholder=\"Champion\"\r\n                                                            (change)=\"setNext(setChampion)\" [(ngModel)]=\"setChampion\">\r\n                                                        </ng-select>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\" *ngIf=\"showComp\">\r\n                                                <label class=\"col-md-3 col-form-label\">Roles</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <tag-input [(ngModel)]='roles' theme='minimal'></tag-input>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"card-footer\" *ngIf=\"showNext\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-11 ml-auto mr-auto\">\r\n                                                        <!-- <button type=\"submit\" style=\"padding-right:0em\" class=\"pull-left primary btn-link\" routerLink=\"/join-project\">Join a Project</button> -->\r\n                                                    </div>\r\n                                                    <div class=\"col-md-1 mr-auto\">\r\n                                                        <button type=\"submit\" (click)=\"testProjectFilds(project, typeSet, setCompany, setChampion)\"\r\n                                                            name=\"enterprise_sector\" class=\"btn-link\">Next</button>\r\n                                                    </div><!-- (click)=\"saveProject()\" -->\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"pSecondPage\" class=\"col-md-10 ml-auto mr-auto\">\r\n                                        <div class=\"card-body \">\r\n                                            <!-- <a class=\"card-category clrs-h1\">{{ project.name }} <br> <small>Add Project Description</small></a>     -->\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-12\">\r\n                                                    <p *ngFor=\"let xsection of theSections | async\">\r\n                                                        <span class=\"col-md-4\">{{ xsection.no }}</span>\r\n                                                        <span class=\"col-md-8\"> {{ xsection.name }}</span>\r\n                                                        <span>\r\n                                                            <button class=\"btn-link\" (click)=\"deleteSection(xsection)\"><i\r\n                                                                    class=\"fa fa-times\"></i></button>\r\n                                                        </span><br>\r\n                                                    </p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <p>Create Sections for the Project</p>\r\n                                            <div class=\"row\" rel=\"tooltip\" title=\"Section No\">\r\n                                                <label class=\"col-md-3 col-form-label\">No</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"number\" [(ngModel)]=\"section.no\" name=\"enterprise_location\"\r\n                                                            class=\"form-control\" placeholder=\"e.g   1,2,3....\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\" rel=\"tooltip\" title=\"Section Nameo\">\r\n                                                <label class=\"col-md-3 col-form-label\">Name</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"section.name\" name=\"enterprise_location\"\r\n                                                            class=\"form-control\" placeholder=\"e.g. Section Name\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-10\"></div>\r\n                                                <div class=\"col-md-2\">\r\n                                                    <button type=\"submit reset\" class=\"btn-link\" (click)=\"addSection()\">Add</button>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"card-footer\" *ngIf=\"showNext\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-3\">\r\n                                                    </div>\r\n                                                    <div class=\"col-md-8\">\r\n                                                        <button type=\"submit\" name=\"nextBtn\" (click)=\"pBckPage()\" class=\"btn-link text-info\">Dismiss</button>\r\n                                                        <button type=\"submit\" (click)=\"finish()\" name=\"enterprise_sector\"\r\n                                                            class=\"btn-link\">Save</button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"card-footer \">\r\n                                            <div class=\"row\">\r\n                                                <h5 class=\"title na-am\">Or Join Existing Project <a routerLink=\"/join-project\">\r\n                                                        <small> click to join </small></a></h5>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane\" id=\"company\" role=\"tabpanel\" aria-expanded=\"false\">\r\n                            <div class=\"col-md-12 ml-auto mr-auto\">\r\n                                <div class=\"card\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"card-header \">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-8 ml-auto mr-auto\">\r\n                                                    <h5 class=\"title na-am\">Create Company</h5>\r\n                                                </div>\r\n                                                <div class=\"col-md-4 mr-auto ml-auto\" style=\"margin-right:0em\">\r\n                                                    <!-- <button type=\"submit\" style=\"padding-right:0em\" class=\"pull-left primary btn-link\" routerLink=\"/enterprises/join-enterprise\">Join existing Enterprise</button> -->\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"firstPage\" class=\"col-md-10 ml-auto mr-auto\">\r\n                                        <div class=\"card-body\">\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Company Name</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"newEnterprise.name\" name=\"enterprise_name\"\r\n                                                            class=\"form-control\" placeholder=\"e.g..Bob Corp\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Location</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"newEnterprise.location\" name=\"enterprise_location\"\r\n                                                            class=\"form-control\" placeholder=\"e.g..Mutare\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Industry Sector</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"newEnterprise.sector\" class=\"form-control\"\r\n                                                            placeholder=\"e.g..Transport\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Services</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <tag-input [(ngModel)]='serviceTags' theme='minimal'></tag-input>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"card-footer \">\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3\"></label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <button type=\"submit\" name=\"nextBtn\" (click)=\"nxtPage()\" class=\"btn-link text-info\">Next</button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"secondPage\" class=\"col-md-10 ml-auto mr-auto\">\r\n                                        <div class=\"card-body\">\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Telephone</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"newEnterprise.telephone\" name=\"enterprise_location\"\r\n                                                            class=\"form-control\" placeholder=\"e.g. 06 66666666\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Mobile</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"compUser.phoneNumber\" name=\"enterprise_location\" class=\"form-control\"\r\n                                                            placeholder=\"e.g. +263778880000\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Address</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"newEnterprise.address\" name=\"enterprise_location\"\r\n                                                            class=\"form-control\" placeholder=\"e.g. House#, street, location ,Town\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Email</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"email\" [(ngModel)]=\"compUser.bus_email\" name=\"enterprise_location\"\r\n                                                            class=\"form-control\" placeholder=\"e.g. name@bus_email.com\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Nation</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"compUser.nationality\" name=\"enterprise_location\"\r\n                                                            class=\"form-control\" placeholder=\"e.g. Zimbabwe\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">ID number</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"compUser.nationalId\" name=\"enterprise_location\"\r\n                                                            class=\"form-control\" placeholder=\"e.g. 08-1112389 N13\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <!-- <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Tax Clearance Doc</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\r\n                                                        <input class=\"form-control\" type=\"file\" style=\"border: 0px;\" (click)=\"upload($event,newEnterprise.taxDocument)\" name=\"taxDoc\" accept=\".png,.jpg,.pdf\" [(ngModel)]=\"newEnterprise.taxDocument\"/>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div> -->\r\n                                        </div>\r\n                                        <div class=\"card-footer \">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-3\">\r\n                                                </div>\r\n                                                <div class=\"col-md-8\">\r\n                                                    <button type=\"submit\" name=\"nextBtn\" (click)=\"bckPage()\" class=\"btn-link text-info\">Back</button>\r\n                                                    <!-- <button type=\"submit\" (click)=\"saveEnterprise()\" name=\"enterprise_sector\" class=\"btn-link text-info\">Save company</button> -->\r\n                                                    <button type=\"submit\" (click)=\"testFileds()\" name=\"enterprise_sector\" class=\"btn-link text-info\">Save company</button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"card-footer \">\r\n                                            <div class=\"row\">\r\n                                                <!-- <div class=\"col-md-8 ml-auto mr-auto\"> -->\r\n                                                <h5 class=\"title na-am\">Or Join an existing Company <small><span>\r\n                                                            <button class=\"btn-link\" routerLink=\"/enterprises/join-enterprise\">click\r\n                                                                here</button></span></small>\r\n                                                </h5>\r\n                                                <!-- </div>\r\n                                                <div class=\"col-md-4 mr-auto ml-auto\" style=\"margin-right:0em\">\r\n                                                    <button type=\"submit\" style=\"padding-right:0em\" class=\"pull-left primary btn-link\" routerLink=\"/enterprises/join-enterprise\">Join existing Enterprise</button>\r\n                                                </div> -->\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"pModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header justify-content-center\">\r\n                <p>Select Company</p>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <i class=\"nc-icon nc-simple-remove\"></i>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"table-responsive pro_info\">\r\n                    <table class=\"table\">\r\n                        <thead class=\"\">\r\n                            <th>Name</th>\r\n                            <th>Created By</th>\r\n                            <th>Action</th>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let ent of enterprises | async \">\r\n                                <td>{{ ent.name }} </td>\r\n                                <td>{{ ent.by}}</td>\r\n                                <td class=\"text-center\">\r\n                                    <a class=\"warning btn-link edit\" routerLink=\"#\" rel=\"tooltip\" title=\"select {{ ent.name }}\"\r\n                                        (click)=\"selectCompany(ent)\" data-toggle=\"modal\" data-target=\"#noticeModal\">\r\n                                        <font size=2>Select</font>\r\n                                    </a>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"left-side\">\r\n                    <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Never mind</button>\r\n                </div>\r\n                <div class=\"divider\"></div>\r\n                <div class=\"right-side\">\r\n                    <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"saveProject()\" data-dismiss=\"modal\">Confirm</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade modal-primary\" id=\"pdescription\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-md\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <div class=\"modal-profile ml-auto mr-auto\">\r\n                    <i class=\"fa  fa-list-alt\"></i>\r\n                </div>\r\n                <a class=\"card-category clrs-h1\">{{ project.name }} <br> <small>Add Project Description</small></a>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"row\">\r\n                    <p *ngFor=\"let xsection of theSections | async\">\r\n                        <span class=\"col-md-4\">{{ xsection.no }}</span><span class=\"col-md-8\"> {{ xsection.name }}</span><span><button\r\n                                class=\"btn-link\" (click)=\"deleteSection(xsection)\"><i class=\"fa fa-times\"></i></button></span><br>\r\n                    </p>\r\n                </div>\r\n                <p>Create Sections for the Project</p>\r\n                <div class=\"row\" rel=\"tooltip\" title=\"Section No\">\r\n                    <label class=\"col-md-3 col-form-label\">No</label>\r\n                    <div class=\"col-md-9\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"number\" [(ngModel)]=\"section.no\" name=\"enterprise_location\" class=\"form-control\"\r\n                                placeholder=\"e.g   1,2,3....\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" rel=\"tooltip\" title=\"Section Nameo\">\r\n                    <label class=\"col-md-3 col-form-label\">Name</label>\r\n                    <div class=\"col-md-9\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" [(ngModel)]=\"section.name\" name=\"enterprise_location\" class=\"form-control\"\r\n                                placeholder=\"e.g. Section Name\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-10\"></div>\r\n                <div class=\"col-md-2\">\r\n                    <button type=\"submit reset\" class=\"btn-link\" (click)=\"addSection()\">Add</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"spacer\" style=\"height: 2em\"></div>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"left-side\">\r\n                    <button type=\"button\" (click)=\"dismisProject()\" class=\"btn btn-link\" data-dismiss=\"modal\">Back</button>\r\n                </div>\r\n                <div class=\"divider\"></div>\r\n                <div class=\"right-side\">\r\n                    <button type=\"button\" class=\"btn btn-link\" data-dismiss=\"modal\" (click)=\"finish()\">Save</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/projects/p-create/p-create.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/projects/p-create/p-create.component.ts ***!
  \*********************************************************/
/*! exports provided: CreateProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProjectComponent", function() { return CreateProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_services_project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var app_services_initialise_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/initialise.service */ "./src/app/services/initialise.service.ts");
/* harmony import */ var app_services_enterprise_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/enterprise.service */ "./src/app/services/enterprise.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_9__);
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CreateProjectComponent = /** @class */ (function () {
    // public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });
    // public uploader: FileUploader = new FileUploader({});
    function CreateProjectComponent(afAuth, router, is, es, authService, ps, afs) {
        this.afAuth = afAuth;
        this.router = router;
        this.is = is;
        this.es = es;
        this.authService = authService;
        this.ps = ps;
        this.afs = afs;
        this.projectNameFieldStatus = false;
        this.projectTypeFieldStatus = false;
        this.projectSectorFieldStatus = false;
        this.projectLocationFieldStatus = false;
        this.projectCompanyFieldStatus = false;
        this.projectCompCampFieldStatus = false;
        this.showComp = false;
        this.showNext = false;
        this.firstPageBtn = false;
        this.entName = false;
        this.entSector = false;
        this.entServices = false;
        this.entLocation = false;
        this.telMsg = false;
        this.mobileMsg = false;
        this.addressMsg = false;
        this.emailMsg = false;
        this.countryMsg = false;
        this.nidMsg = false;
        this.firstPage = true;
        this.secondPage = false;
        this.pfirstPageBtn = false;
        this.pfirstPage = true;
        this.pSecondPage = false;
        this.showAddDoc = true;
        this.showDoc = true;
        this.project = is.getSelectedProject();
        this.section = is.getSectionInit();
        this.initArray = [];
        this.initService = { display: "", value: "" };
        this.serviceTags = null;
        // this.newEnterprise = is.getnewEnterprise();
        this.newEnterprise = { name: "", by: "", byId: "", createdOn: "", id: "", location: "", bus_email: "", sector: "", participants: null, champion: this.userChampion, address: "", telephone: "", services: null, taxDocument: "", HnSDocument: "", IndustrialSectorDocument: "" };
        this.taxDocument = null;
        // this.newEnterprise.services = [null];
        console.log('init newCompany services' + this.newEnterprise.services);
        this.compUser = { bus_email: "", nationality: "", nationalId: "", phoneNumber: "" };
        this.userChampion = { name: "", id: "", email: "", bus_email: "", phoneNumber: "", photoURL: "", address: "", nationalId: "", nationality: "" };
        console.log(this.afAuth.user);
        this.enterpriseProjects = this.afs.collection('Projects').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.task = is.getTask();
        this.projectType = [
            { id: 'Personal', name: 'Personal' },
            { id: 'Enterprise', name: 'Enterprise' }
        ];
    }
    CreateProjectComponent.prototype.testProjectFilds = function (project, typeSet, company, champion) {
        console.log(project);
        console.log(typeSet);
        console.log(company.id);
        console.log(champion);
        if (project.name) {
            this.projectNameFieldStatus = false;
            if (project.sector) {
                this.projectNameFieldStatus = false;
                this.projectSectorFieldStatus = false;
                if (project.location) {
                    this.projectNameFieldStatus = false;
                    this.projectSectorFieldStatus = false;
                    this.projectLocationFieldStatus = false;
                    if (typeSet) {
                        this.projectNameFieldStatus = false;
                        this.projectTypeFieldStatus = false;
                        this.projectSectorFieldStatus = false;
                        this.projectLocationFieldStatus = false;
                        if (typeSet.id == 'Enterprise') {
                            console.log(company.id);
                            if (company.id) {
                                this.projectNameFieldStatus = false;
                                this.projectTypeFieldStatus = false;
                                this.projectSectorFieldStatus = false;
                                this.projectLocationFieldStatus = false;
                                this.projectCompanyFieldStatus = false;
                                if (champion.id) {
                                    this.projectNameFieldStatus = false;
                                    this.projectTypeFieldStatus = false;
                                    this.projectSectorFieldStatus = false;
                                    this.projectLocationFieldStatus = false;
                                    this.projectCompanyFieldStatus = false;
                                    this.projectCompCampFieldStatus = false;
                                    this.saveProject();
                                    // this.showNext = true;                  
                                }
                                else {
                                    this.projectCompCampFieldStatus = true;
                                }
                            }
                            else {
                                this.projectCompanyFieldStatus = true;
                            }
                        }
                        else {
                            this.projectNameFieldStatus = false;
                            this.projectTypeFieldStatus = false;
                            this.projectSectorFieldStatus = false;
                            this.projectLocationFieldStatus = false;
                            this.projectCompanyFieldStatus = false;
                            this.projectCompCampFieldStatus = false;
                            this.saveProject();
                        }
                    }
                    else {
                        this.projectTypeFieldStatus = true;
                    }
                }
                else {
                    this.projectLocationFieldStatus = true;
                }
            }
            else {
                this.projectSectorFieldStatus = true;
            }
        }
        else {
            this.projectNameFieldStatus = true;
        }
    };
    CreateProjectComponent.prototype.upload = function (event, file) {
        console.log(file);
        // this.afs.upload.collection('try', event.target.files[0]);
    };
    CreateProjectComponent.prototype.testFileds = function () {
        if (this.newEnterprise.telephone != "") {
            this.telMsg = false;
            console.log('telephone available');
            if (this.compUser.phoneNumber != "") {
                this.mobileMsg = false;
                console.log('mobile available');
                if (this.newEnterprise.address != "") {
                    this.addressMsg = false;
                    console.log('bus_address available');
                    if (this.compUser.bus_email != "") {
                        this.emailMsg = false;
                        console.log('user_email available');
                        if (this.compUser.nationality != "") {
                            this.countryMsg = false;
                            console.log('userNaitionality available');
                            if (this.compUser.nationalId != "") {
                                console.log('userNationalId available');
                                this.nidMsg = false;
                                // this.mobileMsg = false;
                                // this.addressMsg = false;
                                // this.emailMsg = false;
                                // this.countryMsg = false;
                                this.saveEnterprise();
                            }
                            else {
                                console.log('userNationalId available');
                                this.nidMsg = true;
                            }
                        }
                        else {
                            this.countryMsg = true;
                            console.log('userNaitionality un-available');
                        }
                    }
                    else {
                        this.emailMsg = true;
                        console.log('user_email un-available');
                    }
                }
                else {
                    true;
                    this.addressMsg = true;
                    console.log('bus_address un-available');
                }
            }
            else {
                this.mobileMsg = true;
                console.log('mobile un-available');
            }
        }
        else {
            this.telMsg = true;
            console.log('telephone un-available');
        }
    };
    CreateProjectComponent.prototype.nxtPage = function () {
        console.log('Test fields');
        // if (this.newEnterprise.name != "" || this.newEnterprise.location != "") {}
        if (this.newEnterprise.name != "") {
            this.entName = false;
            console.log('Name available');
            if (this.newEnterprise.location != "") {
                this.entLocation = false;
                console.log('Location available');
                if (this.newEnterprise.sector != "") {
                    this.entSector = false;
                    console.log('Sector available');
                    // if (this.newEnterprise.services != null) {
                    if (this.serviceTags != null) {
                        console.log('Sevices available' + this.serviceTags);
                        // this.entName = false;
                        // this.entSector = false;
                        // this.entLocation = false;
                        this.entServices = false;
                        this.firstPage = false;
                        this.secondPage = true;
                    }
                    else {
                        console.log('Services unavailable');
                        this.entServices = true;
                    }
                }
                else {
                    console.log('Sector unavailable');
                    this.entSector = true;
                }
            }
            else {
                console.log('location unavailable');
                this.entLocation = true;
            }
        }
        else {
            console.log('Name unavailable');
            this.entName = true;
        }
    };
    CreateProjectComponent.prototype.bckPage = function () {
        this.firstPage = true;
        this.secondPage = false;
    };
    CreateProjectComponent.prototype.pNxtPage = function () {
        this.pfirstPage = false;
        this.pSecondPage = true;
    };
    CreateProjectComponent.prototype.pBckPage = function () {
        this.pfirstPage = true;
        this.pSecondPage = false;
        this.dismisProject();
    };
    CreateProjectComponent.prototype.selectCompany = function (company) {
        console.log(company);
        this.selectedCompany = company;
    };
    CreateProjectComponent.prototype.showCompanyTeam = function (setCompany) {
        this.comWorkers = this.afs.collection('Enterprises').doc(setCompany.id).collection('Participants').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    };
    CreateProjectComponent.prototype.saveProject = function () {
        var company;
        var pUser = {
            name: this.user.displayName,
            email: this.user.email,
            bus_email: this.userData.bus_email,
            id: this.user.uid,
            phoneNumber: this.user.phoneNumber,
            photoURL: this.user.photoURL,
            address: this.userData.address,
            nationalId: this.userData.nationalId,
            nationality: this.userData.nationality
        };
        console.log(this.project);
        //adding company details  
        console.log(this.setCompany);
        this.project.companyName = this.setCompany.name;
        this.project.companyId = this.setCompany.id;
        this.project.createdOn = new Date().toISOString();
        console.log(this.project.createdOn);
        var prId = this.setCompany;
        this.project.by = this.user.displayName;
        this.project.byId = this.user.uid;
        this.project.type = this.typeSet.id;
        console.log(this.project);
        if (this.setChampion.id == "") {
            this.project.champion = pUser;
        }
        else {
            this.project.champion = this.setChampion;
        }
        var project = this.project;
        this.savedProject = this.project;
        company = this.setCompany;
        console.log(company.name);
        console.log(pUser);
        console.log(this.setCompany);
        console.log(this.roles);
        if (this.setCompany.id != "") {
            company.roles = this.roles;
        }
        // this.ps.addProject(pUser, project, company);
        var championId = this.project.champion.id;
        var projectId = "";
        var dref = this.afs.collection('Projects');
        var entRef = this.afs.collection('Enterprises').doc(company.id).collection('projects');
        var myProRef = this.afs.collection('/Users').doc(this.userId).collection('projects');
        var champProRef = this.afs.collection('/Users').doc(championId).collection('projects');
        myProRef.add(project).then(function (pref) {
            ////Add this.project to users collection of projects
            console.log(pref.id);
            projectId = pref.id; /// Id of the newly created project
            if (project.type === 'Enterprise') {
                console.log(projectId);
                entRef.doc(projectId).set(project);
                champProRef.doc(projectId).set(project);
                dref.doc(projectId).set(project);
                dref.doc(projectId).update({ 'id': projectId });
                champProRef.doc(projectId).update({ 'id': projectId });
                entRef.doc(projectId).update({ 'id': projectId });
                myProRef.doc(projectId).update({ 'id': projectId });
                dref.doc(projectId).collection('Participants').doc(pUser.id).set(pUser);
                dref.doc(projectId).collection('enterprises').doc(company.id).set(company);
                console.log('project Id updated');
                console.log('enterprise project');
            }
            project.id = projectId;
        });
        this.project = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", completion: "" };
        this.setProject(project);
        this.pNxtPage();
    };
    CreateProjectComponent.prototype.setProject = function (project) {
        console.log(project);
        this.savedProject = project;
        console.log(this.savedProject);
    };
    CreateProjectComponent.prototype.dismisProject = function () {
        console.log(this.savedProject);
        // this.ps.dismissProject(this.userId, this.savedProject);
        var championId = this.savedProject.champion.id;
        var projectId = this.savedProject.id;
        var dref = this.afs.collection('Projects');
        var entRef = this.afs.collection('Enterprises').doc(this.savedProject.companyId).collection('projects');
        var myProRef = this.afs.collection('/Users').doc(this.userId).collection('projects');
        var champProRef = this.afs.collection('/Users').doc(championId).collection('projects');
        myProRef.doc(projectId).delete();
        if (this.savedProject.type === 'Enterprise') {
            console.log(projectId);
            dref.doc(projectId).delete();
            entRef.doc(projectId).delete();
            champProRef.doc(projectId).delete();
            console.log('project dismissed');
            console.log('enterprise project dismissed');
        }
        // this.setCompany = this.is.getSelectedCompany();
        // this.savedProject = this.is.getSelectedProject();
        // this.project = this.is.getSelectedProject();
        this.typeSet = { id: "", name: "" };
        this.savedProject = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", completion: "" };
        this.project = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", completion: "" };
        this.setCompany = { name: "", by: "", byId: "", createdOn: "", id: "", bus_email: "", location: "", sector: "", participants: null, champion: null, address: "", telephone: "", services: null, taxDocument: "", HnSDocument: "", IndustrialSectorDocument: "" };
        this.setChampion = { name: "", id: "", email: "", bus_email: "", phoneNumber: "", photoURL: "", address: "", nationalId: "", nationality: "" };
    };
    CreateProjectComponent.prototype.clear = function () {
        this.roles = null;
        this.typeSet = { id: "", name: "" };
        this.setChampion = null;
        this.savedProject = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", completion: "" };
        this.project = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", completion: "" };
        this.setCompany = { name: "", by: "", byId: "", createdOn: "", id: "", bus_email: "", location: "", sector: "", participants: null, champion: null, address: "", telephone: "", services: null, taxDocument: "", HnSDocument: "", IndustrialSectorDocument: "" };
    };
    CreateProjectComponent.prototype.checkType = function (data) {
        if (data.id == "Enterprise") {
            this.showComp = true;
        }
        else {
            this.showComp = false;
            rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"];
        }
    };
    CreateProjectComponent.prototype.setNext = function (data) {
        console.log(data);
        console.log(data.id);
        if (data.id != "") {
            this.showNext = true;
        }
        else {
            this.showNext = false;
            rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"];
        }
    };
    // setDocs(){
    //   this.showDoc = true;
    //   this.showAddDoc = false;
    // }
    // showAddDocs() {
    //   this.showDoc = false;
    //   this.showAddDoc = true;
    // }
    CreateProjectComponent.prototype.addSection = function () {
        console.log(this.section);
        console.log(this.savedProject);
        this.section.companyId = this.savedProject.companyId;
        this.section.companyName = this.savedProject.companyName;
        this.section.projectId = this.savedProject.id;
        this.section.projectName = this.savedProject.name;
        var xsection = this.section;
        var project = this.savedProject;
        var projectId = this.savedProject.id;
        this.projectId = this.savedProject.id;
        var dref = this.afs.collection('Projects').doc(projectId).collection('sections');
        var entRef = this.afs.collection('Enterprises').doc(project.companyId).collection('projects').doc(projectId).collection('sections');
        var myProRef = this.afs.collection('/Users').doc(this.myData.id).collection('projects').doc(projectId).collection('sections');
        myProRef.add(this.section).then(function (ref) {
            var sectionId = ref.id;
            if (project.type == 'Personal') {
                myProRef.doc(sectionId).update({ "id": sectionId });
            }
            else {
                dref.doc(sectionId).set(xsection);
                entRef.doc(sectionId).set(xsection);
                dref.doc(sectionId).update({ "id": sectionId });
                entRef.doc(sectionId).update({ "id": sectionId });
                myProRef.doc(sectionId).update({ "id": sectionId });
            }
        });
        this.section = { id: "", no: 0, name: "", projectId: "", projectName: "", companyId: "", companyName: "", Bills: null };
        this.theSections = this.ps.getProjectSections(this.savedProject.id);
        this.newProjectSections = myProRef.valueChanges();
    };
    CreateProjectComponent.prototype.showNotification = function (data, from, align) {
        // var type = ['', 'info', 'success', 'warning', 'danger'];
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        if (data === 'project') {
            $.notify({
                icon: "ti-gift",
                message: "A new project has been created <br> check colours projects dropdown."
            }, {
                type: type[color],
                timer: 4000,
                placement: {
                    from: from,
                    align: align
                },
                template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
            });
        }
        if (data === 'comp') {
            $.notify({
                icon: "ti-gift",
                message: "A new enterprise has been created <b> check colours enterprise dropdown."
            }, {
                type: type[color],
                timer: 4000,
                placement: {
                    from: from,
                    align: align
                },
                template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
            });
        }
        this.clear();
    };
    CreateProjectComponent.prototype.finish = function () {
        // this.router.navigate(['projects/', this.savedProject.id]).then(this.clear);
        // this.router.navigate(['projects/', this.savedProject.id]);
        // this.router.navigate(['/projects/', this.savedProject.id]);
        // nrouter.navigate(['enterprises/', compRef]);
        this.showNotification('project', 'top', 'right');
        this.pBckPage();
        // alert(this.savedProject.name + 'project has been created check')
        this.clear();
    };
    CreateProjectComponent.prototype.deleteSection = function (section) {
        var sectionId = section.id;
        var dref = this.afs.collection('Projects').doc(section.projectId).collection('sections');
        var entRef = this.afs.collection('Enterprises').doc(section.companyId).collection('projects').doc(section.projectId).collection('sections');
        var myProRef = this.afs.collection('/Users').doc(this.myData.id).collection('projects').doc(section.projectId).collection('sections');
        dref.doc(sectionId).delete();
        entRef.doc(sectionId).delete();
        myProRef.doc(sectionId).delete();
    };
    CreateProjectComponent.prototype.sectionInit = function () {
        this.project = this.is.getSelectedProject();
        this.savedProject = this.is.getSelectedProject();
        this.section = this.is.getSectionInit();
    };
    CreateProjectComponent.prototype.deleteProject = function (projectId) {
        var _this = this;
        this.afAuth.user.subscribe(function (user) {
            console.log(projectId);
            var prodocref = _this.afs.collection('/Users').doc(user.uid).collection('projects').doc(projectId);
            prodocref.delete();
            _this.afs.collection('Projects').doc(projectId).delete();
        });
    };
    CreateProjectComponent.prototype.saveEnterprise = function () {
        // this.afAuth.authState.subscribe(user => { 
        var compRef; //ID of the new company that has been created under User/myEnterprises
        var mycompanyRef; //root enterprise
        // let comp: Enterprise;
        var newRef = this.afs.collection('/Users').doc(this.userId).collection('myenterprises');
        console.log(this.userId);
        var pUser = {
            name: this.user.displayName,
            email: this.user.email,
            id: this.user.uid,
            phoneNumber: this.user.phoneNumber,
            photoURL: this.user.photoURL,
            bus_email: this.compUser.bus_email,
            nationality: this.compUser.nationality,
            nationalId: this.compUser.nationalId,
            address: this.userData.address,
        };
        this.newEnterprise.by = this.user.displayName;
        this.newEnterprise.byId = this.user.uid;
        this.newEnterprise.createdOn = new Date().toISOString();
        this.newPart = pUser;
        this.newEnterprise.participants = [this.newPart];
        this.newEnterprise.champion = this.newPart;
        this.newEnterprise.services = this.serviceTags;
        console.log(this.newEnterprise);
        var partId = this.userId;
        var comp = this.newEnterprise;
        mycompanyRef = this.afs.collection('Enterprises');
        var nrouter = this.router;
        /* UserData updated collection('Users/userID).update */
        if (this.userData.phoneNumber == "" || this.userData.phoneNumber == null) {
            this.myDocument.update({ 'phoneNumber': this.compUser.phoneNumber }).then(function () {
                console.log('update successful (document exists)');
            }).catch(function (error) {
                console.log(error);
            });
        }
        else if (this.userData.phoneNumber == this.compUser.phoneNumber) {
            // this.myDocument.update({ 'phoneNumber2': this.compUser.phoneNumber });
        }
        else {
            this.myDocument.update({
                phoneNumbersOther: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(this.compUser.phoneNumber)
            }).then(function () {
                console.log('update successful (document exists)');
            }).catch(function (error) {
                console.log(error);
            });
        }
        if (this.userData.nationality == "" || this.userData.nationality == null) {
            this.myDocument.update({ 'nationality': this.compUser.nationality }).then(function () {
                console.log('update successful (document exists)');
            }).catch(function (error) {
                console.log(error);
            });
        }
        if (this.userData.nationalId == "" || this.userData.nationalId == null) {
            this.myDocument.update({ 'nationalId': this.compUser.nationalId }).then(function () {
                console.log('update successful (document exists)');
            }).catch(function (error) {
                console.log(error);
            });
        }
        if (this.userData.bus_email == "" || this.userData.bus_email == null) {
            this.myDocument.update({ 'bus_email': this.compUser.bus_email }).then(function () {
                console.log('update successful (document exists)');
            }).catch(function (error) {
                console.log(error);
            });
        }
        else if (this.userData.bus_email == this.compUser.bus_email) {
            console.log('bus_email are same');
        }
        else {
            this.myDocument.update({
                bus_emailsOther: firebase__WEBPACK_IMPORTED_MODULE_9__["firestore"].FieldValue.arrayUnion(this.compUser.bus_email)
            }).then(function () {
                console.log('email update successful (document exists)');
            }).catch(function (error) {
                console.log(error);
            });
        }
        /* closure "userData update end" */
        this.mdats = this.afs.collection('/Users').doc(this.user.uid).collection('myenterprises').add(comp).then(function (Ref) {
            console.log(Ref.id);
            console.log(partId);
            var data = Ref;
            compRef = Ref.id;
            // newRef.doc(compRef).add({ 'id': compRef });
            newRef.doc(compRef).collection('Participants').doc(partId).set(pUser);
            console.log(partId);
            console.log(compRef);
            mycompanyRef.doc(compRef).set(comp);
            mycompanyRef.doc(compRef).collection('Participants').doc(partId).set(pUser);
            console.log('enterprise ');
            newRef.doc(compRef).update({ 'id': compRef });
            mycompanyRef.doc(compRef).update({ 'id': compRef });
            nrouter.navigate(['enterprises/', compRef]);
            return compRef;
        });
        this.showNotification('comp', 'top', 'right');
        this.newEnterprise = this.is.getnewEnterprise();
    };
    CreateProjectComponent.prototype.callData = function () {
        var _this = this;
        this.myDocument = this.afs.collection('Users').doc(this.user.uid);
        this.userProfile = this.myDocument.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (a) {
            var data = a.payload.data();
            var id = a.payload.id;
            return __assign({ id: id }, data);
        }));
        this.userProfile.subscribe(function (userData) {
            console.log(userData);
            var myData = {
                name: _this.user.displayName,
                email: _this.user.email,
                bus_email: userData.bus_email,
                id: _this.user.uid,
                phoneNumber: _this.user.phoneNumber,
                photoURL: _this.user.photoURL,
                address: userData.address,
                nationality: userData.nationality,
                nationalId: userData.nationalId,
            };
            if (userData.address == "" || userData.address == null || userData.address == undefined) {
                userData.address = "";
            }
            else {
            }
            if (userData.phoneNumber == "" || userData.phoneNumber == null || userData.phoneNumber == undefined) {
                userData.phoneNumber = "";
            }
            else {
            }
            if (userData.bus_email == "" || userData.bus_email == null || userData.bus_email == undefined) {
                userData.bus_email = "";
            }
            else {
            }
            if (userData.nationalId == "" || userData.nationalId == null || userData.nationalId == undefined) {
                userData.nationalId = "";
            }
            else {
            }
            if (userData.nationality == "" || userData.nationality == null || userData.nationality == undefined) {
                userData.nationality = "";
            }
            else {
            }
            _this.myData = myData;
            _this.userData = userData;
            if (userData.bus_email != "") {
                _this.compUser.bus_email = _this.userData.bus_email;
            }
            if (userData.nationality != "") {
                _this.compUser.nationality = _this.userData.nationality;
            }
            if (userData.phoneNumber != "") {
                _this.compUser.phoneNumber = _this.userData.phoneNumber;
            }
            if (userData.nationalId != "") {
                _this.compUser.nationalId = _this.userData.nationalId;
            }
        });
        this.myEnterprises = this.es.getCompanies(this.userId);
        this.CompanyCollection = this.afs.collection('/Users').doc(this.userId).collection('myenterprises');
        this.enterprises = this.CompanyCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    };
    CreateProjectComponent.prototype.OnInit = function () {
        $('[rel="tooltip"]').tooltip();
        var tagClass = $('.tagsinput').data('color');
        if ($(".tagsinput").length != 0) {
            $('.tagsinput').tagsinput();
        }
        $('.bootstrap-tagsinput').addClass('' + tagClass + '-badge');
    };
    CreateProjectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.user.subscribe(function (user) {
            _this.userId = user.uid;
            _this.user = user;
            _this.callData();
        });
        this.typeValidation = this.is.getnewEnterprise();
        this.typeProjectValidation = this.is.getSelectedProject();
    };
    CreateProjectComponent.prototype.save = function (model, isValid) {
        // call API to save customer
        if (isValid) {
            console.log(model, isValid);
            this.newEnterprise = model;
            this.saveEnterprise();
        }
    };
    // save1(model: User, isValid: boolean) {
    //   // call API to save customer
    //   if (isValid) {
    //     console.log(model, isValid);
    //   }
    // }
    CreateProjectComponent.prototype.save2 = function (model, isValid) {
        // call API to save customer
        if (isValid) {
            console.log(model, isValid);
            this.project = model;
            this.saveProject();
        }
    };
    CreateProjectComponent.prototype.onSubmit = function (value) {
        console.log(value);
    };
    CreateProjectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! ./p-create.component.html */ "./src/app/projects/p-create/p-create.component.html"),
            styles: [__webpack_require__(/*! ./p-create.component.css */ "./src/app/projects/p-create/p-create.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_services_initialise_service__WEBPACK_IMPORTED_MODULE_7__["InitialiseService"], app_services_enterprise_service__WEBPACK_IMPORTED_MODULE_8__["EnterpriseService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], app_services_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], CreateProjectComponent);
    return CreateProjectComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects-calendar/projects-calendar.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/projects/projects-calendar/projects-calendar.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLWNhbGVuZGFyL3Byb2plY3RzLWNhbGVuZGFyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/projects/projects-calendar/projects-calendar.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/projects/projects-calendar/projects-calendar.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\" class=\"card-collapse\">\r\n        <h4 class=\"card-title\">Collapsible Accordion</h4>\r\n        <div class=\"card card-plain\">\r\n            <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\r\n                <a data-toggle=\"collapse\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\r\n                    Collapsible Group Item #1\r\n                    <i class=\"nc-icon nc-minimal-down\"></i>\r\n                </a>\r\n            </div>\r\n            <div id=\"collapseOne\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\r\n                <div class=\"card-body\">\r\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\r\n                    moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\r\n                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda\r\n                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea\r\n                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim\r\n                    aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card card-plain\">\r\n            <div class=\"card-header\" role=\"tab\" id=\"headingTwo\">\r\n                <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\r\n                    Collapsible Group Item #2\r\n                    <i class=\"nc-icon nc-minimal-down\"></i>\r\n                </a>\r\n            </div>\r\n            <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\r\n                <div class=\"card-body\">\r\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\r\n                    moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\r\n                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda\r\n                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea\r\n                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim\r\n                    aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"card card-plain\">\r\n            <div class=\"card-header\" role=\"tab\" id=\"headingThree\">\r\n                <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#collapseThree\" aria-expanded=\"false\" aria-controls=\"collapseThree\">\r\n                    Collapsible Group Item #3\r\n                    <i class=\"nc-icon nc-minimal-down\"></i>\r\n                </a>\r\n            </div>\r\n            <div id=\"collapseThree\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordion\">\r\n                <div class=\"card-body\">\r\n                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf\r\n                    moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.\r\n                    Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda\r\n                    shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea\r\n                    proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim\r\n                    aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/projects/projects-calendar/projects-calendar.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/projects/projects-calendar/projects-calendar.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProjectsCalendarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsCalendarComponent", function() { return ProjectsCalendarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var app_services_personal_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/personal.service */ "./src/app/services/personal.service.ts");
/* harmony import */ var app_services_enterprise_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/enterprise.service */ "./src/app/services/enterprise.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var app_services_task_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var app_services_project_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/services/project.service */ "./src/app/services/project.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ProjectsCalendarComponent = /** @class */ (function () {
    function ProjectsCalendarComponent(auth, pns, ts, es, ps, afAuth, afs, router) {
        this.auth = auth;
        this.pns = pns;
        this.ts = ts;
        this.es = es;
        this.ps = ps;
        this.afAuth = afAuth;
        this.afs = afs;
        this.router = router;
        moment__WEBPACK_IMPORTED_MODULE_7__(new Date().toISOString(), "YYYY-MM-DD").week().toString();
    }
    // 0000000000000000000000000000000000000000000000000000000000000000
    ProjectsCalendarComponent.prototype.OnInit = function () {
    };
    ProjectsCalendarComponent.prototype.ngOnInit = function () {
    };
    ProjectsCalendarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects-calendar',
            template: __webpack_require__(/*! ./projects-calendar.component.html */ "./src/app/projects/projects-calendar/projects-calendar.component.html"),
            styles: [__webpack_require__(/*! ./projects-calendar.component.css */ "./src/app/projects/projects-calendar/projects-calendar.component.css")]
        }),
        __metadata("design:paramtypes", [app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], app_services_personal_service__WEBPACK_IMPORTED_MODULE_2__["PersonalService"], app_services_task_service__WEBPACK_IMPORTED_MODULE_8__["TaskService"], app_services_enterprise_service__WEBPACK_IMPORTED_MODULE_3__["EnterpriseService"], app_services_project_service__WEBPACK_IMPORTED_MODULE_9__["ProjectService"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_5__["AngularFireAuth"],
            angularfire2_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], ProjectsCalendarComponent);
    return ProjectsCalendarComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"card card-plain\">\n    <div class=\"card-body\">\n      <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <div class=\"card\">\n            <div class=\"card-body text-center\">\n              <code>login/logout</code>\n              <div *ngIf=\"afAuth.user | async as user; else showLogin\">\n                <button (click)=\"logout()\">Logout</button>\n              </div>\n              <ng-template #showLogin>\n                <p>Please login.</p>\n                <button (click)=\"login()\">Login with Google</button>\n              </ng-template>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-sm-6\">\n          <div class=\"card\">\n            <div class=\"card-body text-center\" *ngIf=\"afAuth.user | async as person\">\n              <code>Profile</code>\n              <p>\n                <font size=\"4\"> Hello <b> {{ person.displayName }} ! </b></font>\n                <!-- <br>\n                  <small>{{person.uid}}</small> -->\n              </p>\n              <p>Projects you are involved <b> {{(projects | async)?.length}} </b><br>Projects you created<b>\n                  {{(myprojects | async)?.length}} </b></p>\n              <p>Number of Enterprise projects <i><b> {{(enterpriseProjects | async)?.length}} </b></i></p>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\" *ngIf=\"afAuth.user | async as person\">\n        <div class=\"col-md-4\">\n          <div class=\"card\">\n            <div class=\"card-body \">\n              <code>Create Project</code>\n              <form method=\"\">\n                <div class=\"form-group\">\n                  <label>Project Name</label>\n                  <input type=\"text\" [(ngModel)]=\"project.name\" name=\"pname\" class=\"form-control\" placeholder=\"e.g. Colours\">\n                </div>\n                <div class=\"form-group\">\n                  <label>Project Location</label>\n                  <input type=\"text\" [(ngModel)]=\"project.location\" name=\"pLocation\" class=\"form-control\" placeholder=\"e.g. Town / City\">\n                </div>\n                <div class=\"form-group\">\n                  <label>Industry Sector</label>\n                  <input type=\"text\" [(ngModel)]=\"project.sector\" name=\"psector\" class=\"form-control\" placeholder=\"e.g. Construction\">\n                </div>\n                <!-- <div class=\"row\"> -->\n                <div class=\"form-group\">\n                  <label>Project Type</label>\n                  <select [(ngModel)]=\"project.type\" name=\"ptype\" class=\"form-control\" data-style=\"btn btn-info btn-round\"\n                    title=\"Select type\" data-size=\"7\">\n                    <option value=\"Personal\" selected> Personal </option>\n                    <option value=\"Enterprise\"> Enterprise </option>\n                  </select>\n                </div>\n              </form>\n            </div>\n            <div class=\"card-footer\" *ngIf=\"afAuth.user | async as person\">\n              <div class=\"row pull-left\">\n                <div class=\"col-md-9\">\n                  <button type=\"submit\" class=\"btn btn-info btn-round\" data-toggle=\"modal\" data-target=\"#pModal\">Save\n                    Project</button>\n                  <div class=\"modal fade\" id=\"pModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\"\n                    aria-hidden=\"true\">\n                    <div class=\"modal-dialog\">\n                      <div class=\"modal-content\">\n                        <div class=\"modal-header justify-content-center\">\n                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                            <i class=\"nc-icon nc-simple-remove\"></i>\n                          </button>\n                        </div>\n                        <div class=\"modal-body\">\n                          <div class=\"table-responsive pro_info\">\n                            <table class=\"table\">\n                              <thead class=\"\">\n                                <th>Name</th>\n                                <th>Created By</th>\n                                <th>Action</th>\n                              </thead>\n                              <tbody>\n                                <tr *ngFor=\"let ent of enterprises | async \">\n                                  <td>{{ ent.name }} </td>\n                                  <td>{{ ent.by}}</td>\n                                  <td class=\"text-center\">\n                                    <a class=\"warning btn-link edit\" routerLink=\"#\" rel=\"tooltip\" title=\"select {{ ent.name }}\"\n                                      (click)=\"selectCompany(ent)\" data-toggle=\"modal\" data-target=\"#noticeModal\">\n                                      <font size=2>Select</font>\n                                    </a>\n                                  </td>\n                                </tr>\n                              </tbody>\n                            </table>\n                          </div>\n                        </div>\n                        <div class=\"modal-footer\">\n                          <div class=\"left-side\">\n                            <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Never mind</button>\n                          </div>\n                          <div class=\"divider\"></div>\n                          <div class=\"right-side\">\n                            <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"saveProject()\" data-dismiss=\"modal\">Confirm</button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-8\" id=\"userprojects\" *ngIf=\"afAuth.user | async as person\">\n          <div class=\"card\">\n            <div class=\"card-body text-left\">\n              <code *ngIf=\"afAuth.user | async as user\">All Projects you are involved in<span> {{user.displayName}} <br></span> </code>\n              <div class=\"table-responsive pro_info\">\n                <table class=\"table\">\n                  <thead class=\"\">\n                    <th>Project name</th>\n                    <th>Location</th>\n                    <th>Sector</th>\n                    <th class=\"text-center\">Action</th>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let project of projects | async \" class=\"\">\n                      <td>\n                        {{project.name}}</td>\n                      <td>\n                        {{ project.location}}</td>\n                      <td>\n                        {{project.sector}}</td>\n                      <td>\n                        <button class=\"text-center primary btn-link\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                          aria-haspopup=\"true\" aria-expanded=\"false\">\n                          <font size=5> ... </font>\n                        </button>\n                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                          <a class=\"dropdown-item text-warning\" data-toggle=\"modal\" (click)=\"selectProject(project)\"\n                            rel=\"tooltip\" title=\"Create Task for {{project.name}} project\" data-target=\"#myModal\">Create\n                            Task</a>\n                          <a class=\"dropdown-item text-danger\" (click)=\"deleteProject(project.id)\" rel=\"tooltip\" title=\"Delete {{project.name}} project\">Delete</a>\n                          <a class=\"dropdown-item text-info\" (click)=\"toggle(); selectProject3(project)\" rel=\"tooltip\"\n                            title=\"Show {{project.name}} project detail\">Show detail</a>\n                        </div>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n                <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\"\n                  aria-hidden=\"true\">\n                  <div class=\"modal-dialog\">\n                    <div class=\"modal-content\">\n                      <div class=\"card-body \">\n                        <div class=\"col-md-12\">\n                          <div class=\"modal-header justify-content-center\">\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                              <i class=\"nc-icon nc-simple-remove\"></i>\n                            </button>\n                            <p>Create a task</p>\n                          </div>\n                          <div class=\"modal-body\">\n                            <div class=\"card-body \">\n                              <form class=\"form-horizontal\">\n                                <div class=\"row\">\n                                  <label class=\"col-md-3 col-form-label\">Task name</label>\n                                  <div class=\"col-md-9\">\n                                    <div class=\"form-group\">\n                                      <input type=\"text\" [(ngModel)]=\"task.name\" name=\"taskName\" class=\"form-control\"\n                                        placeholder=\"Task name\">\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"row\">\n                                  <label class=\"col-md-3 col-form-label\">Start Date</label>\n                                  <div class=\"col-md-9\">\n                                    <div class=\"form-group\">\n                                      <input type=\"date\" [(ngModel)]=\"task.start\" name=\"startTime\" class=\"form-control\">\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"row\">\n                                  <label class=\"col-md-3 col-form-label\">Finish Date</label>\n                                  <div class=\"col-md-9\">\n                                    <div class=\"form-group\">\n                                      <input type=\"date\" [(ngModel)]=\"task.finish\" name=\"finishTime\" class=\"form-control\">\n                                    </div>\n                                  </div>\n                                </div>\n                                <ng-container *ngIf=\"showCompany\">\n                                  <div class=\"row\">\n                                    <label class=\"col-md-3 col-form-label\">Company</label>\n                                    <div class=\"col-md-8\">\n                                      <div class=\"form-group\" style=\"margin-top: -8px; margin-left: 15px; margin-bottom: -2px;\">\n                                        {{(selectedCompany)?.name }}\n                                        <button type=\"text\" name=\"taskProject\" class=\"btn btn-icon primary btn-link\"\n                                          rel=\"tooltip\" title=\"Change Champion\" (click)=\"toggleCompTable(); toggleComp()\">\n                                          <span class=\"pull-right\"><i class=\"fa fa-edit fa-fw\"></i></span>\n                                        </button>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </ng-container>\n                                <div class=\"row\">\n                                  <div class=\"col-md-8 ml-auto mr-auto\">\n                                    <div class=\"form-group\">\n                                      <ng-container *ngIf=\"showCompanyTable\">\n                                        <div class=\"table-responsive user_table\">\n                                          <code>Select Company</code>\n                                          <table class=\"table\">\n                                            <tbody>\n                                              <tr *ngFor=\"let ent of myEnterprises | async \" class=\"\">\n                                                <td>{{ ent.name }} </td>\n                                                <td><button class=\"primary btn-link\" (click)=\"selectMyCompany(ent)\">\n                                                    select </button>\n                                                </td>\n                                              </tr>\n                                            </tbody>\n                                          </table>\n                                        </div>\n                                      </ng-container>\n                                      <!-- <ng-container *ngIf=\"showCompanyBtn\">\n                                        <div class=\"footer\"><button class=\"primary btn-link\" (click)=\"toggleCompTable(); hideCompBtn(); selectCompany(ent)\"\n                                            title=\" Add task to company\">\n                                            Select Company</button>\n                                        </div>\n                                      </ng-container> -->\n                                    </div>\n                                  </div>\n                                </div>\n                                <ng-container *ngIf=\"showChamp\">\n                                  <div class=\"row\">\n                                    <label class=\"col-md-3 col-form-label\">Champion</label>\n                                    <div class=\"col-md-8\">\n                                      <div class=\"form-group\" style=\"margin-top: -8px; margin-left: 15px; margin-bottom: -2px;\">\n                                        {{ (selectedParticipant)?.name }}\n                                        <button type=\"text\" name=\"taskChampion\" class=\"btn btn-icon primary btn-link \" (click)=\"toggleUsersTable(); toggleChamp()\">\n                                          <i class=\"fa fa-edit fa-fw\"></i>\n                                        </button>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </ng-container>\n                                <div class=\"row\">\n                                  <div class=\"col-md-8 ml-auto mr-auto\">\n                                    <div class=\"form-group\">\n                                      <ng-container *ngIf=\"showUserTable\">\n                                        <div class=\"table-responsive user_table\">\n                                          <code>Select a Champion</code>\n\n                                          <table class=\"table\">\n                                            <tbody class=\"\">\n                                              <tr *ngFor=\"let user of staff | async \" class=\"\">\n                                                <td>{{ user.name }}</td>\n                                                <td><button class=\"primary btn-link\" (click)=\"selectColoursUser(user)\"> select\n                                                  </button></td>\n                                              </tr>\n                                            </tbody>\n                                          </table>\n                                        </div>\n                                      </ng-container>\n                                      <!-- <ng-container *ngIf=\"showChampBtn\">\n                                        <div class=\"footer\"><button class=\"primary btn-link\" (click)=\"toggleUsersTable(); hideChampBtn()\" title=\" Add task champion\">\n                                            Select Champion </button>\n                                        </div>\n                                      </ng-container> -->\n                                    </div>\n                                  </div>\n                                </div>\n                              </form>\n                            </div>\n                          </div>\n                          <div class=\"modal-footer\">\n                            <div class=\"left-side\">\n                              <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n                            </div>\n                            <div class=\"divider\"></div>\n                            <div class=\"right-side\">\n                              <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"saveTask()\" data-dismiss=\"modal\">Add\n                                Task</button>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <ng-container *ngIf=\"show\">\n        <div class=\"col-md-10\" *ngIf=\"selectedProject\">\n          <div class=\"card\">\n            <div class=\"card-body \">\n              <code>Companies involved in {{selectedProject.name}} project</code>\n              <div class=\"table-responsive pro_info\">\n                <table class=\"table\">\n                  <thead class=\"\">\n                    <th>Company</th>\n                    <th>location</th>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let comp of projectParticipants | async \">\n                      <td>{{ comp.name }}</td>\n                      <td>{{ comp.location }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n              <hr>\n              <div class=\"table-responsive pro_info\">\n                <table class=\"table\">\n                  <thead class=\"\">\n                    <th>Task name</th>\n                    <!-- <th>Created by</th> -->\n                    <th>Project</th>\n                    <th>Champion</th>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let tas of projectTasks | async \">\n                      <td>{{ tas.name }}</td>\n                      <!-- <td>{{ tas.createdBy}}</td> -->\n                      <td>{{ tas.projectName }}</td>\n                      <td>{{ (tas.champion)?.name||(tas)?.champion }}</td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n\n            </div>\n          </div>\n        </div>\n      </ng-container>\n      <!-- </ng-template> -->\n      <div class=\"col-md-10\" id=\"allprojects\" *ngIf=\"afAuth.user | async as user\">\n        <div class=\"card\">\n          <div class=\"card-body text-left\">\n            <code>All Enterprise Projects</code>\n            <div class=\"table-responsive pro_info\">\n              <table class=\"table\">\n                <thead class=\"\">\n                  <th>Project name</th>\n                  <th>Location</th>\n                  <th>Sector</th>\n                  <th>ByCompany</th>\n                  <th class=\"\">Action</th>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let project of enterpriseProjects | async\">\n                    <td>\n                      {{ project.name }}</td>\n                    <td>\n                      {{ project.location}}</td>\n                    <td>\n                      {{ project.sector}}</td>\n                    <td>\n                      {{project.companyName}}</td>\n                    <td class=\"text-center\" *ngIf=\"afAuth.user | async as user\">\n                      <button *ngIf=\"project.byId !== myUser\" class=\"primary btn-link connect\" (click)=\"selectProject2(project)\"\n                        data-toggle=\"modal\" data-target=\"#myModal9\">\n                        <font size=2>Join project</font>\n                      </button> <!-- <i class=\"fa fa-link fa-fw\"></i> -->\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n              <div class=\"modal fade\" id=\"myModal9\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\"\n                aria-hidden=\"true\">\n                <div class=\"modal-dialog\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header justify-content-center\">\n                      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                        <i class=\"nc-icon nc-simple-remove\"></i>\n                      </button>\n                      <code class=\"title title-up\"> {{projectToJoin.name}} project<br><span *ngIf=\"showme\">You have\n                          selected {{selectedCompany.name}}</span></code>\n                    </div>\n                    <div class=\"modal-body\">\n                      <div class=\"table-responsive pro_info\">\n                        <table class=\"table\">\n                          <thead class=\"\">\n                            <th>Company name</th>\n                            <th>Created By</th>\n                            <th>Action</th>\n                          </thead>\n                          <tbody>\n                            <tr *ngFor=\"let ent of enterprises | async \">\n                              <td>{{ ent.name }} </td>\n                              <td>{{ ent.by}}</td>\n                              <td class=\"text-center\">\n                                <a class=\"warning btn-link select\" routerLink=\"#\" (click)=\"toggleName(); selectCompany(ent)\"\n                                  data-toggle=\"modal\" data-target=\"#noticeModal\">\n                                  <font size=2>Select</font>\n                                </a>\n                              </td>\n                            </tr>\n                          </tbody>\n                        </table>\n                      </div>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <div class=\"left-side\">\n                        <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Never mind</button>\n                      </div>\n                      <div class=\"divider\"></div>\n                      <div class=\"right-side\">\n                        <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"connect2Project()\" data-dismiss=\"modal\">Confirm</button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!--  End Modal -->\n              <!-- small modal -->\n              <div class=\"modal fade modal-primary\" id=\"myModal10\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n                aria-hidden=\"true\">\n                <div class=\"modal-dialog modal-sm\">\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header justify-content-center\">\n                      <div class=\"modal-profile ml-auto mr-auto\">\n                        <i class=\"nc-icon nc-bulb-63\"></i>\n                      </div>\n                    </div>\n                    <div class=\"modal-body\">\n                      <p>Always have an access to your profile</p>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <div class=\"left-side\">\n                        <button type=\"button\" class=\"btn btn-link btn-link\">Back</button>\n                      </div>\n                      <div class=\"divider\"></div>\n                      <div class=\"right-side\">\n                        <button type=\"button\" class=\"btn btn-link btn-link\" data-dismiss=\"modal\">Close</button>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!--  End Modal -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var app_services_initialise_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/initialise.service */ "./src/app/services/initialise.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// version 2 








// export interface ProjectId extends Project { id: string; }
// export interface projectTaskChamp extends Task { championId: string; }
var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(afAuth, router, is, authService, afs, ps) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.is = is;
        this.authService = authService;
        this.afs = afs;
        this.ps = ps;
        this.exists = true;
        this.show = false;
        this.buttonName = 'Show';
        this.showme = false;
        this.btnName = 'Showme';
        this.showCompanyBtn = true;
        this.showCompanyTable = false;
        this.btnCompanyTable = 'Show';
        this.showCompany = true;
        this.btnCompany = 'Show';
        this.showChamp = true;
        this.btnChamp = 'Show';
        this.btnTable = 'Show';
        this.showUserTable = false;
        // this.afAuth.authState.subscribe(user =>{
        // });
        this.selectedCompany = this.is.getSelectedCompany();
        this.task = this.is.getTask();
        this.selectedProject = this.is.getSelectedProject();
        this.userChampion = this.is.getUserChampion();
        this.selectedParticipant = this.is.initColUserData();
        this.enterprise = this.is.getSelectedCompany();
        this.selectedCompany = this.is.getSelectedCompany();
        this.project = { name: "", type: "", by: "", byId: "", createdOn: null, companyName: "", companyId: "", champion: null, location: "", sector: "", id: "", completion: "" };
        this.selectedProject = { name: "", type: "", by: "", byId: "", createdOn: null, companyName: "", companyId: "", champion: null, location: "", sector: "", id: "", completion: "" };
        this.projectToJoin = { name: "", type: "", by: "", byId: "", joiningCompanyChampion: "" };
        console.log(this.afAuth.user);
        this.tasks = this.afs.collection('tasks').valueChanges();
        // console.log(this.tasks)
        this.enterpriseProjects = this.afs.collection('Projects').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.afAuth.authState.subscribe(function (user) {
            var myProjectCollection = _this.afs.collection('/Users').doc(user.uid).collection('projects', function (ref) { return ref.where('byId', '==', user.uid); }).valueChanges();
            _this.ProjectCollection = _this.afs.collection('/Users').doc(user.uid).collection('projects');
            var col = myProjectCollection;
            _this.projects = _this.ProjectCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                console.log(data);
                return __assign({ id: id }, data);
            }); }));
            return _this.myprojects = col;
        });
        this.task = { name: "", champion: null, projectName: "", department: "", departmentId: "", start: "", startDay: "", startWeek: "", startMonth: "", startQuarter: "", startYear: "", finish: "", finishDay: "", finishWeek: "", finishMonth: "", finishQuarter: "", finishYear: "", by: "", createdOn: "", projectId: "", byId: "", projectType: "", companyName: "", companyId: "", trade: "", section: null, complete: null, id: "", participants: null, status: "", classification: null };
        this.afAuth.authState.subscribe(function (user) {
            console.log(user.uid);
            _this.myUser = user.uid;
            _this.CompanyCollection = _this.afs.collection('/Users').doc(user.uid).collection('myenterprises');
            _this.myEnterprises = _this.CompanyCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            }); }));
            _this.enterprises = _this.CompanyCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            }); }));
        });
    }
    ProjectsComponent.prototype.toggleExists = function () {
        this.exists = !this.exists;
        this.router.navigateByUrl('pages/login');
    };
    ProjectsComponent.prototype.saveProject = function () {
        var _this = this;
        var project;
        this.afAuth.user.subscribe(function (user) {
            console.log(user);
            var pUser = {
                name: user.displayName,
                email: user.email,
                id: user.uid
            };
            //adding company details  
            console.log(_this.selectedCompany);
            _this.project.companyName = _this.selectedCompany.name;
            _this.project.companyId = _this.selectedCompany.id;
            _this.project.createdOn = new Date().toISOString();
            console.log(_this.project.createdOn);
            var prId = _this.selectedCompany;
            _this.project.by = user.displayName;
            _this.project.byId = user.uid;
            console.log(_this.project);
            project = _this.project;
            var company = _this.selectedCompany;
            _this.ps.addProject(pUser, project, company);
            _this.project = { name: "", type: "", by: "", byId: "", createdOn: null, companyName: "", companyId: "", champion: null, location: "", sector: "", id: "", completion: "" };
        });
    };
    ProjectsComponent.prototype.selectProject2 = function (project) {
        console.log(project);
        this.projectToJoin = project;
        var company = {
            connectedOn: new Date(),
            projectBy: project.by,
            projectById: project.byId,
            projectName: project.name
        };
        console.log(company);
    };
    ProjectsComponent.prototype.toggle = function () {
        this.show = !this.show;
        // CHANGE THE NAME OF THE BUTTON.
        if (this.show)
            this.buttonName = "Hide";
        else
            this.buttonName = "Show";
    };
    ProjectsComponent.prototype.toggleName = function () {
        this.showme = !this.showme;
        // CHANGE THE NAME OF THE BUTTON.
        if (this.showme)
            this.btnName = "Hide";
        else
            this.btnName = "Showme";
    };
    ProjectsComponent.prototype.hideCompBtn = function () {
        this.showCompanyBtn = false;
    };
    ProjectsComponent.prototype.toggleComp = function () {
        this.showCompany = !this.showCompany;
        if (this.showCompany)
            this.btnCompany = "Hide";
        else
            this.btnCompany = "Show";
    };
    ProjectsComponent.prototype.toggleUsersTable = function () {
        this.showUserTable = !this.showUserTable;
        if (this.showUserTable) {
            this.btnTable = "Hide";
            // this.selectedParticipant=null;
        }
        else {
            this.btnTable = "Show";
        }
    };
    ProjectsComponent.prototype.toggleCompTable = function () {
        this.showCompanyTable = !this.showCompanyTable;
        if (this.showCompanyTable) {
            this.btnCompanyTable = "Hide";
        }
        else {
            this.btnCompanyTable = "Show";
        }
    };
    ProjectsComponent.prototype.toggleChamp = function () {
        this.showChamp = !this.showChamp;
        if (this.showChamp)
            this.btnChamp = "Hide";
        else
            this.btnChamp = "Show";
    };
    ProjectsComponent.prototype.selectMyCompany = function (company) {
        console.log(company);
        this.selectedCompany = company;
        this.compId = company.id;
        console.log(this.selectedCompany);
        this.staff = this.afs.collection('Enterprises').doc(company.id).collection('Participants').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.toggleComp();
        this.toggleCompTable();
    };
    // select company
    ProjectsComponent.prototype.selectCompany = function (company) {
        console.log(company);
        this.selectedCompany = company;
    };
    ProjectsComponent.prototype.connect2Project = function () {
        var _this = this;
        console.log(this.selectedCompany);
        console.log(this.projectToJoin);
        var projectId = this.projectToJoin.id;
        var myproject = {
            name: this.projectToJoin.name,
            type: "Enterprise",
            by: this.projectToJoin.by,
            byId: this.projectToJoin.byId
        };
        console.log(projectId);
        var companysRef;
        var projectsRef;
        var allMyProjectsRef;
        var partId;
        var scompanyId = this.selectedCompany.id;
        this.afAuth.user.subscribe(function (user) {
            console.log(user);
            partId = user.uid;
            var pUser = {
                name: user.displayName,
                email: user.email,
                id: user.uid
            };
            companysRef = _this.afs.collection('Enterprises');
            companysRef.doc(scompanyId).collection('projects').doc(_this.projectToJoin.id).set(_this.projectToJoin);
            allMyProjectsRef = _this.afs.collection('/Users').doc(user.uid).collection('projects'); //ppoint to where you want to keep all my projects
            allMyProjectsRef.doc(projectId).set(_this.projectToJoin); // add the project i have joined to all my projects
            projectsRef = _this.afs.collection('Projects');
            projectsRef.doc(projectId).collection('enterprises').doc(scompanyId).set(_this.selectedCompany);
            projectsRef.doc(projectId).collection('Participants').doc(partId).set(pUser);
        });
    };
    ProjectsComponent.prototype.deleteProject = function (x) {
        var _this = this;
        this.afAuth.user.subscribe(function (user) {
            console.log(x);
            var prodocref = _this.afs.collection('/Users').doc(user.uid).collection('projects').doc(x);
            prodocref.delete();
            _this.afs.collection('Projects').doc(x).delete();
        });
    };
    ProjectsComponent.prototype.deleteTask = function (x) {
        var _this = this;
        this.afAuth.user.subscribe(function (user) {
            console.log(x);
            var prodocref = _this.afs.collection('/Users').doc(user.uid).collection('tasks').doc(x);
            prodocref.delete();
            // let entRef = this.afs.collection('enterprises').doc(this.enterprise.id).collection('tasks').doc(x);
            // entRef.delete();
            _this.afs.collection('tasks').doc(x).delete();
        });
    };
    ProjectsComponent.prototype.selectProject = function (bbb) {
        console.log(bbb);
        console.log(this.task);
        this.task.projectName = bbb.name;
        this.task.projectId = bbb.id;
        this.task.projectType = bbb.type;
        console.log(this.task);
    };
    ProjectsComponent.prototype.selectProject3 = function (proj) {
        var proj_ID = proj.id;
        this.selectedProject = proj;
        this.projectParticipants = this.afs.collection('Projects').doc(proj_ID).collection('enterprises').valueChanges();
        this.projectTasks = this.afs.collection('Projects').doc(proj_ID).collection('tasks').valueChanges();
    };
    ProjectsComponent.prototype.selectColoursUser = function (x) {
        this.selectedParticipant = x;
        this.selParticipantId = x.id;
        var cUser = {
            name: x.name,
            email: x.email,
            bus_email: x.bus_email,
            id: x.id,
            phoneNumber: x.phoneNumber,
            photoURL: x.photoURL,
            address: x.address,
            nationalId: x.nationalId,
            nationality: x.nationality
        };
        this.userChampion = cUser;
        console.log(x);
        console.log(this.userChampion);
        this.selParticipantName = x.name;
        this.toggleChamp();
        this.toggleUsersTable();
    };
    ProjectsComponent.prototype.saveTask = function () {
        var _this = this;
        console.log(this.task);
        var pr;
        this.afAuth.user.subscribe(function (user) {
            console.log(_this.selectedCompany);
            _this.task.by = user.displayName;
            _this.task.byId = user.uid;
            _this.task.createdOn = new Date().toISOString();
            _this.task.companyName = _this.selectedCompany.name;
            _this.task.companyId = _this.selectedCompany.id;
            _this.task.champion = _this.userChampion;
            var oop = _this.selectedCompany.id;
            console.log(_this.task);
            var createdTask = _this.task;
            var tasksRef = _this.afs.collection('tasks');
            var usersRef = _this.afs.collection('Users').doc(user.uid).collection('tasks');
            var entRef = _this.afs.collection('Enterprises').doc(oop).collection('tasks');
            if (_this.task.projectType === 'Enterprise') {
                //set task under a project
                _this.afs.collection('Projects').doc(_this.task.projectId).collection('tasks').add(createdTask).then(function (Ref) {
                    var newTaskId = Ref.id;
                    console.log(Ref);
                    //set task under a tasks
                    tasksRef.doc(newTaskId).set(createdTask);
                    //set task under a user
                    usersRef.doc(newTaskId).set(createdTask);
                    //set task under a company                        
                    entRef.doc(newTaskId).set(createdTask);
                });
            }
            else {
                //set task under a user
                console.log('personal Task');
                _this.afs.collection('Users').doc(user.uid).collection('tasks').add(createdTask);
            }
            _this.task = { name: "", champion: null, projectName: "", department: "", departmentId: "", start: "", startDay: "", startWeek: "", startMonth: "", startQuarter: "", startYear: "", finish: "", finishDay: "", finishWeek: "", finishMonth: "", finishQuarter: "", finishYear: "", by: "", createdOn: "", projectId: "", byId: "", projectType: "", companyName: "", companyId: "", trade: "", section: null, complete: null, id: "", participants: null, status: "", classification: null };
        });
    };
    ProjectsComponent.prototype.login = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider()).then(function (ref) {
            console.log("Check User collection for doc");
            // console.log(ref);
            _this.coloursUserDetails = ref;
            var coloursUser = ref.user;
            var userData = {
                name: coloursUser.displayName,
                email: coloursUser.email,
                id: coloursUser.uid,
                userImg: coloursUser.photoURL,
                phoneNumber: coloursUser.phoneNumber,
                LastTimeLogin: new Date().toISOString()
            };
            console.log(userData);
            if (_this.coloursUserDetails.additionalUserInfo.isNewUser) {
                _this.afs.collection('Users').doc(coloursUser.uid).set(userData).catch(function (error) { return console.error(); });
                console.log("userData is set");
            }
            else
                _this.afs.collection('Users').doc(coloursUser.uid).update(userData).catch(function (error) { return console.error(); });
            console.log("userData is updated");
            var userCollection = _this.afs.collection('Users');
        });
    };
    ProjectsComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    ProjectsComponent.prototype.NgOnInit = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (user) {
            console.log(user.uid);
            _this.myUser = user.uid;
        });
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'projects-cmp',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html")
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_services_initialise_service__WEBPACK_IMPORTED_MODULE_8__["InitialiseService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _services_project_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.module.ts":
/*!*********************************************!*\
  !*** ./src/app/projects/projects.module.ts ***!
  \*********************************************/
/*! exports provided: ProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsModule", function() { return ProjectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/dist/index.js");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _projects_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects.routing */ "./src/app/projects/projects.routing.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view/view.component */ "./src/app/projects/view/view.component.ts");
/* harmony import */ var _projects_calendar_projects_calendar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./projects-calendar/projects-calendar.component */ "./src/app/projects/projects-calendar/projects-calendar.component.ts");
/* harmony import */ var _join_project_join_project_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./join-project/join-project.component */ "./src/app/projects/join-project/join-project.component.ts");
/* harmony import */ var _p_create_p_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./p-create/p-create.component */ "./src/app/projects/p-create/p-create.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { EqualValidator } from './equal-validator.directive';










var ProjectsModule = /** @class */ (function () {
    function ProjectsModule() {
    }
    ProjectsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_projects_routing__WEBPACK_IMPORTED_MODULE_9__["ProjectsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_4__["JWBootstrapSwitchModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_7__["TagInputModule"]
            ],
            declarations: [_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"], _view_view_component__WEBPACK_IMPORTED_MODULE_10__["ViewComponent"], _projects_calendar_projects_calendar_component__WEBPACK_IMPORTED_MODULE_11__["ProjectsCalendarComponent"], _join_project_join_project_component__WEBPACK_IMPORTED_MODULE_12__["JoinProjectComponent"], _p_create_p_create_component__WEBPACK_IMPORTED_MODULE_13__["CreateProjectComponent"]]
        })
    ], ProjectsModule);
    return ProjectsModule;
}());



/***/ }),

/***/ "./src/app/projects/projects.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/projects/projects.routing.ts ***!
  \**********************************************/
/*! exports provided: ProjectsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsRoutes", function() { return ProjectsRoutes; });
/* harmony import */ var _projects_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./view/view.component */ "./src/app/projects/view/view.component.ts");
/* harmony import */ var _projects_calendar_projects_calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects-calendar/projects-calendar.component */ "./src/app/projects/projects-calendar/projects-calendar.component.ts");
/* harmony import */ var _join_project_join_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./join-project/join-project.component */ "./src/app/projects/join-project/join-project.component.ts");
/* harmony import */ var _p_create_p_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./p-create/p-create.component */ "./src/app/projects/p-create/p-create.component.ts");





var ProjectsRoutes = [{
        path: '',
        children: [{
                path: 'projects/management',
                component: _projects_component__WEBPACK_IMPORTED_MODULE_0__["ProjectsComponent"]
            }, {
                path: 'projects/p-create',
                component: _p_create_p_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateProjectComponent"]
            }, {
                path: 'project-calendar',
                component: _projects_calendar_projects_calendar_component__WEBPACK_IMPORTED_MODULE_2__["ProjectsCalendarComponent"]
            }, {
                path: 'projects/join-project',
                component: _join_project_join_project_component__WEBPACK_IMPORTED_MODULE_3__["JoinProjectComponent"]
            }, {
                path: 'projects/:id',
                component: _view_view_component__WEBPACK_IMPORTED_MODULE_1__["ViewComponent"]
            }]
    }];


/***/ }),

/***/ "./src/app/projects/view/view.component.css":
/*!**************************************************!*\
  !*** ./src/app/projects/view/view.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clrs-h1 {\r\n    font-family: AR ESSENCE;\r\n    color: steelblue;\r\n    font-size: 25px;\r\n}\r\n\r\n.dash-size {\r\n    width: 630px;\r\n    padding-right: 0px;\r\n    padding-left: 0px;\r\n}\r\n\r\n.dash-col {\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n\r\n.dash-col-left {\r\n    padding-left: 0px;\r\n    padding-right: 1px;\r\n}\r\n\r\n.dash-col-right {\r\n    padding-left: 1px;\r\n    padding-right: 0px;\r\n}\r\n\r\n/* .dmmm{\r\n\r\n} */\r\n\r\n.clrs-h2 {\r\n    font-family: AR ESSENCE;\r\n    /* color: steelblue; */\r\n    font-size: 20px;\r\n}\r\n\r\n.clrs-h1-font {\r\n    /* font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */\r\n    font-family: ABeeZee;\r\n    /* color: steelblue; */\r\n    color: #333366;\r\n    /* font-size: 18px; */\r\n    font-size: 23px;\r\n\r\n}\r\n\r\n.clrs-h4-font {\r\n    /* font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */\r\n    font-family: ABeeZee;\r\n    /* color: steelblue; */\r\n    color: #333366;\r\n    font-size: 18px;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvdmlldy92aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7R0FFRzs7QUFFSDtJQUNJLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtGQUFrRjtJQUNsRixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxrRkFBa0Y7SUFDbEYsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZUFBZTs7QUFFbkIiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy92aWV3L3ZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jbHJzLWgxIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBUiBFU1NFTkNFO1xyXG4gICAgY29sb3I6IHN0ZWVsYmx1ZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG5cclxuLmRhc2gtc2l6ZSB7XHJcbiAgICB3aWR0aDogNjMwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLmRhc2gtY29sIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uZGFzaC1jb2wtbGVmdCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDFweDtcclxufVxyXG5cclxuLmRhc2gtY29sLXJpZ2h0IHtcclxuICAgIHBhZGRpbmctbGVmdDogMXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG59XHJcblxyXG4vKiAuZG1tbXtcclxuXHJcbn0gKi9cclxuXHJcbi5jbHJzLWgyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBBUiBFU1NFTkNFO1xyXG4gICAgLyogY29sb3I6IHN0ZWVsYmx1ZTsgKi9cclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmNscnMtaDEtZm9udCB7XHJcbiAgICAvKiBmb250LWZhbWlseTonR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmOyAqL1xyXG4gICAgZm9udC1mYW1pbHk6IEFCZWVaZWU7XHJcbiAgICAvKiBjb2xvcjogc3RlZWxibHVlOyAqL1xyXG4gICAgY29sb3I6ICMzMzMzNjY7XHJcbiAgICAvKiBmb250LXNpemU6IDE4cHg7ICovXHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcblxyXG59XHJcblxyXG4uY2xycy1oNC1mb250IHtcclxuICAgIC8qIGZvbnQtZmFtaWx5OidHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7ICovXHJcbiAgICBmb250LWZhbWlseTogQUJlZVplZTtcclxuICAgIC8qIGNvbG9yOiBzdGVlbGJsdWU7ICovXHJcbiAgICBjb2xvcjogIzMzMzM2NjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/projects/view/view.component.html":
/*!***************************************************!*\
  !*** ./src/app/projects/view/view.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\" *ngIf=\"project\">\n        <div class=\"row\">\n          <div class=\"col-md-5\">\n            <div class=\"card-header\">\n              <p class=\"card-category clrs-h1-font\">\n                Project : {{ (project)?.name }}\n              </p>\n            </div>\n          </div>\n          <div class=\"col-md-4 ml-auto\">\n            <div class=\"card-header\">\n              <button *ngIf=\"displayCompany\" class=\"btn-link btn-magnify\" (click)=\"displayProject()\">Back</button>\n              <button class=\"btn-link btn-magnify\" (click)=\"refreshProject()\"> <i\n                  class=\"fa fa-spinner fa-spin fa-2x fa-fw\"></i>Refresh</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\" style=\"margin-left:3em; margin-right:0em\">\n            <div class=\"clrs-tabs\">\n              <div class=\"nav-tabs-navigation vertical-navs\">\n                <div class=\"nav-tabs-wrapper\">\n                  <ul class=\"nav nav-tabs flex-column nav-stacked text-left\" role=\"tablist\">\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link nav-colors active\" (click)=\"minimizeSidebar()\" href=\"#info\" role=\"tab\" style=\"padding-left: 0px;\"\n                        data-toggle=\"tab\">Dashboard</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link nav-colors\" (click)=\"minimizeSidebar()\" href=\"#standards\" role=\"tab\" style=\"padding-left: 0px;\"\n                        data-toggle=\"tab\">Standards</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link nav-colors\" (click)=\"callProjectTasks(); minimizeSidebar()\" href=\"#proSetup\" style=\"padding-left: 0px;\"\n                        role=\"tab\" data-toggle=\"tab\">Setup</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link nav-colors\" (click)=\"callProjectTasks(); minimizeSidebar()\" href=\"#planning\" style=\"padding-left: 0px;\"\n                        role=\"tab\" data-toggle=\"tab\">Planning</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link nav-colors\" (click)=\"callProjectTasks(); minimizeSidebar()\" href=\"#implement\" style=\"padding-left: 0px;\"\n                        role=\"tab\" data-toggle=\"tab\">Implementation</a>\n                    </li>\n                    <!-- <li class=\"nav-item\">\n                      <a class=\"nav-link nav-colors\" (click)=\"callProjectTasks(); minimizeSidebar()\" href=\"#reports\" style=\"padding-left: 0px;\"\n                        role=\"tab\" data-toggle=\"tab\">Reporting</a>\n                    </li> -->\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link nav-colors\" (click)=\"viewCompanyReport();callProjectTasks(); minimizeSidebar()\" href=\"#reports2\" style=\"padding-left: 0px;\"\n                        role=\"tab\" data-toggle=\"tab\">Reporting</a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-10 col-md-9 col-sm-8 col-6\">\n              <!-- Tab panes -->\n              <div class=\"tab-content\">\n                <div class=\"tab-pane active\" id=\"info\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-3 col-sm-4 dash-col-left\">\n                      <div class=\"card card-category\">\n                        <div class=\"btn-magnify\">\n                          <div class=\"row col-md-12\" style=\"margin-left:1em; padding-bottom: -1em \">\n                            <div class=\"pull-left card-category clrs-h1-font\">\n                              <a>\n                                <i class=\"nc-icon nc-palette\"></i> Colours Personal</a>\n                            </div>\n                          </div>\n                          <div class=\"pull-left col-md-10\" style=\"margin-left:1em;padding-top: -1em; color: steelblue \">\n                            <a>My Diary Today</a>\n                          </div>\n                          <div class=\"spacer\" style=\"height: 2.4em;\"></div>\n                          <div class=\"row\" style=\"height: 100px\">\n                            <div id=\"container\">\n                              <!-- <div class=\"content container scroll-em\" *ngIf=\"showActions\"> -->\n                              <div class=\"content container scroll-em\" *ngIf=\"diaryActionItems.length != 0\">\n                                <ol>\n                                  <!-- <li style=\"color:lightgrey\" class=\"mr-auto ml-auto\" *ngFor=\"let event of theseTasks\"><a>{{ event.name }}</a><br><small class=\"label text-success\"> {{ event.when }}</small>\n                                                    </li> ->\n                                                    <!- <li class=\"\" style=\"color:steelblue\" *ngFor=\"let event of theseTasks\"> ->\n                                                    <!- <li class=\"\" style=\"color:steelblue\" *ngFor=\"let event of viewActions | async\"> -->\n                                  <li class=\"\" style=\"color:steelblue\" *ngFor=\"let event of diaryActionItems\">\n                                    <!-- <div class=\"row\"> -->\n                                    <!-- <div class=\"col-sm-12\" style=\"margin-left:1.0em; margin-right:-.5em\">` -->\n                                    <div class=\"col-sm-12\" style=\"margin-left: 2px; margin-right:-.5em\"><!-- margin-left:1.0em; -->                                      \n                                      <a style=\"color:slategrey\">\n                                        {{ event.name }}<span class=\"label text-warning\"> {{ event.when }}</span>\n                                      </a>\n                                    </div>\n                                    <!-- </div> -->\n                                  </li>\n                                </ol>\n                              </div>\n                              <!-- <div class=\"content container scroll-em\" *ngIf=\"hideActions\"> -->\n                              <div class=\"content container scroll-em\" *ngIf=\"diaryActionItems.length === 0\">\n                                <div class=\"row\">\n                                  <div class=\"col-sm-12\" style=\"margin-left:-.5em; margin-right:-.5em\">\n                                    <ol>\n                                      <li>\n                                        <!-- <div class=\"row\"> -->\n                                        <a style=\"color:lightgrey\">\n                                          <span class=\"col-md-9 text-info\">Meeting</span>\n                                          <span class=\"col-md-3 mr-auto number text-warning\"> 1000 hrs</span>\n                                        </a>\n                                        <!-- </div> -->\n                                      </li>\n                                      <li>\n                                        <!-- <div class=\"row\"> -->\n                                        <a style=\"color:lightgrey\">\n                                          <span class=\"col-md-9 text-info\">Email</span>\n                                          <span class=\"col-md-3 mr-auto ml-auto number text-success\">1230 Hrs</span>\n                                        </a>\n                                        <!-- </div> -->\n                                      </li>\n                                      <li>\n                                        <!-- <div class=\"row\"> -->\n                                        <a style=\"color:lightgrey\">\n                                          <span class=\"col-md-9 text-info\">Skype</span>\n                                          <span class=\"col-md-3 mr-auto ml-auto label text-success\"> 1400 Hrs </span>\n                                        </a>\n                                        <!-- </div> -->\n                                      </li>\n                                      <li>\n                                        <!-- <div class=\"row \"> -->\n                                        <a style=\"color:lightgrey\">\n                                          <span class=\"col-md-9 text-info\">Scheduling</span>\n                                          <span class=\"col-lg-3 mr-auto ml-auto label text-success\"> 0800 Hrs </span>\n                                        </a>\n                                        <!-- </div> -->\n                                      </li>\n                                    </ol>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <!-- <div class=\"card-body\">\n                                            <h6 class=\"big-title\">total earnings in last ten quarters</h6>\n                                            <canvas id=\"activeUsers\" width=\"auto\" height=\"200\"></canvas>\n                                          </div> -->\n                        <div class=\"card-footer\">\n                          <hr>\n                          <div class=\"row\">\n                            <div class=\"col-sm-7\">\n                              <div class=\"footer-title\">View more.....</div>\n                            </div>\n                            <div class=\"col-sm-5\">\n                              <div class=\"pull-right\">\n                                <button class=\"btn btn-success btn-round btn-icon btn-sm\">\n                                  <i class=\"nc-icon nc-simple-add\"></i>\n                                </button>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-xs-3 col-sm-4 dash-col\">\n                      <div class=\"card card-category\">\n                        <div class=\"btn-magnify\">\n                          <div class=\"row col-md-12\" style=\"margin-left:1em; padding-bottom: -1em \">\n                            <div class=\"pull-left card-category clrs-h1-font\">\n                              <a>\n                                <i class=\"fa fa-folder-o [&#xf114;]\"></i> Colours Projects</a>\n                            </div>\n                          </div>\n                          <!-- <hr class=\"line\" style=\"padding-bottom:0em; padding-top: -1em\"> -->\n                          <!-- <div class=\"pull-left col-md-12 card-category\" style=\"margin-left:2em;padding-top: -1em; color: steelblue; \"> -->\n                          <div class=\"pull-left col-md-12\" style=\"margin-left:1em;padding-top: -1em; color: steelblue; \">\n                            <a>My Current Priority Projects</a>\n                          </div>\n                          <div class=\"spacer\" style=\"height:2.4em;\"></div>\n                          <div class=\"col-sm-10\" id=\"pTasklist\" style=\"height: 100px\">\n                            <!--  style=\"margin-left: 2em\" -->\n                            <div class=\"content container scroll-em\" *ngIf=\"showProjs\">\n                              <ol>\n                                <li class=\"col-xs-12 ml-auto mr-auto\" style=\"color:steelblue\" *ngFor=\"let project of projs\">\n                                <!-- <li class=\"col-xs-12 ml-auto mr-auto\" style=\"color:steelblue\" *ngFor=\"let project of myProjects | async\"> -->\n                                  <a [routerLink]=\"[ '/projects/', project.id ]\" style=\"color:slategray\"><span\n                                      class=\"text-info\">{{ project.name }}</span></a>\n                                </li>\n                              </ol>\n                            </div>\n                            <div class=\"content container scroll-em\" *ngIf=\"hideProjs\">\n                              <div class=\"row\">\n                                <div class=\"col-sm-12\" style=\"margin-left:-.5em; margin-right:-.5em\">\n                                  <ol>\n                                    <li>\n                                      <!-- <div class=\"row\"> -->\n                                      <a style=\"color:lightgrey\">\n                                        <span class=\"col-md-12 text-info\">Project 1</span>\n                                      </a>\n                                      <!-- </div> -->\n                                    </li>\n                                    <li>\n                                      <!-- <div class=\"row\"> -->\n                                      <a style=\"color:lightgrey\">\n                                        <span class=\"col-md-12 text-info\">Project 2</span>\n                                      </a>\n                                      <!-- </div> -->\n                                    </li>\n                                    <li>\n                                      <!-- <div class=\"row\"> -->\n                                      <a style=\"color:lightgrey\">\n                                        <span class=\"col-md-12 text-info\">Project 3</span>\n                                      </a>\n                                      <!-- </div> -->\n                                    </li>\n                                    <li>\n                                      <!-- <div class=\"row \"> -->\n                                      <a style=\"color:lightgrey\">\n                                        <span class=\"col-md-12 text-info\">Project 4</span>\n                                      </a>\n                                      <!-- </div> -->\n                                    </li>\n                                  </ol>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <!-- <div class=\"card-body\">\n                                            <h6 class=\"big-title\">total subscriptions in last 7 days</h6>\n                                            <canvas id=\"emailsCampaignChart\" width=\"auto\" height=\"200\"></canvas>\n                                          </div> -->\n                        <div class=\"card-footer\">\n                          <hr>\n                          <div class=\"row\">\n                            <div class=\"col-sm-7\">\n                              <div class=\"footer-title\">View more.....</div>\n                            </div>\n                            <div class=\"col-sm-5\">\n                              <div class=\"pull-right\">\n                                <button class=\"btn btn-danger btn-round btn-icon btn-sm\">\n                                  <i class=\"nc-icon nc-button-play\"></i>\n                                </button>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-xs-3 col-sm-4 ml-auto mar-auto dash-col-right\">\n                      <div class=\"card card-category\">\n                        <div class=\"card-content btn-magnify\">\n                          <div class=\"row col-sm-12 ml-auto mr-auto\" style=\"padding-bottom: -1em \">\n                            <div class=\"clrs-h1-font\">\n                              <a><i class=\"fa fa-feed  fa-flip-vertical fa-fw\"></i> {{ (project)?.name }} News</a>\n                            </div><br>\n                            <div class=\"text-left\" style=\"padding-top: -1em; color: steelblue;font-size: 2 \">\n                              <a>All {{ (project)?.name }} project News</a>\n                            </div>\n                          </div>\n                          <div class=\"spacer\" style=\"height: 1em;\"></div>\n                          <div id=\"eTasklixt\" class=\"row col-sm-12 ml-auto mr-auto\">\n                            <marquee direction=\"up\">\n                              <ol style=\"padding-left: 14px; padding-right: 14px;\">\n                                <li>\n                                  <div class=\"row\">\n                                    <div class=\"col-xs-10 \" style=\"margin-left: 1em\">\n                                      <a class=\"text-danger\" href=\"#Respond_to_feed\" style=\"color:lightgrey\">\n                                        Increase your ﬁnancial networth by using Colours\n                                        to get the best results out of your efforts.\n                                      </a>\n                                    </div>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"row\">\n                                    <div class=\"col-xs-10\" style=\"margin-left:1em\">\n                                      <a href=\"#Respond_to_mail\" style=\"color:lightgrey\">\n                                        Use Colours to TRACK your own daily performance metrics, review and improve on\n                                        the same.\n                                      </a>\n                                    </div>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"row\">\n                                    <div class=\"col-xs-10\" style=\"margin-left:1em\">\n                                      <a href=\"#Contact_Supplier\" style=\"color:lightgrey\">\n                                        Colours will help you pay attention to the effective\n                                        use of yo time and your any other resources.\n                                      </a>\n                                    </div>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"row\">\n                                    <div class=\"col-xs-10\" style=\"margin-left:1em\">\n                                      <a href=\"#Aripo\" style=\"color:lightgrey\">\n                                        Colours will help you squeeze the most out of your life\n                                      </a>\n                                    </div>\n                                  </div>\n                                </li>\n                              </ol>\n                            </marquee>\n                          </div>\n                        </div>\n                        <div class=\"card-footer\">\n                          <hr>\n                          <div class=\"row\">\n                            <div class=\"col-sm-7\">\n                              <div class=\"footer-title\">View more.....</div>\n                            </div>\n                            <div class=\"col-sm-5\">\n                              <div class=\"pull-right\">\n                                <button class=\"btn btn-warning btn-round btn-icon btn-sm\">\n                                  <i class=\"nc-icon nc-alert-circle-i\"></i>\n                                </button>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <!-- <div class=\"row\">\n                    <div class=\"col-lg-4 col-sm-6 dash-col-left\">\n                      <div class=\"card\">\n                        <div class=\"card-content btn-magnify\">\n                          <div class=\"row col-sm-12 ml-auto mr-auto\" style=\"padding-bottom: -1em \">\n                            <div class=\"clrs-h1-font col-md-12\">\n                              <a><i class=\"nc-icon nc-palette\"></i> Colours Personal</a>\n                            </div><br>\n                            <div class=\"text-left col-md-10\" style=\"padding-top: -1em; color: steelblue; \">\n                              <a>My Diary Today</a>\n                            </div>\n                          </div>\n                          <div class=\"spacer\" style=\"height: 1em;\"></div>\n                          <div class=\"row\" style=\"height: 100px\" >\n                            <div  id=\"container\">\n                              <div class=\"content container scroll-em\" *ngIf=\"showActions\">\n                                <ol>\n                                  <li class=\"\" style=\"color:steelblue\" *ngFor=\"let event of diaryActionItems\">\n                                      <div class=\"col-sm-12\" style=\"margin-left:1.0em; margin-right:-.5em\">\n                                        <a style=\"color:slategrey\">\n                                          {{ event.name }}\n                                        </a>\n                                      </div>\n                                  </li>\n                                </ol>\n                              </div>\n                              <div class=\"content container scroll-em\" *ngIf=\"hideActions\">\n                                <div class=\"row\">\n                                  <div class=\"col-sm-12\" style=\"margin-left:-.5em; margin-right:-.5em\">\n                                    <ol>\n                                      <li>\n                                          <a style=\"color:lightgrey\">\n                                            <span class=\"col-md-9 text-info\">Meeting</span>\n                                            <span class=\"col-md-3 mr-auto number text-warning\"> 1000 hrs</span>\n                                          </a>\n                                      </li>\n                                      <li>\n                                            <a style=\"color:lightgrey\">\n                                              <span class=\"col-md-9 text-info\">Email</span>\n                                              <span class=\"col-md-3 mr-auto ml-auto number text-success\">1230 Hrs</span>\n                                            </a>\n                                      </li>\n                                      <li>\n                                          <a style=\"color:lightgrey\">\n                                            <span class=\"col-md-9 text-info\">Skype</span>\n                                            <span class=\"col-md-3 mr-auto ml-auto label text-success\"> 1400 Hrs </span>\n                                          </a>\n                                      </li>\n                                      <li>\n                                          <a style=\"color:lightgrey\">\n                                            <span class=\"col-md-9 text-info\">Scheduling</span>\n                                            <span class=\"col-lg-3 mr-auto ml-auto label text-success\"> 0800 Hrs </span>\n                                          </a>\n                                      </li>\n                                    </ol>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                         </div>\n                        <div class=\"card-body\">\n                          <h6 class=\"big-title\">total earnings in last ten quarters</h6>\n                          <canvas id=\"activeUsers\" width=\"826\" height=\"150\"></canvas>\n                        </div>\n                        <div class=\"card-footer\">\n                          <hr>\n                          <div class=\"row\">\n                            <div class=\"col-sm-7\">\n                              <div class=\"footer-title\">Financial Statistics</div>\n                            </div>\n                            <div class=\"col-sm-5\">\n                              <div class=\"pull-right\">\n                                <button class=\"btn btn-success btn-round btn-icon btn-sm\">\n                                  <i class=\"nc-icon nc-simple-add\"></i>\n                                </button>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4 col-sm-6 dash-col\">\n                      <div class=\"card\">\n                        <div class=\"card-content btn-magnify\">\n                          <div class=\"row col-sm-12 ml-auto mr-auto\" style=\"padding-bottom: -1em \">\n                            <div class=\"clrs-h1-font\">\n                              <a><i class=\"fa fa-tasks fa-fw\"></i> Colours Projects</a>\n                            </div><br>\n                            <div class=\"text-left\" style=\"padding-top: -1em; color: steelblue; \">\n                              <a>My Current Priority Projects</a>\n                            </div>\n                          </div>\n                          <div class=\"spacer\" style=\"height:1em;\"></div>\n                          <div id=\"pTasklist\">\n                            <ol>\n                              <li>\n                                <div class=\"row\">\n                                  <div class=\"col-xs-10 \" style=\"margin-left:2.0em\">\n                                    <a class=\"text-danger\" style=\"color:lightgrey\" href=\"#send_agenda\">\n                                      Joina City\n                                    </a>\n                                  </div>\n                                </div>\n                              </li>\n                              <li>\n                                <div class=\"row\">\n                                  <div class=\"col-xs-10 \" style=\"margin-left:2.0em\">\n                                    <a class=\"text-danger\" style=\"color:lightgrey\" href=\"#send_agenda\">\n                                      Aripo Offices\n                                    </a>\n                                  </div>\n                                </div>\n                              </li>\n                              <li>\n                                <div class=\"row\">\n                                  <div class=\"col-xs-10 \" style=\"margin-left:2.0em\">\n                                    <a class=\"text-danger\" style=\"color:lightgrey\" href=\"#send_agenda\">\n                                      Colours Software\n                                    </a>\n                                  </div>\n                                </div>\n                              </li>\n                              <li>\n                                <div class=\"row\">\n                                  <div class=\"col-xs-10 \" style=\"margin-left:2.0em\">\n                                    <a class=\"text-danger\" style=\"color:lightgrey\" href=\"#send_agenda\">\n                                      Beitbridge\n                                    </a>\n                                  </div>\n                                </div>\n                              </li>\n                            </ol>\n                          </div>\n                        </div>\n                        <div class=\"card-body\">\n                          <h6 class=\"big-title\">total subscriptions in last 7 days</h6>\n                          <canvas id=\"emailsCampaignChart\" width=\"826\" height=\"150\"></canvas>\n                        </div>\n                        <div class=\"card-footer\">\n                          <hr>\n                          <div class=\"row\">\n                            <div class=\"col-sm-7\">\n                              <div class=\"footer-title\">View all members</div>\n                            </div>\n                            <div class=\"col-sm-5\">\n                              <div class=\"pull-right\">\n                                <button class=\"btn btn-danger btn-round btn-icon btn-sm\">\n                                  <i class=\"nc-icon nc-button-play\"></i>\n                                </button>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4 col-sm-6  dash-col-right\">\n                      <div class=\"card\">\n                        <div class=\"card-content btn-magnify\">\n                          <div class=\"row col-sm-12 ml-auto mr-auto\" style=\"padding-bottom: -1em \">\n                            <div class=\"clrs-h1-font\">\n                              <a><i class=\"fa fa-feed  fa-flip-vertical fa-fw\"></i> {{ (project)?.name }} News</a>\n                            </div><br>\n                            <div class=\"text-left\" style=\"padding-top: -1em; color: steelblue;font-size: 2 \">\n                              <a>All {{ (project)?.name }} project News</a>\n                            </div>\n                          </div>\n                          <div class=\"spacer\" style=\"height: 1em;\"></div>\n                          <div id=\"eTasklixt\" class=\"row col-sm-12 ml-auto mr-auto\">\n                            <marquee direction=\"up\">\n                              <ol style=\"padding-left: 14px; padding-right: 14px;\">\n                                <li>\n                                  <div class=\"row\">\n                                    <div class=\"col-xs-10 \" style=\"margin-left: 1em\">\n                                      <a class=\"text-danger\" href=\"#Respond_to_feed\" style=\"color:lightgrey\">\n                                        Increase your ﬁnancial networth by using Colours\n                                        to get the best results out of your efforts.\n                                      </a>\n                                    </div>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"row\">\n                                    <div class=\"col-xs-10\" style=\"margin-left:1em\">\n                                      <a href=\"#Respond_to_mail\" style=\"color:lightgrey\">\n                                        Use Colours to TRACK your own daily performance metrics, review and improve on\n                                        the same.\n                                      </a>\n                                    </div>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"row\">\n                                    <div class=\"col-xs-10\" style=\"margin-left:1em\">\n                                      <a href=\"#Contact_Supplier\" style=\"color:lightgrey\">\n                                        Colours will help you pay attention to the effective\n                                        use of yo time and your any other resources.\n                                      </a>\n                                    </div>\n                                  </div>\n                                </li>\n                                <li>\n                                  <div class=\"row\">\n                                    <div class=\"col-xs-10\" style=\"margin-left:1em\">\n                                      <a href=\"#Aripo\" style=\"color:lightgrey\">\n                                        Colours will help you squeeze the most out of your life\n                                      </a>\n                                    </div>\n                                  </div>\n                                </li>\n                              </ol>\n                            </marquee>\n                          </div>\n                        </div>\n                        <div class=\"card-footer\">\n                          <hr>\n                          <div class=\"row\">\n                            <div class=\"col-sm-7\">\n                              <div class=\"footer-title\">View more details</div>\n                            </div>\n                            <div class=\"col-sm-5\">\n                              <div class=\"pull-right\">\n                                <button class=\"btn btn-warning btn-round btn-icon btn-sm\">\n                                  <i class=\"nc-icon nc-alert-circle-i\"></i>\n                                </button>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div> -->\n                </div>\n                <div class=\"tab-pane\" id=\"standards\">\n                  <div class=\"col-md-5 mr-auto ml-auto text-center\">\n                    <p>Coming Soon.</p>\n                  </div>\n                </div>\n                <div class=\"tab-pane\" id=\"proSetup\">\n                  <div *ngIf=\"!inviteCompany\" class=\"col-md-12\">\n                    <div class=\"card-body nav-hor-tabs\">\n                      <div class=\"nav-tabs-navigation\">\n                        <div class=\"nav-tabs-wrapper\">\n                          <ul id=\"tabs\" class=\"nav nav-tabs\" role=\"tablist\">\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link active nav-colors\" data-toggle=\"tab\" href=\"#directory\" role=\"tab\"\n                                aria-expanded=\"false\">Project Directory</a>\n                            </li>\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link nav-colors\" data-toggle=\"tab\" href=\"#description\" role=\"tab\"\n                                aria-expanded=\"false\">Project Description</a>\n                            </li>\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link nav-colors\" data-toggle=\"tab\" href=\"#abridged\" role=\"tab\"\n                                aria-expanded=\"false\">Abridged BOQ</a>\n                            </li>\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link nav-colors\" data-toggle=\"tab\" href=\"#lReturns\" role=\"tab\"\n                                aria-expanded=\"false\">Labour Returns</a>\n                            </li>\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link nav-colors\" data-toggle=\"tab\" href=\"#pReturns\" role=\"tab\"\n                                aria-expanded=\"false\">Plant Returns</a>\n                            </li>\n                          </ul>\n                        </div>\n                      </div>\n                      <div id=\"my-tab-content\" class=\"tab-content\">\n                        <div class=\"tab-pane active\" role=\"tabpanel\" id=\"directory\" aria-expanded=\"false\">\n                          <div class=\"col-md-12 ml-auto mr-auto\">\n                            <div class=\"card\">\n                              <div class=\"card-body text-center\" style=\"margin-left:4.0em;\">\n                                <!-- <code>Labour Returns</code> -->\n                                <div class=\"row\">\n                                  <div class=\"col-md-7\">\n                                    <p class=\"text-left\">list of companies involved</p>\n                                  </div>\n                                  <div class=\"col-md-5\">\n                                    <!-- <a style=\"color:steelblue;cursor:pointer\" (cilck)=\"showInvite()\">Invite Enterprise</a> -->\n                                    <button class=\"btn-link btn-magnify\" (click)=\"showInvite()\">Invite\n                                      Enterprise</button>\n                                  </div>\n\n                                </div>\n                                <ul>\n                                  <li class=\"\" style=\"color:steelblue\" *ngFor=\"let company of projectCompanies | async\">\n                                    <div class=\"row\">\n                                      <div class=\"col-sm-12 text-left\" style=\"margin-left:2.0em;\">\n                                        <button class=\"btn-link\" style=\"color:slategrey\"\n                                          (click)=\"chooseCompany(company)\" data-toggle=\"modal\"\n                                          data-target=\"#compDetail\">\n                                          <!--  [routerLink]=\"[ '/enterprises/', company.id ]\" -->\n                                          {{ company.name }}\n                                        </button>\n                                      </div>\n                                    </div>\n                                  </li>\n                                </ul>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"tab-pane\" role=\"tabpanel\" id=\"lReturns\" aria-expanded=\"true\">\n                          <div class=\"row\">\n                            <div class=\"col-md-12 ml-auto mr-auto\">\n                              <div class=\"card\">\n                                <div class=\"card-body text-center\">\n                                  <p class=\"text-left\" style=\"margin-left:1.5em;\">Labour Returns</p>\n                                  <ul>\n                                    <li class=\"\" style=\"color:steelblue\" *ngFor=\"let user of labour | async\">\n                                      <div class=\"row\">\n                                        <div class=\"col-sm-12 text-left card-category title\" style=\"margin-left:2.0em;\">\n                                          <button class=\"btn-link\" style=\"color:slategrey\" (click)=\"viewLabour(user)\"\n                                            data-toggle=\"modal\" data-target=\"#labourerDetail\">\n                                            <!--  [routerLink]=\"[ '/enterprises/', company.id ]\" -->\n                                            {{ user.name }}\n                                          </button>\n                                        </div>\n                                      </div>\n                                    </li>\n                                  </ul>\n                                </div>\n                                <!-- <div class=\"text-left\"> -->\n                                <div class=\"card-body row\" style=\"padding-top: 0px;\">\n                                  <div class=\"col-ms-8\">\n                                    <div class=\"card-header text-left\">\n                                      <h5 class=\"card-category\" style=\"height: 28px; font-size: 8;\">\n                                        Add new labour from <button class=\"primary btn-link\" data-toggle=\"modal\"\n                                          data-target=\"#usersList\">{{ (project)?.companyName }} Employees</button>\n                                      </h5>\n                                    </div>\n                                  </div>\n                                </div>\n                                <!-- </div> -->\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"tab-pane\" role=\"tabpanel\" id=\"pReturns\" aria-expanded=\"true\">\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <div class=\"card\">\n                                <div class=\"card-header\">\n                                  <h4 class=\"card-title\"> Plant Returns</h4>\n                                </div>\n                                <div class=\"card-body\">\n                                  <div class=\"table-responsive\">\n                                    <table class=\"table\">\n                                      <thead class=\"\">\n                                        <th>ID</th>\n                                        <th>Description</th>\n                                        <th>Unit</th>\n                                        <th class=\"text-right\"> Rate ($/unit)</th>\n                                      </thead>\n                                      <tbody *ngIf=\"showPlantReturns\">\n                                        <tr *ngFor=\"let item of ProjectPlantReturns | async\">\n                                          <td>{{ item.name }}</td>\n                                          <td>{{ item.assetNumber }}</td>\n                                          <td>{{ item.unit }}</td>\n                                          <td class=\"text-right\">{{ item.rate }}</td>\n                                        </tr>\n                                      </tbody>\n                                      <tbody *ngIf=\"!showPlantReturns\">\n                                        <code>Demo Data</code>\n                                        <tr>\n                                          <td>1</td>\n                                          <td>Grader 454</td>\n                                          <td>Hour</td>\n                                          <td class=\"text-right\"> $400/hour</td>\n                                        </tr>\n                                        <tr>\n                                          <td>2</td>\n                                          <td>Excavator</td>\n                                          <td>Hour</td>\n                                          <td class=\"text-right\">$350/hour</td>\n                                        </tr>\n                                        <tr>\n                                          <td>3</td>\n                                          <td>Scaffolding</td>\n                                          <td>Frame/month</td>\n                                          <td class=\"text-right\">$50/frame/month</td>\n                                        </tr>\n                                      </tbody>\n                                    </table>\n                                    <div class=\"col-ms-10 mr-auto ml-auto\">\n                                      <div class=\"card-header text-right\">\n                                        <h5 class=\"card-category\" style=\"height: 28px; font-size: 8;\">\n                                          Add from plant returns <button class=\"primary btn-link\" data-toggle=\"modal\"\n                                            data-target=\"#assetRegister\">{{ project.companyName }} Asset\n                                            Register</button>\n                                        </h5>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"tab-pane\" role=\"tabpanel\" id=\"abridged\" aria-expanded=\"true\">\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <div class=\"card\">\n                                <div class=\"card-header\" style=\"margin-left: 2em\">\n                                  <h4 class=\"card-title na-am\">Bills </h4>\n                                </div>\n                                <div id=\"accordionBillSections\" role=\"tablist\" aria-multiselectable=\"true\"\n                                  class=\"card-collapse\">\n                                  <ol>\n                                    <li style=\"color:steelblue\" *ngFor=\"let bill of aBridgedBill | async\"\n                                      class=\"col-md-12\">\n                                      <div class=\"card card-plain\">\n                                        <div class=\"card-header\" role=\"tab\" id=\"heading2\">\n                                          <a class=\"collapsed col-md-12\" data-toggle=\"collapse\" href=\"#{{  bill.id  }}\"\n                                            (click)=\"showWorkItems(bill.id)\" title=\"Click to see work Items\"\n                                            aria-expanded=\"false\" aria-current=\"false\"><span\n                                              class=\"col-md-6\">{{ bill.name }}</span><span class=\"col-md-4 ml-auto\">\n                                              Total Amount: $ {{ bill.totalAmount }}</span><i\n                                              class=\"nc-icon nc-minimal-down\"></i>\n                                          </a>\n                                        </div>\n                                        <div id=\"{{ bill.id }}\" class=\"collapse\" data-parent=\"#accordionBillSections\"\n                                          role=\"tabpanel\" aria-labelledby=\"heading2\">\n                                          <div class=\"card-body\">\n                                            <div class=\"row\" style=\"margin-left: 2em\">\n                                              <div class=\"col-md-3 text-left card-title na-p\">Activity</div>\n                                              <div class=\"col-md-2 card-title na-p\">Units</div>\n                                              <div class=\"col-md-2 card-title na-p\">Quantity</div>\n                                              <div class=\"col-md-2 card-title na-p\">Rate</div>\n                                              <div class=\"col-md-3 text-left card-title na-p\">Amount</div>\n                                            </div>\n                                            <div class=\"spacer\" style=\"height: 2em\"></div>\n                                            <ol style=\"padding-left: 0px;\">\n                                              <li *ngFor=\"let item of billWorkItems | async\">\n                                                <div class=\"row\" style=\"margin-left: 2em\">\n                                                  <div class=\"col-md-3 text-left\">{{ item.name }}</div>\n                                                  <div class=\"col-md-2\">{{ item.unit }}</div>\n                                                  <div class=\"col-md-2\">{{ item.quantity }}</div>\n                                                  <div class=\"col-md-2\">$ {{ item.rate }} / {{ item.unit }}</div>\n                                                  <div class=\"col-md-3 text-left\">$ {{ item.amount }}</div>\n                                                </div>\n                                                <hr>\n                                              </li>\n                                            </ol>\n                                          </div>\n                                          <button class=\"btn-link btn-round primary\" (click)=\"selectBill(bill)\"\n                                            data-toggle=\"modal\" data-target=\"#addWorkItem\" title=\"add Activity\">\n                                            <small>Add task activity</small>\n                                          </button>\n                                        </div>\n                                      </div>\n                                    </li>\n                                  </ol>\n                                </div>\n                                <div class=\"col-md-10 mr-auto ml-auto\">\n                                  <div class=\"na-p\">\n                                    <div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\"\n                                      class=\"card-collapse\">\n                                      <div class=\"card card-plain\">\n                                        <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n                                          <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#billAcollapse2\" aria-expanded=\"false\" aria-controls=\"billAcollapse2\">\n                                            Add new bill\n                                            <i class=\"nc-icon nc-minimal-down\"></i>\n                                          </a>\n                                        </div>\n                                        <div id=\"billAcollapse2\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"heading2\">\n                                          <div class=\"card-body\">\n\n                                            <div class=\"row\">\n                                              <!-- <label class=\"col-md-3 col-form-label\">Section</label> -->\n                                              <div class=\"col-md-9 col-form-label\">\n                                                <!-- <p *ngIf=\"projectCompanyFieldStatus\" class=\"category text-danger\" style=\"margin-bottom:0em; cursor: pointer;\">Company Required</p> -->\n                                                <div class=\"form-group\">\n                                                  <ng-select [items]=\"projectDescriptions | async\" bindLabel=\"name\" name=\"psection\"  placeholder=\"Select Section\" (change)=\"selectSection(section)\" [(ngModel)]=\"section\">\n                                                  </ng-select>\n                                                </div>\n                                              </div>\n                                            </div>\n                                            <div class=\"row\">\n                                              <div class=\"col-md-3\">\n                                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                                  <div class=\"input-group-prepend\">\n                                                    <span class=\"input-group-text\">\n                                                      <i class=\"fa fa-calculator\"></i>\n                                                    </span>\n                                                  </div>\n                                                  <input type=\"number\" class=\"form-control\" placeholder=\"Bill no...\"\n                                                    (focus)=\"focus=true\" (blur)=\"focus=false\" [(ngModel)]=\"newBill.No\">\n                                                </div>\n                                              </div>\n                                              <div class=\"col-md-9\">\n                                                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                                  <div class=\"input-group-prepend\">\n                                                    <span class=\"input-group-text\">\n                                                      <i class=\"fa fa-folder-o\"></i>\n                                                    </span>\n                                                  </div>\n                                                  <input type=\"text\" class=\"form-control\" placeholder=\"Bill name...\"\n                                                    (focus)=\"focus=true\" (blur)=\"focus=false\"\n                                                    [(ngModel)]=\"newBill.name\">\n                                                </div>\n                                              </div>\n                                            </div>\n                                            <button class=\"primary btn-link\" (click)=\"saveBill()\">save</button>\n                                          </div>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"tab-pane\" role=\"tabpanel\" id=\"description\" aria-expanded=\"true\">\n                          <div class=\"row\">\n                            <div class=\"col-md-10 mr-auto ml-auto\">\n                              <div class=\"card\">\n                                <div class=\"card-header\">\n                                  <p class=\"title na-p\">Project Description</p>\n                                </div>\n                                <div class=\"card-content table-responsive table_info\">\n                                  <table class=\"table\">\n                                    <thead class=\"card-category title na-p\">\n                                      <th>Section No</th>\n                                      <th>Section name</th>\n                                    </thead>\n                                    <tbody>\n                                      <tr *ngFor=\"let xsection of projectDescription | async\">\n                                        <td class=\"table td-clrs\">{{ xsection.no }}</td>\n                                        <td class=\"table td-clrs\">{{ xsection.name }}</td>\n                                      </tr>\n                                    </tbody>\n                                  </table>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"tab-pane\" role=\"tabpanel\" id=\"valueofwork\" aria-expanded=\"true\">\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <div class=\"card\">\n                                <div class=\"card-header\">\n                                  <h4 class=\"card-title\"> Value of Works </h4>\n                                </div>\n                                <div class=\"card-body\">\n                                  <div class=\"table-responsive\">\n                                    <table class=\"table\">\n                                      <thead class=\"\">\n                                        <th>Task</th>\n                                        <th>Task Description</th>\n                                        <th>Unit</th>\n                                        <th>Quantity of work done</th>\n                                        <th class=\"text-right\">Rate ($/unit)</th>\n                                        <th> Amount Earned</th>\n                                      </thead>\n                                      <tbody>\n                                        <tr>\n                                          <td>\n                                            Section 1:<br>\n                                            Preliminaries and Generals\n                                          </td>\n                                          <td>\n                                          </td>\n                                          <td></td>\n                                          <td class=\"text-right\">\n                                          </td>\n                                        </tr>\n                                        <tr>\n                                          <td>\n                                            Bill Section 2:<br>\n                                            Building Block A – Administration\n                                          </td>\n                                          <td>\n                                            Site Clearance <br>\n                                            Foundation Excavations<br>\n                                            Concrete\n                                          </td>\n                                          <td>\n                                            M2<br>\n                                            M3<br>\n                                            M3\n                                          </td>\n                                          <td class=\"text-right\">\n                                            100M2 <br>\n                                            2000M3<br>\n                                            1000M3\n                                          </td>\n                                          <td class=\"text-right\">\n                                            $0.8<br>\n                                            $6.5<br>\n                                            $215\n                                          </td>\n                                          <td class=\"text-right\">\n                                            $80<br>$13.000<br>$215.000\n                                          </td>\n                                        </tr>\n                                        <tr>\n                                          <td>\n                                            Bill Section 3:<br>\n                                            Building Block B – Executive Wing\n                                          </td>\n                                          <td></td>\n                                          <td></td>\n                                          <td class=\"text-right\">\n\n                                          </td>\n                                        </tr>\n\n                                      </tbody>\n                                    </table>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div *ngIf=\"inviteCompany\" class=\"col-md-12\">\n                    <div class=\"row\">\n                      <div class=\"col-md-2\">\n                        <!-- <a style=\"color:steelblue;cursor:pointer\" (cilck)=\"showInvite()\">Invite Enterprise</a> -->\n                        <a class=\"btn-link btn-magnify\" style=\"color:steelblue;cursor:pointer\"\n                          (click)=\"hideInvite()\">Back</a>\n                      </div>\n                      <div class=\"col-md-4\" style=\"vertical-align: middle;\">\n                        <form class=\"form-horizontal\">\n                          <div class=\"form-group\">\n                            <input style=\"padding-top: 4px; padding-bottom: 3px\" type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"locationData\" name=\"location_input\" placeholder=\"Enter location\">\n                          </div>\n                        </form>\n                      </div>\n                      <div class=\"col-md-4\" style=\"vertical-align: middle;\">\n                        <form class=\"form-horizontal\">\n                          <div class=\"form-group\">\n                            <input style=\"padding-top: 4px; padding-bottom: 3px\" type=\"text\" class=\"form-control\"\n                              [(ngModel)]=\"sectorData\" name=\"sector_input\" placeholder=\"Enter Sector\">\n                          </div>\n                        </form>\n                      </div>\n                      <div class=\"col-md-2\">\n                        <a class=\"btn-link btn-magnify\" style=\"color:steelblue;cursor:pointer\"\n                          (click)=\"search(locationData, sectorData);showTable()\">Search</a>\n                      </div>\n                      <!-- <div class=\"col-md-9\" style=\"vertical-align: middle;\">\n                          <p class=\"text-left card-category\" style=\"vertical-align: middle; margin-bottom:0px\">list of companies</p>\n                      </div> -->\n                    </div>\n                    <div *ngIf=\"!showCompanies\" class=\"card-body text-center\" style=\"margin-left:4.0em;\">\n                      <h2 class=\"text-center clrs-h1-font\" style=\"vertical-align: middle; margin-bottom:0px\">Search for\n                        enterprises by location and or by its Industrial sector </h2>\n                      <!-- <p class=\"text-left card-category\" style=\"vertical-align: middle; margin-bottom:0px\">list of companies</p>\n                      <ul>\n                        <li class=\"\" style=\"margin-left:2.0em; padding-left:2.0em;\" *ngFor=\"let company of coloursCompanies | async\">\n                          <div class=\"row\">\n                            <span class=\"row col-md-12\">\n                            <span class=\"col-sm-9 text-left\" style=\"padding-left: 0px; padding-right: 0px; color:slategrey\"> {{ company.name }} </span>\n                              <span class=\"col-sm-3\">\n                                <a class=\"btn-link btn-magnify\" style=\"color:steelblue; cursor:pointer\" (click)=\"inviteEnterpride(company)\">Invite</a>\n                              </span>\n                            </span><br>\n                          </div>\n                        </li>\n                      </ul> -->\n                    </div>\n                    <div *ngIf=\"showCompanies\" class=\"card-body text-center\" style=\"margin-left:4.0em;\">\n                      <h2 class=\"text-left clrs-h1-font\" style=\"vertical-align: middle; margin-bottom:0px\">list of filtered\n                        companies</h2>\n                      <ol>\n                        <li class=\"\" style=\"margin-left:2.0em; padding-left:2.0em;\"\n                          *ngFor=\"let company of viewCompanies | async\">\n                          <div class=\"row\">\n                            <span class=\"row col-md-12\">\n                              <span class=\"col-sm-9 text-left\"\n                                style=\"padding-left: 0px; padding-right: 0px; color:slategrey\"> {{ company.name }}\n                              </span>\n                              <span class=\"col-sm-3\">\n                                <a class=\"btn-link btn-magnify\" style=\"color:steelblue; cursor:pointer\"\n                                  (click)=\"inviteEnterpride(company)\">Invite</a>\n                              </span>\n                            </span><br>\n                            <!-- <div class=\"col-sm-12 text-left\" style=\"margin-left:2.0em;\">\n                              <button class=\"btn-link\" style=\"color:slategrey\" (click)=\"chooseCompany(company)\" data-toggle=\"modal\"\n                                data-target=\"#compDetail\">\n                                {{ company.name }}\n                              </button>\n                            </div> -->\n                          </div>\n                        </li>\n                      </ol>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-pane\" id=\"planning\">\n\n                  <div class=\"col-md-12\">\n                    <div class=\"card-body nav-hor-tabs\">\n                      <div class=\"nav-tabs-navigation\">\n                        <div class=\"nav-tabs-wrapper\">\n                          <ul id=\"tabs\" class=\"nav nav-tabs\" role=\"tablist\">\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link nav-colors  active\" data-toggle=\"tab\" href=\"#week\" role=\"tab\"\n                                aria-expanded=\"true\">Week</a><!--  (click)=\"setPeriod('startWeek')\" -->\n                            </li>\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link nav-colors\" data-toggle=\"tab\" href=\"#month\" role=\"tab\"\n                                aria-expanded=\"false\">Month</a><!--  (click)=\"setPeriod('startMonth')\" -->\n                            </li>\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link nav-colors\" data-toggle=\"tab\" href=\"#quarter\" role=\"tab\"\n                                aria-expanded=\"false\">Quarter</a><!--  (click)=\"setPeriod('startQuarter')\" -->\n                            </li>\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link nav-colors\" data-toggle=\"tab\" href=\"#year\" role=\"tab\"\n                                aria-expanded=\"false\">Year</a><!--  (click)=\"setPeriod('startYear')\" -->\n                            </li>\n                          </ul>\n                        </div>\n                      </div>\n                      <div id=\"my-tab-content\" class=\"tab-content text-center\">\n                        <div class=\"tab-pane\" id=\"day\" role=\"tabpanel\" aria-expanded=\"true\">\n                          <div class=\"card\">\n                            <div class=\"\">\n                              <div class=\"card-text\">\n                                <p class=\"card-title\">\n                                  <button class=\"btn-link\" (click)=\"changePeriod('previous','startDay')\"><i\n                                      class=\"nc-icon nc-minimal-left\" style=\"margin-right:3em\"></i></button>\n                                  {{ currentDay }}'s Tasks\n                                  <button class=\"btn-link\" (click)=\"changePeriod('next','startDay')\"><i\n                                      class=\"nc-icon nc-minimal-right\" style=\"margin-left:3em\"></i></button>\n                                </p>\n                              </div>\n                            </div>\n                            <div class=\"card-body\">\n                              <div class=\"table-responsive\">\n                                <table class=\"table\">\n                                  <thead class=\"text-primary\">\n                                    <th class=\"text-left\">Name</th>\n                                    <th class=\"text-center\">Project</th>\n                                    <th class=\"text-center\">Champion</th>\n                                    <th class=\"text-right\">Start Date</th>\n                                  </thead>\n                                  <tbody>\n                                    <tr *ngFor=\"let tss of todayTasks | async\">\n                                      <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                      <td class=\"text-center td-clrs\">{{ tss.projectName }}</td>\n                                      <td class=\"text-left td-clrs\">{{ tss.champion.name }}</td>\n                                      <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                      <!-- <td class=\"text-right td-clrs\">\n                                      <button type=\"button\" rel=\"tooltip\" class=\"btn btn-info btn-icon btn-sm   btn-neutral  \">\n                                        <i class=\"fa fa-user\"></i>\n                                      </button>\n                                      <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success btn-icon btn-sm   btn-neutral  \">\n                                        <i class=\"fa fa-edit\"></i>\n                                      </button>\n                                      <button type=\"button\" rel=\"tooltip\" class=\"btn btn-danger btn-icon btn-sm   btn-neutral  \">\n                                        <i class=\"fa fa-times\"></i>\n                                      </button>\n                                    </td> -->\n                                    </tr>\n                                    <tr class=\"text-left\">\n                                      <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                        data-toggle=\"modal\" data-target=\"#tskModal\">New Task</button>\n                                    </tr>\n                                  </tbody>\n                                </table>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"tab-pane active\" id=\"week\" role=\"tabpanel\" aria-expanded=\"false\">\n                          <div class=\"card\">\n                            <div class=\"\">\n                              <div class=\"card-text\">\n                                <p class=\"card-title\">\n                                  <button class=\"btn-link\" (click)=\"changePeriod('previous','startWeek')\"\n                                    title=\"goto the previous week\"><i class=\"nc-icon nc-minimal-left\"\n                                      style=\"margin-right:3em\"></i></button>Week {{ currentWeek.week() }}'s Tasks of\n                                  Year {{ currentWeek.year() }}\n                                  <button class=\"btn-link\" (click)=\"changePeriod('next','startWeek')\"\n                                    title=\"goto the next week\"><i class=\"nc-icon nc-minimal-right\"\n                                      style=\"margin-left:3em\"></i></button>\n                                </p>\n                              </div>\n                            </div>\n                            <div class=\"card-body\">\n                              <div aria-multiselectable=\"true\" class=\"card-collapse\" id=\"accordionDay\" role=\"tablist\">\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pDAY0\">\n                                    <a class=\"collapsed\" (click)=\"setDay('day0')\" title=\"click to view tasks\"\n                                      data-toggle=\"collapse\" href=\"#planDay0\" aria-expanded=\"false\"\n                                      aria-controls=\"planDay0\"> {{ day0label }} <i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planDay0\" class=\"collapse\" aria-labelledby=\"pDAY0\"\n                                    data-parent=\"#accordionDay\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of todayTasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-center td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New\n                                                Task</button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pDAY0\">\n                                    <a class=\"collapsed\" (click)=\"setDay('day1')\" data-toggle=\"collapse\"\n                                      href=\"#planDay1\" aria-expanded=\"false\" aria-controls=\"planDay1\"\n                                      title=\"click to view tasks\">{{ day1label }}<i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planDay1\" class=\"collapse\" aria-labelledby=\"pDAY0\"\n                                    data-parent=\"#accordionDay\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of day1Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-center td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New\n                                                Task</button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pDAY0\">\n                                    <a class=\"collapsed\" (click)=\"setDay('day2')\" data-toggle=\"collapse\"\n                                      href=\"#planDay2\" aria-expanded=\"false\" aria-controls=\"planDay2\"\n                                      title=\"click to view tasks\">{{ day2label }}<i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planDay2\" class=\"collapse\" aria-labelledby=\"pDAY0\"\n                                    data-parent=\"#accordionDay\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of day2Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-center td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New\n                                                Task</button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pDAY0\">\n                                    <a class=\"collapsed\" (click)=\"setDay('day3')\" title=\"click to view tasks\"\n                                      data-toggle=\"collapse\" href=\"#planDay3\" aria-expanded=\"false\"\n                                      aria-controls=\"planDay3\">{{ day3label }}<i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planDay3\" class=\"collapse\" aria-labelledby=\"pDAY0\"\n                                    data-parent=\"#accordionDay\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of day3Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-center td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New\n                                                Task</button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pDAY0\">\n                                    <a class=\"collapsed\" (click)=\"setDay('day4')\" title=\"click to view tasks\"\n                                      data-toggle=\"collapse\" href=\"#planDay4\" aria-expanded=\"false\"\n                                      aria-controls=\"planDay4\"> {{ day4label }}<i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planDay4\" class=\"collapse\" aria-labelledby=\"pDAY0\"\n                                    data-parent=\"#accordionDay\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of day4Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-center td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New\n                                                Task</button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pDAY0\">\n                                    <a class=\"collapsed\" (click)=\"setDay('day5')\" title=\"click to view tasks\"\n                                      data-toggle=\"collapse\" href=\"#planDay5\" aria-expanded=\"false\"\n                                      aria-controls=\"planDay5\">{{ day5label }}<i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planDay5\" class=\"collapse\" aria-labelledby=\"pDAY0\"\n                                    data-parent=\"#accordionDay\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of day5Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-center td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New\n                                                Task</button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pDAY0\">\n                                    <a class=\"collapsed\" (click)=\"setDay('day6')\" title=\"click to view tasks\"\n                                      data-toggle=\"collapse\" href=\"#planDay6\" aria-expanded=\"false\"\n                                      aria-controls=\"planDay6\">{{ day6label }}<i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planDay6\" class=\"collapse\" aria-labelledby=\"pDAY0\"\n                                    data-parent=\"#accordionDay\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of day6Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-center td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New\n                                                Task</button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"tab-pane\" id=\"month\" role=\"tabpanel\" aria-expanded=\"false\">\n                          <div class=\"card\">\n                            <div class=\"\">\n                              <div class=\"card-text\">\n                                <p class=\"card-title\">\n                                  <button class=\"btn-link\" (click)=\"changePeriod('previous','startMonth')\"\n                                    title=\"goto previous Month\"><i class=\"nc-icon nc-minimal-left\"\n                                      style=\"margin-right:3em\"></i></button>\n                                  <!-- {{ currentMonth }} {{ currentMonthNaam.format('MMMM') }}<small>th</small> month's Tasks of Year {{ currentYear }} {{ monthLabel }} -->\n                                  {{ currentMonthNaam.format('MMMM') }}'s Tasks of Year\n                                  {{ currentMonthNaam.format('YYYY') }}\n                                  <button class=\"btn-link\" (click)=\"changePeriod('next','startMonth')\"\n                                    title=\"goto next Month\"><i class=\"nc-icon nc-minimal-right\"\n                                      style=\"margin-left:3em\"></i></button>\n                                </p>\n                              </div>\n                            </div>\n                            <div class=\"card-body\">\n                              <div aria-multiselectable=\"true\" class=\"card-collapse\" id=\"accordionWeek\" role=\"tablist\">\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pWeek\">\n                                    <a class=\"collapsed\" (click)=\"setWeek('week0')\" title=\"click to view tasks\"\n                                      data-toggle=\"collapse\" href=\"#planWeek0\" aria-expanded=\"false\"\n                                      aria-controls=\"planWeek0\"> Week {{ week0label.week() }}<i\n                                        class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planWeek0\" class=\"collapse\" aria-labelledby=\"pWeek\"\n                                    data-parent=\"#accordionWeek\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of week0Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-left td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New\n                                                Task</button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pWeek\">\n                                    <a class=\"collapsed\" (click)=\"setWeek('week1')\" title=\"click to view tasks\"\n                                      data-toggle=\"collapse\" href=\"#planWeek1\" aria-expanded=\"false\"\n                                      aria-controls=\"planWeek1\"> Week {{ week1label.week() }}<i\n                                        class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planWeek1\" class=\"collapse\" aria-labelledby=\"pWeek\"\n                                    data-parent=\"#accordionWeek\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of week1Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-left td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New\n                                                Task</button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pWeek\">\n                                    <a class=\"collapsed\" (click)=\"setWeek('week2')\" title=\"click to view tasks\"\n                                      data-toggle=\"collapse\" href=\"#planWeek2\" aria-expanded=\"false\"\n                                      aria-controls=\"planWeek2\"> Week {{ week2label.week() }}<i\n                                        class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planWeek2\" class=\"collapse\" aria-labelledby=\"pWeek\"\n                                    data-parent=\"#accordionWeek\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of week2Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-left td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New\n                                                Task</button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pWeek\">\n                                    <a class=\"collapsed\" (click)=\"setWeek('week3')\" title=\"click to view tasks\"\n                                      data-toggle=\"collapse\" href=\"#planWeek3\" aria-expanded=\"false\"\n                                      aria-controls=\"planWeek3\"> Week {{ week3label.week() }}<i\n                                        class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planWeek3\" class=\"collapse\" aria-labelledby=\"pWeek\"\n                                    data-parent=\"#accordionWeek\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of week3Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-left td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New\n                                                Task</button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"tab-pane\" id=\"quarter\" role=\"tabpanel\" aria-expanded=\"false\">\n                          <div class=\"card\">\n                            <div class=\"\">\n                              <div class=\"card-text\">\n                                <p class=\"card-title\">\n                                  <button class=\"btn-link\" (click)=\"changePeriod('previous','startQuarter')\"\n                                    title=\"goto previous Quarter\">\n                                    <i class=\"nc-icon nc-minimal-left\" style=\"margin-right:3em\"></i></button>\n                                  <!-- {{ currentQuarter }}<small>th</small> Quarter's Tasks of Year {{ currentYear }} -->\n                                  {{ currentQuarterNaam.format('Q') }}<small>th</small> Quarter's Tasks of Year\n                                  {{ currentQuarterNaam.format('YYYY') }}\n                                  <button class=\"btn-link\" (click)=\"changePeriod('next','startQuarter')\"\n                                    title=\"goto next Quarter\">\n                                    <i class=\"nc-icon nc-minimal-right\" style=\"margin-left:3em\"></i></button>\n                                </p>\n                              </div>\n                            </div>\n                            <div class=\"card-body\">\n                              <div aria-multiselectable=\"true\" class=\"card-collapse\" id=\"accordionMonth\" role=\"tablist\">\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pMonth\">\n                                    <a class=\"collapsed\" (click)=\"setMonth('month1')\" title=\"click to view tasks\"\n                                      data-toggle=\"collapse\" href=\"#planMonth1\" aria-expanded=\"false\"\n                                      aria-controls=\"planMonth1\">\n                                      {{ month1label.format('MMMM') }}, {{ month1label.year() }}<i\n                                        class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planMonth1\" class=\"collapse\" aria-labelledby=\"pMonth\"\n                                    data-parent=\"#accordionMonth\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of month1Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-left td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New\n                                                Task</button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pMonth\">\n                                    <a class=\"collapsed\" (click)=\"setMonth('month2')\" title=\"click to view tasks\"\n                                      data-toggle=\"collapse\" href=\"#planMonth2\" aria-expanded=\"false\"\n                                      aria-controls=\"planMonth2\">\n                                      {{ month2label.format('MMMM') }}, {{ month2label.year() }} <i\n                                        class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planMonth2\" class=\"collapse\" aria-labelledby=\"pMonth\"\n                                    data-parent=\"#accordionMonth\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of month2Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-left td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New\n                                                Task</button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pMonth\">\n                                    <a class=\"collapsed\" (click)=\"setMonth('month3')\" title=\"click to view tasks\"\n                                      data-toggle=\"collapse\" href=\"#planMonth3\" aria-expanded=\"false\"\n                                      aria-controls=\"planMonth3\">\n                                      {{ month3label.format('MMMM') }}, {{ month3label.year() }}<i\n                                        class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planMonth3\" class=\"collapse\" aria-labelledby=\"pMonth\"\n                                    data-parent=\"#accordionMonth\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of month3Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-left td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New\n                                                Task</button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <!-- <div class=\"card card-plain\">\n                                  <div class=\"card-header\" id=\"heading2\" role=\"tab\"><a (click)=\"setMonth('month1')\" aria-controls=\"month1\"\n                                      aria-expanded=\"false\" class=\"collapsed\" data-parent=\"#accordion\" data-toggle=\"collapse\" href=\"#month1\">\n                                      {{ month1label.format('MMMM') }}, {{ month1label.year() }} <i class=\"nc-icon nc-minimal-down\"></i></a></div>\n                                  <div aria-labelledby=\"heading2\" class=\"collapse\" id=\"month1\" role=\"tabpanel\">\n                                    <div class=\"card-body\">\n                                     <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of month1Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-left td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\" data-toggle=\"modal\" data-target=\"#tskModal\">New\n                                                Task</button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" id=\"heading3\" role=\"tab\"><a (click)=\"setMonth('month2')\" aria-controls=\"month2\"\n                                      aria-expanded=\"false\" class=\"collapsed\" data-parent=\"#accordion\" data-toggle=\"collapse\" href=\"#month2\"> {{\n                                      month2label.format('MMMM') }}, {{ month2label.year() }} <i class=\"nc-icon nc-minimal-down\"></i></a></div>\n                                  <div aria-labelledby=\"heading3\" class=\"collapse\" id=\"month2\" role=\"tabpanel\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of month2Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-left td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\" data-toggle=\"modal\" data-target=\"#tskModal\">New\n                                                Task</button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" id=\"heading4\" role=\"tab\"><a (click)=\"setMonth('month3')\" aria-controls=\"month3\"\n                                      aria-expanded=\"false\" class=\"collapsed\" data-parent=\"#accordion\" data-toggle=\"collapse\" href=\"#month3\"> {{\n                                      month3label.format('MMMM') }}, {{ month3label.year() }} <i class=\"nc-icon nc-minimal-down\"></i></a></div>\n                                  <div aria-labelledby=\"heading4\" class=\"collapse\" id=\"month3\" role=\"tabpanel\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of month3Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-left td-clrs\">{{ tss.projectName }}</td>\n                                             <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\" data-toggle=\"modal\" data-target=\"#tskModal\">New\n                                                Task</button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div> -->\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"tab-pane\" id=\"year\" role=\"tabpanel\" aria-expanded=\"false\">\n                          <div class=\"card\">\n                            <div class=\"\">\n                              <div class=\"card-text\">\n                                <p class=\"card-title\">\n                                  <button class=\"btn-link\" (click)=\"changePeriod('previous','startYear')\"\n                                    title=\"goto previous Year\"><i class=\"nc-icon nc-minimal-left\"\n                                      style=\"margin-right:3em\"></i></button>\n                                  Year {{ currentYear }}'s Tasks\n                                  <button class=\"btn-link\" (click)=\"changePeriod('next','startYear')\"\n                                    title=\"goto next Year\"><i class=\"nc-icon nc-minimal-right\"\n                                      style=\"margin-left:3em\"></i></button>\n                                </p>\n                              </div>\n                            </div>\n                            <div class=\"card-body\">\n                              <div aria-multiselectable=\"true\" class=\"card-collapse\" id=\"accordionQuarter\"\n                                role=\"tablist\">\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pQuarter\">\n                                    <a class=\"collapsed\" (click)=\"setQuarter('quarter0')\" title=\"click to view tasks\"\n                                      data-toggle=\"collapse\" href=\"#planQuarter0\" aria-expanded=\"false\"\n                                      aria-controls=\"planQuarter0\">\n                                      Quarter {{ quarter0label.quarter() }} of year {{ quarter0label.year() }} <i\n                                        class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planQuarter0\" class=\"collapse\" aria-labelledby=\"pQuarter\"\n                                    data-parent=\"#accordionQuarter\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <!-- <th class=\"text-left\">Id</th> -->\n                                            <th class=\"text-left\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                            <th class=\"text-right\">Action</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of quarter0Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-left td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                              <!-- <td class=\"text-right td-clrs\">\n                                                <div class=\"primary\" >\n                                                  <button class=\"btn-primany text-danger btn-link\" rel=\"tooltip\" (click)=\"deleteTask(tss)\" title=\"Remove {{ tss.name }} to a department\"><small><b>Remove</b></small></button>\n                                                </div>\n                                              </td> -->\n                                              <td class=\"text-right td-clrs\">\n                                                <button class=\"dropdown-toggle primary btn-link btn-sm\" type=\"button\"\n                                                  id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                                  aria-expanded=\"false\" title=\"click to view options\">\n                                                  <font size=5> ... </font>\n                                                </button>\n                                                <div class=\"primary dropdown-menu dropdown-menu-right\"\n                                                  aria-labelledby=\"dropdownMenuButton\">\n                                                  <button class=\"btn-primany dropdown-item text-danger btn-link btn-sm\"\n                                                    rel=\"tooltip\" (click)=\"deleteTask(tss)\"\n                                                    title=\"Remove {{ tss.name }} to a department\">Remove</button>\n                                                </div>\n                                              </td>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pQuarter\">\n                                    <a class=\"collapsed\" (click)=\"setQuarter('quarter1')\" title=\"click to view tasks\"\n                                      data-toggle=\"collapse\" href=\"#planQuarter1\" aria-expanded=\"false\"\n                                      aria-controls=\"planQuarter1\">\n                                      Quarter {{ quarter1label.quarter() }} of year {{ quarter1label.year() }} <i\n                                        class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planQuarter1\" class=\"collapse\" aria-labelledby=\"pQuarter\"\n                                    data-parent=\"#accordionQuarter\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of quarter1Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-left td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New\n                                                Task</button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pQuarter\">\n                                    <a class=\"collapsed\" (click)=\"setQuarter('quarter2')\" title=\"click to view tasks\"\n                                      data-toggle=\"collapse\" href=\"#planQuarter2\" aria-expanded=\"false\"\n                                      aria-controls=\"planQuarter2\">\n                                      Quarter {{ quarter2label.quarter() }} of year {{ quarter2label.year() }} <i\n                                        class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planQuarter2\" class=\"collapse\" aria-labelledby=\"pQuarter\"\n                                    data-parent=\"#accordionQuarter\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of quarter2Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-left td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New\n                                                Task</button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pQuarter\">\n                                    <a class=\"collapsed\" (click)=\"setQuarter('quarter3')\" title=\"click to view tasks\"\n                                      data-toggle=\"collapse\" href=\"#planQuarter3\" aria-expanded=\"false\"\n                                      aria-controls=\"planQuarter3\">\n                                      Quarter {{ quarter3label.quarter() }} of year {{ quarter3label.year() }} <i\n                                        class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planQuarter3\" class=\"collapse\" aria-labelledby=\"pQuarter\"\n                                    data-parent=\"#accordionQuarter\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of quarter3Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-left td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New\n                                                Task</button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n\n                </div>\n                <div class=\"tab-pane\" id=\"implement\">\n                  <div class=\"card\">\n                    <div class=\"card-body\" style=\"padding-top:0px\">\n                      <div class=\"nav-tabs-navigation\">\n                        <div class=\"nav-tabs-wrapper\">\n                          <ul id=\"tabs\" class=\"nav nav-tabs\" role=\"tablist\">\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link nav-colors active\" data-toggle=\"tab\" href=\"#cIntray\" role=\"tab\" aria-expanded=\"true\">In-tray For whole Project</a>\n                            </li>\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link nav-colors\" data-toggle=\"tab\" href=\"#dIntray\" role=\"tab\" aria-expanded=\"false\" (click)=\"checkDataComp()\"> In-tray For {{ (project)?.companyName }}</a>\n                            </li>\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link nav-colors\" data-toggle=\"tab\" href=\"#weekly\" role=\"tab\" aria-expanded=\"true\">Weekly Calendar</a>\n                            </li>\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link nav-colors\" data-toggle=\"tab\" (click)=\"initDiary()\" href=\"#diary\" role=\"tab\" aria-expanded=\"false\">Daily Diary</a>\n                            </li>\n                          </ul>\n                        </div>\n                      </div>\n                      <div id=\"my-tab-content\" class=\"tab-content text-center\">\n                        <div class=\"tab-pane active\" id=\"cIntray\" role=\"tabpanel\" aria-expanded=\"true\">\n                          <div class=\"row\">\n                            <div class=\"col-md-10 ml-auto mr-auto\">\n                              <div class=\"card\">\n                                <div class=\"card-body text-center\" style=\"padding-top:0px\">\n                                  <div class=\"card-header text-left\">\n                                    <p class=\"title na-an\" style=\"color: steelblue\"><i class=\"nc-icon nc-palette\"></i>Things To Do In Tray For Project</p>\n                                    Task List\n                                  </div>\n                                  <div class=\"card-body\">\n\n                                    <div id=\"accordionTsk\" role=\"tablist\" aria-multiselectable=\"true\"\n                                      class=\"card-collapse\">\n                                      <div class=\"card card-plain\">\n                                        <div class=\"card-header text-left\" role=\"tab\" id=\"headingOne\">\n                                          <a data-toggle=\"collapse\" href=\"#Outstanding\" aria-expanded=\"true\"aria-controls=\"Outstanding\">\n                                            Outstanding Tasks <i class=\"nc-icon nc-minimal-down\"></i>\n                                          </a>\n                                        </div>\n                                        <div id=\"Outstanding\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordionTsk\">\n                                          <div class=\"card-body\">\n                                            <div class=\"content container scroll-task\">\n                                              <ol style=\"padding-left:18px;\">\n                                                <li class=\"\" style=\"color:steelblue\" *ngFor=\"let tss of OutstandingTasks\">\n                                                  <!-- <div class=\"row\"> -->\n                                                    <div class=\"col-sm-12 text-left\" style=\"margin-right:-.5em\">\n                                                      <button class=\"dropdown-toggle btn-link\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                                        aria-expanded=\"false\" style=\"color:slategrey\">{{ tss.name }}<span class=\"label text-warning\"> {{ tss.when }}</span>\n                                                      </button>\n                                                      <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                        <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\"title=\"make a comment\" (click)=\"selectTask(tss)\"\n                                                          data-toggle=\"modal\" data-target=\"#commentModal\">Comment the Task</button>\n                                                      </div>\n                                                    </div>\n                                                  <!-- </div> -->\n                                                </li>\n                                              </ol>\n                                            </div>\n                                          </div>\n                                        </div>\n                                      </div>\n                                      <div class=\"card card-plain\">\n                                        <div class=\"card-header text-left\" role=\"tab\" id=\"headingTwo\">\n                                          <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#currentTsk\"\n                                            aria-expanded=\"false\" aria-controls=\"currentTsk\">\n                                            Current Tasks\n                                            <i class=\"nc-icon nc-minimal-down\"></i>\n                                          </a>\n                                        </div>\n                                        <div id=\"currentTsk\" class=\"collapse\" aria-labelledby=\"headingTwo\"\n                                          data-parent=\"#accordionTsk\">\n                                          <div class=\"card-body\">\n                                            <div class=\"content container scroll-task\">\n                                              <ol>\n                                                <li class=\"\" style=\"color:steelblue\" *ngFor=\"let tss of CurrentTAsks\">\n                                                  <!-- <div class=\"row\"> -->\n                                                    <div class=\"col-sm-12 text-left\" style=\"margin-right:-.5em\">\n                                                      <button class=\"dropdown-toggle btn-link\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                                        aria-expanded=\"false\" style=\"color:slategrey\">{{ tss.name }}<span class=\"label text-warning\"> {{ tss.when }}</span>\n                                                      </button>\n                                                      <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                        <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" title=\"make a comment\" (click)=\"selectTask(tss)\"\n                                                          data-toggle=\"modal\" data-target=\"#commentModal\">Comment the Task</button>\n                                                      </div>\n                                                    </div>\n                                                  <!-- </div> -->\n                                                </li>\n                                              </ol>\n                                            </div>\n                                          </div>\n                                        </div>\n                                      </div>\n                                      <div class=\"card card-plain\">\n                                        <div class=\"card-header text-left\" role=\"tab\" id=\"headingThree\">\n                                          <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#upcoming\"\n                                            aria-expanded=\"false\" aria-controls=\"upcoming\">\n                                            Upcoming Tasks\n                                            <i class=\"nc-icon nc-minimal-down\"></i>\n                                          </a>\n                                        </div>\n                                        <div id=\"upcoming\" class=\"collapse\" aria-labelledby=\"headingThree\"\n                                          data-parent=\"#accordionTsk\">\n                                          <div class=\"card-body\">\n                                            <div class=\"content container scroll-task\">\n                                              <div class=\"card-header text-left\"> Short Term Tasks</div><br>\n                                              <ol>\n                                                <li class=\"\" style=\"color:steelblue\" *ngFor=\"let tss of ShortTermTAsks\">\n                                                  <!-- <div class=\"row\"> -->\n                                                    <div class=\"col-sm-12 text-left\" style=\"margin-right:-.5em\">\n                                                      <button class=\"dropdown-toggle btn-link\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                                        aria-expanded=\"false\" style=\"color:slategrey\">{{ tss.name }}<span class=\"label text-warning\"> {{ tss.when }}</span>\n                                                      </button>\n                                                      <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                        <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" title=\"make a comment\" (click)=\"selectTask(tss)\"\n                                                          data-toggle=\"modal\" data-target=\"#commentModal\">Comment the Task</button>\n                                                      </div>\n                                                    </div>\n                                                  <!-- </div> -->\n                                                </li>\n                                              </ol>\n                                              <div class=\"card-header text-left\">Medium Term Tasks</div><br>\n                                              <ol>\n                                                <li class=\"\" style=\"color:steelblue\" *ngFor=\"let tss of MediumTermTAsks\">\n                                                  <!-- <div class=\"row\"> \n                                                    <div class=\"col-sm-12\" style=\"margin-left:.5em; margin-right:-.5em\">\n                                                      <button class=\"btn-link\" style=\"color:slategrey\">\n                                                        {{ event.name }}<span class=\"label text-warning\">\n                                                          {{ event.when }}</span>\n                                                      </button>\n                                                    </div>\n                                                  </div> -->\n                                                  <div class=\"col-sm-12 text-left\" style=\"margin-right:-.5em\">\n                                                    <button class=\"dropdown-toggle btn-link\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                                      aria-expanded=\"false\" style=\"color:slategrey\">{{ tss.name }}<span class=\"label text-warning\">{{ tss.when }}</span>\n                                                    </button>\n                                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                      <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" title=\"make a comment\" (click)=\"selectTask(tss)\"\n                                                        data-toggle=\"modal\" data-target=\"#commentModal\">Comment the Task</button>\n                                                    </div>\n                                                  </div>\n                                                </li>\n                                              </ol>\n                                              <div class=\"card-header text-left\">Long Term Tasks</div><br>\n                                              <ol>\n                                                <li class=\"\" style=\"color:steelblue\" *ngFor=\"let tss of LongTermTAsks\">\n                                                  <!-- <div class=\"row\">\n                                                    <div class=\"col-sm-12\" style=\"margin-left:.5em; margin-right:-.5em\">\n                                                      <button class=\"btn-link\" style=\"color:slategrey\">\n                                                        {{ event.name }}<span class=\"label text-warning\">\n                                                          {{ event.when }}</span>\n                                                      </button>\n                                                    </div>\n                                                  </div> -->\n                                                  <div class=\"col-sm-12 text-left\" style=\"margin-right:-.5em\">\n                                                    <button class=\"dropdown-toggle btn-link\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                                      aria-expanded=\"false\" style=\"color:slategrey\">{{ tss.name }}<span class=\"label text-warning\"> {{ tss.when }}</span>\n                                                    </button>\n                                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                      <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" title=\"make a comment\" (click)=\"selectTask(tss)\"\n                                                        data-toggle=\"modal\" data-target=\"#commentModal\">Comment the Task</button>\n                                                    </div>\n                                                  </div>\n                                                </li>\n                                              </ol>\n                                            </div>\n                                          </div>\n                                        </div>\n                                      </div>\n                                    </div>\n\n\n\n\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"tab-pane\" id=\"dIntray\" role=\"tabpanel\" aria-expanded=\"false\">\n                          <div class=\"row\">\n                            <div class=\"col-md-6\">\n                              <div class=\"card\">\n                                <div class=\"card-body text-center\" style=\"padding-top:0px\">\n                                  <div class=\"card-header text-left\">\n                                    <p class=\"title na-an\" style=\"color: steelblue\"><i class=\"ti-palette\"></i> Things To Do In Tray For {{ (project)?.companyName }} </p>\n                                    <div class=\"card-body\">\n                                      <div id=\"accordionCompTsk\" role=\"tablist\" aria-multiselectable=\"true\" class=\"card-collapse\">\n                                        <div class=\"card card-plain\">\n                                          <div class=\"card-header text-left\" role=\"tab\" id=\"headingOne\">\n                                            <a data-toggle=\"collapse\" href=\"#compOutstanding\" aria-expanded=\"true\" aria-controls=\"compOutstanding\" (click)=\"checkDataComp()\">\n                                              Outstanding Tasks<i class=\"nc-icon nc-minimal-down\"></i>\n                                            </a>\n                                          </div>\n                                          <div id=\"compOutstanding\" class=\"collapse show\" role=\"tabpanel\"\n                                            aria-labelledby=\"headingOne\" data-parent=\"#accordionCompTsk\">\n                                            <div class=\"card-body\" style=\"padding-left: 0px;padding-right: 0px;\">\n                                              <div class=\"content container scroll-task\">\n                                                <ol style=\"padding-left:5px;\">\n                                                  <!-- <li class=\"\" style=\"color:steelblue\" *ngFor=\"let tss of OutstandingTasks\"> -->\n                                                  <li class=\"\" style=\"color:steelblue\"\n                                                    *ngFor=\"let tss of compOutstandingTasks\">\n                                                    <!-- <div class=\"row\"> -->\n                                                      <div class=\"col-sm-12 text-left\" style=\"margin-right:-.10em\">\n                                                        <button class=\"dropdown-toggle btn-link text-left\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                                                          style=\"color:slategrey\">{{ tss.name }}<span class=\"label text-warning\"> {{ tss.when }}</span>\n                                                        </button>\n                                                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                          <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" title=\"make a comment\" (click)=\"selectTask(tss)\" data-toggle=\"modal\"\n                                                            data-target=\"#commentModal\">Commment task\n                                                          </button>\n                                                          <button class=\"dropdown-item btn-primary btn-link\" rel=\"tooltip\" (click)=\"selectTask(tss)\" data-toggle=\"modal\" data-target=\"#labourModal\"\n                                                            title=\"Add {{ tss.name }} to a department\">Reallocate to new staff\n                                                          </button>\n                                                        </div>\n                                                      </div>\n                                                    <!-- </div> -->\n                                                  </li>\n                                                </ol>\n                                              </div>\n                                            </div>\n                                          </div>\n                                        </div>\n                                        <div class=\"card card-plain\">\n                                          <div class=\"card-header text-left\" role=\"tab\" id=\"headingTwo\">\n                                            <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#compCurrentTsk\"\n                                              aria-expanded=\"false\" aria-controls=\"compCurrentTsk\">\n                                              Current Tasks\n                                              <i class=\"nc-icon nc-minimal-down\"></i>\n                                            </a>\n                                          </div>\n                                          <div id=\"compCurrentTsk\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionCompTsk\">\n                                            <!-- <div class=\"card-body\"> -->\n                                            <div class=\"card-body\" style=\"padding-left: 0px;padding-right: 0px;\">\n                                              <div class=\"content container scroll-task\">\n                                                <!-- <ol> -->\n                                                <ol style=\"padding-left:5px;\">\n                                                  <li class=\"\" style=\"color:steelblue\" *ngFor=\"let tss of compCurrentTAsks\">\n                                                    <!-- <div class=\"row\"> -->\n                                                      <div class=\"col-sm-12 text-left\" style=\"margin-right:-.5em\">\n                                                        <button class=\"dropdown-toggle btn-link\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                                                          style=\"color:slategrey\">{{ tss.name }}<span class=\"label text-warning\"> {{ tss.when }}</span>\n                                                        </button>\n                                                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                          <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" title=\"make a comment\" (click)=\"selectTask(tss)\"\n                                                            data-toggle=\"modal\" data-target=\"#commentModal\">Commment task</button>\n                                                          <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\"(click)=\"selectTask(tss)\" data-toggle=\"modal\" data-target=\"#labourModal\"\n                                                            title=\"Add {{ tss.name }} to a department\">Allocate to staff\n                                                          </button>\n                                                        </div>\n                                                      </div>\n                                                    <!-- </div> -->\n                                                  </li>\n                                                </ol>\n                                              </div>\n                                            </div>\n                                          </div>\n                                        </div>\n                                        <div class=\"card card-plain\">\n                                          <div class=\"card-header text-left\" role=\"tab\" id=\"headingThree\">\n                                            <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#compUpcoming\"\n                                              aria-expanded=\"false\" aria-controls=\"compUpcoming\">\n                                              Upcoming Tasks\n                                              <i class=\"nc-icon nc-minimal-down\"></i>\n                                            </a>\n                                          </div>\n                                          <div id=\"compUpcoming\" class=\"collapse\" aria-labelledby=\"headingThree\"\n                                            data-parent=\"#accordionCompTsk\">\n                                            <!-- <div class=\"card-body\"> -->\n                                            <div class=\"card-body\" style=\"padding-left: 0px;padding-right: 0px;\">\n                                              <div class=\"content container scroll-task\">\n                                                <!-- Short Term Tasks<br> -->\n                                              <div class=\"card-header text-left\"> Short Term Tasks</div><br>\n                                                <!-- <ol> -->\n                                                <ol style=\"padding-left:5px;\">\n                                                  <li class=\"\" style=\"color:steelblue\" *ngFor=\"let tss of compShortTermTAsks\">\n                                                    <!-- <div class=\"row\"> -->\n                                                      <div class=\"col-sm-12 text-left\" style=\"margin-right:-.5em\">\n                                                        <button class=\"dropdown-toggle btn-link\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                                          aria-expanded=\"false\" style=\"color:slategrey\">{{ tss.name }}<span class=\"label text-warning\"> {{ tss.when }}</span>\n                                                        </button>\n                                                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                          <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" title=\"make a comment\" (click)=\"selectTask(tss)\"\n                                                            data-toggle=\"modal\" data-target=\"#commentModal\">Commment task</button>\n                                                          <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" (click)=\"selectTask(tss)\" data-toggle=\"modal\"\n                                                            data-target=\"#labourModal\" title=\"Add {{ tss.name }} to a department\">Allocate to staff\n                                                          </button>\n                                                        </div>\n                                                      </div>\n                                                    <!-- </div> -->\n                                                  </li>\n                                                </ol>\n                                                <!-- Medium Term Tasks<br> -->\n                                              <div class=\"card-header text-left\">Medium Term Tasks</div><br>\n                                                <!-- <ol> -->\n                                                <ol style=\"padding-left:5px;\">\n                                                  <li class=\"\" style=\"color:steelblue\" *ngFor=\"let tss of compMediumTermTAsks\">\n                                                    <!-- <div class=\"row\"> -->\n                                                      <div class=\"col-sm-12 text-left\" style=\"margin-right:-.5em\">\n                                                        <button class=\"dropdown-toggle btn-link\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                                          aria-expanded=\"false\" style=\"color:slategrey\">{{ tss.name }}<span class=\"label text-warning\"> {{ tss.when }}</span>\n                                                        </button>\n                                                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                          <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" title=\"make a comment\" (click)=\"selectTask(tss)\"\n                                                            data-toggle=\"modal\" data-target=\"#commentModal\">Commment task</button>\n                                                          <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" (click)=\"selectTask(tss)\" data-toggle=\"modal\"\n                                                            data-target=\"#labourModal\" title=\"Add {{ tss.name }} to a department\">Allocate to staff\n                                                          </button>\n                                                        </div>\n                                                      </div>\n                                                    <!-- </div> -->\n                                                  </li>\n                                                </ol>\n                                                <!-- Long Term Tasks<br> -->\n                                              <div class=\"card-header text-left\">Long Term Tasks</div><br>\n                                                <!-- <ol> -->\n                                                <ol style=\"padding-left:5px;\">\n                                                  <li class=\"\" style=\"color:steelblue\" *ngFor=\"let tss of compLongTermTAsks\">\n                                                    <!-- <div class=\"row\"> -->\n                                                      <div class=\"col-sm-12 text-left\" style=\"margin-right:-.5em\">\n                                                        <button class=\"dropdown-toggle btn-link\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                                          aria-expanded=\"false\" style=\"color:slategrey\">{{ tss.name }}<span class=\"label text-warning\"> {{ tss.when }}</span>\n                                                        </button>\n                                                        <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                          <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" title=\"make a comment\" (click)=\"selectTask(tss)\"\n                                                            data-toggle=\"modal\" data-target=\"#commentModal\">Commment task</button>\n                                                          <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" (click)=\"selectTask(tss)\" data-toggle=\"modal\"\n                                                            data-target=\"#labourModal\" title=\"Add {{ tss.name }} to a department\">Allocate to staff\n                                                          </button>\n                                                        </div>\n                                                      </div>\n                                                    <!-- </div> -->\n                                                  </li>\n                                                </ol>\n                                              </div>\n                                            </div>\n                                          </div>\n                                        </div>\n                                      </div>\n\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"col-md-6 ml-auto mr-auto\">\n                              <div class=\"card\">\n                                <div class=\"card-body text-center\" style=\"padding-top:0px\">\n                                  <div class=\"card-header\">\n                                    <p class=\"title na-an text-left\" style=\"color: steelblue\"><i class=\"ti-palette\"></i>\n                                      Allocate to Staff</p>\n                                  </div>\n                                  <div class=\"card-body\">\n                                    <div class=\"row\">\n                                      <div class=\"col-md-10 ml-auto mr-auto\" style=\"padding-left:3px\">\n                                        <ng-select placeholder=\"Select staff\" [(ngModel)]=\"staffId\"    (change)=\"showUserTasks(staffId)\">\n                                          <ng-option class=\"category\" *ngFor=\"let user of labourRef1\" [value]=\"user.id\">\n                                            {{ user.name }}</ng-option>\n                                        </ng-select>\n                                      </div>\n                                    </div>\n                                  </div>\n                                  <div *ngIf=\"staffId\">\n                                    <div class=\"card-body\" style=\"margin-top:-15px\">\n                                      <div class=\"row\">\n                                        <div class=\"col-sm-12 text-left\" style=\"padding-right:3em; color: steelblue\">\n                                          List of Tasks\n                                          <div id=\"accordionTasks\" role=\"tablist\" aria-multiselectable=\"true\"\n                                            class=\"card-collapse\">\n                                            <ol>\n                                              <li class=\"\" style=\"color:steelblue\"\n                                                *ngFor=\"let tss of staffTasks | async\">\n                                                <div class=\"card card-plain\">\n                                                  <div class=\"card-header\" role=\"tab\" id=\"heading2\">\n                                                    <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#{{ tss.id }}\" (click)=\"showTaskActions(tss)\" aria-expanded=\"false\"  aria-current=\"false\">\n                                                      {{ tss.name }}<span class=\"label text-warning\"></span>\n                                                      <i class=\"nc-icon nc-minimal-down\"></i> <!--  {{ tss.when }} -->\n                                                    </a>\n                                                  </div>\n                                                  <div id=\"{{ tss.id }}\" class=\"collapse\" data-parent=\"#accordionTasks\"\n                                                    role=\"tabpanel\" aria-labelledby=\"heading2\">\n                                                    <div class=\"card-body\">\n                                                      <ul>\n                                                        <li *ngFor=\"let item of taskActions | async\">\n                                                          <div class=\"row\">\n                                                            <div class=\"col-md-9\">\n                                                              <button class=\"warning btn-link\" id=\"dropdownMenuButton\"\n                                                                data-toggle=\"dropdown\" aria-haspopup=\"true\"\n                                                                aria-expanded=\"false\" style=\"color:slategrey\"\n                                                                (click)=\"selectAction(item)\">\n                                                                {{ item.name }}<span class=\"label text-info\">\n                                                                  {{ item.targetQty }}</span><span>\n                                                                  {{ item.unit }}</span>\n                                                              </button>\n                                                              <!-- <div class=\"dropdown-menu dropdown-menu-right\"\n                                                                aria-labelledby=\"dropdownMenuButton\">\n                                                                <button class=\"dropdown-item btn-info btn-link\" rel=\"tooltip\"\n                                                                  data-toggle=\"modal\" data-target=\"#tskModal\" (click)=\"closeTask(project)\"\n                                                                  title=\"Set task as completed\">Task Activity Complete</button>\n                                                                <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\"\n                                                                  data-toggle=\"modal\" data-target=\"#actionParticipants\"\n                                                                  (click)=\"selectAction(item)\" title=\"Set task as completed\">Add\n                                                                  Participants</button>\n                                                                <button class=\"dropdown-item btn-info btn-link\" rel=\"tooltip\"\n                                                                  title=\"Assign activity to Staff\" (click)=\"showDpTasks(dp)\"\n                                                                  data-toggle=\"modal\" data-target=\"#dptStaffList\">Assign\n                                                                  Champion</button>\n                                                              </div> -->\n                                                            </div>\n                                                            <div class=\"col-md-3\" style=\"padding-top: 12px;\">\n                                                              <input class=\"card-category pull-right col-form-label\"\n                                                                type=\"checkbox\" (change)=\"selectActions($event, item)\">\n                                                            </div>\n                                                          </div>\n                                                        </li>\n                                                      </ul>\n                                                    </div>\n                                                    <button class=\"btn-link btn-round primary\" (click)=\"selectTask(tss)\"\n                                                      data-toggle=\"modal\" data-target=\"#newAction\">\n                                                      <small>Add task activity</small></button>\n                                                  </div>\n                                                </div>\n                                              </li>\n                                            </ol>\n                                          </div>\n                                        </div>\n                                      </div>\n                                      <p class=\"na-an text-center\" style=\"color: steelblue; margin-bottom: 0px;\">\n                                        <i class=\"ti-palette\"></i>list of this week's selected activities</p><br><br>\n                                      <div class=\"col-sm-10\">\n                                        <ol>\n                                          <li *ngFor=\"let item of selectedActionItems\" class=\"text-left\">\n                                            {{ item.name }}\n                                          </li>\n                                        </ol>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"tab-pane\" id=\"weekly\" role=\"tabpanel\" aria-expanded=\"false\">\n                          <div class=\"row card-category clrs-h4-font\">\n                            <div class=\"col-xs-1\"></div>\n                            <div class=\"col-md-3\">Task Activity</div>\n                            <div class=\"col-md-3 text-left na-an\">Start</div>\n                            <div class=\"col-md-3 text-left ma-an\">Finish</div>\n                            <div class=\"col-md-3 text-left ma-an\">Actions</div>\n                          </div>\n                          <div id=\"accordionTasksActions\" role=\"tablist\" aria-multiselectable=\"true\"\n                            class=\"card-collapse\">\n                            <ol>\n                              <li *ngFor=\"let item of companyActions\">\n                                <div class=\"row card-category\">\n                                  <div class=\"col-sm-2 text-left\"><a>{{ item.name }}</a></div>\n                                  <div class=\"col-sm-3 text-left\"><a>{{ item.startDay }}, {{ item.startDate }}</a></div>\n                                  <div class=\"col-sm-3 text-left\"><a>{{ item.endDay }}, {{ item.endDate }}</a></div>\n                                  <div>\n                                    <small>\n                                      <button class=\"primary btn-link\" data-toggle=\"modal\"\n                                        (click)=\"selectEditAction(item)\" data-target=\"#editAction\">\n                                        Period\n                                      </button>\n                                      <button class=\"primary btn-link\" data-toggle=\"modal\"\n                                        (click)=\"selectEditAction(item);showActionParticipants()\"\n                                        data-target=\"#actionParticipants\">\n                                        Participants\n                                      </button>\n                                    </small>\n                                  </div>\n                                </div>\n                              </li>\n                            </ol>\n                          </div>\n                        </div>\n\n\n                        <div class=\"tab-pane\" id=\"diary\" role=\"tabpanel\" aria-expanded=\"false\">\n                          <div class=\"row card-category clrs-h4-font\">\n                            <div class=\"col-sm-3\">\n                              <a class=\"clrs-h1-font text-left\">Daily Diary</a>\n                            </div>\n                            <div class=\"col-sm-2\"></div>\n                            <div class=\"col-sm-2\"><a class=\"btn btn-primary btn-link a-mycol\"\n                                (click)=\"changeDay('previous','startDate')\">Previous</a></div>\n                            <div class=\"col-sm-3 clrs-h4-font text-info\">{{ workWeekDay }}, {{ workDay }}</div>\n                            <div class=\"col-sm-2\"><a class=\"btn btn-primary btn-link a-mycol\"\n                                (click)=\"changeDay('next','startDate')\">Next</a></div>\n                          </div>\n                          <div class=\"card-body\" style=\"margin-top: -10px\">\n                            <div class=\"row\">\n                              <div class=\"col-sm-3 card-header text-center\">Task Activity</div>\n                              <div class=\"col-sm-3 card-header\">Target Qty</div>\n                              <div class=\"col-sm-2 card-header text-left\">Start time</div>\n                              <div class=\"col-sm-3 card-header text-left\">Finish time</div>\n                              <div class=\"col-sm-2 card-header text-left\"></div>\n                            </div>\n                            <ol style=\"padding-left: 10px;\">\n                              <li *ngFor=\"let item of viewActions | async\">\n                                <div class=\"row\">\n                                  <div class=\"col-sm-2\">\n                                    <a> {{ item.name }}</a>\n                                  </div>\n                                  <div class=\"col-sm-3\" style=\"padding-left: 5px; padding-right:5px\">\n                                    <div class=\"form-group\">\n                                      <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                        <input type=\"text\" class=\"form-control panel-boader\"\n                                          [(ngModel)]=\"item.targetQty\"\n                                          style=\" padding-left: 10px; padding-right: 10px; height:2em\"\n                                          placeholder=\"1 200\" /><!-- clrs-cell  -->\n                                        <div class=\"input-group-postpend\">\n                                          <span class=\"input-group-text\" style=\" padding-left: 10px; padding-right: 10px; height:28px\">\n                                              <small>{{ item.unit }}</small>\n                                          </span>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                  <div class=\"col-sm-2\" style=\"padding-left: 5px; padding-right:5px\">\n                                    <div class=\"form-group\">\n                                      <input type=\"time\" class=\"form-control panel-boader timepicker\"\n                                        [(ngModel)]=\"item.start\"\n                                        style=\" padding-left: 10px; padding-right: 10px; height:2em\"\n                                        placeholder=\"Time from\" />\n                                      <!-- clrs-cell  -->\n                                    </div>\n                                  </div>\n                                  <div class=\"col-sm-2\" style=\"padding-left: 5px; padding-right:5px\">\n                                    <div class=\"form-group\">\n                                      <input type=\"time\" class=\"form-control panel-boader timepicker\"\n                                        [(ngModel)]=\"item.end\"\n                                        style=\" padding-left: 10px; padding-right: 10px;  height:2em\"\n                                        placeholder=\"Time to\" />\n                                      <!-- clrs-cell  -->\n                                    </div>\n                                  </div>\n                                  <div class=\"col-sm-3\" style=\"padding-left: 0px; padding-right:50px\">\n                                    <div class=\"form-group\">\n                                      <small><button class=\"primary btn-link\"\n                                          style=\" padding-left: 10px; padding-right: 10px; height:2em\"\n                                          (click)=\"addActionTime(item)\">Save</button>\n                                        <!-- clrs-cell form-control panel-boader clrs-cell  -->\n                                        <button class=\"primary btn-link\" data-toggle=\"modal\"\n                                          (click)=\"selectEditAction(item);showActionParticipants()\"\n                                          data-target=\"#actionParticipants\">\n                                          Participants\n                                        </button></small>\n                                    </div>\n                                  </div>\n                                </div>\n                              </li>\n                            </ol>\n                            <div class=\"card-footer text-right\">\n                              <div class=\"row\">\n                                <div class=\"col-md-9\"></div>\n                                <div class=\"col-md-3\">\n                                  <button class=\"primary btn-link\" data-toggle=\"modal\" data-target=\"#newActionToday\">\n                                    New Task Activity\n                                  </button>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                \n                <div class=\"tab-pane\" id=\"reports2\">\n                \n                \n                  <div class=\"col-md-12\">\n                    <div class=\"card\">\n                      <div class=\"card-body\" style=\"margin-top: -3em\">\n                        <div class=\"nav-tabs-navigation\">\n                          <div class=\"nav-tabs-wrapper\">\n                            <ul id=\"tabs\" class=\"nav nav-tabs\" role=\"tablist\">\n                \n                              <li class=\"nav-item\">\n                                <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#internalCompProj\" role=\"tab\"\n                                  aria-expanded=\"true\">Internal to {{ project.companyName }}</a>\n                              </li>\n                              <li class=\"nav-item\">\n                                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#projectOverview\" role=\"tab\" aria-expanded=\"false\">Project\n                                  Overview</a>\n                              </li>\n                            </ul>\n                          </div>\n                        </div>\n                        <div id=\"my-tab-content\" class=\"tab-content text-center\">\n                \n                          <div class=\"tab-pane active\" id=\"internalCompProj\" role=\"tabpanel\" aria-expanded=\"true\">\n                            <div class=\"card-body\">\n                \n                              <div class=\"col-md-12\">\n                                <p class=\"text-left title clrs-h4-font\" style=\"color: darkslategray\">Company Details</p>\n                                <div class=\"card-plain card-content\">\n                                  <div class=\"text-left na-p\" style=\"margin-left:1em \">\n                                    <span class=\"row col-md-12\">\n                                      <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Company Name </span>\n                                      <span class=\"col-sm-9\">: {{ (entReport)?.name }} </span>\n                                    </span><br>\n                                    <span class=\"row col-md-12\">\n                                      <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Sector </span>\n                                      <span class=\"col-sm-9\">: {{ (entReport)?.sector }} </span>\n                                    </span><br>\n                                    <span class=\"row col-md-12\">\n                                      <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Project Role </span>\n                                      <span class=\"col-sm-9\">\n                                        <a *ngFor=\"let service of (entReport)?.roles\">: {{ service.display }} <br></a>\n                                        <!-- <a *ngFor=\"let role of (viewCompany)?.roles\">: {{ role.display }} <br></a> -->\n                                      </span>\n                                    </span><br>\n                                    <span class=\"row col-md-12\">\n                                      <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Location </span>\n                                      <span class=\"col-sm-9\">: {{ (entReport)?.location }} </span>\n                                    </span><br>\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"col-md-12\">\n                                <p class=\"pull-left clrs-h2\"><span class=\"title card-category\" style=\"color:darkslategray\">\n                                    Summarized Report for <b>{{ project.companyName }}</b> enterprise.</span><br>\n                                </p>\n                              </div>\n                              <div class=\"card-plain card-content\">\n                                <div class=\"text-left na-p\" style=\"margin-left:1em \">\n                                  <span class=\"row col-md-12\">\n                                    <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Total Number of Tasks Complete </span>\n                                    <span class=\"col-sm-9\">: {{ ( allCompanyTasksComplete | async)?.length }} </span>\n                                  </span><br>\n                                  <span class=\"row col-md-12\">\n                                    <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Sector </span>\n                                    <span class=\"col-sm-9\">: {{ (entReport)?.sector }} </span>\n                                  </span><br>\n                                </div>\n                              </div>\n                              <div class=\"row col-md-11 mr-auto ml-auto text-left\">\n                                Total Number of Tasks Complete : {{ ( allCompanyTasksComplete | async)?.length }}<br>\n                                Total Number of outstanding Tasks : {{ mcompCurrentTAsks.length }}<br>\n                                Total Number of Tasks allocated: {{ ( allCompanyTasks | async)?.length }}<br>\n                              </div>\n                              <div class=\"row\">\n                                <div class=\"card-body\" style=\"margin-top: -10px\">\n                                  <div class=\"row\">\n                                    <div class=\"col-sm-1 card-header text-left\" style=\"padding-right: 0px; padding-left: 12px;\">#</div>\n                                    <div class=\"col-sm-2 card-header text-left\" style=\"padding-left: 0px;\">Task</div>\n                                    <div class=\"col-sm-2 card-header text-left\">Start</div>\n                                    <div class=\"col-sm-2 card-header text-left\">Finish</div>\n                                    <div class=\"col-sm-2 card-header text-left\">Complete</div>\n                                    <div class=\"col-sm-3 card-header text-left\">Champion</div>\n                                  </div>\n                                  <ol style=\"padding-left: 10px;\">\n                                    <p *ngIf=\"(mcompOutstandingTasks.length != 0)\" class=\"category text-warning\">Outstanding Tasks.\n                                    </p>\n                                    <li *ngFor=\"let item of mcompOutstandingTasks\">\n                                      <div class=\"row\">\n                                        <div class=\"col-sm-3 col-md-3 text-left\">\n                                          <a>{{ item.name }}</a>\n                                        </div>\n                                        <div class=\"col-sm-2\">\n                                          <a>{{ item.start }}</a>\n                                        </div>\n                                        <div class=\"col-sm-2\">\n                                          <a>{{ item.finish }}</a>\n                                        </div>\n                                        <div class=\"col-sm-2\">\n                                          <a>{{ item.complete }}</a>\n                                        </div>\n                                        <div class=\"col-md-3 card-category col-sm-3\">\n                                          <a>{{ item.champion.name }}</a>\n                                        </div>\n                                      </div>\n                                    </li>\n                                    <p *ngIf=\"(mcompCurrentTAsks.length != 0)\" class=\"category text-success\">Current Tasks.</p>\n                                    <li *ngFor=\"let item of mcompCurrentTAsks\">\n                                      <div class=\"row\">\n                                        <div class=\"col-sm-3 col-md-3 text-left\">\n                                          <a> {{ item.name }}</a>\n                                        </div>\n                                        <div class=\"col-sm-2\">\n                                          <a> {{ item.start }}</a>\n                                        </div>\n                                        <div class=\"col-sm-2\">\n                                          <a> {{ item.finish }}</a>\n                                        </div>\n                                        <div class=\"col-sm-2\">\n                                          <a> {{ item.complete }}</a>\n                                        </div>\n                                        <div class=\"col-md-3 card-category col-sm-2\">\n                                          <a> {{ item.champion.name }}</a>\n                                        </div>\n                                      </div>\n                                    </li>\n                                    <p *ngIf=\"(mcompUpcomingTAsks.length != 0)\" class=\"category text-info\">Upcoming Tasks.</p>\n                                    <li *ngFor=\"let item of mcompUpcomingTAsks\">\n                                      <div class=\"row\">\n                                        <div class=\"col-md-3 col-sm-3 text-left\">\n                                          <a> {{ item.name }}</a>\n                                        </div>\n                                        <div class=\"col-md-2 col-sm-2\">\n                                          <a> {{ item.start }}</a>\n                                        </div>\n                                        <div class=\"col-md-2 col-sm-2\">\n                                          <a> {{ item.finish }}</a>\n                                        </div>\n                                        <div class=\"col-md-2 col-sm-2\">\n                                          <a> {{ item.complete }}</a>\n                                        </div>\n                                        <div class=\"col-md-3 card-category  col-sm-3\">\n                                          <a> {{ item.champion.name }}</a>\n                                        </div>\n                                      </div>\n                                    </li>\n                                  </ol>\n                                </div>\n                              </div>\n                              <!-- <div class=\"row\">\n                                <div class=\"col-md-12\">\n                                  <p class=\"clrs-h4-font\" style=\"margin-top:0em; color:darkslategray\">Labour...</p>\n                                </div>\n                                <div class=\"col-md-2\">\n                                </div>\n                              </div> -->\n                \n                              <div class=\"row col-md-12 text-left\">\n                                <p class=\"pull-left clrs-h2\"><span class=\"title card-category\" style=\"color:darkslategray\">\n                                    Labour...</span><br>\n                                </p>\n                              </div>\n                              <div *ngIf=\"displayCompanyReport\" class=\"row\">\n                                <div class=\"col-md-10\">\n                                  <p class=\"pull-left clrs-h2\"><span class=\"title card-category\"\n                                      style=\"color:darkslategray\">{{ compLabourer.name }}</span>`s report overview...</p><br>\n                                  <nav aria-label=\"Page navigation example\">\n                                    <ul class=\"nav nav-pills nav-pills-primary nav-pills-icons justify-content-left\" role=\"tablist\">\n                                      <li class=\"nav-item\">\n                                        <a class=\"pagination pagination-primary active\" title=\"click to see the overview\"\n                                          data-toggle=\"tab\" href=\"#link7\" role=\"tablist\">\n                                          Overview\n                                        </a>\n                                      </li>\n                                      <span style=\"color:darkslategrey\"> - </span>\n                                      <li class=\"nav-item\">\n                                        <a class=\"pagination pagination-primary\" title=\"click to see the timesheet\" data-toggle=\"tab\"\n                                          href=\"#link8\" role=\"tablist\">\n                                          Timesheet\n                                          <!-- <span style=\"color:darkslategrey\"> - </span> -->\n                                        </a>\n                                      </li>\n                                      <span style=\"color:darkslategrey\"> - </span>\n                                      <li class=\"nav-item\">\n                                        <a class=\"pagination pagination-primary\" title=\"click to see the other reports\"\n                                          data-toggle=\"tab\" href=\"#link9\" role=\"tablist\">\n                                          Other\n                                          <!-- <span style=\"color:darkslategrey\"> - </span> -->\n                                        </a>\n                                      </li>\n                                    </ul>\n                                  </nav>\n                \n                                </div>\n                                <div class=\"col-md-2\">\n                                  <button class=\"btn-link btn-magnify\" (click)=\"displayEnt()\">Back</button>\n                                </div>\n                              </div>\n                              <div *ngIf=\"!displayCompanyReport\" class=\"row\">\n                                <div class=\"col-sm-4\">\n                \n                                  <ol class=\"card-category\">\n                                    <li *ngFor=\"let person of labourRef1\" class=\"text-left\">\n                                      <a (click)=\"viewUserReport(person)\" style=\"cursor:context-menu\"\n                                        class=\"text-left\">{{ person.name }}</a>\n                                    </li>\n                                  </ol>\n                \n                                </div>\n                                <div class=\"col-sm-8\">\n                                  <div class=\"spacer\" style=\"height:3em\"></div>\n                                  <p class=\"text-info \">To see Individual's progress report, click a on the Individual's name.\n                                  </p>\n                                </div>\n                              </div>\n                              <div *ngIf=\"displayCompanyReport\" class=\"row\">\n                                <div class=\"tab-content tab-space tab-subcategories col-md-12\">\n                                  <div class=\"tab-pane active\" id=\"link7\">\n                                    <div class=\"col-md-11 mr-auto ml-auto text-left\">\n                                      Total Number of Tasks Complete : {{ (labourerCompletedTasks | async)?.length }}<br>\n                                      Total Number of outstanding Tasks : {{ labourerOutstandingTasks.length }}<br>\n                                      Total Number of Tasks allocated: {{ (compLabourerTasks | async)?.length }}<br>\n                                    </div>\n                                    <div class=\"col-md-12\">\n                                      <!-- <div class=\"card-body\" style=\"margin-top: -10px\"> -->\n                                      <div class=\"row\">\n                                        <div class=\"col-sm-1 card-header text-left\" style=\"padding-right: 0px; padding-left: 12px;\">#\n                                        </div>\n                                        <div class=\"col-sm-2 card-header text-left\" style=\"padding-left: 0px;\">Task</div>\n                                        <!-- <div class=\"col-sm-2 card-header\">Target</div> -->\n                                        <div class=\"col-md-2 col-sm-2 card-header text-left\">Start</div>\n                                        <div class=\"col-md-2 col-sm-2 card-header \">Finish</div>\n                                        <div class=\"col-md-2 col-sm-2 card-header \">Complete</div>\n                                        <div class=\"col-md-3 col-sm-3 card-header \">Champion</div>\n                                      </div>\n                                      <ol style=\"padding-left: 10px;\">\n                                        <p *ngIf=\"(labourerOutstandingTasks.length != 0)\" class=\"category text-warning\">Outstanding Tasks.</p>\n                                        <!--  style=\"margin-top:-1em\" -->\n                                        <li *ngFor=\"let item of labourerOutstandingTasks\">\n                                          <div class=\"row\">\n                                            <div class=\"col-md-3 col-sm-3 text-left\">\n                                              <a>{{ item.name }}</a>\n                                            </div>\n                                            <div class=\"col-md-2 col-sm-2\">\n                                              <a>{{ item.start }}</a>\n                                            </div>\n                                            <div class=\"col-md-2 col-sm-2\">\n                                              <a>{{ item.finish }}</a>\n                                            </div>\n                                            <div class=\"col-md-2 col-sm-2\">\n                                              <a>{{ item.complete }}</a>\n                                            </div>\n                                            <div class=\"col-md-3 card-category col-sm-3\">\n                                              <a>{{ item.champion.name }}</a>\n                                            </div>\n                                          </div>\n                                        </li>\n                                        <p *ngIf=\"(labourerCurrentTAsks.length != 0)\" class=\"category text-success\">Current Tasks.</p>\n                                        <li *ngFor=\"let item of labourerCurrentTAsks\">\n                                          <div class=\"row\">\n                                            <div class=\"col-md-3 col-sm-3\">\n                                              <a> {{ item.name }}</a>\n                                            </div>\n                                            <div class=\"col-md-2 col-sm-2\">\n                                              <a> {{ item.start }}</a>\n                                            </div>\n                                            <div class=\"col-md-2 col-sm-2\">\n                                              <a> {{ item.finish }}</a>\n                                            </div>\n                                            <div class=\"col-md-2 col-sm-2\">\n                                              <a> {{ item.complete }}</a>\n                                            </div>\n                                            <div class=\"col-md-3 card-category  col-sm-3\">\n                                              <a> {{ item.champion.name }}</a>\n                                            </div>\n                                          </div>\n                                        </li>\n                                        <p *ngIf=\"(labourerUpcomingTAsks.length != 0)\" class=\"category text-info\">Upcurrent Tasks.</p>\n                                        <li *ngFor=\"let item of labourerUpcomingTAsks\">\n                                          <div class=\"row\">\n                                            <div class=\"col-md-3 col-sm-3\">\n                                              <a> {{ item.name }}</a>\n                                            </div>\n                                            <div class=\"col-md-2 col-sm-2\">\n                                              <a> {{ item.start }}</a>\n                                            </div>\n                                            <div class=\"col-md-2 col-sm-2\">\n                                              <a> {{ item.finish }}</a>\n                                            </div>\n                                            <div class=\"col-md-2 col-sm-2\">\n                                              <a> {{ item.complete }}</a>\n                                            </div>\n                                            <div class=\"col-md-3 card-category  col-sm-3\">\n                                              <a> {{ item.champion.name }}</a>\n                                            </div>\n                                          </div>\n                                        </li>\n                                      </ol>\n                                      <!-- </div> -->\n                                    </div>\n                                  </div>\n                                  <div class=\"tab-pane\" id=\"link8\">\n                                    Efficiently Timesheet\n                                    <br>\n                                    <br>Dramatically maintain clicks-and-mortar solutions without functional solutions.\n                                  </div>\n                                  <div class=\"tab-pane\" id=\"link9\">\n                                    Other reports\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>                \n                          <div class=\"tab-pane\" id=\"projectOverview\" role=\"tabpanel\" aria-expanded=\"false\">\n                            <div class=\"card-body\">\n                              <div class=\"col-md-10 ml-auto mr-auto\">\n                                <p class=\"text-left title clrs-h4-font\" style=\"color: darkslategray\">Project Details</p>\n                                <div class=\"card-plain card-content\">\n                                  <div class=\"text-left na-p\" style=\"margin-left:2em \">\n                                    <span class=\"row col-md-12\">\n                                      <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Project Name\n                                      </span>\n                                      <span class=\"col-sm-9\">: {{ (project)?.name }} </span>\n                                    </span><br>\n                                    <span class=\"row col-md-12\">\n                                      <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Sector </span>\n                                      <span class=\"col-sm-9\">: {{ (project)?.sector }} </span>\n                                    </span><br>\n                                    <span class=\"row col-md-12\">\n                                      <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Location\n                                      </span>\n                                      <span class=\"col-sm-9\">: {{ (project)?.location }} </span>\n                                    </span><br>\n                                  </div>\n                                </div>\n                                <div class=\"spacer\" style=\"height: 2em\"></div>\n                                <div *ngIf=\"!displayCompany\" class=\"card-body\">\n                                  <div class=\"row\">\n                                    <p class=\"clrs-h2\"><span class=\"title card-category\" style=\"color:darkslategray\">\n                                        List of Enterprise involved...</span>\n                                    </p>\n                                  </div>\n                                  <div class=\"row\">\n                                    <ol class=\"card-category\">\n                                      <li *ngFor=\"let company of allProjectCompanies | async\" class=\"text-left\">\n                                        <a (click)=\"viewSetCompanyReport(company)\" style=\"cursor:context-menu\" class=\"text-left\">{{ company.name }}</a>\n                                      </li>\n                                    </ol>\n                                    <div class=\"pull-right col-md-7 ml-auto mr-auto\">\n                                      <p class=\"text-info \">To see Enterprise progress report, click on the enterprise name.</p>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div *ngIf=\"displayCompany\" class=\"card-body\">\n                                \n                                  <div class=\"row\">\n                                    <!-- <div class=\"col-md-8\"> -->\n                                      <p class=\"clrs-h2\"><span class=\"title card-category\" style=\"color:darkslategray\">\n                                        <b>{{ setCompany.name }}</b> enterprise report.</span><br>\n                                        <!-- Summarized Report for <b>{{ setCompany.name }}</b> enterprise.</span><br> -->\n                                      </p>\n                                    <!-- </div>-->\n                                    <div class=\"pull-right col-md-4 ml-auto mr-auto\">\n                                      <button *ngIf=\"displayCompany\" class=\"btn-link btn-magnify\" (click)=\"displayProject()\" style=\"margin-bottom: 9px;\">Back to Enterprise list</button>\n                                    </div>\n                                  </div>\n                                  <div class=\"row\">\n                                    <p class=\"clrs-h4-font\"><span class=\"title card-category\" style=\"color:darkslategray\">\n                                      Labour Returns.</span><br>\n                                    </p>\n                                  </div>\n                                  <div class=\"card-body\" style=\"margin-top: -10px\">\n                                    <ol class=\"card-category\">\n                                      <li *ngFor=\"let person of setCompanyLabour | async\" class=\"text-left\">\n                                        <a style=\"cursor:default\" class=\"text-left\">{{ person.name }}</a>\n                                      </li>\n                                    </ol>\n                                  </div>\n                                  <div class=\"row\">\n                                    <p class=\"clrs-h4-font\"><span class=\"title card-category\" style=\"color:darkslategray\">\n                                      Plant Returns.</span><br>\n                                    </p>\n                                  </div>\n                                  <div class=\"card-body\" style=\"margin-top: -10px\">\n                                    <ol class=\"card-category\">\n                                      <li *ngFor=\"let asset of setCompanyPlants | async\" class=\"text-left\">\n                                        <a style=\"cursor:default\" class=\"text-left\">{{ asset.name }}</a>\n                                      </li>\n                                    </ol>\n                                  </div>\n                                  <div class=\"row\">\n                                    <p class=\"clrs-h4-font\"><span class=\"title card-category\" style=\"color:darkslategray\">\n                                      Progress Report.</span><br>\n                                    </p>\n                                  </div>\n                                  <div class=\"col-md-12 mr-auto ml-auto text-left\">\n                                    Total Number of Tasks Complete : {{ (allsetCompanyTasksComplete | async)?.length }}<br>\n                                    Total Number of outstanding Tasks : {{ setCompOutstandingTasks.length }}<br>\n                                    Total Number of Tasks allocated: {{ (allsetCompanyTasks | async)?.length }}<br>\n                                  </div>\n                                  <div class=\"row\">\n                                    <div class=\"card-body\" style=\"margin-top: -10px\">\n                                      <div class=\"row\">\n                                        <div class=\"col-sm-1 card-header text-left\" style=\"padding-right: 0px; padding-left: 12px;\">#</div>\n                                        <div class=\"col-sm-2 card-header text-left\" style=\"padding-left: 0px;\">Task\n                                        </div>\n                                        <div class=\"col-sm-2 card-header text-left\">Start</div>\n                                        <div class=\"col-sm-2 card-header text-left\">Finish</div>\n                                        <div class=\"col-sm-2 card-header text-left\" style=\"padding-right: 0px;padding-left: 0px;\">Complete</div>\n                                        <div class=\"col-sm-3 card-header text-left\">Champion</div>\n                                      </div>\n                                      <ol style=\"padding-left: 10px;\">\n                                        <p *ngIf=\"(setCompOutstandingTasks.length != 0)\" class=\"category text-warning\">Outstanding Tasks.</p>\n                                        <li *ngFor=\"let item of setCompOutstandingTasks\">\n                                          <div class=\"row\">\n                                            <div class=\"col-sm-3\">\n                                              <a>{{ item.name }}</a>\n                                            </div>\n                                            <div class=\"col-sm-2\">\n                                              <a>{{ item.start }}</a>\n                                            </div>\n                                            <div class=\"col-sm-2\">\n                                              <a>{{ item.finish }}</a>\n                                            </div>\n                                            <div class=\"col-sm-2\">\n                                              <a>{{ item.complete }}</a>\n                                            </div>\n                                            <div class=\"col-md-3 card-category col-sm-3\">\n                                              <a>{{ item.champion.name }}</a>\n                                            </div>\n                                          </div>\n                                        </li>\n                                        <p *ngIf=\"(setCompCurrentTAsks.length != 0)\" class=\"category text-success\">\n                                          Current Tasks.</p>\n                                        <li *ngFor=\"let item of setCompCurrentTAsks\">\n                                          <div class=\"row\">\n                                            <div class=\"col-md-3 col-sm-3\">\n                                              <a> {{ item.name }}</a>\n                                            </div>\n                                            <div class=\"col-md-2 col-sm-2\">\n                                              <a> {{ item.start }}</a>\n                                            </div>\n                                            <div class=\"col-md-2 col-sm-2\">\n                                              <a> {{ item.finish }}</a>\n                                            </div>\n                                            <div class=\"col-md-2 col-sm-2\">\n                                              <a> {{ item.complete }}</a>\n                                            </div>\n                                            <div class=\"col-md-3 card-category  col-sm-3\">\n                                              <a> {{ item.champion.name }}</a>\n                                            </div>\n                                          </div>\n                                        </li>\n                                        <p *ngIf=\"(setCompUpcomingTAsks.length != 0)\" class=\"category text-info\">\n                                          Upcoming Tasks.</p>\n                                        <li *ngFor=\"let item of setCompUpcomingTAsks\">\n                                          <div class=\"row\">\n                                            <div class=\"col-md-3 col-sm-3\">\n                                              <a> {{ item.name }}</a>\n                                            </div>\n                                            <div class=\"col-md-2 col-sm-2\">\n                                              <a> {{ item.start }}</a>\n                                            </div>\n                                            <div class=\"col-md-2 col-sm-2\">\n                                              <a> {{ item.finish }}</a>\n                                            </div>\n                                            <div class=\"col-md-2 col-sm-2\">\n                                              <a> {{ item.complete }}</a>\n                                            </div>\n                                            <div class=\"col-md-3 card-category  col-sm-3\">\n                                              <a> {{ item.champion.name }}</a>\n                                            </div>\n                                          </div>\n                                        </li>\n                                      </ol>\n                                    </div>\n                                  </div>\n                                \n\n                                \n\n                                  \n                                </div>\n                                <div *ngIf=\"!displayCompany\" class=\"card-body\">\n                                  <div class=\"row\">\n                                    <p class=\"text-left clrs-h2\"><span class=\"title card-category\" style=\"color:darkslategray\">\n                                        Overall Summary...</span>\n                                    </p>\n                                  </div>\n                                </div>  \n                                <div *ngIf=\"!displayCompany\" class=\"card-body\">\n                                  <div class=\"row\">\n                                    <p class=\"text-left clrs-h2\"><span class=\"title card-category\" style=\"color:darkslategray\">\n                                        Completion...: 46 %</span>\n                                    </p>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                \n                \n                \n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal fade\" id=\"tskModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"card-body \">\n          <div class=\"card-header text-center\">\n            <p class=\"col-md-8 ml-auto mr-auto col-form-label info\">\n              <font size=4>Create a Task</font>\n            </p>\n          </div>\n          <hr>\n          <form class=\"form-horizontal\">\n            <div class=\"row\">\n              <label class=\"col-md-3 col-form-label\">Section</label>\n              <div class=\"col-md-8\">\n                <ng-select [items]=\"projectDescription | async\" bindLabel=\"name\" name=\"tProjectsection\"\n                  placeholder=\"Select Project section\" [(ngModel)]=\"task.section\">\n                </ng-select>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-md-3 col-form-label\">Task name</label>\n              <div class=\"col-md-8\">\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"task.name\" name=\"taskName\" class=\"form-control\"\n                    placeholder=\"Task name\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-md-3 col-form-label\">Start Date</label>\n              <div class=\"col-md-8\">\n                <div class=\"form-group\">\n                  <input type=\"date\" [(ngModel)]=\"start\" name=\"start\" class=\"form-control\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-md-3 col-form-label\">Finish Date</label>\n              <div class=\"col-md-8\">\n                <div class=\"form-group\">\n                  <input type=\"date\" [(ngModel)]=\"finish\" name=\"finish\" class=\"form-control\">\n                </div>\n              </div>\n            </div>\n            <ng-container *ngIf=\"showCompany\">\n              <div class=\"row\">\n                <label class=\"col-md-3 col-form-label\">Enterprise</label>\n                <div class=\"col-md-8\">\n                  <div class=\"form-group\" style=\"margin-top: -8px; margin-left: 15px; margin-bottom: -2px;\">\n                    {{(selectedCompany)?.name }}\n                    <button type=\"text\" name=\"taskProject\" class=\"btn btn-icon primary btn-link \"\n                      (click)=\"toggleCompTable(); toggleComp()\">\n                      <span class=\"pull-right\"><i class=\"fa fa-edit fa-fw\"></i></span>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </ng-container>\n            <ng-container *ngIf=\"showChamp\">\n              <div class=\"row\">\n                <label class=\"col-md-3 col-form-label\">Champion</label>\n                <div class=\"col-md-8\">\n                  <div class=\"form-group\" style=\"margin-top: -8px; margin-left: 15px; margin-bottom: -2px;\">\n                    {{(userChampion)?.name }}\n                    <button type=\"text\" name=\"taskChampion\" class=\"btn btn-icon primary btn-link \"\n                      (click)=\"toggleUsersTable(); toggleChamp()\">\n                      <i class=\"fa fa-edit fa-fw\"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </ng-container>\n            <div class=\"row\">\n              <div class=\"col-md-8 ml-auto mr-auto\">\n                <div class=\"form-group\">\n                  <ng-container *ngIf=\"showUserTable\">\n                    <div class=\"table-responsive user_table\">\n                      <code>Select a Champion</code>\n                      <table class=\"table\">\n                        <tbody class=\"\">\n                          <tr *ngFor=\"let user of compstaff | async \" class=\"\">\n                            <td>{{ user.name }}</td>\n                            <td><button class=\"primary btn-link\" (click)=\"assignLabourer(user)\"> select\n                              </button></td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </ng-container>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-8 ml-auto mr-auto\">\n                <div class=\"form-group\">\n                  <ng-container *ngIf=\"showCompanyTable\">\n                    <div class=\"table-responsive user_table\">\n                      <code>Select Company</code>\n                      <table class=\"table\">\n                        <tbody>\n                          <tr *ngFor=\"let company of enterpriseCollection | async\" class=\"\">\n                            <td>\n                              {{company.name}}</td>\n                            <td>\n                              <button class=\"primary btn-link\" (click)=\"selectCompany(company)\"> select\n                              </button>\n                            </td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </ng-container>\n                </div>\n              </div>\n            </div>\n          </form>\n          <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n            <div class=\"left-side\">\n              <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n            </div>\n            <div class=\"divider\"></div>\n            <div class=\"right-side\">\n              <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"addProjectTask()\" data-dismiss=\"modal\"\n                title=\"save task\">Save</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal fade\" id=\"dptModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <!--  modal-sm -->\n      <div class=\"modal-content\">\n        <div class=\"modal-header justify-content-center\">\n          <div class=\"row\">\n            <ng-template #showPrompt>\n              <div class=\"col-md-8 ml-auto mr-auto\">\n                <p>Select a Company</p>\n              </div>\n            </ng-template>\n          </div>\n          <ng-container *ngIf=\"showCompanyName; else showPrompt\">\n            <p>You want to add the Task to <b>{{ selectedCompany.name }}</b> company?</p>\n          </ng-container>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"table-responsive pro_info\">\n            <table class=\"table\">\n              <thead class=\"\">\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let company of companies | async\">\n                  <td>{{ company.name }}</td>\n                  <td class=\"justify-content-center\">\n                    <button class=\"warning btn-link\" rel=\"tooltip\" title=\"Select Company\"\n                      (click)=\"showCompName(); chooseCompany(company)\">select</button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-link btn-link\" data-dismiss=\"modal\" aria-hidden=\"true\">Close</button>\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-link btn-link\" (click)=\"addToCompany()\" data-dismiss=\"modal\">\n              Confirm</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal fade\" id=\"labourModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <!--  modal-sm -->\n      <div class=\"modal-content\">\n        <div class=\"modal-header justify-content-center\">\n          <div class=\"row\">\n            <ng-template #showPrompt3>\n              <div class=\"col-md-8 ml-auto mr-auto\">\n                <p>Select a Staff</p>\n              </div>\n            </ng-template>\n          </div>\n          <ng-container *ngIf=\"showCompanyName; else showPrompt3\">\n            <p>You allocating the {{ selectedTask.name }} Task to <b>{{ selectedStaff.name }}</b>?</p>\n          </ng-container>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"table-responsive pro_info\">\n            <table class=\"table\">\n              <thead class=\"\">\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let staff of companyprojectLabour | async\">\n                  <td>{{ staff.name }}</td>\n                  <td class=\"justify-content-center\">\n                    <button class=\"warning btn-link\" rel=\"tooltip\" title=\"Select staff\"\n                      (click)=\"showCompName(); selectStaff(staff)\">select</button>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-link btn-link\" data-dismiss=\"modal\" aria-hidden=\"true\">Close</button>\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-link btn-link\" (click)=\"addToStaff()\" data-dismiss=\"modal\">\n              Enter</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal fade\" id=\"commentModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <!--  modal-sm -->\n      <div class=\"modal-content\">\n        <div class=\"modal-header justify-content-center\">\n          <div class=\"row\">\n            <ng-template #showPrompt>\n              <div class=\"col-md-8 ml-auto mr-auto\">\n                <p>Make comments on <b>{{ (selectedTask)?.name }}</b> task and submit</p>\n              </div>\n            </ng-template>\n          </div>\n          <ng-container *ngIf=\"showCompanyName; else showPrompt\">\n            <p>Click on Submit to post the comment <b>{{ selectedTask.name }}</b> task.</p>\n          </ng-container>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"\">\n            <textarea name=\"taskComment\" id=\"comments\" cols=\"50\" rows=\"auto\"\n              placeholder=\"Click and type your comment here.....\" [(ngModel)]=\"commentData\"></textarea>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-link btn-link\" data-dismiss=\"modal\" aria-hidden=\"true\">Close</button>\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-link btn-link\" (click)=\"comment(commentData)\" data-dismiss=\"modal\">\n              Submit</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal fade\" id=\"newAction\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"card-body \">\n          <div class=\"card-header text-center\">\n            <p class=\"col-md-8 ml-auto mr-auto col-form-label info\" style=\"color:steelblue\">\n              <font size=4>New Activity for <br>{{ selectedTask.name }} task</font>\n            </p>\n          </div>\n          <hr>\n          <!-- <a> Selected Unit: <span></span><small> {{ setSui.id }}</small></a><br> -->\n          <form class=\"form-horizontal\">\n            <!-- <div class=\"row\">\n            <label class=\"col-md-4 col-form-label\">Activity Name</label>\n            <div class=\"col-md-7\">\n              <div class=\"form-group\">\n                <input type=\"text\" [(ngModel)]=\"actionItem.name\" name=\"taskName\" class=\"form-control\" placeholder=\"Task Activity name\">\n              </div>\n            </div>\n          </div> -->\n            <div class=\"row\">\n              <label class=\"col-md-4 col-form-label\">Task Activity</label>\n              <div class=\"col-md-7 col-lg-6 col-sm-5\">\n                <ng-select [items]=\"billWorks | async\" bindLabel=\"name\" name=\"WorkAction\"\n                  placeholder=\"Select Task Activity\" (click)=\"setAction(setItem)\" [(ngModel)]=\"setItem\">\n                </ng-select>\n              </div>\n            </div>\n            <ng-container *ngIf=\"hideDateBtn\">\n              <div class=\"row col-md-10 ml-auto mr-auto\">\n                <button class=\"primary btn-link\" (click)=\"showDatefield()\">\n                  <small>Add date</small>\n                </button>\n              </div>\n            </ng-container>\n            <ng-container *ngIf=\"showDate\">\n              <div class=\"row\">\n                <label class=\"col-md-4 col-form-label\">Start Date</label>\n                <div class=\"col-md-7\">\n                  <div class=\"form-group\">\n                    <input type=\"date\" [(ngModel)]=\"startDate\" name=\"sDate\" class=\"form-control\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <label class=\"col-md-4 col-form-label\">End Date</label>\n                <div class=\"col-md-7\">\n                  <div class=\"form-group\">\n                    <input type=\"date\" [(ngModel)]=\"endDate\" name=\"eDate\" class=\"form-control\">\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-md-5\"></div>\n                <div class=\"col-md-4\"></div>\n                <div class=\"col-md-3 ml-auto mr-auto\">\n                  <button class=\"primary btn-link\" (click)=\"hideDatefield()\">\n                    <small>back</small>\n                  </button>\n                </div>\n              </div>\n            </ng-container>\n          </form>\n\n          <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n            <div class=\"left-side\">\n              <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n            </div>\n            <div class=\"divider\"></div>\n            <div class=\"right-side\">\n              <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"newAction(startDate,endDate)\"\n                data-dismiss=\"modal\" title=\"save activity\">Enter</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal fade\" id=\"actionParticipants\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"card-body \">\n          <div class=\"card-header text-center\">\n            <p class=\"col-md-8 ml-auto mr-auto title na-am col-form-label info\">\n              Select Participants<br>\n              for Task Activity item: <b>{{ selectedAction.name }}</b> </p><br>\n          </div>\n          <div class=\"col-md-10 ml-auto mr-auto\">\n            <br>\n            <ol>\n              <li *ngFor=\"let person of labourRef1\">\n                <div class=\"row\">\n                  <div class=\"col-md-9\">\n                    {{ person.name }}\n                  </div>\n                  <div class=\"col-md-3\" style=\"padding-top: 12px;\">\n                    <input class=\"card-category pull-right col-form-label\" type=\"checkbox\"\n                      (change)=\"selectActionStaff($event, person)\">\n                  </div>\n                </div>\n              </li>\n            </ol>\n            <ng-container *ngIf=\"actionParticipants != null\">\n              <small>Participants:<br>\n                <a *ngFor=\"let person of actionParticipants | async\">{{ person.name }}, </a></small>\n            </ng-container>\n          </div>\n        </div>\n        <hr>\n        <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n          <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-success btn-link\" data-dismiss=\"modal\" title=\"save task\">Save</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal fade\" id=\"compDetail\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\" *ngIf=\"viewCompany\">\n        <div class=\"card-body\" style=\"margin-top:-3em; padding-bottom: 0px;\">\n          <div class=\"card card-plain col-md-12\" style=\"margin-top:-3em; padding-left: 0px; padding-right: 0px\">\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <div class=\"modal-profile ml-auto mr-auto\">\n                  <i class=\"fa fa-address-card\"></i>\n                </div>\n                <p class=\"clrs-h1-font\"> {{ (viewCompany)?.name }} </p>\n              </div>\n              <div class=\"modal-body\">\n                <!-- <form method=\"\"> -->\n                <div class=\"form-group\">\n                  <!-- <label>Role</label> -->\n                  <!-- <p *ngIf=\"viewCompany.Roles\" class=\"text-info card-category\">{{ viewCompany.roles }}</p> -->\n                  <p class=\"text-info card-category\">\n                    <span class=\"row col-md-12\">\n                      <label class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Roles</label>\n                      <!-- <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Roles </span> -->\n                      <span *ngIf=\"viewCompany.roles\" class=\"col-sm-9 text-info\">\n                        <a *ngFor=\"let role of (viewCompany)?.roles\">: {{ role.display }} <br></a>\n                      </span>\n                    </span>\n                  </p>\n                  <p *ngIf=\"!viewCompany.roles\" class=\"text-warning\">NAN</p>\n                  <!-- <input type=\"text\" name=\"cRole\" [(ngModel)]=\"viewCompany.Roles\" class=\"form-control\" placeholder=\"Architect\"> -->\n                </div>\n                <div class=\"form-group\">\n                  <label>Address</label>\n                  <p *ngIf=\"viewCompany.address\" class=\"text-info card-category\">{{ viewCompany.address }}</p>\n                  <p *ngIf=\"!viewCompany.address\" class=\"text-warning\">NAN</p>\n                  <!-- <input type=\"text\" name=\"cAddress\" [(ngModel)]=\"viewCompany.address\" class=\"form-control\" placeholder=\"House#, street, location ,Town\"> -->\n                </div>\n                <div class=\"form-group\">\n                  <label>Telephone</label>\n                  <p *ngIf=\"!viewCompany.champion.telephone\" class=\"text-info card-category\">{{ viewCompany.telephone }}\n                  </p>\n                  <p *ngIf=\"!viewCompany.telephone\" class=\"text-warning\">NAN</p>\n                  <!-- <input type=\"text\" name=\"cTel\" [(ngModel)]=\"viewCompany.telephone\" class=\"form-control\" placeholder=\"06 66666666\"> -->\n                </div>\n                <div class=\"form-group\">\n                  <label>Champion</label>\n                  <p *ngIf=\"viewCompany.champion.name\" class=\"text-info card-category\">{{ viewCompany.champion.name }}\n                  </p>\n                  <p *ngIf=\"!viewCompany.champion.name\" class=\"text-warning\">NAN</p>\n\n                  <!-- <input type=\"text\" name=\"cName\" [(ngModel)]=\"viewCompany.champion.name\" class=\"form-control\" placeholder=\"Simon\">   -->\n                </div>\n                <div class=\"form-group\">\n                  <label>Email</label>\n                  <p *ngIf=\"viewCompany.champion.email\" class=\"text-info\">{{ viewCompany.champion.email }}</p>\n                  <p *ngIf=\"!viewCompany.champion.email\" class=\"text-warning\">NAN</p>\n                  <!-- <input type=\"email\" name=\"cEmail\" class=\"form-control\" placeholder=\"username@email.com\"> [(ngModel)]=\"viewCompany.champion.email\"  -->\n                </div>\n                <div class=\"form-group\">\n                  <label>Mobile number</label>\n                  <p *ngIf=\"viewCompany.champion.phoneNumber\" class=\"text-info\">{{ viewCompany.champion.phoneNumber }}\n                  </p>\n                  <p *ngIf=\"!viewCompany.champion.phoneNumber\" class=\"text-warning\">NAN</p>\n                  <!-- <input type=\"text\" name=\"cNumber\" class=\"form-control\" placeholder=\"+263774555666\">  [(ngModel)]=\"viewCompany.champion.phoneNumber\"  -->\n                </div>\n                <!-- </form> -->\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- <hr> -->\n        <!-- <div class=\"modal-footer\" style=\"margin-bottom:0%; margin-TOP:0%\"> -->\n        <div class=\"footer col-md-12\" style=\"padding-top: 0px\">\n          <div class=\"col-md-10\">\n            <!-- <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button> -->\n          </div>\n          <!-- <div class=\"divider\"></div> -->\n          <div class=\"col-md-2\">\n            <!-- <button type=\"button\" class=\"btn btn-success btn-link\" data-dismiss=\"modal\" title=\"save task\">Save</button> -->\n            <button type=\"button\" class=\"btn-link\" data-dismiss=\"modal\">Back</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal fade\" id=\"editAction\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"card-body \">\n          <div class=\"card-header text-center\">\n            <p class=\"col-md-8 ml-auto mr-auto col-form-label info\" style=\"color:steelblue\">\n              <font size=4>Edit Task Activity item <br> \"{{ selectedAction.name }}\"</font>\n            </p>\n          </div>\n          <hr>\n          <form class=\"form-horizontal\">\n            <div class=\"row\">\n              <label class=\"col-md-4 col-form-label\">Start Date</label>\n              <div class=\"col-md-7\">\n                <div class=\"form-group\">\n                  <input type=\"date\" [(ngModel)]=\"startDate\" name=\"siu\" class=\"form-control\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-md-4 col-form-label\">End Date</label>\n              <div class=\"col-md-7\">\n                <div class=\"form-group\">\n                  <input type=\"date\" [(ngModel)]=\"endDate\" name=\"siu\" class=\"form-control\">\n                </div>\n              </div>\n            </div>\n          </form>\n          <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n            <div class=\"left-side\">\n              <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n            </div>\n            <div class=\"divider\"></div>\n            <div class=\"right-side\">\n              <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"editAction(startDate,endDate)\"\n                data-dismiss=\"modal\" title=\"save activity\">Enter</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal fade\" id=\"newActionToday\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"card-body \">\n          <div class=\"card-header text-center\">\n            <p class=\"col-md-10 ml-auto mr-auto title na-an info\" style=\"color:steelblue\">\n              <font size=4>New Task Activity for {{ selectedTask.name }} task</font>\n            </p>\n          </div>\n          <hr>\n          <!-- <a> Selected Unit: <span></span><small> {{ setSui.id }}</small></a><br> -->\n          <form class=\"form-horizontal\">\n            <div class=\"row\">\n              <label class=\"col-md-4 col-form-label\">Activity Name</label>\n              <div class=\"col-md-7\">\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"actionItem.name\" name=\"taskName\" class=\"form-control\"\n                    placeholder=\"Activity name\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-md-4 col-form-label\">Target Qty</label>\n              <div class=\"col-md-7\">\n                <div class=\"form-group\">\n                  <input type=\"number\" [(ngModel)]=\"actionItem.targetQty\" name=\"siu\" class=\"form-control\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-md-4 col-form-label\">Unit measure</label>\n              <div class=\"col-md-7 col-lg-6 col-sm-5\">\n                <div class=\"form-group\">\n                  <ng-select [items]=\"SIunits\" bindLabel=\"name\" name=\"jyu\" placeholder=\"Select unit of Measure\"\n                    [(ngModel)]=\"setSui\">\n                  </ng-select>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-md-4 col-form-label\">Task</label>\n              <div class=\"col-md-7 col-lg-6 col-sm-5\">\n                <div class=\"form-group\">\n                  <ng-select placeholder=\"Select Task\" [(ngModel)]=\"actionItem.taskId\" name=\"actionTask\">\n                    <ng-option *ngFor=\"let tas of tasks | async\" [value]=\"tas.id\">\n                      {{ tas.name }}</ng-option>\n                  </ng-select>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-md-4 col-form-label\">Staff</label>\n              <div class=\"col-md-7 col-lg-6 col-sm-5\">\n                <div class=\"form-group\">\n                  <ng-select placeholder=\"Select staff\" [(ngModel)]=\"selectedStaffId\" name=\"actionStaffSelect\">\n                    <ng-option *ngFor=\"let user of labour | async\" [value]=\"user.id\">{{ user.name }}</ng-option>\n                  </ng-select>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-md-4 col-form-label\">Start Date</label>\n              <div class=\"col-md-7\">\n                <div class=\"form-group\">\n                  <input type=\"time\" [(ngModel)]=\"actionItem.start\" name=\"siu\" class=\"form-control\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-md-4 col-form-label\">End Date</label>\n              <div class=\"col-md-7\">\n                <div class=\"form-group\">\n                  <input type=\"time\" [(ngModel)]=\"actionItem.end\" name=\"siu\" class=\"form-control\">\n                </div>\n              </div>\n            </div>\n          </form>\n          <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n            <div class=\"left-side\">\n              <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n            </div>\n            <div class=\"divider\"></div>\n            <div class=\"right-side\">\n              <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"newActionToday(actionItem)\"\n                data-dismiss=\"modal\" title=\"save activity\">Enter</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal fade\" id=\"addWorkItem\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header justify-content-center\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"resetForm()\" aria-label=\"Close\">\n            <i class=\"nc-icon nc-simple-remove\"></i>\n          </button>\n          <p class=\"title-up na-am\">Add Activity to <b>{{ (selectedBill)?.name }}</b><br>\n        </div>\n        <div class=\"modal-body\">\n          <ng-container>\n            <div class=\"row\">\n              <label class=\"col-md-3 col-form-label\">Name</label>\n              <div class=\"col-md-9\">\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"newWorkItem.name\" name=\"workItem_name\" class=\"form-control\" placeholder=\"e.g. Concrete\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-md-3 col-form-label\">Unit</label>\n              <div class=\"col-md-9\">\n                <div class=\"form-group\">\n                  <ng-select [items]=\"SIunits\" bindLabel=\"name\" placeholder=\"Select Unit\" name=\"workItem_unit\"  [(ngModel)]=\"selectedUnits\">\n                  </ng-select>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-md-3 col-form-label\">Quantity</label>\n              <div class=\"col-md-9\">\n                <div class=\"form-group\">\n                  <input type=\"number\" [(ngModel)]=\"newWorkItem.quantity\" name=\"workItem_qty\" class=\"form-control\"\n                    placeholder=\"e.g. 2 450\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-md-3 col-form-label\">Rate</label>\n              <div class=\"col-md-9\">\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"newWorkItem.rate\" name=\"workItem_rate\" class=\"form-control\"\n                    placeholder=\"e.g. 100/hr\">\n                </div>\n              </div>\n            </div>\n            <!-- <div class=\"row\">\n            <label class=\"col-md-3 col-form-label\">Amount</label>\n            <div class=\"col-md-9\">\n              <div class=\"form-group\">\n                <input type=\"number\" [(ngModel)]=\"newWorkItem.amount\" name=\"workItem_amount\" class=\"form-control\"\n                  placeholder=\"e.g. 100\">\n              </div>\n            </div>\n          </div> -->\n          </ng-container>\n        </div>\n        <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n          <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"saveWorkItem()\" data-dismiss=\"modal\"\n              title=\"join Comapny\">Join</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal fade\" id=\"assetRegister\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"card-body \">\n          <div class=\"card-header text-center\">\n            <p class=\"col-md-8 ml-auto mr-auto title na-p col-form-label info\">\n              Select Asset to add to Plant returns\n            </p>\n          </div>\n          <hr>\n          <form class=\"form-horizontal\">\n            <ng-container *ngIf=\"showAsset\">\n              <div class=\"col-md-12 ml-auto mr-auto\">\n                <div class=\"row\">\n                  <label class=\"col-md-4 col-form-label\">Asset</label>\n                  <div class=\"col-md-8 mr-auto\">\n                    <div class=\"form-group\" style=\"margin-top: -8px; margin-left: 15px; margin-bottom: -2px;\">\n                      <button type=\"text\" name=\"taskChampion\" class=\"btn btn-icon primary btn-link \"\n                        (click)=\"toggleAssertTable(); hideAsset()\" rel=\"tooltip\" title=\"select a new staff\">\n                        <i class=\"fa fa-edit fa-fw\"></i>\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </ng-container>\n            <ng-container *ngIf=\"showPlantDetail\">\n              <div class=\"col-md-12\">\n                <div class=\"row\">\n                  <label class=\"col-md-3 col-form-label\">Asset</label>\n                  <div class=\"col-md-7 mr-auto\">\n                    <div class=\"form-group\" style=\"margin-top: -8px; margin-bottom: -2px;\">: {{(selectedAsset)?.name }}\n                      <button type=\"text\" name=\"taskChampion\" class=\"btn btn-icon primary btn-link \"\n                        (click)=\"toggleAssertTable(); toggleAsset()\" rel=\"tooltip\" title=\"select a new staff\">\n                        <i class=\"fa fa-edit fa-fw\"></i>\n                      </button>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\"></div>\n                </div>\n                <div class=\"row\">\n                  <label class=\"col-md-3 col-form-label\">Unit</label>\n                  <div class=\"col-md-7 mr-auto\">\n                    <div class=\"form-group\" style=\"margin-top: -8px; margin-bottom: -2px;\">\n                      <ng-select [items]=\"SIunits\" bindLabel=\"name\" name=\"pReturnUnit\"\n                        placeholder=\"Select unit of Measure\" [(ngModel)]=\"setSui\">\n                      </ng-select>\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\"></div>\n                </div>\n                <div class=\"row\">\n                  <label class=\"col-md-3 col-form-label\">Rate</label>\n                  <div class=\"col-md-7 mr-auto\">\n                    <div class=\"form-group\" style=\"margin-top: -8px; margin-bottom: -2px;\">\n                      <input type=\"text\" [(ngModel)]=\"rate\" name=\"plantReturnRate\" class=\"form-control\"\n                        placeholder=\"$50/Hour\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-2\"></div>\n                </div>\n              </div>\n            </ng-container>\n            <div class=\"row\">\n              <div class=\"col-md-8 ml-auto mr-auto\">\n                <div class=\"form-group\">\n                  <ng-container *ngIf=\"showAssetTable\">\n                    <div class=\"table-responsive user_table\">\n                      <code>Select a Asset</code>\n                      <table class=\"table\">\n                        <tbody class=\"\">\n                          <tr *ngFor=\"let asset of companyAssets | async \" class=\"\">\n                            <td>{{ asset.name }}</td>\n                            <td><button class=\"primary btn-link\" (click)=\"selectAsset(asset)\"> select </button></td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </ng-container>\n                </div>\n              </div>\n            </div>\n          </form>\n          <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n            <div class=\"left-side\">\n              <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n            </div>\n            <div class=\"divider\"></div>\n            <div class=\"right-side\">\n              <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"savePlantReturns()\" data-dismiss=\"modal\"\n                title=\"save task\">Save</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal fade\" id=\"usersList\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n        <div class=\"card-body \">\n          <div class=\"card-header text-center\">\n            <p class=\"col-md-8 ml-auto mr-auto title na-am col-form-label info\">\n              Choose a labour from {{ (project)?.companyName }}\n            </p>\n          </div>\n          <hr>\n          <form class=\"form-horizontal\">\n            <ng-container *ngIf=\"showUsers\">\n              <div class=\"col-md-12 ml-auto mr-auto\">\n                <div class=\"row\">\n                  <label class=\"col-md-4 col-form-label\">User</label>\n                  <div class=\"col-md-8 mr-auto\">\n                    <div class=\"form-group\" style=\"margin-top: -8px; margin-left: 15px; margin-bottom: -2px;\">\n                      :{{(companystaff)?.name }}\n                      <button type=\"text\" name=\"taskChampion\" class=\"btn btn-icon primary btn-link \"\n                        (click)=\"toggleUsersTable(); toggleChamp()\" rel=\"tooltip\" title=\"select a new staff\">\n                        <i class=\"fa fa-edit fa-fw\"></i>\n                      </button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </ng-container>\n            <div class=\"row\">\n              <div class=\"col-md-8 ml-auto mr-auto\">\n                <div class=\"form-group\">\n                  <ng-container *ngIf=\"showUserTable\">\n                    <div class=\"table-responsive user_table\">\n                      <code>Select a Champion</code>\n                      <table class=\"table\">\n                        <tbody class=\"\">\n                          <tr *ngFor=\"let user of staff | async \" class=\"\">\n                            <td>{{ user.name }}</td>\n                            <td><button class=\"primary btn-link\" (click)=\"selectUser(user)\"> select\n                              </button></td>\n                          </tr>\n                        </tbody>\n                      </table>\n                    </div>\n                  </ng-container>\n                </div>\n              </div>\n            </div>\n          </form>\n          <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n            <div class=\"left-side\">\n              <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n            </div>\n            <div class=\"divider\"></div>\n            <div class=\"right-side\">\n              <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"addLabour()\" data-dismiss=\"modal\"\n                title=\"save task\">Save</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal fade\" id=\"labourerDetail\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\"\n    aria-hidden=\"true\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\" *ngIf=\"labourer\">\n        <div class=\"card-body\" style=\"margin-top:-3em; padding-bottom: 0px;\">\n          <div class=\"card card-plain col-md-12\" style=\"margin-top:-3em; padding-left: 0px; padding-right: 0px\">\n            userDetail\n\n\n            <div class=\"modal-content\">\n              <div class=\"modal-header\">\n                <div class=\"modal-profile ml-auto mr-auto\">\n                  <i class=\"fa fa-address-card\"></i>\n                  <!-- <div class=\"photo\">\n                    <img src=\"{{ (labourer)?.photoURL }}\" width=\"50px\">\n                  </div> -->\n                </div>\n                <p class=\"clrs-h1-font\"> {{ (labourer)?.name }} </p>\n              </div>\n              <div class=\"modal-body\">\n                <div class=\"form-group\">\n                  <label>Mobile number</label>\n                  <p *ngIf=\"labourer.phoneNumber\" class=\"text-info\">{{ labourer.phoneNumber }}</p>\n                  <p *ngIf=\"!labourer.phoneNumber\" class=\"text-warning\">NAN</p>\n                </div>\n                <div class=\"form-group\">\n                  <label>Email</label>\n                  <p *ngIf=\"labourer.email\" class=\"text-info\">{{ labourer.email }}</p>\n                  <p *ngIf=\"!labourer.email\" class=\"text-warning\">NAN</p>\n                </div>\n                <div class=\"form-group\">\n                  <label>Address</label>\n                  <p *ngIf=\"labourer.address\" class=\"text-info card-category\">{{ labourer.address }}</p>\n                  <p *ngIf=\"!labourer.address\" class=\"text-warning\">NAN</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-12\" style=\"padding-bottom: 0px; padding-top: 0px;\">\n          <div class=\"col-md-10\">\n          </div>\n          <div class=\"col-md-2\" style=\"padding-bottom: 13px; padding-left: 13px;\">\n            <button type=\"button\" class=\"btn-link\" data-dismiss=\"modal\">Back</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/projects/view/view.component.ts":
/*!*************************************************!*\
  !*** ./src/app/projects/view/view.component.ts ***!
  \*************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var app_services_task_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var app_services_enterprise_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/services/enterprise.service */ "./src/app/services/enterprise.service.ts");
/* harmony import */ var app_services_personal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/services/personal.service */ "./src/app/services/personal.service.ts");
/* harmony import */ var app_services_initialise_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/services/initialise.service */ "./src/app/services/initialise.service.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var ViewComponent = /** @class */ (function () {
    /*   end */
    function ViewComponent(afAuth, is, router, authService, afs, pns, ts, es, ps, as) {
        this.afAuth = afAuth;
        this.is = is;
        this.router = router;
        this.authService = authService;
        this.afs = afs;
        this.pns = pns;
        this.ts = ts;
        this.es = es;
        this.ps = ps;
        this.as = as;
        this.show = false;
        this.showEnterprise = false;
        this.buttonName = 'Show';
        this.btnName = 'Show';
        this.inviteCompany = false;
        this.showAsset = true;
        this.btnTable = 'Show';
        this.btnAssets = 'Show';
        this.btnAsset = 'Show';
        this.showUserTable = false;
        this.showAssetTable = false;
        this.showChamp = false;
        this.showUsers = true;
        this.btnChamp = 'Show';
        this.showChampBtn = true;
        this.showProjectTable = false;
        this.btnProjTable = 'Show';
        this.showProj = true;
        this.btnProj = 'Show';
        this.showProjBtn = true;
        this.showCompanyTable = false;
        this.btnCompanyTable = 'Show';
        this.showCompany = true;
        this.showCompanyName = false;
        this.btnCompany = 'Show';
        this.showDate = false;
        this.hideDateBtn = true;
        this.selectedActionItems = [];
        this.companyActions = [];
        this.selectedActionParticipants = [];
        this.OutstandingTasks = [];
        this.CurrentTAsks = [];
        this.UpcomingTAsks = [];
        this.ShortTermTAsks = [];
        this.MediumTermTAsks = [];
        this.LongTermTAsks = [];
        this.projectTasks = [];
        this.compOutstandingTasks = [];
        this.compCurrentTAsks = [];
        this.compUpcomingTAsks = [];
        this.compShortTermTAsks = [];
        this.compMediumTermTAsks = [];
        this.compLongTermTAsks = [];
        this.CompanyTasks = [];
        this.Bills = [];
        this.workItems = [];
        this.wItems = [];
        this.showPlantReturns = true;
        this.showBills = false;
        this.showPlantDetail = false;
        this.plantReturns = [];
        this.outstandingCompanyTasks = [];
        this.companyDemoNotes = true;
        this.displayCompany = false;
        this.showCompanies = false;
        this.setCompCurrentTAsks = [];
        this.setCompOutstandingTasks = [];
        this.setCompShortTermTAsks = [];
        this.setCompMediumTermTAsks = [];
        this.setCompLongTermTAsks = [];
        this.setCompUpcomingTAsks = [];
        this.mcompCurrentTAsks = [];
        this.mcompOutstandingTasks = [];
        this.mcompShortTermTAsks = [];
        this.mcompMediumTermTAsks = [];
        this.mcompLongTermTAsks = [];
        this.mcompUpcomingTAsks = [];
        this.displayCompanyReport = false;
        this.labourerLongTermTAsks = [];
        this.labourerMediumTermTAsks = [];
        this.labourerShortTermTAsks = [];
        this.labourerOutstandingTasks = [];
        this.labourerCurrentTAsks = [];
        this.labourerUpcomingTAsks = [];
        this.showProjs = false;
        this.hideProjs = false;
        this.task = is.getTask();
        this.selectedProject = is.getSelectedProject();
        this.userChampion = is.getUserChampion();
        // this.viewCompany = is.getSelectedCompany();
        this.selectedCompany = is.getSelectedCompany();
        this.setCompany = is.getSelectedCompany();
        this.selectedStaff = is.getSelectedStaff();
        this.selectedTask = is.getSelectedTask();
        this.actionItem = is.getWorkItem();
        this.selectedAction = is.getWorkItem();
        this.newWorkItem = is.getWorkItem();
        // this.setItem = { id: "", name: "", unit: "", quantity: 0, rate: 0, amount: 0, champion: null, billID: "", billName: "", projectId: "", projectName: "", createdOn: "", UpdatedOn: "", actualData: null, workStatus: null, complete: false, start: null, end: null, startWeek: "", startDay: "", startDate: "", endDay: "", endDate: "", endWeek: "", taskName: "", taskId: "", companyId: "", companyName: "" };
        this.newBill = is.getAbridgedBill();
        this.rate = "";
        this.locationData = "";
        this.sectorData = "";
        // this.compChampion = is.getCompChampion();
        this.compChampion = { name: "", id: "", email: "", phoneNumber: "", photoURL: "", bus_email: "", address: "", nationalId: "", nationality: "" };
        this.labourer = { name: "", id: "", email: "", phoneNumber: "", photoURL: "", bus_email: "", address: "", nationalId: "", nationality: "" };
        this.projectCompDetail = { id: "", name: "" };
        this.todayDate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY").format('dddd');
        console.log(this.todayDate);
        this.currentDay = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY").dayOfYear();
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY");
        console.log(this.currentDate);
        this.currentYear = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "YYYY-MM-DD").year().toString();
        this.currentQuarter = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "YYYY-MM-DD").quarter().toString();
        this.currentQuarterNaam = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "YYYY-MM-DD");
        this.currentMonth = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "YYYY-MM-DD").month().toString();
        this.currentMonthNaam = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "YYYY-MM-DD");
        this.currentWeek = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY");
        this.day0label = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY").format('dddd');
        this.day1label = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY").add(1, 'd').format('dddd');
        this.day2label = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY").add(2, 'd').format('dddd');
        this.day3label = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY").add(3, 'd').format('dddd');
        this.day4label = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY").add(4, 'd').format('dddd');
        this.day5label = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY").add(5, 'd').format('dddd');
        this.day6label = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY").add(6, 'd').format('dddd');
        this.week0label = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY");
        this.week1label = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY").add(1, 'w');
        this.week2label = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY").add(2, 'w');
        this.week3label = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY").add(3, 'w');
        this.month1label = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY");
        this.month2label = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY").add(1, 'M');
        this.month3label = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY").add(2, 'M');
        this.quarter0label = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY");
        this.quarter1label = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY").add(1, 'Q');
        this.quarter2label = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY").add(2, 'Q');
        this.quarter3label = moment__WEBPACK_IMPORTED_MODULE_7__(this.currentDate, "DD-MM-YYYY").add(3, 'Q');
        this.SIunits = [
            { id: 'hours', name: 'Time(hrs)' },
            { id: 'items', name: 'Items' },
            { id: 'kg', name: 'Kilograms(Kg)' },
            { id: 'm2', name: 'Area(m2)' },
            { id: 'm3', name: 'Volume(m3)' },
            { id: 'mi', name: 'Miles(mi)' },
            { id: 'yd', name: 'Yards(yd)' },
            { id: 'mm', name: 'Millimeters(mm)' },
            { id: 'cm', name: 'Centimeters(cm)' },
            { id: 'm', name: 'Meters(m)' },
            { id: 'Km', name: 'Kilometers(km)' },
            { id: 'in', name: 'Inches(in)' },
            { id: 'ft', name: 'Feet(ft)' },
            { id: 'g', name: 'Grams(g)' },
        ];
    }
    ViewComponent.prototype.userDetails = function () {
        var _this = this;
        var today = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "YYYY-MM-DD");
        this.showActions = false;
        this.hideActions = false;
        this.myDocument = this.afs.collection('Users').doc(this.userId);
        var userDocRef = this.myDocument;
        this.viewActions = userDocRef.collection('WeeklyActions', function (ref) { return ref
            .orderBy('start', 'asc'); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.viewActions.subscribe(function (actions) {
            console.log(actions);
            _this.diaryActionItems = [];
            actions.forEach(function (element) {
                if (moment__WEBPACK_IMPORTED_MODULE_7__(element.startDate).isSameOrAfter(today) || element.complete == false) {
                    if (element.selectedWork === true) {
                        _this.diaryActionItems.push(element);
                    }
                }
            });
            console.log(actions.length);
            console.log(actions);
            _this.actionNo = actions.length;
            if (_this.actionNo == 0) {
                _this.showActions = false;
                _this.hideActions = true;
            }
            else {
                _this.hideActions = false;
                _this.showActions = true;
            }
        });
        // console.log(this.diaryActionItems);
        this.showProjs = false;
        this.hideProjs = false;
        this.projs = [];
        this.myProjects = this.ps.getProjects(this.userId);
        this.myProjects.subscribe(function (projs) {
            console.log(projs);
            _this.projs = projs;
            var projects = projs;
            console.log('Pojs N0' + ' ' + projs.length);
            var noProjects = projs.length;
            _this.projsNo = projects.length;
            if (_this.projsNo == 0) {
                _this.showProjs = false;
                _this.hideProjs = true;
            }
            else {
                _this.showProjs = true;
                _this.hideProjs = false;
            }
        });
    };
    ViewComponent.prototype.showInvite = function () {
        this.inviteCompany = true;
    };
    ViewComponent.prototype.hideInvite = function () {
        this.inviteCompany = false;
    };
    ViewComponent.prototype.showTable = function () {
        this.showCompanies = true;
    };
    ViewComponent.prototype.toggleAssertTable = function () {
        this.showAssetTable = !this.showAssetTable;
        if (this.showAssetTable) {
            this.btnAssets = "Hide";
        }
        else {
            this.btnAssets = "Show";
        }
    };
    ViewComponent.prototype.hideAsset = function () {
        this.showAsset = false;
    };
    ViewComponent.prototype.toggleAsset = function () {
        this.showPlantDetail = !this.showPlantDetail;
        if (this.showPlantDetail)
            this.btnAsset = "Hide";
        else
            this.btnAsset = "Show";
    };
    ViewComponent.prototype.selectSectionBill = function (setSection) {
        console.log(setSection);
    };
    ViewComponent.prototype.minimizeSidebar = function () {
        var body = document.getElementsByTagName('body')[0];
        if (misc.sidebar_mini_active === true) {
            body.classList.remove('sidebar-mini');
            misc.sidebar_mini_active = false;
        }
        else {
            setTimeout(function () {
                body.classList.add('sidebar-mini');
                // misc.sidebar_mini_active = true;
            }, 300);
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    ViewComponent.prototype.incCount = function () {
        this.counter += 1;
    };
    ViewComponent.prototype.decCount = function () {
        this.counter -= 1;
    };
    ViewComponent.prototype.checkLeapYear = function () {
        var leapYear = false;
        var numberOfDays;
        leapYear = moment__WEBPACK_IMPORTED_MODULE_7__(this.currentYear).isLeapYear();
        console.log(leapYear);
        if (leapYear == true) {
            console.log('Its a leapYear');
            numberOfDays = 366;
        }
        else {
            console.log('Its a leapYear');
            numberOfDays = 365;
        }
        return numberOfDays;
    };
    ViewComponent.prototype.changePeriod = function (action, period) {
        console.log(period + " " + action);
        var subPeriod;
        if (period == 'startWeek') {
            switch (action) {
                case 'previous': {
                    subPeriod = 'startDay';
                    var week$ = Number(this.currentWeek);
                    if (this.currentWeek.week() > 1) {
                        this.currentWeek.subtract(1, 'w');
                        this.currentDate.subtract(7, 'd');
                        this.setDay('startDay');
                        console.log(this.currentWeek);
                    }
                    break;
                }
                case 'next': {
                    var week$ = Number(this.currentWeek);
                    if (this.currentWeek.week() < 52) {
                        // this.currentWeek = String(week$ + 1);
                        this.currentWeek.add(1, 'w');
                        this.currentDate.add(7, 'd');
                        console.log(this.currentWeek);
                        this.setDay('startDay');
                        console.log(this.currentWeek);
                    }
                    break;
                }
                default:
                    break;
            }
        }
        if (period == 'startMonth') {
            var ndays = this.currentDate.daysInMonth();
            console.log(ndays);
            switch (action) {
                case 'previous': {
                    var week$ = this.currentWeek.week();
                    var month$ = Number(this.currentMonth);
                    // if (month$ > 0) {
                    //   month$ -= 1; console.log(moment(month$));
                    this.currentMonth = String(month$);
                    this.currentMonthNaam.subtract(1, 'M');
                    this.week0label.subtract(1, 'M');
                    this.week1label.subtract(1, 'M');
                    this.week2label.subtract(1, 'M');
                    this.week3label.subtract(1, 'M');
                    // }
                    break;
                }
                case 'next': {
                    var month$ = Number(this.currentMonth);
                    // if (month$ < 11) {
                    //   month$ += 1; console.log(moment(month$));
                    this.currentMonth = String(month$);
                    this.currentMonthNaam.add(1, 'M');
                    console.log(this.currentWeek.week());
                    this.week0label.add(1, 'M');
                    this.week1label.add(1, 'M');
                    this.week2label.add(1, 'M');
                    this.week3label.add(1, 'M');
                    // }
                    break;
                }
                default:
                    break;
            }
        }
        if (period == 'startQuarter') {
            switch (action) {
                case 'previous': {
                    var quarter$ = Number(this.currentQuarter);
                    // if (quarter$ > 1) {
                    //   this.currentQuarter = String(quarter$ - 1);
                    this.currentQuarterNaam.subtract(1, 'Q');
                    console.log(this.currentQuarter);
                    this.month1label.subtract(1, 'Q');
                    this.month2label.subtract(1, 'Q');
                    this.month3label.subtract(1, 'Q');
                    // }
                    break;
                }
                case 'next': {
                    var quarter$ = Number(this.currentQuarter);
                    // if (quarter$ < 4) {
                    //   this.currentQuarter = String(quarter$ + 1);
                    this.currentQuarterNaam.add(1, 'Q');
                    console.log(this.currentQuarter);
                    this.month1label.add(1, 'Q');
                    this.month2label.add(1, 'Q');
                    this.month3label.add(1, 'Q');
                    // }
                    break;
                }
                default:
                    break;
            }
        }
        if (period == 'startYear') {
            subPeriod = 'startQuarter';
            switch (action) {
                case 'previous': {
                    var year$ = Number(this.currentYear);
                    this.currentYear = String(year$ - 1);
                    console.log(this.currentYear);
                    this.quarter0label.subtract(1, 'y');
                    this.quarter1label.subtract(1, 'y');
                    this.quarter2label.subtract(1, 'y');
                    this.quarter3label.subtract(1, 'y');
                    break;
                }
                case 'next': {
                    var year$ = Number(this.currentYear);
                    this.currentYear = String(year$ + 1);
                    console.log(this.currentYear);
                    this.quarter0label.add(1, 'y');
                    this.quarter1label.add(1, 'y');
                    this.quarter2label.add(1, 'y');
                    this.quarter3label.add(1, 'y');
                    break;
                }
                default:
                    break;
            }
        }
        else {
            console.log('something not right');
        }
        // this.setPeriod(period);
    };
    ViewComponent.prototype.setDay = function (day) {
        console.log(this.period);
        var dayNo = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), 'DD-MM-YYYY').dayOfYear();
        var period = 'startDay';
        if (day == 'day0') {
            console.log(dayNo);
            console.log(this.day0label);
            this.period = moment__WEBPACK_IMPORTED_MODULE_7__(this.currentDate, "DD-MM-YYYY").dayOfYear().toString();
            console.log(this.period);
            this.todayTasks = this.viewDateTasks(period, this.period);
        }
        if (day == 'day1') {
            this.period = moment__WEBPACK_IMPORTED_MODULE_7__(this.currentDate, "DD-MM-YYYY").add(1, 'd').dayOfYear().toString();
            console.log(this.period);
            this.day1Tasks = this.viewDateTasks(period, this.period);
        }
        if (day == 'day2') {
            this.period = moment__WEBPACK_IMPORTED_MODULE_7__(this.currentDate, "DD-MM-YYYY").add(2, 'd').dayOfYear().toString();
            console.log(this.period);
            this.day2Tasks = this.viewDateTasks(period, this.period);
        }
        if (day == 'day3') {
            this.period = moment__WEBPACK_IMPORTED_MODULE_7__(this.currentDate, "DD-MM-YYYY").add(3, 'd').dayOfYear().toString();
            console.log(this.period);
            this.day3Tasks = this.viewDateTasks(period, this.period);
        }
        if (day == 'day4') {
            this.period = moment__WEBPACK_IMPORTED_MODULE_7__(this.currentDate, "DD-MM-YYYY").add(4, 'd').dayOfYear().toString();
            console.log(this.period);
            this.day4Tasks = this.viewDateTasks(period, this.period);
        }
        if (day == 'day5') {
            this.period = moment__WEBPACK_IMPORTED_MODULE_7__(this.currentDate, "DD-MM-YYYY").add(5, 'd').dayOfYear().toString();
            console.log(this.period);
            this.day5Tasks = this.viewDateTasks(period, this.period);
        }
        if (day == 'day6') {
            this.period = moment__WEBPACK_IMPORTED_MODULE_7__(this.currentDate, "DD-MM-YYYY").add(6, 'd').dayOfYear().toString();
            console.log(this.period);
            this.day6Tasks = this.viewDateTasks(period, this.period);
        }
    };
    ViewComponent.prototype.setWeek = function (week) {
        var period = 'startWeek';
        if (week == 'week0') {
            console.log(week);
            this.period = String(this.week0label.week());
            this.week0Tasks = this.viewDateTasks(period, this.period);
            console.log(this.period);
        }
        if (week == 'week1') {
            this.period = String(this.week1label.week());
            this.week1Tasks = this.viewDateTasks(period, this.period);
            console.log(this.period);
        }
        if (week == 'week2') {
            this.period = String(this.week2label.week());
            this.week2Tasks = this.viewDateTasks(period, this.period);
            console.log(this.period);
        }
        if (week == 'week3') {
            this.period = String(this.week3label.week());
            this.week3Tasks = this.viewDateTasks(period, this.period);
            console.log(this.period);
        }
    };
    ViewComponent.prototype.setMonth = function (month) {
        var period = 'startMonth';
        if (month == 'month1') {
            console.log(month);
            this.period = String(this.month1label.month());
            this.qYear = String(this.month1label.year());
            // this.month1Tasks = this.viewDateTasks(period, this.period);
            this.month1Tasks = this.mviewDateTasks(period, this.period, this.qYear);
            console.log(this.period);
        }
        if (month == 'month2') {
            this.period = String(this.month2label.month());
            this.qYear = String(this.month2label.year());
            // this.month2Tasks = this.viewDateTasks(period, this.period);
            this.month2Tasks = this.mviewDateTasks(period, this.period, this.qYear);
            console.log(this.period);
        }
        if (month == 'month3') {
            this.period = String(this.month3label.month());
            this.qYear = String(this.month3label.year());
            // this.month3Tasks = this.viewDateTasks(period, this.period);
            this.month3Tasks = this.mviewDateTasks(period, this.period, this.qYear);
            console.log(this.period);
        }
    };
    ViewComponent.prototype.setQuarter = function (quarter) {
        var period = 'startQuarter';
        if (quarter == 'quarter0') {
            console.log(quarter);
            this.period = String(this.quarter0label.quarter());
            this.qYear = String(this.quarter0label.year());
            this.quarter0Tasks = this.mviewDateTasks(period, this.period, this.qYear);
            console.log(this.period);
        }
        if (quarter == 'quarter1') {
            this.period = String(this.quarter1label.quarter());
            this.qYear = String(this.quarter1label.year());
            this.quarter1Tasks = this.mviewDateTasks(period, this.period, this.qYear);
            console.log(this.period);
        }
        if (quarter == 'quarter2') {
            this.period = String(this.quarter2label.quarter());
            this.qYear = String(this.quarter2label.year());
            this.quarter2Tasks = this.viewDateTasks(period, this.period);
            console.log(this.period);
        }
        if (quarter == 'quarter3') {
            this.period = String(this.quarter3label.quarter());
            this.qYear = String(this.quarter3label.year());
            this.quarter3Tasks = this.mviewDateTasks(period, this.period, this.qYear);
            console.log(this.period);
        }
    };
    ViewComponent.prototype.mviewDateTasks = function (testPeriod, checkPeriod, year) {
        console.log(this.project.companyId);
        // let viewTasksRef = this.afs.collection('Enterprises').doc(this.projectCompId).collection('projects').doc(this.projectId);
        var viewTasksRef = this.afs.collection('Enterprises').doc(this.project.companyId).collection('projects').doc(this.projectId);
        this.viewTasks = viewTasksRef.collection('tasks', function (ref) { return ref
            .where(testPeriod, '==', checkPeriod)
            .where('startYear', '==', year); })
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        return this.viewTasks;
    };
    ViewComponent.prototype.viewDateTasks = function (testPeriod, checkPeriod) {
        console.log(this.project.companyId);
        // this.viewTasks = this.afs.collection('Users').doc(this.userId).collection('tasks', ref => { return ref.where(testPeriod, '==', checkPeriod) }).snapshotChanges().pipe(
        var viewTasksRef = this.afs.collection('Enterprises').doc(this.project.companyId)
            .collection('projects').doc(this.projectId);
        this.viewTasks = viewTasksRef.collection('tasks', function (ref) {
            return ref
                .where(testPeriod, '==', checkPeriod);
            // .orderBy('start')
        }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        return this.viewTasks;
    };
    ViewComponent.prototype.showTasks = function (company) {
        this.companyIntrayTasks = this.ps.getCompanyTasks(company.id, this.projectId);
    };
    ViewComponent.prototype.viewUserReport = function (man) {
        var _this = this;
        this.compLabourer = man;
        this.displayCompanyReport = true;
        console.log(man);
        var proId = this.projectId;
        this.compLabourerTasks = this.afs.collection('Users').doc(this.userId).collection('tasks', function (ref) {
            return ref
                .where('champion.id', '==', man.id)
                .where('projectId', '==', proId)
                .where('companyId', '==', _this.entId)
                .limit(5);
        }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            _this.userTaskData = data;
            _this.userTaskData.when = moment__WEBPACK_IMPORTED_MODULE_7__(data.start, "YYYY-MM-DD").fromNow().toString();
            _this.userTaskData.then = moment__WEBPACK_IMPORTED_MODULE_7__(data.finish, "YYYY-MM-DD").fromNow().toString();
            // if (moment(data.finish).isBefore(today)) {
            //   this.outstandingDptTasks.push(data);
            // };
            return __assign({ id: id }, data);
        }); }));
        this.compLabourerTasks.subscribe(function (ptasks) {
            _this.labourerCurrentTAsks = [];
            _this.labourerOutstandingTasks = [];
            _this.labourerShortTermTAsks = [];
            _this.labourerMediumTermTAsks = [];
            _this.labourerLongTermTAsks = [];
            ptasks.forEach(function (data) {
                var today = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "YYYY-MM-DD");
                if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isSameOrBefore(today) && moment__WEBPACK_IMPORTED_MODULE_7__(data.finish).isSameOrAfter(today)) {
                    _this.labourerCurrentTAsks.push(data);
                }
                ;
                // outstanding tasks
                if (moment__WEBPACK_IMPORTED_MODULE_7__(data.finish).isBefore(today)) {
                    _this.labourerOutstandingTasks.push(data);
                    console.log(_this.compOutstandingTasks);
                }
                ;
                // Upcoming tasks
                if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isAfter(today)) {
                    _this.labourerUpcomingTAsks.push(data);
                    if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isBefore(today.add(3, "month"))) {
                        _this.labourerShortTermTAsks.push(data);
                    }
                    if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isAfter(today.add(6, "month"))) {
                        _this.labourerMediumTermTAsks.push(data);
                    }
                    if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isAfter(today.add(12, "month"))) {
                        _this.labourerLongTermTAsks.push(data);
                    }
                }
                ;
            });
        });
        this.labourerCompletedTasks = this.afs.collection('Users').doc(this.projectId).collection('tasks', function (ref) { return ref
            .where('complete', '==', true); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    };
    ViewComponent.prototype.showCompName = function () {
        this.showCompanyName = true;
    };
    ViewComponent.prototype.refreshProject = function () {
        console.log(this.project);
        // let projectCompId = this.projectCompId;
        var projectCompId = this.projectCompId;
        console.log(this.projectCompId);
        // let compId = this.project.companyId;    
        var compId = this.projectCompId;
        var proId = this.projectId;
        console.log(proId);
        this.coloursUsers = this.afs.collection('Users').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.projectsCollection = this.afs.collection('/Users').doc(this.userId).collection('projects').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.enterpriseCollection = this.afs.collection('/Users').doc(this.userId).collection('myenterprises').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        // this.initDiary();
    };
    ViewComponent.prototype.addProjectTask = function () {
        console.log(this.task);
        var pr;
        console.log(this.selectedCompany);
        this.task.by = this.user.displayName;
        this.task.byId = this.userId;
        console.log(this.start);
        console.log(this.finish);
        var newClassification = { name: "Work", createdOn: new Date().toISOString(), id: "colourWorkId", plannedTime: "", actualTime: "", Varience: "" };
        this.task.classification = newClassification;
        this.task.createdOn = new Date().toISOString();
        this.task.start = this.start, "YYYY-MM-DD";
        this.task.finish = this.finish, "YYYY-MM-DD";
        this.task.startDay = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.start, "YYYY-MM-DD").dayOfYear());
        this.task.startWeek = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.start, "YYYY-MM-DD").week());
        this.task.startMonth = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.start, "YYYY-MM-DD").month());
        this.task.startQuarter = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.start, "YYYY-MM-DD").quarter());
        this.task.startYear = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.start, "YYYY-MM-DD").year());
        this.task.finishDay = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").dayOfYear());
        this.task.finishWeek = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").week());
        this.task.finishMonth = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").month());
        this.task.finishQuarter = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").quarter());
        this.task.finishYear = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").year());
        this.task.complete = false;
        console.log(this.task);
        console.log(this.task.start);
        console.log(this.task.startDay);
        this.task.companyName = this.selectedCompany.name;
        this.task.companyId = this.selectedCompany.id;
        //set task project attributes
        this.task.projectId = this.projectId;
        this.task.projectName = this.project.name;
        this.task.projectType = this.project.type;
        //set task champion attributes
        this.task.champion = this.userChampion;
        console.log(this.task);
        this.ts.addProjectTask(this.task, this.selectedCompany);
        this.start = "";
        this.finish = "";
        this.selectedCompany = { name: "", by: "", byId: "", createdOn: "", id: "", bus_email: "", location: "", sector: "", participants: null, champion: null, address: "", telephone: "", services: null, taxDocument: "", HnSDocument: "", IndustrialSectorDocument: "" };
        this.userChampion = { name: "", id: "", email: "", phoneNumber: "", photoURL: "", bus_email: "", address: "", nationalId: "", nationality: "" };
        this.task = { name: "", champion: null, projectName: "", department: "", departmentId: "", start: "", startDay: "", startWeek: "", startMonth: "", startQuarter: "", startYear: "", finish: "", finishDay: "", finishWeek: "", finishMonth: "", finishQuarter: "", finishYear: "", by: "", createdOn: "", projectId: "", byId: "", projectType: "", companyName: "", companyId: "", trade: "", section: null, complete: null, id: "", participants: null, status: "", classification: null };
        this.selectedProject = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", completion: "" };
    };
    ViewComponent.prototype.addProjectTaskTRY = function () {
        console.log(this.task);
        var pr;
        console.log(this.selectedCompany);
        this.task.by = this.user.displayName;
        this.task.byId = this.userId;
        console.log(this.start);
        console.log(this.finish);
        // setting dates
        this.task.createdOn = new Date().toISOString();
        // this.task.start = this.start.toISOString()
        this.task.start = this.start, "YYYY-MM-DD";
        this.task.finish = this.finish, "YYYY-MM-DD"; /* .format('LLLL') */
        this.task.startDay = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.start, "YYYY-MM-DD").dayOfYear());
        this.task.startWeek = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.start, "YYYY-MM-DD").week());
        this.task.startMonth = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.start, "YYYY-MM-DD").month());
        this.task.startQuarter = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.start, "YYYY-MM-DD").quarter());
        this.task.startYear = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.start, "YYYY-MM-DD").year());
        this.task.finishDay = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").dayOfYear());
        this.task.finishWeek = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").week());
        this.task.finishMonth = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").month());
        this.task.finishQuarter = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").quarter());
        this.task.finishYear = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").year());
        this.task.complete = false;
        console.log(this.task);
        console.log(this.task.start);
        console.log(this.task.startDay);
        console.log('Task' + ' ' + this.task.name);
        console.log('Company' + ' ' + this.selectedCompany.name);
        this.ts.addProjectTask(this.task, this.selectedCompany);
        this.start = "";
        this.finish = "";
        this.selectedCompany = { name: "", by: "", byId: "", createdOn: "", id: "", bus_email: "", location: "", sector: "", participants: null, champion: null, address: "", telephone: "", services: null, taxDocument: "", HnSDocument: "", IndustrialSectorDocument: "" };
        this.userChampion = { name: "", id: "", email: "", phoneNumber: "", photoURL: "", bus_email: "", address: "", nationalId: "", nationality: "" };
        this.task = { name: "", champion: null, projectName: "", department: "", departmentId: "", start: "", startDay: "", startWeek: "", startMonth: "", startQuarter: "", startYear: "", finish: "", finishDay: "", finishWeek: "", finishMonth: "", finishQuarter: "", finishYear: "", by: "", createdOn: "", projectId: "", byId: "", projectType: "", companyName: "", companyId: "", trade: "", section: null, complete: null, id: "", participants: null, status: "", classification: null };
        this.selectedProject = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", completion: "" };
    };
    ViewComponent.prototype.newTask = function () {
        console.log(this.task);
        var pr;
        console.log(this.selectedCompany);
        this.task.by = this.user.displayName;
        this.task.byId = this.userId;
        console.log(this.start);
        console.log(this.finish);
        this.task.createdOn = new Date().toISOString();
        this.task.start = this.start, "YYYY-MM-DD";
        this.task.finish = this.finish, "YYYY-MM-DD";
        this.task.startDay = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.start, "YYYY-MM-DD").dayOfYear());
        this.task.startWeek = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.start, "YYYY-MM-DD").week());
        this.task.startMonth = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.start, "YYYY-MM-DD").month());
        this.task.startQuarter = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.start, "YYYY-MM-DD").quarter());
        this.task.startYear = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.start, "YYYY-MM-DD").year());
        this.task.finishDay = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").subtract(2, 'd').dayOfYear());
        this.task.finishWeek = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").week());
        this.task.finishMonth = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").month());
        this.task.finishQuarter = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").quarter());
        this.task.finishYear = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").year());
        this.task.complete = false;
        console.log(this.task);
        console.log(this.task.start);
        console.log(this.task.startDay);
        this.task.companyName = this.selectedCompany.name;
        this.task.companyId = this.selectedCompany.id;
        this.task.projectId = this.projectId;
        this.task.projectName = this.project.name;
        this.task.projectType = this.project.type;
        this.task.champion = this.userChampion;
        console.log(this.task);
        this.ts.addTask(this.task, this.selectedCompany, "");
        this.start = "";
        this.finish = "";
        this.selectedCompany = { name: "", by: "", byId: "", createdOn: "", id: "", bus_email: "", location: "", sector: "", participants: null, champion: null, address: "", telephone: "", services: null, taxDocument: "", HnSDocument: "", IndustrialSectorDocument: "" };
        this.userChampion = { name: "", id: "", email: "", phoneNumber: "", photoURL: "", bus_email: "", address: "", nationalId: "", nationality: "" };
        this.task = { name: "", champion: null, projectName: "", department: "", departmentId: "", start: "", startDay: "", startWeek: "", startMonth: "", startQuarter: "", startYear: "", finish: "", finishDay: "", finishWeek: "", finishMonth: "", finishQuarter: "", finishYear: "", by: "", createdOn: "", projectId: "", byId: "", projectType: "", companyName: "", companyId: "", trade: "", section: null, complete: null, id: "", participants: null, status: "", classification: null };
        this.selectedProject = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", completion: "" };
    };
    //00000000000000000000000000000000000000000000000000000000000000000
    ViewComponent.prototype.toggle = function () {
        this.show = !this.show;
        if (this.show)
            this.buttonName = "Hide";
        else
            this.buttonName = "Show";
    };
    ViewComponent.prototype.toggleEnt = function () {
        this.showEnterprise = !this.showEnterprise;
        if (this.showEnterprise)
            this.buttonName = "Hide";
        else
            this.buttonName = "Show";
    };
    // hideChampBtn() {
    //   this.showChampBtn = false;
    // }
    ViewComponent.prototype.toggleUsersTable = function () {
        this.showUserTable = !this.showUserTable;
        if (this.showUserTable) {
            this.btnTable = "Hide";
        }
        else {
            this.btnTable = "Show";
        }
    };
    ViewComponent.prototype.toggleProjTable = function () {
        this.showProjectTable = !this.showProjectTable;
        if (this.showProjectTable) {
            this.btnProjTable = "Hide";
        }
        else {
            this.btnProjTable = "Show";
        }
    };
    ViewComponent.prototype.toggleCompTable = function () {
        this.showCompanyTable = !this.showCompanyTable;
        if (this.showCompanyTable) {
            this.btnCompanyTable = "Hide";
        }
        else {
            this.btnCompanyTable = "Show";
        }
    };
    ViewComponent.prototype.showDatefield = function () {
        this.showDate = true;
        this.hideDateBtn = false;
    };
    ViewComponent.prototype.hideDatefield = function () {
        this.showDate = false;
        this.hideDateBtn = true;
    };
    // hideProjBtn() {
    //   this.showProjBtn = false;
    // }
    ViewComponent.prototype.toggleProj = function () {
        this.showProj = !this.showProj;
        if (this.showProj)
            this.btnProj = "Hide";
        else
            this.btnProj = "Show";
    };
    // hideCompBtn() {
    //   this.showCompanyBtn = false;
    // }
    ViewComponent.prototype.toggleComp = function () {
        this.showCompany = !this.showCompany;
        if (this.showCompany)
            this.btnCompany = "Hide";
        else
            this.btnCompany = "Show";
    };
    ViewComponent.prototype.selectColoursUser = function (x) {
        if (x.address == "" || x.address == null || x.address == undefined) {
            x.address = "";
        }
        else {
        }
        if (x.bus_email == "" || x.bus_email == null || x.bus_email == undefined) {
            x.bus_email = "";
        }
        else {
        }
        if (x.nationalId == "" || x.nationalId == null || x.nationalId == undefined) {
            x.nationalId = "";
        }
        else {
        }
        if (x.nationality == "" || x.nationality == null || x.nationality == undefined) {
            x.nationality = "";
        }
        else {
        }
        var cUser = {
            name: x.name,
            email: x.email,
            id: x.id,
            phoneNumber: x.phoneNumber,
            photoURL: x.photoURL,
            bus_email: x.bus_email,
            address: x.address,
            nationalId: x.nationalId,
            nationality: x.nationality
        };
        this.userChampion = cUser;
        console.log(x);
        console.log(this.userChampion);
        this.toggleChamp();
        this.toggleUsersTable();
    };
    ViewComponent.prototype.assignLabourer = function (x) {
        if (x.address == "" || x.address == null || x.address == undefined) {
            x.address = "";
        }
        else {
        }
        if (x.bus_email == "" || x.bus_email == null || x.bus_email == undefined) {
            x.bus_email = "";
        }
        else {
        }
        if (x.nationalId == "" || x.nationalId == null || x.nationalId == undefined) {
            x.nationalId = "";
        }
        else {
        }
        if (x.nationality == "" || x.nationality == null || x.nationality == undefined) {
            x.nationality = "";
        }
        else {
        }
        console.log(x);
        this.userChampion = x;
        console.log(this.userChampion);
        this.toggleChamp();
        this.toggleUsersTable();
    };
    ViewComponent.prototype.toggleChamp = function () {
        this.showChamp = !this.showChamp;
        if (this.showChamp)
            this.btnChamp = "Hide";
        else
            this.btnChamp = "Show";
    };
    ViewComponent.prototype.showChampForm = function () {
        this.showChamp = true;
    };
    ViewComponent.prototype.selectTask = function (TAsk) {
        console.log(TAsk);
        this.selectedTask = TAsk;
    };
    ViewComponent.prototype.selectTask2 = function (TAsk) {
        console.log(TAsk);
        this.selectedTask = TAsk;
    };
    ViewComponent.prototype.selectCompany = function (company) {
        var compUid = company.id;
        console.log(company);
        this.selectedCompany = company;
        console.log(this.selectedCompany);
        this.toggleComp();
        this.showChampForm();
        this.toggleCompTable();
        this.compstaff = this.ps.getProCompanyLabour(this.projectId, compUid);
    };
    ViewComponent.prototype.selectSection = function (section) {
        this.section = section;
    };
    ViewComponent.prototype.chooseCompany = function (company) {
        console.log(company);
        this.viewCompany = company;
        console.log(this.viewCompany);
        this.compChampion = this.viewCompany.champion;
        console.log(this.compChampion);
        this.selectedCompany = company;
        console.log(this.selectedCompany);
    };
    ViewComponent.prototype.addToCompany = function () {
        console.log(this.selectedCompany.name);
        console.log(this.selectedTask);
        this.ts.addToCompany(this.selectedTask, this.selectedCompany);
        this.selectedTask = this.is.getSelectedTask();
        this.selectedCompany = this.is.getSelectedCompany();
    };
    ViewComponent.prototype.comment = function (comment) {
        var commentData = {
            by: this.myData,
            comment: comment,
            createdOn: new Date().toISOString(),
        };
        var task = this.selectedTask;
        console.log(commentData);
        var entDepStafftRef;
        var entDeptRef;
        var tasksRef = this.afs.collection('tasks').doc(task.id).collection('comments');
        var userRef = this.afs.collection('Users').doc(task.byId).collection('tasks').doc(task.id).collection('comments');
        var userProjRef = this.afs.collection('Users').doc(task.byId).collection('projects').doc(task.projectId).collection('tasks').doc(task.id).collection('comments');
        var champRef = this.afs.collection('Users').doc(task.champion.id).collection('tasks').doc(task.id).collection('comments');
        var champProjRef = this.afs.collection('Users').doc(task.champion.id).collection('projects').doc(task.projectId).collection('tasks').doc(task.id).collection('comments');
        var entTaskChamp = this.afs.collection('Enterprises').doc(task.companyId).collection('Participants').doc(task.champion.id).collection('tasks').doc(task.id).collection('comments');
        var entRef = this.afs.collection('Enterprises').doc(task.companyId).collection('tasks').doc(task.id).collection('comments');
        var entProjRef = this.afs.collection('Enterprises').doc(task.companyId).collection('projects').doc(task.projectId).collection('tasks').doc(task.id).collection('comments');
        var projectsRef = this.afs.collection('Projects').doc(task.projectId).collection('tasks').doc(task.id).collection('comments');
        var projectCompanyRef = this.afs.collection('Projects').doc(task.projectId).collection('enterprises').doc(task.companyId).collection('tasks').doc(task.id).collection('comments');
        if (task.departmentId != "") {
            entDeptRef = this.afs.collection('Enterprises').doc(task.companyId).collection('departments').doc(task.departmentId).collection('tasks').doc(task.id).collection('comments');
            entDepStafftRef = this.afs.collection('Enterprises').doc(task.companyId).collection('departments').doc(task.departmentId).collection('Participants')
                .doc(task.champion.id).collection('tasks').doc(task.id).collection('comments');
        }
        //set task under a user
        userRef.add(commentData).then(function (Ref) {
            var newTaskId = Ref.id;
            userRef.doc(newTaskId).update({ 'id': newTaskId });
            //set comment champ task under a enterprise
            entTaskChamp.doc(newTaskId).set(commentData);
            //update id for comment champ task under a enterprise
            entTaskChamp.doc(newTaskId).update({ 'id': newTaskId });
            //set comment task under a tasks
            tasksRef.doc(newTaskId).set(commentData);
            //update id for comment task under a tasks
            tasksRef.doc(newTaskId).update({ 'id': newTaskId });
            //set comment task under a company
            entRef.doc(newTaskId).set(commentData);
            //update id for comment task under a company
            entRef.doc(newTaskId).update({ 'id': newTaskId });
            if (task.departmentId != "") {
                //set comment task under a enterprise dept
                entDeptRef.doc(newTaskId).set(commentData);
                //update id for comment task under a enterprise dept
                entDeptRef.doc(newTaskId).update({ 'id': newTaskId });
                //set champ task under a enterprise dept
                entDepStafftRef.doc(newTaskId).set(commentData);
                //update id for comment champ task under a enterprise dept
                entDepStafftRef.doc(newTaskId).update({ 'id': newTaskId });
            }
            if (task.projectType === 'Enterprise') {
                console.log(Ref);
                //set comment task under a champion
                champRef.doc(newTaskId).set(commentData);
                champProjRef.doc(newTaskId).set(commentData);
                // set comment task in user project tasks
                userProjRef.doc(newTaskId).set(commentData);
                //set comment task under a project
                projectsRef.doc(newTaskId).set(commentData);
                //set comment task under a company
                entProjRef.doc(newTaskId).set(commentData);
                //set comment task under a projectCompanyRef
                projectCompanyRef.doc(newTaskId).set(commentData);
                //update comment task id under a company
                entProjRef.doc(newTaskId).update({ 'id': newTaskId });
                // update id for comment task in user project tasks
                userProjRef.doc(newTaskId).update({ 'id': newTaskId });
                // update id for comment champion Task
                champRef.doc(newTaskId).update({ 'id': newTaskId });
                champProjRef.doc(newTaskId).update({ 'id': newTaskId });
                //update id for comment task under a project
                projectsRef.doc(newTaskId).update({ 'id': newTaskId });
                projectCompanyRef.doc(newTaskId).update({ 'id': newTaskId });
            }
            ;
        });
    };
    ViewComponent.prototype.addToStaff = function () {
        console.log(this.selectedStaff.name);
        console.log(this.selectedTask);
        this.ts.allocateTask(this.selectedTask, this.selectedStaff);
        this.selectedTask = this.is.getSelectedTask();
        this.selectedStaff = this.is.getSelectedStaff();
    };
    ViewComponent.prototype.showCompTasks = function (entID) {
        this.compTasks = this.ts.getEntepriseTasks(this.projectId, entID);
    };
    ViewComponent.prototype.selectProject = function (proj) {
        console.log(proj);
        this.proj_ID = proj.id;
        this.selectedProject = proj;
        this.toggleProj();
        this.toggleProjTable();
    };
    ViewComponent.prototype.selectStaff = function (staff) {
        if (staff.address == "" || staff.address == null || staff.address == undefined) {
            staff.address = "";
        }
        else {
        }
        if (staff.bus_email == "" || staff.bus_email == null || staff.bus_email == undefined) {
            staff.bus_email = "";
        }
        else {
        }
        if (staff.nationalId == "" || staff.nationalId == null || staff.nationalId == undefined) {
            staff.nationalId = "";
        }
        else {
        }
        if (staff.nationality == "" || staff.nationality == null || staff.nationality == undefined) {
            staff.nationality = "";
        }
        else {
        }
        console.log(staff);
        this.selectedStaff = staff;
    };
    ViewComponent.prototype.showUserTasks = function (staffId) {
        this.staffTasks = this.ps.getStaffProjTasks(this.projectId, staffId);
    };
    ViewComponent.prototype.showTaskActions = function (task) {
        this.selectTask(task);
        console.log(task);
        this.taskActions = this.ps.getStaffTasksActions(this.staffId, this.projectId, task.id);
    };
    ViewComponent.prototype.newActionOLD = function (action) {
        console.log(action);
        action.taskName = this.selectedTask.name;
        action.taskId = this.selectedTask.id;
        action.projectId = this.selectedTask.projectId;
        action.projectName = this.selectedTask.projectName;
        action.companyId = this.selectedTask.companyId;
        action.companyName = this.selectedTask.companyName;
        // set Time
        action.startDate = moment__WEBPACK_IMPORTED_MODULE_7__(action.startDate).format('L');
        action.startWeek = moment__WEBPACK_IMPORTED_MODULE_7__(action.startDate, 'MM-DD-YYYY').week().toString();
        action.startDay = moment__WEBPACK_IMPORTED_MODULE_7__(action.startDate, 'MM-DD-YYYY').format('ddd').toString();
        action.endDate = moment__WEBPACK_IMPORTED_MODULE_7__(action.endDate).format('L');
        action.endWeek = moment__WEBPACK_IMPORTED_MODULE_7__(action.endDate, 'MM-DD-YYYY').week().toString();
        action.endDay = moment__WEBPACK_IMPORTED_MODULE_7__(action.endDate, 'MM-DD-YYYY').format('ddd').toString();
        // set Champion
        action.champion = this.myData;
        var mooom = action;
        console.log(mooom);
        console.log('Work Action =>' + '' + mooom.id);
        console.log('the task-->' + this.selectedTask.name + " " + this.selectedTask.id);
        console.log('the action-->' + action.name);
        var userProjectDoc = this.afs.collection('Users').doc(this.staffId).collection('projects').doc(this.projectId);
        var userActionRef = userProjectDoc.collection('tasks').doc(this.selectedTask.id).collection('workItems');
        var cmpProjectDoc = this.afs.collection('Projects').doc(this.projectId).collection('enterprises').doc(this.selectedTask.companyId);
        var cmpProActions = cmpProjectDoc.collection('tasks').doc(this.selectedTask.id).collection('workItems');
        var projectTaskDoc = this.afs.collection('Projects').doc(this.projectId);
        var projectTaskActions = projectTaskDoc.collection('tasks').doc(this.selectedTask.id).collection('workItems');
        var projectDoc = this.afs.collection('Enterprises').doc(this.selectedTask.companyId).collection('projects').doc(this.projectId);
        var actionRef = projectDoc.collection('tasks').doc(this.selectedTask.id).collection('workItems');
        var EntRef = this.afs.collection('Enterprises').doc(this.selectedTask.companyId).collection('tasks').doc(this.selectedTask.id).collection('workItems');
        // EntRef.doc(action.id).set(action);
        // cmpProActions.doc(action.id).set(action);
        // actionRef.doc(action.id).set(action);
        // userActionRef.doc(action.id).set(action);
        // projectTaskActions.doc(action.id).set(action);
    };
    ViewComponent.prototype.newAction = function (startDate, endDate) {
        console.log(this.setItem);
        var newClassification = { name: 'Work', createdOn: new Date().toISOString(), id: 'colourWorkId', plannedTime: "", actualTime: "", Varience: "" };
        this.setItem.taskName = this.selectedTask.name;
        this.setItem.taskId = this.selectedTask.id;
        this.setItem.projectId = this.selectedTask.projectId;
        this.setItem.projectName = this.selectedTask.projectName;
        this.setItem.companyId = this.selectedTask.companyId;
        this.setItem.companyName = this.selectedTask.companyName;
        this.setItem.classification = newClassification;
        this.setItem.classificationName = 'Work';
        this.setItem.classificationId = 'colourWorkId';
        this.setItem.type = "planned";
        // set Time 
        console.log('' + '' + moment__WEBPACK_IMPORTED_MODULE_7__(startDate, 'YYYY-MM-DD').format('L'));
        this.setItem.startDate = moment__WEBPACK_IMPORTED_MODULE_7__(startDate, 'YYYY-MM-DD').format('L');
        this.setItem.startWeek = moment__WEBPACK_IMPORTED_MODULE_7__(this.startDate, 'YYYY-MM-DD').week().toString();
        this.setItem.startDay = moment__WEBPACK_IMPORTED_MODULE_7__(this.startDate, 'YYYY-MM-DD').format('ddd');
        this.setItem.endDate = moment__WEBPACK_IMPORTED_MODULE_7__(endDate, 'YYYY-MM-DD').format('L');
        this.setItem.endWeek = moment__WEBPACK_IMPORTED_MODULE_7__(this.endDate, 'YYYY-MM-DD').week().toString();
        this.setItem.endDay = moment__WEBPACK_IMPORTED_MODULE_7__(this.endDate, 'YYYY-MM-DD').format('ddd');
        // set Champion
        // this.setItem.champion = this.myData;
        this.setItem.champion = this.selectedTask.champion;
        var mooom = this.setItem;
        console.log(mooom);
        console.log('Work Action =>' + '' + mooom.id);
        console.log('the task-->' + this.selectedTask.name + " " + this.selectedTask.id);
        console.log('the action-->' + this.setItem.name);
        var userProjectDoc = this.afs.collection('Users').doc(this.staffId).collection('projects').doc(this.projectId);
        var userActionRef = userProjectDoc.collection('tasks').doc(this.selectedTask.id).collection('workItems');
        var userCmpProjectDoc = this.afs.collection('Projects').doc(this.projectId).collection('enterprises').doc(this.selectedTask.companyId).collection('Participants').doc(this.staffId).collection('WeeklyActions');
        var cmpProjectDoc = this.afs.collection('Projects').doc(this.projectId).collection('enterprises').doc(this.selectedTask.companyId);
        var cmpProActions = cmpProjectDoc.collection('tasks').doc(this.selectedTask.id).collection('workItems');
        var projectTaskDoc = this.afs.collection('Projects').doc(this.projectId);
        var projectTaskActions = projectTaskDoc.collection('tasks').doc(this.selectedTask.id).collection('workItems');
        var projectDoc = this.afs.collection('Enterprises').doc(this.selectedTask.companyId).collection('projects').doc(this.projectId);
        var actionRef = projectDoc.collection('tasks').doc(this.selectedTask.id).collection('workItems');
        var EntRef = this.afs.collection('Enterprises').doc(this.selectedTask.companyId).collection('tasks').doc(this.selectedTask.id).collection('workItems');
        EntRef.doc(this.setItem.id).set(this.setItem);
        cmpProActions.doc(this.setItem.id).set(this.setItem);
        actionRef.doc(this.setItem.id).set(this.setItem);
        userActionRef.doc(this.setItem.id).set(this.setItem);
        projectTaskActions.doc(this.setItem.id).set(this.setItem);
    };
    ViewComponent.prototype.setAction = function (setItem) {
        console.log(setItem);
        this.setItem = setItem;
    };
    ViewComponent.prototype.selectActions = function (e, action) {
        if (e.target.checked) {
            console.log();
            this.selectedActionItems.push(action);
            var userRef = this.afs.collection('Users').doc(this.userId).collection('WeeklyActions');
            userRef.doc(action.id).set(action);
            var compRef = this.afs.collection('Enterprises').doc(this.projectCompId).collection('WeeklyActions');
            compRef.doc(action.id).set(action);
            var compProjRef = this.afs.collection('Enterprises').doc(this.projectCompId).collection('projects').doc(this.projectId);
            compProjRef.collection('WeeklyActions').doc(action.id).set(action);
            var projectDoc = this.afs.collection('Projects').doc(this.projectId).collection('WeeklyActions');
            projectDoc.doc(action.id).set(action);
            var cmpProjectDoc = this.afs.collection('Projects').doc(this.projectId).collection('enterprises').doc(this.selectedTask.companyId);
            cmpProjectDoc.collection('WeeklyActions').doc(action.id).set(action);
            console.log("action" + " " + action.name + " " + " has been added");
        }
        else {
            this.selectedActionItems.splice(this.selectedActionItems.indexOf(action), 1);
            var compProjRef = this.afs.collection('Enterprises').doc(this.projectCompId).collection('projects').doc(this.projectId);
            compProjRef.collection('WeeklyActions').doc(action.id).delete();
            var userRef = this.afs.collection('Users').doc(this.userId).collection('WeeklyActions');
            userRef.doc(action.id).delete();
            var compRef = this.afs.collection('Enterprises').doc(this.projectCompId).collection('WeeklyActions');
            compRef.doc(action.id).delete();
            var projectDoc = this.afs.collection('Projects').doc(this.projectId).collection('WeeklyActions');
            projectDoc.doc(action.id).delete();
            var cmpProjectDoc = this.afs.collection('Projects').doc(this.projectId).collection('enterprises').doc(this.selectedTask.companyId);
            cmpProjectDoc.collection('WeeklyActions').doc(action.id).delete();
            console.log("action" + " " + action.name + " " + " has been Removed");
        }
    };
    ViewComponent.prototype.selectAction = function (action) {
        this.selectedAction = action;
    };
    ViewComponent.prototype.selectEditAction = function (action) {
        this.selectedAction = action;
    };
    ViewComponent.prototype.addActionParticipants = function () {
        if (this.setStaff.address == "" || this.setStaff.address == null || this.setStaff.address == undefined) {
            this.setStaff.address = "";
        }
        else {
        }
        if (this.setStaff.bus_email == "" || this.setStaff.bus_email == null || this.setStaff.bus_email == undefined) {
            this.setStaff.bus_email = "";
        }
        else {
        }
        if (this.setStaff.nationalId == "" || this.setStaff.nationalId == null || this.setStaff.nationalId == undefined) {
            this.setStaff.nationalId = "";
        }
        else {
        }
        if (this.setStaff.nationality == "" || this.setStaff.nationality == null || this.setStaff.nationality == undefined) {
            this.setStaff.nationality = "";
        }
        else {
        }
        console.log(this.setStaff);
        var action = this.selectedAction;
        console.log(action);
    };
    ViewComponent.prototype.initDiary = function () {
        // this.aCurrentDate = moment(new Date()).format('L');
        var testPeriod = "startDate";
        this.viewTodayAction(testPeriod, this.aCurrentDate);
    };
    ViewComponent.prototype.changeDay = function (action) {
        switch (action) {
            case 'previous': {
                this.aPeriod = this.aCurrentDate = moment__WEBPACK_IMPORTED_MODULE_7__(this.aCurrentDate).subtract(1, 'd').format('L');
                console.log(this.aCurrentDate);
                this.workDay = moment__WEBPACK_IMPORTED_MODULE_7__(this.aPeriod).format('LL');
                this.workWeekDay = moment__WEBPACK_IMPORTED_MODULE_7__(this.aPeriod).format('dddd');
                break;
            }
            case 'next': {
                this.aPeriod = this.aCurrentDate = moment__WEBPACK_IMPORTED_MODULE_7__(this.aCurrentDate).add(1, 'd').format('L');
                console.log(this.aCurrentDate);
                this.workDay = moment__WEBPACK_IMPORTED_MODULE_7__(this.aPeriod).format('LL');
                this.workWeekDay = moment__WEBPACK_IMPORTED_MODULE_7__(this.aPeriod).format('dddd');
                break;
            }
            default:
                break;
        }
        var testPeriod = "startDate";
        this.dayTasks = this.viewTodayAction(testPeriod, this.aPeriod);
    };
    ViewComponent.prototype.viewTodayAction = function (testPeriod, checkPeriod) {
        console.log(this.projectCompId);
        // let viewActionsRef = this.afs.collection('Enterprises').doc(this.projectCompId).collection('projects').doc(this.projectId);
        // let viewActionsRef = this.afs.collection('Projects').doc(this.projectId).collection('enterprises').doc(this.projectCompId);
        // this.viewActions = viewActionsRef.collection<workItem>('WeeklyActions', ref => ref
        this.viewActions = this.afs.collection('Enterprises').doc(this.projectCompId).collection('projects').doc(this.projectId).collection('WeeklyActions', function (ref) { return ref
            .orderBy('start')
            .where(testPeriod, '==', checkPeriod); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        return this.viewActions;
    };
    ViewComponent.prototype.addActionTime = function (action) {
        console.log(action);
        console.log(action.start);
        console.log(action.end);
        console.log(action);
        var compProjectRef = this.afs.collection('Enterprises').doc(action.companyId).collection('projects').doc(action.projectId).collection('WeeklyActions');
        var projectCompWeeklyRef = this.afs.collection('Projects').doc(action.projectId).collection('enterprises').doc(action.companyId).collection('WeeklyActions');
        var compWeeklyRef = this.afs.collection('Enterprises').doc(action.companyId).collection('WeeklyActions');
        var allMyActionsRef = this.afs.collection('Enterprises').doc(action.companyId).collection('actionItems');
        var myTaskActionsRef = this.afs.collection('Enterprises').doc(action.companyId).collection('tasks').doc(action.taskId).collection('actionItems');
        compProjectRef.doc(action.id).set(action);
        projectCompWeeklyRef.doc(action.id).set(action);
        compWeeklyRef.doc(action.id).set(action);
        allMyActionsRef.doc(action.id).set(action);
        myTaskActionsRef.doc(action.id).set(action);
    };
    ViewComponent.prototype.editAction = function (startDate, endDate) {
        console.log(startDate);
        console.log(endDate);
        console.log(moment__WEBPACK_IMPORTED_MODULE_7__(startDate, "YYYY-MM-DD"));
        console.log(moment__WEBPACK_IMPORTED_MODULE_7__(endDate, "YYYY-MM-DD"));
        var champId = this.selectedAction.champion.id;
        this.selectedAction.startDay = moment__WEBPACK_IMPORTED_MODULE_7__(startDate, 'YYYY-MM-DD').format('ddd').toString();
        this.selectedAction.endDay = moment__WEBPACK_IMPORTED_MODULE_7__(endDate, 'YYYY-MM-DD').format('ddd').toString();
        this.selectedAction.startDate = moment__WEBPACK_IMPORTED_MODULE_7__(startDate).format('L');
        this.selectedAction.endDate = moment__WEBPACK_IMPORTED_MODULE_7__(endDate).format('L');
        this.selectedAction.targetQty;
        console.log(this.selectedAction.startDate);
        console.log(this.selectedAction.endDate);
        // this.selectedAction.startDate = startDate;
        // this.selectedAction.endDate = endDate;
        this.selectedAction.startWeek = moment__WEBPACK_IMPORTED_MODULE_7__(startDate, "YYYY-MM-DD").week().toString();
        console.log('the actionItem-->' + this.selectedAction.name);
        if (this.selectedAction.projectId == "") {
            this.selectedAction.projectId == this.projectId;
        }
        ;
        if (this.selectedAction.companyId == "") {
            this.selectedAction.companyId == this.projectCompId;
        }
        ;
        // Project update
        if (this.selectedAction.projectId != "") {
            var prjectCompWeeklyRef = this.afs.collection('Projects').doc(this.selectedAction.projectId).collection('enterprises').doc(this.selectedAction.companyId).collection('WeeklyActions');
            prjectCompWeeklyRef.doc(this.selectedAction.id).set(this.selectedAction);
        }
        ;
        // Company update
        if (this.selectedAction.companyId != "") {
            var weeklyRef = this.afs.collection('Enterprises').doc(this.selectedAction.companyId).collection('projects').doc(this.selectedAction.projectId).collection('WeeklyActions');
            var allMyActionsRef = this.afs.collection('Enterprises').doc(this.selectedAction.companyId).collection('actionItems');
            var allWeekActionsRef = this.afs.collection('Enterprises').doc(this.selectedAction.companyId).collection('WeeklyActions');
            var myTaskActionsRef = this.afs.collection('Enterprises').doc(this.selectedAction.companyId).collection('tasks').doc(this.selectedAction.taskId).collection('actionItems');
            weeklyRef.doc(this.selectedAction.id).set(this.selectedAction);
            allMyActionsRef.doc(this.selectedAction.id).set(this.selectedAction);
            allWeekActionsRef.doc(this.selectedAction.id).set(this.selectedAction);
            myTaskActionsRef.doc(this.selectedAction.id).set(this.selectedAction);
        }
        ;
        // creator update
        if (this.selectedAction.byId != "") {
            var creatorRef = this.afs.collection('Users').doc(this.selectedAction.byId).collection('myenterprises').doc(this.selectedAction.companyId).collection('WeeklyActions');
            creatorRef.doc(this.selectedAction.id).set(this.selectedAction);
        }
        ;
        // champion update
        if (this.selectedAction.champion != null) {
            var championRef = this.afs.collection('Users').doc(champId).collection('myenterprises').doc(this.selectedAction.companyId).collection('WeeklyActions');
            championRef.doc(this.selectedAction.id).set(this.selectedAction);
        }
        ;
        startDate = "";
        endDate = null;
        this.selectedAction = this.is.getSelectedAction();
    };
    ViewComponent.prototype.newActionToday = function (action) {
        console.log(action);
        action.startDate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format('L');
        action.endDate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format('L');
        action.createdBy = this.user.displayName;
        action.by = this.user.displayName;
        action.byId = this.userId;
        action.createdOn = new Date().toISOString();
        // action.taskId = this.taskId;
        action.projectId = this.projectId;
        action.projectName = this.project.name;
        action.companyId = this.projectCompId;
        action.companyName = this.projectCompDetail.name;
        action.startWeek = moment__WEBPACK_IMPORTED_MODULE_7__(action.startDate, 'MM-DD-YYYY').week().toString();
        action.startDay = moment__WEBPACK_IMPORTED_MODULE_7__(action.startDate, 'MM-DD-YYYY').format('ddd').toString();
        action.endDay = moment__WEBPACK_IMPORTED_MODULE_7__(action.endDate, 'MM-DD-YYYY').format('ddd').toString();
        action.champion = this.myData;
        action.siu = this.setSui.id;
        console.log(action.sui);
        console.log('the SI unit --->' + this.setSui.id);
        var mooom = action;
        console.log(mooom);
        var partId = this.selectedStaffId;
        console.log('the selectedStaffId--->' + partId);
        console.log('the task-->' + this.selectedTask.name + " " + this.selectedTask.id);
        console.log('the action-->' + action.name);
        var userProjectDoc = this.afs.collection('Users').doc(this.selectedStaffId).collection('projects').doc(this.projectId);
        var userActionRef = userProjectDoc.collection('tasks').doc(this.selectedTask.id).collection('actionItems');
        var cmpProjectDoc = this.afs.collection('Projects').doc(this.projectId).collection('enterprises').doc(this.selectedTask.companyId);
        var cmpProActions = cmpProjectDoc.collection('tasks').doc(this.selectedTask.id).collection('actionItems');
        var projectDoc = this.afs.collection('Enterprises').doc(this.selectedTask.companyId).collection('projects').doc(this.projectId);
        var actionRef = projectDoc.collection('tasks').doc(this.selectedTask.id).collection('actionItems');
        var EntRef = this.afs.collection('Enterprises').doc(this.selectedTask.companyId).collection('tasks').doc(this.selectedTask.id).collection('actionItems');
        EntRef.add(action).then(function (Ref) {
            var newActionId = Ref.id;
            console.log(Ref);
            EntRef.doc(newActionId).update({ 'id': newActionId });
            cmpProActions.doc(newActionId).set(action);
            cmpProActions.doc(newActionId).update({ 'id': newActionId });
            actionRef.doc(newActionId).set(action);
            actionRef.doc(newActionId).update({ 'id': newActionId });
            userActionRef.doc(newActionId).set(action);
            userActionRef.doc(newActionId).update({ 'id': newActionId });
        });
    };
    ViewComponent.prototype.refreshData = function () {
        this.aCurrentDate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format('L');
        console.log(this.aCurrentDate);
        this.workDay = moment__WEBPACK_IMPORTED_MODULE_7__().format('LL');
        this.workWeekDay = moment__WEBPACK_IMPORTED_MODULE_7__(this.aPeriod).format('dddd');
    };
    // 0000000000000000000000000000000000000000000000000000000000000000
    ViewComponent.prototype.doc$ = function (ref) {
        console.log(this.projectName);
        return;
    };
    ViewComponent.prototype.saveBill = function () {
        console.log(this.newBill);
        var section = this.section;
        this.newBill.projectId = this.projectId;
        this.newBill.projectName = this.project.name;
        this.newBill.section = this.section;
        var newBill = this.newBill;
        console.log(this.newBill);
        var sectionRef = this.afs.collection('Projects').doc(this.projectId).collection('sections').doc(section.id).collection('abridgedBOQ');
        var compRef = this.afs.collection('Projects').doc(this.projectId).collection('enterprises').doc(this.projectCompId);
        var compRef2 = this.afs.collection('Enterprises').doc(this.projectCompId).collection('projects').doc(this.projectId).collection('abridgedBOQ');
        compRef.collection('abridgedBOQ').add(this.newBill).then(function (billRef) {
            var id = billRef.id;
            sectionRef.doc(id).set(newBill);
            compRef2.doc(id).set(newBill);
            compRef.collection('abridgedBOQ').doc(id).update({ 'id': id });
            sectionRef.doc(id).update({ 'id': id });
            compRef2.doc(id).update({ 'id': id });
            console.log(billRef);
        });
        this.newBill = this.is.getAbridgedBill();
    };
    ViewComponent.prototype.removeBill = function (billId) {
        var compRef = this.afs.collection('Projects').doc(this.projectId).collection('enterprises').doc(this.projectCompId);
        compRef.collection('abridgedBOQ').doc(billId).delete();
    };
    ViewComponent.prototype.selectBill = function (bill) {
        this.selectedBill = bill;
    };
    ViewComponent.prototype.saveWorkItem = function () {
        this.newWorkItem.unit = this.selectedUnits.id;
        this.newWorkItem.billID = this.selectedBill.id;
        this.newWorkItem.billName = this.selectedBill.name;
        this.newWorkItem.createdOn = new Date().toISOString();
        console.log(this.newWorkItem);
        // compute Activity Amount
        console.log('Initial workItem Amount =' + ' ' + this.newWorkItem.amount);
        this.newWorkItem.amount = (this.newWorkItem.quantity * this.newWorkItem.rate);
        console.log('workItem Amount =' + ' ' + this.newWorkItem.amount);
        console.log('Initial selectedBill Amount =' + ' ' + this.selectedBill.totalAmount);
        this.selectedBill.totalAmount = (this.selectedBill.totalAmount + this.newWorkItem.amount);
        console.log('New selectedBill Amount =' + ' ' + this.selectedBill.totalAmount);
        var workData = this.newWorkItem;
        var entDoc = this.afs.collection('Projects').doc(this.projectId).collection('enterprises').doc(this.projectCompId);
        var itemsCol = entDoc.collection('abridgedBOQ').doc(this.selectedBill.id);
        itemsCol.collection('workItems').add(this.newWorkItem).then(function (wrkItemRef) {
            var id = wrkItemRef.id;
            entDoc.collection('workItems').doc(id).set(workData);
            entDoc.collection('workItems').doc(id).update({ 'id': id });
            itemsCol.collection('workItems').doc(id).update({ 'id': id });
        });
        itemsCol.update({ 'totalAmount': this.selectedBill.totalAmount });
    };
    ViewComponent.prototype.showWorkItems = function (billId) {
        var _this = this;
        this.billWorkItems = this.ps.getBillWorkItems(this.projectId, this.projectCompId, billId);
        this.billWorkItems.subscribe(function (items) {
            _this.workItems = items;
        });
    };
    ViewComponent.prototype.selectUser = function (x) {
        if (x.address == "" || x.address == null || x.address == undefined) {
            x.address = "";
        }
        else {
        }
        if (x.bus_email == "" || x.bus_email == null || x.bus_email == undefined) {
            x.bus_email = "";
        }
        else {
        }
        if (x.nationalId == "" || x.nationalId == null || x.nationalId == undefined) {
            x.nationalId = "";
        }
        else {
        }
        if (x.nationality == "" || x.nationality == null || x.nationality == undefined) {
            x.nationality = "";
        }
        else {
        }
        var staff = {
            name: x.name,
            email: x.email,
            id: x.id,
            phoneNumber: x.phoneNumber,
            photoURL: x.photoURL,
            by: this.user.displayName,
            byId: this.userId,
            createdOn: new Date().toISOString(),
            bus_email: x.bus_email,
            address: x.address,
            nationalId: x.nationalId,
            nationality: x.nationality
        };
        console.log(x);
        console.log(staff);
        this.companystaff = staff;
        console.log(this.companystaff);
        // this.saveNewStaff(this.companystaff)
        this.toggleChamp();
        this.toggleUsersTable();
    };
    ViewComponent.prototype.addLabour = function () {
        var partRef = this.afs.collection('Projects').doc(this.projectId).collection('enterprises').doc(this.projectCompId).collection('labour');
        partRef.doc(this.companystaff.id).set(this.companystaff);
        console.log(this.companystaff);
        this.companystaff = { name: "", phoneNumber: "", email: "", id: "", photoURL: "", bus_email: "", address: "", nationalId: "", nationality: "" };
    };
    ViewComponent.prototype.selectAsset = function (asset) {
        console.log(asset);
        this.selectedAsset = asset;
        this.showAssetTable = false;
        this.showPlantDetail = true;
    };
    ViewComponent.prototype.savePlantReturns = function () {
        var newPlant;
        newPlant = this.selectedAsset;
        newPlant.unit = this.setSui.id;
        newPlant.rate = this.rate;
        console.log(newPlant);
        var plantRef = this.afs.collection('Projects').doc(this.projectId).collection('enterprises').doc(this.projectCompId).collection('plantReturns');
        plantRef.doc(newPlant.id).set(newPlant);
    };
    ViewComponent.prototype.compActions = function () {
        var _this = this;
        console.log(this.projectCompId);
        var compID = this.projectCompId;
        var proId = this.projectId;
        this.staff = this.es.getStaff(compID);
        this.companyAssets = this.es.getCompanyAssets(compID);
        this.aBridgedBill = this.ps.getProCompanyABOQ(proId, compID);
        this.billWorks = this.ps.getCompanyBillWorks(proId, compID);
        // this.ProjectPlantReturns = this.ps.getProjectPlantReturns(proId, compID);
        this.ProjectPlantReturns = this.afs.collection('Projects').doc(proId).collection('enterprises').doc(compID).collection('plantReturns').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.ProjectPlantReturns.subscribe(function (assets) {
            if (assets.length == 0) {
                _this.showPlantReturns = false;
                console.log("No Plant Returns");
            }
            else {
                _this.showPlantReturns = true;
                _this.plantReturns = assets;
                console.log(assets);
            }
        });
        // this.companyWeeklyActions = this.afs.collection('Enterprises').doc(this.projectCompId).collection<workItem>('WeeklyActions',
        // this.companyWeeklyActions = this.afs.collection('Projects').doc(this.projectId).collection('enterprises').doc(this.selectedTask.companyId).collection<workItem>('WeeklyActions',
        this.companyWeeklyActions = this.afs.collection('Enterprises').doc(this.projectCompId).collection('projects').doc(this.projectId).collection('WeeklyActions').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            data.startDate = moment__WEBPACK_IMPORTED_MODULE_7__(data.startDate, "MM-DD-YYYY").format('LL');
            data.endDate = moment__WEBPACK_IMPORTED_MODULE_7__(data.endDate, "MM-DD-YYYY").format('LL');
            _this.actiondata = data;
            return __assign({ id: id }, _this.actiondata);
        }); }));
        this.companyWeeklyActions.subscribe(function (actions) {
            _this.companyActions = actions;
            console.log(_this.companyActions);
            console.log(_this.companyActions.length);
        });
        var arraySize = this.companyActions.length;
        console.log(arraySize);
    };
    ViewComponent.prototype.viewLabour = function (man) {
        this.labourer = man;
    };
    ViewComponent.prototype.selectActionStaff = function (e, staff) {
        if (staff.address == "" || staff.address == null || staff.address == undefined) {
            staff.address = "";
        }
        else {
        }
        if (staff.bus_email == "" || staff.bus_email == null || staff.bus_email == undefined) {
            staff.bus_email = "";
        }
        else {
        }
        if (staff.nationalId == "" || staff.nationalId == null || staff.nationalId == undefined) {
            staff.nationalId = "";
        }
        else {
        }
        if (staff.nationality == "" || staff.nationality == null || staff.nationality == undefined) {
            staff.nationality = "";
        }
        else {
        }
        if (e.target.checked) {
            console.log();
            this.selectedActionParticipants.push(staff);
            var compRef = this.afs.collection('Enterprises').doc(this.projectCompId).collection('projects').doc(this.projectId).collection('WeeklyActions');
            compRef.doc(this.selectedAction.id).collection('Participants').doc(staff.id).set(staff);
            var projectRef = this.afs.collection('Projects').doc(this.projectId).collection('enterprises').doc(this.projectCompId).collection('WeeklyActions');
            projectRef.doc(this.selectedAction.id).collection('Participants').doc(staff.id).set(staff);
            console.log("staff" + " " + staff.name + " " + " has been added");
        }
        else {
            this.selectedActionParticipants.splice(this.selectedActionParticipants.indexOf(staff), 1);
            var compRef = this.afs.collection('Enterprises').doc(this.projectCompId).collection('projects').doc(this.projectId).collection('WeeklyActions');
            compRef.doc(this.selectedAction.id).collection('Participants').doc(staff.id).delete();
            var projectRef = this.afs.collection('Projects').doc(this.projectId).collection('enterprises').doc(this.projectCompId).collection('WeeklyActions');
            projectRef.doc(this.selectedAction.id).collection('Participants').doc(staff.id).delete();
            console.log("staff" + " " + staff.name + " " + " has been removed");
        }
        this.showActionParticipants();
    };
    ViewComponent.prototype.showActionParticipants = function () {
        // let labourRef = this.afs.collection('Projects').doc(this.projectId).collection('enterprises').doc(this.projectCompId).collection<workItem>('WeeklyActions');
        var labourRef = this.afs.collection('Enterprises').doc(this.projectCompId).collection('projects').doc(this.projectId).collection('WeeklyActions');
        this.actionParticipants = labourRef.doc(this.selectedAction.id).collection('Participants').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    };
    ViewComponent.prototype.inviteEnterpride = function (company) {
        console.log(company);
        var champion;
        var champion2;
        var project = {
            name: this.project.name,
            id: this.project.id,
            location: this.project.location,
            sector: this.project.sector,
            type: this.project.type,
            companyName: this.project.companyName,
            companyId: this.project.companyId,
        };
        var comp = {
            name: company.name,
            id: company.id,
            location: company.location,
            sector: company.sector,
            address: company.address,
            telephone: company.telephone,
        };
        var companyId = company.id;
        console.log(companyId);
        var champId = company.champion.id;
        console.log(champId);
        console.log(companyId);
        // this.selectedCompany = company;
        champion = company.champion;
        champion2 = this.myData;
        champion.project = project;
        champion.company = comp;
        champion2.project = project;
        champion2.company = comp;
        var championdataId = champId + moment__WEBPACK_IMPORTED_MODULE_7__().format('DDDDYYYY');
        champion.dataId = championdataId;
        var champion2dataId = company.byId + moment__WEBPACK_IMPORTED_MODULE_7__().format('DDDDYYYY');
        champion2.dataId = champion2dataId;
        if (champId != "") {
            if (champId == this.userId) {
                this.afs.collection('/Users').doc(company.byId).collection('projectInvitations').doc(championdataId).set(champion2);
                this.afs.collection('Enterprises').doc(companyId).collection('projectInvitations').doc(championdataId).set(champion2);
            }
            else {
                this.afs.collection('/Users').doc(champId).collection('projectInvitations').doc(championdataId).set(champion2);
                this.afs.collection('Enterprises').doc(companyId).collection('projectInvitations').doc(championdataId).set(champion2);
            }
        }
        // if (champId == "") {
        //   this.afs.collection('/Users').doc(company.byId).collection('projectInvitations').doc(champion2dataId).set(champion2);
        //   this.afs.collection('Enterprises').doc(companyId).collection('projectInvitations').doc(champion2dataId).set(champion2);
        // }
        this.showNotification('inviteCompany', 'top', 'right');
    };
    ViewComponent.prototype.showNotification = function (data, from, align) {
        // var type = ['', 'info', 'success', 'warning', 'danger'];
        var type = ['', 'info', 'success', 'warning', 'danger'];
        var color = Math.floor((Math.random() * 4) + 1);
        if (data === 'inviteCompany') {
            $.notify({
                icon: "ti-gift",
                message: "Invitation has been sent!!."
            }, {
                type: type[color],
                timer: 4000,
                placement: {
                    from: from,
                    align: align
                },
                template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss">' +
                    '<i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span>' +
                    '<span data-notify="message">{2}</span><div class="progress" data-notify="progressbar">' +
                    '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div>' +
                    '<a href="{3}" target="{4}" data-notify="url"></a></div>'
            });
        }
        if (data === 'comp') {
            $.notify({
                icon: "ti-gift",
                message: "A new enterprise has been created <b> check colours enterprise dropdown."
            }, {
                type: type[color],
                timer: 4000,
                placement: {
                    from: from,
                    align: align
                },
                template: '<div data-notify="container" class="col-11 col-md-4 alert alert-{0} alert-with-icon" role="alert"><button type="button" aria-hidden="true" class="close" data-notify="dismiss"><i class="nc-icon nc-simple-remove"></i></button><span data-notify="icon" class="nc-icon nc-bell-55"></span> <span data-notify="title">{1}</span> <span data-notify="message">{2}</span><div class="progress" data-notify="progressbar"><div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div></div><a href="{3}" target="{4}" data-notify="url"></a></div>'
            });
        }
    };
    ViewComponent.prototype.qsearch = function (testVariavle, x) {
        var xCapitalized = x.charAt(0).toUpperCase() + x.slice(1);
        // this.viewEnterprises(testVariavle, x);
        this.minimizeSidebar();
        console.log(testVariavle + " " + xCapitalized);
        this.viewEnterprises(testVariavle, xCapitalized);
    };
    ViewComponent.prototype.search = function (loc, sec) {
        // this.viewEnterprises(testVariavle, x);
        // this.minimizeSidebar();
        // console.log(y + ' & ' + x);
        if (loc != '') {
            var x = loc.charAt(0).toUpperCase() + loc.slice(1);
            var testVariavle = 'location';
            console.log('Location' + ' ' + x);
            if (sec != '') {
                var y = sec.charAt(0).toUpperCase() + sec.slice(1);
                console.log('both present' + '=>' + x + ' & ' + y);
                this.viewEnterprises(x, y);
            }
            console.log(testVariavle + " " + x);
            this.viewbyEnterprises(testVariavle, x);
        }
        if (sec != '') {
            var y = sec.charAt(0).toUpperCase() + sec.slice(1);
            var testVariavle = 'sector';
            console.log('Sector' + ' ' + y);
            this.viewbyEnterprises(testVariavle, y);
        }
    };
    ViewComponent.prototype.viewEnterprises = function (location, sector) {
        // this.showTable();
        this.viewCompanies = this.afs.collection('Enterprises', function (ref) {
            return ref
                .where('location', '==', location)
                .where('sector', '==', sector);
        }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        return this.viewCompanies;
    };
    ViewComponent.prototype.viewbyEnterprises = function (checkVariable, testData) {
        // this.showTable();
        this.viewCompanies = this.afs.collection('Enterprises', function (ref) { return ref.where(checkVariable, '==', testData); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        return this.viewCompanies;
    };
    ViewComponent.prototype.callProjectTasks = function () {
        var _this = this;
        var proId = this.projectId;
        this.CurrentTAsks = [];
        this.OutstandingTasks = [];
        this.UpcomingTAsks = [];
        this.ShortTermTAsks = [];
        this.MediumTermTAsks = [];
        this.LongTermTAsks = [];
        this.projectDescription = this.ps.getProjectSections(proId);
        this.projectDescriptions = this.ps.getProjectSections(proId);
        var tasksRef = this.afs.collection('Projects').doc(proId);
        this.projectCompanies = this.ps.getCompanies(proId);
        this.companies = this.ps.getCompanies(proId);
        this.allProjectCompanies = this.ps.getCompanies(proId);
        this.coloursCompanies = this.es.getColoursCompanies();
        this.projectParticipants = this.ps.getParticipants(proId);
        this.tasks = tasksRef.collection('tasks', function (ref) { return ref.orderBy('start'); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            _this.myTaskData = data;
            _this.myTaskData.when = moment__WEBPACK_IMPORTED_MODULE_7__(data.start, "YYYY-MM-DD").fromNow().toString();
            _this.myTaskData.then = moment__WEBPACK_IMPORTED_MODULE_7__(data.finish, "YYYY-MM-DD").fromNow().toString();
            // let today = moment(new Date(), "YYYY-MM-DD");
            // if (moment(data.start).isSameOrBefore(today) && moment(data.finish).isSameOrAfter(today)) {
            //   this.CurrentTAsks.push(data);
            // };
            // // outstanding tasks
            // if (moment(data.finish).isBefore(today)) {
            //   this.OutstandingTasks.push(data);
            // };
            // // Upcoming tasks
            // if (moment(data.start).isAfter(today)) {
            //   this.UpcomingTAsks.push(data);
            //   if (moment(data.start).isBefore(today.add(3, "month"))) {
            //     this.ShortTermTAsks.push(data);
            //   }
            //   if (moment(data.start).isAfter(today.add(6, "month"))) {
            //     this.MediumTermTAsks.push(data);
            //   }
            //   if (moment(data.start).isAfter(today.add(12, "month"))) {
            //     this.LongTermTAsks.push(data)
            //   }
            // };
            return __assign({ id: id }, data);
        }); }));
        // this.tasks.subscribe(ttasks => {
        //   this.projectTasks = ttasks;
        //   console.log(ttasks);
        // });
        this.tasks.subscribe(function (ttasks) {
            _this.CurrentTAsks = [];
            _this.OutstandingTasks = [];
            _this.UpcomingTAsks = [];
            _this.ShortTermTAsks = [];
            _this.MediumTermTAsks = [];
            _this.LongTermTAsks = [];
            ttasks.forEach(function (data) {
                var today = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "YYYY-MM-DD");
                // outstanding tasks
                if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isSameOrBefore(today) && moment__WEBPACK_IMPORTED_MODULE_7__(data.finish).isSameOrAfter(today)) {
                    _this.CurrentTAsks.push(data);
                }
                ;
                // outstanding tasks
                if (moment__WEBPACK_IMPORTED_MODULE_7__(data.finish).isBefore(today)) {
                    _this.OutstandingTasks.push(data);
                }
                ;
                // Upcoming tasks
                if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isAfter(today)) {
                    _this.UpcomingTAsks.push(data);
                    if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isBefore(today.add(3, "month"))) {
                        _this.ShortTermTAsks.push(data);
                    }
                    if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isAfter(today.add(6, "month"))) {
                        _this.MediumTermTAsks.push(data);
                    }
                    if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isAfter(today.add(12, "month"))) {
                        _this.LongTermTAsks.push(data);
                    }
                }
                ;
            });
            _this.projectTasks = ttasks;
            console.log(ttasks);
        });
    };
    ViewComponent.prototype.checkDataComp = function () {
        var _this = this;
        var compId = this.project.companyId;
        console.log(this.project.companyId);
        var tasksRef = this.afs.collection('Projects').doc(this.projectId);
        this.companyTasks = tasksRef.collection('enterprises').doc(compId).collection('tasks').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            _this.compTaskData = data;
            _this.compTaskData.when = moment__WEBPACK_IMPORTED_MODULE_7__(data.start, "YYYY-MM-DD").fromNow().toString();
            _this.compTaskData.then = moment__WEBPACK_IMPORTED_MODULE_7__(data.finish, "YYYY-MM-DD").fromNow().toString();
            return __assign({ id: id }, data);
        }); }));
        this.companyTasks.subscribe(function (ttasks) {
            _this.compOutstandingTasks = [];
            _this.compCurrentTAsks = [];
            _this.UpcomingTAsks = [];
            _this.compShortTermTAsks = [];
            _this.compMediumTermTAsks = [];
            _this.compLongTermTAsks = [];
            ttasks.forEach(function (data) {
                var today = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "YYYY-MM-DD");
                if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isSameOrBefore(today) && moment__WEBPACK_IMPORTED_MODULE_7__(data.finish).isSameOrAfter(today)) {
                    _this.compCurrentTAsks.push(data);
                }
                ;
                // outstanding tasks
                if (moment__WEBPACK_IMPORTED_MODULE_7__(data.finish).isBefore(today)) {
                    _this.compOutstandingTasks.push(data);
                    console.log(_this.compOutstandingTasks);
                }
                ;
                // Upcoming tasks
                if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isAfter(today)) {
                    _this.UpcomingTAsks.push(data);
                    if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isBefore(today.add(3, "month"))) {
                        _this.compShortTermTAsks.push(data);
                    }
                    if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isAfter(today.add(6, "month"))) {
                        _this.compMediumTermTAsks.push(data);
                    }
                    if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isAfter(today.add(12, "month"))) {
                        _this.compLongTermTAsks.push(data);
                    }
                }
                ;
            });
            _this.CompanyTasks = ttasks;
            console.log(ttasks);
        });
        console.log(this.companyTasks.operator.call.length);
    };
    ViewComponent.prototype.displayEnterprise = function () {
        this.companyDemoNotes = false;
        this.displayCompany = true;
    };
    ViewComponent.prototype.displayProject = function () {
        this.displayCompany = false;
    };
    ViewComponent.prototype.displayEnt = function () {
        this.displayCompanyReport = false;
    };
    /* all new updates */
    ViewComponent.prototype.Update = function () {
        var _this = this;
        var usersRef = this.afs.collection('Users').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        usersRef.subscribe(function (allusers) {
            allusers.forEach(function (element) {
                // totalLialibility$ = + element.amount;
                if (element.address == "" || element.address == null || element.address == undefined) {
                    element.address = "";
                    _this.afs.collection('Users').doc(element.id).update({ 'address': "" });
                    console.log('Done');
                }
                else {
                }
                if (element.phoneNumber == "" || element.phoneNumber == null || element.phoneNumber == undefined) {
                    element.phoneNumber = "";
                    _this.afs.collection('Users').doc(element.id).update({ 'phoneNumber': "" });
                    console.log('Done');
                }
                else {
                }
                if (element.bus_email == "" || element.bus_email == null || element.bus_email == undefined) {
                    element.bus_email = "";
                    _this.afs.collection('Users').doc(element.id).update({ 'bus_email': "" });
                    console.log('Done');
                }
                else {
                }
                if (element.nationalId == "" || element.nationalId == null || element.nationalId == undefined) {
                    element.nationalId = "";
                    _this.afs.collection('Users').doc(element.id).update({ 'nationalId': "" });
                    console.log('Done');
                }
                else {
                }
                if (element.nationality == "" || element.nationality == null || element.nationality == undefined) {
                    element.nationality = "";
                    _this.afs.collection('Users').doc(element.id).update({ 'nationality': "" });
                    console.log('Done');
                }
                else {
                }
            });
        });
    };
    ViewComponent.prototype.getComp = function () {
        var _this = this;
        var pro;
        var compId;
        this.dataCall().subscribe(function (ref) {
            console.log(ref);
            compId = ref.companyId;
            _this.projectCompId = compId;
            console.log(compId);
            console.log(_this.projectId);
            // console.log(this.project.companyId);
            console.log(_this.projectCompId);
            _this.compActions();
            console.log(compId);
            var tasksRef = _this.afs.collection('Projects').doc(_this.projectId);
            var compRef = _this.afs.collection('Projects').doc(_this.projectId).collection('enterprises').doc(compId);
            _this.labour = compRef.collection('labour').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            }); }));
            _this.labour.subscribe(function (ref) {
                _this.labourRef1 = ref;
            });
            _this.companyprojectLabour = _this.ps.getProCompanyLabour(_this.projectId, compId);
        });
        console.log(pro);
        this.viewCompanyReport();
    };
    ViewComponent.prototype.viewSetCompanyReport = function (company) {
        var _this = this;
        this.outstandingCompanyTasks = [];
        var today = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "YYYY-MM-DD");
        console.log(company);
        var compId = company.id;
        this.entId = company.id;
        this.setCompany = company;
        this.companyDemoNotes = false;
        this.displayCompany = true;
        this.allsetCompanyTasks = this.afs.collection('Projects').doc(this.projectId).collection('enterprises').doc(compId).collection('tasks').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            _this.setCompTaskData = data;
            _this.setCompTaskData.when = moment__WEBPACK_IMPORTED_MODULE_7__(data.start, "YYYY-MM-DD").fromNow().toString();
            _this.setCompTaskData.then = moment__WEBPACK_IMPORTED_MODULE_7__(data.finish, "YYYY-MM-DD").fromNow().toString();
            return __assign({ id: id }, data);
        }); }));
        this.allsetCompanyTasks.subscribe(function (ptasks) {
            _this.setCompCurrentTAsks = [];
            _this.setCompOutstandingTasks = [];
            _this.setCompShortTermTAsks = [];
            _this.setCompMediumTermTAsks = [];
            _this.setCompLongTermTAsks = [];
            _this.setCompUpcomingTAsks = [];
            ptasks.forEach(function (data) {
                var today = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "YYYY-MM-DD");
                if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isSameOrBefore(today) && moment__WEBPACK_IMPORTED_MODULE_7__(data.finish).isSameOrAfter(today)) {
                    _this.setCompCurrentTAsks.push(data);
                }
                ;
                // outstanding tasks
                if (moment__WEBPACK_IMPORTED_MODULE_7__(data.finish).isBefore(today)) {
                    _this.setCompOutstandingTasks.push(data);
                    console.log(_this.compOutstandingTasks);
                }
                ;
                // Upcoming tasks
                if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isAfter(today)) {
                    _this.setCompUpcomingTAsks.push(data);
                    if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isBefore(today.add(3, "month"))) {
                        _this.setCompShortTermTAsks.push(data);
                    }
                    if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isAfter(today.add(6, "month"))) {
                        _this.setCompMediumTermTAsks.push(data);
                    }
                    if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isAfter(today.add(12, "month"))) {
                        _this.setCompLongTermTAsks.push(data);
                    }
                }
                ;
            });
        });
        this.allsetCompanyTasksComplete = this.afs.collection('Projects').doc(this.projectId).collection('enterprises').doc(compId).collection('tasks', function (ref) { return ref
            .where('complete', '==', true); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.setCompanyLabour = this.afs.collection('Projects').doc(this.projectId).collection('enterprises').doc(compId).collection('labour').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        // plantReturns
        this.setCompanyPlants = this.afs.collection('Projects').doc(this.projectId).collection('enterprises').doc(compId).collection('plantReturns').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    };
    ViewComponent.prototype.viewCompanyReport = function () {
        var _this = this;
        // this.callProjectTasks();
        var compId = this.project.companyId;
        var compRef = this.ps.getCompanies(this.projectId);
        this.outstandingCompanyTasks = [];
        var entReport;
        var today = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "YYYY-MM-DD");
        // console.log(companyId);
        // let compId = companyId;
        // this.entId = companyId;
        // this.setCompany = company;
        // this.companyDemoNotes = false;
        // this.displayCompany = true;
        this.allCompanyTasks = this.afs.collection('Projects').doc(this.projectId).collection('enterprises').doc(compId).collection('tasks').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            _this.setCompTaskData = data;
            _this.setCompTaskData.when = moment__WEBPACK_IMPORTED_MODULE_7__(data.start, "YYYY-MM-DD").fromNow().toString();
            _this.setCompTaskData.then = moment__WEBPACK_IMPORTED_MODULE_7__(data.finish, "YYYY-MM-DD").fromNow().toString();
            // if (moment(data.finish).isBefore(today)) {
            //   this.outstandingDptTasks.push(data);
            // };
            return __assign({ id: id }, data);
        }); }));
        compRef.subscribe(function (ref) {
            var index = ref.findIndex(function (ent) { return ent.id === compId; });
            if (index > -1) {
                entReport = ref[index];
                _this.entReport = entReport;
            }
            else {
                console.log("didn`t get Company");
            }
        });
        this.allCompanyTasks.subscribe(function (ptasks) {
            _this.mcompCurrentTAsks = [];
            _this.mcompOutstandingTasks = [];
            _this.mcompShortTermTAsks = [];
            _this.mcompMediumTermTAsks = [];
            _this.mcompLongTermTAsks = [];
            _this.mcompUpcomingTAsks = [];
            ptasks.forEach(function (data) {
                var today = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "YYYY-MM-DD");
                if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isSameOrBefore(today) && moment__WEBPACK_IMPORTED_MODULE_7__(data.finish).isSameOrAfter(today)) {
                    _this.mcompCurrentTAsks.push(data);
                }
                ;
                // outstanding tasks
                if (moment__WEBPACK_IMPORTED_MODULE_7__(data.finish).isBefore(today)) {
                    _this.mcompOutstandingTasks.push(data);
                    console.log(_this.compOutstandingTasks);
                }
                ;
                // Upcoming tasks
                if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isAfter(today)) {
                    _this.mcompUpcomingTAsks.push(data);
                    if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isBefore(today.add(3, "month"))) {
                        _this.mcompShortTermTAsks.push(data);
                    }
                    if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isAfter(today.add(6, "month"))) {
                        _this.mcompMediumTermTAsks.push(data);
                    }
                    if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isAfter(today.add(12, "month"))) {
                        _this.mcompLongTermTAsks.push(data);
                    }
                }
                ;
            });
        });
        this.allCompanyTasksComplete = this.afs.collection('Projects').doc(this.projectId).collection('enterprises').doc(compId).collection('tasks', function (ref) { return ref
            .where('complete', '==', true); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    };
    ViewComponent.prototype.dataCall = function () {
        var _this = this;
        var compId;
        var compName;
        this.proj = this.as.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) {
            var id = params.get('id');
            _this.projectId = id;
            console.log(id);
            console.log(_this.userId);
            // const Ref = this.afs.collection<Project>('Projects').doc(id);
            var Ref = _this.afs.collection('Users').doc(_this.userId).collection('projects').doc(id);
            _this.newProject = Ref.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (myDoc) {
                var data = myDoc.payload.data();
                if (data.companyId == "") {
                    compId = data.companyId;
                    compName = data.companyName;
                    console.log(compId);
                    console.log('compId on');
                    _this.projectCompId = compId;
                }
                if (data.companyId != "") {
                    console.log(data.companyId);
                }
                else {
                    console.log('no compId');
                }
                _this.project = data;
                _this.projectCompId = compId;
                return __assign({ id: id, compId: compId }, data);
            }));
            _this.refreshProject();
            return _this.newProject;
        }));
        return this.proj;
    };
    ViewComponent.prototype.resetForm = function () {
    };
    ViewComponent.prototype.deleteTask = function (task) {
        console.log(task);
    };
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.user.subscribe(function (user) {
            _this.userId = user.uid;
            _this.user = user;
            // let myData = {
            //   name: this.user.displayName,
            //   email: this.user.email,
            //   id: this.user.uid,
            //   phoneNumber: this.user.phoneNumber,  
            //   photoURL: this.user.photoURL
            // }
            // this.myData = myData;
            _this.userDetails();
            _this.refreshData();
            _this.dataCall().subscribe();
            _this.getComp();
        });
    };
    ViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-view',
            template: __webpack_require__(/*! ./view.component.html */ "./src/app/projects/view/view.component.html"),
            styles: [__webpack_require__(/*! ./view.component.css */ "./src/app/projects/view/view.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], app_services_initialise_service__WEBPACK_IMPORTED_MODULE_11__["InitialiseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            app_services_personal_service__WEBPACK_IMPORTED_MODULE_10__["PersonalService"], app_services_task_service__WEBPACK_IMPORTED_MODULE_8__["TaskService"],
            app_services_enterprise_service__WEBPACK_IMPORTED_MODULE_9__["EnterpriseService"], _services_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ViewComponent);
    return ViewComponent;
}());



/***/ })

}]);
//# sourceMappingURL=projects-projects-module.js.map