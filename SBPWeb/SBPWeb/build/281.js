webpackJsonp([281],{

/***/ 1082:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZipFileLoopPwdViewModel; });
var ZipFileLoopPwdViewModel = /** @class */ (function () {
    function ZipFileLoopPwdViewModel() {
    }
    return ZipFileLoopPwdViewModel;
}());

//# sourceMappingURL=ZipFileLoopPwdViewModel.js.map

/***/ }),

/***/ 1688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ZipFileLoopPwdAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_ViewModel_ZipFileLoopPwdViewModel__ = __webpack_require__(1082);
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
 * Generated class for the ZipFileLoopPwdModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ZipFileLoopPwdAddEditModalPage = /** @class */ (function () {
    function ZipFileLoopPwdAddEditModalPage(navCtrl, navParams, viewCtrl, loadingCtrl, global, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.modalCtrl = modalCtrl;
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.file_type_key = navParams.data.file_type_key;
        this.item = new __WEBPACK_IMPORTED_MODULE_3__Model_ViewModel_ZipFileLoopPwdViewModel__["a" /* ZipFileLoopPwdViewModel */]();
        this.item.file_loop_seq = navParams.data.item.file_loop_seq;
        this.item.zip_seq = navParams.data.item.zip_seq;
        this.item.job01 = navParams.data.item.job01;
        this.item.job02 = navParams.data.item.job02;
        this.item.job03 = navParams.data.item.job03;
        this.item.lc01 = navParams.data.item.lc01;
        this.item.lc02 = navParams.data.item.lc02;
        this.item.lc03 = navParams.data.item.lc03;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.title = navParams.data.title;
    }
    ZipFileLoopPwdAddEditModalPage.prototype.Save = function () {
        if (this.confirm_password != this.item.pwd) {
            this.global.showPopup("密碼錯誤", "確認密碼不一致");
            return;
        }
        this.viewCtrl.dismiss(this.item);
    };
    ZipFileLoopPwdAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ZipFileLoopPwdAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ZipFileLoopPwdModalPage");
    };
    ZipFileLoopPwdAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: "page-zip-file-loop-pwd-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\zip-file-loop-pwd-add-edit-modal\zip-file-loop-pwd-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n\n    <ion-row *ngIf="mode==\'PUT\'">\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>迴圈序號</ion-label>\n          <ion-input type="number" [disabled]=true name="file_loop_seq" #file_loop_seq="ngModel" [(ngModel)]="item.file_loop_seq" required></ion-input>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-md-4 >\n        <ion-item>\n          <ion-label stacked>JOB01</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="job01" #job01="ngModel" [(ngModel)]="item.job01" maxlength="50"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-md-4>\n        <ion-item>\n          <ion-label stacked>JOB02</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="job02" #job02="ngModel" [(ngModel)]="item.job02" maxlength="50"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-md-4>\n        <ion-item>\n          <ion-label stacked>JOB03</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="job03" #job03="ngModel" [(ngModel)]="item.job03" maxlength="50"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-md-4>\n        <ion-item>\n          <ion-label stacked>LC01</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="lc01" #lc01="ngModel" [(ngModel)]="item.lc01" maxlength="50"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-12 col-md-4>\n        <ion-item>\n          <ion-label stacked>LC02</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="lc02" #lc02="ngModel" [(ngModel)]="item.lc02" maxlength="50"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-12 col-md-4>\n        <ion-item>\n          <ion-label stacked>LC03</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="lc03" #lc03="ngModel" [(ngModel)]="item.lc03" maxlength="50"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>密碼</ion-label>\n          <ion-input [disabled]="CanEditBatch==false" type="password" name="zip_pwd" required #zip_pwd="ngModel" [(ngModel)]="item.pwd"></ion-input>\n\n        </ion-item>\n        <div *ngIf="zip_pwd.errors && zip_pwd.touched" class="error-message">\n          密碼不能為空白\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>確認密碼</ion-label>\n          <ion-input [disabled]="CanEditBatch==false" type="password"  name="confirm_password" #confirmpassword="ngModel" [(ngModel)]="confirm_password" required></ion-input>\n        </ion-item>\n\n        <div *ngIf="confirmpassword.errors && confirmpassword.touched" class="error-message">\n          密碼不能為空白\n        </div>\n\n\n      </ion-col>\n\n    </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditBatch==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n            (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\zip-file-loop-pwd-add-edit-modal\zip-file-loop-pwd-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__components_global_global__["a" /* GlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], ZipFileLoopPwdAddEditModalPage);
    return ZipFileLoopPwdAddEditModalPage;
}());

//# sourceMappingURL=zip-file-loop-pwd-add-edit-modal.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZipFileLoopPwdAddEditModalPageModule", function() { return ZipFileLoopPwdAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__zip_file_loop_pwd_add_edit_modal__ = __webpack_require__(1688);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ZipFileLoopPwdAddEditModalPageModule = /** @class */ (function () {
    function ZipFileLoopPwdAddEditModalPageModule() {
    }
    ZipFileLoopPwdAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__zip_file_loop_pwd_add_edit_modal__["a" /* ZipFileLoopPwdAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__zip_file_loop_pwd_add_edit_modal__["a" /* ZipFileLoopPwdAddEditModalPage */]),
            ],
        })
    ], ZipFileLoopPwdAddEditModalPageModule);
    return ZipFileLoopPwdAddEditModalPageModule;
}());

//# sourceMappingURL=zip-file-loop-pwd-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=281.js.map