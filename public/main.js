(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bogum\OneDrive\Desktop\programy\angular\training\shop\shop-v8\src\main.ts */"zUnb");


/***/ }),

/***/ "07UD":
/*!*****************************************************************!*\
  !*** ./src/app/component/widget/info-nav/info-nav.component.ts ***!
  \*****************************************************************/
/*! exports provided: InfoNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoNavComponent", function() { return InfoNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class InfoNavComponent {
    constructor() { }
    ngOnInit() {
    }
}
InfoNavComponent.ɵfac = function InfoNavComponent_Factory(t) { return new (t || InfoNavComponent)(); };
InfoNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InfoNavComponent, selectors: [["app-info-nav"]], decls: 14, vars: 0, consts: [[1, "navbar", "navbar-expand-sm"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "/informacje_o_firmie", 1, "nav-link"], ["routerLink", "/przesylki_zagraniczne", 1, "nav-link"], ["routerLink", "/kontakt", 1, "nav-link"], ["routerLink", "/regulamin", 1, "nav-link"]], template: function InfoNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Informacje o firmie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Przesy\u0142ki zagraniczne");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Kontakt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Regulamin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvLW5hdi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InfoNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info-nav',
                templateUrl: './info-nav.component.html',
                styleUrls: ['./info-nav.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "1N6X":
/*!*********************************************************************************!*\
  !*** ./src/app/component/view/konto-uzytkownika/konto-uzytkownika.component.ts ***!
  \*********************************************************************************/
