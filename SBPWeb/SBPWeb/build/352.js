webpackJsonp([352],{

/***/ 1290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BatchProgramAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_ProgramViewModel__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_global_global__ = __webpack_require__(119);
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
var BatchProgramAddEditModalPage = /** @class */ (function () {
    function BatchProgramAddEditModalPage(navCtrl, navParams, viewCtrl, modalCtrl, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.global = global;
        this.sql_help = "\n  \u7570\u5E38\u8B8A\u6578\u8AAA\u660E\uFF1A\n  {batch_log_seq}=\u6279\u6B21\u7D00\u9304\u5E8F\u865F,\n  {parent_batch_log_seq}=\u4E0A\u5C64\u6279\u6B21\u7D00\u9304\u5E8F\u865F,\n  {exec_log_seq}=\u8F49\u6A94\u5E8F\u865F,\n  {job_step_log_seq}=\u57F7\u884C\u4F5C\u696D\u6B65\u9A5F\u7D00\u9304\u5E8F\u865F,\n  {filename}=\u6A94\u540D,\n  {schema}=\u7D50\u69CB\u63CF\u8FF0,\n  {tablename}=\u532F\u5165\u8CC7\u6599\u8868\u540D\u7A31,\n  {ext_column}=\u7570\u5E38\u95DC\u9375\u5B57\u6B04\u4F4D,\n  {JOB01},{JOB02},{JOB03}=\u4F5C\u696D\u8FF4\u5708\u53C3\u6578,\n  {LC01},{LC02},{LC03}=\u5167\u90E8\u6A94\u6848\u8FF4\u5708\u53C3\u6578,\n  \u8B66\u8A0A\u8B8A\u6578\u8AAA\u660E\uFF1A\n  {batch_log_seq}=\u6279\u6B21\u7D00\u9304\u5E8F\u865F,\n  {parent_batch_log_seq}=\u4E0A\u5C64\u6279\u6B21\u7D00\u9304\u5E8F\u865F,\n  {exec_log_seq}=\u8F49\u6A94\u5E8F\u865F,\n  {job_step_log_seq}=\u57F7\u884C\u4F5C\u696D\u6B65\u9A5F\u7D00\u9304\u5E8F\u865F,\n  {filename}=\u6A94\u540D,\n  {schema}=\u7D50\u69CB\u63CF\u8FF0,\n  {tablename}=\u532F\u5165\u8CC7\u6599\u8868\u540D\u7A31,\n  {ext_column}=\u7570\u5E38\u95DC\u9375\u5B57\u6B04\u4F4D,\n  {src_path_file}=\u4F86\u6E90\u8DEF\u5F91\u6A94\u540D,\n  {src_file_path}=\u4F86\u6E90\u6A94\u6848\u8DEF\u5F91,\n  {bk_path_file}=\u5099\u4EFD\u8DEF\u5F91\u6A94\u540D,\n  {bk_file_path}=\u5099\u4EFD\u6A94\u6848\u8DEF\u5F91,\n  {file_size}=\u6A94\u6848\u5927\u5C0F,\n  {file_ext}=\u9644\u6A94\u540D,\n  @bindarydata=\u4E8C\u9032\u4F4D\u6A94\u6848\u5167\u5BB9,\n  {JOB01},{JOB02},{JOB03}=\u4F5C\u696D\u8FF4\u5708\u53C3\u6578,\n  {LC01},{LC02},{LC03}=\u5167\u90E8\u6A94\u6848\u8FF4\u5708\u53C3\u6578,\n\n  \u6A94\u6848\u532F\u5165\u524D\u7522\u751F\u7684\u66AB\u5B58\u8CC7\u6599\u8868sql\u8A9E\u6CD5:\n  declare @schemaname varchar(30)='comm',@tablename varchar(50)='tb_code'\nSELECT [comm].[fn_gen_temp_sql] (\n@schemaname,@tablename)\n\n\u95DC\u806F\u6AA2\u6838\u7BC4\u4F8B:\n  declare @column_id int,@columnname varchar(50)='code_desc'\n  set @column_id=[comm].[fn_get_column_id] ('{schema}','{tablename}',@columnname)\n      delete  #{tablename}\n    OUTPUT   \n         deleted.exec_log_seq\n    ,deleted.line_no\n    ,@column_id --column_id\n    ,@columnname  --columnname\n    ,deleted.code_desc +'<>\u4EE3\u78BC\u63CF\u8FF0:'+ TB1.code_desc --err_content\n    ,'003|6'  --err_key \u5916\u90E8\u7D22\u5F15\u9375\u6AA2\u6838\u7570\u5E38\n    ,'{tablename}' --tablename\n    ,'{ext_column}' --ext_column\n    ,deleted.{ext_column} --ext_column_value\n    into comm.tb_err_log (exec_log_seq,line_no,column_id,columnname,err_content,err_key,tablename,ext_column,ext_column_value)\n     from #{tablename} as TP \n     INNER JOIN  comm.tb_code TB1\n    ON TP.code_key=TB1.code_key\n    where TP.code_desc<>TB1.code_desc\n  \u8B66\u8A0A\u6AA2\u6838\u7BC4\u4F8B:\n    declare @exec_log_seq bigint={exec_log_seq} \n    declare @column_id int,@columnname varchar(50)='code_desc'\n    set @column_id=[comm].[fn_get_column_id] ('{schema}','{tablename}',@columnname)\n  \tinsert into comm.tb_err_log (exec_log_seq,line_no,column_id,columnname,err_content,err_key,tablename,ext_column,ext_column_value)\t\n\tselect TP.file_bat_seq exec_log_seq\n\t,TP.line_no\n\t,@column_id --column_id\n\t,@columnname  --columnname\n\t,TP.code_desc +'<>\u5171\u7528\u4EE3\u78BC\u6A94:'+ TB1.code_desc --err_content\n\t,'044|A03'  --err_key \u5206\u884C\u4EE3\u865F\u8207\u4FDD\u55AE\u4E3B\u6A94\u5167\u5BB9\u4E0D\u7B26\n\t,'{tablename}' --tablename\n\t,'code_key' --ext_column\n\t,TP.code_key --ext_column_value\n\t from {schema}.{tablename} as TP \n\t INNER JOIN comm.tb_code TB1\n\tON TP.code_key=TB1.code_key\n\twhere TP.file_bat_seq=@exec_log_seq and TP.code_desc<>TB1.code_desc\n  ";
        this.mode = navParams.data.mode;
        this.title = "批次SQL程式";
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_ProgramViewModel__["a" /* ProgramViewModel */]();
        if (navParams.data.change_mode === "c")
            this.item.program_no = "auto";
        else
            this.item.program_no = navParams.data.item.program_no;
        this.item.program_desc = navParams.data.item.program_desc;
        this.item.program_name = navParams.data.item.program_name;
        this.item.bus_type_key = navParams.data.item.bus_type_key;
        this.item.bus_type = navParams.data.item.bus_type;
        this.item.program_type_key = navParams.data.item.program_type_key;
        this.item.program_type_seq = navParams.data.item.program_type_seq;
        this.item.program_path_key = navParams.data.item.program_path_key;
        this.item.master_program_no = navParams.data.item.master_program_no;
        this.item.parent_program_no = navParams.data.item.parent_program_no;
        this.item.menu_key = navParams.data.item.menu_key;
        this.item.audit_flag = navParams.data.item.audit_flag;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.item.is_active = navParams.data.item.is_active;
        this.item.sql_statement = navParams.data.item.sql_statement;
        this.CanEditBatch = navParams.data.CanEditBatch;
        console.log(this.CanEditBatch);
    }
    BatchProgramAddEditModalPage.prototype.SelectBusType = function () {
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
    BatchProgramAddEditModalPage.prototype.Help = function () {
        var _this = this;
        this.global.createLoader();
        this.global.loading.present().then(function () {
            _this.global.showMessage("SQL語法說明", _this.sql_help);
        });
    };
    // SelectProgram() {
    //   let modal = this.modalCtrl.create("BatchProgramSelectModalPage", {
    //     select_item: this.item.program_no,
    //   });
    //   modal.onDidDismiss(select_data => {
    //     if (select_data == null) return;
    //     this.item.program_no = select_data.program_no;
    //     this.item.program_desc = select_data.program_desc;
    //   });
    //   modal.present();
    // }
    BatchProgramAddEditModalPage.prototype.Save = function () {
        this.item.program_name = this.item.program_desc;
        this.viewCtrl.dismiss(this.item);
    };
    BatchProgramAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    BatchProgramAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ProgramModalPage");
    };
    BatchProgramAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-batch-program-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\batch-program-add-edit-modal\batch-program-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  padding>\n    <form #Form="ngForm">\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label stacked >程式編號</ion-label>\n              <ion-input type="text" disabled=true name="program_no" #program_no="ngModel" [(ngModel)]="item.program_no"\n                required></ion-input>\n                <!-- <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectProgram()">\n                  <ion-icon name="arrow-dropdown"></ion-icon>\n                </button> -->\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n                <ion-label stacked >程式說明</ion-label>\n              <ion-input type="text" [disabled]="CanEditBatch==false" name="program_desc" #program_desc="ngModel" [(ngModel)]="item.program_desc"\n                required></ion-input>\n            </ion-item>\n            <div *ngIf="program_desc.errors && program_desc.touched" class="error-message">\n              程式說明不能為空白\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col col-12 col-sm-4>\n            <ion-item>\n              <ion-label stacked>業務別</ion-label>\n              <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="bus_type_key" #bus_type_key="ngModel" [(ngModel)]="item.bus_type_key"\n                required></ion-input>\n\n              <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectBusType()">\n                <ion-icon name="arrow-dropdown"></ion-icon>\n              </button>\n            </ion-item>\n\n            <div *ngIf="bus_type_key.errors && bus_type_key.touched " class="error-message">\n              業務別不能為空白\n            </div>\n          </ion-col>\n          <ion-col col-12 col-sm-8>\n            <ion-item>\n              <ion-label stacked>業務別</ion-label>\n              <ion-input type="text" [disabled]=true name="bus_type" #bus_type="ngModel" [(ngModel)]="item.bus_type" required></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label stacked>啟用</ion-label>\n            <ion-checkbox [disabled]="CanEditBatch==false" name="is_active" #is_active="ngModel" [(ngModel)]="item.is_active"></ion-checkbox>\n          </ion-item>\n\n        </ion-col>\n      </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label stacked>SQL</ion-label>\n              <ion-textarea rows=20 [disabled]="CanEditBatch==false" name="sql_statement" #note="ngModel" [(ngModel)]="item.sql_statement"></ion-textarea>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n      </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditBatch==false"  ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n          <button small title="複製SQL語法" ion-button color="dark" icon-left (click)="global.copyTextToClipboard(item.sql_statement)">\n            <ion-icon name="copy"></ion-icon>\n          </button>\n          <button small title="變數說明" [disabled]="CanEditBatch==false" ion-button color="dark"  icon-left\n            (click)="Help()">\n            <ion-icon name="help"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\batch-program-add-edit-modal\batch-program-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__components_global_global__["a" /* GlobalComponent */]])
    ], BatchProgramAddEditModalPage);
    return BatchProgramAddEditModalPage;
}());

//# sourceMappingURL=batch-program-add-edit-modal.js.map

/***/ }),

/***/ 447:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchProgramAddEditModalPageModule", function() { return BatchProgramAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__batch_program_add_edit_modal__ = __webpack_require__(1290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BatchProgramAddEditModalPageModule = /** @class */ (function () {
    function BatchProgramAddEditModalPageModule() {
    }
    BatchProgramAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__batch_program_add_edit_modal__["a" /* BatchProgramAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__batch_program_add_edit_modal__["a" /* BatchProgramAddEditModalPage */]),
            ],
        })
    ], BatchProgramAddEditModalPageModule);
    return BatchProgramAddEditModalPageModule;
}());

//# sourceMappingURL=batch-program-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=352.js.map