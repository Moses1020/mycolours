(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["individual-rpts-individual-rpts-module"],{

/***/ "./src/app/individual-rpts/individual-rpts.component.css":
/*!***************************************************************!*\
  !*** ./src/app/individual-rpts/individual-rpts.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user_table {\r\n    height: 10em;\r\n    overflow: hidden;\r\n    overflow-y: scroll\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kaXZpZHVhbC1ycHRzL2luZGl2aWR1YWwtcnB0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaW5kaXZpZHVhbC1ycHRzL2luZGl2aWR1YWwtcnB0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJfdGFibGUge1xyXG4gICAgaGVpZ2h0OiAxMGVtO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/individual-rpts/individual-rpts.component.html":
/*!****************************************************************!*\
  !*** ./src/app/individual-rpts/individual-rpts.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"row\">\n    <div style=\"text-align:left;margin-left: 50px\">\n      <!-- <img alt=\"Southland Logo\" src=\"/src/app/southland-logo.jpg\"> -->\n      <!-- <img alt=\"Colours Logo\" width=\"100\" src=\"../../assets/Colourslogo.png\"> -->\n      <img alt=\"Colours Logo\" width=\"100\" src=\"../../../assets/img/Colourslogo.PNG\">\n    </div>\n    <div class=\"col-lg-12 text-center\">\n      <div class=\"card  card-tasks\">\n        <div class=\"card-header \">\n          <h4 class=\"card-title clrs-h1-font\">Individual-Reports</h4>\n        </div>\n        <div class=\"spacer\" style=\"height: 2em\"></div>\n        <div class=\"card-body\">\n          <nav aria-label=\"Page navigation example\">\n            <ul class=\"nav nav-pills nav-pills-primary nav-pills-icons justify-content-right\" role=\"tablist\"\n              style=\"margin-top: -30px;\">\n              <li class=\"nav-item\">\n                <a class=\"pagination pagination-primary active\" title=\"click to see the overview\" data-toggle=\"tab\" href=\"#link7\"\n                  role=\"tablist\">\n                  Total time spent\n                </a>\n              </li>\n              <span style=\"color:darkslategrey\">  -|-  </span>\n              <li class=\"nav-item\">\n                <a class=\"pagination pagination-primary\" title=\"click to see the timesheet\" data-toggle=\"tab\" href=\"#link8\"\n                  role=\"tablist\">\n                  Task Activity log\n                </a>\n              </li>\n              <span style=\"color:darkslategrey\">  -|-  </span>\n              <li class=\"nav-item\">\n                <a class=\"pagination pagination-primary\" title=\"click to see the other reports\" data-toggle=\"tab\" href=\"#link9\"\n                  role=\"tablist\">\n                  Outstanding Activities\n                </a>\n              </li>\n              <span style=\"color:darkslategrey\"> -|- </span>\n              <li class=\"nav-item\">\n                <a class=\"pagination pagination-primary\" title=\"click to see the other reports\" data-toggle=\"tab\" href=\"#link10\"\n                  role=\"tablist\">\n                  Others\n                </a>\n              </li>\n            </ul>\n          </nav>\n          <div class=\"tab-content tab-space tab-subcategories col-md-12\">\n            <div class=\"tab-pane active\" id=\"link7\">\n              <app-r-time-spent-e></app-r-time-spent-e>\n            </div>\n            <div class=\"tab-pane\" id=\"link8\">\n              <!-- <div class=\"card-header text-left\">Activity log</div><br>               -->\n                <app-r-activity-log-e></app-r-activity-log-e>\n            </div>\n            <div class=\"tab-pane\" id=\"link9\">\n              <!-- <div class=\"card-header text-left\">Outstanding Task activities</div><br> -->\n                <!-- <app-r-os-actions-e></app-r-os-actions-e> -->\n                <app-r-os-tasks-e></app-r-os-tasks-e>\n            </div>\n            <div class=\"tab-pane\" id=\"link10\">\n                <div class=\"card-header text-left\">Other reports</div><br>\n              \n            </div>\n          </div>\n        </div>\n        <div class=\"card-footer \">\n          <hr>\n          <div class=\"stats\">\n            <i class=\"fa fa-refresh spin\"></i> Updated 3 minutes ago\n          </div>\n        </div>\n      </div>\n      \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/individual-rpts/individual-rpts.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/individual-rpts/individual-rpts.component.ts ***!
  \**************************************************************/
/*! exports provided: IndividualRptsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualRptsComponent", function() { return IndividualRptsComponent; });
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

var IndividualRptsComponent = /** @class */ (function () {
    function IndividualRptsComponent() {
    }
    // OnInit() {}
    IndividualRptsComponent.prototype.NgOnInit = function () {
    };
    IndividualRptsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-individual-rpts',
            template: __webpack_require__(/*! ./individual-rpts.component.html */ "./src/app/individual-rpts/individual-rpts.component.html"),
            styles: [__webpack_require__(/*! ./individual-rpts.component.css */ "./src/app/individual-rpts/individual-rpts.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], IndividualRptsComponent);
    return IndividualRptsComponent;
}());



/***/ }),

/***/ "./src/app/individual-rpts/individual-rpts.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/individual-rpts/individual-rpts.module.ts ***!
  \***********************************************************/
/*! exports provided: IndividualRptsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualRptsModule", function() { return IndividualRptsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _individual_rpts_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./individual-rpts.component */ "./src/app/individual-rpts/individual-rpts.component.ts");
/* harmony import */ var _individual_rpts_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./individual-rpts.routing */ "./src/app/individual-rpts/individual-rpts.routing.ts");
/* harmony import */ var _r_time_spent_e_r_time_spent_e_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./r-time-spent-e/r-time-spent-e.component */ "./src/app/individual-rpts/r-time-spent-e/r-time-spent-e.component.ts");
/* harmony import */ var app_individual_rpts_r_activity_log_e_r_activity_log_e_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/individual-rpts/r-activity-log-e/r-activity-log-e.component */ "./src/app/individual-rpts/r-activity-log-e/r-activity-log-e.component.ts");
/* harmony import */ var _r_os_actions_e_r_os_actions_e_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./r-os-actions-e/r-os-actions-e.component */ "./src/app/individual-rpts/r-os-actions-e/r-os-actions-e.component.ts");
/* harmony import */ var _r_os_tasks_e_r_os_tasks_e_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./r-os-tasks-e/r-os-tasks-e.component */ "./src/app/individual-rpts/r-os-tasks-e/r-os-tasks-e.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var IndividualRptsModule = /** @class */ (function () {
    function IndividualRptsModule() {
    }
    IndividualRptsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_individual_rpts_routing__WEBPACK_IMPORTED_MODULE_5__["IndividualRptsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [
                _individual_rpts_component__WEBPACK_IMPORTED_MODULE_4__["IndividualRptsComponent"],
                _r_time_spent_e_r_time_spent_e_component__WEBPACK_IMPORTED_MODULE_6__["RTimeSpentEComponent"],
                app_individual_rpts_r_activity_log_e_r_activity_log_e_component__WEBPACK_IMPORTED_MODULE_7__["RActivityLogEComponent"],
                _r_os_actions_e_r_os_actions_e_component__WEBPACK_IMPORTED_MODULE_8__["ROsActionsEComponent"],
                _r_os_tasks_e_r_os_tasks_e_component__WEBPACK_IMPORTED_MODULE_9__["ROsTasksEComponent"]
            ]
        })
    ], IndividualRptsModule);
    return IndividualRptsModule;
}());



