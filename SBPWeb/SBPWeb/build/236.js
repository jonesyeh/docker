webpackJsonp([236],{

/***/ 1078:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_SpListResponse__ = __webpack_require__(1188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_SpResponse__ = __webpack_require__(1189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__table_set_services_table_set_services__ = __webpack_require__(131);
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
  Generated class for the SpServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SpServicesProvider = /** @class */ (function (_super) {
    __extends(SpServicesProvider, _super);
    function SpServicesProvider(Services) {
        var _this = _super.call(this, Services) || this;
        _this.Services = Services;
        _this.ctl = "Sp";
        console.log("Hello SpServiceProvider Provider");
        return _this;
    }
    SpServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "Sp?PageSize={1}&PageNumber={2}&keyword={3}&order_type={4}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sps = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_SpListResponse__["a" /* SpListResponse */]({
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
            return _this.Sps;
        });
    };
    SpServicesProvider.prototype.PostPutAsync = function (SpViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "Sp";
        else
            sub_url = "Sp/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, SpViewModel.exec_table_seq);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, SpViewModel, mode).map(function (item) {
            _this.Sp = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_SpResponse__["a" /* SpResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sp;
        });
    };
    SpServicesProvider.prototype.ExecuteAsync = function (StringViewModel) {
        var _this = this;
        var sub_url;
        sub_url = "Sp/Execute";
        return this.Services.PostAsync(sub_url, this.ctl, true, StringViewModel).map(function (item) {
            _this.Sp = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_SpResponse__["a" /* SpResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sp;
        });
    };
    SpServicesProvider.prototype.DeleteAsync = function (exec_table_seq) {
        var _this = this;
        var sub_url;
        sub_url = "Sp/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, exec_table_seq);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Sp = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_SpResponse__["a" /* SpResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Sp;
        });
    };
    SpServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], SpServicesProvider);
    return SpServicesProvider;
}(__WEBPACK_IMPORTED_MODULE_5__table_set_services_table_set_services__["a" /* TableSetServicesProvider */]));

//# sourceMappingURL=sp-services.js.map

/***/ }),

/***/ 1188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_SpViewModel__ = __webpack_require__(991);
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


var SpListResponse = /** @class */ (function (_super) {
    __extends(SpListResponse, _super);
    function SpListResponse(obj) {
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
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_SpViewModel__["a" /* SpViewModel */]();
                item.exec_table_seq = data.exec_table_seq;
                item.exec_group = data.exec_group;
                item.src_schema = data.src_schema;
                item.src_tablename = data.src_tablename;
                item.schemaname = data.schemaname;
                item.tablename = data.tablename;
                item.exec_seq = data.exec_seq;
                item.is_active = data.is_active;
                item.tran_flag = data.tran_flag == null ? false : data.tran_flag;
                item.db_conn_id = data.db_conn_id;
                item.memo = (data && data.memo) || null;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                item.db_conn_string = (data && data.db_conn_string) || null;
                item.is_active_desc = data.is_active_desc;
                switch (data.is_active) {
                    case false: {
                        item.is_active_color = "danger";
                        item.is_active_color_right = "danger-right";
                        break;
                    }
                    default:
                        {
                            item.is_active_color = "active";
                            item.is_active_color_right = "active-right";
                        }
                }
                if (data.src_schema > "" && data.src_tablename > "")
                    item.src_tablefullname = item.src_schema + "." + item.src_tablename;
                if (data.schemaname > "" && data.tablename > "")
                    item.tablefullname = item.schemaname + "." + item.tablename;
                item.sp_name = data.sp_name;
                item.sp_parameter = data.sp_parameter;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return SpListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=SpListResponse.js.map

/***/ }),

/***/ 1189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_SpViewModel__ = __webpack_require__(991);
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


var SpResponse = /** @class */ (function (_super) {
    __extends(SpResponse, _super);
    function SpResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_SpViewModel__["a" /* SpViewModel */]();
            _this.Model.exec_table_seq = obj.Model.exec_table_seq;
            _this.Model.exec_group = obj.Model.exec_group;
            _this.Model.src_schema = (obj && obj.Model.src_schema) || null;
            _this.Model.src_tablename = (obj && obj.Model.src_tablename) || null;
            _this.Model.schemaname = (obj && obj.Model.schemaname) || null;
            _this.Model.tablename = obj.Model.tablename;
            _this.Model.exec_seq = obj.Model.exec_seq;
            _this.Model.is_active = obj.Model.is_active;
            _this.Model.tran_flag = obj.Model.tran_flag == null ? false : obj.Model.tran_flag;
            _this.Model.db_conn_id = obj.Model.db_conn_id;
            _this.Model.memo = (obj && obj.Model.memo) || null;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
            _this.Model.db_conn_string = (obj.Model && obj.Model.db_conn_string) || null;
            _this.Model.is_active_desc = obj.Model.is_active_desc;
            if (obj.Model.src_schema > "" && obj.Model.src_tablename > "")
                _this.Model.src_tablefullname = obj.Model.src_schema + "." + obj.Model.src_tablename;
            if (obj.Model.schemaname > "" && obj.Model.tablename > "")
                _this.Model.tablefullname = obj.Model.schemaname + "." + obj.Model.tablename;
            switch (obj.Model.is_active) {
                case false: {
                    _this.Model.is_active_color = "danger";
                    break;
                }
                default:
                    _this.Model.is_active_color = "active";
            }
            _this.Model.sp_name = obj.Model.sp_name;
            _this.Model.sp_parameter = obj.Model.sp_parameter;
        }
        return _this;
    }
    return SpResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=SpResponse.js.map

/***/ }),

