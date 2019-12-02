webpackJsonp([316],{

/***/ 1019:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnTypeMappingViewModel; });
var ColumnTypeMappingViewModel = /** @class */ (function () {
    function ColumnTypeMappingViewModel() {
    }
    return ColumnTypeMappingViewModel;
}());

//# sourceMappingURL=ColumnTypeMappingViewModel.js.map

/***/ }),

/***/ 1310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnTypeMappingAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_ColumnTypeMappingViewModel__ = __webpack_require__(1019);
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
 * Generated class for the ColumnTypeMappingModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ColumnTypeMappingAddEditModalPage = /** @class */ (function () {
    function ColumnTypeMappingAddEditModalPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_ColumnTypeMappingViewModel__["a" /* ColumnTypeMappingViewModel */]();
        this.item.columnname = navParams.data.item.columnname;
        this.item.column_type_key = navParams.data.item.column_type_key;
        this.item.column_type = navParams.data.item.column_type;
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
    ColumnTypeMappingAddEditModalPage.prototype.SelectColumnType = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.column_type_key,
            code_type: "010",
            code_key: "",
            title: "欄位類型"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.column_type_key = select_data.code_key;
            _this.item.column_type = select_data.code_desc;
        });
        modal.present();
    };
    ColumnTypeMappingAddEditModalPage.prototype.SelectColumn = function () {
        var _this = this;
        var modal = this.modalCtrl.create("GlossarySelectModalPage", {
            eng_name: this.item.columnname
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.columnname = select_data.eng_name;
        });
        modal.present();
    };
    ColumnTypeMappingAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    ColumnTypeMappingAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ColumnTypeMappingAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ColumnTypeMappingModalPage");
    };
    ColumnTypeMappingAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-column-type-mapping-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\column-type-mapping-add-edit-modal\column-type-mapping-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n\n\n    <ion-row >\n\n      <ion-col >\n        <ion-item>\n          <ion-label stacked>欄位名稱</ion-label>\n          <ion-input type="text" [disabled]="mode==\'PUT\'"  name="columnname" #columnname="ngModel" [(ngModel)]="item.columnname"></ion-input>\n\n          <button ion-button [disabled]="mode==\'PUT\'" outline item-end icon-right (click)="SelectColumn()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="columnname.errors && columnname.touched" class="error-message">\n            欄位名稱不能為空白\n        </div>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>欄位類型</ion-label>\n          <ion-input type="text" name="column_type_key" #column_type_key="ngModel" [(ngModel)]="item.column_type_key" required></ion-input>\n          <button ion-button outline item-end icon-right (click)="SelectColumnType()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n        <div *ngIf="column_type_key.errors && column_type_key.touched" class="error-message">\n            欄位類型不能為空白\n        </div>\n\n      </ion-col>\n      <ion-col col-12 col-sm-6>\n          <ion-item>\n\n            {{item.column_type}}\n\n          </ion-item>\n        </ion-col>\n    </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small [disabled]="CanEditJob==false" title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\column-type-mapping-add-edit-modal\column-type-mapping-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], ColumnTypeMappingAddEditModalPage);
    return ColumnTypeMappingAddEditModalPage;
}());

//# sourceMappingURL=column-type-mapping-add-edit-modal.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnTypeMappingAddEditModalPageModule", function() { return ColumnTypeMappingAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_type_mapping_add_edit_modal__ = __webpack_require__(1310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ColumnTypeMappingAddEditModalPageModule = /** @class */ (function () {
    function ColumnTypeMappingAddEditModalPageModule() {
    }
    ColumnTypeMappingAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__column_type_mapping_add_edit_modal__["a" /* ColumnTypeMappingAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__column_type_mapping_add_edit_modal__["a" /* ColumnTypeMappingAddEditModalPage */]),
            ],
        })
    ], ColumnTypeMappingAddEditModalPageModule);
    return ColumnTypeMappingAddEditModalPageModule;
}());

//# sourceMappingURL=column-type-mapping-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=316.js.map