/***/ }),

/***/ "./src/app/individual-rpts/individual-rpts.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/individual-rpts/individual-rpts.routing.ts ***!
  \************************************************************/
/*! exports provided: IndividualRptsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndividualRptsRoutes", function() { return IndividualRptsRoutes; });
/* harmony import */ var _individual_rpts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./individual-rpts.component */ "./src/app/individual-rpts/individual-rpts.component.ts");
/* harmony import */ var _r_activity_log_e_r_activity_log_e_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./r-activity-log-e/r-activity-log-e.component */ "./src/app/individual-rpts/r-activity-log-e/r-activity-log-e.component.ts");
/* harmony import */ var _r_time_spent_e_r_time_spent_e_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./r-time-spent-e/r-time-spent-e.component */ "./src/app/individual-rpts/r-time-spent-e/r-time-spent-e.component.ts");
/* harmony import */ var _r_os_actions_e_r_os_actions_e_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./r-os-actions-e/r-os-actions-e.component */ "./src/app/individual-rpts/r-os-actions-e/r-os-actions-e.component.ts");
/* harmony import */ var _r_os_tasks_e_r_os_tasks_e_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./r-os-tasks-e/r-os-tasks-e.component */ "./src/app/individual-rpts/r-os-tasks-e/r-os-tasks-e.component.ts");





