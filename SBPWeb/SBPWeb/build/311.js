webpackJsonp([311],{

/***/ 1283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatchExecProgramAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_ExecGroupFunctionViewModel__ = __webpack_require__(925);
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
 * Generated class for the programModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BatchExecProgramAddEditModalPage = /** @class */ (function () {
    function BatchExecProgramAddEditModalPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.title = "批次程式";
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_ExecGroupFunctionViewModel__["a" /* ExecGroupFunctionViewModel */]();
        this.item.program_func_no = navParams.data.item.program_func_no;
        this.item.ssis_program_set_no = navParams.data.item.ssis_program_set_no;
        this.item.exec_group = navParams.data.item.exec_group;
        this.item.note = navParams.data.item.note;
        this.item.is_active = navParams.data.item.is_active;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.item.ssis_program_set_desc = navParams.data.item.ssis_program_set_desc;
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.mode = navParams.data.mode;
        console.log(this.CanEditBatch);
    }
    BatchExecProgramAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    BatchExecProgramAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    BatchExecProgramAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ProgramModalPage");
    };
    BatchExecProgramAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-batch-exec-program-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\batch-exec-program-add-edit-modal\batch-exec-program-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  padding>\n    <form #Form="ngForm">\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label stacked > 程式功能編號</ion-label>\n              <ion-input type="text" disabled=true name="program_func_no" #program_func_no="ngModel" [(ngModel)]="item.program_func_no"\n                required></ion-input>\n\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label stacked > 程式編號</ion-label>\n              <ion-input type="text" disabled=true name="ssis_program_set_no" #ssis_program_set_no="ngModel" [(ngModel)]="item.ssis_program_set_no"\n                required></ion-input>\n\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n                <ion-label stacked >程式說明</ion-label>\n              <ion-input type="text" [disabled]=true name="ssis_program_set_desc" #ssis_program_set_desc="ngModel" [(ngModel)]="item.ssis_program_set_desc"\n                required></ion-input>\n            </ion-item>\n\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n                <ion-label stacked >轉檔群組</ion-label>\n              <ion-input type="text" [disabled]=true name="exec_group" #exec_group="ngModel" [(ngModel)]="item.exec_group"\n                required></ion-input>\n            </ion-item>\n\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label stacked>啟用</ion-label>\n            <ion-checkbox [disabled]="CanEditBatch==false" name="is_active" #is_active="ngModel" [(ngModel)]="item.is_active"></ion-checkbox>\n          </ion-item>\n\n        </ion-col>\n      </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label stacked>備註</ion-label>\n              <ion-textarea rows=2 [disabled]="CanEditBatch==false" name="note" #note="ngModel" [(ngModel)]="item.note"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditBatch==false"  ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\batch-exec-program-add-edit-modal\batch-exec-program-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], BatchExecProgramAddEditModalPage);
    return BatchExecProgramAddEditModalPage;
}());

//# sourceMappingURL=batch-exec-program-add-edit-modal.js.map

/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchExecProgramAddEditModalPageModule", function() { return BatchExecProgramAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__batch_exec_program_add_edit_modal__ = __webpack_require__(1283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BatchExecProgramAddEditModalPageModule = /** @class */ (function () {
    function BatchExecProgramAddEditModalPageModule() {
    }
    BatchExecProgramAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__batch_exec_program_add_edit_modal__["a" /* BatchExecProgramAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__batch_exec_program_add_edit_modal__["a" /* BatchExecProgramAddEditModalPage */]),
            ],
        })
    ], BatchExecProgramAddEditModalPageModule);
    return BatchExecProgramAddEditModalPageModule;
}());

//# sourceMappingURL=batch-exec-program-add-edit-modal.module.js.map

/***/ }),

/***/ 925:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExecGroupFunctionViewModel; });
var ExecGroupFunctionViewModel = /** @class */ (function () {
    function ExecGroupFunctionViewModel() {
    }
    return ExecGroupFunctionViewModel;
}());

//# sourceMappingURL=ExecGroupFunctionViewModel.js.map

/***/ })

});
//# sourceMappingURL=311.js.map