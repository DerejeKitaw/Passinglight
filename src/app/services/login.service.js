"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// user.service.ts
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var router_1 = require("@angular/router");
var LoginService = (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        this.loggedIn = false;
        this.loggedIn = !!localStorage.getItem('email');
    }
    LoginService.prototype.login = function (email, password) {
        var _this = this;
        var postData = 'grant_type=password' + '&userName=' + email + '&password=' + password + '';
        var headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded',
            'ClientId': '8er4lt18-opo4xc7u.apps.techaspect.com'
        });
        return this.http.post('https://hrmmobile.techaspect.com/token', postData, { headers: headers })
            .map(function (responseData) { return responseData.json(); })
            .subscribe(function (data) {
            _this.loggedIn = true;
            localStorage.setItem('email', email);
            _this.router.navigate(['/home']);
        }, function (err) {
            _this.loggedIn = false;
            localStorage.removeItem('email');
        }, function () { });
    };
    LoginService.prototype.logout = function () {
        localStorage.removeItem('email');
        this.loggedIn = false;
    };
    LoginService.prototype.isLoggedIn = function () {
        return this.loggedIn;
    };
    return LoginService;
}());
LoginService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http, router_1.Router])
], LoginService);
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map