var IndividualRptsRoutes = [{
        path: '',
        children: [{
                path: 'individual-reports',
                component: _individual_rpts_component__WEBPACK_IMPORTED_MODULE_0__["IndividualRptsComponent"]
            }, {
                path: 'time-spent',
                component: _r_time_spent_e_r_time_spent_e_component__WEBPACK_IMPORTED_MODULE_2__["RTimeSpentEComponent"]
            }, {
                path: 'activity-log',
                component: _r_activity_log_e_r_activity_log_e_component__WEBPACK_IMPORTED_MODULE_1__["RActivityLogEComponent"]
            }, {
                path: 'outstanding-log',
                component: _r_os_actions_e_r_os_actions_e_component__WEBPACK_IMPORTED_MODULE_3__["ROsActionsEComponent"]
            }, {
                path: 'outstandingTasks-log',
                component: _r_os_tasks_e_r_os_tasks_e_component__WEBPACK_IMPORTED_MODULE_4__["ROsTasksEComponent"]
            },]
    }];


/***/ }),

/***/ "./src/app/individual-rpts/r-activity-log-e/r-activity-log-e.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/individual-rpts/r-activity-log-e/r-activity-log-e.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    font-family: arial, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n\r\ninput[type=\"date\"] {\r\n    color:blue;\r\n    font-weight:bold;\r\n    font-size:14px;\r\n    font-family:sans-serif;\r\n    width:140px;\r\n}\r\n\r\ntd, td0, td1, td2, td3, td4, th {\r\n    border: 1px solid #070707;\r\n    padding: 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kaXZpZHVhbC1ycHRzL3ItYWN0aXZpdHktbG9nLWUvci1hY3Rpdml0eS1sb2ctZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0lBQzlCLHlCQUF5QjtJQUN6QixXQUFXO0VBQ2I7O0FBRUY7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9pbmRpdmlkdWFsLXJwdHMvci1hY3Rpdml0eS1sb2ctZS9yLWFjdGl2aXR5LWxvZy1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgICBmb250LWZhbWlseTogYXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuaW5wdXRbdHlwZT1cImRhdGVcIl0ge1xyXG4gICAgY29sb3I6Ymx1ZTtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBmb250LXNpemU6MTRweDtcclxuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XHJcbiAgICB3aWR0aDoxNDBweDtcclxufVxyXG5cclxudGQsIHRkMCwgdGQxLCB0ZDIsIHRkMywgdGQ0LCB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDcwNzA3O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/individual-rpts/r-activity-log-e/r-activity-log-e.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/individual-rpts/r-activity-log-e/r-activity-log-e.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2 id=\"org2\">Personal Reports</h2>\n\n<h2>Participant:\n    <span><select id=\"name-list2\" (click)=\"rService.getParticipantData('name-list2')\"></select></span>\n    <span> &nbsp;&nbsp; Hierarchy:</span><span id=\"hierarchy\"></span></h2>\n\n<h3>Time Sheet Report for the period from <span>\n        <!-- placeholder will not work, so stuck with dd----yyyyy -->\n        <input type=\"date\" id=\"startdate2\">\n    </span> to <span>\n        <input type=\"date\" id=\"enddate2\">\n        <button (click)=\"rService.ractivitylog_e()\">Generate report for selected period</button>\n    </span></h3>\n\n<!-- button onclick=\"javascript:alert('kkkkk')\">Try it</button> -->\n<!-- button (click)=\"rService.clearTable()\">Clear table</button> -->\n<!-- Table rows and headings only -->\n<table id=\"TbId2\">\n    <!-- headings -->\n    <tr>\n        <th align=\"left\">Action Item</th>\n        <th align=\"left\">Task Name</th>\n        <th align=\"left\">Start Date</th>\n        <th align=\"left\">End Date</th>\n        <th>Hours Spent</th>\n    </tr>\n</table>"

