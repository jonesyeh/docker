webpackJsonp([332],{

/***/ 1589:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaskColumnAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_MaskColumnViewModel__ = __webpack_require__(142);
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
 * Generated class for the MaskColumnModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MaskColumnAddEditModalPage = /** @class */ (function () {
    function MaskColumnAddEditModalPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_MaskColumnViewModel__["a" /* MaskColumnViewModel */]();
        this.item.schemaname = navParams.data.item.schemaname; //結構描述
        this.item.tablename = navParams.data.item.tablename; //資料表
        this.item.columnname = navParams.data.item.columnname; //欄位名稱
        this.item.col_start_loc = navParams.data.item.col_start_loc; //資料欄起始位置
        this.item.col_length = navParams.data.item.col_length; //資料欄位長度
        this.item.mask = navParams.data.item.mask; //遮罩字元
        this.item.creator = navParams.data.item.creator; //鍵檔人員
        this.item.create_time = navParams.data.item.create_time; //建立時間
        this.item.modifier = navParams.data.item.modifier; //異動人員
        this.item.last_update_time = navParams.data.item.last_update_time; //最後更新時間
        this.mode = navParams.data.mode;
        this.CanEditBatch = navParams.data.CanEditBatch;
        if (this.mode === "POST")
            this.title = "新增";
        else
            this.title = "更新";
    }
    MaskColumnAddEditModalPage.prototype.SelectColumn = function () {
        var _this = this;
        var modal = this.modalCtrl.create("TableColumnExtSelectModalPage", {
            item: this.item,
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.columnname = select_data.columnname;
        });
        modal.present();
    };
    MaskColumnAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    MaskColumnAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    MaskColumnAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad MaskColumnAddEditModalPage");
    };
    MaskColumnAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page mask-column-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\mask-column-add-edit-modal\mask-column-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm" >\n\n    <ion-row>\n\n      <ion-col col-12  col-sm-6>\n        <ion-item >\n          <ion-label stacked>欄位名稱</ion-label>\n          <ion-input type="text" readonly=true [disabled]="mode==\'PUT\'"  name="columnname" #columnname="ngModel" [(ngModel)]="item.columnname" required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'"  icon-right (click)="SelectColumn()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="columnname.errors && columnname.touched " class="error-message">\n          欄位名稱不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12  col-sm-6>\n        <ion-item>\n          <ion-label stacked>遮罩字元</ion-label>\n          <ion-input type="text" [disabled]="CanEditTable==false" name="mask" #mask="ngModel" [(ngModel)]="item.mask" required></ion-input>\n\n        </ion-item>\n        <div *ngIf="mask.errors && mask.touched" class="error-message">\n          遮罩字元不能為空白\n        </div>\n      </ion-col>\n  </ion-row>\n  <ion-row>\n      <ion-col col-12  col-sm-6>\n          <ion-item>\n            <ion-label stacked>遮罩起始位置</ion-label>\n            <ion-input type="number" [disabled]="CanEditTable==false" name="col_start_loc" #col_start_loc="ngModel" [(ngModel)]="item.col_start_loc" required></ion-input>\n  \n          </ion-item>\n          <div *ngIf="col_start_loc.errors && col_start_loc.touched" class="error-message">\n              遮罩起始位置不能為空白\n          </div>\n        </ion-col>\n        <ion-col col-12  col-sm-6>\n            <ion-item>\n              <ion-label stacked>遮罩長度</ion-label>\n              <ion-input type="number" [disabled]="CanEditTable==false" name="col_length" #col_length="ngModel" [(ngModel)]="item.col_length" required></ion-input>\n    \n            </ion-item>\n            <div *ngIf="col_length.errors && col_length.touched" class="error-message">\n                遮罩長度不能為空白\n            </div>\n          </ion-col>\n    </ion-row>\n\n\n\n\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small [disabled]="CanEditBatch==false" title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\mask-column-add-edit-modal\mask-column-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], MaskColumnAddEditModalPage);
    return MaskColumnAddEditModalPage;
}());

//# sourceMappingURL=mask-column-add-edit-modal.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaskColumnAddEditModalPageModule", function() { return MaskColumnAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mask_column_add_edit_modal__ = __webpack_require__(1589);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaskColumnAddEditModalPageModule = /** @class */ (function () {
    function MaskColumnAddEditModalPageModule() {
    }
    MaskColumnAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mask_column_add_edit_modal__["a" /* MaskColumnAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mask_column_add_edit_modal__["a" /* MaskColumnAddEditModalPage */]),
            ],
        })
    ], MaskColumnAddEditModalPageModule);
    return MaskColumnAddEditModalPageModule;
}());

//# sourceMappingURL=mask-column-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=332.js.map