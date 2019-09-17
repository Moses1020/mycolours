(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tasks-tasks-module"],{

/***/ "./src/app/tasks/tasks.component.css":
/*!*******************************************!*\
  !*** ./src/app/tasks/tasks.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user_table {\r\n    height: 10em;\r\n    overflow: hidden;\r\n    overflow-y: scroll\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFza3MvdGFza3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Rhc2tzL3Rhc2tzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlcl90YWJsZSB7XHJcbiAgICBoZWlnaHQ6IDEwZW07XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsXHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/tasks/tasks.component.html":
/*!********************************************!*\
  !*** ./src/app/tasks/tasks.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 text-center\">\n      <div class=\"card  card-tasks\">\n        <div class=\"card-header \">\n          <h4 class=\"card-title\">Tasks</h4>\n        </div>\n        <div class=\"card-body\">\n          <h5 class=\"card-category\">list of all my Tasks\n            <button class=\"primary btn-link\" data-toggle=\"modal\" data-target=\"#tskModal\">Create a Task</button>\n            <button class=\"primary btn-link\" data-toggle=\"modal\" data-target=\"#pTaskModal\">Create a Enterprise Task</button></h5>\n          <div class=\"modal fade\" id=\"tskModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\">\n              <div class=\"modal-content\">\n                <div class=\"card-body \">\n                  <div class=\"card-header text-center\">\n                    <p class=\"col-md-8 ml-auto mr-auto col-form-label info\">\n                      <font size=4>Create a Task</font>\n                    </p>\n                  </div>\n                  <hr>\n                  <form class=\"form-horizontal\">\n                    <div class=\"row\">\n                      <label class=\"col-md-3 col-form-label\">Task name</label>\n                      <div class=\"col-md-8\">\n                        <div class=\"form-group\">\n                          <input type=\"text\" [(ngModel)]=\"task.name\" name=\"taskName\" class=\"form-control\" placeholder=\"Task name\">\n                          <!-- [(ngModel)]=\"task.name\" -->\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <label class=\"col-md-3 col-form-label\">Start Date</label>\n                      <div class=\"col-md-8\">\n                        <div class=\"form-group\">\n                          <input type=\"date\" [(ngModel)]=\"task.start\" name=\"start\" class=\"form-control\">\n                          <!-- [(ngModel)]=\"task.start\" -->\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <label class=\"col-md-3 col-form-label\">Finish Date</label>\n                      <div class=\"col-md-8\">\n                        <div class=\"form-group\">\n                          <input type=\"date\" [(ngModel)]=\"task.finish\" name=\"finish\" class=\"form-control\">\n                        </div>\n                      </div>\n                    </div>\n                    <ng-container *ngIf=\"showChamp\">\n                      <div class=\"row\">\n                        <label class=\"col-md-3 col-form-label\">Champion</label>\n                        <div class=\"col-md-8\">\n                          <div class=\"form-group\" style=\"margin-top: -8px; margin-left: 15px; margin-bottom: -2px;\">\n                            {{(selectedParticipant)?.name }}\n                            <button type=\"text\" name=\"taskChampion\" class=\"btn btn-icon primary btn-link \" (click)=\"toggleUsersTable(); toggleChamp()\">\n                              <i class=\"fa fa-edit fa-fw\"></i>\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                    </ng-container>\n                    <div class=\"row\">\n                      <div class=\"col-md-8 ml-auto mr-auto\">\n                        <div class=\"form-group\">\n                          <ng-container *ngIf=\"showUserTable\">\n                            <div class=\"table-responsive user_table\">\n                              <code>Select a Champion</code>\n\n                              <table class=\"table\">\n                                <tbody class=\"\">\n                                  <tr *ngFor=\"let user of coloursUsers | async \" class=\"\">\n                                    <td>{{ user.name }}</td>\n                                    <td><button class=\"primary btn-link\" (click)=\"selectColoursUser(user)\"> select\n                                      </button></td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                          </ng-container>\n                        </div>\n                      </div>\n                    </div>\n                    <ng-container *ngIf=\"showProj\">\n                      <div class=\"row\">\n                        <label class=\"col-md-3 col-form-label\">Project</label>\n                        <div class=\"col-md-8\">\n                          <div class=\"form-group\" style=\"margin-top: -8px; margin-left: 15px; margin-bottom: -2px;\">\n                            {{(selectedProject)?.name }}\n                            <button type=\"text\" name=\"taskProject\" class=\"btn btn-icon primary btn-link \" (click)=\"toggleProjTable(); toggleProj()\">\n                              <i class=\"fa fa-edit fa-fw\"></i>\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                    </ng-container>\n                    <div class=\"row\">\n                      <div class=\"col-md-8 ml-auto mr-auto\">\n                        <div class=\"form-group\">\n                          <ng-container *ngIf=\"showProjectTable\">\n                            <div class=\"table-responsive user_table\">\n                              <code>Select Project</code>\n\n                              <table class=\"table\">\n                                <tbody>\n                                  <tr *ngFor=\"let project of myProjectCollection | async \" class=\"\">\n                                    <td>\n                                      {{project.name}}</td>\n                                    <td>\n                                      <button class=\"primary btn-link\" (click)=\"selectProject(project)\"> select\n                                      </button>\n                                    </td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                          </ng-container>\n                          <!-- <ng-container *ngIf=\"showProjBtn\">\n                          <div class=\"footer\"><button class=\"primary btn-link\" (click)=\"toggleProjTable(); hideProjBtn()\" title=\" Add task to project\">\n                            Select Project</button>\n                          </div>\n                        </ng-container> -->\n                        </div>\n                      </div>\n                    </div>\n                    <ng-container *ngIf=\"showCompany\">\n                      <div class=\"row\">\n                        <label class=\"col-md-3 col-form-label\">Enterprise</label>\n                        <div class=\"col-md-8\">\n                          <div class=\"form-group\" style=\"margin-top: -8px; margin-left: 15px; margin-bottom: -2px;\">\n                            {{(selectedCompany)?.name }}\n                            <button type=\"text\" name=\"taskProject\" class=\"btn btn-icon primary btn-link \" (click)=\"toggleCompTable(); toggleComp()\">\n                              <span class=\"pull-right\"><i class=\"fa fa-edit fa-fw\"></i></span>\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                    </ng-container>\n                    <div class=\"row\">\n                      <div class=\"col-md-8 ml-auto mr-auto\">\n                        <div class=\"form-group\">\n                          <ng-container *ngIf=\"showCompanyTable\">\n                            <div class=\"table-responsive user_table\">\n                              <code>Select Company</code>\n                              <table class=\"table\">\n                                <tbody>\n                                  <tr *ngFor=\"let company of myEnterpriseCollection | async \" class=\"\">\n                                    <td>\n                                      {{company.name}}</td>\n                                    <td>\n                                      <button class=\"primary btn-link\" (click)=\"selectCompany(company)\"> select\n                                      </button>\n                                    </td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                          </ng-container>\n                          <!-- <ng-container *ngIf=\"showCompanyBtn\">\n                          <div class=\"footer\"><button class=\"primary btn-link\" (click)=\"toggleCompTable(); hideCompBtn()\" title=\" Add task to company\">\n                            Select Company</button>\n                          </div>\n                        </ng-container> -->\n                        </div>\n                      </div>\n                    </div>\n                  </form>\n\n                  <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n                    <div class=\"left-side\">\n                      <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n                    </div>\n                    <div class=\"divider\"></div>\n                    <div class=\"right-side\">\n                      <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"saveTask()\" data-dismiss=\"modal\"\n                        title=\"save task\">Save</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"modal fade\" id=\"pTaskModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"ModalLabel\" aria-hidden=\"true\">\n            <div class=\"modal-dialog\">\n              <div class=\"modal-content\">\n                <div class=\"card-body \">\n                  <div class=\"card-header text-center\">\n                    <p class=\"col-md-8 ml-auto mr-auto col-form-label info\">\n                      <font size=4>Create new task</font>\n                    </p>\n                    <!-- <h4 class=\"card-title\">Create a Task</h4> -->\n                  </div>\n                  <hr>\n                  <form class=\"form-horizontal\">\n                    <div class=\"row\">\n                      <label class=\"col-md-3 col-form-label\">Task name</label>\n                      <div class=\"col-md-8\">\n                        <div class=\"form-group\">\n                          <input type=\"text\" [(ngModel)]=\"task.name\" name=\"taskName\" class=\"form-control\" placeholder=\"Task name\">\n                          <!-- [(ngModel)]=\"task.name\" -->\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <label class=\"col-md-3 col-form-label\">Start Date</label>\n                      <div class=\"col-md-8\">\n                        <div class=\"form-group\">\n                          <input type=\"date\" [(ngModel)]=\"task.start\" name=\"start\" class=\"form-control\">\n                          <!-- [(ngModel)]=\"task.start\" -->\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"row\">\n                      <label class=\"col-md-3 col-form-label\">Finish Date</label>\n                      <div class=\"col-md-8\">\n                        <div class=\"form-group\">\n                          <input type=\"date\" [(ngModel)]=\"task.finish\" name=\"finish\" class=\"form-control\">\n                        </div>\n                      </div>\n                    </div>\n                    <ng-container *ngIf=\"showChamp\">\n                      <div class=\"row\">\n                        <label class=\"col-md-3 col-form-label\">Champion</label>\n                        <div class=\"col-md-8\">\n                          <div class=\"form-group\" style=\"margin-top: -8px; margin-left: 15px; margin-bottom: -2px;\">\n                            {{(selectedParticipant)?.name }}\n                            <button type=\"text\" name=\"taskChampion\" class=\"btn btn-icon primary btn-link \" (click)=\"toggleUsersTable(); toggleChamp()\">\n                              <i class=\"fa fa-edit fa-fw\"></i>\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                    </ng-container>\n                    <div class=\"row\">\n                      <div class=\"col-md-8 ml-auto mr-auto\">\n                        <div class=\"form-group\">\n                          <ng-container *ngIf=\"showUserTable\">\n                            <div class=\"table-responsive user_table\">\n                              <code>Select a Champion</code>\n\n                              <table class=\"table\">\n                                <tbody class=\"\">\n                                  <tr *ngFor=\"let user of coloursUsers | async \" class=\"\">\n                                    <td>{{ user.name }}</td>\n                                    <td><button class=\"primary btn-link\" (click)=\"selectColoursUser(user)\"> select\n                                      </button></td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                          </ng-container>\n                          <ng-container *ngIf=\"showChampBtn\">\n                            <div class=\"footer\"><button class=\"primary btn-link\" (click)=\"toggleUsersTable(); hideChampBtn()\"\n                                title=\" Add task champion\">\n                                Select Champion </button>\n                            </div>\n                          </ng-container>\n                        </div>\n                      </div>\n                    </div>\n                    <ng-container *ngIf=\"showProj\">\n                      <div class=\"row\">\n                        <label class=\"col-md-3 col-form-label\">Project</label>\n                        <div class=\"col-md-8\">\n                          <div class=\"form-group\" style=\"margin-top: -8px; margin-left: 15px; margin-bottom: -2px;\">\n                            {{(selectedProject)?.name }}\n                            <button type=\"text\" name=\"taskProject\" class=\"btn btn-icon primary btn-link \" (click)=\"toggleProjTable(); toggleProj()\">\n                              <i class=\"fa fa-edit fa-fw\"></i>\n                            </button>\n                          </div>\n                        </div>\n                      </div>\n                    </ng-container>\n                    <div class=\"row\">\n                      <div class=\"col-md-8 ml-auto mr-auto\">\n                        <div class=\"form-group\">\n                          <ng-container *ngIf=\"showProjectTable\">\n                            <div class=\"table-responsive user_table\">\n                              <code>Select Project</code>\n\n                              <table class=\"table\">\n                                <tbody>\n                                  <tr *ngFor=\"let project of myProjectCollection | async \" class=\"\">\n                                    <td>\n                                      {{project.name}}</td>\n                                    <td>\n                                      <button class=\"primary btn-link\" (click)=\"selectProject(project)\"> select\n                                      </button>\n                                    </td>\n                                  </tr>\n                                </tbody>\n                              </table>\n                            </div>\n                          </ng-container>\n                          <ng-container *ngIf=\"showProjBtn\">\n                            <div class=\"footer\"><button class=\"primary btn-link\" (click)=\"toggleProjTable(); hideProjBtn()\"\n                                title=\" Add task to project\">\n                                Select Project</button>\n                            </div>\n                          </ng-container>\n                        </div>\n                      </div>\n                    </div>\n                  </form>\n\n                  <div class=\"modal-footer\" style=\"margin-bottom:0%\">\n                    <div class=\"left-side\">\n                      <button type=\"button\" class=\"btn btn-default btn-link\" data-dismiss=\"modal\">Close</button>\n                    </div>\n                    <div class=\"divider\"></div>\n                    <div class=\"right-side\">\n                      <button type=\"button\" class=\"btn btn-success btn-link\" (click)=\"saveProjectTask()\" data-dismiss=\"modal\"\n                        title=\"save task\">Save</button>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"table-full-width table-responsive\">\n            <table class=\"table\">\n              <thead class=\"\">\n                <th>Task</th>\n                <th>Project</th>\n                <th>Champ</th>\n                <th>Action</th>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let tss of allMyTasks | async\">\n                  <td>{{ tss.name }}</td>\n                  <td>{{ tss.projectName }}</td>\n                  <td>{{ tss.champion.name }}</td>\n                  <td class=\"text-left\">\n                    <button class=\"dropdown-toggle primary btn-link\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\"\n                      aria-haspopup=\"true\" aria-expanded=\"false\">\n                      <font size=5> ... </font>\n                    </button>\n                    <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenuButton\">\n                      <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" title=\"comment {{tss.name}}\">Comment</button>\n                      <button class=\"dropdown-item primary btn-link\" rel=\"tooltip\" title=\"Delete {{tss.name}}\">Delete</button>\n                      <button class=\"dropdown-item primary btn-link\" (click)=\"toggle(); selectProject3(project)\" rel=\"tooltip\"\n                        title=\"Show commments for {{tss.name}}\">Show Comments </button>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"card-footer \">\n          <hr>\n          <div class=\"stats\">\n            <i class=\"fa fa-refresh spin\"></i> Updated 3 minutes ago\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <div class=\"card-text\">\n            <h4 class=\"card-title\"><button class=\"btn-link\"><i class=\"nc-icon nc-minimal-left\" style=\"margin-right:3em\"></i></button> Today's Tasks <button class=\"btn-link\"><i class=\"nc-icon nc-minimal-right\" style=\"margin-left:3em\"></i></button></h4>\n            <!-- <p class=\"card-category\">Week {{ currentWeek }}</p> -->\n          </div>\n        </div>\n        <div class=\"card-body table-responsive\">\n          <table class=\"table table-hover\">\n            <thead class=\"text-warning\">\n              <tr>\n                <!-- <th>ID</th> -->\n                <th>Name</th>\n                <th>Project</th>\n                <th>Champion</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let tss of todayTasks | async\">\n                <td>{{ tss.name }}</td>\n                <td>{{ tss.projectName }}</td>\n                <td>{{ tss.champion.name }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <div class=\"card-text\">\n            <h4 class=\"card-title\"><button class=\"btn-link\"><i class=\"nc-icon nc-minimal-left\" style=\"margin-right:3em\"></i></button> Week {{ currentWeek }}'s Tasks <button class=\"btn-link\"><i class=\"nc-icon nc-minimal-right\" style=\"margin-left:3em\"></i></button></h4>\n            <!-- <p class=\"card-category\">Week {{ currentWeek }}</p> -->\n          </div>\n        </div>\n        <div class=\"card-body table-responsive\">\n          <table class=\"table table-hover\">\n            <thead class=\"text-warning\">\n              <tr>\n                <!-- <th>ID</th> -->\n                <th>Name</th>\n                <th>Project</th>\n                <th>Champion</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let tss of WeekTasks | async\">\n                <td>{{ tss.name }}</td>\n                <td>{{ tss.projectName }}</td>\n                <td>{{ tss.champion.name }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <div class=\"card-text\">\n            <h4 class=\"card-title\"><button class=\"btn-link\"><i class=\"nc-icon nc-minimal-left\" style=\"margin-right:3em\"></i></button> Today's Tasks <button class=\"btn-link\"><i class=\"nc-icon nc-minimal-right\" style=\"margin-left:3em\"></i></button></h4>\n            <!-- <p class=\"card-category\">Week {{ currentWeek }}</p> -->\n          </div>\n        </div>\n        <div class=\"card-body table-responsive\">\n          <table class=\"table table-hover\">\n            <thead class=\"text-warning\">\n              <tr>\n                <!-- <th>ID</th> -->\n                <th>Name</th>\n                <th>Project</th>\n                <th>Champion</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let tss of todayTasks | async\">\n                <td>{{ tss.name }}</td>\n                <td>{{ tss.projectName }}</td>\n                <td>{{ tss.champion.name }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <div class=\"card-text\">\n            <h4 class=\"card-title\"><button class=\"btn-link\"><i class=\"nc-icon nc-minimal-left\" style=\"margin-right:3em\"></i></button> Month {{ currentMonth }}'s Tasks <button class=\"btn-link\"><i class=\"nc-icon nc-minimal-right\" style=\"margin-left:3em\"></i></button></h4>\n            <!-- <p class=\"card-category\">Month {{ currentMonth }}</p> -->\n          </div>\n        </div>\n        <div class=\"card-body table-responsive\">\n          <table class=\"table table-hover\">\n            <thead class=\"text-warning\">\n              <tr>\n                <!-- <th>ID</th> -->\n                <th>Name</th>\n                <th>Project</th>\n                <th>Champion</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let tss of MonthTasks | async\">\n                <td>{{ tss.name }}</td>\n                <td>{{ tss.projectName }}</td>\n                <td>{{ tss.champion.name }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <div class=\"card-text\">\n            <h4 class=\"card-title\"><button class=\"btn-link\"><i class=\"nc-icon nc-minimal-left\" style=\"margin-right:3em\"></i></button> Quarter {{ currentQuarter }}'s Tasks <button class=\"btn-link\"><i class=\"nc-icon nc-minimal-right\" style=\"margin-left:3em\"></i></button></h4>\n          </div>\n        </div>\n        <div class=\"card-body table-responsive\">\n          <table class=\"table table-hover\">\n            <thead class=\"text-warning\">\n              <tr>\n                <!-- <th>ID</th> -->\n                <th>Name</th>\n                <th>Project</th>\n                <th>Champion</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let tss of QuarterTasks | async\">\n                <td>{{ tss.name }}</td>\n                <td>{{ tss.projectName }}</td>\n                <td>{{ tss.champion.name }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <div class=\"card-text\">\n            <h4 class=\"card-title\"><button class=\"btn-link\"><i class=\"nc-icon nc-minimal-left\" style=\"margin-right:3em\"></i></button> Year {{ currentYear }}'s Tasks <button class=\"btn-link\"><i class=\"nc-icon nc-minimal-right\" style=\"margin-left:3em\"></i></button></h4>\n          </div>\n        </div>\n        <div class=\"card-body table-responsive\">\n          <table class=\"table table-hover\">\n            <thead class=\"text-warning\">\n              <tr>\n                <!-- <th>ID</th> -->\n                <th>Name</th>\n                <th>month</th>\n                <th>Champion</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let tss of YearTasks | async\">\n                <td>{{ tss.name }}</td>\n                <td>{{ tss.projectName }}</td>\n                <td>{{ tss.champion.name }}</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <div class=\"card-text\">\n            <h4 class=\"card-title\">Employees Stats</h4>\n            <p class=\"card-category\">New employees on 15th September, 2016</p>\n          </div>\n        </div>\n        <div class=\"card-body table-responsive\">\n          <table class=\"table table-hover\">\n            <thead class=\"text-warning\">\n              <tr>\n                <th>ID</th>\n                <th>Name</th>\n                <th>Salary</th>\n                <th>Country</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>1</td>\n                <td>Dakota Rice</td>\n                <td>$36,738</td>\n                <td>Niger</td>\n              </tr>\n              <tr>\n                <td>2</td>\n                <td>Minerva Hooper</td>\n                <td>$23,789</td>\n                <td>Curaçao</td>\n              </tr>\n              <tr>\n                <td>3</td>\n                <td>Sage Rodriguez</td>\n                <td>$56,142</td>\n                <td>Netherlands</td>\n              </tr>\n              <tr>\n                <td>4</td>\n                <td>Philip Chaney</td>\n                <td>$38,735</td>\n                <td>Korea, South</td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n    <!-- <div class=\"col-md-6\">\n      <div class=\"card card-timeline card-plain\">\n        <div class=\"card-body\">\n          <ul class=\"timeline timeline-simple\">\n            <li class=\"timeline-inverted\">\n              <div class=\"timeline-badge danger\">\n                <i class=\"nc-icon nc-single-copy-04\"></i>\n              </div>\n              <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                  <span class=\"badge badge-pill badge-danger\">Some Title</span>\n                </div>\n                <div class=\"timeline-body\">\n                  <p>Wifey made the best Father's Day meal ever. So thankful so happy so blessed. Thank you for making\n                    my family We just had fun with the “future” theme !!! It was a fun night all together ... The\n                    always rude Kanye Show at 2am Sold Out Famous viewing @ Figueroa and 12th in downtown.</p>\n                </div>\n                <h6>\n                  <i class=\"ti-time\"></i> 11 hours ago via Twitter\n                </h6>\n              </div>\n            </li>\n            <li class=\"timeline-inverted\">\n              <div class=\"timeline-badge success\">\n                <i class=\"nc-icon nc-sun-fog-29\"></i>\n              </div>\n              <div class=\"timeline-panel\">\n                <div class=\"timeline-heading\">\n                  <span class=\"badge badge-pill badge-success\">Another One</span>\n                </div>\n                <div class=\"timeline-body\">\n                  <p>Thank God for the support of my wife and real friends. I also wanted to point out that it’s the\n                    first album to go number 1 off of streaming!!! I love you Ellen and also my number one design rule\n                    of anything I do from shoes to music to homes is that Kim has to like it....</p>\n                </div>\n              </div>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"row\">\n        <div class=\"col-lg-6\">\n          <div class=\"card card-pricing \">\n            <div class=\"card-header\">\n              <h6 class=\"card-category\"> Alpha Pack</h6>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-icon icon-primary \">\n                <i class=\"nc-icon nc-spaceship\"></i>\n              </div>\n              <h3 class=\"card-title\">69$</h3>\n              <ul>\n                <li>Working materials in EPS</li>\n                <li>6 months access to the library</li>\n              </ul>\n            </div>\n            <div class=\"card-footer\">\n              <a href=\"#pablo\" class=\"btn btn-round btn-primary\">Add to Cart</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <div class=\"card card-pricing card-plain\">\n            <div class=\"card-header\">\n              <h6 class=\"card-category\"> Bravo Pack</h6>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"card-icon icon-warning \">\n                <i class=\"nc-icon nc-shop\"></i>\n              </div>\n              <h3 class=\"card-title\">10$</h3>\n              <ul>\n                <li>Complete documentation</li>\n                <li>Working materials in Sketch</li>\n              </ul>\n            </div>\n            <div class=\"card-footer\">\n              <a href=\"#pablo\" class=\"btn btn-round btn-neutral btn-warning\">Add to Cart</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"card card-testimonial\">\n        <div class=\"card-body \">\n          <div class=\"icon icon-primary\">\n            <i class=\"fa fa-quote-right\"></i>\n          </div>\n          <p class=\"card-description\">\n            The networking at Web Summit is like no other European tech conference.\n          </p>\n        </div>\n        <div class=\"card-footer \">\n          <h4 class=\"card-title\">Gina Andrew</h4>\n          <h6 class=\"card-category\">@ginaandrew</h6>\n          <div class=\"card-avatar\">\n            <a href=\"#pablo\">\n              <img class=\"img\" src=\"./assets/img/faces/joe-gardner-2.jpg\">\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div> -->\n  </div>"

/***/ }),

