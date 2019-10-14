webpackJsonp([285],{

/***/ 1092:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarningCheckViewModel; });
var WarningCheckViewModel = /** @class */ (function () {
    function WarningCheckViewModel() {
    }
    return WarningCheckViewModel;
}());

//# sourceMappingURL=WarningCheckViewModel.js.map

/***/ }),

/***/ 1701:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WarningCheckAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_WarningCheckViewModel__ = __webpack_require__(1092);
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
 * Generated class for the WarningCheckModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WarningCheckAddEditModalPage = /** @class */ (function () {
    function WarningCheckAddEditModalPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_WarningCheckViewModel__["a" /* WarningCheckViewModel */]();
        this.item.schemaname = navParams.data.item.schemaname;
        this.item.tablename = navParams.data.item.tablename;
        this.item.columnname = navParams.data.item.columnname;
        this.item.check_key = navParams.data.item.check_key;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.mode = navParams.data.mode;
        this.CanEditJob = navParams.data.CanEditJob;
        if (this.mode === "POST")
            this.title = "新增";
        else
            this.title = "更新";
    }
    WarningCheckAddEditModalPage.prototype.SelectCheckKey = function () {
        var _this = this;
        var modal = this.modalCtrl.create("WarningCheckSelectModalPage", {
            item: this.item,
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.check_key = select_data.code_key;
            _this.item.check_desc = select_data.code_desc;
        });
        modal.present();
    };
    WarningCheckAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    WarningCheckAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    WarningCheckAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad WarningCheckAddEditModalPage");
    };
    WarningCheckAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page warning-check-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\warning-check-add-edit-modal\warning-check-add-edit-modal.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content padding>\n    <form #Form="ngForm" >\n\n      <ion-row>\n        <ion-col col-12 >\n            <ion-item>\n                <ion-label stacked>警訊項目</ion-label>\n                <ion-input type="text" readonly=true name="check_type" #check_key="ngModel" [(ngModel)]="item.check_key" required></ion-input>\n\n                <button ion-button outline item-end   icon-right (click)="SelectCheckKey()">\n                  <ion-icon name="arrow-dropdown"></ion-icon>\n                </button>\n              </ion-item>\n              <div *ngIf="check_key.errors && check_key.touched " class="error-message">\n                  警訊項目不能為空白\n                </div>\n        </ion-col>\n        <ion-col col-12 >\n            <ion-item>\n                {{item.check_desc}}\n              </ion-item>\n        </ion-col>\n\n      </ion-row>\n\n\n\n    </form>\n\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-row>\n        <ion-col>\n          <div [ngClass]="[\'command\']">\n            <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n              <ion-icon name="backspace"></ion-icon>\n            </button>\n            <button small [disabled]="CanEditJob==false" title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n              <ion-icon name="checkmark-circle"></ion-icon>\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\warning-check-add-edit-modal\warning-check-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], WarningCheckAddEditModalPage);
    return WarningCheckAddEditModalPage;
}());

//# sourceMappingURL=warning-check-add-edit-modal.js.map

/***/ }),

/***/ 776:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarningCheckAddEditModalPageModule", function() { return WarningCheckAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__warning_check_add_edit_modal__ = __webpack_require__(1701);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WarningCheckAddEditModalPageModule = /** @class */ (function () {
    function WarningCheckAddEditModalPageModule() {
    }
    WarningCheckAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__warning_check_add_edit_modal__["a" /* WarningCheckAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__warning_check_add_edit_modal__["a" /* WarningCheckAddEditModalPage */]),
            ],
        })
    ], WarningCheckAddEditModalPageModule);
    return WarningCheckAddEditModalPageModule;
}());

//# sourceMappingURL=warning-check-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=285.js.map