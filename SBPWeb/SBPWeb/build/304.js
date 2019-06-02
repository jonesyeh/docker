webpackJsonp([304],{

/***/ 1040:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileImportAfterViewModel; });
var FileImportAfterViewModel = /** @class */ (function () {
    function FileImportAfterViewModel() {
    }
    return FileImportAfterViewModel;
}());

//# sourceMappingURL=FileImportAfterViewModel.js.map

/***/ }),

/***/ 1434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileImportAfterAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_ViewModel_FileImportAfterViewModel__ = __webpack_require__(1040);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_global_global__ = __webpack_require__(119);
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
 * Generated class for the FileImportAfterModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FileImportAfterAddEditModalPage = /** @class */ (function () {
    function FileImportAfterAddEditModalPage(navCtrl, navParams, viewCtrl, loadingCtrl, modalCtrl, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.global = global;
        this.sql_help = "\n  \u8B8A\u6578\u8AAA\u660E\uFF1A\n  {batch_log_seq}=\u6279\u6B21\u7D00\u9304\u5E8F\u865F,\n  {parent_batch_log_seq}=\u4E0A\u5C64\u6279\u6B21\u7D00\u9304\u5E8F\u865F,\n  {exec_log_seq}=\u8F49\u6A94\u5E8F\u865F,\n  {job_step_log_seq}=\u57F7\u884C\u4F5C\u696D\u6B65\u9A5F\u7D00\u9304\u5E8F\u865F,\n  {filename}=\u6A94\u540D,\n  {schema}=\u7D50\u69CB\u63CF\u8FF0,\n  {tablename}=\u532F\u5165\u8CC7\u6599\u8868\u540D\u7A31,\n  {ext_column}=\u7570\u5E38\u95DC\u9375\u5B57\u6B04\u4F4D,\n  {src_path_file}=\u4F86\u6E90\u8DEF\u5F91\u6A94\u540D,\n  {src_file_path}=\u4F86\u6E90\u6A94\u6848\u8DEF\u5F91,\n  {bk_path_file}=\u5099\u4EFD\u8DEF\u5F91\u6A94\u540D,\n  {bk_file_path}=\u5099\u4EFD\u6A94\u6848\u8DEF\u5F91,\n  {file_size}=\u6A94\u6848\u5927\u5C0F,\n  {file_ext}=\u9644\u6A94\u540D,\n  @bindarydata=\u4E8C\u9032\u4F4D\u6A94\u6848\u5167\u5BB9,\n  {JOB01},{JOB02},{JOB03}=\u4F5C\u696D\u8FF4\u5708\u53C3\u6578,\n  {LC01},{LC02},{LC03}=\u5167\u90E8\u6A94\u6848\u8FF4\u5708\u53C3\u6578,\n  ";
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.file_type_key = navParams.data.file_type_key;
        this.item = new __WEBPACK_IMPORTED_MODULE_3__Model_ViewModel_FileImportAfterViewModel__["a" /* FileImportAfterViewModel */]();
        this.item.exec_file_seq = navParams.data.item.exec_file_seq;
        this.item.exec_seq = navParams.data.item.exec_seq;
        this.item.import_sql_seq = navParams.data.item.import_sql_seq;
        if (this.mode === "POST") {
            this.item.exec_seq = navParams.data.totalRows + 1;
            this.item.import_sql_seq = this.item.exec_file_seq * 100 + this.item.exec_seq;
        }
        this.item.schemaname = navParams.data.item.schemaname;
        this.item.tablename = navParams.data.item.tablename;
        this.item.db_conn_id = navParams.data.item.db_conn_id;
        this.item.parameter_column_group = navParams.data.item.parameter_column_group;
        this.item.is_active = navParams.data.item.is_active;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.item.sql_statement = navParams.data.item.sql_statement;
        this.item.prog_type_key = navParams.data.item.prog_type_key;
        this.item.prog_type = navParams.data.item.prog_type;
        this.item.program_no = navParams.data.item.program_no;
        this.item.program_desc = navParams.data.item.program_desc;
        this.item.sql_statement = navParams.data.item.sql_statement;
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.title = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format("{0}.{1}", this.item.schemaname, this.item.tablename);
    }
    FileImportAfterAddEditModalPage.prototype.Help = function () {
        var _this = this;
        this.global.createLoader();
        this.global.loading.present().then(function () {
            _this.global.showMessage("SQL語法說明", _this.sql_help);
        });
    };
    FileImportAfterAddEditModalPage.prototype.SelectProgram = function () {
        var _this = this;
        var modal = this.modalCtrl.create("BatchProgramSelectModalPage", {
            select_item: this.item.program_no,
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.program_no = select_data.program_no;
            _this.item.program_desc = select_data.program_desc;
            _this.item.sql_statement = select_data.sql_statement;
            _this.item.is_active = select_data.is_active;
        });
        modal.present();
    };
    FileImportAfterAddEditModalPage.prototype.SelectProgType = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.prog_type_key,
            code_key: "066|00,066|01"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.prog_type_key = select_data.code_key;
            _this.item.prog_type = select_data.code_desc;
        });
        modal.present();
    };
    FileImportAfterAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    FileImportAfterAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FileImportAfterAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FileImportAfterModalPage");
    };
    FileImportAfterAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-file-import-After-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\file-import-after-add-edit-modal\file-import-After-add-edit-modal.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content padding>\n    <form #Form="ngForm">\n\n\n      <ion-row>\n        <ion-col col-12 col-sm-4>\n          <ion-item>\n            <ion-label stacked>清單序號</ion-label>\n            <ion-input type="number" [disabled]="CanEditBatch==false  || mode==\'PUT\'" name="import_sql_seq" #import_sql_seq="ngModel"\n              [(ngModel)]="item.import_sql_seq" required></ion-input>\n          </ion-item>\n          <div *ngIf="import_sql_seq.errors && import_sql_seq.touched" class="error-message">\n            清單序號不能為空白\n          </div>\n        </ion-col>\n        <ion-col col-12 col-sm-8>\n          <ion-item>\n            <ion-label stacked>程式</ion-label>\n            <ion-input type="text" readonly=true [disabled]="CanEditBatch==false " name="program_no" #program_no="ngModel" [(ngModel)]="item.program_no"\n              required maxlength="10"></ion-input>\n            <button ion-button outline item-end icon-right *ngIf="CanEditBatch==true " (click)="SelectProgram()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-item>\n          <div *ngIf="program_no.errors && program_no.touched" class="error-message">\n            程式不能為空白\n          </div>\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-6>\n          <ion-item>\n            <ion-label stacked>執行順序</ion-label>\n            <ion-input type="number" [disabled]="CanEditBatch==false" name="exec_seq" #exec_seq="ngModel" [(ngModel)]="item.exec_seq"\n              required></ion-input>\n          </ion-item>\n          <div *ngIf="exec_seq.errors && exec_seq.touched" class="error-message">\n            執行順序不能為空白\n          </div>\n        </ion-col>\n        <ion-col col-6 col-sm-6>\n          <ion-item>\n            <ion-label stacked>啟用</ion-label>\n            <ion-checkbox [disabled]="CanEditBatch==false" name="is_active" #is_active="ngModel" [(ngModel)]="item.is_active"></ion-checkbox>\n          </ion-item>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col col-6 col-sm-6>\n          <ion-item>\n            <ion-label stacked>類型</ion-label>\n            <ion-input type="text" readonly=true [disabled]="CanEditBatch==false " name="prog_type_key" #prog_type_key="ngModel" [(ngModel)]="item.prog_type_key"\n              required maxlength="10"></ion-input>\n\n            <button ion-button outline item-end *ngIf="CanEditBatch==true " icon-right (click)="SelectProgType()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-item>\n\n          <div *ngIf="prog_type_key.errors && prog_type_key.touched " class="error-message">\n            類型不能為空白\n          </div>\n        </ion-col>\n        <ion-col col-6 col-sm-6>\n          <ion-item>\n            <ion-label stacked>類型</ion-label>\n            <ion-input type="text" [disabled]=true name="prog_type" #prog_type="ngModel" [(ngModel)]="item.prog_type" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <ion-item>\n            <ion-label stacked>程式說明</ion-label>\n            <ion-input type="text" [disabled]=true name="program_desc" #program_desc="ngModel" [(ngModel)]="item.program_desc"></ion-input>\n          </ion-item>\n\n        </ion-col>\n        <ion-col col-12>\n          <ion-item>\n            <ion-label stacked>sql</ion-label>\n            <ion-textarea rows=20 [disabled]=true name="sql_statement" #sql_statement="ngModel" [(ngModel)]="item.sql_statement"></ion-textarea>\n          </ion-item>\n\n        </ion-col>\n      </ion-row>\n\n    </form>\n\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-row>\n        <ion-col>\n          <div [ngClass]="[\'command\']">\n            <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n              <ion-icon name="backspace"></ion-icon>\n            </button>\n            <button small title="確認" [disabled]="CanEditBatch==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n              (click)="Save()">\n              <ion-icon name="checkmark-circle"></ion-icon>\n            </button>\n            <button small title="複製SQL語法" ion-button color="dark" icon-left (click)="global.copyTextToClipboard(item.sql_statement)">\n              <ion-icon name="copy"></ion-icon>\n            </button>\n            <button small title="變數說明" [disabled]="CanEditBatch==false" ion-button color="dark"  icon-left\n            (click)="Help()">\n            <ion-icon name="help"></ion-icon>\n          </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\file-import-after-add-edit-modal\file-import-After-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__components_global_global__["a" /* GlobalComponent */]])
    ], FileImportAfterAddEditModalPage);
    return FileImportAfterAddEditModalPage;
}());

//# sourceMappingURL=file-import-after-add-edit-modal.js.map

/***/ }),

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileImportAfterAddEditModalPageModule", function() { return FileImportAfterAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_import_after_add_edit_modal__ = __webpack_require__(1434);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FileImportAfterAddEditModalPageModule = /** @class */ (function () {
    function FileImportAfterAddEditModalPageModule() {
    }
    FileImportAfterAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_import_after_add_edit_modal__["a" /* FileImportAfterAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_import_after_add_edit_modal__["a" /* FileImportAfterAddEditModalPage */]),
            ],
        })
    ], FileImportAfterAddEditModalPageModule);
    return FileImportAfterAddEditModalPageModule;
}());

//# sourceMappingURL=file-import-after-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=304.js.map