/***/ }),

/***/ "./src/app/individual-rpts/r-activity-log-e/r-activity-log-e.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/individual-rpts/r-activity-log-e/r-activity-log-e.component.ts ***!
  \********************************************************************************/
/*! exports provided: RActivityLogEComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RActivityLogEComponent", function() { return RActivityLogEComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/reports.service */ "./src/app/services/reports.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RActivityLogEComponent = /** @class */ (function () {
    // 05-May-2019: Use constructor for declaring services. Not a good idea to call functions here
    // although that can be done inside {}. (see Heroes tutorial on injectable services)
    function RActivityLogEComponent(rService) {
        this.rService = rService;
        // 05-May-2019. All code for reports now done and called from reports service
        this.title = 'Activity log';
    }
    RActivityLogEComponent.prototype.ngOnInit = function () {
        //14-May-2019. Show current compnay
        document.getElementById("org2").innerText = "Enterprise: " + this.rService.EnterpriseName;
        this.setCompany = this.rService.EnterpriseName;
        // 15-May-2019. Create name drop down list based on hierarchy
        this.rService.getParticipants(this.rService.EnterpriseID, "Executive");
        //populate users generated from above
        var namelist = document.getElementById("name-list2");
        var opt;
        this.participantsLists = this.rService.Participants.forEach(function (doc) {
            for (var i = 0; i < doc.length; i++) {
                //console.log(doc[i].name);
                opt = document.createElement("option");
                opt.value = String(i);
                opt.innerText = doc[i].name;
                namelist.appendChild(opt);
            }
        });
        var strM = Date().substring(4, 7);
        var date = String(Date().substring(11, 15)) +
            '-' + String(this.rService.numMonth(strM)) +
            '-' + String(Date().substring(8, 10));
        //06-05-2019. Had to use value instead of Value for this to work
        //need to cast element type to prevent compile error
        var Inp1 = document.getElementById("startdate2");
        Inp1.value = date;
        var Inp2 = document.getElementById("enddate2");
        Inp2.value = date;
    };
    RActivityLogEComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-r-activity-log-e',
            template: __webpack_require__(/*! ./r-activity-log-e.component.html */ "./src/app/individual-rpts/r-activity-log-e/r-activity-log-e.component.html"),
            styles: [__webpack_require__(/*! ./r-activity-log-e.component.css */ "./src/app/individual-rpts/r-activity-log-e/r-activity-log-e.component.css")]
        }),
        __metadata("design:paramtypes", [_services_reports_service__WEBPACK_IMPORTED_MODULE_1__["ReportsService"]])
    ], RActivityLogEComponent);
    return RActivityLogEComponent;
}());



/***/ }),