/*! exports provided: KontoUzytkownikaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KontoUzytkownikaComponent", function() { return KontoUzytkownikaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/user.service */ "Ouoq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class KontoUzytkownikaComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.name = yield this.userService.getUserName();
            console.log(this.name);
        });
    }
    logOut() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.userService.logout();
            this.router.navigate(["/login"]);
        });
    }
}
KontoUzytkownikaComponent.ɵfac = function KontoUzytkownikaComponent_Factory(t) { return new (t || KontoUzytkownikaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
KontoUzytkownikaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: KontoUzytkownikaComponent, selectors: [["app-konto-uzytkownika"]], decls: 4, vars: 1, consts: [[1, "btn", "btn-danger", 3, "click"]], template: function KontoUzytkownikaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KontoUzytkownikaComponent_Template_button_click_2_listener() { return ctx.logOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Log out");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Jeste\u015B zalogowany ", ctx.name, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrb250by11enl0a293bmlrYS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KontoUzytkownikaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-konto-uzytkownika',
                templateUrl: './konto-uzytkownika.component.html',
                styleUrls: ['./konto-uzytkownika.component.scss']
            }]
    }], function () { return [{ type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "1YpU":
/*!***************************************************************************!*\
  !*** ./src/app/component/view/page-not-found/page-not-found.component.ts ***!
  \***************************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 2, vars: 0, template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "page-not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "2HNa":
/*!*************************************************************************************!*\
  !*** ./src/app/component/view/informacje-o-firmie/informacje-o-firmie.component.ts ***!
  \*************************************************************************************/
/*! exports provided: InformacjeOFirmieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacjeOFirmieComponent", function() { return InformacjeOFirmieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class InformacjeOFirmieComponent {
    constructor() { }
    ngOnInit() {
    }
}
InformacjeOFirmieComponent.ɵfac = function InformacjeOFirmieComponent_Factory(t) { return new (t || InformacjeOFirmieComponent)(); };
InformacjeOFirmieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InformacjeOFirmieComponent, selectors: [["app-informacje-o-firmie"]], decls: 2, vars: 0, template: function InformacjeOFirmieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "informacje-o-firmie works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmZvcm1hY2plLW8tZmlybWllLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InformacjeOFirmieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-informacje-o-firmie',
                templateUrl: './informacje-o-firmie.component.html',
                styleUrls: ['./informacje-o-firmie.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AxgZ":
/*!*****************************************************************!*\
  !*** ./src/app/component/view/regulamin/regulamin.component.ts ***!
  \*****************************************************************/
/*! exports provided: RegulaminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegulaminComponent", function() { return RegulaminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RegulaminComponent {
    constructor() { }
    ngOnInit() {
    }
}
RegulaminComponent.ɵfac = function RegulaminComponent_Factory(t) { return new (t || RegulaminComponent)(); };
RegulaminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegulaminComponent, selectors: [["app-regulamin"]], decls: 2, vars: 0, template: function RegulaminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "regulamin works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWd1bGFtaW4uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegulaminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-regulamin',
                templateUrl: './regulamin.component.html',
                styleUrls: ['./regulamin.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    endpoint: "/api",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DNdf":
/*!*************************************************************************!*\
  !*** ./src/app/component/widget/google-login/google-login.component.ts ***!
  \*************************************************************************/
/*! exports provided: GoogleLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleLoginComponent", function() { return GoogleLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/user.service */ "Ouoq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





//declare var gapi: any;
class GoogleLoginComponent {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        });
    }
    authenticate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.userService.login("google");
                this.router.navigate(["/konto_uzytkownika"]);
            }
            catch (error) { }
        });
    }
}
GoogleLoginComponent.ɵfac = function GoogleLoginComponent_Factory(t) { return new (t || GoogleLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
GoogleLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GoogleLoginComponent, selectors: [["app-google-login"]], decls: 2, vars: 0, consts: [[1, "btn", "btn-danger", "w-100", 3, "click"]], template: function GoogleLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function GoogleLoginComponent_Template_button_click_0_listener() { return ctx.authenticate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Via Google");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnb29nbGUtbG9naW4uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-google-login',
                templateUrl: './google-login.component.html',
                styleUrls: ['./google-login.component.scss']
            }]
    }], function () { return [{ type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "Mg0x":
/*!*********************************************!*\
  !*** ./src/app/service/our-user.service.ts ***!
  \*********************************************/
/*! exports provided: OurUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurUserService", function() { return OurUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");








class OurUserService {
    constructor(http) {
        this.http = http;
    }
    getName() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return "Alfred";
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            sessionStorage.removeItem("access_token");
        });
    }
    login(user) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (sessionStorage.getItem("access_token") !== null)
                    return;
                return this.loginRequest(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((report) => {
                    if (report.success) {
                        sessionStorage.setItem("access_token", report.message);
                    }
                    else {
                        throw new Error(report.message);
                    }
                }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).toPromise();
            }
            catch (error) {
                throw error;
            }
        });
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            //client side error like lost connection
            console.error('Error: ', error.error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('<strong>Problem z połączeniem.</strong> Sprawdź swoje połączenie z internetem, lub sprubój ponownie później.');
        }
        else {
            //backend returned error
            console.error(`Backend returned code ${error.status}\n body was: ${error.error}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('<strong>Wystąpił problem.</strong> Spróbuj ponownie później');
        }
    }
    //access token in message
    loginRequest(user) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].endpoint + "/user/login";
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(url, user, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
}
OurUserService.ɵfac = function OurUserService_Factory(t) { return new (t || OurUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
OurUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: OurUserService, factory: OurUserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](OurUserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Ouoq":
/*!*****************************************!*\
  !*** ./src/app/service/user.service.ts ***!
  \*****************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _google_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./google-user.service */ "SAzt");
/* harmony import */ var _our_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./our-user.service */ "Mg0x");










class UserService {
    constructor(http, gu, our) {
        this.http = http;
        this.gu = gu;
        this.our = our;
        this.loggedMsg = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](this.loggedStatus);
    }
    get loggedStatus() {
        let logged = sessionStorage.getItem("logged");
        console.log("logged status: " + logged);
        return logged === null ? "" : logged;
    }
    set loggedStatus(status) {
        sessionStorage.setItem("logged", status);
        this.loggedMsg.next(status);
        console.log("change status for: " + status);
    }
    isLogged() {
        return this.loggedStatus.length > 0;
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            //client side error like lost connection
            console.error('Error: ', error.error.message);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('<strong>Problem z połączeniem.</strong> Sprawdź swoje połączenie z internetem, lub sprubój ponownie później.');
        }
        else {
            //backend returned error
            console.error(`Backend returned code ${error.status}\n body was: ${error.error}`);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])('<strong>Wystąpił problem.</strong> Spróbuj ponownie później');
        }
    }
    register(user) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].endpoint + "/user/register";
        const httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post(url, user, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    loginParser(ua, data = undefined) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                switch (ua) {
                    case "google":
                        yield this.gu.login();
                        this.userAccount = this.gu;
                        break;
                    case "our":
                        yield this.our.login(data);
                        this.userAccount = this.our;
                        break;
                    default:
                        throw new Error("wrong login argument: " + ua);
                }
            }
            catch (error) {
                throw error;
            }
        });
    }
    //perform initialization, throw error if not authorized
    authentification() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.isLogged())
                throw new Error("User is not logged");
            if (this.userAccount == undefined) {
                console.log("relog");
                yield this.relogin(this.loggedStatus);
            }
        });
    }
    //kinda aliases loginParser
    relogin(ua) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.loginParser(ua);
            }
            catch (error) {
                console.error(error);
                throw error;
            }
        });
    }
    login(ua, data = undefined) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.loginParser(ua, data);
                this.loggedStatus = ua;
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    logout() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.authentification();
                yield ((_a = this.userAccount) === null || _a === void 0 ? void 0 : _a.logout());
                this.userAccount = undefined;
                this.loggedStatus = "";
                console.log("log out");
            }
            catch (error) {
                throw error;
            }
        });
    }
    getUserName() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                yield this.authentification();
                return (_a = this.userAccount) === null || _a === void 0 ? void 0 : _a.getName();
            }
            catch (error) {
                throw error;
            }
        });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_google_user_service__WEBPACK_IMPORTED_MODULE_6__["GoogleUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_our_user_service__WEBPACK_IMPORTED_MODULE_7__["OurUserService"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _google_user_service__WEBPACK_IMPORTED_MODULE_6__["GoogleUserService"] }, { type: _our_user_service__WEBPACK_IMPORTED_MODULE_7__["OurUserService"] }]; }, null); })();


/***/ }),

/***/ "QVbe":
/*!*************************************************************!*\
  !*** ./src/app/component/widget/signer/signer.component.ts ***!
  \*************************************************************/