/***/ "./src/app/tasks/tasks.component.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/tasks.component.ts ***!
  \******************************************/
/*! exports provided: TasksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksComponent", function() { return TasksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var app_services_task_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/task.service */ "./src/app/services/task.service.ts");
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









// import { coloursUser } from 'app/models/user-model';
var TasksComponent = /** @class */ (function () {
    // week: any;
    function TasksComponent(afAuth, router, is, authService, ts, afs) {
        var _this = this;
        this.afAuth = afAuth;
        this.router = router;
        this.is = is;
        this.authService = authService;
        this.ts = ts;
        this.afs = afs;
        this.show = false;
        this.showEnterprise = false;
        this.buttonName = 'Show';
        this.btnName = 'Show';
        this.btnTable = 'Show';
        this.showUserTable = false;
        this.showChamp = true;
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
        this.btnCompany = 'Show';
        this.showCompanyBtn = true;
        // console.log(this.afAuth.user);
        this.task = is.getTask();
        this.selectedProject = is.getSelectedProject();
        this.userChampion = is.getUserChampion();
        this.selectedCompany = is.getSelectedCompany();
        this.selectedParticipant = is.initColUserData();
        this.currentYear = moment__WEBPACK_IMPORTED_MODULE_6__(new Date().toISOString(), "YYYY-MM-DD").year().toString();
        this.currentQuarter = moment__WEBPACK_IMPORTED_MODULE_6__(new Date().toISOString(), "YYYY-MM-DD").quarter().toString();
        this.currentMonth = moment__WEBPACK_IMPORTED_MODULE_6__(new Date().toISOString(), "YYYY-MM-DD").month().toString();
        this.currentWeek = moment__WEBPACK_IMPORTED_MODULE_6__(new Date().toISOString(), "YYYY-MM-DD").week().toString();
        this.todayDate = moment__WEBPACK_IMPORTED_MODULE_6__(new Date().toISOString(), "YYYY-MM-DD").day().toString();
        // console.log(this.todayDate)
        this.afAuth.authState.subscribe(function (user) {
            console.log(user.uid);
            _this.myUser = user.uid;
            _this.coloursUsername = user.displayName;
            /* All my tasks */
            _this.allMyTasks = _this.afs.collection('/Users').doc(_this.myUser).collection('tasks').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            }); }));
            /* All Tasks */
            _this.tasks = _this.afs.collection('tasks').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            }); }));
            _this.todayTasks = _this.afs.collection('tasks', function (ref) { return ref.where('startWeek', '==', _this.currentWeek); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            }); }));
            _this.WeekTasks = _this.afs.collection('tasks', function (ref) { return ref.where('startWeek', '==', _this.currentWeek); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            }); }));
            _this.MonthTasks = _this.afs.collection('tasks', function (ref) { return ref.where('startWeek', '==', _this.currentWeek); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            }); }));
            _this.QuarterTasks = _this.afs.collection('tasks', function (ref) { return ref.where('startWeek', '==', _this.currentWeek); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            }); }));
            _this.YearTasks = _this.afs.collection('tasks', function (ref) { return ref.where('startWeek', '==', _this.currentWeek); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            }); }));
            _this.myProjectCollection = _this.afs.collection('/Users').doc(_this.myUser).collection('projects').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            }); }));
            _this.myEnterpriseCollection = _this.afs.collection('/Users').doc(_this.myUser).collection('myenterprises').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            }); }));
            _this.coloursUsers = _this.afs.collection('Users').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return __assign({ id: id }, data);
            }); }));
        });
        // this.afs.collection('Users/tasks').ref.firestore.app.delete;
    }
    TasksComponent.prototype.viewDateTasks = function (thisWeek, selectedWeek) {
        this.viewTasks = this.afs.collection('Users').doc(this.myUser).collection('tasks', function (ref) { return ref.where(thisWeek, '==', selectedWeek); }).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (actions) { return actions.map(function (a) {
            var data = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data);
        }); }));
    };
    TasksComponent.prototype.selectProject3 = function (pro) {
        console.log(pro);
    };
    TasksComponent.prototype.toggle = function () {
        this.show = !this.show;
        if (this.show)
            this.buttonName = "Hide";
        else
            this.buttonName = "Show";
    };
    TasksComponent.prototype.toggleEnt = function () {
        this.showEnterprise = !this.showEnterprise;
        if (this.showEnterprise)
            this.buttonName = "Hide";
        else
            this.buttonName = "Show";
    };
    TasksComponent.prototype.hideChampBtn = function () {
        this.showChampBtn = false;
    };
    TasksComponent.prototype.toggleUsersTable = function () {
        this.showUserTable = !this.showUserTable;
        if (this.showUserTable) {
            this.btnTable = "Hide";
            // this.selectedParticipant=null;
        }
        else {
            this.btnTable = "Show";
        }
    };
    TasksComponent.prototype.toggleProjTable = function () {
        this.showProjectTable = !this.showProjectTable;
        if (this.showProjectTable) {
            this.btnProjTable = "Hide";
        }
        else {
            this.btnProjTable = "Show";
        }
    };
    TasksComponent.prototype.toggleCompTable = function () {
        this.showCompanyTable = !this.showCompanyTable;
        if (this.showCompanyTable) {
            this.btnCompanyTable = "Hide";
        }
        else {
            this.btnCompanyTable = "Show";
        }
    };
    TasksComponent.prototype.hideProjBtn = function () {
        this.showProjBtn = false;
    };
    TasksComponent.prototype.toggleProj = function () {
        this.showProj = !this.showProj;
        if (this.showProj)
            this.btnProj = "Hide";
        else
            this.btnProj = "Show";
    };
    TasksComponent.prototype.hideCompBtn = function () {
        this.showCompanyBtn = false;
    };
    TasksComponent.prototype.toggleComp = function () {
        this.showCompany = !this.showCompany;
        if (this.showCompany)
            this.btnCompany = "Hide";
        else
            this.btnCompany = "Show";
    };
    TasksComponent.prototype.selectColoursUser = function (x) {
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
    TasksComponent.prototype.toggleChamp = function () {
        this.showChamp = !this.showChamp;
        if (this.showChamp)
            this.btnChamp = "Hide";
        else
            this.btnChamp = "Show";
    };
    TasksComponent.prototype.selectCompany = function (company) {
        console.log(company);
        this.selectedCompany = company;
        this.compId = company.id;
        console.log(this.selectedCompany);
        this.toggleComp();
        this.toggleCompTable();
    };
    TasksComponent.prototype.selectProjectChamp = function (company) {
        console.log(company);
        this.companyProjectChamp = company;
        this.compChampionId = company.id;
        console.log(this.companyProjectChamp);
        this.toggleComp();
        this.toggleCompTable();
    };
    TasksComponent.prototype.selectProject = function (proj) {
        console.log(proj);
        this.proj_ID = proj.id;
        this.selectedProject = proj;
        this.toggleProj();
        this.toggleProjTable();
    };
    TasksComponent.prototype.saveTask = function () {
        console.log(this.task);
        var pr;
        console.log(this.selectedCompany);
        this.task.by = this.coloursUsername;
        this.task.byId = this.myUser;
        // setting dates
        this.task.createdOn = new Date().toISOString();
        this.task.startDay = moment__WEBPACK_IMPORTED_MODULE_6__(this.task.start, "YYYY-MM-DD").day().toString();
        this.task.startWeek = moment__WEBPACK_IMPORTED_MODULE_6__(this.task.start, "YYYY-MM-DD").week().toString();
        this.task.startMonth = moment__WEBPACK_IMPORTED_MODULE_6__(this.task.start, "YYYY-MM-DD").month().toString();
        this.task.startQuarter = moment__WEBPACK_IMPORTED_MODULE_6__(this.task.start, "YYYY-MM-DD").quarter().toString();
        this.task.startYear = moment__WEBPACK_IMPORTED_MODULE_6__(this.task.start, "YYYY-MM-DD").year().toString();
        this.task.finishDay = moment__WEBPACK_IMPORTED_MODULE_6__(this.task.finish, "YYYY-MM-DD").day().toString();
        this.task.finishWeek = moment__WEBPACK_IMPORTED_MODULE_6__(this.task.finish, "YYYY-MM-DD").week().toString();
        this.task.finishMonth = moment__WEBPACK_IMPORTED_MODULE_6__(this.task.finish, "YYYY-MM-DD").month().toString();
        this.task.finishQuarter = moment__WEBPACK_IMPORTED_MODULE_6__(this.task.finish, "YYYY-MM-DD").quarter().toString();
        this.task.finishYear = moment__WEBPACK_IMPORTED_MODULE_6__(this.task.finish, "YYYY-MM-DD").year().toString();
        this.task.companyName = this.selectedCompany.name;
        this.task.companyId = this.selectedCompany.id;
        this.task.projectId = this.proj_ID;
        this.task.projectName = this.selectedProject.name;
        this.task.projectType = this.selectedProject.type;
        this.task.champion = this.userChampion;
        console.log(this.task);
        this.ts.addTask(this.task, this.selectedCompany, "");
        this.selectedCompany = this.is.getSelectedCompany();
        this.task = this.is.getTask();
        this.selectedProject = this.is.getSelectedProject();
        this.userChampion = this.is.getUserChampion();
    };
    TasksComponent.prototype.saveProjectTask = function () {
        console.log(this.task);
        var pr;
        console.log(this.selectedCompany);
        this.task.by = this.coloursUsername;
        this.task.byId = this.myUser;
        this.task.createdOn = new Date().toISOString();
        var start = this.task.start;
        console.log(moment__WEBPACK_IMPORTED_MODULE_6__(start, "YYYY-MM-DD").week().toString());
        this.task.startWeek = moment__WEBPACK_IMPORTED_MODULE_6__(this.task.start, "YYYY-MM-DD").week().toString();
        this.task.startMonth = moment__WEBPACK_IMPORTED_MODULE_6__(this.task.start, "YYYY-MM-DD").month().toString();
        this.task.startQuarter = moment__WEBPACK_IMPORTED_MODULE_6__(this.task.start, "YYYY-MM-DD").quarter().toString();
        this.task.startYear = moment__WEBPACK_IMPORTED_MODULE_6__(this.task.start, "YYYY-MM-DD").year().toString();
        this.task.finishWeek = moment__WEBPACK_IMPORTED_MODULE_6__(this.task.finish, "YYYY-MM-DD").week().toString();
        this.task.finishMonth = moment__WEBPACK_IMPORTED_MODULE_6__(this.task.finish, "YYYY-MM-DD").month().toString();
        this.task.finishQuarter = moment__WEBPACK_IMPORTED_MODULE_6__(this.task.finish, "YYYY-MM-DD").quarter().toString();
        this.task.finishYear = moment__WEBPACK_IMPORTED_MODULE_6__(this.task.finish, "YYYY-MM-DD").year().toString();
        // this.task.companyName = this.selectedCompany.name;
        // this.task.companyId = this.selectedCompany.id;
        this.task.projectId = this.proj_ID;
        this.task.projectName = this.selectedProject.name;
        this.task.projectType = this.selectedProject.type;
        this.task.champion = this.userChampion;
        // let oop = this.selectedCompany.id;
        console.log(this.task);
        // let createdTask = this.task;
        // let tasksRef = this.afs.collection('tasks');
        // let usersRef = this.afs.collection('Users').doc(this.myUser).collection('tasks');
        // // let entRef = this.afs.collection('Enterprises').doc(oop).collection('tasks');
        // let projectsRef = this.afs.collection('Projects').doc(this.task.projectId).collection('tasks');
        // if (this.task.projectType === 'Enterprise') {
        //   //set task under a project
        //   this.afs.collection('Users').doc(this.myUser).collection('tasks').add(createdTask).then(function (Ref) {
        //     let newTaskId = Ref.id;
        //     console.log(Ref)
        //     //set task under a tasks
        //     tasksRef.doc(newTaskId).set(createdTask);
        //     //set task under a user
        //     projectsRef.doc(newTaskId).set(createdTask);
        //     //set task under a company                        
        //     // entRef.doc(newTaskId).set(createdTask);
        //   });
        // }
        // else {
        //   //set task under a user
        //   console.log('personal Task')
        //   this.afs.collection('Users').doc(this.myUser).collection('tasks').add(createdTask);
        // }
        // this.selectedProject = { name: "", type: "", by: "", byId: "", companyName: "", companyId: "", createdOn: "", id: "", location: "", sector: "" };
        // this.userChampion = null;
        // this.task = { name: "", champion: null, projectName: "", start: "", startWeek: "", startMonth: "", startQuarter: "", startYear: "", finish: "", finishWeek: "", finishMonth: "", finishQuarter: "", finishYear: "", by: "", createdOn: "", projectId: "", byId: "", projectType: "", companyName: "", companyId: "" };    
    };
    TasksComponent.prototype.OnInit = function () { };
    TasksComponent.prototype.NgOnInit = function () {
    };
    TasksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tasks',
            template: __webpack_require__(/*! ./tasks.component.html */ "./src/app/tasks/tasks.component.html"),
            styles: [__webpack_require__(/*! ./tasks.component.css */ "./src/app/tasks/tasks.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], app_services_initialise_service__WEBPACK_IMPORTED_MODULE_8__["InitialiseService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], app_services_task_service__WEBPACK_IMPORTED_MODULE_7__["TaskService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], TasksComponent);
    return TasksComponent;
}());



/***/ }),