/***/ "./src/app/individual-rpts/r-os-actions-e/r-os-actions-e.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/individual-rpts/r-os-actions-e/r-os-actions-e.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    font-family: arial, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n\r\ninput[type=\"date\"] {\r\n    color:blue;\r\n    font-weight:bold;\r\n    font-size:14px;\r\n    font-family:sans-serif;\r\n    width:140px;\r\n}\r\n\r\ntd, td0, td1, td2, td3, td4, td5, th {\r\n    border: 1px solid #070707;\r\n    padding: 8px;\r\n}\r\n\r\nh1,h2,h3,h4 {\r\n  font-family: Arial;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kaXZpZHVhbC1ycHRzL3Itb3MtYWN0aW9ucy1lL3Itb3MtYWN0aW9ucy1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjs7QUFFRjtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2luZGl2aWR1YWwtcnB0cy9yLW9zLWFjdGlvbnMtZS9yLW9zLWFjdGlvbnMtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbmlucHV0W3R5cGU9XCJkYXRlXCJdIHtcclxuICAgIGNvbG9yOmJsdWU7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6MTQwcHg7XHJcbn1cclxuXHJcbnRkLCB0ZDAsIHRkMSwgdGQyLCB0ZDMsIHRkNCwgdGQ1LCB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDcwNzA3O1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG5oMSxoMixoMyxoNCB7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/individual-rpts/r-os-actions-e/r-os-actions-e.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/individual-rpts/r-os-actions-e/r-os-actions-e.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2 id=\"org3\">Personal Reports</h2>\n<!-- <div class=\"card-header text-left\" *ngIf=\"enterprise !== '' || enterprise === undefined\">\n    <h2>Enterprise: {{ enterprise }} Personal Reports</h2>\n</div><br> -->\n\n<h2>Participant: \n<span><select id = \"name-list3\"></select></span>\n<span> &nbsp;&nbsp; Hierarchy:</span><span id = \"hierarchy\"></span></h2>\n\n<h3>Outstanding activities as at <span>\n\t\t<!-- placeholder will not work, so stuck with dd----yyyyy -->\n\t\t<input type=\"date\" id=\"startdate3\">\n\t<!-- </span> to <span> -->\n\t\t<!-- <input type=\"date\" id=\"enddate\" (click)=\"rService.getParticipantData()\"> -->\n<button (click)=\"rService.rostasks_e()\">Generate report for selected period</button>\n</span></h3>\n<!-- button onclick=\"javascript:alert('kkkkk')\">Try it</button> -->\n<!-- button (click)=\"rService.clearTable()\">Clear table</button> -->\n<!-- Table rows and headings only -->\n<table id=\"TbId3\">\n    <!-- headings -->\n    <tr>\n        <th align=\"left\">Action Item</th>\n        <th align=\"left\">Task Name</th>\n        <th>Action Planned Start</th>\n        <th>Days Lapsed</th>\n        <th>Actual Start</th>\n        <th>Hours Logged</th>\n    </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/individual-rpts/r-os-actions-e/r-os-actions-e.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/individual-rpts/r-os-actions-e/r-os-actions-e.component.ts ***!
  \****************************************************************************/
/*! exports provided: ROsActionsEComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROsActionsEComponent", function() { return ROsActionsEComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/reports.service */ "./src/app/services/reports.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ROsActionsEComponent = /** @class */ (function () {
    // 05-May-2019: Use constructor for declaring services. Not a good idea to call functions here
    // although that can be done inside {}. (see Heroes tutorial on injectable services)
    function ROsActionsEComponent(rService) {
        this.rService = rService;
        // 05-May-2019. All code for reports now done and called from reports service
        this.title = 'Activity log';
    }
    ROsActionsEComponent.prototype.ngOnInit = function () {
        //14-May-2019. Show current compnay
        document.getElementById("org3").innerText = "Enterprise: " + this.rService.EnterpriseName;
        this.enterprise = this.rService.EnterpriseName;
        // 15-May-2019. Create name drop down list based on hierarchy
        this.rService.getParticipants(this.rService.EnterpriseID, "Executive");
        //populate users generated from above
        var namelist = document.getElementById("name-list3");
        var opt;
        this.rService.Participants.forEach(function (doc) {
            for (var i = 0; i < doc.length; i++) {
                //console.log(doc[i].name);
                opt = document.createElement("option");
                opt.value = String(i);
                opt.innerText = doc[i].name;
                namelist.appendChild(opt);
            }
        });
        var strM = Date().substring(4, 7);
        var date = String(Date().substring(11, 15)) +
            '-' + String(this.rService.numMonth(strM)) +
            '-' + String(Date().substring(8, 10));
        //06-05-2019. Had to use value instead of Value for this to work
        //need to cast element type to prevent compile error
        var Inp1 = document.getElementById("startdate3");
        Inp1.value = date;
        var Inp2 = document.getElementById("enddate3");
        Inp2.value = date;
    };
    ROsActionsEComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-r-os-actions-e',
            template: __webpack_require__(/*! ./r-os-actions-e.component.html */ "./src/app/individual-rpts/r-os-actions-e/r-os-actions-e.component.html"),
            styles: [__webpack_require__(/*! ./r-os-actions-e.component.css */ "./src/app/individual-rpts/r-os-actions-e/r-os-actions-e.component.css")]
        }),
        __metadata("design:paramtypes", [_services_reports_service__WEBPACK_IMPORTED_MODULE_1__["ReportsService"]])
    ], ROsActionsEComponent);
    return ROsActionsEComponent;
}());



