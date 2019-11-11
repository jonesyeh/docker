webpackJsonp([237],{

/***/ 1014:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramCheckListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ListModelResponse__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_ProgramCheckViewModel__ = __webpack_require__(937);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


/**
 * 回傳IQueryable物件內容及訊息
 *
 * @public
 * @class ListModelResponse
 * @implements  IListModelResponse
 * @param   {Function}    [name]
 */
var ProgramCheckListResponse = /** @class */ (function (_super) {
    __extends(ProgramCheckListResponse, _super);
    function ProgramCheckListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Model = [];
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (obj.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_ProgramCheckViewModel__["a" /* ProgramCheckViewModel */]();
                item.program_no = data.program_no;
                item.program_func_desc = (data && data.program_func_desc) || null;
                item.temp_schema = data.temp_schema;
                item.temp_table = data.temp_table;
                item.temp_column_check = data.temp_column_check;
                item.where_condition = (data && data.where_condition) || null;
                item.check_schema = data.check_schema;
                item.check_table = data.check_table;
                item.check_column = (data && data.check_column) || null;
                item.err_key = data.err_key;
                item.prog_type_key = data.prog_type_key;
                item.is_active = data.is_active;
                item.create_time = data.create_time;
                item.creator = data.creator;
                item.last_update_time = data.last_update_time;
                item.modifier = data.modifier;
                item.is_active_desc = data.is_active_desc;
                switch (data.is_active) {
                    case false: {
                        item.is_active_color = "danger-left";
                        break;
                    }
                    default:
                        item.is_active_color = "active-left";
                }
                item.bus_type_key = data.bus_type_key;
                item.bus_type = data.bus_type;
                item.prog_type = data.prog_type;
                item.err_desc = data.err_desc;
                item.temp_tablefullname = data.temp_schema + "." + data.temp_table;
                item.check_tablefullname = data.check_schema + "." + data.check_table;
                item.program_type_seq = data.program_type_seq;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return ProgramCheckListResponse;
}(__WEBPACK_IMPORTED_MODULE_0__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=ProgramCheckListResponse.js.map

/***/ }),

/***/ 1015:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramCheckResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_ProgramCheckViewModel__ = __webpack_require__(937);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ProgramCheckResponse = /** @class */ (function (_super) {
    __extends(ProgramCheckResponse, _super);
    function ProgramCheckResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_ProgramCheckViewModel__["a" /* ProgramCheckViewModel */]();
            _this.Model.program_no = obj.Model.program_no;
            _this.Model.program_func_desc =
                (obj && obj.Model.program_func_desc) || null;
            _this.Model.temp_schema = obj.Model.temp_schema;
            _this.Model.temp_table = obj.Model.temp_table;
            _this.Model.temp_column_check = obj.Model.temp_column_check;
            _this.Model.where_condition = (obj && obj.Model.where_condition) || null;
            _this.Model.check_schema = obj.Model.check_schema;
            _this.Model.check_table = obj.Model.check_table;
            _this.Model.check_column = (obj && obj.Model.check_column) || null;
            _this.Model.err_key = obj.Model.err_key;
            _this.Model.prog_type_key = obj.Model.prog_type_key;
            _this.Model.is_active = obj.Model.is_active;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.creator = obj.Model.creator;
            _this.Model.last_update_time = obj.Model.last_update_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.is_active_desc = obj.Model.is_active_desc;
            _this.Model.bus_type = obj.Model.bus_type;
            _this.Model.prog_type = obj.Model.prog_type;
            _this.Model.err_desc = obj.Model.err_desc;
            _this.Model.program_type_seq = obj.Model.program_type_seq;
            switch (obj.Model.is_active) {
                case false: {
                    _this.Model.is_active_color = "danger";
                    break;
                }
                default:
                    _this.Model.is_active_color = "active";
            }
        }
        return _this;
    }
    return ProgramCheckResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=ProgramCheckResponse.js.map

/***/ }),

/***/ 1453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileImportBeforeCheckAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_ViewModel_FileImportBeforeViewModel__ = __webpack_require__(984);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_program_check_services_program_check_services__ = __webpack_require__(949);
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
 * Generated class for the FileImportBeforeModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FileImportBeforeCheckAddEditModalPage = /** @class */ (function () {
    function FileImportBeforeCheckAddEditModalPage(navCtrl, navParams, viewCtrl, loadingCtrl, modalCtrl, global, ProgramCheckServices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.global = global;
        this.ProgramCheckServices = ProgramCheckServices;
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.item = new __WEBPACK_IMPORTED_MODULE_3__Model_ViewModel_FileImportBeforeViewModel__["a" /* FileImportBeforeViewModel */]();
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
        //this.item.sql_statement=navParams.data.item.sql_statement;
        this.item.prog_type_key = navParams.data.item.prog_type_key;
        this.item.prog_type = navParams.data.item.prog_type;
        this.item.program_no = navParams.data.item.program_no;
        this.item.program_desc = navParams.data.item.program_desc;
        // this.item.sql_statement=navParams.data.item.sql_statement;
        if (this.change_mode === "e" || this.change_mode === "c")
            this.openNavSysSqlPage(this.item);
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.title = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format("{0}.{1}", this.item.schemaname, this.item.tablename);
    }
    FileImportBeforeCheckAddEditModalPage.prototype.openNavSysSqlPage = function (item) {
        var _this = this;
        this.global.createLoader("連線中...");
        this.global.loading.present().then(function () {
            _this.ProgramCheckServices.GetSysSqlAsync(item.program_no, item.schemaname, item.tablename).subscribe(function (data) {
                if (data.DidError === true) {
                    _this.global.dismissLoading();
                    _this.global.showError(data.ErrorMessage);
                }
                else {
                    _this.item.sql_statement = data.Model;
                    _this.global.dismissLoading();
                }
            }, function (err) {
                _this.global.dismissLoading();
                _this.global.showError("無法連上WebAPI伺服器-" + err.message);
            });
        });
    };
    FileImportBeforeCheckAddEditModalPage.prototype.SelectProgram = function () {
        var _this = this;
        var modal = this.modalCtrl.create("BatchProgramCheckSelectModalPage", {
            select_item: this.item.program_no,
            temp_schema: this.item.schemaname,
            temp_table: this.item.tablename,
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.program_no = select_data.program_no;
            _this.item.program_desc = select_data.program_func_desc;
            _this.item.prog_type_key = select_data.prog_type_key;
            _this.item.prog_type = select_data.prog_type;
            // this.item.schemaname=select_data.temp_schema;
            // this.item.tablename=select_data.temp_table;
            _this.openNavSysSqlPage(_this.item);
            //this.item.sql_statement=select_data.sql_statement;
            _this.item.is_active = select_data.is_active;
        });
        modal.present();
    };
    // SelectProgType() {
    //   let modal = this.modalCtrl.create("CodeSelectModalPage", {
    //     select_key: this.item.prog_type_key,
    //     code_type: "066"
    //   });
    //   modal.onDidDismiss(select_data => {
    //     if (select_data == null) return;
    //     this.item.prog_type_key = select_data.code_key;
    //     this.item.prog_type = select_data.code_desc;
    //   });
    //   modal.present();
    // }
    FileImportBeforeCheckAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    FileImportBeforeCheckAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FileImportBeforeCheckAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FileImportBeforeModalPage");
    };
    FileImportBeforeCheckAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-file-import-before-check-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\file-import-before-check-add-edit-modal\file-import-before-check-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>清單序號</ion-label>\n          <ion-input type="number" [disabled]="CanEditBatch==false  || mode==\'PUT\'" name="import_sql_seq" #import_sql_seq="ngModel"\n            [(ngModel)]="item.import_sql_seq" required></ion-input>\n        </ion-item>\n        <div *ngIf="import_sql_seq.errors && import_sql_seq.touched" class="error-message">\n          清單序號不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>程式</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false " name="program_no" #program_no="ngModel" [(ngModel)]="item.program_no"\n            required maxlength="10"></ion-input>\n          <button ion-button outline item-end icon-right *ngIf="CanEditBatch==true " (click)="SelectProgram()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n        <div *ngIf="program_no.errors && program_no.touched" class="error-message">\n          程式不能為空白\n        </div>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label stacked>執行順序</ion-label>\n          <ion-input type="number" [disabled]="CanEditBatch==false" name="exec_seq" #exec_seq="ngModel" [(ngModel)]="item.exec_seq"\n            required></ion-input>\n        </ion-item>\n        <div *ngIf="exec_seq.errors && exec_seq.touched" class="error-message">\n          執行順序不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-6 col-sm-6>\n        <ion-item>\n          <ion-label stacked>啟用</ion-label>\n          <ion-checkbox [disabled]="CanEditBatch==false" name="is_active" #is_active="ngModel" [(ngModel)]="item.is_active"></ion-checkbox>\n        </ion-item>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col col-6 col-sm-6>\n        <ion-item>\n          <ion-label stacked>類型</ion-label>\n          <ion-input type="text" readonly=true [disabled]=true name="prog_type_key" #prog_type_key="ngModel" [(ngModel)]="item.prog_type_key"\n            required maxlength="10"></ion-input>\n        </ion-item>\n\n        <div *ngIf="prog_type_key.errors && prog_type_key.touched " class="error-message">\n          類型不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-6 col-sm-6>\n        <ion-item>\n          <ion-label stacked>類型</ion-label>\n          <ion-input type="text" [disabled]=true name="prog_type" #prog_type="ngModel" [(ngModel)]="item.prog_type" required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label stacked>程式說明</ion-label>\n          <ion-input type="text" [disabled]=true name="program_desc" #program_desc="ngModel" [(ngModel)]="item.program_desc"></ion-input>\n        </ion-item>\n\n      </ion-col>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label stacked>sql</ion-label>\n          <ion-textarea rows=20 [disabled]=true name="sql_statement" #sql_statement="ngModel" [(ngModel)]="item.sql_statement"></ion-textarea>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditBatch==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n            (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\file-import-before-check-add-edit-modal\file-import-before-check-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__components_global_global__["a" /* GlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_5__providers_program_check_services_program_check_services__["a" /* ProgramCheckServicesProvider */]])
    ], FileImportBeforeCheckAddEditModalPage);
    return FileImportBeforeCheckAddEditModalPage;
}());

