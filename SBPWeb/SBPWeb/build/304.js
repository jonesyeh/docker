webpackJsonp([304],{

/***/ 1053:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileImportDataSearchReplaceViewModel; });
var FileImportDataSearchReplaceViewModel = /** @class */ (function () {
    function FileImportDataSearchReplaceViewModel() {
    }
    return FileImportDataSearchReplaceViewModel;
}());

//# sourceMappingURL=FileImportDataSearchReplaceViewModel.js.map

/***/ }),

/***/ 1463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileImportDataSearchReplaceAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_FileImportDataSearchReplaceViewModel__ = __webpack_require__(1053);
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
 * Generated class for the FileImportDataSearchReplaceModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FileImportDataSearchReplaceAddEditModalPage = /** @class */ (function () {
    function FileImportDataSearchReplaceAddEditModalPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_FileImportDataSearchReplaceViewModel__["a" /* FileImportDataSearchReplaceViewModel */]();
        this.item.schemaname = navParams.data.item.schemaname;
        this.item.tablename = navParams.data.item.tablename;
        this.item.columnname = navParams.data.item.columnname;
        this.item.search_value = navParams.data.item.search_value;
        this.item.replace_value = navParams.data.item.replace_value;
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
    FileImportDataSearchReplaceAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    FileImportDataSearchReplaceAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FileImportDataSearchReplaceAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FileImportDataSearchReplaceModalPage");
    };
    FileImportDataSearchReplaceAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-file-import-data-search-replace-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\file-import-data-search-replace-add-edit-modal\file-import-data-search-replace-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n\n\n    <ion-row >\n\n      <ion-col >\n        <ion-item>\n          <ion-label stacked>關鍵搜尋內容</ion-label>\n          <ion-input type="text" required [disabled]="CanEditBatch==false || mode==\'PUT\'"  name="search_value" #search_value="ngModel" [(ngModel)]="item.search_value"></ion-input>\n\n\n        </ion-item>\n\n        <div *ngIf="search_value.errors && search_value.touched" class="error-message">\n          關鍵搜尋內容不能為空白\n        </div>\n      </ion-col>\n\n    </ion-row>\n    <ion-row >\n\n      <ion-col >\n        <ion-item>\n          <ion-label stacked>取代內容</ion-label>\n          <ion-input type="text" required [disabled]="CanEditBatch==false"  name="replace_value" #replace_value="ngModel" [(ngModel)]="item.replace_value"></ion-input>\n\n\n        </ion-item>\n\n        <div *ngIf="replace_value.errors && replace_value.touched" class="error-message">\n          取代內容不能為空白\n        </div>\n      </ion-col>\n\n    </ion-row>\n\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small [disabled]="CanEditBatch==false" title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\file-import-data-search-replace-add-edit-modal\file-import-data-search-replace-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], FileImportDataSearchReplaceAddEditModalPage);
    return FileImportDataSearchReplaceAddEditModalPage;
}());

//# sourceMappingURL=file-import-data-search-replace-add-edit-modal.js.map

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileImportDataSearchReplaceAddEditModalPageModule", function() { return FileImportDataSearchReplaceAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_import_data_search_replace_add_edit_modal__ = __webpack_require__(1463);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FileImportDataSearchReplaceAddEditModalPageModule = /** @class */ (function () {
    function FileImportDataSearchReplaceAddEditModalPageModule() {
    }
    FileImportDataSearchReplaceAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_import_data_search_replace_add_edit_modal__["a" /* FileImportDataSearchReplaceAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_import_data_search_replace_add_edit_modal__["a" /* FileImportDataSearchReplaceAddEditModalPage */]),
            ],
        })
    ], FileImportDataSearchReplaceAddEditModalPageModule);
    return FileImportDataSearchReplaceAddEditModalPageModule;
}());

//# sourceMappingURL=file-import-data-search-replace-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=304.js.map