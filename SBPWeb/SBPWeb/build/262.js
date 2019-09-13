webpackJsonp([262],{

/***/ 1042:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileFilterServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileFilterListResponse__ = __webpack_require__(1142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileFilterResponse__ = __webpack_require__(1143);
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
  Generated class for the FileFilterServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FileFilterServicesProvider = /** @class */ (function (_super) {
    __extends(FileFilterServicesProvider, _super);
    function FileFilterServicesProvider(Services) {
        var _this = _super.call(this, Services) || this;
        _this.Services = Services;
        _this.ctl = "FileFilter";
        console.log("Hello FileFilterServiceProvider Provider");
        return _this;
    }
    FileFilterServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, keyword, exec_group, exec_file_seq, order_type) {
        var _this = this;
        var sub_url;
        if (exec_file_seq === 0) {
            sub_url = "FileFilter?PageSize={1}&PageNumber={2}&keyword={3}&exec_group={4}&order_type={5}";
            sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, exec_group, order_type);
        }
        else {
            sub_url = "FileFilter?PageSize={1}&PageNumber={2}&keyword={3}&exec_group={4}&exec_file_seq={5}&order_type={6}";
            sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, exec_group, exec_file_seq, order_type);
        }
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.FileFilters = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileFilterListResponse__["a" /* FileFilterListResponse */]({
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
            return _this.FileFilters;
        });
    };
    FileFilterServicesProvider.prototype.PostPutAsync = function (FileFilterViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "FileFilter";
        else
            sub_url = "FileFilter/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, FileFilterViewModel.exec_file_seq);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, FileFilterViewModel, mode).map(function (item) {
            _this.FileFilter = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileFilterResponse__["a" /* FileFilterResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.FileFilter;
        });
    };
    FileFilterServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], FileFilterServicesProvider);
    return FileFilterServicesProvider;
}(__WEBPACK_IMPORTED_MODULE_5__file_services_file_services__["a" /* FileServicesProvider */]));

//# sourceMappingURL=file-filter-services.js.map

/***/ }),

/***/ 1142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileFilterListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileFilterViewModel__ = __webpack_require__(970);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
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


var FileFilterListResponse = /** @class */ (function (_super) {
    __extends(FileFilterListResponse, _super);
    function FileFilterListResponse(obj) {
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
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileFilterViewModel__["a" /* FileFilterViewModel */]();
                item.exec_file_seq = data.exec_file_seq;
                item.exec_group = data.exec_group;
                item.file_keyword = data.file_keyword;
                item.file_min_length = data.file_min_length;
                item.file_max_length = data.file_max_length;
                item.is_active = data.is_active;
                item.recursive = data.recursive;
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
                item.src_file_path = data.src_file_path;
                item.bk_file_path = data.bk_file_path;
                item.target_file_path = data.target_file_path;
                item.src_file_path_key = data.src_file_path_key;
                item.bk_file_path_key = data.bk_file_path_key;
                item.target_file_path_key = data.target_file_path_key;
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
                item.is_date_filter = data.is_date_filter;
                if (item.is_date_filter === true) {
                    item.date_filter_color = "danger";
                }
                else
                    item.date_filter_color = "light";
                item.file_format_key = data.file_format_key;
                item.file_format = data.file_format;
                item.search_data = data.search_data;
                item.find = data.find;
                item.line_process_flag = data.line_process_flag;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return FileFilterListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=FileFilterListResponse.js.map

/***/ }),

/***/ 1143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileFilterResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileFilterViewModel__ = __webpack_require__(970);
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


var FileFilterResponse = /** @class */ (function (_super) {
    __extends(FileFilterResponse, _super);
    function FileFilterResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileFilterViewModel__["a" /* FileFilterViewModel */]();
            _this.Model.exec_file_seq = obj.Model.exec_file_seq;
            _this.Model.exec_group = obj.Model.exec_group;
            _this.Model.file_keyword = obj.Model.file_keyword;
            _this.Model.file_min_length = obj.Model.file_min_length;
            _this.Model.file_max_length = obj.Model.file_max_length;
            _this.Model.is_active = obj.Model.is_active;
            _this.Model.recursive = obj.Model.recursive;
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
            _this.Model.src_file_path_key = obj.Model.src_file_path_key;
            _this.Model.bk_file_path_key = obj.Model.bk_file_path_key;
            _this.Model.target_file_path_key = obj.Model.target_file_path_key;
            _this.Model.src_file_path = obj.Model.src_file_path;
            _this.Model.bk_file_path = obj.Model.bk_file_path;
            _this.Model.target_file_path = obj.Model.target_file_path;
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
            _this.Model.is_date_filter = obj.Model.is_date_filter;
            if (_this.Model.is_date_filter === true) {
                _this.Model.date_filter_color = "danger";
            }
            else
                _this.Model.date_filter_color = "light";
            _this.Model.file_format_key = (obj && obj.Model.file_format_key) || null;
            _this.Model.file_format = (obj && obj.Model.file_format) || null;
            _this.Model.find = (obj && obj.Model.find) || null;
            _this.Model.search_data = (obj && obj.Model.search_data) || null;
            _this.Model.line_process_flag = obj.Model.line_process_flag;
        }
        return _this;
    }
    return FileFilterResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=FileFilterResponse.js.map

/***/ }),