//# sourceMappingURL=file-import-before-check-add-edit-modal.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileImportBeforeCheckAddEditModalPageModule", function() { return FileImportBeforeCheckAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_import_before_check_add_edit_modal__ = __webpack_require__(1453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_program_check_services_program_check_services__ = __webpack_require__(949);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FileImportBeforeCheckAddEditModalPageModule = /** @class */ (function () {
    function FileImportBeforeCheckAddEditModalPageModule() {
    }
    FileImportBeforeCheckAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_import_before_check_add_edit_modal__["a" /* FileImportBeforeCheckAddEditModalPage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_program_check_services_program_check_services__["a" /* ProgramCheckServicesProvider */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_import_before_check_add_edit_modal__["a" /* FileImportBeforeCheckAddEditModalPage */]),
            ],
        })
    ], FileImportBeforeCheckAddEditModalPageModule);
    return FileImportBeforeCheckAddEditModalPageModule;
}());

//# sourceMappingURL=file-import-before-check-add-edit-modal.module.js.map

/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramCheckViewModel; });
var ProgramCheckViewModel = /** @class */ (function () {
    function ProgramCheckViewModel() {
    }
    return ProgramCheckViewModel;
}());

//# sourceMappingURL=ProgramCheckViewModel.js.map

/***/ }),

