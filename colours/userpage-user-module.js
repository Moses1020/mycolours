(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userpage-user-module"],{

/***/ "./src/app/userpage/user.component.html":
/*!**********************************************!*\
  !*** ./src/app/userpage/user.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"row\"  *ngIf=\"afAuth.user | async as user\">\n    <div class=\"col-md-5\" id=\"profileDisplay\">\n      <div class=\"card card-user\">\n        <div class=\"image\">\n          <img src=\"./assets/img/bg/damir-bosnjak.jpg\" alt=\"...\">\n        </div>\n        <div class=\"card-body\">\n          <div class=\"author\">\n              <!-- <img class=\"avatar border-gray\" src=\"{{ user.photoURL }}\" alt=\"...\"> -->\n              <div class=\"photo\">\n                <img class=\"justify-content-center avatar\" src=\"{{ user.photoURL }}\">\n              </div>\n              <!-- <h5 class=\"title card-category na-am\">{{user.displayName}}</h5> -->\n              <h5 class=\"title card-category na-am\">{{ userData.name }}</h5>\n            <!-- <p class=\"description\">\n              @chetfaker\n            </p> -->\n          </div>\n          <p class=\"description text-center\"><small>\n            \"{{ userData.aboutMe }}\"</small>\n            <br><br>\n            <!-- <button class=\"info btn-link\" (click)=\"run1()\">edit profile</button> -->\n            <button class=\"info btn-link\" (click)=\"viewProfile()\">View profile</button>\n          </p>\n        </div>\n        <div class=\"card-footer\">\n          <hr>\n          <div class=\"button-container\">\n            <div class=\"row\">\n              <div class=\"col-lg-3 col-md-6 col-6 ml-auto\">\n                <h5>12\n                  <br>\n                  <small>Files</small>\n                </h5>\n              </div>\n              <div class=\"col-lg-4 col-md-6 col-6 ml-auto mr-auto\">\n                <h5>2GB\n                  <br>\n                  <small>Used</small>\n                </h5>\n              </div>\n              <div class=\"col-lg-3 mr-auto\">\n                <h5>24,6$\n                  <br>\n                  <small>Spent</small>\n                </h5>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h4 class=\"card-title\">Contact</h4>\n        </div>\n        <div class=\"card-body\">\n          <ul class=\"list-unstyled team-members\">\n            <ng-container *ngIf=\"showContacts\">\n              <li>\n                <div class=\"row\">\n                  <div class=\"col-md-2 col-2\">\n                    <div class=\"avatar\">\n                      <img src=\"./assets/img/faces/ayo-ogunseinde-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-7 col-7\">\n                    DJ Khaled\n                    <br />\n                    <!-- <span class=\"text-muted\">\n                      <small>Offline</small>\n                    </span> -->\n                  </div>\n                  <div class=\"col-md-3 col-3 text-right\">\n                    <button class=\"btn btn-sm btn-outline-success btn-round btn-icon\"><i class=\"fa fa-envelope\"></i></button>\n                  </div>\n                </div>\n              </li>\n              <li>\n                <div class=\"row\">\n                  <div class=\"col-md-2 col-2\">\n                    <div class=\"avatar\">\n                      <img src=\"./assets/img/faces/joe-gardner-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                    </div>\n                  </div>\n                  <div class=\"col-md-7 col-7\">\n                    Creative Tim\n                    <br />\n                    <!-- <span class=\"text-success\">\n                      <small>Available</small>\n                    </span> -->\n                  </div>\n                  <div class=\"col-md-3 col-3 text-right\">\n                    <button class=\"btn btn-sm btn-outline-success btn-round btn-icon\"><i class=\"fa fa-envelope\"></i></button>\n                  </div>\n                </div>\n              </li>\n              <li>\n                <div class=\"row\">\n                  <div class=\"col-md-2 col-2\">\n                    <div class=\"avatar\">\n                      <img src=\"./assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                    </div>\n                  </div>\n                  <div class=\"col-ms-7 col-7\">\n                    Flume\n                    <br />\n                    <!-- <span class=\"text-danger\">\n                      <small>Busy</small>\n                    </span> -->\n                  </div>\n                  <div class=\"col-md-3 col-3 text-right\">\n                    <button class=\"btn btn-sm btn-outline-success btn-round btn-icon\"><i class=\"fa fa-envelope\"></i></button>\n                  </div>\n                </div>\n              </li>\n            </ng-container>\n            <li *ngFor=\"let contact of myContacts | async\">\n              <div class=\"row\">\n                <div class=\"col-md-2 col-2\">\n                  <div class=\"avatar\">\n                    <img src=\"./assets/img/faces/default-avatar.png\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                  </div>\n                </div>\n                <div class=\"col-ms-7 col-7\">\n                  {{ contact.name }}\n                  <br />\n                  <!-- <span class=\"text-danger\">\n                    <small>Busy</small>\n                  </span> -->\n                </div>\n                <div class=\"col-md-3 col-3 text-right\">\n                  <button class=\"btn btn-sm btn-outline-success btn-round btn-icon\"><i class=\"fa fa-envelope\"></i></button>\n                </div>\n              </div>\n            </li>\n            <button class=\"info btn-link\" data-toggle=\"modal\" data-target=\"#myModal10\">\n              New Contact\n            </button>\n\n          </ul>\n        </div>\n        <!-- small modal -->\n              <div class=\"modal fade modal-primary\" id=\"myModal10\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n                <div class=\"modal-dialog\"><!-- modal-sm -->\n                  <div class=\"modal-content\">\n                    <div class=\"modal-header\">\n                      <div class=\"modal-profile ml-auto mr-auto\">\n                        <i class=\"fa fa-address-card\"></i>\n                      </div> New Conatct\n                    </div>\n                    <div class=\"modal-body\">\n                      <p>Select from the list to add Contacts</p>\n\n                      <div *ngIf=\"selectedContacts\" class=\"col-md-12\">\n                        <p *ngFor=\"let item of selectedContacts\">{{ item.name }},</p>\n                      </div>\n                      <form method=\"\">\n                        <!-- <div class=\"form-group\">\n                          <label>Contact Name</label>\n                          <input type=\"text\" [(ngModel)]=\"contact.name\" name=\"cName\" class=\"form-control\" placeholder=\"Simon\">\n                        </div>\n                        <div class=\"form-group\">\n                          <label>Email</label>\n                          <input type=\"email\" [(ngModel)]=\"contact.email\" name=\"cEmail\" class=\"form-control\" placeholder=\"exampleInputEmail1\">\n                        </div>\n                        <div class=\"form-group\">\n                          <label>Contact number</label>\n                          <input type=\"text\" [(ngModel)]=\"contact.phoneNumber\" name=\"cNumber\" class=\"form-control\" placeholder=\"+263774555666\">\n                        </div> -->\n\n                        <ng-select [items]=\"coloursUsers | async\" bindLabel=\"name\" name=\"tClassification\" placeholder=\"Select contact\"\n                          (change)=\"addContact(newContact)\"  [(ngModel)]=\"newContact\">\n                        </ng-select>\n                      \n                      </form>\n                    </div>\n                    <div class=\"modal-footer\">\n                      <div class=\"left-side\">\n                        <button type=\"button\" class=\"btn btn-link btn-link\"  data-dismiss=\"modal\">Back</button>\n                      </div>\n                      <div class=\"divider\"></div>\n                      <div class=\"right-side\">\n                        <button type=\"button\" class=\"btn btn-link btn-link\" data-dismiss=\"modal\">Save</button> <!--  (click)=\"addContact()\" -->\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!--    end small modal -->\n      </div>\n    </div>\n    <div class=\"col-md-7\" *ngIf=\"show1\" >\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <div class=\"row\">\n            <div class=\"col-md-7\">\n              <h5 class=\"card-category clrs-h1\">Edit Profile</h5>\n            </div>\n            <div class=\"col-md-5\">\n              <button class=\"info btn-link\" (click)=\"viewProfile()\">Preview</button>\n              <button class=\"info btn-link\" (click)=\"saveProfile(userData)\">Save</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <!-- <form> -->\n            <!-- <div class=\"row\">\n              <div class=\"col-md-8 pr-1\">\n                <div class=\"form-group\">\n                  <label>Company (disabled)</label>\n                  <input type=\"text\" class=\"form-control\" name=\"userCompany\" disabled=\"\" placeholder=\"Company\" value=\"Creative Code Inc.\">\n                </div>\n              </div>\n            </div> -->\n            <div class=\"row\">\n              <div class=\"col-md-8 pr-1\">\n                <div class=\"form-group\">\n                  <label>Username</label>\n                  <input type=\"text\" class=\"form-control\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" name=\"userUsername\"[(ngModel)]=\"userData.username\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-8 pr-1\">\n                <div class=\"form-group\">\n                  <label>Full Name</label>\n                  <input type=\"text\" class=\"form-control card-category\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" name=\"userDisplayName\" [(ngModel)]=\"userData.name\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4 pr-1\">\n                <div class=\"form-group\">\n                  <label>Date of birth</label>\n                  <input type=\"text\" class=\"form-control\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" name=\"userDob\" placeholder=\"dd/mm/yyyy\" [(ngModel)]=\"userData.dob\">\n                </div>\n              </div>\n              <div class=\"col-md-4 \">\n                <div class=\"form-group\">\n                  <!-- <label>Gender</label> -->\n                  <!-- <input type=\"text\" class=\"form-control\" name=\"userGenger\" placeholder=\"Male/Female\" [(ngModel)]=\"userData.gender\"> -->\n\n                  <ng-select bindLabel=\"name\" style=\"padding-top: 7px; padding-bottom: 0px; height: 32px;\" name=\"userGenger\" placeholder=\"Male/Female\" [(ngModel)]=\"userData.gender\">\n                    <ng-option value=\"Male\" style=\"padding-top: 7px; padding-bottom: 0px; height: 32px;\">Male</ng-option>\n                    <ng-option value=\"Female\" style=\"padding-top: 7px; padding-bottom: 0px; height: 32px;\">Female</ng-option>\n                </ng-select>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-3 pr-1\">\n                <div class=\"form-group\">\n                  <label>Weight</label>\n                  <div class=\"input-group\">\n                    <input [(ngModel)]=\"userData.bodyWeight\" name=\"weight\" placeholder=\"60Kg\" class=\"form-control\"\n                      (focus)=\"focus1=true\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" (blur)=\"focus1=false\">\n                    <div class=\"input-group-postpand\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\">\n                      <span class=\"input-group-text\"><small>Kg</small>\n                      </span>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"col-md-3 px-1\">\n                <div class=\"form-group\">\n                  <label>Height</label>\n                  <!-- <input type=\"number\" class=\"form-control\" name=\"Country\" placeholder=\"178cm\" [(ngModel)]=\"userData.bodyHeight\"> -->\n                  \n                <div class=\"input-group\">\n                  <input [(ngModel)]=\"userData.bodyHeight\" name=\"height\" placeholder=\"180cm\" class=\"form-control\"\n                    (focus)=\"focus1=true\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" (blur)=\"focus1=false\">\n                  <div class=\"input-group-postpand\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\">\n                    <span class=\"input-group-text\"><small>cm</small>\n                    </span>\n                  </div>\n                </div>\n\n                </div>\n              </div>\n              <div *ngIf=\"userData.bodyMassIndex != 0\" class=\"col-md-3 pl-1\">\n                <div class=\"form-group\">\n                  <label>BMI</label>\n                  <!-- <div style=\"padding-top: 8px;padding-bottom: 0px; height: 32px;\">{{ userData.bodyMassIndex }}</div> -->\n                  <p class=\"form-control\" style=\"padding-top: 7px;padding-bottom: 0px; height: 32px;\" name=\"Zipcode\" placeholder=\"0.8\"> {{ userData.bodyMassIndex }} </p>\n                  <!-- <div class=\"input-group-postpand\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\">\n                    <span class=\"input-group-text\"><small>Kg/m2</small>\n                    </span>\n                  </div> -->\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-10\">\n                <div class=\"form-group\">\n                  <label for=\"exampleInputEmail1\">Account email</label>\n                  <input type=\"email\" class=\"form-control\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" name=\"userEmail\" [(ngModel)]=\"userData.email\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-10\">\n                <div class=\"form-group\">\n                  <label for=\"exampleInputEmail1\">Business email</label>\n                  <input type=\"email\" class=\"form-control\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" name=\"Bus_email\" [(ngModel)]=\"userData.bus_email\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-6 pr-1\">\n                <div class=\"form-group\">\n                  <label>Mobile</label>\n                  <input type=\"text\" class=\"form-control\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" name=\"userMobileContact\" placeholder=\"0773344556\" [(ngModel)]=\"userData.phoneNumber\">\n                </div>\n              </div>\n              <div class=\"col-md-6 \">\n                <div class=\"form-group\">\n                  <label>Telephone</label>\n                  <input type=\"text\" class=\"form-control\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" name=\"userTelephone\" placeholder=\"0566699777\" [(ngModel)]=\"userData.telephone\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Address</label>\n                  <input type=\"text\" class=\"form-control\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" name=\"userHomeAddress\"placeholder=\"400 Dough road, Cranehill\" [(ngModel)]=\"userData.address\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4 pr-1\">\n                <div class=\"form-group\">\n                  <label>City</label>\n                  <input type=\"text\" class=\"form-control\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" name=\"City\" placeholder=\"Bulawayo\" [(ngModel)]=\"userData.city\">\n                </div>\n              </div>\n              <div class=\"col-md-4 px-1\">\n                <div class=\"form-group\">\n                  <label>Country</label>\n                  <input type=\"text\" class=\"form-control\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" name=\"Country\" placeholder=\"Australia\" [(ngModel)]=\"userData.country\">\n                </div>\n              </div>\n              <div class=\"col-md-4 pl-1\">\n                <div class=\"form-group\">\n                  <label>Postal Code</label>\n                  <input type=\"number\" class=\"form-control\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" name=\"Zipcode\" placeholder=\"ZIP Code\" [(ngModel)]=\"userData.zipCode\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-8 pr-1\">\n                <div class=\"form-group\">\n                  <label>National Id</label>\n                  <input type=\"text\" class=\"form-control\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" name=\"nationalId\"[(ngModel)]=\"userData.nationalId\">\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>About Me</label>\n                  <textarea rows=\"auto\" cols=\"80\" class=\"form-control textarea\" placeholder=\"Oh so, your weak rhyme You doubt I'll bother, reading into it\" [(ngModel)]=\"userData.aboutMe\"></textarea>\n                  <!-- <textarea name=\"taskComment\" id=\"comments\" cols=\"50\" rows=\"auto\" placeholder=\"Click and type your comment here.....\" [(ngModel)]=\"aboutMe\"></textarea> -->\n                </div>\n              </div>\n            </div>\n          <!-- </form> -->\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-7\" *ngIf=\"preview\">\n      <!--  *ngIf=\"show1\" -->\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <div class=\"row\">\n            <div class=\"col-md-8\">\n              <h5 *ngIf=\"userData.username !== '' || userData.username !== undefined; else showName\" class=\"na-am\">{{ userData.username }}'s Profile preview</h5>\n              <!-- <h5 class=\"card-category na-am\">{{ userData.username || userData.name }}'s Profile preview</h5> -->\n              <ng-template #showName>\n                <h5 class=\"card-category na-am\">{{ userData.name }}'s Profile preview</h5>                \n              </ng-template>\n            </div>\n            <div class=\"col-md-2\">\n              <button class=\"info btn-link\" (click)=\"run1()\">Edit</button>\n            </div>\n            <div class=\"col-md-2\">\n              <button class=\"info btn-link\" (click)=\"done()\">Done</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\">\n          <!-- <form> -->\n            <div class=\"row\">\n              <div class=\"col-md-7 pr-1\">\n                <div class=\"form-group\">\n                  <label>Username</label>\n                  <p type=\"text\" class=\"form-control\" style=\"padding-top: 7px; padding-bottom: 0px; height: 32px;\" name=\"Username\">{{ userData.username }}</p> \n                  <!-- [(ngModel)]=\"userData.username\"> -->\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-7 pr-1\">\n                <div class=\"form-group\">\n                  <label>Full Name</label>\n                  <p type=\"text\" class=\"form-control card-category\" style=\"padding-top: 7px; padding-bottom: 0px; height: 32px;\" name=\"DisplayName\">{{ userData.name }}</p>\n                   <!-- [(ngModel)]=\"userData.name\"> -->\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4 pr-1\">\n                <div class=\"form-group\">\n                  <label>Date of birth</label>\n                  <p type=\"text\" class=\"form-control\" style=\"padding-top: 7px; padding-bottom: 0px; height: 32px;\" name=\"userDob\" placeholder=\"dd/mm/yyyy\">{{ userData.dob }}</p>\n                   <!-- [(ngModel)]=\"userData.dob\"> -->\n                </div>\n              </div>\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                  <label>Gender</label>\n                  <p type=\"text\" class=\"form-control\" style=\"padding-top: 7px; padding-bottom: 0px; height: 32px;\" name=\"userGender\" placeholder=\"male/female\"> {{ userData.gender }} </p>\n                   <!-- [(ngModel)]=\"userData.gender\"> -->\n                </div>\n              </div>\n            </div>\n            <div *ngIf=\"(userData.bodyMassIndex + userData.bodyWeight + userData.bodyHeight) != 0\" class=\"row\">\n              <div class=\"col-md-3 pr-1\">\n                <div class=\"form-group\">\n                  <label>Weight</label>\n                  <p type=\"number\" class=\"form-control\" style=\"padding-top: 7px; padding-bottom: 0px; height: 32px;\" name=\"City\" placeholder=\"Bulawayo\"> {{ userData.bodyWeight }} Kg</p>\n                   <!-- [(ngModel)]=\"userData.city\"> -->\n                </div>\n              </div>\n              <div class=\"col-md-3 px-1\">\n                <div class=\"form-group\">\n                  <label>Height</label>\n                  <p type=\"number\" class=\"form-control\" style=\"padding-top: 7px; padding-bottom: 0px; height: 32px;\" name=\"Country\" placeholder=\"Australia\"> {{ userData.bodyHeight }} cm</p> \n                  <!-- [(ngModel)]=\"userData.country\"> -->\n                </div>\n              </div>\n              <div class=\"col-md-3 pl-1\">\n                <div class=\"form-group\">\n                  <label>BMI</label>\n                  <p type=\"number\" class=\"form-control\" style=\"padding-top: 7px; padding-bottom: 0px; height: 32px;\" name=\"Zipcode\" placeholder=\"ZIP Code\"> {{ userData.bodyMassIndex }} </p>\n                   <!-- [(ngModel)]=\"userData.zipCode\"> -->\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-10\">\n                <div class=\"form-group\">\n                  <label for=\"exampleInputEmail1\">Account Email</label>\n                  <p type=\"email\" class=\"form-control\" style=\"padding-top: 7px; padding-bottom: 0px; height: 32px;\" name=\"usermail\"> {{ userData.email }} </p>\n                   <!-- [(ngModel)]=\"userData.email\"> -->\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-10\">\n                <div class=\"form-group\">\n                  <label for=\"exampleInputEmail1\">Business Email</label>\n                  <p type=\"email\" class=\"form-control\" style=\"padding-top: 7px; padding-bottom: 0px; height: 32px;\" name=\"busEmail\"> {{ userData.bus_email }} </p>\n                  <!-- [(ngModel)]=\"userData.bus_email\"> -->\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-5 pr-1\">\n                <div class=\"form-group\">\n                  <label>Mobile</label>\n                  <p type=\"text\" class=\"form-control\" style=\"padding-top: 7px; padding-bottom: 0px; height: 32px;\" name=\"MobileContact\" placeholder=\"0773344556\"> {{ userData.phoneNumber }} </p>\n                   <!-- [(ngModel)]=\"userData.phoneNumber\"> -->\n                </div>\n              </div>\n              <div class=\"col-md-5\">\n                <div class=\"form-group\">\n                  <label>Telephone</label>\n                  <p type=\"text\" class=\"form-control\" style=\"padding-top: 7px; padding-bottom: 0px; height: 32px;\" name=\"Telephone\" placeholder=\"0566699777\"> {{ userData.telephone }} </p>\n                   <!-- [(ngModel)]=\"userData.telephone\"> -->\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>Address</label>\n                  <p type=\"text\" class=\"form-control\" style=\"padding-top: 7px; padding-bottom: 0px; height: 32px;\" name=\"HomeAddress\" placeholder=\"400 Dough road, Craneborne\"> {{ userData.address }} </p>\n                  <!-- [(ngModel)]=\"userData.address\"> -->\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-4 pr-1\">\n                <div class=\"form-group\">\n                  <label>City</label>\n                  <p type=\"text\" class=\"form-control\" name=\"City\" placeholder=\"Bulawayo\"> {{ userData.city }} </p>\n                   <!-- [(ngModel)]=\"userData.city\"> -->\n                </div>\n              </div>\n              <div class=\"col-md-4 px-1\">\n                <div class=\"form-group\">\n                  <label>Country</label>\n                  <p type=\"text\" class=\"form-control\" name=\"Country\" placeholder=\"Australia\"> {{ userData.country }} </p> \n                  <!-- [(ngModel)]=\"userData.country\"> -->\n                </div>\n              </div>\n              <div class=\"col-md-4 pl-1\">\n                <div class=\"form-group\">\n                  <label>Postal Code</label>\n                  <p type=\"number\" class=\"form-control\" name=\"Zipcode\" placeholder=\"ZIP Code\"> {{ userData.zipCode }} </p>\n                   <!-- [(ngModel)]=\"userData.zipCode\"> -->\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-7 pr-1\">\n                <div class=\"form-group\">\n                  <label>National Id</label>\n                  <p type=\"text\" class=\"form-control\" style=\"padding-top: 7px; padding-bottom: 0px; height: 32px;\" name=\"nId\">{{ userData.nationalId }}</p> \n                  <!-- [(ngModel)]=\"userData.username\"> -->\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-md-12\">\n                <div class=\"form-group\">\n                  <label>About Me</label>\n                  <p rows=\"4\" cols=\"80\" class=\"form-control textarea\" style=\"padding-top: 7px; padding-bottom: 0px; height: 32px;\" name=\"aboutMeUser\" placeholder=\"Tell colours about yourself\"> {{ userData.aboutMe }} </p><!-- [(ngModel)]=\"userData.aboutMe\" -->\n                </div>\n              </div>\n            </div>\n          <!-- </form> -->\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-7\" *ngIf=\"show\">\n      <!--  *ngIf=\"show1\" -->\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <a class=\"card-category clrs-h1\">Personal Progressive Profile Report</a>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"card-body\">\n            <div class=\"nav-tabs-navigation\">\n              <div class=\"nav-tabs-wrapper\">\n                <ul id=\"tabs\" class=\"nav nav-tabs\" role=\"tablist\">\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-expanded=\"true\">Home</a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-expanded=\"false\">Profile</a>\n                  </li>\n                  <li class=\"nav-item\">\n                    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#messages\" role=\"tab\" aria-expanded=\"false\">Messages</a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n            <div id=\"my-tab-content\" class=\"tab-content text-center\">\n              <div class=\"tab-pane active\" id=\"home\" role=\"tabpanel\" aria-expanded=\"true\">\n                <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface\n                  that seamlessly meets the new Retina HD display.</p>\n              </div>\n              <div class=\"tab-pane\" id=\"profile\" role=\"tabpanel\" aria-expanded=\"false\">\n                <p>Here is your profile.</p>\n              </div>\n              <div class=\"tab-pane\" id=\"messages\" role=\"tabpanel\" aria-expanded=\"false\">\n                <p>Here are your messages.</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/userpage/user.component.ts":
/*!********************************************!*\
  !*** ./src/app/userpage/user.component.ts ***!
  \********************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var app_services_personal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/personal.service */ "./src/app/services/personal.service.ts");
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







