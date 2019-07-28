webpackJsonp([274],{

/***/ 1009:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelTableServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model_Response_NumberResponse__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Response_DelTableListResponse__ = __webpack_require__(1096);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Model_Response_DelTableResponse__ = __webpack_require__(1097);
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
  Generated class for the DelTableServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DelTableServicesProvider = /** @class */ (function () {
    function DelTableServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "exec_table_seq";
        console.log("Hello ServicesProvider Provider");
    }
    DelTableServicesProvider.prototype.GetMaxExecTableSeqAsync = function (exec_group, min_exec_table_seq, max_exec_table_seq) {
        var sub_url;
        sub_url = "DelTable/get_max_exec_table_seq?exec_group={1}&min_exec_table_seq={2}&max_exec_table_seq={3}";
        sub_url = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format(sub_url, this.ctl, exec_group, min_exec_table_seq, max_exec_table_seq);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_1__Model_Response_NumberResponse__["a" /* NumberResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    DelTableServicesProvider.prototype.GetMaxExecSeqAsync = function (exec_group) {
        var sub_url;
        sub_url = "DelTable/get_max_exec_seq?exec_group={1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format(sub_url, this.ctl, exec_group);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_1__Model_Response_NumberResponse__["a" /* NumberResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    DelTableServicesProvider.prototype.GetSqlAsync = function (exec_table_seq, method) {
        var sub_url;
        sub_url = "DelTable/get_{2}_sql?exec_table_seq={1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format(sub_url, this.ctl, exec_table_seq, method);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    DelTableServicesProvider.prototype.GetListsByAsync = function (exec_group, PageSize, PageNumber, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "DelTable?PageSize={1}&PageNumber={2}&keyword={3}&pexec_group={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, exec_group, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.DelTables = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_DelTableListResponse__["a" /* DelTableListResponse */]({
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
            return _this.DelTables;
        });
    };
    DelTableServicesProvider.prototype.PostPutAsync = function (DelTableViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "DelTable";
        else
            sub_url = "DelTable/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format(sub_url, this.ctl, DelTableViewModel.exec_table_seq);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, DelTableViewModel, mode).map(function (item) {
            _this.DelTable = new __WEBPACK_IMPORTED_MODULE_6__Model_Response_DelTableResponse__["a" /* DelTableResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.DelTable;
        });
    };
    DelTableServicesProvider.prototype.GetDelTableSqlAsync = function (tablefullname, date_columnname, dateformat_columnname, datepart, keep_num, del_method_key) {
        var sub_url;
        sub_url = "DelTable/gen_del_table_sql?tablefullname={1}&date_columnname={2}&dateformat_columnname={3}&datepart={4}&keep_num={5}&del_method_key={6}";
        sub_url = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format(sub_url, this.ctl, tablefullname, date_columnname, dateformat_columnname, datepart, keep_num, del_method_key);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    DelTableServicesProvider.prototype.DeleteAsync = function (exec_table_seq) {
        var sub_url;
        sub_url = "DelTable/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format(sub_url, this.ctl, exec_table_seq);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: ""
            });
        });
    };
    DelTableServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_services__["a" /* ServicesProvider */]])
    ], DelTableServicesProvider);
    return DelTableServicesProvider;
}());

//# sourceMappingURL=del-table-services.js.map

/***/ }),

/***/ 1096:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelTableListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_DelTableViewModel__ = __webpack_require__(944);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ListModelResponse__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_String__ = __webpack_require__(3);
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



