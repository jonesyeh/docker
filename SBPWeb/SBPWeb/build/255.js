webpackJsonp([255],{

/***/ 1049:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileHttpUpServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileHttpUpListResponse__ = __webpack_require__(1161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileHttpUpResponse__ = __webpack_require__(1162);
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
  Generated class for the FileHttpUpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FileHttpUpServicesProvider = /** @class */ (function (_super) {
    __extends(FileHttpUpServicesProvider, _super);
    function FileHttpUpServicesProvider(Services) {
        var _this = _super.call(this, Services) || this;
        _this.Services = Services;
        _this.ctl = "FileHttpUp";
        console.log("Hello FileHttpUpServiceProvider Provider");
        return _this;
    }
    FileHttpUpServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, keyword, exec_group, exec_file_seq, order_type) {
        var _this = this;
        var sub_url;
        if (exec_file_seq === 0) {
            sub_url = "FileHttpUp?PageSize={1}&PageNumber={2}&keyword={3}&exec_group={4}&order_type={5}";
            sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, exec_group, order_type);
        }
        else {
            sub_url = "FileHttpUp/Select?PageSize={1}&PageNumber={2}&keyword={3}&exec_group={4}&exec_file_seq={5}&order_type={6}";
            sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, exec_group, exec_file_seq, order_type);
        }
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.FileHttpUps = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileHttpUpListResponse__["a" /* FileHttpUpListResponse */]({
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
            return _this.FileHttpUps;
        });
    };
    FileHttpUpServicesProvider.prototype.PostPutAsync = function (FileHttpUpViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST") {
            sub_url = "FileHttpUp";
            FileHttpUpViewModel.upload_seq = FileHttpUpViewModel.exec_file_seq * 100 + 1;
        }
        else
            sub_url = "FileHttpUp/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, FileHttpUpViewModel.upload_seq);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, FileHttpUpViewModel, mode).map(function (item) {
            _this.FileHttpUp = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileHttpUpResponse__["a" /* FileHttpUpResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.FileHttpUp;
        });
    };
    FileHttpUpServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], FileHttpUpServicesProvider);
    return FileHttpUpServicesProvider;
}(__WEBPACK_IMPORTED_MODULE_5__file_services_file_services__["a" /* FileServicesProvider */]));

//# sourceMappingURL=file-http-up-services.js.map

/***/ }),

/***/ 1161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileHttpUpListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileHttpUpViewModel__ = __webpack_require__(979);
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