/***/ }),

/***/ "./src/app/individual-rpts/r-os-tasks-e/r-os-tasks-e.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/individual-rpts/r-os-tasks-e/r-os-tasks-e.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    font-family: arial, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n\r\ninput[type=\"date\"] {\r\n  color:blue;\r\n  font-weight:bold;\r\n  font-size:14px;\r\n  font-family:sans-serif;\r\n  width:140px;\r\n}\r\n\r\ntd, td0, td1, td2, td3, td4, th {\r\n    border: 1px solid #070707;\r\n    padding: 8px;\r\n}\r\n\r\nh1,h2,h3,h4 {\r\n  font-family: Arial;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kaXZpZHVhbC1ycHRzL3Itb3MtdGFza3MtZS9yLW9zLXRhc2tzLWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDhCQUE4QjtJQUM5Qix5QkFBeUI7SUFDekIsV0FBVztFQUNiOztBQUVGO0VBQ0UsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvaW5kaXZpZHVhbC1ycHRzL3Itb3MtdGFza3MtZS9yLW9zLXRhc2tzLWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIGZvbnQtZmFtaWx5OiBhcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG5pbnB1dFt0eXBlPVwiZGF0ZVwiXSB7XHJcbiAgY29sb3I6Ymx1ZTtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG4gIGZvbnQtc2l6ZToxNHB4O1xyXG4gIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XHJcbiAgd2lkdGg6MTQwcHg7XHJcbn1cclxuXHJcbnRkLCB0ZDAsIHRkMSwgdGQyLCB0ZDMsIHRkNCwgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzA3MDcwNztcclxuICAgIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuaDEsaDIsaDMsaDQge1xyXG4gIGZvbnQtZmFtaWx5OiBBcmlhbDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/individual-rpts/r-os-tasks-e/r-os-tasks-e.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/individual-rpts/r-os-tasks-e/r-os-tasks-e.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 id=\"org4\">Personal Reports</h2>\n\n<h2>Participant: \n<span><select id = \"name-list4\"></select></span>\n<span> &nbsp;&nbsp; Hierarchy:</span><span id = \"hierarchy\"></span></h2>\n\n<h3>Schedule of Outstanding Tasks as at <span>\n\t\t<!-- placeholder will not work, so stuck with dd----yyyyy -->\n\t\t<input type=\"date\" id=\"startdate4\">\n<button (click)=\"rService.rostasks_e()\">View Oustanding Tasks for selected date</button>\n</span></h3>\n<!-- Table rows and headings only -->\n<table id=\"TbId4\">\n    <!-- headings -->\n    <tr>\n        <th align=\"left\">Task</th>\n        <th align=\"left\">Planned Finish Date</th>\n        <th align=\"left\">Classification</th>\n    </tr>\n</table>\n"

/***/ }),

/***/ "./src/app/individual-rpts/r-os-tasks-e/r-os-tasks-e.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/individual-rpts/r-os-tasks-e/r-os-tasks-e.component.ts ***!
  \************************************************************************/