/***/ 1413:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileFilterAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_file_filter_services_file_filter_services__ = __webpack_require__(1042);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_FileFilterViewModel__ = __webpack_require__(970);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_file_path_services_file_path_services__ = __webpack_require__(268);
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
 * Generated class for the FileFilterModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FileFilterAddEditModalPage = /** @class */ (function () {
    function FileFilterAddEditModalPage(navCtrl, navParams, viewCtrl, FileFilterServices, FilePathServices, loadingCtrl, global, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.FileFilterServices = FileFilterServices;
        this.FilePathServices = FilePathServices;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.modalCtrl = modalCtrl;
        this.func_no = 8;
        this.func_key = "014|" + this.func_no;
        this.min_exec_file_seq = 86000;
        this.max_exec_file_seq = this.min_exec_file_seq + 999;
        this.range_exec_file_seq = __WEBPACK_IMPORTED_MODULE_4__Model_String__["a" /* String */].Format("{0}-{1}", this.min_exec_file_seq, this.max_exec_file_seq);
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.item = new __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_FileFilterViewModel__["a" /* FileFilterViewModel */]();
        this.item.exec_file_seq = navParams.data.item.exec_file_seq;
        this.item.exec_group = navParams.data.item.exec_group;
        this.item.file_keyword = navParams.data.item.file_keyword;
        this.item.file_min_length = navParams.data.item.file_min_length;
        this.item.file_max_length = navParams.data.item.file_max_length;
        this.item.is_active = navParams.data.item.is_active;
        this.item.recursive = navParams.data.item.recursive;
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
        this.item.src_file_path_key = navParams.data.item.src_file_path_key;
        this.item.bk_file_path_key = navParams.data.item.bk_file_path_key;
        this.item.target_file_path_key = navParams.data.item.target_file_path_key;
        this.item.src_file_path = navParams.data.item.src_file_path;
        this.item.bk_file_path = navParams.data.item.bk_file_path;
        this.item.target_file_path = navParams.data.item.target_file_path;
        this.item.file_format_key = navParams.data.item.file_format_key;
        this.item.file_format = navParams.data.item.file_format;
        this.item.find = navParams.data.item.find;
        this.item.search_data = navParams.data.item.search_data;
        this.item.line_process_flag = navParams.data.item.line_process_flag;
        if (this.change_mode === "n") {
            this.get_default_path();
        }
        if (this.change_mode === "c") {
            this.get_max_exec_file_seq();
            this.get_max_exec_seq();
        }
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.CanFileBrowser = navParams.data.CanFileBrowser;
        this.title = "搜尋輸出";
    }
    FileFilterAddEditModalPage.prototype.openNavPage = function (parent_path) {
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
    FileFilterAddEditModalPage.prototype.SelectFileProcType = function () {
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
    FileFilterAddEditModalPage.prototype.SelectParameterGroup = function () {
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
    FileFilterAddEditModalPage.prototype.SelectSrcFilePath = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.src_file_path_key,
            code_type: "005"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.src_file_path_key = select_data.code_key;
            _this.item.src_file_path = select_data.code_desc;
        });
        modal.present();
    };
    FileFilterAddEditModalPage.prototype.SelectTargetFilePath = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.target_file_path_key,
            code_type: "005"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.target_file_path_key = select_data.code_key;
            _this.item.target_file_path = select_data.code_desc;
        });
        modal.present();
    };
    FileFilterAddEditModalPage.prototype.SelectBkFilePath = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.bk_file_path_key,
            code_type: "005"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.bk_file_path_key = select_data.code_key;
            _this.item.bk_file_path = select_data.code_desc;
        });
        modal.present();
    };
    FileFilterAddEditModalPage.prototype.get_max_exec_file_seq = function () {
        var _this = this;
        this.global.createLoader("取得最大值中...");
        this.global.loading.present().then(function () {
            _this.FileFilterServices.GetMaxRangeExecFileSeqAsync(_this.func_no, _this.item.exec_group, _this.min_exec_file_seq, _this.max_exec_file_seq).subscribe(function (data) {
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
    FileFilterAddEditModalPage.prototype.get_default_path = function () {
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
                    _this.src_file_path = _this.default_path.filter(function (item, FilePathViewModel) { return item.file_path_type_key === "004|SRC"; })[0];
                    _this.item.src_file_path_key = _this.src_file_path.file_path_key;
                    _this.item.src_file_path = _this.src_file_path.file_path;
                    _this.bk_file_path = _this.default_path.filter(function (item, FilePathViewModel) { return item.file_path_type_key === "004|BK"; })[0];
                    _this.item.bk_file_path_key = _this.bk_file_path.file_path_key;
                    _this.item.bk_file_path = _this.bk_file_path.file_path;
                    _this.target_file_path = _this.default_path.filter(function (item, FilePathViewModel) { return item.file_path_type_key === "004|TAR"; })[0];
                    _this.item.target_file_path_key = _this.target_file_path.file_path_key;
                    _this.item.target_file_path = _this.target_file_path.file_path;
                    _this.global.dismissLoading();
                }
            }, function (err) {
                _this.global.dismissLoading();
                _this.global.showError("無法連上WebAPI伺服器-" + err.message);
            });
        });
    };
    FileFilterAddEditModalPage.prototype.get_max_exec_seq = function () {
        var _this = this;
        this.global.createLoader("取得最大值中...");
        this.global.loading.present().then(function () {
            _this.FileFilterServices.GetMaxExecSeqAsync(_this.func_no, _this.item.exec_group).subscribe(function (data) {
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
    FileFilterAddEditModalPage.prototype.SelectFileFormat = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.file_format_key,
            code_key: "011|C,011|UTF16,011|UTF32,011|UTF7,011|UTF8,011|UTF8B,011|W,011|W"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.file_format_key = select_data.code_key;
            _this.item.file_format = select_data.code_desc;
        });
        modal.present();
    };
    FileFilterAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    FileFilterAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FileFilterAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FileFilterModalPage");
    };
    FileFilterAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: "page-file-filter-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\file-filter-add-edit-modal\file-filter-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n\n    <ion-row>\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>轉檔群組</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="exec_group" #exec_group="ngModel" [(ngModel)]="item.exec_group"\n            required maxlength="30"></ion-input>\n        </ion-item>\n        <div *ngIf="exec_group.errors && exec_group.touched" class="error-message">\n          轉檔群組不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>轉檔序號:{{range_exec_file_seq}}</ion-label>\n          <ion-input type="number" [disabled]="CanEditBatch==false || mode==\'PUT\'" name="exec_file_seq" #exec_file_seq="ngModel" [(ngModel)]="item.exec_file_seq"\n            required></ion-input>\n          <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'" icon-right (click)="get_max_exec_file_seq()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n        <div *ngIf="exec_file_seq.errors && exec_file_seq.touched" class="error-message">\n          轉檔序號不能為空白\n        </div>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-12 col-sm-8 >\n            <ion-item>\n              <ion-label stacked>檔案搜尋關鍵字</ion-label>\n              <ion-input type="text" [disabled]="CanEditBatch==false" name="file_keyword" #file_keyword="ngModel" [(ngModel)]="item.file_keyword"\n                required maxlength="256"></ion-input>\n            </ion-item>\n            <div *ngIf="file_keyword.errors && file_keyword.touched" class="error-message">\n              檔案搜尋關鍵字不能為空白\n            </div>\n          </ion-col>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>執行順序</ion-label>\n          <ion-input type="number" [disabled]="CanEditBatch==false" name="exec_seq" #exec_seq="ngModel" [(ngModel)]="item.exec_seq"\n            required></ion-input>\n          <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'" icon-right (click)="get_max_exec_seq()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n        <div *ngIf="exec_seq.errors && exec_seq.touched" class="error-message">\n          執行順序不能為空白\n        </div>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label stacked>檔名最小長度</ion-label>\n            <ion-input type="number" [disabled]="CanEditBatch==false" name="file_min_length" #file_min_length="ngModel" [(ngModel)]="item.file_min_length"></ion-input>\n          </ion-item>\n\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label stacked>檔名最大長度</ion-label>\n            <ion-input type="number" [disabled]="CanEditBatch==false" name="file_max_length" #file_max_length="ngModel" [(ngModel)]="item.file_max_length"></ion-input>\n          </ion-item>\n\n        </ion-col>\n      </ion-row>\n    <ion-row>\n\n        <ion-col>\n            <ion-item>\n              <ion-label stacked>失敗停止</ion-label>\n              <ion-checkbox [disabled]="CanEditBatch==false" name="is_fail_stop" #is_fail_stop="ngModel" [(ngModel)]="item.is_fail_stop"></ion-checkbox>\n            </ion-item>\n\n          </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>子資料夾</ion-label>\n          <ion-checkbox [disabled]="CanEditBatch==false" name="recursive" #recursive="ngModel" [(ngModel)]="item.recursive"></ion-checkbox>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col>\n            <ion-item>\n              <ion-label stacked>空檔檢核</ion-label>\n              <ion-checkbox [disabled]="CanEditBatch==false" name="empty_file_check_flag" #empty_file_check_flag="ngModel" [(ngModel)]="item.empty_file_check_flag"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n              <ion-item>\n                <ion-label stacked>重複</ion-label>\n                <ion-checkbox [disabled]="CanEditBatch==false" name="can_rerun" #can_rerun="ngModel" [(ngModel)]="item.can_rerun"></ion-checkbox>\n              </ion-item>\n            </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n            <ion-item>\n              <ion-label stacked>尋找到</ion-label>\n              <ion-checkbox [disabled]="CanEditBatch==false" name="find" #find="ngModel" [(ngModel)]="item.find"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n          <ion-col>\n              <ion-item>\n                <ion-label stacked>列處理</ion-label>\n                <ion-checkbox [disabled]="CanEditBatch==false" name="line_process_flag" #line_process_flag="ngModel" [(ngModel)]="item.line_process_flag"></ion-checkbox>\n              </ion-item>\n            </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12  >\n            <ion-item>\n              <ion-label stacked>內文搜尋關鍵字</ion-label>\n              <ion-input type="text" [disabled]="CanEditBatch==false" name="search_data" #search_data="ngModel" [(ngModel)]="item.search_data"\n                required maxlength="255"></ion-input>\n            </ion-item>\n            <div *ngIf="search_data.errors && search_data.touched" class="error-message">\n              內文搜尋關鍵字不能為空白\n            </div>\n          </ion-col>\n\n\n    </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-4>\n          <ion-item>\n            <ion-label stacked>來源內文格式</ion-label>\n            <ion-input type="text" readonly=true maxlength=10  [disabled]="CanEditBatch==false " name="file_format_key" #file_format_key="ngModel" [(ngModel)]="item.file_format_key"\n              required></ion-input>\n\n            <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectFileFormat()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-item>\n\n          <div *ngIf="file_format_key.errors && file_format_key.touched " class="error-message">\n              來源內文格式不能為空白\n          </div>\n        </ion-col>\n        <ion-col col-12 col-sm-8>\n          <ion-item>\n            <ion-label stacked>來源內文格式</ion-label>\n            <ion-input type="text" [disabled]=true name="file_format" #file_format="ngModel" [(ngModel)]="item.file_format"\n              required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>執行後處理方式</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="file_proc_key" #file_proc_key="ngModel" [(ngModel)]="item.file_proc_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectFileProcType()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="file_proc_key.errors && file_proc_key.touched " class="error-message">\n          執行後處理方式不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>執行後處理方式</ion-label>\n\n          <ion-textarea [disabled]=true name="file_proc" #file_proc="ngModel" [(ngModel)]="item.file_proc" required>\n          </ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>來源檔案路徑</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="src_file_path_key" #src_file_path_key="ngModel" [(ngModel)]="item.src_file_path_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectSrcFilePath()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="src_file_path_key.errors && src_file_path_key.touched " class="error-message">\n          來源檔案路徑不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n            <button ion-button clear=true [disabled]="CanFileBrowser==false" (click)="openNavPage(item.src_file_path)">\n                {{item.src_file_path}}\n              </button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>目的檔案路徑</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="target_file_path_key" #target_file_path_key="ngModel" [(ngModel)]="item.target_file_path_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectTargetFilePath()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="target_file_path_key.errors && target_file_path_key.touched " class="error-message">\n          目的檔案路徑不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n            <button ion-button clear=true [disabled]="CanFileBrowser==false" (click)="openNavPage(item.target_file_path)">\n                {{item.target_file_path}}\n              </button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>備份檔案路徑</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="bk_file_path_key" #bk_file_path_key="ngModel" [(ngModel)]="item.bk_file_path_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectBkFilePath()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="bk_file_path_key.errors && bk_file_path_key.touched " class="error-message">\n          備份檔案路徑不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n            <button ion-button clear=true [disabled]="CanFileBrowser==false" (click)="openNavPage(item.bk_file_path)">\n                {{item.bk_file_path}}\n              </button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n<ion-row>\n    <ion-col>\n        <ion-item>\n          <ion-label stacked>參數群組</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="parameter_column_group" #parameter_column_group="ngModel" [(ngModel)]="item.parameter_column_group"\n            required maxlength="3"></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectParameterGroup()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="parameter_column_group.errors && parameter_column_group.touched " class="error-message">\n          參數群組不能為空白\n        </div>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>啟用</ion-label>\n          <ion-checkbox [disabled]="CanEditBatch==false" name="is_active" #is_active="ngModel" [(ngModel)]="item.is_active"></ion-checkbox>\n        </ion-item>\n\n      </ion-col>\n</ion-row>\n<ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label stacked>備註</ion-label>\n        <ion-textarea [disabled]="CanEditBatch==false" name="note" #note="ngModel" [(ngModel)]="item.note" maxlength="255"  required></ion-textarea>\n      </ion-item>\n      <div *ngIf="note.errors && note.touched " class="error-message">\n          備註不能為空白\n      </div>\n    </ion-col>\n  </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditBatch==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n            (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\file-filter-add-edit-modal\file-filter-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_file_filter_services_file_filter_services__["a" /* FileFilterServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_file_path_services_file_path_services__["a" /* FilePathServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__components_global_global__["a" /* GlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */]])
    ], FileFilterAddEditModalPage);
    return FileFilterAddEditModalPage;
}());