/***/ "./src/app/tasks/tasks.module.ts":
/*!***************************************!*\
  !*** ./src/app/tasks/tasks.module.ts ***!
  \***************************************/
/*! exports provided: TasksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksModule", function() { return TasksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tasks_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tasks.component */ "./src/app/tasks/tasks.component.ts");
/* harmony import */ var _tasks_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks.routing */ "./src/app/tasks/tasks.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TasksModule = /** @class */ (function () {
    function TasksModule() {
    }
    TasksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_tasks_routing__WEBPACK_IMPORTED_MODULE_5__["TasksRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [_tasks_component__WEBPACK_IMPORTED_MODULE_4__["TasksComponent"]]
        })
    ], TasksModule);
    return TasksModule;
}());



/***/ }),

/***/ "./src/app/tasks/tasks.routing.ts":
/*!****************************************!*\
  !*** ./src/app/tasks/tasks.routing.ts ***!
  \****************************************/
/*! exports provided: TasksRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksRoutes", function() { return TasksRoutes; });
/* harmony import */ var _tasks_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks.component */ "./src/app/tasks/tasks.component.ts");

var TasksRoutes = [{
        path: '',
        children: [{
                path: 'tasks',
                component: _tasks_component__WEBPACK_IMPORTED_MODULE_0__["TasksComponent"]
            }]
    }];


/***/ })

}]);
//# sourceMappingURL=tasks-tasks-module.js.map