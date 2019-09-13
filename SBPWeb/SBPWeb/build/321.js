webpackJsonp([321],{

/***/ 1669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableDetailEditModalPage; });
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
var TableDetailEditModalPage = /** @class */ (function () {
    function TableDetailEditModalPage(navCtrl, navParams, viewCtrl, modalCtrl) {
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
        this.item.column_type_key = navParams.data.item.column_type_key;
        this.item.column_type = navParams.data.item.column_type;
        this.item.is_sign = navParams.data.item.is_sign;
        this.item.id_check = navParams.data.item.id_check;
        this.item.date_convert_format = navParams.data.item.date_convert_format;
        this.item.col_start_loc = navParams.data.item.col_start_loc;
        this.item.col_length = navParams.data.item.col_length;
        this.item.del_flag = navParams.data.item.del_flag;
        this.mode = navParams.data.mode;
        this.CanEditTable = navParams.data.CanEditTable;
        this.title = this.item.columnname;
    }
    TableDetailEditModalPage.prototype.SelectColumnType = function () {
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
    TableDetailEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    TableDetailEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    TableDetailEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad TableDetailModalPage");
    };
    TableDetailEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page table-detail-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\table-detail-edit-modal\table-detail-edit-modal.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content padding>\n    <form #Form="ngForm" >\n\n      <ion-row>\n          <ion-col col-6  >\n              <ion-item>\n                <ion-label stacked>欄編</ion-label>\n                <ion-input type="number" [disabled]="CanEditTable==false" name="column_id" #column_id="ngModel" [(ngModel)]="item.column_id" required></ion-input>\n              </ion-item>\n              <div *ngIf="column_id.errors && column_id.touched" class="error-message">\n                  欄編不能為空白\n              </div>\n            </ion-col>\n            <ion-col col-6 >\n                <ion-item>\n                  <ion-label stacked>檔編</ion-label>\n                  <ion-input type="number" [disabled]="CanEditTable==false" name="col_index" #col_index="ngModel" [(ngModel)]="item.col_index" required></ion-input>\n                </ion-item>\n                <div *ngIf="col_index.errors && col_index.touched" class="error-message">\n                    檔編不能為空白\n                </div>\n              </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-6 >\n          <ion-item>\n            <ion-label stacked>欄位類型</ion-label>\n            <ion-input type="text" [disabled]="CanEditTable==false" name="column_type_key" #column_type_key="ngModel" [(ngModel)]="item.column_type_key"></ion-input>\n            <button ion-button outline item-end icon-right (click)="SelectColumnType()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n          </ion-item>\n\n        </ion-col>\n        <ion-col col-12  col-sm-6 >\n          <ion-item>\n            <ion-label stacked>欄位類型</ion-label>\n            <ion-input type="text" [disabled]="true" name="column_type" #column_type="ngModel" [(ngModel)]="item.column_type"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n\n        <ion-col col-6>\n            <ion-item>\n              <ion-label  stacked>固定長度(位置)</ion-label>\n              <ion-input  type="number" [disabled]="CanEditTable==false" name="col_start_loc" #col_start_loc="ngModel" [(ngModel)]="item.col_start_loc" required></ion-input>\n            </ion-item>\n          </ion-col>\n          <ion-col col-6>\n              <ion-item>\n                <ion-label  stacked>固定長度(長度)</ion-label>\n                <ion-input  type="number" [disabled]="CanEditTable==false" name="col_length" #col_length="ngModel" [(ngModel)]="item.col_length" required></ion-input>\n              </ion-item>\n            </ion-col>\n      </ion-row>\n      <ion-row>\n\n        <ion-col col-6  col-sm-6>\n            <ion-item>\n              <ion-label stacked>日期格式</ion-label>\n              <ion-input type="text" [disabled]="CanEditTable==false" name="date_convert_format" #date_convert_format="ngModel" [(ngModel)]="item.date_convert_format"></ion-input>\n            </ion-item>\n\n          </ion-col>\n          <ion-col col-6  col-sm-6 >\n              <ion-item>\n                <ion-label stacked>id檢核</ion-label>\n                <ion-checkbox  [disabled]="CanEditTable==false" name="id_check" #id_check="ngModel" [(ngModel)]="item.id_check"></ion-checkbox>\n              </ion-item>\n            </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6  col-sm-6 >\n          <ion-item>\n            <ion-label stacked>正負</ion-label>\n            <ion-checkbox  [disabled]="CanEditTable==false" name="is_sign" #is_sign="ngModel" [(ngModel)]="item.is_sign"></ion-checkbox>\n          </ion-item>\n        </ion-col>\n        <ion-col col-6  col-sm-6 >\n            <ion-item>\n              <ion-label stacked>刪除</ion-label>\n              <ion-checkbox  [disabled]="CanEditTable==false" name="del_flag" #is_sign="ngModel" [(ngModel)]="item.del_flag"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n      </ion-row>\n\n\n    </form>\n\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-row>\n        <ion-col>\n          <div [ngClass]="[\'command\']">\n            <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n              <ion-icon name="backspace"></ion-icon>\n            </button>\n            <button small [disabled]="CanEditTable==false" title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n              <ion-icon name="checkmark-circle"></ion-icon>\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\table-detail-edit-modal\table-detail-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], TableDetailEditModalPage);
    return TableDetailEditModalPage;
}());

//# sourceMappingURL=table-detail-edit-modal.js.map

/***/ }),

/***/ 749:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDetailEditModalPageModule", function() { return TableDetailEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_detail_edit_modal__ = __webpack_require__(1669);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TableDetailEditModalPageModule = /** @class */ (function () {
    function TableDetailEditModalPageModule() {
    }
    TableDetailEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__table_detail_edit_modal__["a" /* TableDetailEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__table_detail_edit_modal__["a" /* TableDetailEditModalPage */]),
            ],
        })
    ], TableDetailEditModalPageModule);
    return TableDetailEditModalPageModule;
}());

//# sourceMappingURL=table-detail-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=321.js.map