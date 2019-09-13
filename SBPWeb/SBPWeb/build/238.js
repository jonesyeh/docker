webpackJsonp([238],{

/***/ 1003:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Table2TableViewModel; });
var Table2TableViewModel = /** @class */ (function () {
    function Table2TableViewModel() {
    }
    return Table2TableViewModel;
}());

//# sourceMappingURL=Table2TableViewModel.js.map

/***/ }),

/***/ 1090:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Table2TableServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_Table2TableListResponse__ = __webpack_require__(1202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_Table2TableResponse__ = __webpack_require__(1203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__table_set_services_table_set_services__ = __webpack_require__(131);
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
  Generated class for the Table2TableServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var Table2TableServicesProvider = /** @class */ (function (_super) {
    __extends(Table2TableServicesProvider, _super);
    function Table2TableServicesProvider(Services) {
        var _this = _super.call(this, Services) || this;
        _this.Services = Services;
        _this.ctl = "Table2TableExt";
        console.log("Hello Table2TableServiceProvider Provider");
        return _this;
    }
    Table2TableServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "Table2Table?PageSize={1}&PageNumber={2}&keyword={3}&order_type={4}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.Table2Tables = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_Table2TableListResponse__["a" /* Table2TableListResponse */]({
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
            return _this.Table2Tables;
        });
    };
    Table2TableServicesProvider.prototype.PostPutAsync = function (Table2TableViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "Table2Table";
        else
            sub_url = "Table2Table/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, Table2TableViewModel.exec_table_seq);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, Table2TableViewModel, mode).map(function (item) {
            _this.Table2Table = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_Table2TableResponse__["a" /* Table2TableResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Table2Table;
        });
    };
    Table2TableServicesProvider.prototype.GetMergeSqlAsync = function (src_schemaname, src_tablename, where_condition, schemaname, tablename, import_mode_key, last_data_type_key, last_data_column_name, exec_group) {
        var sub_url;
        sub_url = "Table2Table/get_merge_sql?src_schemaname={1}&src_tablename={2}&where_condition={3}&schemaname={4}&tablename={5}&import_mode_key={6}&last_data_type_key={7}&last_data_column_name={8}&exec_group={9}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, src_schemaname, src_tablename, where_condition, schemaname, tablename, import_mode_key, last_data_type_key, last_data_column_name, exec_group);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    Table2TableServicesProvider.prototype.DeleteAsync = function (exec_table_seq) {
        var sub_url;
        sub_url = "Table2Table/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_0__Model_String__["a" /* String */].Format(sub_url, this.ctl, exec_table_seq);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: ""
            });
        });
    };
    Table2TableServicesProvider.prototype.ExecuteAsync = function (StringViewModel) {
        var _this = this;
        var sub_url;
        sub_url = "Table2Table/Execute";
        return this.Services.PostAsync(sub_url, this.ctl, true, StringViewModel).map(function (item) {
            _this.Table2Table = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_Table2TableResponse__["a" /* Table2TableResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.Table2Table;
        });
    };
    Table2TableServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_services__["a" /* ServicesProvider */]])
    ], Table2TableServicesProvider);
    return Table2TableServicesProvider;
}(__WEBPACK_IMPORTED_MODULE_6__table_set_services_table_set_services__["a" /* TableSetServicesProvider */]));

//# sourceMappingURL=table2-table-services.js.map

/***/ }),

/***/ 1202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Table2TableListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_Table2TableViewModel__ = __webpack_require__(1003);
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


