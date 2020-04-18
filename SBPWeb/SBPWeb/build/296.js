webpackJsonp([296],{

/***/ 1085:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParameterColumnViewModel; });
var ParameterColumnViewModel = /** @class */ (function () {
    function ParameterColumnViewModel() {
    }
    return ParameterColumnViewModel;
}());

//# sourceMappingURL=ParameterColumnViewModel.js.map

/***/ }),

/***/ 1602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParameterColumnAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_ParameterColumnViewModel__ = __webpack_require__(1085);
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
 * Generated class for the ParameterColumnModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ParameterColumnAddEditModalPage = /** @class */ (function () {
    function ParameterColumnAddEditModalPage(navCtrl, navParams, viewCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_ParameterColumnViewModel__["a" /* ParameterColumnViewModel */]();
        this.item.parameter_column_group = navParams.data.item.parameter_column_group;
        this.item.parameter_column = navParams.data.item.parameter_column;
        this.item.parameter_column_value = navParams.data.item.parameter_column_value;
        this.item.parameter_column_value_format = navParams.data.item.parameter_column_value_format;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.mode = navParams.data.mode;
        this.title = "參數欄位";
    }
    ParameterColumnAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    ParameterColumnAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ParameterColumnAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ParameterColumnModalPage");
    };
    ParameterColumnAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-parameter-column-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\parameter-column-add-edit-modal\parameter-column-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  padding>\n    <form #Form="ngForm">\n\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label stacked >參數群組</ion-label>\n              <ion-input type="text" disabled=true name="parameter_column_group" #parameter_column_group="ngModel" [(ngModel)]="item.parameter_column_group"\n                required></ion-input>\n\n            </ion-item>\n\n\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n                <ion-label stacked >參數欄位</ion-label>\n              <ion-input type="text" [disabled]="CanEditBatch==false || mode==\'PUT\'" name="parameter_column" #parameter_column="ngModel" [(ngModel)]="item.parameter_column"\n                required maxlength="30"></ion-input>\n            </ion-item>\n            <div *ngIf="parameter_column.errors && parameter_column.touched" class="error-message">\n              參數欄位不能為空白\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n                <ion-label stacked >參數欄位內容</ion-label>\n              <ion-input type="text" [disabled]="CanEditBatch==false" name="parameter_column_value" #parameter_column_value="ngModel" [(ngModel)]="item.parameter_column_value"\n                required maxlength="30"></ion-input>\n            </ion-item>\n            <div *ngIf="parameter_column_value.errors && parameter_column_value.touched" class="error-message">\n              參數欄位內容不能為空白\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n                <ion-label stacked >參數欄位內容格式</ion-label>\n              <ion-input type="text" [disabled]="CanEditBatch==false" name="parameter_column_value_format" #parameter_column_value_format="ngModel" [(ngModel)]="item.parameter_column_value_format"\n                 maxlength="30"></ion-input>\n            </ion-item>\n\n          </ion-col>\n        </ion-row>\n      </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditBatch==false"  ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\parameter-column-add-edit-modal\parameter-column-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */]])
    ], ParameterColumnAddEditModalPage);
    return ParameterColumnAddEditModalPage;
}());

//# sourceMappingURL=parameter-column-add-edit-modal.js.map

/***/ }),

/***/ 696:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterColumnAddEditModalPageModule", function() { return ParameterColumnAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parameter_column_add_edit_modal__ = __webpack_require__(1602);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ParameterColumnAddEditModalPageModule = /** @class */ (function () {
    function ParameterColumnAddEditModalPageModule() {
    }
    ParameterColumnAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__parameter_column_add_edit_modal__["a" /* ParameterColumnAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__parameter_column_add_edit_modal__["a" /* ParameterColumnAddEditModalPage */]),
            ],
        })
    ], ParameterColumnAddEditModalPageModule);
    return ParameterColumnAddEditModalPageModule;
}());

//# sourceMappingURL=parameter-column-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=296.js.map