webpackJsonp([237],{

/***/ 1060:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileSsisServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileSsisListResponse__ = __webpack_require__(1176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileSsisResponse__ = __webpack_require__(1177);
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
  Generated class for the FileSsisServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FileSsisServicesProvider = /** @class */ (function (_super) {
    __extends(FileSsisServicesProvider, _super);
    function FileSsisServicesProvider(Services) {
        var _this = _super.call(this, Services) || this;
        _this.Services = Services;
        _this.ctl = "FileSsis";
        console.log("Hello FileSsisServiceProvider Provider");
        return _this;
    }
    FileSsisServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, keyword, exec_group, exec_file_seq, order_type) {
        var _this = this;
        var sub_url;
        if (exec_file_seq === 0) {
            sub_url = "FileSsis?PageSize={1}&PageNumber={2}&keyword={3}&exec_group={4}&order_type={5}";
            sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, exec_group, order_type);
        }
        else {
            sub_url = "FileSsis/Select?PageSize={1}&PageNumber={2}&keyword={3}&exec_group={4}&exec_file_seq={5}&order_type={6}";
            sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, exec_group, exec_file_seq, order_type);
        }
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.FileSsiss = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileSsisListResponse__["a" /* FileSsisListResponse */]({
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
            return _this.FileSsiss;
        });
    };
    FileSsisServicesProvider.prototype.PostPutAsync = function (FileSsisViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "FileSsis";
        else
            sub_url = "FileSsis/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, FileSsisViewModel.exec_file_seq);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, FileSsisViewModel, mode).map(function (item) {
            _this.FileSsis = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileSsisResponse__["a" /* FileSsisResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.FileSsis;
        });
    };
    FileSsisServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], FileSsisServicesProvider);
    return FileSsisServicesProvider;
}(__WEBPACK_IMPORTED_MODULE_5__file_services_file_services__["a" /* FileServicesProvider */]));

//# sourceMappingURL=file-ssis-services.js.map

/***/ }),

/***/ 1176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileSsisListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileSsisViewModel__ = __webpack_require__(989);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ViewModel_RemoteViewModel__ = __webpack_require__(990);
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



