webpackJsonp([337],{

/***/ 1350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileBrowserCopyEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_FileBrowserViewModel__ = __webpack_require__(134);
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
 * Generated class for the DirectoryBrowserModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FileBrowserCopyEditModalPage = /** @class */ (function () {
    function FileBrowserCopyEditModalPage(navCtrl, navParams, viewCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_FileBrowserViewModel__["a" /* FileBrowserViewModel */]();
        this.item.filepath = navParams.data.item.filepath;
        this.item.filefullname = navParams.data.item.filefullname;
        this.item.filename = navParams.data.item.filename;
        this.item.rename_filename = navParams.data.item.filename + "_copy";
        this.item.create_time = navParams.data.item.create_time;
        this.CanEditFileBrowser = navParams.data.CanEditFileBrowser;
        this.mode = navParams.data.mode;
        if (this.mode === "Rename")
            this.title = "變更檔案";
        else
            this.title = "複製檔案";
    }
    FileBrowserCopyEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    FileBrowserCopyEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FileBrowserCopyEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad DirectoryBrowserModalPage");
    };
    FileBrowserCopyEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-file-browser-copy-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\file-browser-copy-edit-modal\file-browser-copy-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  padding>\n    <form #Form="ngForm">\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label stacked >目前路徑</ion-label>\n              <ion-input type="text" disabled=true name="filepath" #filepath="ngModel" [(ngModel)]="item.filepath"\n                required></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label stacked >目前檔名</ion-label>\n                <ion-input type="text" disabled=true name="filename" #filename="ngModel" [(ngModel)]="item.filename"\n                  required></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label stacked >目的檔名</ion-label>\n              <ion-input type="text" [disabled]="CanEditFileBrowser==false" name="rename_filename" #rename_filename="ngModel" [(ngModel)]="item.rename_filename"\n                required ></ion-input>\n            </ion-item>\n            <div *ngIf="rename_filename.errors && rename_filename.touched" class="error-message">\n                目的檔名不能為空白\n            </div>\n\n          </ion-col>\n        </ion-row>\n      </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditFileBrowser==false"  ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\file-browser-copy-edit-modal\file-browser-copy-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */]])
    ], FileBrowserCopyEditModalPage);
    return FileBrowserCopyEditModalPage;
}());

//# sourceMappingURL=file-browser-copy-edit-modal.js.map

/***/ }),

/***/ 499:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileBrowserCopyEditModalPageModule", function() { return FileBrowserCopyEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_browser_copy_edit_modal__ = __webpack_require__(1350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FileBrowserCopyEditModalPageModule = /** @class */ (function () {
    function FileBrowserCopyEditModalPageModule() {
    }
    FileBrowserCopyEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_browser_copy_edit_modal__["a" /* FileBrowserCopyEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_browser_copy_edit_modal__["a" /* FileBrowserCopyEditModalPage */]),
            ],
        })
    ], FileBrowserCopyEditModalPageModule);
    return FileBrowserCopyEditModalPageModule;
}());

//# sourceMappingURL=file-browser-copy-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=337.js.map