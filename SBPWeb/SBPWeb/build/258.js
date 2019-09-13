webpackJsonp([258],{

/***/ 1095:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileHttpHtmlDownFileServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileHttpHtmlDownFileListResponse__ = __webpack_require__(1153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileHttpHtmlDownFileResponse__ = __webpack_require__(1154);
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
  Generated class for the FileHttpHtmlDownFileServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FileHttpHtmlDownFileServicesProvider = /** @class */ (function () {
    function FileHttpHtmlDownFileServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "FileHttpHtmlDownFile";
        console.log("Hello FileHttpHtmlDownFileServiceProvider Provider");
    }
    FileHttpHtmlDownFileServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, keyword, exec_file_seq, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "FileHttpHtmlDownFile?PageSize={1}&PageNumber={2}&keyword={3}&exec_file_seq={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, exec_file_seq, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.FileHttpHtmlDownFiles = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_FileHttpHtmlDownFileListResponse__["a" /* FileHttpHtmlDownFileListResponse */]({
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
            return _this.FileHttpHtmlDownFiles;
        });
    };
    FileHttpHtmlDownFileServicesProvider.prototype.PostPutAsync = function (FileHttpHtmlDownFileViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "FileHttpHtmlDownFile";
        else
            sub_url = "FileHttpHtmlDownFile/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, FileHttpHtmlDownFileViewModel.export_seq);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, FileHttpHtmlDownFileViewModel, mode).map(function (item) {
            _this.FileHttpHtmlDownFile = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileHttpHtmlDownFileResponse__["a" /* FileHttpHtmlDownFileResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.FileHttpHtmlDownFile;
        });
    };
    FileHttpHtmlDownFileServicesProvider.prototype.DeleteAsync = function (export_seq) {
        var sub_url;
        sub_url = "FileHttpHtmlDownFile/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, export_seq);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: ""
            });
        });
    };
    FileHttpHtmlDownFileServicesProvider.prototype.GetSqlAsync = function (export_seq, method) {
        var sub_url;
        sub_url = "FileHttpHtmlDownFile/get_{2}_sql/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, export_seq, method);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    FileHttpHtmlDownFileServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], FileHttpHtmlDownFileServicesProvider);
    return FileHttpHtmlDownFileServicesProvider;
}());

//# sourceMappingURL=file-http-html-down-file-services.js.map

/***/ }),

/***/ 1153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileHttpHtmlDownFileListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileHttpHtmlDownFileViewModel__ = __webpack_require__(975);
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


var FileHttpHtmlDownFileListResponse = /** @class */ (function (_super) {
    __extends(FileHttpHtmlDownFileListResponse, _super);
    function FileHttpHtmlDownFileListResponse(obj) {
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
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileHttpHtmlDownFileViewModel__["a" /* FileHttpHtmlDownFileViewModel */]();
                item.export_seq = data.export_seq;
                item.exec_file_seq = data.exec_file_seq;
                item.function_name = data.function_name;
                item.xpath = (data && data.xpath) || null;
                item.remote_conn_id = data.remote_conn_id;
                item.parameter_column_group = data.parameter_column_group;
                item.filename = data.filename;
                item.down_type_key = data.down_type_key;
                item.cookie = data.cookie;
                item.is_active = data.is_active;
                item.exec_seq = data.exec_seq;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
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
                item.conn_string = data.conn_string;
                item.down_type = data.down_type;
                item.file_format_key = data.file_format_key;
                item.file_format = data.file_format;
                item.url = data.url;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return FileHttpHtmlDownFileListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=FileHttpHtmlDownFileListResponse.js.map

/***/ }),

/***/ 1154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileHttpHtmlDownFileResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileHttpHtmlDownFileViewModel__ = __webpack_require__(975);
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


var FileHttpHtmlDownFileResponse = /** @class */ (function (_super) {
    __extends(FileHttpHtmlDownFileResponse, _super);
    function FileHttpHtmlDownFileResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileHttpHtmlDownFileViewModel__["a" /* FileHttpHtmlDownFileViewModel */]();
            _this.Model.export_seq = obj.Model.export_seq;
            _this.Model.exec_file_seq = obj.Model.exec_file_seq;
            _this.Model.function_name = obj.Model.function_name;
            _this.Model.xpath = obj.Model.xpath;
            _this.Model.remote_conn_id = obj.Model.remote_conn_id;
            _this.Model.parameter_column_group = obj.Model.parameter_column_group;
            _this.Model.filename = obj.Model.filename;
            _this.Model.down_type_key = obj.Model.down_type_key;
            _this.Model.cookie = obj.Model.cookie;
            _this.Model.is_active = obj.Model.is_active;
            _this.Model.exec_seq = obj.Model.exec_seq;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
            switch (obj.Model.is_active) {
                case false: {
                    _this.Model.is_active_color = "danger";
                    break;
                }
                default:
                    _this.Model.is_active_color = "active";
            }
            _this.Model.conn_string = obj.Model.conn_string;
            _this.Model.down_type = obj.Model.down_type;
            _this.Model.file_format_key = (obj && obj.Model.file_format_key) || null;
            _this.Model.file_format = (obj && obj.Model.file_format) || null;
            _this.Model.url = obj.Model.url;
            _this.Model.cookie = obj.Model.cookie;
        }
        return _this;
    }
    return FileHttpHtmlDownFileResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=FileHttpHtmlDownFileResponse.js.map

/***/ }),