/***/ 1637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_sp_services_sp_services__ = __webpack_require__(1078);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_SpViewModel__ = __webpack_require__(991);
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
 * Generated class for the SpModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SpAddEditModalPage = /** @class */ (function () {
    function SpAddEditModalPage(navCtrl, navParams, viewCtrl, SpServices, loadingCtrl, global, modalCtrl, ConnServices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.SpServices = SpServices;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.modalCtrl = modalCtrl;
        this.ConnServices = ConnServices;
        this.min_exec_table_seq = 10000;
        this.max_exec_table_seq = this.min_exec_table_seq + 9999;
        this.sql_help = "\n  \u8B8A\u6578\u8AAA\u660E\uFF1A\n  {JOB01},{JOB02},{JOB03}=\u4F5C\u696D\u8FF4\u5708\u53C3\u6578,\n  ";
        this.range_exec_table_seq = __WEBPACK_IMPORTED_MODULE_4__Model_String__["a" /* String */].Format("{0}-{1}", this.min_exec_table_seq, this.max_exec_table_seq);
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.item = new __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_SpViewModel__["a" /* SpViewModel */]();
        this.item.exec_table_seq = navParams.data.item.exec_table_seq;
        this.item.exec_group = navParams.data.item.exec_group;
        this.item.src_schema = navParams.data.item.src_schema;
        this.item.src_tablename = navParams.data.item.src_tablename;
        this.item.schemaname = navParams.data.item.schemaname;
        this.item.tablename = navParams.data.item.tablename;
        this.item.exec_seq = navParams.data.item.exec_seq;
        this.item.is_active = navParams.data.item.is_active;
        this.item.tran_flag = navParams.data.item.tran_flag;
        this.item.db_conn_id = navParams.data.item.db_conn_id;
        this.item.memo = navParams.data.item.memo;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.item.sp_name = navParams.data.item.sp_name;
        this.item.sp_parameter = navParams.data.item.sp_parameter;
        this.item.db_conn_string = navParams.data.item.db_conn_string;
        if (this.change_mode === "n") {
            this.get_conn_string("localdb");
        }
        if (this.change_mode === "c") {
            this.get_max_exec_table_seq();
            this.get_max_exec_seq();
        }
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.title = "執行SP工作";
    }
    SpAddEditModalPage.prototype.get_conn_string = function (remote_conn_id) {
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
    SpAddEditModalPage.prototype.SelectConn = function () {
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
    SpAddEditModalPage.prototype.SelectSrcTable = function () {
        var _this = this;
        var modal = this.modalCtrl.create("TableExtSelectModalPage", {
            select_item: this.item.tablefullname
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.src_schema = select_data.schemaname;
            _this.item.src_tablename = select_data.tablename;
            _this.item.src_tablefullname = select_data.tablefullname;
        });
        modal.present();
    };
    SpAddEditModalPage.prototype.SelectTable = function () {
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
    SpAddEditModalPage.prototype.get_max_exec_table_seq = function () {
        var _this = this;
        this.global.createLoader("取得最大值中...");
        this.global.loading.present().then(function () {
            _this.SpServices.GetMaxExecTableSeqAsync(_this.item.exec_group, _this.min_exec_table_seq, _this.max_exec_table_seq).subscribe(function (data) {
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
    SpAddEditModalPage.prototype.get_max_exec_seq = function () {
        var _this = this;
        this.global.createLoader("取得最大值中...");
        this.global.loading.present().then(function () {
            _this.SpServices.GetMaxExecSeqAsync(_this.item.exec_group).subscribe(function (data) {
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
    SpAddEditModalPage.prototype.Help = function () {
        var _this = this;
        this.global.createLoader();
        this.global.loading.present().then(function () {
            _this.global.showMessage("SP參數變數說明", _this.sql_help);
        });
    };
    SpAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    SpAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    SpAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SpModalPage");
    };
    SpAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: "page-sp-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\sp-add-edit-modal\sp-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n\n    <ion-row>\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>轉檔群組</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="exec_group" #exec_group="ngModel" [(ngModel)]="item.exec_group"\n            required maxlength="30"></ion-input>\n        </ion-item>\n        <div *ngIf="exec_group.errors && exec_group.touched" class="error-message">\n          轉檔群組不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>轉檔序號:{{range_exec_table_seq}}</ion-label>\n          <ion-input type="number" [disabled]="CanEditBatch==false || mode==\'PUT\'" name="exec_table_seq" #exec_table_seq="ngModel" [(ngModel)]="item.exec_table_seq"\n            required></ion-input>\n          <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'" icon-right (click)="get_max_exec_table_seq()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n        <div *ngIf="exec_table_seq.errors && exec_table_seq.touched" class="error-message">\n          轉檔序號不能為空白\n        </div>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-12 col-sm-4>\n          <ion-item>\n            <ion-label stacked>來源結構描述</ion-label>\n            <ion-input type="text"  [disabled]="CanEditBatch==false " name="src_schema" #src_schema="ngModel" [(ngModel)]="item.src_schema"\n              required maxlength="30"></ion-input>\n          </ion-item>\n\n        </ion-col>\n        <ion-col col-12 col-sm-8>\n          <ion-item>\n            <ion-label stacked>來源資料表名稱</ion-label>\n            <ion-input type="text"  [disabled]="CanEditBatch==false" name="src_tablename" #src_tablename="ngModel" [(ngModel)]="item.src_tablename"\n              required maxlength="50"></ion-input>\n            <button ion-button outline item-end icon-right *ngIf="CanEditBatch==true " (click)="SelectSrcTable()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-item>\n          <div *ngIf="src_tablename.errors && src_tablename.touched" class="error-message">\n            來源資料表名稱不能為空白\n          </div>\n\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-12 col-sm-4>\n          <ion-item>\n            <ion-label stacked>目的結構描述</ion-label>\n            <ion-input type="text" readonly=true [disabled]="CanEditBatch==false " name="schemaname" #schemaname="ngModel" [(ngModel)]="item.schemaname"\n              required maxlength="30"></ion-input>\n          </ion-item>\n          <div *ngIf="schemaname.errors && schemaname.touched" class="error-message">\n            目的結構描述不能為空白\n          </div>\n        </ion-col>\n        <ion-col col-12 col-sm-8>\n          <ion-item>\n            <ion-label stacked>目的資料表名稱</ion-label>\n            <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="tablename" #tablename="ngModel" [(ngModel)]="item.tablename"\n              required maxlength="50"></ion-input>\n            <button ion-button outline item-end icon-right *ngIf="CanEditBatch==true " (click)="SelectTable()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-item>\n          <div *ngIf="tablename.errors && tablename.touched" class="error-message">\n            目的資料表名稱不能為空白\n          </div>\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-6>\n              <ion-item>\n                <ion-label stacked>執行順序</ion-label>\n                <ion-input type="number" [disabled]="CanEditBatch==false" name="exec_seq" #exec_seq="ngModel" [(ngModel)]="item.exec_seq"\n                  required></ion-input>\n                <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="get_max_exec_seq()">\n                  <ion-icon name="arrow-dropdown"></ion-icon>\n                </button>\n              </ion-item>\n              <div *ngIf="exec_seq.errors && exec_seq.touched" class="error-message">\n                執行順序不能為空白\n              </div>\n            </ion-col>\n            <ion-col col-6>\n                <ion-item>\n                  <ion-label stacked>連線編號</ion-label>\n                  <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="db_conn_id" #db_conn_id="ngModel" [(ngModel)]="item.db_conn_id"\n                    required maxlength="20"></ion-input>\n\n                  <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectConn()">\n                    <ion-icon name="arrow-dropdown"></ion-icon>\n                  </button>\n                </ion-item>\n\n                <div *ngIf="db_conn_id.errors && db_conn_id.touched " class="error-message">\n                  連線編號不能為空白\n                </div>\n              </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label stacked>連線字串</ion-label>\n              <ion-textarea rows=4 [disabled]=true name="db_conn_string" #db_conn_string="ngModel" [(ngModel)]="item.db_conn_string" required></ion-textarea>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n\n    <ion-row>\n\n\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>啟用</ion-label>\n          <ion-checkbox [disabled]="CanEditBatch==false" name="is_active" #is_active="ngModel" [(ngModel)]="item.is_active"></ion-checkbox>\n        </ion-item>\n\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>啟用交易</ion-label>\n          <ion-checkbox [disabled]="CanEditBatch==false" name="tran_flag" #tran_flag="ngModel" [(ngModel)]="item.tran_flag"></ion-checkbox>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>Store Procedure</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="sp_name" #sp_name="ngModel" [(ngModel)]="item.sp_name"\n            required maxlength="255"></ion-input>\n        </ion-item>\n\n        <div *ngIf="sp_name.errors && sp_name.touched " class="error-message">\n          Store Procedure不能為空白\n        </div>\n      </ion-col>\n      <ion-col  col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>參數</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="sp_parameter" #sp_parameter="ngModel" [(ngModel)]="item.sp_parameter"\n             maxlength="255"></ion-input>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label stacked>備註</ion-label>\n            <ion-textarea [disabled]="CanEditBatch==false" name="memo" #memo="ngModel" [(ngModel)]="item.memo" maxlength="255"  required></ion-textarea>\n          </ion-item>\n          <div *ngIf="memo.errors && memo.touched " class="error-message">\n              備註不能為空白\n          </div>\n        </ion-col>\n      </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditBatch==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n            (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n          <button small title="參數變數說明" [disabled]="CanEditBatch==false" ion-button color="dark"  icon-left\n          (click)="Help()">\n          <ion-icon name="help"></ion-icon>\n        </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\sp-add-edit-modal\sp-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_sp_services_sp_services__["a" /* SpServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__components_global_global__["a" /* GlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_conn_services_conn_services__["a" /* ConnServicesProvider */]])
    ], SpAddEditModalPage);
    return SpAddEditModalPage;
}());

//# sourceMappingURL=sp-add-edit-modal.js.map

/***/ }),

/***/ 725:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpAddEditModalPageModule", function() { return SpAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sp_add_edit_modal__ = __webpack_require__(1637);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_sp_services_sp_services__ = __webpack_require__(1078);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SpAddEditModalPageModule = /** @class */ (function () {
    function SpAddEditModalPageModule() {
    }
    SpAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sp_add_edit_modal__["a" /* SpAddEditModalPage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_sp_services_sp_services__["a" /* SpServicesProvider */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sp_add_edit_modal__["a" /* SpAddEditModalPage */]),
            ],
        })
    ], SpAddEditModalPageModule);
    return SpAddEditModalPageModule;
}());

//# sourceMappingURL=sp-add-edit-modal.module.js.map

/***/ }),

/***/ 991:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpViewModel; });
var SpViewModel = /** @class */ (function () {
    function SpViewModel() {
    }
    return SpViewModel;
}());

//# sourceMappingURL=SpViewModel.js.map

/***/ })

});
//# sourceMappingURL=236.js.map