/*! exports provided: ROsTasksEComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROsTasksEComponent", function() { return ROsTasksEComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/reports.service */ "./src/app/services/reports.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ROsTasksEComponent = /** @class */ (function () {
    function ROsTasksEComponent(rService) {
        this.rService = rService;
    }
    ROsTasksEComponent.prototype.ngOnInit = function () {
        //14-May-2019. Show current company
        document.getElementById("org4").innerText = "Enterprise: " + this.rService.EnterpriseName;
        // 15-May-2019. Create name drop down list based on hierarchy
        this.rService.getParticipants(this.rService.EnterpriseID, "Executive");
        //populate users generated from above
        var namelist = document.getElementById("name-list4");
        var opt;
        this.rService.Participants.forEach(function (doc) {
            for (var i = 0; i < doc.length; i++) {
                //console.log(doc[i].name);
                opt = document.createElement("option");
                opt.value = String(i);
                opt.innerText = doc[i].name;
                namelist.appendChild(opt);
            }
        });
        var strM = Date().substring(4, 7);
        var date = String(Date().substring(11, 15)) +
            '-' + String(this.rService.numMonth(strM)) +
            '-' + String(Date().substring(8, 10));
        //06-05-2019. Had to use value instead of Value for this to work
        //need to cast element type to prevent compile error
        var Inp1 = document.getElementById("startdate4");
        Inp1.value = date;
    };
    ROsTasksEComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-r-os-tasks-e',
            template: __webpack_require__(/*! ./r-os-tasks-e.component.html */ "./src/app/individual-rpts/r-os-tasks-e/r-os-tasks-e.component.html"),
            styles: [__webpack_require__(/*! ./r-os-tasks-e.component.css */ "./src/app/individual-rpts/r-os-tasks-e/r-os-tasks-e.component.css")]
        }),
        __metadata("design:paramtypes", [_services_reports_service__WEBPACK_IMPORTED_MODULE_1__["ReportsService"]])
    ], ROsTasksEComponent);
    return ROsTasksEComponent;
}());



/***/ }),

/***/ "./src/app/individual-rpts/r-time-spent-e/r-time-spent-e.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/individual-rpts/r-time-spent-e/r-time-spent-e.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table {\r\n    font-family: arial, sans-serif;\r\n    border-collapse: collapse;\r\n    width: 100%;\r\n  }\r\n\r\ninput[type=\"date\"] {\r\n    color:blue;\r\n    font-weight:bold;\r\n    font-size:14px;\r\n    font-family:sans-serif;\r\n    width:140px;\r\n}\r\n\r\ntd, td0, td1, td2, td3, td4, th {\r\n    border: 1px solid #070707;\r\n    padding: 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kaXZpZHVhbC1ycHRzL3ItdGltZS1zcGVudC1lL3ItdGltZS1zcGVudC1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw4QkFBOEI7SUFDOUIseUJBQXlCO0lBQ3pCLFdBQVc7RUFDYjs7QUFFRjtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2luZGl2aWR1YWwtcnB0cy9yLXRpbWUtc3BlbnQtZS9yLXRpbWUtc3BlbnQtZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gICAgZm9udC1mYW1pbHk6IGFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbmlucHV0W3R5cGU9XCJkYXRlXCJdIHtcclxuICAgIGNvbG9yOmJsdWU7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xyXG4gICAgd2lkdGg6MTQwcHg7XHJcbn1cclxuXHJcbnRkLCB0ZDAsIHRkMSwgdGQyLCB0ZDMsIHRkNCwgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzA3MDcwNztcclxuICAgIHBhZGRpbmc6IDhweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/individual-rpts/r-time-spent-e/r-time-spent-e.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/individual-rpts/r-time-spent-e/r-time-spent-e.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h2 id=\"org1\">Personal Reports</h2>\n<!-- <div class=\"card-header text-left\" *ngIf=\"company !== '' || company === undefined\">\n    <h2>{{ company }}'s Individual Total Time spent Report</h2>\n</div><br> -->\n\n<h2>Participant:\n    <span><select id=\"name-list1\"></select></span>\n    <span> &nbsp;&nbsp; Hierarchy:</span><span id=\"hierarchy\"></span></h2>\n\n<h3>Total Time spent on an Task Activity for the period from <span>\n        <!-- placeholder will not work, so stuck with dd----yyyyy -->\n        <input type=\"date\" id=\"startdate1\">\n    </span> to <span>\n        <input type=\"date\" id=\"enddate1\">\n        <button (click)=\"rService.rtimespent_e()\">Generate report for selected period</button>\n    </span></h3>\n<!-- button onclick=\"javascript:alert('kkkkk')\">Try it</button> -->\n<!-- button (click)=\"rService.clearTable()\">Clear table</button> -->\n<!-- Table rows and headings only -->\n<table id=\"TbId1\">\n    <!-- headings -->\n    <tr>\n        <th align=\"left\">Action Item</th>\n        <th align=\"left\">Task Name</th>\n        <th>Hours Spent</th>\n    </tr>\n</table>"

