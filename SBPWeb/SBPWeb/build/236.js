webpackJsonp([236],{

/***/ 1046:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileFtpDownServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileFtpDownListResponse__ = __webpack_require__(1148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileFtpDownResponse__ = __webpack_require__(1149);
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
  Generated class for the FileFtpDownServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FileFtpDownServicesProvider = /** @class */ (function (_super) {
    __extends(FileFtpDownServicesProvider, _super);
    function FileFtpDownServicesProvider(Services) {
        var _this = _super.call(this, Services) || this;
        _this.Services = Services;
        _this.ctl = "FileFtpDown";
        console.log("Hello FileFtpDownServiceProvider Provider");
        return _this;
    }
    FileFtpDownServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, keyword, exec_group, exec_file_seq, order_type) {
        var _this = this;
        var sub_url;
        if (exec_file_seq === 0) {
            sub_url = "FileFtpDown?PageSize={1}&PageNumber={2}&keyword={3}&exec_group={4}&order_type={5}";
            sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, exec_group, order_type);
        }
        else {
            sub_url = "FileFtpDown/Select?PageSize={1}&PageNumber={2}&keyword={3}&exec_group={4}&exec_file_seq={5}&order_type={6}";
            sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, exec_group, exec_file_seq, order_type);
        }
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.FileFtpDowns = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileFtpDownListResponse__["a" /* FileFtpDownListResponse */]({
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
            return _this.FileFtpDowns;
        });
    };
    FileFtpDownServicesProvider.prototype.PostPutAsync = function (FileFtpDownViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "FileFtpDown";
        else
            sub_url = "FileFtpDown/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, FileFtpDownViewModel.exec_file_seq);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, FileFtpDownViewModel, mode).map(function (item) {
            _this.FileFtpDown = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileFtpDownResponse__["a" /* FileFtpDownResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.FileFtpDown;
        });
    };
    FileFtpDownServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], FileFtpDownServicesProvider);
    return FileFtpDownServicesProvider;
}(__WEBPACK_IMPORTED_MODULE_5__file_services_file_services__["a" /* FileServicesProvider */]));

//# sourceMappingURL=file-ftp-down-services.js.map

/***/ }),

/***/ 1148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileFtpDownListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileFtpDownViewModel__ = __webpack_require__(972);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ViewModel_FtpRemoteViewModel__ = __webpack_require__(923);
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



