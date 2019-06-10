(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-crypto.service.ts":
/*!***************************************!*\
  !*** ./src/app/app-crypto.service.ts ***!
  \***************************************/
/*! exports provided: AppCryptoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppCryptoService", function() { return AppCryptoService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js");
/* harmony import */ var js_base64__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_base64__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var randombytes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! randombytes */ "./node_modules/randombytes/browser.js");
/* harmony import */ var randombytes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(randombytes__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var sha_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sha.js */ "./node_modules/sha.js/index.js");
/* harmony import */ var sha_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sha_js__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppCryptoService = /** @class */ (function () {
    function AppCryptoService(http) {
        this.http = http;
    }
    AppCryptoService.prototype.encode = function (message) {
        return js_base64__WEBPACK_IMPORTED_MODULE_2__["Base64"].encodeURI(message);
    };
    AppCryptoService.prototype.decode = function (message) {
        return js_base64__WEBPACK_IMPORTED_MODULE_2__["Base64"].decode(message);
    };
    AppCryptoService.prototype.sha256 = function (message) {
        return sha_js__WEBPACK_IMPORTED_MODULE_4___default()('sha256').update(message).digest('hex');
    };
    AppCryptoService.prototype.randomBytes = function (bytes) {
        if (bytes === void 0) { bytes = 32; }
        return randombytes__WEBPACK_IMPORTED_MODULE_3___default()(bytes);
    };
    AppCryptoService.prototype.random = function (bytes) {
        if (bytes === void 0) { bytes = 32; }
        return js_base64__WEBPACK_IMPORTED_MODULE_2__["Base64"].encodeURI(randombytes__WEBPACK_IMPORTED_MODULE_3___default()(bytes));
    };
    AppCryptoService.prototype.codeChallenge = function (randomData) {
        if (randomData === void 0) { randomData = null; }
        var data = randomData ? randomData : randombytes__WEBPACK_IMPORTED_MODULE_3___default()(32);
        return js_base64__WEBPACK_IMPORTED_MODULE_2__["Base64"].encodeURI(sha_js__WEBPACK_IMPORTED_MODULE_4___default()('sha256').update(data).digest('hex'));
    };
    AppCryptoService.prototype.generateUrl = function (uri) {
        return this.http.get(uri);
    };
    AppCryptoService.prototype.getParameter = function (parameters, key) {
        var params = parameters[0] === '?' ? parameters.substring(1) : parameters;
        var paramsObj = new URLSearchParams(params);
        return paramsObj.get(key);
    };
    AppCryptoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], AppCryptoService);
    return AppCryptoService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/callback/callback.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'callback', component: _callback_callback_component__WEBPACK_IMPORTED_MODULE_2__["CallbackComponent"] },
    { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'auth-mewtropolis';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _callback_callback_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./callback/callback.component */ "./src/app/callback/callback.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _callback_callback_component__WEBPACK_IMPORTED_MODULE_5__["CallbackComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/callback/callback.component.html":
/*!**************************************************!*\
  !*** ./src/app/callback/callback.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  callback works!\n</p>\n"

/***/ }),

/***/ "./src/app/callback/callback.component.sass":
/*!**************************************************!*\
  !*** ./src/app/callback/callback.component.sass ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/callback/callback.component.ts":
/*!************************************************!*\
  !*** ./src/app/callback/callback.component.ts ***!
  \************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_crypto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-crypto.service */ "./src/app/app-crypto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CallbackComponent = /** @class */ (function () {
    function CallbackComponent(AppCrypto) {
        this.AppCrypto = AppCrypto;
    }
    CallbackComponent.prototype.ngOnInit = function () {
        try {
            var state_token = this.parseToken(this.getStateToken());
            var id_token = this.parseToken(this.getIdToken());
            // const verified = this.verifyTokens(state_token, id_token);
            // console.log(state_token.REDIRECT_URL);
            console.log(state_token);
            console.log(id_token);
            // console.log(`verified: ${verified}`);
            this.redirect(state_token, id_token);
        }
        catch (err) {
            console.log(err.message);
        }
    };
    CallbackComponent.prototype.getStateToken = function () {
        var state = this.AppCrypto.getParameter(window.location.search, 'state');
        var base64Token = localStorage.getItem(state);
        return base64Token;
    };
    CallbackComponent.prototype.getIdToken = function () {
        var base64_id_token = this.AppCrypto.getParameter(window.location.search, 'id_token');
        return base64_id_token;
    };
    CallbackComponent.prototype.parseToken = function (base64Token) {
        var tokenPayload = base64Token.split('.')[1];
        var tokenString = this.AppCrypto.decode(tokenPayload);
        var token = JSON.parse(tokenString);
        return token;
    };
    CallbackComponent.prototype.verifyTokens = function (state_token, id_token) {
        var nonce = state_token.nonce === id_token.nonce;
        var aud = state_token.aud === id_token.aud;
        var time = Math.floor(Date.now() / 1000);
        var exp = state_token.exp > time && id_token.exp > time;
        console.log("time: " + time);
        console.log("nonce: " + nonce);
        console.log("aud: " + aud);
        console.log("exp: " + exp);
        return (nonce && aud && exp);
    };
    CallbackComponent.prototype.redirect = function (state_token, id_token) {
        if (this.verifyTokens(state_token, id_token)) {
            console.log("verified: " + true);
            console.log(state_token.REDIRECT_URL);
            console.log(state_token);
            console.log(id_token);
        }
        else {
            console.log("verified: " + false);
        }
    };
    CallbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-callback',
            template: __webpack_require__(/*! ./callback.component.html */ "./src/app/callback/callback.component.html"),
            styles: [__webpack_require__(/*! ./callback.component.sass */ "./src/app/callback/callback.component.sass")]
        }),
        __metadata("design:paramtypes", [_app_crypto_service__WEBPACK_IMPORTED_MODULE_1__["AppCryptoService"]])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  login works!\r\n</p>\r\n\r\n<button (click)=\"redirect()\">Google Login</button>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.sass":
