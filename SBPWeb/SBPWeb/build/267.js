webpackJsonp([267],{

/***/ 1024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileExportHkServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileExportHKListResponse__ = __webpack_require__(1117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileExportHKResponse__ = __webpack_require__(1118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__file_services_file_services__ = __webpack_require__(127);
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
  Generated class for the FileExportHKServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FileExportHkServicesProvider = /** @class */ (function (_super) {
    __extends(FileExportHkServicesProvider, _super);
    function FileExportHkServicesProvider(Services) {
        var _this = _super.call(this, Services) || this;
        _this.Services = Services;
        _this.ctl = "FileExportHK";
        console.log("Hello FileExportHKServiceProvider Provider");
        return _this;
    }
    FileExportHkServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, keyword, exec_group, exec_file_seq, order_type) {
        var _this = this;
        var sub_url;
        if (exec_file_seq === 0) {
            sub_url = "FileExportHK?PageSize={1}&PageNumber={2}&keyword={3}&exec_group={4}&order_type={5}";
            sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, exec_group, order_type);
        }
        else {
            sub_url = "FileExportHK/Select?PageSize={1}&PageNumber={2}&keyword={3}&exec_group={4}&exec_file_seq={5}&order_type={6}";
            sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, exec_group, exec_file_seq, order_type);
        }
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.FileExportHKs = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileExportHKListResponse__["a" /* FileExportHKListResponse */]({
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
            return _this.FileExportHKs;
        });
    };
    FileExportHkServicesProvider.prototype.PostPutAsync = function (FileExportHKViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "FileExportHK";
        else
            sub_url = "FileExportHK/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, FileExportHKViewModel.exec_file_seq);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, FileExportHKViewModel, mode).map(function (item) {
            _this.FileExportHK = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileExportHKResponse__["a" /* FileExportHKResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.FileExportHK;
        });
    };
    FileExportHkServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], FileExportHkServicesProvider);
    return FileExportHkServicesProvider;
}(__WEBPACK_IMPORTED_MODULE_5__file_services_file_services__["a" /* FileServicesProvider */]));

//# sourceMappingURL=file-export-hk-services.js.map

/***/ }),

/***/ 1117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileExportHKListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileExportHKViewModel__ = __webpack_require__(952);
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


