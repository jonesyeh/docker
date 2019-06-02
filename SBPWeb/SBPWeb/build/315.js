webpackJsonp([315],{

/***/ 1257:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditTableAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_AuditTableViewModel__ = __webpack_require__(993);
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
 * Generated class for the AuditTableModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AuditTableAddEditModalPage = /** @class */ (function () {
    function AuditTableAddEditModalPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_AuditTableViewModel__["a" /* AuditTableViewModel */]();
        this.item.schemaname = navParams.data.item.schemaname;
        this.item.tablename = navParams.data.item.tablename;
        this.item.loginserts = navParams.data.item.loginserts;
        this.item.logdeletes = navParams.data.item.logdeletes;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.mode = navParams.data.mode;
        this.CanEditTable = navParams.data.CanEditTable;
        if (this.mode === "POST")
            this.title = "新增";
        else
            this.title = "更新";
    }
    AuditTableAddEditModalPage.prototype.SelectTable = function () {
        var _this = this;
        var modal = this.modalCtrl.create("TableExtSelectModalPage", {
            select_item: this.item.schemaname + "." + this.item.tablename,
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.schemaname = select_data.schemaname;
            _this.item.tablename = select_data.tablename;
            _this.item.schemaname = select_data.schemaname;
            _this.item.tablename = select_data.tablename;
        });
        modal.present();
    };
    AuditTableAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    AuditTableAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    AuditTableAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad AuditTableAddEditModalPage");
    };
    AuditTableAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page audit-table-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\audit-table-add-edit-modal\audit-table-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm" >\n\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>結構描述</ion-label>\n          <ion-input type="text"  [disabled]="CanEditTable==false  || mode==\'PUT\'" name="schemaname" #schemaname="ngModel" [(ngModel)]="item.schemaname"\n             maxlength="30"></ion-input>\n        </ion-item>\n\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>資料表名稱</ion-label>\n          <ion-input type="text"  [disabled]="CanEditTable==false || mode==\'PUT\'" name="tablename" #tablename="ngModel" [(ngModel)]="item.tablename"\n            required maxlength="50"></ion-input>\n          <button ion-button outline item-end icon-right *ngIf="CanEditTable==true && mode==\'POST\'" (click)="SelectTable()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n        <div *ngIf="tablename.errors && tablename.touched" class="error-message">\n          資料表名稱不能為空白\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>新增稽核</ion-label>\n          <ion-checkbox [disabled]="CanEditTable==false" name="loginserts" #loginserts="ngModel" [(ngModel)]="item.loginserts"></ion-checkbox>\n        </ion-item>\n\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>刪除稽核</ion-label>\n          <ion-checkbox [disabled]="CanEditTable==false" name="logdeletes" #logdeletes="ngModel" [(ngModel)]="item.logdeletes"></ion-checkbox>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small [disabled]="CanEditTable==false" title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\audit-table-add-edit-modal\audit-table-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], AuditTableAddEditModalPage);
    return AuditTableAddEditModalPage;
}());

//# sourceMappingURL=audit-table-add-edit-modal.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditTableAddEditModalPageModule", function() { return AuditTableAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__audit_table_add_edit_modal__ = __webpack_require__(1257);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AuditTableAddEditModalPageModule = /** @class */ (function () {
    function AuditTableAddEditModalPageModule() {
    }
    AuditTableAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__audit_table_add_edit_modal__["a" /* AuditTableAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__audit_table_add_edit_modal__["a" /* AuditTableAddEditModalPage */]),
            ],
        })
    ], AuditTableAddEditModalPageModule);
    return AuditTableAddEditModalPageModule;
}());

//# sourceMappingURL=audit-table-add-edit-modal.module.js.map

/***/ }),

/***/ 993:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuditTableViewModel; });
var AuditTableViewModel = /** @class */ (function () {
    function AuditTableViewModel() {
    }
    return AuditTableViewModel;
}());

//# sourceMappingURL=AuditTableViewModel.js.map

/***/ })

});
//# sourceMappingURL=315.js.map