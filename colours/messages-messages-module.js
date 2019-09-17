(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["messages-messages-module"],{

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"row\">\n    <div class=\"card col-md-8\">\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <p class=\"na-p\"> messages works! </p>\n        </div>\n        <div class=\"col-md-4\">\n          <!-- <button class=\"btn-link\" (click)=\"newMsg()\">New Message</button> -->\n            <a style=\"cursor: pointer\" (click)=\"newMsg()\"> New messege</a>\n\n        </div>\n        \n      </div>\n      <div class=\"row\">\n\n        <!-- <div class=\"col-md-12\">\n          <ng-container *ngIf=\"chat$ | async as chat\">\n\n            <div class=\"top\">\n              <p>\n                  https://firestore-megachat.firebaseapp.com/chats/{{ chat.id }}\n              </p>\n            </div>\n\n\n            <div class=\"chat\">\n\n\n              <div class=\"msg\" *ngFor=\"let msg of chat.messages; trackBy: trackByCreated\">\n\n                <div class=\"user\">\n                  <img [src]=\"msg.user?.photoURL\">\n                  <div>{{ msg.user?.displayName }}</div>\n                </div>\n\n                <p>{{ msg.content }}</p>\n\n              </div>\n\n            </div>\n\n            <div class=\"form\">\n              <input [(ngModel)]=\"newMsg\" (keydown.enter)=\"submit(chat.id)\">\n\n              <button (click)=\"submit(chat.id)\">Send</button>\n            </div>\n\n          </ng-container>\n        </div> -->\n        <div class=\"col-md-3\">\n          <span *ngFor=\"let man of colGroup\">\n            <a style=\"cursor: pointer\" (click)=\"viewChat(man)\">{{ man.name }}</a><br>\n          </span>\n        </div>\n        <div *ngIf=\"createMsg\"  class=\"col-md-9 ml-auto mr-auto\">\n          New messege\n        </div>\n        <div *ngIf=\"readMsg\"  class=\"col-md-9 ml-auto mr-auto\">\n          <div class=\"card\"> \n            {{ colMan.name }}\n            <div class=\"col-md-11\">\n              <!-- <span class=\"card\" *ngFor=\"let msg of myChat\"> -->\n              <span class=\"card\" *ngFor=\"let msg of myChats | async\">\n                <a style=\"cursor: pointer\" (click)=\"viewChat(man)\">{{ msg.content }}</a><br>\n              </span>\n            </div>\n            <!-- <p ng-class=\"chat.userId == userId ? 'text-info' : (chat.userId != userId ? 'text-success')\">Read msg Read msg Read msg Read msg Read msg Read msg Read msg Read msg</p> -->\n            <div class=\"col-md-11 card-footer\" style=\"padding-right: 0px; padding-left: 25px;\">\n              <code>new messege</code>\n              <div class=\"form-group\">\n                <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\n                  <input type=\"text\" class=\"form-control panel-boader\" [(ngModel)]=\"msgText\" style=\" padding-left: 10px; padding-right: 10px; height:2em\"\n                    placeholder=\"new messege\" /><!-- clrs-cell  -->\n                  <div class=\"input-group-postpend\">\n                    <span class=\"input-group-text\" style=\" padding-left: 10px; padding-right: 10px; height:28px\">\n                      <small>\n                        <button class=\"text-info btn-link \" (click)=\"submitMsg(msgText)\" title=\"Send messege\" style=\"padding-top: 0px; padding-bottom: 0px; cursor: pointer;\">\n                           <i class=\"nc-icon nc-send\"></i>\n                        </button>\n                      </small>\n                    </span>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div *ngIf=\"readRequests\" class=\"card col-md-4\">\n      <p>\n        Projects and Company Requests !\n      </p>\n      <!-- <div class=\"footer\">\n          <button class=\"btn-link\" (click)=\"viewRequest()\">Back</button>\n      </div> -->\n    </div>\n    <!-- <div *ngIf=\"createMsg\" class=\"card col-md-4\">\n      <p>\n        New Message !\n      </p>\n      <div class=\"footer\">\n          <button class=\"btn-link\" (click)=\"return()\">Back</button>\n      </div>\n    </div> -->\n    <!-- <div *ngIf=\"readMsg\" class=\"card col-md-6\">\n      <p>\n        Projects and Company Requests !\n      </p>\n      <div class=\"footer\">\n          <button class=\"btn-link\" (click)=\"viewRequest()\">Back</button>\n      </div>\n    </div> -->\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var app_services_personal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/personal.service */ "./src/app/services/personal.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var MessagesComponent = /** @class */ (function () {
    // user$: any;
    function MessagesComponent(afAuth, auth, afs, ps, router) {
        this.afAuth = afAuth;
        this.auth = auth;
        this.afs = afs;
        this.ps = ps;
        this.router = router;
        this.readRequests = true;
        this.readMsg = false;
        this.myChat = [];
        // this.user = auth.getUser()
    }
    MessagesComponent.prototype.viewChat = function (man) {
        // this.readRequests = false;
        // man.
        this.colMan = man;
        this.readMsg = true;
        this.createMsg = false;
    };
    MessagesComponent.prototype.viewRequest = function () {
        this.readRequests = true;
        this.readMsg = false;
    };
    MessagesComponent.prototype.newMsg = function () {
        // this.readRequests = false;
        this.readMsg = false;
        this.createMsg = true;
    };
    MessagesComponent.prototype.return = function () {
        this.createMsg = false;
        this.readRequests = true;
        this.readMsg = false;
    };
    MessagesComponent.prototype.submitMsg = function (msg) {
        new msg.content;
        this.myChat.push(msg);
    };
    MessagesComponent.prototype.startChat = function (friendId) {
        var uid = this.auth.userId;
        var chatId = uid + friendId;
        var ref = this.afs.collection('Users').doc(uid).collection('chats').doc(chatId);
    };
    MessagesComponent.prototype.sendMessage = function (chatId, content) {
        return __awaiter(this, void 0, void 0, function () {
            var uid, data, ref;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.auth.userId];
                    case 1:
                        uid = _a.sent();
                        data = {
                            uid: uid,
                            content: content,
                            createdAt: Date.now()
                        };
                        if (uid) {
                            ref = this.afs.collection('Users').doc(uid).collection('chats').doc(chatId);
                            return [2 /*return*/, ref.update({
                                    messages: firebase__WEBPACK_IMPORTED_MODULE_4__["firestore"].FieldValue.arrayUnion(data)
                                })];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    MessagesComponent.prototype.dataCall = function () {
        this.myContacts = this.ps.getContacts(this.userId);
        this.myChats = this.ps.getChats(this.userId);
    };
    MessagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.afAuth.user.subscribe(function (user) {
            console.log(user);
            _this.userId = user.uid;
            _this.user = user;
            console.log(_this.userId);
            console.log(_this.user);
            _this.dataCall();
        });
        this.colGroup = [
            { id: '1', name: 'Shallwin' },
            { id: '2', name: 'Terence' },
            { id: '3', name: 'Munya' },
            { id: '4', name: 'Themba' },
        ];
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_6__["AngularFireAuth"], app_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"], app_services_personal_service__WEBPACK_IMPORTED_MODULE_5__["PersonalService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.module.ts":
/*!*********************************************!*\
  !*** ./src/app/messages/messages.module.ts ***!
  \*********************************************/
/*! exports provided: MessagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesModule", function() { return MessagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _messages_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./messages.routing */ "./src/app/messages/messages.routing.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm5/ng-select.js");
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _messages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./messages.component */ "./src/app/messages/messages.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MessagesModule = /** @class */ (function () {
    function MessagesModule() {
    }
    MessagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_messages_routing__WEBPACK_IMPORTED_MODULE_4__["WorkRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_5__["NgSelectModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputModule"]
            ],
            declarations: [_messages_component__WEBPACK_IMPORTED_MODULE_7__["MessagesComponent"]]
        })
    ], MessagesModule);
    return MessagesModule;
}());



/***/ }),

/***/ "./src/app/messages/messages.routing.ts":
/*!**********************************************!*\
  !*** ./src/app/messages/messages.routing.ts ***!
  \**********************************************/
/*! exports provided: WorkRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkRoutes", function() { return WorkRoutes; });
/* harmony import */ var _messages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages.component */ "./src/app/messages/messages.component.ts");

var WorkRoutes = [{
        path: '',
        children: [{
                path: 'messages',
                component: _messages_component__WEBPACK_IMPORTED_MODULE_0__["MessagesComponent"]
            }]
    }];


/***/ })

}]);
//# sourceMappingURL=messages-messages-module.js.map