/*! exports provided: SignerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignerComponent", function() { return SignerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class SignerComponent {
    constructor() { }
    ngOnInit() {
    }
}
SignerComponent.ɵfac = function SignerComponent_Factory(t) { return new (t || SignerComponent)(); };
SignerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignerComponent, selectors: [["app-signer"]], decls: 3, vars: 0, consts: [[1, "bg-dark", "rounded-circle", "text-center", "l-icon"], ["routerLink", "/login", 1, "text-white"], [1, "fas", "fa-user"]], template: function SignerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".l-icon[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 50px;\n  font-size: 25px;\n  padding-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2lnbmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0ksWUFKYTtFQUtiLFdBTGE7RUFNYixlQVBVO0VBUVYsZ0JBTkM7QUFFTCIsImZpbGUiOiJzaWduZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL3JlZ3VsYXRlIGJ5IGF5ZVxyXG4kYXdhdGFyLXNpemU6IDI1cHg7XHJcbiRjb250YWluZXItc2l6ZTogNTBweDtcclxuJHB0OiA1cHg7XHJcblxyXG4ubC1pY29uIHtcclxuICAgIGhlaWdodDogJGNvbnRhaW5lci1zaXplO1xyXG4gICAgd2lkdGg6ICRjb250YWluZXItc2l6ZTtcclxuICAgIGZvbnQtc2l6ZTogJGF3YXRhci1zaXplO1xyXG4gICAgcGFkZGluZy10b3A6ICRwdDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signer',
                templateUrl: './signer.component.html',
                styleUrls: ['./signer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "S9zC":
/*!*****************************************************************************************!*\
  !*** ./src/app/component/view/przesylki-zagraniczne/przesylki-zagraniczne.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: PrzesylkiZagraniczneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrzesylkiZagraniczneComponent", function() { return PrzesylkiZagraniczneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PrzesylkiZagraniczneComponent {
    constructor() { }
    ngOnInit() {
    }
}
PrzesylkiZagraniczneComponent.ɵfac = function PrzesylkiZagraniczneComponent_Factory(t) { return new (t || PrzesylkiZagraniczneComponent)(); };
PrzesylkiZagraniczneComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PrzesylkiZagraniczneComponent, selectors: [["app-przesylki-zagraniczne"]], decls: 2, vars: 0, template: function PrzesylkiZagraniczneComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "przesylki-zagraniczne works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcnplc3lsa2ktemFncmFuaWN6bmUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrzesylkiZagraniczneComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-przesylki-zagraniczne',
                templateUrl: './przesylki-zagraniczne.component.html',
                styleUrls: ['./przesylki-zagraniczne.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "SAzt":
/*!************************************************!*\
  !*** ./src/app/service/google-user.service.ts ***!
  \************************************************/
/*! exports provided: GoogleUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleUserService", function() { return GoogleUserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var secret_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! secret/data */ "ntTL");




class GoogleUserService {
    constructor() {
        this.gapiSetup = false; //marks if gapi library has been loaded
        this.error = "";
    }
    getName() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.gapiSetup) {
                yield this.initGoogleAuth();
            }
            return this.user.getBasicProfile().getName();
        });
    }
    logout() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.gapiSetup) {
                yield this.initGoogleAuth();
            }
            this.authInstance.signOut();
            this.authInstance.disconnect();
        });
    }
    //if user is not logged - log in
    login() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.gapiSetup) {
                yield this.initGoogleAuth();
            }
            //check if user is signed in (no double login on restarts)
            //for relogin
            if (this.authInstance.isSignedIn.get()) {
                this.user = this.authInstance.currentUser.get();
                return;
            }
            return this.authInstance.signIn().then((user) => {
                this.user = user;
            }, 
            //wywołany m. in. gdy wyskakujące okienko zostanie zamknięte przez użytkownika
            (error) => {
                this.error = error;
                throw error;
            });
        });
    }
    initGoogleAuth() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("init google auth");
            return new Promise((resolve) => {
                gapi.load('auth2', resolve);
            }).then(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                yield gapi.auth2.init({
                    client_id: secret_data__WEBPACK_IMPORTED_MODULE_2__["CLIENT_ID"],
                }).then((auth) => {
                    this.gapiSetup = true;
                    this.authInstance = auth;
                });
            }));
        });
    }
}
GoogleUserService.ɵfac = function GoogleUserService_Factory(t) { return new (t || GoogleUserService)(); };
GoogleUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GoogleUserService, factory: GoogleUserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoogleUserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "SgNr":
/*!*******************************************!*\
  !*** ./src/app/service/error-handlers.ts ***!
  \*******************************************/
/*! exports provided: httpErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpErrorHandler", function() { return httpErrorHandler; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");

function httpErrorHandler(error) {
    if (error.error instanceof ErrorEvent) {
        //client side error like lost connection
        console.error('Error: ', error.error.message);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])('<strong>Problem z połączeniem.</strong> Sprawdź swoje połączenie z internetem, lub sprubój ponownie później.');
    }
    else {
        //backend returned error
        console.error(`Backend returned code ${error.status}\n body was: ${error.error}`);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])('<strong>Wystąpił problem.</strong> Spróbuj ponownie później');
    }
}


/***/ }),

