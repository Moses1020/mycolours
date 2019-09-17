(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-company-module"],{

/***/ "./src/app/company/company.component.css":
/*!***********************************************!*\
  !*** ./src/app/company/company.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY29tcGFueS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/company/company.component.html":
/*!************************************************!*\
  !*** ./src/app/company/company.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"card card-plain\">\n    <div class=\"card-body\">\n      <!-- <div class=\"row\">\n        <div class=\"col-sm-6\">\n          <div class=\"card\">\n            <div class=\"card-body text-center\">\n              <code>login/logout</code>\n              <div *ngIf=\"afAuth.user | async as user; else showLogin\">\n                <button (click)=\"logout()\">Logout</button>\n              </div>\n              <ng-template #showLogin>\n                <p>Please login.</p>\n                <button (click)=\"login()\">Login with Google</button>\n              </ng-template>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-sm-6\">\n          <div class=\"card\">\n            <div class=\"card-body text-center\" *ngIf=\"afAuth.user | async as person\">\n              <code>Profile</code>\n              <p><font size=\"4\"> Hello <b> {{ person.displayName }} ! </b></font></p>\n            </div>\n          </div>\n        </div>\n      </div> -->\n      <div class=\"row\" *ngIf=\"afAuth.user | async as user\">\n        <div class=\"col-md-4\">\n          <div class=\"card\">\n            <div class=\"card-body\">\n              <div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\" class=\"card-collapse\">\n                <div class=\"card card-plain\">\n                  <div class=\"card-header\" role=\"tab\" id=\"headingThree\">\n                    <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\" aria-expanded=\"false\"\n                      aria-controls=\"collapseThree\">\n                      Create a Company\n                      <i class=\"nc-icon nc-minimal-down\"></i>\n                    </a>\n                  </div>\n                  <div id=\"collapseThree\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n                    <div class=\"card-body\">\n                      <form method=\"\">\n                        <div class=\"form-group\">\n                          <label>Company Name</label>\n                          <input type=\"text\" [(ngModel)]=\"newEnterprise.name\" name=\"enterprise_name\" class=\"form-control\"\n                            placeholder=\"e.g. Colours\">\n                          </div>\n                          <div class=\"form-group\">\n                            <label>Location</label>\n                            <input type=\"text\" [(ngModel)]=\"newEnterprise.location\" name=\"enterprise_location\" class=\"form-control\" placeholder=\"e.g. Town / City\">\n                          </div>\n                          <div class=\"form-group\">\n                            <label>Industry Sector</label>\n                            <input type=\"text\" [(ngModel)]=\"newEnterprise.sector\" name=\"enterprise_sector\" class=\"form-control\" placeholder=\"e.g. Construction\">\n                          </div>\n                      </form>\n                      <div class=\"card-footer \">\n                        <div class=\"row pull-left\">\n                          <div class=\"col-md-9\">\n                            <button type=\"submit\" class=\"btn btn-info btn-round\" (click)=\"saveEnterprise()\">Add company</button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>          \n        </div>\n        <div class=\"col-md-8\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              <h6 class=\"card-category\"> My Company Register</h6>\n            </div>\n            <div class=\"card-body text-center\">\n              <code hidden>My Companies</code>\n              <div class=\"table-responsive pro_info text-left\">\n                <table class=\"table\">\n                  <thead class=\"\">\n                    <th>Name</th>\n                    <th>Sector</th>\n                    <!-- <th>Created On</th> -->\n                    <th>Action</th>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let enterprise of myenterprises | async \">\n                      <td>{{ enterprise.name }}</td>\n                      <td>{{ enterprise.sector}}</td>\n                      <!-- <td *ngIf=\"enterprise.byId===myUser\">{{ enterprise.createdOn}}</td> -->\n                      <td class=\"text-center\">\n                        <button class=\"warning btn-link\" rel=\"tooltip\" title=\"show {{enterprise.name}} company details\" (click)=\"toggle(); selectCompany(enterprise)\">\n                          Select\n                        </button>\n                        <a class=\"danger btn-link btn-icon btn-sm remove\" disabled=\"\" hidden><i class=\"fa fa-times\"></i></a>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n\n        </div>\n        <ng-container *ngIf=\"show\">\n          <div class=\"col-md-8\" *ngIf=\"selectedCompany\">\n            <div class=\"card\">\n              <div class=\"card-body \">\n                <code>Selected Company: {{selectedCompany.name}}<br>Created by {{selectedCompany.by}} </code>\n                <div class=\"table-responsive pro_info\">\n                  <table class=\"table\">\n                    <thead class=\"\">\n                      <th>Department Name</th>\n                      <th>Action</th>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let department of companyDepartments | async \">\n                        <td>{{ department.name }}</td>\n                        <td class=\"\">\n                          <a class=\"btn btn-warning btn-link btn-icon btn-sm edit\" rel=\"tooltip\" title=\"Select Department\"><i\n                              class=\"fa fa-edit\"></i></a>\n                          <a class=\"btn btn-danger btn-link btn-icon btn-sm remove\"><i class=\"fa fa-times\"></i></a>\n                        </td>\n                      </tr>\n                      <tr>\n                        <td> <input class=\"form-control\" placeholder=\"Add Department\" type=\"text\" [(ngModel)]=\"dpt.name\"></td>\n                        <td></td>\n                        <!-- <td>{{ today }}</td> -->\n                        <td class=\"\">\n                          <button class=\"btn-primary btn-link\" (click)=\"save(dpt)\">save</button>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n                <hr>\n                <div class=\"table-responsive pro_info\">\n                  <table class=\"table\">\n                    <thead class=\"\">\n                      <th>Participant Name</th>\n                      <th>Action</th>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let participant of companyParticipants | async \">\n                        <td>{{ participant.name }} </td>\n                        <td class=\"\">\n                          <button class=\"primary btn-link\" id=\"addParticipantToDept\" (click)=\"selectParticipant(participant)\" data-toggle=\"modal\" data-target=\"#addDptModal\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                            <font size=2> Add to Department </font>\n                          </button>\n                        </td>\n                      </tr>\n                    </tbody>\n                  </table>\n\n\n                  <div class=\"modal fade\" id=\"addDptModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n\n                    <div class=\"modal-dialog\">\n                      <!--  modal-sm -->\n                      <div class=\"modal-content\">\n                        <!-- <div class=\"modal-header justify-content-center\"> -->\n                        <div class=\"modal-header\">\n                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                            <i class=\"nc-icon nc-simple-remove\"></i>\n                          </button>\n                          <p class=\"modal-title\" id=\"myModalLabel\">Select department to join</p>\n                        </div>\n                        <ng-container *ngIf=\"showDpt\">\n                          <p>{{ department.name }}</p>\n                        </ng-container>\n                        <div class=\"modal-body\">\n                          <div class=\"table-responsive pro_info\">\n                            <table class=\"table\">\n                              <thead class=\"\">\n                                <th>Name </th>\n                                <th>Action</th>\n                              </thead>\n                              <tbody>\n                                <tr *ngFor=\"let department of companyDepartments | async \">\n                                  <td>{{ department.name }}</td>\n                                  <td class=\"justify-content-center\">\n                                    <button class=\"warning btn-link select\" rel=\"tooltip\" title=\"select {{department.name}} department\" (click)=\"toggleDpt; selectDpt(department)\"><font size=2>select</font></button>\n                                  </td>\n                                </tr>\n                                <tr>\n                                  <td> <input class=\"form-control\" placeholder=\"Add Department\" type=\"text\" [(ngModel)]=\"dpt.name\"></td>\n                                  <td>{{ today }}</td>\n                                  <td class=\"text-right\">\n                                    <button class=\"btn-primary btn-link\" (click)=\"save(dpt)\">save</button>\n                                  </td>\n                                </tr>\n                              </tbody>\n                            </table>\n                          </div>\n                        </div>\n                        <!-- <div class=\"modal-body\">\n                                            <p>Cornfirm you want to connect to {{ selectedCompany.name }}</p>\n                                          </div> -->\n                        <div class=\"modal-footer\">\n                          <div class=\"left-side\">\n                            <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-link btn-link\">Close</button>\n                          </div>\n                          <div class=\"divider\"></div>\n                          <div class=\"right-side\">\n                            <button type=\"button\" class=\"btn btn-link btn-link\" (click)=\"addParticipant()\" data-dismiss=\"modal\">\n                              Confirm</button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n\n                </div>\n                <hr>\n                <div class=\"table-responsive pro_info\">\n                  <code>Projects List for Company: {{selectedCompany.name}} </code>\n\n                  <table class=\"table\">\n                    <thead class=\"\">\n                      <th>Project Name</th>\n                      <th>Location</th>\n                      <th>Sector</th>\n                      <th>Action</th>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let project of companyProjects | async \">\n                        <td>{{ project.name }}</td>\n                        <!-- <td *ngIf=\"!projectDepartments\"> <a class=\"btn btn-primary btn-link\" data-toggle=\"modal\" data-target=\"#dptModal\" (click)=\"selectProject(project)\"><small>Assign</small></a></td>\n                        <td *ngIf=\"projectDepartments\"> <p *ngFor=\"let dpt of projectDepartments | async\">{{dpt.name}}</p></td> -->\n                        <td>{{ project.location}}</td>\n                        <td>{{ project.sector}}</td>\n                        <td> \n                          <button class=\"dropdown-toggle primary btn-link\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                            aria-haspopup=\"true\" aria-expanded=\"false\">\n                            <font size=5> ... </font>\n                          </button>\n                          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                            <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" (click)=\"selectProject4Dept(project)\" data-toggle=\"modal\" data-target=\"#dptModal\" title=\"Add {{ project.name }} to a department\">Add department</button>\n                            <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" data-toggle=\"modal\" data-target=\"#tskModal\" (click)=\"selectProject4Dept(project)\" title=\"create new task\">Add task </button> <!--  (click)=\"toggle(); selectProject3(project) -->\n                            <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" title=\"Show commments\">Show Comments </button> <!--  (click)=\"toggle(); selectProject3(project) -->\n                          </div>\n                        </td>\n\n                      </tr>\n                    </tbody>\n                  </table>\n\n\n                  <div class=\"modal fade\" id=\"tskModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n                    <div class=\"modal-dialog\">\n                      <div class=\"modal-content\">\n                        <div class=\"card-body \">\n                          <div class=\"card-header text-center\">\n                            <p class=\"col-md-8 ml-auto mr-auto col-form-label info\">\n                              <font size=4>Create a Task</font>\n                            </p>\n                            <!-- <h4 class=\"card-title\">Create a Task</h4> -->\n                          </div>\n                          <hr>\n                          <form class=\"form-horizontal\">\n                            <div class=\"row\">\n                              <label class=\"col-md-3 col-form-label\">Task name</label>\n                              <div class=\"col-md-8\">\n                                <div class=\"form-group\">\n                                  <input type=\"text\" [(ngModel)]=\"task.name\" name=\"taskName\" class=\"form-control\" placeholder=\"Task name\">\n                                  <!-- [(ngModel)]=\"task.name\" -->\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row\">\n                              <label class=\"col-md-3 col-form-label\">Start Date</label>\n                              <div class=\"col-md-8\">\n                                <div class=\"form-group\">\n                                  <input type=\"date\" [(ngModel)]=\"task.start\" name=\"startTime\" class=\"form-control\">\n                                  <!-- [(ngModel)]=\"task.startTimeRange\" -->\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"row\">\n                              <label class=\"col-md-3 col-form-label\">Finish Date</label>\n                              <div class=\"col-md-8\">\n                                <div class=\"form-group\">\n                                  <input type=\"date\" [(ngModel)]=\"task.finish\" name=\"finishTime\" class=\"form-control\">\n                                </div>\n                              </div>\n                            </div>\n                            <ng-container *ngIf=\"showChamp\">\n                              <div class=\"row\">\n                                <label class=\"col-md-3 col-form-label\">Champion</label>\n                                <div class=\"col-md-8\">\n                                  <div class=\"form-group\" style=\"margin-top: -8px; margin-left: 15px; margin-bottom: -2px;\">\n                                    {{ (selectedParticipant)?.name }}\n                                    <button type=\"text\" name=\"taskChampion\" class=\"btn btn-icon primary btn-link \" (click)=\"toggleUsersTable(); toggleChamp()\">\n                                      <i class=\"fa fa-edit fa-fw\"></i>\n                                    </button>\n                                  </div>\n                                </div>\n                              </div>\n                            </ng-container>\n                            <div class=\"row\">\n                              <div class=\"col-md-8 ml-auto mr-auto\">\n                                <div class=\"form-group\">\n                                  <ng-container *ngIf=\"showUserTable\">\n                                    <div class=\"table-responsive user_table\">\n                                      <code>Select a Champion</code>\n\n                                      <table class=\"table\">\n                                        <tbody class=\"\">\n                                          <tr *ngFor=\"let user of coloursUsers | async \" class=\"\">\n                                            <td>{{ user.name }}</td>\n                                            <td><button class=\"primary btn-link\" (click)=\"selectColoursUser(user)\"> select\n                                              </button></td>\n                                          </tr>\n                                        </tbody>\n                                      </table>\n                                    </div>\n                                  </ng-container>\n                                  <ng-container *ngIf=\"showChampBtn\">\n                                    <div class=\"footer\"><button class=\"primary btn-link\" (click)=\"toggleUsersTable(); hideChampBtn()\"\n                                        title=\" Add task champion\">\n                                        Select Champion </button>\n                                    </div>\n                                  </ng-container>\n                                </div>\n                              </div>\n                            </div>\n                          </form>\n\n                          <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n                            <div class=\"left-side\">\n                              <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n                            </div>\n                            <div class=\"divider\"></div>\n                            <div class=\"right-side\">\n                              <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"saveProjectTask()\" data-dismiss=\"modal\" title=\"save task\">Save</button>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n\n                  \n                  \n                  <div class=\"modal fade\" id=\"dptModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n\n                    <div class=\"modal-dialog\"> <!--  modal-sm -->\n                      <div class=\"modal-content\">\n                        <div class=\"modal-header justify-content-center\">\n                          <!-- <div class=\"modal-header\"> -->\n                            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                              <i class=\"nc-icon nc-simple-remove\"></i>\n                            </button>\n                            <!-- <h5 class=\"modal-title\" id=\"myModalLabel\">How Do You Become an Affiliate?</h5> -->\n                            <code>Select department from the list</code>\n                            <ng-container *ngIf=\"showDpt\">\n                              <p>{{ department.name }}</p>\n                            </ng-container>\n\n                          </div> \n                        <div class=\"modal-body\">\n                          <div class=\"table-responsive pro_info\">\n                            <table class=\"table\">\n                              <thead class=\"\">\n                                <th>Name</th>\n                                <th>Created By</th>\n                                <th>Action</th>\n                              </thead>\n                              <tbody>\n                                <tr *ngFor=\"let department of companyDepartments | async \">\n                                  <td>{{ department.name }}</td>\n                                  <td>{{ department.createdOn}}</td>\n                                  <td class=\"justify-content-center\">\n                                    <button class=\"warning btn-link\" rel=\"tooltip\" title=\"Company\"\n                                      (click)=\"toggleDpt; selectDpt(department)\">select</button>\n                                  </td>\n                                </tr>\n                              </tbody>\n                            </table>\n                          </div>\n                        </div>\n                        <!-- <div class=\"modal-body\">\n                          <p>Cornfirm you want to connect to {{ selectedCompany.name }}</p>\n                        </div> -->\n                        <div class=\"modal-footer\">\n                          <div class=\"left-side\">\n                            <button type=\"button\" class=\"btn btn-link btn-link\">Close</button>\n                          </div>\n                          <div class=\"divider\"></div>\n                          <div class=\"right-side\">\n                            <button type=\"button\" class=\"btn btn-link btn-link\" (click)=\"addProject()\" data-dismiss=\"modal\">\n                              Confirm</button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div>\n                  <button class=\"primary btn-link\" data-toggle=\"modal\" data-target=\"#projectModal\">Join Project</button>\n                  <!-- notice modal -->\n                  <div class=\"modal fade\" id=\"projectModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n                    <div class=\"modal-dialog modal-notice\">\n                      <div class=\"modal-content\">\n                        <div class=\"modal-header\">\n                          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                            <i class=\"nc-icon nc-simple-remove\"></i>\n                          </button>\n                          <p class=\"modal-title\" id=\"myModalLabel\">Select the project to join & it's contact person</p>\n                        </div>\n                        <div class=\"modal-body\">\n                          <ng-container *ngIf=\"showProj\">\n                            <div class=\"row\">\n                              <label class=\"col-md-3 col-form-label\">Project</label>\n                              <div class=\"col-md-8\">\n                                <div class=\"form-group\" style=\"margin-top: -8px; margin-left: 15px; margin-bottom: -2px;\">\n                                  {{(projectToJoin)?.name }}\n                                  <button type=\"text\" name=\"taskProject\" class=\"btn btn-icon primary btn-link \" (click)=\"toggleProjTable(); toggleProj()\">\n                                    <i class=\"fa fa-edit fa-fw\"></i>\n                                  </button>\n                                </div>\n                              </div>\n                            </div>\n                          </ng-container>\n                          <div class=\"row\">\n                            <div class=\"col-md-8 ml-auto mr-auto\">\n                              <div class=\"form-group\">\n                                <ng-container *ngIf=\"showProjectTable\">\n                                  <div class=\"table-responsive user_table\">\n                                    <code>Select Project</code>\n                                    <table class=\"table\">\n                                      <tbody>\n                                        <tr *ngFor=\"let project of enterpriseProjects | async \">\n                                          <td>\n                                            {{project.name}}</td>\n                                          <td>\n                                            <button class=\"primary btn-link\" (click)=\"chooseProject(project)\"> select </button>\n                                          </td>\n                                        </tr>\n                                      </tbody>\n                                    </table>\n                                  </div>\n                                </ng-container>\n                              </div>\n                            </div>\n                          </div>\n                          <ng-container *ngIf=\"showChamp\">\n                            <div class=\"row\">\n                              <label class=\"col-md-3 col-form-label\">Champion</label>\n                              <div class=\"col-md-8\">\n                                <div class=\"form-group\" style=\"margin-top: -8px; margin-left: 15px; margin-bottom: -2px;\">\n                                  {{(selectedParticipant)?.name }}\n                                  <button type=\"text\" name=\"taskChampion\" class=\"btn btn-icon primary btn-link \" (click)=\"toggleUsersTable(); toggleChamp()\">\n                                    <i class=\"fa fa-edit fa-fw\"></i>\n                                  </button>\n                                </div>\n                              </div>\n                            </div>\n                          </ng-container>\n                          <div class=\"row\">\n                            <div class=\"col-md-8 ml-auto mr-auto\">\n                              <div class=\"form-group\">\n                                <ng-container *ngIf=\"showUserTable\">\n                                  <div class=\"table-responsive user_table\">\n                                    <code>Select a Champion</code>\n                                    <table class=\"table\">\n                                      <tbody class=\"\">\n                                        <tr *ngFor=\"let staff of companyStaff | async \">\n                                          <td>{{ staff.name }}</td>\n                                          <td><button class=\"primary btn-link\" (click)=\"selectColoursUser(staff)\"> select </button></td>\n                                        </tr>\n                                      </tbody>\n                                    </table>\n                                  </div>\n                                </ng-container>\n                                <ng-container *ngIf=\"showChampBtn\">\n                                  <div class=\"footer\"><button class=\"primary btn-link\" (click)=\"toggleUsersTable(); hideChampBtn()\" title=\" Add task champion\">\n                                      Select Champion </button>\n                                  </div>\n                                </ng-container>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"modal-footer justify-content-center\">\n                          <button type=\"button\" class=\"btn btn-info btn-round\" (click)=\"connect2Project()\" data-dismiss=\"modal\">Join</button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <!-- end notice modal -->\n                </div>\n                <hr>\n                <div class=\"table-responsive pro_info\">\n                  <code>Tasks for Company: {{selectedCompany.name}} </code>\n                  <table class=\"table\">\n                    <thead class=\"\">\n                      <th>Task name</th>\n                      <th>Champion</th>\n                    </thead>\n                    <tbody>\n                      <tr *ngFor=\"let companytask of companyTasks | async \">\n                        <td>{{ companytask.name }}</td>\n                        <td>{{ (companytask.champion)?.name||(companytask)?.champion}}</td>\n                      </tr>\n                    </tbody>\n                  </table>\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n      </div>\n      <!-- <div class=\"row\" *ngIf=\"afAuth.user | async as user\">\n        <div class=\"col-md-12\">\n          <div class=\"card\">\n            <div class=\"card-body text-center\">\n              <code>All Companies</code>\n              <div class=\"table-responsive pro_info\">\n                <table class=\"table\">\n                  <thead class=\"\">\n                    <th>Name</th>\n                    <th>Sector</th>\n                    <th>Location</th>\n                    <th>Action</th>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let enterprise of enterprises | async \">\n                      <td>{{ enterprise.name }} </td>\n                      <td>{{ enterprise.sector}}</td>\n                      <td>{{ enterprise.location}}</td>\n                      <td class=\"text-center\">\n                        <button *ngIf=\"enterprise.byId !== myUser\" class=\"success btn-link join\" rel=\"tooltip\" title=\"Connect to {{enterprise.name}}\" (click)=\"selectCompany(enterprise)\" data-toggle=\"modal\"\n                          data-target=\"#myModal\"> <font size=2>connect</font></button>\n                    </tr>\n                  </tbody>\n                </table>\n                <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n                  <div class=\"modal-dialog modal-sm\">\n                    <div class=\"modal-content\">\n                      <div class=\"modal-header justify-content-center\">\n                        <div class=\"modal-profile ml-auto mr-auto text-warning\">\n                          <i class=\"nc-icon nc-bulb-63\"></i>\n                        </div>\n                      </div>\n                      <div class=\"modal-body\">\n                        <p>Cornfirm, you want to connect to <b class=\"primary-color\">{{ selectedCompany.name }}</b></p>\n                      </div>\n                      <div class=\"modal-footer\">\n                        <div class=\"left-side\">\n                          <button type=\"button\" class=\"btn btn-link btn-link\" data-dismiss=\"modal\">Close</button>\n                        </div>\n                        <div class=\"divider\"></div>\n                        <div class=\"right-side\">\n                          <button type=\"button\" class=\"btn btn-link btn-link\" (click)=\"connect2Enterprise(selectedCompany)\"\n                            data-dismiss=\"modal\"> Confirm</button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"modal fade\" id=\"noticeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n                  aria-hidden=\"true\">\n                  <div class=\"modal-dialog modal-notice\">\n                    <div class=\"modal-content\">\n                      <div class=\"modal-header\">\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n                          <i class=\"nc-icon nc-simple-remove\"></i>\n                        </button>\n                        <h5 class=\"modal-title\" id=\"myModalLabel\">How Do You Become an Affiliate?</h5>\n                      </div>\n                      <div class=\"modal-body\">\n                        <div class=\"instruction\">\n                          <div class=\"row\">\n                            <div class=\"col-md-8\">\n                              <strong>1. Join as a Company</strong>\n                              <div class=\"row\">\n                                <div class=\"col-sm-10\" style=\"margin-left:3em\">\n                                  <div class=\"form-check-inline\">\n                                    <div class=\"form-check-radio\">\n                                      <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadioz\" id=\"exampleRadios11\"\n                                          value=\"option1\"> As Company\n                                        <span class=\"form-check-sign\"></span>\n                                      </label>\n                                    </div>\n                                    <div class=\"form-check-radio\">\n                                      <label class=\"form-check-label\">\n                                        <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadioz\" id=\"exampleRadios12\"\n                                          value=\"option2\" checked=\"\"> As an Individual\n                                        <span class=\"form-check-sign\"></span>\n                                      </label>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n\n                        </div>\n                        <div class=\"modal-footer justify-content-center\">\n                          <button type=\"button\" class=\"btn btn-info btn-round\" data-dismiss=\"modal\">Sounds good!</button>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"modal fade modal-primary\" id=\"myModal10\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\n                    aria-hidden=\"true\">\n                    <div class=\"modal-dialog modal-sm\">\n                      <div class=\"modal-content\">\n                        <div class=\"modal-header justify-content-center\">\n                          <div class=\"modal-profile ml-auto mr-auto\">\n                            <i class=\"nc-icon nc-bulb-63\"></i>\n                          </div>\n                        </div>\n                        <div class=\"modal-body\">\n                          <p>Always have an access to your profile</p>\n                        </div>\n                        <div class=\"modal-footer\">\n                          <div class=\"left-side\">\n                            <button type=\"button\" class=\"btn btn-link btn-link\">Back</button>\n                          </div>\n                          <div class=\"divider\"></div>\n                          <div class=\"right-side\">\n                            <button type=\"button\" class=\"btn btn-link btn-link\" data-dismiss=\"modal\">Close</button>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n      </div> -->\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/company/company.component.ts":
/*!**********************************************!*\
  !*** ./src/app/company/company.component.ts ***!
  \**********************************************/
/*! exports provided: CompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyComponent", function() { return CompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_services_initialise_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/initialise.service */ "./src/app/services/initialise.service.ts");
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


//version 5++
// import { AngularFireAuth } from '@angular/fire/auth';
// import { auth } from 'firebase/app';





var CompanyComponent = /** @class */ (function () {
    function CompanyComponent(afAuth, router, is, authService, afs) {
        this.afAuth = afAuth;
        this.router = router;
        this.is = is;
        this.authService = authService;
        this.afs = afs;
        this.showCompanyBtn = true;
        this.show = false;
        this.showme = false;
        this.showDpt = false;
        this.btnDpt = 'ShowDpt';
        this.buttonName = 'Show';
        this.btnName = 'Showme';
        this.btnTable = 'Show';
        this.showUserTable = false;
        this.showChamp = false;
        this.btnChamp = 'Show';
        this.showProjBtn = true;
        this.showChampBtn = true;
        this.showParticipantBtn = false;
        this.showProjectTableBtn = true;
        this.showProj = false;
        this.btnProj = 'Show';
        this.showProjectTable = true;
        this.btnProjTable = 'Show';
        this.dpt = { name: "", by: "", byId: "", companyName: "", companyId: "", createdOn: "" };
        this.newEnterprise = is.getSelectedCompany();
        this.selectedProject = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", completion: "" };
        this.projectToJoin = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", companyChampion: null, leader: null, completion: "" };
        this.userMatrix = { companiesCreated: "", projectsCreated: "", companiesJoined: "", projectsJoined: "" };
        this.project = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", completion: "" };
        this.department = { name: "", by: "", byId: "", companyName: "", companyId: "", createdOn: "", id: "", hod: null };
        this.task = { name: "", champion: null, projectName: "", department: "", departmentId: "", start: "", startDay: "", startWeek: "", startMonth: "", startQuarter: "", startYear: "", finish: "", finishDay: "", finishWeek: "", finishMonth: "", finishQuarter: "", finishYear: "", by: "", createdOn: "", projectId: "", byId: "", projectType: "", companyName: "", companyId: "", trade: "", section: null, complete: null, id: "", participants: null, status: "", classification: null };
        this.companyProjectChamp = { name: "", by: "", byId: "", createdOn: "", id: "", location: "", sector: "" };
        this.userChampion = { name: "", id: "", email: "", bus_email: "", phoneNumber: "", photoURL: "", address: "", nationalId: "", nationality: "" };
        this.today = new Date().toLocaleDateString;
        console.log(this.userId);
    }
    CompanyComponent.prototype.hideChampBtn = function () {
        this.showChampBtn = false;
    };
    CompanyComponent.prototype.showParticipant = function () {
        this.showParticipantBtn = false;
    };
    CompanyComponent.prototype.hideProjectTable = function () {
        this.showProjectTableBtn = false;
        this.showParticipant();
        this.showProjDisplay();
    };
    CompanyComponent.prototype.toggleProjTable = function () {
        this.showProjectTable = !this.showProjectTable;
        if (this.showProjectTable) {
            this.btnProjTable = "Hide";
        }
        else {
            this.btnProjTable = "Show";
        }
    };
    CompanyComponent.prototype.hideCompBtn = function () {
        this.showCompanyBtn = false;
    };
    CompanyComponent.prototype.toggleChamp = function () {
        this.showChamp = !this.showChamp;
        if (this.showChamp)
            this.btnChamp = "Hide";
        else
            this.btnChamp = "Show";
    };
    CompanyComponent.prototype.showProjDisplay = function () {
        this.showProj = !this.showProj;
        if (this.showProj)
            this.btnProj = "Hide";
        else
            this.btnProj = "Show";
    };
    CompanyComponent.prototype.toggleUsersTable = function () {
        this.showUserTable = !this.showUserTable;
        if (this.showUserTable) {
            this.btnTable = "Hide";
            // this.selectedParticipant=null;
        }
        else {
            this.btnTable = "Show";
        }
    };
    CompanyComponent.prototype.selectColoursUser = function (x) {
        this.selectedParticipant = x;
        this.selParticipantId = x.id;
        this.userChampion.name = x.name;
        this.userChampion.id = x.id;
        this.userChampion.email = x.email;
        console.log(x);
        console.log(this.userChampion);
        this.selParticipantName = x.name;
        this.toggleChamp();
        this.toggleUsersTable();
    };
    CompanyComponent.prototype.toggle = function () {
        this.show = !this.show;
        // CHANGE THE NAME OF THE BUTTON.
        if (this.show)
            this.buttonName = "Hide";
        else
            this.buttonName = "Show";
    };
    CompanyComponent.prototype.toggleName = function () {
        this.showme = !this.showme;
        // CHANGE THE NAME OF THE BUTTON.
        if (this.showme)
            this.btnName = "Hide";
        else
            this.btnName = "Showme";
    };
    CompanyComponent.prototype.toggleDpt = function () {
        this.showDpt = !this.showDpt;
        // CHANGE THE NAME OF THE BUTTON.
        if (this.showDpt)
            this.btnDpt = "Hide";
        else
            this.btnDpt = "ShowDpt";
    };
    CompanyComponent.prototype.toggleProj = function () {
        this.showProj = !this.showProj;
        if (this.showProj)
            this.btnProj = "Hide";
        else
            this.btnProj = "Show";
    };
    CompanyComponent.prototype.chooseProject = function (xproject) {
        console.log(xproject);
        this.projectToJoin = xproject;
        console.log(this.selectedProject);
        this.proj_ID = xproject.id;
        this.toggleProj();
        this.toggleProjTable();
    };
    CompanyComponent.prototype.saveEnterprise = function () {
        // this.afAuth.authState.subscribe(user => { 
        var compRef; //ID of the new company that has been created under User/myEnterprises
        var mycompanyRef; //root enterprise
        // let comp: Enterprise;
        var newRef = this.afs.collection('/Users').doc(this.userId).collection('myenterprises');
        console.log(this.userId);
        var pUser = {
            name: this.user.displayName,
            email: this.user.email,
            bus_email: this.userData.bus_email,
            id: this.user.uid,
            phoneNumber: this.user.phoneNumber,
            photoURL: this.user.photoURL,
            address: this.userData.address,
            nationality: this.userData.nationality,
            nationalId: this.userData.nationalId,
        };
        this.newEnterprise.by = this.user.displayName;
        this.newEnterprise.byId = this.user.uid;
        this.newEnterprise.createdOn = new Date().toISOString();
        this.newPart = pUser;
        this.newEnterprise.participants = [this.newPart];
        console.log(this.newEnterprise);
        var partId = this.userId;
        var comp = this.newEnterprise;
        mycompanyRef = this.afs.collection('Enterprises');
        this.afs.collection('/Users').doc(this.user.uid).collection('myenterprises').add(comp).then(function (Ref) {
            console.log(Ref.id);
            console.log(partId);
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
        });
        this.newEnterprise = this.is.getSelectedCompany();
    };
    CompanyComponent.prototype.selectCompany = function (company) {
        console.log(company);
        this.selectedCompany = company;
        this.compId = company.id;
        this.companyDepartments = this.afs.collection('Enterprises').doc(company.id).collection('departments').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.companyParticipants = this.afs.collection('Enterprises').doc(company.id).collection('Participants').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.companyStaff = this.afs.collection('Enterprises').doc(company.id).collection('Participants').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.companyProjects = this.afs.collection('Enterprises').doc(company.id).collection('projects').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.companyTasks = this.afs.collection('Enterprises').doc(company.id).collection('tasks').valueChanges();
        console.log(this.selectedCompany);
    };
    // get timestamp() { return firebase.firestore.FieldValue.serverTimestamp(); }
    CompanyComponent.prototype.connect2Project = function () {
        console.log(this.selectedCompany);
        console.log(this.projectToJoin);
        var projectId = this.projectToJoin.id;
        console.log(projectId);
        var companysRef;
        var projectsRef;
        var allMyProjectsRef;
        var partId = this.userChampion.id;
        var scompanyId = this.selectedCompany.id;
        var myID = this.userId;
        this.userChampion.name = this.user.displayName;
        this.userChampion.id = this.user.uid;
        this.userChampion.email = this.user.email;
        this.userChampion.phoneNumber = this.user.phoneNumber;
        this.projectToJoin.companyChampion = this.selectedCompany;
        this.projectToJoin.leader = this.userChampion;
        console.log(this.selectedCompany);
        console.log(this.userChampion);
        companysRef = this.afs.collection('Enterprises').doc(scompanyId).collection('projects').doc(this.projectToJoin.id).set(this.projectToJoin);
        allMyProjectsRef = this.afs.collection('/Users'); //ppoint to where you want to keep all my projects
        allMyProjectsRef.doc(partId).collection('projects').doc(projectId).set(this.projectToJoin); // add the project joined to projects collection of the assigned leader
        allMyProjectsRef.doc(myID).collection('projects').doc(projectId).set(this.projectToJoin); // add the project joined to my projects collection
        projectsRef = this.afs.collection('Projects');
        projectsRef.doc(projectId).collection('enterprises').doc(scompanyId).set(this.selectedCompany);
        projectsRef.doc(projectId).collection('Participants').doc(partId).set(this.userChampion);
        console.log(this.projectToJoin);
        this.projectToJoin = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", companyChampion: null, leader: null, completion: "" };
        this.selectedCompany = this.is.getSelectedCompany();
        this.userChampion = { name: "", id: "", email: "", bus_email: "", phoneNumber: "", photoURL: "", address: "", nationalId: "", nationality: "" };
        // })
    };
    CompanyComponent.prototype.saveProject = function () {
        var _this = this;
        var pRefId = "";
        var myref = "";
        var pId = "";
        var pr;
        var dref;
        this.afAuth.user.subscribe(function (user) {
            console.log(user);
            console.log(_this.selectedCompany);
            _this.project.companyName = _this.selectedCompany.name;
            _this.project.companyId = _this.selectedCompany.id;
            _this.project.createdOn = new Date().toISOString();
            console.log(_this.project.createdOn);
            var compId = _this.selectedCompany.id;
            var comp = _this.selectedCompany;
            _this.project.by = user.displayName;
            _this.project.byId = user.uid;
            console.log(_this.project);
            pr = _this.project;
            dref = _this.afs.collection('Projects');
            var entRef = _this.afs.collection('Enterprises').doc(compId).collection('projects');
            //////   Counter projectsCreated++
            _this.afs.collection('/Users').doc(user.uid).collection('projects').add(_this.project).then(function (pref) {
                ////Add this.project to users collection of projects
                console.log(pref.id);
                myref = pref.id;
                pRefId = pref.id; /// Id of the newly created project
                pId = user.uid; /// Participant id
                if (pr.type === 'Enterprise') {
                    console.log(myref);
                    dref.doc(myref).set(pr);
                    dref.doc(myref).collection('Participants').doc(pId).set(this.user);
                    dref.doc(myref).collection('enterprises').doc(compId).set(comp);
                    entRef.doc(myref).set(pr);
                    console.log('enterprise project');
                }
            });
            _this.project = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", completion: "" };
        });
    };
    CompanyComponent.prototype.saveProjectTask = function () {
        console.log(this.task);
        /* assign task attributes */
        this.task.by = this.user.displayName;
        this.task.byId = this.userId;
        this.task.createdOn = new Date().toISOString();
        this.task.companyName = this.selectedCompany.name;
        this.task.companyId = this.selectedCompany.id;
        this.task.projectId = this.proj_ID;
        this.task.projectName = this.selectedProject.name;
        this.task.projectType = this.selectedProject.type;
        this.task.champion = this.userChampion;
        console.log(this.selectedProject.name);
        console.log(this.selectedCompany.name);
        var oop = this.compId; /*  */
        console.log(this.task);
        var createdTask = this.task;
        var tasksRef = this.afs.collection('tasks');
        var champRef = this.afs.collection('Users').doc(this.selParticipantId).collection('tasks');
        var entRef = this.afs.collection('Enterprises').doc(oop).collection('tasks');
        var projectsRef = this.afs.collection('Projects').doc(this.task.projectId).collection('tasks');
        if (this.task.projectType === 'Enterprise') {
            //set task under a project
            this.afs.collection('Users').doc(this.userId).collection('tasks').add(createdTask).then(function (Ref) {
                var newTaskId = Ref.id;
                console.log(Ref);
                //set task under a tasks
                tasksRef.doc(newTaskId).set(createdTask);
                //set task under a user
                projectsRef.doc(newTaskId).set(createdTask);
                //set task under a company                        
                entRef.doc(newTaskId).set(createdTask);
                //set task to the champion tasks collection                        
                champRef.doc(newTaskId).set(createdTask);
            });
            this.userChampion = { name: "", id: "", email: "", bus_email: "", phoneNumber: "", photoURL: "", address: "", nationalId: "", nationality: "" };
        }
        else {
            //set task under a user
            console.log('personal Task');
            this.afs.collection('Users').doc(this.userId).collection('tasks').add(createdTask);
        }
        this.companyProjectChamp = { name: "", by: "", byId: "", createdOn: "", id: "", location: "", sector: "" };
        this.task = { name: "", champion: null, projectName: "", department: "", departmentId: "", start: "", startDay: "", startWeek: "", startMonth: "", startQuarter: "", startYear: "", finish: "", finishDay: "", finishWeek: "", finishMonth: "", finishQuarter: "", finishYear: "", by: "", createdOn: "", projectId: "", byId: "", projectType: "", companyName: "", companyId: "", trade: "", section: null, complete: null, id: "", participants: null, status: "", classification: null };
        this.userChampion = { name: "", id: "", email: "", bus_email: "", phoneNumber: "", photoURL: "", address: "", nationalId: "", nationality: "" };
    };
    CompanyComponent.prototype.save = function (department) {
        console.log(department);
        console.log(this.userId);
        console.log(this.user);
        this.dpt = department;
        this.dpt.companyName = this.selectedCompany.name;
        this.dpt.companyId = this.selectedCompany.id;
        this.dpt.by = this.user.displayName;
        this.dpt.byId = this.userId;
        this.dpt.createdOn = new Date().toISOString();
        console.log(this.dpt);
        this.afs.collection('Enterprises').doc(this.selectedCompany.id).collection('departments').add(this.dpt);
        this.dpt = { name: "", by: "", byId: "", companyName: "", companyId: "", createdOn: "" };
    };
    CompanyComponent.prototype.selectProject = function (bbb) {
        console.log(bbb);
        // this.project = bbb;
        this.selectedProject = bbb;
        var selProjectId = bbb.id;
        console.log(selProjectId);
        this.projectDepartments = this.afs.collection('Enterprises').doc(this.selectedCompany.id).collection('projects').doc(bbb.id).collection('departments').valueChanges();
    };
    CompanyComponent.prototype.selectProject4Dept = function (xproject) {
        console.log(xproject);
        this.selectedProject = xproject;
        this.projectToJoin = xproject;
        console.log(this.selectedProject);
        this.proj_ID = xproject.id;
    };
    CompanyComponent.prototype.selectParticipant = function (x) {
        this.selectedParticipant = x;
        this.selParticipantId = x.id;
        console.log(this.selectedParticipant);
    };
    CompanyComponent.prototype.selectDpt = function (dpt) {
        console.log(dpt);
        this.selectedDepartment = dpt;
        this.dptId = dpt.id;
    };
    CompanyComponent.prototype.addParticipant = function () {
        console.log("add Participant");
        console.log(this.selectedCompany);
        this.afs.collection('Enterprises').doc(this.selectedCompany.id).collection('departments').doc(this.dptId).collection('Participants').doc(this.selParticipantId).set(this.selectedParticipant);
    };
    CompanyComponent.prototype.addProject = function () {
        console.log(this.selectedCompany);
        console.log(this.selectedProject);
        var projectId = this.selectedProject.id;
        var compId = this.selectedCompany.id;
        this.afs.collection('Enterprises').doc(compId).collection('departments').doc(this.dptId).collection('projects').add(this.selectedProject);
        this.afs.collection('Enterprises').doc(compId).collection('projects').doc(projectId).collection('departments').add(this.selectedDepartment);
    };
    CompanyComponent.prototype.connect2Enterprise = function (company) {
        var _this = this;
        var companyId = company.id;
        console.log(companyId);
        console.log(this.selectedCompany);
        var partId;
        this.afAuth.user.subscribe(function (user) {
            console.log(user);
            partId = user.uid;
            var pUser = {
                name: _this.user.displayName,
                email: _this.user.email,
                bus_email: _this.userData.bus_email,
                id: _this.user.uid,
                phoneNumber: _this.user.phoneNumber,
                photoURL: _this.user.photoURL,
                address: _this.userData.address,
                nationality: _this.userData.nationality,
                nationalId: _this.userData.nationalId,
            };
            _this.newPart = pUser;
            _this.selectedCompany.participants.push(_this.newPart);
            // CompanysRef = this.afs.collection('Enterprises');
            _this.afs.collection('/Users').doc(partId).collection('myenterprises').doc(companyId).set(_this.selectedCompany);
            _this.afs.collection('/Users').doc(partId).collection('myenterprises').doc(companyId).set({ 'id': companyId });
            // this.selectedCompany.participants.push(this.newPart);
            _this.afs.collection('Enterprises').doc(companyId).collection('Participants').doc(partId).set(pUser);
        });
    };
    CompanyComponent.prototype.login = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider()).then(function (ref) {
            console.log("Check User collection for doc");
            // console.log(ref);
            _this.coloursUserDetails = ref;
            // this.user = ref.user;
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
    CompanyComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    CompanyComponent.prototype.dataCall = function () {
        var _this = this;
        this.myDocument = this.afs.collection('Users').doc(this.user.uid);
        this.userProfile = this.myDocument.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (a) {
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
        });
        /* collection of users */
        this.coloursUsers = this.afs.collection('Users').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        /* collection of enterprise projects */
        this.enterpriseProjects = this.afs.collection('Projects').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        /* collection of enterprises */
        this.enterprises = this.afs.collection('Enterprises').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        console.log(this.userId);
        /* collection of enterprises */
        this.CompanyCollection = this.afs.collection('/Users').doc(this.userId).collection('myenterprises');
        this.myenterprises = this.CompanyCollection.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    };
    CompanyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.user.subscribe(function (user) {
            console.log(user);
            _this.userId = user.uid;
            _this.user = user;
            _this.coloursUsername = user.displayName;
            console.log(_this.userId);
            console.log(_this.user);
            _this.dataCall();
        });
    };
    CompanyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company',
            template: __webpack_require__(/*! ./company.component.html */ "./src/app/company/company.component.html"),
            styles: [__webpack_require__(/*! ./company.component.css */ "./src/app/company/company.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_services_initialise_service__WEBPACK_IMPORTED_MODULE_7__["InitialiseService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], CompanyComponent);
    return CompanyComponent;
}());



/***/ }),

/***/ "./src/app/company/company.module.ts":
/*!*******************************************!*\
  !*** ./src/app/company/company.module.ts ***!
  \*******************************************/
/*! exports provided: CompanyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyModule", function() { return CompanyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/dist/index.js");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _company_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./company.routing */ "./src/app/company/company.routing.ts");
/* harmony import */ var _join_enterprise_join_enterprise_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./join-enterprise/join-enterprise.component */ "./src/app/company/join-enterprise/join-enterprise.component.ts");
/* harmony import */ var _enterprise_view_enterprise_view_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./enterprise-view/enterprise-view.component */ "./src/app/company/enterprise-view/enterprise-view.component.ts");
/* harmony import */ var _enterprise_profile_enterprise_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./enterprise-profile/enterprise-profile.component */ "./src/app/company/enterprise-profile/enterprise-profile.component.ts");
/* harmony import */ var _setup_setup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./setup/setup.component */ "./src/app/company/setup/setup.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./create/create.component */ "./src/app/company/create/create.component.ts");
/* harmony import */ var _create_enterprise_create_enterprise_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./create-enterprise/create-enterprise.component */ "./src/app/company/create-enterprise/create-enterprise.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { EqualValidator } from './equal-validator.directive';












var CompanyModule = /** @class */ (function () {
    function CompanyModule() {
    }
    CompanyModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_company_routing__WEBPACK_IMPORTED_MODULE_9__["CompanyRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_4__["JWBootstrapSwitchModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            ],
            declarations: [_company_component__WEBPACK_IMPORTED_MODULE_8__["CompanyComponent"], _join_enterprise_join_enterprise_component__WEBPACK_IMPORTED_MODULE_10__["JoinEnterpriseComponent"], _enterprise_view_enterprise_view_component__WEBPACK_IMPORTED_MODULE_11__["EnterpriseViewComponent"], _enterprise_profile_enterprise_profile_component__WEBPACK_IMPORTED_MODULE_12__["EnterpriseProfileComponent"], _setup_setup_component__WEBPACK_IMPORTED_MODULE_13__["SetupComponent"], _create_create_component__WEBPACK_IMPORTED_MODULE_14__["CreateComponent"], _create_enterprise_create_enterprise_component__WEBPACK_IMPORTED_MODULE_15__["CreateEnterpriseComponent"]]
        })
    ], CompanyModule);
    return CompanyModule;
}());



/***/ }),

/***/ "./src/app/company/company.routing.ts":
/*!********************************************!*\
  !*** ./src/app/company/company.routing.ts ***!
  \********************************************/
/*! exports provided: CompanyRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyRoutes", function() { return CompanyRoutes; });
/* harmony import */ var _company_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company.component */ "./src/app/company/company.component.ts");
/* harmony import */ var _join_enterprise_join_enterprise_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./join-enterprise/join-enterprise.component */ "./src/app/company/join-enterprise/join-enterprise.component.ts");
/* harmony import */ var _enterprise_profile_enterprise_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./enterprise-profile/enterprise-profile.component */ "./src/app/company/enterprise-profile/enterprise-profile.component.ts");
/* harmony import */ var _enterprise_view_enterprise_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enterprise-view/enterprise-view.component */ "./src/app/company/enterprise-view/enterprise-view.component.ts");
/* harmony import */ var _setup_setup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setup/setup.component */ "./src/app/company/setup/setup.component.ts");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create/create.component */ "./src/app/company/create/create.component.ts");






var CompanyRoutes = [{
        path: '',
        children: [{
                path: 'enterprises/company-register',
                component: _company_component__WEBPACK_IMPORTED_MODULE_0__["CompanyComponent"]
            }, {
                path: 'enterprises/enterprise-view',
                component: _enterprise_view_enterprise_view_component__WEBPACK_IMPORTED_MODULE_3__["EnterpriseViewComponent"]
            }, {
                path: 'enterprises/create',
                component: _create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"]
            }, {
                path: 'enterprises/join-enterprise',
                component: _join_enterprise_join_enterprise_component__WEBPACK_IMPORTED_MODULE_1__["JoinEnterpriseComponent"]
            }, {
                path: 'enterprises/:id',
                component: _enterprise_profile_enterprise_profile_component__WEBPACK_IMPORTED_MODULE_2__["EnterpriseProfileComponent"]
            }, {
                path: 'enterprises/setup',
                component: _setup_setup_component__WEBPACK_IMPORTED_MODULE_4__["SetupComponent"]
            }]
    }];
// enterprise - view


/***/ }),

/***/ "./src/app/company/create-enterprise/create-enterprise.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/company/create-enterprise/create-enterprise.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvY3JlYXRlLWVudGVycHJpc2UvY3JlYXRlLWVudGVycHJpc2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/company/create-enterprise/create-enterprise.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/company/create-enterprise/create-enterprise.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-6 text-center\">\n      <div class=\"card col-lg-12 col-md-offset-3 card-tasks\">\n        <div class=\"card-header \">\n          <h4 class=\"card-title\">Create Company</h4>\n          <h5 class=\"card-category\" hidden>Backend development</h5>\n        </div>\n        <div class=\"card-body\">\n          <div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\" class=\"card-collapse\">\n            <div class=\"card card-plain\">\n              <div class=\"card-body\">\n                <form method=\"\">\n                  <div class=\"form-group\">\n                    <label>Company Name</label>\n                    <input type=\"text\" [(ngModel)]=\"newEnterprise.name\" name=\"enterprise_name\" class=\"form-control\"\n                      placeholder=\"e.g. Colours\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Location</label>\n                    <input type=\"text\" [(ngModel)]=\"newEnterprise.location\" name=\"enterprise_location\" class=\"form-control\"\n                      placeholder=\"e.g. Town / City\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Industry Sector</label>\n                    <input type=\"text\" [(ngModel)]=\"newEnterprise.sector\" name=\"enterprise_sector\" class=\"form-control\"\n                      placeholder=\"e.g. Construction\">\n                  </div>\n                </form>\n                <br>\n                <br>\n                <div class=\"card-footer \">\n                  <div class=\"row pull-left\">\n                    <div class=\"col-md-9\">\n                      <button type=\"submit\" class=\"btn btn-info btn-round\" (click)=\"saveEnterprise()\">Add company</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/company/create-enterprise/create-enterprise.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/company/create-enterprise/create-enterprise.component.ts ***!
  \**************************************************************************/
/*! exports provided: CreateEnterpriseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEnterpriseComponent", function() { return CreateEnterpriseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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





var CreateEnterpriseComponent = /** @class */ (function () {
    function CreateEnterpriseComponent(afAuth, router, afs) {
        this.afAuth = afAuth;
        this.router = router;
        this.afs = afs;
        this.newEnterprise = { name: "", by: "", byId: "", createdOn: "", id: "", location: "", sector: "", participants: null };
        this.newPart = { id: "", name: "", email: "", phoneNumber: "" };
    }
    CreateEnterpriseComponent.prototype.saveEnterprise = function () {
        // this.afAuth.authState.subscribe(user => { 
        var compRef; //ID of the new company that has been created under User/myEnterprises
        var mycompanyRef; //root enterprise
        // let comp: Enterprise;
        var newRef = this.afs.collection('/Users').doc(this.userId).collection('myenterprises');
        // console.log(this.userId);
        this.newEnterprise.by = this.user.displayName;
        this.newEnterprise.byId = this.user.uid;
        this.newEnterprise.createdOn = new Date().toString();
        this.newPart = this.loggedInUser;
        this.newEnterprise.participants = [this.newPart];
        // console.log(this.newEnterprise);
        var partId = this.userId;
        var comp = this.newEnterprise;
        var pUser = this.newPart;
        mycompanyRef = this.afs.collection('Enterprises');
        this.afs.collection('/Users').doc(this.user.uid).collection('myenterprises').add(comp).then(function (Ref) {
            // console.log(Ref.id)
            console.log(pUser);
            compRef = Ref.id;
            newRef.doc(compRef).collection('Participants').doc(partId).set(pUser); // add to participants collection in myenterprise collection
            // console.log(compRef)
            mycompanyRef.doc(compRef).set(comp);
            mycompanyRef.doc(compRef).collection('Participants').doc(partId).set(pUser); // add to participants collection in Enterprise collection
            // console.log('enterprise ');
            newRef.doc(compRef).update({ 'id': compRef }); // updates the id attribute for the enterprise in myenterprise collection 
            mycompanyRef.doc(compRef).update({ 'id': compRef }); // updates the id attribute for the enterprise in Enterprise collection
        });
        this.newEnterprise = { name: "", by: "", byId: "", createdOn: "", id: "", location: "", sector: "", participants: null };
    };
    CreateEnterpriseComponent.prototype.dataCall = function () {
        this.enterprises = this.afs.collection('Enterprises').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    };
    CreateEnterpriseComponent.prototype.OnInit = function () {
    };
    CreateEnterpriseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.user.subscribe(function (user) {
            // console.log(user);
            _this.userId = user.uid;
            _this.user = user;
            var loggedInUser = {
                name: _this.user.displayName,
                email: _this.user.email,
                id: _this.user.uid,
                phoneNumber: _this.user.phoneNumber
            };
            _this.loggedInUser = loggedInUser;
            _this.coloursUsername = user.displayName;
            // console.log(this.userId);
            // console.log(this.user);
            _this.dataCall();
        });
    };
    CreateEnterpriseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-enterprise',
            template: __webpack_require__(/*! ./create-enterprise.component.html */ "./src/app/company/create-enterprise/create-enterprise.component.html"),
            styles: [__webpack_require__(/*! ./create-enterprise.component.css */ "./src/app/company/create-enterprise/create-enterprise.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], CreateEnterpriseComponent);
    return CreateEnterpriseComponent;
}());



/***/ }),

/***/ "./src/app/company/create/create.component.css":
/*!*****************************************************!*\
  !*** ./src/app/company/create/create.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loBorder{\r\n    border-top: none;\r\n    border-left: 0px;\r\n    border-right: 0px\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wYW55L2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb0JvcmRlcntcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgICBib3JkZXItbGVmdDogMHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAwcHhcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/company/create/create.component.html":
/*!******************************************************!*\
  !*** ./src/app/company/create/create.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-12 col-xs-12\">\r\n            <div class=\"card\">\r\n                <div class=\"card-body\">\r\n                    <div class=\"nav-tabs-navigation\" style=\"margin-bottom: 0px;\">\r\n                        <div class=\"nav-tabs-wrapper\">\r\n                            <ul id=\"tabs\" class=\"nav nav-tabs\" role=\"tablist\">\r\n                                <!-- <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#project\" role=\"tab\" aria-expanded=\"false\">Projects</a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#company\" role=\"tab\" aria-expanded=\"true\">Enterprise</a>\r\n                                </li> -->\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" data-toggle=\"tab\" routerLink=\"/projects/p-create\" role=\"tab\" aria-expanded=\"true\">Projects</a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link active\" data-toggle=\"tab\" routerLink=\"/enterprises/create\" role=\"tab\" aria-expanded=\"false\">Enterprise</a>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                    <div id=\"my-tab-content\" class=\"tab-content\">\r\n                        <div class=\"tab-pane\" id=\"project\" role=\"tabpanel\" aria-expanded=\"false\">\r\n                            <div class=\"col-md-12 ml-auto mr-auto\">\r\n                                <div class=\"card\">\r\n                                    <div *ngIf=\"pfirstPage\" class=\"col-md-12\">\r\n                                        <div class=\"card-header \">\r\n                                            <div class=\"row\">\r\n                                                <h5 class=\"title na-am\">Create new Project</h5>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"pSecondPage\" class=\"col-md-12\">\r\n                                        <div class=\"card-header \">\r\n                                            <div class=\"row\">\r\n                                                <h5 class=\"title na-am\">{{ project.name }} <br> <small>Add Project\r\n                                                        Description</small></h5>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"pfirstPage\" class=\"col-md-10 ml-auto mr-auto\">\r\n                                        <div class=\"card-body \">\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Project Name</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <p *ngIf=\"projectNameFieldStatus\" class=\"category text-danger\"\r\n                                                        style=\"margin-top:-1em; cursor: pointer;\">Name Required</p>\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"project.name\" name=\"enterprise_name\"\r\n                                                            class=\"form-control\" placeholder=\"e.g..Bob Corp\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Industry Sector</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <p *ngIf=\"projectSectorFieldStatus\" class=\"category text-danger\"\r\n                                                        style=\"margin-bottom:0em; cursor: pointer;\">Sector Required</p>\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"project.sector\" class=\"form-control\"\r\n                                                            placeholder=\"e.g..Transport\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Location</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <p *ngIf=\"projectLocationFieldStatus\" class=\"category text-danger\"\r\n                                                        style=\"margin-bottom:0em; cursor: pointer;\">Location Required</p>\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"project.location\" name=\"enterprise_location\"\r\n                                                            class=\"form-control\" placeholder=\"e.g..Mutare\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Project Type</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <p *ngIf=\"projectTypeFieldStatus\" class=\"category text-danger\"\r\n                                                        style=\"margin-bottom:0em; cursor: pointer;\">Type Required</p>\r\n                                                    <div class=\"form-group\">\r\n                                                        <ng-select [items]=\"projectType\" title=\"Select Project Type\"\r\n                                                            bindLabel=\"name\" name=\"ptype\" placeholder=\"Project Type\"\r\n                                                            (change)=\"checkType(typeSet)\" [(ngModel)]=\"typeSet\">\r\n                                                        </ng-select>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\" *ngIf=\"showComp\">\r\n                                                <label class=\"col-md-3 col-form-label\">Select Company</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <p *ngIf=\"projectCompanyFieldStatus\" class=\"category text-danger\"\r\n                                                        style=\"margin-bottom:0em; cursor: pointer;\">Company Required</p>\r\n                                                    <div class=\"form-group\">\r\n                                                        <ng-select [items]=\"myEnterprises | async\" title=\"Select Company\"\r\n                                                            bindLabel=\"name\" name=\"pCompany\" placeholder=\"Company\"\r\n                                                            (change)=\"showCompanyTeam(setCompany)\" [(ngModel)]=\"setCompany\">\r\n                                                        </ng-select>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\" *ngIf=\"showComp\">\r\n                                                <label class=\"col-md-3 col-form-label\">Select Champion</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <p *ngIf=\"projectCompCampFieldStatus\" class=\"category text-danger\"\r\n                                                        style=\"margin-bottom:0em; cursor: pointer;\">Champ Required</p>\r\n                                                    <div class=\"form-group\">\r\n                                                        <ng-select [items]=\"comWorkers | async\" title=\"Select Company\"\r\n                                                            bindLabel=\"name\" name=\"pChampion\" placeholder=\"Champion\"\r\n                                                            (change)=\"setNext(setChampion)\" [(ngModel)]=\"setChampion\">\r\n                                                        </ng-select>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\" *ngIf=\"showComp\">\r\n                                                <label class=\"col-md-3 col-form-label\">Roles</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <tag-input [(ngModel)]='roles' theme='minimal'></tag-input>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"card-footer\" *ngIf=\"showNext\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-11 ml-auto mr-auto\">\r\n                                                        <!-- <button type=\"submit\" style=\"padding-right:0em\" class=\"pull-left primary btn-link\" routerLink=\"/join-project\">Join a Project</button> -->\r\n                                                    </div>\r\n                                                    <div class=\"col-md-1 mr-auto\">\r\n                                                        <button type=\"submit\" (click)=\"testProjectFilds(project, typeSet, setCompany, setChampion)\"\r\n                                                            name=\"enterprise_sector\" class=\"btn-link\">Next</button>\r\n                                                    </div><!-- (click)=\"saveProject()\" -->\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"pSecondPage\" class=\"col-md-10 ml-auto mr-auto\">\r\n                                        <div class=\"card-body \">\r\n                                            <!-- <a class=\"card-category clrs-h1\">{{ project.name }} <br> <small>Add Project Description</small></a>     -->\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-12\">\r\n                                                    <p *ngFor=\"let xsection of theSections | async\">\r\n                                                        <span class=\"col-md-4\">{{ xsection.no }}</span>\r\n                                                        <span class=\"col-md-8\"> {{ xsection.name }}</span>\r\n                                                        <span>\r\n                                                            <button class=\"btn-link\" (click)=\"deleteSection(xsection)\"><i\r\n                                                                    class=\"fa fa-times\"></i></button>\r\n                                                        </span><br>\r\n                                                    </p>\r\n                                                </div>\r\n                                            </div>\r\n                                            <p>Create Sections for the Project</p>\r\n                                            <div class=\"row\" rel=\"tooltip\" title=\"Section No\">\r\n                                                <label class=\"col-md-3 col-form-label\">No</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"number\" [(ngModel)]=\"section.no\" name=\"enterprise_location\"\r\n                                                            class=\"form-control\" placeholder=\"e.g   1,2,3....\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\" rel=\"tooltip\" title=\"Section Nameo\">\r\n                                                <label class=\"col-md-3 col-form-label\">Name</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"section.name\" name=\"enterprise_location\"\r\n                                                            class=\"form-control\" placeholder=\"e.g. Section Name\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-10\"></div>\r\n                                                <div class=\"col-md-2\">\r\n                                                    <button type=\"submit reset\" class=\"btn-link\" (click)=\"addSection()\">Add</button>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"card-footer\" *ngIf=\"showNext\">\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-md-3\">\r\n                                                    </div>\r\n                                                    <div class=\"col-md-8\">\r\n                                                        <button type=\"submit\" name=\"nextBtn\" (click)=\"pBckPage()\" class=\"btn-link text-info\">Dismiss</button>\r\n                                                        <button type=\"submit\" (click)=\"finish()\" name=\"enterprise_sector\"\r\n                                                            class=\"btn-link\">Save</button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"card-footer \">\r\n                                            <div class=\"row\">\r\n                                                <h5 class=\"title na-am\">Or Join Existing Project <a routerLink=\"/join-project\">\r\n                                                        <small> click to join </small></a></h5>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"tab-pane active\" id=\"company\" role=\"tabpanel\" aria-expanded=\"true\">\r\n                            <div class=\"col-md-12 ml-auto mr-auto\">\r\n                                <div class=\"card\">\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"card-header \">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-8 ml-auto mr-auto\">\r\n                                                    <h5 class=\"title na-am\">Create Company</h5>\r\n                                                </div>\r\n                                                <div class=\"col-md-4 mr-auto ml-auto\" style=\"margin-right:0em\">\r\n                                                    <!-- <button type=\"submit\" style=\"padding-right:0em\" class=\"pull-left primary btn-link\" routerLink=\"/enterprises/join-enterprise\">Join existing Enterprise</button> -->\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"firstPage\" class=\"col-md-10 ml-auto mr-auto\">\r\n                                        <div class=\"card-body\">\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Company Name</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"newEnterprise.name\" name=\"enterprise_name\"\r\n                                                            class=\"form-control\" placeholder=\"e.g..Bob Corp\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Location</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"newEnterprise.location\" name=\"enterprise_location\"\r\n                                                            class=\"form-control\" placeholder=\"e.g..Mutare\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Industry Sector</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"newEnterprise.sector\" class=\"form-control\"\r\n                                                            placeholder=\"e.g..Transport\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Services</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <tag-input [(ngModel)]='serviceTags' theme='minimal'></tag-input>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"card-footer \">\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3\"></label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <button type=\"submit\" name=\"nextBtn\" (click)=\"nxtPage()\" class=\"btn-link text-info\">Next</button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div *ngIf=\"secondPage\" class=\"col-md-10 ml-auto mr-auto\">\r\n                                        <div class=\"card-body\">\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Telephone</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"newEnterprise.telephone\" name=\"enterprise_location\"\r\n                                                            class=\"form-control\" placeholder=\"e.g. 06 66666666\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Mobile</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"compUser.phoneNumber\" name=\"enterprise_location\" class=\"form-control\"\r\n                                                            placeholder=\"e.g. +263778880000\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Address</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"newEnterprise.address\" name=\"enterprise_location\"\r\n                                                            class=\"form-control\" placeholder=\"e.g. House#, street, location ,Town\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Email</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"email\" [(ngModel)]=\"compUser.bus_email\" name=\"enterprise_location\"\r\n                                                            class=\"form-control\" placeholder=\"e.g. name@bus_email.com\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Country</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"compUser.nationality\" name=\"enterprise_location\"\r\n                                                            class=\"form-control\" placeholder=\"e.g. Zimbabwe\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">ID number</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"form-group\">\r\n                                                        <input type=\"text\" [(ngModel)]=\"compUser.nationalId\" name=\"enterprise_location\"\r\n                                                            class=\"form-control\" placeholder=\"e.g. 08-1112389 N13\">\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                            <!-- <div class=\"row\">\r\n                                                <label class=\"col-md-3 col-form-label\">Tax Clearance Doc</label>\r\n                                                <div class=\"col-md-9\">\r\n                                                    <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\r\n                                                        <input class=\"form-control\" type=\"file\" style=\"border: 0px;\" (click)=\"upload($event,newEnterprise.taxDocument)\" name=\"taxDoc\" accept=\".png,.jpg,.pdf\" [(ngModel)]=\"newEnterprise.taxDocument\"/>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div> -->\r\n                                        </div>\r\n                                        <div class=\"card-footer \">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-md-3\">\r\n                                                </div>\r\n                                                <div class=\"col-md-8\">\r\n                                                    <button type=\"submit\" name=\"nextBtn\" (click)=\"bckPage()\" class=\"btn-link text-info\">Back</button>\r\n                                                    <!-- <button type=\"submit\" (click)=\"saveEnterprise()\" name=\"enterprise_sector\" class=\"btn-link text-info\">Save company</button> -->\r\n                                                    <button type=\"submit\" (click)=\"testFileds()\" name=\"enterprise_sector\" class=\"btn-link text-info\">Save company</button>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-12\">\r\n                                        <div class=\"card-footer \">\r\n                                            <div class=\"row\">\r\n                                                <!-- <div class=\"col-md-8 ml-auto mr-auto\"> -->\r\n                                                <h5 class=\"title na-am\">Or Join an existing Company <small><span>\r\n                                                            <button class=\"btn-link\" routerLink=\"/enterprises/join-enterprise\">click\r\n                                                                here</button></span></small>\r\n                                                </h5>\r\n                                                <!-- </div>\r\n                                                <div class=\"col-md-4 mr-auto ml-auto\" style=\"margin-right:0em\">\r\n                                                    <button type=\"submit\" style=\"padding-right:0em\" class=\"pull-left primary btn-link\" routerLink=\"/enterprises/join-enterprise\">Join existing Enterprise</button>\r\n                                                </div> -->\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade\" id=\"pModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header justify-content-center\">\r\n                <p>Select Company</p>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <i class=\"nc-icon nc-simple-remove\"></i>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"table-responsive pro_info\">\r\n                    <table class=\"table\">\r\n                        <thead class=\"\">\r\n                            <th>Name</th>\r\n                            <th>Created By</th>\r\n                            <th>Action</th>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr *ngFor=\"let ent of enterprises | async \">\r\n                                <td>{{ ent.name }} </td>\r\n                                <td>{{ ent.by}}</td>\r\n                                <td class=\"text-center\">\r\n                                    <a class=\"warning btn-link edit\" routerLink=\"#\" rel=\"tooltip\" title=\"select {{ ent.name }}\"\r\n                                        (click)=\"selectCompany(ent)\" data-toggle=\"modal\" data-target=\"#noticeModal\">\r\n                                        <font size=2>Select</font>\r\n                                    </a>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"left-side\">\r\n                    <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Never mind</button>\r\n                </div>\r\n                <div class=\"divider\"></div>\r\n                <div class=\"right-side\">\r\n                    <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"saveProject()\" data-dismiss=\"modal\">Confirm</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"modal fade modal-primary\" id=\"pdescription\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\"\r\n    aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-md\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <div class=\"modal-profile ml-auto mr-auto\">\r\n                    <i class=\"fa  fa-list-alt\"></i>\r\n                </div>\r\n                <a class=\"card-category clrs-h1\">{{ project.name }} <br> <small>Add Project Description</small></a>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <div class=\"row\">\r\n                    <p *ngFor=\"let xsection of theSections | async\">\r\n                        <span class=\"col-md-4\">{{ xsection.no }}</span><span class=\"col-md-8\"> {{ xsection.name }}</span><span><button\r\n                                class=\"btn-link\" (click)=\"deleteSection(xsection)\"><i class=\"fa fa-times\"></i></button></span><br>\r\n                    </p>\r\n                </div>\r\n                <p>Create Sections for the Project</p>\r\n                <div class=\"row\" rel=\"tooltip\" title=\"Section No\">\r\n                    <label class=\"col-md-3 col-form-label\">No</label>\r\n                    <div class=\"col-md-9\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"number\" [(ngModel)]=\"section.no\" name=\"enterprise_location\" class=\"form-control\"\r\n                                placeholder=\"e.g   1,2,3....\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" rel=\"tooltip\" title=\"Section Nameo\">\r\n                    <label class=\"col-md-3 col-form-label\">Name</label>\r\n                    <div class=\"col-md-9\">\r\n                        <div class=\"form-group\">\r\n                            <input type=\"text\" [(ngModel)]=\"section.name\" name=\"enterprise_location\" class=\"form-control\"\r\n                                placeholder=\"e.g. Section Name\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-10\"></div>\r\n                <div class=\"col-md-2\">\r\n                    <button type=\"submit reset\" class=\"btn-link\" (click)=\"addSection()\">Add</button>\r\n                </div>\r\n            </div>\r\n            <div class=\"spacer\" style=\"height: 2em\"></div>\r\n            <div class=\"modal-footer\">\r\n                <div class=\"left-side\">\r\n                    <button type=\"button\" (click)=\"dismisProject()\" class=\"btn btn-link\" data-dismiss=\"modal\">Back</button>\r\n                </div>\r\n                <div class=\"divider\"></div>\r\n                <div class=\"right-side\">\r\n                    <button type=\"button\" class=\"btn btn-link\" data-dismiss=\"modal\" (click)=\"finish()\">Save</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/company/create/create.component.ts":
/*!****************************************************!*\
  !*** ./src/app/company/create/create.component.ts ***!
  \****************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
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










var CreateComponent = /** @class */ (function () {
    // public uploader: FileUploader = new FileUploader({ url: URL, itemAlias: 'photo' });
    // public uploader: FileUploader = new FileUploader({});
    function CreateComponent(afAuth, router, is, es, authService, ps, afs) {
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
    CreateComponent.prototype.testProjectFilds = function (project, typeSet, company, champion) {
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
    CreateComponent.prototype.upload = function (event, file) {
        console.log(file);
        // this.afs.upload.collection('try', event.target.files[0]);
    };
    CreateComponent.prototype.testFileds = function () {
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
    CreateComponent.prototype.nxtPage = function () {
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
    CreateComponent.prototype.bckPage = function () {
        this.firstPage = true;
        this.secondPage = false;
    };
    CreateComponent.prototype.pNxtPage = function () {
        this.pfirstPage = false;
        this.pSecondPage = true;
    };
    CreateComponent.prototype.pBckPage = function () {
        this.pfirstPage = true;
        this.pSecondPage = false;
        this.dismisProject();
    };
    CreateComponent.prototype.selectCompany = function (company) {
        console.log(company);
        this.selectedCompany = company;
    };
    CreateComponent.prototype.showCompanyTeam = function (setCompany) {
        this.comWorkers = this.afs.collection('Enterprises').doc(setCompany.id).collection('Participants').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    };
    CreateComponent.prototype.saveProject = function () {
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
    CreateComponent.prototype.setProject = function (project) {
        console.log(project);
        this.savedProject = project;
        console.log(this.savedProject);
    };
    CreateComponent.prototype.dismisProject = function () {
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
    CreateComponent.prototype.clear = function () {
        this.roles = null;
        this.typeSet = { id: "", name: "" };
        this.setChampion = null;
        this.savedProject = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", completion: "" };
        this.project = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", completion: "" };
        this.setCompany = { name: "", by: "", byId: "", createdOn: "", id: "", bus_email: "", location: "", sector: "", participants: null, champion: null, address: "", telephone: "", services: null, taxDocument: "", HnSDocument: "", IndustrialSectorDocument: "" };
    };
    CreateComponent.prototype.checkType = function (data) {
        if (data.id == "Enterprise") {
            this.showComp = true;
        }
        else {
            this.showComp = false;
            rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"];
        }
    };
    CreateComponent.prototype.setNext = function (data) {
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
    CreateComponent.prototype.addSection = function () {
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
    CreateComponent.prototype.showNotification = function (data, from, align) {
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
    CreateComponent.prototype.finish = function () {
        // this.router.navigate(['projects/', this.savedProject.id]).then(this.clear);
        // this.router.navigate(['projects/', this.savedProject.id]);
        // this.router.navigate(['/projects/', this.savedProject.id]);
        // nrouter.navigate(['enterprises/', compRef]);
        this.showNotification('project', 'top', 'right');
        this.pBckPage();
        // alert(this.savedProject.name + 'project has been created check')
        this.clear();
    };
    CreateComponent.prototype.deleteSection = function (section) {
        var sectionId = section.id;
        var dref = this.afs.collection('Projects').doc(section.projectId).collection('sections');
        var entRef = this.afs.collection('Enterprises').doc(section.companyId).collection('projects').doc(section.projectId).collection('sections');
        var myProRef = this.afs.collection('/Users').doc(this.myData.id).collection('projects').doc(section.projectId).collection('sections');
        dref.doc(sectionId).delete();
        entRef.doc(sectionId).delete();
        myProRef.doc(sectionId).delete();
    };
    CreateComponent.prototype.sectionInit = function () {
        this.project = this.is.getSelectedProject();
        this.savedProject = this.is.getSelectedProject();
        this.section = this.is.getSectionInit();
    };
    CreateComponent.prototype.deleteProject = function (projectId) {
        var _this = this;
        this.afAuth.user.subscribe(function (user) {
            console.log(projectId);
            var prodocref = _this.afs.collection('/Users').doc(user.uid).collection('projects').doc(projectId);
            prodocref.delete();
            _this.afs.collection('Projects').doc(projectId).delete();
        });
    };
    CreateComponent.prototype.saveEnterprise = function () {
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
    CreateComponent.prototype.callData = function () {
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
    CreateComponent.prototype.OnInit = function () {
        $('[rel="tooltip"]').tooltip();
        var tagClass = $('.tagsinput').data('color');
        if ($(".tagsinput").length != 0) {
            $('.tagsinput').tagsinput();
        }
        $('.bootstrap-tagsinput').addClass('' + tagClass + '-badge');
    };
    CreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.user.subscribe(function (user) {
            _this.userId = user.uid;
            _this.user = user;
            _this.callData();
        });
        this.typeValidation = this.is.getnewEnterprise();
        this.typeProjectValidation = this.is.getSelectedProject();
    };
    CreateComponent.prototype.save = function (model, isValid) {
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
    CreateComponent.prototype.save2 = function (model, isValid) {
        // call API to save customer
        if (isValid) {
            console.log(model, isValid);
            this.project = model;
            this.saveProject();
        }
    };
    CreateComponent.prototype.onSubmit = function (value) {
        console.log(value);
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-work',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/company/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/company/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], app_services_initialise_service__WEBPACK_IMPORTED_MODULE_7__["InitialiseService"], app_services_enterprise_service__WEBPACK_IMPORTED_MODULE_8__["EnterpriseService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], app_services_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/company/enterprise-profile/enterprise-profile.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/company/enterprise-profile/enterprise-profile.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-colors {\r\n    padding-bottom: 0px;\r\n    padding-top: 0px;\r\n    font-size: 12px;\r\n}\r\n\r\n.nav-hor-tabs {\r\n    padding-top: 0px;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n\r\n.td-clrs {\r\n    padding-left: 1em;\r\n    padding-bottom: 0px;\r\n    padding-top: 0px;\r\n}\r\n\r\n.clrs-h1 {\r\n    font-family: AR ESSENCE;\r\n    color: steelblue;\r\n    font-size: 25px;\r\n}\r\n\r\n.clrs-h4 {\r\n    /* font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */\r\n    font-family: AR ESSENCE;\r\n    /* color: steelblue; */\r\n\r\n    font-size: 20px;\r\n}\r\n\r\n.dash-size {\r\n    width: 630px;\r\n    padding-right: 0px;\r\n    padding-left: 0px;\r\n}\r\n\r\n.dash-col {\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n\r\n.dash-col-left {\r\n    padding-left: 0px;\r\n    padding-right: 1px;\r\n}\r\n\r\n.dash-col-right {\r\n    padding-left: 1px;\r\n    padding-right: 0px;\r\n}\r\n\r\n.clrs-h1-font {\r\n    /* font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */\r\n    font-family: ABeeZee;\r\n    /* color: steelblue; */\r\n    color: #333366;\r\n    /* font-size: 18px; */\r\n    font-size: 23px;\r\n\r\n}\r\n\r\n.clrs-h4-font {\r\n    /* font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif; */\r\n    font-family: ABeeZee;\r\n    /* color: steelblue; */\r\n    color: #333366;\r\n    font-size: 18px;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS9lbnRlcnByaXNlLXByb2ZpbGUvZW50ZXJwcmlzZS1wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0ZBQWtGO0lBQ2xGLHVCQUF1QjtJQUN2QixzQkFBc0I7O0lBRXRCLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtGQUFrRjtJQUNsRixvQkFBb0I7SUFDcEIsc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxrRkFBa0Y7SUFDbEYsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixjQUFjO0lBQ2QsZUFBZTs7QUFFbkIiLCJmaWxlIjoic3JjL2FwcC9jb21wYW55L2VudGVycHJpc2UtcHJvZmlsZS9lbnRlcnByaXNlLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtY29sb3JzIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4ubmF2LWhvci10YWJzIHtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG4udGQtY2xycyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG59XHJcblxyXG4uY2xycy1oMSB7XHJcbiAgICBmb250LWZhbWlseTogQVIgRVNTRU5DRTtcclxuICAgIGNvbG9yOiBzdGVlbGJsdWU7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5jbHJzLWg0IHtcclxuICAgIC8qIGZvbnQtZmFtaWx5OidHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7ICovXHJcbiAgICBmb250LWZhbWlseTogQVIgRVNTRU5DRTtcclxuICAgIC8qIGNvbG9yOiBzdGVlbGJsdWU7ICovXHJcblxyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5kYXNoLXNpemUge1xyXG4gICAgd2lkdGg6IDYzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5kYXNoLWNvbCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmRhc2gtY29sLWxlZnQge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxcHg7XHJcbn1cclxuXHJcbi5kYXNoLWNvbC1yaWdodCB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDFweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmNscnMtaDEtZm9udCB7XHJcbiAgICAvKiBmb250LWZhbWlseTonR2lsbCBTYW5zJywgJ0dpbGwgU2FucyBNVCcsIENhbGlicmksICdUcmVidWNoZXQgTVMnLCBzYW5zLXNlcmlmOyAqL1xyXG4gICAgZm9udC1mYW1pbHk6IEFCZWVaZWU7XHJcbiAgICAvKiBjb2xvcjogc3RlZWxibHVlOyAqL1xyXG4gICAgY29sb3I6ICMzMzMzNjY7XHJcbiAgICAvKiBmb250LXNpemU6IDE4cHg7ICovXHJcbiAgICBmb250LXNpemU6IDIzcHg7XHJcblxyXG59XHJcblxyXG4uY2xycy1oNC1mb250IHtcclxuICAgIC8qIGZvbnQtZmFtaWx5OidHaWxsIFNhbnMnLCAnR2lsbCBTYW5zIE1UJywgQ2FsaWJyaSwgJ1RyZWJ1Y2hldCBNUycsIHNhbnMtc2VyaWY7ICovXHJcbiAgICBmb250LWZhbWlseTogQUJlZVplZTtcclxuICAgIC8qIGNvbG9yOiBzdGVlbGJsdWU7ICovXHJcbiAgICBjb2xvcjogIzMzMzM2NjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/company/enterprise-profile/enterprise-profile.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/company/enterprise-profile/enterprise-profile.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" *ngIf=\"company\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card\">\n        <div class=\"row\">\n          <div class=\" col-md-5\">\n            <div class=\"card-header\">\n              <p class=\"card-category clrs-h1-font\">\n                <!-- style=\"height: 28px; font-size: 8; -->\n                Company : {{ (company)?.name }}\n              </p>\n            </div>\n          </div>\n          <div class=\"col-md-4 ml-auto\">\n                <!-- &body=Colours%20Is%20invited%20to%20a%20big%20summer%20party! -->\n            <div class=\"card-header\">\n              <button class=\"btn-link btn-magnify\" (click)=\"printReport()\">Print</button> <!--  *ngIf=\"displayDept\" -->\n              <a *ngIf=\"displayDept\" href=\"mailto:someone@example.com?\n                &subject=Welcome%20to%20Colours\n                &body=Colours%20Is%20inviting%20you%20to%20join%20Colours%20System%20\n                \" target=\"_top\">\n                Email\n              </a>\n              <!-- <div class=\"col-md-4\"> -->\n              <!-- <button class=\"btn-link btn-magnify\" (click)=\"Update()\">Update</button> -->\n              <!-- </div> -->\n              <button class=\"btn-link btn-magnify\" (click)=\"doc$(company.id); refreshCompany()\"> <i class=\"fa fa-spinner fa-spin fa-2x fa-fw\"></i>\n                Refresh</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\"> <!--  style=\"margin-left:3em; margin-right:0em\" -->\n            <div class=\"clrs-tabs\">\n            <!-- <div class=\"col-lg-2 col-md-2 col-sm-3\" style=\"margin-left: -50px\"> -->\n              <div class=\"nav-tabs-navigation vertical-navs\">\n                <div class=\"nav-tabs-wrapper\">\n                  <ul class=\"nav nav-tabs flex-column nav-stacked text-left\" role=\"tablist\">\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link  active\" href=\"#info\" role=\"tab\" data-toggle=\"tab\">Dashboard</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link \" href=\"#standards\" role=\"tab\" data-toggle=\"tab\">Standards</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link \" (click)=\"minimizeSidebar()\" href=\"#compSetup\" role=\"tab\" data-toggle=\"tab\">Setup</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link \" (click)=\"minimizeSidebar()\" href=\"#planning\" role=\"tab\" data-toggle=\"tab\">Planning</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link \" (click)=\"minimizeSidebar()\" href=\"#implement\" role=\"tab\" data-toggle=\"tab\">Implementation</a><!-- sortTasks(); -->\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link \" (click)=\"minimizeSidebar()\" href=\"#reports\" role=\"tab\" data-toggle=\"tab\">Reporting</a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <!-- <div class=\"col-lg-110 col-md-10 col-sm-9 col-8\" style=\"padding-right: 0px;padding-left: 15px;margin-right: -50px\"> -->\n            <div class=\"col-lg-9 col-md-8 col-sm-8 col-8 ml-auto mr-auto\" style=\"padding-right: 0px;padding-left: 0px;\"> <!--  dash-size  -->\n\n              <!-- Tab panes -->\n              <div class=\"tab-content\">\n                <div class=\"tab-pane active\" id=\"info\">\n                  <div class=\"row\">\n                    <div class=\"col-xs-3 col-sm-4 dash-col-left\">\n                      <div class=\"card card-category\">\n                        <div class=\"btn-magnify\">\n                          <div class=\"row col-md-12\" style=\"margin-left:1em; padding-bottom: -1em \">\n                            <div class=\"pull-left card-category clrs-h1-font\">\n                              <a>\n                                <i class=\"nc-icon nc-palette\"></i> Colours Personal</a>\n                            </div>\n                          </div>\n                          <div class=\"pull-left col-md-10\" style=\"margin-left:1em;padding-top: -1em; color: steelblue \">\n                            <a>My Diary Today</a>\n                          </div>\n                          <div class=\"spacer\" style=\"height: 2.4em;\"></div>\n                          <div class=\"row\" style=\"height: 100px\">\n                            <div id=\"container\">\n                              <!-- <div class=\"content container scroll-em\" *ngIf=\"showActions\"> -->\n                              <div class=\"content container scroll-em\" *ngIf=\"diaryActionItems.length != 0\">\n                                <ol>\n                                  <!-- <li style=\"color:lightgrey\" class=\"mr-auto ml-auto\" *ngFor=\"let event of theseTasks\"><a>{{ event.name }}</a><br><small class=\"label text-success\"> {{ event.when }}</small>\n                                                    </li> ->\n                                                    <!- <li class=\"\" style=\"color:steelblue\" *ngFor=\"let event of theseTasks\"> ->\n                                                    <!- <li class=\"\" style=\"color:steelblue\" *ngFor=\"let event of viewActions | async\"> -->\n                                  <li class=\"\" style=\"color:steelblue\" *ngFor=\"let event of diaryActionItems\">\n                                    <!-- <div class=\"row\"> -->\n                                    <!-- <div class=\"col-sm-12\" style=\"margin-left:1.0em; margin-right:-.5em\"> -->\n                                    <div class=\"col-sm-12\" style=\"margin-left: 2px; margin-right:-.5em\"><!-- margin-left:1.0em; -->\n\n                                      <a style=\"color:slategrey\">\n                                        {{ event.name }}\n                                        <!-- <span class=\"label text-warning\"> {{ event.when }}</span> -->\n                                      </a>\n                                    </div>\n                                    <!-- </div> -->\n                                  </li>\n                                </ol>\n                              </div>\n                              <!-- <div class=\"content container scroll-em\" *ngIf=\"hideActions\"> -->\n                              <div class=\"content container scroll-em\" *ngIf=\"diaryActionItems.length === 0\">\n                                <div class=\"row\">\n                                  <div class=\"col-sm-12\" style=\"margin-left:-.5em; margin-right:-.5em\">\n                                    <ol>\n                                      <li>\n                                        <!-- <div class=\"row\"> -->\n                                        <a style=\"color:lightgrey\">\n                                          <span class=\"col-md-9 text-info\">Meeting</span>\n                                          <span class=\"col-md-3 mr-auto number text-warning\"> 1000 hrs</span>\n                                        </a>\n                                        <!-- </div> -->\n                                      </li>\n                                      <li>\n                                        <!-- <div class=\"row\"> -->\n                                        <a style=\"color:lightgrey\">\n                                          <span class=\"col-md-9 text-info\">Email</span>\n                                          <span class=\"col-md-3 mr-auto ml-auto number text-success\">1230 Hrs</span>\n                                        </a>\n                                        <!-- </div> -->\n                                      </li>\n                                      <li>\n                                        <!-- <div class=\"row\"> -->\n                                        <a style=\"color:lightgrey\">\n                                          <span class=\"col-md-9 text-info\">Skype</span>\n                                          <span class=\"col-md-3 mr-auto ml-auto label text-success\"> 1400 Hrs </span>\n                                        </a>\n                                        <!-- </div> -->\n                                      </li>\n                                      <li>\n                                        <!-- <div class=\"row \"> -->\n                                        <a style=\"color:lightgrey\">\n                                          <span class=\"col-md-9 text-info\">Scheduling</span>\n                                          <span class=\"col-lg-3 mr-auto ml-auto label text-success\"> 0800 Hrs </span>\n                                        </a>\n                                        <!-- </div> -->\n                                      </li>\n                                    </ol>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <!-- <div class=\"card-body\">\n                                            <h6 class=\"big-title\">total earnings in last ten quarters</h6>\n                                            <canvas id=\"activeUsers\" width=\"auto\" height=\"200\"></canvas>\n                                          </div> -->\n                        <div class=\"card-footer\">\n                          <hr>\n                          <div class=\"row\">\n                            <div class=\"col-sm-7\">\n                              <div class=\"footer-title\">View more.....</div>\n                            </div>\n                            <div class=\"col-sm-5\">\n                              <div class=\"pull-right\">\n                                <button class=\"btn btn-success btn-round btn-icon btn-sm\">\n                                  <i class=\"nc-icon nc-simple-add\"></i>\n                                </button>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-xs-3 col-sm-4 dash-col\">\n                      <div class=\"card card-category\">\n                        <div class=\"btn-magnify\">\n                          <div class=\"row col-md-12\" style=\"margin-left:1em; padding-bottom: -1em \">\n                            <div class=\"pull-left card-category clrs-h1-font\">\n                              <a>\n                                <i class=\"fa fa-folder-o [&#xf114;]\"></i> Colours Projects</a>\n                            </div>\n                          </div>\n                          <!-- <hr class=\"line\" style=\"padding-bottom:0em; padding-top: -1em\"> -->\n                          <!-- <div class=\"pull-left col-md-12 card-category\" style=\"margin-left:2em;padding-top: -1em; color: steelblue; \"> -->\n                          <div class=\"pull-left col-md-12\" style=\"margin-left:1em;padding-top: -1em; color: steelblue; \">\n                            <a>My Current Priority Projects</a>\n                          </div>\n                          <div class=\"spacer\" style=\"height:2.4em;\"></div>\n                          <div class=\"col-sm-10\" id=\"pTasklist\" style=\"height: 100px\">\n                            <!--  style=\"margin-left: 2em\" -->\n                            <div class=\"content container scroll-em\" *ngIf=\"showProjs\">\n                              <ol>\n                                <!-- <li class=\"col-xs-12 ml-auto mr-auto\" style=\"color:steelblue\" *ngFor=\"let project of myProjects | async\"> -->\n                                <li class=\"col-xs-12 ml-auto mr-auto\" style=\"color:steelblue\" *ngFor=\"let project of projs\">\n                                  <a [routerLink]=\"[ '/projects/', project.id ]\" style=\"color:slategray\"><span\n                                      class=\"text-info\">{{ project.name }}</span></a>\n                                </li>\n                              </ol>\n                            </div>\n                            <div class=\"content container scroll-em\" *ngIf=\"hideProjs\">\n                              <div class=\"row\">\n                                <div class=\"col-sm-12\" style=\"margin-left:-.5em; margin-right:-.5em\">\n                                  <ol>\n                                    <li>\n                                      <!-- <div class=\"row\"> -->\n                                      <a style=\"color:lightgrey\">\n                                        <span class=\"col-md-12 text-info\">Project 1</span>\n                                      </a>\n                                      <!-- </div> -->\n                                    </li>\n                                    <li>\n                                      <!-- <div class=\"row\"> -->\n                                      <a style=\"color:lightgrey\">\n                                        <span class=\"col-md-12 text-info\">Project 2</span>\n                                      </a>\n                                      <!-- </div> -->\n                                    </li>\n                                    <li>\n                                      <!-- <div class=\"row\"> -->\n                                      <a style=\"color:lightgrey\">\n                                        <span class=\"col-md-12 text-info\">Project 3</span>\n                                      </a>\n                                      <!-- </div> -->\n                                    </li>\n                                    <li>\n                                      <!-- <div class=\"row \"> -->\n                                      <a style=\"color:lightgrey\">\n                                        <span class=\"col-md-12 text-info\">Project 4</span>\n                                      </a>\n                                      <!-- </div> -->\n                                    </li>\n                                  </ol>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <!-- <div class=\"card-body\">\n                                            <h6 class=\"big-title\">total subscriptions in last 7 days</h6>\n                                            <canvas id=\"emailsCampaignChart\" width=\"auto\" height=\"200\"></canvas>\n                                          </div> -->\n                        <div class=\"card-footer\">\n                          <hr>\n                          <div class=\"row\">\n                            <div class=\"col-sm-7\">\n                              <div class=\"footer-title\">View more.....</div>\n                            </div>\n                            <div class=\"col-sm-5\">\n                              <div class=\"pull-right\">\n                                <button class=\"btn btn-danger btn-round btn-icon btn-sm\">\n                                  <i class=\"nc-icon nc-button-play\"></i>\n                                </button>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-xs-3 col-sm-4 ml-auto mar-auto dash-col-right\">\n                      <div class=\"card card-category\">\n                        <div class=\"card-content btn-magnify\">\n                          <div class=\"row col-sm-12 ml-auto mr-auto\" style=\"padding-bottom: -1em \">\n                            <div class=\"clrs-h1-font\">\n                              <a><i class=\"fa fa-feed  fa-flip-vertical fa-fw\"></i> {{ (company)?.name }} News</a>\n                            </div>\n                            <div class=\"text-left col-md-12\" style=\"margin-left: 1em; color: steelblue;font-size: 2 \">\n                              <a>All {{ (company)?.name }} enterprise News</a>\n                            </div>\n                          </div>\n                          <div class=\"spacer\" style=\"height: 1em;\"></div>\n                          <div id=\"eTasklixt\" class=\"row col-sm-12 ml-auto mr-auto\">\n                            <marquee direction=\"up\">\n                              <ol style=\"padding-left: 14px; padding-right: 14px;\">\n                                <li>\n                                    <div class=\"col-md-9 \" style=\"margin-left: 1em\">\n                                      <a class=\"text-danger\" href=\"#Respond_to_feed\" style=\"color:lightgrey\">\n                                        Increase your ﬁnancial networth by using Colours\n                                        to get the best results out of your efforts.\n                                      </a>\n                                    </div>\n                                </li>\n                                <li>\n                                    <div class=\"col-md-9\" style=\"margin-left:1em\">\n                                      <a href=\"#Respond_to_mail\" style=\"color:lightgrey\">\n                                        Use Colours to TRACK your own daily performance metrics, review and improve on\n                                        the same.\n                                      </a>\n                                    </div>\n                                </li>\n                                <li>\n                                    <div class=\"col-md-9\" style=\"margin-left:1em\">\n                                      <a href=\"#Contact_Supplier\" style=\"color:lightgrey\">\n                                        Colours will help you pay attention to the effective\n                                        use of yo time and your any other resources.\n                                      </a>\n                                    </div>\n                                </li>\n                                <li>\n                                    <div class=\"col-md-9\" style=\"margin-left:1em\">\n                                      <a href=\"#Aripo\" style=\"color:lightgrey\">\n                                        Colours will help you squeeze the most out of your life\n                                      </a>\n                                    </div>\n                                </li>\n                              </ol>\n                            </marquee>\n                          </div>\n                        </div>\n                        <div class=\"card-footer\">\n                          <hr>\n                          <div class=\"row\">\n                            <div class=\"col-sm-7\">\n                              <div class=\"footer-title\">View more.....</div>\n                            </div>\n                            <div class=\"col-sm-5\">\n                              <div class=\"pull-right\">\n                                <button class=\"btn btn-warning btn-round btn-icon btn-sm\">\n                                  <i class=\"nc-icon nc-alert-circle-i\"></i>\n                                </button>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                  <!-- <div class=\"row\">\n                    <div class=\"col-lg-4 col-sm-6 dash-col-left\">\n                      <div class=\"card\">\n                        <div class=\"card-content btn-magnify\">\n                          <div class=\"row col-sm-12 ml-auto mr-auto\" style=\"padding-bottom: -1em \">\n                            <div class=\"clrs-h1-font col-md-12\">\n                              <a><i class=\"nc-icon nc-palette\"></i> Colours Personal</a>\n                            </div>\n                            <div class=\"text-left col-md-10\" style=\"margin-left: 1em; color: steelblue; \">\n                              <a>My Diary Today</a>\n                            </div>\n                          </div>\n                          <div class=\"spacer\" style=\"height: 1em;\"></div>\n                          <div class=\"row\" style=\"height: 100px\" >\n                            <div  id=\"container\">\n                              <div class=\"content container scroll-em\" *ngIf=\"diaryActionItems.length != 0\">\n                                <ol>\n                                  <li class=\"\" style=\"color:steelblue\" *ngFor=\"let event of diaryActionItems\">\n                                      <div class=\"col-sm-12\" style=\"margin-left:1.0em; margin-right:-.5em\">\n                                        <a style=\"color:slategrey\">\n                                          {{ event.name }}\n                                        </a>\n                                      </div>\n                                  </li>\n                                </ol>\n                              </div>\n                              <div class=\"content container scroll-em\" *ngIf=\"diaryActionItems.length === 0\">\n\n                                <div class=\"row\">\n                                  <div class=\"col-sm-12\" style=\"margin-left:-.5em; margin-right:-.5em\">\n                                    <ol>\n                                      <li>\n                                          <a style=\"color:lightgrey\">\n                                            <span class=\"col-md-9 text-info\">Meeting</span>\n                                            <span class=\"col-md-3 mr-auto number text-warning\"> 1000 hrs</span>\n                                          </a>\n                                      </li>\n                                      <li>\n                                            <a style=\"color:lightgrey\">\n                                              <span class=\"col-md-9 text-info\">Email</span>\n                                              <span class=\"col-md-3 mr-auto ml-auto number text-success\">1230 Hrs</span>\n                                            </a>\n                                      </li>\n                                      <li>\n                                          <a style=\"color:lightgrey\">\n                                            <span class=\"col-md-9 text-info\">Skype</span>\n                                            <span class=\"col-md-3 mr-auto ml-auto label text-success\"> 1400 Hrs </span>\n                                          </a>\n                                      </li>\n                                      <li>\n                                          <a style=\"color:lightgrey\">\n                                            <span class=\"col-md-9 text-info\">Scheduling</span>\n                                            <span class=\"col-lg-3 mr-auto ml-auto label text-success\"> 0800 Hrs </span>\n                                          </a>\n                                      </li>\n                                    </ol>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"card-body\">\n                          <h6 class=\"big-title\">total earnings in last ten quarters</h6>\n                          <canvas id=\"activeUsers\" width=\"826\" height=\"150\"></canvas>\n                        </div>\n                        <div class=\"card-footer\">\n                          <hr>\n                          <div class=\"row\">\n                            <div class=\"col-sm-7\">\n                              <div class=\"footer-title\">View more.....</div>\n                            </div>\n                            <div class=\"col-sm-5\">\n                              <div class=\"pull-right\">\n                                <button class=\"btn btn-success btn-round btn-icon btn-sm\">\n                                  <i class=\"nc-icon nc-simple-add\"></i>\n                                </button>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4 col-sm-6 dash-col\">\n                      <div class=\"card\">\n                        <div class=\"card-content btn-magnify\">\n                          <div class=\"row col-sm-12 ml-auto mr-auto\" style=\"padding-bottom: -1em \">\n                            <div class=\"clrs-h1-font\">\n                              <a><i class=\"fa fa-tasks fa-fw\"></i> Colours Enterprise</a>\n                            </div>\n                            <div class=\"text-left col-md-12\" style=\"margin-left: 1em; color: steelblue; \">\n                              <a>My Current Priority Projects</a>\n                            </div>\n                          </div>\n                          <div class=\"spacer\" style=\"height:1em;\"></div>\n                          <div id=\"pTasklist\">\n                            <ol>\n                              <li>\n                                  <div class=\"col-md-9 \" style=\"margin-left:2.0em\">\n                                    <a class=\"text-info\" style=\"color:lightgrey\" href=\"#send_agenda\">\n                                      Project 1\n                                    </a>\n                                  </div>\n                              </li>\n                              <li>\n                                  <div class=\"col-md-9 \" style=\"margin-left:2.0em\">\n                                    <a class=\"text-info\" style=\"color:lightgrey\" href=\"#send_agenda\">\n                                      Project 2\n                                    </a>\n                                  </div>\n                              </li>\n                              <li>\n                                  <div class=\"col-md-9 \" style=\"margin-left:2.0em\">\n                                    <a class=\"text-info\" style=\"color:lightgrey\" href=\"#send_agenda\">\n                                      Project 3\n                                    </a>\n                                  </div>\n                              </li>\n                              <li>\n                                  <div class=\"col-md-9 \" style=\"margin-left:2.0em\">\n                                    <a class=\"text-info\" style=\"color:lightgrey\" href=\"#send_agenda\">\n                                      Project 4\n                                    </a>\n                                  </div>\n                              </li>\n                            </ol>\n                          </div>\n                        </div>\n                        <div class=\"card-body\">\n                          <h6 class=\"big-title\">total subscriptions in last 7 days</h6>\n                          <canvas id=\"emailsCampaignChart\" width=\"826\" height=\"150\"></canvas>\n                        </div>\n                        <div class=\"card-footer\">\n                          <hr>\n                          <div class=\"row\">\n                            <div class=\"col-sm-7\">\n                              <div class=\"footer-title\">View more.....</div>\n                            </div>\n                            <div class=\"col-sm-5\">\n                              <div class=\"pull-right\">\n                                <button class=\"btn btn-danger btn-round btn-icon btn-sm\">\n                                  <i class=\"nc-icon nc-button-play\"></i>\n                                </button>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-lg-4 col-sm-6  dash-col-right\">\n                      <div class=\"card\">\n                        <div class=\"card-content btn-magnify\">\n                          <div class=\"row col-sm-12 ml-auto mr-auto\" style=\"padding-bottom: -1em \">\n                            <div class=\"clrs-h1-font\">\n                              <a><i class=\"fa fa-feed  fa-flip-vertical fa-fw\"></i> {{ (company)?.name }} News</a>\n                            </div>\n                            <div class=\"text-left col-md-12\" style=\"margin-left: 1em; color: steelblue;font-size: 2 \">\n                              <a>All {{ (company)?.name }} enterprise News</a>\n                            </div>\n                          </div>\n                          <div class=\"spacer\" style=\"height: 1em;\"></div>\n                          <div id=\"eTasklixt\" class=\"row col-sm-12 ml-auto mr-auto\">\n                            <marquee direction=\"up\">\n                              <ol style=\"padding-left: 14px; padding-right: 14px;\">\n                                <li>\n                                    <div class=\"col-md-9 \" style=\"margin-left: 1em\">\n                                      <a class=\"text-danger\" href=\"#Respond_to_feed\" style=\"color:lightgrey\">\n                                        Increase your ﬁnancial networth by using Colours\n                                        to get the best results out of your efforts.\n                                      </a>\n                                    </div>\n                                </li>\n                                <li>\n                                    <div class=\"col-md-9\" style=\"margin-left:1em\">\n                                      <a href=\"#Respond_to_mail\" style=\"color:lightgrey\">\n                                        Use Colours to TRACK your own daily performance metrics, review and improve on\n                                        the same.\n                                      </a>\n                                    </div>\n                                </li>\n                                <li>\n                                    <div class=\"col-md-9\" style=\"margin-left:1em\">\n                                      <a href=\"#Contact_Supplier\" style=\"color:lightgrey\">\n                                        Colours will help you pay attention to the effective\n                                        use of yo time and your any other resources.\n                                      </a>\n                                    </div>\n                                </li>\n                                <li>\n                                    <div class=\"col-md-9\" style=\"margin-left:1em\">\n                                      <a href=\"#Aripo\" style=\"color:lightgrey\">\n                                        Colours will help you squeeze the most out of your life\n                                      </a>\n                                    </div>\n                                </li>\n                              </ol>\n                            </marquee>\n                          </div>\n                        </div>\n                        <div class=\"card-footer\">\n                          <hr>\n                          <div class=\"row\">\n                            <div class=\"col-sm-7\">\n                              <div class=\"footer-title\">View more.....</div>\n                            </div>\n                            <div class=\"col-sm-5\">\n                              <div class=\"pull-right\">\n                                <button class=\"btn btn-warning btn-round btn-icon btn-sm\">\n                                  <i class=\"nc-icon nc-alert-circle-i\"></i>\n                                </button>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div> -->\n                </div>\n                <div class=\"tab-pane\" id=\"standards\">\n                  <div class=\"col-md-5 mr-auto ml-auto text-center\">\n                    <p>Coming Soon.</p>\n                  </div>\n                </div>\n                <div class=\"tab-pane\" id=\"compSetup\">\n                  <div class=\"col-md-12\">\n                    <div class=\"card-body nav-hor-tabs\">\n                      <div class=\"nav-tabs-navigation\">\n                        <div class=\"nav-tabs-wrapper\">\n                          <ul id=\"tabs\" class=\"nav nav-tabs\" role=\"tablist\">\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link nav-colors active\" data-toggle=\"tab\" href=\"#subs\" role=\"tab\"\n                                aria-expanded=\"false\">Subsidiaries</a>\n                            </li>\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link nav-colors\" data-toggle=\"tab\" href=\"#dept\" role=\"tab\" aria-expanded=\"true\">Departments</a>\n                            </li>\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link nav-colors\" data-toggle=\"tab\" href=\"#proj\" role=\"tab\" aria-expanded=\"false\">Projects</a>\n                            </li>\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link nav-colors\" data-toggle=\"tab\" href=\"#cstaff\" role=\"tab\" aria-expanded=\"false\">Staff\n                                Register</a>\n                            </li>\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link nav-colors\" data-toggle=\"tab\" href=\"#client\" role=\"tab\" aria-expanded=\"false\">Clients</a>\n                            </li>\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link nav-colors\" data-toggle=\"tab\" href=\"#asset\" role=\"tab\" aria-expanded=\"false\">Asset\n                                Register</a>\n                            </li>\n                          </ul>\n                        </div>\n                      </div>\n                      <div id=\"my-tab-content\" class=\"tab-content text-center\">\n                        <div class=\"tab-pane\" role=\"tabpanel\" id=\"dept\" aria-expanded=\"false\">\n                          <div class=\"card-header text-left\" style=\"padding-top: 0px;\">\n                            <h5 class=\"card-category\" style=\"height: 28px; font-size: 8;\">\n                              Company Departments<br><small>\n                              </small><br>\n                            </h5>\n                          </div>\n                          <div class=\"table-responsive\">\n                            <table class=\"table text-left\">\n                              <thead class=\"card-category\">\n                                <th>Department</th>\n                                <th>Head(HOD)</th>\n                                <th>Action</th>\n                              </thead>\n                              <tbody>\n                                <tr *ngFor=\"let dept of departments | async\" style=\"border-bottom: darkslategrey\">\n                                  <td class=\"td-clrs\" style=\"padding-left: 1em\">{{ dept.name }}</td>\n                                  <td class=\"td-clrs\" style=\"padding-left: 1em\">{{ (dept.hod)?.name }}</td>\n                                  <td class=\"td-clrs\">\n                                    <a *ngIf=\"dept.hod == null\" class=\"btn warning btn-link btn-icon btn-sm edit\"\n                                      data-toggle=\"modal\" (click)=\"dpTasks(dept)\" data-target=\"#entDptStaff\" rel=\"tooltip\"\n                                      title=\"Set department head\"><i class=\"fa fa-edit\"></i></a>\n                                    <a class=\"btn danger btn-link btn-icon btn-sm remove\" (click)=\"deleteDept(dept)\"><i\n                                        class=\"fa fa-times\"></i></a>\n                                  </td>\n                                  <hr>\n                                </tr>\n\n                                <div class=\"\">\n                                  <div class=\"spacer\" style=\"height:2em\"></div>\n                                  <input class=\"form-control\" placeholder=\"Add Department\" type=\"text\" [(ngModel)]=\"dpt.name\">\n                                  <button class=\"primary btn-link\" (click)=\"saveDept(dpt)\">Save</button>\n                                </div>\n                              </tbody>\n                            </table>\n                          </div>\n                        </div>\n\n                        <div class=\"tab-pane active\" id=\"subs\" role=\"tabpanel\" aria-expanded=\"true\">\n                          <div class=\"card-header text-left\" style=\"padding-top: 0px;\">\n                            <h5 class=\"card-category\" style=\"height: 28px; font-size: 8;\">\n                              Company Subsidiaries<br><small>\n                              </small><br>\n                            </h5>\n                          </div>\n                          <div class=\"table-responsive\">\n                            <!--  pro_info -->\n                            <table class=\"table text-left\">\n                              <thead class=\"card-category\">\n                                <th>Subsidiary</th>\n                                <th>Sector</th>\n                                <th>Location</th>\n                                <th>Action</th>\n                              </thead>\n                              <tbody>\n                                <tr *ngFor=\"let subsidiary of subsidiaries | async\">\n                                  <!--  style=\"border-bottom: darkslategrey\" -->\n                                  <td class=\" td-clrs\" style=\"padding-left: 1em\">{{ subsidiary.name }}</td>\n                                  <td class=\" td-clrs\" style=\"padding-left: 1em\">{{ subsidiary.sector }}</td>\n                                  <td class=\" td-clrs\" style=\"padding-left: 1em\">{{ subsidiary.location }}</td>\n                                  <td class=\" td-clrs\">\n                                    <!-- <a class=\"btn warning btn-link btn-icon btn-sm edit\" rel=\"tooltip\" title=\"Select Department\"><i class=\"fa fa-edit\"></i></a> -->\n                                    <a class=\"btn danger btn-link btn-icon btn-sm remove\" (click)=\"deleteSubs(subsidiary)\"><i\n                                        class=\"fa fa-times\"></i></a>\n                                  </td>\n                                  <hr>\n                                </tr>\n                              </tbody>\n                            </table>\n                            <div class=\"text-left\">\n                              <div class=\"spacer\" style=\"height:2em\"></div>\n                              <div class=\"card-header text-left\" style=\"padding-top: 0px;\">\n                                <h5 class=\"card-category\" style=\"height: 28px; font-size: 8;\">\n                                  Add Subsidiary\n                                </h5>\n                              </div>\n                              <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\">\n                                        <i class=\"nc-icon nc-tablet-2\"></i>\n                                      </span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Subsidiary name...\" (focus)=\"focus=true\"\n                                      (blur)=\"focus=false\" [(ngModel)]=\"subsidiary.name\">\n                                  </div>\n                                </div>\n                                <div class=\"col-md-5\">\n                                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\">\n                                        <i class=\"nc-icon nc-tag-content\"></i>\n                                      </span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Location...\" (focus)=\"focus=true\"\n                                      (blur)=\"focus=false\" [(ngModel)]=\"subsidiary.location\">\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\">\n                                        <i class=\"nc-icon nc-tag-content\"></i>\n                                      </span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Industry sector...\" (focus)=\"focus=true\"\n                                      (blur)=\"focus=false\" [(ngModel)]=\"subsidiary.sector\">\n                                  </div>\n                                </div>\n                              </div>\n                              <button class=\"primary btn-link\" (click)=\"saveSubsidiary()\">save</button>\n                            </div>\n                          </div>\n                        </div>\n\n                        <div class=\"tab-pane\" id=\"proj\" role=\"tabpanel\" aria-expanded=\"false\">\n\n                          <div class=\" row card-header text-left\" style=\"padding-top: 0px;\">\n                            <h5 class=\"card-category col-md-8\" style=\"height: 28px; font-size: 8;\">\n                              Company projects<br><small>\n                              </small><br>\n                            </h5>\n                            <a class=\"info btn-link\" rel=\"tooltip\" routerLink=\"/work\" title=\"create project\">\n                              <!--  (click)=\"joinProject(project)\" style=\"cursor:default\"-->Create \n                            </a>\n                            <span style=\"padding-top: 8px;\">/</span>\n                            <a class=\"info btn-link\" rel=\"tooltip\" routerLink=\"/projects/join-project\" title=\"Join project\">\n                              <!--  (click)=\"joinProject(project)\" style=\"cursor:default\"-->Join project\n                            </a>\n                          </div>\n                          <div class=\"table-responsive pro_info\">\n                            <table class=\"table\">\n                              <thead class=\"card-category\">\n                                <th class=\"text-left\">Name</th>\n                                <th>Sector</th>\n                                <th>Location</th>\n                                <!-- <th>Project Id</th> -->\n                                <th>Action</th>\n                              </thead>\n                              <tbody>\n                                <tr *ngFor=\"let project of projects | async\">\n                                  <!--  [routerLink]=\"[ '/projects/', project.id ]\" -->\n                                  <td class=\"text-left\"> {{ project.name }} </td>\n                                  <td> {{ project.sector }}</td>\n                                  <td> {{ project.location }}</td>\n                                  <!-- <td> {{ project.id }} </td> -->\n                                  <td class=\"text-center\">\n\n                                    <a class=\"btn btn-warning btn-link btn-icon btn-sm edit\" rel=\"tooltip\" data-toggle=\"modal\"\n                                      data-target=\"#confirmModal\" (click)=\"setProject(project)\" title=\"join project\">\n                                      <!--  (click)=\"joinProject(project)\" style=\"cursor:default\"-->\n                                      <i class=\"fa fa-edit\"></i>\n                                    </a>\n                                    <a *ngIf=\"project.byId == userId\" class=\"btn btn-danger btn-link btn-icon btn-sm remove\"\n                                      (click)=\"deleteProject(project.id)\">\n                                      <i class=\"fa fa-times\"></i>\n                                    </a>\n                                  </td>\n                                </tr>\n                              </tbody>\n                            </table>\n                          </div>\n                        </div>\n\n                        <div class=\"tab-pane\" id=\"cstaff\" role=\"tabpanel\" aria-expanded=\"false\">\n                          <div class=\"row\">\n                            <div class=\"col-md-12\">\n                              <div class=\"card-header text-left\" style=\"padding-top: 0px;\">\n                                <h5 class=\"card-category title clrs-h4-font\" style=\"height: 28px; font-size: 8;\">\n                                  Company Staff<br><small>\n                                  </small><br>\n                                </h5>\n                              </div>\n                              <div class=\"table-responsive\">\n                                <table class=\"table text-left\">\n                                  <thead class=\"card-category\">\n                                    <th>Name</th>\n                                    <th>Department</th>\n                                    <th>Action</th>\n                                  </thead>\n                                  <tbody>\n                                    <tr *ngFor=\"let person of allStaff | async\" style=\"border-bottom: #2f4f4f\">\n                                      <td class=\"td-clrs\" style=\"padding-left: 1em\">{{ person.name }}</td>\n                                      <td class=\"td-clrs\" style=\"padding-left: 1em\">{{ person.department }}</td>\n                                      <td class=\"td-clrs\">\n                                        <a *ngIf=\"!person.department\" class=\"btn warning btn-link btn-icon btn-sm edit\"\n                                          rel=\"tooltip\" title=\"Add to Department\" (click)=\"selectUser(person)\" data-toggle=\"modal\" data-target=\"#addStaffdpt\"><i class=\"fa fa-edit\"></i></a>\n                                        <a class=\"btn danger btn-link btn-icon btn-sm remove\" (click)=\"deleteStaff(person)\"><i class=\"fa fa-times\"></i></a>\n                                        <a class=\"btn danger btn-link btn-icon btn-sm remove text-info\" (click)=\"viewStaff(person)\" style =\"padding-top: 5px;\" data-toggle=\"modal\" data-target=\"#editStaffdata\"><small>edit</small></a>\n                                      </td>\n                                      <hr>\n                                    </tr>\n                                  </tbody>\n                                </table>\n                                <div class=\"text-left\">\n                                  <div class=\"row\" style=\"padding-top: 0px;\">\n                                    <div class=\"col-ms-8\">\n                                      <div class=\"card-header text-left\">\n                                        <h5 class=\"card-category\" style=\"height: 28px; font-size: 8;\">\n                                          Add new staff\n                                        </h5>\n                                      </div>\n                                    </div>\n                                    <div class=\"col-ms-4 mr-auto ml-auto\">\n                                      <div class=\"card-header text-right\">\n                                        <h5 class=\"card-category\" style=\"height: 28px; font-size: 8;\">\n                                          Add from <button class=\"primary btn-link\" data-toggle=\"modal\" data-target=\"#usersList\">Colours\n                                            Users</button>\n                                        </h5>\n                                      </div>\n                                    </div>\n                                  </div>\n                                  <div class=\"row\">\n                                    <div class=\"col-md-10\">\n                                      <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                        <div class=\"input-group-prepend\">\n                                          <span class=\"input-group-text\">\n                                            <i class=\"fa fa-user-md\"></i>\n                                          </span>\n                                        </div>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Staff name...\" (focus)=\"focus=true\"\n                                          (blur)=\"focus=false\" [(ngModel)]=\"companystaff.name\">\n                                      </div>\n                                    </div>\n                                  </div>\n                                  <div class=\"row\">\n                                    <div class=\"col-md-10\">\n                                      <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                        <div class=\"input-group-prepend\">\n                                          <span class=\"input-group-text\">\n                                            <i class=\"nc-icon nc-tag-content\"></i>\n                                          </span>\n                                        </div>\n                                        <input type=\"text\" class=\"form-control\" placeholder=\"Phone number ...\" (focus)=\"focus=true\"\n                                          (blur)=\"focus=false\" [(ngModel)]=\"companystaff.phoneNumber\">\n                                      </div>\n                                    </div>\n                                  </div>\n                                  <div class=\"row\">\n                                    <div class=\"col-md-10\">\n                                      <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                        <div class=\"input-group-prepend\">\n                                          <span class=\"input-group-text\">\n                                            <i class=\"nc-icon nc-email-85\"></i>\n                                          </span>\n                                        </div>\n                                        <input type=\"email\" class=\"form-control\" placeholder=\"email address ...\"\n                                          (focus)=\"focus=true\" (blur)=\"focus=false\" [(ngModel)]=\"companystaff.email\">\n                                      </div>\n                                    </div>\n                                  </div>\n                                  <button class=\"primary btn-link\" (click)=\"saveStaff(companystaff)\">save</button>\n                                </div>\n                              </div>\n                            </div>\n                            <!-- <div class=\"col-md-4 mr-auto ml-auto\">\n                              <div class=\"card-plain\">\n                                <div class=\"card-header text-left\" style=\"padding-top: 0px;\">\n                                  <h5 class=\"card-category title clrs-h4-font\" style=\"height: 28px; font-size: 8;\">\n                                    Connection Requests<br><small>\n                                    </small><br>\n                                  </h5>\n                                </div>\n                                <ul>\n                                  <li *ngFor=\"let rMan of staffRequests | async\"><span>{{ rMan.name }}</span><span><button\n                                        class=\"btn-link\" (click)=\"acceptRequest(rMan)\"> Accept\n                                      </button></span></li>\n                                </ul>\n                              </div>\n                            </div> -->\n                          </div>\n                        </div>\n\n                        <div class=\"tab-pane\" id=\"client\" role=\"tabpanel\" aria-expanded=\"false\">\n                          <div class=\"\">\n                            <div class=\"card-header text-left\" style=\"padding-top: 0px;\">\n                              <h5 class=\"card-category\" style=\"height: 28px; font-size: 8;\">\n                                Company Client Accounts<br><small>\n                                </small><br>\n                              </h5>\n                            </div>\n                            <div class=\"table-responsive\">\n                              <!--  pro_info -->\n                              <table class=\"table text-left\">\n                                <thead class=\"card-category\">\n                                  <th>Client</th>\n                                  <th>Contact person</th>\n                                  <th>Action</th>\n                                </thead>\n                                <tbody>\n                                  <tr *ngFor=\"let user of clients | async\" style=\"border-bottom: darkslategrey\">\n                                    <td class=\"td-clrs\" style=\"padding-left: 1em\">{{ (user)?.name }}</td>\n                                    <td class=\"card-category td-clrs\" style=\"padding-left: 1em\">\n                                      <span *ngIf=\"user.contactPerson\">\n                                        {{ user.contactPerson.name }}\n                                      </span>\n                                      <span *ngIf=\"user.champion\">\n                                        {{ user.champion.name }}\n                                      </span></td>\n                                    <td class=\"td-clrs\">\n                                      <button class=\"btn-link btn-icon edit\" rel=\"tooltip\" title=\"Send mail\"><i class=\"nc-icon nc-email-85\"></i></button>\n                                      <button class=\" btn-link btn-icon remove\" (click)=\"deleteDept(dept)\"><i class=\"nc-icon nc-simple-remove\"></i></button>\n                                    </td>\n                                    <hr>\n                                  </tr>\n                                </tbody>\n                              </table>\n                              <div class=\"text-left\">\n                                <div class=\"spacer\" style=\"height:2em\"></div>\n                                <div class=\"card-body\">\n                                  <div class=\"row text-info\">\n                                    <div class=\"col-md-1\"></div>\n                                    <div class=\"col-md-10 ml-auto mr-auto\">\n                                      <a style=\"cursor: context-menu\" data-toggle=\"modal\" data-target=\"#companyPicker\">Pick\n                                        client from existing Companies in Colours</a>\n                                    </div>\n                                  </div>\n                                  <div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\" class=\"card-collapse\">\n                                    <div class=\"card card-plain\">\n                                      <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n                                        <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse2\"\n                                          aria-expanded=\"false\" aria-controls=\"collapse2\">\n                                          Add Client\n                                          <i class=\"nc-icon nc-minimal-down\"></i>\n                                        </a>\n                                      </div>\n                                      <div id=\"collapse2\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"heading2\">\n                                        <div class=\"card-body\">\n                                          <div class=\"row\">\n                                            <div class=\"col-md-5\">\n                                              <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                                <div class=\"input-group-prepend\">\n                                                  <span class=\"input-group-text\">\n                                                    <i class=\"fa fa-suitcase\"></i>\n                                                  </span>\n                                                </div>\n                                                <input type=\"text\" class=\"form-control\" placeholder=\"Company name...\"\n                                                  (focus)=\"focus=true\" (blur)=\"focus=false\" [(ngModel)]=\"client.name\">\n                                              </div>\n                                            </div>\n                                          </div>\n                                          <div class=\"card-header text-left\" style=\"padding-top: 0px;\">\n                                            <h5 class=\"card-category\" style=\"font-size: 8; padding-top: 4px; margin-bottom: 6px;\">\n                                              Contact personel details\n                                            </h5>\n                                          </div>\n                                          <div class=\"row\">\n                                            <div class=\"col-md-7\">\n                                              <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                                <div class=\"input-group-prepend\">\n                                                  <span class=\"input-group-text\">\n                                                    <i class=\"nc-icon nc-email-85\"></i>\n                                                  </span>\n                                                </div>\n                                                <input type=\"email\" class=\"form-control\" placeholder=\"email...\" (focus)=\"focus=true\"\n                                                  (blur)=\"focus=false\" [(ngModel)]=\"contactPerson.email\">\n                                              </div>\n                                            </div>\n                                          </div>\n                                          <div class=\"row\">\n                                            <div class=\"col-md-5\">\n                                              <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                                <div class=\"input-group-prepend\">\n                                                  <span class=\"input-group-text\">\n                                                    <i class=\"fa fa-user-o\"></i>\n                                                  </span>\n                                                </div>\n                                                <input type=\"text\" class=\"form-control\" placeholder=\"Contact name...\"\n                                                  (focus)=\"focus=true\" (blur)=\"focus=false\" [(ngModel)]=\"contactPerson.name\">\n                                              </div>\n                                            </div>\n                                            <div class=\"col-md-5\">\n                                              <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                                <div class=\"input-group-prepend\">\n                                                  <span class=\"input-group-text\">\n                                                    <i class=\"fa fa-phone\"></i>\n                                                  </span>\n                                                </div>\n                                                <input type=\"text\" class=\"form-control\" placeholder=\"Phone number...\"\n                                                  (focus)=\"focus=true\" (blur)=\"focus=false\" [(ngModel)]=\"contactPerson.phoneNumber\">\n                                              </div>\n                                            </div>\n                                          </div>\n                                          <button class=\"primary btn-link\" (click)=\"saveClient(asset)\">save</button>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n\n                        <div class=\"tab-pane\" id=\"asset\" role=\"tabpanel\" aria-expanded=\"false\">\n                          <div class=\"card-header text-left\" style=\"padding-top: 0px;\">\n                            <h5 class=\"card-category\" style=\"height: 28px; font-size: 8;\">\n                              Company Asset Register<br><small>\n                              </small><br>\n                            </h5>\n                          </div>\n                          <div class=\"table-responsive\">\n                            <!--  pro_info -->\n                            <table class=\"table text-left\">\n                              <thead class=\"card-category\">\n                                <th>Asset</th>\n                                <th>Asset No.</th>\n                                <th>Action</th>\n                              </thead>\n                              <tbody>\n                                <tr *ngFor=\"let asset of assets | async\" style=\"border-bottom: darkslategrey\">\n                                  <td class=\"td-clrs\" style=\"padding-left: 1em\">{{ asset.name }}</td>\n                                  <td class=\"td-clrs\" style=\"padding-left: 1em\">{{ asset.assetNumber }}</td>\n                                  <td class=\"td-clrs\">\n                                    <a class=\"btn warning btn-link btn-icon btn-sm edit\" rel=\"tooltip\" title=\"Select Department\"><i\n                                        class=\"fa fa-edit\"></i></a>\n                                    <a class=\"btn danger btn-link btn-icon btn-sm remove\" (click)=\"removeAsset(asset)\"><i\n                                        class=\"fa fa-times\"></i></a>\n                                  </td>\n                                  <hr>\n                                </tr>\n                              </tbody>\n                            </table>\n                            <div class=\"text-left\">\n                              <div class=\"spacer\" style=\"height:2em\"></div>\n                              <div class=\"card-header text-left\" style=\"padding-top: 0px;\">\n                                <h5 class=\"card-category\" style=\"height: 28px; font-size: 8;\">\n                                  Add Asset\n                                </h5>\n                              </div>\n                              <div class=\"row\">\n                                <div class=\"col-md-8\">\n                                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\" style=\"padding-bottom: 7px;\">\n                                        <i class=\"nc-icon nc-tablet-2\"></i>\n                                      </span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Asset name...\" (focus)=\"focus=true\"\n                                      (blur)=\"focus=false\" [(ngModel)]=\"asset.name\">\n                                  </div>\n                                </div>\n                              </div>\n                              <div class=\"row\">\n                                <div class=\"col-md-5\">\n                                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\" style=\"padding-bottom: 7px;\">\n                                        <i class=\"nc-icon nc-tablet-2\"></i>\n                                      </span>\n                                    </div>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Serial /Reg No...\" (focus)=\"focus=true\"\n                                      (blur)=\"focus=false\" [(ngModel)]=\"asset.assetNumber\">\n                                  </div>\n                                </div>\n                                <div class=\"col-md-5\">\n                                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                    <div class=\"input-group-prepend\">\n                                      <span class=\"input-group-text\" style=\"padding-bottom: 7px;\">\n                                        <i class=\"fa fa-usd\"></i>\n                                      </span>\n                                    </div>\n                                    <input type=\"number\" class=\"form-control\" placeholder=\"Asset Cost value...\" (focus)=\"focus=true\"\n                                      (blur)=\"focus=false\" [(ngModel)]=\"asset.cost\">\n                                  </div>\n                                </div>\n                              </div>\n                              <button class=\"primary btn-link\" (click)=\"saveAsset(asset)\">save</button>\n                            </div>\n                          </div>\n                        </div>\n\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-pane\" id=\"planning\">\n                  <div class=\"col-md-12\">\n                    <div class=\"card-body nav-hor-tabs\">\n                      <div class=\"nav-tabs-navigation\">\n                        <div class=\"nav-tabs-wrapper\">\n                          <ul id=\"tabs\" class=\"nav nav-tabs\" role=\"tablist\">\n                            <li class=\"nav-item\" hidden >\n                              <a class=\"nav-link nav-colors\" data-toggle=\"tab\" href=\"#week\" role=\"tab\"\n                                aria-expanded=\"true\">Week</a><!--  (click)=\"setPeriod('startWeek')\" -->\n                            </li>\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link nav-colors active\" data-toggle=\"tab\" href=\"#month\" role=\"tab\" aria-expanded=\"false\">Month</a><!--  (click)=\"setPeriod('startMonth')\" -->\n                            </li>\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link nav-colors\" data-toggle=\"tab\" href=\"#quarter\" role=\"tab\" aria-expanded=\"false\">Quarter</a><!--  (click)=\"setPeriod('startQuarter')\" -->\n                            </li>\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link nav-colors\" data-toggle=\"tab\" href=\"#year\" role=\"tab\" aria-expanded=\"false\">Year</a><!--  (click)=\"setPeriod('startYear')\" -->\n                            </li>\n                          </ul>\n                        </div>\n                      </div>\n                      <div id=\"my-tab-content\" class=\"tab-content text-center\">\n                        <div hidden class=\"tab-pane\" id=\"day\" role=\"tabpanel\" aria-expanded=\"true\">\n                          <div class=\"card\">\n                            <div class=\"\">\n                              <div class=\"card-text\">\n                                <p class=\"card-title\">\n                                  <button class=\"btn-link\" (click)=\"changePeriod('previous','startDay')\"><i class=\"nc-icon nc-minimal-left\"\n                                      style=\"margin-right:3em\"></i></button>\n                                  {{ currentDay }}'s Tasks\n                                  <button class=\"btn-link\" (click)=\"changePeriod('next','startDay')\"><i class=\"nc-icon nc-minimal-right\"\n                                      style=\"margin-left:3em\"></i></button>\n                                </p>\n                              </div>\n                            </div>\n                            <div class=\"card-body\">\n                              <div class=\"table-responsive\">\n                                <table class=\"table\">\n                                  <thead class=\"text-primary\">\n                                    <th class=\"text-left\">Name</th>\n                                    <th class=\"text-center\">Project</th>\n                                    <th class=\"text-center\">Champion</th>\n                                    <th class=\"text-right\">Start Date</th>\n                                  </thead>\n                                  <tbody>\n                                    <tr *ngFor=\"let tss of todayTasks | async\">\n                                      <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                      <td class=\"text-left td-clrs\">{{ tss.projectName }}</td>\n                                      <td class=\"text-left td-clrs\">{{ tss.champion.name }}</td>\n                                      <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                      <!-- <td class=\"text-right td-clrs\">\n                                      <button type=\"button\" rel=\"tooltip\" class=\"btn btn-info btn-icon btn-sm   btn-neutral  \">\n                                        <i class=\"fa fa-user\"></i>\n                                      </button>\n                                      <button type=\"button\" rel=\"tooltip\" class=\"btn btn-success btn-icon btn-sm   btn-neutral  \">\n                                        <i class=\"fa fa-edit\"></i>\n                                      </button>\n                                      <button type=\"button\" rel=\"tooltip\" class=\"btn btn-danger btn-icon btn-sm   btn-neutral  \">\n                                        <i class=\"fa fa-times\"></i>\n                                      </button>\n                                    </td> -->\n                                    </tr>\n                                    <tr class=\"text-left\">\n                                      <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\" data-toggle=\"modal\"\n                                        data-target=\"#tskModal\">New Task</button>\n                                    </tr>\n                                  </tbody>\n                                </table>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div hidden class=\"tab-pane\" id=\"week\" role=\"tabpanel\" aria-expanded=\"false\">\n                          <div class=\"card\">\n                            <div class=\"\">\n                              <div class=\"card-text\">\n                                <p class=\"card-title\">\n                                  <button class=\"btn-link\" (click)=\"changePeriod('previous','startWeek')\"><i class=\"nc-icon nc-minimal-left\"\n                                      style=\"margin-right:3em\"></i></button>Week {{ currentWeek.week() }}'s Tasks of\n                                  Year {{ currentWeek.year() }}\n                                  <button class=\"btn-link\" (click)=\"changePeriod('next','startWeek')\"><i class=\"nc-icon nc-minimal-right\"\n                                      style=\"margin-left:3em\"></i></button>\n                                </p>\n                              </div>\n                            </div>\n                            <div class=\"card-body\">\n                              <div aria-multiselectable=\"true\" class=\"card-collapse\" id=\"accordionDay\" role=\"tablist\">\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pDAY0\">\n                                    <a class=\"collapsed\" (click)=\"setDay('day0')\" data-toggle=\"collapse\" href=\"#planDay0\"\n                                      aria-expanded=\"false\" aria-controls=\"planDay0\">\n                                      {{ day0label }}\n                                      <i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planDay0\" class=\"collapse\" aria-labelledby=\"pDAY0\" data-parent=\"#accordionDay\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                            <th class=\"text-right\">Action</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of todayTasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-center td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                              <td class=\"text-right td-clrs\">\n                                                <button class=\"dropdown-toggle primary btn-link\" type=\"button\" id=\"dropdownMenuButton\"\n                                                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                  <font size=5> ... </font>\n                                                </button>\n                                                <div class=\"primary dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                  <button class=\"btn-primany dropdown-item text-info btn-link\" rel=\"tooltip\" data-toggle=\"modal\"\n                                                    data-target=\"#taskInfo\" (click)=\"setDel(tss)\" title=\"{{ tss.name }} info\">Info</button>\n                                                  <button class=\"btn-primany dropdown-item text-danger btn-link\" rel=\"tooltip\" data-toggle=\"modal\" data-target=\"#taskErase\"\n                                                    (click)=\"setDel(tss)\" title=\"Remove {{ tss.name }}\">Remove</button>\n                                                </div>\n                                              </td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New Task\n                                              </button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pDAY0\">\n                                    <a class=\"collapsed\" (click)=\"setDay('day1')\" data-toggle=\"collapse\" href=\"#planDay1\"\n                                      aria-expanded=\"false\" aria-controls=\"planDay1\">\n                                      {{ day1label }}\n                                      <i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planDay1\" class=\"collapse\" aria-labelledby=\"pDAY0\" data-parent=\"#accordionDay\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                            <th class=\"text-right\">Action</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of day1Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-center td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                              <td class=\"text-right td-clrs\">\n                                                <button class=\"dropdown-toggle primary btn-link\" type=\"button\" id=\"dropdownMenuButton\"\n                                                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                  <font size=5> ... </font>\n                                                </button>\n                                                <div class=\"primary dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                  <button class=\"btn-primany dropdown-item text-info btn-link\" rel=\"tooltip\" data-toggle=\"modal\"\n                                                    data-target=\"#taskInfo\" (click)=\"setDel(tss)\" title=\"{{ tss.name }} info\">Info</button>\n                                                  <button class=\"btn-primany dropdown-item text-danger btn-link\" rel=\"tooltip\" data-toggle=\"modal\" data-target=\"#taskErase\"\n                                                    (click)=\"setDel(tss)\" title=\"Remove {{ tss.name }}\">Remove</button>\n                                                </div>\n                                              </td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New Task\n                                              </button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pDAY0\">\n                                    <a class=\"collapsed\" (click)=\"setDay('day2')\" data-toggle=\"collapse\" href=\"#planDay2\"\n                                      aria-expanded=\"false\" aria-controls=\"planDay2\">\n                                      {{ day2label }}\n                                      <i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planDay2\" class=\"collapse\" aria-labelledby=\"pDAY0\" data-parent=\"#accordionDay\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                            <th class=\"text-right\">Action</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of day2Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-center td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                              <td class=\"text-right td-clrs\">\n                                                <button class=\"dropdown-toggle primary btn-link\" type=\"button\" id=\"dropdownMenuButton\"\n                                                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                  <font size=5> ... </font>\n                                                </button>\n                                                <div class=\"primary dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                  <button class=\"btn-primany dropdown-item text-info btn-link\" rel=\"tooltip\" data-toggle=\"modal\"\n                                                    data-target=\"#taskInfo\" (click)=\"setDel(tss)\" title=\"{{ tss.name }} info\">Info</button>\n                                                  <button class=\"btn-primany dropdown-item text-danger btn-link\" rel=\"tooltip\" data-toggle=\"modal\" data-target=\"#taskErase\"\n                                                    (click)=\"setDel(tss)\" title=\"Remove {{ tss.name }}\">Remove</button>\n                                                </div>\n                                              </td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New Task\n                                              </button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pDAY0\">\n                                    <a class=\"collapsed\" (click)=\"setDay('day3')\" data-toggle=\"collapse\" href=\"#planDay3\"\n                                      aria-expanded=\"false\" aria-controls=\"planDay3\">\n                                      {{ day3label }}\n                                      <i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planDay3\" class=\"collapse\" aria-labelledby=\"pDAY0\" data-parent=\"#accordionDay\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                            <th class=\"text-right\">Action</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of day3Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-center td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                              <td class=\"text-right td-clrs\">\n                                                <button class=\"dropdown-toggle primary btn-link\" type=\"button\" id=\"dropdownMenuButton\"\n                                                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                  <font size=5> ... </font>\n                                                </button>\n                                                <div class=\"primary dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                  <button class=\"btn-primany dropdown-item text-info btn-link\" rel=\"tooltip\" data-toggle=\"modal\"\n                                                    data-target=\"#taskInfo\" (click)=\"setDel(tss)\" title=\"{{ tss.name }} info\">Info</button>\n                                                  <button class=\"btn-primany dropdown-item text-danger btn-link\" rel=\"tooltip\" data-toggle=\"modal\" data-target=\"#taskErase\"\n                                                    (click)=\"setDel(tss)\" title=\"Remove {{ tss.name }}\">Remove</button>\n                                                </div>\n                                              </td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New Task\n                                              </button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pDAY0\">\n                                    <a class=\"collapsed\" (click)=\"setDay('day4')\" data-toggle=\"collapse\" href=\"#planDay4\"\n                                      aria-expanded=\"false\" aria-controls=\"planDay4\">\n                                      {{ day4label }}\n                                      <i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planDay4\" class=\"collapse\" aria-labelledby=\"pDAY0\" data-parent=\"#accordionDay\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                            <th class=\"text-right\">Action</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of day4Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-center td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                              <td class=\"text-right td-clrs\">\n                                                <button class=\"dropdown-toggle primary btn-link\" type=\"button\" id=\"dropdownMenuButton\"\n                                                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                  <font size=5> ... </font>\n                                                </button>\n                                                <div class=\"primary dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                  <button class=\"btn-primany dropdown-item text-info btn-link\" rel=\"tooltip\" data-toggle=\"modal\"\n                                                    data-target=\"#taskInfo\" (click)=\"setDel(tss)\" title=\"{{ tss.name }} info\">Info</button>\n                                                  <button class=\"btn-primany dropdown-item text-danger btn-link\" rel=\"tooltip\" data-toggle=\"modal\" data-target=\"#taskErase\"\n                                                    (click)=\"setDel(tss)\" title=\"Remove {{ tss.name }}\">Remove</button>\n                                                </div>\n                                              </td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New Task\n                                              </button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pDAY0\">\n                                    <a class=\"collapsed\" (click)=\"setDay('day5')\" data-toggle=\"collapse\" href=\"#planDay5\"\n                                      aria-expanded=\"false\" aria-controls=\"planDay5\">\n                                      {{ day5label }}\n                                      <i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planDay5\" class=\"collapse\" aria-labelledby=\"pDAY0\" data-parent=\"#accordionDay\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                            <th class=\"text-right\">Action</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of day5Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-center td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                              <td class=\"text-right td-clrs\">\n                                                <button class=\"dropdown-toggle primary btn-link\" type=\"button\" id=\"dropdownMenuButton\"\n                                                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                  <font size=5> ... </font>\n                                                </button>\n                                                <div class=\"primary dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                  <button class=\"btn-primany dropdown-item text-info btn-link\" rel=\"tooltip\" data-toggle=\"modal\"\n                                                    data-target=\"#taskInfo\" (click)=\"setDel(tss)\" title=\"{{ tss.name }} info\">Info</button>\n                                                  <button class=\"btn-primany dropdown-item text-danger btn-link\" rel=\"tooltip\" data-toggle=\"modal\" data-target=\"#taskErase\"\n                                                    (click)=\"setDel(tss)\" title=\"Remove {{ tss.name }}\">Remove</button>\n                                                </div>\n                                              </td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New Task\n                                              </button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pDAY0\">\n                                    <a class=\"collapsed\" (click)=\"setDay('day6')\" data-toggle=\"collapse\" href=\"#planDay6\"\n                                      aria-expanded=\"false\" aria-controls=\"planDay6\">\n                                      {{ day6label }}\n                                      <i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planDay6\" class=\"collapse\" aria-labelledby=\"pDAY0\" data-parent=\"#accordionDay\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                            <th class=\"text-right\">Action</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of day6Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-center td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                              <td class=\"text-right td-clrs\">\n                                                <button class=\"dropdown-toggle primary btn-link\" type=\"button\" id=\"dropdownMenuButton\"\n                                                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                  <font size=5> ... </font>\n                                                </button>\n                                                <div class=\"primary dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                  <button class=\"btn-primany dropdown-item text-info btn-link\" rel=\"tooltip\" data-toggle=\"modal\"\n                                                    data-target=\"#taskInfo\" (click)=\"setDel(tss)\" title=\"{{ tss.name }} info\">Info</button>\n                                                  <button class=\"btn-primany dropdown-item text-danger btn-link\" rel=\"tooltip\" data-toggle=\"modal\" data-target=\"#taskErase\"\n                                                    (click)=\"setDel(tss)\" title=\"Remove {{ tss.name }}\">Remove</button>\n                                                </div>\n                                              </td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New Task\n                                              </button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"tab-pane active\" id=\"month\" role=\"tabpanel\" aria-expanded=\"false\">\n                          <div class=\"card\">\n                            <div class=\"\">\n                              <div class=\"card-text\">\n                                <p class=\"card-title\">\n                                  <button class=\"btn-link\" (click)=\"changePeriod('previous','startMonth')\"><i class=\"nc-icon nc-minimal-left\"\n                                      style=\"margin-right:3em\"></i></button>\n                                  {{ currentMonth }}<small>th</small> month's Tasks of Year {{ currentYear }}\n                                  <!-- {{ currentMonth }}<small>th</small> month's Tasks of Year {{ currentYear }} {{ monthLabel }} -->\n                                  <button class=\"btn-link\" (click)=\"changePeriod('next','startMonth')\"><i class=\"nc-icon nc-minimal-right\"\n                                      style=\"margin-left:3em\"></i></button>\n                                </p>\n                              </div>\n                            </div>\n                            <div class=\"card-body\">\n                              <div aria-multiselectable=\"true\" class=\"card-collapse\" id=\"accordionWeek\" role=\"tablist\">\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pWeek\">\n                                    <a class=\"collapsed\" (click)=\"setWeek('week0')\" data-toggle=\"collapse\" href=\"#planWeek0\"\n                                      aria-expanded=\"false\" aria-controls=\"planWeek0\">\n                                      Week {{ week0label.week() }}\n                                      <i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planWeek0\" class=\"collapse\" aria-labelledby=\"pWeek\" data-parent=\"#accordionWeek\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                            <th class=\"text-right\">Action</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of week0Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-center td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                              <td class=\"text-right td-clrs\">\n                                                <button class=\"dropdown-toggle primary btn-link\" type=\"button\" id=\"dropdownMenuButton\"\n                                                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                  <font size=5> ... </font>\n                                                </button>\n                                                <div class=\"primary dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                  <button class=\"btn-primany dropdown-item text-info btn-link\" rel=\"tooltip\" data-toggle=\"modal\"\n                                                    data-target=\"#taskInfo\" (click)=\"setDel(tss)\" title=\"{{ tss.name }} info\">Info</button>\n                                                  <button class=\"btn-primany dropdown-item text-danger btn-link\" rel=\"tooltip\" data-toggle=\"modal\" data-target=\"#taskErase\"\n                                                    (click)=\"setDel(tss)\" title=\"Remove {{ tss.name }}\">Remove</button>\n                                                </div>\n                                              </td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New Task\n                                              </button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pWeek\">\n                                    <a class=\"collapsed\" (click)=\"setWeek('week1')\" data-toggle=\"collapse\" href=\"#planWeek1\"\n                                      aria-expanded=\"false\" aria-controls=\"planWeek1\">\n                                      Week {{ week1label.week() }}\n                                      <i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planWeek1\" class=\"collapse\" aria-labelledby=\"pWeek\" data-parent=\"#accordionWeek\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                            <th class=\"text-right\">Action</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of week1Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-center td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                              <td class=\"text-right td-clrs\">\n                                                <button class=\"dropdown-toggle primary btn-link\" type=\"button\" id=\"dropdownMenuButton\"\n                                                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                  <font size=5> ... </font>\n                                                </button>\n                                                <div class=\"primary dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                  <button class=\"btn-primany dropdown-item text-info btn-link\" rel=\"tooltip\" data-toggle=\"modal\"\n                                                    data-target=\"#taskInfo\" (click)=\"setDel(tss)\" title=\"{{ tss.name }} info\">Info</button>\n                                                  <button class=\"btn-primany dropdown-item text-danger btn-link\" rel=\"tooltip\" data-toggle=\"modal\" data-target=\"#taskErase\"\n                                                    (click)=\"setDel(tss)\" title=\"Remove {{ tss.name }}\">Remove</button>\n                                                </div>\n                                              </td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New Task\n                                              </button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pWeek\">\n                                    <a class=\"collapsed\" (click)=\"setWeek('week2')\" data-toggle=\"collapse\" href=\"#planWeek2\"\n                                      aria-expanded=\"false\" aria-controls=\"planWeek2\">\n                                      Week {{ week2label.week() }}\n                                      <i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planWeek2\" class=\"collapse\" aria-labelledby=\"pWeek\" data-parent=\"#accordionWeek\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                            <th class=\"text-right\">Action</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of week2Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-center td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                              <td class=\"text-right td-clrs\">\n                                                <button class=\"dropdown-toggle primary btn-link\" type=\"button\" id=\"dropdownMenuButton\"\n                                                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                  <font size=5> ... </font>\n                                                </button>\n                                                <div class=\"primary dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                  <button class=\"btn-primany dropdown-item text-info btn-link\" rel=\"tooltip\" data-toggle=\"modal\"\n                                                    data-target=\"#taskInfo\" (click)=\"setDel(tss)\" title=\"{{ tss.name }} info\">Info</button>\n                                                  <button class=\"btn-primany dropdown-item text-danger btn-link\" rel=\"tooltip\" data-toggle=\"modal\" data-target=\"#taskErase\"\n                                                    (click)=\"setDel(tss)\" title=\"Remove {{ tss.name }}\">Remove</button>\n                                                </div>\n                                              </td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New Task\n                                              </button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pWeek\">\n                                    <a class=\"collapsed\" (click)=\"setWeek('week3')\" data-toggle=\"collapse\" href=\"#planWeek3\"\n                                      aria-expanded=\"false\" aria-controls=\"planWeek3\">\n                                      Week {{ week3label.week() }}\n                                      <i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planWeek3\" class=\"collapse\" aria-labelledby=\"pWeek\" data-parent=\"#accordionWeek\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                            <th class=\"text-right\">Action</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of week3Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-center td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td><td class=\"text-right td-clrs\">\n                                                <button class=\"dropdown-toggle primary btn-link\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                                                  aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                  <font size=5> ... </font>\n                                                </button>\n                                                <div class=\"primary dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                  <button class=\"btn-primany dropdown-item text-info btn-link\" rel=\"tooltip\" data-toggle=\"modal\"\n                                                    data-target=\"#taskInfo\" (click)=\"setDel(tss)\" title=\"{{ tss.name }} info\">Info</button>\n                                                  <button class=\"btn-primany dropdown-item text-danger btn-link\" rel=\"tooltip\" data-toggle=\"modal\"\n                                                    data-target=\"#taskErase\" (click)=\"setDel(tss)\" title=\"Remove {{ tss.name }}\">Remove</button>\n                                                </div>\n                                              </td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New Task\n                                              </button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"tab-pane\" id=\"quarter\" role=\"tabpanel\" aria-expanded=\"false\">\n                          <div class=\"card\">\n                            <div class=\"\">\n                              <div class=\"card-text\">\n                                <p class=\"card-title\">\n                                  <button class=\"btn-link\" (click)=\"changePeriod('previous','startQuarter')\"><i class=\"nc-icon nc-minimal-left\"\n                                      style=\"margin-right:3em\"></i></button>\n                                  {{ currentQuarter }}<small>th</small> Quarter's Tasks of Year {{ currentYear }}\n                                  <button class=\"btn-link\" (click)=\"changePeriod('next','startQuarter')\"><i class=\"nc-icon nc-minimal-right\"\n                                      style=\"margin-left:3em\"></i></button>\n                                </p>\n                              </div>\n                            </div>\n                            <div class=\"card-body\">\n                              <div aria-multiselectable=\"true\" class=\"card-collapse\" id=\"accordionMonth\" role=\"tablist\">\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pMonth\">\n                                    <a class=\"collapsed\" (click)=\"setMonth('month1')\" data-toggle=\"collapse\" href=\"#planMonth1\"\n                                      aria-expanded=\"false\" aria-controls=\"planMonth1\">\n                                      {{ month1label.format('MMMM') }}, {{ month1label.year() }}\n                                      <i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planMonth1\" class=\"collapse\" aria-labelledby=\"pMonth\" data-parent=\"#accordionMonth\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                            <th class=\"text-right\">Action</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of month1Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-center td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                              <td class=\"text-right td-clrs\">\n                                                <button class=\"dropdown-toggle primary btn-link\" type=\"button\" id=\"dropdownMenuButton\"\n                                                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                  <font size=5> ... </font>\n                                                </button>\n                                                <div class=\"primary dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                  <button class=\"btn-primany dropdown-item text-info btn-link\" rel=\"tooltip\" data-toggle=\"modal\"\n                                                    data-target=\"#taskInfo\" (click)=\"setDel(tss)\" title=\"{{ tss.name }} info\">Info</button>\n                                                  <button class=\"btn-primany dropdown-item text-danger btn-link\" rel=\"tooltip\" data-toggle=\"modal\" data-target=\"#taskErase\"\n                                                    (click)=\"setDel(tss)\" title=\"Remove {{ tss.name }}\">Remove</button>\n                                                </div>\n                                              </td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New Task\n                                              </button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pMonth\">\n                                    <a class=\"collapsed\" (click)=\"setMonth('month2')\" data-toggle=\"collapse\" href=\"#planMonth2\"\n                                      aria-expanded=\"false\" aria-controls=\"planMonth2\">\n                                      {{ month2label.format('MMMM') }}, {{ month2label.year() }}\n                                      <i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planMonth2\" class=\"collapse\" aria-labelledby=\"pMonth\" data-parent=\"#accordionMonth\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                            <th class=\"text-right\">Action</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of month2Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-center td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                              <td class=\"text-right td-clrs\">\n                                                <button class=\"dropdown-toggle primary btn-link\" type=\"button\" id=\"dropdownMenuButton\"\n                                                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                  <font size=5> ... </font>\n                                                </button>\n                                                <div class=\"primary dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                  <button class=\"btn-primany dropdown-item text-info btn-link\" rel=\"tooltip\" data-toggle=\"modal\"\n                                                    data-target=\"#taskInfo\" (click)=\"setDel(tss)\" title=\"{{ tss.name }} info\">Info</button>\n                                                  <button class=\"btn-primany dropdown-item text-danger btn-link\" rel=\"tooltip\" data-toggle=\"modal\" data-target=\"#taskErase\"\n                                                    (click)=\"setDel(tss)\" title=\"Remove {{ tss.name }}\">Remove</button>\n                                                </div>\n                                              </td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New Task\n                                              </button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pMonth\">\n                                    <a class=\"collapsed\" (click)=\"setMonth('month3')\" data-toggle=\"collapse\" href=\"#planMonth3\"\n                                      aria-expanded=\"false\" aria-controls=\"planMonth3\">\n                                      {{ month3label.format('MMMM') }}, {{ month3label.year() }}\n                                      <i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planMonth3\" class=\"collapse\" aria-labelledby=\"pMonth\" data-parent=\"#accordionMonth\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                            <th class=\"text-right\">Action</th>\n\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of month3Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-center td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                              <td class=\"text-right td-clrs\">\n                                                <button class=\"dropdown-toggle primary btn-link\" type=\"button\" id=\"dropdownMenuButton\"\n                                                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                  <font size=5> ... </font>\n                                                </button>\n                                                <div class=\"primary dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                  <button class=\"btn-primany dropdown-item text-info btn-link\" rel=\"tooltip\" data-toggle=\"modal\"\n                                                    data-target=\"#taskInfo\" (click)=\"setDel(tss)\" title=\"{{ tss.name }} info\">Info</button>\n                                                  <button class=\"btn-primany dropdown-item text-danger btn-link\" rel=\"tooltip\" data-toggle=\"modal\" data-target=\"#taskErase\"\n                                                    (click)=\"setDel(tss)\" title=\"Remove {{ tss.name }}\">Remove</button>\n                                                </div>\n                                              </td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New Task\n                                              </button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"tab-pane\" id=\"year\" role=\"tabpanel\" aria-expanded=\"false\">\n                          <div class=\"card\">\n                            <div class=\"\">\n                              <div class=\"card-text\">\n                                <p class=\"card-title\">\n                                  <button class=\"btn-link\" (click)=\"changePeriod('previous','startYear')\"><i class=\"nc-icon nc-minimal-left\"\n                                      style=\"margin-right:3em\"></i></button>\n                                  Year {{ currentYear }}'s Tasks\n                                  <button class=\"btn-link\" (click)=\"changePeriod('next','startYear')\"><i class=\"nc-icon nc-minimal-right\"\n                                      style=\"margin-left:3em\"></i></button>\n                                </p>\n                              </div>\n                            </div>\n                            <div class=\"card-body\">\n                              <div aria-multiselectable=\"true\" class=\"card-collapse\" id=\"accordionQuarter\" role=\"tablist\">\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pQuarter\">\n                                    <a class=\"collapsed\" (click)=\"setQuarter('quarter0')\" data-toggle=\"collapse\" href=\"#planQuarter0\"\n                                      aria-expanded=\"false\" aria-controls=\"planQuarter0\">\n                                      Quarter {{ quarter0label.quarter() }} of year {{ quarter0label.year() }}\n                                      <i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planQuarter0\" class=\"collapse\" aria-labelledby=\"pQuarter\" data-parent=\"#accordionQuarter\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <!-- <th class=\"text-left\">Id</th> -->\n                                            <th class=\"text-left\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                            <th class=\"text-right\">Action</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of quarter0Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <!-- <td class=\"text-left td-clrs\">{{ tss.id }}</td> -->\n                                              <td class=\"text-left td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                              <td class=\"text-right td-clrs\">\n                                                <button class=\"dropdown-toggle primary btn-link\" type=\"button\" id=\"dropdownMenuButton\"\n                                                  data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                                                  <font size=5> ... </font>\n                                                </button>\n                                                <div class=\"primary dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                  <button class=\"btn-primany dropdown-item text-info btn-link\" rel=\"tooltip\" data-toggle=\"modal\"\n                                                    data-target=\"#taskInfo\" (click)=\"setDel(tss)\" title=\"{{ tss.name }} info\">Info</button>\n                                                  <button class=\"btn-primany dropdown-item text-danger btn-link\" rel=\"tooltip\" data-toggle=\"modal\" data-target=\"#taskErase\"\n                                                    (click)=\"setDel(tss)\" title=\"Remove {{ tss.name }}\">Remove</button>\n                                                </div>\n                                              </td>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pQuarter\">\n                                    <a class=\"collapsed\" (click)=\"setQuarter('quarter1')\" data-toggle=\"collapse\" href=\"#planQuarter1\"\n                                      aria-expanded=\"false\" aria-controls=\"planQuarter1\">\n                                      Quarter {{ quarter1label.quarter() }} of year {{ quarter1label.year() }}\n                                      <i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planQuarter1\" class=\"collapse\" aria-labelledby=\"pQuarter\" data-parent=\"#accordionQuarter\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of quarter1Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-center td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New Task\n                                              </button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pQuarter\">\n                                    <a class=\"collapsed\" (click)=\"setQuarter('quarter2')\" data-toggle=\"collapse\" href=\"#planQuarter2\"\n                                      aria-expanded=\"false\" aria-controls=\"planQuarter2\">\n                                      Quarter {{ quarter2label.quarter() }} of year {{ quarter2label.year() }}\n                                      <i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planQuarter2\" class=\"collapse\" aria-labelledby=\"pQuarter\" data-parent=\"#accordionQuarter\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of quarter2Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-center td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New Task\n                                              </button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div class=\"card card-plain\">\n                                  <div class=\"card-header\" role=\"tab\" id=\"pQuarter\">\n                                    <a class=\"collapsed\" (click)=\"setQuarter('quarter3')\" data-toggle=\"collapse\" href=\"#planQuarter3\"\n                                      aria-expanded=\"false\" aria-controls=\"planQuarter3\">\n                                      Quarter {{ quarter3label.quarter() }} of year {{ quarter3label.year() }}\n                                      <i class=\"nc-icon nc-minimal-down\"></i>\n                                    </a>\n                                  </div>\n                                  <div id=\"planQuarter3\" class=\"collapse\" aria-labelledby=\"pQuarter\" data-parent=\"#accordionQuarter\">\n                                    <div class=\"card-body\">\n                                      <div class=\"table-responsive\">\n                                        <table class=\"table\">\n                                          <thead class=\"text-primary\">\n                                            <th class=\"text-left\">Name</th>\n                                            <th class=\"text-center\">Project</th>\n                                            <th class=\"text-right\">Start Date</th>\n                                          </thead>\n                                          <tbody>\n                                            <tr *ngFor=\"let tss of quarter3Tasks | async\">\n                                              <td class=\"text-left td-clrs\">{{ tss.name }}</td>\n                                              <td class=\"text-center td-clrs\">{{ tss.projectName }}</td>\n                                              <td class=\"text-right td-clrs\">{{ tss.start | date }}</td>\n                                            </tr>\n                                            <tr class=\"text-left\">\n                                              <button rel=\"tooltip\" title=\"click to create a task\" class=\"btn-link\"\n                                                data-toggle=\"modal\" data-target=\"#tskModal\">New Task\n                                              </button>\n                                            </tr>\n                                          </tbody>\n                                        </table>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-pane\" id=\"implement\">\n                  <div class=\"card\">\n                    <div class=\"card-body\" style=\"padding-top:0px\">\n                      <div class=\"nav-tabs-navigation\">\n                        <div class=\"nav-tabs-wrapper\">\n                          <ul id=\"tabs\" class=\"nav nav-tabs\" role=\"tablist\">\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link nav-colors active\" data-toggle=\"tab\" href=\"#cIntray\" role=\"tab\"\n                                aria-expanded=\"true\">In-tray For whole company</a>\n                            </li>\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link nav-colors\" data-toggle=\"tab\" href=\"#dIntray\" role=\"tab\" aria-expanded=\"false\">In-tray\n                                For Each Department</a>\n                            </li>\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link nav-colors\" data-toggle=\"tab\" href=\"#weekly\" role=\"tab\" aria-expanded=\"true\">Weekly\n                                Calendar</a>\n                            </li>\n                            <li class=\"nav-item\">\n                              <a class=\"nav-link nav-colors\" data-toggle=\"tab\" (click)=\"initDiary()\" href=\"#diary\" role=\"tab\"\n                                aria-expanded=\"false\">Daily Diary</a>\n                            </li>\n                          </ul>\n                        </div>\n                      </div>\n                      <div id=\"my-tab-content\" class=\"tab-content text-center\">\n                        <div class=\"tab-pane active\" id=\"cIntray\" role=\"tabpanel\" aria-expanded=\"true\">\n                          <div class=\"row\">\n                            <div class=\"col-md-6 ml-auto mr-auto\">\n                              <div class=\"card\">\n                                <!-- <div class=\"card-body text-center\" style=\"padding-left: 0px;padding-right: 0px;padding-top:0px\"> -->\n                                <div class=\"card-body text-left\" style=\"padding-top:0px\">\n                                  <div class=\"card-header text-left\"style=\"padding-left: 0px;padding-right: 0px;\">\n                                    <p class=\"title na-an\" style=\"color: steelblue\"><i class=\"ti-palette\"></i> Things To Do In Tray For company</p>\n                                    Task List\n                                  </div>\n                                  <!-- <div class=\"card-body\"> -->\n                                  <div class=\"card-body\" style=\"padding-left: 0px;padding-right: 0px;\">\n                                    <div id=\"accordionTsk\" role=\"tablist\" aria-multiselectable=\"true\" class=\"card-collapse\">\n                                      <div class=\"card card-plain\">\n                                        <div class=\"card-header text-left\" role=\"tab\" id=\"headingOne\"> <!--  (click)=\"sortTasks()\" -->\n                                          <a data-toggle=\"collapse\" href=\"#Outstanding\" aria-expanded=\"true\"\n                                            aria-controls=\"Outstanding\">\n                                            Outstanding Tasks\n                                            <i class=\"nc-icon nc-minimal-down\"></i>\n                                          </a>\n                                        </div>\n                                        <div id=\"Outstanding\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\"\n                                          data-parent=\"#accordionTsk\">\n                                          <!-- <div class=\"card-body\" style=\"padding-left: 0px;\"> -->\n                                          <div class=\"card-body\" style=\"padding-left: 0px;padding-right: 0px;\">\n\n                                            <div class=\"content container scroll-task\" style=\"padding-left: 0px;\">\n                                              <!-- <ol style=\"padding-left:18px;\"> -->\n                                              <ol>\n                                                <li class=\"\" style=\"color:steelblue\" *ngFor=\"let tss of OutstandingTasks\">\n                                                  <div class=\"row\">\n                                                    <div class=\"col-sm-12 text-left\" style=\"margin-right:-.5em\">\n                                                      <button class=\"dropdown-toggle btn-link\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                                                        style=\"color:slategrey\" title=\"Project: {{ tss.projectName }} Champion: {{ tss.champion.name }}\">\n                                                        {{ tss.name }}<span class=\"label text-warning\"> {{ tss.when }}</span>\n                                                      </button>\n                                                      <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                        <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\"\n                                                          (click)=\"selectTask(tss)\" data-toggle=\"modal\" data-target=\"#dptModal\"\n                                                          title=\"Reallocate {{ tss.name }} to a department\">Reallocate to department</button>\n                                                        <!-- <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\"\n                                                          data-toggle=\"modal\" data-target=\"#tskModal\" (click)=\"closeTask(tss)\"\n                                                          title=\"Set task as completed\">Task Complete</button> -->\n                                                      </div>\n                                                    </div>\n                                                  </div>\n                                                </li>\n                                              </ol>\n                                              <p *ngIf=\"OutstandingTasks.length == 0\">No Outstanding Tasks</p>\n                                            </div>\n                                          </div>\n                                        </div>\n                                      </div>\n                                      <div class=\"card card-plain\">\n                                        <div class=\"card-header text-left\" role=\"tab\" id=\"headingTwo\">\n                                          <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#currentTsk\" aria-expanded=\"false\"\n                                            aria-controls=\"currentTsk\">\n                                            Current Tasks\n                                            <i class=\"nc-icon nc-minimal-down\"></i>\n                                          </a>\n                                        </div>\n                                        <div id=\"currentTsk\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordionTsk\">\n                                          <!-- <div class=\"card-body\" style=\"padding-left: 0px;\"> -->\n                                          <div class=\"card-body\" style=\"padding-left: 0px;padding-right: 0px;\">\n                                            <div class=\"content container scroll-task\" style=\"padding-left: 0px;\">\n                                              <ol>\n                                                <li class=\"\" style=\"color:steelblue\" *ngFor=\"let tss of CurrentTAsks\">\n                                                  <div class=\"row\">\n                                                    <div class=\"col-sm-12 text-left\" style=\"margin-right:-.5em\">\n                                                      <button class=\"dropdown-toggle btn-link\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                                                        style=\"color:slategrey\" title=\"Project: {{ tss.projectName }} Champion: {{ tss.champion.name }}\">\n                                                        {{ tss.name }}<span class=\"label text-warning\"> {{ tss.when }}</span>\n                                                      </button>\n                                                      <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                        <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\"\n                                                          (click)=\"selectTask(tss)\" data-toggle=\"modal\" data-target=\"#dptModal\"\n                                                          title=\"Reallocate {{ tss.name }} to a department\">Reallocate to department</button>\n                                                        <!-- <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\"\n                                                          data-toggle=\"modal\" data-target=\"#tskModal\" (click)=\"closeTask(tss)\"\n                                                          title=\"Set task as completed\">Task Complete</button> -->\n                                                      </div>\n                                                    </div>\n                                                  </div>\n                                                </li>\n                                              </ol>\n                                              <p *ngIf=\"CurrentTAsks.length == 0\">No Current Tasks</p>\n                                            </div>\n                                          </div>\n                                        </div>\n                                      </div>\n                                      <div class=\"card card-plain\">\n                                        <div class=\"card-header text-left\" role=\"tab\" id=\"headingThree\">\n                                          <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#upcoming\" aria-expanded=\"false\"\n                                            aria-controls=\"upcoming\">\n                                            Upcoming Tasks\n                                            <i class=\"nc-icon nc-minimal-down\"></i>\n                                          </a>\n                                        </div>\n                                        <div id=\"upcoming\" class=\"collapse\" aria-labelledby=\"headingThree\" data-parent=\"#accordionTsk\">\n                                          <!-- <div class=\"card-body\" style=\"padding-left: 0px;\"> -->\n                                          <div class=\"card-body\" style=\"padding-left: 0px;padding-right: 0px;\">\n                                            <div class=\"content container scroll-task\" style=\"padding-left: 0px;\">\n                                              <!-- Short Term Tasks<br> -->\n                                              <div class=\"card-header text-left\"> Short Term Tasks</div><br>\n                                              <ol>\n                                                <li class=\"\" style=\"color:steelblue\" *ngFor=\"let tss of ShortTermTAsks\">\n                                                  <div class=\"row\">\n                                                    <div class=\"col-sm-12 text-left\" style=\"margin-right:-.5em\">\n                                                      <button class=\"dropdown-toggle btn-link\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                                                        style=\"color:slategrey\"><!--  title=\"Project: {{ tss.projectName }} Champion: {{ tss.champion.name }}\" -->\n                                                        {{ tss.name }}<span class=\"label text-warning\"> {{ tss.when }}</span>\n                                                      </button>\n                                                      <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                        <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" (click)=\"selectTask(tss)\" data-toggle=\"modal\"\n                                                          data-target=\"#dptModal\" title=\"Reallocate {{ tss.name }} to a department\">Reallocate to department</button>\n                                                        <!-- <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" data-toggle=\"modal\" data-target=\"#tskModal\"\n                                                          (click)=\"closeTask(tss)\" title=\"Set task as completed\">Task Complete</button> -->\n                                                      </div>\n                                                    </div>\n                                                  </div>\n                                                </li>\n                                              </ol>\n                                              <!-- Medium Term Tasks<br> -->\n                                            <div class=\"card-header text-left\">Medium Term Tasks</div><br>\n                                              <ol>\n                                                <li class=\"\" style=\"color:steelblue\" *ngFor=\"let tss of MediumTermTAsks\">\n                                                  <div class=\"row\">\n                                                    <div class=\"col-sm-12 text-left\" style=\"margin-right:-.5em\">\n                                                      <button class=\"dropdown-toggle btn-link\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                                                        style=\"color:slategrey\">\n                                                        {{ tss.name }}<span class=\"label text-warning\"> {{ tss.when }}</span>\n                                                      </button>\n                                                      <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                        <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" (click)=\"selectTask(tss)\" data-toggle=\"modal\"\n                                                          data-target=\"#dptModal\" title=\"Reallocate {{ tss.name }} to a department\">Reallocate to department</button>\n                                                        <!-- <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" data-toggle=\"modal\" data-target=\"#tskModal\"\n                                                          (click)=\"closeTask(tss)\" title=\"Set task as completed\">Task Complete</button> -->\n                                                      </div>\n                                                    </div>\n                                                  </div>\n                                                </li>\n                                              </ol>\n                                              <!-- Long Term Tasks<br> -->\n                                            <div class=\"card-header text-left\">Medium Term Tasks</div><br>\n                                              <ol>\n                                                <li class=\"\" style=\"color:steelblue\" *ngFor=\"let tss of LongTermTAsks\">\n                                                  <div class=\"row\">\n                                                    <div class=\"col-sm-12 text-left\" style=\"margin-right:-.5em\">\n                                                      <button class=\"dropdown-toggle btn-link\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                                                        style=\"color:slategrey\">\n                                                        {{ tss.name }}<span class=\"label text-warning\"> {{ tss.when }}</span>\n                                                      </button>\n                                                      <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                        <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" (click)=\"selectTask(tss)\" data-toggle=\"modal\"\n                                                          data-target=\"#dptModal\" title=\"Reallocate {{ tss.name }} to a department\">Reallocate to department</button>\n                                                        <!-- <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" data-toggle=\"modal\" data-target=\"#tskModal\"\n                                                          (click)=\"closeTask(tss)\" title=\"Set task as completed\">Task Complete</button> -->\n                                                      </div>\n                                                    </div>\n                                                  </div>\n                                                </li>\n                                              </ol>\n                                            </div>\n                                          </div>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"col-md-6 ml-auto mr-auto\">\n                              <div class=\"card\">\n                                <div class=\"card-body text-center\" style=\"padding-top:0px\">\n                                  <div class=\"card-header\">\n                                    <p class=\"title na-an\" style=\"color: steelblue\"><i class=\"ti-palette\"></i>\n                                      Allocate to Department</p>\n                                    <div id=\"accordionB\" role=\"tablist\" aria-multiselectable=\"true\" class=\"card-collapse\">\n                                      <ul>\n                                        <li *ngFor=\"let department of departments1 | async\">\n                                          <div class=\"card card-plain\">\n                                            <div class=\"card-header\" role=\"tab\" id=\"heading2\">\n                                              <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#{{  department.id  }}\"\n                                                (click)=\"showTasks(department)\" aria-expanded=\"false\" aria-current=\"false\">{{ department.name }}<i class=\"nc-icon nc-minimal-down\"></i>\n                                              </a>\n                                            </div>\n                                            <div id=\"{{  department.id  }}\" class=\"collapse\" data-parent=\"#accordionB\"\n                                              role=\"tabpanel\" aria-labelledby=\"heading2\">\n                                              <div class=\"card-body\">\n                                                <ol>\n                                                  <li *ngFor=\"let task of dptIntrayTasks | async\" class=\"text-left\" style=\"padding-left: 2em\">\n                                                      <ng-container  *ngIf=\"task.departmentId === department.id\">  {{ task.name }} </ng-container>\n                                                    </li>\n                                                </ol>\n                                              </div>\n                                            </div>\n                                          </div>\n                                        </li>\n                                      </ul>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <div class=\"tab-pane\" id=\"dIntray\" role=\"tabpanel\" aria-expanded=\"false\">\n                          <div class=\"row\">\n                            <div class=\"col-md-6 ml-auto mr-auto\">\n                              <div class=\"card\">\n                                <div class=\"card-body text-center\" style=\"padding-top:0px\">\n                                  <div class=\"card-header text-left\">\n                                    <p class=\"title na-an\" style=\"color: steelblue\"><i class=\"ti-palette\"></i>\n                                      Things To Do In Tray For Departments</p>\n                                    <div class=\"row\">\n                                      <div class=\"col-md-12\">\n                                        <ng-select placeholder=\"Select department\" [(ngModel)]=\"dpId\" (change)=\"showDpTasks(dpId)\">\n                                          <ng-option *ngFor=\"let department of departments2 | async\" [value]=\"department.id\">\n                                            {{ department.name }}</ng-option>\n                                        </ng-select>\n                                      </div>\n                                    </div>\n                                    <div *ngIf=\"dpId\">\n                                      <!-- <div class=\"card-body\"> -->\n                                        <!-- <div class=\"row\"> -->\n                                          <!-- <div class=\"col-sm-12 text-left\" style=\"margin-right:-.5em\"> -->\n                                          <div class=\"text-left\" style=\"margin-right:-.5em\">\n                                            <div id=\"accordionTasks\" role=\"tablist\" aria-multiselectable=\"true\" class=\"card-collapse\">\n                                              <ol style=\"padding-left: 16px;\">\n                                                <li class=\"\" style=\"color:steelblue;width: min-content;\" *ngFor=\"let tss of dptTasks | async\">\n                                                  <!-- <div class=\"row\"> -->\n                                                    <!-- <div class=\"col-sm-12 text-left\" style=\"margin-right:-.5em\"> -->\n                                                      <button class=\"dropdown-toggle btn-link\" id=\"dropdownMenuButton\"\n                                                        data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"\n                                                        style=\"color:slategrey\">\n                                                        {{ tss.name }}<span class=\"label text-warning\"> {{ tss.when }}</span>\n                                                      </button>\n                                                      <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                                        <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\"\n                                                          (click)=\"selectTask(tss)\" data-toggle=\"modal\" data-target=\"#taskdptStaff\"\n                                                          title=\"Assign {{ tss.name }} to a department champion \">\n                                                          Reallocate Champion\n                                                        </button>\n                                                        <!-- <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\"\n                                                          data-toggle=\"modal\" data-target=\"#tskModal\" title=\"Set task as completed\">Task Complete\n                                                        </button> -->\n                                                      </div>\n                                                    <!-- </div> -->\n                                                  <!-- </div> -->\n                                                </li>\n                                              </ol>\n                                            </div>\n                                          </div>\n                                        <!-- </div> -->\n                                      <!-- </div> -->\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"col-md-6 ml-auto mr-auto\">\n                              <div class=\"card\">\n                                <div class=\"card-body text-center\" style=\"padding-top:0px\">\n                                  <div class=\"card-header\">\n                                    <p class=\"title na-an text-left\" style=\"color: steelblue\"><i class=\"ti-palette\"></i>\n                                      In tray for each staff\n                                    </p>\n                                  </div>\n                                  <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                      <ng-select placeholder=\"Select staff\" [(ngModel)]=\"staffId\" (change)=\"showUserTasks(staffId)\">\n                                        <ng-option *ngFor=\"let user of dptStaff | async\" [value]=\"user.id\">{{ user.name }}</ng-option>\n                                      </ng-select>\n                                    </div>\n                                  </div>\n                                  <div *ngIf=\"staffId\">\n                                    <div class=\"card-body\">\n                                      <div class=\"row\">\n                                        <div class=\"col-sm-12 text-left\" style=\"margin-right:-.5em\">\n                                          <div id=\"accordionTasks2\" role=\"tablist\" aria-multiselectable=\"true\" class=\"card-collapse\">\n                                            <ol>\n                                              <li class=\"\" style=\"color:steelblue\" *ngFor=\"let tss of staffTasks | async\">\n                                                <div class=\"card card-plain\">\n                                                  <div class=\"card-header\" role=\"tab\" id=\"heading2\">\n                                                    <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#{{ tss.id }}\"\n                                                      (click)=\"showTaskActions(tss)\" aria-expanded=\"false\" aria-current=\"false\">\n                                                      {{ tss.name }}<span class=\"label text-warning\"> {{ tss.when }}</span><i\n                                                        class=\"nc-icon nc-minimal-down\"></i>\n                                                    </a>\n                                                  </div>\n                                                  <div id=\"{{ tss.id }}\" class=\"collapse\" data-parent=\"#accordionTasks2\"\n                                                    role=\"tabpanel\" aria-labelledby=\"heading2\">\n                                                    <div class=\"card-body\">\n                                                      <ul>\n                                                        <li *ngFor=\"let item of taskActions | async\">\n                                                          <div class=\"row\">\n                                                            <div class=\"col-md-9\">\n                                                              <button class=\"warning btn-link\" id=\"dropdownMenuButton\"\n                                                                data-toggle=\"dropdown\" aria-haspopup=\"true\" data-toggle=\"modal\" data-target=\"#editNewAction\" title= \"Edit Task Activity\"\n                                                                aria-expanded=\"false\" style=\"color:slategrey\" (click)=\"selectAction(item)\">\n                                                                {{ item.name }}<span class=\"label text-info\" hidden> {{ item.targetQty }} {{ item.unit }}</span>\n                                                              </button>\n                                                              <!-- <div class=\"dropdown-menu dropdown-menu-right\"\n                                                                aria-labelledby=\"dropdownMenuButton\">\n                                                                <button class=\"dropdown-item btn-info btn-link\" rel=\"tooltip\"\n                                                                  data-toggle=\"modal\" data-target=\"#tskModal\" (click)=\"closeTask(project)\"\n                                                                  title=\"Set task as completed\">Action Complete</button>\n                                                                <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\"\n                                                                  data-toggle=\"modal\" data-target=\"#actionParticipants\"\n                                                                  (click)=\"selectAction(item)\" title=\"Set task as completed\">Add\n                                                                  Participants</button>\n                                                                <button class=\"dropdown-item btn-info btn-link\" rel=\"tooltip\"\n                                                                  title=\"Assign activity to Staff\"\n                                                                  data-toggle=\"modal\" data-target=\"#dptStaffList\">Assign\n                                                                  Champion</button>\n                                                              </div> -->\n                                                            </div>\n                                                            <div class=\"col-md-3\" style=\"padding-top: 12px;\">\n                                                              <input class=\"card-category pull-right col-form-label\"\n                                                                type=\"checkbox\" (change)=\"selectActions($event, item)\">\n                                                            </div>\n                                                          </div>\n                                                        </li>\n                                                      </ul>\n                                                    </div>\n                                                    <button class=\"btn-link btn-round primary\" (click)=\"selectTask(tss)\"\n                                                      data-toggle=\"modal\" data-target=\"#newAction\">\n                                                      <small>Add task activity</small></button>\n                                                  </div>\n                                                </div>\n                                              </li>\n                                            </ol>\n                                          </div>\n                                        </div>\n                                      </div>\n                                      <!-- <div class=\"row text-center\"> -->\n                                      <p class=\"na-an text-center\" style=\"color: steelblue; margin-bottom: 0px;\"><i\n                                          class=\"ti-palette\"></i>list of this week's selected activities</p><br><br>\n                                      <!-- </div> -->\n                                      <div class=\"col-sm-10\">\n                                        <ol>\n                                          <li *ngFor=\"let item of selectedActionItems\" class=\"text-left\">\n                                            {{ item.name }}\n                                          </li>\n                                        </ol>\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n\n\n                        <div class=\"tab-pane\" id=\"weekly\" role=\"tabpanel\" aria-expanded=\"false\">\n                          <div class=\"row card-category clrs-h4-font\">\n                            <div class=\"col-xs-1\"></div>\n                            <div class=\"col-md-3\">Task Activity</div>\n                            <div class=\"col-md-3 text-left na-an\">Start</div>\n                            <div class=\"col-md-3 text-left ma-an\">Finish</div>\n                            <div class=\"col-md-3 text-left ma-an\">Actions</div>\n                          </div>\n                          <div id=\"accordionTasksActions\" role=\"tablist\" aria-multiselectable=\"true\" class=\"card-collapse\">\n                            <ol>\n                              <li *ngFor=\"let item of companyActions\">\n                                <div class=\"row card-category\">\n                                  <div class=\"col-sm-2 text-left\"><a title=\"{{ item.by }}\">{{ item.name }}</a></div>\n                                  <div class=\"col-sm-3 text-left\"><a>{{ item.startDay }}, {{ item.startDate }}</a></div>\n                                  <div class=\"col-sm-3 text-left\"><a>{{ item.endDay }}, {{ item.endDate }}</a></div>\n                                  <div>\n                                    <small>\n                                      <button class=\"primary btn-link\" (click)=\"selectEditAction(item)\" data-toggle=\"modal\"\n                                        data-target=\"#editAction\">\n                                        Add date\n                                      </button><button class=\"primary btn-link\" data-toggle=\"modal\" (click)=\"select2EditAction(item);\"\n                                        data-target=\"#actionItemParticipants\">\n                                        Participants\n                                      </button>\n                                    </small>\n                                  </div>\n                                </div>\n                              </li>\n                            </ol>\n                          </div>\n                        </div>\n\n\n                        <div class=\"tab-pane\" id=\"diary\" role=\"tabpanel\" aria-expanded=\"false\">\n                          <div class=\"row card-category clrs-h4-font\">\n                            <div class=\"col-sm-3\">\n                              <a class=\"clrs-h1-font text-left\">Daily Diary</a>\n                            </div>\n                            <div class=\"col-sm-2\"></div>\n                            <div class=\"col-sm-2\"><a class=\"btn btn-primary btn-link a-mycol\" (click)=\"changeDay('previous','startDate')\">Previous</a></div>\n                            <div class=\"col-sm-3 clrs-h4-font text-info\">{{ workWeekDay }} {{ workDay }}</div>\n                            <div class=\"col-sm-2\"><a class=\"btn btn-primary btn-link a-mycol\" (click)=\"changeDay('next','startDate')\">Next</a></div>\n                          </div>\n                          <div class=\"card-body\" style=\"margin-top: -10px\">\n                            <div class=\"row\">\n                              <!-- <div class=\"col-sm-1 card-header text-center\"></div> -->\n                              <div class=\"col-sm-2 card-header text-center\">Task Activity</div>\n                              <div class=\"col-sm-3 card-header\">Target Qty</div>\n                              <div class=\"col-sm-2 card-header text-left\">Start </div>\n                              <div class=\"col-sm-2 card-header text-left\">Finish </div>\n                              <div class=\"col-sm-2 card-header text-left\">Action</div>\n                            </div>\n                            <!-- <div class=\"col-sm-12\"> -->\n                            <ol style=\"padding-left: 10px;\">\n                              <!-- <li *ngFor=\"let item of viewActions | async\"> -->\n                              <li *ngFor=\"let item of viewDayActions\">\n                                <div class=\"row\">\n                                  <div class=\"col-sm-2\">\n                                    <a title=\"{{ item.by }}\"> {{ item.name }}</a>\n                                  </div>\n                                  <div class=\"col-sm-3\" style=\"padding-left: 5px; padding-right:5px\">\n                                    <div class=\"form-group\">\n                                      <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                                        <input type=\"text\" class=\"form-control panel-boader\" [(ngModel)]=\"item.targetQty\"\n                                          style=\" padding-left: 10px; padding-right: 10px; height:2em\" placeholder=\"1 200\" /><!-- clrs-cell  -->\n                                        <div class=\"input-group-postpend\">\n                                          <span class=\"input-group-text\" style=\" padding-left: 10px; padding-right: 10px; height:28px\">\n                                            <small>{{ item.unit }}</small>\n                                          </span>\n                                        </div>\n                                      </div>\n                                    </div>\n                                  </div>\n                                  <div class=\"col-sm-2\" style=\"padding-left: 5px; padding-right:5px\">\n                                    <div class=\"form-group\">\n                                      <input type=\"time\" class=\"form-control panel-boader timepicker\" [(ngModel)]=\"item.start\"\n                                        style=\" padding-left: 10px; padding-right: 10px; height:2em\" placeholder=\"Time from\" />\n                                      <!-- clrs-cell  -->\n                                    </div>\n                                  </div>\n                                  <div class=\"col-sm-2\" style=\"padding-left: 5px; padding-right:5px\">\n                                    <div class=\"form-group\">\n                                      <input type=\"time\" class=\"form-control panel-boader timepicker\" [(ngModel)]=\"item.end\"\n                                        style=\" padding-left: 10px; padding-right: 10px;  height:2em\" placeholder=\"Time to\" />\n                                      <!-- clrs-cell  -->\n                                    </div>\n                                  </div>\n                                  <div class=\"col-sm-3\" style=\"padding-left: 0px; padding-right:50px\">\n                                    <div class=\"form-group\">\n                                      <small><button class=\"primary btn-link\" style=\" padding-left: 10px; padding-right: 10px; height:2em\"\n                                          (click)=\"addActionTime(item)\">Save</button>\n                                        <!-- clrs-cell form-control panel-boader clrs-cell  -->\n                                        <button class=\"primary btn-link\" data-toggle=\"modal\" data-target=\"#actionItemParticipants\"\n                                          (click)=\"select2EditAction(item)\">\n                                          Participants\n                                        </button></small>\n                                    </div>\n                                  </div>\n                                </div>\n                              </li>\n                            </ol>\n                            <!-- </div> -->\n                            <div class=\"card-footer text-right\">\n                              <div class=\"row\">\n                                <div class=\"col-md-9\"></div>\n                                <div class=\"col-md-3\">\n                                  <button class=\"primary btn-link\" data-toggle=\"modal\" data-target=\"#newActionToday\" rel=\"tooltip\" title=\"Create new Task Activity\">\n                                    New Task Activity\n                                  </button>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-pane\" id=\"reports\">\n                  <div class=\"col-md-12\">\n                    <div class=\"card\">\n                      <div class=\"card-body\" style=\"margin-top: -3em\">\n                        <div class=\"nav-tabs-navigation\">\n                          <div class=\"nav-tabs-wrapper\">\n                            <ul id=\"tabs\" class=\"nav nav-tabs\" role=\"tablist\">\n                              <li class=\"nav-item\">\n                                <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#internalReport\" role=\"tab\" aria-expanded=\"true\">Internal</a>\n                              </li>\n                              <li class=\"nav-item\">\n                                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#publicReport\" role=\"tab\" aria-expanded=\"false\">Public</a>\n                              </li>\n                            </ul>\n                          </div>\n                        </div>\n                        <div id=\"my-tab-content\" class=\"tab-content text-center\">\n                          <div class=\"tab-pane active\" id=\"internalReport\" role=\"tabpanel\" aria-expanded=\"true\">\n                            <div class=\"col-md-10 ml-auto mr-auto\">\n                              <p class=\"text-left title clrs-h4-font\" style=\"color: darkslategray\">Company Details</p>\n                              <div class=\"card-plain card-content\">\n                                <div class=\"text-left na-p\" style=\"margin-left:2em \">\n                                  <span class=\"row col-md-12\">\n                                    <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Company Name </span>\n                                    <span class=\"col-sm-9\">: {{ (company)?.name }} </span>\n                                  </span><br>\n                                  <span class=\"row col-md-12\">\n                                    <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Sector </span>\n                                    <span class=\"col-sm-9\">: {{ (company)?.sector }} </span>\n                                  </span><br>\n                                  <span class=\"row col-md-12\">\n                                    <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Services </span>\n                                    <span class=\"col-sm-9\">\n                                      <a *ngFor=\"let service of (company)?.services\">: {{ service.display }} <br></a>\n                                    </span>\n                                  </span><br>\n                                  <span class=\"row col-md-12\">\n                                    <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Location </span>\n                                    <span class=\"col-sm-9\">: {{ (company)?.location }} </span>\n                                  </span><br>\n                                  <!-- Location : {{ (company)?.location }} -->\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"spacer\" style=\"height: 2em\"></div>\n                            <div class=\"col-md-10 ml-auto mr-auto\">\n                              <!-- <p class=\"text-left title clrs-h4-font\" style=\"color: darkslategray\"> Compliance</p> -->\n                              <p class=\"text-left title  clrs-h4-font\" style=\"color: darkslategray\"> <!--  [routerLink]=\"['../../pages/time-spent', compId, 'details']\"  -->\n                                <span> <a routerLink=\"../../individual-reports\"  style=\"color: darkslategray\">Individual Reports</a></span>\n                              </p>\n                            </div>\n                            <div class=\"col-md-10 ml-auto mr-auto\">\n                              <!-- <p class=\"text-left title clrs-h4-font\" style=\"color: darkslategray\"> Compliance</p> -->\n                              <p class=\"text-left title  clrs-h4-font\" style=\"color: darkslategray\">\n                                <span> <a routerLink=\"../../individual-rpts\" style=\"color: darkslategray\">Department Reports</a></span>\n                              </p>\n                            </div>\n                            <div class=\"col-md-10 ml-auto mr-auto\">\n                              <!-- <p class=\"text-left title clrs-h4-font\" style=\"color: darkslategray\"> Compliance</p> -->\n                              <p class=\"text-left title  clrs-h4-font\" style=\"color: darkslategray\">\n                                <span> <a routerLink=\"../total-actions\" style=\"color: darkslategray\">Project Reports</a></span>\n                              </p>\n                            </div>\n                            <div class=\"col-md-10 ml-auto mr-auto\">\n                              <p class=\"text-left title clrs-h4-font\" style=\"color: darkslategray\"> Compliance</p>\n                            \n                              <div class=\"card-plain card-content\">\n                                <div class=\"text-left na-p\">\n                                  <ol>\n                                    <li>\n                                      <span class=\"row col-md-12\">\n                                        <span class=\"col-sm-6\" style=\"padding-left: 0px; padding-right: 0px;\">Tax Clearance </span>\n                                        <span class=\"col-sm-6\">: Document </span>\n                                      </span>\n                                    </li>\n                                    <li>\n                                      <span class=\"row col-md-12\">\n                                        <span class=\"col-sm-6\" style=\"padding-left: 0px; padding-right: 0px;\">Industry sector registration </span>\n                                        <span class=\"col-sm-6\">: Document </span>\n                                      </span>\n                                    </li>\n                                    <li>\n                                      <span class=\"row col-md-12\">\n                                        <span class=\"col-sm-6\" style=\"padding-left: 0px; padding-right: 0px;\">Health and Safety </span>\n                                        <span class=\"col-sm-6\">: Document </span>\n                                      </span>\n                                    </li>\n                                  </ol>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"spacer\" style=\"height: 2em\"></div>\n                            <div class=\"col-md-10 ml-auto mr-auto\">\n                              <p class=\"text-left title clrs-h4-font\" style=\"color: darkslategray\">Metrics</p>\n                              <div class=\"card-plain card-content\">\n                                <div class=\"text-left na-p\">\n                                  <ol>\n                                    <li>\n                                      <span class=\"row col-md-12\">\n                                        <span class=\"col-sm-10\" style=\"padding-left: 0px; padding-right: 0px;\">Revenue Per Capital </span>\n                                        <span class=\"col-sm-2\">: 5/10 </span>\n                                      </span>\n                                    </li>\n                                    <li>\n                                      <span class=\"row col-md-12\">\n                                        <span class=\"col-sm-10\" style=\"padding-left: 0px; padding-right: 0px;\">Annual staff costs percentage of\n                                          total Annual Revenue </span>\n                                        <span class=\"col-sm-2\">: 70 % </span>\n                                      </span>\n                                    </li>\n                                    <li>\n                                      <span class=\"row col-md-12\">\n                                        <span class=\"col-sm-10\" style=\"padding-left: 0px; padding-right: 0px;\">Sum of projects finished to projects\n                                          supposed to be finished to date </span>\n                                        <span class=\"col-sm-2\">: 7/10 </span>\n                                      </span>\n                                    </li>\n                                    <li>\n                                      <span class=\"row col-md-12\">\n                                        <span class=\"col-sm-10\" style=\"padding-left: 0px; padding-right: 0px;\">Tasks complete percentage to tasks\n                                          planned to Date </span>\n                                        <span class=\"col-sm-2\">: 80 % </span>\n                                      </span>\n                                    </li>\n                                    <li>\n                                      <span class=\"row col-md-12\">\n                                        <span class=\"col-sm-10\" style=\"padding-left: 0px; padding-right: 0px;\">Tasks complete percentage to tasks\n                                          planned to Date By Key Personel </span>\n                                        <span class=\"col-sm-2\">: 60 % </span>\n                                      </span>\n                                    </li>\n                                  </ol>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"col-md-10 ml-auto mr-auto\">\n                              <p class=\"text-left title clrs-h4-font\" style=\"color: darkslategray\">Departments</p>\n                              <div class=\"card-plain card-content\">\n                              <div *ngIf=\"displayDeptReport\" class=\"card-body\">\n                                <div class=\"row\">\n                                  <div class=\"col-sm-4\">\n                                    <p class=\"clrs-h4-font\" style=\"margin-top:0em; color:darkslategray\">List of Departments...</p>\n\n                                    <ol class=\"card-category\">\n                                      <li *ngFor=\"let dept of companyDptsArray | async\" class=\"text-left\">\n                                        <a (click)=\"viewDeptReport(dept)\" style=\"cursor:context-menu\" class=\"text-left\">{{ dept.name }}</a>\n                                      </li>\n                                    </ol>\n\n                                  </div>\n                                  <div *ngIf=\"deptDemoNotes\" class=\"col-sm-8\">\n                                    <!-- <h3>Another Title Here</h3> -->\n                                    <p class=\"clrs-h4-font\" style=\"margin-top:0em; color:darkslategray\">Department Details...</p>\n\n                                    <p class=\"text-info \">Click to view on a department to see report.</p>\n                                  </div>\n                                </div>\n                              </div>\n                              <div *ngIf=\"displayDept\" class=\"card-body\" style=\"margin-top: -3em\" id=\"DepartmentDisplay\">\n                                <div class=\"col-md-12\">\n                                  <div class=\"row\">\n                                    <div class=\"col-md-10\">\n                                      <p class=\"clrs-h1-font pull-left\" style=\"margin-top:0em; color:darkslategray; margin-bottom: 0px;\"><span class=\"title card-category\"\n                                          style=\"color:darkslategray\">{{ setDept.name }}</span>`s report overview...</p>\n                                    </div>\n                                    <div class=\"col-md-2\">\n                                      <button class=\"btn-link btn-magnify\" (click)=\"back2Dept()\">Back</button>\n                                    </div>\n                                  </div>\n                                  <br><br>\n\n                                  <nav aria-label=\"Page navigation example\">\n                                    <ul class=\"nav nav-pills nav-pills-primary nav-pills-icons justify-content-right\" role=\"tablist\" style=\"margin-top: -30px;\">\n                                      <li class=\"nav-item\">\n                                        <a class=\"pagination pagination-primary active\" title=\"click to see the overview\" data-toggle=\"tab\" href=\"#deptOverview\"\n                                          role=\"tablist\">\n                                          Overview\n                                        </a>\n                                      </li>\n                                      <span style=\"color:darkslategrey\"> -|- </span>\n                                      <li class=\"nav-item\">\n                                        <a class=\"pagination pagination-primary\" title=\"click to see the other reports\" data-toggle=\"tab\" href=\"#deptOther\"\n                                          role=\"tablist\">\n                                          Other\n                                        </a>\n                                      </li>\n                                    </ul>\n                                  </nav>\n                                  <div class=\"tab-content tab-space tab-subcategories col-md-12\">\n                                    <div class=\"tab-pane active\" id=\"deptOverview\">\n                                      <div class=\"col-md-11 mr-auto ml-auto text-left\">\n                                        Total Number of Tasks Complete : {{ (allDeptTasksComplete | async)?.length }}<br>\n                                        Total Number of outstanding Tasks : {{ outstandingDptTasks.length }}<br>\n                                        Total Number of Tasks allocated: {{ (allDeptTasks | async)?.length }}<br>\n                                      </div>\n                                      <div class=\"col-md-12\">\n                                        <div *ngIf=\"((allDeptTasks | async)?.length != 0)\" class=\"row\">\n                                          <div class=\"col-sm-1 card-header text-left\" style=\"padding-right: 0px; padding-left: 12px;\">#</div>\n                                          <div class=\"col-sm-2 card-header text-left\" style=\"padding-left: 0px;\">Task</div>\n                                          <!-- <div class=\"col-sm-2 card-header\">Target</div> -->\n                                          <div class=\"col-md-2 col-sm-2 card-header text-left\">Start</div>\n                                          <div class=\"col-md-2 col-sm-2 card-header text-left\">Finish</div>\n                                          <div class=\"col-md-2 col-sm-2 card-header text-left\">Complete</div>\n                                          <div class=\"col-md-3 col-sm-3 card-header text-left\">Champion</div>\n                                        </div>\n                                        <ol style=\"padding-left: 10px;\">\n                                          <p *ngIf=\"(setDeptOutstandingTasks.length != 0)\" class=\"category text-warning\">Outstanding Tasks.</p>\n                                          <li *ngFor=\"let item of setDeptOutstandingTasks\">\n                                            <div class=\"row\">\n                                              <div class=\"col-md-3 col-sm-3 text-left\">\n                                                <a>{{ item.name }}</a>\n                                              </div>\n                                              <div class=\"col-md-2 col-sm-2\">\n                                                <a>{{ item.start }}</a>\n                                              </div>\n                                              <div class=\"col-md-2 col-sm-2\">\n                                                <a>{{ item.finish }}</a>\n                                              </div>\n                                              <div class=\"col-md-2 col-sm-2\">\n                                                <a>{{ item.complete }}</a>\n                                              </div>\n                                              <div class=\"col-md-3 card-category col-sm-3\">\n                                                <a>{{ item.champion.name }}</a>\n                                              </div>\n                                            </div>\n                                          </li>\n                                          <p *ngIf=\"(setDeptCurrentTAsks.length != 0)\" class=\"category text-success\">Current Tasks.</p>\n                                          <li *ngFor=\"let item of setDeptCurrentTAsks\">\n                                            <div class=\"row\">\n                                              <div class=\"col-md-3 col-sm-3 text-left\">\n                                                <a> {{ item.name }}</a>\n                                              </div>\n                                              <div class=\"col-md-2 col-sm-2\">\n                                                <a> {{ item.start }}</a>\n                                              </div>\n                                              <div class=\"col-md-2 col-sm-2\">\n                                                <a> {{ item.finish }}</a>\n                                              </div>\n                                              <div class=\"col-md-2 col-sm-2\">\n                                                <a> {{ item.complete }}</a>\n                                              </div>\n                                              <div class=\"col-md-3 card-category  col-sm-3\">\n                                                <a> {{ item.champion.name }}</a>\n                                              </div>\n                                            </div>\n                                          </li>\n                                          <p *ngIf=\"(setDeptUpcomingTAsks.length != 0)\" class=\"category text-info\">Upcurrent Tasks.</p>\n                                          <li *ngFor=\"let item of setDeptUpcomingTAsks\">\n                                            <div class=\"row\">\n                                              <div class=\"col-md-3 col-sm-3 text-left\">\n                                                <a> {{ item.name }}</a>\n                                              </div>\n                                              <div class=\"col-md-2 col-sm-2\">\n                                                <a> {{ item.start }}</a>\n                                              </div>\n                                              <div class=\"col-md-2 col-sm-2\">\n                                                <a> {{ item.finish }}</a>\n                                              </div>\n                                              <div class=\"col-md-2 col-sm-2\">\n                                                <a> {{ item.complete }}</a>\n                                              </div>\n                                              <div class=\"col-md-3 card-category  col-sm-3\">\n                                                <a> {{ item.champion.name }}</a>\n                                              </div>\n                                            </div>\n                                          </li>\n                                        </ol>\n                                      </div>\n                                    </div>\n                                    <div class=\"tab-pane\" id=\"deptTimesheet\">\n                                      Timesheet\n                                      <br>\n                                    </div>\n                                    <div class=\"tab-pane\" id=\"deptOther\">\n                                      Other reports\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                              </div>\n                            </div>\n                            <div class=\"col-md-10 ml-auto mr-auto\">\n                              <p class=\"text-left title clrs-h4-font\" style=\"color: darkslategray\">Staff</p>\n                              <div class=\"card-plain card-content\">\n                                <div *ngIf=\"displayUserReport\" class=\"card-body\">\n                                  <div class=\"row\">\n                                    <div class=\"col-sm-4\">\n                                      <p class=\"clrs-h4-font\" style=\"margin-top:0em; color:darkslategray\">List of Employees...</p>\n                                      <ol class=\"card-category\">\n                                        <li *ngFor=\"let man of companyStaff | async\" class=\"text-left\">\n                                          <a (click)=\"viewReport(man)\" style=\"cursor:context-menu\">{{ man.name }}</a>\n                                        </li>\n                                      </ol>\n                                    </div>\n                                    <div *ngIf=\"demoNotes\" class=\"col-sm-8\">\n                                      <p class=\"clrs-h4-font\" style=\"margin-top:0em; color:darkslategray\">Employee Details...</p>\n                                      <p class=\"text-info \">Click to view on an employee`s name to see their report.</p>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div *ngIf=\"displayUser\" class=\"card-body\">\n                                  <div class=\"col-md-12\">\n                                    <div class=\"row\">\n                                      <div class=\"col-md-10\">\n                                        <p class=\"clrs-h4-font pull-left\" style=\"margin-top:0em; color:darkslategray; margin-bottom: 0px;\"><span class=\"title card-category\"\n                                            style=\"color:darkslategray\">{{ setUser.name }}</span>`s report overview...</p>\n                                      </div>\n                                      <div class=\"col-md-2\">\n                                        <button class=\"btn-link btn-magnify\" (click)=\"back2Users()\">Back</button>\n                                      </div>\n                                    </div>\n                                    <br><br>\n                                    <nav aria-label=\"Page navigation example\">\n                                      <ul class=\"nav nav-pills nav-pills-primary nav-pills-icons justify-content-right\" role=\"tablist\" style=\"margin-top: -30px;\">\n                                        <li class=\"nav-item\">\n                                          <a class=\"pagination pagination-primary active\" title=\"click to see the overview\" data-toggle=\"tab\" href=\"#link7\"\n                                            role=\"tablist\">\n                                            Overview\n                                          </a>\n                                        </li>\n                                        <span style=\"color:darkslategrey\"> -|- </span>\n                                        <li class=\"nav-item\">\n                                          <a class=\"pagination pagination-primary\" title=\"click to see the timesheet\" data-toggle=\"tab\" href=\"#link8\"\n                                            role=\"tablist\">\n                                            Timesheet\n                                          </a>\n                                        </li>\n                                        <span style=\"color:darkslategrey\"> -|- </span>\n                                        <li class=\"nav-item\">\n                                          <a class=\"pagination pagination-primary\" title=\"click to see the other reports\" data-toggle=\"tab\" href=\"#link9\"\n                                            role=\"tablist\">\n                                            Other\n                                          </a>\n                                        </li>\n                                      </ul>\n                                    </nav>\n                                    <div class=\"tab-content tab-space tab-subcategories col-md-12\">\n                                      <div class=\"tab-pane active\" id=\"link7\">\n                                        <div class=\"col-md-11 mr-auto ml-auto text-left\">\n                                          Total Number of Tasks Complete : {{ (myCompletetasks | async)?.length }}<br>\n                                          Total Number of outstanding Tasks: {{ outstandingTasks.length }}<br>\n                                          Total Number of Tasks allocated: {{ (allMyTasks | async)?.length }}<br>\n                                        </div>\n                                        <div class=\"col-md-12\">\n                                          <div *ngIf=\"((allMyTasks | async)?.length != 0)\" class=\"row\">\n                                            <div class=\"col-sm-1 card-header text-left\" style=\"padding-right: 0px; padding-left: 12px;\">#</div>\n                                            <div class=\"col-sm-2 card-header text-left\" style=\"padding-left: 0px;\">Task</div>\n                                            <div class=\"col-md-2 col-sm-2 card-header text-left\">Start</div>\n                                            <div class=\"col-md-2 col-sm-2 card-header text-left\">Finish</div>\n                                            <div class=\"col-md-2 col-sm-2 card-header text-left\">Complete</div>\n                                            <div class=\"col-md-3 col-sm-3 card-header text-left\">Champion</div>\n                                          </div>\n                                          <ol style=\"padding-left: 10px;\">\n                                            <p *ngIf=\"(setUserOutstandingTasks.length != 0)\" class=\"category text-warning\">Outstanding Tasks.</p>\n                                            <li *ngFor=\"let item of setUserOutstandingTasks\">\n                                              <div class=\"row\">\n                                                <div class=\"col-md-3 col-sm-3 text-left\">\n                                                  <a>{{ item.name }}</a>\n                                                </div>\n                                                <div class=\"col-md-2 col-sm-2\">\n                                                  <a>{{ item.start }}</a>\n                                                </div>\n                                                <div class=\"col-md-2 col-sm-2\">\n                                                  <a>{{ item.finish }}</a>\n                                                </div>\n                                                <div class=\"col-md-2 col-sm-2\">\n                                                  <a>{{ item.complete }}</a>\n                                                </div>\n                                                <div class=\"col-md-3 card-category col-sm-3\">\n                                                  <a>{{ item.champion.name }}</a>\n                                                </div>\n                                              </div>\n                                            </li>\n                                            <p *ngIf=\"(setUserCurrentTAsks.length != 0)\" class=\"category text-success\">Current Tasks.</p>\n                                            <li *ngFor=\"let item of setUserCurrentTAsks\">\n                                              <div class=\"row\">\n                                                <div class=\"col-md-3 col-sm-3 text-left\">\n                                                  <a> {{ item.name }}</a>\n                                                </div>\n                                                <div class=\"col-md-2 col-sm-2\">\n                                                  <a> {{ item.start }}</a>\n                                                </div>\n                                                <div class=\"col-md-2 col-sm-2\">\n                                                  <a> {{ item.finish }}</a>\n                                                </div>\n                                                <div class=\"col-md-2 col-sm-2\">\n                                                  <a> {{ item.complete }}</a>\n                                                </div>\n                                                <div class=\"col-md-3 card-category  col-sm-3\">\n                                                  <a> {{ item.champion.name }}</a>\n                                                </div>\n                                              </div>\n                                            </li>\n                                            <p *ngIf=\"(setUserUpcomingTAsks.length != 0)\" class=\"category text-info\">Upcurrent Tasks.</p>\n                                            <li *ngFor=\"let item of setUserUpcomingTAsks\">\n                                              <div class=\"row\">\n                                                <div class=\"col-md-3 col-sm-3 text-left\">\n                                                  <a> {{ item.name }}</a>\n                                                </div>\n                                                <div class=\"col-md-2 col-sm-2\">\n                                                  <a> {{ item.start }}</a>\n                                                </div>\n                                                <div class=\"col-md-2 col-sm-2\">\n                                                  <a> {{ item.finish }}</a>\n                                                </div>\n                                                <div class=\"col-md-2 col-sm-2\">\n                                                  <a> {{ item.complete }}</a>\n                                                </div>\n                                                <div class=\"col-md-3 card-category  col-sm-3\">\n                                                  <a> {{ item.champion.name }}</a>\n                                                </div>\n                                              </div>\n                                            </li>\n                                          </ol>\n                                        </div>\n                                      </div>\n                                      <div class=\"tab-pane\" id=\"link8\">\n                                        Timesheet\n                                        <br>\n                                      </div>\n                                      <div class=\"tab-pane\" id=\"link9\">\n                                        Other reports\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"col-md-10 ml-auto mr-auto\">\n                              <p class=\"text-left title clrs-h4-font\" style=\"color: darkslategray\">Projects</p>\n                              <div class=\"card-plain card-content\">\n                                <div *ngIf=\"displayProjReport\" class=\"card-body\">\n                                  <div class=\"row\">\n                                    <div class=\"col-sm-4\">\n                                      <!-- <h3>List of Employees</h3> -->\n                                      <p class=\"clrs-h4-font\" style=\"margin-top:0em; color:darkslategray\">List of Projects...</p><br>\n                                      <ol class=\"card-category\">\n                                        <li *ngFor=\"let project of allCompProjects | async\" class=\"text-left\">\n                                          <a (click)=\"viewProjectReport(project)\" style=\"cursor:context-menu\">{{ project.name }}</a>\n                                        </li>\n                                      </ol>\n                                    </div>\n                                    <div *ngIf=\"ProjectDemoNotes\" class=\"col-sm-8\">\n                                      <!-- <h3>Another Title Here</h3> -->\n                                      <p class=\"clrs-h4-font\" style=\"margin-top:0em; color:darkslategray\">Project Details...</p>\n                                      <p class=\"text-info \">Click to view on an Project to see their report.</p>\n                                    </div>\n                                  </div>\n                                </div>\n                                <div *ngIf=\"displayProject\" class=\"card-body\" style=\"margin-top: -3em\">\n                                  <div class=\"col-md-12\">\n                                    <div class=\"row\">\n                                      <div class=\"col-md-10\">\n                                        <p class=\"clrs-h4-font pull-left\" style=\"margin-top:0em; color:darkslategray; margin-bottom: 0px;\"><span class=\"title card-category\"\n                                            style=\"color:darkslategray\">{{ projectSet.name }}</span>`s project report overview...</p>\n                                      </div>\n                                      <div class=\"col-md-2\">\n                                        <button class=\"btn-link btn-magnify\" (click)=\"back2Proj()\">Back</button>\n                                      </div>\n                                    </div>\n                                    <br><br>\n\n                                    <nav aria-label=\"Page navigation example\">\n                                      <ul class=\"nav nav-pills nav-pills-primary nav-pills-icons justify-content-right\" role=\"tablist\" style=\"margin-top: -30px;\">\n                                        <li class=\"nav-item\">\n                                          <a class=\"pagination pagination-primary active\" title=\"click to see the overview\" data-toggle=\"tab\" href=\"#projOverview\"\n                                            role=\"tablist\">\n                                            Overview\n                                          </a>\n                                        </li>\n                                        <!-- <span style=\"color:darkslategrey\"> -|- </span><li class=\"nav-item\">\n                                          <a class=\"pagination pagination-primary\" title=\"click to see the timesheet\" data-toggle=\"tab\" href=\"#projTimesheet\" role=\"tablist\">\n                                            Timesheet\n                                          </a>         </li> -->\n                                        <span style=\"color:darkslategrey\"> -|- </span>\n                                        <li class=\"nav-item\">\n                                          <a class=\"pagination pagination-primary\" title=\"click to see the other reports\" data-toggle=\"tab\" href=\"#projOther\"\n                                            role=\"tablist\">\n                                            Other\n                                          </a>\n                                        </li>\n                                      </ul>\n                                    </nav>\n                                    <div class=\"tab-content tab-space tab-subcategories col-md-12\">\n                                      <div class=\"tab-pane active\" id=\"projOverview\">\n                                        <div class=\"col-md-11 mr-auto ml-auto text-left\">\n                                          Total Number of Tasks Complete : {{ (compProjectTasksComplete | async)?.length }}<br>\n                                          Total Number of outstanding Tasks : {{ outstandingProjectTasks.length }}<br>\n                                          Total Number of Tasks allocated : {{ (allProjectTasks | async)?.length }}<br>\n                                        </div>\n                                        <div class=\"col-md-12\">\n                                          <div *ngIf=\"((allProjectTasks | async)?.length != 0)\" class=\"row\">\n                                            <div class=\"col-sm-1 card-header text-left\" style=\"padding-right: 0px; padding-left: 12px;\">#</div>\n                                            <div class=\"col-sm-2 card-header text-left\" style=\"padding-left: 0px;\">Task</div>\n                                            <div class=\"col-md-2 col-sm-2 card-header text-left\">Start</div>\n                                            <div class=\"col-md-2 col-sm-2 card-header text-left\">Finish</div>\n                                            <div class=\"col-md-2 col-sm-2 card-header text-left\">Complete</div>\n                                            <div class=\"col-md-3 col-sm-3 card-header text-left\">Champion</div>\n                                          </div>\n                                          <ol style=\"padding-left: 10px;\">\n                                          <p *ngIf=\"(setPojOutstandingTasks.length != 0)\" class=\"category text-warning\">Outstanding Tasks.</p>\n                                          <li *ngFor=\"let item of setPojOutstandingTasks\">\n                                            <div class=\"row\">\n                                              <div class=\"col-md-3 col-sm-3 text-left\">\n                                                <a>{{ item.name }}</a>\n                                              </div>\n                                              <div class=\"col-md-2 col-sm-2\">\n                                                <a>{{ item.start }}</a>\n                                              </div>\n                                              <div class=\"col-md-2 col-sm-2\">\n                                                <a>{{ item.finish }}</a>\n                                              </div>\n                                              <div class=\"col-md-2 col-sm-2\">\n                                                <a>{{ item.complete }}</a>\n                                              </div>\n                                              <div class=\"col-md-3 card-category col-sm-3\">\n                                                <a>{{ item.champion.name }}</a>\n                                              </div>\n                                            </div>\n                                          </li>\n                                          <p *ngIf=\"(setPojCurrentTAsks.length != 0)\" class=\"category text-success\">Current Tasks.</p>\n                                          <li *ngFor=\"let item of setPojCurrentTAsks\">\n                                            <div class=\"row\">\n                                              <div class=\"col-md-3 col-sm-3 text-left\">\n                                                <a> {{ item.name }}</a>\n                                              </div>\n                                              <div class=\"col-md-2 col-sm-2\">\n                                                <a> {{ item.start }}</a>\n                                              </div>\n                                              <div class=\"col-md-2 col-sm-2\">\n                                                <a> {{ item.finish }}</a>\n                                              </div>\n                                              <div class=\"col-md-2 col-sm-2\">\n                                                <a> {{ item.complete }}</a>\n                                              </div>\n                                              <div class=\"col-md-3 card-category  col-sm-3\">\n                                                <a> {{ item.champion.name }}</a>\n                                              </div>\n                                            </div>\n                                          </li>\n                                          <p *ngIf=\"(setPojUpcomingTAsks.length != 0)\" class=\"category text-info\">Upcurrent Tasks.</p>\n                                          <li *ngFor=\"let item of setPojUpcomingTAsks\">\n                                            <div class=\"row\">\n                                              <div class=\"col-md-3 col-sm-3 text-left\">\n                                                <a> {{ item.name }}</a>\n                                              </div>\n                                              <div class=\"col-md-2 col-sm-2\">\n                                                <a> {{ item.start }}</a>\n                                              </div>\n                                              <div class=\"col-md-2 col-sm-2\">\n                                                <a> {{ item.finish }}</a>\n                                              </div>\n                                              <div class=\"col-md-2 col-sm-2\">\n                                                <a> {{ item.complete }}</a>\n                                              </div>\n                                              <div class=\"col-md-3 card-category  col-sm-3\">\n                                                <a> {{ item.champion.name }}</a>\n                                              </div>\n                                            </div>\n                                          </li>\n                                        </ol>\n                                        </div>\n                                      </div>\n                                      <div class=\"tab-pane\" id=\"projTimesheet\">\n                                        Timesheet\n                                        <br>\n                                      </div>\n                                      <div class=\"tab-pane\" id=\"projOther\">\n                                        Other reports\n                                      </div>\n                                    </div>\n                                  </div>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"col-md-10 ml-auto mr-auto\">\n                              <p class=\"text-left title clrs-h4-font\" style=\"color: darkslategray\">Reference</p>\n                              <div class=\"card-plain card-content\">\n                                <div class=\"text-left na-p\">\n                                  <ol>\n                                    <li>Financial Capacity : view document</li>\n                                    <li>Management Capacity : view document</li>\n                                    <li>Key Personel : view document</li>\n                                    <li>Management Continuity : view document</li>\n                                    <li>Shareholder and Risk Management : view document</li>\n                                  </ol>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                          <div class=\"tab-pane\" id=\"publicReport\" role=\"tabpanel\" aria-expanded=\"false\">\n                            <div class=\"col-md-10 ml-auto mr-auto\">\n                              <p class=\"text-left title clrs-h4-font\" style=\"color: darkslategray\">Company Details</p>\n                              <div class=\"card-plain card-content\">\n                                <div class=\"text-left na-p\" style=\"margin-left:2em \">\n                                  <span class=\"row col-md-12\">\n                                    <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Company Name </span>\n                                    <span class=\"col-sm-9\">: {{ (company)?.name }} </span>\n                                  </span><br>\n                                  <span class=\"row col-md-12\">\n                                    <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Sector </span>\n                                    <span class=\"col-sm-9\">: {{ (company)?.sector }} </span>\n                                  </span><br>\n                                  <span class=\"row col-md-12\">\n                                    <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Services </span>\n                                    <span class=\"col-sm-9\">\n                                      <a *ngFor=\"let service of (company)?.services\">: {{ service.display }} <br></a>\n                                    </span>\n                                  </span><br>\n                                  <span class=\"row col-md-12\">\n                                    <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Location </span>\n                                    <span class=\"col-sm-9\">: {{ (company)?.location }} </span>\n                                  </span><br>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"spacer\" style=\"height: 2em\"></div>\n                            <div class=\"col-md-10 ml-auto mr-auto\">\n                              <p class=\"text-left title clrs-h4-font\" style=\"color: darkslategray\">Compliance</p>\n                              <div class=\"card-plain card-content\">\n                                <div class=\"text-left na-p\">\n                                  <ol>\n                                    <li>\n                                      <span class=\"row col-md-12\">\n                                        <span class=\"col-sm-6\" style=\"padding-left: 0px; padding-right: 0px;\">Tax Clearance </span>\n                                        <span class=\"col-sm-6\">: Document </span>\n                                      </span>\n                                    </li>\n                                    <li>\n                                      <span class=\"row col-md-12\">\n                                        <span class=\"col-sm-6\" style=\"padding-left: 0px; padding-right: 0px;\">Industry sector registration </span>\n                                        <span class=\"col-sm-6\">: Document </span>\n                                      </span>\n                                    </li>\n                                    <li>\n                                      <span class=\"row col-md-12\">\n                                        <span class=\"col-sm-6\" style=\"padding-left: 0px; padding-right: 0px;\">Health and Safety </span>\n                                        <span class=\"col-sm-6\">: Document </span>\n                                      </span>\n                                    </li>\n                                  </ol>\n                                </div>\n                              </div>\n                            </div>\n                            <div class=\"spacer\" style=\"height: 2em\"></div>\n                            <div class=\"col-md-10 ml-auto mr-auto\">\n                              <p class=\"text-left title clrs-h4-font\" style=\"color: darkslategray\">Metrics</p>\n                              <div class=\"card-plain card-content\">\n                                <div class=\"text-left na-p\">\n                                  <ol>\n                                    <li>\n                                      <span class=\"row col-md-12\">\n                                        <span class=\"col-sm-10\" style=\"padding-left: 0px; padding-right: 0px;\">Revenue Per Capital </span>\n                                        <span class=\"col-sm-2\">: 5/10 </span>\n                                      </span>\n                                    </li>\n                                    <li>\n                                      <span class=\"row col-md-12\">\n                                        <span class=\"col-sm-10\" style=\"padding-left: 0px; padding-right: 0px;\">Annual staff costs percentage of\n                                          total Annual Revenue </span>\n                                        <span class=\"col-sm-2\">: 70 % </span>\n                                      </span>\n                                    </li>\n                                    <li>\n                                      <span class=\"row col-md-12\">\n                                        <span class=\"col-sm-10\" style=\"padding-left: 0px; padding-right: 0px;\">Sum of projects finished to projects\n                                          supposed to be finished to date </span>\n                                        <span class=\"col-sm-2\">: 7/10 </span>\n                                      </span>\n                                    </li>\n                                    <li>\n                                      <span class=\"row col-md-12\">\n                                        <span class=\"col-sm-10\" style=\"padding-left: 0px; padding-right: 0px;\">Tasks complete percentage to tasks\n                                          planned to Date </span>\n                                        <span class=\"col-sm-2\">: 80 % </span>\n                                      </span>\n                                    </li>\n                                    <li>\n                                      <span class=\"row col-md-12\">\n                                        <span class=\"col-sm-10\" style=\"padding-left: 0px; padding-right: 0px;\">Tasks complete percentage to tasks\n                                          planned to Date By Key Personel </span>\n                                        <span class=\"col-sm-2\">: 60 % </span>\n                                      </span>\n                                    </li>\n                                  </ol>\n                                </div>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-pane\" id=\"request\">\n                  <div class=\"col-md-12\">\n                    <div class=\"card\">\n                      <div class=\"card-body\">\n                        TimeSheet\n\n                        <div id=\"accordionActionData\" role=\"tablist\" aria-multiselectable=\"true\" class=\"card-collapse\">\n                          <ol>\n                            <li class=\"\" style=\"color:steelblue\" *ngFor=\"let item of myActionItems\">\n                              <div class=\"card card-plain\">\n                                <div class=\"card-header\" role=\"tab\" id=\"heading2\">\n                                  <a class=\"collapsed\" data-toggle=\"collapse\" href=\"#{{ item.id }}\" (click)=\"showTaskActions(item)\"\n                                    aria-expanded=\"false\" aria-current=\"false\">\n                                    <!-- {{ item.name }}<span class=\"label text-warning\"> {{ item.when }}</span><i class=\"nc-icon nc-minimal-down\"></i> -->\n                                    {{ item.name }}<span class=\"label text-warning\"> {{ item.start }}</span><i class=\"nc-icon nc-minimal-down\"></i>\n                                  </a>\n                                </div>\n                                <div id=\"{{ item.id }}\" class=\"collapse\" data-parent=\"#accordionActionData\" role=\"tabpanel\"\n                                  aria-labelledby=\"heading2\">\n                                  <div class=\"card-body\">\n\n                                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                                      <div class=\"col-sm-2\" style=\"padding-left: 5px; padding-right:5px\">\n                                        <div class=\"form-group\">\n                                          <input type=\"time\" class=\"form-control panel-boader timepicker\" [(ngModel)]=\"item.start\"\n                                            style=\" padding-left: 10px; padding-right: 10px; height:2em\" placeholder=\"Time from\" />\n                                        </div>\n                                      </div>\n                                      <div class=\"col-sm-2\" style=\"padding-left: 5px; padding-right:5px\">\n                                        <div class=\"form-group\">\n                                          <input type=\"time\" class=\"form-control panel-boader timepicker\" [(ngModel)]=\"item.end\"\n                                            style=\" padding-left: 10px; padding-right: 10px;  height:2em\" placeholder=\"Time to\" />\n                                        </div>\n                                      </div>\n                                    </div>\n\n                                  </div>\n                                  <button class=\"btn-link btn-round primary\" (click)=\"selectTask(item)\" data-toggle=\"modal\"\n                                    data-target=\"#newAction\">\n                                    <small>Add task activity</small></button>\n                                </div>\n                              </div>\n                            </li>\n                          </ol>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"tskModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"card-body \">\n        <div class=\"card-header text-center\">\n          <p class=\"col-md-8 ml-auto mr-auto col-form-label info\">\n            <font size=4>Create a Task</font>\n          </p>\n        </div>\n        <hr>\n        <form class=\"form-horizontal\">\n          <div class=\"row\">\n            <label class=\"col-md-3 col-form-label\">Task name</label>\n            <div class=\"col-md-8\">\n              <div class=\"form-group\">\n                <input type=\"text\" [(ngModel)]=\"task.name\" name=\"taskName\" class=\"form-control\" placeholder=\"Task name\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-md-3 col-form-label\">Start Date</label>\n            <div class=\"col-md-8\">\n              <div class=\"form-group\">\n                <input type=\"date\" [(ngModel)]=\"start\" name=\"start\" class=\"form-control\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-md-3 col-form-label\">Finish Date</label>\n            <div class=\"col-md-8\">\n              <div class=\"form-group\">\n                <input type=\"date\" [(ngModel)]=\"finish\" name=\"finish\" class=\"form-control\">\n              </div>\n            </div>\n          </div>\n          <ng-container *ngIf=\"showdept\">\n            <div class=\"row\">\n              <label class=\"col-md-3 col-form-label\">Department</label>\n              <div class=\"col-md-8\">\n                <div class=\"form-group\" style=\"margin-top: -8px; margin-left: 15px; margin-bottom: -2px;\">\n                  {{(selectedDepartment)?.name }}\n                  <button type=\"text\" name=\"taskChampion\" class=\"btn btn-icon primary btn-link \" (click)=\"toggleDeptTable(); toggleDpt()\">\n                    <i class=\"fa fa-edit fa-fw\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </ng-container>\n          <div class=\"row\">\n            <div class=\"col-md-8 ml-auto mr-auto\">\n              <div class=\"form-group\">\n                <ng-container *ngIf=\"showDeptTable\">\n                  <div class=\"table table-responsive user_table\" style=\"overflow: auto;\">\n                    <code>Select a Department</code>\n                    <table class=\"table\">\n                      <tbody class=\"\">\n                        <tr *ngFor=\"let item of departsList | async \" class=\"\">\n                          <td class=\" td-clrs\">{{ item.name }}</td>\n                          <td class=\" td-clrs\"><button class=\"primary btn-link\" (click)=\"selectDepartment(item)\"> select\n                            </button></td>\n                        </tr>\n                      </tbody>\n                    </table>\n                    <footer class=\"pull-right\">\n                      <button class=\"primary btn-link\" (click)=\"toggleDpt(); toggleDeptTable()\" style=\"padding-right:3em\"> back\n                      </button>\n                    </footer>\n                  </div>\n                </ng-container>\n              </div>\n            </div>\n          </div>\n          <div *ngIf=\"selectedDepartment\">\n            <ng-container *ngIf=\"showdeptChamp\">\n              <div class=\"row\">\n                <label class=\"col-md-3 col-form-label\">Champion</label>\n                <div class=\"col-md-8\">\n                  <div class=\"form-group\" style=\"margin-top: -8px; margin-left: 15px; margin-bottom: -2px;\">\n                    {{(userChampion)?.name }}\n                    <button type=\"text\" name=\"taskChampion\" class=\"btn btn-icon primary btn-link \" (click)=\"toggleDeptUsersTable(); toggleDeptChamp()\">\n                      <i class=\"fa fa-edit fa-fw\"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </ng-container>\n            <div class=\"row\">\n              <div class=\"col-md-8 ml-auto mr-auto\">\n                <div class=\"form-group\">\n                  <ng-container *ngIf=\"showDeptPartTable\">\n                    <div class=\"table-responsive user_table\" style=\"overflow: auto;\">\n                      <code>Select a Champion</code>\n                      <table class=\"table\">\n                        <tbody class=\"\">\n                          <tr *ngFor=\"let user of deptParticipants | async \" class=\" td-clrs\">\n                            <td class=\"td-clrs\">{{ user.name }}</td>\n                            <td class=\"td-clrs\"><button class=\"primary btn-link\" (click)=\"selectDepartmentChamp(user)\">select</button></td>\n                          </tr>\n                        </tbody>\n                      </table>\n                      <footer class=\"pull-right\">\n                        <button class=\"primary btn-link\" (click)=\"toggleDeptChamp(); toggleDeptUsersTable()\" style=\"padding-right:3em\"> back\n                        </button>\n                      </footer>\n                    </div>\n                  </ng-container>\n                </div>\n              </div>\n            </div>\n          </div>\n          <ng-container *ngIf=\"showProj\">\n            <div class=\"row\">\n              <label class=\"col-md-3 col-form-label\">Project</label>\n              <div class=\"col-md-8\">\n                <div class=\"form-group\" style=\"margin-top: -8px; margin-left: 15px; margin-bottom: -2px;\">\n                  {{(selectedProject)?.name }}\n                  <button type=\"text\" name=\"taskProject\" class=\"btn btn-icon primary btn-link \" (click)=\"toggleProjTable(); toggleProj()\">\n                    <i class=\"fa fa-edit fa-fw\"></i>\n                  </button>\n                </div>\n              </div>\n            </div>\n          </ng-container>\n          <div class=\"row\">\n            <div class=\"col-md-8 ml-auto mr-auto\">\n              <div class=\"form-group\">\n                <ng-container *ngIf=\"showProjectTable\">\n                  <div class=\"table-responsive user_table\" style=\"overflow: auto;\">\n                    <code>Select Project</code>\n                    <table class=\"table\">\n                      <tbody>\n                        <tr *ngFor=\"let project of projectsCollection | async \" class=\"\">\n                          <td class=\"td-clrs\">{{ project.name }}</td>\n                          <td class=\"td-clrs\"><button class=\"primary btn-link\" (click)=\"selectProject(project)\">select</button></td>\n                        </tr>\n                      </tbody>\n                    </table>\n                    <footer class=\"pull-right\">\n                      <button class=\"primary btn-link\" (click)=\"toggleProj(); toggleProjTable()\" style=\"padding-right:3em\"> back\n                      </button>\n                    </footer>\n                  </div>\n                </ng-container>\n              </div>\n            </div>\n          </div>\n        </form>\n        <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n          <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"testNewTask()\" data-dismiss=\"modal\" title=\"save task\">Save</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"usersListjk\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"card-body \">\n        <div class=\"card-header text-center\">\n          <p class=\"col-md-8 ml-auto mr-auto title na-am col-form-label info\">\n            Choose a staff from colours\n          </p>\n        </div>\n        <hr>\n        <form class=\"form-horizontal\">\n          <ng-container *ngIf=\"showChamp\">\n            <div class=\"col-md-12 ml-auto mr-auto\">\n              <div class=\"row\">\n                <label class=\"col-md-4 col-form-label\">User</label>\n                <div class=\"col-md-8 mr-auto\">\n                  <div class=\"form-group\" style=\"margin-top: -8px; margin-left: 15px; margin-bottom: -2px;\">:{{(newCompanystaff)?.name }}\n                    <button type=\"text\" name=\"taskChampion\" class=\"btn btn-icon primary btn-link \" (click)=\"toggleUsersTable(); toggleChamp()\"\n                      rel=\"tooltip\" title=\"select a new staff\">\n                      <i class=\"fa fa-edit fa-fw\"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ng-container>\n          <div class=\"row\">\n            <div class=\"col-md-8 ml-auto mr-auto\">\n              <div class=\"form-group\">\n                <ng-container *ngIf=\"showUserTable\">\n                  <div class=\"table-responsive user_table\">\n                    <code>Select new Worker</code>\n                    <table class=\"table\">\n                      <tbody class=\"\">\n                        <tr *ngFor=\"let user of coloursUsers | async \" class=\"\">\n                          <td>{{ user.name }}</td>\n                          <td><button class=\"primary btn-link\" (click)=\"selectColUser(user)\"> select\n                            </button></td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </ng-container>\n              </div>\n            </div>\n          </div>\n        </form>\n        <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n          <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"saveNewStaff()\" data-dismiss=\"modal\" title=\"save task\">Save</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"usersList\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"card-body \">\n        <div class=\"card-header text-center\">\n          <p class=\"col-md-8 ml-auto mr-auto title na-am col-form-label info\">\n            Choose a staff from colours\n          </p>\n        </div>\n        <hr>\n        <div class=\"col-md-10 ml-auto mr-auto\">\n          <ng-select [items]=\"coloursUsers | async\" bindLabel=\"name\" name=\"psection\" placeholder=\"Select new staff \" (change)=\"selectColUser2(selectedColUser)\" [(ngModel)]=\"selectedColUser\">\n          </ng-select>\n        </div>\n        <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n          <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"saveNewStaff()\" data-dismiss=\"modal\"\n              title=\"save task\">Save</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"dptStaffList\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"card-body \">\n        <div class=\"card-header text-center\">\n          <p class=\"col-md-8 ml-auto mr-auto title na-am col-form-label info\">\n            Choose a staff from department\n          </p>\n        </div>\n        <hr>\n        <form class=\"form-horizontal\">\n          <ng-container *ngIf=\"showChamp\">\n            <div class=\"col-md-12 ml-auto mr-auto\">\n              <div class=\"row\">\n                <label class=\"col-md-4 col-form-label\">User</label>\n                <div class=\"col-md-8 mr-auto\">\n                  <div class=\"form-group\" style=\"margin-top: -8px; margin-left: 15px; margin-bottom: -2px;\">\n                    :{{(companystaff)?.name }}\n                    <button type=\"text\" name=\"taskChampion\" class=\"btn btn-icon primary btn-link \" (click)=\"toggleUsersTable(); toggleChamp()\"\n                      rel=\"tooltip\" title=\"select a new staff\">\n                      <i class=\"fa fa-edit fa-fw\"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ng-container>\n          <div class=\"row\">\n            <div class=\"col-md-8 ml-auto mr-auto\">\n              <div class=\"form-group\">\n                <ng-container *ngIf=\"showUserTable\">\n                  <div class=\"table-responsive user_table\">\n                    <table class=\"table\">\n                      <tbody class=\"\">\n                        <tr *ngFor=\"let user of calldptStaff | async \" class=\"\">\n                          <td>{{ user.name }}</td>\n                          <td><button class=\"primary btn-link\" (click)=\"selectUser(user)\"> select\n                            </button>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </ng-container>\n              </div>\n            </div>\n          </div>\n        </form>\n        <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n          <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"add2DptStaff()\" data-dismiss=\"modal\" title=\"save task\">Save</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"taskdptStaff\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"card-body \">\n        <div class=\"card-header text-center\">\n          <p class=\"col-md-8 ml-auto mr-auto title na-am col-form-label info\">\n            Choose a staff from department\n          </p>\n        </div>\n        <hr>\n        <form class=\"form-horizontal\">\n          <ng-container *ngIf=\"showDptChamp\">\n            <div class=\"col-md-12 ml-auto mr-auto\">\n              <div class=\"row\">\n                <label class=\"col-md-4 col-form-label\">User</label>\n                <div class=\"col-md-8 mr-auto\">\n                  <div class=\"form-group\" style=\"margin-top: -8px; margin-left: 15px; margin-bottom: -2px;\">\n                    :{{(companystaff)?.name }}\n                    <button type=\"text\" name=\"taskChampion\" class=\"btn btn-icon primary btn-link \" (click)=\"toggleDpUsersTable(); toggleDeptChampion()\"\n                      rel=\"tooltip\" title=\"select a new staff\">\n                      <i class=\"fa fa-edit fa-fw\"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ng-container>\n          <div class=\"row\">\n            <div class=\"col-md-8 ml-auto mr-auto\">\n              <div class=\"form-group\">\n                <ng-container *ngIf=\"showDptUserTable\">\n                  <div class=\"table-responsive user_table\">\n                    <table class=\"table\">\n                      <tbody class=\"\">\n                        <tr *ngFor=\"let user of calldptStaff | async \" class=\"\">\n                          <td>{{ user.name }}</td>\n                          <td><button class=\"primary btn-link\" (click)=\"depSelectUser(user)\"> select\n                            </button>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </ng-container>\n              </div>\n            </div>\n          </div>\n        </form>\n        <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n          <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"addTaskDptStaff()\" data-dismiss=\"modal\"\n              title=\"save task\">Save</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"entDptStaff\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"card-body \">\n        <div class=\"card-header text-center\">\n          <p class=\"col-md-8 ml-auto mr-auto title na-am col-form-label info\">\n            Choose a staff from department\n          </p>\n        </div>\n        <hr>\n        <form class=\"form-horizontal\">\n          <ng-container *ngIf=\"showChamp\">\n            <div class=\"col-md-12 ml-auto mr-auto\">\n              <div class=\"row\">\n                <label class=\"col-md-4 col-form-label\">User</label>\n                <div class=\"col-md-8 mr-auto\">\n                  <div class=\"form-group\" style=\"margin-top: -8px; margin-left: 15px; margin-bottom: -2px;\">\n                    :{{(companystaff)?.name }}\n                    <button type=\"text\" name=\"taskChampion\" class=\"btn btn-icon primary btn-link \" (click)=\"toggleUsersTable(); toggleChamp()\"\n                      rel=\"tooltip\" title=\"select a new staff\">\n                      <i class=\"fa fa-edit fa-fw\"></i>\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </ng-container>\n          <div class=\"row\">\n            <div class=\"col-md-8 ml-auto mr-auto\">\n              <div class=\"form-group\">\n                <ng-container *ngIf=\"showUserTable\">\n                  <div class=\"table-responsive user_table\">\n                    <table class=\"table\">\n                      <tbody class=\"\">\n                        <!-- <tr *ngFor=\"let user of deptStaff | async \" class=\"\"> -->\n                        <tr *ngFor=\"let user of compStaff2 | async \" class=\"\">\n                          <td>{{ user.name }}</td>\n                          <td><button class=\"primary btn-link\" (click)=\"selectUser(user)\"> select\n                            </button>\n                          </td>\n                        </tr>\n                      </tbody>\n                    </table>\n                  </div>\n                </ng-container>\n              </div>\n            </div>\n          </div>\n        </form>\n        <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n          <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"setDptHead()\" data-dismiss=\"modal\" title=\"save task\">Save</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"actionItemParticipants\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"card-body \">\n        <div class=\"card-header text-center\">\n          <p class=\"col-md-8 ml-auto mr-auto title na-am col-form-label info\">\n            Select Participants<br> for Task Activity: <b>{{ editedAction.name }}</b> </p><br>\n\n        </div>\n        <div class=\"col-md-10 ml-auto mr-auto\">\n          <br>\n          <ol>\n            <li *ngFor=\"let person of staff | async\">\n              <div class=\"row\">\n                <div class=\"col-md-9\">\n                  {{ person.name }}\n                </div>\n                <div class=\"col-md-3\" style=\"padding-top: 12px;\">\n                  <input class=\"card-category pull-right col-form-label\" type=\"checkbox\" (change)=\"selectActionStaff($event, person)\">\n                </div>\n              </div>\n            </li>\n          </ol>\n          <ng-container *ngIf=\"actionParticipants != null\">\n            <small>Participants:<br>\n              <a *ngFor=\"let person of actionParticipants | async\">{{ person.name }}, </a></small>\n          </ng-container>\n        </div>\n      </div>\n      <hr>\n      <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n        <div class=\"left-side\">\n          <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n          <button type=\"button\" class=\"btn btn-success btn-link\" data-dismiss=\"modal\" title=\"save task\">Save</button>\n        </div>\n      </div>\n      <!-- </div> -->\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"dptModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <!--  modal-sm -->\n    <div class=\"modal-content\">\n      <div class=\"modal-header justify-content-center\">\n        <div class=\"row\">\n          <ng-template #showPrompt>\n            <div class=\"col-md-8 ml-auto mr-auto\">\n              <p>Select the Department to reallocate</p>\n            </div>\n          </ng-template>\n        </div>\n        <ng-container *ngIf=\"showDpt; else showPrompt\">\n          <p>You want to add the Task to <b>{{ selectedDepartment.name }}</b> department ?</p>\n        </ng-container>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"table-responsive pro_info\">\n          <table class=\"table\">\n            <thead class=\"\">\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let department of companyDpts | async\">\n                <td>{{ department.name }}</td>\n                <td class=\"justify-content-center\">\n                  <button class=\"warning btn-link\" rel=\"tooltip\" title=\"Company\" (click)=\"showDptName(); selectDpt(department)\">select</button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"left-side\">\n          <button type=\"button\" class=\"btn btn-link btn-link\" data-dismiss=\"modal\" aria-hidden=\"true\">Close</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n          <button type=\"button\" class=\"btn btn-link btn-link\" (click)=\"add2Dpartment()\" data-dismiss=\"modal\">\n            Confirm</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"newAction\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"card-body \">\n        <div class=\"card-header text-center\">\n          <p class=\"col-md-8 ml-auto mr-auto col-form-label na-an info\" style=\"color:steelblue\">\n            <font size=4>New Activity for <br>{{ selectedTask.name }} task</font>\n          </p>\n        </div>\n        <hr>\n        <!-- <a> Selected Unit: <span></span><small> {{ setSui.id }}</small></a><br> -->\n        <form class=\"form-horizontal\">\n          <div class=\"row\">\n            <label class=\"col-md-4 col-form-label\">Activity Name</label>\n            <div class=\"col-md-7\">\n              <div class=\"form-group\">\n                <input type=\"text\" [(ngModel)]=\"actionItem.name\" name=\"taskName\" class=\"form-control\" placeholder=\"Task Activity name\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-md-4 col-form-label\">Unit measure</label>\n            <div class=\"col-md-7 col-lg-6 col-sm-5\">\n              <div class=\"form-group\">\n                <ng-select [items]=\"SIunits\" bindLabel=\"name\" name=\"jyu\" placeholder=\"Select unit of Measure\"\n                  [(ngModel)]=\"setSui\">\n                </ng-select>\n              </div>\n            </div>\n          </div>\n          <!-- <div class=\"row\">\n            <label class=\"col-md-4 col-form-label\">Start Date</label>\n            <div class=\"col-md-7\">\n              <div class=\"form-group\">\n                <input type=\"date\" [(ngModel)]=\"actionItem.startDate\" name=\"siu\" class=\"form-control\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-md-4 col-form-label\">End Date</label>\n            <div class=\"col-md-7\">\n              <div class=\"form-group\">\n                <input type=\"date\" [(ngModel)]=\"actionItem.endDate\" name=\"siu\" class=\"form-control\">\n              </div>\n            </div>\n          </div> -->\n        </form>\n\n        <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n          <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"newAction(actionItem)\" data-dismiss=\"modal\"\n              title=\"save activity\">Enter</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"editNewAction\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"card-body \">\n        <div class=\"card-header text-center\">\n          <p class=\"col-md-8 ml-auto mr-auto col-form-label info\" style=\"color:steelblue\">\n            <font size=4>Edit Task Activity<br> \"{{ selectedAction.name }}\"</font>\n          </p>\n        </div>\n        <hr>\n        <!-- <form class=\"form-horizontal\"> -->\n        <div class=\"row\">\n          <label class=\"col-md-4 col-form-label\">Task Activity</label>\n          <div class=\"col-md-7\">\n            <div class=\"form-group\">\n              <input type=\"text\" [(ngModel)]=\"selectedAction.name\" name=\"actName\" class=\"form-control\">\n            </div>\n          </div>\n        </div>\n  \n        <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n          <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"editActivity()\"\n              data-dismiss=\"modal\" title=\"save activity\">Enter</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"newActionToday\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"card-body \">\n        <div class=\"card-header text-center\">\n          <p class=\"col-md-10 ml-auto mr-auto title na-an info\" style=\"color:steelblue\">\n            <font size=4>New Task Activity for {{ selectedTask.name }} task</font>\n          </p>\n        </div>\n        <hr>\n        <!-- <a> Selected Unit: <span></span><small> {{ setSui.id }}</small></a><br> -->\n        <form class=\"form-horizontal\">\n          <div class=\"row\">\n            <label class=\"col-md-4 col-form-label\">Activity Name</label>\n            <div class=\"col-md-7\">\n              <div class=\"form-group\">\n                <input type=\"text\" [(ngModel)]=\"actionItem.name\" name=\"taskName\" class=\"form-control\" placeholder=\"Activity name\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-md-4 col-form-label\">Unit measure</label>\n            <div class=\"col-md-7 col-lg-6 col-sm-5\">\n              <div class=\"form-group\">\n                <ng-select [items]=\"SIunits\" bindLabel=\"name\" name=\"jyu\" placeholder=\"Select unit of Measure\"\n                  [(ngModel)]=\"setSui\">\n                </ng-select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-md-4 col-form-label\">Department</label>\n            <div class=\"col-md-7 col-lg-6 col-sm-5\">\n              <div class=\"form-group\">\n                <ng-select placeholder=\"Select department\" [(ngModel)]=\"dp\" name=\"actionDpt\" (change)=\"showDpTasks(dp)\">\n                  <ng-option *ngFor=\"let department of departments3 | async\" [value]=\"department.id\">\n                    {{ department.name }}</ng-option>\n                </ng-select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-md-4 col-form-label\">Task</label>\n            <div class=\"col-md-7 col-lg-6 col-sm-5\">\n              <div class=\"form-group\">\n                <ng-select placeholder=\"Select Task\" [(ngModel)]=\"taskId\" name=\"actionTask\">\n                  <ng-option *ngFor=\"let tas of dptTasks | async\" [value]=\"tas.id\">\n                    {{ tas.name }}</ng-option>\n                </ng-select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-md-4 col-form-label\">Staff</label>\n            <div class=\"col-md-7 col-lg-6 col-sm-5\">\n              <div class=\"form-group\">\n                <ng-select placeholder=\"Select staff\" [(ngModel)]=\"selectedStaffId\" name=\"actionStaffSelect\">\n                  <!-- (change)=\"saveUserId(selectedStaffId)\"  (change)=\"showUserTasks(staffId)\" -->\n                  <ng-option *ngFor=\"let user of dptStaff | async\" [value]=\"user.id\">{{ user.name }}</ng-option>\n                </ng-select>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-md-4 col-form-label\">Start Date</label>\n            <div class=\"col-md-7\">\n              <div class=\"form-group\">\n                <input type=\"time\" [(ngModel)]=\"actionItem.start\" name=\"siu\" class=\"form-control\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-md-4 col-form-label\">End Date</label>\n            <div class=\"col-md-7\">\n              <div class=\"form-group\">\n                <input type=\"time\" [(ngModel)]=\"actionItem.end\" name=\"siu\" class=\"form-control\">\n              </div>\n            </div>\n          </div>\n        </form>\n        <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n          <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"newActionToday(actionItem)\" data-dismiss=\"modal\"\n              title=\"save activity\">Enter</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"addStaffdpt\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header justify-content-center\">\n        <div class=\"row\">\n          <ng-template #showPrompt>\n            <div class=\"col-md-8 ml-auto mr-auto\">\n              <p>Select the department</p>\n            </div>\n          </ng-template>\n        </div>\n        <ng-container *ngIf=\"showDpt; else showPrompt\">\n          <p>You want to add {{ companystaff.name }} to <b>{{ selectedDepartment.name }}</b> department ?</p>\n        </ng-container>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"table-responsive pro_info\">\n          <table class=\"table\">\n            <thead class=\"\">\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let department of departments3 | async\">\n                <td>{{ department.name }}</td>\n                <td class=\"justify-content-center\">\n                  <button class=\"warning btn-link\" rel=\"tooltip\" title=\"Company\" (click)=\"showDptName(); selectDpt(department)\">select</button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"left-side\">\n          <button type=\"button\" class=\"btn btn-link btn-link\" data-dismiss=\"modal\" aria-hidden=\"true\">Close</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n          <button type=\"button\" class=\"btn btn-link btn-link\" (click)=\"addStaff2Dpartment()\" data-dismiss=\"modal\">\n            Confirm</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"companyPicker\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n\n  <div class=\"modal-dialog\">\n    <!--  modal-sm -->\n    <div class=\"modal-content\">\n      <div class=\"modal-header justify-content-center\">\n        <div class=\"row\">\n          <ng-template #promptClient>\n            <div class=\"col-md-8 ml-auto mr-auto\">\n              <p class=\"title na-p\">Select Company</p>\n            </div>\n          </ng-template>\n        </div>\n        <ng-container *ngIf=\"showClient; else promptClient\">\n          <h4 class=\"title na-p\">Adding <b>{{ selectedClient.name }}</b> to Company`s Clients?</h4>\n        </ng-container>\n      </div>\n      <div class=\"modal-body\">\n\n        <ul>\n          <li *ngFor=\"let company of companies | async\">\n            <div class=\"row\">\n              <span class=\"col-md-6 text-left\">{{ company.name }}</span>\n              <span class=\"col-md-6\"><a class=\"text-success\" style=\"cursor: context-menu\" (click)=\"setClient(company)\">select</a></span>\n            </div>\n          </li>\n        </ul>\n\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"left-side\">\n          <button type=\"button\" class=\"btn btn-link btn-link\" data-dismiss=\"modal\" aria-hidden=\"true\">Close</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n          <button type=\"button\" class=\"btn btn-link btn-link\" (click)=\"addClient()\" data-dismiss=\"modal\">\n            Confirm</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"editAction\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"card-body \">\n        <div class=\"card-header text-center\">\n          <p class=\"col-md-8 ml-auto mr-auto col-form-label info\" style=\"color:steelblue\">\n            <font size=4>Edit Task Activity<br> \"{{ selectedAction.name }}\"</font>\n          </p>\n        </div>\n        <hr>\n        <!-- <form class=\"form-horizontal\"> -->\n          \n          <div class=\"row\">\n            <label class=\"col-md-4 col-form-label\">Start Date</label>\n            <div class=\"col-md-7\">\n              <div class=\"form-group\">\n                <input type=\"date\" [(ngModel)]=\"startDate\" name=\"siu\" class=\"form-control\">\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <label class=\"col-md-4 col-form-label\">End Date</label>\n            <div class=\"col-md-7\">\n              <div class=\"form-group\">\n                <input type=\"date\" [(ngModel)]=\"endDate\" name=\"siu\" class=\"form-control\">\n              </div>\n            </div>\n          </div>\n        <!-- </form> -->\n\n        <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n          <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"editAction(startDate,endDate)\" data-dismiss=\"modal\"\n              title=\"save activity\">Enter</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade modal-primary\" id=\"confirmModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-sm\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header justify-content-center text-info\">\n        <div class=\"modal-profile ml-auto mr-auto\">\n          <i class=\"nc-icon nc-bulb-63\"></i>\n        </div>\n        <div class=\"modal-body\">\n          <p class=\"text-info\"><span class=\"title clrs-h4-font\">{{ joinmyProject.name }} project</span></p>\n        </div>\n      </div>\n      <div class=\"modal-body text-center\">\n        <p>Press confirm to Join the project</p>\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"left-side\">\n          <button type=\"button\" class=\"btn btn-link btn-link\" data-dismiss=\"modal\">Back</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n          <button type=\"button\" class=\"btn btn-link btn-link\" data-dismiss=\"modal\" (click)=\"joinProject()\">Confirm</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"editStaffdata\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-notice modal-lg\">\n    <div *ngIf=\"pgOne\" class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title clrs-h1-font\" id=\"myModalLabel\">{{ (company)?.name }} staff</h5>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"instruction\">\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <span class=\"row col-md-12\">\n                <span class=\"col-sm-2\" style=\"padding-left: 0px; padding-right: 0px;\">Full name </span>\n                <span class=\"col-sm-9\">\n                  <span class=\"col-sm-9 card-category\" style=\"color:black\">: {{ (setCompStaff)?.name }} </span>\n                </span>\n              </span><br>\n              <span class=\"row col-md-12\">\n                <span class=\"col-sm-2\" style=\"padding-left: 0px; padding-right: 0px;\">Department </span>\n                <span class=\"col-sm-9\">\n                  <span class=\"col-sm-9 card-category\" style=\"color:black\">: {{ (setCompStaff)?.department }} </span>\n                </span>\n              </span><br>\n              <span class=\"row col-md-12\">\n                <span class=\"col-sm-2\" style=\"padding-left: 0px; padding-right: 0px;\">Bus email </span>\n                <span class=\"col-sm-9\">\n                  <span class=\"col-sm-9\">: {{ (setCompStaff)?.bus_email }} </span>\n                </span>\n              </span><br>\n              <span class=\"row col-md-12\">\n                <span class=\"col-sm-2\" style=\"padding-left: 0px; padding-right: 0px;\">Hierarchy </span>\n                <span class=\"col-sm-9\">\n                  <span class=\"col-sm-9\">: {{ (setCompStaff)?.hierarchy }} </span>\n                </span>\n              </span><br>\n              <span class=\"row col-md-12\">\n                <span class=\"col-sm-2\" style=\"padding-left: 0px; padding-right: 0px;\">Address </span>\n                <span class=\"col-sm-9\">\n                  <span class=\"col-sm-9\">: {{ (setCompStaff)?.address }} </span>\n                </span>\n              </span><br>\n              <span class=\"row col-md-12\">\n                <span class=\"col-sm-2\" style=\"padding-left: 0px; padding-right: 0px;\">Country </span>\n                <span class=\"col-sm-9\">\n                  <span class=\"col-sm-9\">: {{ (setCompStaff)?.nationality }} </span>\n                </span>\n              </span><br>\n              <span class=\"row col-md-12\">\n                <span class=\"col-sm-2\" style=\"padding-left: 0px; padding-right: 0px;\">NationalId </span>\n                <span class=\"col-sm-9\">\n                  <span class=\"col-sm-9\">: {{ (setCompStaff)?.nationalId }} </span>\n                </span>\n              </span><br>\n              <span class=\"row col-md-12\">\n                <span class=\"col-sm-2\" style=\"padding-left: 0px; padding-right: 0px;\">Contact </span>\n                <span class=\"col-sm-9\">\n                  <span class=\"col-sm-9\">: {{ (setCompStaff)?.phoneNumber }} </span>\n                </span>\n              </span><br>\n            </div><br>\n            <div class=\"col-md-4\">\n              <div class=\"picture\">\n                <img *ngIf=\"setCompStaff.photoURL ; else showAvatar\" src=\"{{ setCompStaff.photoURL }}\"\n                  class=\"rounded img-raised\">\n                <ng-template #showAvatar>\n                  <img src=\"./assets/img/faces/default-avatar.png\" class=\"rounded img-raised\">\n                </ng-template>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer justify-content-center\">\n        <button (click)=\"pageNext()\" type=\"button\" class=\"btn btn-success btn-round\" data-dismiss=\"modal\">Edit</button>\n        <button type=\"button\" class=\"btn btn-warning btn-round\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n    <div *ngIf=\"pgTwo\" class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title clrs-h1-font\" id=\"myModalLabel\">Edit Your Profile</h5>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"instruction\">\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <span class=\"row col-md-12\">\n                <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Full name </span>\n                <span class=\"col-sm-9\">\n                  <input type=\"text\" class=\"form-control col-sm-9\" name=\"userFullname\" [(ngModel)]=\"setCompStaff.name\" required\n                    (focus)=\"focus1=true\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" (blur)=\"focus1=false\">\n                </span>\n              </span><br>\n              <!-- <span class=\"row col-md-12\">\n                <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Department </span>\n                <span class=\"col-sm-9\">\n                  <-- <ng-select [items]=\"departments4 | async\" bindLabel=\"name\" name=\"userDptList\" placeholder=\"Select Period\" [(ngModel)]=\"staffDepartment\"></ng-select>  ->\n                  <ng-select [items]=\"departments4 | async\" bindLabel=\"name\" name=\"userDptList\" placeholder=\"Select Period\"  [(ngModel)]=\"setCompStaff.department\"></ng-select>                  \n                </span>\n              </span><br> -->\n              <span class=\"row col-md-12\">\n                <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Bus email </span>\n                <span class=\"col-sm-9\">\n                  <input type=\"text\" class=\"form-control col-sm-9\" name=\"userBus_email\" [(ngModel)]=\"setCompStaff.bus_email\" required\n                    (focus)=\"focus1=true\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" (blur)=\"focus1=false\">\n                </span>\n              </span><br>\n              <span class=\"row col-md-12\">\n                <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Hierarchy </span>\n                <span class=\"col-sm-9\">\n                  <ng-select [items]=\"hierarchies\" bindLabel=\"name\" name=\"userHierarchyList\" placeholder=\"Select Hierarchy\" [(ngModel)]=\"setCompStaff.hierarchy\"></ng-select>\n                </span>\n              </span><br>\n              <span class=\"row col-md-12\">\n                <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Address </span>\n                <span class=\"col-sm-9\">\n                  <input type=\"text\" class=\"form-control col-sm-9\" name=\"userAddress\" [(ngModel)]=\"setCompStaff.address\" required\n                    (focus)=\"focus1=true\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" (blur)=\"focus1=false\">\n                </span>\n              </span><br>\n              <span class=\"row col-md-12\">\n                <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Country </span>\n                <span class=\"col-sm-9\">\n                  <input type=\"text\" class=\"form-control col-sm-9\" name=\"userCountry\" [(ngModel)]=\"setCompStaff.nationality\" required\n                    (focus)=\"focus1=true\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" (blur)=\"focus1=false\">\n                </span>\n              </span><br><span class=\"row col-md-12\">\n                <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">National Id </span>\n                <span class=\"col-sm-9\">\n                  <input type=\"text\" class=\"form-control col-sm-9\" name=\"userCountry\" [(ngModel)]=\"setCompStaff.nationalId\" required\n                    (focus)=\"focus1=true\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" (blur)=\"focus1=false\">\n                </span>\n              </span><br>\n              <span class=\"row col-md-12\">\n                <span class=\"col-sm-3\" style=\"padding-left: 0px; padding-right: 0px;\">Contact </span>\n                <span class=\"col-sm-9\">\n                  <input type=\"text\" class=\"form-control col-sm-9\" name=\"userCountry\" [(ngModel)]=\"setCompStaff.phoneNumber\" required\n                    (focus)=\"focus1=true\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" (blur)=\"focus1=false\">\n                </span>\n              </span><br>\n            </div><br>\n            <div class=\"col-md-4\">\n              <div class=\"picture\">\n                <img *ngIf=\"setCompStaff.photoURL ; else showAvatar\" src=\"{{ setCompStaff.photoURL }}\"\n                  class=\"rounded img-raised\">\n                <ng-template #showAvatar>\n                  <img src=\"./assets/img/faces/default-avatar.png\" class=\"rounded img-raised\">\n                </ng-template>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer justify-content-center\">\n        <button (click)=\"pageBack()\" type=\"button\" class=\"btn btn-info btn-round\" data-dismiss=\"modal\">Close</button>\n        <button (click)=\"saveStaffData(setCompStaff)\" type=\"button\" class=\"btn btn-success btn-round\">Save</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"modal fade\" id=\"taskErase\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-notice\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">\n          <i class=\"nc-icon nc-simple-remove\"></i>\n        </button>\n        <h5 class=\"modal-title\" id=\"myModalLabel\">{{ tss.name }}</h5>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"instruction\">\n          <div class=\"row\">\n            <div class=\"col-md-10 text-center\">\n              <strong>Are you sure you this Task</strong>\n            </div>\n          </div>\n          <br>\n          <p>If you sure, Click Delete to complete</p>\n        </div>\n        <div class=\"modal-footer justify-content-center\">\n          <button type=\"button\" class=\"btn btn-info btn-round\" (click)=\"deleteTask()\"\n            data-dismiss=\"modal\">Delete</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"taskInfo\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-notice\">\n    <!-- <div class=\"modal-dialog\"> -->\n      <div class=\"modal-content\">\n        <div class=\"card-body \">\n          <div class=\"card-header text-center\">\n            <p class=\"col-md-8 ml-auto mr-auto col-form-label info\">\n              <font size=4>Edit Task</font>\n            </p>\n          </div>\n          <hr>\n          <!-- <form class=\"form-horizontal\"> -->\n            <div class=\"row\">\n              <label class=\"col-md-3 col-form-label\">Task name</label>\n              <div class=\"col-md-8\">\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"tss.name\" name=\"updateTaskName\" class=\"form-control\" placeholder=\"Task name\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-md-3 col-form-label\">Start Date</label>\n              <div class=\"col-md-8\">\n                <div class=\"form-group\">\n                  <input type=\"date\" [(ngModel)]=\"tss.start\" name=\"updateTstart\" class=\"form-control\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-md-3 col-form-label\">Finish Date</label>\n              <div class=\"col-md-8\">\n                <div class=\"form-group\">\n                  <input type=\"date\" [(ngModel)]=\"tss.finish\" name=\"updateTfinish\" class=\"form-control\">\n                </div>\n              </div>\n            </div>\n          <!-- </form> -->\n          <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n            <div class=\"left-side\">\n              <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n            </div>\n            <div class=\"divider\"></div>\n            <div class=\"right-side\">\n              <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"testNewTask()\" data-dismiss=\"modal\"\n                title=\"save task\">Save</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    <!-- </div> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/company/enterprise-profile/enterprise-profile.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/company/enterprise-profile/enterprise-profile.component.ts ***!
  \****************************************************************************/
/*! exports provided: EnterpriseProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseProfileComponent", function() { return EnterpriseProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _services_enterprise_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/enterprise.service */ "./src/app/services/enterprise.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var app_services_task_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var app_services_personal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/services/personal.service */ "./src/app/services/personal.service.ts");
/* harmony import */ var app_services_initialise_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/services/initialise.service */ "./src/app/services/initialise.service.ts");
/* harmony import */ var app_services_project_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var app_services_reports_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/services/reports.service */ "./src/app/services/reports.service.ts");
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







;






// import firebase = require('firebase');
var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var EnterpriseProfileComponent = /** @class */ (function () {
    /*   end */
    function EnterpriseProfileComponent(afAuth, rp, ts, is, ps, pns, es, afs, location, renderer, element, router, as) {
        this.afAuth = afAuth;
        this.rp = rp;
        this.ts = ts;
        this.is = is;
        this.ps = ps;
        this.pns = pns;
        this.es = es;
        this.afs = afs;
        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.as = as;
        // cities: CityData[];
        this.show = false;
        this.showEnterprise = false;
        this.buttonName = 'Show';
        this.btnName = 'Show';
        this.pgOne = true;
        this.pgTwo = false;
        this.pgThree = false;
        this.btnTable = 'Show';
        this.showUserTable = false;
        this.btnDptTable = 'Show';
        this.showDptUserTable = false;
        this.showChamp = true;
        this.btnChamp = 'Show';
        this.showDptChamp = true;
        this.btnDptChamp = 'Show';
        this.showdept = true;
        this.btndept = 'Show';
        this.showDeptTable = false;
        this.btnDeptTable = 'Show';
        this.showdeptChamp = false;
        this.btndeptChamp = 'Show';
        this.showDeptPartTable = false;
        this.btnDeptPartTable = 'Show';
        this.showChampBtn = true;
        this.showProjectTable = false;
        this.btnProjTable = 'Show';
        this.showProj = true;
        this.btnProj = 'Show';
        this.showProjBtn = true;
        this.showCompanyTable = false;
        this.btnCompanyTable = 'Show';
        this.showCompany = true;
        this.btnCompany = 'Show';
        this.showDpt = false;
        this.demoNotes = true;
        this.btnDpt = 'ShowDpt';
        this.displayCompanyReport = false;
        this.displayReport = true;
        this.displayDptReport = true;
        this.displayUser = false;
        this.displayUserReport = true;
        this.displayProjReport = true;
        this.displayDept = false;
        this.displayDeptReport = true;
        this.setUserLongTermTAsks = [];
        this.setUserMediumTermTAsks = [];
        this.setUserShortTermTAsks = [];
        this.setUserOutstandingTasks = [];
        this.setUserCurrentTAsks = [];
        this.setUserUpcomingTAsks = [];
        this.setPojLongTermTAsks = [];
        this.setPojMediumTermTAsks = [];
        this.setPojShortTermTAsks = [];
        this.setPojOutstandingTasks = [];
        this.setPojCurrentTAsks = [];
        this.setPojUpcomingTAsks = [];
        this.setDeptLongTermTAsks = [];
        this.setDeptMediumTermTAsks = [];
        this.setDeptShortTermTAsks = [];
        this.setDeptOutstandingTasks = [];
        this.setDeptCurrentTAsks = [];
        this.setDeptUpcomingTAsks = [];
        this.tasksOutstanding = [];
        this.theTasks = [];
        this.CompanyTasks = [];
        this.OutstandingTasks = [];
        this.CurrentTAsks = [];
        this.UpcomingTAsks = [];
        this.ShortTermTAsks = [];
        this.MediumTermTAsks = [];
        this.LongTermTAsks = [];
        this.optionsChecked = [];
        this.selectedActionItems = [];
        this.selectedActionParticipants = [];
        this.companyActions = [];
        this.showClient = false;
        this.deptDemoNotes = true;
        this.displayProject = false;
        this.ProjectDemoNotes = true;
        this.outstandingDptTasks = [];
        this.outstandingProjectTasks = [];
        this.outstandingTasks = [];
        this.viewTodayWork = false;
        this.showProjs = false;
        this.hideProjs = false;
        this.selectedCity = { id: "", name: "" };
        // this.setSui = { id: "", name: "" };
        this.startDate = null;
        this.endDate = null;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        this.newPart = { name: "", id: "", email: "", bus_email: "", phoneNumber: "", photoURL: "", address: "", nationality: "", nationalId: "" };
        this.counter = 1;
        this.selectedTask = { name: "", champion: null, projectName: "", department: "", departmentId: "", start: "", startDay: "", startWeek: "", startMonth: "", startQuarter: "", startYear: "", finish: "", finishDay: "", finishWeek: "", finishMonth: "", finishQuarter: "", finishYear: "", by: "", createdOn: "", projectId: "", byId: "", projectType: "", companyName: "", companyId: "", trade: "", section: null, complete: null, id: "", participants: null, status: "", classification: null };
        this.actionItem = { uid: "", id: "", name: "", unit: "", quantity: 0, targetQty: 0, rate: 0, workHours: null, amount: 0, by: "", byId: "", type: "", champion: null, participants: null, classification: null, departmentName: "", departmentId: "", billID: "", billName: "", projectId: "", projectName: "", createdOn: "", UpdatedOn: "", actualData: null, workStatus: null, complete: false, start: null, end: null, startWeek: "", startDay: "", startDate: "", endDay: "", endDate: "", endWeek: "", taskName: "", taskId: "", companyId: "", companyName: "", classificationName: "", classificationId: "", selectedWork: false, section: this.is.getSectionInit(), actualStart: "", actualEnd: "", Hours: "" };
        this.dpt = { name: "", by: "", byId: "", companyName: "", companyId: "", createdOn: "", id: "", hod: null };
        this.asset = { name: "", assetNumber: "", by: "", byId: "", companyName: "", companyId: "", createdOn: "", cost: "" };
        this.client = is.getClient();
        this.subsidiary = is.getSubsidiary();
        this.task = { name: "", champion: null, projectName: "", department: "", departmentId: "", start: "", startDay: "", startWeek: "", startMonth: "", startQuarter: "", startYear: "", finish: "", finishDay: "", finishWeek: "", finishMonth: "", finishQuarter: "", finishYear: "", by: "", createdOn: "", projectId: "", byId: "", projectType: "", companyName: "", companyId: "", trade: "", section: null, complete: null, id: "", participants: null, status: "", classification: null };
        this.selectedProject = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", completion: "" };
        this.userChampion = { name: "", id: "", email: "", bus_email: "", phoneNumber: "", photoURL: "", nationalId: "", nationality: "", address: "", department: "", departmentId: "", hierarchy: "" };
        this.contactPerson = { name: "", id: "", email: "", bus_email: "", phoneNumber: "", photoURL: "", address: "", nationality: "", nationalId: "" };
        this.selectedCompany = is.getSelectedCompany();
        this.setCompStaff = { name: "", phoneNumber: "", by: "", byId: "", createdOn: "", email: "", bus_email: "", id: "", department: "", departmentId: "", photoURL: "", address: "", nationalId: "", nationality: "", hierarchy: "" };
        this.selectedStaff = { name: "", phoneNumber: "", by: "", byId: "", createdOn: "", email: "", bus_email: "", id: "", department: "", departmentId: "", photoURL: "", address: "", nationalId: "", nationality: "", hierarchy: "" };
        this.companystaff = { name: "", phoneNumber: "", by: "", byId: "", createdOn: "", email: "", bus_email: "", id: "", department: "", departmentId: "", photoURL: "", address: "", nationalId: "", nationality: "", hierarchy: "" };
        this.companystaff2 = { name: "", phoneNumber: "", by: "", byId: "", createdOn: "", email: "", bus_email: "", id: "", department: "", departmentId: "", photoURL: "", address: "", nationalId: "", nationality: "", hierarchy: "" };
        this.department = { name: "", by: "", byId: "", companyName: "", companyId: "", createdOn: "", id: "", hod: null };
        this.selectedDepartment = { name: "", by: "", byId: "", companyName: "", companyId: "", createdOn: "", id: "", hod: null };
        this.selectedAction = { uid: "", id: "", name: "", unit: "", by: "", byId: "", type: "", quantity: 0, targetQty: 0, rate: 0, workHours: null, amount: 0, champion: null, classification: null, participants: null, departmentName: "", departmentId: "", billID: "", billName: "", projectId: "", projectName: "", createdOn: "", UpdatedOn: "", actualData: null, workStatus: null, complete: false, start: null, end: null, startWeek: "", startDay: "", startDate: "", endDay: "", endDate: "", endWeek: "", taskName: "", taskId: "", companyId: "", companyName: "", classificationName: "", classificationId: "", selectedWork: false, section: this.is.getSectionInit(), actualStart: "", actualEnd: "", Hours: "" };
        this.editedAction = { uid: "", id: "", name: "", unit: "", by: "", byId: "", type: "", quantity: 0, targetQty: 0, rate: 0, workHours: null, amount: 0, champion: null, classification: null, participants: null, departmentName: "", departmentId: "", billID: "", billName: "", projectId: "", projectName: "", createdOn: "", UpdatedOn: "", actualData: null, workStatus: null, complete: false, start: null, end: null, startWeek: "", startDay: "", startDate: "", endDay: "", endDate: "", endWeek: "", taskName: "", taskId: "", companyId: "", companyName: "", classificationName: "", classificationId: "", selectedWork: false, section: this.is.getSectionInit(), actualStart: "", actualEnd: "", Hours: "" };
        this.setUser = { name: "", id: "", email: "", bus_email: "", phoneNumber: "", photoURL: "", address: "", nationality: "", nationalId: "" };
        this.joinmyProject = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", completion: "" };
        this.tss = { name: "", champion: null, projectName: "", department: "", departmentId: "", start: "", startDay: "", startWeek: "", startMonth: "", startQuarter: "", startYear: "", finish: "", finishDay: "", finishWeek: "", finishMonth: "", finishQuarter: "", finishYear: "", by: "", createdOn: "", projectId: "", byId: "", projectType: "", companyName: "", companyId: "", trade: "", section: null, complete: null, id: "", participants: null, status: "", classification: null };
        var mmm = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY");
        this.todayDate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY").format('dddd');
        console.log(this.todayDate);
        this.currentDay = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY").dayOfYear();
        this.currentDate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY");
        console.log(this.currentDate.format('L'));
        this.cities = [
            { id: 1, name: 'Vilnius' },
            { id: 2, name: 'Kaunas' },
            { id: 3, name: 'Pavilnys', disabled: true },
            { id: 4, name: 'Pabradė' },
            { id: 5, name: 'Klaipėda' }
        ];
        this.hierarchies = [
            'Executive',
            'Middle management',
            'Operations',
            'None'
        ];
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
        this.industrySectors = [
            { name: 'Accountants' },
            { name: 'Advertising/ Public Relations' },
            { name: 'Aerospace, Defense Contractors ' },
            { name: 'Agribusiness ' },
            { name: 'Agricultural Services & Products' },
            { name: 'Air Transport' },
            { name: 'Air Transport Unions' },
            { name: 'Airlines' },
            { name: 'Alcoholic Beverages' },
            { name: 'Alternative Energy Production & Services' },
            { name: 'Architectural Services' },
            { name: 'Attorneys / Law Firms' },
            { name: 'Auto Dealers' },
            { name: 'Auto Dealers, Japanese' },
            { name: ' Auto Manufacturers' },
            { name: 'Automotive' },
            { name: 'Abortion Policy / Anti - Abortion' },
            { name: 'Abortion Policy / Pro - Abortion Rights' },
            { name: 'Banking, Mortgage' },
            { name: 'Banks, Commercial' },
            { name: 'Banks, Savings & Loans' },
            { name: 'Bars & Restaurants' },
            { name: 'Beer, Wine & Liquor' },
            { name: 'Books, Magazines & Newspapers' },
            { name: ' Broadcasters, Radio / TV' },
            { name: 'Builders / General Contractors' },
            { name: 'Builders / Residential' },
            { name: 'Building Materials & Equipment' },
            { name: 'Building Trade Unions ' },
            { name: 'Business Associations' },
            { name: 'Business Services' },
            { name: 'Cable & Satellite TV Production & Distribution' },
            { name: 'Candidate Committees ' },
            { name: 'Candidate Committees, Democratic' },
            { name: 'Candidate Committees, Republican' },
            { name: 'Car Dealers' },
            { name: 'Car Dealers, Imports' },
            { name: 'Car Manufacturers' },
            { name: 'Casinos / Gambling' },
            { name: 'Cattle Ranchers / Livestock' },
            { name: 'Chemical & Related Manufacturing' },
            { name: 'Chiropractors' },
            { name: 'Civil Servants / Public Officials' },
            { name: 'Clergy & Religious Organizations ' },
            { name: 'Clothing Manufacturing' },
            { name: 'Coal Mining' },
            { name: 'Colleges, Universities & Schools' },
            { name: 'Commercial Banks' },
            { name: 'Commercial TV & Radio Stations' },
            { name: 'Communications / Electronics' },
            { name: 'Computer Software' },
            { name: 'Conservative / Republican' },
            { name: 'Construction' },
            { name: 'Construction Services' },
            { name: 'Construction Unions' },
            { name: 'Credit Unions' },
            { name: 'Crop Production & Basic Processing' },
            { name: 'Cruise Lines' },
            { name: 'Cruise Ships & Lines' },
            { name: 'Dairy' },
            { name: 'Defense' },
            { name: 'Defense Aerospace' },
            { name: 'Defense Electronics' },
            { name: 'Defense / Foreign Policy Advocates' },
            { name: 'Democratic Candidate Committees ' },
            { name: 'Democratic Leadership PACs' },
            { name: ' Democratic / Liberal ' },
            { name: ' Dentists' },
            { name: ' Doctors & Other Health Professionals' },
            { name: ' Drug Manufacturers' },
            { name: 'Education ' },
            { name: 'Electric Utilities' },
            { name: 'Electronics Manufacturing & Equipment' },
            { name: 'Electronics, Defense Contractors' },
            { name: 'Energy & Natural Resources' },
            { name: 'Entertainment Industry' },
            { name: 'Environment ' },
            { name: 'Farm Bureaus' },
            { name: 'Farming' },
            { name: 'Finance / Credit Companies' },
            { name: 'Finance, Insurance & Real Estate' },
            { name: 'Food & Beverage' },
            { name: 'Food Processing & Sales' },
            { name: 'Food Products Manufacturing' },
            { name: 'Food Stores' },
            { name: 'For - profit Education' },
            { name: 'For - profit Prisons' },
            { name: 'Foreign & Defense Policy ' },
            { name: 'Forestry & Forest Products' },
            { name: 'Foundations, Philanthropists & Non - Profits' },
            { name: 'Funeral Services' },
            { name: 'Gambling & Casinos' },
            { name: 'Gambling, Indian Casinos' },
            { name: 'Garbage Collection / Waste Management' },
            { name: 'Gas & Oil' },
            { name: 'Gay & Lesbian Rights & Issues' },
            { name: 'General Contractors' },
            { name: 'Government Employee Unions' },
            { name: 'Government Employees' },
            { name: 'Gun Control ' },
            { name: 'Gun Rights ' },
            { name: 'Health' },
            { name: 'Health Professionals' },
            { name: 'Health Services / HMOs' },
            { name: 'Hedge Funds' },
            { name: 'HMOs & Health Care Services' },
            { name: 'Home Builders' },
            { name: 'Hospitals & Nursing Homes' },
            { name: 'Hotels, Motels & Tourism' },
            { name: 'Human Rights ' },
            { name: 'Ideological / Single - Issue' },
            { name: 'Indian Gaming' },
            { name: 'Industrial Unions' },
            { name: 'Insurance' },
            { name: 'Internet' },
            { name: 'Israel Policy' },
            { name: 'Labor' },
            { name: 'Lawyers & Lobbyists' },
            { name: 'Lawyers / Law Firms' },
            { name: 'Leadership PACs ' },
            { name: 'Liberal / Democratic' },
            { name: 'Liquor, Wine & Beer' },
            { name: 'Livestock' },
            { name: 'Lobbyists' },
            { name: 'Lodging / Tourism' },
            { name: 'Logging, Timber & Paper Mills' },
            { name: 'Manufacturing, Misc' },
            { name: 'Marine Transport' },
            { name: 'Meat processing & products' },
            { name: 'Medical Supplies' },
            { name: 'Mining' },
            { name: 'Misc Business' },
            { name: 'Misc Finance' },
            { name: 'Misc Manufacturing & Distributing ' },
            { name: 'Misc Unions ' },
            { name: 'Miscellaneous Defense' },
            { name: 'Miscellaneous Services' },
            { name: 'Mortgage Bankers & Brokers' },
            { name: 'Motion Picture Production & Distribution' },
            { name: 'Music Production' },
            { name: 'Natural Gas Pipelines' },
            { name: 'Newspaper, Magazine & Book Publishing' },
            { name: 'Non - profits, Foundations & Philanthropists' },
            { name: 'Nurses' },
            { name: 'Nursing Homes / Hospitals' },
            { name: 'Nutritional & Dietary Supplements' },
            { name: 'Oil & Gas' },
            { name: 'Other' },
            { name: 'Payday Lenders' },
            { name: 'Pharmaceutical Manufacturing' },
            { name: 'Pharmaceuticals / Health Products' },
            { name: 'Phone Companies' },
            { name: 'Physicians & Other Health Professionals' },
            { name: 'Postal Unions' },
            { name: 'Poultry & Eggs' },
            { name: 'Power Utilities' },
            { name: 'Printing & Publishing' },
            { name: 'Private Equity & Investment Firms' },
            { name: 'Pro - Israel ' },
            { name: 'Professional Sports, Sports Arenas & Related Equipment & Services' },
            { name: 'Progressive / Democratic' },
            { name: 'Public Employees' },
            { name: 'Public Sector Unions ' },
            { name: 'Publishing & Printing' },
            { name: 'Radio / TV Stations' },
            { name: 'Railroads' },
            { name: 'Real Estate' },
            { name: 'Record Companies / Singers' },
            { name: 'Recorded Music & Music Production' },
            { name: 'Recreation / Live Entertainment' },
            { name: 'Religious Organizations / Clergy' },
            { name: 'Republican Candidate Committees ' },
            { name: 'Republican Leadership PACs' },
            { name: 'Republican / Conservative ' },
            { name: 'Residential Construction' },
            { name: 'Restaurants & Drinking Establishments' },
            { name: 'Retail Sales' },
            { name: 'Retired ' },
            { name: 'Savings & Loans' },
            { name: 'Schools / Education' },
            { name: 'Sea Transport' },
            { name: 'Securities & Investment' },
            { name: 'Special Trade Contractors' },
            { name: 'Sports, Professional' },
            { name: 'Steel Production ' },
            { name: 'Stock Brokers / Investment Industry' },
            { name: 'Student Loan Companies' },
            { name: 'Sugar Cane & Sugar Beets' },
            { name: 'Teachers Unions' },
            { name: 'Teachers / Education' },
            { name: 'Telecom Services & Equipment' },
            { name: 'Telephone Utilities' },
            { name: 'Textiles ' },
            { name: 'Timber, Logging & Paper Mills' },
            { name: 'Tobacco' },
            { name: 'Transportation' },
            { name: 'Transportation Unions ' },
            { name: 'Trash Collection / Waste Management' },
            { name: 'Trucking' },
            { name: 'TV / Movies / Music' },
            { name: 'TV Production' },
            { name: 'Unions' },
            { name: 'Unions, Airline' },
            { name: 'Unions, Building Trades' },
            { name: 'Unions, Industrial' },
            { name: 'Unions, Misc' },
            { name: 'Unions, Public Sector' },
            { name: 'Unions, Teacher' },
            { name: 'Unions, Transportation' },
            { name: 'Universities, Colleges & Schools' },
            { name: 'Vegetables & Fruits' },
            { name: 'Venture Capital' },
            { name: 'Waste Management' },
            { name: 'Wine, Beer & Liquor' },
            { name: 'Womens Issues' },
        ];
        // this.myMail = CreateObject("CDO.Message")
        // this.myMail.Subject = "Sending email with CDO";
        // this.myMail.From = "mymail@mydomain.com";
        // this.myMail.To = "someone@somedomain.com";
        // this.myMail.HTMLBody = '<div class="row logo">' +
        //                           '< a href = "#" class="card-category logo-mini" style = "margin-left: 23px;" >'+
        //                             '<div class="logo-image-small" style = "margin-top: 16px;" > '+
        //                               '<img src="./assets/img/Colourslogo2.png" />'+
        //                             '</div>'
        //                           '</a>'
        //                           '<div class="info" >'
        //                             '<span class="sidebar-mini-icon" > </span>'
        //                             '< span class="sidebar-normal" >'
        //                               '<a class="collapsed logo-normal card-category clrs-logo" style = "color:snow" > Colours < /a><!-- title --></span >'
        //                           '</div>'
        //                         '</div>';
        // this.myMail.Send
        // this.set myMail = nothing
        // this.testDay = moment(new Date().toISOString(), "DD-MM-YYYY").dayOfYear();
        console.log(moment__WEBPACK_IMPORTED_MODULE_7__().add(2, 'Q').toString());
        console.log(moment__WEBPACK_IMPORTED_MODULE_7__().add(4, 'M').toString());
        console.log(moment__WEBPACK_IMPORTED_MODULE_7__().add(4, 'M').get('M').toString());
        var ddref = moment__WEBPACK_IMPORTED_MODULE_7__().add(4, 'M');
        console.log(ddref.get('M'));
        console.log(moment__WEBPACK_IMPORTED_MODULE_7__(18 - 10 - 2018, "DD-MM-YYYY").dayOfYear().toString());
        this.currentMonth = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY").month().toString();
        this.currentYear = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY").year().toString();
        this.currentQuarter = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY").quarter().toString();
        this.currentWeek = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY");
        /* moment().dayOfYear();  moment.locale()*/
        console.log(moment__WEBPACK_IMPORTED_MODULE_7__(this.currentWeek).week());
        console.log(moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY").month);
        console.log(this.today);
        // let dayNo = moment(this.currentWeek, 'DD-MM-YYYY');
        var dayNo = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY");
        console.log(dayNo);
        console.log(dayNo.dayOfYear());
        console.log(moment__WEBPACK_IMPORTED_MODULE_7__().format('MMMM'));
        console.log("Week" + " " + moment__WEBPACK_IMPORTED_MODULE_7__().week() + " " + "of the year" + " " + moment__WEBPACK_IMPORTED_MODULE_7__().year());
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
    }
    EnterpriseProfileComponent.prototype.addtime = function (number, timeArg) {
        console.log(number + timeArg);
        this.todayDate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "DD-MM-YYYY").add(number, timeArg).format('dddd');
        console.log(this.todayDate);
    };
    EnterpriseProfileComponent.prototype.reportBack = function () {
        this.displayReport = true;
        this.displayUser = false;
        this.displayDept = false;
        this.displayProject = false;
    };
    EnterpriseProfileComponent.prototype.back2Users = function () {
        this.displayUserReport = true;
        this.displayUser = false;
    };
    EnterpriseProfileComponent.prototype.back2Dept = function () {
        this.displayDept = false;
        this.displayDeptReport = true;
    };
    EnterpriseProfileComponent.prototype.back2Proj = function () {
        this.displayProject = false;
        this.displayProjReport = true;
    };
    EnterpriseProfileComponent.prototype.printReport = function () {
        window.print();
    };
    EnterpriseProfileComponent.prototype.minimizeSidebar = function () {
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
    EnterpriseProfileComponent.prototype.viewReport = function (man) {
        var _this = this;
        this.outstandingTasks = [];
        this.setUserCurrentTAsks = [];
        this.setUserOutstandingTasks = [];
        this.setUserUpcomingTAsks = [];
        this.setUserShortTermTAsks = [];
        this.setUserMediumTermTAsks = [];
        this.setUserLongTermTAsks = [];
        var today = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "YYYY-MM-DD");
        console.log(man);
        this.setUser = man;
        // this.demoNotes = false;
        this.displayUser = true;
        this.displayUserReport = false;
        // this.displayReport = false
        // this.allMyTasks = this.afs.collection('Users').doc(this.userId).collection('myenterprises').doc(this.compId).collection('tasks'
        this.allMyTasks = this.afs.collection('Enterprises').doc(this.compId).collection('Participants').doc(man.id).collection('tasks', function (ref) { return ref; }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.allMyTasks.subscribe(function (ptasks) {
            ptasks.forEach(function (element) {
                var data = element;
                if (moment__WEBPACK_IMPORTED_MODULE_7__(element.finish).isBefore(today)) {
                    _this.outstandingTasks.push(element);
                }
                ;
                // let today = moment(new Date(), "YYYY-MM-DD");
                if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isSameOrBefore(today) && moment__WEBPACK_IMPORTED_MODULE_7__(data.finish).isSameOrAfter(today)) {
                    _this.setUserCurrentTAsks.push(data);
                }
                ;
                // outstanding tasks
                if (moment__WEBPACK_IMPORTED_MODULE_7__(data.finish).isBefore(today)) {
                    _this.setUserOutstandingTasks.push(data);
                }
                ;
                // Upcoming tasks
                if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isAfter(today)) {
                    _this.setUserUpcomingTAsks.push(data);
                    if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isSameOrBefore(today.add(3, "month"))) {
                        _this.setUserShortTermTAsks.push(data);
                    }
                    else if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isSameOrBefore(today.add(12, "month"))) {
                        _this.setUserMediumTermTAsks.push(data);
                    }
                    else if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isBefore(today.add(12, "month"))) {
                        _this.setUserLongTermTAsks.push(data);
                        console.log('long term Tasks' + ' ' + _this.setUserLongTermTAsks);
                    }
                    // console.log(this.OutstandingTasks);
                }
                ;
            });
        });
        /* departmentId */
        // this.myCompletetasks = this.afs.collection('Users').doc(this.userId).collection('myenterprises').doc(this.compId).collection('tasks', ref => ref
        // this.myCompletetasks = this.afs.collection('Users').doc(this.userId).collection('myenterprises').doc(this.compId).collection('tasks', ref => ref
        // this.myCompletetasks = this.afs.collection('Enterprises').doc(this.compId).collection('departments').doc(man.departmentId).collection('Participants').doc(man.id)
        this.myCompletetasks = this.afs.collection('Enterprises').doc(this.compId).collection('Participants').doc(man.id).collection('tasks', function (ref) { return ref
            .where('complete', '==', true); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    };
    EnterpriseProfileComponent.prototype.viewProjectReport = function (proj) {
        var _this = this;
        this.outstandingProjectTasks = [];
        this.setPojLongTermTAsks = [];
        this.setPojMediumTermTAsks = [];
        this.setPojShortTermTAsks = [];
        this.setPojOutstandingTasks = [];
        this.setPojCurrentTAsks = [];
        this.setPojUpcomingTAsks = [];
        var today = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "YYYY-MM-DD");
        console.log(proj);
        this.projectSet = proj;
        // this.ProjectDemoNotes = false;
        this.displayProject = true;
        this.displayProjReport = false;
        // this.displayReport = false;
        this.allProjectTasks = this.afs.collection('Projects').doc(proj.id).collection('enterprises').doc(this.compId).collection('tasks').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.allProjectTasks.subscribe(function (ptasks) {
            ptasks.forEach(function (element) {
                var data = element;
                if (moment__WEBPACK_IMPORTED_MODULE_7__(element.finish).isBefore(today)) {
                    _this.outstandingProjectTasks.push(element);
                }
                ;
                if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isSameOrBefore(today) && moment__WEBPACK_IMPORTED_MODULE_7__(data.finish).isSameOrAfter(today)) {
                    _this.setPojCurrentTAsks.push(data);
                }
                ;
                // outstanding tasks
                if (moment__WEBPACK_IMPORTED_MODULE_7__(data.finish).isBefore(today)) {
                    _this.setPojOutstandingTasks.push(data);
                }
                ;
                console.log(_this.setPojOutstandingTasks);
                // Upcoming tasks
                if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isAfter(today)) {
                    _this.setPojUpcomingTAsks.push(data);
                    if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isSameOrBefore(today.add(3, "month"))) {
                        _this.setPojShortTermTAsks.push(data);
                    }
                    else if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isSameOrBefore(today.add(12, "month"))) {
                        _this.setPojMediumTermTAsks.push(data);
                    }
                    else if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isBefore(today.add(12, "month"))) {
                        _this.setPojLongTermTAsks.push(data);
                        console.log('long term Tasks' + ' ' + _this.LongTermTAsks);
                    }
                    // console.log(this.OutstandingTasks);
                }
                ;
            });
        });
        this.compProjectTasksComplete = this.afs.collection('Projects').doc(proj.id).collection('enterprises').doc(this.compId).collection('tasks', function (ref) { return ref
            .where('complete', '==', true); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    };
    EnterpriseProfileComponent.prototype.viewDeptReport = function (dept) {
        var _this = this;
        this.outstandingDptTasks = [];
        this.setDeptLongTermTAsks = [];
        this.setDeptMediumTermTAsks = [];
        this.setDeptShortTermTAsks = [];
        this.setDeptOutstandingTasks = [];
        this.setDeptCurrentTAsks = [];
        this.setDeptUpcomingTAsks = [];
        var today = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "YYYY-MM-DD");
        console.log(dept);
        this.setDept = dept;
        // this.deptDemoNotes = false;
        this.displayDept = true;
        this.displayDeptReport = false;
        this.allDeptTasks = this.afs.collection('Enterprises').doc(this.compId).collection('departments').doc(dept.id).collection('tasks').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            // if (moment(data.finish).isBefore(today)) {
            //   this.outstandingDptTasks.push(data);
            // };
            return __assign({ id: id }, data);
        }); }));
        this.allDeptTasks.subscribe(function (ptasks) {
            ptasks.forEach(function (element) {
                var data = element;
                if (moment__WEBPACK_IMPORTED_MODULE_7__(element.finish).isBefore(today)) {
                    _this.outstandingDptTasks.push(element);
                }
                ;
                if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isSameOrBefore(today) && moment__WEBPACK_IMPORTED_MODULE_7__(data.finish).isSameOrAfter(today)) {
                    _this.setDeptCurrentTAsks.push(data);
                }
                ;
                // outstanding tasks
                if (moment__WEBPACK_IMPORTED_MODULE_7__(data.finish).isBefore(today)) {
                    _this.setDeptOutstandingTasks.push(data);
                }
                ;
                // Upcoming tasks
                if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isAfter(today)) {
                    _this.setDeptUpcomingTAsks.push(data);
                    if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isSameOrBefore(today.add(3, "month"))) {
                        _this.setDeptShortTermTAsks.push(data);
                    }
                    else if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isSameOrBefore(today.add(12, "month"))) {
                        _this.setDeptMediumTermTAsks.push(data);
                    }
                    else if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isBefore(today.add(12, "month"))) {
                        _this.setDeptLongTermTAsks.push(data);
                        console.log('long term Tasks' + ' ' + _this.setDeptLongTermTAsks);
                    }
                }
                ;
            });
        });
        this.allDeptTasksComplete = this.afs.collection('Enterprises').doc(this.compId).collection('departments').doc(dept.companyId).collection('tasks', function (ref) { return ref
            .where('complete', '==', true); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    };
    EnterpriseProfileComponent.prototype.closeTask = function (task) {
        console.log(task);
    };
    EnterpriseProfileComponent.prototype.deleteProject = function (id) {
        console.log(id);
    };
    EnterpriseProfileComponent.prototype.saveDept = function () {
        console.log(this.dpt);
        console.log(this.userId);
        console.log(this.user);
        this.dpt.companyName = this.companyName;
        this.dpt.companyId = this.compId;
        this.dpt.by = this.user.displayName;
        this.dpt.byId = this.userId;
        this.dpt.createdOn = new Date().toISOString();
        console.log(this.dpt);
        // this.afs.collection<Enterprise>('Enterprises').doc(this.compId).collection('departments').add(this.dpt);
        var dptRef = this.afs.collection('Enterprises').doc(this.compId).collection('departments');
        dptRef.add(this.dpt).then(function (Ref) {
            console.log(Ref.id);
            var dptId = Ref.id;
            dptRef.doc(dptId).update({ 'id': dptId });
        });
        this.dpt = { name: "", by: "", byId: "", companyName: "", companyId: "", createdOn: "", id: "", hod: null };
    };
    EnterpriseProfileComponent.prototype.saveAsset = function () {
        console.log(this.asset);
        console.log(this.userId);
        console.log(this.user);
        this.asset.companyName = this.companyName;
        this.asset.companyId = this.compId;
        this.asset.by = this.user.displayName;
        this.asset.byId = this.userId;
        this.asset.createdOn = new Date().toISOString();
        console.log(this.dpt);
        this.afs.collection('Enterprises').doc(this.compId).collection('assets').add(this.asset);
        this.asset = { name: "", assetNumber: "", by: "", byId: "", companyName: "", companyId: "", createdOn: "", cost: "" };
    };
    EnterpriseProfileComponent.prototype.removeAsset = function (x) {
        console.log(x);
        var assetId = x.id;
        var id = this.compId; //set 
        //  delete from the enterprise's assets
        var tRef = this.afs.collection('Enterprises').doc(id).collection('assets');
        tRef.doc(assetId).delete();
    };
    EnterpriseProfileComponent.prototype.saveSubsidiary = function () {
        console.log(this.asset);
        console.log(this.userId);
        console.log(this.user);
        var companyId = this.compId;
        var compRef; //ID of the new company that has been created under User/myEnterprises
        this.subsidiary.Holding_companyName = this.companyName;
        this.subsidiary.companyId = this.compId;
        this.subsidiary.by = this.user.displayName;
        this.subsidiary.byId = this.userId;
        this.subsidiary.createdOn = new Date().toISOString();
        var pUser = {
            name: this.user.displayName,
            email: this.user.email,
            bus_email: this.userData.bus_email,
            id: this.user.uid,
            phoneNumber: this.user.phoneNumber,
            photoURL: this.user.photoURL,
            address: this.userData.address,
            nationality: this.userData.nationality,
            nationalId: this.userData.nationalId,
            hierarchy: this.userData.hierarchy,
        };
        this.newPart = pUser;
        this.subsidiary.participants = [this.newPart];
        var partId = this.userId;
        var comp = this.subsidiary;
        var newRef = this.afs.collection('/Users').doc(this.userId).collection('myenterprises');
        var mycompanyRef = this.afs.collection('Enterprises');
        mycompanyRef.doc(this.compId).collection('subsidiaries').add(this.subsidiary)
            .then(function (Ref) {
            console.log(Ref.id);
            var compRef = Ref.id;
            // newRef.doc(compRef).add({ 'id': compRef });
            newRef.doc(compRef).collection('Participants').doc(partId).set(pUser);
            console.log(partId);
            console.log(compRef);
            mycompanyRef.doc(compRef).set(comp);
            newRef.doc(compRef).set(comp);
            mycompanyRef.doc(compRef).collection('Participants').doc(partId).set(pUser);
            console.log('enterprise ');
            mycompanyRef.doc(companyId).collection('subsidiaries').doc(compRef).update({ 'id': compRef });
            newRef.doc(compRef).update({ 'id': compRef });
            mycompanyRef.doc(compRef).update({ 'id': compRef });
        });
        console.log(this.subsidiary);
        this.subsidiary = this.is.getSubsidiary();
    };
    EnterpriseProfileComponent.prototype.saveClient = function () {
        console.log(this.userId);
        console.log(this.user);
        console.log(this.contactPerson);
        this.client.contactPerson = this.contactPerson;
        this.client.by = this.user.displayName;
        this.client.byId = this.userId;
        this.client.joinedOn = new Date().toString();
        this.afs.collection('Enterprises').doc(this.compId).collection('clients').add(this.client);
        console.log(this.client);
        this.client = { name: "", id: "", contactPerson: null, champion: null, by: "", byId: "", joinedOn: "", createdOn: "", address: "", telephone: "", location: "", sector: "", services: null, taxDocument: "", HnSDocument: "", IndustrialSectorDocument: "" };
    };
    EnterpriseProfileComponent.prototype.addClient = function () {
        console.log(this.selectedClient);
        this.selectedClient.joinedOn = new Date().toString();
        this.afs.collection('Enterprises').doc(this.compId).collection('clients').add(this.selectedClient);
        console.log(this.client);
        this.selectedClient = { name: "", id: "", contactPerson: null, champion: null, by: "", byId: "", joinedOn: "", createdOn: "", address: "", telephone: "", location: "", sector: "", services: null, taxDocument: "", HnSDocument: "", IndustrialSectorDocument: "" };
    };
    EnterpriseProfileComponent.prototype.joinProject = function () {
        var project = this.joinmyProject;
        console.log(project);
        var projectId = project.id;
        console.log(projectId);
        // this.projectSettoJoin = project
        var pUser = {
            name: this.user.displayName,
            email: this.user.email,
            id: this.user.uid,
            phoneNumber: this.user.phoneNumber,
            projectId: project.id,
            projectName: project.name,
            companyId: this.compId,
            companyName: this.company.name,
            hierarchy: this.myCompProfile.hierarchy,
            nationality: this.myCompProfile.nationality,
            nationalId: this.myCompProfile.nationalId,
            address: this.myCompProfile.address,
        };
        var projectsRef = this.afs.collection('Projects').doc(projectId);
        var companysRef = this.afs.collection('Enterprises').doc(this.compId).collection('projects').doc(project.id);
        var allMyProjectsRef = this.afs.collection('Users').doc(this.userId).collection('projects').doc(projectId); //point to project doc
        allMyProjectsRef.set(project); // set the project
        var setCompany = projectsRef.collection('enterprises').doc(this.compId);
        setCompany.collection('labour').doc(this.userId).set(pUser);
        projectsRef.collection('Participants').doc(this.userId).set(pUser);
        companysRef.collection('labour').doc(this.userId).set(pUser);
    };
    EnterpriseProfileComponent.prototype.selectStaff = function () {
        console.log(this.selectedPartId);
        var staffData;
        var docRef = this.afs.collection('Enterprises').doc(this.compId).collection('Participants').doc(this.selectedPartId);
        docRef.ref.get().then(function (doc) {
            if (doc.exists) {
                console.log(doc.get('id'));
                console.log(doc.get('name'));
                console.log(doc.get('email'));
                console.log(doc.get('phoneNumber'));
                console.log("Document data:", doc.data());
                var id = doc.get('id');
                var name_1 = doc.get('name');
                var email = doc.get('email');
                var phoneNumber = doc.get('phoneNumber');
                var by = doc.get('by');
                var byId = doc.get('byId');
                var createdOn = doc.get('createdOn');
                var address = doc.get('address');
                var nationalId = doc.get('nationalId');
                var nationality = doc.get('nationality');
                var bus_email = doc.get('bus_email');
                var hierarchy = doc.get('hierarchy');
                staffData.name = name_1;
                staffData.id = id;
                staffData.email = email;
                staffData.phoneNumber = phoneNumber;
                staffData.by = by;
                staffData.byId = byId;
                staffData.createdOn = createdOn;
                staffData.address = address;
                staffData.nationalId = nationalId;
                staffData.nationality = nationality;
                staffData.bus_email = bus_email;
                staffData.hierarchy = hierarchy;
                // staffData = doc.data() as companyStaff
            }
            else {
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });
        console.log(staffData);
        this.selectedStaff = staffData;
        console.log(this.selectedStaff);
    };
    EnterpriseProfileComponent.prototype.check = function () {
        console.log(this.selectedStaff);
    };
    EnterpriseProfileComponent.prototype.selectUser = function (x) {
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
        if (x.hierarchy == "" || x.hierarchy == null || x.hierarchy == undefined) {
            x.hierarchy = "";
        }
        else {
        }
        var staff = {
            name: x.name,
            email: x.email,
            bus_email: x.bus_email,
            id: x.id,
            phoneNumber: x.phoneNumber,
            by: this.user.displayName,
            byId: this.userId,
            photoURL: x.photoURL,
            department: "",
            departmentId: "",
            createdOn: new Date().toISOString(),
            address: x.address,
            nationalId: x.nationalId,
            nationality: x.nationality,
            hierarchy: x.hierarchy
        };
        console.log(x);
        console.log(staff);
        this.companystaff = staff;
        console.log(this.companystaff);
        this.toggleChamp();
        this.toggleUsersTable();
    };
    EnterpriseProfileComponent.prototype.selectColUser2 = function (x) {
        console.log(this.selectedColUser);
        if (this.selectedColUser.phoneNumber == "" || this.selectedColUser.phoneNumber == null || this.selectedColUser.phoneNumber == undefined) {
            this.selectedColUser.phoneNumber = "";
        }
        else {
        }
        if (this.selectedColUser.address == "" || this.selectedColUser.address == null || this.selectedColUser.address == undefined) {
            this.selectedColUser.address = "";
        }
        else {
        }
        if (this.selectedColUser.bus_email == "" || this.selectedColUser.bus_email == null || this.selectedColUser.bus_email == undefined) {
            this.selectedColUser.bus_email = "";
        }
        else {
        }
        if (this.selectedColUser.nationalId == "" || this.selectedColUser.nationalId == null || this.selectedColUser.nationalId == undefined) {
            this.selectedColUser.nationalId = "";
        }
        else {
        }
        if (this.selectedColUser.nationality == "" || this.selectedColUser.nationality == null || this.selectedColUser.nationality == undefined) {
            this.selectedColUser.nationality = "";
        }
        else {
        }
        if (this.selectedColUser.hierarchy == "" || this.selectedColUser.hierarchy == null || this.selectedColUser.hierarchy == undefined) {
            this.selectedColUser.hierarchy = "";
        }
        else {
        }
        var staff = {
            name: this.selectedColUser.name,
            email: this.selectedColUser.email,
            bus_email: this.selectedColUser.bus_email,
            id: this.selectedColUser.id,
            phoneNumber: this.selectedColUser.phoneNumber,
            by: this.user.displayName,
            byId: this.userId,
            photoURL: this.selectedColUser.userImg,
            department: "",
            departmentId: "",
            createdOn: new Date().toISOString(),
            address: this.selectedColUser.address,
            nationalId: this.selectedColUser.nationalId,
            nationality: this.selectedColUser.nationality,
            hierarchy: this.selectedColUser.hierarchy
        };
        console.log(this.selectedColUser);
        console.log(staff);
        this.newCompanystaff = staff;
        console.log(this.newCompanystaff);
        this.toggleChamp();
        this.toggleUsersTable();
    };
    EnterpriseProfileComponent.prototype.selectColUser = function (x) {
        if (x.phoneNumber == "" || x.phoneNumber == null || x.phoneNumber == undefined) {
            x.phoneNumber = "";
        }
        else {
        }
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
        if (x.hierarchy == "" || x.hierarchy == null || x.hierarchy == undefined) {
            x.hierarchy = "";
        }
        else {
        }
        var staff = {
            name: x.name,
            email: x.email,
            bus_email: x.bus_email,
            id: x.id,
            phoneNumber: x.phoneNumber,
            by: this.user.displayName,
            byId: this.userId,
            photoURL: x.userImg,
            department: "",
            departmentId: "",
            createdOn: new Date().toISOString(),
            address: x.address,
            nationalId: x.nationalId,
            nationality: x.nationality,
            hierarchy: x.hierarchy
        };
        console.log(x);
        console.log(staff);
        this.newCompanystaff = staff;
        console.log(this.newCompanystaff);
        this.toggleChamp();
        this.toggleUsersTable();
    };
    EnterpriseProfileComponent.prototype.add2DptStaff = function () {
        this.es.add2DptStaff(this.compId, this.dptId, this.companystaff, this.selectedTask, this.selectedAction);
    };
    /* selectTask */
    EnterpriseProfileComponent.prototype.selectAction = function (action) {
        this.selectedAction = action;
    };
    EnterpriseProfileComponent.prototype.saveNewStaff = function () {
        var userRef = this.afs.collection('Users').doc(this.newCompanystaff.id).collection('myenterprises');
        var partRef = this.afs.collection('Enterprises').doc(this.compId).collection('Participants');
        partRef.doc(this.newCompanystaff.id).set(this.newCompanystaff);
        userRef.doc(this.compId).set(this.company);
        console.log(this.newCompanystaff);
        this.newCompanystaff = { name: "", phoneNumber: "", by: "", byId: "", createdOn: "", email: "", bus_email: "", id: "", department: "", departmentId: "", photoURL: "", address: "", nationalId: "", nationality: "", hierarchy: "" };
        this.dataCall();
    };
    EnterpriseProfileComponent.prototype.saveStaff = function () {
        console.log(this.userId);
        console.log(this.user);
        console.log(this.companystaff);
        this.companystaff.by = this.user.displayName;
        this.companystaff.byId = this.userId;
        this.companystaff.phoneNumber = this.user.phoneNumber;
        this.companystaff.createdOn = new Date().toISOString();
        var compStaff = this.companystaff;
        var colUsers = this.afs.collection('Users');
        var partRef = this.afs.collection('Enterprises').doc(this.compId).collection('Participants');
        partRef.add(this.companystaff).then(function (Ref) {
            var partId = Ref.id;
            colUsers.doc(partId).set(compStaff);
            partRef.doc(partId).update({ 'id': partId });
            colUsers.doc(partId).update({ 'id': partId });
        });
        console.log(this.companystaff);
        this.companystaff = { name: "", phoneNumber: "", by: "", byId: "", createdOn: "", email: "", bus_email: "", id: "", department: "", departmentId: "", photoURL: "", address: "", nationalId: "", nationality: "", hierarchy: "" };
    };
    EnterpriseProfileComponent.prototype.deleteStaff = function (x) {
        var _this = this;
        this.afAuth.user.subscribe(function (user) {
            console.log(x);
            var staffId = x.id;
            if (x.departmentId != "") {
                var dptId = x.departmentId;
                //  delete from the enterprise's Department
                var deptDoc = _this.afs.collection('Enterprises').doc(_this.compId).collection('departments').doc(dptId);
                deptDoc.collection('Participants').doc(staffId).delete();
            }
            //  delete from the enterprise
            var staffRef = _this.afs.collection('Enterprises').doc(_this.compId).collection('Participants').doc(staffId);
            staffRef.delete();
            //  delete from the user's tasks
        });
        this.dataCall();
    };
    EnterpriseProfileComponent.prototype.removeStaff = function (x) {
        var _this = this;
        this.afAuth.user.subscribe(function (user) {
            console.log(x);
            var staffId = x.id;
            //  delete from the enterprise's tasks
            var staffRef = _this.afs.collection('Enterprises').doc(_this.compId).collection('departments').doc(_this.dp).collection('Participants').doc(staffId);
            staffRef.delete();
            //  delete from the user's tasks
        });
    };
    EnterpriseProfileComponent.prototype.setCompany = function () {
        this.currentCompany = this.es.currentCompany;
        console.log(this.currentCompany);
    };
    EnterpriseProfileComponent.prototype.selectParticipant = function (x) {
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
        this.selectedParticipant = x;
        this.selParticipantId = x.id;
        this.Champion = x;
        // this.Champion.id = x.id;
        // this.Champion.email = x.email;
        console.log(this.Champion);
        this.selParticipantName = x.name;
        this.toggleChamp();
        this.toggleUsersTable();
    };
    EnterpriseProfileComponent.prototype.checkLeapYear = function () {
        var leapYear = false;
        var numberOfDays;
        leapYear = moment__WEBPACK_IMPORTED_MODULE_7__(this.currentYear).isLeapYear();
        console.log(leapYear);
        if (leapYear == true) {
            console.log('Its a leapYear');
            numberOfDays = 366;
        }
        else {
            console.log('Its not leapYear');
            numberOfDays = 365;
        }
        return numberOfDays;
    };
    /* this.daysInYear  */
    EnterpriseProfileComponent.prototype.changePeriod = function (action, period) {
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
                    if (month$ > 1) {
                        month$ -= 1;
                        console.log(moment__WEBPACK_IMPORTED_MODULE_7__(month$));
                        this.currentMonth = String(month$);
                        this.week0label.subtract(1, 'M');
                        this.week1label.subtract(1, 'M');
                        this.week2label.subtract(1, 'M');
                        this.week3label.subtract(1, 'M');
                    }
                    break;
                }
                case 'next': {
                    var month$ = Number(this.currentMonth);
                    if (month$ <= 11) {
                        month$ += 1;
                        console.log(moment__WEBPACK_IMPORTED_MODULE_7__(month$));
                        this.currentMonth = String(month$);
                        console.log(this.currentWeek.week());
                        this.week0label.add(1, 'M');
                        this.week1label.add(1, 'M');
                        this.week2label.add(1, 'M');
                        this.week3label.add(1, 'M');
                    }
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
                    if (quarter$ > 1) {
                        this.currentQuarter = String(quarter$ - 1);
                        console.log(this.currentQuarter);
                        this.month1label.subtract(1, 'Q');
                        this.month2label.subtract(1, 'Q');
                        this.month3label.subtract(1, 'Q');
                    }
                    break;
                }
                case 'next': {
                    var quarter$ = Number(this.currentQuarter);
                    if (quarter$ < 4) {
                        this.currentQuarter = String(quarter$ + 1);
                        console.log(this.currentQuarter);
                        this.month1label.add(1, 'Q');
                        this.month2label.add(1, 'Q');
                        this.month3label.add(1, 'Q');
                    }
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
    EnterpriseProfileComponent.prototype.setDay = function (day) {
        // console.log(period);
        // this.period = this.currentWeek;
        var dayNo = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), 'DD-MM-YYYY').dayOfYear();
        // let periodWeek = 'startWeek';
        var period = 'startDay';
        if (day == 'day0') {
            console.log(dayNo);
            console.log(this.period);
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
    EnterpriseProfileComponent.prototype.setWeek = function (week) {
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
    EnterpriseProfileComponent.prototype.setMonth = function (month) {
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
    EnterpriseProfileComponent.prototype.setQuarter = function (quarter) {
        var period = 'startQuarter';
        if (quarter == 'quarter0') {
            console.log(quarter);
            this.period = String(this.quarter0label.quarter());
            this.qYear = String(this.quarter0label.year());
            // this.quarter0Tasks = this.viewDateTasks(period, this.period);
            this.quarter0Tasks = this.mviewDateTasks(period, this.period, this.qYear);
            console.log(this.period);
        }
        if (quarter == 'quarter1') {
            this.period = String(this.quarter1label.quarter());
            this.qYear = String(this.quarter1label.year());
            // this.quarter1Tasks = this.viewDateTasks(period, this.period);
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
            // this.quarter3Tasks = this.viewDateTasks(period, this.period);
            this.quarter3Tasks = this.mviewDateTasks(period, this.period, this.qYear);
            console.log(this.period);
        }
    };
    EnterpriseProfileComponent.prototype.viewDateTasks = function (testPeriod, checkPeriod) {
        // this.viewTasks = this.afs.collection('Users').doc(this.userId).collection('tasks', ref => { return ref.where(testPeriod, '==', checkPeriod) }).snapshotChanges().pipe(
        var viewTasksRef = this.afs.collection('Enterprises').doc(this.compId);
        this.viewTasks = viewTasksRef.collection('tasks', function (ref) { return ref.where(testPeriod, '==', checkPeriod); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        return this.viewTasks;
    };
    EnterpriseProfileComponent.prototype.mviewDateTasks = function (testPeriod, checkPeriod, year) {
        var viewTasksRef = this.afs.collection('Enterprises').doc(this.compId);
        this.viewTasks = viewTasksRef.collection('tasks', function (ref) { return ref
            .where(testPeriod, '==', checkPeriod)
            .where('startYear', '==', year); })
            .snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        return this.viewTasks;
    };
    EnterpriseProfileComponent.prototype.addTaskDptStaff = function () {
        this.es.addTaskDptStaff(this.compId, this.deptId, this.companystaff, this.selectedTask);
    };
    EnterpriseProfileComponent.prototype.setDptHead = function () {
        console.log(this.companystaff);
        if (this.companystaff.address == "" || this.companystaff.address == null || this.companystaff.address == undefined) {
            this.companystaff.address = "";
        }
        else {
        }
        if (this.companystaff.bus_email == "" || this.companystaff.bus_email == null || this.companystaff.bus_email == undefined) {
            this.companystaff.bus_email = "";
        }
        else {
        }
        if (this.companystaff.nationalId == "" || this.companystaff.nationalId == null || this.companystaff.nationalId == undefined) {
            this.companystaff.nationalId = "";
        }
        else {
        }
        if (this.companystaff.nationality == "" || this.companystaff.nationality == null || this.companystaff.nationality == undefined) {
            this.companystaff.nationality = "";
        }
        else {
        }
        var staff = {
            name: this.companystaff.name,
            email: this.companystaff.email,
            id: this.companystaff.id,
            bus_email: this.companystaff.bus_email,
            phoneNumber: this.companystaff.phoneNumber,
            photoURL: this.user.photoURL,
            // byId: this.userId,
            dateHeaded: new Date().toString(),
            address: this.myData.address,
            nationalId: this.myData.nationalId,
            nationality: this.myData.nationality,
        };
        console.log('the departmentID-->' + " " + this.selectedDepartment.name);
        this.selectedDepartment.hod = staff;
        console.log(this.selectedDepartment);
        var deptDoc = this.afs.collection('Enterprises').doc(this.compId).collection('departments').doc(this.selectedDepartment.id);
        deptDoc.update({ "hod": staff });
    };
    EnterpriseProfileComponent.prototype.selectDpt = function (dpt) {
        console.log(dpt);
        this.selectedDepartment = dpt;
        this.dptId = dpt.id;
    };
    EnterpriseProfileComponent.prototype.showTasks = function (dpt) {
        // this.dptIntrayTasks = this.es.getDptTasks(this.compId, dpt.id);
        var myTaskData;
        var dptRef = this.afs.collection('Enterprises').doc(this.compId).collection('departments');
        this.dptIntrayTasks = dptRef.doc(dpt.id).collection('tasks', function (ref) { return ref.where('departmentId', '==', dpt.id); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            myTaskData = data;
            myTaskData.when = moment__WEBPACK_IMPORTED_MODULE_7__(data.start, "YYYY-MM-DD").fromNow().toString();
            myTaskData.then = moment__WEBPACK_IMPORTED_MODULE_7__(data.finish, "YYYY-MM-DD").fromNow().toString();
            return __assign({ id: id }, data);
        }); }));
    };
    EnterpriseProfileComponent.prototype.showDpTasks = function (dptId) {
        this.dptTasks = this.es.getDptTasks(this.compId, dptId);
        this.dptStaff = this.es.getDptStaff(this.compId, dptId);
        this.calldptStaff = this.es.getDptStaff(this.compId, dptId);
        this.deptId = dptId;
        console.log(this.calldptStaff);
        this.companyDptStaff = this.es.getDptStaffArray(this.compId, dptId);
    };
    EnterpriseProfileComponent.prototype.dpTasks = function (dpt) {
        var dptId = dpt.id;
        this.selectDpt(dpt);
        this.deptStaff = this.es.getDptStaff(this.compId, dptId);
    };
    EnterpriseProfileComponent.prototype.showUserTasks = function (staffId) {
        this.staffTasks = this.es.getDptStaffTasks(this.compId, this.deptId, staffId);
    };
    EnterpriseProfileComponent.prototype.showTaskActions = function (task) {
        this.selectTask(task);
        this.taskActions = this.es.getDptTasksActions(this.compId, this.deptId, task.id);
    };
    EnterpriseProfileComponent.prototype.viewMyTaskActions = function (task) {
        this.selectTask(task);
        this.mytaskActions = this.es.getMyTasksActions(this.userId, task.id);
    };
    EnterpriseProfileComponent.prototype.showActions = function () {
        // this.actionItems = this.es.getActionItems(this.selectedTask, this.companystaff);
        this.actionItems = this.es.getActionItems(this.companystaff);
    };
    EnterpriseProfileComponent.prototype.selectTask = function (TAsk) {
        console.log(TAsk);
        this.selectedTask = TAsk;
    };
    EnterpriseProfileComponent.prototype.selectDeptTask = function (TAsk) {
        console.log(TAsk);
        this.selectedDptTask = TAsk;
    };
    EnterpriseProfileComponent.prototype.deleteAction = function (action) {
        console.log(action);
        var actionId = action.id;
        var userProjectDoc = this.afs.collection('Users').doc(this.staffId).collection('myenterprises').doc(this.selectedTask.companyId);
        var userActionRef = userProjectDoc.collection('tasks').doc(this.selectedTask.id).collection('actionItems');
        var deptDoc = this.afs.collection('Enterprises').doc(this.selectedTask.companyId).collection('departments').doc(action.departmentId);
        var actionRef = deptDoc.collection('tasks').doc(this.selectedTask.id).collection('actionItems');
        var EntRef = this.afs.collection('Enterprises').doc(this.selectedTask.companyId).collection('tasks').doc(this.selectedTask.id).collection('actionItems');
        EntRef.doc(actionId).delete();
        actionRef.doc(actionId).delete();
        userActionRef.doc(actionId).delete();
    };
    EnterpriseProfileComponent.prototype.newAction = function (action) {
        console.log(action);
        var newClassification = { name: 'Work', createdOn: new Date().toISOString(), id: 'colourWorkId', plannedTime: "", actualTime: "", Varience: "" };
        action.by = this.user.displayName;
        action.byId = this.userId;
        var dptId = this.deptId;
        action.createdOn = new Date().toISOString();
        action.taskId = this.selectedTask.id;
        action.projectId = this.selectedTask.projectId;
        action.projectName = this.selectedTask.projectName;
        action.departmentId = this.deptId;
        action.companyId = this.selectedTask.companyId;
        action.companyName = this.selectedTask.companyName;
        action.classificationName = 'Work';
        action.classificationId = 'colourWorkId';
        action.classification = newClassification;
        // action.startDate = moment(action.startDate).format('L');
        // action.endDate = moment(action.endDate).format('L');
        // action.startWeek = moment(action.startDate, 'MM-DD-YYYY').week().toString();
        // action.endWeek = moment(action.endDate, 'MM-DD-YYYY').week().toString();
        // action.startDay = moment(action.startDate, 'MM-DD-YYYY').format('ddd').toString();
        // action.endDay = moment(action.endDate, 'MM-DD-YYYY').format('ddd').toString();
        action.startDate = "";
        action.endDate = "";
        action.startWeek = "";
        action.endWeek = "";
        action.startDay = "";
        action.endDay = "";
        // action.champion = this.myData;
        action.champion = this.selectedTask.champion;
        action.unit = this.setSui.id;
        console.log(action.unit);
        console.log(this.setSui.id);
        action.type = "planned";
        var mooom = action;
        console.log(mooom);
        console.log('the task--->' + this.selectedTask.name + " " + this.selectedTask.id);
        console.log('the department-->' + action.name);
        var userProjectDoc = this.afs.collection('Users').doc(this.staffId).collection('myenterprises').doc(this.selectedTask.companyId);
        var userActionRef = userProjectDoc.collection('tasks').doc(this.selectedTask.id).collection('actionItems');
        var deptDoc = this.afs.collection('Enterprises').doc(this.selectedTask.companyId).collection('departments').doc(dptId);
        var actionRef = deptDoc.collection('tasks').doc(this.selectedTask.id).collection('actionItems');
        var EntRef = this.afs.collection('Enterprises').doc(this.selectedTask.companyId).collection('tasks').doc(this.selectedTask.id).collection('actionItems');
        EntRef.add(action).then(function (Ref) {
            var newActionId = Ref.id;
            console.log(Ref);
            EntRef.doc(newActionId).update({ 'id': newActionId });
            actionRef.doc(newActionId).set(action);
            actionRef.doc(newActionId).update({ 'id': newActionId });
            userActionRef.doc(newActionId).set(action);
            userActionRef.doc(newActionId).update({ 'id': newActionId });
        });
        this.setSui = null;
        this.actionItem = { uid: "", id: "", name: "", unit: "", quantity: 0, targetQty: 0, rate: 0, workHours: null, amount: 0, by: "", byId: "", type: "", champion: this.is.getCompChampion(), classification: null, participants: null, departmentName: "", departmentId: "", billID: "", billName: "", projectId: "", projectName: "", createdOn: "", UpdatedOn: "", actualData: null, workStatus: null, complete: false, start: null, end: null, startWeek: "", startDay: "", startDate: "", endDay: "", endDate: "", endWeek: "", taskName: "", taskId: "", companyId: "", companyName: "", classificationName: "", classificationId: "", selectedWork: false, section: this.is.getSectionInit(), actualStart: "", actualEnd: "", Hours: "" };
    };
    EnterpriseProfileComponent.prototype.newActionToday = function (action) {
        console.log(action);
        action.startDate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format('L');
        action.endDate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format('L');
        action.by = this.user.displayName;
        action.byId = this.userId;
        var dptId = this.dp;
        action.createdOn = new Date().toISOString();
        action.taskId = this.taskId;
        action.classificationName = 'Work';
        action.classificationId = 'colourWorkId';
        action.type = "planned";
        action.departmentId = this.dp;
        action.startDate = moment__WEBPACK_IMPORTED_MODULE_7__(action.startDate).format('L');
        action.endDate = moment__WEBPACK_IMPORTED_MODULE_7__(action.endDate).format('L');
        action.startWeek = moment__WEBPACK_IMPORTED_MODULE_7__(action.startDate, 'MM-DD-YYYY').week().toString();
        action.endWeek = moment__WEBPACK_IMPORTED_MODULE_7__(action.endDate, 'MM-DD-YYYY').week().toString();
        action.startDay = moment__WEBPACK_IMPORTED_MODULE_7__(action.startDate, 'MM-DD-YYYY').format('ddd').toString();
        action.endDay = moment__WEBPACK_IMPORTED_MODULE_7__(action.endDate, 'MM-DD-YYYY').format('ddd').toString();
        action.champion = this.myData;
        action.unit = this.setSui.id;
        console.log(action.unit);
        console.log(this.setSui.id);
        var mooom = action;
        console.log(mooom);
        var partId = this.selectedStaffId;
        console.log('the selectedStaffId--->' + this.selectedStaffId);
        console.log('the task--->' + this.selectedTask.name + " " + this.taskId);
        console.log('the department-->' + action.name);
        var compRef = this.afs.collection('Enterprises').doc(this.compId).collection('WeeklyActions');
        var userProjectDoc = this.afs.collection('Users').doc(partId).collection('myenterprises').doc(this.compId);
        var userActionRef = userProjectDoc.collection('tasks').doc(this.taskId).collection('actionItems');
        var deptDoc = this.afs.collection('Enterprises').doc(this.compId).collection('departments').doc(dptId);
        var actionRef = deptDoc.collection('tasks').doc(this.taskId).collection('actionItems');
        var EntRef = this.afs.collection('Enterprises').doc(this.compId).collection('tasks').doc(this.taskId).collection('actionItems');
        EntRef.add(action).then(function (Ref) {
            var newActionId = Ref.id;
            console.log(Ref);
            EntRef.doc(newActionId).update({ 'id': newActionId });
            compRef.doc(newActionId).set(action);
            compRef.doc(newActionId).update({ 'id': newActionId });
            actionRef.doc(newActionId).set(action);
            actionRef.doc(newActionId).update({ 'id': newActionId });
            userActionRef.doc(newActionId).set(action);
            userActionRef.doc(newActionId).update({ 'id': newActionId });
        });
    };
    EnterpriseProfileComponent.prototype.saveUserId = function (staffId) {
        console.log(staffId);
        console.log('the staff--->' + this.selectedStaffId);
        // this.staffId = staffId;
    };
    /* addToDepatment */
    EnterpriseProfileComponent.prototype.add2Dpartment = function () {
        console.log(this.selectedDepartment.name);
        console.log(this.selectedTask.department);
        console.log(this.selectedTask.departmentId);
        console.log(this.selectedTask);
        var oldDptId = this.selectedTask.departmentId;
        // let oldDptName = this.selectedTask.department;
        this.ts.addToDepatment(this.selectedTask, this.selectedDepartment);
        // this.afs.collection('Users').doc(this.selectedTask.champion.id).collection('tasks').doc(this.selectedTask.id).delete();
        if (oldDptId !== "") {
            this.afs.collection('Enterprises').doc(this.compId)
                .collection('departments').doc(this.selectedTask.departmentId)
                .collection('tasks').doc(this.selectedTask.id).update({
                'departmentId': this.selectedDepartment.id,
                'department': this.selectedDepartment.name,
                'transferDate': new Date().toISOString()
            });
        }
        this.afs.collection('Enterprises').doc(this.compId).collection('tasks').doc(this.selectedTask.id).update({
            'departmentId': this.selectedDepartment.id,
            'department': this.selectedDepartment.name,
            'champion': null
        });
        this.selectedTask = { name: "", champion: null, projectName: "", department: "", departmentId: "", start: "", startDay: "", startWeek: "", startMonth: "", startQuarter: "", startYear: "", finish: "", finishDay: "", finishWeek: "", finishMonth: "", finishQuarter: "", finishYear: "", by: "", createdOn: "", projectId: "", byId: "", projectType: "", companyName: "", companyId: "", trade: "", section: null, complete: null, id: "", participants: null, status: "", classification: null };
        this.task = { name: "", champion: null, projectName: "", department: "", departmentId: "", start: "", startDay: "", startWeek: "", startMonth: "", startQuarter: "", startYear: "", finish: "", finishDay: "", finishWeek: "", finishMonth: "", finishQuarter: "", finishYear: "", by: "", createdOn: "", projectId: "", byId: "", projectType: "", companyName: "", companyId: "", trade: "", section: null, complete: null, id: "", participants: null, status: "", classification: null };
    };
    EnterpriseProfileComponent.prototype.addStaff2Dpartment = function () {
        console.log(this.companystaff.name);
        console.log(this.selectedDepartment);
        // let man = this.companystaff;
        this.es.addStaffToDepatment(this.compId, this.selectedDepartment, this.companystaff);
        this.companystaff = { name: "", phoneNumber: "", by: "", byId: "", createdOn: "", email: "", bus_email: "", id: "", department: "", departmentId: "", photoURL: "", address: "", nationalId: "", nationality: "", hierarchy: "" };
    };
    EnterpriseProfileComponent.prototype.addActionParticipants = function () {
        console.log(this.setStaff);
        var action = this.selectedAction;
        console.log(action);
    };
    EnterpriseProfileComponent.prototype.changeDay = function (action) {
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
        // this.dayTasks = this.viewTodayAction(testPeriod, this.aPeriod);
        this.dayTasks = this.viewTodayActionQuery(testPeriod, this.aPeriod);
    };
    EnterpriseProfileComponent.prototype.initDiary = function () {
        // this.aCurrentDate = moment(new Date()).format('L');
        var testPeriod = "startDate";
        // this.viewTodayAction(testPeriod, this.aCurrentDate);
        this.viewTodayActionQuery(testPeriod, this.aCurrentDate);
    };
    EnterpriseProfileComponent.prototype.viewTodayAction = function (testPeriod, checkPeriod) {
        var _this = this;
        var viewActionsRef = this.afs.collection('Enterprises').doc(this.compId);
        this.viewActions = viewActionsRef.collection('WeeklyActions', function (ref) { return ref
            .where(testPeriod, '==', checkPeriod); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.viewActions.subscribe(function (actions) {
            _this.myActionItems = actions;
            console.log(actions.length);
            console.log(actions);
            _this.actionNo = actions.length;
        });
        return this.viewActions;
    };
    EnterpriseProfileComponent.prototype.viewTodayActionQuery = function (testPeriod, checkPeriod) {
        var _this = this;
        var today = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "YYYY-MM-DD");
        var today2 = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "MM-DD-YYYY").format('L');
        today2 = checkPeriod;
        console.log(today);
        console.log(today2);
        console.log(testPeriod);
        console.log(checkPeriod);
        var viewActionsRef = this.afs.collection('Enterprises').doc(this.compId);
        this.viewActions = viewActionsRef.collection('WeeklyActions').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
            _this.viewDayActions = [];
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.viewDayActions = [];
        this.viewActions.subscribe(function (actions) {
            console.log(actions);
            _this.selectedActions = actions;
            actions.forEach(function (element) {
                var data = element;
                // this.viewDayActions = [];
                // if (moment(element.startDate).isSameOrAfter(today) && element.complete == false) {
                // if (moment(element.startDate).isSameOrBefore(today) && element.complete == false) {
                if (moment__WEBPACK_IMPORTED_MODULE_7__(element.startDate).isSameOrBefore(today2) && element.complete == false) {
                    _this.viewDayActions.push(element);
                    console.log(_this.viewDayActions);
                }
            });
            if (_this.selectedActions.length > 0) {
                _this.viewTodayWork = true;
            }
            else {
                _this.viewTodayWork = false;
            }
        });
        return this.viewActions;
    };
    EnterpriseProfileComponent.prototype.selectActions = function (e, action) {
        if (e.target.checked) {
            console.log();
            this.selectedActionItems.push(action);
            var participantRef = this.afs.collection('Enterprises').doc(this.compId).collection('Participants').doc(action.champion.id).collection('WeeklyActions');
            participantRef.doc(action.id).set(action);
            var compRef = this.afs.collection('Enterprises').doc(this.compId).collection('WeeklyActions');
            compRef.doc(action.id).set(action);
            console.log("action" + " " + action.name + " " + " has been added");
        }
        else {
            this.selectedActionItems.splice(this.selectedActionItems.indexOf(action), 1);
            var participantRef = this.afs.collection('Enterprises').doc(this.compId).collection('Participants').doc(action.champion.id).collection('WeeklyActions');
            participantRef.doc(action.id).delete();
            var compRef = this.afs.collection('Enterprises').doc(this.compId).collection('WeeklyActions');
            compRef.doc(action.id).delete();
        }
    };
    EnterpriseProfileComponent.prototype.selectActionStaff = function (e, staff) {
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
        var actionId = this.editedAction.id;
        var deptId = this.editedAction.departmentId;
        var compRef = this.afs.collection('Enterprises').doc(this.compId).collection('WeeklyActions');
        var compRef2 = this.afs.collection('Enterprises').doc(this.compId).collection('actionItems');
        var weeklyRef = this.afs.collection('Users').doc(staff.id).collection('WeeklyActions');
        var allMyActionsRef = this.afs.collection('Users').doc(staff.id).collection('actionItems');
        var actionRef;
        var userWeeklyRef = this.afs.collection('Users').doc(staff.id).collection('WeeklyActions');
        var userAllMyActionsRef = this.afs.collection('Users').doc(staff.id).collection('actionItems');
        var userProjectDoc = this.afs.collection('Users').doc(this.editedAction.byId).collection('myenterprises').doc(this.compId);
        var userActionRef = userProjectDoc.collection('tasks').doc(this.editedAction.taskId).collection('actionItems');
        var EntRef = this.afs.collection('Enterprises').doc(this.compId).collection('tasks').doc(this.editedAction.taskId).collection('actionItems');
        var deptDoc = this.afs.collection('Enterprises').doc(this.compId).collection('departments');
        if (deptId !== "") {
            actionRef = deptDoc.doc(deptId).collection('tasks').doc(this.editedAction.taskId).collection('actionItems');
        }
        if (e.target.checked) {
            console.log();
            this.selectedActionParticipants.push(staff);
            // this.editedAction.participants.push(staff);
            compRef.doc(this.editedAction.id).collection('Participants').doc(staff.id).set(staff);
            compRef2.doc(this.editedAction.id).collection('Participants').doc(staff.id).set(staff);
            weeklyRef.doc(this.editedAction.id).set(this.editedAction);
            allMyActionsRef.doc(this.editedAction.id).set(this.editedAction);
            EntRef.doc(actionId).collection('Participants').doc(staff.id).set(staff);
            // compRef.doc(actionId).set(action);
            // compRef.doc(actionId).collection('Participants').doc(staff.id).set(staff);
            // userActionRef.doc(actionId).set(action);
            userActionRef.doc(actionId).collection('Participants').doc(staff.id).set(staff);
            if (deptId != "") {
                // actionRef.doc(actionId).set(action);
                actionRef.doc(actionId).collection('Participants').doc(staff.id).set(staff);
            }
            console.log("staff" + " " + staff.name + " " + " has been added");
        }
        else {
            this.selectedActionParticipants.splice(this.selectedActionParticipants.indexOf(staff), 1);
            compRef.doc(this.editedAction.id).collection('Participants').doc(staff.id).delete();
            compRef2.doc(this.editedAction.id).collection('Participants').doc(staff.id).delete();
            weeklyRef.doc(this.editedAction.id).delete();
            allMyActionsRef.doc(this.editedAction.id).delete();
            EntRef.doc(actionId).collection('Participants').doc(staff.id).set(staff);
            // userActionRef.doc(actionId).set(action);
            userActionRef.doc(actionId).collection('Participants').doc(staff.id).delete();
            if (deptId != "") {
                // actionRef.doc(actionId).set(action);
                actionRef.doc(actionId).collection('Participants').doc(staff.id).delete();
            }
            console.log("staff" + " " + staff.name + " " + " has been removed");
        }
        this.showActionParticipants(actionId);
    };
    EnterpriseProfileComponent.prototype.showActionParticipants = function (actionId) {
        console.log(this.editedAction.id);
        var labourRef = this.afs.collection('Enterprises').doc(this.compId).collection('WeeklyActions');
        // this.actionParticipants = labourRef.doc(this.editedAction.id).collection<ParticipantData>('Participants').snapshotChanges().pipe(
        this.actionParticipants = labourRef.doc(actionId).collection('Participants').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    };
    EnterpriseProfileComponent.prototype.selectEditAction = function (action) {
        console.log(action);
        this.selectedAction = action;
        console.log(this.selectedAction);
    };
    EnterpriseProfileComponent.prototype.select2EditAction = function (action) {
        console.log(action.id);
        this.editedAction = action;
        console.log(this.editedAction);
        this.showActionParticipants(action.id);
    };
    EnterpriseProfileComponent.prototype.refreshData = function () {
        this.aCurrentDate = moment__WEBPACK_IMPORTED_MODULE_7__(new Date()).format('L');
        console.log(this.aCurrentDate);
        this.company = this.testCompany;
        // let compServices = this.company.services;
        // console.log(compServices);
        this.workDay = moment__WEBPACK_IMPORTED_MODULE_7__().format('LL');
        this.workWeekDay = moment__WEBPACK_IMPORTED_MODULE_7__(this.aPeriod).format('dddd');
    };
    EnterpriseProfileComponent.prototype.addActionTime = function (action) {
        console.log(action);
        console.log(action.start);
        console.log(action.end);
        var champId = action.champion.id;
        console.log(action);
        if (action.projectId != "") {
            var prjectCompWeeklyRef = this.afs.collection('Projects').doc(action.projectId).collection('enterprises').doc(this.compId).collection('WeeklyActions');
            prjectCompWeeklyRef.doc(action.id).set(action);
        }
        ;
        // Company update
        if (action.companyId != "") {
            var allMyActionsRef = this.afs.collection('Enterprises').doc(action.companyId).collection('actionItems');
            var allWeekActionsRef = this.afs.collection('Enterprises').doc(action.companyId).collection('WeeklyActions');
            var myTaskActionsRef = this.afs.collection('Enterprises').doc(action.companyId).collection('tasks').doc(action.taskId).collection('actionItems');
            allMyActionsRef.doc(action.id).set(action);
            allWeekActionsRef.doc(action.id).set(action);
            myTaskActionsRef.doc(action.id).set(action);
            if (action.projectId != "") {
                var weeklyRef = this.afs.collection('Enterprises').doc(action.companyId).collection('projects').doc(action.projectId).collection('WeeklyActions');
                weeklyRef.doc(action.id).set(action);
            }
        }
        ;
        if (action.byId == champId) {
            if (action.byId != "") {
                var creatorRef = this.afs.collection('Users').doc(action.byId).collection('myenterprises').doc(action.companyId).collection('WeeklyActions');
                creatorRef.doc(action.id).set(action);
                var weeklyRef = this.afs.collection('Users').doc(action.byId).collection('WeeklyActions');
                var allMyActionsRef = this.afs.collection('Users').doc(action.byId).collection('actionItems');
                weeklyRef.doc(action.id).set(action);
                allMyActionsRef.doc(action.id).set(action);
            }
            ;
        }
        if (action.byId != champId) {
            // creator update
            if (action.byId != "") {
                var creatorRef2 = this.afs.collection('Users').doc(action.byId).collection('WeeklyActions');
                creatorRef2.doc(action.id).set(action);
                var creatorRef = this.afs.collection('Users').doc(action.byId).collection('myenterprises').doc(action.companyId).collection('WeeklyActions');
                creatorRef.doc(action.id).set(action);
                var weeklyRef = this.afs.collection('Users').doc(action.byId).collection('WeeklyActions');
                var allMyActionsRef = this.afs.collection('Users').doc(action.byId).collection('actionItems');
                weeklyRef.doc(action.id).set(action);
                allMyActionsRef.doc(action.id).set(action);
            }
            ;
            // champion update
            if (champId != "") {
                var championRef2 = this.afs.collection('Users').doc(champId).collection('WeeklyTasks');
                championRef2.doc(action.id).set(action);
                var championRef = this.afs.collection('Users').doc(champId).collection('myenterprises').doc(action.companyId).collection('WeeklyActions');
                championRef.doc(action.id).set(action);
                var weeklyRef = this.afs.collection('Users').doc(champId).collection('WeeklyActions');
                var allMyActionsRef = this.afs.collection('Users').doc(action.champion.id).collection('actionItems');
                weeklyRef.doc(action.id).set(action);
                allMyActionsRef.doc(action.id).set(action);
            }
            ;
        }
    };
    EnterpriseProfileComponent.prototype.editAction = function (startDate, endDate) {
        console.log(startDate);
        console.log(endDate);
        console.log(moment__WEBPACK_IMPORTED_MODULE_7__(startDate, "YYYY-MM-DD"));
        console.log(moment__WEBPACK_IMPORTED_MODULE_7__(endDate, "YYYY-MM-DD"));
        var champId = this.selectedAction.champion.id;
        this.selectedAction.startDay = moment__WEBPACK_IMPORTED_MODULE_7__(startDate, 'YYYY-MM-DD').format('ddd').toString();
        this.selectedAction.endDay = moment__WEBPACK_IMPORTED_MODULE_7__(endDate, 'YYYY-MM-DD').format('ddd').toString();
        this.selectedAction.startDate = moment__WEBPACK_IMPORTED_MODULE_7__(startDate).format('L');
        this.selectedAction.endDate = moment__WEBPACK_IMPORTED_MODULE_7__(endDate).format('L');
        // this.selectedAction.targetQty = 0;
        // this.selectedAction.start = "";
        // this.selectedAction.end = "";
        console.log(this.selectedAction.startDate);
        console.log(this.selectedAction.endDate);
        this.selectedAction.startWeek = moment__WEBPACK_IMPORTED_MODULE_7__(endDate, "YYYY-MM-DD").week().toString();
        this.selectedAction.endWeek = moment__WEBPACK_IMPORTED_MODULE_7__(startDate, "YYYY-MM-DD").week().toString();
        // this.selectedAction.startWeek = moment(startDate, "YYYY-MM-DD").week().toString();
        console.log('the actionItem-->' + this.selectedAction.name);
        // Project update
        if (this.selectedAction.projectId != "") {
            var prjectCompWeeklyRef = this.afs.collection('Projects').doc(this.selectedAction.projectId).collection('enterprises').doc(this.compId).collection('WeeklyActions');
            prjectCompWeeklyRef.doc(this.selectedAction.id).set(this.selectedAction);
        }
        ;
        // Company update
        if (this.selectedAction.companyId != "") {
            var allMyActionsRef = this.afs.collection('Enterprises').doc(this.selectedAction.companyId).collection('actionItems');
            var allWeekActionsRef = this.afs.collection('Enterprises').doc(this.selectedAction.companyId).collection('WeeklyActions');
            var myTaskActionsRef = this.afs.collection('Enterprises').doc(this.selectedAction.companyId).collection('tasks').doc(this.selectedAction.taskId).collection('actionItems');
            allMyActionsRef.doc(this.selectedAction.id).set(this.selectedAction);
            allWeekActionsRef.doc(this.selectedAction.id).set(this.selectedAction);
            myTaskActionsRef.doc(this.selectedAction.id).set(this.selectedAction);
            if (this.selectedAction.projectId != "") {
                var weeklyRef = this.afs.collection('Enterprises').doc(this.selectedAction.companyId).collection('projects').doc(this.selectedAction.projectId).collection('WeeklyActions');
                weeklyRef.doc(this.selectedAction.id).set(this.selectedAction);
            }
        }
        ;
        if (this.selectedAction.byId == this.selectedAction.champion.id) {
            if (this.selectedAction.byId != "") {
                var creatorRef = this.afs.collection('Users').doc(this.selectedAction.byId).collection('myenterprises').doc(this.selectedAction.companyId).collection('WeeklyActions');
                creatorRef.doc(this.selectedAction.id).set(this.selectedAction);
                var weeklyRef = this.afs.collection('Users').doc(this.selectedAction.byId).collection('WeeklyActions');
                var allMyActionsRef = this.afs.collection('Users').doc(this.selectedAction.byId).collection('actionItems');
                weeklyRef.doc(this.selectedAction.id).set(this.selectedAction);
                allMyActionsRef.doc(this.selectedAction.id).set(this.selectedAction);
            }
            ;
        }
        if (this.selectedAction.byId != this.selectedAction.champion.id) {
            // creator update
            if (this.selectedAction.byId != "") {
                var creatorRef2 = this.afs.collection('Users').doc(this.selectedAction.byId).collection('WeeklyActions');
                creatorRef2.doc(this.selectedAction.id).set(this.selectedAction);
                var creatorRef = this.afs.collection('Users').doc(this.selectedAction.byId).collection('myenterprises').doc(this.selectedAction.companyId).collection('WeeklyActions');
                creatorRef.doc(this.selectedAction.id).set(this.selectedAction);
                var weeklyRef = this.afs.collection('Users').doc(this.selectedAction.byId).collection('WeeklyActions');
                var allMyActionsRef = this.afs.collection('Users').doc(this.selectedAction.byId).collection('actionItems');
                weeklyRef.doc(this.selectedAction.id).set(this.selectedAction);
                allMyActionsRef.doc(this.selectedAction.id).set(this.selectedAction);
            }
            ;
            // champion update
            if (champId != "") {
                var championRef2 = this.afs.collection('Users').doc(this.selectedAction.champion.id).collection('WeeklyTasks');
                championRef2.doc(this.selectedAction.id).set(this.selectedAction);
                var championRef = this.afs.collection('Users').doc(this.selectedAction.champion.id).collection('myenterprises').doc(this.selectedAction.companyId).collection('WeeklyActions');
                championRef.doc(this.selectedAction.id).set(this.selectedAction);
                var weeklyRef = this.afs.collection('Users').doc(this.selectedAction.champion.id).collection('WeeklyActions');
                var allMyActionsRef = this.afs.collection('Users').doc(this.selectedAction.champion.id).collection('actionItems');
                weeklyRef.doc(this.selectedAction.id).set(this.selectedAction);
                allMyActionsRef.doc(this.selectedAction.id).set(this.selectedAction);
            }
            ;
        }
        this.startDate = null;
        this.endDate = null;
        this.selectedAction = { uid: "", id: "", name: "", unit: "", quantity: 0, targetQty: 0, rate: 0, workHours: null, amount: 0, by: "", byId: "", type: "", champion: null, classification: null, participants: null, departmentName: "", departmentId: "", billID: "", billName: "", projectId: "", projectName: "", createdOn: "", UpdatedOn: "", actualData: null, workStatus: null, complete: false, start: null, end: null, startWeek: "", startDay: "", startDate: "", endDay: "", endDate: "", endWeek: "", taskName: "", taskId: "", companyId: "", companyName: "", classificationName: "", classificationId: "", selectedWork: false, section: this.is.getSectionInit(), actualStart: "", actualEnd: "", Hours: "" };
    };
    EnterpriseProfileComponent.prototype.editActivity = function () {
        var champId = this.selectedAction.champion.id;
        // this.selectedAction.startWeek = moment(startDate, "YYYY-MM-DD").week().toString();
        console.log('the actionItem-->' + this.selectedAction.name);
        // Project update
        if (this.selectedAction.projectId != "") {
            var prjectCompWeeklyRef = this.afs.collection('Projects').doc(this.selectedAction.projectId).collection('enterprises').doc(this.compId).collection('WeeklyActions');
            prjectCompWeeklyRef.doc(this.selectedAction.id).update({ 'name': this.selectedAction.name });
            prjectCompWeeklyRef.doc(this.selectedAction.id).update({ 'name': this.selectedAction.name });
            console.log('project updated');
        }
        ;
        // Company update
        if (this.selectedAction.companyId != "") {
            var allMyActionsRef = this.afs.collection('Enterprises').doc(this.selectedAction.companyId).collection('actionItems');
            var allWeekActionsRef = this.afs.collection('Enterprises').doc(this.selectedAction.companyId).collection('WeeklyActions');
            var myTaskActionsRef = this.afs.collection('Enterprises').doc(this.selectedAction.companyId).collection('tasks').doc(this.selectedAction.taskId).collection('actionItems');
            allMyActionsRef.doc(this.selectedAction.id).update({ 'name': this.selectedAction.name });
            allWeekActionsRef.doc(this.selectedAction.id).update({ 'name': this.selectedAction.name });
            myTaskActionsRef.doc(this.selectedAction.id).update({ 'name': this.selectedAction.name });
            console.log('company updated');
            if (this.selectedAction.projectId != "") {
                var weeklyRef = this.afs.collection('Enterprises').doc(this.selectedAction.companyId).collection('projects').doc(this.selectedAction.projectId).collection('WeeklyActions');
                weeklyRef.doc(this.selectedAction.id).update({ 'name': this.selectedAction.name });
                console.log('company projects updated');
            }
        }
        ;
        if (this.selectedAction.byId === this.selectedAction.champion.id) {
            if (this.selectedAction.byId != "") {
                var creatorRef = this.afs.collection('Users').doc(this.selectedAction.byId).collection('myenterprises').doc(this.selectedAction.companyId).collection('WeeklyActions');
                creatorRef.doc(this.selectedAction.id).update({ 'name': this.selectedAction.name });
                var weeklyRef = this.afs.collection('Users').doc(this.selectedAction.byId).collection('WeeklyActions');
                var allMyActionsRef = this.afs.collection('Users').doc(this.selectedAction.byId).collection('actionItems');
                weeklyRef.doc(this.selectedAction.id).update({ 'name': this.selectedAction.name });
                allMyActionsRef.doc(this.selectedAction.id).update({ 'name': this.selectedAction.name });
                console.log('by& champ by updated');
            }
            ;
        }
        else if (this.selectedAction.byId !== this.selectedAction.champion.id) {
            // creator update
            if (this.selectedAction.byId !== "") {
                var creatorRef2 = this.afs.collection('Users').doc(this.selectedAction.byId).collection('WeeklyActions');
                creatorRef2.doc(this.selectedAction.id).update({ 'name': this.selectedAction.name });
                var creatorRef = this.afs.collection('Users').doc(this.selectedAction.byId).collection('myenterprises').doc(this.selectedAction.companyId).collection('WeeklyActions');
                creatorRef.doc(this.selectedAction.id).update({ 'name': this.selectedAction.name });
                var weeklyRef = this.afs.collection('Users').doc(this.selectedAction.byId).collection('WeeklyActions');
                var allMyActionsRef = this.afs.collection('Users').doc(this.selectedAction.byId).collection('actionItems');
                weeklyRef.doc(this.selectedAction.id).update({ 'name': this.selectedAction.name });
                allMyActionsRef.doc(this.selectedAction.id).update({ 'name': this.selectedAction.name });
                console.log('by by updated');
            }
            ;
            // champion update
            if (champId != "") {
                console.log('champ by updated');
                var championRef2 = this.afs.collection('Users').doc(this.selectedAction.champion.id).collection('WeeklyTasks');
                championRef2.doc(this.selectedAction.id).update({ 'name': this.selectedAction.name });
                var championRef = this.afs.collection('Users').doc(this.selectedAction.champion.id).collection('myenterprises').doc(this.selectedAction.companyId).collection('WeeklyActions');
                championRef.doc(this.selectedAction.id).update({ 'name': this.selectedAction.name });
                var weeklyRef = this.afs.collection('Users').doc(this.selectedAction.champion.id).collection('WeeklyActions');
                var allMyActionsRef = this.afs.collection('Users').doc(this.selectedAction.champion.id).collection('actionItems');
                weeklyRef.doc(this.selectedAction.id).update({ 'name': this.selectedAction.name });
                allMyActionsRef.doc(this.selectedAction.id).update({ 'name': this.selectedAction.name });
            }
            ;
        }
        this.selectedAction = { uid: "", id: "", name: "", unit: "", quantity: 0, targetQty: 0, rate: 0, workHours: null, amount: 0, by: "", byId: "", type: "", champion: null, classification: null, participants: null, departmentName: "", departmentId: "", billID: "", billName: "", projectId: "", projectName: "", createdOn: "", UpdatedOn: "", actualData: null, workStatus: null, complete: false, start: null, end: null, startWeek: "", startDay: "", startDate: "", endDay: "", endDate: "", endWeek: "", taskName: "", taskId: "", companyId: "", companyName: "", classificationName: "", classificationId: "", selectedWork: false, section: this.is.getSectionInit(), actualStart: "", actualEnd: "", Hours: "" };
    };
    EnterpriseProfileComponent.prototype.compActions = function () {
        var _this = this;
        this.companyWeeklyActions = this.afs.collection('Enterprises').doc(this.compId).collection('WeeklyActions').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
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
        // this.showActions = false;
        // this.hideActions = false;
        // let currentDate = moment(new Date()).format('L');;
        var today = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "YYYY-MM-DD");
        // console.log(currentDate);
        var userDocRef = this.myDocument;
        this.viewActions = userDocRef.collection('WeeklyActions', function (ref) { return ref
            .orderBy('start', 'asc'); }
        // .limit(4)
        ).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
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
            _this.actionNo2 = actions.length;
            // if (this.actionNo == 0) {
            //   this.showActions = false;
            //   this.hideActions = true;
            // } else {
            //   this.hideActions = false;
            //   this.showActions = true;
            // }
        });
        this.showProjs = false;
        this.hideProjs = false;
        this.projs = [];
        this.myProjects = this.ps.getProjects(this.userId);
        this.myProjects.subscribe(function (projs) {
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
    EnterpriseProfileComponent.prototype.acceptRequest = function (man) {
        var companyId = this.compId;
        console.log(companyId);
        console.log(this.company);
        var partId;
        console.log(man);
        partId = man.id;
        console.log(companyId);
        this.company.participants.push(man);
        // this.newEnterprise = this.company;
        console.log('check participants array,if updated');
        var userDoc = this.afs.collection('/Users').doc(partId);
        userDoc.collection('myenterprises').doc(companyId).set(this.company);
        var compReff = this.afs.collection('Enterprises').doc(companyId);
        compReff.update(this.company);
        compReff.collection('Participants').doc(partId).set(man);
        compReff.collection('departments').doc(man.departmentId).collection('Participants').doc(partId).set(man);
        this.afs.collection('/Users').doc(this.company.byId).collection('myenterprises').doc(companyId).update(this.company);
        this.afs.collection('/Users').doc(partId).collection('enterprisesRequested').doc(companyId).delete();
        this.afs.collection('Enterprises').doc(companyId).collection('Requests').doc(partId).delete();
        // this.resetForm();
    };
    EnterpriseProfileComponent.prototype.refreshCompany = function () {
        var _this = this;
        // this.es.compParams(this.company.id);
        console.log('kkkkkkk......... no bugs');
        this.companies = this.es.getColoursCompanies();
        this.projects = this.es.getCompanyProjects(this.compId);
        this.compProjects = this.es.getCompanyProjects(this.compId);
        this.allCompProjects = this.es.getCompanyProjects(this.compId);
        this.myTasks = this.es.getMyCompanyTasks(this.compId, this.userId);
        this.tasksImChamp = this.es.getTasksImChamp(this.compId, this.userId);
        this.departments = this.es.getCompanyDepts(this.compId);
        this.departments1 = this.es.getCompanyDepts(this.compId);
        this.departments2 = this.es.getCompanyDepts(this.compId);
        this.departments3 = this.es.getCompanyDepts(this.compId);
        this.departments4 = this.es.getCompanyDepts(this.compId);
        this.departsList = this.es.getCompanyDepts(this.compId);
        this.companyDpts = this.es.getCompanyDepts(this.compId);
        this.companyDpts1 = this.es.getCompanyDepts(this.compId);
        this.companyDptsArray = this.es.getCompanyDepts(this.compId);
        this.staff = this.es.getStaff(this.compId);
        this.allStaff = this.es.getStaff(this.compId);
        this.staff3 = this.es.getStaff(this.compId);
        this.compStaffList = this.es.getStaff(this.compId);
        this.compStaff2 = this.es.getStaff(this.compId);
        this.companyStaff = this.es.getStaff(this.compId);
        this.companyProjects = this.es.getCompanyProjects(this.compId);
        this.assets = this.es.getCompanyAssets(this.compId);
        this.clients = this.es.getClients(this.compId);
        this.subsidiaries = this.es.getCompanySubsidiaries(this.compId);
        this.compServices = [null];
        var usersRef = this.afs.collection('Enterprises').doc(this.compId).collection('Participants').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        usersRef.subscribe(function (ref) {
            var index = ref.findIndex(function (myCompProfile) { return myCompProfile.id === _this.userId; });
            if (index > -1) {
                var value = ref[index];
                _this.myCompProfile = value;
                console.log(_this.myCompProfile);
                // this.workdemo = false;
            }
            else {
            }
        });
        this.afs.collection('Enterprises').doc(this.compId).collection('projects').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.staffRequests = this.afs.collection('Enterprises').doc(this.compId).collection('Requests').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.tasks = this.afs.collection('Enterprises').doc(this.compId).collection('tasks', function (ref) { return ref.orderBy('start'); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            _this.myTaskData = data;
            _this.myTaskData.when = moment__WEBPACK_IMPORTED_MODULE_7__(data.start, "YYYY-MM-DD").fromNow().toString();
            _this.myTaskData.then = moment__WEBPACK_IMPORTED_MODULE_7__(data.finish, "YYYY-MM-DD").fromNow().toString();
            return __assign({ id: id }, data);
        }); }));
        this.tasks.subscribe(function (tasks) {
            console.log(tasks);
            _this.OutstandingTasks = [];
            _this.CurrentTAsks = [];
            _this.UpcomingTAsks = [];
            _this.ShortTermTAsks = [];
            _this.MediumTermTAsks = [];
            _this.LongTermTAsks = [];
            tasks.forEach(function (data) {
                var today = moment__WEBPACK_IMPORTED_MODULE_7__(new Date(), "YYYY-MM-DD");
                // if (data.champion !== null || data.champion.id !== "" || data.champion.id !== undefined || data.champion.id !== null ){
                // if (data.champion.id === this.userId) {
                if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isSameOrBefore(today) && moment__WEBPACK_IMPORTED_MODULE_7__(data.finish).isSameOrAfter(today)) {
                    // currentWorkItems
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
                    if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isSameOrBefore(today.add(3, "month"))) {
                        _this.ShortTermTAsks.push(data);
                    }
                    else if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isSameOrBefore(today.add(12, "month"))) {
                        _this.MediumTermTAsks.push(data);
                    }
                    else if (moment__WEBPACK_IMPORTED_MODULE_7__(data.start).isBefore(today.add(12, "month"))) {
                        _this.LongTermTAsks.push(data);
                        console.log('long term Tasks' + ' ' + _this.LongTermTAsks);
                    }
                    console.log(_this.OutstandingTasks);
                }
                ;
                // }
                //  }
            });
            _this.allEnterpriseTasks = tasks;
        });
        this.coloursUsers = this.pns.getColoursUsers();
        this.coloursUsersList = this.pns.getColoursUsers();
        this.projectsCollection = this.afs.collection('/Users').doc(this.userId).collection('projects').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.enterpriseCollection = this.afs.collection('/Users').doc(this.userId).collection('myenterprises').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        // return
    };
    // compReport(){
    //   this.rp.compParams(this.company);
    // }
    EnterpriseProfileComponent.prototype.viewStaff = function (x) {
        console.log(x);
        this.setCompStaff = x;
    };
    EnterpriseProfileComponent.prototype.setDptData = function (staffDepartment) {
        console.log(staffDepartment);
        this.staffDepartment = staffDepartment;
    };
    EnterpriseProfileComponent.prototype.saveStaffData = function (updatedStaff) {
        console.log(this.setCompStaff);
        console.log(updatedStaff);
        // if (this.staffDepartment.name !== "" || this.staffDepartment.name !== null) {
        //   this.setCompStaff.department = this.staffDepartment.name;  // checked
        //   this.setCompStaff.departmentId = this.staffDepartment.id;  // checked
        // } else {
        //   this.setCompStaff.department = this.setCompStaff.department;  // checked
        //   this.setCompStaff.departmentId = this.setCompStaff.departmentId;  // checked
        // }
        this.setCompStaff.address = updatedStaff.address; // checked
        this.setCompStaff.nationality = updatedStaff.nationality; // checked
        this.setCompStaff.nationalId = updatedStaff.nationalId; // checked
        this.setCompStaff.phoneNumber = updatedStaff.phoneNumber; // checked
        this.setCompStaff.bus_email = updatedStaff.bus_email; // checked
        this.setCompStaff.name = updatedStaff.name; // checked
        console.log(this.setCompStaff);
        this.pageBack();
        this.afs.collection('Enterprises').doc(this.compId).collection('Participants').doc(this.setCompStaff.id).update(this.setCompStaff);
        // this.afs.collection('Users').doc(this.userId).update({ 
        this.afs.collection('Users').doc(this.setCompStaff.id).update({
            'name': updatedStaff.name,
            'address': updatedStaff.address,
            'phoneNumber': updatedStaff.phoneNumber,
            'nationality': updatedStaff.nationality,
            'nationalId': updatedStaff.nationalId
        });
    };
    EnterpriseProfileComponent.prototype.pageNext = function () {
        this.pgOne = false;
        this.pgTwo = true;
    };
    EnterpriseProfileComponent.prototype.pageBack = function () {
        this.pgOne = true;
        this.pgTwo = false;
    };
    EnterpriseProfileComponent.prototype.pagePreview = function () {
        this.pgThree = true;
        this.pgTwo = false;
    };
    EnterpriseProfileComponent.prototype.setDel = function (tss) {
        this.tss = tss;
    };
    EnterpriseProfileComponent.prototype.deleteTask = function () {
        var task = this.tss;
        console.log(task.name + " " + "Removed");
        var taskId = task.id;
        var userRef = this.afs.collection('Users').doc(task.byId).collection('tasks').doc(taskId);
        var champRef = this.afs.collection('Users').doc(task.champion.id).collection('tasks').doc(taskId);
        var entRef = this.afs.collection('Enterprises').doc(this.compId).collection('tasks').doc(taskId);
        // let userEntDeptRef = this.afs.collection('Enterprises').doc(this.compId).collection('departments').doc(task.departmentId).collection('tasks').doc(taskId);
        userRef.delete().catch(function (error) { console.log(error); });
        champRef.delete().catch(function (error) { console.log(error); });
        entRef.delete().catch(function (error) { console.log(error); });
        // entDeptRef.delete();
        // userEntDeptRef.delete();
        if (task.departmentId != "") {
            var entDeptRef = this.afs.collection('Enterprises').doc(this.compId).collection('departments').doc(task.departmentId).collection('tasks').doc(taskId);
            var userEntDeptRef = this.afs.collection('Enterprises').doc(this.compId).collection('departments').doc(task.departmentId).collection('Participants')
                .doc(task.champion.id).collection('tasks').doc(taskId);
            userEntDeptRef.delete();
            entDeptRef.delete();
            console.log('deleted from Department succesfully');
            if (task.projectId != "") {
                var entProjRef = this.afs.collection('Enterprises').doc(this.compId).collection('projects').doc(task.projectId).collection('tasks');
                var projectsRef = this.afs.collection('Projects').doc(task.projectId).collection('tasks');
                var projectCompanyRef = this.afs.collection('Projects').doc(task.projectId).collection('enterprises').doc(this.compId).collection('tasks');
                var userProjRef = this.afs.collection('Users').doc(task.byId).collection('projects').doc(task.projectId).collection('tasks');
                var champProjRef = this.afs.collection('Users').doc(task.champion.id).collection('projects').doc(task.projectId).collection('tasks');
                entProjRef.doc(taskId).delete().catch(function (error) { console.log(error); });
                projectsRef.doc(taskId).delete().catch(function (error) { console.log(error); });
                projectCompanyRef.doc(taskId).delete().catch(function (error) { console.log(error); });
                userProjRef.doc(taskId).delete().catch(function (error) { console.log(error); });
                champProjRef.doc(taskId).delete().catch(function (error) { console.log(error); });
                console.log('deleted from Project successfully');
            }
            else {
                console.log('No Project selected');
                // what happens if projectID is personal
            }
        }
        else {
            console.log('No Department selected');
            // what happens if projectID is personal
        }
        this.tss = { name: "", champion: null, projectName: "", department: "", departmentId: "", start: "", startDay: "", startWeek: "", startMonth: "", startQuarter: "", startYear: "", finish: "", finishDay: "", finishWeek: "", finishMonth: "", finishQuarter: "", finishYear: "", by: "", createdOn: "", projectId: "", byId: "", projectType: "", companyName: "", companyId: "", trade: "", section: null, complete: null, id: "", participants: null, status: "", classification: null };
    };
    EnterpriseProfileComponent.prototype.deleteDept = function (x) {
        console.log(x);
        var deptId = x.id;
        var id = this.compId; //set 
        //  delete from the enterprise's departments
        var tRef = this.afs.collection('Enterprises').doc(this.compId).collection('departments');
        tRef.doc(deptId).delete();
    };
    EnterpriseProfileComponent.prototype.deleteSubs = function (x) {
        console.log(x);
        console.log(x.id);
        //  delete from the enterprise's subs
        var tRef = this.afs.collection('Enterprises').doc(this.compId).collection('subsidiaries');
        tRef.doc(x.id).delete();
    };
    EnterpriseProfileComponent.prototype.doc$ = function (ref) {
        console.log(this.companyName);
        return;
    };
    EnterpriseProfileComponent.prototype.Update = function () {
        var _this = this;
        var usersRef = this.afs.collection('Enterprises').doc(this.compId).collection('Participants').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        usersRef.subscribe(function (allusers) {
            allusers.forEach(function (element) {
                // totalLialibility$ = + element.amount;
                if (element.hierarchy == "" || element.hierarchy == null || element.hierarchy == undefined) {
                    element.hierarchy = "";
                    _this.afs.collection('Enterprises').doc(_this.compId).collection('Participants').doc(element.id).update({ 'hierarchy': "" });
                    console.log(element.name + ' hierarchy updated');
                }
                else {
                }
                if (element.address == "" || element.address == null || element.address == undefined) {
                    element.address = "";
                    _this.afs.collection('Enterprises').doc(_this.compId).collection('Participants').doc(element.id).update({ 'address': "" });
                    console.log(element.name + ' address updated');
                }
                else {
                }
                if (element.phoneNumber == "" || element.phoneNumber == null || element.phoneNumber == undefined) {
                    element.phoneNumber = "";
                    _this.afs.collection('Enterprises').doc(_this.compId).collection('Participants').doc(element.id).update({ 'phoneNumber': "" });
                    console.log(element.name + ' phoneNumber updated');
                }
                else {
                }
                if (element.bus_email == "" || element.bus_email == null || element.bus_email == undefined) {
                    element.bus_email = "";
                    _this.afs.collection('Enterprises').doc(_this.compId).collection('Participants').doc(element.id).update({ 'bus_email': "" });
                    console.log(element.name + ' bus_email updated');
                }
                else {
                }
                if (element.nationalId == "" || element.nationalId == null || element.nationalId == undefined) {
                    element.nationalId = "";
                    _this.afs.collection('Enterprises').doc(_this.compId).collection('Participants').doc(element.id).update({ 'nationalId': "" });
                    console.log(element.name + ' nationalId updated');
                }
                else {
                }
                if (element.nationality == "" || element.nationality == null || element.nationality == undefined) {
                    element.nationality = "";
                    _this.afs.collection('Enterprises').doc(_this.compId).collection('Participants').doc(element.id).update({ 'nationality': "" });
                    console.log(element.name + ' nationality updated');
                }
                else {
                }
            });
        });
        // let deptRef = this.afs.collection<Enterprise>('Enterprises').doc(this.compId).collection('departments').snapshotChanges().pipe(
        //   map(b => b.map(a => {
        //     const data = a.payload.doc.data() as Department;
        //     const id = a.payload.doc.id;
        //     return { id, ...data };
        //   }))
        // );
        // deptRef.forEach(element => {
        // });
    };
    EnterpriseProfileComponent.prototype.dataCall = function () {
        var _this = this;
        this.myDocument = this.afs.collection('Users').doc(this.user.uid);
        this.userProfile = this.myDocument.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (a) {
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
        });
        this.comp = this.as.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (params) {
            var id = params.get('id');
            _this.compId = id;
            _this.es.compParams(id);
            console.log(id);
            var Ref = _this.afs.collection('Enterprises').doc(id);
            _this.newCompany = Ref.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (doc) {
                var data = doc.payload.data();
                var cname = doc.payload.get('name');
                _this.companyName = cname;
                console.log(_this.companyName);
                console.log('test if I get data on 781');
                // console.log(data);
                _this.testCompany = data;
                _this.company = data;
                return __assign({ id: id }, data);
            }));
            _this.compActions();
            _this.refreshCompany();
            return _this.newCompany;
        }));
        return this.comp;
    };
    EnterpriseProfileComponent.prototype.doParams = function () {
        var _this = this;
        this.comp = this.as.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (params) {
            var id = params.get('id');
            _this.compId = id;
            // this.es.compParams(id);
            return _this.newCompany;
        }));
    };
    EnterpriseProfileComponent.prototype.newTask = function () {
        console.log(this.task);
        var pr;
        console.log(this.selectedCompany);
        console.log(this.selectedDepartment);
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
        this.task.finishDay = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").subtract(2, 'd').dayOfYear());
        this.task.finishWeek = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").week());
        this.task.finishMonth = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").month());
        this.task.finishQuarter = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").quarter());
        this.task.finishYear = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").year());
        this.task.complete = false;
        console.log(this.task);
        console.log(this.task.start);
        console.log(this.task.startDay);
        // this.task.champion = this.myData;
        // if (this.selectedProject.type === 'Enterprise') {
        //   this.task.projectId = this.proj_ID;
        //   this.task.projectName = this.selectedProject.name;
        //   this.task.projectType = this.selectedProject.type;
        //   if (this.selectedDepartment.id != "") {
        //     this.task.department = this.selectedDepartment.name;
        //     this.task.departmentId = this.selectedDepartment.id;
        //   }
        // }
        // else {
        //   // what happens if projectID is personal
        // }
        console.log('Task' + ' ' + this.task.name);
        console.log('Company' + ' ' + this.company.name);
        console.log('selectedDepartment' + ' ' + this.selectedDepartment.name);
        this.ts.addTask(this.task, this.company, this.selectedDepartment);
        this.selectedCompany = this.is.getSelectedCompany();
        this.userChampion = { name: "", id: "", email: "", bus_email: "", phoneNumber: "", nationalId: "", nationality: "", photoURL: "", address: "", department: "", departmentId: "", hierarchy: "" };
        this.task = { name: "", champion: null, projectName: "", department: "", departmentId: "", start: "", startDay: "", startWeek: "", startMonth: "", startQuarter: "", startYear: "", finish: "", finishDay: "", finishWeek: "", finishMonth: "", finishQuarter: "", finishYear: "", by: "", createdOn: "", projectId: "", byId: "", projectType: "", companyName: "", companyId: "", trade: "", section: null, complete: null, id: "", participants: null, status: "", classification: null };
        this.selectedProject = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", completion: "" };
    };
    EnterpriseProfileComponent.prototype.newProjectTask = function () {
        console.log(this.task);
        var pr;
        console.log(this.selectedCompany);
        console.log(this.selectedDepartment);
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
        this.task.finishDay = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").subtract(2, 'd').dayOfYear());
        this.task.finishWeek = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").week());
        this.task.finishMonth = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").month());
        this.task.finishQuarter = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").quarter());
        this.task.finishYear = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").year());
        this.task.complete = false;
        console.log(this.task);
        console.log(this.task.start);
        console.log(this.task.startDay);
        console.log('Task' + ' ' + this.task.name);
        console.log('Company' + ' ' + this.company.name);
        console.log('selectedDepartment' + ' ' + this.selectedDepartment.name);
        this.ts.addTask(this.task, this.company, this.selectedDepartment);
        this.selectedCompany = this.is.getSelectedCompany();
        this.userChampion = { name: "", id: "", email: "", bus_email: "", phoneNumber: "", nationalId: "", nationality: "", photoURL: "", address: "", department: "", departmentId: "", hierarchy: "" };
        this.task = { name: "", champion: null, projectName: "", department: "", departmentId: "", start: "", startDay: "", startWeek: "", startMonth: "", startQuarter: "", startYear: "", finish: "", finishDay: "", finishWeek: "", finishMonth: "", finishQuarter: "", finishYear: "", by: "", createdOn: "", projectId: "", byId: "", projectType: "", companyName: "", companyId: "", trade: "", section: null, complete: null, id: "", participants: null, status: "", classification: null };
        this.selectedProject = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", completion: "" };
    };
    EnterpriseProfileComponent.prototype.newCompTask = function () {
        console.log(this.task);
        var pr;
        console.log(this.selectedCompany);
        console.log(this.selectedDepartment);
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
        console.log('Company' + ' ' + this.company.name);
        console.log('selectedDepartment' + ' ' + this.selectedDepartment.name);
        this.ts.addplainCompTask(this.task, this.company, this.selectedDepartment);
        this.selectedCompany = this.is.getSelectedCompany();
        this.userChampion = { name: "", id: "", email: "", bus_email: "", phoneNumber: "", nationalId: "", nationality: "", photoURL: "", address: "", department: "", departmentId: "", hierarchy: "" };
        this.task = { name: "", champion: null, projectName: "", department: "", departmentId: "", start: "", startDay: "", startWeek: "", startMonth: "", startQuarter: "", startYear: "", finish: "", finishDay: "", finishWeek: "", finishMonth: "", finishQuarter: "", finishYear: "", by: "", createdOn: "", projectId: "", byId: "", projectType: "", companyName: "", companyId: "", trade: "", section: null, complete: null, id: "", participants: null, status: "", classification: null };
        this.selectedProject = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", completion: "" };
    };
    EnterpriseProfileComponent.prototype.updateCompTask = function () {
        console.log(this.task);
        var pr;
        console.log(this.selectedDepartment);
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
        console.log('Company' + ' ' + this.company.name);
        console.log('selectedDepartment' + ' ' + this.selectedDepartment.name);
        this.ts.updateCompTask(this.task, this.company, this.selectedDepartment);
        this.selectedCompany = this.is.getSelectedCompany();
        this.userChampion = { name: "", id: "", email: "", bus_email: "", phoneNumber: "", nationalId: "", nationality: "", photoURL: "", address: "", department: "", departmentId: "", hierarchy: "" };
        this.task = { name: "", champion: null, projectName: "", department: "", departmentId: "", start: "", startDay: "", startWeek: "", startMonth: "", startQuarter: "", startYear: "", finish: "", finishDay: "", finishWeek: "", finishMonth: "", finishQuarter: "", finishYear: "", by: "", createdOn: "", projectId: "", byId: "", projectType: "", companyName: "", companyId: "", trade: "", section: null, complete: null, id: "", participants: null, status: "", classification: null };
        this.selectedProject = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", completion: "" };
        this.selectedDepartment = { name: "", by: "", byId: "", companyName: "", companyId: "", createdOn: "", id: "", hod: null };
    };
    EnterpriseProfileComponent.prototype.updateCompTask2 = function () {
        console.log(this.task);
        var pr;
        console.log(this.selectedDepartment);
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
        console.log('Company' + ' ' + this.company.name);
        console.log('selectedDepartment' + ' ' + this.selectedDepartment.name);
        this.ts.update2plainCompTask(this.task);
        this.selectedCompany = this.is.getSelectedCompany();
        this.userChampion = { name: "", id: "", email: "", bus_email: "", phoneNumber: "", nationalId: "", nationality: "", photoURL: "", address: "", department: "", departmentId: "", hierarchy: "" };
        this.task = { name: "", champion: null, projectName: "", department: "", departmentId: "", start: "", startDay: "", startWeek: "", startMonth: "", startQuarter: "", startYear: "", finish: "", finishDay: "", finishWeek: "", finishMonth: "", finishQuarter: "", finishYear: "", by: "", createdOn: "", projectId: "", byId: "", projectType: "", companyName: "", companyId: "", trade: "", section: null, complete: null, id: "", participants: null, status: "", classification: null };
        this.selectedProject = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", completion: "" };
        this.selectedDepartment = { name: "", by: "", byId: "", companyName: "", companyId: "", createdOn: "", id: "", hod: null };
    };
    EnterpriseProfileComponent.prototype.testNewTask = function () {
        console.log(this.task);
        console.log(this.selectedProject);
        var newClassification = { name: "Work", createdOn: new Date().toISOString(), id: "colourWorkId", plannedTime: "", actualTime: "", Varience: "" };
        console.log(newClassification);
        this.task.classification = newClassification;
        console.log(this.task.classification);
        this.task.companyName = this.company.name;
        this.task.companyId = this.compId;
        this.task.projectId = "";
        this.task.projectName = "";
        this.task.projectType = "";
        this.task.champion = this.myData;
        if (this.selectedDepartment.id != "") {
            this.task.department = this.selectedDepartment.name;
            this.task.departmentId = this.selectedDepartment.id;
            console.log('selectedDepartment' + ' ' + this.selectedDepartment.name);
            if (this.userChampion.id != "") {
                this.task.champion = this.userChampion;
                console.log('Champion' + ' ' + this.userChampion.name);
                if (this.selectedProject.id != "") {
                    this.task.projectId = this.proj_ID;
                    this.task.projectName = this.selectedProject.name;
                    this.task.projectType = this.selectedProject.type;
                    console.log('Project selected' + ' ' + this.selectedProject.name);
                    //create company Task without any Project selected
                    this.newProjectTask();
                }
                else {
                    console.log('No project selected');
                    //create company Task without any Project selected
                    this.newCompTask();
                }
            }
            else {
                console.log('No Champion selected');
                this.task.champion = this.myData;
            }
        }
        else {
            console.log('No Department selected');
            // what happens if projectID is personal
        }
        console.log('Task' + ' ' + this.task.name);
        console.log('Company' + ' ' + this.company.name);
        // console.log('selectedDepartment' + ' ' + this.selectedDepartment.name);
        // console.log('Project selected' + ' ' + this.selectedProject.name);
    };
    EnterpriseProfileComponent.prototype.testUpdateTask = function () {
        console.log(this.tss);
        // console.log(this.selectedProject);
        // let newClassification = { name: "Work", createdOn: new Date().toISOString(), id: "colourWorkId", plannedTime: "", actualTime: "", Varience: "" };
        console.log(this.tss.classification);
        this.tss.classification;
        console.log(this.tss.classification);
        this.tss.companyName = this.company.name;
        this.tss.companyId = this.compId;
        // this.tss.projectId = "";
        // this.tss.projectName = "";
        // this.tss.projectType = "";
        // this.tss.champion = this.myData;
        if (this.selectedDepartment.id != "") {
            this.tss.department = this.selectedDepartment.name;
            this.tss.departmentId = this.selectedDepartment.id;
            console.log('selectedDepartment' + ' ' + this.selectedDepartment.name);
            if (this.userChampion.id != "") {
                this.tss.champion = this.userChampion;
                console.log('Champion' + ' ' + this.userChampion.name);
                if (this.selectedProject.id != "") {
                    this.tss.projectId = this.proj_ID;
                    this.tss.projectName = this.selectedProject.name;
                    this.tss.projectType = this.selectedProject.type;
                    console.log('Project selected' + ' ' + this.selectedProject.name);
                    //create company Task without any Project selected
                    this.updateProjectTask();
                }
                else {
                    console.log('No project selected');
                    //create company Task without any Project selected
                    this.updateCompTask();
                }
            }
            else {
                console.log('No Champion selected');
                this.tss.champion = this.myData;
            }
        }
        else if (this.tss.department != "") {
            if (this.tss.projectId != "") {
                console.log('Project selected' + ' ' + this.selectedProject.name);
                //create company Task without any Project selected
                this.updateProjectTask2();
            }
            else {
                console.log('No project selected');
                //create company Task without any Project selected
                this.updateCompTask2();
            }
            console.log('No reselected Department');
        }
        else {
            console.log('No Department selected');
            // what happens if projectID is personal
        }
        console.log('Task' + ' ' + this.tss.name);
        console.log('Company' + ' ' + this.company.name);
        // console.log('selectedDepartment' + ' ' + this.selectedDepartment.name);
        // console.log('Project selected' + ' ' + this.selectedProject.name);
    };
    EnterpriseProfileComponent.prototype.updateProjectTask = function () {
        console.log(this.task);
        var pr;
        console.log(this.selectedCompany);
        console.log(this.selectedDepartment);
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
        this.task.finishDay = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").subtract(2, 'd').dayOfYear());
        this.task.finishWeek = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").week());
        this.task.finishMonth = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").month());
        this.task.finishQuarter = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").quarter());
        this.task.finishYear = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").year());
        this.task.complete = false;
        console.log(this.task);
        console.log(this.task.start);
        console.log(this.task.startDay);
        console.log('Task' + ' ' + this.task.name);
        console.log('Company' + ' ' + this.company.name);
        console.log('selectedDepartment' + ' ' + this.selectedDepartment.name);
        this.ts.updateTask(this.task, this.company, this.selectedDepartment);
        this.selectedCompany = this.is.getSelectedCompany();
        this.userChampion = { name: "", id: "", email: "", bus_email: "", phoneNumber: "", nationalId: "", nationality: "", photoURL: "", address: "", department: "", departmentId: "", hierarchy: "" };
        this.task = { name: "", champion: null, projectName: "", department: "", departmentId: "", start: "", startDay: "", startWeek: "", startMonth: "", startQuarter: "", startYear: "", finish: "", finishDay: "", finishWeek: "", finishMonth: "", finishQuarter: "", finishYear: "", by: "", createdOn: "", projectId: "", byId: "", projectType: "", companyName: "", companyId: "", trade: "", section: null, complete: null, id: "", participants: null, status: "", classification: null };
        this.selectedProject = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", completion: "" };
        this.selectedDepartment = { name: "", by: "", byId: "", companyName: "", companyId: "", createdOn: "", id: "", hod: null };
    };
    EnterpriseProfileComponent.prototype.updateProjectTask2 = function () {
        console.log(this.task);
        var pr;
        console.log(this.selectedCompany);
        console.log(this.selectedDepartment);
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
        this.task.finishDay = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").subtract(2, 'd').dayOfYear());
        this.task.finishWeek = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").week());
        this.task.finishMonth = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").month());
        this.task.finishQuarter = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").quarter());
        this.task.finishYear = String(moment__WEBPACK_IMPORTED_MODULE_7__(this.finish, "YYYY-MM-DD").year());
        this.task.complete = false;
        console.log(this.task);
        console.log(this.task.start);
        console.log(this.task.startDay);
        console.log('Task' + ' ' + this.task.name);
        console.log('Company' + ' ' + this.company.name);
        console.log('selectedDepartment' + ' ' + this.selectedDepartment.name);
        this.ts.updateTask2(this.task);
        this.selectedCompany = this.is.getSelectedCompany();
        this.userChampion = { name: "", id: "", email: "", bus_email: "", phoneNumber: "", nationalId: "", nationality: "", photoURL: "", address: "", department: "", departmentId: "", hierarchy: "" };
        this.task = { name: "", champion: null, projectName: "", department: "", departmentId: "", start: "", startDay: "", startWeek: "", startMonth: "", startQuarter: "", startYear: "", finish: "", finishDay: "", finishWeek: "", finishMonth: "", finishQuarter: "", finishYear: "", by: "", createdOn: "", projectId: "", byId: "", projectType: "", companyName: "", companyId: "", trade: "", section: null, complete: null, id: "", participants: null, status: "", classification: null };
        this.selectedProject = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", champion: null, createdOn: "", id: "", location: "", sector: "", completion: "" };
        this.selectedDepartment = { name: "", by: "", byId: "", companyName: "", companyId: "", createdOn: "", id: "", hod: null };
    };
    //00000000000000000000000000000000000000000000000000000000000000000
    EnterpriseProfileComponent.prototype.toggle = function () {
        this.show = !this.show;
        if (this.show)
            this.buttonName = "Hide";
        else
            this.buttonName = "Show";
    };
    EnterpriseProfileComponent.prototype.toggleEnt = function () {
        this.showEnterprise = !this.showEnterprise;
        if (this.showEnterprise)
            this.buttonName = "Hide";
        else
            this.buttonName = "Show";
    };
    EnterpriseProfileComponent.prototype.toggleUsersTable = function () {
        this.showUserTable = !this.showUserTable;
        if (this.showUserTable) {
            this.btnTable = "Hide";
        }
        else {
            this.btnTable = "Show";
        }
    };
    EnterpriseProfileComponent.prototype.toggleDeptUsersTable = function () {
        this.showDeptPartTable = !this.showDeptPartTable;
        if (this.showDeptPartTable) {
            this.btnDeptPartTable = "Hide";
        }
        else {
            this.btnDeptPartTable = "Show";
        }
    };
    EnterpriseProfileComponent.prototype.toggleDeptTable = function () {
        this.showDeptTable = !this.showDeptTable;
        if (this.showDeptTable) {
            this.btnDeptTable = "Hide";
        }
        else {
            this.btnDeptTable = "Show";
        }
    };
    EnterpriseProfileComponent.prototype.toggleProjTable = function () {
        this.showProjectTable = !this.showProjectTable;
        if (this.showProjectTable) {
            this.btnProjTable = "Hide";
        }
        else {
            this.btnProjTable = "Show";
        }
    };
    EnterpriseProfileComponent.prototype.toggleCompTable = function () {
        this.showCompanyTable = !this.showCompanyTable;
        if (this.showCompanyTable) {
            this.btnCompanyTable = "Hide";
        }
        else {
            this.btnCompanyTable = "Show";
        }
    };
    EnterpriseProfileComponent.prototype.showDptName = function () {
        this.showDpt = true;
    };
    EnterpriseProfileComponent.prototype.showComp = function () {
        this.showClient = true;
    };
    EnterpriseProfileComponent.prototype.toggleProj = function () {
        this.showProj = !this.showProj;
        if (this.showProj)
            this.btnProj = "Hide";
        else
            this.btnProj = "Show";
    };
    EnterpriseProfileComponent.prototype.toggleComp = function () {
        this.showCompany = !this.showCompany;
        if (this.showCompany)
            this.btnCompany = "Hide";
        else
            this.btnCompany = "Show";
    };
    EnterpriseProfileComponent.prototype.selectColoursUser = function (x) {
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
        if (x.hierarchy == "" || x.hierarchy == null || x.hierarchy == undefined) {
            x.hierarchy = "";
        }
        else {
        }
        var cUser = {
            name: x.name, email: x.email, bus_email: x.bus_email, id: x.id, phoneNumber: x.phoneNumber, nationalId: x.nationalId,
            photoURL: x.photoURL,
            nationality: x.nationality, address: x.address, department: x.department, departmentId: x.departmentId, hierarchy: x.hierarchy
        };
        this.userChampion = cUser;
        console.log(x);
        console.log(this.userChampion);
        this.toggleChamp();
        this.toggleUsersTable();
    };
    EnterpriseProfileComponent.prototype.selectCompanyUser = function (x) {
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
        if (x.hierarchy == "" || x.hierarchy == null || x.hierarchy == undefined) {
            x.hierarchy = "";
        }
        else {
        }
        var cUser = {
            name: x.name, email: x.email, id: x.id, bus_email: x.bus_email, phoneNumber: x.phoneNumber, nationalId: x.nationalId, photoURL: x.photoURL,
            nationality: x.nationality, address: x.address, department: x.department, departmentId: x.departmentId, hierarchy: x.hierarchy
        };
        this.userChampion = cUser;
        console.log(x);
        console.log(this.userChampion);
        this.toggleChamp();
        this.toggleUsersTable();
    };
    EnterpriseProfileComponent.prototype.selectDepartment = function (x) {
        console.log(x);
        this.selectedDepartment = x;
        this.showChamp = false;
        this.showdeptChamp = true;
        this.deptParticipants = this.afs.collection('Enterprises').doc(this.compId).collection('departments').doc(x.id).collection('Participants').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.toggleDpt();
        this.toggleDeptTable();
    };
    EnterpriseProfileComponent.prototype.selectDepartmentChamp = function (x) {
        console.log(x);
        this.userChampion = x;
        this.toggleDeptChamp();
        this.toggleDeptUsersTable();
    };
    EnterpriseProfileComponent.prototype.toggleChamp = function () {
        this.showChamp = !this.showChamp;
        if (this.showChamp)
            this.btnChamp = "Hide";
        else
            this.btnChamp = "Show";
    };
    EnterpriseProfileComponent.prototype.toggleDeptChampion = function () {
        this.showDptChamp = !this.showDptChamp;
        if (this.showDptChamp)
            this.btnDptChamp = "Hide";
        else
            this.btnDptChamp = "Show";
    };
    EnterpriseProfileComponent.prototype.toggleDpUsersTable = function () {
        this.showDptUserTable = !this.showDptUserTable;
        if (this.showUserTable) {
            this.btnDptTable = "Hide";
        }
        else {
            this.btnDptTable = "Show";
        }
    };
    EnterpriseProfileComponent.prototype.depSelectUser = function (x) {
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
        if (x.hierarchy == "" || x.hierarchy == null || x.hierarchy == undefined) {
            x.hierarchy = "";
        }
        else {
        }
        var staff = {
            name: x.name,
            email: x.email,
            bus_email: x.bus_email,
            id: x.id,
            phoneNumber: x.phoneNumber,
            by: this.user.displayName,
            byId: this.userId,
            photoURL: x.photoURL,
            department: "",
            departmentId: "",
            createdOn: new Date().toISOString(),
            address: x.address,
            nationalId: x.nationalId,
            nationality: x.nationality,
            hierarchy: x.hierarchy
        };
        console.log(x);
        console.log(staff);
        this.companystaff = staff;
        console.log(this.companystaff);
        this.toggleDeptChampion();
        this.toggleDpUsersTable();
    };
    EnterpriseProfileComponent.prototype.toggleDeptChamp = function () {
        this.showdeptChamp = !this.showdeptChamp;
        if (this.showdeptChamp)
            this.btndeptChamp = "show";
        else
            this.btndeptChamp = "Hide";
    };
    EnterpriseProfileComponent.prototype.toggleDpt = function () {
        this.showdept = !this.showdept;
        if (this.showdept)
            this.btndept = "Hide";
        else
            this.btndept = "Show";
    };
    EnterpriseProfileComponent.prototype.toggleDptChamp = function () {
        this.showdeptChamp = !this.showdeptChamp;
        if (this.showdeptChamp)
            this.btndeptChamp = "Hide";
        else
            this.btndeptChamp = "Show";
    };
    EnterpriseProfileComponent.prototype.selectCompany = function (company) {
        console.log(company);
        this.selectedCompany = company;
        console.log(this.selectedCompany);
        this.toggleComp();
        this.toggleCompTable();
    };
    EnterpriseProfileComponent.prototype.setClient = function (company) {
        console.log(company);
        this.selectedClient = company;
        this.showComp();
        console.log(this.selectedClient);
        // this.toggleComp(); this.toggleCompTable();
    };
    EnterpriseProfileComponent.prototype.selectProject = function (proj) {
        console.log(proj);
        this.proj_ID = proj.id;
        this.selectedProject = proj;
        this.toggleProj();
        this.toggleProjTable();
    };
    EnterpriseProfileComponent.prototype.setProject = function (proj) {
        console.log(proj);
        this.joinmyProject = proj;
    };
    // 0000000000000000000000000000000000000000000000000000000000000000
    // OnInit() {  }
    EnterpriseProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var tagClass = $('.tagsinput').data('color');
        if ($(".tagsinput").length != 0) {
            $('.tagsinput').tagsinput();
        }
        $('.bootstrap-tagsinput').addClass('' + tagClass + '-badge');
        this.afAuth.user.subscribe(function (user) {
            _this.userId = user.uid;
            _this.user = user;
            _this.refreshData();
            _this.dataCall().subscribe();
        });
    };
    EnterpriseProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enterprise-profile',
            template: __webpack_require__(/*! ./enterprise-profile.component.html */ "./src/app/company/enterprise-profile/enterprise-profile.component.html"),
            styles: [__webpack_require__(/*! ./enterprise-profile.component.css */ "./src/app/company/enterprise-profile/enterprise-profile.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], app_services_reports_service__WEBPACK_IMPORTED_MODULE_12__["ReportsService"], app_services_task_service__WEBPACK_IMPORTED_MODULE_8__["TaskService"], app_services_initialise_service__WEBPACK_IMPORTED_MODULE_10__["InitialiseService"], app_services_project_service__WEBPACK_IMPORTED_MODULE_11__["ProjectService"], app_services_personal_service__WEBPACK_IMPORTED_MODULE_9__["PersonalService"], _services_enterprise_service__WEBPACK_IMPORTED_MODULE_4__["EnterpriseService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], EnterpriseProfileComponent);
    return EnterpriseProfileComponent;
}());



/***/ }),

/***/ "./src/app/company/enterprise-view/enterprise-view.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/company/enterprise-view/enterprise-view.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvZW50ZXJwcmlzZS12aWV3L2VudGVycHJpc2Utdmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/company/enterprise-view/enterprise-view.component.html":
/*!************************************************************************!*\
  !*** ./src/app/company/enterprise-view/enterprise-view.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  enterprise-view works!\n</p>\n"

/***/ }),

/***/ "./src/app/company/enterprise-view/enterprise-view.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/company/enterprise-view/enterprise-view.component.ts ***!
  \**********************************************************************/
/*! exports provided: EnterpriseViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnterpriseViewComponent", function() { return EnterpriseViewComponent; });
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

var EnterpriseViewComponent = /** @class */ (function () {
    function EnterpriseViewComponent() {
    }
    EnterpriseViewComponent.prototype.ngOnInit = function () {
    };
    EnterpriseViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-enterprise-view',
            template: __webpack_require__(/*! ./enterprise-view.component.html */ "./src/app/company/enterprise-view/enterprise-view.component.html"),
            styles: [__webpack_require__(/*! ./enterprise-view.component.css */ "./src/app/company/enterprise-view/enterprise-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EnterpriseViewComponent);
    return EnterpriseViewComponent;
}());



/***/ }),

/***/ "./src/app/company/join-enterprise/join-enterprise.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/company/join-enterprise/join-enterprise.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-cell{\r\n     padding-left: 12px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcGFueS9qb2luLWVudGVycHJpc2Uvam9pbi1lbnRlcnByaXNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7S0FDSyxrQkFBa0I7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wYW55L2pvaW4tZW50ZXJwcmlzZS9qb2luLWVudGVycHJpc2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWItY2VsbHtcclxuICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/company/join-enterprise/join-enterprise.component.html":
/*!************************************************************************!*\
  !*** ./src/app/company/join-enterprise/join-enterprise.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" *ngIf=\"afAuth.user | async as user\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"row\">\n        <div class=\"card col-lg-12\">\n          <div class=\"card-body\">\n            <div class=\"row\">\n              <div class=\"col-sm-6\">\n                <!-- <h3>Some Title Here</h3> -->\n                <h5 class=\"title na-am\">Search Company<br><small>by filtering...</small></h5>\n                <div class=\"card \">\n                  <div class=\"card-body\">\n                    <div class=\"nav-tabs-navigation\">\n                      <div class=\"nav-tabs-wrapper\">\n                        <ul id=\"tabs\" class=\"nav nav-tabs\" role=\"tablist\">\n                          <li class=\"nav-item\">\n                            <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\" (click)=\"clearSearchData()\" role=\"tab\" aria-expanded=\"true\">Search\n                              by Location</a>\n                          </li>\n                          <li class=\"nav-item\">\n                            <a class=\"nav-link\" data-toggle=\"tab\" href=\"#profile\" (click)=\"clearSearchData()\" role=\"tab\" aria-expanded=\"false\">Sector</a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                    <div id=\"my-tab-content\" class=\"tab-content text-center\">\n                      <div class=\"tab-pane active\" id=\"home\" role=\"tabpanel\" aria-expanded=\"true\">\n                        <div class=\"card-body \">\n                          <div class=\"row\">\n                            <div class=\"col-md-8 ml-auto mr-auto\">\n                              <form class=\"form-horizontal\">\n                                <div class=\"form-group\">\n                                  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchData\" name=\"location_input\"\n                                    placeholder=\"Enter location\">\n                                </div>\n                              </form>\n                            </div>\n                            <div class=\"col-md-4 card-footer \">\n                              <button type=\"submit\" class=\"info btn-link\" (click)=\"search('location', searchData);showTable()\">Search</button>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                      <div class=\"tab-pane\" id=\"profile\" role=\"tabpanel\" aria-expanded=\"false\">\n                        <div class=\"card-body \">\n                          <div class=\"row\">\n                            <div class=\"col-md-8 ml-auto mr-auto\">\n                              <form class=\"form-horizontal\">\n                                <div class=\"form-group\">\n                                  <input type=\"text\" [(ngModel)]=\"searchData\" name=\"sector_input\" class=\"form-control\"\n                                    placeholder=\"Input sector\">\n                                </div>\n                              </form>\n                            </div>\n                            <div class=\"col-md-4 card-footer \">\n                              <button type=\"submit\" class=\"info btn-link\" (click)=\"search('sector', searchData);showTable()\">Search</button>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <ng-container *ngIf=\"showSearch\">\n                <div class=\"col-sm-6\">\n                  <h5 class=\"title na-am\" style=\"margin-left: 15px;\">Company search results</h5>                  \n                  <div class=\"card-body \">\n                    <p class=\"sma na-p\">Companies in {{ searchData }} </p>                    \n                    <div class=\"table-responsive cont scrol-em\">\n                      <table class=\"table\">\n                        <thead class=\"card-category info\">\n                          <th class=\"text-left\">Name</th>\n                          <th class=\"text-left\">Sector</th>\n                          <th class=\"text-left\">Location</th>\n                          <th>Action</th>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let enterprise of viewCompanies | async \">\n                            <td class=\"text-left tab-cell\">{{ enterprise.name }} </td>\n                            <td class=\"text-left tab-cell\">{{ enterprise.sector }}</td>\n                            <td class=\"text-left tab-cell\">{{ enterprise.location }}</td>\n                            <td class=\"text-center\">\n                              <button class=\"success btn-link join\" rel=\"tooltip\" title=\"Connect to {{enterprise.name}}\"\n                                (click)=\"selectCompany(enterprise)\" data-toggle=\"modal\" data-target=\"#deptModal\">\n                                <font size=2>select</font>\n                              </button>\n                          </tr>\n                        </tbody>\n                      </table>\n                      <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\"\n                        aria-hidden=\"true\">\n                        <div class=\"modal-dialog modal-sm\">\n                          <div class=\"modal-content\">\n                            <div class=\"modal-header justify-content-center\">\n                              <div class=\"modal-profile ml-auto mr-auto text-warning\">\n                                <i class=\"nc-icon nc-bulb-63\"></i>\n                              </div>\n                            </div>\n                            <div class=\"modal-body\">\n                              <p>Send connect request to <b class=\"primary-color\">{{ (selectedCompany)?.name }}</b></p>\n                            </div>\n                            <div class=\"modal-footer\">\n                              <div class=\"left-side\">\n                                <button type=\"button\" class=\"btn btn-link btn-link\" data-dismiss=\"modal\">Close</button>\n                              </div>\n                              <div class=\"divider\"></div>\n                              <div class=\"right-side\">\n                                <button type=\"button\" class=\"btn btn-link btn-link\" (click)=\"sendRequest()\" data-dismiss=\"modal\"> send request</button><!--  (click)=\"connect2Enterprise(selectedCompany) -->\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </ng-container>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"TestdeptModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"card-body \">\n        <div class=\"card-header text-center\">\n          <p>Company selected <b class=\"primary-color\">{{ (selectedCompany)?.name }}</b></p>\n          <div *ngIf=\"showDpt\">\n            <p>You are joining {{department.name}} department</p>\n            <button type=\"text\" name=\"department_name\" class=\"primary btn-link \"\n              (click)=\"toggleUsersTable()\">Change department \n              <i class=\"fa fa-edit fa-fw\"></i>\n            </button>\n          </div>\n        </div>\n        <hr>\n        <form class=\"form-horizontal\">\n          <div class=\"row\">\n            <div class=\"col-md-10 ml-auto mr-auto\">\n              <div class=\"form-group\">\n                <ng-container *ngIf=\"showUserTable\">\n                    <code>Select a Department</code>\n                    <div class=\"table-responsive\">\n                      <table class=\"table text-left\">\n                        <thead class=\"card-category\">\n                          <th>Department</th>\n                          <th>Action</th>\n                        </thead>\n                        <tbody>\n                          <tr *ngFor=\"let dept of viewDepartments | async\" style=\"border-bottom: darkslategrey\">\n                            <td class=\"td-clrs\" style=\"padding-left: 1em\">{{ dept.name }}</td>\n                            <td class=\"td-clrs\">\n                              <button class=\"warning btn-link select\" rel=\"tooltip\" title=\"Select Department\"(click)=\"selectDepartment(dept)\">select</button>\n                              <!-- <a class=\"btn danger btn-link btn-icon btn-sm remove\" (click)=\"deleteDept(dept)\"><i\n                                  class=\"fa fa-times\"></i></a> -->\n                            </td>\n                            <hr>\n                          </tr>\n\n                          <div class=\"AddDpt\">\n                            <!-- <form action=\"\"> -->\n                              <div class=\"spacer\" style=\"height:2em\"></div>\n                              <input class=\"form-control\" placeholder=\"Add Department\" type=\"text\" [(ngModel)]=\"dpt.name\" name=\"dpt_name\">\n                              <!-- {{ today }} -->\n                              <button class=\"primary btn-link\" (click)=\"saveDpt(dpt)\">save</button>\n                          <!-- </form> -->\n                          </div>\n                        </tbody>\n                      </table>\n                    </div>\n                </ng-container>\n              </div>\n            </div>\n          </div>\n        </form>\n        <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n          <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n          </div>\n          <div class=\"divider\"></div>\n          <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"connect2Enterprise()\" data-dismiss=\"modal\" title=\"join Comapny\">Join</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"deptModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header justify-content-center\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" (click)=\"resetForm()\" aria-label=\"Close\">\n          <i class=\"nc-icon nc-simple-remove\"></i>\n        </button>\n        <p class=\"title-up na-am\">Joining <b>{{ (selectedCompany)?.name }}</b> Company.<br>\n      </div>\n      <div class=\"modal-body\">\n        <span *ngIf=\"showDpt\" class=\"card-category\"></span>\n          <ng-container *ngIf=\"show\">\n            <code>Select a Department</code>\n            <div class=\"table-responsive\">\n              <table class=\"table text-left\">\n                <thead class=\"card-category\">\n                  <th>Department</th>\n                  <th>Action</th>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let dept of viewDepartments | async\" style=\"border-bottom: darkslategrey\">\n                    <td class=\"td-clrs\" style=\"padding-left: 1em\">{{ dept.name }}</td>\n                    <td class=\"td-clrs\">\n                      <button class=\"warning btn-link select\" rel=\"tooltip\" title=\"Select Department\"(click)=\"hideDepartmentsTable(dept)\">select</button>\n                    </td>\n                    <hr>\n                  </tr>\n                  <div class=\"\">\n                    <div class=\"spacer\" style=\"height:2em\"></div>\n                    <input class=\"form-control\" placeholder=\"Add Department\" type=\"text\" [(ngModel)]=\"dpt.name\">\n                    <button class=\"primary btn-link\" (click)=\"saveDept(dpt)\">save</button>\n                  </div>\n                </tbody>\n              </table>\n            </div>\n          </ng-container>\n          <ng-container *ngIf=\"showText\">\n            <div class=\"row\">\n              <label class=\"col-md-3 col-form-label\">Department</label>\n              <div class=\"col-md-9\">\n                <div class=\"form-group\">\n                  <ng-select [items]=\"departmentsArray\" bindLabel=\"name\" placeholder=\"Select Department\" [(ngModel)]=\"department\">\n                  </ng-select>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-md-3 col-form-label\">Address</label>\n              <div class=\"col-md-9\">\n                <div class=\"form-group\">\n                    <input type=\"text\" [(ngModel)]=\"myData.address\" name=\"enterprise_location\" class=\"form-control\" placeholder=\"e.g. House#, street, location ,Town\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-md-3 col-form-label\">Phone</label>\n              <div class=\"col-md-9\">\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"myData.phoneNumber\" name=\"enterprise_phoneNumber\"\n                      class=\"form-control\" placeholder=\"e.g. 077 3273 876\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-md-3 col-form-label\">Email</label>\n              <div class=\"col-md-9\">\n                <div class=\"form-group\">\n                  <input type=\"email\" [(ngModel)]=\"myData.bus_email\" name=\"enterprise_location\"\n                      class=\"form-control\" placeholder=\"e.g. name@bus_email.com\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-md-3 col-form-label\">Nation</label>\n              <div class=\"col-md-9\">\n                <div class=\"form-group\">\n                  <input type=\"text\" [(ngModel)]=\"myData.nationality\" name=\"enterprise_location\" class=\"form-control\" placeholder=\"e.g. Zimbabwe\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <label class=\"col-md-3 col-form-label\">National ID</label>\n              <div class=\"col-md-9\">\n                <div class=\"form-group\">\n                    <input type=\"text\" [(ngModel)]=\"myData.nationalId\" name=\"enterprise_location\" class=\"form-control\" placeholder=\"e.g. N7388-039200 \">\n                </div>\n              </div>\n            </div>\n          </ng-container>\n      </div>\n      <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n        <div class=\"left-side\">\n          <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n          <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"sendRequest()\" data-dismiss=\"modal\" title=\"join Comapny\"> Send request</button><!--  (click)=\"connect2Enterprise()\"  -->\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/company/join-enterprise/join-enterprise.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/company/join-enterprise/join-enterprise.component.ts ***!
  \**********************************************************************/
/*! exports provided: JoinEnterpriseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinEnterpriseComponent", function() { return JoinEnterpriseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var app_services_enterprise_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/enterprise.service */ "./src/app/services/enterprise.service.ts");
/* harmony import */ var app_services_initialise_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/initialise.service */ "./src/app/services/initialise.service.ts");
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
var JoinEnterpriseComponent = /** @class */ (function () {
    function JoinEnterpriseComponent(es, afAuth, is, router, afs) {
        var _this = this;
        this.es = es;
        this.afAuth = afAuth;
        this.is = is;
        this.router = router;
        this.afs = afs;
        this.showUserTable = true;
        this.btnTable = 'Show';
        this.showDpt = false;
        this.showText = false;
        this.showCompUser = false;
        this.showRole = false;
        this.showCompWorkers = false;
        this.showSearch = false;
        this.show = true;
        this.buttonName = 'Show';
        this.selectedCompany = is.getSelectedCompany();
        this.newEnterprise = this.is.getSelectedCompany();
        this.searchData = "";
        this.dpt = { name: "", by: "", byId: "", companyName: "", companyId: "", createdOn: "", id: "", hod: null };
        // this.employeeData = is.getEmployeeDataInit();
        this.afAuth.user.subscribe(function (user) {
            _this.userId = user.uid;
            _this.user = user;
            _this.coloursUsername = user.displayName;
            console.log(_this.userId);
            console.log(_this.user);
            var aData;
            _this.userDetail = _this.afs.collection('Users').doc(_this.userId).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (a) {
                var data = a.payload.data();
                var id = a.payload.id;
                return __assign({ id: id }, data);
            }));
            _this.userDetail.subscribe(function (uData) {
                console.log(uData);
                aData = uData;
                console.log(aData);
                _this.employeeData = uData;
                console.log(_this.employeeData);
            });
            _this.dataCall();
        });
    }
    JoinEnterpriseComponent.prototype.saveDept = function () {
        console.log(this.dpt);
        console.log(this.userId);
        console.log(this.user);
        this.dpt.companyName = this.selectedCompany.name;
        this.dpt.companyId = this.selectedCompany.id;
        this.dpt.by = this.user.displayName;
        this.dpt.byId = this.userId;
        this.dpt.createdOn = new Date().toString();
        console.log(this.dpt);
        var dptRef = this.afs.collection('Enterprises').doc(this.compId).collection('departments');
        dptRef.add(this.dpt).then(function (Ref) {
            console.log(Ref.id);
            var dptId = Ref.id;
            dptRef.doc(dptId).update({ 'id': dptId });
        });
        this.dpt = { name: "", by: "", byId: "", companyName: "", companyId: "", createdOn: "", id: "", hod: null };
    };
    JoinEnterpriseComponent.prototype.toggleName = function () {
        this.showDpt = true;
    };
    JoinEnterpriseComponent.prototype.hideDepartmentsTable = function (dept) {
        // this.employeeData = this.dataCall()
        this.show = false;
        this.selectDepartment(dept);
        // this.employeeData.name = this.myData.name;
        // this.employeeData.email = this.myData.email;
        // this.employeeData.phoneNumber = this.myData.phoneNumber;
        // this.employeeData.id = this.myData.id;
        this.employeeData.department = dept.name;
        this.employeeData.departmentId = dept.id;
        console.log(this.employeeData);
        this.showText2();
    };
    JoinEnterpriseComponent.prototype.showDepartmentsTable = function () {
        this.show = true;
    };
    JoinEnterpriseComponent.prototype.hideText2 = function () {
        this.showText = false;
        this.showUsersTable();
    };
    JoinEnterpriseComponent.prototype.resetForm = function () {
        this.hideText2();
        this.showDepartmentsTable();
        this.employeeData = this.is.getEmployeeDataInit();
        this.selectedCompany = this.is.getSelectedCompany();
    };
    JoinEnterpriseComponent.prototype.showText2 = function () {
        this.showText = true;
    };
    JoinEnterpriseComponent.prototype.hideUsersTable = function () {
        this.showCompWorkers = false;
    };
    JoinEnterpriseComponent.prototype.showUsersTable = function () {
        this.showCompWorkers = true;
    };
    JoinEnterpriseComponent.prototype.showUser = function () {
        this.showCompUser = true;
        this.hideUsersTable();
        this.showRoleInput();
    };
    JoinEnterpriseComponent.prototype.showRoleInput = function () {
        this.showRole = true;
    };
    JoinEnterpriseComponent.prototype.toggleUsersTable = function () {
        this.showUserTable = !this.showUserTable;
        if (this.showUserTable) {
            this.btnTable = "Hide";
            // this.selectedParticipant=null;
        }
        else {
            this.btnTable = "Show";
        }
    };
    JoinEnterpriseComponent.prototype.check = function () {
    };
    JoinEnterpriseComponent.prototype.minimizeSidebar = function () {
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
    JoinEnterpriseComponent.prototype.showTable = function () {
        this.showSearch = true;
    };
    JoinEnterpriseComponent.prototype.clearSearchData = function () {
        this.searchData = "";
    };
    JoinEnterpriseComponent.prototype.search = function (testVariavle, x) {
        var xCapitalized = x.charAt(0).toUpperCase() + x.slice(1);
        // this.viewEnterprises(testVariavle, x);
        this.minimizeSidebar();
        console.log(testVariavle + " " + xCapitalized);
        this.viewEnterprises(testVariavle, xCapitalized);
    };
    JoinEnterpriseComponent.prototype.viewEnterprises = function (checkVariable, testData) {
        // this.showTable();
        this.viewCompanies = this.afs.collection('Enterprises', function (ref) { return ref.where(checkVariable, '==', testData); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        return this.viewCompanies;
    };
    JoinEnterpriseComponent.prototype.viewCompanyDpts = function (compid) {
        var _this = this;
        this.viewDepartments = this.afs.collection('Enterprises').doc(compid).collection('departments').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
        this.viewDepartments.subscribe(function (dpts) {
            _this.departmentsArray = dpts;
            console.log(dpts.length);
            console.log(dpts);
            // this.actionNo = actions.length
        });
        return this.viewDepartments;
    };
    JoinEnterpriseComponent.prototype.connect2Enterprise = function () {
        var companyId = this.selectedCompany.id;
        console.log(companyId);
        console.log(this.selectedCompany);
        var partId;
        console.log(this.user);
        partId = this.user.uid;
        var pUser = this.myData;
        this.newPart = pUser;
        console.log(companyId);
        this.selectedCompany.participants.push(this.myData);
        this.newEnterprise = this.selectedCompany;
        console.log('check participants array,if updated');
        console.log(this.department.id);
        var dptId = this.department.id;
        var userDoc = this.afs.collection('/Users').doc(partId);
        userDoc.collection('myenterprises').doc(companyId).set(this.newEnterprise);
        var compReff = this.afs.collection('Enterprises').doc(companyId);
        compReff.update(this.newEnterprise);
        compReff.collection('Participants').doc(partId).set(this.myData);
        compReff.collection('departments').doc(dptId).collection('Participants').doc(partId).set(this.myData);
        console.log('Department update');
        userDoc.update({
            'department': this.department.name, 'departmentId': this.department.id,
            'company': this.newEnterprise.name, 'companyID': this.newEnterprise.id
        });
        this.afs.collection('/Users').doc(this.newEnterprise.byId).collection('myenterprises').doc(companyId).update(this.newEnterprise);
        this.resetForm();
    };
    JoinEnterpriseComponent.prototype.sendRequest = function () {
        var _this = this;
        var companyId = this.selectedCompany.id;
        console.log(companyId);
        console.log(this.selectedCompany);
        var partId;
        console.log(this.user);
        partId = this.user.uid;
        console.log(companyId);
        this.newEnterprise = this.selectedCompany;
        console.log(this.employeeData);
        var me;
        me = this.myData;
        me.company = this.selectedCompany;
        me.department = this.department;
        console.log(me);
        this.afs.collection('/Users').doc(this.userId).set(this.employeeData).then(function (ref) {
            me.department = _this.department;
            me.company = _this.newEnterprise;
            console.log(me);
            console.log('check participants array,if updated' + _this.selectedCompany.participants);
            _this.afs.collection('/Users').doc(partId).collection('enterprisesRequested').doc(companyId).set(_this.newEnterprise);
            _this.afs.collection('Enterprises').doc(companyId).collection('Requests').doc(partId).set(me);
            // this.afs.collection('/Users').doc(this.newEnterprise.byId).collection('joinEnterprisesRequests').doc(companyId).set(this.newEnterprise);
            _this.afs.collection('/Users').doc(_this.newEnterprise.byId).collection('EnterprisesRequests').doc(partId).set(me);
        });
        this.resetForm();
    };
    JoinEnterpriseComponent.prototype.selectDepartment = function (dpt) {
        console.log(dpt);
        console.log(dpt.id);
        this.department = dpt;
        console.log(this.department.id);
    };
    JoinEnterpriseComponent.prototype.selectCompany = function (company) {
        console.log(company);
        console.log('selected company id' + company.id);
        this.compId = company.id;
        this.selectedCompany = company;
        this.viewCompanyDpts(company.id);
        // this.departments = this.es.getCompanyDepts(this.compId);
    };
    JoinEnterpriseComponent.prototype.dataCall = function () {
        var _this = this;
        this.myDocument = this.afs.collection('Users').doc(this.user.uid);
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
                phoneNumber: userData.phoneNumber,
                photoURL: _this.user.photoURL,
                address: userData.address,
                nationality: userData.nationality,
                nationalId: userData.nationalId
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
        this.enterprises = this.afs.collection('Enterprises').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (b) { return b.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    };
    JoinEnterpriseComponent.prototype.saveDpt = function (department) {
        department;
    };
    JoinEnterpriseComponent.prototype.OnInit = function () {
    };
    JoinEnterpriseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.user.subscribe(function (user) {
            _this.userId = user.uid;
            _this.user = user;
            _this.dataCall();
        });
    };
    JoinEnterpriseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-join-enterprise',
            template: __webpack_require__(/*! ./join-enterprise.component.html */ "./src/app/company/join-enterprise/join-enterprise.component.html"),
            styles: [__webpack_require__(/*! ./join-enterprise.component.css */ "./src/app/company/join-enterprise/join-enterprise.component.css")]
        }),
        __metadata("design:paramtypes", [app_services_enterprise_service__WEBPACK_IMPORTED_MODULE_5__["EnterpriseService"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], app_services_initialise_service__WEBPACK_IMPORTED_MODULE_6__["InitialiseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], JoinEnterpriseComponent);
    return JoinEnterpriseComponent;
}());



/***/ }),

/***/ "./src/app/company/setup/setup.component.css":
/*!***************************************************!*\
  !*** ./src/app/company/setup/setup.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBhbnkvc2V0dXAvc2V0dXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/company/setup/setup.component.html":
/*!****************************************************!*\
  !*** ./src/app/company/setup/setup.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div class=\"card-body nav-hor-tabs\">\n        <div class=\"nav-tabs-navigation\">\n          <div class=\"nav-tabs-wrapper\">\n            <ul id=\"tabs\" class=\"nav nav-tabs\" role=\"tablist\">\n              <li class=\"nav-item\">\n                <a class=\"nav-link nav-colors active\" data-toggle=\"tab\" href=\"#dept\" role=\"tab\" aria-expanded=\"true\">Department</a>\n              </li>\n              <li class=\"nav-item\">\n                <a class=\"nav-link nav-colors\" data-toggle=\"tab\" href=\"#subs\" role=\"tab\" aria-expanded=\"false\">Subsiduaries</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div id=\"my-tab-content\" class=\"tab-content text-center\">\n          <div class=\"tab-pane active\" role=\"tabpanel\" id=\"dept\" aria-expanded=\"true\">\n            <div class=\"table-responsive pro_info\">\n              <table class=\"table text-left\">\n                <thead class=\"\">\n                  <th>Department</th>\n                  <th>Action</th>\n                </thead>\n                <tbody>\n                  <tr> \n                    <td class=\"td-clrs\" style=\"padding-left: 1em\"></td>\n                      <a class=\"btn warning btn-link btn-icon btn-sm edit\" rel=\"tooltip\" title=\"Select Department\"><i class=\"fa fa-edit\"></i></a>\n                      <a class=\"btn danger btn-link btn-icon btn-sm remove\"><i class=\"fa fa-times\"></i></a>\n                    </td>\n                  </tr>\n                  <tr>\n                    <td> <input class=\"form-control\" placeholder=\"Add Department\" type=\"text\"></td>\n                    <td class=\"\">\n                      <button class=\"btn-primary btn-link\" (click)=\"save(dpt)\">save</button>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <div class=\"tab-pane\" id=\"subs\" role=\"tabpanel\" aria-expanded=\"false\">\n            <p>Here is your profile.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n\n<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\" class=\"card-collapse\">\n            <h4 class=\"card-title\">Collapsible Accordion</h4>\n            <div class=\"card card-plain\">\n              <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n                <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\" aria-expanded=\"true\"\n                  aria-controls=\"collapseOne\">\n                  Collapsible Group Item #1\n                  <i class=\"nc-icon nc-minimal-down\"></i>\n                </a>\n              </div>\n              <div id=\"collapseOne\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n                <div class=\"card-body\">\n                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n                  richardson ad squid. 3\n                  wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa\n                  nesciunt laborum\n                  eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid\n                  single-origin coffee nulla\n                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes\n                  anderson cred nesciunt\n                  sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft\n                  beer\n                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of\n                  them accusamus labore\n                  sustainable VHS.\n                </div>\n              </div>\n            </div>\n            <div class=\"card card-plain\">\n              <div class=\"card-header\" role=\"tab\" id=\"headingTwo\">\n                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\" aria-expanded=\"false\"\n                  aria-controls=\"collapseTwo\">\n                  Collapsible Group Item #2\n                  <i class=\"nc-icon nc-minimal-down\"></i>\n                </a>\n              </div>\n              <div id=\"collapseTwo\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingTwo\">\n                <div class=\"card-body\">\n                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n                  richardson ad squid. 3\n                  wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa\n                  nesciunt laborum\n                  eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid\n                  single-origin coffee nulla\n                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes\n                  anderson cred nesciunt\n                  sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft\n                  beer\n                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of\n                  them accusamus labore\n                  sustainable VHS.\n                </div>\n              </div>\n            </div>\n            <div class=\"card card-plain\">\n              <div class=\"card-header\" role=\"tab\" id=\"headingThree\">\n                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\"\n                  aria-expanded=\"false\" aria-controls=\"collapseThree\">\n                  Collapsible Group Item #3\n                  <i class=\"nc-icon nc-minimal-down\"></i>\n                </a>\n              </div>\n              <div id=\"collapseThree\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingThree\">\n                <div class=\"card-body\">\n                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n                  richardson ad squid. 3\n                  wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa\n                  nesciunt laborum\n                  eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid\n                  single-origin coffee nulla\n                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes\n                  anderson cred nesciunt\n                  sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft\n                  beer\n                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of\n                  them accusamus labore\n                  sustainable VHS.\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card card-plain\">\n        <div class=\"card-body\">\n          <div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\" class=\"card-collapse\">\n            <h4 class=\"card-title\">Collapsible Accordion on Plain Card</h4>\n            <div class=\"card card-plain\">\n              <div class=\"card-header\" role=\"tab\" id=\"heading1\">\n                <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse1\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                  Collapsible Group Item #1\n                  <i class=\"nc-icon nc-minimal-down\"></i>\n                </a>\n              </div>\n              <div id=\"collapse1\" class=\"collapse show\" role=\"tabpanel\" aria-labelledby=\"heading1\">\n                <div class=\"card-body\">\n                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n                  richardson ad squid. 3\n                  wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa\n                  nesciunt laborum\n                  eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid\n                  single-origin coffee nulla\n                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes\n                  anderson cred nesciunt\n                  sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft\n                  beer\n                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of\n                  them accusamus labore\n                  sustainable VHS.\n                </div>\n              </div>\n            </div>\n            <div class=\"card card-plain\">\n              <div class=\"card-header\" role=\"tab\" id=\"heading2\">\n                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse2\" aria-expanded=\"false\"\n                  aria-controls=\"collapse2\">\n                  Collapsible Group Item #2\n                  <i class=\"nc-icon nc-minimal-down\"></i>\n                </a>\n              </div>\n              <div id=\"collapse2\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"heading2\">\n                <div class=\"card-body\">\n                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n                  richardson ad squid. 3\n                  wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa\n                  nesciunt laborum\n                  eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid\n                  single-origin coffee nulla\n                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes\n                  anderson cred nesciunt\n                  sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft\n                  beer\n                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of\n                  them accusamus labore\n                  sustainable VHS.\n                </div>\n              </div>\n            </div>\n            <div class=\"card card-plain\">\n              <div class=\"card-header\" role=\"tab\" id=\"heading3\">\n                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse3\" aria-expanded=\"false\"\n                  aria-controls=\"collapse3\">\n                  Collapsible Group Item #3\n                  <i class=\"nc-icon nc-minimal-down\"></i>\n                </a>\n              </div>\n              <div id=\"collapse3\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"heading3\">\n                <div class=\"card-body\">\n                  Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry\n                  richardson ad squid. 3\n                  wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa\n                  nesciunt laborum\n                  eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid\n                  single-origin coffee nulla\n                  assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes\n                  anderson cred nesciunt\n                  sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft\n                  beer\n                  farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of\n                  them accusamus labore\n                  sustainable VHS.\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <br />\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5>Horizontal Tabs</h5>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"nav-tabs-navigation\">\n            <div class=\"nav-tabs-wrapper\">\n              <ul id=\"tabs\" class=\"nav nav-tabs\" role=\"tablist\">\n                <li class=\"nav-item\">\n                  <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-expanded=\"true\">Home</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-expanded=\"false\">Profile</a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" data-toggle=\"tab\" href=\"#messages\" role=\"tab\" aria-expanded=\"false\">Messages</a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <div id=\"my-tab-content\" class=\"tab-content text-center\">\n            <div class=\"tab-pane active\" id=\"home\" role=\"tabpanel\" aria-expanded=\"true\">\n              <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a\n                smooth metal\n                surface that seamlessly meets the new Retina HD display.</p>\n            </div>\n            <div class=\"tab-pane\" id=\"profile\" role=\"tabpanel\" aria-expanded=\"false\">\n              <p>Here is your profile.</p>\n            </div>\n            <div class=\"tab-pane\" id=\"messages\" role=\"tabpanel\" aria-expanded=\"false\">\n              <p>Here are your messages.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5>Vertical Tabs</h5>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-lg-4 col-md-5 col-sm-4 col-6\">\n              <div class=\"nav-tabs-navigation vertical-navs\">\n                <div class=\"nav-tabs-wrapper\">\n                  <ul class=\"nav nav-tabs flex-column nav-stacked\" role=\"tablist\">\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link active\" href=\"#info\" role=\"tab\" data-toggle=\"tab\">Info</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#description\" role=\"tab\" data-toggle=\"tab\">Description</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#concept\" role=\"tab\" data-toggle=\"tab\">Concept</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#support\" role=\"tab\" data-toggle=\"tab\">Support</a>\n                    </li>\n                    <li class=\"nav-item\">\n                      <a class=\"nav-link\" href=\"#extra\" role=\"tab\" data-toggle=\"tab\">Extra</a>\n                    </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n            <div class=\"col-lg-8 col-md-7 col-sm-8 col-6\">\n              <!-- Tab panes -->\n              <div class=\"tab-content\">\n                <div class=\"tab-pane active\" id=\"info\">\n                  <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.\n                    With a smooth\n                    metal surface that seamlessly meets the new Retina HD display.</p>\n                  <p>It’s one continuous form where hardware and software function in perfect unison,\n                    creating a new\n                    generation of phone that’s better by any measure.</p>\n                </div>\n                <div class=\"tab-pane\" id=\"description\">\n                  <p>The first thing you notice when you hold the phone is how great it feels in your\n                    hand. The cover\n                    glass curves down around the sides to meet the anodized aluminum enclosure in a\n                    remarkable,\n                    simplified design. </p>\n                  <p>There are no distinct edges. No gaps. Just a smooth, seamless bond of metal and\n                    glass that feels\n                    like one continuous surface.</p>\n                </div>\n                <div class=\"tab-pane\" id=\"concept\">\n                  <p>It’s one continuous form where hardware and software function in perfect unison,\n                    creating a new\n                    generation of phone that’s better by any measure.</p>\n                  <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.\n                    With a smooth\n                    metal surface that seamlessly meets the new Retina HD display. </p>\n                </div>\n                <div class=\"tab-pane\" id=\"support\">\n                  <p>From the seamless transition of glass and metal to the streamlined profile,\n                    every detail was\n                    carefully considered to enhance your experience. So while its display is\n                    larger, the phone feels\n                    just right.</p>\n                  <p>It’s one continuous form where hardware and software function in perfect unison,\n                    creating a new\n                    generation of phone that’s better by any measure.</p>\n                </div>\n                <div class=\"tab-pane\" id=\"extra\">\n                  <p>It’s one continuous form where hardware and software function in perfect unison,\n                    creating a new\n                    generation of phone that’s better by any measure.</p>\n                  <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.\n                    With a smooth\n                    metal surface that seamlessly meets the new Retina HD display. </p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-8 ml-auto mr-auto\">\n      <div class=\"card card-plain card-subcategories\">\n        <div class=\"card-header \">\n          <h4 class=\"card-title text-center\">Page Subcategories</h4>\n          <br />\n        </div>\n        <div class=\"card-body \">\n          <!--\n                              color-classes: \"nav-pills-primary\", \"nav-pills-info\", \"nav-pills-success\", \"nav-pills-warning\",\"nav-pills-danger\"\n                          -->\n          <ul class=\"nav nav-pills nav-pills-primary nav-pills-icons justify-content-center\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#link7\" role=\"tablist\">\n                <i class=\"now-ui-icons objects_umbrella-13\"></i> Home\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link8\" role=\"tablist\">\n                <i class=\"now-ui-icons shopping_shop\"></i> Messages\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" data-toggle=\"tab\" href=\"#link9\" role=\"tablist\">\n                <i class=\"now-ui-icons ui-2_settings-90\"></i> Settings\n              </a>\n            </li>\n          </ul>\n          <div class=\"tab-content tab-space tab-subcategories\">\n            <div class=\"tab-pane active\" id=\"link7\">\n              Collaboratively administrate empowered markets via plug-and-play networks. Dynamically\n              procrastinate B2C\n              users after installed base benefits.\n              <br>\n              <br> Dramatically visualize customer directed convergence without revolutionary ROI.\n            </div>\n            <div class=\"tab-pane\" id=\"link8\">\n              Efficiently unleash cross-media information without cross-media value. Quickly maximize\n              timely\n              deliverables for real-time schemas.\n              <br>\n              <br>Dramatically maintain clicks-and-mortar solutions without functional solutions.\n            </div>\n            <div class=\"tab-pane\" id=\"link9\">\n              Completely synergize resource taxing relationships via premier niche markets.\n              Professionally cultivate\n              one-to-one customer service with robust ideas.\n              <br>\n              <br>Dynamically innovate resource-leveling customer service for state of the art customer\n              service.\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/company/setup/setup.component.ts":
/*!**************************************************!*\
  !*** ./src/app/company/setup/setup.component.ts ***!
  \**************************************************/
/*! exports provided: SetupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupComponent", function() { return SetupComponent; });
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

var SetupComponent = /** @class */ (function () {
    function SetupComponent() {
    }
    SetupComponent.prototype.ngOnInit = function () {
    };
    SetupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-setup',
            template: __webpack_require__(/*! ./setup.component.html */ "./src/app/company/setup/setup.component.html"),
            styles: [__webpack_require__(/*! ./setup.component.css */ "./src/app/company/setup/setup.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SetupComponent);
    return SetupComponent;
}());



/***/ })

}]);
//# sourceMappingURL=company-company-module.js.map