var FileSsisListResponse = /** @class */ (function (_super) {
    __extends(FileSsisListResponse, _super);
    function FileSsisListResponse(obj) {
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
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileSsisViewModel__["a" /* FileSsisViewModel */]();
                item.exec_file_seq = data.exec_file_seq;
                item.exec_group = data.exec_group;
                item.file_keyword = data.file_keyword;
                item.file_min_length = data.file_min_length;
                item.file_max_length = data.file_max_length;
                item.is_active = data.is_active;
                item.package_src_key = data.package_src_key;
                item.exec_seq = data.exec_seq;
                item.can_rerun = data.can_rerun;
                item.parameter_column_group = data.parameter_column_group;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                item.note = data && data.note || null;
                item.package_src = data.package_src;
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
                item.is_fail_stop = data.is_fail_stop;
                item.ssis_package_path = data.ssis_package_path;
                item.ssis_project_name = data.ssis_project_name;
                item.ssis_package_path_key = data.ssis_package_path_key;
                item.ssis_project_name_key = data.ssis_project_name_key;
                if (data.remoteViewModel != null) {
                    var t = new __WEBPACK_IMPORTED_MODULE_2__ViewModel_RemoteViewModel__["a" /* RemoteViewModel */]();
                    t.exec_file_seq = data.remoteViewModel.exec_file_seq;
                    t.remote_conn_id = data.remoteViewModel.remote_conn_id;
                    t.creator = data.remoteViewModel.creator;
                    t.create_time = data.remoteViewModel.create_time;
                    t.modifier = data.remoteViewModel.modifier;
                    t.last_update_time = data.remoteViewModel.last_update_time;
                    t.remote_conn_string = data.remoteViewModel.remote_conn_string;
                    item.remoteViewModel = t;
                }
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return FileSsisListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=FileSsisListResponse.js.map

/***/ }),

/***/ 1177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileSsisResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileSsisViewModel__ = __webpack_require__(989);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ViewModel_RemoteViewModel__ = __webpack_require__(990);
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



var FileSsisResponse = /** @class */ (function (_super) {
    __extends(FileSsisResponse, _super);
    function FileSsisResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileSsisViewModel__["a" /* FileSsisViewModel */]();
            _this.Model.exec_file_seq = obj.Model.exec_file_seq;
            _this.Model.exec_group = obj.Model.exec_group;
            _this.Model.file_keyword = obj.Model.file_keyword;
            _this.Model.file_min_length = obj.Model.file_min_length;
            _this.Model.file_max_length = obj.Model.file_max_length;
            _this.Model.is_active = obj.Model.is_active;
            _this.Model.package_src_key = obj.Model.package_src_key;
            _this.Model.exec_seq = obj.Model.exec_seq;
            _this.Model.can_rerun = obj.Model.can_rerun;
            _this.Model.parameter_column_group = obj.Model.parameter_column_group;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
            _this.Model.note = (obj && obj.Model.note) || null;
            _this.Model.package_src = obj.Model.package_src;
            _this.Model.is_active_desc = obj.Model.is_active_desc;
            switch (obj.Model.is_active) {
                case false: {
                    _this.Model.is_active_color = "danger";
                    break;
                }
                default:
                    _this.Model.is_active_color = "active";
            }
            _this.Model.ssis_package_path_key = obj.Model.ssis_package_path_key;
            _this.Model.ssis_package_path = obj.Model.ssis_package_path;
            _this.Model.is_fail_stop = obj.Model.is_fail_stop;
            _this.Model.ssis_project_name_key = obj.Model.ssis_project_name_key;
            _this.Model.ssis_project_name = obj.Model.ssis_project_name;
            if (obj.Model.remoteViewModel != null) {
                var t = new __WEBPACK_IMPORTED_MODULE_2__ViewModel_RemoteViewModel__["a" /* RemoteViewModel */]();
                t.exec_file_seq = obj.Model.remoteViewModel.exec_file_seq;
                t.remote_conn_id = obj.Model.remoteViewModel.remote_conn_id;
                t.creator = obj.Model.remoteViewModel.creator;
                t.create_time = obj.Model.remoteViewModel.create_time;
                t.modifier = obj.Model.remoteViewModel.modifier;
                t.last_update_time = obj.Model.remoteViewModel.last_update_time;
                t.remote_conn_string = obj.Model.remoteViewModel.remote_conn_string;
                _this.Model.remoteViewModel = t;
            }
        }
        return _this;
    }
    return FileSsisResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=FileSsisResponse.js.map

/***/ }),