var Table2TableListResponse = /** @class */ (function (_super) {
    __extends(Table2TableListResponse, _super);
    function Table2TableListResponse(obj) {
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
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_Table2TableViewModel__["a" /* Table2TableViewModel */]();
                item.exec_table_seq = data.exec_table_seq;
                item.exec_group = data.exec_group;
                item.src_schema = (data && data.src_schema) || null;
                item.src_tablename = (data && data.src_tablename) || null;
                item.schemaname = (data && data.schemaname) || null;
                item.tablename = data.tablename;
                item.import_mode_key = data.import_mode_key;
                item.last_data_type_key = (data && data.last_data_type_key) || null;
                item.last_data_column_name =
                    (data && data.last_data_column_name) || null;
                item.exec_seq = data.exec_seq;
                item.is_active = data.is_active;
                item.where_condition = (data && data.where_condition) || null;
                item.tran_flag = (data && data.tran_flag) || null;
                item.db_conn_id = (data && data.db_conn_id) || null;
                item.memo = (data && data.memo) || null;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                item.import_mode = data.import_mode;
                item.last_data_type = (data && data.last_data_type) || null;
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
                item.src_tablefullname = item.src_schema + "." + item.src_tablename;
                item.tablefullname = item.schemaname + "." + item.tablename;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return Table2TableListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=Table2TableListResponse.js.map

/***/ }),

/***/ 1203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Table2TableResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_Table2TableViewModel__ = __webpack_require__(1003);
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


var Table2TableResponse = /** @class */ (function (_super) {
    __extends(Table2TableResponse, _super);
    function Table2TableResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_Table2TableViewModel__["a" /* Table2TableViewModel */]();
            _this.Model.exec_table_seq = obj.Model.exec_table_seq;
            _this.Model.exec_group = obj.Model.exec_group;
            _this.Model.src_schema = obj && obj.Model.src_schema || null;
            _this.Model.src_tablename = obj && obj.Model.src_tablename || null;
            _this.Model.schemaname = obj && obj.Model.schemaname || null;
            _this.Model.tablename = obj.Model.tablename;
            _this.Model.import_mode_key = obj.Model.import_mode_key;
            _this.Model.last_data_type_key = obj && obj.Model.last_data_type_key || null;
            _this.Model.last_data_column_name = obj && obj.Model.last_data_column_name || null;
            _this.Model.exec_seq = obj.Model.exec_seq;
            _this.Model.is_active = obj.Model.is_active;
            _this.Model.where_condition = obj && obj.Model.where_condition || null;
            _this.Model.tran_flag = obj && obj.Model.tran_flag || null;
            _this.Model.db_conn_id = obj && obj.Model.db_conn_id || null;
            _this.Model.memo = obj && obj.Model.memo || null;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
            _this.Model.import_mode = obj.Model.import_mode;
            _this.Model.last_data_type = (obj.Model && obj.Model.last_data_type) || null;
            _this.Model.db_conn_string = (obj.Model && obj.Model.db_conn_string) || null;
            _this.Model.is_active_desc = obj.Model.is_active_desc;
            _this.Model.src_tablefullname = obj.Model.src_schema + "." + obj.Model.src_tablename;
            _this.Model.tablefullname = obj.Model.schemaname + "." + obj.Model.tablename;
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
    return Table2TableResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=Table2TableResponse.js.map

/***/ }),

/***/ 1685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Table2TableAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_table2_table_services_table2_table_services__ = __webpack_require__(1090);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_Table2TableViewModel__ = __webpack_require__(1003);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_conn_services_conn_services__ = __webpack_require__(267);
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
 * Generated class for the Table2TableModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Table2TableAddEditModalPage = /** @class */ (function () {
    function Table2TableAddEditModalPage(navCtrl, navParams, viewCtrl, Table2TableServices, loadingCtrl, global, modalCtrl, ConnServices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.Table2TableServices = Table2TableServices;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.modalCtrl = modalCtrl;
        this.ConnServices = ConnServices;
        this.min_exec_table_seq = 0;
        this.max_exec_table_seq = this.min_exec_table_seq + 9999;
        this.range_exec_table_seq = __WEBPACK_IMPORTED_MODULE_4__Model_String__["a" /* String */].Format("{0}-{1}", this.min_exec_table_seq, this.max_exec_table_seq);
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.item = new __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_Table2TableViewModel__["a" /* Table2TableViewModel */]();
        this.item.exec_table_seq = navParams.data.item.exec_table_seq;
        this.item.exec_group = navParams.data.item.exec_group;
        this.item.src_schema = navParams.data.item.src_schema;
        this.item.src_tablename = navParams.data.item.src_tablename;
        this.item.schemaname = navParams.data.item.schemaname;
        this.item.tablename = navParams.data.item.tablename;
        this.item.import_mode_key = navParams.data.item.import_mode_key;
        this.item.last_data_type_key = navParams.data.item.last_data_type_key;
        this.item.last_data_column_name = navParams.data.item.last_data_column_name;
        this.item.exec_seq = navParams.data.item.exec_seq;
        this.item.is_active = navParams.data.item.is_active;
        this.item.where_condition = navParams.data.item.where_condition;
        this.item.tran_flag = navParams.data.item.tran_flag;
        this.item.db_conn_id = navParams.data.item.db_conn_id;
        this.item.memo = navParams.data.item.memo;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.item.import_mode = navParams.data.item.import_mode;
        this.item.last_data_type = navParams.data.item.last_data_type;
        this.item.db_conn_string = navParams.data.item.db_conn_string;
        if (this.change_mode === "n") {
            this.get_conn_string("localdb");
        }
        if (this.change_mode === "c") {
            this.get_max_exec_table_seq();
            this.get_max_exec_seq();
        }
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.title = "資料表對應匯入";
    }
    Table2TableAddEditModalPage.prototype.get_conn_string = function (remote_conn_id) {
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
    Table2TableAddEditModalPage.prototype.SelectImportMode = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.import_mode_key,
            code_type: "002,042"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.import_mode_key = select_data.code_key;
            _this.item.import_mode = select_data.code_desc;
        });
        modal.present();
    };
    Table2TableAddEditModalPage.prototype.SelectLastDataType = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.last_data_type_key,
            code_type: "009"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.last_data_type_key = select_data.code_key;
            _this.item.last_data_type = select_data.code_desc;
        });
        modal.present();
    };
    Table2TableAddEditModalPage.prototype.SelectConn = function () {
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
    Table2TableAddEditModalPage.prototype.SelectSrcTable = function () {
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
    Table2TableAddEditModalPage.prototype.SelectTable = function () {
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
    Table2TableAddEditModalPage.prototype.get_max_exec_table_seq = function () {
        var _this = this;
        this.global.createLoader("取得最大值中...");
        this.global.loading.present().then(function () {
            _this.Table2TableServices.GetMaxExecTableSeqAsync(_this.item.exec_group, _this.min_exec_table_seq, _this.max_exec_table_seq).subscribe(function (data) {
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
    Table2TableAddEditModalPage.prototype.get_max_exec_seq = function () {
        var _this = this;
        this.global.createLoader("取得最大值中...");
        this.global.loading.present().then(function () {
            _this.Table2TableServices.GetMaxExecSeqAsync(_this.item.exec_group).subscribe(function (data) {
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
    Table2TableAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    Table2TableAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    Table2TableAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad Table2TableModalPage");
    };
    Table2TableAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: "page-table2-table-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\table2-table-add-edit-modal\table2-table-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n\n    <ion-row>\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>轉檔群組</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="exec_group" #exec_group="ngModel" [(ngModel)]="item.exec_group"\n            required maxlength="30"></ion-input>\n        </ion-item>\n        <div *ngIf="exec_group.errors && exec_group.touched" class="error-message">\n          轉檔群組不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>轉資料表序號:{{range_exec_table_seq}}</ion-label>\n          <ion-input type="number" [disabled]="CanEditBatch==false || mode==\'PUT\'" name="exec_table_seq" #exec_table_seq="ngModel" [(ngModel)]="item.exec_table_seq"\n            required></ion-input>\n          <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'" icon-right (click)="get_max_exec_table_seq()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n        <div *ngIf="exec_table_seq.errors && exec_table_seq.touched" class="error-message">\n          轉資料表序號不能為空白\n        </div>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-12 col-sm-4>\n          <ion-item>\n            <ion-label stacked>來源結構描述</ion-label>\n            <ion-input type="text" readonly=true [disabled]="CanEditBatch==false " name="src_schema" #src_schema="ngModel" [(ngModel)]="item.src_schema"\n              required maxlength="30"></ion-input>\n          </ion-item>\n          <div *ngIf="src_schema.errors && src_schema.touched" class="error-message">\n            來源結構描述不能為空白\n          </div>\n        </ion-col>\n        <ion-col col-12 col-sm-8>\n          <ion-item>\n            <ion-label stacked>來源資料表名稱</ion-label>\n            <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="src_tablename" #src_tablename="ngModel" [(ngModel)]="item.src_tablename"\n              required maxlength="50"></ion-input>\n            <button ion-button outline item-end icon-right *ngIf="CanEditBatch==true " (click)="SelectSrcTable()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-item>\n          <div *ngIf="src_tablename.errors && src_tablename.touched" class="error-message">\n            來源資料表名稱不能為空白\n          </div>\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col >\n          <ion-item>\n            <ion-label stacked>來源篩選條件</ion-label>\n            <ion-input type="text" title="不需含where關鍵字" maxlength="255" [disabled]="CanEditBatch==false" name="where_condition" #where_condition="ngModel" [(ngModel)]="item.where_condition"\n              ></ion-input>\n          </ion-item>\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-4>\n          <ion-item>\n            <ion-label stacked>目的結構描述</ion-label>\n            <ion-input type="text" readonly=true [disabled]="CanEditBatch==false " name="schemaname" #schemaname="ngModel" [(ngModel)]="item.schemaname"\n              required maxlength="30"></ion-input>\n          </ion-item>\n          <div *ngIf="schemaname.errors && schemaname.touched" class="error-message">\n            目的結構描述不能為空白\n          </div>\n        </ion-col>\n        <ion-col col-12 col-sm-8>\n          <ion-item>\n            <ion-label stacked>目的資料表名稱</ion-label>\n            <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="tablename" #tablename="ngModel" [(ngModel)]="item.tablename"\n              required maxlength="50"></ion-input>\n            <button ion-button outline item-end icon-right *ngIf="CanEditBatch==true " (click)="SelectTable()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-item>\n          <div *ngIf="tablename.errors && tablename.touched" class="error-message">\n            目的資料表名稱不能為空白\n          </div>\n\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-6>\n              <ion-item>\n                <ion-label stacked>執行順序</ion-label>\n                <ion-input type="number" [disabled]="CanEditBatch==false" name="exec_seq" #exec_seq="ngModel" [(ngModel)]="item.exec_seq"\n                  required></ion-input>\n                <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="get_max_exec_seq()">\n                  <ion-icon name="arrow-dropdown"></ion-icon>\n                </button>\n              </ion-item>\n              <div *ngIf="exec_seq.errors && exec_seq.touched" class="error-message">\n                執行順序不能為空白\n              </div>\n            </ion-col>\n            <ion-col col-6>\n                <ion-item>\n                  <ion-label stacked>連線編號</ion-label>\n                  <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="db_conn_id" #db_conn_id="ngModel" [(ngModel)]="item.db_conn_id"\n                    required maxlength="20"></ion-input>\n\n                  <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectConn()">\n                    <ion-icon name="arrow-dropdown"></ion-icon>\n                  </button>\n                </ion-item>\n\n                <div *ngIf="db_conn_id.errors && db_conn_id.touched " class="error-message">\n                  連線編號不能為空白\n                </div>\n              </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col col-12>\n            <ion-item>\n              <ion-label stacked>連線字串</ion-label>\n              <ion-textarea rows=4 [disabled]=true name="db_conn_string" #db_conn_string="ngModel" [(ngModel)]="item.db_conn_string" required></ion-textarea>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n\n    <ion-row>\n\n\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>啟用</ion-label>\n          <ion-checkbox [disabled]="CanEditBatch==false" name="is_active" #is_active="ngModel" [(ngModel)]="item.is_active"></ion-checkbox>\n        </ion-item>\n\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>啟用交易</ion-label>\n          <ion-checkbox [disabled]="CanEditBatch==false" name="tran_flag" #tran_flag="ngModel" [(ngModel)]="item.tran_flag"></ion-checkbox>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n\n\n\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>匯入模式</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditBatch==false" name="import_mode_key" #import_mode_key="ngModel" [(ngModel)]="item.import_mode_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectImportMode()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="import_mode_key.errors && import_mode_key.touched " class="error-message">\n          匯入模式不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>匯入模式</ion-label>\n          <ion-input type="text" maxlength=10  [disabled]=true name="import_mode" #import_mode="ngModel" [(ngModel)]="item.import_mode"\n            required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>最後資料欄位類型</ion-label>\n          <ion-input type="text" readonly=true maxlength=10 [disabled]="CanEditBatch==false " name="last_data_type_key" #last_data_type_key="ngModel" [(ngModel)]="item.last_data_type_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectLastDataType()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="last_data_type_key.errors && last_data_type_key.touched " class="error-message">\n            最後資料欄位類型不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>最後資料欄位類型</ion-label>\n          <ion-input type="text" [disabled]=true name="last_data_type" #last_data_type="ngModel" [(ngModel)]="item.last_data_type"\n            required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="item.last_data_type_key!=\'009|ALL\' && item.last_data_type_key>\'\' " >\n        <ion-col >\n          <ion-item>\n            <ion-label stacked>最後資料欄位名稱</ion-label>\n            <ion-input type="text" maxlength="30" [disabled]="CanEditBatch==false" name="last_data_column_name" #last_data_column_name="ngModel" [(ngModel)]="item.last_data_column_name"\n            ></ion-input>\n          </ion-item>\n\n        </ion-col>\n      </ion-row>\n\n\n    <ion-row>\n        <ion-col>\n          <ion-item>\n            <ion-label stacked>備註</ion-label>\n            <ion-textarea [disabled]="CanEditBatch==false" name="memo" #memo="ngModel" [(ngModel)]="item.memo" maxlength="255"  required></ion-textarea>\n          </ion-item>\n          <div *ngIf="memo.errors && memo.touched " class="error-message">\n              備註不能為空白\n          </div>\n        </ion-col>\n      </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditBatch==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n            (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\table2-table-add-edit-modal\table2-table-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_table2_table_services_table2_table_services__["a" /* Table2TableServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__components_global_global__["a" /* GlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_conn_services_conn_services__["a" /* ConnServicesProvider */]])
    ], Table2TableAddEditModalPage);
    return Table2TableAddEditModalPage;
}());

//# sourceMappingURL=table2-table-add-edit-modal.js.map

/***/ }),

/***/ 763:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table2TableAddEditModalPageModule", function() { return Table2TableAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table2_table_add_edit_modal__ = __webpack_require__(1685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_table2_table_services_table2_table_services__ = __webpack_require__(1090);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var Table2TableAddEditModalPageModule = /** @class */ (function () {
    function Table2TableAddEditModalPageModule() {
    }
    Table2TableAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__table2_table_add_edit_modal__["a" /* Table2TableAddEditModalPage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_table2_table_services_table2_table_services__["a" /* Table2TableServicesProvider */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__table2_table_add_edit_modal__["a" /* Table2TableAddEditModalPage */]),
            ],
        })
    ], Table2TableAddEditModalPageModule);
    return Table2TableAddEditModalPageModule;
}());

//# sourceMappingURL=table2-table-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=238.js.map