webpackJsonp([249],{

/***/ 1043:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileImportTableServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileImportTableListResponse__ = __webpack_require__(1154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileImportTableResponse__ = __webpack_require__(1155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Model_Response_NumberResponse__ = __webpack_require__(128);
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
  Generated class for the FileImportTableServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FileImportTableServicesProvider = /** @class */ (function () {
    function FileImportTableServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "FileImportTable";
        console.log("Hello FileImportTableServiceProvider Provider");
    }
    FileImportTableServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, keyword, exec_file_seq, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "FileImportTable?PageSize={1}&PageNumber={2}&keyword={3}&exec_file_seq={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, exec_file_seq, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.FileImportTables = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileImportTableListResponse__["a" /* FileImportTableListResponse */]({
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
            return _this.FileImportTables;
        });
    };
    FileImportTableServicesProvider.prototype.PostPutAsync = function (FileImportTableViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "FileImportTable";
        else
            sub_url = "FileImportTable?exec_file_seq={1}&schemaname={2}&tablename={3}&db_conn_id={4}&parameter_column_group={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, FileImportTableViewModel.exec_file_seq, FileImportTableViewModel.schemaname, FileImportTableViewModel.tablename, FileImportTableViewModel.db_conn_id, FileImportTableViewModel.parameter_column_group);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, FileImportTableViewModel, mode).map(function (item) {
            _this.FileImportTable = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileImportTableResponse__["a" /* FileImportTableResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.FileImportTable;
        });
    };
    FileImportTableServicesProvider.prototype.DeleteAsync = function (exec_file_seq, schemaname, tablename, db_conn_id, parameter_column_group) {
        var sub_url;
        sub_url = "FileImportTable?exec_file_seq={1}&schemaname={2}&tablename={3}&db_conn_id={4}&parameter_column_group={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, exec_file_seq, schemaname, tablename, db_conn_id, parameter_column_group);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: ""
            });
        });
    };
    FileImportTableServicesProvider.prototype.GetMaxExecSeqAsync = function (exec_file_seq) {
        var sub_url;
        sub_url = "FileImportTable/get_max_exec_seq?exec_file_seq={1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, exec_file_seq);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_6__Model_Response_NumberResponse__["a" /* NumberResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    FileImportTableServicesProvider.prototype.GetSqlAsync = function (exec_file_seq, schemaname, tablename, db_conn_id, parameter_column_group, method) {
        var sub_url;
        sub_url = "FileImportTable/get_{6}_sql?exec_file_seq={1}&schemaname={2}&tablename={3}&db_conn_id={4}&parameter_column_group={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, exec_file_seq, schemaname, tablename, db_conn_id, parameter_column_group, method);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    FileImportTableServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], FileImportTableServicesProvider);
    return FileImportTableServicesProvider;
}());

//# sourceMappingURL=file-import-table-services.js.map

/***/ }),

/***/ 1154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileImportTableListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileImportTableViewModel__ = __webpack_require__(973);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(5);
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


var FileImportTableListResponse = /** @class */ (function (_super) {
    __extends(FileImportTableListResponse, _super);
    function FileImportTableListResponse(obj) {
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
        if (_this.DidError === false) {
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileImportTableViewModel__["a" /* FileImportTableViewModel */]();
                item.exec_file_seq = data.exec_file_seq;
                item.schemaname = data.schemaname;
                item.tablename = data.tablename;
                item.db_conn_id = data.db_conn_id;
                item.db_conn_string = data.db_conn_string;
                item.parameter_column_group = data.parameter_column_group;
                item.sheetname = (data && data.sheetname) || null;
                item.import_mode_key = data.import_mode_key;
                item.file_format_key = data.file_format_key;
                item.is_active = data.is_active;
                item.field_terminator = (data && data.field_terminator) || null;
                item.row_terminator = data.row_terminator;
                item.skip_row_num = data.skip_row_num;
                item.skip_dup_key = data.skip_dup_key;
                item.exec_seq = data.exec_seq;
                item.load_complete_package =
                    (data && data.load_complete_package) || null;
                item.sp_name = (data && data.sp_name) || null;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                item.import_mode = data.import_mode;
                item.file_format = data.file_format;
                item.is_active_desc = data.is_active_desc;
                item.tablefullname = data.schemaname + "." + data.tablename;
                switch (data.is_active) {
                    case false: {
                        item.is_active_color = "danger";
                        item.is_active_color_right = "danger-right";
                        break;
                    }
                    default: {
                        item.is_active_color = "active";
                        item.is_active_color_right = "active-right";
                    }
                }
                item.is_before_sql = data.is_before_sql;
                if (item.is_before_sql === true) {
                    item.before_sql_color = "danger";
                }
                else
                    item.before_sql_color = "light";
                item.before_cnt = data.before_cnt;
                if (item.before_cnt > 0) {
                    item.before_cnt_color = "danger";
                }
                else
                    item.before_cnt_color = "light";
                item.after_cnt = data.after_cnt;
                if (item.after_cnt > 0) {
                    item.after_cnt_color = "danger";
                }
                else
                    item.after_cnt_color = "light";
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return FileImportTableListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=FileImportTableListResponse.js.map

/***/ }),

/***/ 1155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileImportTableResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileImportTableViewModel__ = __webpack_require__(973);
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


var FileImportTableResponse = /** @class */ (function (_super) {
    __extends(FileImportTableResponse, _super);
    function FileImportTableResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileImportTableViewModel__["a" /* FileImportTableViewModel */]();
            _this.Model.exec_file_seq = obj.Model.exec_file_seq;
            _this.Model.schemaname = obj.Model.schemaname;
            _this.Model.tablename = obj.Model.tablename;
            _this.Model.db_conn_id = obj.Model.db_conn_id;
            _this.Model.db_conn_string = obj.Model.db_conn_string;
            _this.Model.parameter_column_group = obj.Model.parameter_column_group;
            _this.Model.sheetname = obj && obj.Model.sheetname || null;
            _this.Model.import_mode_key = obj.Model.import_mode_key;
            _this.Model.file_format_key = obj.Model.file_format_key;
            _this.Model.is_active = obj.Model.is_active;
            _this.Model.field_terminator = obj && obj.Model.field_terminator || null;
            _this.Model.row_terminator = obj.Model.row_terminator;
            _this.Model.skip_row_num = obj.Model.skip_row_num;
            _this.Model.skip_dup_key = obj.Model.skip_dup_key;
            _this.Model.exec_seq = obj.Model.exec_seq;
            _this.Model.load_complete_package = obj && obj.Model.load_complete_package || null;
            _this.Model.sp_name = obj && obj.Model.sp_name || null;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
            _this.Model.import_mode = obj.Model.import_mode;
            _this.Model.file_format = obj.Model.file_format;
            _this.Model.is_active_desc = obj.Model.is_active_desc;
            _this.Model.tablefullname = obj.Model.schemaname + "." + obj.Model.tablename;
            _this.Model.is_before_sql = obj.Model.is_before_sql;
            _this.Model.before_cnt = obj.Model.before_cnt;
            _this.Model.after_cnt = obj.Model.after_cnt;
            if (_this.Model.is_before_sql === true) {
                _this.Model.before_sql_color = "danger";
            }
            else
                _this.Model.before_sql_color = "light";
            if (_this.Model.before_cnt > 0) {
                _this.Model.before_cnt_color = "danger";
            }
            else
                _this.Model.before_cnt_color = "light";
            if (_this.Model.after_cnt > 0) {
                _this.Model.after_cnt_color = "danger";
            }
            else
                _this.Model.after_cnt_color = "light";
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
    return FileImportTableResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=FileImportTableResponse.js.map

/***/ }),

/***/ 1457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileImportTableAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_file_import_table_services_file_import_table_services__ = __webpack_require__(1043);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_FileImportTableViewModel__ = __webpack_require__(973);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_conn_services_conn_services__ = __webpack_require__(266);
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
 * Generated class for the FileImportTableModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FileImportTableAddEditModalPage = /** @class */ (function () {
    function FileImportTableAddEditModalPage(navCtrl, navParams, viewCtrl, FileImportTableServices, loadingCtrl, global, modalCtrl, ConnServices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.FileImportTableServices = FileImportTableServices;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.modalCtrl = modalCtrl;
        this.ConnServices = ConnServices;
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.file_type_key = navParams.data.file_type_key;
        this.item = new __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_FileImportTableViewModel__["a" /* FileImportTableViewModel */]();
        this.item.exec_file_seq = navParams.data.item.exec_file_seq;
        this.item.schemaname = navParams.data.item.schemaname;
        this.item.tablename = navParams.data.item.tablename;
        this.item.db_conn_id = navParams.data.item.db_conn_id;
        this.item.db_conn_string = navParams.data.item.db_conn_string;
        this.item.parameter_column_group = navParams.data.item.parameter_column_group;
        this.item.sheetname = navParams.data.item.sheetname;
        this.item.import_mode_key = navParams.data.item.import_mode_key;
        this.item.file_format_key = navParams.data.item.file_format_key;
        this.item.is_active = navParams.data.item.is_active;
        this.item.field_terminator = navParams.data.item.field_terminator;
        this.item.row_terminator = navParams.data.item.row_terminator;
        this.item.skip_row_num = navParams.data.item.skip_row_num;
        this.item.skip_dup_key = navParams.data.item.skip_dup_key;
        this.item.exec_seq = navParams.data.item.exec_seq;
        this.item.load_complete_package = navParams.data.item.load_complete_package;
        this.item.sp_name = navParams.data.item.sp_name;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.item.import_mode = navParams.data.item.import_mode;
        this.item.file_format = navParams.data.item.file_format;
        this.item.tablefullname = navParams.data.item.tablefullname;
        if (this.change_mode === "n") {
            this.get_conn_string("localdb");
        }
        if (this.change_mode != "e") {
            this.get_max_exec_seq();
        }
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.title = __WEBPACK_IMPORTED_MODULE_4__Model_String__["a" /* String */].Format("{0}", this.item.exec_file_seq);
    }
    FileImportTableAddEditModalPage.prototype.get_conn_string = function (remote_conn_id) {
        var _this = this;
        this.global.createLoader("取得連線字串中...");
        this.global.loading.present().then(function () {
            _this.ConnServices.GetConnAsync(remote_conn_id).subscribe(function (data) {
                if (data.DidError === true) {
                    _this.global.dismissLoading();
                    _this.global.showError(data.ErrorMessage);
                }
                else {
                    _this.item.db_conn_string =
                        data.Model.conn_string;
                    _this.global.dismissLoading();
                }
            }, function (err) {
                _this.global.dismissLoading();
                _this.global.showError("無法連上WebAPI伺服器-" + err.message);
            });
        });
    };
    FileImportTableAddEditModalPage.prototype.SelectConn = function () {
        var _this = this;
        var modal = this.modalCtrl.create("ConnSelectModalPage", {
            select_remote_conn_id: this.item.db_conn_id,
            conn_type_key: "065|001",
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.db_conn_id = select_data.remote_conn_id;
            _this.item.db_conn_string = select_data.conn_string;
        });
        modal.present();
    };
    FileImportTableAddEditModalPage.prototype.SelectParameterGroup = function () {
        var _this = this;
        var modal = this.modalCtrl.create("ParameterGroupSelectModelPage", {
            select_parameter_column_group: this.item.parameter_column_group,
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.parameter_column_group = select_data.parameter_column_group;
        });
        modal.present();
    };
    FileImportTableAddEditModalPage.prototype.SelectTable = function () {
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
    FileImportTableAddEditModalPage.prototype.SelectImportMode = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.import_mode_key,
            code_type: "002"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.import_mode_key = select_data.code_key;
            _this.item.import_mode = select_data.code_desc;
        });
        modal.present();
    };
    FileImportTableAddEditModalPage.prototype.SelectFileFormat = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.file_format_key,
            code_key: "011|B,011|C,011|CB,011|UTF16,011|UTF32,011|UTF7,011|UTF8,011|UTF8B,011|W,011|WB"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.file_format_key = select_data.code_key;
            _this.item.file_format = select_data.code_desc;
        });
        modal.present();
    };
    FileImportTableAddEditModalPage.prototype.get_max_exec_seq = function () {
        var _this = this;
        this.global.createLoader("取得最大值中...");
        this.global.loading.present().then(function () {
            _this.FileImportTableServices.GetMaxExecSeqAsync(_this.item.exec_file_seq).subscribe(function (data) {
                if (data.DidError === true) {
                    _this.global.dismissLoading();
                    _this.global.showError(data.ErrorMessage);
                }
                else {
                    _this.item.exec_seq = data.Model;
                    _this.global.dismissLoading();
                }
            }, function (err) {
                _this.global.dismissLoading();
                _this.global.showError("無法連上WebAPI伺服器-" + err.message);
            });
        });
    };
    FileImportTableAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    FileImportTableAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FileImportTableAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FileImportTableModalPage");
    };
    FileImportTableAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: "page-file-import-table-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\file-import-table-add-edit-modal\file-import-table-add-edit-modal.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content padding>\n    <form #Form="ngForm">\n\n\n      <ion-row>\n        <ion-col col-12 col-sm-4>\n          <ion-item>\n            <ion-label stacked>結構描述</ion-label>\n            <ion-input type="text" readonly=true [disabled]="CanEditBatch==false  || mode==\'PUT\'" name="schemaname" #schemaname="ngModel" [(ngModel)]="item.schemaname"\n              required maxlength="30"></ion-input>\n          </ion-item>\n          <div *ngIf="schemaname.errors && schemaname.touched" class="error-message">\n              結構描述不能為空白\n          </div>\n        </ion-col>\n        <ion-col col-12 col-sm-8>\n          <ion-item>\n            <ion-label stacked>資料表名稱</ion-label>\n            <ion-input type="text" readonly=true  [disabled]="CanEditBatch==false || mode==\'PUT\'" name="tablename" #tablename="ngModel" [(ngModel)]="item.tablename"\n              required maxlength="50"></ion-input>\n              <button ion-button outline item-end icon-right *ngIf="CanEditBatch==true && mode==\'POST\'" (click)="SelectTable()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n          </ion-item>\n          <div *ngIf="tablename.errors && tablename.touched" class="error-message">\n              資料表名稱不能為空白\n          </div>\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-6>\n          <ion-item>\n            <ion-label stacked>參數群組</ion-label>\n            <ion-input type="text" readonly=true [disabled]="CanEditBatch==false || mode==\'PUT\'" name="parameter_column_group" #parameter_column_group="ngModel" [(ngModel)]="item.parameter_column_group"\n              required maxlength="3"></ion-input>\n\n            <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'" icon-right (click)="SelectParameterGroup()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-item>\n\n          <div *ngIf="parameter_column_group.errors && parameter_column_group.touched " class="error-message">\n            參數群組不能為空白\n          </div>\n        </ion-col>\n        <ion-col col-12 col-sm-6 >\n            <ion-item>\n              <ion-label stacked>連線編號</ion-label>\n              <ion-input type="text" readonly=true [disabled]="CanEditBatch==false || mode==\'PUT\'" name="db_conn_id" #db_conn_id="ngModel" [(ngModel)]="item.db_conn_id"\n                required maxlength="20"></ion-input>\n\n              <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'" icon-right (click)="SelectConn()">\n                <ion-icon name="arrow-dropdown"></ion-icon>\n              </button>\n            </ion-item>\n\n            <div *ngIf="db_conn_id.errors && db_conn_id.touched " class="error-message">\n              連線編號不能為空白\n            </div>\n          </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-12 >\n            <ion-item>\n              <ion-label stacked>連線字串</ion-label>\n              <ion-textarea [disabled]=true name="db_conn_string" #db_conn_string="ngModel" [(ngModel)]="item.db_conn_string"\n                required ></ion-textarea>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-4>\n          <ion-item>\n            <ion-label stacked>匯入方式</ion-label>\n            <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="import_mode_key" #import_mode_key="ngModel" [(ngModel)]="item.import_mode_key"\n              required maxlength="10" ></ion-input>\n\n            <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectImportMode()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-item>\n\n          <div *ngIf="import_mode_key.errors && import_mode_key.touched " class="error-message">\n            匯入方式不能為空白\n          </div>\n        </ion-col>\n        <ion-col col-12 col-sm-8>\n          <ion-item>\n            <ion-label stacked>匯入方式</ion-label>\n            <ion-input type="text" [disabled]=true name="import_mode" #import_mode="ngModel" [(ngModel)]="item.import_mode" required maxlength="10"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-4>\n          <ion-item>\n            <ion-label stacked>內文格式</ion-label>\n            <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="file_format_key" #file_format_key="ngModel" [(ngModel)]="item.file_format_key"\n              required maxlength="10"></ion-input>\n\n            <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectFileFormat()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-item>\n\n          <div *ngIf="file_format_key.errors && file_format_key.touched " class="error-message">\n            內文格式不能為空白\n          </div>\n        </ion-col>\n        <ion-col col-12 col-sm-8>\n          <ion-item>\n            <ion-label stacked>內文格式</ion-label>\n            <ion-input type="text" [disabled]=true name="file_format" #file_format="ngModel" [(ngModel)]="item.file_format" required maxlength="10"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>執行順序</ion-label>\n          <ion-input type="number" [disabled]="CanEditBatch==false" name="exec_seq" #exec_seq="ngModel" [(ngModel)]="item.exec_seq"\n            required></ion-input>\n          <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'" icon-right (click)="get_max_exec_seq()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n        <div *ngIf="exec_seq.errors && exec_seq.touched" class="error-message">\n          執行順序不能為空白\n        </div>\n      </ion-col>\n      <ion-col>\n          <ion-item>\n            <ion-label stacked>略過資料列數</ion-label>\n            <ion-input type="number" [disabled]="CanEditBatch==false" name="skip_row_num" #skip_row_num="ngModel" [(ngModel)]="item.skip_row_num"\n              required></ion-input>\n\n          </ion-item>\n          <div *ngIf="skip_row_num.errors && skip_row_num.touched" class="error-message">\n            略過資料列數不能為空白\n          </div>\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label stacked>欄位分隔符號</ion-label>\n            <ion-input Title="f:表固定長度,\\t:tab,\\b:char(8),\\0:char(0),f|:固定長度後加上|" required maxlength="2" type="text" [disabled]="CanEditBatch==false" name="field_terminator" #field_terminator="ngModel" [(ngModel)]="item.field_terminator"></ion-input>\n          </ion-item>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n          <ion-col col-12 col-sm-6 >\n              <ion-item>\n                <ion-label stacked>啟用</ion-label>\n                <ion-checkbox [disabled]="CanEditBatch==false" name="is_active" #is_active="ngModel" [(ngModel)]="item.is_active"></ion-checkbox>\n              </ion-item>\n            </ion-col>\n        <ion-col col-12 col-sm-6>\n          <ion-item>\n            <ion-label stacked>略過重複主鍵</ion-label>\n            <ion-checkbox [disabled]="CanEditBatch==false" name="skip_dup_key" #skip_dup_key="ngModel" [(ngModel)]="item.skip_dup_key"></ion-checkbox>\n          </ion-item>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <ion-item>\n            <ion-label stacked>預存程序名稱</ion-label>\n            <ion-input  maxlength="255" type="text" [disabled]="CanEditBatch==false" name="sp_name" #sp_name="ngModel" [(ngModel)]="item.sp_name"></ion-input>\n          </ion-item>\n\n        </ion-col>\n        <ion-col col-12 *ngIf="file_type_key==\'001|XLS\'" >\n          <ion-item>\n            <ion-label stacked>工作表名稱</ion-label>\n            <ion-input  maxlength="50" type="text" [disabled]="CanEditBatch==false" name="sheetname" #sheetname="ngModel" [(ngModel)]="item.sheetname"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n    </form>\n\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-row>\n        <ion-col>\n          <div [ngClass]="[\'command\']">\n            <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n              <ion-icon name="backspace"></ion-icon>\n            </button>\n            <button small title="確認" [disabled]="CanEditBatch==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n              (click)="Save()">\n              <ion-icon name="checkmark-circle"></ion-icon>\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\file-import-table-add-edit-modal\file-import-table-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_file_import_table_services_file_import_table_services__["a" /* FileImportTableServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__components_global_global__["a" /* GlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_conn_services_conn_services__["a" /* ConnServicesProvider */]])
    ], FileImportTableAddEditModalPage);
    return FileImportTableAddEditModalPage;
}());

//# sourceMappingURL=file-import-table-add-edit-modal.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileImportTableAddEditModalPageModule", function() { return FileImportTableAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_import_table_add_edit_modal__ = __webpack_require__(1457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_file_import_table_services_file_import_table_services__ = __webpack_require__(1043);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FileImportTableAddEditModalPageModule = /** @class */ (function () {
    function FileImportTableAddEditModalPageModule() {
    }
    FileImportTableAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_import_table_add_edit_modal__["a" /* FileImportTableAddEditModalPage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_file_import_table_services_file_import_table_services__["a" /* FileImportTableServicesProvider */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_import_table_add_edit_modal__["a" /* FileImportTableAddEditModalPage */]),
            ],
        })
    ], FileImportTableAddEditModalPageModule);
    return FileImportTableAddEditModalPageModule;
}());

//# sourceMappingURL=file-import-table-add-edit-modal.module.js.map

/***/ }),

/***/ 973:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileImportTableViewModel; });
var FileImportTableViewModel = /** @class */ (function () {
    function FileImportTableViewModel() {
    }
    return FileImportTableViewModel;
}());

//# sourceMappingURL=FileImportTableViewModel.js.map

/***/ })

});
//# sourceMappingURL=249.js.map