var DelTableListResponse = /** @class */ (function (_super) {
    __extends(DelTableListResponse, _super);
    function DelTableListResponse(obj) {
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
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_DelTableViewModel__["a" /* DelTableViewModel */]();
                item.exec_table_seq = data.exec_table_seq;
                item.exec_group = data.exec_group;
                item.tablefullname = data.tablefullname;
                item.combo_tablefullname = (data && data.combo_tablefullname) || null;
                item.date_columnname = data.date_columnname;
                item.dateformat_columnname = data.dateformat_columnname;
                item.datepart = data.datepart;
                item.keep_num = data.keep_num;
                item.del_method_key = data.del_method_key;
                item.exec_seq = data.exec_seq;
                item.is_active = data.is_active;
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
                // <ion-option value="yyyy">年</ion-option>
                // <ion-option value="qq">季</ion-option>
                // <ion-option value="mm">月</ion-option>
                // <ion-option value="d">日</ion-option>
                // <ion-option value="wk">週(1-52)</ion-option>
                // <ion-option value="dw">星期(1-7)</ion-option>
                // <ion-option value="hh">小時(0-23)</ion-option>
                // <ion-option value="n">分</ion-option>
                // <ion-option value="ss">秒</ion-option>
                switch (data.datepart) {
                    case "yyyy":
                        item.datepart_desc = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format("{0}{1}", data.keep_num, "年");
                        break;
                    case "qq":
                        item.datepart_desc = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format("{0}{1}", data.keep_num, "季");
                        break;
                    case "mm":
                        item.datepart_desc = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format("{0}{1}", data.keep_num, "月");
                        break;
                    case "d":
                        item.datepart_desc = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format("{0}{1}", data.keep_num, "日");
                        break;
                    case "wk":
                        item.datepart_desc = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format("{0}{1}", data.keep_num, "週(1-52)");
                        break;
                    case "dw":
                        item.datepart_desc = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format("{0}{1}", data.keep_num, "星期(1-7)");
                        break;
                    case "hh":
                        data.datepart_desc = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format("{0}{1}", data.keep_num, "小時(0-23)");
                        break;
                    case "n":
                        item.datepart_desc = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format("{0}{1}", data.keep_num, "分");
                        break;
                    case "ss":
                        item.datepart_desc = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format("{0}{1}", data.keep_num, "秒");
                        break;
                    default:
                        item.datepart_desc = __WEBPACK_IMPORTED_MODULE_2__Model_String__["a" /* String */].Format("{0}{1}", data.keep_num, "月");
                }
                item.del_method = data.del_method;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return DelTableListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=DelTableListResponse.js.map

/***/ }),

/***/ 1097:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelTableResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_DelTableViewModel__ = __webpack_require__(944);
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


var DelTableResponse = /** @class */ (function (_super) {
    __extends(DelTableResponse, _super);
    function DelTableResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_DelTableViewModel__["a" /* DelTableViewModel */]();
            _this.Model.exec_table_seq = obj.Model.exec_table_seq;
            _this.Model.exec_group = obj.Model.exec_group;
            _this.Model.tablefullname = obj.Model.tablefullname;
            _this.Model.combo_tablefullname = obj && obj.Model.combo_tablefullname || null;
            _this.Model.date_columnname = obj.Model.date_columnname;
            _this.Model.dateformat_columnname = obj.Model.dateformat_columnname;
            _this.Model.datepart = obj.Model.datepart;
            _this.Model.keep_num = obj.Model.keep_num;
            _this.Model.del_method_key = obj.Model.del_method_key;
            _this.Model.exec_seq = obj.Model.exec_seq;
            _this.Model.is_active = obj.Model.is_active;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
            _this.Model.del_method = obj.Model.del_method;
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
    return DelTableResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=DelTableResponse.js.map

/***/ }),

/***/ 1317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelTableAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_del_table_services_del_table_services__ = __webpack_require__(1009);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_DelTableViewModel__ = __webpack_require__(944);
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
 * Generated class for the DelTableModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DelTableAddEditModalPage = /** @class */ (function () {
    function DelTableAddEditModalPage(navCtrl, navParams, viewCtrl, DelTableServices, loadingCtrl, global, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.DelTableServices = DelTableServices;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.modalCtrl = modalCtrl;
        this.min_exec_table_seq = 100000;
        this.max_exec_table_seq = this.min_exec_table_seq + 9999;
        this.range_exec_table_seq = __WEBPACK_IMPORTED_MODULE_4__Model_String__["a" /* String */].Format("{0}-{1}", this.min_exec_table_seq, this.max_exec_table_seq);
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.item = new __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_DelTableViewModel__["a" /* DelTableViewModel */]();
        this.item.exec_table_seq = navParams.data.item.exec_table_seq;
        this.item.exec_group = navParams.data.item.exec_group;
        this.item.tablefullname = navParams.data.item.tablefullname;
        this.item.date_columnname = navParams.data.item.date_columnname;
        this.item.dateformat_columnname = navParams.data.item.dateformat_columnname;
        this.item.datepart = navParams.data.item.datepart;
        this.item.keep_num = navParams.data.item.keep_num;
        this.item.del_method_key = navParams.data.item.del_method_key;
        this.item.exec_seq = navParams.data.item.exec_seq;
        this.item.is_active = navParams.data.item.is_active;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.item.del_method = navParams.data.item.del_method;
        if (this.change_mode === "c") {
            this.get_max_exec_table_seq();
            this.get_max_exec_seq();
        }
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.title = "刪除資料表";
    }
    DelTableAddEditModalPage.prototype.SelectImportMode = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.del_method_key,
            code_type: "027"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.del_method_key = select_data.code_key;
            _this.item.del_method = select_data.code_desc;
        });
        modal.present();
    };
    DelTableAddEditModalPage.prototype.SelectTable = function () {
        var _this = this;
        var modal = this.modalCtrl.create("TableExtSelectModalPage", {
            select_item: this.item.tablefullname
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.tablefullname = select_data.tablefullname;
        });
        modal.present();
    };
    DelTableAddEditModalPage.prototype.get_max_exec_table_seq = function () {
        var _this = this;
        this.global.createLoader("取得最大值中...");
        this.global.loading.present().then(function () {
            _this.DelTableServices.GetMaxExecTableSeqAsync(_this.item.exec_group, _this.min_exec_table_seq, _this.max_exec_table_seq).subscribe(function (data) {
                if (data.DidError === true) {
                    _this.global.dismissLoading();
                    _this.global.showError(data.ErrorMessage);
                }
                else {
                    _this.item.exec_table_seq = data.Model;
                    _this.global.dismissLoading();
                }
            }, function (err) {
                _this.global.dismissLoading();
                _this.global.showError("無法連上WebAPI伺服器-" + err.message);
            });
        });
    };
    DelTableAddEditModalPage.prototype.get_max_exec_seq = function () {
        var _this = this;
        this.global.createLoader("取得最大值中...");
        this.global.loading.present().then(function () {
            _this.DelTableServices.GetMaxExecSeqAsync(_this.item.exec_group).subscribe(function (data) {
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
    DelTableAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    DelTableAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    DelTableAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad DelTableModalPage");
    };
    DelTableAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: "page-Del-table-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\del-table-add-edit-modal\Del-table-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n\n    <ion-row>\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>轉檔群組</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="exec_group" #exec_group="ngModel" [(ngModel)]="item.exec_group"\n            required maxlength="30"></ion-input>\n        </ion-item>\n        <div *ngIf="exec_group.errors && exec_group.touched" class="error-message">\n          轉檔群組不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>轉檔序號:{{range_exec_table_seq}}</ion-label>\n          <ion-input type="number" [disabled]="CanEditBatch==false || mode==\'PUT\'" name="exec_table_seq" #exec_table_seq="ngModel" [(ngModel)]="item.exec_table_seq"\n            required></ion-input>\n          <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'" icon-right (click)="get_max_exec_table_seq()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n        <div *ngIf="exec_table_seq.errors && exec_table_seq.touched" class="error-message">\n          轉檔序號不能為空白\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n      <ion-row>\n\n        <ion-col>\n          <ion-item>\n            <ion-label stacked>資料表全名</ion-label>\n            <ion-input type="text"  [disabled]="CanEditBatch==false" name="tablefullname" #tablefullname="ngModel" [(ngModel)]="item.tablefullname"\n              required maxlength="80"></ion-input>\n            <button ion-button outline item-end icon-right *ngIf="CanEditBatch==true " (click)="SelectTable()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-item>\n          <div *ngIf="tablefullname.errors && tablefullname.touched" class="error-message">\n            資料表全名不能為空白\n          </div>\n\n        </ion-col>\n      </ion-row>\n\n\n\n\n\n\n\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>刪除方法</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="del_method_key" #del_method_key="ngModel" [(ngModel)]="item.del_method_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectImportMode()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="del_method_key.errors && del_method_key.touched " class="error-message">\n          刪除方法不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>刪除方法</ion-label>\n          <ion-input type="text" maxlength=10  [disabled]=true name="del_method" #del_method="ngModel" [(ngModel)]="item.del_method"\n            required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row  >\n        <ion-col col-4>\n            <ion-item>\n              <ion-label stacked>執行順序</ion-label>\n              <ion-input type="number" [disabled]="CanEditBatch==false" name="exec_seq" #exec_seq="ngModel" [(ngModel)]="item.exec_seq"\n                required></ion-input>\n              <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="get_max_exec_seq()">\n                <ion-icon name="arrow-dropdown"></ion-icon>\n              </button>\n            </ion-item>\n            <div *ngIf="exec_seq.errors && exec_seq.touched" class="error-message">\n              執行順序不能為空白\n            </div>\n          </ion-col>\n        <ion-col col-8>\n          <ion-item>\n            <ion-label stacked>日期資料欄位名稱</ion-label>\n            <ion-input type="text" maxlength="50" [disabled]="CanEditBatch==false" name="date_columnname" #date_columnname="ngModel" [(ngModel)]="item.date_columnname"\n            ></ion-input>\n          </ion-item>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label>日期顯示格式</ion-label>\n            <ion-select [disabled]="CanEditSch==false" name="dateformat_columnname" [(ngModel)]="item.dateformat_columnname">\n              <ion-option value="data_date">1911-01-01</ion-option>\n              <ion-option value="data_date">1911/01/01</ion-option>\n              <ion-option value="year_month_day">19110101</ion-option>\n              <ion-option value="year_month">191101</ion-option>\n              <ion-option value="year_int">1911</ion-option>\n              <ion-option value=day_begin>1911-01-01 00:00:00.000</ion-option>\n              <ion-option value=day_end>1911-01-01 23:59:59.000</ion-option>\n            </ion-select>\n\n          </ion-item>\n        </ion-col>\n\n        <ion-col>\n          <ion-item>\n            <ion-label>啟用</ion-label>\n            <ion-checkbox name="is_active" [disabled]="CanEditSch==false" [(ngModel)]="item.is_active"></ion-checkbox>\n          </ion-item>\n\n        </ion-col>\n      </ion-row>\n<ion-row>\n        <ion-col col-12 col-sm-12>\n          <ion-item>\n            <ion-label item-start>保留</ion-label>\n            <ion-input  item-start type="number" [disabled]="CanEditSch==false" name="keep_num" #keep_num="ngModel" [(ngModel)]="item.keep_num"\n              required></ion-input>\n              <ion-select item-start name="datepart" [disabled]="CanEditSch==false" [(ngModel)]="item.datepart">\n                  <ion-option value="yyyy">年</ion-option>\n                  <ion-option value="qq">季</ion-option>\n                  <ion-option value="mm">月</ion-option>\n                  <ion-option value="d">日</ion-option>\n                  <ion-option value="wk">週(1-52)</ion-option>\n                  <ion-option value="dw">星期(1-7)</ion-option>\n                  <ion-option value="hh">小時(0-23)</ion-option>\n                  <ion-option value="n">分</ion-option>\n                  <ion-option value="ss">秒</ion-option>\n                </ion-select>\n          </ion-item>\n          <div *ngIf="keep_num.errors && keep_num.touched" class="error-message">\n            保留值不能為空白\n          </div>\n        </ion-col>\n\n\n      </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditBatch==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n            (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\del-table-add-edit-modal\Del-table-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_del_table_services_del_table_services__["a" /* DelTableServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__components_global_global__["a" /* GlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */]])
    ], DelTableAddEditModalPage);
    return DelTableAddEditModalPage;
}());

//# sourceMappingURL=del-table-add-edit-modal.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DelTableAddEditModalPageModule", function() { return DelTableAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__del_table_add_edit_modal__ = __webpack_require__(1317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_del_table_services_del_table_services__ = __webpack_require__(1009);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var DelTableAddEditModalPageModule = /** @class */ (function () {
    function DelTableAddEditModalPageModule() {
    }
    DelTableAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__del_table_add_edit_modal__["a" /* DelTableAddEditModalPage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_del_table_services_del_table_services__["a" /* DelTableServicesProvider */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__del_table_add_edit_modal__["a" /* DelTableAddEditModalPage */]),
            ],
        })
    ], DelTableAddEditModalPageModule);
    return DelTableAddEditModalPageModule;
}());

//# sourceMappingURL=del-table-add-edit-modal.module.js.map

/***/ }),

/***/ 944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DelTableViewModel; });
var DelTableViewModel = /** @class */ (function () {
    function DelTableViewModel() {
    }
    return DelTableViewModel;
}());

//# sourceMappingURL=DelTableViewModel.js.map

/***/ })

});
//# sourceMappingURL=274.js.map