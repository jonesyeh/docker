webpackJsonp([322],{

/***/ 1667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableDetailAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_TableDetailViewModel__ = __webpack_require__(133);
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
 * Generated class for the TableDetailModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TableDetailAddEditModalPage = /** @class */ (function () {
    function TableDetailAddEditModalPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_TableDetailViewModel__["a" /* TableDetailViewModel */]();
        this.item.schemaname = navParams.data.item.schemaname;
        this.item.tablename = navParams.data.item.tablename;
        this.item.tablecname = navParams.data.item.tablecname;
        this.item.columncname = navParams.data.item.columncname;
        this.item.column_id = navParams.data.item.column_id;
        if (this.mode === "POST")
            this.item.col_index = this.item.column_id;
        else
            this.item.col_index = navParams.data.item.col_index;
        this.item.columnname = navParams.data.item.columnname;
        this.item.data_type = navParams.data.item.data_type;
        this.item.is_pk = navParams.data.item.is_pk;
        this.item.is_uni_cluster = navParams.data.item.is_uni_cluster;
        this.item.is_cluster = navParams.data.item.is_cluster;
        this.item.is_nullable = navParams.data.item.is_nullable;
        this.item.default_value = navParams.data.item.default_value;
        this.item.is_identity = navParams.data.item.is_identity;
        this.item.memo = navParams.data.item.memo;
        this.item.computecolumn = navParams.data.item.computecolumn;
        this.item.history_column_flag = navParams.data.item.history_column_flag;
        this.item.column_type_key = navParams.data.item.column_type_key;
        this.item.column_type = navParams.data.item.column_type;
        this.item.date_convert_format = navParams.data.item.date_convert_format;
        this.mode = navParams.data.mode;
        this.CanEditTable = navParams.data.CanEditTable;
        if (this.mode === "POST")
            this.title = "新增";
        else
            this.title = "更新";
    }
    TableDetailAddEditModalPage.prototype.SelectColumn = function () {
        var _this = this;
        var modal = this.modalCtrl.create("GlossarySelectModalPage", {
            eng_name: this.item.columnname,
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.columnname = select_data.eng_name;
            _this.item.columncname = select_data.cht_name;
            _this.item.data_type = select_data.data_type;
            if (_this.item.memo === "")
                _this.item.memo = select_data.cht_name;
        });
        modal.present();
    };
    TableDetailAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    TableDetailAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    TableDetailAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad TableDetailModalPage");
    };
    TableDetailAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page table-detail-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\table-detail-add-edit-modal\table-detail-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm" >\n\n    <ion-row>\n\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>欄位名稱</ion-label>\n          <ion-input type="text" disabled="true" name="columnname" #columnname="ngModel" [(ngModel)]="item.columnname" required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditTable==true && mode==\'POST\'"  icon-right (click)="SelectColumn()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="columnname.errors && columnname.touched" class="error-message">\n          欄位名稱不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12  col-sm-6 >\n          <ion-item>\n            <ion-label stacked>欄位說明</ion-label>\n            <ion-input type="text" [disabled]="true" name="columncname" #columncname="ngModel" [(ngModel)]="item.columncname" required></ion-input>\n          </ion-item>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n\n      <ion-col col-6 col-sm-6 >\n        <ion-item>\n          <ion-label stacked>資料型態</ion-label>\n          <ion-input type="text" disabled="true" name="data_type" #data_type="ngModel" [(ngModel)]="item.data_type" required></ion-input>\n        </ion-item>\n\n      </ion-col>\n      <ion-col col-6 col-sm-6 >\n          <ion-item>\n            <ion-label stacked>編號</ion-label>\n            <ion-input type="number" [disabled]="CanEditTable==false" name="column_id" #column_id="ngModel" [(ngModel)]="item.column_id" required></ion-input>\n          </ion-item>\n          <div *ngIf="column_id.errors && column_id.touched" class="error-message">\n            編號不能為空白\n          </div>\n        </ion-col>\n\n    </ion-row>\n    <ion-row>\n\n      <ion-col col-6  col-sm-6>\n          <ion-item>\n            <ion-label  stacked>主鍵</ion-label>\n            <ion-input title="0:無、負：遞減" type="number" [disabled]="CanEditTable==false" name="is_pk" #is_pk="ngModel" [(ngModel)]="item.is_pk" required></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6  col-sm-6 >\n          <ion-item>\n            <ion-label stacked>空值</ion-label>\n            <ion-checkbox  [disabled]="CanEditTable==false" name="is_nullable" #is_nullable="ngModel" [(ngModel)]="item.is_nullable"></ion-checkbox>\n          </ion-item>\n        </ion-col>\n    </ion-row>\n    <ion-row *ngIf="CanEditTable==true && mode==\'PUT\'"  >\n\n        <ion-col col-6  col-sm-6>\n            <ion-item>\n              <ion-label  stacked>叢集唯一</ion-label>\n              <ion-input title="0:無、負：遞減" type="number" [disabled]="CanEditTable==false" name="is_uni_cluster" #is_uni_cluster="ngModel" [(ngModel)]="item.is_uni_cluster" required></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6  col-sm-6 >\n              <ion-item>\n                  <ion-label  stacked>叢集非唯一</ion-label>\n                  <ion-input title="0:無、負：遞減" type="number" [disabled]="CanEditTable==false" name="is_cluster" #is_cluster="ngModel" [(ngModel)]="item.is_cluster" required></ion-input>\n                </ion-item>\n          </ion-col>\n      </ion-row>\n    <ion-row>\n\n      <ion-col col-12  col-sm-6>\n          <ion-item>\n            <ion-label stacked>預設值</ion-label>\n            <ion-input type="text" [disabled]="CanEditTable==false" name="default_value" #default_value="ngModel" [(ngModel)]="item.default_value"></ion-input>\n          </ion-item>\n\n        </ion-col>\n        <ion-col col-12  col-sm-6>\n          <ion-item>\n            <ion-label stacked>計算欄位</ion-label>\n            <ion-input type="text" [disabled]="CanEditTable==false" name="computecolumn" #computecolumn="ngModel" [(ngModel)]="item.computecolumn"></ion-input>\n          </ion-item>\n\n        </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12  col-sm-6 >\n        <ion-item>\n          <ion-label stacked>自動累加</ion-label>\n          <ion-checkbox  [disabled]="CanEditTable==false" name="is_identity" #is_identity="ngModel" [(ngModel)]="item.is_identity"></ion-checkbox>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12  col-sm-6>\n          <ion-item>\n            <ion-label stacked>備註說明</ion-label>\n            <ion-input type="text" [disabled]="CanEditTable==false" name="memo" #memo="ngModel" [(ngModel)]="item.memo"></ion-input>\n          </ion-item>\n\n        </ion-col>\n    </ion-row>\n\n\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small [disabled]="CanEditTable==false" title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\table-detail-add-edit-modal\table-detail-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], TableDetailAddEditModalPage);
    return TableDetailAddEditModalPage;
}());

//# sourceMappingURL=table-detail-add-edit-modal.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDetailAddEditModalPageModule", function() { return TableDetailAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_detail_add_edit_modal__ = __webpack_require__(1667);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TableDetailAddEditModalPageModule = /** @class */ (function () {
    function TableDetailAddEditModalPageModule() {
    }
    TableDetailAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__table_detail_add_edit_modal__["a" /* TableDetailAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__table_detail_add_edit_modal__["a" /* TableDetailAddEditModalPage */]),
            ],
        })
    ], TableDetailAddEditModalPageModule);
    return TableDetailAddEditModalPageModule;
}());

//# sourceMappingURL=table-detail-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=322.js.map