var FileFtpDownListResponse = /** @class */ (function (_super) {
    __extends(FileFtpDownListResponse, _super);
    function FileFtpDownListResponse(obj) {
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
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileFtpDownViewModel__["a" /* FileFtpDownViewModel */]();
                item.exec_file_seq = data.exec_file_seq;
                item.exec_group = data.exec_group;
                item.file_keyword = data.file_keyword;
                item.file_min_length = data.file_min_length;
                item.file_max_length = data.file_max_length;
                item.is_active = data.is_active;
                item.file_proc_key = data.file_proc_key;
                item.exec_seq = data.exec_seq;
                item.can_rerun = data.can_rerun;
                item.parameter_column_group = data.parameter_column_group;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                item.note = (data && data.note) || null;
                item.file_proc = data.file_proc;
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
                item.empty_file_check_flag = data.empty_file_check_flag;
                item.is_fail_stop = data.is_fail_stop;
                item.remote_file_path = data.remote_file_path;
                item.remote_bk_file_path = data.remote_bk_file_path;
                item.down_file_path = data.down_file_path;
                item.remote_file_path_key = data.remote_file_path_key;
                item.remote_bk_file_path_key = data.remote_bk_file_path_key;
                item.down_file_path_key = data.down_file_path_key;
                item.is_processed_sql = data.is_processed_sql;
                if (item.is_processed_sql === true) {
                    item.processed_sql_color = "danger";
                }
                else
                    item.processed_sql_color = "light";
                item.is_processed_exec_group = data.is_processed_exec_group;
                if (item.is_processed_exec_group === true) {
                    item.processed_exec_group_color = "danger";
                }
                else
                    item.processed_exec_group_color = "light";
                if (data.remoteViewModel != null) {
                    var t = new __WEBPACK_IMPORTED_MODULE_2__ViewModel_FtpRemoteViewModel__["a" /* FtpRemoteViewModel */]();
                    t.exec_file_seq = data.remoteViewModel.exec_file_seq;
                    t.remote_conn_id = data.remoteViewModel.remote_conn_id;
                    t.conn_type_key = data.remoteViewModel.conn_type_key;
                    t.encrypt_method_key = data.remoteViewModel.encrypt_method_key;
                    t.creator = data.remoteViewModel.creator;
                    t.create_time = data.remoteViewModel.create_time;
                    t.modifier = data.remoteViewModel.modifier;
                    t.last_update_time = data.remoteViewModel.last_update_time;
                    t.remote_conn_string = data.remoteViewModel.remote_conn_string;
                    t.conn_type = data.remoteViewModel.conn_type;
                    t.encrypt_method = data.remoteViewModel.encrypt_method;
                    item.remoteViewModel = t;
                }
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return FileFtpDownListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=FileFtpDownListResponse.js.map

/***/ }),

/***/ 1149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileFtpDownResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileFtpDownViewModel__ = __webpack_require__(972);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ViewModel_FtpRemoteViewModel__ = __webpack_require__(923);
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



var FileFtpDownResponse = /** @class */ (function (_super) {
    __extends(FileFtpDownResponse, _super);
    function FileFtpDownResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileFtpDownViewModel__["a" /* FileFtpDownViewModel */]();
            _this.Model.exec_file_seq = obj.Model.exec_file_seq;
            _this.Model.exec_group = obj.Model.exec_group;
            _this.Model.file_keyword = obj.Model.file_keyword;
            _this.Model.file_min_length = obj.Model.file_min_length;
            _this.Model.file_max_length = obj.Model.file_max_length;
            _this.Model.is_active = obj.Model.is_active;
            _this.Model.file_proc_key = obj.Model.file_proc_key;
            _this.Model.exec_seq = obj.Model.exec_seq;
            _this.Model.can_rerun = obj.Model.can_rerun;
            _this.Model.parameter_column_group = obj.Model.parameter_column_group;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
            _this.Model.note = (obj && obj.Model.note) || null;
            _this.Model.file_proc = obj.Model.file_proc;
            _this.Model.is_active_desc = obj.Model.is_active_desc;
            switch (obj.Model.is_active) {
                case false: {
                    _this.Model.is_active_color = "danger";
                    break;
                }
                default:
                    _this.Model.is_active_color = "active";
            }
            _this.Model.empty_file_check_flag = obj.Model.empty_file_check_flag;
            _this.Model.is_fail_stop = obj.Model.is_fail_stop;
            _this.Model.remote_file_path_key = obj.Model.remote_file_path_key;
            _this.Model.remote_bk_file_path_key = obj.Model.remote_bk_file_path_key;
            _this.Model.down_file_path_key = obj.Model.down_file_path_key;
            _this.Model.is_processed_sql = obj.Model.is_processed_sql;
            if (_this.Model.is_processed_sql === true) {
                _this.Model.processed_sql_color = "danger";
            }
            else
                _this.Model.processed_sql_color = "light";
            _this.Model.is_processed_exec_group = obj.Model.is_processed_exec_group;
            if (_this.Model.is_processed_exec_group === true) {
                _this.Model.processed_exec_group_color = "danger";
            }
            else
                _this.Model.processed_exec_group_color = "light";
            if (obj.Model.remoteViewModel != null) {
                var t = new __WEBPACK_IMPORTED_MODULE_2__ViewModel_FtpRemoteViewModel__["a" /* FtpRemoteViewModel */]();
                t.exec_file_seq = obj.Model.remoteViewModel.exec_file_seq;
                t.remote_conn_id = obj.Model.remoteViewModel.remote_conn_id;
                t.conn_type_key = obj.Model.remoteViewModel.conn_type_key;
                t.encrypt_method_key = obj.Model.remoteViewModel.encrypt_method_key;
                t.creator = obj.Model.remoteViewModel.creator;
                t.create_time = obj.Model.remoteViewModel.create_time;
                t.modifier = obj.Model.remoteViewModel.modifier;
                t.last_update_time = obj.Model.remoteViewModel.last_update_time;
                t.remote_conn_string = obj.Model.remoteViewModel.remote_conn_string;
                t.conn_type = obj.Model.remoteViewModel.conn_type;
                t.encrypt_method = obj.Model.remoteViewModel.encrypt_method;
                _this.Model.remoteViewModel = t;
            }
        }
        return _this;
    }
    return FileFtpDownResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=FileFtpDownResponse.js.map

/***/ }),

