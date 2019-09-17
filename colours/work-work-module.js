(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["work-work-module"],{

/***/ "./src/app/work/work.component.css":
/*!*****************************************!*\
  !*** ./src/app/work/work.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loBorder{\r\n    border-top: none;\r\n    border-left: 0px;\r\n    border-right: 0px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29yay93b3JrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC93b3JrL3dvcmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb0JvcmRlcntcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBib3JkZXItbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwcHhcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/work/work.component.html":
/*!******************************************!*\
  !*** ./src/app/work/work.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xs-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"nav-tabs-navigation\" style=\"margin-bottom: 0px;\">\r\n                        <div class=\"nav-tabs-wrapper\">\r\n                            <ul id=\"tabs\" class=\"nav nav-tabs\" role=\"tablist\">\r\n                                <!-- <li class=\"nav-item\">\r\n                                    <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#project\" role=\"tab\" aria-expanded=\"true\">Projects</a>\r\n                                </li> -->\r\n                                <!-- <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#company\" role=\"tab\" aria-expanded=\"false\">Enterprise</a>\r\n                                </li> -->\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link active\" data-toggle=\"tab\" routerLink=\"/projects/p-create\" role=\"tab\" aria-expanded=\"true\">Projects</a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" data-toggle=\"tab\" routerLink=\"/enterprises/create\" role=\"tab\" aria-expanded=\"false\">Enterprise</a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <div id=\"my-tab-content\" class=\"tab-content\">\r\n                        <div class=\"tab-pane active\" id=\"project\" role=\"tabpanel\" aria-expanded=\"true\">\r\n                            <div class=\"col-md-12 ml-auto mr-auto\">\r\n                                <div class=\"card\">\r\n                                    <div *ngIf=\"pfirstPage\" class=\"col-md-12\">\r\n                                        <div class=\"card-header \">\r\n                                            <div class=\"row\">\r\n                                                <h5 class=\"title na-am\">Create new Project</h5>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"pSecondPage\" class=\"col-md-12\">\r\n                                        <div class=\"card-header \">\r\n                                            <div class=\"row\">\r\n                                                <h5 class=\"title na-am\">{{ project.name }} <br> <small>Add Project Description</small></h5>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"pfirstPage\" class=\"col-md-10 ml-auto mr-auto\">\r\n                                        <div class=\"card-body \">\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Project Name</label>\r\n                                                <div class=\"col-md-9\">\r\n                                            <p *ngIf=\"projectNameFieldStatus\" class=\"category text-danger\" style=\"margin-top:-1em; cursor: pointer;\">Name Required</p>\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"project.name\" name=\"enterprise_name\"\r\n                                                            class=\"form-control\" placeholder=\"e.g..Bob Corp\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Industry Sector</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <p *ngIf=\"projectSectorFieldStatus\" class=\"category text-danger\" style=\"margin-bottom:0em; cursor: pointer;\">Sector Required</p>\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"project.sector\" class=\"form-control\"\r\n                                                            placeholder=\"e.g..Transport\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Location</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <p *ngIf=\"projectLocationFieldStatus\" class=\"category text-danger\" style=\"margin-bottom:0em; cursor: pointer;\">Location Required</p>\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"project.location\" name=\"enterprise_location\"\r\n                                                            class=\"form-control\" placeholder=\"e.g..Mutare\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Project Type</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                <p *ngIf=\"projectTypeFieldStatus\" class=\"category text-danger\" style=\"margin-bottom:0em; cursor: pointer;\">Type Required</p>\r\n                                                    <div class=\"form-group\">\r\n                                                        <ng-select [items]=\"projectType\" title=\"Select Project Type\" bindLabel=\"name\" name=\"ptype\" placeholder=\"Project Type\" (change)=\"checkType(typeSet)\"\r\n                                                            [(ngModel)]=\"typeSet\">\r\n                                                        </ng-select>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\" *ngIf=\"showComp\">\r\n                                                <label class=\"col-md-3 col-form-label\">Select Company</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <p *ngIf=\"projectCompanyFieldStatus\" class=\"category text-danger\" style=\"margin-bottom:0em; cursor: pointer;\">Company Required</p>\r\n                                                    <div class=\"form-group\">\r\n                                                        <ng-select [items]=\"myEnterprises | async\" title=\"Select Company\" bindLabel=\"name\" name=\"pCompany\" placeholder=\"Company\" (change)=\"showCompanyTeam(setCompany)\"\r\n                                                            [(ngModel)]=\"setCompany\">\r\n                                                        </ng-select>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\" *ngIf=\"showComp\">\r\n                                                <label class=\"col-md-3 col-form-label\">Select Champion</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <p *ngIf=\"projectCompCampFieldStatus\" class=\"category text-danger\" style=\"margin-bottom:0em; cursor: pointer;\">Champ Required</p>\r\n                                                    <div class=\"form-group\">\r\n                                                        <ng-select [items]=\"comWorkers | async\" title=\"Select Company\" bindLabel=\"name\" name=\"pChampion\" placeholder=\"Champion\" (change)=\"setNext(setChampion)\"\r\n                                                            [(ngModel)]=\"setChampion\">\r\n                                                        </ng-select>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\" *ngIf=\"showComp\">\r\n                                            <label class=\"col-md-3 col-form-label\">Roles</label>\r\n                                            <div class=\"col-md-9\">\r\n                                                <tag-input [(ngModel)]='roles' theme='minimal'></tag-input>\r\n                                            </div>\r\n                                            </div>\r\n                                            <div class=\"card-footer\" *ngIf=\"showNext\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-11 ml-auto mr-auto\">\r\n                                                        <!-- <button type=\"submit\" style=\"padding-right:0em\" class=\"pull-left primary btn-link\" routerLink=\"/join-project\">Join a Project</button> -->\r\n                                                    </div>\r\n                                                    <div class=\"col-md-1 mr-auto\">\r\n                                                        <button type=\"submit\" (click)=\"testProjectFilds(project, typeSet, setCompany, setChampion)\"\r\n                                                         name=\"enterprise_sector\" class=\"btn-link\">Next</button>\r\n                                                    </div><!-- (click)=\"saveProject()\" -->\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"pSecondPage\" class=\"col-md-10 ml-auto mr-auto\">\r\n                                        <div class=\"card-body \">\r\n                                            <!-- <a class=\"card-category clrs-h1\">{{ project.name }} <br> <small>Add Project Description</small></a>     -->\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-12\">\r\n                                                    <p *ngFor=\"let xsection of theSections | async\">\r\n                                                        <span class=\"col-md-4\">{{ xsection.no }}</span>\r\n                                                        <span class=\"col-md-8\"> {{ xsection.name }}</span>\r\n                                                        <span>\r\n                                                            <button class=\"btn-link\" (click)=\"deleteSection(xsection)\"><i class=\"fa fa-times\"></i></button>\r\n                                                        </span><br>\r\n                                                    </p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <p>Create Sections for the Project</p>   \r\n                                            <div class=\"row\" rel=\"tooltip\" title=\"Section No\">\r\n                                                <label class=\"col-md-3 col-form-label\">No</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"number\" [(ngModel)]=\"section.no\" name=\"enterprise_location\" class=\"form-control\"\r\n                                                            placeholder=\"e.g   1,2,3....\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\" rel=\"tooltip\" title=\"Section Nameo\">\r\n                                                <label class=\"col-md-3 col-form-label\">Name</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"section.name\" name=\"enterprise_location\" class=\"form-control\"\r\n                                                            placeholder=\"e.g. Section Name\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-10\"></div>\r\n                                                <div class=\"col-md-2\">\r\n                                                    <button type=\"submit reset\" class=\"btn-link\" (click)=\"addSection()\">Add</button>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"card-footer\" *ngIf=\"showNext\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-3\">\r\n                                                    </div>\r\n                                                    <div class=\"col-md-8\">\r\n                                                        <button type=\"submit\" name=\"nextBtn\" (click)=\"pBckPage()\" class=\"btn-link text-info\">Dismiss</button>                                                    \r\n                                                        <button type=\"submit\" (click)=\"finish()\" name=\"enterprise_sector\" class=\"btn-link\">Save</button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"card-footer \">\r\n                                            <div class=\"row\">\r\n                                                <h5 class=\"title na-am\">Or Join Existing Project <a routerLink=\"/join-project\"> <small> click to join </small></a></h5>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane\" id=\"company\" role=\"tabpanel\" aria-expanded=\"false\">\r\n                            <div class=\"col-md-12 ml-auto mr-auto\">\r\n                                <div class=\"card\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"card-header \">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-8 ml-auto mr-auto\">\r\n                                                    <h5 class=\"title na-am\">Create Company</h5>\r\n                                                </div>\r\n                                                <div class=\"col-md-4 mr-auto ml-auto\" style=\"margin-right:0em\">\r\n                                                    <!-- <button type=\"submit\" style=\"padding-right:0em\" class=\"pull-left primary btn-link\" routerLink=\"/enterprises/join-enterprise\">Join existing Enterprise</button> -->\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"firstPage\" class=\"col-md-10 ml-auto mr-auto\">\r\n                                        <div class=\"card-body\">\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Enterprise Name</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"newEnterprise.name\" name=\"enterprise_name\"\r\n                                                            class=\"form-control\" placeholder=\"e.g..Bob Corp\">\r\n                                                    </div>\r\n                                                    <p *ngIf=\"entName\" class=\"category text-danger pull-right\"><small>Enterprise name required</small></p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Location</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"newEnterprise.location\" name=\"enterprise_location\"\r\n                                                            class=\"form-control\" placeholder=\"e.g..Mutare\">\r\n                                                    </div>\r\n                                                <p *ngIf=\"entLocation\" class=\"category text-danger\"><small>Locarion required</small></p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Industry Sector</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"newEnterprise.sector\" class=\"form-control\"\r\n                                                            placeholder=\"e.g..Transport\">\r\n                                                    </div>\r\n                                                    <p *ngIf=\"entSector\" class=\"category text-danger\"><small>Sector required</small></p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Services</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <tag-input [(ngModel)]='serviceTags' theme='minimal'></tag-input>\r\n                                                </div>\r\n                                                <p *ngIf=\"entServices\" class=\"category text-danger\"><small>Services required</small></p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"card-footer \">\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3\"></label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <button type=\"submit\" name=\"nextBtn\" (click)=\"nxtPage()\" class=\"btn-link text-info\" >Next</button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"secondPage\" class=\"col-md-10 ml-auto mr-auto\">\r\n                                        <div class=\"card-body\">\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Telephone</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"newEnterprise.telephone\" name=\"enterprise_location\"\r\n                                                            class=\"form-control\" placeholder=\"e.g. 06 66666666\">\r\n                                                    </div>\r\n                                                    <p *ngIf=\"telMsg\" class=\"category text-danger pull-right\"><small>Telephone required</small></p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Mobile</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"compUser.phoneNumber\" name=\"enterprise_location\" class=\"form-control\"\r\n                                                            placeholder=\"e.g. +263778880000\">\r\n                                                    </div>\r\n                                                    <p *ngIf=\"mobileMsg\" class=\"category text-danger\"><small>Your Mobile required</small></p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Address</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"newEnterprise.address\" name=\"enterprise_location\"\r\n                                                            class=\"form-control\" placeholder=\"e.g. House#, street, location ,Town\">\r\n                                                    </div>\r\n                                                    <p *ngIf=\"addressMsg\" class=\"category text-danger\"><small>Address required</small></p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Email</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"email\" [(ngModel)]=\"compUser.bus_email\" name=\"enterprise_location\"\r\n                                                            class=\"form-control\" placeholder=\"e.g. name@bus_email.com\">\r\n                                                    </div>\r\n                                                    <p *ngIf=\"emailMsg\" class=\"category text-danger\"><small>Email required</small></p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Nation</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"compUser.nationality\" name=\"enterprise_location\"\r\n                                                            class=\"form-control\" placeholder=\"e.g. Zimbabwe\">\r\n                                                    </div>\r\n                                                    <p *ngIf=\"countryMsg\" class=\"category text-danger\"><small>Country required</small></p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">ID number</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"compUser.nationalId\" name=\"enterprise_location\"\r\n                                                            class=\"form-control\" placeholder=\"e.g. 08-1112389 N13\">\r\n                                                    </div>\r\n                                                    <p *ngIf=\"nidMsg\" class=\"category text-danger pull-right\"><small>National ID required</small></p>\r\n                                                </div>\r\n                                            </div>\r\n\r\n                                            <!-- <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Tax Clearance Doc</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\r\n                                                        <input class=\"form-control\" type=\"file\" style=\"border: 0px;\" (click)=\"upload($event,newEnterprise.taxDocument)\" name=\"taxDoc\" accept=\".png,.jpg,.pdf\" [(ngModel)]=\"newEnterprise.taxDocument\"/>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div> -->\r\n                                        </div>\r\n                                        <div class=\"card-footer \">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-3\">\r\n                                                </div>\r\n                                                <div class=\"col-md-8\">\r\n                                                    <button type=\"submit\" name=\"nextBtn\" (click)=\"bckPage()\" class=\"btn-link text-info\">Back</button>                                                    \r\n                                                    <!-- <button type=\"submit\" (click)=\"saveEnterprise()\" name=\"enterprise_sector\" class=\"btn-link text-info\">Save company</button> -->\r\n                                                    <button type=\"submit\" (click)=\"testFileds()\" name=\"enterprise_sector\" class=\"btn-link text-info\">Save company</button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"card-footer \">\r\n                                            <div class=\"row\">\r\n                                                <!-- <div class=\"col-md-8 ml-auto mr-auto\"> -->\r\n                                                    <h5 class=\"title na-am\">Or Join an existing Company <small><span>\r\n                                                        <button class=\"btn-link\" routerLink=\"/enterprises/join-enterprise\">click here</button></span></small>\r\n                                                    </h5>\r\n                                                <!-- </div>\r\n                                                <div class=\"col-md-4 mr-auto ml-auto\" style=\"margin-right:0em\">\r\n                                                    <button type=\"submit\" style=\"padding-right:0em\" class=\"pull-left primary btn-link\" routerLink=\"/enterprises/join-enterprise\">Join existing Enterprise</button>\r\n                                                </div> -->\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"pModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header justify-content-center\">\r\n                <p>Select Company</p>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <i class=\"nc-icon nc-simple-remove\"></i>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"table-responsive pro_info\">\r\n                    <table class=\"table\">\r\n                        <thead class=\"\">\r\n                            <th>Name</th>\r\n                            <th>Created By</th>\r\n                            <th>Action</th>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let ent of enterprises | async \">\r\n                                <td>{{ ent.name }} </td>\r\n                                <td>{{ ent.by}}</td>\r\n                                <td class=\"text-center\">\r\n                                    <a class=\"warning btn-link edit\" routerLink=\"#\" rel=\"tooltip\" title=\"select {{ ent.name }}\"\r\n                                        (click)=\"selectCompany(ent)\" data-toggle=\"modal\" data-target=\"#noticeModal\">\r\n                                        <font size=2>Select</font>\r\n                                    </a>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"left-side\">\r\n                    <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Never mind</button>\r\n                </div>\r\n                <div class=\"divider\"></div>\r\n                <div class=\"right-side\">\r\n                    <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"saveProject()\" data-dismiss=\"modal\">Confirm</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade modal-primary\" id=\"pdescription\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-md\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <div class=\"modal-profile ml-auto mr-auto\">\r\n                    <i class=\"fa  fa-list-alt\"></i>\r\n                </div>\r\n                <a class=\"card-category clrs-h1\">{{ project.name }} <br> <small>Add Project Description</small></a>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"row\">\r\n                    <p *ngFor=\"let xsection of theSections | async\">\r\n                        <span class=\"col-md-4\">{{ xsection.no }}</span><span class=\"col-md-8\"> {{ xsection.name }}</span><span><button class=\"btn-link\" (click)=\"deleteSection(xsection)\"><i class=\"fa fa-times\"></i></button></span><br>\r\n                    </p>\r\n                </div>\r\n                <p>Create Sections for the Project</p>\r\n                <div class=\"row\" rel=\"tooltip\" title=\"Section No\">\r\n                    <label class=\"col-md-3 col-form-label\">No</label>\r\n                    <div class=\"col-md-9\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"number\" [(ngModel)]=\"section.no\" name=\"enterprise_location\"\r\n                                class=\"form-control\" placeholder=\"e.g   1,2,3....\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\"  rel=\"tooltip\" title=\"Section Nameo\">\r\n                    <label class=\"col-md-3 col-form-label\">Name</label>\r\n                    <div class=\"col-md-9\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" [(ngModel)]=\"section.name\" name=\"enterprise_location\"\r\n                                class=\"form-control\" placeholder=\"e.g. Section Name\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-10\"></div>\r\n                <div class=\"col-md-2\">\r\n                    <button type=\"submit reset\" class=\"btn-link\" (click)=\"addSection()\">Add</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"spacer\" style=\"height: 2em\"></div>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"left-side\">\r\n                    <button type=\"button\" (click)=\"dismisProject()\" class=\"btn btn-link\" data-dismiss=\"modal\">Back</button>\r\n                </div>\r\n                <div class=\"divider\"></div>\r\n                <div class=\"right-side\">\r\n                    <button type=\"button\" class=\"btn btn-link\" data-dismiss=\"modal\" (click)=\"finish()\">Save</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/work/work.component.ts":
/*!****************************************!*\
  !*** ./src/app/work/work.component.ts ***!
  \****************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
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










var WorkComponent = /** @class */ (function () {
    // public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });
    // public uploader: FileUploader = new FileUploader({});
    function WorkComponent(afAuth, router, is, es, authService, ps, afs) {
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
    WorkComponent.prototype.testProjectFilds = function (project, typeSet, company, champion) {
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
    WorkComponent.prototype.upload = function (event, file) {
        console.log(file);
        // this.afs.upload.collection('try', event.target.files[0]);
    };
    WorkComponent.prototype.testFileds = function () {
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
    WorkComponent.prototype.nxtPage = function () {
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
    WorkComponent.prototype.bckPage = function () {
        this.firstPage = true;
        this.secondPage = false;
    };
    WorkComponent.prototype.pNxtPage = function () {
        this.pfirstPage = false;
        this.pSecondPage = true;
    };
    WorkComponent.prototype.pBckPage = function () {
        this.pfirstPage = true;
        this.pSecondPage = false;
        this.dismisProject();
    };
    WorkComponent.prototype.selectCompany = function (company) {
        console.log(company);
        this.selectedCompany = company;
    };
    WorkComponent.prototype.showCompanyTeam = function (setCompany) {
        this.comWorkers = this.afs.collection('Enterprises').doc(setCompany.id).collection('Participants').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    };
    WorkComponent.prototype.saveProject = function () {
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
    WorkComponent.prototype.setProject = function (project) {
        console.log(project);
        this.savedProject = project;
        console.log(this.savedProject);
    };
    WorkComponent.prototype.dismisProject = function () {
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
    WorkComponent.prototype.clear = function () {
        this.roles = null;
        this.typeSet = { id: "", name: "" };
        this.setChampion = null;
        this.savedProject = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", completion: "" };
        this.project = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", completion: "" };
        this.setCompany = { name: "", by: "", byId: "", createdOn: "", id: "", bus_email: "", location: "", sector: "", participants: null, champion: null, address: "", telephone: "", services: null, taxDocument: "", HnSDocument: "", IndustrialSectorDocument: "" };
    };
    WorkComponent.prototype.checkType = function (data) {
        if (data.id == "Enterprise") {
            this.showComp = true;
        }
        else {
            this.showComp = false;
            rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"];
        }
    };
    WorkComponent.prototype.setNext = function (data) {
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
    WorkComponent.prototype.addSection = function () {
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
    WorkComponent.prototype.showNotification = function (data, from, align) {
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
    WorkComponent.prototype.finish = function () {
        // this.router.navigate(['projects/', this.savedProject.id]).then(this.clear);
        // this.router.navigate(['projects/', this.savedProject.id]);
        // this.router.navigate(['/projects/', this.savedProject.id]);
        // nrouter.navigate(['enterprises/', compRef]);
        this.showNotification('project', 'top', 'right');
        this.pBckPage();
        // alert(this.savedProject.name + 'project has been created check')
        this.clear();
    };
    WorkComponent.prototype.deleteSection = function (section) {
        var sectionId = section.id;
        var dref = this.afs.collection('Projects').doc(section.projectId).collection('sections');
        var entRef = this.afs.collection('Enterprises').doc(section.companyId).collection('projects').doc(section.projectId).collection('sections');
        var myProRef = this.afs.collection('/Users').doc(this.myData.id).collection('projects').doc(section.projectId).collection('sections');
        dref.doc(sectionId).delete();
        entRef.doc(sectionId).delete();
        myProRef.doc(sectionId).delete();
    };
    WorkComponent.prototype.sectionInit = function () {
        this.project = this.is.getSelectedProject();
        this.savedProject = this.is.getSelectedProject();
        this.section = this.is.getSectionInit();
    };
    WorkComponent.prototype.deleteProject = function (projectId) {
        var _this = this;
        this.afAuth.user.subscribe(function (user) {
            console.log(projectId);
            var prodocref = _this.afs.collection('/Users').doc(user.uid).collection('projects').doc(projectId);
            prodocref.delete();
            _this.afs.collection('Projects').doc(projectId).delete();
        });
    };
    WorkComponent.prototype.saveEnterprise = function () {
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
    WorkComponent.prototype.callData = function () {
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
    WorkComponent.prototype.OnInit = function () {
        $('[rel="tooltip"]').tooltip();
        var tagClass = $('.tagsinput').data('color');
        if ($(".tagsinput").length != 0) {
            $('.tagsinput').tagsinput();
        }
        $('.bootstrap-tagsinput').addClass('' + tagClass + '-badge');
    };
    WorkComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.user.subscribe(function (user) {
            _this.userId = user.uid;
            _this.user = user;
            _this.callData();
        });
        this.typeValidation = this.is.getnewEnterprise();
        this.typeProjectValidation = this.is.getSelectedProject();
    };
    WorkComponent.prototype.save = function (model, isValid) {
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
    WorkComponent.prototype.save2 = function (model, isValid) {
        // call API to save customer
        if (isValid) {
            console.log(model, isValid);
            this.project = model;
            this.saveProject();
        }
    };
    WorkComponent.prototype.onSubmit = function (value) {
        console.log(value);
    };
    WorkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! ./work.component.html */ "./src/app/work/work.component.html"),
            styles: [__webpack_require__(/*! ./work.component.css */ "./src/app/work/work.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_services_initialise_service__WEBPACK_IMPORTED_MODULE_7__["InitialiseService"], app_services_enterprise_service__WEBPACK_IMPORTED_MODULE_8__["EnterpriseService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], app_services_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], WorkComponent);
    return WorkComponent;
}());



/***/ }),

/***/ "./src/app/work/work.module.ts":
/*!*************************************!*\
  !*** ./src/app/work/work.module.ts ***!
  \*************************************/
/*! exports provided: WorkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkModule", function() { return WorkModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _work_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./work.component */ "./src/app/work/work.component.ts");
/* harmony import */ var _work_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./work.routing */ "./src/app/work/work.routing.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var WorkModule = /** @class */ (function () {
    function WorkModule() {
    }
    WorkModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_work_routing__WEBPACK_IMPORTED_MODULE_5__["WorkRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_6__["NgSelectModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_7__["TagInputModule"]
            ],
            declarations: [_work_component__WEBPACK_IMPORTED_MODULE_4__["WorkComponent"]]
        })
    ], WorkModule);
    return WorkModule;
}());



/***/ }),

/***/ "./src/app/work/work.routing.ts":
/*!**************************************!*\
  !*** ./src/app/work/work.routing.ts ***!
  \**************************************/
/*! exports provided: WorkRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkRoutes", function() { return WorkRoutes; });
/* harmony import */ var _work_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./work.component */ "./src/app/work/work.component.ts");

var WorkRoutes = [{
        path: '',
        children: [{
                path: 'work',
                component: _work_component__WEBPACK_IMPORTED_MODULE_0__["WorkComponent"]
            }]
    }];


/***/ })

}]);
//# sourceMappingURL=work-work-module.js.map