var FileExportHKListResponse = /** @class */ (function (_super) {
    __extends(FileExportHKListResponse, _super);
    function FileExportHKListResponse(obj) {
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
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileExportHKViewModel__["a" /* FileExportHKViewModel */]();
                item.exec_file_seq = data.exec_file_seq;
                item.exec_group = data.exec_group;
                item.is_active = data.is_active;
                item.exec_seq = data.exec_seq;
                item.can_rerun = data.can_rerun;
                item.parameter_column_group = data.parameter_column_group;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                item.note = (data && data.note) || null;
                item.is_active_desc = data.is_active_desc;
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
                item.out_file_path = data.out_file_path;
                item.out_file_path_key = data.out_file_path_key;
                item.schemaname = data.schemaname;
                item.tablename = data.tablename;
                item.tablefullname = data.tablefullname;
                item.db_conn_id = data.db_conn_id;
                item.db_conn_string = data.db_conn_string;
                item.parameter_column_group = data.parameter_column_group;
                item.filename = data.filename;
                item.src_export_type_key = data.src_export_type_key;
                item.src_export_type = data.src_export_type;
                item.file_format_key = data.file_format_key;
                item.file_format = data.file_format;
                item.field_terminator = data.field_terminator;
                item.row_terminator = data.row_terminator;
                item.is_processed_exec_group = data.is_processed_exec_group;
                item.is_fail_stop = data.is_fail_stop;
                item.export_mode_key = (data && data.export_mode_key) || null;
                item.last_data_type_key = (data && data.last_data_type_key) || null;
                item.last_data_column_name =
                    (data && data.last_data_column_name) || null;
                item.where_condition = (data && data.where_condition) || null;
                item.keep_days = data.keep_days;
                if (item.is_processed_exec_group === true) {
                    item.processed_exec_group_color = "danger";
                }
                else
                    item.processed_exec_group_color = "light";
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return FileExportHKListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=FileExportHKListResponse.js.map

/***/ }),

/***/ 1118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileExportHKResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileExportHKViewModel__ = __webpack_require__(952);
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


var FileExportHKResponse = /** @class */ (function (_super) {
    __extends(FileExportHKResponse, _super);
    function FileExportHKResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileExportHKViewModel__["a" /* FileExportHKViewModel */]();
            _this.Model.exec_file_seq = obj.Model.exec_file_seq;
            _this.Model.exec_group = obj.Model.exec_group;
            _this.Model.is_active = obj.Model.is_active;
            _this.Model.exec_seq = obj.Model.exec_seq;
            _this.Model.can_rerun = obj.Model.can_rerun;
            _this.Model.parameter_column_group = obj.Model.parameter_column_group;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
            _this.Model.note = (obj && obj.Model.note) || null;
            _this.Model.is_active_desc = obj.Model.is_active_desc;
            switch (obj.Model.is_active) {
                case false: {
                    _this.Model.is_active_color = "danger";
                    break;
                }
                default:
                    _this.Model.is_active_color = "active";
            }
            _this.Model.out_file_path_key = obj.Model.out_file_path_key;
            _this.Model.out_file_path = obj.Model.out_file_path;
            _this.Model.schemaname = obj.Model.schemaname;
            _this.Model.tablename = obj.Model.tablename;
            _this.Model.tablefullname = obj.Model.tablefullname;
            _this.Model.db_conn_id = obj.Model.db_conn_id;
            _this.Model.db_conn_string = obj.Model.db_conn_string;
            _this.Model.parameter_column_group = obj.Model.parameter_column_group;
            _this.Model.filename = obj.Model.filename;
            _this.Model.src_export_type_key = obj.Model.src_export_type_key;
            _this.Model.src_export_type = obj.Model.src_export_type;
            _this.Model.file_format_key = (obj && obj.Model.file_format_key) || null;
            _this.Model.file_format = (obj && obj.Model.file_format) || null;
            _this.Model.field_terminator = (obj && obj.Model.field_terminator) || null;
            _this.Model.row_terminator = (obj && obj.Model.row_terminator) || null;
            _this.Model.is_processed_exec_group = obj.Model.is_processed_exec_group;
            _this.Model.is_fail_stop = obj.Model.is_fail_stop;
            if (_this.Model.is_processed_exec_group === true) {
                _this.Model.processed_exec_group_color = "danger";
            }
            else
                _this.Model.processed_exec_group_color = "light";
        }
        return _this;
    }
    return FileExportHKResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=FileExportHKResponse.js.map

/***/ }),

