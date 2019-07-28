webpackJsonp([294],{

/***/ 1538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobLoopAddPwdModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_ViewModel_JobLoopViewModel__ = __webpack_require__(934);
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
var JobLoopAddPwdModalPage = /** @class */ (function () {
    function JobLoopAddPwdModalPage(navCtrl, navParams, viewCtrl, loadingCtrl, global, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.modalCtrl = modalCtrl;
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.file_type_key = navParams.data.file_type_key;
        this.item = new __WEBPACK_IMPORTED_MODULE_4__Model_ViewModel_JobLoopViewModel__["a" /* JobLoopViewModel */]();
        this.item.loop_seq = navParams.data.item.loop_seq;
        this.item.ssis_job_no = navParams.data.item.ssis_job_no;
        this.item.job01 = navParams.data.item.job01;
        this.item.job02 = navParams.data.item.job02;
        this.item.job03 = navParams.data.item.job03;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.CanEditLoopJob = navParams.data.CanEditLoopJob;
        this.title = __WEBPACK_IMPORTED_MODULE_3__Model_String__["a" /* String */].Format("{0}", navParams.data.item.loop_seq);
    }
    JobLoopAddPwdModalPage.prototype.Save = function () {
        if (this.confirm_password != this.item.pwd) {
            this.global.showPopup("密碼錯誤", "確認密碼不一致");
            return;
        }
        this.viewCtrl.dismiss(this.item);
    };
    JobLoopAddPwdModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    JobLoopAddPwdModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad JobLoopAddZipPwdModalPage");
    };
    JobLoopAddPwdModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: "page-job-loop-add-pwd-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\job-loop-add-pwd-modal\job-loop-add-pwd-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n\n    <ion-row *ngIf="mode==\'PUT\'">\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>迴圈序號</ion-label>\n          <ion-input type="number" [disabled]=true name="loop_seq" #file_loop_seq="ngModel" [(ngModel)]="item.loop_seq" required></ion-input>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-md-4 >\n        <ion-item>\n          <ion-label stacked>JOB01</ion-label>\n          <ion-input type="text" [disabled]=true name="job01" #job01="ngModel" [(ngModel)]="item.job01" maxlength="50"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-md-4>\n        <ion-item>\n          <ion-label stacked>JOB02</ion-label>\n          <ion-input type="text" [disabled]=true name="job02" #job02="ngModel" [(ngModel)]="item.job02" maxlength="50"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-md-4>\n        <ion-item>\n          <ion-label stacked>JOB03</ion-label>\n          <ion-input type="text" [disabled]=true name="job03" #job03="ngModel" [(ngModel)]="item.job03" maxlength="50"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>密碼</ion-label>\n          <ion-input type="password" [disabled]="CanEditLoopJob==false" name="pwd" #pwd="ngModel" [(ngModel)]="item.pwd"></ion-input>\n\n        </ion-item>\n        <div *ngIf="pwd.errors && pwd.touched" class="error-message">\n          密碼不能為空白\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>確認密碼</ion-label>\n          <ion-input type="password" [disabled]="CanEditLoopJob==false" name="confirm_password" #confirmpassword="ngModel" [(ngModel)]="confirm_password" required></ion-input>\n        </ion-item>\n\n        <div *ngIf="confirmpassword.errors && confirmpassword.touched" class="error-message">\n          密碼不能為空白\n        </div>\n\n\n      </ion-col>\n\n    </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditLoopJob==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n            (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\job-loop-add-pwd-modal\job-loop-add-pwd-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__components_global_global__["a" /* GlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], JobLoopAddPwdModalPage);
    return JobLoopAddPwdModalPage;
}());

//# sourceMappingURL=job-loop-add-pwd-modal.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobLoopAddPwdModalPageModule", function() { return JobLoopAddPwdModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_loop_add_pwd_modal__ = __webpack_require__(1538);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JobLoopAddPwdModalPageModule = /** @class */ (function () {
    function JobLoopAddPwdModalPageModule() {
    }
    JobLoopAddPwdModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__job_loop_add_pwd_modal__["a" /* JobLoopAddPwdModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__job_loop_add_pwd_modal__["a" /* JobLoopAddPwdModalPage */]),
            ],
        })
    ], JobLoopAddPwdModalPageModule);
    return JobLoopAddPwdModalPageModule;
}());

//# sourceMappingURL=job-loop-add-pwd-modal.module.js.map

/***/ }),

/***/ 934:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobLoopViewModel; });
/**
 * 作業回圈ViewModel
 *
 * @public
 * @class JobLoopViewModel
 */
var JobLoopViewModel = /** @class */ (function () {
    function JobLoopViewModel() {
    }
    return JobLoopViewModel;
}());

//# sourceMappingURL=JobLoopViewModel.js.map

/***/ })

});
//# sourceMappingURL=294.js.map