webpackJsonp([301],{

/***/ 1067:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileZipSetViewModel; });
var FileZipSetViewModel = /** @class */ (function () {
    function FileZipSetViewModel() {
    }
    return FileZipSetViewModel;
}());

//# sourceMappingURL=FileZipSetViewModel.js.map

/***/ }),

/***/ 1512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileZipSetAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_FileZipSetViewModel__ = __webpack_require__(1067);
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
 * Generated class for the FileZipSetModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FileZipSetAddEditModalPage = /** @class */ (function () {
    function FileZipSetAddEditModalPage(navCtrl, navParams, viewCtrl, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.src_exec_group = "";
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_FileZipSetViewModel__["a" /* FileZipSetViewModel */]();
        this.item.zip_seq = navParams.data.item.zip_seq;
        this.item.src_exec_group = navParams.data.item.src_exec_group;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.title = "壓縮檔來源設定";
        if (this.mode === "PUT")
            this.src_exec_group = "zip_src_" + this.item.src_exec_group;
        else
            this.src_exec_group = "";
    }
    FileZipSetAddEditModalPage.prototype.SelectFileZipSrcExecGroup = function () {
        var _this = this;
        var modal = this.modalCtrl.create("BatchExecProgramSelectModalPage", {
            ssis_program_set_no: "zip_src",
            select_item: this.src_exec_group,
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.src_exec_group = select_data.exec_group;
        });
        modal.present();
    };
    FileZipSetAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    FileZipSetAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FileZipSetAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FileZipSetModalPage");
    };
    FileZipSetAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-file-zip-set-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\file-zip-set-add-edit-modal\file-zip-set-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n\n    <ion-row>\n      <ion-col >\n        <ion-item>\n          <ion-label stacked>來源轉檔群組</ion-label>\n          <ion-input type="text"  [disabled]="CanEditBatch==false" name="src_exec_group" #src_exec_group="ngModel" [(ngModel)]="item.src_exec_group"\n            required maxlength="30"></ion-input>\n\n            <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectFileZipSrcExecGroup()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n        </ion-item>\n        <div *ngIf="src_exec_group.errors && src_exec_group.touched" class="error-message">\n          來源轉檔群組不能為空白\n        </div>\n      </ion-col>\n\n    </ion-row>\n\n\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditBatch==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n            (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\file-zip-set-add-edit-modal\file-zip-set-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ModalController */]])
    ], FileZipSetAddEditModalPage);
    return FileZipSetAddEditModalPage;
}());

//# sourceMappingURL=file-zip-set-add-edit-modal.js.map

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileZipSetAddEditModalPageModule", function() { return FileZipSetAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_zip_set_add_edit_modal__ = __webpack_require__(1512);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FileZipSetAddEditModalPageModule = /** @class */ (function () {
    function FileZipSetAddEditModalPageModule() {
    }
    FileZipSetAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_zip_set_add_edit_modal__["a" /* FileZipSetAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_zip_set_add_edit_modal__["a" /* FileZipSetAddEditModalPage */]),
            ],
        })
    ], FileZipSetAddEditModalPageModule);
    return FileZipSetAddEditModalPageModule;
}());

//# sourceMappingURL=file-zip-set-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=301.js.map