/***/ "Sqrs":
/*!*********************************************************!*\
  !*** ./src/app/component/view/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_service_message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/message */ "Uxiq");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/user.service */ "Ouoq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _widget_google_login_google_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../widget/google-login/google-login.component */ "DNdf");










function LoginComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 7);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.message.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.message.content, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
class LoginComponent {
    constructor(fb, userService, router) {
        this.fb = fb;
        this.userService = userService;
        this.router = router;
        this.form = this.fb.group({
            login: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.message = new src_app_service_message__WEBPACK_IMPORTED_MODULE_3__["Message"]();
    }
    get login() {
        return this.form.get("login");
    }
    get password() {
        return this.form.get("password");
    }
    ngOnInit() {
    }
    submitLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (this.password === null || this.login === null) {
                    console.error("No field");
                    return;
                }
                let password = this.password.value;
                let login = this.login.value;
                yield this.userService.login("our", { login: login, password: password });
                this.router.navigate(["/konto_uzytkownika"]);
            }
            catch (error) {
                let errorMessage = error;
                if (error.message == "wrong login") {
                    errorMessage = "<strong>Ups! pomyliłeś login</strong> Spróbuj wpisać go ponownie";
                }
                if (error.message == "wrong password") {
                    errorMessage = "<strong>Ups! źle wpisałeś hasło</strong> Spróbuj wpisać nio ponownie albo skorzystaj z opcji zapomniałem hasła";
                }
                if (error.message == "internal error") {
                    errorMessage = "<strong>Ups! Coś poszło nie tak.</strong> Sprubuj ponownie później.";
                }
                this.message.show(errorMessage, "danger");
            }
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 10, vars: 2, consts: [[1, "container", "g-form", 3, "formGroup"], ["type", "text", "placeholder", "Login", "formControlName", "login", "required", "", 1, "form-control", "mb-1"], ["type", "password", "placeholder", "Has\u0142o", "formControlName", "password", "required", "", 1, "form-control", "mb-2"], [3, "innerHTML", "class", 4, "ngIf"], [1, "btn", "btn-success", "w-100", "mb-2", 3, "click"], [1, "w-100", "mb-2"], ["routerLink", "/register", 1, "btn", "btn-primary", "w-100"], [3, "innerHTML"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, LoginComponent_div_3_Template, 1, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_4_listener() { return ctx.submitLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "app-google-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message.visible);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _widget_google_login_google_login_component__WEBPACK_IMPORTED_MODULE_7__["GoogleLoginComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _component_widget_info_nav_info_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/widget/info-nav/info-nav.component */ "07UD");
/* harmony import */ var _component_widget_product_nav_product_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/widget/product-nav/product-nav.component */ "wwtG");
/* harmony import */ var _component_widget_sticker_nav_sticker_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/widget/sticker-nav/sticker-nav.component */ "qJdP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






class AppComponent {
    constructor() {
        this.title = 'shop-v8';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-info-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-product-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sticker-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } }, directives: [_component_widget_info_nav_info_nav_component__WEBPACK_IMPORTED_MODULE_1__["InfoNavComponent"], _component_widget_product_nav_product_nav_component__WEBPACK_IMPORTED_MODULE_2__["ProductNavComponent"], _component_widget_sticker_nav_sticker_nav_component__WEBPACK_IMPORTED_MODULE_3__["StickerNavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "Uxiq":
/*!************************************!*\
  !*** ./src/app/service/message.ts ***!
  \************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
class Message {
    constructor() {
        this.visible = false;
        this.content = "";
        this.kind = "error"; //use bootstrap classes
    }
    get class() {
        return "alert alert-" + this.kind;
    }
    show(content, kind) {
        this.visible = true;
        this.content = content;
        this.kind = kind;
    }
    hide() {
        this.visible = false;
    }
}


/***/ }),

/***/ "WYsb":
/*!*******************************************************!*\
  !*** ./src/app/component/view/home/home.component.ts ***!
  \*******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 2, vars: 0, template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "home works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokkenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokkenGetter", function() { return tokkenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _component_widget_product_nav_product_nav_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/widget/product-nav/product-nav.component */ "wwtG");
/* harmony import */ var _component_widget_info_nav_info_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/widget/info-nav/info-nav.component */ "07UD");
/* harmony import */ var _component_view_informacje_o_firmie_informacje_o_firmie_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/view/informacje-o-firmie/informacje-o-firmie.component */ "2HNa");
/* harmony import */ var _component_view_przesylki_zagraniczne_przesylki_zagraniczne_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/view/przesylki-zagraniczne/przesylki-zagraniczne.component */ "S9zC");
/* harmony import */ var _component_view_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/view/kontakt/kontakt.component */ "pAI0");
/* harmony import */ var _component_view_regulamin_regulamin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/view/regulamin/regulamin.component */ "AxgZ");
/* harmony import */ var _component_widget_signer_signer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/widget/signer/signer.component */ "QVbe");
/* harmony import */ var _component_widget_sticker_nav_sticker_nav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/widget/sticker-nav/sticker-nav.component */ "qJdP");
/* harmony import */ var _component_view_register_register_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/view/register/register.component */ "r9bT");
/* harmony import */ var _component_view_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/view/login/login.component */ "Sqrs");
/* harmony import */ var _component_view_home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./component/view/home/home.component */ "WYsb");
/* harmony import */ var _component_view_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/view/page-not-found/page-not-found.component */ "1YpU");
/* harmony import */ var _component_widget_google_login_google_login_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./component/widget/google-login/google-login.component */ "DNdf");
/* harmony import */ var _component_view_konto_uzytkownika_konto_uzytkownika_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./component/view/konto-uzytkownika/konto-uzytkownika.component */ "1N6X");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _component_view_wyslano_email_weryfikacyjny_wyslano_email_weryfikacyjny_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./component/view/wyslano-email-weryfikacyjny/wyslano-email-weryfikacyjny.component */ "u7ZG");
/* harmony import */ var _component_view_weryfikuj_weryfikuj_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./component/view/weryfikuj/weryfikuj.component */ "kTzx");


