//# sourceMappingURL=file-filter-add-edit-modal.js.map

/***/ }),

/***/ 550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileFilterAddEditModalPageModule", function() { return FileFilterAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_filter_add_edit_modal__ = __webpack_require__(1413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_file_filter_services_file_filter_services__ = __webpack_require__(1042);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FileFilterAddEditModalPageModule = /** @class */ (function () {
    function FileFilterAddEditModalPageModule() {
    }
    FileFilterAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_filter_add_edit_modal__["a" /* FileFilterAddEditModalPage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_file_filter_services_file_filter_services__["a" /* FileFilterServicesProvider */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_filter_add_edit_modal__["a" /* FileFilterAddEditModalPage */]),
            ],
        })
    ], FileFilterAddEditModalPageModule);
    return FileFilterAddEditModalPageModule;
}());

//# sourceMappingURL=file-filter-add-edit-modal.module.js.map

/***/ }),

/***/ 970:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileFilterViewModel; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__FileManagementViewModel__ = __webpack_require__(129);
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

var FileFilterViewModel = /** @class */ (function (_super) {
    __extends(FileFilterViewModel, _super);
    function FileFilterViewModel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FileFilterViewModel;
}(__WEBPACK_IMPORTED_MODULE_0__FileManagementViewModel__["a" /* FileManagementViewModel */]));

//# sourceMappingURL=FileFilterViewModel.js.map

/***/ })

});
//# sourceMappingURL=262.js.map