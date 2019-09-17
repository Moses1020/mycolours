(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

/***/ "./src/app/pages/lock/lock.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/lock/lock.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-absolute fixed-top navbar-transparent\">\n  <div class=\"container\">\n    <div class=\"navbar-wrapper\">\n      <div class=\"navbar-toggle\" (click)=\"sidebarToggle()\">\n        <button type=\"button\" class=\"navbar-toggler\">\n          <span class=\"navbar-toggler-bar bar1\"></span>\n          <span class=\"navbar-toggler-bar bar2\"></span>\n          <span class=\"navbar-toggler-bar bar3\"></span>\n        </button>\n      </div>\n      <a class=\"navbar-brand\" routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\">Colours</a>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navigation\" aria-controls=\"navigation-index\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n      <span class=\"navbar-toggler-bar navbar-kebab\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/dashboard']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-layout-11\"></i> Dashboard\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/register']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-book-bookmark\"></i> Register\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/login']\"  class=\"nav-link\">\n            <i class=\"nc-icon nc-tap-01\"></i> Login\n          </a>\n        </li>\n        <li class=\"nav-item \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/user']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-satisfied\"></i> User\n          </a>\n        </li>\n        <li class=\"nav-item  active \">\n          <a routerLinkActive=\"active\" [routerLink]=\"['/pages/lock']\" class=\"nav-link\">\n            <i class=\"nc-icon nc-key-25\"></i> Lock\n          </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"wrapper wrapper-full-page \">\n  <div class=\"full-page lock-page section-image\" filter-color=\"black\" data-image=\"./assets/img/bg/bruno-abatti.jpg\">\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\n    <div class=\"content\">\n      <div class=\"container\">\n        <div class=\"col-lg-4 col-md-6 ml-auto mr-auto\">\n          <div class=\"card card-lock text-center\">\n            <div class=\"card-header \">\n              <img src=\"./assets/img/faces/joe-gardner-2.jpg\" alt=\"...\">\n            </div>\n            <div class=\"card-body \">\n              <h4 class=\"card-title\">Joe Gardner</h4>\n              <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" placeholder=\"Enter Password..\">\n              </div>\n            </div>\n            <div class=\"card-footer \">\n              <a href=\"#pablo\" class=\"btn btn-outline-default btn-round\">Unlock</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer footer-black  footer-white \">\n      <div class=\"container\">\n        <div class=\"row\">\n          <nav class=\"footer-nav\">\n            <ul>\n              <li>\n                <a href=\"#\" target=\"_blank\">Creative Tim</a>\n              </li>\n              <li>\n                <a href=\"https://www.colourssytem.com/\" target=\"_blank\">Blog</a>\n              </li>\n              <li>\n                <a href=\"#/license\" target=\"_blank\">Licenses</a>\n              </li>\n            </ul>\n          </nav>\n          <div class=\"credits ml-auto\">\n            <span class=\"copyright\">\n            &copy; {{test | date: 'yyyy'}}, made with <i class=\"fa fa-heart heart\"></i> by Creative Tim\n            </span>\n          </div>\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/lock/lock.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/lock/lock.component.ts ***!
  \**********************************************/
/*! exports provided: LockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockComponent", function() { return LockComponent; });
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

var LockComponent = /** @class */ (function () {
    function LockComponent(element) {
        this.element = element;
        this.test = new Date();
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    LockComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    LockComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('lock-page');
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    LockComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('lock-page');
    };
    LockComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    LockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'lock-cmp',
            template: __webpack_require__(/*! ./lock.component.html */ "./src/app/pages/lock/lock.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], LockComponent);
    return LockComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"full-page register-page section-image\" data-image=\"./assets/img/bg/login.png\"> -->\n<div class=\"full-page register-page section-image\" data-image=\"./assets/img/bg/login.png\">\n  <div class=\"wrapper wrapper-full-page\">\n      <div class=\"content\" style=\"padding-top: 0px;\">\n        <div class=\"container align-middle\" style=\" margin-top: 20px\">\n          <div class=\"spacer\" style=\"height: 2em\"></div>\n          <div class=\"row\">\n            <div class=\"col-md-4 ml-auto mr-auto\">\n              <!-- <div class=\"logo\" style=\"width: 62px; height: auto; padding: top 0em; padding-bottom:1.5em\"> -->\n              <div class=\"logo center\">\n                <div class=\"logo-imgn\">\n                  <img src=\"./assets/img/faces/colours_icon2.png\" />\n                </div>\n              </div>\n            </div>\n          </div>\n          <br>\n          <div class=\"row\">\n            <!-- <div class=\"col-md-8 col-md-offset-1\">\n            </div> -->\n            <div class=\"col-md-4 ml-auto mr-auto card\"  style=\"background-color: transparent;\">\n              <!-- <form method=\"#\" action=\"#\"> -->\n                <div class=\"card card-plain\">\n                  <div class=\"content\">\n                    <style>\n                      .clrs-logo{\n                          font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n                          /* font-family: AR ESSENCE; */\n                          /* color: steelblue; */\n                          font-size: 30px;\n                          backface-visibility: visible\n                      }\n                      .na-am{\n                        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n                          font-size: 20px;\n\n                      }\n\n                      .tmColor {\n                        color: #333366;\n                      }\n                    </style>\n                    <div class=\"card-content\">\n                        <!-- <h4 style=\"margin-top:10px ; margin-bottom :10px; color:#333366\"><span style=\"text-emphasis-color: #333366\"><font size= 2 >Already have an account?</font></span><br><span class=\"clrs-logo\">Sign-in to Colours</span> -->\n                        <h4 style=\"margin-top:10px ; margin-bottom :10px; color:#333366\"><a style=\"text-emphasis-color: #333366\" routerLink=\"/pages/register\"><font size= 2 >Already have an account?</font></a><br><span class=\"clrs-logo\">Sign-in to Colours</span>\n                        </h4>\n                      \n                        <h4 class=\" na-am\" style=\"margin-top:10px ; margin-bottom :10px; color:#333366\"><font size=2>Login using Twitter, Google  or Facebook</font>\n                        </h4>\n                        <div class=\"social\">\n                          <button class=\"btn btn-icon btn-round btn-twitter\" (click)=\"signInWithTwitter()\">\n                            <i class=\"fa fa-twitter\"></i>\n                          </button>\n                          <button class=\"btn btn-icon btn-round btn-google\" (click)=\"loginGoogle()\">\n                            <i class=\"fa fa-google\"></i>\n                          </button>\n                          <button class=\"btn btn-icon btn-round btn-facebook\" (click)=\"signInWithFacebook()\">\n                            <i class=\"fa fa-facebook-f\"></i>\n                          </button>\n                          <!-- <p class=\"card-description\"> or be classical </p> -->\n                        </div>\n                    </div>\n                    <div *ngIf=\"showemailLogin\">\n                      <h4 class=\"card-category na-am\" style=\"margin-top:10px ; margin-bottom :10px; color:#333366\">\n                        <font size=2>login using email</font>\n                      </h4>\n                      <!-- <div class=\"link\">\n                        <button type=\"text\" class=\"btn-link\" style=\"margin-top:10px ; margin-bottom :10px; color:#333366\" (click)=\"emailRegister()\"> <!- routerLink=\"/pages/register\" ->\n                          New to Colours, register using email\n                        </button>\n                      </div> -->\n                      <!-- <form #f=\"ngForm\" >                   -->\n                        <div class=\"card-body \">\n                          <p *ngIf=\"statusLoginEmail\" class=\"category text-danger\" style=\"margin-top:-1em; cursor: pointer;\">Email Required</p>\n                          <div class=\"input-group\" style=\"background-color: transparent;\"> <!--  [ngClass]=\"{'input-group-focus':focus===true}\"   -->\n                            <div class=\"input-group-prepend\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\">\n                              <span class=\"input-group-text\">\n                                <i class=\"nc-icon nc-single-02\"></i>\n                              </span>\n                            </div>\n                            <input [(ngModel)]=\"emailPasswordLogin.email\" name=\"loginEmail\" type=\"email\" class=\"form-control\" placeholder=\"e-mail address...\" (focus)=\"focus=true\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" (blur)=\"focus=false\">\n                          </div>\n                          <p *ngIf=\"statusLoginPwd\" class=\"category text-danger\" style=\"margin-bottom: 0px; cursor: pointer;\">Password Required</p>\n\n                          <div class=\"input-group\"> <!--  [ngClass]=\"{'input-group-focus':focus1===true}\" -->\n                            <div class=\"input-group-prepend\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\">\n                              <span class=\"input-group-text\">\n                                <i class=\"nc-icon nc-key-25\"></i>\n                              </span>\n                            </div>\n                            <input [(ngModel)]=\"emailPasswordLogin.password\" name=\"loginPassword\" type=\"password\" placeholder=\"password\" class=\"form-control\" (focus)=\"focus1=true\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" (blur)=\"focus1=false\">\n                          </div>\n                          \n                          <a class=\"category\" style=\"margin-top:-1em; cursor: pointer;\">Forgot your Password? </a>\n                          <div class=\"card-footer text-left card-category\">\n                            <!-- <a class=\"btn btn-info btn-link btn-round\" style=\"color:#333366;background-color: #3339;\" (click)=\"toggleLogIn(emailPasswordLogin)\">Login</a> -->\n                            <a class=\"btn btn-info btn-link btn-round\" style=\"color:#fafafa;background-color: #333366;\" (click)=\"toggleLogIn(emailPasswordLogin)\">Log in</a>\n                          </div>\n                          <br>\n                          <!-- <div class=\"form-group\">\n                            <div class=\"form-check\">\n                              <label class=\"form-check-label\">\n                                <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                <span class=\"form-check-sign\"></span>\n                                Subscribe to newsletter\n                              </label>\n                            </div>\n                          </div> -->\n                        </div>\n                      <!-- </form> -->\n                    </div>\n                    <div *ngIf=\"showEmailRegister\">\n                      <ng-container *ngIf=\"emailVerifiedinit == false\">\n                        <h4 class=\"card-category na-am\" style=\"margin-top:10px ; margin-bottom :10px; color:#333366\">\n                          <small>Register using email</small>\n                        </h4>\n                        <div class=\"link\">\n                          <button type=\"text\" class=\"btn-link\"\n                            style=\"margin-top:10px ; margin-bottom :10px; color:#333366\" (click)=\"emailLogin()\">\n                            <!-- routerLink=\"/pages/register\" -->\n                            Not new Colours, login using email\n                          </button>\n                        </div>\n                        <div class=\"card-body \">\n                          <p *ngIf=\"statusSigninEmail\" class=\"category text-danger\"\n                            style=\"margin-top:-1em; cursor: pointer;\">Email Required</p>\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\"\n                              style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\">\n                              <span class=\"input-group-text\">\n                                <i class=\"nc-icon nc-single-02\"></i>\n                              </span>\n                            </div>\n                            <input [(ngModel)]=\"emailPasswordLogin.email\" name=\"signEmail\" type=\"email\"\n                              class=\"form-control\" placeholder=\"email address...\" (focus)=\"focus=true\"\n                              style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" (blur)=\"focus=false\">\n                          </div>\n                          <p *ngIf=\"statusSigninPwd\" class=\"category text-danger\"\n                            style=\"margin-bottom: 0px;cursor: pointer;\">Password Required</p>\n\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\"\n                              style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\">\n                              <span class=\"input-group-text\">\n                                <i class=\"nc-icon nc-key-25\"></i>\n                              </span>\n                            </div>\n                            <input [(ngModel)]=\"emailPasswordLogin.password\" name=\"signPassword\" type=\"password\"\n                              placeholder=\"Password\" class=\"form-control\" (focus)=\"focus1=true\"\n                              style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" (blur)=\"focus1=false\">\n                          </div>\n                          <div class=\"card-footer text-left card-category\">\n                            <a class=\"btn btn-info btn-link btn-round\" style=\"color:#333366; cursor:pointer\"\n                              (click)=\"coloursSignIn(emailPasswordLogin)\">Sign up</a>\n                          </div>\n                          <br>\n                          <div class=\"form-group\">\n                            <div class=\"form-check\">\n                              <label class=\"form-check-label\">\n                                <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                                <span class=\"form-check-sign\"></span>\n                                Subscribe to newsletter\n                              </label>\n                            </div>\n                          </div>\n                        </div>\n                      </ng-container>\n                      <ng-container *ngIf=\"emailVerified == false\">\n                        <div class=\"card-plain card-body\" style=\"color:#333366\">\n                          <p>Congratulations you have successfully signed up,<br>\n                             Waiting for verification <i class=\"fa fa-spinner fa-spin fa-2x fa-fw\"></i> </p>\n                          <br>\n                          <p>Email: {{ emailId }}</p>\n                          <p>Verified: <span class=\"text-danger\"> {{ emailVerified }}</span></p>\n                          <p>Go to your email and confirm to verify</p><br>\n                          <a class=\"btn btn-info btn-link btn-round\" style=\"color:#333366\" (click)=\"dismiss()\">Cancel</a>\n                          <a class=\"btn btn-info btn-link btn-round\" style=\"color:#333366\" (click)=\"sendVerification()\">Resend verification</a>\n\n                        </div>\n                      </ng-container>\n                    </div>\n                  </div>\n                </div>\n              <!-- </form> -->\n            </div>\n          </div>\n        </div>\n      </div>\n    <!-- </div> -->\n  </div>\n</div>\n<!-- <script>\n  window.fbAsyncInit = function () {\n    FB.init({\n    appId: '{235005784119427}',\n      cookie: true,\n      xfbml: true,\n      version: '{api-version}'\n    });\n\n    FB.AppEvents.logPageView();\n\n  };\n\n  (function (d, s, id) {\n    var js, fjs = d.getElementsByTagName(s)[0];\n    if (d.getElementById(id)) {\n      return;\n    }\n    js = d.createElement(s);\n    js.id = id;\n    js.src = \"https://connect.facebook.net/en_US/sdk.js\";\n    fjs.parentNode.insertBefore(js, fjs);\n  }(document, 'script', 'facebook-jssdk'));\n</script> -->"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_personal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/personal.service */ "./src/app/services/personal.service.ts");
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_8__);
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






var LoginComponent = /** @class */ (function () {
    // cuser: coloursUser
    function LoginComponent(element, router, afAuth, afs, pns, as) {
        this.element = element;
        this.router = router;
        this.afAuth = afAuth;
        this.afs = afs;
        this.pns = pns;
        this.as = as;
        this.actionCodeSettings = {
            // URL you want to redirect back to. The domain (www.example.com) for this
            // URL must be whitelisted in the Firebase Console.
            url: 'http://www.colourssystem.com/',
            // This must be true.
            handleCodeInApp: true,
            // iOS: {
            //     bundleId: 'com.example.ios'
            // },
            // android: {
            //     packageName: 'com.example.android',
            //     installApp: true,
            //     minimumVersion: '12'
            // },
            dynamicLinkDomain: 'http://www.colourssystem.com/'
        };
        this.showless = false;
        this.show1 = false;
        this.showmoreP = false;
        this.showlessP = false;
        this.showmoreE = true;
        this.showlessE = true;
        this.showEmailRegister = false;
        this.showemailLogin = true;
        this.test = new Date();
        this.nullLoginEmail = true;
        this.statusLoginEmail = false;
        this.nullSigninEmail = true;
        this.statusSigninEmail = false;
        this.nullLoginPwd = true;
        this.statusLoginPwd = false;
        this.nullSigninPwd = true;
        this.statusSigninPwd = false;
        this.emailVerifiedinit = false;
        this.emailVerified = true;
        // pns.dataCall();
        this.dataCall();
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        this.emailPasswordLogin = { email: '', password: '' };
        // this.emailVerified = true;        
        this.emailId = '';
    }
    LoginComponent.prototype.emailRegister = function () {
        this.showEmailRegister = true;
        this.showemailLogin = false;
    };
    LoginComponent.prototype.emailLogin = function () {
        this.showemailLogin = true;
        this.showEmailRegister = false;
    };
    LoginComponent.prototype.toggleLogIn = function (credentials) {
        var _this = this;
        if (credentials.email != "") {
            this.nullLoginEmail = true;
            this.statusLoginEmail = false;
            if (credentials.password != "") {
                this.nullLoginPwd = true;
                this.statusLoginPwd = false;
                if (firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser) {
                    // [START signout]
                    firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().signOut();
                    // [END signout]
                }
                else {
                    console.log('email' + credentials.email);
                    // console.log('email' + email);
                    if (credentials.email.length < 4) {
                        alert('Please enter an email address.');
                        return;
                    }
                    if (credentials.password.length < 4) {
                        alert('Please enter a password.');
                        return;
                    }
                    // Sign in with email and pass.
                    // [START authwithemail]
                    firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().signInWithEmailAndPassword(credentials.email, credentials.password).then(function (ref) {
                        console.log("Check User collection for doc");
                        // console.log(ref);
                        _this.coloursUserDetails = ref;
                        var coloursUser = ref.user;
                        var userData = {
                            name: coloursUser.displayName,
                            email: coloursUser.email,
                            id: coloursUser.uid,
                            userImg: coloursUser.photoURL,
                            //phoneNumber: coloursUser.phoneNumber,
                            LastTimeLogin: new Date().toString()
                        };
                        console.log(userData);
                        if (_this.coloursUserDetails.additionalUserInfo.isNewUser) {
                            _this.afs.collection('Users').doc(coloursUser.uid).set(userData).catch(function (error) { return console.error(); });
                            _this.afs.collection('Users').doc(coloursUser.uid).update({ 'bus_email': "" });
                            _this.afs.collection('Users').doc(coloursUser.uid).update({ 'nationalId': "" });
                            _this.afs.collection('Users').doc(coloursUser.uid).update({ 'nationality': "" });
                            _this.afs.collection('Users').doc(coloursUser.uid).update({ 'address': "" });
                            console.log("userData is set");
                        }
                        else {
                            // this.afs.collection('Users').doc(coloursUser.uid).update(userData).catch(error => console.error());
                            console.log("userData is not updated");
                        }
                        var value;
                        var setUser = _this.afs.collection('Users').doc(coloursUser.uid);
                        _this.userCollection = _this.afs.collection('Users').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (b) { return b.map(function (a) {
                            var data = a.payload.doc.data();
                            var id = a.payload.doc.id;
                            return __assign({ id: id }, data);
                        }); }));
                        _this.userCollection.subscribe(function (ref) {
                            var index = ref.findIndex(function (user) { return user.name === userData.name; });
                            if (index > -1) {
                                value = ref[index].name;
                            }
                            else {
                                if (value === userData.name) {
                                    setUser.update(userData);
                                }
                                else {
                                    setUser.set(userData);
                                }
                            }
                        });
                        // this.router.navigateByUrl('dashboard');
                        //return
                        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
                        // You can use these server side with your app's credentials to access the Twitter API.
                        // var token = result.credential.accessToken;
                        // var secret = result.credential.secret;
                        // The signed-in user info.
                        console.log(ref.credential);
                        var user = ref.user;
                        // ...
                    }).catch(function (error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // [START_EXCLUDE]
                        if (errorCode === 'auth/wrong-password') {
                            alert('Wrong password.');
                        }
                        else {
                            alert(errorMessage);
                        }
                        console.log(error);
                        // document.getElementById('quickstart-sign-in').disabled = false;
                        // [END_EXCLUDE]
                    });
                    // [END authwithemail]
                }
            }
            else {
                this.nullLoginPwd = false;
                this.statusLoginPwd = true;
                console.log('Enter Your Correct Password');
            }
        }
        else {
            this.nullLoginEmail = false;
            this.statusLoginEmail = true;
            console.log('Enter Your Correct email');
        }
        // document.getElementById('quickstart-sign-in').disabled = true;
    };
    LoginComponent.prototype.sendEmailVerification = function (email) {
        // [START sendemailverification]
        firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().sendSignInLinkToEmail(email, this.actionCodeSettings).then(function () {
            // The link was successfully sent. Inform the user.
            // Save the email locally so you don't need to ask the user for it again
            // if they open the link on the same device.
            window.localStorage.setItem('emailForSignIn', email);
            alert('Email Verification Sent!');
        })
            .catch(function (error) {
            // Some error occurred, you can inspect the code: error.code
        });
    };
    LoginComponent.prototype.sendPasswordReset = function (email) {
        // var email = document.getElementById('email').value;
        // [START sendpasswordemail]
        firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().sendPasswordResetEmail(email).then(function () {
            // Password Reset Email Sent!
            // [START_EXCLUDE]
            alert('Password Reset Email Sent!');
            // [END_EXCLUDE]
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode == 'auth/invalid-email') {
                alert(errorMessage);
            }
            else if (errorCode == 'auth/user-not-found') {
                alert(errorMessage);
            }
            console.log(error);
            // [END_EXCLUDE]
        });
        // [END sendpasswordemail];
    };
    LoginComponent.prototype.coloursSignIn = function (credentials) {
        var _this = this;
        if (credentials.email != "") {
            this.nullSigninEmail = true;
            this.statusSigninEmail = false;
            if (credentials.password != "") {
                this.nullSigninPwd = true;
                this.statusSigninPwd = false;
                if (firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser) {
                    // [START signout]
                    firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().signOut();
                    // [END signout]
                }
                else {
                    console.log('email' + credentials.email);
                    // console.log('email' + email);
                    if (credentials.email.length < 4) {
                        alert('Please enter an email address.');
                        return;
                    }
                    if (credentials.password.length < 4) {
                        alert('Please enter a password 8 characters long.');
                        return;
                    }
                    // Sign in with email and pass.
                    // [START authwithemail]
                    // this.sendEmailVerification(credentials.email);
                    firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().createUserWithEmailAndPassword(credentials.email, credentials.password).then(function (ref) {
                        console.log("Check User collection for doc");
                        // userRef.sendEmailVerification();
                        // userRef.user.sendEmailVerification();
                        // console.log(ref);
                        _this.coloursUserDetails = ref;
                        console.log(firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"].EmailAuthProvider);
                        console.log(firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.providerData[0].providerId);
                        var coloursUser = ref.user;
                        _this.emailUser = coloursUser;
                        console.log(coloursUser.emailVerified);
                        coloursUser.sendEmailVerification();
                        if (coloursUser !== null) {
                            // this.emailId = coloursUser.email;
                            if (coloursUser.emailVerified === false) {
                                var emailVerified = false;
                                _this.emailVerified = false;
                                _this.emailVerifiedinit = true;
                            }
                            var userData_1 = {
                                name: coloursUser.displayName,
                                email: coloursUser.email,
                                id: coloursUser.uid,
                                userImg: coloursUser.photoURL,
                                //phoneNumber: coloursUser.phoneNumber,
                                LastTimeLogin: new Date().toString()
                            };
                            console.log(userData_1);
                            if (_this.coloursUserDetails.additionalUserInfo.isNewUser) {
                                _this.afs.collection('Users').doc(coloursUser.uid).set(userData_1).catch(function (error) { return console.error(); });
                                _this.afs.collection('Users').doc(coloursUser.uid).update({ 'bus_email': "" });
                                _this.afs.collection('Users').doc(coloursUser.uid).update({ 'nationalId': "" });
                                _this.afs.collection('Users').doc(coloursUser.uid).update({ 'nationality': "" });
                                _this.afs.collection('Users').doc(coloursUser.uid).update({ 'address': "" });
                                console.log("userData is set");
                            }
                            else {
                                // this.afs.collection('Users').doc(coloursUser.uid).update(userData).catch(error => console.error());
                                console.log("userData is not updated");
                            }
                            var value_1;
                            var setUser_1 = _this.afs.collection('Users').doc(coloursUser.uid);
                            _this.userCollection = _this.afs.collection('Users').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (b) { return b.map(function (a) {
                                var data = a.payload.doc.data();
                                var id = a.payload.doc.id;
                                return __assign({ id: id }, data);
                            }); }));
                            _this.userCollection.subscribe(function (ref) {
                                var index = ref.findIndex(function (user) { return user.name === userData_1.name; });
                                if (index > -1) {
                                    value_1 = ref[index].name;
                                }
                                else {
                                    if (value_1 === userData_1.name) {
                                        setUser_1.update(userData_1);
                                    }
                                    else {
                                        setUser_1.set(userData_1);
                                    }
                                }
                            });
                            // this.router.navigateByUrl('dashboard');
                        }
                        else {
                        }
                        // console.log(ref.credential);
                        var user = ref.user;
                        // ...
                    }).catch(function (error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // [START_EXCLUDE]
                        if (errorCode === 'auth/wrong-password') {
                            alert('Wrong password.');
                        }
                        else {
                            alert(errorMessage);
                        }
                        console.log(error);
                        // document.getElementById('quickstart-sign-in').disabled = false;
                        // [END_EXCLUDE]
                    });
                    // [END authwithemail]
                }
            }
            else {
                this.nullSigninPwd = false;
                this.statusSigninPwd = true;
                console.log('Enter Your Correct Password');
            }
        }
        else {
            var email = window.prompt('Please provide your email');
            this.nullSigninEmail = false;
            this.statusSigninEmail = true;
            console.log('Enter Your Correct email');
        }
        // document.getElementById('quickstart-sign-in').disabled = true;
        // if (this.emailUser.emailVerified == true) {
        //     // this.router.navigateByUrl('dashboard');
        // }
    };
    LoginComponent.prototype.sendVerification = function () {
        this.user.sendEmailVerification().then(function () {
            // Password Reset Email Sent!
            // [START_EXCLUDE]
            alert('Verification sent!, Please check your email before the link expires');
            // [END_EXCLUDE]
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode + ' ' + errorMessage);
            console.log(error);
            // [END_EXCLUDE]
        });
    };
    LoginComponent.prototype.run1 = function () {
        this.show1 = true;
        this.showless = true;
        this.compShowLess();
        this.projectShowLess();
    };
    LoginComponent.prototype.showLess = function () {
        this.showless = false;
        this.show1 = false;
    };
    LoginComponent.prototype.projectShowMore = function () {
        this.showmoreP = true;
        this.showlessP = true;
        this.compShowLess();
        this.showLess();
    };
    LoginComponent.prototype.projectShowLess = function () {
        this.showlessP = false;
        this.showmoreP = false;
    };
    LoginComponent.prototype.compShowMore = function () {
        this.showmoreE = true;
        this.showlessE = true;
        this.showLess();
        this.projectShowLess();
    };
    LoginComponent.prototype.compShowLess = function () {
        this.showlessE = false;
        this.showmoreE = false;
    };
    LoginComponent.prototype.loginGoogle = function () {
        var _this = this;
        // this.as.googleSign();
        this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider()).then(function (ref) {
            console.log("Check User collection for doc");
            console.log(firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.providerData[0].providerId);
            // console.log(ref);
            _this.coloursUserDetails = ref;
            var coloursUser = ref.user;
            var userData = {
                name: coloursUser.displayName,
                email: coloursUser.email,
                id: coloursUser.uid,
                userImg: coloursUser.photoURL,
                address: "",
                nationality: "",
                nationalId: "",
                bus_email: "",
                // phoneNumber: coloursUser.phoneNumber,
                LastTimeLogin: new Date().toString()
            };
            console.log(userData);
            if (_this.coloursUserDetails.additionalUserInfo.isNewUser) {
                _this.afs.collection('Users').doc(coloursUser.uid).set(userData).catch(function (error) { return console.error(); });
                // this.afs.collection('Users').doc(coloursUser.uid).update({ 'bus_email': "" });
                // this.afs.collection('Users').doc(coloursUser.uid).update({ 'nationalId': "" });
                // this.afs.collection('Users').doc(coloursUser.uid).update({ 'nationality': "" });
                // this.afs.collection('Users').doc(coloursUser.uid).update({ 'address': "" });
                // console.log("userData is set");
            }
            else {
                // this.afs.collection('Users').doc(coloursUser.uid).update(userData).catch(error => console.error());
                console.log("userData is not updated");
            }
            // let value;
            // let setUser = this.afs.collection('Users').doc(coloursUser.uid);
            // this.userCollection = this.afs.collection('Users').snapshotChanges().pipe(
            //     map(b => b.map(a => {
            //         const data = a.payload.doc.data() as any;
            //         const id = a.payload.doc.id;
            //         return { id, ...data };
            //     }))
            // );
            // this.userCollection.subscribe(ref => {
            //     const index = ref.findIndex(user => user.name === userData.name);
            //     if (index > -1) {
            //         value = ref[index].name;
            //     } else {
            //         if (value === userData.name) {
            //             setUser.update(userData);
            //         } else {
            //             setUser.set(userData);
            //         }
            //     }
            // })
            // this.router.navigateByUrl('dashboard');
            //return
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    };
    LoginComponent.prototype.signInWithTwitter = function () {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"].TwitterAuthProvider()).then(function (ref) {
            console.log("Check User collection for doc");
            console.log(firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.providerData[0].providerId);
            // console.log(ref);
            _this.coloursUserDetails = ref;
            var coloursUser = ref.user;
            var userData = {
                name: coloursUser.displayName,
                email: coloursUser.email,
                id: coloursUser.uid,
                userImg: coloursUser.photoURL,
                //phoneNumber: coloursUser.phoneNumber,
                LastTimeLogin: new Date().toString()
            };
            console.log(userData);
            if (_this.coloursUserDetails.additionalUserInfo.isNewUser) {
                _this.afs.collection('Users').doc(coloursUser.uid).set(userData).catch(function (error) { return console.error(); });
                _this.afs.collection('Users').doc(coloursUser.uid).update({ 'bus_email': "" });
                _this.afs.collection('Users').doc(coloursUser.uid).update({ 'nationalId': "" });
                _this.afs.collection('Users').doc(coloursUser.uid).update({ 'nationality': "" });
                _this.afs.collection('Users').doc(coloursUser.uid).update({ 'address': "" });
                console.log("userData is set");
            }
            else {
                // this.afs.collection('Users').doc(coloursUser.uid).update(userData).catch(error => console.error());
                console.log("userData is not updated");
            }
            // let value;
            // let setUser = this.afs.collection('Users').doc(coloursUser.uid);
            // this.userCollection = this.afs.collection('Users').snapshotChanges().pipe(
            //     map(b => b.map(a => {
            //         const data = a.payload.doc.data() as any;
            //         const id = a.payload.doc.id;
            //         return { id, ...data };
            //     }))
            // );
            // this.userCollection.subscribe(ref => {
            //     const index = ref.findIndex(user => user.name === userData.name);
            //     if (index > -1) {
            //         value = ref[index].name;
            //     } else {
            //         if (value === userData.name) {
            //             setUser.update(userData);
            //         } else {
            //             setUser.set(userData);
            //         }
            //     }
            // })
            // this.router.navigateByUrl('dashboard');
            //return
            // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
            // You can use these server side with your app's credentials to access the Twitter API.
            // var token = result.credential.accessToken;
            // var secret = result.credential.secret;
            // The signed-in user info.
            console.log(ref.credential);
            var user = ref.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    };
    LoginComponent.prototype.signInWithFacebook = function () {
        var _this = this;
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"].FacebookAuthProvider();
        firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().signInWithPopup(provider)
            .then(function (ref) {
            console.log("Check User collection for doc");
            console.log(firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.providerData[0].providerId);
            console.log(ref);
            _this.coloursUserDetails = ref;
            var coloursUser = ref.user;
            var userData = {
                name: coloursUser.displayName,
                email: coloursUser.email,
                id: coloursUser.uid,
                userImg: coloursUser.photoURL,
                //phoneNumber: coloursUser.phoneNumber,
                LastTimeLogin: new Date().toString()
            };
            console.log(userData);
            if (_this.coloursUserDetails.additionalUserInfo.isNewUser) {
                _this.afs.collection('Users').doc(coloursUser.uid).set(userData).catch(function (error) { return console.error(); });
                _this.afs.collection('Users').doc(coloursUser.uid).update({ 'bus_email': "" });
                _this.afs.collection('Users').doc(coloursUser.uid).update({ 'nationalId': "" });
                _this.afs.collection('Users').doc(coloursUser.uid).update({ 'nationality': "" });
                _this.afs.collection('Users').doc(coloursUser.uid).update({ 'address': "" });
                console.log("userData is set");
            }
            else {
                // this.afs.collection('Users').doc(coloursUser.uid).update(userData).catch(error => console.error());
                console.log("userData is not updated");
            }
            // let value;
            // let setUser = this.afs.collection('Users').doc(coloursUser.uid);
            // this.userCollection = this.afs.collection('Users').snapshotChanges().pipe(
            //     map(b => b.map(a => {
            //         const data = a.payload.doc.data() as any;
            //         const id = a.payload.doc.id;
            //         return { id, ...data };
            //     }))
            // );
            // this.userCollection.subscribe(ref => {
            //     const index = ref.findIndex(user => user.name === userData.name);
            //     if (index > -1) {
            //         value = ref[index].name;
            //     } else {
            //         if (value === userData.name) {
            //             setUser.update(userData);
            //         } else {
            //             setUser.set(userData);
            //         }
            //     }
            // })
            // this.router.navigateByUrl('dashboard');
            //return
            // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
            // You can use these server side with your app's credentials to access the Twitter API.
            // var token = result.credential.accessToken;
            // var secret = result.credential.secret;
            // The signed-in user info.
            console.log(ref.credential);
            var user = ref.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    };
    LoginComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    LoginComponent.prototype.dismiss = function () {
        this.afAuth.auth.signOut();
        this.emailVerifiedinit = false;
        this.emailVerified = true;
    };
    LoginComponent.prototype.dataCall = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (user) {
            console.log(user);
            if (user === null) {
                // this.router.navigate(['/pages/login']);
            }
            else {
                if (user !== null) {
                    _this.user = user;
                    _this.userId = user.uid;
                    if (firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.providerData[0].providerId === 'password') {
                        if (firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.emailVerified === true) {
                            _this.router.navigate(['/dashboard']);
                        }
                        else {
                            _this.emailId = firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.email;
                            _this.emailVerifiedinit = true;
                            _this.emailVerified = false;
                        }
                    }
                    if (firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.providerData[0].providerId === 'google.com') {
                        _this.router.navigate(['/dashboard']);
                    }
                    if (firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.providerData[0].providerId === 'facebook.com') {
                        _this.router.navigate(['/dashboard']);
                    }
                    if (firebase_app__WEBPACK_IMPORTED_MODULE_8__["auth"]().currentUser.providerData[0].providerId === 'twitter.com') {
                        _this.router.navigate(['/dashboard']);
                    }
                }
                // this.router.navigate(['/dashboard']);
            }
        });
    };
    LoginComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    LoginComponent.prototype.ngOnInit = function () {
        // this.afAuth.authState.subscribe(user => {
        //     this.router.navigate(['./dashboard'])
        // })
        this.checkFullPageBackgroundImage();
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
    };
    LoginComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'login-cmp',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _services_personal_service__WEBPACK_IMPORTED_MODULE_5__["PersonalService"], app_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/moment-dates/moment-dates.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/moment-dates/moment-dates.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vbWVudC1kYXRlcy9tb21lbnQtZGF0ZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/moment-dates/moment-dates.component.html":
/*!****************************************************************!*\
  !*** ./src/app/pages/moment-dates/moment-dates.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  moment-dates works!\n</p>\n"

/***/ }),

