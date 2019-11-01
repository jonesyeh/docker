webpackJsonp([276],{

/***/ 1027:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileCmdServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileCmdListResponse__ = __webpack_require__(1113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileCmdResponse__ = __webpack_require__(1114);
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
  Generated class for the FileCmdServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FileCmdServicesProvider = /** @class */ (function (_super) {
    __extends(FileCmdServicesProvider, _super);
    function FileCmdServicesProvider(Services) {
        var _this = _super.call(this, Services) || this;
        _this.Services = Services;
        _this.ctl = "FileCmd";
        console.log("Hello FileCmdServiceProvider Provider");
        return _this;
    }
    FileCmdServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, keyword, exec_group, exec_file_seq, order_type) {
        var _this = this;
        var sub_url;
        if (exec_file_seq === 0) {
            sub_url = "FileCmd?PageSize={1}&PageNumber={2}&keyword={3}&exec_group={4}&order_type={5}";
            sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, exec_group, order_type);
        }
        else {
            sub_url = "FileCmd/Select?PageSize={1}&PageNumber={2}&keyword={3}&exec_group={4}&exec_file_seq={5}&order_type={6}";
            sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, exec_group, exec_file_seq, order_type);
        }
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.FileCmds = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileCmdListResponse__["a" /* FileCmdListResponse */]({
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
            return _this.FileCmds;
        });
    };
    FileCmdServicesProvider.prototype.PostPutAsync = function (FileCmdViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "FileCmd";
        else
            sub_url = "FileCmd/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, FileCmdViewModel.exec_file_seq);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, FileCmdViewModel, mode).map(function (item) {
            _this.FileCmd = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileCmdResponse__["a" /* FileCmdResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.FileCmd;
        });
    };
    FileCmdServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], FileCmdServicesProvider);
    return FileCmdServicesProvider;
}(__WEBPACK_IMPORTED_MODULE_5__file_services_file_services__["a" /* FileServicesProvider */]));

//# sourceMappingURL=file-cmd-services.js.map

/***/ }),

/***/ 1113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileCmdListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileCmdViewModel__ = __webpack_require__(956);
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


var FileCmdListResponse = /** @class */ (function (_super) {
    __extends(FileCmdListResponse, _super);
    function FileCmdListResponse(obj) {
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
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileCmdViewModel__["a" /* FileCmdViewModel */]();
                item.exec_file_seq = data.exec_file_seq;
                item.exec_group = data.exec_group;
                item.cmd_list = data.cmd_list;
                item.file_min_length = data.file_min_length;
                item.file_max_length = data.file_max_length;
                item.is_active = data.is_active;
                item.exec_seq = data.exec_seq;
                item.stand_out = data.stand_out;
                item.is_fail_stop = data.is_fail_stop;
                item.parameter_column_group = data.parameter_column_group;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                item.note = data && data.note || null;
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
                item.exec_file_path = data.exec_file_path;
                item.exec_file_path_key = data.exec_file_path_key;
                item.is_processed_sql = data.is_processed_sql;
                if (item.is_processed_sql === true) {
                    item.processed_sql_color = "danger";
                }
                else
                    item.processed_sql_color = "light";
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return FileCmdListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=FileCmdListResponse.js.map

/***/ }),

/***/ 1114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileCmdResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileCmdViewModel__ = __webpack_require__(956);
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


var FileCmdResponse = /** @class */ (function (_super) {
    __extends(FileCmdResponse, _super);
    function FileCmdResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileCmdViewModel__["a" /* FileCmdViewModel */]();
            _this.Model.exec_file_seq = obj.Model.exec_file_seq;
            _this.Model.exec_group = obj.Model.exec_group;
            _this.Model.cmd_list = obj.Model.cmd_list;
            _this.Model.file_min_length = obj.Model.file_min_length;
            _this.Model.file_max_length = obj.Model.file_max_length;
            _this.Model.is_active = obj.Model.is_active;
            _this.Model.file_type_key = obj.Model.file_type_key;
            _this.Model.file_proc_key = obj.Model.file_proc_key;
            _this.Model.exec_seq = obj.Model.exec_seq;
            _this.Model.stand_out = obj.Model.stand_out;
            _this.Model.is_fail_stop = obj.Model.is_fail_stop;
            _this.Model.parameter_column_group = obj.Model.parameter_column_group;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
            _this.Model.note = obj && obj.Model.note || null;
            _this.Model.is_active_desc = obj.Model.is_active_desc;
            switch (obj.Model.is_active) {
                case false: {
                    _this.Model.is_active_color = "danger";
                    break;
                }
                default:
                    _this.Model.is_active_color = "active";
            }
            _this.Model.exec_file_path_key = obj.Model.exec_file_path_key;
            _this.Model.exec_file_path = obj.Model.exec_file_path;
            _this.Model.is_processed_sql = obj.Model.is_processed_sql;
            if (_this.Model.is_processed_sql === true) {
                _this.Model.processed_sql_color = "danger";
            }
            else
                _this.Model.processed_sql_color = "light";
        }
        return _this;
    }
    return FileCmdResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=FileCmdResponse.js.map

/***/ }),