var FileHttpUpListResponse = /** @class */ (function (_super) {
    __extends(FileHttpUpListResponse, _super);
    function FileHttpUpListResponse(obj) {
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
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileHttpUpViewModel__["a" /* FileHttpUpViewModel */]();
                item.exec_file_seq = data.exec_file_seq;
                item.exec_group = data.exec_group;
                item.file_keyword = data.file_keyword;
                item.file_min_length = data.file_min_length;
                item.file_max_length = data.file_max_length;
                item.is_active = data.is_active;
                item.file_type_key = data.file_type_key;
                item.file_proc_key = data.file_proc_key;
                item.exec_seq = data.exec_seq;
                item.can_rerun = data.can_rerun;
                item.parameter_column_group = data.parameter_column_group;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                item.note = (data && data.note) || null;
                item.file_type = data.file_type;
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
                item.bk_file_path_key = data.bk_file_path_key;
                item.bk_file_path = data.bk_file_path;
                item.up_file_path_key = data.up_file_path_key;
                item.up_file_path = data.up_file_path;
                item.down_file_path_key = data.down_file_path_key;
                item.down_file_path = data.down_file_path;
                item.upload_seq = data.upload_seq;
                item.function_name = data.function_name;
                item.function_parameter = (data && data.function_parameter) || null;
                item.remote_conn_id = data.remote_conn_id;
                item.parameter_column_group = data.parameter_column_group;
                item.res_filename = data.res_filename;
                item.upload_type_key = data.upload_type_key;
                item.field_terminator = data.field_terminator;
                item.upload_type = data.upload_type;
                item.conn_string = data.conn_string;
                item.url = data.url;
                item.request_content = data.request_content;
                item.response_content = data.response_content;
                item.is_processed_sql = data.is_processed_sql;
                item.is_fail_stop = data.is_fail_stop;
                if (item.is_processed_sql === true) {
                    item.processed_sql_color = "danger";
                }
                else
                    item.processed_sql_color = "light";
                // item.is_processed_exec_group=data.is_processed_exec_group;
                // if(item.is_processed_exec_group===true)
                // {
                //   item.processed_exec_group_color="danger";
                // }
                // else
                //   item.processed_exec_group_color="light";
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return FileHttpUpListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=FileHttpUpListResponse.js.map

/***/ }),

/***/ 1162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileHttpUpResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileHttpUpViewModel__ = __webpack_require__(979);
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


var FileHttpUpResponse = /** @class */ (function (_super) {
    __extends(FileHttpUpResponse, _super);
    function FileHttpUpResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileHttpUpViewModel__["a" /* FileHttpUpViewModel */]();
            _this.Model.exec_file_seq = obj.Model.exec_file_seq;
            _this.Model.exec_group = obj.Model.exec_group;
            _this.Model.file_keyword = obj.Model.file_keyword;
            _this.Model.file_min_length = obj.Model.file_min_length;
            _this.Model.file_max_length = obj.Model.file_max_length;
            _this.Model.is_active = obj.Model.is_active;
            _this.Model.file_type_key = obj.Model.file_type_key;
            _this.Model.file_proc_key = obj.Model.file_proc_key;
            _this.Model.exec_seq = obj.Model.exec_seq;
            _this.Model.can_rerun = obj.Model.can_rerun;
            _this.Model.parameter_column_group = obj.Model.parameter_column_group;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
            _this.Model.note = (obj && obj.Model.note) || null;
            _this.Model.file_type = obj.Model.file_type;
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
            _this.Model.is_fail_stop = obj.Model.is_fail_stop;
            _this.Model.up_file_path_key = obj.Model.up_file_path_key;
            _this.Model.bk_file_path_key = obj.Model.bk_file_path_key;
            _this.Model.down_file_path_key = obj.Model.down_file_path_key;
            _this.Model.up_file_path = obj.Model.up_file_path;
            _this.Model.bk_file_path = obj.Model.bk_file_path;
            _this.Model.down_file_path = obj.Model.down_file_path;
            _this.Model.upload_seq = obj.Model.upload_seq;
            _this.Model.function_name = obj.Model.function_name;
            _this.Model.function_parameter =
                (obj && obj.Model.function_parameter) || null;
            _this.Model.remote_conn_id = obj.Model.remote_conn_id;
            _this.Model.parameter_column_group = obj.Model.parameter_column_group;
            _this.Model.res_filename = obj.Model.res_filename;
            _this.Model.upload_type_key = obj.Model.upload_type_key;
            _this.Model.field_terminator = obj.Model.field_terminator;
            _this.Model.upload_type = obj.Model.upload_type;
            _this.Model.conn_string = obj.Model.conn_string;
            _this.Model.url = obj.Model.url;
            _this.Model.request_content = obj.Model.request_content;
            _this.Model.response_content = obj.Model.response_content;
            _this.Model.is_fail_stop = obj.Model.is_fail_stop;
            _this.Model.is_processed_sql = obj.Model.is_processed_sql;
            if (_this.Model.is_processed_sql === true) {
                _this.Model.processed_sql_color = "danger";
            }
            else
                _this.Model.processed_sql_color = "light";
            //  this.Model.is_processed_exec_group=obj.Model.is_processed_exec_group;
            //   if(this.Model.is_processed_exec_group===true)
            //   {
            //     this.Model.processed_exec_group_color="danger";
            //   }
            //   else
            //   this.Model.processed_exec_group_color="light";
        }
        return _this;
    }
    return FileHttpUpResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=FileHttpUpResponse.js.map

/***/ }),