function tokkenGetter() {
    return sessionStorage.getItem("access_token");
}
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_21__["JwtModule"].forRoot({
                config: {
                    tokenGetter: tokkenGetter,
                }
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _component_widget_product_nav_product_nav_component__WEBPACK_IMPORTED_MODULE_7__["ProductNavComponent"],
        _component_widget_info_nav_info_nav_component__WEBPACK_IMPORTED_MODULE_8__["InfoNavComponent"],
        _component_view_informacje_o_firmie_informacje_o_firmie_component__WEBPACK_IMPORTED_MODULE_9__["InformacjeOFirmieComponent"],
        _component_view_przesylki_zagraniczne_przesylki_zagraniczne_component__WEBPACK_IMPORTED_MODULE_10__["PrzesylkiZagraniczneComponent"],
        _component_view_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_11__["KontaktComponent"],
        _component_view_regulamin_regulamin_component__WEBPACK_IMPORTED_MODULE_12__["RegulaminComponent"],
        _component_widget_signer_signer_component__WEBPACK_IMPORTED_MODULE_13__["SignerComponent"],
        _component_widget_sticker_nav_sticker_nav_component__WEBPACK_IMPORTED_MODULE_14__["StickerNavComponent"],
        _component_view_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
        _component_view_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
        _component_view_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
        _component_view_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_18__["PageNotFoundComponent"],
        _component_widget_google_login_google_login_component__WEBPACK_IMPORTED_MODULE_19__["GoogleLoginComponent"],
        _component_view_konto_uzytkownika_konto_uzytkownika_component__WEBPACK_IMPORTED_MODULE_20__["KontoUzytkownikaComponent"],
        _component_view_wyslano_email_weryfikacyjny_wyslano_email_weryfikacyjny_component__WEBPACK_IMPORTED_MODULE_22__["WyslanoEmailWeryfikacyjnyComponent"],
        _component_view_weryfikuj_weryfikuj_component__WEBPACK_IMPORTED_MODULE_23__["WeryfikujComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_21__["JwtModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _component_widget_product_nav_product_nav_component__WEBPACK_IMPORTED_MODULE_7__["ProductNavComponent"],
                    _component_widget_info_nav_info_nav_component__WEBPACK_IMPORTED_MODULE_8__["InfoNavComponent"],
                    _component_view_informacje_o_firmie_informacje_o_firmie_component__WEBPACK_IMPORTED_MODULE_9__["InformacjeOFirmieComponent"],
                    _component_view_przesylki_zagraniczne_przesylki_zagraniczne_component__WEBPACK_IMPORTED_MODULE_10__["PrzesylkiZagraniczneComponent"],
                    _component_view_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_11__["KontaktComponent"],
                    _component_view_regulamin_regulamin_component__WEBPACK_IMPORTED_MODULE_12__["RegulaminComponent"],
                    _component_widget_signer_signer_component__WEBPACK_IMPORTED_MODULE_13__["SignerComponent"],
                    _component_widget_sticker_nav_sticker_nav_component__WEBPACK_IMPORTED_MODULE_14__["StickerNavComponent"],
                    _component_view_register_register_component__WEBPACK_IMPORTED_MODULE_15__["RegisterComponent"],
                    _component_view_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                    _component_view_home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"],
                    _component_view_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_18__["PageNotFoundComponent"],
                    _component_widget_google_login_google_login_component__WEBPACK_IMPORTED_MODULE_19__["GoogleLoginComponent"],
                    _component_view_konto_uzytkownika_konto_uzytkownika_component__WEBPACK_IMPORTED_MODULE_20__["KontoUzytkownikaComponent"],
                    _component_view_wyslano_email_weryfikacyjny_wyslano_email_weryfikacyjny_component__WEBPACK_IMPORTED_MODULE_22__["WyslanoEmailWeryfikacyjnyComponent"],
                    _component_view_weryfikuj_weryfikuj_component__WEBPACK_IMPORTED_MODULE_23__["WeryfikujComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_21__["JwtModule"].forRoot({
                        config: {
                            tokenGetter: tokkenGetter,
                        }
                    }),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bE47":
/*!*****************************************!*\
  !*** ./src/app/guard/antiauth.guard.ts ***!
  \*****************************************/
/*! exports provided: AntiauthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AntiauthGuard", function() { return AntiauthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/user.service */ "Ouoq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AntiauthGuard {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.userService.isLogged() ? this.router.parseUrl('/konto_uzytkownika') : true;
    }
}
AntiauthGuard.ɵfac = function AntiauthGuard_Factory(t) { return new (t || AntiauthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AntiauthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AntiauthGuard, factory: AntiauthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AntiauthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "cT6d":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../service/user.service */ "Ouoq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(userService, router) {
        this.userService = userService;
        this.router = router;
    }
    canActivate(route, state) {
        return this.userService.isLogged() ? true : this.router.parseUrl('/login');
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "kTzx":
/*!*****************************************************************!*\
  !*** ./src/app/component/view/weryfikuj/weryfikuj.component.ts ***!
  \*****************************************************************/
/*! exports provided: WeryfikujComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeryfikujComponent", function() { return WeryfikujComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_service_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/message */ "Uxiq");
/* harmony import */ var src_app_service_verification_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/verification.service */ "lroY");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function WeryfikujComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.message.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r0.message.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function WeryfikujComponent_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logowanie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class WeryfikujComponent {
    constructor(vs, ac) {
        this.vs = vs;
        this.ac = ac;
        this.message = new src_app_service_message__WEBPACK_IMPORTED_MODULE_1__["Message"]();
    }
    ngOnInit() {
        this.vs.verify(this.ac.snapshot.params.code).subscribe((response) => {
            if (response.success) {
                this.message.show("<strong>Sukces!</strong> Twoje konto zostało pomyślnie zweryfikowane.", "success");
                this.verified = true;
            }
            else if (response.message === "link not exist")
                this.message.show("<strong>Błąd!</strong> Ten link prawdopodobnie wygasł, zarejestruj się ponownie", "danger");
            else
                this.message.show("<strong>Ups! Coś poszło nie tak.</strong> Sprubuj ponownie później.", "danger");
        }, (error) => {
            this.message.show(error, "danger");
        });
    }
}
WeryfikujComponent.ɵfac = function WeryfikujComponent_Factory(t) { return new (t || WeryfikujComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_verification_service__WEBPACK_IMPORTED_MODULE_2__["VerificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
WeryfikujComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeryfikujComponent, selectors: [["app-weryfikuj"]], decls: 2, vars: 2, consts: [[3, "innerHTML", "class", 4, "ngIf"], ["class", "btn btn-info", "routerLink", "/login", 4, "ngIf"], [3, "innerHTML"], ["routerLink", "/login", 1, "btn", "btn-info"]], template: function WeryfikujComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WeryfikujComponent_div_0_Template, 1, 3, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeryfikujComponent_a_1_Template, 2, 0, "a", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.verified);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3ZXJ5ZmlrdWouY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeryfikujComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-weryfikuj',
                templateUrl: './weryfikuj.component.html',
                styleUrls: ['./weryfikuj.component.scss']
            }]
    }], function () { return [{ type: src_app_service_verification_service__WEBPACK_IMPORTED_MODULE_2__["VerificationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "lroY":
/*!*************************************************!*\
  !*** ./src/app/service/verification.service.ts ***!
  \*************************************************/
/*! exports provided: VerificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerificationService", function() { return VerificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _error_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-handlers */ "SgNr");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



//import * as eh from './error-handlers';



class VerificationService {
    constructor(http) {
        this.http = http;
    }
    verify(code) {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].endpoint + "/user/verify/" + code;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(_error_handlers__WEBPACK_IMPORTED_MODULE_3__["httpErrorHandler"]));
    }
}
VerificationService.ɵfac = function VerificationService_Factory(t) { return new (t || VerificationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
VerificationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VerificationService, factory: VerificationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerificationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ntTL":
/*!************************!*\
  !*** ./secret/data.ts ***!
  \************************/
/*! exports provided: CLIENT_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIENT_ID", function() { return CLIENT_ID; });
const CLIENT_ID = "278590775600-1i8jaje4vr6dffnnbm4ro13kc6g0f0vs.apps.googleusercontent.com";


/***/ }),

/***/ "pAI0":
/*!*************************************************************!*\
  !*** ./src/app/component/view/kontakt/kontakt.component.ts ***!
  \*************************************************************/
/*! exports provided: KontaktComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KontaktComponent", function() { return KontaktComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class KontaktComponent {
    constructor() { }
    ngOnInit() {
    }
}
KontaktComponent.ɵfac = function KontaktComponent_Factory(t) { return new (t || KontaktComponent)(); };
KontaktComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KontaktComponent, selectors: [["app-kontakt"]], decls: 2, vars: 0, template: function KontaktComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "kontakt works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJrb250YWt0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KontaktComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-kontakt',
                templateUrl: './kontakt.component.html',
                styleUrls: ['./kontakt.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qJdP":
/*!***********************************************************************!*\
  !*** ./src/app/component/widget/sticker-nav/sticker-nav.component.ts ***!
  \***********************************************************************/
/*! exports provided: StickerNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickerNavComponent", function() { return StickerNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _signer_signer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../signer/signer.component */ "QVbe");



