webpackJsonp([299],{

/***/ 1050:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileSsisConnParmViewModel; });
var FileSsisConnParmViewModel = /** @class */ (function () {
    function FileSsisConnParmViewModel() {
    }
    return FileSsisConnParmViewModel;
}());

//# sourceMappingURL=FileSsisConnParmViewModel.js.map

/***/ }),

/***/ 1483:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileSsisConnParmAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_FileSsisConnParmViewModel__ = __webpack_require__(1050);
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
 * Generated class for the FileSsisConnParmModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FileSsisConnParmAddEditModalPage = /** @class */ (function () {
    function FileSsisConnParmAddEditModalPage(navCtrl, navParams, viewCtrl, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.package_src_key = navParams.data.package_src_key;
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_FileSsisConnParmViewModel__["a" /* FileSsisConnParmViewModel */]();
        this.item.exec_file_seq = navParams.data.item.exec_file_seq;
        this.item.ssis_parm_name = navParams.data.item.ssis_parm_name;
        this.item.remote_conn_id = navParams.data.item.remote_conn_id;
        this.item.remote_conn_string = navParams.data.item.remote_conn_string;
        this.item.ssis_parm_type_key = navParams.data.item.ssis_parm_type_key;
        this.item.ssis_parm_type = navParams.data.item.ssis_parm_type;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.title = "ssis連線參數設定";
    }
    FileSsisConnParmAddEditModalPage.prototype.SelectConn = function () {
        var _this = this;
        var modal = this.modalCtrl.create("ConnSelectModalPage", {
            select_remote_conn_id: this.item.remote_conn_id,
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.remote_conn_id = select_data.remote_conn_id;
            _this.item.remote_conn_string = select_data.conn_string;
        });
        modal.present();
    };
    FileSsisConnParmAddEditModalPage.prototype.SelectParmType = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.ssis_parm_type_key,
            code_type: "068"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.ssis_parm_type_key = select_data.code_key;
            _this.item.ssis_parm_type = select_data.code_desc;
        });
        modal.present();
    };
    FileSsisConnParmAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    FileSsisConnParmAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FileSsisConnParmAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FileSsisConnParmModalPage");
    };
    FileSsisConnParmAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-file-ssis-conn-parm-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\file-ssis-conn-parm-add-edit-modal\file-ssis-conn-parm-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n    <ion-row *ngIf="package_src_key==\'067|SSIS\'" >\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>參數類型</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="ssis_parm_type_key" #ssis_parm_type_key="ngModel" [(ngModel)]="item.ssis_parm_type_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectParmType()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="ssis_parm_type_key.errors && ssis_parm_type_key.touched " class="error-message">\n          參數類型不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>參數類型</ion-label>\n\n          <ion-input type="text" [disabled]=true name="ssis_parm_type" #ssis_parm_type="ngModel" [(ngModel)]="item.ssis_parm_type" required>\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>參數名稱</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="ssis_parm_name" #ssis_parm_name="ngModel" [(ngModel)]="item.ssis_parm_name" maxlength="100" required></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>連線</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="remote_conn_id" #remote_conn_id="ngModel" [(ngModel)]="item.remote_conn_id"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectConn()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="remote_conn_id.errors && remote_conn_id.touched " class="error-message">\n          連線不能為空白\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>連線</ion-label>\n\n          <ion-textarea [disabled]=true name="remote_conn_string" #remote_conn_string="ngModel" [(ngModel)]="item.remote_conn_string" required>\n          </ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditBatch==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n            (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\file-ssis-conn-parm-add-edit-modal\file-ssis-conn-parm-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ModalController */]])
    ], FileSsisConnParmAddEditModalPage);
    return FileSsisConnParmAddEditModalPage;
}());

//# sourceMappingURL=file-ssis-conn-parm-add-edit-modal.js.map

/***/ }),

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSsisConnParmAddEditModalPageModule", function() { return FileSsisConnParmAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_ssis_conn_parm_add_edit_modal__ = __webpack_require__(1483);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FileSsisConnParmAddEditModalPageModule = /** @class */ (function () {
    function FileSsisConnParmAddEditModalPageModule() {
    }
    FileSsisConnParmAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_ssis_conn_parm_add_edit_modal__["a" /* FileSsisConnParmAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_ssis_conn_parm_add_edit_modal__["a" /* FileSsisConnParmAddEditModalPage */]),
            ],
        })
    ], FileSsisConnParmAddEditModalPageModule);
    return FileSsisConnParmAddEditModalPageModule;
}());

//# sourceMappingURL=file-ssis-conn-parm-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=299.js.map