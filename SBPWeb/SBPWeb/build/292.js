webpackJsonp([292],{

/***/ 1065:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobStepViewModel; });
/**
 * 作業步驟ViewModel
 *
 * @public
 * @class JobStepViewModel
 */
var JobStepViewModel = /** @class */ (function () {
    function JobStepViewModel() {
    }
    return JobStepViewModel;
}());

//# sourceMappingURL=JobStepViewModel.js.map

/***/ }),

/***/ 1549:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobStepAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_JobStepViewModel__ = __webpack_require__(1065);
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
 * Generated class for the JobStepModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JobStepAddEditModalPage = /** @class */ (function () {
    function JobStepAddEditModalPage(navCtrl, navParams, viewCtrl, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_JobStepViewModel__["a" /* JobStepViewModel */]();
        this.CanEditJob = navParams.data.CanEditJob;
        this.mode = navParams.data.mode;
        this.title = navParams.data.item.ssis_job_no;
        this.item.program_func_desc = navParams.data.item.program_func_desc;
        this.item.program_type = navParams.data.item.program_type;
        this.item.job_step_id = navParams.data.item.job_step_id;
        this.item.ssis_job_no = navParams.data.item.ssis_job_no;
        this.item.program_func_no = navParams.data.item.program_func_no;
        this.item.step = navParams.data.item.step;
        this.item.success_step = navParams.data.item.success_step;
        this.item.fail_step = navParams.data.item.fail_step;
        this.item.last_exec_status_key = navParams.data.item.last_exec_status_key;
        this.item.last_exec_date = navParams.data.item.last_exec_date;
        this.item.is_active = navParams.data.item.is_active;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
    }
    JobStepAddEditModalPage.prototype.SelectBatchExecProgram = function () {
        var _this = this;
        var modal = this.modalCtrl.create("BatchExecProgramSelectModalPage", {
            select_item: this.item.program_func_no,
            is_filter: false
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.program_func_no = select_data.program_func_no;
            _this.item.program_func_desc = select_data.note;
            _this.item.program_type = select_data.ssis_program_set_no;
        });
        modal.present();
    };
    JobStepAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    JobStepAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    JobStepAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad JobStepModalPage");
    };
    JobStepAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-job-step-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\job-step-add-edit-modal\job-step-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label stacked>作業步驟編號</ion-label>\n          <ion-input type="text"  name="job_step_id" [disabled]="CanEditJob==false || mode==\'PUT\'" #job_step_id="ngModel" [(ngModel)]="item.job_step_id" required></ion-input>\n        </ion-item>\n        <div *ngIf="job_step_id.errors && job_step_id.touched" class="error-message">\n          作業步驟編號不能為空白\n        </div>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>步驟</ion-label>\n          <ion-input type="number" required min=1 max=100 [disabled]="CanEditJob==false"  name="step" #step="ngModel" [(ngModel)]="item.step"\n            ></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col >\n        <ion-item>\n          <ion-label stacked>啟用</ion-label>\n          <ion-checkbox name="is_active" required [disabled]="CanEditJob==false" [(ngModel)]="item.is_active"></ion-checkbox>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>執行程式</ion-label>\n          <ion-input type="text" required readonly=true  name="program_func_desc" #program_func_desc="ngModel" [(ngModel)]="item.program_func_desc"\n            ></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditJob==true" icon-right (click)="SelectBatchExecProgram()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>成功後步驟(0:停止、1:下一步、其他)</ion-label>\n          <ion-input type="number" required min=0 max=100 [disabled]="CanEditJob==false"   name="success_step" #success_step="ngModel" [(ngModel)]="item.success_step"\n            ></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>失敗後步驟(0:停止、1:下一步、其他)</ion-label>\n          <ion-input type="number" required min=0 max=100 [disabled]="CanEditJob==false"   name="fail_step" #fail_step="ngModel" [(ngModel)]="item.fail_step"\n            ></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button [disabled]="CanEditJob==false" small title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\job-step-add-edit-modal\job-step-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ModalController */]])
    ], JobStepAddEditModalPage);
    return JobStepAddEditModalPage;
}());

//# sourceMappingURL=job-step-add-edit-modal.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobStepAddEditModalPageModule", function() { return JobStepAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_step_add_edit_modal__ = __webpack_require__(1549);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JobStepAddEditModalPageModule = /** @class */ (function () {
    function JobStepAddEditModalPageModule() {
    }
    JobStepAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__job_step_add_edit_modal__["a" /* JobStepAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__job_step_add_edit_modal__["a" /* JobStepAddEditModalPage */]),
            ],
        })
    ], JobStepAddEditModalPageModule);
    return JobStepAddEditModalPageModule;
}());

//# sourceMappingURL=job-step-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=292.js.map