/***/ 1421:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileFtpDownAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_file_ftp_down_services_file_ftp_down_services__ = __webpack_require__(1046);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_FileFtpDownViewModel__ = __webpack_require__(972);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_file_path_services_file_path_services__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_conn_services_conn_services__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Model_ViewModel_FtpRemoteViewModel__ = __webpack_require__(923);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Model_ViewModel_FtpDirectoryBrowserViewModel__ = __webpack_require__(928);
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
 * Generated class for the FileFtpDownModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FileFtpDownAddEditModalPage = /** @class */ (function () {
    function FileFtpDownAddEditModalPage(navCtrl, navParams, viewCtrl, FileFtpDownServices, FilePathServices, loadingCtrl, global, modalCtrl, ConnServices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.FileFtpDownServices = FileFtpDownServices;
        this.FilePathServices = FilePathServices;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.modalCtrl = modalCtrl;
        this.ConnServices = ConnServices;
        this.func_no = 1;
        this.func_key = "014|" + this.func_no;
        this.min_exec_file_seq = 10000;
        this.max_exec_file_seq = this.min_exec_file_seq + 9999;
        this.range_exec_file_seq = __WEBPACK_IMPORTED_MODULE_4__Model_String__["a" /* String */].Format("{0}-{1}", this.min_exec_file_seq, this.max_exec_file_seq);
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.item = new __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_FileFtpDownViewModel__["a" /* FileFtpDownViewModel */]();
        this.item.exec_file_seq = navParams.data.item.exec_file_seq;
        this.item.exec_group = navParams.data.item.exec_group;
        this.item.file_keyword = navParams.data.item.file_keyword;
        this.item.file_min_length = navParams.data.item.file_min_length;
        this.item.file_max_length = navParams.data.item.file_max_length;
        this.item.is_active = navParams.data.item.is_active;
        this.item.file_proc_key = navParams.data.item.file_proc_key;
        this.item.exec_seq = navParams.data.item.exec_seq;
        this.item.can_rerun = navParams.data.item.can_rerun;
        this.item.parameter_column_group =
            navParams.data.item.parameter_column_group;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.item.note = navParams.data.item.note;
        this.item.file_proc = navParams.data.item.file_proc;
        this.item.empty_file_check_flag = navParams.data.item.empty_file_check_flag;
        this.item.is_fail_stop = navParams.data.item.is_fail_stop;
        this.item.remote_file_path_key = navParams.data.item.remote_file_path_key;
        this.item.remote_bk_file_path_key =
            navParams.data.item.remote_bk_file_path_key;
        this.item.down_file_path_key = navParams.data.item.down_file_path_key;
        this.item.remote_file_path = navParams.data.item.remote_file_path;
        this.item.remote_bk_file_path = navParams.data.item.remote_bk_file_path;
        this.item.down_file_path = navParams.data.item.down_file_path;
        this.item.exec_file_seq = navParams.data.item.exec_file_seq;
        this.item.remoteViewModel = new __WEBPACK_IMPORTED_MODULE_8__Model_ViewModel_FtpRemoteViewModel__["a" /* FtpRemoteViewModel */]();
        if (navParams.data.item.remoteViewModel != null) {
            this.item.remoteViewModel.exec_file_seq = navParams.data.item.remoteViewModel.exec_file_seq;
            this.item.remoteViewModel.remote_conn_id =
                navParams.data.item.remoteViewModel.remote_conn_id;
            this.item.remoteViewModel.conn_type_key =
                navParams.data.item.remoteViewModel.conn_type_key;
            this.item.remoteViewModel.encrypt_method_key =
                navParams.data.item.remoteViewModel.encrypt_method_key;
            this.item.remoteViewModel.remote_conn_string =
                navParams.data.item.remoteViewModel.remote_conn_string;
            this.item.remoteViewModel.conn_type =
                navParams.data.item.remoteViewModel.conn_type;
            this.item.remoteViewModel.encrypt_method =
                navParams.data.item.remoteViewModel.encrypt_method;
        }
        if (this.change_mode === "n") {
            this.get_default_path();
            this.get_ftp_conn_string("defaultftp");
        }
        if (this.change_mode === "c") {
            this.get_max_exec_file_seq();
            this.get_max_exec_seq();
        }
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.CanFileBrowser = navParams.data.CanFileBrowser;
        this.CanFtpFileBrowser = navParams.data.CanFtpFileBrowser;
        this.title = "FTP下載";
    }
    FileFtpDownAddEditModalPage.prototype.openNavPage = function (parent_path) {
        var _this = this;
        var page;
        if (parent_path.indexOf("\\") >= 0)
            page = "DirectoryBrowserPage";
        if (parent_path.indexOf("/") >= 0)
            page = "FtpDirectoryBrowserPage";
        this.filter = new __WEBPACK_IMPORTED_MODULE_9__Model_ViewModel_FtpDirectoryBrowserViewModel__["a" /* FtpDirectoryBrowserViewModel */]();
        this.filter.remote_conn_id = this.item.remoteViewModel.remote_conn_id;
        this.filter.remote_conn_string = this.item.remoteViewModel.remote_conn_string;
        this.filter.conn_type_key = this.item.remoteViewModel.conn_type_key;
        this.filter.conn_type = this.item.remoteViewModel.conn_type;
        this.filter.encrypt_method_key = this.item.remoteViewModel.encrypt_method_key;
        this.filter.encrypt_method = this.item.remoteViewModel.encrypt_method;
        this.global.createLoader("連線中...");
        this.global.loading.present().then(function () {
            if (page === "FtpDirectoryBrowserPage")
                _this.navCtrl.push(page, {
                    parent_path: parent_path,
                    parent_page: _this,
                    is_modal: true,
                    filter: _this.filter
                });
            else
                _this.navCtrl.push(page, {
                    parent_path: parent_path,
                    parent_page: _this,
                    is_modal: true
                });
        });
        this.global.dismissLoading();
    };
    FileFtpDownAddEditModalPage.prototype.SelectConn = function () {
        var _this = this;
        var modal = this.modalCtrl.create("ConnSelectModalPage", {
            select_remote_conn_id: this.item.remoteViewModel.remote_conn_id,
            conn_type_key: "065|002",
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.remoteViewModel.remote_conn_id = select_data.remote_conn_id;
            _this.item.remoteViewModel.remote_conn_string = select_data.conn_string;
        });
        modal.present();
    };
    FileFtpDownAddEditModalPage.prototype.SelectConnType = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.remoteViewModel.conn_type_key,
            code_type: "006"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.remoteViewModel.conn_type_key = select_data.code_key;
            _this.item.remoteViewModel.conn_type = select_data.code_desc;
            if (_this.item.remoteViewModel.conn_type_key === "006|3") {
                _this.item.remoteViewModel.encrypt_method_key = "046|2";
                _this.item.remoteViewModel.encrypt_method = "Explicit_SSL(外顯式)";
            }
            else {
                _this.item.remoteViewModel.encrypt_method_key = "046|1";
                _this.item.remoteViewModel.encrypt_method = "無";
            }
        });
        modal.present();
    };
    FileFtpDownAddEditModalPage.prototype.SelectEncryptMethod = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.remoteViewModel.encrypt_method_key,
            code_type: "046"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.remoteViewModel.encrypt_method_key = select_data.code_key;
            _this.item.remoteViewModel.encrypt_method = select_data.code_desc;
        });
        modal.present();
    };
    FileFtpDownAddEditModalPage.prototype.SelectFileProcType = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.file_proc_key,
            code_type: "018"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.file_proc_key = select_data.code_key;
            _this.item.file_proc = select_data.code_desc;
        });
        modal.present();
    };
    FileFtpDownAddEditModalPage.prototype.SelectParameterGroup = function () {
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
    FileFtpDownAddEditModalPage.prototype.SelectRemoteFilePath = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.remote_file_path_key,
            code_type: "005"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.remote_file_path_key = select_data.code_key;
            _this.item.remote_file_path = select_data.code_desc;
        });
        modal.present();
    };
    FileFtpDownAddEditModalPage.prototype.SelectDownFilePath = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.down_file_path_key,
            code_type: "005"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.down_file_path_key = select_data.code_key;
            _this.item.down_file_path = select_data.code_desc;
        });
        modal.present();
    };
    FileFtpDownAddEditModalPage.prototype.SelectRemoteBkFilePath = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.remote_bk_file_path_key,
            code_type: "005"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.remote_bk_file_path_key = select_data.code_key;
            _this.item.remote_bk_file_path = select_data.code_desc;
        });
        modal.present();
    };
    FileFtpDownAddEditModalPage.prototype.get_max_exec_file_seq = function () {
        var _this = this;
        this.global.createLoader("取得最大值中...");
        this.global.loading.present().then(function () {
            _this.FileFtpDownServices.GetMaxExecFileSeqAsync(_this.func_no, _this.item.exec_group).subscribe(function (data) {
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
    FileFtpDownAddEditModalPage.prototype.get_default_path = function () {
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
                    _this.remote_file_path = _this.default_path.filter(function (item, FilePathViewModel) { return item.file_path_type_key === "004|RDN"; })[0];
                    _this.item.remote_file_path_key = _this.remote_file_path.file_path_key;
                    _this.item.remote_file_path = _this.remote_file_path.file_path;
                    _this.remote_bk_file_path = _this.default_path.filter(function (item, FilePathViewModel) { return item.file_path_type_key === "004|RBK"; })[0];
                    _this.item.remote_bk_file_path_key = _this.remote_bk_file_path.file_path_key;
                    _this.item.remote_bk_file_path = _this.remote_bk_file_path.file_path;
                    _this.down_file_path = _this.default_path.filter(function (item, FilePathViewModel) { return item.file_path_type_key === "004|DN"; })[0];
                    _this.item.down_file_path_key = _this.down_file_path.file_path_key;
                    _this.item.down_file_path = _this.down_file_path.file_path;
                    _this.global.dismissLoading();
                }
            }, function (err) {
                _this.global.dismissLoading();
                _this.global.showError("無法連上WebAPI伺服器-" + err.message);
            });
        });
    };
    FileFtpDownAddEditModalPage.prototype.get_max_exec_seq = function () {
        var _this = this;
        this.global.createLoader("取得最大值中...");
        this.global.loading.present().then(function () {
            _this.FileFtpDownServices.GetMaxExecSeqAsync(_this.func_no, _this.item.exec_group).subscribe(function (data) {
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
    FileFtpDownAddEditModalPage.prototype.get_ftp_conn_string = function (remote_conn_id) {
        var _this = this;
        this.global.createLoader("取得連線字串中...");
        this.global.loading.present().then(function () {
            _this.ConnServices.GetConnAsync(remote_conn_id).subscribe(function (data) {
                if (data.DidError === true) {
                    _this.global.dismissLoading();
                    _this.global.showError(data.ErrorMessage);
                }
                else {
                    _this.item.remoteViewModel.remote_conn_string =
                        data.Model.conn_string;
                    _this.global.dismissLoading();
                }
            }, function (err) {
                _this.global.dismissLoading();
                _this.global.showError("無法連上WebAPI伺服器-" + err.message);
            });
        });
    };
    FileFtpDownAddEditModalPage.prototype.openNavParameterColumnPage = function (item) {
        var _this = this;
        this.global.createLoader("連線中...");
        this.global.loading.present().then(function () {
            _this.navCtrl.push("ParameterColumnPage", { item: item });
        });
        this.global.dismissLoading();
    };
    FileFtpDownAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    FileFtpDownAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FileFtpDownAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FileFtpDownModalPage");
    };
    FileFtpDownAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: "page-file-ftp-down-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\file-ftp-down-add-edit-modal\file-ftp-down-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n\n    <ion-row>\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>轉檔群組</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="exec_group" #exec_group="ngModel" [(ngModel)]="item.exec_group"\n            required maxlength="30"></ion-input>\n        </ion-item>\n        <div *ngIf="exec_group.errors && exec_group.touched" class="error-message">\n          轉檔群組不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>轉檔序號:{{range_exec_file_seq}}</ion-label>\n          <ion-input type="number" [disabled]="CanEditBatch==false || mode==\'PUT\'" name="exec_file_seq" #exec_file_seq="ngModel" [(ngModel)]="item.exec_file_seq"\n            required></ion-input>\n          <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'" icon-right (click)="get_max_exec_file_seq()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n        <div *ngIf="exec_file_seq.errors && exec_file_seq.touched" class="error-message">\n          轉檔序號不能為空白\n        </div>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-12 col-sm-8 >\n            <ion-item>\n              <ion-label stacked>檔案搜尋關鍵字</ion-label>\n              <ion-input type="text" [disabled]="CanEditBatch==false" name="file_keyword" #file_keyword="ngModel" [(ngModel)]="item.file_keyword"\n                required maxlength="256"></ion-input>\n            </ion-item>\n            <div *ngIf="file_keyword.errors && file_keyword.touched" class="error-message">\n              檔案搜尋關鍵字不能為空白\n            </div>\n          </ion-col>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>執行順序</ion-label>\n          <ion-input type="number" [disabled]="CanEditBatch==false" name="exec_seq" #exec_seq="ngModel" [(ngModel)]="item.exec_seq"\n            required></ion-input>\n          <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'" icon-right (click)="get_max_exec_seq()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n        <div *ngIf="exec_seq.errors && exec_seq.touched" class="error-message">\n          執行順序不能為空白\n        </div>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label stacked>檔名最小長度</ion-label>\n            <ion-input type="number" [disabled]="CanEditBatch==false" name="file_min_length" #file_min_length="ngModel" [(ngModel)]="item.file_min_length"></ion-input>\n          </ion-item>\n\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label stacked>檔名最大長度</ion-label>\n            <ion-input type="number" [disabled]="CanEditBatch==false" name="file_max_length" #file_max_length="ngModel" [(ngModel)]="item.file_max_length"></ion-input>\n          </ion-item>\n\n        </ion-col>\n      </ion-row>\n    <ion-row>\n\n        <ion-col>\n            <ion-item>\n              <ion-label stacked>失敗停止</ion-label>\n              <ion-checkbox [disabled]="CanEditBatch==false" name="is_fail_stop" #is_fail_stop="ngModel" [(ngModel)]="item.is_fail_stop"></ion-checkbox>\n            </ion-item>\n\n          </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>啟用</ion-label>\n          <ion-checkbox [disabled]="CanEditBatch==false" name="is_active" #is_active="ngModel" [(ngModel)]="item.is_active"></ion-checkbox>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col>\n            <ion-item>\n              <ion-label stacked>空檔檢核</ion-label>\n              <ion-checkbox [disabled]="CanEditBatch==false" name="empty_file_check_flag" #empty_file_check_flag="ngModel" [(ngModel)]="item.empty_file_check_flag"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n              <ion-item>\n                <ion-label stacked>重複</ion-label>\n                <ion-checkbox [disabled]="CanEditBatch==false" name="can_rerun" #can_rerun="ngModel" [(ngModel)]="item.can_rerun"></ion-checkbox>\n              </ion-item>\n            </ion-col>\n      </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>執行後處理方式</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="file_proc_key" #file_proc_key="ngModel" [(ngModel)]="item.file_proc_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectFileProcType()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="file_proc_key.errors && file_proc_key.touched " class="error-message">\n          執行後處理方式不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>執行後處理方式</ion-label>\n\n          <ion-textarea [disabled]=true name="file_proc" #file_proc="ngModel" [(ngModel)]="item.file_proc" required>\n          </ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>連線</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="remote_conn_id" #remote_conn_id="ngModel" [(ngModel)]="item.remoteViewModel.remote_conn_id"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectConn()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="remote_conn_id.errors && remote_conn_id.touched " class="error-message">\n          連線不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>連線</ion-label>\n\n          <ion-textarea [disabled]=true name="remote_conn_string" #remote_conn_string="ngModel" [(ngModel)]="item.remoteViewModel.remote_conn_string" required>\n          </ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>連線類型</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="conn_type_key" #conn_type_key="ngModel" [(ngModel)]="item.remoteViewModel.conn_type_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectConnType()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="conn_type_key.errors && conn_type_key.touched " class="error-message">\n          連線類型不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>連線類型</ion-label>\n\n          <ion-textarea [disabled]=true name="conn_type" #conn_type="ngModel" [(ngModel)]="item.remoteViewModel.conn_type" required>\n          </ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="item.remoteViewModel.conn_type_key==\'006|3\'" >\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>壓密方法</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="encrypt_method_key" #encrypt_method_key="ngModel" [(ngModel)]="item.remoteViewModel.encrypt_method_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectEncryptMethod()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="encrypt_method_key.errors && encrypt_method_key.touched " class="error-message">\n          壓密方法不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>壓密方法</ion-label>\n\n          <ion-textarea [disabled]=true name="encrypt_method" #encrypt_method="ngModel" [(ngModel)]="item.remoteViewModel.encrypt_method" required>\n          </ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>遠端下載檔案路徑</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="remote_file_path_key" #remote_file_path_key="ngModel" [(ngModel)]="item.remote_file_path_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectRemoteFilePath()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="remote_file_path_key.errors && remote_file_path_key.touched " class="error-message">\n          遠端下載檔案路徑不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n            <button ion-button clear=true [disabled]="CanFtpFileBrowser==false" (click)="openNavPage(item.remote_file_path)">\n                {{item.remote_file_path}}\n              </button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>下載本機檔案路徑</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="down_file_path_key" #down_file_path_key="ngModel" [(ngModel)]="item.down_file_path_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectDownFilePath()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="down_file_path_key.errors && down_file_path_key.touched " class="error-message">\n          下載本機檔案路徑不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n\n\n          <button ion-button clear=true [disabled]="CanFileBrowser==false" (click)="openNavPage(item.down_file_path)">\n              {{item.down_file_path}}\n            </button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>遠端備份檔案路徑</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="remote_bk_file_path_key" #remote_bk_file_path_key="ngModel" [(ngModel)]="item.remote_bk_file_path_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectRemoteBkFilePath()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="remote_bk_file_path_key.errors && remote_bk_file_path_key.touched " class="error-message">\n          遠端備份檔案路徑不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n            <button ion-button clear=true [disabled]="CanFtpFileBrowser==false" (click)="openNavPage(item.remote_bk_file_path)">\n                {{item.remote_bk_file_path}}\n              </button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n<ion-row>\n    <ion-col>\n        <ion-item>\n          <ion-label stacked>參數群組</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="parameter_column_group" #parameter_column_group="ngModel" [(ngModel)]="item.parameter_column_group"\n            required maxlength="3"></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectParameterGroup()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="parameter_column_group.errors && parameter_column_group.touched " class="error-message">\n          參數群組不能為空白\n        </div>\n      </ion-col>\n</ion-row>\n    <ion-row>\n\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>備註</ion-label>\n          <ion-textarea required  [disabled]="CanEditBatch==false" name="note" #note="ngModel" [(ngModel)]="item.note" maxlength="255"></ion-textarea>\n        </ion-item>\n        <div *ngIf="note.errors && note.touched " class="error-message">\n          備註不能為空白\n        </div>\n      </ion-col>\n    </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditBatch==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n            (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n          <button small title="參數群組" ion-button color="dark" icon-left (click)="openNavParameterColumnPage(item)">\n            <ion-icon name="outlet"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\file-ftp-down-add-edit-modal\file-ftp-down-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_file_ftp_down_services_file_ftp_down_services__["a" /* FileFtpDownServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_file_path_services_file_path_services__["a" /* FilePathServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__components_global_global__["a" /* GlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_conn_services_conn_services__["a" /* ConnServicesProvider */]])
    ], FileFtpDownAddEditModalPage);
    return FileFtpDownAddEditModalPage;
}());

