webpackJsonp([279],{

/***/ 1185:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExistsVaildator; });
var ExistsVaildator = /** @class */ (function () {
    function ExistsVaildator() {
    }
    ExistsVaildator.validateConnIDFactory = function (lists) {
        return function (c) {
            if (c.value) {
                if (lists) {
                    return lists.findIndex(function (p) { return p === c.value; }) >= 0
                        ? {
                            validateConnIDFactory: true
                        }
                        : null;
                }
                else
                    return null;
            }
            else
                return null;
        };
    };
    ExistsVaildator.EquieFactory = function (compare_name) {
        return function (c) {
            if (c.value) {
                var compare_to = c.parent.get(compare_name).value;
                if (compare_to > "") {
                    return compare_to !== c.value
                        ? {
                            EquieFactory: true
                        }
                        : null;
                }
                else
                    return null;
            }
            else
                return null;
        };
    };
    return ExistsVaildator;
}());

//# sourceMappingURL=ExistsVaildator.js.map

/***/ }),

/***/ 1605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_services_auth_services__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_url_services_api_url_services__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_MyAppSharedSettings__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__validators_ExistsVaildator__ = __webpack_require__(1185);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, authServices, global, ApiUrlServices, conf, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.authServices = authServices;
        this.global = global;
        this.ApiUrlServices = ApiUrlServices;
        this.conf = conf;
        this.formBuilder = formBuilder;
        this.registerCredentials = { userName: '', password: '' };
        this.myForm = this.formBuilder.group({
            default_api_url: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */](this.default_api_url),
            userName: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */](''),
            password: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */](''),
            confirm_password: new __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_7__validators_ExistsVaildator__["a" /* ExistsVaildator */].EquieFactory('password')),
        });
        this.LoadData(true);
    }
    RegisterPage.prototype.openNavApiUrlPage = function () {
        this.navCtrl.setRoot("ApiUrlPage", {
            parent_page: this,
            parent_page_name: "RegisterPage",
        });
    };
    RegisterPage.prototype.onChangeObj = function (newObj) {
        console.log(newObj);
        this.default_api_url = newObj;
        this.default_api_url.is_default = true;
        this.ApiUrlServices.PostPutAsync(this.default_api_url, "PUT");
        this.conf.API_URL = this.default_api_url.url;
        this.conf.is_url_forward = this.default_api_url.is_url_forward;
    };
    RegisterPage.prototype.LoadData = function (init) {
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
                        if (_this.data_list != null) {
                            var index = _this.data_list.findIndex(function (d) { return d.is_default === true; });
                            _this.default_api_url = _this.data_list[index];
                            _this.conf.API_URL = _this.default_api_url.url;
                            _this.conf.is_url_forward = _this.default_api_url.is_url_forward;
                        }
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
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.login = function () {
        this.navCtrl.push('LoginPage');
    };
    RegisterPage.prototype.register = function () {
        var _this = this;
        this.global.createLoader();
        this.global.loading.present().then(function () {
            _this.authServices
                .registerAsync(_this.registerCredentials)
                .subscribe(function (data) {
                _this.global.dismissLoading();
                if (data.DidError === false) {
                    _this.global.showPopup(data.Message, data.Message);
                    _this.navCtrl.setRoot("HomePage");
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
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\register\register.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>註冊</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="login-content" padding>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-12 col-sm-2 col-md-3 col-lg-4>\n      </ion-col>\n      <ion-col col-12 col-sm-8 col-md-6 col-lg-4>\n        <div class="login-box">\n          <form [formGroup]="myForm">\n            <ion-row>\n              <ion-col>\n                <ion-list inset>\n                    <ion-item>\n                        <ion-select  (ngModelChange)="onChangeObj($event)" formControlName="default_api_url">\n                          <ion-option [value]="i" *ngFor="let i of data_list" [selected]="i.id==default_api_url.id " >{{i.disp_name}}</ion-option>\n                        </ion-select>\n                      </ion-item>\n                  <ion-item>\n                    <ion-input type="text" placeholder="帳號" formControlName="userName"  [(ngModel)]="registerCredentials.userName" required\n                      minlength="5"></ion-input>\n                  </ion-item>\n                  <div *ngIf="myForm.get(\'userName\').hasError(\'required\') &&  myForm.controls[\'userName\'].touched" class="error-message">\n                      帳號不能為空白\n\n                  </div>\n                  <div *ngIf="myForm.get(\'userName\').hasError(\'minlength\') &&  myForm.controls[\'userName\'].touched" class="error-message">\n                      最少為5碼\n                    </div>\n\n                  <ion-item>\n                    <ion-input type="password" placeholder="密碼" formControlName="password"   [(ngModel)]="registerCredentials.password"\n                      required minlength="6"></ion-input>\n                  </ion-item>\n\n                  <div *ngIf="myForm.get(\'password\').hasError(\'required\') &&  myForm.controls[\'password\'].touched" class="error-message">\n                    密碼不能為空白\n                  </div>\n                  <div *ngIf="myForm.get(\'password\').hasError(\'minlength\') &&  myForm.controls[\'password\'].touched" class="error-message">\n                    最少為6碼\n                  </div>\n\n                  <ion-item>\n                    <ion-input type="password" placeholder="確認密碼" formControlName="confirm_password"  [(ngModel)]="confirm_password"\n                      required minlength="6"></ion-input>\n                  </ion-item>\n\n                  <div *ngIf="myForm.get(\'confirm_password\').hasError(\'required\') &&  myForm.controls[\'confirm_password\'].touched" class="error-message">\n                    密碼不能為空白\n                  </div>\n                  <div *ngIf="myForm.get(\'confirm_password\').hasError(\'minlength\') &&  myForm.controls[\'confirm_password\'].touched" class="error-message">\n                    最少為6碼\n                  </div>\n                  <div *ngIf="myForm.get(\'confirm_password\').hasError(\'EquieFactory\') &&  myForm.controls[\'confirm_password\'].touched" class="error-message">\n                    密碼必須與確認密碼相同\n                  </div>\n\n\n                </ion-list>\n              </ion-col>\n            </ion-row>\n\n            <ion-row>\n\n              <ion-col>\n                  <div [ngClass]="[\'command_center\']">\n                      <!-- <button ion-button class="submit-btn" full (click)="login()" [disabled]="!registerForm.form.valid">登入</button>\n\n                      <button ion-button class="register-btn" block clear (click)="createAccount()">註冊</button> -->\n                      <button small title="確認" ion-button color="light" icon-left (click)="register()" [disabled]="!myForm.valid">\n                        <ion-icon name="checkmark-circle"></ion-icon>\n                      </button>\n                      <button small title="登入" ion-button color="dark" icon-left (click)="login()">\n                        <ion-icon name="person"></ion-icon>\n                      </button>\n                      <button small title="遠端伺服器設定" ion-button color="secondary" icon-left (click)="openNavApiUrlPage()">\n                        <ion-icon name="settings"></ion-icon>\n                      </button>\n                    </div>\n                <!-- <button ion-button class="submit-btn" full (click)="register()" [disabled]="!registerForm.form.valid">確認</button>\n                <button ion-button class="login-btn" block clear (click)="login()">登入</button> -->\n              </ion-col>\n            </ion-row>\n          </form>\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-2 col-md-3 col-lg-4>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_services_auth_services__["a" /* AuthServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__components_global_global__["a" /* GlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_4__providers_api_url_services_api_url_services__["a" /* ApiUrlServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_5__Model_MyAppSharedSettings__["a" /* MyAppSharedSettings */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 703:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(1605);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ })

});
//# sourceMappingURL=279.js.map