/***/ }),

/***/ "./src/app/individual-rpts/r-time-spent-e/r-time-spent-e.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/individual-rpts/r-time-spent-e/r-time-spent-e.component.ts ***!
  \****************************************************************************/
/*! exports provided: RTimeSpentEComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RTimeSpentEComponent", function() { return RTimeSpentEComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reports_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/reports.service */ "./src/app/services/reports.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RTimeSpentEComponent = /** @class */ (function () {
    //05-May-2019: Use constructor for declaring services. Not a good idea to call functions here
    // although that can be done inside {}. (see Heroes tutorial on injectable services)
    function RTimeSpentEComponent(router, rService) {
        this.router = router;
        this.rService = rService;
        this.company = '';
    }
    RTimeSpentEComponent.prototype.ngOnInit = function () {
        //14-May-2019. Show current company
        // document.getElementById("org").innerText = this.rService.Enterprise + " Individual Total Time spent Report";
        document.getElementById("org1").innerText = "Enterprise" + this.rService.EnterpriseName;
        // this.company = this.rService.EnterpriseName;
        // if (this.company === undefined || this.company === '') {
        //   this.routerTo();
        // } else {
        // 15-May-2019. Create name drop down list based on hierarchy
        // document.getElementById("org").innerText = this.rService.EnterpriseName + " Individual Report";
        // 15-May-2019. Create name drop down list based on hierarchy
        this.rService.getParticipants(this.rService.EnterpriseID, "Executive");
        //populate users generated from above
        var namelist = document.getElementById("name-list1");
        var opt;
        this.rService.Participants.forEach(function (doc) {
            for (var i = 0; i < doc.length; i++) {
                //console.log(doc[i].name);
                opt = document.createElement("option");
                opt.value = String(i);
                opt.innerText = doc[i].name;
                namelist.appendChild(opt);
            }
        });
        var strM = Date().substring(4, 7);
        var date = String(Date().substring(11, 15)) +
            '-' + String(this.rService.numMonth(strM)) +
            '-' + String(Date().substring(8, 10));
        //06-05-2019. Had to use value instead of Value for this to work
        // need to cast element type to prevent compile error
        var Inp1 = document.getElementById("startdate1");
        Inp1.value = date;
        var Inp2 = document.getElementById("enddate1");
        Inp2.value = date;
    };
    // }
    RTimeSpentEComponent.prototype.routerTo = function () {
        this.router.navigate(['./dashboard']);
    };
    RTimeSpentEComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-r-time-spent-e',
            template: __webpack_require__(/*! ./r-time-spent-e.component.html */ "./src/app/individual-rpts/r-time-spent-e/r-time-spent-e.component.html"),
            styles: [__webpack_require__(/*! ./r-time-spent-e.component.css */ "./src/app/individual-rpts/r-time-spent-e/r-time-spent-e.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_reports_service__WEBPACK_IMPORTED_MODULE_1__["ReportsService"]])
    ], RTimeSpentEComponent);
    return RTimeSpentEComponent;
}());



/***/ })

}]);
//# sourceMappingURL=individual-rpts-individual-rpts-module.js.map