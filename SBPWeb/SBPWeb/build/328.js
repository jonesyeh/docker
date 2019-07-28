webpackJsonp([328],{

/***/ 1579:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_component__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_api_url_services_api_url_services__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_services_auth_services__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Model_MyAppSharedSettings__ = __webpack_require__(47);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// import { String } from "../../Model/String";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(menuCtrl, navCtrl, navParams, authServices, global, ApiUrlServices, conf, myApp) {
        this.menuCtrl = menuCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServices = authServices;
        this.global = global;
        this.ApiUrlServices = ApiUrlServices;
        this.conf = conf;
        this.myApp = myApp;
        this.registerCredentials = { userName: "", password: "" };
        this.data_list = [];
        this.default_api_url = null;
        this.LoadData(true);
    }
    LoginPage.prototype.onChangeObj = function (newObj) {
        console.log(newObj);
        this.default_api_url = newObj;
        this.default_api_url.is_default = true;
        this.ApiUrlServices.PostPutAsync(this.default_api_url, "PUT");
        this.conf.API_URL = this.default_api_url.url;
        this.conf.is_url_forward = this.default_api_url.is_url_forward;
        this.conf.api_name = this.default_api_url.disp_name;
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad LoginPage");
    };
    LoginPage.prototype.createAccount = function () {
        this.navCtrl.push("RegisterPage");
    };
    LoginPage.prototype.openNavApiUrlPage = function () {
        this.navCtrl.setRoot("ApiUrlPage", {
            parent_page: this,
            parent_page_name: "LoginPage"
        });
    };
    LoginPage.prototype.LoadData = function (init) {
        var _this = this;
        this.global.createLoader();
        this.global.loading.present().then(function () {
            _this.ApiUrlServices.GetListsAsync("", true).subscribe(function (data) {
                if (data.DidError === true) {
                    _this.global.dismissLoading();
                    _this.global.showError(data.ErrorMessage);
                }
                else {
                    if (init) {
                        _this.data_list = [];
                        _this.data_list = data.Model;
                        var index = _this.data_list.findIndex(function (d) { return d.is_default === true; });
                        _this.default_api_url = _this.data_list[index];
                        _this.conf.API_URL = _this.default_api_url.url;
                        _this.conf.is_url_forward = _this.default_api_url.is_url_forward;
                        _this.conf.api_name = _this.default_api_url.disp_name;
                    }
                    else
                        for (var i = 0; i < data.Model.length; i++) {
                            _this.data_list.push(data.Model[i]);
                        }
                    _this.global.dismissLoading();
                }
            }, function (err) {
                _this.global.dismissLoading();
                _this.global.showError("無法連上WebAPI伺服器-" + err.message);
            });
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        console.log("login");
        this.conf.login_count += 1;
        this.global.createLoader();
        this.global.loading.present().then(function () {
            _this.authServices.loginAsync(_this.registerCredentials).subscribe(function (data) {
                _this.global.dismissLoading();
                if (data.DidError === false) {
                    //認證成功
                    _this.myApp.SetMenu(data.Model.MenuViewModel);
                    _this.navCtrl.setRoot("HomePage");
                    // this.menu_id=String.Format("{0}_{1}","menu1",this.conf.login_count);
                    // this.menuCtrl.enable(true, this.menu_id);
                }
                else {
                    _this.global.showError(data.ErrorMessage);
                }
            }, function (err) {
                _this.global.dismissLoading();
                _this.global.showError("無法連上WebAPI伺服器-" + err.message);
            });
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: "page-login",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>登入</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="login-content" padding>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-2 col-md-3 col-lg-4>\n      </ion-col>\n      <ion-col col-12 col-sm-8 col-md-6 col-lg-4>\n        <div >\n\n          <form #registerForm="ngForm">\n\n            <ion-row>\n\n              <ion-col>\n\n                <ion-list>\n                  <ion-item>\n                    <ion-select  [ngModel]="default_api_url" (ngModelChange)="onChangeObj($event)" name="api_url">\n                      <ion-option  [value]="i" *ngFor="let i of data_list">{{i.disp_name}}</ion-option>\n                    </ion-select>\n                  </ion-item>\n                  <ion-item>\n\n                    <ion-input type="text" placeholder="帳號" name="userName" [(ngModel)]="registerCredentials.userName"\n                      required></ion-input>\n                    </ion-item>\n\n\n                  <ion-item>\n\n                    <ion-input type="password" placeholder="密碼" name="password" [(ngModel)]="registerCredentials.password"\n                      required></ion-input>\n                    </ion-item>\n\n                  </ion-list>\n                </ion-col>\n              </ion-row>\n\n\n            <ion-row>\n\n              <ion-col >\n                <div [ngClass]="[\'command_center\']">\n                  <!-- <button ion-button class="submit-btn" full (click)="login()" [disabled]="!registerForm.form.valid">登入</button>\n\n                  <button ion-button class="register-btn" block clear (click)="createAccount()">註冊</button> -->\n                  <button small title="確認" ion-button color="light" icon-left (click)="login()" [disabled]="!registerForm.form.valid">\n                    <ion-icon name="checkmark-circle"></ion-icon>\n                  </button>\n                  <button small title="註冊" *ngIf="conf.is_register==true"  ion-button color="dark" icon-left (click)="createAccount()">\n                    <ion-icon name="add"></ion-icon>\n                  </button>\n                  <button small title="遠端伺服器設定" ion-button color="secondary" icon-left (click)="openNavApiUrlPage()">\n                    <ion-icon name="settings"></ion-icon>\n                  </button>\n                </div>\n\n              </ion-col>\n              </ion-row>\n\n            </form>\n          </div>\n      </ion-col>\n      <ion-col col-12 col-sm-2 col-md-3 col-lg-4>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_services_auth_services__["a" /* AuthServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_5__components_global_global__["a" /* GlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_1__providers_api_url_services_api_url_services__["a" /* ApiUrlServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_6__Model_MyAppSharedSettings__["a" /* MyAppSharedSettings */],
            __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* MyApp */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(1579);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ })

});
//# sourceMappingURL=328.js.map