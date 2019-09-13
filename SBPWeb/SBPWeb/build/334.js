webpackJsonp([334],{

/***/ 1558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobProcessedSqlAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_JobProcessedSqlViewModel__ = __webpack_require__(140);
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
 * Generated class for the JobProcessedSqlModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JobProcessedSqlAddEditModalPage = /** @class */ (function () {
    function JobProcessedSqlAddEditModalPage(navCtrl, navParams, viewCtrl, loadingCtrl, modalCtrl, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.global = global;
        this.sql_help = "\n  \u8B8A\u6578\u8AAA\u660E\uFF1A\n  {ERR_MSG}=\u7570\u5E38\u8A0A\u606F,\n  {ERR_MSG_SEQ}=\u7570\u5E38\u8A0A\u606F\u7DE8\u865F,\n  {SSIS_JOB_NO}=\u4F5C\u696D\u7DE8\u865F,\n  {JOBDESC}=\u4F5C\u696D\u63CF\u8FF0,\n  {JOB01},{JOB02},{JOB03}=\u4F5C\u696D\u8FF4\u5708\u53C3\u6578,\n   ";
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_JobProcessedSqlViewModel__["a" /* JobProcessedSqlViewModel */]();
        this.item.ssis_job_no = navParams.data.item.ssis_job_no; //SSIS作業編號
        this.item.exec_status_key = navParams.data.item.exec_status_key; //執行狀態主鍵
        this.item.sql_statement = navParams.data.item.sql_statement; //sql語法
        this.item.is_active = navParams.data.item.is_active; //啟用註記
        this.item.creator = navParams.data.item.creator; //建立者
        this.item.create_time = navParams.data.item.create_time; //建立時間
        this.item.modifier = navParams.data.item.modifier; //最後更新者
        this.item.last_update_time = navParams.data.item.last_update_time; //最後更新時間
        this.item.exec_status = navParams.data.item.exec_status; //執行狀態
        this.CanEditJob = navParams.data.CanEditJob;
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.title = this.item.ssis_job_no;
    }
    JobProcessedSqlAddEditModalPage.prototype.SelectExecStatus = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.exec_status_key,
            code_key: "012|C,012|F,012|S",
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.exec_status_key = select_data.code_key;
            _this.item.exec_status = select_data.code_desc;
        });
        modal.present();
    };
    JobProcessedSqlAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    JobProcessedSqlAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    JobProcessedSqlAddEditModalPage.prototype.Help = function () {
        var _this = this;
        this.global.createLoader();
        this.global.loading.present().then(function () {
            _this.global.showMessage("SQL語法說明", _this.sql_help);
        });
    };
    JobProcessedSqlAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad JobProcessedSqlModalPage");
    };
    JobProcessedSqlAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-job-processed-sql-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\job-processed-sql-add-edit-modal\job-processed-sql-add-edit-modal.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content padding>\n    <form #Form="ngForm">\n        <ion-row>\n            <ion-col col-12 col-sm-4>\n              <ion-item>\n                <ion-label stacked>執行狀態</ion-label>\n                <ion-input type="text" readonly=true [disabled]="CanEditJob==false || mode==\'PUT\'" name="exec_status_key" #exec_status_key="ngModel" [(ngModel)]="item.exec_status_key"\n                  required></ion-input>\n\n                <button ion-button outline item-end *ngIf="CanEditJob==true && mode==\'POST\'" icon-right (click)="SelectExecStatus()">\n                  <ion-icon name="arrow-dropdown"></ion-icon>\n                </button>\n              </ion-item>\n\n              <div *ngIf="exec_status_key.errors && exec_status_key.touched " class="error-message">\n                執行狀態不能為空白\n              </div>\n            </ion-col>\n            <ion-col col-12 col-sm-4>\n              <ion-item>\n                <ion-label stacked>執行狀態</ion-label>\n                <ion-input type="text" [disabled]=true name="exec_status" #exec_status="ngModel" [(ngModel)]="item.exec_status" required></ion-input>\n              </ion-item>\n            </ion-col>\n            <ion-col col-12 col-sm-4>\n                <ion-item>\n                  <ion-label stacked>啟用</ion-label>\n                  <ion-checkbox name="is_active" [disabled]="CanEditJob==false" [(ngModel)]="item.is_active"></ion-checkbox>\n                </ion-item>\n\n              </ion-col>\n          </ion-row>\n      <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label stacked>SQL</ion-label>\n              <ion-textarea rows=20 [disabled]="CanEditJob==false" name="sql_statement" #note="ngModel" [(ngModel)]="item.sql_statement"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n    </form>\n\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-row>\n        <ion-col>\n          <div [ngClass]="[\'command\']">\n            <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n              <ion-icon name="backspace"></ion-icon>\n            </button>\n            <button [disabled]="CanEditJob==false" small title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n              <ion-icon name="checkmark-circle"></ion-icon>\n            </button>\n            <button small title="複製SQL語法" ion-button color="dark" icon-left (click)="global.copyTextToClipboard(item.sql_statement)">\n            <ion-icon name="copy"></ion-icon>\n          </button>\n          <button small title="變數說明" [disabled]="CanEditJob==false" ion-button color="dark"  icon-left\n          (click)="Help()">\n          <ion-icon name="help"></ion-icon>\n        </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\job-processed-sql-add-edit-modal\job-processed-sql-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__components_global_global__["a" /* GlobalComponent */]])
    ], JobProcessedSqlAddEditModalPage);
    return JobProcessedSqlAddEditModalPage;
}());

//# sourceMappingURL=job-processed-sql-add-edit-modal.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobProcessedSqlAddEditModalPageModule", function() { return JobProcessedSqlAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_processed_sql_add_edit_modal__ = __webpack_require__(1558);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JobProcessedSqlAddEditModalPageModule = /** @class */ (function () {
    function JobProcessedSqlAddEditModalPageModule() {
    }
    JobProcessedSqlAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__job_processed_sql_add_edit_modal__["a" /* JobProcessedSqlAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__job_processed_sql_add_edit_modal__["a" /* JobProcessedSqlAddEditModalPage */]),
            ],
        })
    ], JobProcessedSqlAddEditModalPageModule);
    return JobProcessedSqlAddEditModalPageModule;
}());

//# sourceMappingURL=job-processed-sql-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=334.js.map