var UserComponent = /** @class */ (function () {
    function UserComponent(afAuth, ps, afs, router) {
        var _this = this;
        this.afAuth = afAuth;
        this.ps = ps;
        this.afs = afs;
        this.router = router;
        this.show = true;
        this.btnName = "Show";
        this.showless = false;
        this.show1 = false;
        this.preview = false;
        this.showContacts = false;
        this.selectedContacts = [];
        // afAuth.authState.subscribe(user => {
        //     console.log(user);
        //     this.user = user;
        // });
        this.user$ = this.afAuth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            if (user) {
                return _this.afs.doc("Users/" + user.uid).valueChanges();
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null);
            }
        }));
        this.userData = { name: "", gender: "", dob: "", age: 0, username: "", email: "", bus_email: "", phoneNumber: "", telephone: null, address: "", nationalId: "", nationality: "", zipCode: null, country: "", city: "", by: "", byId: "", companyName: "", companyId: "", createdOn: "", id: "", aboutMe: "", profession: null, qualifications: null, bodyWeight: 0, bodyHeight: 0, bodyMassIndex: 0, industrySector: "", personalAssets: null, personalLiabilities: null, reference: null, focusFactor: 0, userImg: "", LastTimeLogin: "", referee: [this.userInit], hierarchy: "", updated: false };
        // this.contact = { name: "", id: "", email: "", phoneNumber: "" };
    }
    UserComponent.prototype.myDataCall = function () {
        var _this = this;
        this.myContacts = this.ps.getContacts(this.userId);
        this.coloursUsers = this.ps.getColoursUsers();
        this.myContacts.subscribe(function (data) {
            if (data.length > 0) {
                _this.showContacts = false;
            }
            else {
                _this.showContacts = true;
            }
        });
        var docRef = this.afs.collection("Users").doc(this.userId).snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (a) {
            var data = a.payload.data();
            var id = a.payload.id;
            return __assign({ id: id }, data);
        }));
        docRef.subscribe(function (userData) {
            console.log(userData);
            // userData.bodyMassIndex = Math.round(userData.bodyWeight / ((userData.bodyHeight * (1 / 100)) * ((userData.bodyHeight * (1 / 100)))));
            var bmi = (userData.bodyWeight / ((userData.bodyHeight * (1 / 100)) * ((userData.bodyHeight * (1 / 100)))));
            console.log(bmi.toFixed(1));
            userData.bodyMassIndex = Number(bmi.toFixed(1));
            console.log(userData.bodyMassIndex);
            _this.userData = userData;
        });
    };
    UserComponent.prototype.run1 = function () {
        console.log("show Edit User Profile");
        this.show1 = true;
        this.show = false;
        this.preview = false;
    };
    UserComponent.prototype.saveProfile = function (userData) {
        console.log(userData);
        userData.nationality = userData.country;
        console.log(this.aboutMe);
        this.afs.collection('Users').doc(this.userId)
            .set(userData);
        this.show1 = false;
        this.preview = true;
        console.log("show User Profile");
        this.myDataCall();
    };
    UserComponent.prototype.viewProfile = function () {
        this.show1 = false;
        this.preview = true;
        this.show = false;
    };
    UserComponent.prototype.done = function () {
        this.preview = false;
        this.show = true;
        console.log("show User Profile");
    };
    UserComponent.prototype.addContact = function (contact) {
        console.log(contact);
        var newcontact = { name: contact.name, id: contact.id, email: contact.email, phoneNumber: contact.phoneNumber };
        console.log(newcontact);
        this.afs.collection('Users').doc(this.userId).collection('contacts').doc(newcontact.id).set(newcontact);
        this.selectedContacts.push(newcontact);
        this.contact = { name: "", id: "", email: "", bus_email: "", phoneNumber: "", photoURL: "", address: "", nationalId: "", nationality: "" };
        this.newContact = null;
    };
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.user.subscribe(function (user) {
            console.log(user);
            _this.userId = user.uid;
            _this.user = user;
            console.log(_this.userId);
            console.log(_this.user);
            var mer = _this.afs.doc("Users/" + _this.userId);
            console.log(mer.valueChanges());
            _this.myDataCall();
            // this.userData.name = this.user.displayName;
            // this.userData.email = this.user.email;
            // this.userData.id = this.user.uid;
            // this.userData.phoneNumber = this.user.phoneNumber;
        });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'user-cmp',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/userpage/user.component.html")
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_1__["AngularFireAuth"], app_services_personal_service__WEBPACK_IMPORTED_MODULE_6__["PersonalService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/userpage/user.module.ts":
/*!*****************************************!*\
  !*** ./src/app/userpage/user.module.ts ***!
  \*****************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.component */ "./src/app/userpage/user.component.ts");
/* harmony import */ var _user_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.routing */ "./src/app/userpage/user.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_user_routing__WEBPACK_IMPORTED_MODULE_7__["UserRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_4__["TagInputModule"]
            ],
            declarations: [_user_component__WEBPACK_IMPORTED_MODULE_6__["UserComponent"]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/userpage/user.routing.ts":
/*!******************************************!*\
  !*** ./src/app/userpage/user.routing.ts ***!
  \******************************************/
/*! exports provided: UserRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRoutes", function() { return UserRoutes; });
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.component */ "./src/app/userpage/user.component.ts");

var UserRoutes = [{
        path: '',
        children: [{
                path: 'pages/user',
                component: _user_component__WEBPACK_IMPORTED_MODULE_0__["UserComponent"]
            }]
    }];


/***/ })

}]);
//# sourceMappingURL=userpage-user-module.js.map