/***/ 1367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileCmdAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_file_cmd_services_file_cmd_services__ = __webpack_require__(1027);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_FileCmdViewModel__ = __webpack_require__(956);
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
 * Generated class for the FileCmdModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FileCmdAddEditModalPage = /** @class */ (function () {
    function FileCmdAddEditModalPage(navCtrl, navParams, viewCtrl, FileCmdServices, FilePathServices, loadingCtrl, global, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.FileCmdServices = FileCmdServices;
        this.FilePathServices = FilePathServices;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.modalCtrl = modalCtrl;
        this.func_no = 9;
        this.func_key = "014|" + this.func_no;
        this.min_exec_file_seq = 90000;
        this.max_exec_file_seq = this.min_exec_file_seq + 9999;
        this.sql_help = "\n  \u8B8A\u6578\u8AAA\u660E\uFF1A\n  {exec_log_seq}=\u8F49\u6A94\u5E8F\u865F,\n  {job_step_log_seq}=\u57F7\u884C\u4F5C\u696D\u6B65\u9A5F\u7D00\u9304\u5E8F\u865F,\n  {batch_log_seq}=\u6279\u6B21\u7D00\u9304\u5E8F\u865F,\n  {exec_file_seq}=\u8F49\u6A94\u5E8F\u865F,\n  {program_no}=\u7A0B\u5F0F\u7DE8\u865F,\n   {JOB01},{JOB02},{JOB03}=\u4F5C\u696D\u8FF4\u5708\u53C3\u6578,\n  {LC01},{LC02},{LC03}=\u5167\u90E8\u6A94\u6848\u8FF4\u5708\u53C3\u6578,\n  @remote_conn_id=\u53D6\u56DE\u9060\u7AEF\u9023\u7DDA\u5B57\u4E32(\u53C3\u8003comm.tb_conn_set.remote_conn_id),   \n  \u7BC4\u4F8B\u8AAA\u660E:\n  c:\\bat\\test.bat {JOB01} {job_step_log_seq} {batch_log_seq} @localdb\n  ";
        this.range_exec_file_seq = __WEBPACK_IMPORTED_MODULE_4__Model_String__["a" /* String */].Format("{0}-{1}", this.min_exec_file_seq, this.max_exec_file_seq);
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.item = new __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_FileCmdViewModel__["a" /* FileCmdViewModel */]();
        this.item.exec_file_seq = navParams.data.item.exec_file_seq;
        this.item.exec_group = navParams.data.item.exec_group;
        this.item.cmd_list = navParams.data.item.cmd_list;
        this.item.file_min_length = navParams.data.item.file_min_length;
        this.item.file_max_length = navParams.data.item.file_max_length;
        this.item.is_active = navParams.data.item.is_active;
        this.item.file_type_key = navParams.data.item.file_type_key;
        this.item.file_proc_key = navParams.data.item.file_proc_key;
        this.item.exec_seq = navParams.data.item.exec_seq;
        this.item.stand_out = navParams.data.item.stand_out;
        this.item.parameter_column_group =
            navParams.data.item.parameter_column_group;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.item.note = navParams.data.item.note;
        this.item.is_fail_stop = navParams.data.item.is_fail_stop;
        this.item.exec_file_path_key = navParams.data.item.exec_file_path_key;
        this.item.exec_file_path = navParams.data.item.exec_file_path;
        if (this.change_mode === "n") {
            this.get_default_path();
        }
        if (this.change_mode === "c") {
            this.get_max_exec_file_seq();
            this.get_max_exec_seq();
        }
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.CanFileBrowser = navParams.data.CanFileBrowser;
        this.title = "命令列執行設定";
    }
    FileCmdAddEditModalPage.prototype.Help = function () {
        var _this = this;
        this.global.createLoader();
        this.global.loading.present().then(function () {
            _this.global.showMessage("命令列變數說明", _this.sql_help);
        });
    };
    FileCmdAddEditModalPage.prototype.openNavPage = function (parent_path) {
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
    FileCmdAddEditModalPage.prototype.SelectParameterGroup = function () {
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
    FileCmdAddEditModalPage.prototype.openNavParameterColumnPage = function (item) {
        var _this = this;
        this.global.createLoader("連線中...");
        this.global.loading.present().then(function () {
            _this.navCtrl.push("ParameterColumnPage", { item: item });
        });
        this.global.dismissLoading();
    };
    FileCmdAddEditModalPage.prototype.SelectExecFilePath = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.exec_file_path_key,
            code_type: "005"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.exec_file_path_key = select_data.code_key;
            _this.item.exec_file_path = select_data.code_desc;
        });
        modal.present();
    };
    FileCmdAddEditModalPage.prototype.get_max_exec_file_seq = function () {
        var _this = this;
        this.global.createLoader("取得最大值中...");
        this.global.loading.present().then(function () {
            _this.FileCmdServices.GetMaxExecFileSeqAsync(_this.func_no, _this.item.exec_group).subscribe(function (data) {
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
    FileCmdAddEditModalPage.prototype.get_default_path = function () {
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
                    _this.exec_file_path = _this.default_path.filter(function (item, FilePathViewModel) { return item.file_path_type_key === "004|EXEC"; })[0];
                    _this.item.exec_file_path_key = _this.exec_file_path.file_path_key;
                    _this.item.exec_file_path = _this.exec_file_path.file_path;
                    _this.global.dismissLoading();
                }
            }, function (err) {
                _this.global.dismissLoading();
                _this.global.showError("無法連上WebAPI伺服器-" + err.message);
            });
        });
    };
    FileCmdAddEditModalPage.prototype.get_max_exec_seq = function () {
        var _this = this;
        this.global.createLoader("取得最大值中...");
        this.global.loading.present().then(function () {
            _this.FileCmdServices.GetMaxExecSeqAsync(_this.func_no, _this.item.exec_group).subscribe(function (data) {
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
    FileCmdAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    FileCmdAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FileCmdAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FileCmdModalPage");
    };
    FileCmdAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: "page-file-cmd-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\file-cmd-add-edit-modal\file-cmd-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n\n    <ion-row>\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>轉檔群組</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="exec_group" #exec_group="ngModel" [(ngModel)]="item.exec_group"\n            required maxlength="30"></ion-input>\n        </ion-item>\n        <div *ngIf="exec_group.errors && exec_group.touched" class="error-message">\n          轉檔群組不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>轉檔序號:{{range_exec_file_seq}}</ion-label>\n          <ion-input type="number" [disabled]="CanEditBatch==false || mode==\'PUT\'" name="exec_file_seq" #exec_file_seq="ngModel" [(ngModel)]="item.exec_file_seq"\n            required></ion-input>\n          <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'" icon-right (click)="get_max_exec_file_seq()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n        <div *ngIf="exec_file_seq.errors && exec_file_seq.touched" class="error-message">\n          轉檔序號不能為空白\n        </div>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-12 col-sm-8 >\n            <ion-item>\n              <ion-label stacked>命令列(含參數)</ion-label>\n              <ion-input type="text" [disabled]="CanEditBatch==false" name="cmd_list" #cmd_list="ngModel" [(ngModel)]="item.cmd_list"\n                required maxlength="256"></ion-input>\n            </ion-item>\n            <div *ngIf="cmd_list.errors && cmd_list.touched" class="error-message">\n              命令列(含參數)不能為空白\n            </div>\n          </ion-col>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>執行順序</ion-label>\n          <ion-input type="number" [disabled]="CanEditBatch==false" name="exec_seq" #exec_seq="ngModel" [(ngModel)]="item.exec_seq"\n            required></ion-input>\n          <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'" icon-right (click)="get_max_exec_seq()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n        <div *ngIf="exec_seq.errors && exec_seq.touched" class="error-message">\n          執行順序不能為空白\n        </div>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row>\n\n        <ion-col>\n            <ion-item>\n              <ion-label stacked>失敗停止</ion-label>\n              <ion-checkbox [disabled]="CanEditBatch==false" name="is_fail_stop" #is_fail_stop="ngModel" [(ngModel)]="item.is_fail_stop"></ion-checkbox>\n            </ion-item>\n\n          </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>啟用</ion-label>\n          <ion-checkbox [disabled]="CanEditBatch==false" name="is_active" #is_active="ngModel" [(ngModel)]="item.is_active"></ion-checkbox>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>執行檔案路徑</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="exec_file_path_key" #exec_file_path_key="ngModel" [(ngModel)]="item.exec_file_path_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectExecFilePath()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="exec_file_path_key.errors && exec_file_path_key.touched " class="error-message">\n          執行檔案路徑不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <button ion-button clear=true [disabled]="CanFileBrowser==false" (click)="openNavPage(item.exec_file_path)">\n            {{item.exec_file_path}}\n          </button>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n\n<ion-row>\n    <ion-col>\n        <ion-item>\n          <ion-label stacked>參數群組</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="parameter_column_group" #parameter_column_group="ngModel" [(ngModel)]="item.parameter_column_group"\n            required maxlength="3"></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectParameterGroup()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="parameter_column_group.errors && parameter_column_group.touched " class="error-message">\n          參數群組不能為空白\n        </div>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>執行輸出紀錄</ion-label>\n          <ion-checkbox [disabled]="CanEditBatch==false" name="stand_out" #stand_out="ngModel" [(ngModel)]="item.stand_out"></ion-checkbox>\n        </ion-item>\n      </ion-col>\n</ion-row>\n<ion-row>\n    <ion-col>\n      <ion-item>\n        <ion-label stacked>備註</ion-label>\n        <ion-textarea [disabled]="CanEditBatch==false" name="note" #note="ngModel" [(ngModel)]="item.note" maxlength="255"  required></ion-textarea>\n      </ion-item>\n      <div *ngIf="note.errors && note.touched " class="error-message">\n          備註不能為空白\n      </div>\n    </ion-col>\n  </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditBatch==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n            (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n          <button small title="命令列變數說明" [disabled]="CanEditBatch==false" ion-button color="dark"  icon-left\n          (click)="Help()">\n          <ion-icon name="help"></ion-icon>\n        </button>\n          <button small title="參數群組" ion-button color="dark" icon-left (click)="openNavParameterColumnPage(item)">\n            <ion-icon name="outlet"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\file-cmd-add-edit-modal\file-cmd-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_file_cmd_services_file_cmd_services__["a" /* FileCmdServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_file_path_services_file_path_services__["a" /* FilePathServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__components_global_global__["a" /* GlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */]])
    ], FileCmdAddEditModalPage);
    return FileCmdAddEditModalPage;
}());

//# sourceMappingURL=file-cmd-add-edit-modal.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileCmdAddEditModalPageModule", function() { return FileCmdAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_cmd_add_edit_modal__ = __webpack_require__(1367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_file_cmd_services_file_cmd_services__ = __webpack_require__(1027);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FileCmdAddEditModalPageModule = /** @class */ (function () {
    function FileCmdAddEditModalPageModule() {
    }
    FileCmdAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_cmd_add_edit_modal__["a" /* FileCmdAddEditModalPage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_file_cmd_services_file_cmd_services__["a" /* FileCmdServicesProvider */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_cmd_add_edit_modal__["a" /* FileCmdAddEditModalPage */]),
            ],
        })
    ], FileCmdAddEditModalPageModule);
    return FileCmdAddEditModalPageModule;
}());

//# sourceMappingURL=file-cmd-add-edit-modal.module.js.map

/***/ }),

/***/ 956:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileCmdViewModel; });
var FileCmdViewModel = /** @class */ (function () {
    function FileCmdViewModel() {
    }
    return FileCmdViewModel;
}());

//# sourceMappingURL=FileCmdViewModel.js.map

/***/ })

});
//# sourceMappingURL=276.js.map