//# sourceMappingURL=file-ftp-down-add-edit-modal.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileFtpDownAddEditModalPageModule", function() { return FileFtpDownAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_ftp_down_add_edit_modal__ = __webpack_require__(1421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_file_ftp_down_services_file_ftp_down_services__ = __webpack_require__(1046);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FileFtpDownAddEditModalPageModule = /** @class */ (function () {
    function FileFtpDownAddEditModalPageModule() {
    }
    FileFtpDownAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_ftp_down_add_edit_modal__["a" /* FileFtpDownAddEditModalPage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_file_ftp_down_services_file_ftp_down_services__["a" /* FileFtpDownServicesProvider */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_ftp_down_add_edit_modal__["a" /* FileFtpDownAddEditModalPage */]),
            ],
        })
    ], FileFtpDownAddEditModalPageModule);
    return FileFtpDownAddEditModalPageModule;
}());

//# sourceMappingURL=file-ftp-down-add-edit-modal.module.js.map

/***/ }),

/***/ 923:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FtpRemoteViewModel; });
var FtpRemoteViewModel = /** @class */ (function () {
    function FtpRemoteViewModel() {
    }
    return FtpRemoteViewModel;
}());

//# sourceMappingURL=FtpRemoteViewModel.js.map

/***/ }),

/***/ 928:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FtpDirectoryBrowserViewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_DirectoryBrowserViewModel__ = __webpack_require__(130);
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

var FtpDirectoryBrowserViewModel = /** @class */ (function (_super) {
    __extends(FtpDirectoryBrowserViewModel, _super);
    function FtpDirectoryBrowserViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FtpDirectoryBrowserViewModel;
}(__WEBPACK_IMPORTED_MODULE_0__ViewModel_DirectoryBrowserViewModel__["a" /* DirectoryBrowserViewModel */]));

//# sourceMappingURL=FtpDirectoryBrowserViewModel.js.map

/***/ }),

/***/ 972:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileFtpDownViewModel; });
var FileFtpDownViewModel = /** @class */ (function () {
    function FileFtpDownViewModel() {
    }
    return FileFtpDownViewModel;
}());

//# sourceMappingURL=FileFtpDownViewModel.js.map

/***/ })

});
//# sourceMappingURL=236.js.map