/*!********************************************!*\
  !*** ./src/app/login/login.component.sass ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_crypto_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app-crypto.service */ "./src/app/app-crypto.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(AppCrypto) {
        this.AppCrypto = AppCrypto;
        this.url = 'https://auth.mewtropolis.me/api/auth/google';
    }
    LoginComponent.prototype.ngOnInit = function () {
        try {
            // const randomData = this.AppCrypto.randomBytes(32);
            // const challenge = this.AppCrypto.codeChallenge();
            // const urlTest = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=986484840298-7sk3u5a07btmvpl4r4uqi0s5m9qrnljo.apps.googleusercontent.com&scope=openid&response_type=code%20id_token&redirect_uri=http%3A%2F%2Fauth.mewtropolis.me%2Fapi%2Fauth%2Fcallback&state=7wn9Muc7EA7RA7uN_dRj3UXfPy8pdnnLtxtV7DauzJ0&nonce=livC9NI01e40v0t4kUfWJCQ9bN7N1j0_d8TQxAnrCos';
            // console.log('test: randombytes');
            // console.log(`${randomData}\n\n`);
            // console.log('test: random');
            // console.log(`${this.AppCrypto.random(32)}\n\n`);
            // console.log('test: codeChallenge');
            // console.log(`${challenge}\n\n`);
            // console.log(`${this.AppCrypto.decode(challenge)}`);
            // console.log(`${this.AppCrypto.getParameter(urlTest, 'state')}`);
            var mockAuthUrl = 'https://accounts.google.com/o/oauth2/v2/auth?client_id=986484840298-7sk3u5a07btmvpl4r4uqi0s5m9qrnljo.apps.googleusercontent.com&scope=openid%20email&response_type=code%20id_token&redirect_uri=https%3A%2F%2Fketsumi.github.io%2Fauth-mewtropolis%2Fcallback&nonce=GB9sJNbASzUxva72TRoLzYr-ouda3hF-Uu8PgxSjm_E&state=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJSRURJUkVDVF9VUkwiOiJodHRwOi8vYXV0aC5tZXd0cm9wb2xpcy5tZS9hcGkvYXV0aC9jYWxsYmFjayIsIm5vbmNlIjoieWtSNUowUFdVX3VvWGU2NkhOaHlzSFFCcFRSVVNmMUlfQXZwazRGZ0NTSSIsImF1ZCI6Ijk4NjQ4NDg0MDI5OC03c2szdTVhMDdidG12cGw0cjR1cWkwczVtOXFybmxqby5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImV4cCI6MTU2MDE0NzgwMCwiaWF0IjoxNTYwMTQ3NjIwfQ.wcSixE4cD9Cb6Ttx9UsEhIpsnYBGL9D2TBM7a-74fqM';
            var authUrl = this.nonceAsState(mockAuthUrl); // test
            // this.redirect();
        }
        catch (err) {
            console.log(err.message);
        }
    };
    LoginComponent.prototype.redirect = function () {
        var _this = this;
        this.AppCrypto.generateUrl(this.url).subscribe(function (url) {
            var authUrl = _this.nonceAsState(url); // authUrl with new nonce as state
            // window.open(authUrl, '_self');
        });
    };
    LoginComponent.prototype.nonceAsState = function (url, save) {
        if (save === void 0) { save = true; }
        var nonce = this.AppCrypto.codeChallenge(); // url-safe Base64 hash
        var state = this.AppCrypto.getParameter(url, 'state'); // state token
        var authUrl = url.replace(state, nonce);
        console.log("state:\n" + state);
        console.log("nonce:\n" + nonce);
        console.log("authUrl:\n" + authUrl); // used to redirect to google auth page
        if (save)
            localStorage.setItem(nonce, state);
        return authUrl;
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.sass */ "./src/app/login/login.component.sass")]
        }),
        __metadata("design:paramtypes", [_app_crypto_service__WEBPACK_IMPORTED_MODULE_1__["AppCryptoService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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
var environment = {
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/exercises/oauth/auth-mewtropolis/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map