/***/ 1383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileExportHkAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_file_export_hk_services_file_export_hk_services__ = __webpack_require__(1024);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_FileExportHKViewModel__ = __webpack_require__(952);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_file_path_services_file_path_services__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_conn_services_conn_services__ = __webpack_require__(266);
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
 * Generated class for the FileExportHKModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FileExportHkAddEditModalPage = /** @class */ (function () {
    function FileExportHkAddEditModalPage(navCtrl, navParams, viewCtrl, FileExportHKServices, FilePathServices, loadingCtrl, global, modalCtrl, ConnServices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.FileExportHKServices = FileExportHKServices;
        this.FilePathServices = FilePathServices;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.modalCtrl = modalCtrl;
        this.ConnServices = ConnServices;
        this.func_no = 3;
        this.func_key = "014|" + this.func_no;
        this.min_exec_file_seq = 38000;
        this.max_exec_file_seq = this.min_exec_file_seq + 999;
        this.range_exec_file_seq = __WEBPACK_IMPORTED_MODULE_4__Model_String__["a" /* String */].Format("{0}-{1}", this.min_exec_file_seq, this.max_exec_file_seq);
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.item = new __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_FileExportHKViewModel__["a" /* FileExportHKViewModel */]();
        this.item.exec_file_seq = navParams.data.item.exec_file_seq;
        this.item.exec_group = navParams.data.item.exec_group;
        this.item.is_active = navParams.data.item.is_active;
        this.item.exec_seq = navParams.data.item.exec_seq;
        this.item.can_rerun = navParams.data.item.can_rerun;
        this.item.parameter_column_group =
            navParams.data.item.parameter_column_group;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.item.note = navParams.data.item.note;
        this.item.is_fail_stop = navParams.data.item.is_fail_stop;
        this.item.out_file_path_key = navParams.data.item.out_file_path_key;
        this.item.out_file_path = navParams.data.item.out_file_path;
        this.item.schemaname = navParams.data.item.schemaname;
        this.item.tablename = navParams.data.item.tablename;
        this.item.tablefullname = navParams.data.item.tablefullname;
        this.item.db_conn_id = navParams.data.item.db_conn_id;
        this.item.db_conn_string = navParams.data.item.db_conn_string;
        this.item.parameter_column_group =
            navParams.data.item.parameter_column_group;
        this.item.filename = navParams.data.item.filename;
        this.item.src_export_type_key = navParams.data.item.src_export_type_key;
        this.item.src_export_type = navParams.data.item.src_export_type;
        this.item.file_format_key = navParams.data.item.file_format_key;
        this.item.file_format = navParams.data.item.file_format;
        this.item.field_terminator = navParams.data.item.field_terminator;
        this.item.row_terminator = navParams.data.item.row_terminator;
        this.item.export_mode_key = navParams.data.item.export_mode_key;
        this.item.last_data_type_key = navParams.data.item.last_data_type_key;
        this.item.last_data_column_name = navParams.data.item.last_data_column_name;
        this.item.where_condition = navParams.data.item.where_condition;
        this.item.keep_days = navParams.data.item.keep_days;
        if (this.change_mode === "n") {
            this.get_default_path();
            this.get_conn_string("localdb");
        }
        if (this.change_mode === "c") {
            this.get_max_exec_file_seq();
            this.get_max_exec_seq();
        }
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.CanFileBrowser = navParams.data.CanFileBrowser;
        this.title = "資料保留匯出";
    }
    FileExportHkAddEditModalPage.prototype.openNavPage = function (parent_path) {
        var _this = this;
        var page;
        if (parent_path.indexOf("\\") >= 0)
            page = "DirectoryBrowserPage";
        if (parent_path.indexOf("/") >= 0)
            page = "FtpDirectoryBrowserPage";
        this.global.createLoader("連線中...");
        this.global.loading.present().then(function () {
            _this.navCtrl.push(page, { parent_path: parent_path, parent_page: _this, is_modal: true });
        });
        this.global.dismissLoading();
    };
    FileExportHkAddEditModalPage.prototype.get_conn_string = function (remote_conn_id) {
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
    FileExportHkAddEditModalPage.prototype.SelectSrcExportType = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.src_export_type_key,
            code_key: "008|HS1,008|HS2"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.src_export_type_key = select_data.code_key;
            _this.item.src_export_type = select_data.code_desc;
        });
        modal.present();
    };
    FileExportHkAddEditModalPage.prototype.SelectFileFormat = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.file_format_key,
            code_key: "011|C,011|CB,011|UTF16,011|UTF32,011|UTF7,011|UTF8,011|UTF8B,011|W,011|B,011|W,011|WB"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.file_format_key = select_data.code_key;
            _this.item.file_format = select_data.code_desc;
        });
        modal.present();
    };
    FileExportHkAddEditModalPage.prototype.SelectConn = function () {
        var _this = this;
        var modal = this.modalCtrl.create("ConnSelectModalPage", {
            select_remote_conn_id: this.item.db_conn_id,
            conn_type_key: "065|001"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.db_conn_id = select_data.remote_conn_id;
            _this.item.db_conn_string = select_data.conn_string;
        });
        modal.present();
    };
    FileExportHkAddEditModalPage.prototype.SelectParameterGroup = function () {
        var _this = this;
        var modal = this.modalCtrl.create("ParameterGroupSelectModelPage", {
            select_parameter_column_group: this.item.parameter_column_group
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.parameter_column_group = select_data.parameter_column_group;
        });
        modal.present();
    };
    FileExportHkAddEditModalPage.prototype.openNavParameterColumnPage = function (item) {
        var _this = this;
        this.global.createLoader("連線中...");
        this.global.loading.present().then(function () {
            _this.navCtrl.push("ParameterColumnPage", { item: item });
        });
        this.global.dismissLoading();
    };
    FileExportHkAddEditModalPage.prototype.SelectTable = function () {
        var _this = this;
        var modal = this.modalCtrl.create("TableExtSelectModalPage", {
            select_item: this.item.tablefullname
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
    FileExportHkAddEditModalPage.prototype.SelectOutFilePath = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.out_file_path_key,
            code_type: "005"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.out_file_path_key = select_data.code_key;
            _this.item.out_file_path = select_data.code_desc;
        });
        modal.present();
    };
    FileExportHkAddEditModalPage.prototype.get_max_exec_file_seq = function () {
        var _this = this;
        this.global.createLoader("取得最大值中...");
        this.global.loading.present().then(function () {
            _this.FileExportHKServices.GetMaxRangeExecFileSeqAsync(_this.func_no, _this.item.exec_group, _this.min_exec_file_seq, _this.max_exec_file_seq).subscribe(function (data) {
                if (data.DidError === true) {
                    _this.global.dismissLoading();
                    _this.global.showError(data.ErrorMessage);
                }
                else {
                    _this.item.exec_file_seq = data.Model;
                    _this.global.dismissLoading();
                }
            }, function (err) {
                _this.global.dismissLoading();
                _this.global.showError("無法連上WebAPI伺服器-" + err.message);
            });
        });
    };
    FileExportHkAddEditModalPage.prototype.get_default_path = function () {
        var _this = this;
        this.global.createLoader("取得預設資料夾中...");
        this.global.loading.present().then(function () {
            _this.FilePathServices.GetDefaultListsByAsync(_this.func_key).subscribe(function (data) {
                if (data.DidError === true) {
                    _this.global.dismissLoading();
                    _this.global.showError(data.ErrorMessage);
                }
                else {
                    _this.default_path = data.Model;
                    _this.src_file_path = _this.default_path.filter(function (item, FilePathViewModel) { return item.file_path_type_key === "004|OUT"; })[0];
                    _this.item.out_file_path_key = _this.src_file_path.file_path_key;
                    _this.item.out_file_path = _this.src_file_path.file_path;
                    _this.global.dismissLoading();
                }
            }, function (err) {
                _this.global.dismissLoading();
                _this.global.showError("無法連上WebAPI伺服器-" + err.message);
            });
        });
    };
    FileExportHkAddEditModalPage.prototype.get_max_exec_seq = function () {
        var _this = this;
        this.global.createLoader("取得最大值中...");
        this.global.loading.present().then(function () {
            _this.FileExportHKServices.GetMaxExecSeqAsync(_this.func_no, _this.item.exec_group).subscribe(function (data) {
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
    FileExportHkAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    FileExportHkAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FileExportHkAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FileExportHKModalPage");
    };
    FileExportHkAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: "page-file-export-hk-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\file-export-hk-add-edit-modal\file-export-hk-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n\n    <ion-row>\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>轉檔群組</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="exec_group" #exec_group="ngModel" [(ngModel)]="item.exec_group"\n            required maxlength="30"></ion-input>\n        </ion-item>\n        <div *ngIf="exec_group.errors && exec_group.touched" class="error-message">\n          轉檔群組不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>轉檔序號:{{range_exec_file_seq}}</ion-label>\n          <ion-input type="number" [disabled]="CanEditBatch==false || mode==\'PUT\'" name="exec_file_seq" #exec_file_seq="ngModel" [(ngModel)]="item.exec_file_seq"\n            required></ion-input>\n          <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'" icon-right (click)="get_max_exec_file_seq()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n        <div *ngIf="exec_file_seq.errors && exec_file_seq.touched" class="error-message">\n          轉檔序號不能為空白\n        </div>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-12 col-sm-4>\n          <ion-item>\n            <ion-label stacked>結構描述</ion-label>\n            <ion-input type="text"  [disabled]="CanEditBatch==false  || mode==\'PUT\'" name="schemaname" #schemaname="ngModel" [(ngModel)]="item.schemaname"\n               maxlength="30"></ion-input>\n          </ion-item>\n        </ion-col>\n        <ion-col col-12 col-sm-8>\n          <ion-item>\n            <ion-label stacked>資料表名稱</ion-label>\n            <ion-input type="text"  [disabled]="CanEditBatch==false || mode==\'PUT\'" name="tablename" #tablename="ngModel" [(ngModel)]="item.tablename"\n              required maxlength="50"></ion-input>\n            <button ion-button outline item-end icon-right *ngIf="CanEditBatch==true && mode==\'POST\'" (click)="SelectTable()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-item>\n          <div *ngIf="tablename.errors && tablename.touched" class="error-message">\n            資料表名稱不能為空白\n          </div>\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-6>\n              <ion-item>\n                <ion-label stacked>執行順序</ion-label>\n                <ion-input type="number" [disabled]="CanEditBatch==false" name="exec_seq" #exec_seq="ngModel" [(ngModel)]="item.exec_seq"\n                  required></ion-input>\n                <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="get_max_exec_seq()">\n                  <ion-icon name="arrow-dropdown"></ion-icon>\n                </button>\n              </ion-item>\n              <div *ngIf="exec_seq.errors && exec_seq.touched" class="error-message">\n                執行順序不能為空白\n              </div>\n            </ion-col>\n            <ion-col col-6>\n                <ion-item>\n                  <ion-label stacked>連線編號</ion-label>\n                  <ion-input type="text" readonly=true [disabled]="CanEditBatch==false || mode==\'PUT\'" name="db_conn_id" #db_conn_id="ngModel" [(ngModel)]="item.db_conn_id"\n                    required maxlength="20"></ion-input>\n\n                  <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'" icon-right (click)="SelectConn()">\n                    <ion-icon name="arrow-dropdown"></ion-icon>\n                  </button>\n                </ion-item>\n\n                <div *ngIf="db_conn_id.errors && db_conn_id.touched " class="error-message">\n                  連線編號不能為空白\n                </div>\n              </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label stacked>連線字串</ion-label>\n              <ion-textarea rows=4 [disabled]=true name="db_conn_string" #db_conn_string="ngModel" [(ngModel)]="item.db_conn_string" required></ion-textarea>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n    <ion-row>\n        <ion-col col-12 col-sm-4 >\n            <ion-item>\n              <ion-label stacked>參數群組</ion-label>\n              <ion-input type="text" readonly=true [disabled]="CanEditBatch==false || mode==\'PUT\'" name="parameter_column_group" #parameter_column_group="ngModel"\n                [(ngModel)]="item.parameter_column_group" required maxlength="3"></ion-input>\n\n              <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'" icon-right (click)="SelectParameterGroup()">\n                <ion-icon name="arrow-dropdown"></ion-icon>\n              </button>\n            </ion-item>\n\n            <div *ngIf="parameter_column_group.errors && parameter_column_group.touched " class="error-message">\n              參數群組不能為空白\n            </div>\n          </ion-col>\n\n      <ion-col col-12 col-sm-8 >\n        <ion-item>\n          <ion-label stacked>檔案名稱</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="filename" #filename="ngModel" [(ngModel)]="item.filename" required\n            maxlength="50"></ion-input>\n        </ion-item>\n        <div *ngIf="filename.errors && filename.touched" class="error-message">\n          檔案名稱不能為空白\n        </div>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>失敗停止</ion-label>\n          <ion-checkbox [disabled]="CanEditBatch==false" name="is_fail_stop" #is_fail_stop="ngModel" [(ngModel)]="item.is_fail_stop"></ion-checkbox>\n        </ion-item>\n\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>啟用</ion-label>\n          <ion-checkbox [disabled]="CanEditBatch==false" name="is_active" #is_active="ngModel" [(ngModel)]="item.is_active"></ion-checkbox>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>重複</ion-label>\n          <ion-checkbox [disabled]="CanEditBatch==false" name="can_rerun" #can_rerun="ngModel" [(ngModel)]="item.can_rerun"></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label stacked>欄位分隔符號</ion-label>\n          <ion-input type="text" title="f:表固定長度,\\t:tab,\\b:char(8),\\0:char(0),f|:固定長度後加上|"  maxlength="2" [disabled]="CanEditBatch==false" name="field_terminator" #field_terminator="ngModel" [(ngModel)]="item.field_terminator"\n            required></ion-input>\n        </ion-item>\n        <div *ngIf="field_terminator.errors && field_terminator.touched " class="error-message">\n            欄位分隔符號不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-6>\n          <ion-item>\n            <ion-label stacked>列結尾符號</ion-label>\n            <ion-input type="text"  maxlength="5" [disabled]="CanEditBatch==false" name="row_terminator" #row_terminator="ngModel" [(ngModel)]="item.row_terminator"\n              required></ion-input>\n          </ion-item>\n          <div *ngIf="row_terminator.errors && row_terminator.touched " class="error-message">\n              列結尾符號不能為空白\n          </div>\n        </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>匯出類型</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false || mode==\'PUT\'" name="src_export_type_key" #src_export_type_key="ngModel" [(ngModel)]="item.src_export_type_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'" icon-right (click)="SelectSrcExportType()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="src_export_type_key.errors && src_export_type_key.touched " class="error-message">\n          匯出類型不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>匯出類型</ion-label>\n          <ion-input type="text" maxlength=10  [disabled]=true name="src_export_type" #src_export_type="ngModel" [(ngModel)]="item.src_export_type"\n            required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-12 col-sm-4>\n          <ion-item>\n            <ion-label stacked>內文格式</ion-label>\n            <ion-input type="text" readonly=true maxlength=10  [disabled]="CanEditBatch==false " name="file_format_key" #file_format_key="ngModel" [(ngModel)]="item.file_format_key"\n              required></ion-input>\n\n            <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectFileFormat()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-item>\n\n          <div *ngIf="file_format_key.errors && file_format_key.touched " class="error-message">\n              內文格式不能為空白\n          </div>\n        </ion-col>\n        <ion-col col-12 col-sm-8>\n          <ion-item>\n            <ion-label stacked>內文格式</ion-label>\n            <ion-input type="text" [disabled]=true name="file_format" #file_format="ngModel" [(ngModel)]="item.file_format"\n              required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>匯出檔案路徑</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="out_file_path_key" #out_file_path_key="ngModel" [(ngModel)]="item.out_file_path_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectOutFilePath()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="out_file_path_key.errors && out_file_path_key.touched " class="error-message">\n          匯出檔案路徑不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n            <button ion-button clear=true [disabled]="CanFileBrowser==false" (click)="openNavPage(item.out_file_path)">\n                {{item.out_file_path}}\n              </button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label stacked>備註</ion-label>\n            <ion-textarea [disabled]="CanEditBatch==false" name="note" #note="ngModel" [(ngModel)]="item.note" maxlength="255"  required></ion-textarea>\n          </ion-item>\n          <div *ngIf="note.errors && note.touched " class="error-message">\n              備註不能為空白\n          </div>\n        </ion-col>\n      </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditBatch==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n            (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n          <button small title="參數群組" ion-button color="dark" icon-left (click)="openNavParameterColumnPage(item)">\n            <ion-icon name="outlet"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\file-export-hk-add-edit-modal\file-export-hk-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_file_export_hk_services_file_export_hk_services__["a" /* FileExportHkServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_file_path_services_file_path_services__["a" /* FilePathServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__components_global_global__["a" /* GlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_conn_services_conn_services__["a" /* ConnServicesProvider */]])
    ], FileExportHkAddEditModalPage);
    return FileExportHkAddEditModalPage;
}());

//# sourceMappingURL=file-export-hk-add-edit-modal.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileExportHkAddEditModalPageModule", function() { return FileExportHkAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_export_hk_add_edit_modal__ = __webpack_require__(1383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_file_export_hk_services_file_export_hk_services__ = __webpack_require__(1024);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FileExportHkAddEditModalPageModule = /** @class */ (function () {
    function FileExportHkAddEditModalPageModule() {
    }
    FileExportHkAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_export_hk_add_edit_modal__["a" /* FileExportHkAddEditModalPage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_file_export_hk_services_file_export_hk_services__["a" /* FileExportHkServicesProvider */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_export_hk_add_edit_modal__["a" /* FileExportHkAddEditModalPage */]),
            ],
        })
    ], FileExportHkAddEditModalPageModule);
    return FileExportHkAddEditModalPageModule;
}());

//# sourceMappingURL=file-export-hk-add-edit-modal.module.js.map

/***/ }),

/***/ 952:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileExportHKViewModel; });
var FileExportHKViewModel = /** @class */ (function () {
    function FileExportHKViewModel() {
    }
    return FileExportHKViewModel;
}());

//# sourceMappingURL=FileExportHKViewModel.js.map

/***/ })

});
//# sourceMappingURL=267.js.map