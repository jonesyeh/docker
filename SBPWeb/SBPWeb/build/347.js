webpackJsonp([347],{

/***/ 1252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiUrlAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_ApiUrlViewModel__ = __webpack_require__(68);
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
 * Generated class for the ApiUrlModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApiUrlAddEditModalPage = /** @class */ (function () {
    function ApiUrlAddEditModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        var change_mode = navParams.data.change_mode;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_ApiUrlViewModel__["a" /* ApiUrlViewModel */]();
        this.item.id = navParams.data.item.id;
        if (change_mode === "c")
            this.item.is_default = false;
        else
            this.item.is_default = navParams.data.item.is_default;
        this.item.disp_name = navParams.data.item.disp_name;
        this.item.url = navParams.data.item.url;
        this.item.is_url_forward = navParams.data.item.is_url_forward;
        this.mode = navParams.data.mode;
        if (this.mode === "POST")
            this.title = "新增";
        else
            this.title = "更新";
    }
    ApiUrlAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    ApiUrlAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ApiUrlAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ApiUrlModalPage");
    };
    ApiUrlAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-api-url-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\api-url-add-edit-modal\api-url-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>唯一編號</ion-label>\n          <ion-input type="text"  name="id" [disabled]="mode==\'PUT\'"  #id="ngModel" [(ngModel)]="item.id" required></ion-input>\n        </ion-item>\n        <div *ngIf="id.errors && id.touched" class="error-message">\n          唯一編號不能為空白\n        </div>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>顯示名稱</ion-label>\n          <ion-input type="text"  name="disp_name"  #disp_name="ngModel" [(ngModel)]="item.disp_name" required></ion-input>\n        </ion-item>\n        <div *ngIf="disp_name.errors && disp_name.touched" class="error-message">\n          顯示名稱不能為空白\n        </div>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Url</ion-label>\n          <ion-input type="text"  name="url"  #url="ngModel" [(ngModel)]="item.url" required></ion-input>\n        </ion-item>\n        <div *ngIf="url.errors && url.touched" class="error-message">\n          url不能為空白\n        </div>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <!-- <ion-col>\n        <ion-item>\n          <ion-label stacked>預設</ion-label>\n          <ion-checkbox name="is_default" [disabled]="item.is_default==true" [(ngModel)]="item.is_default"></ion-checkbox>\n        </ion-item>\n      </ion-col> -->\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>轉址</ion-label>\n          <ion-checkbox name="is_url_forward"  [(ngModel)]="item.is_url_forward"></ion-checkbox>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n\n\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button  small title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\api-url-add-edit-modal\api-url-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], ApiUrlAddEditModalPage);
    return ApiUrlAddEditModalPage;
}());

//# sourceMappingURL=api-url-add-edit-modal.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiUrlAddEditModalPageModule", function() { return ApiUrlAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_url_add_edit_modal__ = __webpack_require__(1252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ApiUrlAddEditModalPageModule = /** @class */ (function () {
    function ApiUrlAddEditModalPageModule() {
    }
    ApiUrlAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__api_url_add_edit_modal__["a" /* ApiUrlAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__api_url_add_edit_modal__["a" /* ApiUrlAddEditModalPage */]),
            ],
        })
    ], ApiUrlAddEditModalPageModule);
    return ApiUrlAddEditModalPageModule;
}());

//# sourceMappingURL=api-url-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=347.js.map