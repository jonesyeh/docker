webpackJsonp([322],{

/***/ 1700:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_UserViewModel__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_global_global__ = __webpack_require__(119);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the UserModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserAddEditModalPage = /** @class */ (function () {
    function UserAddEditModalPage(navCtrl, navParams, viewCtrl, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.global = global;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_UserViewModel__["a" /* UserViewModel */]();
        this.item.userName = this.navParams.data.item.userName;
        this.item.Email = this.navParams.data.item.Email;
        this.mode = this.navParams.data.mode;
        this.change_mode = this.navParams.data.change_mode;
        this.CanEditAuth = this.navParams.data.CanEditAuth;
    }
    UserAddEditModalPage.prototype.Save = function () {
        if (this.confirm_password != this.item.password) {
            this.global.showPopup("密碼錯誤", "確認密碼不一致");
            return;
        }
        if (this.mode === "POST") {
            this.item.roleName = [];
            this.item.roleName.push("users");
        }
        if (this.change_mode === "detail")
            this.item.password = "";
        console.log(this.item);
        this.viewCtrl.dismiss(this.item);
    };
    UserAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    UserAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserModalPage');
    };
    UserAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user-add-edit-modal',template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\user-add-edit-modal\user-add-edit-modal.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content  padding>\n      <form #registerForm="ngForm">\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label stacked >使用者名稱</ion-label>\n                <ion-input type="text" [disabled]="CanEditAuth==false" [disabled]="mode==\'PUT\'" name="userName" #userName="ngModel" [(ngModel)]="item.userName"\n                  required></ion-input>\n              </ion-item>\n              <div *ngIf="userName.errors?.required && userName.touched" class="error-message">\n                  使用者名稱不能為空白\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                  <ion-label stacked >電子郵件</ion-label>\n                <ion-input type="email" [disabled]="CanEditAuth==false" name="Email" #Email="ngModel"  [(ngModel)]="item.Email"></ion-input>\n              </ion-item>\n              <div *ngIf="Email.errors && Email.touched" class="error-message">\n                  不是有效的電子郵件\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row *ngIf="change_mode==\'password\'" >\n              <ion-col>\n                <ion-item>\n                    <ion-label stacked >密碼</ion-label>\n                    <ion-input type="password"  name="password" #password="ngModel" [(ngModel)]="item.password" required minlength="6"></ion-input>\n                </ion-item>\n                 <div  *ngIf="password.errors && password.errors.required && password.touched"  class="error-message">\n                    密碼不能為空白\n                  </div>\n                  <div  *ngIf="password.errors && password.errors.minlength && password.touched" class="error-message">\n                    最少為6碼\n                  </div>\n              </ion-col>\n            </ion-row>\n            <ion-row *ngIf="change_mode==\'password\'" >\n                <ion-col>\n                    <ion-item>\n                        <ion-label stacked >確認密碼</ion-label>\n                        <ion-input type="password"   name="confirm_password" #confirmpassword="ngModel" [(ngModel)]="confirm_password" required minlength="6"></ion-input>\n                        </ion-item>\n                       <div  *ngIf="confirmpassword.errors && confirmpassword.errors.required && confirmpassword.touched"  class="error-message">\n                          密碼不能為空白\n                        </div>\n                        <div  *ngIf="confirmpassword.errors && confirmpassword.errors.minlength && confirmpassword.touched" class="error-message">\n                          最少為6碼\n                        </div>\n\n                </ion-col>\n              </ion-row>\n\n\n        </form>\n\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-row>\n        <ion-col>\n          <div [ngClass]="[\'command\']">\n            <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n              <ion-icon name="backspace"></ion-icon>\n            </button>\n            <button small title="確認" [disabled]="CanEditAuth==false" ion-button color="dark" [disabled]="!registerForm.form.valid" icon-left (click)="Save()">\n              <ion-icon name="checkmark-circle"></ion-icon>\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\user-add-edit-modal\user-add-edit-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__components_global_global__["a" /* GlobalComponent */]])
    ], UserAddEditModalPage);
    return UserAddEditModalPage;
}());

//# sourceMappingURL=user-add-edit-modal.js.map

/***/ }),

/***/ 774:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddEditModalPageModule", function() { return UserAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_add_edit_modal__ = __webpack_require__(1700);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserAddEditModalPageModule = /** @class */ (function () {
    function UserAddEditModalPageModule() {
    }
    UserAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_add_edit_modal__["a" /* UserAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_add_edit_modal__["a" /* UserAddEditModalPage */]),
            ],
        })
    ], UserAddEditModalPageModule);
    return UserAddEditModalPageModule;
}());

//# sourceMappingURL=user-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=322.js.map