/***/ "./src/app/pages/moment-dates/moment-dates.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/moment-dates/moment-dates.component.ts ***!
  \**************************************************************/
/*! exports provided: MomentDatesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MomentDatesComponent", function() { return MomentDatesComponent; });
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

var MomentDatesComponent = /** @class */ (function () {
    function MomentDatesComponent() {
    }
    // get
    MomentDatesComponent.prototype.ngOnInit = function () {
    };
    MomentDatesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-moment-dates',
            template: __webpack_require__(/*! ./moment-dates.component.html */ "./src/app/pages/moment-dates/moment-dates.component.html"),
            styles: [__webpack_require__(/*! ./moment-dates.component.css */ "./src/app/pages/moment-dates/moment-dates.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MomentDatesComponent);
    return MomentDatesComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages.routing */ "./src/app/pages/pages.routing.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _lock_lock_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lock/lock.component */ "./src/app/pages/lock/lock.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _moment_dates_moment_dates_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./moment-dates/moment-dates.component */ "./src/app/pages/moment-dates/moment-dates.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/pages/welcome/welcome.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_pages_routing__WEBPACK_IMPORTED_MODULE_4__["PagesRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"],
                _lock_lock_component__WEBPACK_IMPORTED_MODULE_6__["LockComponent"],
                _moment_dates_moment_dates_component__WEBPACK_IMPORTED_MODULE_8__["MomentDatesComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeComponent"],
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.routing.ts":
/*!****************************************!*\
  !*** ./src/app/pages/pages.routing.ts ***!
  \****************************************/
/*! exports provided: PagesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutes", function() { return PagesRoutes; });
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _lock_lock_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lock/lock.component */ "./src/app/pages/lock/lock.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _moment_dates_moment_dates_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./moment-dates/moment-dates.component */ "./src/app/pages/moment-dates/moment-dates.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/pages/welcome/welcome.component.ts");





var PagesRoutes = [{
        path: '',
        children: [{
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_2__["LoginComponent"]
            }, {
                path: 'lock',
                component: _lock_lock_component__WEBPACK_IMPORTED_MODULE_1__["LockComponent"]
            }, {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]
            }, {
                path: 'welcome',
                component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"]
            }, {
                path: 'moments',
                component: _moment_dates_moment_dates_component__WEBPACK_IMPORTED_MODULE_3__["MomentDatesComponent"]
            }]
    }];


/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"full-page register-page section-image\" data-image=\"./assets/img/bg/login.png\"> -->\n<div class=\"full-page register-page section-image\" data-image=\"./assets/img/bg/Page2.png\">\n  <div class=\"wrapper wrapper-full-page\">\n    <div class=\"content\" style=\"padding-top: 0px;\">\n      <div class=\"container align-middle\" style=\" margin-top: 20px\">\n        <div class=\"spacer\" style=\"height: 2em\"></div>\n        <div class=\"row\">\n          <div class=\"col-md-4 ml-auto mr-auto\">\n            <!-- <div class=\"logo\" style=\"width: 62px; height: auto; padding: top 0em; padding-bottom:1.5em\"> -->\n            <div class=\"logo \">\n              <div class=\"logo-imgn\">\n                <img src=\"./assets/img/faces/colours_icon2.png\" />\n              </div>\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-md-4 ml-auto mr-auto card\" style=\"background-color: transparent;\">\n            <form method=\"#\" action=\"#\">\n              <div class=\"card card-plain\">\n                <div class=\"content\">\n                  <style>\n                    .clrs-logo {\n                      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n                      /* font-family: AR ESSENCE; */\n                      /* color: steelblue; */\n                      font-size: 30px;\n                      backface-visibility: visible\n                    }\n\n                    .na-am {\n                      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n                      font-size: 20px;\n\n                    }\n\n                    .tmColor {\n                      color: #333366;\n                    }\n                  </style>\n                  <div class=\"card-content\">\n                    <h4 style=\"margin-top:10px ; margin-bottom :10px; color:#333366\">\n                      <span class=\"clrs-logo\">Create your Colours account</span>\n                    </h4>\n\n                    <h4 class=\" na-am\" style=\"margin-top:10px ; margin-bottom :10px; color:#333366\">\n                      <font size=2>Register using Twitter, Google or Facebook</font>\n                    </h4>\n                    <div class=\"social\">\n                      <button class=\"btn btn-icon btn-round btn-twitter\" (click)=\"signInWithTwitter()\">\n                        <i class=\"fa fa-twitter\"></i>\n                      </button>\n                      <button class=\"btn btn-icon btn-round btn-google\" (click)=\"loginGoogle()\">\n                        <i class=\"fa fa-google\"></i>\n                      </button>\n                      <button class=\"btn btn-icon btn-round btn-facebook\" (click)=\"signInWithFacebook()\">\n                        <i class=\"fa fa-facebook-f\"></i>\n                      </button>\n                    </div>\n                  </div>\n                  <!-- <div *ngIf=\"showemailLogin\">\n                    <h4 class=\"card-category na-am\" style=\"margin-top:10px ; margin-bottom :10px; color:#333366\">\n                      <small>login using email</small>\n                    </h4>\n                    <div class=\"card-body \">\n                      <p *ngIf=\"statusLoginEmail\" class=\"category text-danger\"\n                        style=\"margin-top:-1em; cursor: pointer;\">Email Required</p>\n                      <div class=\"input-group\" style=\"background-color: transparent;\">\n                        <div class=\"input-group-prepend\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\">\n                          <span class=\"input-group-text\">\n                            <i class=\"nc-icon nc-single-02\"></i>\n                          </span>\n                        </div>\n                        <input [(ngModel)]=\"emailPasswordLogin.email\" name=\"loginEmail\" type=\"email\"\n                          class=\"form-control\" placeholder=\"e-mail address...\" (focus)=\"focus=true\"\n                          style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" (blur)=\"focus=false\">\n                      </div>\n                      <p *ngIf=\"statusLoginPwd\" class=\"category text-danger\"\n                        style=\"margin-bottom: 0px; cursor: pointer;\">Password Required</p>\n\n                      <div class=\"input-group\">\n                        <div class=\"input-group-prepend\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\">\n                          <span class=\"input-group-text\">\n                            <i class=\"nc-icon nc-key-25\"></i>\n                          </span>\n                        </div>\n                        <input [(ngModel)]=\"emailPasswordLogin.password\" name=\"loginPassword\" type=\"password\"\n                          placeholder=\"Password\" class=\"form-control\" (focus)=\"focus1=true\"\n                          style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" (blur)=\"focus1=false\">\n                      </div>\n\n                      <a class=\"category\" style=\"margin-top:-1em; cursor: pointer;\">Forgot your Password? </a>\n                      <div class=\"card-footer text-left card-category\">\n                        <a class=\"btn btn-info btn-link btn-round\" style=\"color:#fafafa;background-color: #333366;\"\n                          (click)=\"toggleLogIn(emailPasswordLogin)\">Login</a>\n                      </div>\n                      <br>\n                    </div>\n                  </div> -->\n                  <div *ngIf=\"showEmailRegister\">\n                    <ng-container *ngIf=\"emailVerifiedinit == false\">\n                      <h4 class=\"card-category na-am\" style=\"margin-top:10px ; margin-bottom :10px; color:#333366\">\n                        <font size=2>Register using e-mail</font>\n                      </h4>\n                      <div class=\"card-body\">\n                        <p *ngIf=\"statusSigninEmail\" class=\"category text-danger\"\n                          style=\"margin-top:-1em; cursor: pointer;\">Email Required</p>\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\">\n                            <span class=\"input-group-text\">\n                              <i class=\"nc-icon nc-single-02\"></i>\n                            </span>\n                          </div>\n                          <input [(ngModel)]=\"emailPasswordLogin.email\" name=\"signEmail\" type=\"email\"\n                            class=\"form-control\" placeholder=\"e-mail address...\" (focus)=\"focus=true\"\n                            style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\" (blur)=\"focus=false\">\n                        </div>\n                        <p *ngIf=\"statusSigninPwd\" class=\"category text-danger\"\n                          style=\"margin-bottom: 0px;cursor: pointer;\">Password Required</p>\n\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\">\n                            <span class=\"input-group-text\">\n                              <i class=\"nc-icon nc-key-25\"></i>\n                            </span>\n                          </div>\n                          <input [(ngModel)]=\"emailPasswordLogin.password\" name=\"signPassword\" type=\"password\"\n                            placeholder=\"password\" class=\"form-control\" (focus)=\"focus1=true\"\n                            style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\"\n                            (blur)=\"focus1=false\">\n                        </div>\n                        <div class=\"input-group\">\n                          <div class=\"input-group-prepend\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\">\n                            <span class=\"input-group-text\">\n                              <i class=\"nc-icon nc-key-25\"></i>\n                            </span>\n                          </div>\n                          <input [(ngModel)]=\"passwordTest\" name=\"signPasswordtest\" type=\"password\" placeholder=\"confirm password\"\n                            class=\"form-control\" (focus)=\"focus1=true\" style=\"padding-top: 0px;padding-bottom: 0px; height: 32px;\"\n                            (blur)=\"focus1=false\">\n                        </div>\n                        <div class=\"form-group\">\n                          <!-- <div class=\"form-check\" *ngIf=\"passCheck && passwordTest !== undefined\"> -->\n                          <div class=\"form-check\" *ngIf=\"passCheck && passwordTest !== ''\">\n                            <span>\n                              Password\n                              <span class=\"text-success\">\n                                <span class=\"spacer\" style=\"padding-left: 5em\"> Matched </span>\n                                <i class=\"fa fa-thumbs-up text-success\" style=\"font-size:24px\"> </i>\n                              </span>\n                            </span>\n                          </div>\n                          <ng-container *ngIf=\"passwordTest !== undefined || passwordTest !== ''\">\n                            <div class=\"form-check\" *ngIf=\"misMatch && passwordTest !== ''\">\n                              <span>\n                                Password\n                                <span class=\"text-danger\">\n                                  <span class=\"spacer\" style=\"padding-left: 5em\">mis-match </span>\n                                  <i class=\"fa fa-thumbs-up fa-rotate-180\" style=\"font-size:24px\"> </i>\n                                </span>\n                              </span>\n                            </div>\n                          </ng-container>\n                        </div>\n                        <div class=\"card-footer text-left card-category\">\n                          <a class=\"btn btn-info btn-link btn-round\" style=\"color:#fafafa;background-color: #333366; cursor:pointer\"\n                            (click)=\"coloursSignIn(emailPasswordLogin)\">Sign up</a>\n                        </div>\n                        <br>\n                      </div>\n                    </ng-container>\n                    <ng-container *ngIf=\"emailVerified == false\">\n                      <div class=\"card-plain card-body\" style=\"color:#333366\">\n                        <p>Congratulations you have successfully signed up,<br>\n                          Waiting for verification <i class=\"fa fa-spinner fa-spin fa-2x fa-fw\"></i> </p>\n                        <br>\n                        <p>Email: {{ emailId }}</p>\n                        <p>Verified: <span class=\"text-danger\"> {{ emailVerified }}</span></p>\n                        <p>Go to your email and confirm to verify</p><br>\n                        <a class=\"btn btn-info btn-link btn-round\" style=\"color:#333366\" (click)=\"dismiss()\">Cancel</a>\n                        <a class=\"btn btn-info btn-link btn-round\" style=\"color:#333366\"\n                          (click)=\"sendVerification()\">Resend verification</a>\n\n                      </div>\n                    </ng-container>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- </div> -->\n  </div>\n</div>\n<!-- <script>\n  window.fbAsyncInit = function () {\n    FB.init({\n    appId: '{235005784119427}',\n      cookie: true,\n      xfbml: true,\n      version: '{api-version}'\n    });\n\n    FB.AppEvents.logPageView();\n\n  };\n\n  (function (d, s, id) {\n    var js, fjs = d.getElementsByTagName(s)[0];\n    if (d.getElementById(id)) {\n      return;\n    }\n    js = d.createElement(s);\n    js.id = id;\n    js.src = \"https://connect.facebook.net/en_US/sdk.js\";\n    fjs.parentNode.insertBefore(js, fjs);\n  }(document, 'script', 'facebook-jssdk'));\n</script> -->"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _services_personal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/personal.service */ "./src/app/services/personal.service.ts");
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_9__);
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







var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(element, router, afAuth, afs, pns, as) {
        this.element = element;
        this.router = router;
        this.afAuth = afAuth;
        this.afs = afs;
        this.pns = pns;
        this.as = as;
        this.actionCodeSettings = {
            // URL you want to redirect back to. The domain (www.example.com) for this
            // URL must be whitelisted in the Firebase Console.
            url: 'http://www.colourssystem.com/',
            // This must be true.
            handleCodeInApp: true,
            // iOS: {
            //     bundleId: 'com.example.ios'
            // },
            // android: {
            //     packageName: 'com.example.android',
            //     installApp: true,
            //     minimumVersion: '12'
            // },
            dynamicLinkDomain: 'http://www.colourssystem.com/'
        };
        this.showless = false;
        this.show1 = false;
        this.showmoreP = false;
        this.showlessP = false;
        this.showmoreE = true;
        this.showlessE = true;
        this.showEmailRegister = true;
        this.showemailLogin = false;
        this.test = new Date();
        this.nullLoginEmail = true;
        this.statusLoginEmail = false;
        this.nullSigninEmail = true;
        this.statusSigninEmail = false;
        this.nullLoginPwd = true;
        this.statusLoginPwd = false;
        this.nullSigninPwd = true;
        this.statusSigninPwd = false;
        this.emailVerifiedinit = false;
        this.emailVerified = true;
        // cuser: coloursUser
        this.passCheck = false;
        this.misMatch = false;
        // pns.dataCall();
        this.dataCall();
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
        this.emailPasswordLogin = { email: '', password: '' };
        // this.emailVerified = true;        
        this.emailId = '';
        this.passwordTest = "";
    }
    RegisterComponent.prototype.testKeyMatch = function () {
        if (this.passwordTest !== "" || this.passwordTest !== undefined || this.passwordTest !== null) {
            if (this.passwordTest === this.emailPasswordLogin.password) {
                this.passCheck = true;
                this.misMatch = false;
            }
            else {
                this.passCheck = false;
                this.misMatch = true;
            }
        }
        return this.passCheck;
    };
    RegisterComponent.prototype.emailRegister = function () {
        this.showEmailRegister = true;
        this.showemailLogin = false;
    };
    RegisterComponent.prototype.emailLogin = function () {
        this.showemailLogin = true;
        this.showEmailRegister = false;
    };
    RegisterComponent.prototype.toggleLogIn = function (credentials) {
        var _this = this;
        if (credentials.email != "") {
            this.nullLoginEmail = true;
            this.statusLoginEmail = false;
            if (credentials.password != "") {
                this.nullLoginPwd = true;
                this.statusLoginPwd = false;
                if (firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser) {
                    // [START signout]
                    firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().signOut();
                    // [END signout]
                }
                else {
                    console.log('email' + credentials.email);
                    // console.log('email' + email);
                    if (credentials.email.length < 4) {
                        alert('Please enter an email address.');
                        return;
                    }
                    if (credentials.password.length < 4) {
                        alert('Please enter a password.');
                        return;
                    }
                    // Sign in with email and pass.
                    // [START authwithemail]
                    firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().signInWithEmailAndPassword(credentials.email, credentials.password).then(function (ref) {
                        console.log("Check User collection for doc");
                        // console.log(ref);
                        _this.coloursUserDetails = ref;
                        var coloursUser = ref.user;
                        var userData = {
                            name: coloursUser.displayName,
                            email: coloursUser.email,
                            id: coloursUser.uid,
                            userImg: coloursUser.photoURL,
                            //phoneNumber: coloursUser.phoneNumber,
                            LastTimeLogin: new Date().toString()
                        };
                        console.log(userData);
                        if (_this.coloursUserDetails.additionalUserInfo.isNewUser) {
                            _this.afs.collection('Users').doc(coloursUser.uid).set(userData).catch(function (error) { return console.error(); });
                            _this.afs.collection('Users').doc(coloursUser.uid).update({ 'bus_email': "" });
                            _this.afs.collection('Users').doc(coloursUser.uid).update({ 'nationalId': "" });
                            _this.afs.collection('Users').doc(coloursUser.uid).update({ 'nationality': "" });
                            _this.afs.collection('Users').doc(coloursUser.uid).update({ 'address': "" });
                            console.log("userData is set");
                        }
                        else {
                            // this.afs.collection('Users').doc(coloursUser.uid).update(userData).catch(error => console.error());
                            console.log("userData is not updated");
                        }
                        var value;
                        var setUser = _this.afs.collection('Users').doc(coloursUser.uid);
                        _this.userCollection = _this.afs.collection('Users').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (b) { return b.map(function (a) {
                            var data = a.payload.doc.data();
                            var id = a.payload.doc.id;
                            return __assign({ id: id }, data);
                        }); }));
                        _this.userCollection.subscribe(function (ref) {
                            var index = ref.findIndex(function (user) { return user.name === userData.name; });
                            if (index > -1) {
                                value = ref[index].name;
                            }
                            else {
                                if (value === userData.name) {
                                    setUser.update(userData);
                                }
                                else {
                                    setUser.set(userData);
                                }
                            }
                        });
                        // this.router.navigateByUrl('dashboard');
                        //return
                        // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
                        // You can use these server side with your app's credentials to access the Twitter API.
                        // var token = result.credential.accessToken;
                        // var secret = result.credential.secret;
                        // The signed-in user info.
                        console.log(ref.credential);
                        var user = ref.user;
                        // ...
                    }).catch(function (error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // [START_EXCLUDE]
                        if (errorCode === 'auth/wrong-password') {
                            alert('Wrong password.');
                        }
                        else {
                            alert(errorMessage);
                        }
                        console.log(error);
                        // document.getElementById('quickstart-sign-in').disabled = false;
                        // [END_EXCLUDE]
                    });
                    // [END authwithemail]
                }
            }
            else {
                this.nullLoginPwd = false;
                this.statusLoginPwd = true;
                console.log('Enter Your Correct Password');
            }
        }
        else {
            this.nullLoginEmail = false;
            this.statusLoginEmail = true;
            console.log('Enter Your Correct email');
        }
        // document.getElementById('quickstart-sign-in').disabled = true;
    };
    RegisterComponent.prototype.sendEmailVerification = function (email) {
        // [START sendemailverification]
        firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().sendSignInLinkToEmail(email, this.actionCodeSettings).then(function () {
            // The link was successfully sent. Inform the user.
            // Save the email locally so you don't need to ask the user for it again
            // if they open the link on the same device.
            window.localStorage.setItem('emailForSignIn', email);
            alert('Email Verification Sent!');
        })
            .catch(function (error) {
            // Some error occurred, you can inspect the code: error.code
        });
    };
    RegisterComponent.prototype.sendPasswordReset = function (email) {
        // var email = document.getElementById('email').value;
        // [START sendpasswordemail]
        firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().sendPasswordResetEmail(email).then(function () {
            // Password Reset Email Sent!
            // [START_EXCLUDE]
            alert('Password Reset Email Sent!');
            // [END_EXCLUDE]
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode == 'auth/invalid-email') {
                alert(errorMessage);
            }
            else if (errorCode == 'auth/user-not-found') {
                alert(errorMessage);
            }
            console.log(error);
            // [END_EXCLUDE]
        });
        // [END sendpasswordemail];
    };
    RegisterComponent.prototype.coloursSignIn = function (credentials) {
        var _this = this;
        if (credentials.email != "") {
            this.nullSigninEmail = true;
            this.statusSigninEmail = false;
            if (credentials.password != "") {
                this.nullSigninPwd = true;
                this.statusSigninPwd = false;
                if (firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser) {
                    // [START signout]
                    firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().signOut();
                    // [END signout]
                }
                else {
                    console.log('email' + credentials.email);
                    // console.log('email' + email);
                    if (credentials.email.length < 4) {
                        alert('Please enter an email address.');
                        return;
                    }
                    if (credentials.password.length < 4) {
                        alert('Please enter a password 8 characters long.');
                        return;
                    }
                    // Sign in with email and pass.
                    // [START authwithemail]
                    // this.sendEmailVerification(credentials.email);
                    firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().createUserWithEmailAndPassword(credentials.email, credentials.password).then(function (ref) {
                        console.log("Check User collection for doc");
                        // userRef.sendEmailVerification();
                        // userRef.user.sendEmailVerification();
                        // console.log(ref);
                        _this.coloursUserDetails = ref;
                        console.log(firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"].EmailAuthProvider);
                        console.log(firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.providerData[0].providerId);
                        var coloursUser = ref.user;
                        _this.emailUser = coloursUser;
                        console.log(coloursUser.emailVerified);
                        coloursUser.sendEmailVerification();
                        if (coloursUser !== null) {
                            // this.emailId = coloursUser.email;
                            if (coloursUser.emailVerified === false) {
                                var emailVerified = false;
                                _this.emailVerified = false;
                                _this.emailVerifiedinit = true;
                            }
                            var userData_1 = {
                                name: coloursUser.displayName,
                                email: coloursUser.email,
                                id: coloursUser.uid,
                                userImg: coloursUser.photoURL,
                                //phoneNumber: coloursUser.phoneNumber,
                                LastTimeLogin: new Date().toString()
                            };
                            console.log(userData_1);
                            if (_this.coloursUserDetails.additionalUserInfo.isNewUser) {
                                _this.afs.collection('Users').doc(coloursUser.uid).set(userData_1).catch(function (error) { return console.error(); });
                                _this.afs.collection('Users').doc(coloursUser.uid).update({ 'bus_email': "" });
                                _this.afs.collection('Users').doc(coloursUser.uid).update({ 'nationalId': "" });
                                _this.afs.collection('Users').doc(coloursUser.uid).update({ 'nationality': "" });
                                _this.afs.collection('Users').doc(coloursUser.uid).update({ 'address': "" });
                                console.log("userData is set");
                            }
                            else {
                                // this.afs.collection('Users').doc(coloursUser.uid).update(userData).catch(error => console.error());
                                console.log("userData is not updated");
                            }
                            var value_1;
                            var setUser_1 = _this.afs.collection('Users').doc(coloursUser.uid);
                            _this.userCollection = _this.afs.collection('Users').snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (b) { return b.map(function (a) {
                                var data = a.payload.doc.data();
                                var id = a.payload.doc.id;
                                return __assign({ id: id }, data);
                            }); }));
                            _this.userCollection.subscribe(function (ref) {
                                var index = ref.findIndex(function (user) { return user.name === userData_1.name; });
                                if (index > -1) {
                                    value_1 = ref[index].name;
                                }
                                else {
                                    if (value_1 === userData_1.name) {
                                        setUser_1.update(userData_1);
                                    }
                                    else {
                                        setUser_1.set(userData_1);
                                    }
                                }
                            });
                            // this.router.navigateByUrl('dashboard');
                        }
                        else {
                        }
                        // console.log(ref.credential);
                        var user = ref.user;
                        // ...
                    }).catch(function (error) {
                        // Handle Errors here.
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        // [START_EXCLUDE]
                        if (errorCode === 'auth/wrong-password') {
                            alert('Wrong password.');
                        }
                        else {
                            alert(errorMessage);
                        }
                        console.log(error);
                        // document.getElementById('quickstart-sign-in').disabled = false;
                        // [END_EXCLUDE]
                    });
                    // [END authwithemail]
                }
            }
            else {
                this.nullSigninPwd = false;
                this.statusSigninPwd = true;
                console.log('Enter Your Correct Password');
            }
        }
        else {
            var email = window.prompt('Please provide your email');
            this.nullSigninEmail = false;
            this.statusSigninEmail = true;
            console.log('Enter Your Correct email');
        }
        // document.getElementById('quickstart-sign-in').disabled = true;
        // if (this.emailUser.emailVerified == true) {
        //     // this.router.navigateByUrl('dashboard');
        // }
    };
    RegisterComponent.prototype.sendVerification = function () {
        this.user.sendEmailVerification().then(function () {
            // Password Reset Email Sent!
            // [START_EXCLUDE]
            alert('Verification sent!, Please check your email before the link expires');
            // [END_EXCLUDE]
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode + ' ' + errorMessage);
            console.log(error);
            // [END_EXCLUDE]
        });
    };
    RegisterComponent.prototype.run1 = function () {
        this.show1 = true;
        this.showless = true;
        this.compShowLess();
        this.projectShowLess();
    };
    RegisterComponent.prototype.showLess = function () {
        this.showless = false;
        this.show1 = false;
    };
    RegisterComponent.prototype.projectShowMore = function () {
        this.showmoreP = true;
        this.showlessP = true;
        this.compShowLess();
        this.showLess();
    };
    RegisterComponent.prototype.projectShowLess = function () {
        this.showlessP = false;
        this.showmoreP = false;
    };
    RegisterComponent.prototype.compShowMore = function () {
        this.showmoreE = true;
        this.showlessE = true;
        this.showLess();
        this.projectShowLess();
    };
    RegisterComponent.prototype.compShowLess = function () {
        this.showlessE = false;
        this.showmoreE = false;
    };
    RegisterComponent.prototype.loginGoogle = function () {
        var _this = this;
        // this.as.googleSign();
        this.afAuth.auth.signInWithPopup(new firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].GoogleAuthProvider()).then(function (ref) {
            console.log("Check User collection for doc");
            console.log(firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.providerData[0].providerId);
            // console.log(ref);
            _this.coloursUserDetails = ref;
            var coloursUser = ref.user;
            var userData = {
                name: coloursUser.displayName,
                email: coloursUser.email,
                id: coloursUser.uid,
                userImg: coloursUser.photoURL,
                address: "",
                nationality: "",
                nationalId: "",
                bus_email: "",
                // phoneNumber: coloursUser.phoneNumber,
                LastTimeLogin: new Date().toString()
            };
            console.log(userData);
            if (_this.coloursUserDetails.additionalUserInfo.isNewUser) {
                _this.afs.collection('Users').doc(coloursUser.uid).set(userData).catch(function (error) { return console.error(); });
                // this.afs.collection('Users').doc(coloursUser.uid).update({ 'bus_email': "" });
                // this.afs.collection('Users').doc(coloursUser.uid).update({ 'nationalId': "" });
                // this.afs.collection('Users').doc(coloursUser.uid).update({ 'nationality': "" });
                // this.afs.collection('Users').doc(coloursUser.uid).update({ 'address': "" });
                // console.log("userData is set");
            }
            else {
                // this.afs.collection('Users').doc(coloursUser.uid).update(userData).catch(error => console.error());
                console.log("userData is not updated");
            }
            // let value;
            // let setUser = this.afs.collection('Users').doc(coloursUser.uid);
            // this.userCollection = this.afs.collection('Users').snapshotChanges().pipe(
            //     map(b => b.map(a => {
            //         const data = a.payload.doc.data() as any;
            //         const id = a.payload.doc.id;
            //         return { id, ...data };
            //     }))
            // );
            // this.userCollection.subscribe(ref => {
            //     const index = ref.findIndex(user => user.name === userData.name);
            //     if (index > -1) {
            //         value = ref[index].name;
            //     } else {
            //         if (value === userData.name) {
            //             setUser.update(userData);
            //         } else {
            //             setUser.set(userData);
            //         }
            //     }
            // })
            // this.router.navigateByUrl('dashboard');
            //return
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    };
    RegisterComponent.prototype.signInWithTwitter = function () {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(new firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"].TwitterAuthProvider()).then(function (ref) {
            console.log("Check User collection for doc");
            console.log(firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.providerData[0].providerId);
            // console.log(ref);
            _this.coloursUserDetails = ref;
            var coloursUser = ref.user;
            var userData = {
                name: coloursUser.displayName,
                email: coloursUser.email,
                id: coloursUser.uid,
                userImg: coloursUser.photoURL,
                //phoneNumber: coloursUser.phoneNumber,
                LastTimeLogin: new Date().toString()
            };
            console.log(userData);
            if (_this.coloursUserDetails.additionalUserInfo.isNewUser) {
                _this.afs.collection('Users').doc(coloursUser.uid).set(userData).catch(function (error) { return console.error(); });
                _this.afs.collection('Users').doc(coloursUser.uid).update({ 'bus_email': "" });
                _this.afs.collection('Users').doc(coloursUser.uid).update({ 'nationalId': "" });
                _this.afs.collection('Users').doc(coloursUser.uid).update({ 'nationality': "" });
                _this.afs.collection('Users').doc(coloursUser.uid).update({ 'address': "" });
                console.log("userData is set");
            }
            else {
                // this.afs.collection('Users').doc(coloursUser.uid).update(userData).catch(error => console.error());
                console.log("userData is not updated");
            }
            // let value;
            // let setUser = this.afs.collection('Users').doc(coloursUser.uid);
            // this.userCollection = this.afs.collection('Users').snapshotChanges().pipe(
            //     map(b => b.map(a => {
            //         const data = a.payload.doc.data() as any;
            //         const id = a.payload.doc.id;
            //         return { id, ...data };
            //     }))
            // );
            // this.userCollection.subscribe(ref => {
            //     const index = ref.findIndex(user => user.name === userData.name);
            //     if (index > -1) {
            //         value = ref[index].name;
            //     } else {
            //         if (value === userData.name) {
            //             setUser.update(userData);
            //         } else {
            //             setUser.set(userData);
            //         }
            //     }
            // })
            // this.router.navigateByUrl('dashboard');
            //return
            // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
            // You can use these server side with your app's credentials to access the Twitter API.
            // var token = result.credential.accessToken;
            // var secret = result.credential.secret;
            // The signed-in user info.
            console.log(ref.credential);
            var user = ref.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    };
    RegisterComponent.prototype.signInWithFacebook = function () {
        var _this = this;
        var provider = new firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"].FacebookAuthProvider();
        firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().signInWithPopup(provider)
            .then(function (ref) {
            console.log("Check User collection for doc");
            console.log(firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.providerData[0].providerId);
            console.log(ref);
            _this.coloursUserDetails = ref;
            var coloursUser = ref.user;
            var userData = {
                name: coloursUser.displayName,
                email: coloursUser.email,
                id: coloursUser.uid,
                userImg: coloursUser.photoURL,
                //phoneNumber: coloursUser.phoneNumber,
                LastTimeLogin: new Date().toString()
            };
            console.log(userData);
            if (_this.coloursUserDetails.additionalUserInfo.isNewUser) {
                _this.afs.collection('Users').doc(coloursUser.uid).set(userData).catch(function (error) { return console.error(); });
                _this.afs.collection('Users').doc(coloursUser.uid).update({ 'bus_email': "" });
                _this.afs.collection('Users').doc(coloursUser.uid).update({ 'nationalId': "" });
                _this.afs.collection('Users').doc(coloursUser.uid).update({ 'nationality': "" });
                _this.afs.collection('Users').doc(coloursUser.uid).update({ 'address': "" });
                console.log("userData is set");
            }
            else {
                // this.afs.collection('Users').doc(coloursUser.uid).update(userData).catch(error => console.error());
                console.log("userData is not updated");
            }
            // let value;
            // let setUser = this.afs.collection('Users').doc(coloursUser.uid);
            // this.userCollection = this.afs.collection('Users').snapshotChanges().pipe(
            //     map(b => b.map(a => {
            //         const data = a.payload.doc.data() as any;
            //         const id = a.payload.doc.id;
            //         return { id, ...data };
            //     }))
            // );
            // this.userCollection.subscribe(ref => {
            //     const index = ref.findIndex(user => user.name === userData.name);
            //     if (index > -1) {
            //         value = ref[index].name;
            //     } else {
            //         if (value === userData.name) {
            //             setUser.update(userData);
            //         } else {
            //             setUser.set(userData);
            //         }
            //     }
            // })
            // this.router.navigateByUrl('dashboard');
            //return
            // This gives you a the Twitter OAuth 1.0 Access Token and Secret.
            // You can use these server side with your app's credentials to access the Twitter API.
            // var token = result.credential.accessToken;
            // var secret = result.credential.secret;
            // The signed-in user info.
            console.log(ref.credential);
            var user = ref.user;
            // ...
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });
    };
    RegisterComponent.prototype.logout = function () {
        this.afAuth.auth.signOut();
    };
    RegisterComponent.prototype.dismiss = function () {
        this.afAuth.auth.signOut();
        this.emailVerifiedinit = false;
        this.emailVerified = true;
    };
    RegisterComponent.prototype.dataCall = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (user) {
            console.log(user);
            if (user === null) {
                // this.router.navigate(['/pages/login']);
            }
            else {
                if (user !== null) {
                    _this.user = user;
                    _this.userId = user.uid;
                    if (firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.providerData[0].providerId === 'password') {
                        if (firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.emailVerified === true) {
                            _this.router.navigate(['/dashboard']);
                        }
                        else {
                            _this.emailId = firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.email;
                            _this.emailVerifiedinit = true;
                            _this.emailVerified = false;
                        }
                    }
                    if (firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.providerData[0].providerId === 'google.com') {
                        _this.router.navigate(['/dashboard']);
                    }
                    if (firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.providerData[0].providerId === 'facebook.com') {
                        _this.router.navigate(['/dashboard']);
                    }
                    if (firebase_app__WEBPACK_IMPORTED_MODULE_9__["auth"]().currentUser.providerData[0].providerId === 'twitter.com') {
                        _this.router.navigate(['/dashboard']);
                    }
                }
                // this.router.navigate(['/dashboard']);
            }
        });
    };
    RegisterComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    RegisterComponent.prototype.dhms = function (t) {
        this.mytime = ((new Date().getTime()) / 1000);
        this.mytime = new Date().getTime();
        this.future = new Date();
        var days, hours, minutes, seconds;
        days = Math.floor(t / 86400);
        t -= days * 86400;
        hours = Math.floor(t / 3600) % 24;
        t -= hours * 3600;
        minutes = Math.floor(t / 60) % 60;
        t -= minutes * 60;
        seconds = t % 60;
        this.timedstamp += 1;
        // console.log(this.timedstamp);
        this.testKeyMatch();
        // console.log(this.nHrs, ':', this.nMin);
        return [
            //days + 'd',
            hours + 'h',
            minutes + 'm',
            seconds + 's'
        ].join(' ');
    };
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.future = new Date();
        this.counter$ = rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"].interval(1000).map(function (x) {
            //return Math.floor((this.future.getTime() - new Date().getTime()) / 1000);
            return Math.floor((_this.timedstamp - new Date().getTime()) / 1000);
            //return Math.floor(( new Date().getTime()));
        });
        this.subscription = this.counter$.subscribe(function (x) { return _this.message = _this.dhms(x); });
        this.checkFullPageBackgroundImage();
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('register-page');
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700);
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('register-page');
    };
    RegisterComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'register-cmp',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html")
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], _services_personal_service__WEBPACK_IMPORTED_MODULE_6__["PersonalService"], app_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/pages/welcome/welcome.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/welcome/welcome.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .BcImage {\r\n    background-image: url(\"../../../assets/img/bg/Page 3.jpg\");\r\n    background-color: #cccccc;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuQmNJbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1nL2JnL1BhZ2UgMy5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xyXG59ICovIl19 */"

/***/ }),

