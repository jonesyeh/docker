webpackJsonp([293],{

/***/ 1094:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramCheckPKViewModel; });
var ProgramCheckPKViewModel = /** @class */ (function () {
    function ProgramCheckPKViewModel() {
    }
    return ProgramCheckPKViewModel;
}());

//# sourceMappingURL=ProgramCheckPKViewModel.js.map

/***/ }),

/***/ 1283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatchProgramCheckPkEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_ProgramCheckPKViewModel__ = __webpack_require__(1094);
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
 * Generated class for the programModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BatchProgramCheckPkEditModalPage = /** @class */ (function () {
    function BatchProgramCheckPkEditModalPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.title = "批次檢核PK對應";
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_ProgramCheckPKViewModel__["a" /* ProgramCheckPKViewModel */]();
        this.item.program_no = navParams.data.item.program_no;
        this.item.column_id = navParams.data.item.column_id;
        this.item.check_pk_column = navParams.data.item.check_pk_column;
        this.item.temp_pk_column = navParams.data.item.temp_pk_column;
        this.item.create_time = navParams.data.item.create_time;
        this.item.creator = navParams.data.item.creator;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.item.modifier = navParams.data.item.modifier;
        this.temp_table_item = navParams.data.temp_table_item;
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.mode = navParams.data.mode;
        console.log(this.CanEditBatch);
    }
    BatchProgramCheckPkEditModalPage.prototype.SelectSrcColumn = function () {
        var _this = this;
        var modal = this.modalCtrl.create("TableDetailSelectModalPage", {
            table_item: this.temp_table_item,
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.temp_pk_column = select_data.columnname;
        });
        modal.present();
    };
    BatchProgramCheckPkEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    BatchProgramCheckPkEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    BatchProgramCheckPkEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ProgramModalPage");
    };
    BatchProgramCheckPkEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-batch-program-check-pk-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\batch-program-check-pk-edit-modal\batch-program-check-pk-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>欄位編號</ion-label>\n          <ion-input type="text" disabled=true name="column_id" #column_id="ngModel" [(ngModel)]="item.column_id" required></ion-input>\n\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>比對PK欄位</ion-label>\n          <ion-input type="text" [disabled]=true name="check_pk_column" #check_pk_column="ngModel" [(ngModel)]="item.check_pk_column"\n            required maxlength="50"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>來源欄位</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="temp_pk_column" #temp_pk_column="ngModel" [(ngModel)]="item.temp_pk_column"\n            required maxlength="50"></ion-input>\n          <button ion-button outline item-end icon-right *ngIf="CanEditBatch==true " (click)="SelectSrcColumn()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n        <div *ngIf="temp_pk_column.errors && temp_pk_column.touched" class="error-message">\n          來源欄位不能為空白\n        </div>\n\n      </ion-col>\n\n    </ion-row>\n\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditBatch==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n            (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\batch-program-check-pk-edit-modal\batch-program-check-pk-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], BatchProgramCheckPkEditModalPage);
    return BatchProgramCheckPkEditModalPage;
}());

//# sourceMappingURL=batch-program-check-pk-edit-modal.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchProgramCheckPkEditModalPageModule", function() { return BatchProgramCheckPkEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__batch_program_check_pk_edit_modal__ = __webpack_require__(1283);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BatchProgramCheckPkEditModalPageModule = /** @class */ (function () {
    function BatchProgramCheckPkEditModalPageModule() {
    }
    BatchProgramCheckPkEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__batch_program_check_pk_edit_modal__["a" /* BatchProgramCheckPkEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__batch_program_check_pk_edit_modal__["a" /* BatchProgramCheckPkEditModalPage */]),
            ],
        })
    ], BatchProgramCheckPkEditModalPageModule);
    return BatchProgramCheckPkEditModalPageModule;
}());

//# sourceMappingURL=batch-program-check-pk-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=293.js.map