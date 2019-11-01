webpackJsonp([323],{

/***/ 1662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_TableViewModel__ = __webpack_require__(132);
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
 * Generated class for the TableModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TableAddEditModalPage = /** @class */ (function () {
    function TableAddEditModalPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_TableViewModel__["a" /* TableViewModel */]();
        this.item.schemaname = navParams.data.item.schemaname;
        this.item.tablename = navParams.data.item.tablename;
        this.item.tablecname = navParams.data.item.tablecname;
        this.item.file_group = navParams.data.item.file_group;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.item.table_cat_key = navParams.data.item.table_cat_key;
        this.item.table_cat_desc = navParams.data.item.table_cat_desc;
        this.item.err_columnname = navParams.data.item.err_columnname;
        this.mode = navParams.data.mode;
        this.CanEditTable = navParams.data.CanEditTable;
        if (this.mode === "POST")
            this.title = "新增";
        else
            this.title = "更新";
    }
    TableAddEditModalPage.prototype.SelectCat = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.table_cat_key,
            code_type: "063",
            code_key: "",
            title: "類別",
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.table_cat_key = select_data.code_key;
            _this.item.table_cat_desc = select_data.code_desc;
        });
        modal.present();
    };
    TableAddEditModalPage.prototype.SelectErrColumn = function () {
        var _this = this;
        var modal = this.modalCtrl.create("TableDetailSelectModalPage", {
            table_item: this.item,
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.err_columnname = select_data.columnname;
        });
        modal.present();
    };
    TableAddEditModalPage.prototype.SelectTable = function () {
        var _this = this;
        var modal = this.modalCtrl.create("TableSelectModalPage", {
            select_item: this.item.tablefullname,
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.schemaname = select_data.schemaname;
            _this.item.tablename = select_data.tablename;
            _this.item.tablefullname = select_data.tablefullname;
        });
        modal.present();
    };
    TableAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    TableAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    TableAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad TableModalPage");
    };
    TableAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-table-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\table-add-edit-modal\table-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm" >\n\n    <ion-row>\n        <ion-col col-12 col-sm-6 >\n            <ion-item>\n              <ion-label stacked>結構描述</ion-label>\n              <ion-input type="text" [disabled]="CanEditTable==false || mode==\'PUT\'" name="schemaname" #schemaname="ngModel" [(ngModel)]="item.schemaname" required></ion-input>\n            </ion-item>\n            <div *ngIf="schemaname.errors && schemaname.touched" class="error-message">\n                結構描述不能為空白\n            </div>\n          </ion-col>\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>資料表名稱</ion-label>\n          <ion-input type="text" [disabled]="CanEditTable==false || mode==\'PUT\'" name="tablename" #tablename="ngModel" [(ngModel)]="item.tablename" required></ion-input>\n        </ion-item>\n        <div *ngIf="tablename.errors && tablename.touched" class="error-message">\n          資料表名稱不能為空白\n        </div>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label stacked>資料表說明</ion-label>\n          <ion-input type="text" [disabled]="CanEditTable==false" name="tablecname" #tablecname="ngModel" [(ngModel)]="item.tablecname" required></ion-input>\n          <!-- <button ion-button outline item-end icon-right (click)="SelectTable()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button> -->\n        </ion-item>\n        <div *ngIf="tablecname.errors && tablecname.touched" class="error-message">\n          資料表說明不能為空白\n        </div>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col col-12  col-sm-6 >\n        <ion-item>\n          <ion-label stacked>類別</ion-label>\n          <ion-input type="text" [disabled]="true" name="table_cat_desc" #table_cat_desc="ngModel" [(ngModel)]="item.table_cat_desc" required></ion-input>\n          <!-- <ion-label name="table_cat_desc"  [ngModel]="item.table_cat_desc" ></ion-label> -->\n          <button ion-button outline item-end icon-right (click)="SelectCat()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12  col-sm-6>\n          <ion-item>\n            <ion-label stacked>檔案群組</ion-label>\n            <ion-input type="text" [disabled]="CanEditTable==false" name="file_group" #file_group="ngModel" [(ngModel)]="item.file_group" required></ion-input>\n\n          </ion-item>\n          <div *ngIf="file_group.errors && file_group.touched" class="error-message">\n            檔案群組不能為空白\n          </div>\n        </ion-col>\n    </ion-row>\n    <ion-row *ngIf="mode==\'PUT\'">\n\n        <ion-col>\n          <ion-item>\n            <ion-label stacked>異常欄位名稱</ion-label>\n            <ion-input type="text"    name="err_columnname" #err_columnname="ngModel" [(ngModel)]="item.err_columnname"></ion-input>\n\n            <button ion-button outline item-end  icon-right (click)="SelectErrColumn()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-item>\n\n\n        </ion-col>\n\n      </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small [disabled]="CanEditTable==false" title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\table-add-edit-modal\table-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], TableAddEditModalPage);
    return TableAddEditModalPage;
}());

//# sourceMappingURL=table-add-edit-modal.js.map

/***/ }),

/***/ 743:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableAddEditModalPageModule", function() { return TableAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_add_edit_modal__ = __webpack_require__(1662);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TableAddEditModalPageModule = /** @class */ (function () {
    function TableAddEditModalPageModule() {
    }
    TableAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__table_add_edit_modal__["a" /* TableAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__table_add_edit_modal__["a" /* TableAddEditModalPage */]),
            ],
        })
    ], TableAddEditModalPageModule);
    return TableAddEditModalPageModule;
}());

//# sourceMappingURL=table-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=323.js.map