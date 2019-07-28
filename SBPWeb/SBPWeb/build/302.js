webpackJsonp([302],{

/***/ 1041:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileImportDataLookupViewModel; });
var FileImportDataLookupViewModel = /** @class */ (function () {
    function FileImportDataLookupViewModel() {
    }
    return FileImportDataLookupViewModel;
}());

//# sourceMappingURL=FileImportDataLookupViewModel.js.map

/***/ }),

/***/ 1447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileImportDataLookupAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_FileImportDataLookupViewModel__ = __webpack_require__(1041);
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
 * Generated class for the FileImportDataLookupModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FileImportDataLookupAddEditModalPage = /** @class */ (function () {
    function FileImportDataLookupAddEditModalPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_FileImportDataLookupViewModel__["a" /* FileImportDataLookupViewModel */]();
        this.item.schemaname = navParams.data.item.schemaname;
        this.item.tablename = navParams.data.item.tablename;
        this.item.columnname = navParams.data.item.columnname;
        this.item.lookup_src = navParams.data.item.lookup_src;
        this.item.lookup_result = navParams.data.item.lookup_result;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.mode = navParams.data.mode;
        this.CanEditBatch = navParams.data.CanEditBatch;
        if (this.mode === "POST")
            this.title = "新增";
        else
            this.title = "更新";
    }
    FileImportDataLookupAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    FileImportDataLookupAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FileImportDataLookupAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FileImportDataLookupModalPage");
    };
    FileImportDataLookupAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-file-import-data-lookup-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\file-import-data-lookup-add-edit-modal\file-import-data-lookup-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n\n\n    <ion-row >\n\n      <ion-col >\n        <ion-item>\n          <ion-label stacked>查閱來源</ion-label>\n          <ion-input type="text" required [disabled]="CanEditBatch==false || mode==\'PUT\'"  name="lookup_src" #lookup_src="ngModel" [(ngModel)]="item.lookup_src"></ion-input>\n\n\n        </ion-item>\n\n        <div *ngIf="lookup_src.errors && lookup_src.touched" class="error-message">\n          查閱來源不能為空白\n        </div>\n      </ion-col>\n\n    </ion-row>\n    <ion-row >\n\n      <ion-col >\n        <ion-item>\n          <ion-label stacked>查閱結果</ion-label>\n          <ion-input type="text" required [disabled]="CanEditBatch==false"  name="lookup_result" #lookup_result="ngModel" [(ngModel)]="item.lookup_result"></ion-input>\n\n\n        </ion-item>\n\n        <div *ngIf="lookup_result.errors && lookup_result.touched" class="error-message">\n          查閱結果不能為空白\n        </div>\n      </ion-col>\n\n    </ion-row>\n\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small [disabled]="CanEditBatch==false" title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\file-import-data-lookup-add-edit-modal\file-import-data-lookup-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], FileImportDataLookupAddEditModalPage);
    return FileImportDataLookupAddEditModalPage;
}());

//# sourceMappingURL=file-import-data-lookup-add-edit-modal.js.map

/***/ }),

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileImportDataLookupAddEditModalPageModule", function() { return FileImportDataLookupAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_import_data_lookup_add_edit_modal__ = __webpack_require__(1447);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FileImportDataLookupAddEditModalPageModule = /** @class */ (function () {
    function FileImportDataLookupAddEditModalPageModule() {
    }
    FileImportDataLookupAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_import_data_lookup_add_edit_modal__["a" /* FileImportDataLookupAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_import_data_lookup_add_edit_modal__["a" /* FileImportDataLookupAddEditModalPage */]),
            ],
        })
    ], FileImportDataLookupAddEditModalPageModule);
    return FileImportDataLookupAddEditModalPageModule;
}());

//# sourceMappingURL=file-import-data-lookup-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=302.js.map