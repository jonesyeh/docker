webpackJsonp([292],{

/***/ 1285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatchProgramCheckAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_ProgramCheckViewModel__ = __webpack_require__(936);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_ViewModel_TableViewModel__ = __webpack_require__(132);
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
var BatchProgramCheckAddEditModalPage = /** @class */ (function () {
    function BatchProgramCheckAddEditModalPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.title = "批次檢核程式";
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_ProgramCheckViewModel__["a" /* ProgramCheckViewModel */]();
        if (this.change_mode === 'c')
            this.item.program_no = "auto";
        else
            this.item.program_no = navParams.data.item.program_no;
        this.item.program_func_desc = navParams.data.item.program_func_desc;
        this.item.temp_schema = navParams.data.item.temp_schema;
        this.item.temp_table = navParams.data.item.temp_table;
        this.item.temp_tablefullname = navParams.data.item.temp_tablefullname;
        this.item.temp_column_check = navParams.data.item.temp_column_check;
        this.item.where_condition = navParams.data.item.where_condition;
        this.item.check_schema = navParams.data.item.check_schema;
        this.item.check_table = navParams.data.item.check_table;
        this.item.check_tablefullname = navParams.data.item.check_tablefullname;
        this.item.check_column = navParams.data.item.check_column;
        this.item.err_key = navParams.data.item.err_key;
        this.item.err_desc = navParams.data.item.err_desc;
        this.item.bus_type_key = navParams.data.item.bus_type_key;
        this.item.bus_type = navParams.data.item.bus_type;
        this.item.prog_type_key = navParams.data.item.prog_type_key;
        this.item.prog_type = navParams.data.item.prog_type;
        this.item.is_active = navParams.data.item.is_active;
        this.item.create_time = navParams.data.item.create_time;
        this.item.creator = navParams.data.item.creator;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.program_type_seq = navParams.data.item.program_type_seq;
    }
    BatchProgramCheckAddEditModalPage.prototype.SelectBusType = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.bus_type_key,
            code_type: "022"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.bus_type_key = select_data.code_key;
            _this.item.bus_type = select_data.code_desc;
        });
        modal.present();
    };
    BatchProgramCheckAddEditModalPage.prototype.SelectErrDesc = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.err_key,
            code_type: "003"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.err_key = select_data.code_key;
            _this.item.err_desc = select_data.code_desc;
        });
        modal.present();
    };
    BatchProgramCheckAddEditModalPage.prototype.SelectProgType = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.prog_type_key,
            code_key: "066|02,066|03"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.prog_type_key = select_data.code_key;
            _this.item.prog_type = select_data.code_desc;
        });
        modal.present();
    };
    BatchProgramCheckAddEditModalPage.prototype.SelectSrcTable = function () {
        var _this = this;
        var modal = this.modalCtrl.create("TableSelectModalPage", {
            select_item: this.item.temp_tablefullname
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.temp_schema = select_data.schemaname;
            _this.item.temp_table = select_data.tablename;
            _this.item.temp_tablefullname = select_data.tablefullname;
        });
        modal.present();
    };
    BatchProgramCheckAddEditModalPage.prototype.SelectTable = function () {
        var _this = this;
        var modal = this.modalCtrl.create("TableExtSelectModalPage", {
            select_item: this.item.check_tablefullname
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.check_schema = select_data.schemaname;
            _this.item.check_table = select_data.tablename;
            _this.item.check_tablefullname = select_data.tablefullname;
        });
        modal.present();
    };
    BatchProgramCheckAddEditModalPage.prototype.SelectSrcColumn = function () {
        var _this = this;
        this.temp_table_item = new __WEBPACK_IMPORTED_MODULE_3__Model_ViewModel_TableViewModel__["a" /* TableViewModel */]();
        this.temp_table_item.schemaname = this.item.temp_schema;
        this.temp_table_item.tablename = this.item.temp_table;
        this.temp_table_item.err_columnname = this.item.temp_column_check;
        var modal = this.modalCtrl.create("TableDetailSelectModalPage", {
            table_item: this.temp_table_item,
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.temp_column_check = select_data.columnname;
        });
        modal.present();
    };
    BatchProgramCheckAddEditModalPage.prototype.SelectCheckColumn = function () {
        var _this = this;
        var modal = this.modalCtrl.create("TableDetailExtSelectModalPage", {
            schemaname: this.item.check_schema,
            tablename: this.item.check_table,
            select_item: this.item.check_column,
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.check_column = select_data.columnname;
        });
        modal.present();
    };
    BatchProgramCheckAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    BatchProgramCheckAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    BatchProgramCheckAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ProgramModalPage");
    };
    BatchProgramCheckAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-batch-program-check-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\batch-program-check-add-edit-modal\batch-program-check-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  padding>\n    <form #Form="ngForm">\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label stacked >程式編號</ion-label>\n              <ion-input type="text" disabled=true name="program_no" #program_no="ngModel" [(ngModel)]="item.program_no"\n                required></ion-input>\n\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n                <ion-label stacked >程式說明</ion-label>\n              <ion-input type="text" [disabled]="CanEditBatch==false" name="program_func_desc" #program_func_desc="ngModel" [(ngModel)]="item.program_func_desc"\n                required></ion-input>\n            </ion-item>\n            <div *ngIf="program_func_desc.errors && program_func_desc.touched" class="error-message">\n              程式說明不能為空白\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12 col-sm-4>\n            <ion-item>\n              <ion-label stacked>業務別</ion-label>\n              <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="bus_type_key" #bus_type_key="ngModel" [(ngModel)]="item.bus_type_key"\n                required></ion-input>\n\n              <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectBusType()">\n                <ion-icon name="arrow-dropdown"></ion-icon>\n              </button>\n            </ion-item>\n\n            <div *ngIf="bus_type_key.errors && bus_type_key.touched " class="error-message">\n              業務別不能為空白\n            </div>\n          </ion-col>\n          <ion-col col-12 col-sm-8>\n            <ion-item>\n              <ion-label stacked>業務別</ion-label>\n              <ion-input type="text" [disabled]=true name="bus_type" #bus_type="ngModel" [(ngModel)]="item.bus_type" required></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label stacked>啟用</ion-label>\n            <ion-checkbox [disabled]="CanEditBatch==false" name="is_active" #is_active="ngModel" [(ngModel)]="item.is_active"></ion-checkbox>\n          </ion-item>\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-4>\n          <ion-item>\n            <ion-label stacked>來源結構描述</ion-label>\n            <ion-input type="text" [disabled]="CanEditBatch==false " name="temp_schema" #temp_schema="ngModel" [(ngModel)]="item.temp_schema"\n              required maxlength="30"></ion-input>\n          </ion-item>\n          <div *ngIf="temp_schema.errors && temp_schema.touched" class="error-message">\n            來源結構描述不能為空白\n          </div>\n        </ion-col>\n        <ion-col col-12 col-sm-8>\n          <ion-item>\n            <ion-label stacked>來源資料表名稱</ion-label>\n            <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="temp_table" #temp_table="ngModel" [(ngModel)]="item.temp_table"\n              required maxlength="50"></ion-input>\n            <button ion-button outline item-end icon-right *ngIf="CanEditBatch==true " (click)="SelectSrcTable()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-item>\n          <div *ngIf="temp_table.errors && temp_table.touched" class="error-message">\n            來源資料表名稱不能為空白\n          </div>\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col >\n          <ion-item>\n            <ion-label stacked>來源篩選條件</ion-label>\n            <ion-input type="text" title="不需含where關鍵字" maxlength="255" [disabled]="CanEditBatch==false" name="where_condition" #where_condition="ngModel" [(ngModel)]="item.where_condition"\n              ></ion-input>\n          </ion-item>\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-4>\n          <ion-item>\n            <ion-label stacked>比對結構描述</ion-label>\n            <ion-input type="text" [disabled]="CanEditBatch==false " name="check_schema" #check_schema="ngModel" [(ngModel)]="item.check_schema"\n              required maxlength="30"></ion-input>\n          </ion-item>\n          <div *ngIf="check_schema.errors && check_schema.touched" class="error-message">\n            比對結構描述不能為空白\n          </div>\n        </ion-col>\n        <ion-col col-12 col-sm-8>\n          <ion-item>\n            <ion-label stacked>比對資料表名稱</ion-label>\n            <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="check_table" #check_table="ngModel" [(ngModel)]="item.check_table"\n              required maxlength="50"></ion-input>\n            <button ion-button outline item-end icon-right *ngIf="CanEditBatch==true " (click)="SelectTable()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-item>\n          <div *ngIf="check_table.errors && check_table.touched" class="error-message">\n            比對資料表名稱不能為空白\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-4>\n          <ion-item>\n            <ion-label stacked>檢核類型</ion-label>\n            <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="prog_type_key" #prog_type_key="ngModel" [(ngModel)]="item.prog_type_key"\n              required></ion-input>\n\n            <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectProgType()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-item>\n\n          <div *ngIf="prog_type_key.errors && prog_type_key.touched " class="error-message">\n            檢核類型不能為空白\n          </div>\n        </ion-col>\n        <ion-col col-12 col-sm-8>\n          <ion-item>\n            <ion-label stacked>檢核類型</ion-label>\n            <ion-input type="text" [disabled]=true name="prog_type" #prog_type="ngModel" [(ngModel)]="item.prog_type" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-4>\n          <ion-item>\n            <ion-label stacked>異常碼</ion-label>\n            <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="err_key" #err_key="ngModel" [(ngModel)]="item.err_key"\n              required></ion-input>\n\n            <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectErrDesc()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-item>\n\n          <div *ngIf="err_key.errors && err_key.touched " class="error-message">\n            異常碼不能為空白\n          </div>\n        </ion-col>\n        <ion-col col-12 col-sm-8>\n          <ion-item>\n            <ion-label stacked>異常碼</ion-label>\n            <ion-input type="text" [disabled]=true name="err_desc" #err_desc="ngModel" [(ngModel)]="item.err_desc" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf="item.prog_type_key==\'066|03\'">\n\n        <ion-col col-12 col-sm-6>\n          <ion-item>\n            <ion-label stacked>來源檢核欄位</ion-label>\n            <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="temp_column_check" #temp_column_check="ngModel" [(ngModel)]="item.temp_column_check"\n              required maxlength="50"></ion-input>\n            <button ion-button outline item-end icon-right *ngIf="CanEditBatch==true " (click)="SelectSrcColumn()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-item>\n          <div *ngIf="temp_column_check.errors && temp_column_check.touched" class="error-message">\n            來源檢核欄位不能為空白\n          </div>\n\n        </ion-col>\n        <ion-col   col-12 col-sm-6>\n          <ion-item>\n            <ion-label stacked>比對欄位</ion-label>\n            <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="check_column" #check_column="ngModel" [(ngModel)]="item.check_column"\n              required maxlength="50"></ion-input>\n            <button ion-button outline item-end icon-right *ngIf="CanEditBatch==true " (click)="SelectCheckColumn()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-item>\n          <div *ngIf="check_column.errors && check_column.touched" class="error-message">\n              比對欄位不能為空白\n          </div>\n\n        </ion-col>\n      </ion-row>\n\n      </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditBatch==false"  ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\batch-program-check-add-edit-modal\batch-program-check-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], BatchProgramCheckAddEditModalPage);
    return BatchProgramCheckAddEditModalPage;
}());

//# sourceMappingURL=batch-program-check-add-edit-modal.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchProgramCheckAddEditModalPageModule", function() { return BatchProgramCheckAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__batch_program_check_add_edit_modal__ = __webpack_require__(1285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BatchProgramCheckAddEditModalPageModule = /** @class */ (function () {
    function BatchProgramCheckAddEditModalPageModule() {
    }
    BatchProgramCheckAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__batch_program_check_add_edit_modal__["a" /* BatchProgramCheckAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__batch_program_check_add_edit_modal__["a" /* BatchProgramCheckAddEditModalPage */]),
            ],
        })
    ], BatchProgramCheckAddEditModalPageModule);
    return BatchProgramCheckAddEditModalPageModule;
}());

//# sourceMappingURL=batch-program-check-add-edit-modal.module.js.map

/***/ }),

/***/ 936:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramCheckViewModel; });
var ProgramCheckViewModel = /** @class */ (function () {
    function ProgramCheckViewModel() {
    }
    return ProgramCheckViewModel;
}());

//# sourceMappingURL=ProgramCheckViewModel.js.map

/***/ })

});
//# sourceMappingURL=292.js.map