/***/ 1430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileHttpHtmlDownFileAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_ViewModel_FileHttpHtmlDownFileViewModel__ = __webpack_require__(975);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_conn_services_conn_services__ = __webpack_require__(267);
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
 * Generated class for the FileHttpHtmlDownFileModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FileHttpHtmlDownFileAddEditModalPage = /** @class */ (function () {
    function FileHttpHtmlDownFileAddEditModalPage(navCtrl, navParams, viewCtrl, loadingCtrl, global, modalCtrl, ConnServices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.modalCtrl = modalCtrl;
        this.ConnServices = ConnServices;
        this.exec_file_seq = 0;
        this.help = "\n  \u683C\u5F0F\u53EF\u652F\u63F4tab\u8207\u9017\u865F\u5169\u7A2E\uFF0C\u5171\u56DB\u500B\u6B04\u4F4D\uFF0C\u683C\u5F0F\u5982\u4E0B\u6240\u793A\nurl\t\u6A94\u6848\u540D\u7A31\tXPath(\u9078\u9805)\t\u6A94\u6848\u4E0B\u8F09\u985E\u578B\n\u6216url,\u6A94\u6848\u540D\u7A31,XPath(\u9078\u9805[\u82E5xpath\u6709\u5305\u542B\u9017\u865F\uFF0C\u8ACB\u6539\u7528tab\u683C\u5F0F]),\u6A94\u6848\u4E0B\u8F09\u985E\u578B(061|1:\u6A94\u6848\u4E0B\u8F09,061|2:JSON\u8F49CSV,061|3:URL\u6A94\u6848\u6E05\u55AE\u4E0B\u8F09,061|4:html table\u56DE\u50B3<td>\u6B04\u4F4D\u5167\u5BB9\u4EE5\u5206\u9694\u7B26\u865F\u7522\u51FA,061|5:html \u56DE\u50B3url,\u8AAA\u660E\u683C\u5F0F\u4EE5\u5206\u9694\u7B26\u865F\u7522\u51FA,061|6:html \u5167\u6587\u7684URL\u81EA\u52D5\u4E0B\u8F09\u6A94\u6848(\u6A94\u540D\u53D6\u81EAURL),061|7:html \u5167\u6587\u7684URL\u81EA\u52D5\u4E0B\u8F09\u6A94\u6848(\u6A94\u540D\u53D6\u81EA\u986F\u793A\u5167\u5BB9))\n(\u4EE5\u4E0A\u6A94\u6848\u5167\u6587\u4E0D\u8981\u63D0\u4F9B\u6A19\u984C)\n\n\u7BC4\u4F8B\u5982\u4E0B\u6240\u793A\uFF1A(\u5C07\u7DB2\u9801\u5167\u5BB9\u4E0B\u8F09\u5B58\u6210jonesyeh.html)\nhttps://jonesyeh.wordpress.com/,jonesyeh.html,,061|1\n  ";
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.item = new __WEBPACK_IMPORTED_MODULE_4__Model_ViewModel_FileHttpHtmlDownFileViewModel__["a" /* FileHttpHtmlDownFileViewModel */]();
        this.exec_file_seq = navParams.data.item.exec_file_seq;
        this.item.exec_file_seq = navParams.data.item.exec_file_seq;
        this.item.export_seq = navParams.data.item.export_seq;
        this.item.is_active = navParams.data.item.is_active;
        this.item.exec_seq = navParams.data.item.exec_seq;
        this.item.parameter_column_group =
            navParams.data.item.parameter_column_group;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.item.function_name = navParams.data.item.function_name;
        this.item.xpath = navParams.data.item.xpath;
        this.item.remote_conn_id = navParams.data.item.remote_conn_id;
        this.item.conn_string = navParams.data.item.conn_string;
        this.item.parameter_column_group =
            navParams.data.item.parameter_column_group;
        this.item.filename = navParams.data.item.filename;
        this.item.down_type_key = navParams.data.item.down_type_key;
        this.item.down_type = navParams.data.item.down_type;
        this.item.file_format_key = navParams.data.item.file_format_key;
        this.item.file_format = navParams.data.item.file_format;
        this.item.url = navParams.data.item.url;
        this.item.cookie = navParams.data.item.cookie;
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.title = __WEBPACK_IMPORTED_MODULE_3__Model_String__["a" /* String */].Format("{0}", this.exec_file_seq);
    }
    FileHttpHtmlDownFileAddEditModalPage.prototype.get_conn_string = function (remote_conn_id) {
        var _this = this;
        this.global.createLoader("取得連線字串中...");
        this.global.loading.present().then(function () {
            _this.ConnServices.GetConnAsync(remote_conn_id).subscribe(function (data) {
                if (data.DidError === true) {
                    _this.global.dismissLoading();
                    _this.global.showError(data.ErrorMessage);
                }
                else {
                    _this.item.conn_string =
                        data.Model.conn_string;
                    _this.global.dismissLoading();
                }
            }, function (err) {
                _this.global.dismissLoading();
                _this.global.showError("無法連上WebAPI伺服器-" + err.message);
            });
        });
    };
    FileHttpHtmlDownFileAddEditModalPage.prototype.SelectDownType = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.down_type_key,
            code_key: "061|1,061|3,061|6,061|7"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.down_type_key = select_data.code_key;
            _this.item.down_type = select_data.code_desc;
            _this.change_url();
        });
        modal.present();
    };
    FileHttpHtmlDownFileAddEditModalPage.prototype.SelectFileFormat = function () {
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
    FileHttpHtmlDownFileAddEditModalPage.prototype.SelectConn = function () {
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
    FileHttpHtmlDownFileAddEditModalPage.prototype.change_url = function () {
        this.item.url = this.item.conn_string + (this.item.down_type_key === "061|3" ? "" : this.item.function_name);
    };
    FileHttpHtmlDownFileAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    FileHttpHtmlDownFileAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FileHttpHtmlDownFileAddEditModalPage.prototype.Help = function () {
        var _this = this;
        this.global.createLoader();
        this.global.loading.present().then(function () {
            _this.global.showMessage("檔案清單格式說明", _this.help);
        });
    };
    FileHttpHtmlDownFileAddEditModalPage.prototype.openNavParameterColumnPage = function (item) {
        var _this = this;
        this.global.createLoader("連線中...");
        this.global.loading.present().then(function () {
            _this.navCtrl.push("ParameterColumnPage", { item: item });
        });
        this.global.dismissLoading();
    };
    FileHttpHtmlDownFileAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FileHttpHtmlDownFileModalPage");
    };
    FileHttpHtmlDownFileAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: "page-file-http-html-down-file-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\file-http-html-down-file-add-edit-modal\file-http-html-down-file-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n\n    <ion-row>\n\n      <ion-col >\n        <ion-item>\n          <ion-label stacked>匯出序號</ion-label>\n          <ion-input type="number" [disabled]=true name="export_seq" #export_seq="ngModel" [(ngModel)]="item.export_seq"\n            required></ion-input>\n        </ion-item>\n\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>啟用</ion-label>\n          <ion-checkbox [disabled]="CanEditBatch==false" name="is_active" #is_active="ngModel" [(ngModel)]="item.is_active"></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>下載類型</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="down_type_key" #down_type_key="ngModel" [(ngModel)]="item.down_type_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectDownType()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="down_type_key.errors && down_type_key.touched " class="error-message">\n          下載類型不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>下載類型</ion-label>\n          <ion-input type="text" [disabled]=true name="down_type" #down_type="ngModel" [(ngModel)]="item.down_type" required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>參數群組</ion-label>\n          <ion-input type="text" readonly=true [disabled]=true name="parameter_column_group" #parameter_column_group="ngModel" [(ngModel)]="item.parameter_column_group"\n            required maxlength="3">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>檔案名稱</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="filename" #filename="ngModel" [(ngModel)]="item.filename" required\n            maxlength="50"></ion-input>\n        </ion-item>\n        <div *ngIf="filename.errors && filename.touched" class="error-message">\n          檔案名稱不能為空白\n        </div>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>使用cookie</ion-label>\n          <ion-checkbox [disabled]="CanEditBatch==false" name="cookie" #cookie="ngModel" [(ngModel)]="item.cookie"></ion-checkbox>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 *ngIf="item.down_type_key==\'061|6\' || item.down_type_key==\'061|7\'">\n        <ion-item>\n          <ion-label stacked>xpath</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false " name="xpath" #xpath="ngModel"\n            [(ngModel)]="item.xpath" maxlength="255"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-4>\n        <ion-item>\n          <ion-label stacked>執行順序</ion-label>\n          <ion-input type="number" [disabled]=true name="exec_seq" #exec_seq="ngModel" [(ngModel)]="item.exec_seq"\n            required></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-8>\n        <ion-item>\n          <ion-label stacked>連線編號</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="remote_conn_id" #remote_conn_id="ngModel" [(ngModel)]="item.remote_conn_id"\n            required maxlength="20"></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true " icon-right (click)="SelectConn()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="remote_conn_id.errors && remote_conn_id.touched " class="error-message">\n          連線編號不能為空白\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 *ngIf="item.down_type_key!=\'061|3\'">\n        <ion-item>\n          <ion-label stacked>功能別</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false " name="function_name" #function_name="ngModel" (change)="change_url()"\n            [(ngModel)]="item.function_name" maxlength="255"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 *ngIf="item.down_type_key==\'061|3\'">\n        <ion-item>\n          <ion-label stacked>清單路徑</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false " name="function_name" #function_name="ngModel" [(ngModel)]="item.function_name"\n            maxlength="255" require></ion-input>\n          <button ion-button outline item-end icon-right *ngIf="CanEditBatch==true && mode==\'POST\'">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n        <div *ngIf="function_name.errors && function_name.touched" class="error-message">\n          清單路徑不能為空白\n        </div>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>內文格式</ion-label>\n          <ion-input type="text" readonly=true maxlength=10 [disabled]="CanEditBatch==false " name="file_format_key" #file_format_key="ngModel" [(ngModel)]="item.file_format_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectFileFormat()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="file_format_key.errors && file_format_key.touched " class="error-message">\n          內文格式不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>內文格式</ion-label>\n          <ion-input type="text" [disabled]=true name="file_format" #file_format="ngModel" [(ngModel)]="item.file_format" required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12>\n        <ion-item>\n          <ion-label stacked>Url</ion-label>\n          <ion-textarea rows=4 [disabled]=true name="Url" #Url="ngModel" [(ngModel)]="item.url" required></ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditBatch==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n            (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n          <button *ngIf="item.down_type_key==\'061|3\'" small title="檔案清單格式說明" [disabled]="CanEditBatch==false" ion-button color="dark"  icon-left\n          (click)="Help()">\n          <ion-icon name="help"></ion-icon>\n        </button>\n        <button small title="參數群組" ion-button color="dark" icon-left (click)="openNavParameterColumnPage(item)">\n          <ion-icon name="outlet"></ion-icon>\n        </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\file-http-html-down-file-add-edit-modal\file-http-html-down-file-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__components_global_global__["a" /* GlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_conn_services_conn_services__["a" /* ConnServicesProvider */]])
    ], FileHttpHtmlDownFileAddEditModalPage);
    return FileHttpHtmlDownFileAddEditModalPage;
}());