/***/ "./src/app/pages/welcome/welcome.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/welcome/welcome.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"full-page register-page section-image\" data-image=\"./assets/img/bg/Page1.png\">\n  <div class=\"wrapper wrapper-full-page\">\n    <div class=\"content\" style=\"padding-top: 0px;\">\n      <div class=\"container align-middle\" style=\" margin-top: 20px\">\n        <div class=\"spacer\" style=\"height: 6em\"></div>\n        <div class=\"row\">\n          <div class=\"col-md-4 ml-auto mr-auto\">\n            <!-- <div class=\"logo\" style=\"width: 62px; height: auto; padding: top 0em; padding-bottom:1.5em\"> -->\n            <div class=\"logo center\">\n              <div class=\"logo-imgn\">\n                <img src=\"./assets/img/faces/colours_icon2.png\" />\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- <br> -->\n        <div class=\"row\">\n          <!-- <div class=\"col-md-8 col-md-offset-1\">\n            </div> -->\n          <div class=\"col-md-4 ml-auto mr-auto card\" style=\"background-color: transparent;\">\n            <!-- <form method=\"#\" action=\"#\"> -->\n              <div class=\"card card-plain\">\n                <div class=\"content\">\n                  <style>\n                    .clrs-logo {\n                      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n                      /* font-family: AR ESSENCE; */\n                      /* color: steelblue; */\n                      font-size: 30px;\n                      backface-visibility: visible\n                    }\n\n                    .na-am {\n                      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n                      font-size: 20px;\n\n                    }\n\n                    .tmColor {\n                      color: #333366;\n                    }\n                  </style>\n                  <div class=\"card-content\">\n                    <h4 class=\" na-am\" style=\"margin-top:5px ; margin-bottom :10px; color:#333366\">\n                      <font size=2><b>Colours tell a story</b></font>\n                    </h4>\n                    <div class=\"spacer\" style=\"height: 1em\"></div>\n                    <p style=\"margin-top:10px ; margin-bottom :10px; color:#333366\">\n                        <font size=2><b>Colours tells the story of whats happening on the ground on your project right now</b></font><br>\n                    </p>\n                    <p style=\"margin-top:10px ; margin-bottom :10px; color:#333366\">\n                      <font size=2><b>Colours tells the story of whats happening across your enterprise right now</b></font><br>\n                    </p>\n                    <p style=\"margin-top:10px ; margin-bottom :10px; color:#333366\">\n                      <font size=2><b>Also tells the story of your true productivity colours</b></font><br>\n                    </p>\n\n                    <div *ngIf=\"showemailLogin\">\n                      <a class=\"btn btn-info btn-link btn-round\" style=\"color:#fafafa;background-color: #333366;\" routerLink=\"/pages/register\">create account</a>\n                    </div>\n                    <h4 style=\"margin-top:10px ; margin-bottom :10px; color:#333366\">\n                        <font size=2>Have an account already?<a style=\"text-emphasis-color: #333366\" routerLink=\"/pages/login\"> Log-in</a></font>\n                      <br>\n                    </h4>\n                  </div>\n                </div>\n              </div>\n            <!-- </form> -->\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- </div> -->\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/welcome/welcome.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/welcome/welcome.component.ts ***!
  \****************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
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

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
        this.showemailLogin = true;
    }
    WelcomeComponent.prototype.checkFullPageBackgroundImage = function () {
        var $page = $('.full-page');
        var image_src = $page.data('image');
        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>';
            $page.append(image_container);
        }
    };
    ;
    WelcomeComponent.prototype.ngOnInit = function () {
        this.checkFullPageBackgroundImage();
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/pages/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/pages/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map