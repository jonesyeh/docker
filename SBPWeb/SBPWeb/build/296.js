webpackJsonp([296],{

/***/ 1077:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobStepLoopViewModel; });
var JobStepLoopViewModel = /** @class */ (function () {
    function JobStepLoopViewModel() {
    }
    return JobStepLoopViewModel;
}());

//# sourceMappingURL=JobStepLoopViewModel.js.map

/***/ }),

/***/ 1566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobStepLoopAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_JobStepLoopViewModel__ = __webpack_require__(1077);
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
 * Generated class for the JobStepLoopModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JobStepLoopAddEditModalPage = /** @class */ (function () {
    function JobStepLoopAddEditModalPage(navCtrl, navParams, viewCtrl, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_JobStepLoopViewModel__["a" /* JobStepLoopViewModel */]();
        this.CanEditJob = navParams.data.CanEditJob;
        this.mode = navParams.data.mode;
        this.title = navParams.data.item.job_step_id;
        this.item.job_step_loop_id = navParams.data.item.job_step_loop_id;
        this.item.job_step_id = navParams.data.item.job_step_id;
        this.item.success_step = navParams.data.item.success_step;
        this.item.fail_step = navParams.data.item.fail_step;
        this.item.is_active = navParams.data.item.is_active;
        this.item.job01 = navParams.data.item.job01;
        this.item.job02 = navParams.data.item.job02;
        this.item.job03 = navParams.data.item.job03;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
    }
    JobStepLoopAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    JobStepLoopAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    JobStepLoopAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad JobStepLoopModalPage");
    };
    JobStepLoopAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-job-step-loop-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\job-step-loop-add-edit-modal\job-step-loop-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label stacked>作業步驟回圈編號</ion-label>\n          <ion-input type="text"  name="job_step_loop_id" [disabled]="CanEditJob==false || mode==\'PUT\'" #job_step_loop_id="ngModel" [(ngModel)]="item.job_step_loop_id" required></ion-input>\n        </ion-item>\n        <div *ngIf="job_step_loop_id.errors && job_step_loop_id.touched" class="error-message">\n          作業步驟回圈編號不能為空白\n        </div>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n\n      <ion-col >\n        <ion-item>\n          <ion-label stacked>啟用</ion-label>\n          <ion-checkbox name="is_active" [disabled]="CanEditJob==false" [(ngModel)]="item.is_active"></ion-checkbox>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Job01</ion-label>\n          <ion-input [disabled]="CanEditJob==false" type="text" name="job01" #job01="ngModel" [(ngModel)]="item.job01"></ion-input>\n        </ion-item>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Job02</ion-label>\n          <ion-input [disabled]="CanEditJob==false" type="text" name="job02" #job02="ngModel" [(ngModel)]="item.job02"></ion-input>\n        </ion-item>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Job03</ion-label>\n          <ion-input [disabled]="CanEditJob==false" type="text" name="job03" #job03="ngModel" [(ngModel)]="item.job03"></ion-input>\n        </ion-item>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>成功後步驟(0:停止、1:下一步、其他)</ion-label>\n          <ion-input type="number" min=0 max=100 [disabled]="CanEditJob==false"   name="success_step" #success_step="ngModel" [(ngModel)]="item.success_step"\n            ></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>失敗後步驟(0:停止、1:下一步、其他)</ion-label>\n          <ion-input type="number"  min=0 max=100 [disabled]="CanEditJob==false"   name="fail_step" #fail_step="ngModel" [(ngModel)]="item.fail_step"\n            ></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button [disabled]="CanEditJob==false" small title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\job-step-loop-add-edit-modal\job-step-loop-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ModalController */]])
    ], JobStepLoopAddEditModalPage);
    return JobStepLoopAddEditModalPage;
}());

//# sourceMappingURL=job-step-loop-add-edit-modal.js.map

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobStepLoopAddEditModalPageModule", function() { return JobStepLoopAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_step_loop_add_edit_modal__ = __webpack_require__(1566);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JobStepLoopAddEditModalPageModule = /** @class */ (function () {
    function JobStepLoopAddEditModalPageModule() {
    }
    JobStepLoopAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__job_step_loop_add_edit_modal__["a" /* JobStepLoopAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__job_step_loop_add_edit_modal__["a" /* JobStepLoopAddEditModalPage */]),
            ],
        })
    ], JobStepLoopAddEditModalPageModule);
    return JobStepLoopAddEditModalPageModule;
}());

//# sourceMappingURL=job-step-loop-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=296.js.map