//# sourceMappingURL=file-http-html-down-file-add-edit-modal.js.map

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileHttpHtmlDownFileAddEditModalPageModule", function() { return FileHttpHtmlDownFileAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_http_html_down_file_add_edit_modal__ = __webpack_require__(1430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_file_http_html_down_file_services_file_http_html_down_file_services__ = __webpack_require__(1095);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FileHttpHtmlDownFileAddEditModalPageModule = /** @class */ (function () {
    function FileHttpHtmlDownFileAddEditModalPageModule() {
    }
    FileHttpHtmlDownFileAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_http_html_down_file_add_edit_modal__["a" /* FileHttpHtmlDownFileAddEditModalPage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_file_http_html_down_file_services_file_http_html_down_file_services__["a" /* FileHttpHtmlDownFileServicesProvider */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_http_html_down_file_add_edit_modal__["a" /* FileHttpHtmlDownFileAddEditModalPage */]),
            ],
        })
    ], FileHttpHtmlDownFileAddEditModalPageModule);
    return FileHttpHtmlDownFileAddEditModalPageModule;
}());

//# sourceMappingURL=file-http-html-down-file-add-edit-modal.module.js.map

/***/ }),

/***/ 975:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileHttpHtmlDownFileViewModel; });
var FileHttpHtmlDownFileViewModel = /** @class */ (function () {
    function FileHttpHtmlDownFileViewModel() {
    }
    return FileHttpHtmlDownFileViewModel;
}());

//# sourceMappingURL=FileHttpHtmlDownFileViewModel.js.map

/***/ })

});
//# sourceMappingURL=258.js.map