class StickerNavComponent {
    constructor() { }
    ngOnInit() {
    }
}
StickerNavComponent.ɵfac = function StickerNavComponent_Factory(t) { return new (t || StickerNavComponent)(); };
StickerNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StickerNavComponent, selectors: [["app-sticker-nav"]], decls: 3, vars: 0, consts: [[1, "sticky-top", "d-flex", "flex-row-reverse"], [1, "m-2"]], template: function StickerNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-signer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_signer_signer_component__WEBPACK_IMPORTED_MODULE_1__["SignerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdGlja2VyLW5hdi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StickerNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sticker-nav',
                templateUrl: './sticker-nav.component.html',
                styleUrls: ['./sticker-nav.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "r9bT":
/*!***************************************************************!*\
  !*** ./src/app/component/view/register/register.component.ts ***!
  \***************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_service_message__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/message */ "Uxiq");
/* harmony import */ var src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/user.service */ "Ouoq");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function RegisterComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Podaj login. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_p_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login za d\u0142ugi. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Podaj email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Podaj poprawny email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Email za d\u0142ugi. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Podaj has\u0142o. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_p_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Has\u0142o za kr\u00F3tkie. Has\u0142o powinno posiada\u0107 minimum 8 znak\u00F3w. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_p_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Has\u0142o za d\u0142ugie. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RegisterComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 11);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r8.message.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r8.message.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
class RegisterComponent {
    constructor(userService, fb, router) {
        this.userService = userService;
        this.fb = fb;
        this.router = router;
        this.form = this.fb.group({
            login: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(32)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^\S+@\S+\.\S+$/), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(64)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(64)]],
            rpassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
        });
        this.message = new src_app_service_message__WEBPACK_IMPORTED_MODULE_2__["Message"]();
    }
    ngOnInit() {
    }
    get password() {
        return this.form.get('password');
    }
    get email() {
        return this.form.get('email');
    }
    get login() {
        return this.form.get('login');
    }
    onSubmit() {
        let password = this.form.get("password");
        let rpassword = this.form.get("rpassword");
        let login = this.form.get("login");
        let email = this.form.get("email");
        if (password === null || rpassword === null || login === null || email === null) {
            console.error("No field");
            return;
        }
        if (password.value === rpassword.value) {
            this.message.hide();
            //send user data to register 
            const user = {
                login: login.value,
                email: email.value,
                password: password.value,
            };
            this.userService.register(user).subscribe((result) => {
                if (result.success) {
                    console.log(result);
                    this.router.navigate(["/wyslano_email_weryfikacyjny"]);
                }
                else {
                    let errorMessage = "<strong>Ups! Coś poszło nie tak.</strong> Sprubuj ponownie później.";
                    if (result.message == "email exist") {
                        errorMessage = "<strong>Ten email już jest zarejestrowany.</strong> Jeżeli chcesz założyć niezależne konto użyj innego email.";
                    }
                    if (result.message == "login exist") {
                        errorMessage = "<strong>Ten login już istnieje.</strong> Spróbuj go rozwinąć lub wykorzystać inny.";
                    }
                    this.message.show(errorMessage, "danger");
                }
            }, error => {
                this.message.show(error, "danger");
            });
        }
        else {
            let errorMessage = '<strong>Hasła nie są takie same!</strong> Wpisz hasła ponownie.';
            this.message.show(errorMessage, "danger");
            password.setValue("");
            rpassword.setValue("");
        }
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 27, vars: 11, consts: [[1, "container", "g-form", 3, "formGroup", "ngSubmit"], [1, "form-group"], ["type", "text", "placeholder", "Login", "formControlName", "login", "required", "", 1, "form-control"], [1, "invalid-feedback"], [4, "ngIf"], ["type", "email", "placeholder", "Email", "formControlName", "email", "required", "", 1, "form-control"], ["type", "password", "placeholder", "Has\u0142o", "formControlName", "password", "required", "", 1, "form-control"], ["type", "password", "placeholder", "Powt\u00F3rz Has\u0142o", "formControlName", "rpassword", "required", "", 1, "form-control"], [3, "innerHTML", "class", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-success", "w-100", "mb-1", 3, "disabled"], ["routerLink", "/login", 1, "btn", "btn-primary", "w-100"], [3, "innerHTML"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_0_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RegisterComponent_p_4_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RegisterComponent_p_5_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RegisterComponent_p_9_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RegisterComponent_p_10_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RegisterComponent_p_11_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, RegisterComponent_p_15_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, RegisterComponent_p_16_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RegisterComponent_p_17_Template, 2, 0, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Powt\u00F3rz has\u0142o.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, RegisterComponent_div_22_Template, 1, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Log in");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email == null ? null : ctx.email.errors == null ? null : ctx.email.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email == null ? null : ctx.email.errors == null ? null : ctx.email.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email == null ? null : ctx.email.errors == null ? null : ctx.email.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email == null ? null : ctx.email.errors == null ? null : ctx.email.errors.pattern);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.email == null ? null : ctx.email.errors == null ? null : ctx.email.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password == null ? null : ctx.password.errors == null ? null : ctx.password.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password == null ? null : ctx.password.errors == null ? null : ctx.password.errors.minlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.password == null ? null : ctx.password.errors == null ? null : ctx.password.errors.maxlength);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message.visible);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.form.valid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: src_app_service_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "u7ZG":
/*!*****************************************************************************************************!*\
  !*** ./src/app/component/view/wyslano-email-weryfikacyjny/wyslano-email-weryfikacyjny.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: WyslanoEmailWeryfikacyjnyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WyslanoEmailWeryfikacyjnyComponent", function() { return WyslanoEmailWeryfikacyjnyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class WyslanoEmailWeryfikacyjnyComponent {
    constructor() { }
    ngOnInit() {
    }
}
WyslanoEmailWeryfikacyjnyComponent.ɵfac = function WyslanoEmailWeryfikacyjnyComponent_Factory(t) { return new (t || WyslanoEmailWeryfikacyjnyComponent)(); };
WyslanoEmailWeryfikacyjnyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WyslanoEmailWeryfikacyjnyComponent, selectors: [["app-wyslano-email-weryfikacyjny"]], decls: 2, vars: 0, template: function WyslanoEmailWeryfikacyjnyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Wys\u0142ano email z linkiem weryfikacyjnym!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3eXNsYW5vLWVtYWlsLXdlcnlmaWthY3lqbnkuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WyslanoEmailWeryfikacyjnyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-wyslano-email-weryfikacyjny',
                templateUrl: './wyslano-email-weryfikacyjny.component.html',
                styleUrls: ['./wyslano-email-weryfikacyjny.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _component_view_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component/view/home/home.component */ "WYsb");
