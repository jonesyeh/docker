webpackJsonp([306],{

/***/ 1020:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileDependViewModel; });
var FileDependViewModel = /** @class */ (function () {
    function FileDependViewModel() {
    }
    return FileDependViewModel;
}());

//# sourceMappingURL=FileDependViewModel.js.map

/***/ }),

/***/ 1364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileDependAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_ViewModel_FileDependViewModel__ = __webpack_require__(1020);
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
 * Generated class for the FileDependModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FileDependAddEditModalPage = /** @class */ (function () {
    function FileDependAddEditModalPage(navCtrl, navParams, viewCtrl, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.item = new __WEBPACK_IMPORTED_MODULE_3__Model_ViewModel_FileDependViewModel__["a" /* FileDependViewModel */]();
        this.item.exec_file_seq = navParams.data.item.exec_file_seq;
        this.item.exec_file_depend_seq = navParams.data.item.exec_file_depend_seq;
        this.item.depend_filename = navParams.data.item.depend_filename;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.item.depend_file_keyword = navParams.data.item.depend_file_keyword;
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.title = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format("{0}", this.item.exec_file_seq);
        this.file_keyword = navParams.data.file_keyword;
        this.exec_group = navParams.data.exec_group;
    }
    FileDependAddEditModalPage.prototype.SelectDepend = function () {
        var _this = this;
        var modal = this.modalCtrl.create("FileImportSelectModalPage", {
            exec_file_seq: this.item.exec_file_seq,
            exec_group: this.exec_group
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.exec_file_depend_seq = select_data.exec_file_seq;
            _this.item.depend_file_keyword = select_data.file_keyword;
        });
        modal.present();
    };
    FileDependAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    FileDependAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FileDependAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FileDependModalPage");
    };
    FileDependAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-file-depend-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\file-depend-add-edit-modal\file-depend-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n    <ion-grid >\n      <ion-row>\n        <ion-col col-12 col-sm-2 col-md-3>\n        </ion-col>\n        <ion-col col-12 col-sm-8 col-md-6>\n\n          <ion-grid [ngClass]="[\'subject\']">\n            <ion-row>\n              <ion-col>\n\n                <b>{{file_keyword}}</b>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-col>\n        <ion-col col-12 col-sm-2 col-md-3>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label stacked>相依檔案</ion-label>\n          <ion-input type="number" readonly=true [disabled]="CanEditBatch==false  || mode==\'PUT\'" name="exec_file_depend_seq" #exec_file_depend_seq="ngModel" [(ngModel)]="item.exec_file_depend_seq"\n            required maxlength="30"></ion-input>\n            <button ion-button outline item-end icon-right *ngIf="CanEditBatch==true && mode==\'POST\'" (click)="SelectDepend()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n        </ion-item>\n\n        <div *ngIf="exec_file_depend_seq.errors && exec_file_depend_seq.touched" class="error-message">\n          相依檔案不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label stacked>相依檔案</ion-label>\n          <ion-input type="text"  [disabled]=true name="depend_file_keyword" #depend_file_keyword="ngModel" [(ngModel)]="item.depend_file_keyword"\n            required maxlength="50"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-6 >\n        <ion-item>\n          <ion-label stacked>相依檔名條件</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="depend_filename" #depend_filename="ngModel" [(ngModel)]="item.depend_filename"\n            required maxlength="50"></ion-input>\n\n        </ion-item>\n\n        <div *ngIf="depend_filename.errors && depend_filename.touched " class="error-message">\n          相依檔名條件不能為空白\n        </div>\n      </ion-col>\n      </ion-row>\n\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditBatch==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n            (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\file-depend-add-edit-modal\file-depend-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ModalController */]])
    ], FileDependAddEditModalPage);
    return FileDependAddEditModalPage;
}());

//# sourceMappingURL=file-depend-add-edit-modal.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileDependAddEditModalPageModule", function() { return FileDependAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_depend_add_edit_modal__ = __webpack_require__(1364);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FileDependAddEditModalPageModule = /** @class */ (function () {
    function FileDependAddEditModalPageModule() {
    }
    FileDependAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_depend_add_edit_modal__["a" /* FileDependAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_depend_add_edit_modal__["a" /* FileDependAddEditModalPage */]),
            ],
        })
    ], FileDependAddEditModalPageModule);
    return FileDependAddEditModalPageModule;
}());

//# sourceMappingURL=file-depend-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=306.js.map