/***/ 1495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileSsisAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_file_ssis_services_file_ssis_services__ = __webpack_require__(1060);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_FileSsisViewModel__ = __webpack_require__(989);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_file_path_services_file_path_services__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_conn_services_conn_services__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Model_ViewModel_RemoteViewModel__ = __webpack_require__(990);
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
 * Generated class for the FileSsisModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FileSsisAddEditModalPage = /** @class */ (function () {
    function FileSsisAddEditModalPage(navCtrl, navParams, viewCtrl, FileSsisServices, FilePathServices, loadingCtrl, global, modalCtrl, ConnServices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.FileSsisServices = FileSsisServices;
        this.FilePathServices = FilePathServices;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.modalCtrl = modalCtrl;
        this.ConnServices = ConnServices;
        this.func_no = 12;
        this.func_key = "014|" + this.func_no;
        this.min_exec_file_seq = 120000;
        this.max_exec_file_seq = this.min_exec_file_seq + 9999;
        this.range_exec_file_seq = __WEBPACK_IMPORTED_MODULE_4__Model_String__["a" /* String */].Format("{0}-{1}", this.min_exec_file_seq, this.max_exec_file_seq);
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.item = new __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_FileSsisViewModel__["a" /* FileSsisViewModel */]();
        this.item.exec_file_seq = navParams.data.item.exec_file_seq;
        this.item.exec_group = navParams.data.item.exec_group;
        this.item.file_keyword = navParams.data.item.file_keyword;
        this.item.file_min_length = navParams.data.item.file_min_length;
        this.item.file_max_length = navParams.data.item.file_max_length;
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
        this.item.package_src_key = navParams.data.item.package_src_key;
        this.item.package_src = navParams.data.item.package_src;
        this.item.is_fail_stop = navParams.data.item.is_fail_stop;
        this.item.ssis_package_path_key = navParams.data.item.ssis_package_path_key;
        this.item.ssis_package_path = navParams.data.item.ssis_package_path;
        this.item.ssis_project_name_key = navParams.data.item.ssis_project_name_key;
        this.item.ssis_project_name = navParams.data.item.ssis_project_name;
        this.item.remoteViewModel = new __WEBPACK_IMPORTED_MODULE_8__Model_ViewModel_RemoteViewModel__["a" /* RemoteViewModel */]();
        if (navParams.data.item.remoteViewModel != null) {
            this.item.remoteViewModel.exec_file_seq = navParams.data.item.remoteViewModel.exec_file_seq;
            this.item.remoteViewModel.remote_conn_id =
                navParams.data.item.remoteViewModel.remote_conn_id;
            this.item.remoteViewModel.remote_conn_string =
                navParams.data.item.remoteViewModel.remote_conn_string;
        }
        if (this.change_mode === "n") {
            this.get_default_path();
            this.get_conn_string("SSIS-SSISDB");
        }
        if (this.change_mode === "c") {
            this.get_max_exec_file_seq();
            this.get_max_exec_seq();
        }
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.CanFileBrowser = navParams.data.CanFileBrowser;
        this.title = "ssis執行設定";
    }
    FileSsisAddEditModalPage.prototype.SelectConn = function () {
        var _this = this;
        var modal = this.modalCtrl.create("ConnSelectModalPage", {
            select_remote_conn_id: this.item.remoteViewModel.remote_conn_id,
            conn_type_key: "065|006",
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.remoteViewModel.remote_conn_id = select_data.remote_conn_id;
            _this.item.remoteViewModel.remote_conn_string = select_data.conn_string;
        });
        modal.present();
    };
    FileSsisAddEditModalPage.prototype.SelectPackageSrc = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.package_src_key,
            code_type: "067"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.package_src_key = select_data.code_key;
            _this.item.package_src = select_data.code_desc;
        });
        modal.present();
    };
    FileSsisAddEditModalPage.prototype.openNavPage = function (parent_path) {
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
    FileSsisAddEditModalPage.prototype.SelectParameterGroup = function () {
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
    FileSsisAddEditModalPage.prototype.openNavParameterColumnPage = function (item) {
        var _this = this;
        this.global.createLoader("連線中...");
        this.global.loading.present().then(function () {
            _this.navCtrl.push("ParameterColumnPage", { item: item });
        });
        this.global.dismissLoading();
    };
    FileSsisAddEditModalPage.prototype.SelectPackageFilePath = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.ssis_package_path_key,
            code_type: "005"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.ssis_package_path_key = select_data.code_key;
            _this.item.ssis_package_path = select_data.code_desc;
        });
        modal.present();
    };
    FileSsisAddEditModalPage.prototype.SelectProjectName = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.ssis_project_name_key,
            code_type: "005"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.ssis_project_name_key = select_data.code_key;
            _this.item.ssis_project_name = select_data.code_desc;
        });
        modal.present();
    };
    FileSsisAddEditModalPage.prototype.get_max_exec_file_seq = function () {
        var _this = this;
        this.global.createLoader("取得最大值中...");
        this.global.loading.present().then(function () {
            _this.FileSsisServices.GetMaxExecFileSeqAsync(_this.func_no, _this.item.exec_group).subscribe(function (data) {
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
    FileSsisAddEditModalPage.prototype.get_default_path = function () {
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
                    _this.ssis_package_path = _this.default_path.filter(function (item, FilePathViewModel) { return item.file_path_type_key === "004|SSIS"; })[0];
                    _this.item.ssis_package_path_key = _this.ssis_package_path.file_path_key;
                    _this.item.ssis_package_path = _this.ssis_package_path.file_path;
                    _this.ssis_project_path = _this.default_path.filter(function (item, FilePathViewModel) { return item.file_path_type_key === "004|SSISPJ"; })[0];
                    _this.item.ssis_project_name_key = _this.ssis_project_path.file_path_key;
                    _this.item.ssis_project_name = _this.ssis_project_path.file_path;
                    _this.global.dismissLoading();
                }
            }, function (err) {
                _this.global.dismissLoading();
                _this.global.showError("無法連上WebAPI伺服器-" + err.message);
            });
        });
    };
    FileSsisAddEditModalPage.prototype.get_max_exec_seq = function () {
        var _this = this;
        this.global.createLoader("取得最大值中...");
        this.global.loading.present().then(function () {
            _this.FileSsisServices.GetMaxExecSeqAsync(_this.func_no, _this.item.exec_group).subscribe(function (data) {
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
    FileSsisAddEditModalPage.prototype.get_conn_string = function (remote_conn_id) {
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
    FileSsisAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    FileSsisAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FileSsisAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FileSsisModalPage");
    };
    FileSsisAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: "page-file-ssis-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\file-ssis-add-edit-modal\file-ssis-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n\n    <ion-row>\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>轉檔群組</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="exec_group" #exec_group="ngModel" [(ngModel)]="item.exec_group"\n            required maxlength="30"></ion-input>\n        </ion-item>\n        <div *ngIf="exec_group.errors && exec_group.touched" class="error-message">\n          轉檔群組不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>轉檔序號:{{range_exec_file_seq}}</ion-label>\n          <ion-input type="number" [disabled]="CanEditBatch==false || mode==\'PUT\'" name="exec_file_seq" #exec_file_seq="ngModel" [(ngModel)]="item.exec_file_seq"\n            required></ion-input>\n          <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'" icon-right (click)="get_max_exec_file_seq()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n        <div *ngIf="exec_file_seq.errors && exec_file_seq.touched" class="error-message">\n          轉檔序號不能為空白\n        </div>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-12 col-sm-8 >\n            <ion-item>\n              <ion-label stacked>檔案搜尋關鍵字</ion-label>\n              <ion-input type="text" [disabled]="CanEditBatch==false" name="file_keyword" #file_keyword="ngModel" [(ngModel)]="item.file_keyword"\n                required maxlength="256"></ion-input>\n            </ion-item>\n            <div *ngIf="file_keyword.errors && file_keyword.touched" class="error-message">\n              檔案搜尋關鍵字不能為空白\n            </div>\n          </ion-col>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>執行順序</ion-label>\n          <ion-input type="number" [disabled]="CanEditBatch==false" name="exec_seq" #exec_seq="ngModel" [(ngModel)]="item.exec_seq"\n            required></ion-input>\n          <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'" icon-right (click)="get_max_exec_seq()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n        <div *ngIf="exec_seq.errors && exec_seq.touched" class="error-message">\n          執行順序不能為空白\n        </div>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label stacked>檔名最小長度</ion-label>\n            <ion-input type="number" [disabled]="CanEditBatch==false" name="file_min_length" #file_min_length="ngModel" [(ngModel)]="item.file_min_length"></ion-input>\n          </ion-item>\n\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label stacked>檔名最大長度</ion-label>\n            <ion-input type="number" [disabled]="CanEditBatch==false" name="file_max_length" #file_max_length="ngModel" [(ngModel)]="item.file_max_length"></ion-input>\n          </ion-item>\n\n        </ion-col>\n      </ion-row>\n    <ion-row>\n\n        <ion-col>\n            <ion-item>\n              <ion-label stacked>失敗停止</ion-label>\n              <ion-checkbox [disabled]="CanEditBatch==false" name="is_fail_stop" #is_fail_stop="ngModel" [(ngModel)]="item.is_fail_stop"></ion-checkbox>\n            </ion-item>\n\n          </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>啟用</ion-label>\n          <ion-checkbox [disabled]="CanEditBatch==false" name="is_active" #is_active="ngModel" [(ngModel)]="item.is_active"></ion-checkbox>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n\n          <ion-col>\n              <ion-item>\n                <ion-label stacked>重複</ion-label>\n                <ion-checkbox [disabled]="CanEditBatch==false" name="can_rerun" #can_rerun="ngModel" [(ngModel)]="item.can_rerun"></ion-checkbox>\n              </ion-item>\n            </ion-col>\n            <ion-col>\n              <ion-item>\n                <ion-label stacked>參數群組</ion-label>\n                <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="parameter_column_group" #parameter_column_group="ngModel" [(ngModel)]="item.parameter_column_group"\n                  required maxlength="3"></ion-input>\n\n                <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectParameterGroup()">\n                  <ion-icon name="arrow-dropdown"></ion-icon>\n                </button>\n              </ion-item>\n\n              <div *ngIf="parameter_column_group.errors && parameter_column_group.touched " class="error-message">\n                參數群組不能為空白\n              </div>\n            </ion-col>\n      </ion-row>\n\n\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>封裝來源</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="package_src_key" #package_src_key="ngModel" [(ngModel)]="item.package_src_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectPackageSrc()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="package_src_key.errors && package_src_key.touched " class="error-message">\n          封裝來源不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>封裝來源</ion-label>\n\n          <ion-textarea [disabled]=true name="package_src" #package_src="ngModel" [(ngModel)]="item.package_src" required>\n          </ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="item.package_src_key!=\'067|FILE\'" >\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>連線</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="remote_conn_id" #remote_conn_id="ngModel" [(ngModel)]="item.remoteViewModel.remote_conn_id"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectConn()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="remote_conn_id.errors && remote_conn_id.touched " class="error-message">\n          連線不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>連線</ion-label>\n\n          <ion-textarea [disabled]=true name="remote_conn_string" #remote_conn_string="ngModel" [(ngModel)]="item.remoteViewModel.remote_conn_string" required>\n          </ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>封裝檔案路徑</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="ssis_package_path_key" #ssis_package_path_key="ngModel" [(ngModel)]="item.ssis_package_path_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectPackageFilePath()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="ssis_package_path_key.errors && ssis_package_path_key.touched " class="error-message">\n          封裝檔案路徑不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <button ion-button clear=true [disabled]="CanFileBrowser==false" (click)="openNavPage(item.ssis_package_path)">\n            {{item.ssis_package_path}}\n          </button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="item.package_src_key==\'067|SSIS\'">\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>專案名稱</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="ssis_project_name_key" #ssis_project_name_key="ngModel" [(ngModel)]="item.ssis_project_name_key"\n            ></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectProjectName()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>專案名稱</ion-label>\n\n          <ion-input type="text" [disabled]=true name="ssis_project_name" #ssis_project_name="ngModel" [(ngModel)]="item.ssis_project_name" required>\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>備註</ion-label>\n          <ion-textarea [disabled]="CanEditBatch==false" name="note" #note="ngModel" [(ngModel)]="item.note" maxlength="255" required></ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditBatch==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n            (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n          <button small title="參數群組" ion-button color="dark" icon-left (click)="openNavParameterColumnPage(item)">\n            <ion-icon name="outlet"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\file-ssis-add-edit-modal\file-ssis-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_file_ssis_services_file_ssis_services__["a" /* FileSsisServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_file_path_services_file_path_services__["a" /* FilePathServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__components_global_global__["a" /* GlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_conn_services_conn_services__["a" /* ConnServicesProvider */]])
    ], FileSsisAddEditModalPage);
    return FileSsisAddEditModalPage;
}());

//# sourceMappingURL=file-ssis-add-edit-modal.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileSsisAddEditModalPageModule", function() { return FileSsisAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_ssis_add_edit_modal__ = __webpack_require__(1495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_file_ssis_services_file_ssis_services__ = __webpack_require__(1060);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FileSsisAddEditModalPageModule = /** @class */ (function () {
    function FileSsisAddEditModalPageModule() {
    }
    FileSsisAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_ssis_add_edit_modal__["a" /* FileSsisAddEditModalPage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_file_ssis_services_file_ssis_services__["a" /* FileSsisServicesProvider */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_ssis_add_edit_modal__["a" /* FileSsisAddEditModalPage */]),
            ],
        })
    ], FileSsisAddEditModalPageModule);
    return FileSsisAddEditModalPageModule;
}());

//# sourceMappingURL=file-ssis-add-edit-modal.module.js.map

/***/ }),

/***/ 989:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileSsisViewModel; });
var FileSsisViewModel = /** @class */ (function () {
    function FileSsisViewModel() {
    }
    return FileSsisViewModel;
}());

//# sourceMappingURL=FileSsisViewModel.js.map

/***/ }),

/***/ 990:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteViewModel; });
var RemoteViewModel = /** @class */ (function () {
    function RemoteViewModel() {
    }
    return RemoteViewModel;
}());

//# sourceMappingURL=RemoteViewModel.js.map

/***/ })

});
//# sourceMappingURL=237.js.map