/* harmony import */ var _component_view_informacje_o_firmie_informacje_o_firmie_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/view/informacje-o-firmie/informacje-o-firmie.component */ "2HNa");
/* harmony import */ var _component_view_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/view/kontakt/kontakt.component */ "pAI0");
/* harmony import */ var _component_view_konto_uzytkownika_konto_uzytkownika_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/view/konto-uzytkownika/konto-uzytkownika.component */ "1N6X");
/* harmony import */ var _component_view_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/view/login/login.component */ "Sqrs");
/* harmony import */ var _component_view_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/view/page-not-found/page-not-found.component */ "1YpU");
/* harmony import */ var _component_view_przesylki_zagraniczne_przesylki_zagraniczne_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/view/przesylki-zagraniczne/przesylki-zagraniczne.component */ "S9zC");
/* harmony import */ var _component_view_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/view/register/register.component */ "r9bT");
/* harmony import */ var _component_view_regulamin_regulamin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/view/regulamin/regulamin.component */ "AxgZ");
/* harmony import */ var _component_view_weryfikuj_weryfikuj_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/view/weryfikuj/weryfikuj.component */ "kTzx");
/* harmony import */ var _component_view_wyslano_email_weryfikacyjny_wyslano_email_weryfikacyjny_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/view/wyslano-email-weryfikacyjny/wyslano-email-weryfikacyjny.component */ "u7ZG");
/* harmony import */ var _guard_antiauth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./guard/antiauth.guard */ "bE47");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./guard/auth.guard */ "cT6d");

