/***/ 1441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileHttpUpAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_file_http_up_services_file_http_up_services__ = __webpack_require__(1049);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_FileHttpUpViewModel__ = __webpack_require__(979);
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
 * Generated class for the FileHttpUpModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FileHttpUpAddEditModalPage = /** @class */ (function () {
    function FileHttpUpAddEditModalPage(navCtrl, navParams, viewCtrl, FileHttpUpServices, FilePathServices, loadingCtrl, global, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.FileHttpUpServices = FileHttpUpServices;
        this.FilePathServices = FilePathServices;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.modalCtrl = modalCtrl;
        this.func_no = 13;
        this.func_key = "014|" + this.func_no;
        this.min_exec_file_seq = 130000;
        this.max_exec_file_seq = this.min_exec_file_seq + 9999;
        this.range_exec_file_seq = __WEBPACK_IMPORTED_MODULE_4__Model_String__["a" /* String */].Format("{0}-{1}", this.min_exec_file_seq, this.max_exec_file_seq);
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.item = new __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_FileHttpUpViewModel__["a" /* FileHttpUpViewModel */]();
        this.item.exec_file_seq = navParams.data.item.exec_file_seq;
        this.item.exec_group = navParams.data.item.exec_group;
        this.item.file_keyword = navParams.data.item.file_keyword;
        this.item.file_min_length = navParams.data.item.file_min_length;
        this.item.file_max_length = navParams.data.item.file_max_length;
        this.item.is_active = navParams.data.item.is_active;
        this.item.file_type_key = navParams.data.item.file_type_key;
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
        this.item.file_type = navParams.data.item.file_type;
        this.item.file_proc = navParams.data.item.file_proc;
        this.item.exec_file_seq = navParams.data.item.exec_file_seq;
        this.item.function_name = navParams.data.item.function_name;
        this.item.function_parameter = navParams.data.item.function_parameter;
        this.item.remote_conn_id = navParams.data.item.remote_conn_id;
        this.item.parameter_column_group = navParams.data.item.parameter_column_group;
        this.item.res_filename = navParams.data.item.res_filename;
        this.item.upload_type_key = navParams.data.item.upload_type_key;
        this.item.field_terminator = navParams.data.item.field_terminator;
        this.item.is_active = navParams.data.item.is_active;
        this.item.exec_seq = navParams.data.item.exec_seq;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.item.upload_seq = navParams.data.item.upload_seq;
        this.item.is_fail_stop = navParams.data.item.is_fail_stop;
        this.item.up_file_path_key = navParams.data.item.up_file_path_key;
        this.item.bk_file_path_key = navParams.data.item.bk_file_path_key;
        this.item.down_file_path_key = navParams.data.item.down_file_path_key;
        this.item.up_file_path = navParams.data.item.up_file_path;
        this.item.bk_file_path = navParams.data.item.bk_file_path;
        this.item.down_file_path = navParams.data.item.down_file_path;
        this.item.conn_string = navParams.data.item.conn_string;
        this.item.upload_type = navParams.data.item.upload_type;
        this.item.url = navParams.data.item.url;
        this.item.request_content = navParams.data.item.request_content;
        this.item.response_content = navParams.data.item.response_content;
        if (this.change_mode === "n") {
            this.get_default_path();
        }
        if (this.change_mode === "c") {
            this.get_max_exec_file_seq();
            this.get_max_exec_seq();
        }
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.CanFileBrowser = navParams.data.CanFileBrowser;
        this.title = "REST用戶端";
    }
    FileHttpUpAddEditModalPage.prototype.openNavPage = function (parent_path) {
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
    FileHttpUpAddEditModalPage.prototype.SelectFileType = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.file_type_key,
            code_key: "001|JSON,001|BIN,001|CSV,001|FORM,001|FMDATA",
            code_type: "001",
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.file_type_key = select_data.code_key;
            _this.item.file_type = select_data.code_desc;
        });
        modal.present();
    };
    FileHttpUpAddEditModalPage.prototype.SelectUploadType = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.upload_type_key,
            code_type: "074"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.upload_type_key = select_data.code_key;
            _this.item.upload_type = select_data.code_desc;
        });
        modal.present();
    };
    FileHttpUpAddEditModalPage.prototype.SelectFileProcType = function () {
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
    FileHttpUpAddEditModalPage.prototype.SelectParameterGroup = function () {
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
    FileHttpUpAddEditModalPage.prototype.openNavParameterColumnPage = function (item) {
        var _this = this;
        this.global.createLoader("連線中...");
        this.global.loading.present().then(function () {
            _this.navCtrl.push("ParameterColumnPage", { item: item });
        });
        this.global.dismissLoading();
    };
    FileHttpUpAddEditModalPage.prototype.SelectUpFilePath = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.up_file_path_key,
            code_type: "005"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.up_file_path_key = select_data.code_key;
            _this.item.up_file_path = select_data.code_desc;
        });
        modal.present();
    };
    FileHttpUpAddEditModalPage.prototype.SelectDownFilePath = function () {
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
    FileHttpUpAddEditModalPage.prototype.SelectBkFilePath = function () {
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
    FileHttpUpAddEditModalPage.prototype.get_max_exec_file_seq = function () {
        var _this = this;
        this.global.createLoader("取得最大值中...");
        this.global.loading.present().then(function () {
            _this.FileHttpUpServices.GetMaxExecFileSeqAsync(_this.func_no, _this.item.exec_group).subscribe(function (data) {
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
    FileHttpUpAddEditModalPage.prototype.get_default_path = function () {
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
                    _this.up_file_path = _this.default_path.filter(function (item, FilePathViewModel) { return item.file_path_type_key === "004|UP"; })[0];
                    _this.item.up_file_path_key = _this.up_file_path.file_path_key;
                    _this.item.up_file_path = _this.up_file_path.file_path;
                    _this.bk_file_path = _this.default_path.filter(function (item, FilePathViewModel) { return item.file_path_type_key === "004|BK"; })[0];
                    _this.item.bk_file_path_key = _this.bk_file_path.file_path_key;
                    _this.item.bk_file_path = _this.bk_file_path.file_path;
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
    FileHttpUpAddEditModalPage.prototype.SelectConn = function () {
        var _this = this;
        var modal = this.modalCtrl.create("ConnSelectModalPage", {
            select_remote_conn_id: this.item.remote_conn_id,
            conn_type_key: "065|004"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.remote_conn_id = select_data.remote_conn_id;
            _this.item.conn_string = select_data.conn_string;
            _this.change_url();
        });
        modal.present();
    };
    FileHttpUpAddEditModalPage.prototype.change_url = function () {
        this.item.url = this.item.conn_string + (this.item.function_name == null ? "" : this.item.function_name) + (this.item.function_parameter == null ? "" : this.item.function_parameter);
    };
    FileHttpUpAddEditModalPage.prototype.get_max_exec_seq = function () {
        var _this = this;
        this.global.createLoader("取得最大值中...");
        this.global.loading.present().then(function () {
            _this.FileHttpUpServices.GetMaxExecSeqAsync(_this.func_no, _this.item.exec_group).subscribe(function (data) {
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
    FileHttpUpAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    FileHttpUpAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FileHttpUpAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FileHttpUpModalPage");
    };
    FileHttpUpAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: "page-file-http-up-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\file-http-up-add-edit-modal\file-http-up-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n\n    <ion-row>\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>轉檔群組</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="exec_group" #exec_group="ngModel" [(ngModel)]="item.exec_group"\n            required maxlength="30"></ion-input>\n        </ion-item>\n        <div *ngIf="exec_group.errors && exec_group.touched" class="error-message">\n          轉檔群組不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>轉檔序號:{{range_exec_file_seq}}</ion-label>\n          <ion-input type="number" [disabled]="CanEditBatch==false || mode==\'PUT\'" name="exec_file_seq" #exec_file_seq="ngModel" [(ngModel)]="item.exec_file_seq"\n            required></ion-input>\n          <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'" icon-right (click)="get_max_exec_file_seq()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n        <div *ngIf="exec_file_seq.errors && exec_file_seq.touched" class="error-message">\n          轉檔序號不能為空白\n        </div>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>方法</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="upload_type_key" #upload_type_key="ngModel" [(ngModel)]="item.upload_type_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectUploadType()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="upload_type_key.errors && upload_type_key.touched " class="error-message">\n          方法不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>方法</ion-label>\n          <ion-input type="text" [disabled]=true name="upload_type" #upload_type="ngModel" [(ngModel)]="item.upload_type" required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="item.upload_type_key!=\'074|GET\' && item.upload_type_key!=\'074|DEL\'  ">\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>內文類型</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="file_type_key" #file_type_key="ngModel" [(ngModel)]="item.file_type_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectFileType()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="file_type_key.errors && file_type_key.touched " class="error-message">\n          內文類型不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>內文類型</ion-label>\n          <ion-input type="text" [disabled]=true name="file_type" #file_type="ngModel" [(ngModel)]="item.file_type" required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col *ngIf="item.upload_type_key!=\'074|GET\' && item.upload_type_key!=\'074|DEL\' " col-12 col-sm-8 >\n          <ion-item>\n            <ion-label stacked>檔案搜尋關鍵字</ion-label>\n            <ion-input type="text" [disabled]="CanEditBatch==false" placeholder="NULL:手動建立，其他:從檔案讀取內文" name="file_keyword" #file_keyword="ngModel" [(ngModel)]="item.file_keyword"\n              required maxlength="256"></ion-input>\n          </ion-item>\n          <div *ngIf="file_keyword.errors && file_keyword.touched" class="error-message">\n            檔案搜尋關鍵字不能為空白\n          </div>\n        </ion-col>        \n    <ion-col col-12 col-sm-4>\n      <ion-item>\n        <ion-label stacked>執行順序</ion-label>\n        <ion-input type="number" [disabled]="CanEditBatch==false" name="exec_seq" #exec_seq="ngModel" [(ngModel)]="item.exec_seq"\n          required></ion-input>\n        <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'" icon-right (click)="get_max_exec_seq()">\n          <ion-icon name="arrow-dropdown"></ion-icon>\n        </button>\n      </ion-item>\n      <div *ngIf="exec_seq.errors && exec_seq.touched" class="error-message">\n        執行順序不能為空白\n      </div>\n    </ion-col>\n\n  </ion-row>\n  <ion-row *ngIf="item.upload_type_key==\'074|POST\' &&  item.file_keyword.toUpperCase()==\'NULL\' " >\n    <ion-col>\n      <ion-item>\n        <ion-label stacked>上傳資料內容</ion-label>\n        <ion-textarea [disabled]="CanEditBatch==false" rows=6 name="request_content" #request_content="ngModel" [(ngModel)]="item.request_content"   required></ion-textarea>\n      </ion-item>\n      <div *ngIf="note.errors && note.touched " class="error-message">\n        上傳資料內容不能為空白\n      </div>\n    </ion-col>\n  </ion-row>\n    \n\n    <ion-row *ngIf="item.upload_type_key!=\'074|GET\' && item.upload_type_key!=\'074|DEL\' && item.file_keyword.toUpperCase()!=\'NULL\' ">\n        <ion-col>\n          <ion-item>\n            <ion-label stacked>檔名最小長度</ion-label>\n            <ion-input type="number" [disabled]="CanEditBatch==false" name="file_min_length" #file_min_length="ngModel" [(ngModel)]="item.file_min_length"></ion-input>\n          </ion-item>\n\n        </ion-col>\n        <ion-col>\n          <ion-item>\n            <ion-label stacked>檔名最大長度</ion-label>\n            <ion-input type="number" [disabled]="CanEditBatch==false" name="file_max_length" #file_max_length="ngModel" [(ngModel)]="item.file_max_length"></ion-input>\n          </ion-item>\n\n        </ion-col>\n      </ion-row>\n      <ion-row *ngIf="item.upload_type_key!=\'074|GET\' && item.upload_type_key!=\'074|DEL\' && item.file_keyword.toUpperCase()!=\'NULL\' ">\n        <ion-col col-12 col-sm-4>\n          <ion-item>\n            <ion-label stacked>執行後處理方式</ion-label>\n            <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="file_proc_key" #file_proc_key="ngModel" [(ngModel)]="item.file_proc_key"\n              required></ion-input>\n\n            <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectFileProcType()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-item>\n\n          <div *ngIf="file_proc_key.errors && file_proc_key.touched " class="error-message">\n            執行後處理方式不能為空白\n          </div>\n        </ion-col>\n        <ion-col col-12 col-sm-8>\n          <ion-item>\n            <ion-label stacked>執行後處理方式</ion-label>\n\n            <ion-textarea [disabled]=true name="file_proc" #file_proc="ngModel" [(ngModel)]="item.file_proc" required>\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n    <ion-row>\n\n        <ion-col>\n            <ion-item>\n              <ion-label stacked>失敗停止</ion-label>\n              <ion-checkbox [disabled]="CanEditBatch==false" name="is_fail_stop" #is_fail_stop="ngModel" [(ngModel)]="item.is_fail_stop"></ion-checkbox>\n            </ion-item>\n\n          </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>啟用</ion-label>\n          <ion-checkbox [disabled]="CanEditBatch==false" name="is_active" #is_active="ngModel" [(ngModel)]="item.is_active"></ion-checkbox>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col col-8>\n            <ion-item>\n              <ion-label stacked>回應檔案名稱</ion-label>\n              <ion-input type="text" [disabled]="CanEditBatch==false" name="res_filename" #res_filename="ngModel" [(ngModel)]="item.res_filename" required\n                maxlength="50"></ion-input>\n            </ion-item>\n            <div *ngIf="res_filename.errors && res_filename.touched" class="error-message">\n              回應檔案名稱不能為空白\n            </div>\n          </ion-col>\n          <ion-col col-4>\n              <ion-item>\n                <ion-label stacked>重複</ion-label>\n                <ion-checkbox [disabled]="CanEditBatch==false" name="can_rerun" #can_rerun="ngModel" [(ngModel)]="item.can_rerun"></ion-checkbox>\n              </ion-item>\n            </ion-col>\n      </ion-row>\n\n\n    <ion-row>\n        <ion-col *ngIf="item.file_type_key==\'001|CSV\' ">\n          <ion-item>\n            <ion-label stacked>欄位分隔符號</ion-label>\n            <ion-input type="text"  maxlength="2" [disabled]="CanEditBatch==false"\n              name="field_terminator" #field_terminator="ngModel" [(ngModel)]="item.field_terminator" required></ion-input>\n          </ion-item>\n          <div *ngIf="field_terminator.errors && field_terminator.touched " class="error-message">\n            欄位分隔符號不能為空白\n          </div>\n        </ion-col>\n        <ion-col>\n            <ion-item>\n              <ion-label stacked>參數群組</ion-label>\n              <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="parameter_column_group" #parameter_column_group="ngModel" [(ngModel)]="item.parameter_column_group"\n                required maxlength="3"></ion-input>\n\n              <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectParameterGroup()">\n                <ion-icon name="arrow-dropdown"></ion-icon>\n              </button>\n            </ion-item>\n\n            <div *ngIf="parameter_column_group.errors && parameter_column_group.touched " class="error-message">\n              參數群組不能為空白\n            </div>\n          </ion-col>\n      </ion-row>\n    <ion-row *ngIf="item.upload_type_key!=\'074|GET\' && item.upload_type_key!=\'074|DEL\' && item.file_keyword.toUpperCase()!=\'NULL\' ">\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>上傳檔案路徑</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="up_file_path_key" #up_file_path_key="ngModel" [(ngModel)]="item.up_file_path_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectUpFilePath()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="up_file_path_key.errors && up_file_path_key.touched " class="error-message">\n          上傳檔案路徑不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>上傳檔案路徑</ion-label>\n\n          <ion-input type="text" readonly=true [disabled]=true name="up_file_path" #up_file_path="ngModel" [(ngModel)]="item.up_file_path" required>\n          </ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="item.upload_type_key!=\'074|GET\' && item.upload_type_key!=\'074|DEL\' && item.file_keyword.toUpperCase()!=\'NULL\' ">\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>備份檔案路徑</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="bk_file_path_key" #bk_file_path_key="ngModel" [(ngModel)]="item.bk_file_path_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectBkFilePath()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="bk_file_path_key.errors && bk_file_path_key.touched " class="error-message">\n          備份檔案路徑不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n            <button ion-button [disabled]="CanFileBrowser==false" clear=true (click)="openNavPage(item.bk_file_path)">\n                {{item.bk_file_path}}\n              </button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>回應檔案路徑</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="down_file_path_key" #down_file_path_key="ngModel" [(ngModel)]="item.down_file_path_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectDownFilePath()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="down_file_path_key.errors && down_file_path_key.touched " class="error-message">\n          回應檔案路徑不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n            <button ion-button [disabled]="CanFileBrowser==false" clear=true (click)="openNavPage(item.down_file_path)">\n                {{item.down_file_path}}\n              </button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n\n    <ion-col col-8>\n      <ion-item>\n        <ion-label stacked>連線編號</ion-label>\n        <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="remote_conn_id" #remote_conn_id="ngModel" [(ngModel)]="item.remote_conn_id"\n          required maxlength="20"></ion-input>\n\n        <button ion-button outline item-end *ngIf="CanEditBatch==true " icon-right (click)="SelectConn()">\n          <ion-icon name="arrow-dropdown"></ion-icon>\n        </button>\n      </ion-item>\n\n      <div *ngIf="remote_conn_id.errors && remote_conn_id.touched " class="error-message">\n        連線編號不能為空白\n      </div>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col col-12>\n      <ion-item>\n        <ion-label stacked>功能別</ion-label>\n        <ion-input type="text" [disabled]="CanEditBatch==false " name="function_name" #function_name="ngModel" (change)="change_url()"\n          [(ngModel)]="item.function_name" maxlength="255" required></ion-input>\n      </ion-item>\n    </ion-col>\n\n  </ion-row>\n  <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label stacked>功能參數</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false " name="function_parameter" #function_parameter="ngModel" (change)="change_url()"\n            [(ngModel)]="item.function_parameter" maxlength="255"></ion-input>\n        </ion-item>\n      </ion-col>\n\n    </ion-row>\n  <ion-row>\n    <ion-col col-12>\n      <ion-item>\n        <ion-label stacked>Url</ion-label>\n        <ion-textarea rows=4 [disabled]=true name="Url" #Url="ngModel" [(ngModel)]="item.url" required></ion-textarea>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  \n<ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label stacked>備註</ion-label>\n        <ion-textarea [disabled]="CanEditBatch==false" name="note"  #note="ngModel" [(ngModel)]="item.note" maxlength="255"  required></ion-textarea>\n      </ion-item>\n      <div *ngIf="note.errors && note.touched " class="error-message">\n          備註不能為空白\n      </div>\n    </ion-col>\n  </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditBatch==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n            (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n          <button small title="參數群組" ion-button color="dark" icon-left (click)="openNavParameterColumnPage(item)">\n            <ion-icon name="outlet"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\file-http-up-add-edit-modal\file-http-up-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_file_http_up_services_file_http_up_services__["a" /* FileHttpUpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_file_path_services_file_path_services__["a" /* FilePathServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__components_global_global__["a" /* GlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */]])
    ], FileHttpUpAddEditModalPage);
    return FileHttpUpAddEditModalPage;
}());

//# sourceMappingURL=file-http-up-add-edit-modal.js.map

/***/ }),

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileHttpUpAddEditModalPageModule", function() { return FileHttpUpAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_http_up_add_edit_modal__ = __webpack_require__(1441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_file_http_up_services_file_http_up_services__ = __webpack_require__(1049);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FileHttpUpAddEditModalPageModule = /** @class */ (function () {
    function FileHttpUpAddEditModalPageModule() {
    }
    FileHttpUpAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_http_up_add_edit_modal__["a" /* FileHttpUpAddEditModalPage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_file_http_up_services_file_http_up_services__["a" /* FileHttpUpServicesProvider */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_http_up_add_edit_modal__["a" /* FileHttpUpAddEditModalPage */]),
            ],
        })
    ], FileHttpUpAddEditModalPageModule);
    return FileHttpUpAddEditModalPageModule;
}());

//# sourceMappingURL=file-http-up-add-edit-modal.module.js.map

/***/ }),

/***/ 979:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileHttpUpViewModel; });
var FileHttpUpViewModel = /** @class */ (function () {
    function FileHttpUpViewModel() {
    }
    return FileHttpUpViewModel;
}());

//# sourceMappingURL=FileHttpUpViewModel.js.map

/***/ })

});
//# sourceMappingURL=255.js.map