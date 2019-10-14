webpackJsonp([336],{

/***/ 1542:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_JobViewModel__ = __webpack_require__(280);
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
 * Generated class for the JobModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JobAddEditModalPage = /** @class */ (function () {
    function JobAddEditModalPage(navCtrl, navParams, viewCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_JobViewModel__["a" /* JobViewModel */]();
        this.item.ssis_job_no = navParams.data.item.ssis_job_no;
        this.item.ssis_job_name = navParams.data.item.ssis_job_name;
        this.item.last_exec_status_key = navParams.data.item.last_exec_status_key;
        this.item.last_exec_date = navParams.data.item.last_exec_date;
        this.item.is_active = navParams.data.item.is_active;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.item.retry_cnt = navParams.data.item.retry_cnt; //重試次數
        this.item.delay_min = navParams.data.item.delay_min; //延遲分鐘數
        this.CanEditJob = navParams.data.CanEditJob;
        this.mode = navParams.data.mode;
        this.title = "作業設定";
    }
    JobAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    JobAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    JobAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad JobModalPage");
    };
    JobAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-job-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\job-add-edit-modal\job-add-edit-modal.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content padding>\n    <form #Form="ngForm">\n\n      <ion-row>\n        <ion-col col-12 col-sm-8 >\n          <ion-item>\n            <ion-label stacked>作業編號</ion-label>\n            <ion-input type="text"  name="ssis_job_no" [disabled]="CanEditJob==false || mode==\'PUT\'" #ssis_job_no="ngModel" [(ngModel)]="item.ssis_job_no" required></ion-input>\n          </ion-item>\n          <div *ngIf="ssis_job_no.errors && ssis_job_no.touched" class="error-message">\n              作業編號不能為空白\n          </div>\n        </ion-col>\n        <ion-col col-12 col-sm-4>\n            <ion-item>\n              <ion-label stacked>啟用</ion-label>\n              <ion-checkbox name="is_active" [disabled]="CanEditJob==false" [(ngModel)]="item.is_active"></ion-checkbox>\n            </ion-item>\n\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label stacked>作業名稱</ion-label>\n              <ion-input type="text"  name="ssis_job_name" [disabled]="CanEditJob==false" #ssis_job_name="ngModel" [(ngModel)]="item.ssis_job_name" required></ion-input>\n            </ion-item>\n            <div *ngIf="ssis_job_name.errors && ssis_job_name.touched" class="error-message">\n                作業名稱不能為空白\n            </div>\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n            <ion-col col-12 col-sm-6 >\n                <ion-item>\n                  <ion-label stacked>異常重試次數</ion-label>\n                  <ion-input type="number"  name="retry_cnt" [disabled]="CanEditJob==false" #retry_cnt="ngModel" [(ngModel)]="item.retry_cnt" required></ion-input>\n                </ion-item>\n                <div *ngIf="retry_cnt.errors && retry_cnt.touched" class="error-message">\n                    異常重試次數不能為空白\n                </div>\n              </ion-col>\n          <ion-col col-12 col-sm-6 >\n            <ion-item>\n              <ion-label stacked>延遲分鐘數</ion-label>\n              <ion-input type="number"  name="delay_min" [disabled]="CanEditJob==false" #delay_min="ngModel" [(ngModel)]="item.delay_min" required></ion-input>\n              <div *ngIf="delay_min.errors && delay_min.touched" class="error-message">\n                  延遲分鐘數不能為空白\n              </div>\n            </ion-item>\n\n          </ion-col>\n        </ion-row>\n\n    </form>\n\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-row>\n        <ion-col>\n          <div [ngClass]="[\'command\']">\n            <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n              <ion-icon name="backspace"></ion-icon>\n            </button>\n            <button [disabled]="CanEditJob==false" small title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n              <ion-icon name="checkmark-circle"></ion-icon>\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\job-add-edit-modal\job-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */]])
    ], JobAddEditModalPage);
    return JobAddEditModalPage;
}());

//# sourceMappingURL=job-add-edit-modal.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobAddEditModalPageModule", function() { return JobAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_add_edit_modal__ = __webpack_require__(1542);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JobAddEditModalPageModule = /** @class */ (function () {
    function JobAddEditModalPageModule() {
    }
    JobAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__job_add_edit_modal__["a" /* JobAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__job_add_edit_modal__["a" /* JobAddEditModalPage */]),
            ],
        })
    ], JobAddEditModalPageModule);
    return JobAddEditModalPageModule;
}());

//# sourceMappingURL=job-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=336.js.map