/***/ 949:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramCheckServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_ProgramCheckListResponse__ = __webpack_require__(1014);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_ProgramCheckResponse__ = __webpack_require__(1015);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__ = __webpack_require__(14);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the ProgramCheckServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProgramCheckServicesProvider = /** @class */ (function () {
    function ProgramCheckServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "ProgramCheck";
        console.log("Hello ProgramCheckServiceProvider Provider");
    }
    // public GetListsAsync(PageSize: number, PageNumber: Number, keyword: string,order_type:boolean) {
    //   var sub_url: string;
    //    sub_url = "ProgramCheck?PageSize={1}&PageNumber={2}&keyword={3}&order_type={4}";
    //   sub_url = String.Format(sub_url, this.ctl, PageSize, PageNumber, keyword,order_type);
    //   return this.Services.GetAsync(sub_url,this.ctl,true).map(item => {
    //     this.ProgramChecks = new ProgramCheckListResponse({
    //       Message: item.Message,
    //       DidError: item.DidError,
    //       ErrorMessage: item.ErrorMessage,
    //       PageSize: item.PageSize,
    //       PageNumber: item.PageNumber,
    //       TotalRows: item.TotalRows,
    //       PageRows: item.PageRows,
    //       TotalPages: item.TotalPages,
    //       Model: item.Model
    //     });
    //     return this.ProgramChecks;
    //   });
    // }
    ProgramCheckServicesProvider.prototype.GetListsAsync = function (PageSize, PageNumber, temp_schema, temp_table, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "ProgramCheck?PageSize={1}&PageNumber={2}&temp_schema={3}&temp_table={4}&keyword={5}&order_type={6}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, temp_schema, temp_table, keyword, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.ProgramChecks = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_ProgramCheckListResponse__["a" /* ProgramCheckListResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                PageSize: item.PageSize,
                PageNumber: item.PageNumber,
                TotalRows: item.TotalRows,
                PageRows: item.PageRows,
                TotalPages: item.TotalPages,
                Model: item.Model
            });
            return _this.ProgramChecks;
        });
    };
    ProgramCheckServicesProvider.prototype.GetAsync = function (program_no) {
        var _this = this;
        var sub_url;
        sub_url = "ProgramCheck/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, program_no);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.ProgramCheck = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_ProgramCheckResponse__["a" /* ProgramCheckResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.ProgramCheck;
        });
    };
    ProgramCheckServicesProvider.prototype.PostPutAsync = function (ProgramCheckViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "ProgramCheck";
        else
            sub_url = "ProgramCheck/" + ProgramCheckViewModel.program_no;
        return this.Services.PostPutAsync(sub_url, this.ctl, true, ProgramCheckViewModel, mode).map(function (item) {
            _this.ProgramCheck = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_ProgramCheckResponse__["a" /* ProgramCheckResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.ProgramCheck;
        });
    };
    ProgramCheckServicesProvider.prototype.DeleteAsync = function (program_no) {
        var _this = this;
        var sub_url;
        sub_url = "ProgramCheck/" + program_no;
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.ProgramCheck = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_ProgramCheckResponse__["a" /* ProgramCheckResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.ProgramCheck;
        });
    };
    ProgramCheckServicesProvider.prototype.GetSqlAsync = function (program_no, method) {
        var sub_url;
        sub_url = "ProgramCheck/get_{2}_sql/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, program_no, method);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    ProgramCheckServicesProvider.prototype.GetSysSqlAsync = function (program_no, temp_schema, temp_table) {
        var sub_url;
        sub_url = "ProgramCheck/get_program_check_sql?program_no={1}&schemaname={2}&tablename={3}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, program_no, temp_schema, temp_table);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    ProgramCheckServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], ProgramCheckServicesProvider);
    return ProgramCheckServicesProvider;
}());

//# sourceMappingURL=program-check-services.js.map

/***/ }),

/***/ 984:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileImportBeforeViewModel; });
var FileImportBeforeViewModel = /** @class */ (function () {
    function FileImportBeforeViewModel() {
    }
    return FileImportBeforeViewModel;
}());

//# sourceMappingURL=FileImportBeforeViewModel.js.map

/***/ })

});
//# sourceMappingURL=237.js.map