const routes = [
    { path: '', component: _component_view_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'informacje_o_firmie', component: _component_view_informacje_o_firmie_informacje_o_firmie_component__WEBPACK_IMPORTED_MODULE_3__["InformacjeOFirmieComponent"] },
    { path: 'kontakt', component: _component_view_kontakt_kontakt_component__WEBPACK_IMPORTED_MODULE_4__["KontaktComponent"] },
    { path: 'przesylki_zagraniczne', component: _component_view_przesylki_zagraniczne_przesylki_zagraniczne_component__WEBPACK_IMPORTED_MODULE_8__["PrzesylkiZagraniczneComponent"] },
    { path: 'regulamin', component: _component_view_regulamin_regulamin_component__WEBPACK_IMPORTED_MODULE_10__["RegulaminComponent"] },
    { path: 'login', component: _component_view_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"], canActivate: [_guard_antiauth_guard__WEBPACK_IMPORTED_MODULE_13__["AntiauthGuard"]] },
    { path: 'register', component: _component_view_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"], canActivate: [_guard_antiauth_guard__WEBPACK_IMPORTED_MODULE_13__["AntiauthGuard"]] },
    { path: 'konto_uzytkownika', component: _component_view_konto_uzytkownika_konto_uzytkownika_component__WEBPACK_IMPORTED_MODULE_5__["KontoUzytkownikaComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'wyslano_email_weryfikacyjny', component: _component_view_wyslano_email_weryfikacyjny_wyslano_email_weryfikacyjny_component__WEBPACK_IMPORTED_MODULE_12__["WyslanoEmailWeryfikacyjnyComponent"] },
    { path: 'weryfikuj/:code', component: _component_view_weryfikuj_weryfikuj_component__WEBPACK_IMPORTED_MODULE_11__["WeryfikujComponent"] },
    { path: '**', component: _component_view_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"] },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "wwtG":
/*!***********************************************************************!*\
  !*** ./src/app/component/widget/product-nav/product-nav.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProductNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductNavComponent", function() { return ProductNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProductNavComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProductNavComponent.ɵfac = function ProductNavComponent_Factory(t) { return new (t || ProductNavComponent)(); };
ProductNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductNavComponent, selectors: [["app-product-nav"]], decls: 2, vars: 0, template: function ProductNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "product nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdWN0LW5hdi5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-nav',
                templateUrl: './product-nav.component.html',
                styleUrls: ['./product-nav.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map