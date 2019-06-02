webpackJsonp([295],{

/***/ 1513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FtpFileBrowserEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_FtpFileBrowserViewModel__ = __webpack_require__(927);
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
var FtpFileBrowserEditModalPage = /** @class */ (function () {
    function FtpFileBrowserEditModalPage(navCtrl, navParams, viewCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_FtpFileBrowserViewModel__["a" /* FtpFileBrowserViewModel */]();
        this.item.remote_conn_id = navParams.data.item.remote_conn_id;
        this.item.conn_type_key = navParams.data.item.conn_type_key;
        this.item.encrypt_method_key = navParams.data.item.encrypt_method_key;
        this.item.filepath = navParams.data.item.filepath;
        this.item.filefullname = navParams.data.item.filefullname;
        this.item.filename = navParams.data.item.filename;
        this.item.rename_filename = navParams.data.item.filename + "_copy";
        this.item.create_time = navParams.data.item.create_time;
        this.CanEditFileBrowser = navParams.data.CanEditFileBrowser;
        this.mode = navParams.data.mode;
        this.title = "變更檔案";
    }
    FtpFileBrowserEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    FtpFileBrowserEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FtpFileBrowserEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FtpFileBrowserEditModalPage");
    };
    FtpFileBrowserEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-ftp-file-browser-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\ftp-file-browser-edit-modal\ftp-file-browser-edit-modal.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content  padding>\n      <form #Form="ngForm">\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label stacked >目前路徑</ion-label>\n                <ion-input type="text" disabled=true name="filepath" #filepath="ngModel" [(ngModel)]="item.filepath"\n                  required></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label stacked >目前檔名</ion-label>\n                  <ion-input type="text" disabled=true name="filename" #filename="ngModel" [(ngModel)]="item.filename"\n                    required></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label stacked >目的檔名</ion-label>\n                <ion-input type="text" [disabled]="CanEditFileBrowser==false" name="rename_filename" #rename_filename="ngModel" [(ngModel)]="item.rename_filename"\n                  required ></ion-input>\n              </ion-item>\n              <div *ngIf="rename_filename.errors && rename_filename.touched" class="error-message">\n                  目的檔名不能為空白\n              </div>\n\n            </ion-col>\n          </ion-row>\n        </form>\n\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-row>\n        <ion-col>\n          <div [ngClass]="[\'command\']">\n            <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n              <ion-icon name="backspace"></ion-icon>\n            </button>\n            <button small title="確認" [disabled]="CanEditFileBrowser==false"  ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n              <ion-icon name="checkmark-circle"></ion-icon>\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\ftp-file-browser-edit-modal\ftp-file-browser-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */]])
    ], FtpFileBrowserEditModalPage);
    return FtpFileBrowserEditModalPage;
}());

//# sourceMappingURL=ftp-file-browser-edit-modal.js.map

/***/ }),

/***/ 626:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FtpFileBrowserEditModalPageModule", function() { return FtpFileBrowserEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ftp_file_browser_edit_modal__ = __webpack_require__(1513);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FtpFileBrowserEditModalPageModule = /** @class */ (function () {
    function FtpFileBrowserEditModalPageModule() {
    }
    FtpFileBrowserEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ftp_file_browser_edit_modal__["a" /* FtpFileBrowserEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ftp_file_browser_edit_modal__["a" /* FtpFileBrowserEditModalPage */]),
            ],
        })
    ], FtpFileBrowserEditModalPageModule);
    return FtpFileBrowserEditModalPageModule;
}());

//# sourceMappingURL=ftp-file-browser-edit-modal.module.js.map

/***/ }),

/***/ 927:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FtpFileBrowserViewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileBrowserViewModel__ = __webpack_require__(134);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var FtpFileBrowserViewModel = /** @class */ (function (_super) {
    __extends(FtpFileBrowserViewModel, _super);
    function FtpFileBrowserViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FtpFileBrowserViewModel;
}(__WEBPACK_IMPORTED_MODULE_0__ViewModel_FileBrowserViewModel__["a" /* FileBrowserViewModel */]));

//# sourceMappingURL=FtpFileBrowserViewModel.js.map

/***/ })

});
//# sourceMappingURL=295.js.map