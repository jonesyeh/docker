webpackJsonp([240],{

/***/ 1000:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParameterGroupListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_ParameterGroupViewModel__ = __webpack_require__(919);
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


var ParameterGroupListResponse = /** @class */ (function (_super) {
    __extends(ParameterGroupListResponse, _super);
    function ParameterGroupListResponse(obj) {
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
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_ParameterGroupViewModel__["a" /* ParameterGroupViewModel */]();
                item.parameter_column_group = data.parameter_column_group;
                item.parameter_group_desc = data.parameter_group_desc;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return ParameterGroupListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=ParameterGroupListResponse.js.map

/***/ }),

/***/ 1001:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParameterGroupResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_ParameterGroupViewModel__ = __webpack_require__(919);
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


var ParameterGroupResponse = /** @class */ (function (_super) {
    __extends(ParameterGroupResponse, _super);
    function ParameterGroupResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_ParameterGroupViewModel__["a" /* ParameterGroupViewModel */]();
            _this.Model.parameter_column_group = obj.Model.parameter_column_group;
            _this.Model.parameter_group_desc = obj.Model.parameter_group_desc;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
        }
        return _this;
    }
    return ParameterGroupResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=ParameterGroupResponse.js.map

/***/ }),

/***/ 1601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParameterGroupAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_parameter_group_services_parameter_group_services__ = __webpack_require__(937);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_ViewModel_ParameterGroupViewModel__ = __webpack_require__(919);
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
 * Generated class for the ParameterGroupModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ParameterGroupAddEditModalPage = /** @class */ (function () {
    function ParameterGroupAddEditModalPage(navCtrl, navParams, viewCtrl, ParameterGroupServices, loadingCtrl, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.ParameterGroupServices = ParameterGroupServices;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.item = new __WEBPACK_IMPORTED_MODULE_4__Model_ViewModel_ParameterGroupViewModel__["a" /* ParameterGroupViewModel */]();
        this.item.parameter_column_group = navParams.data.item.parameter_column_group;
        this.item.parameter_group_desc = navParams.data.item.parameter_group_desc;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.CanEditJob = navParams.data.CanEditJob;
        this.mode = navParams.data.mode;
        this.title = "參數群組";
    }
    ParameterGroupAddEditModalPage.prototype.get_max_parameter_column_group = function () {
        var _this = this;
        this.global.createLoader("取得最大值中...");
        this.global.loading.present().then(function () {
            _this.ParameterGroupServices.GetMaxParameterGroupNoAsync(_this.item.parameter_column_group)
                .subscribe(function (data) {
                if (data.DidError === true) {
                    _this.global.dismissLoading();
                    _this.global.showError(data.ErrorMessage);
                }
                else {
                    _this.item.parameter_column_group = data.Model;
                    _this.global.dismissLoading();
                }
            }, function (err) {
                _this.global.dismissLoading();
                _this.global.showError("無法連上WebAPI伺服器-" + err.message);
            });
        });
    };
    ParameterGroupAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    ParameterGroupAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ParameterGroupAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ParameterGroupModalPage");
    };
    ParameterGroupAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: "page-parameter-group-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\parameter-group-add-edit-modal\parameter-group-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  padding>\n    <form #Form="ngForm">\n\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label stacked >參數群組</ion-label>\n              <ion-input type="text" maxlength="3" [disabled]="CanEditJob==false || mode==\'PUT\'" name="parameter_column_group" #parameter_column_group="ngModel" [(ngModel)]="item.parameter_column_group"\n                required></ion-input>\n                <button ion-button outline item-end *ngIf="CanEditJob==true && mode==\'POST\'"  icon-right (click)="get_max_parameter_column_group()">\n                  <ion-icon name="arrow-dropdown"></ion-icon>\n                </button>\n            </ion-item>\n            <div *ngIf="parameter_column_group.errors && parameter_column_group.touched" class="error-message">\n              參數群組不能為空白\n            </div>\n\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n                <ion-label stacked >參數群組說明</ion-label>\n              <ion-input type="text" [disabled]="CanEditJob==false" name="parameter_group_desc" #parameter_group_desc="ngModel" [(ngModel)]="item.parameter_group_desc"\n                required maxlength="50"></ion-input>\n            </ion-item>\n            <div *ngIf="parameter_group_desc.errors && parameter_group_desc.touched" class="error-message">\n              參數群組說明不能為空白\n            </div>\n          </ion-col>\n        </ion-row>\n\n\n      </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditJob==false"  ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\parameter-group-add-edit-modal\parameter-group-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_parameter_group_services_parameter_group_services__["a" /* ParameterGroupServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__components_global_global__["a" /* GlobalComponent */]])
    ], ParameterGroupAddEditModalPage);
    return ParameterGroupAddEditModalPage;
}());

//# sourceMappingURL=parameter-group-add-edit-modal.js.map

/***/ }),

/***/ 695:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParameterGroupAddEditModalPageModule", function() { return ParameterGroupAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__parameter_group_add_edit_modal__ = __webpack_require__(1601);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_parameter_group_services_parameter_group_services__ = __webpack_require__(937);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ParameterGroupAddEditModalPageModule = /** @class */ (function () {
    function ParameterGroupAddEditModalPageModule() {
    }
    ParameterGroupAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__parameter_group_add_edit_modal__["a" /* ParameterGroupAddEditModalPage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_parameter_group_services_parameter_group_services__["a" /* ParameterGroupServicesProvider */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__parameter_group_add_edit_modal__["a" /* ParameterGroupAddEditModalPage */]),
            ],
        })
    ], ParameterGroupAddEditModalPageModule);
    return ParameterGroupAddEditModalPageModule;
}());

//# sourceMappingURL=parameter-group-add-edit-modal.module.js.map

/***/ }),

/***/ 919:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParameterGroupViewModel; });
var ParameterGroupViewModel = /** @class */ (function () {
    function ParameterGroupViewModel() {
    }
    return ParameterGroupViewModel;
}());

//# sourceMappingURL=ParameterGroupViewModel.js.map

/***/ }),

/***/ 937:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParameterGroupServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_ParameterGroupListResponse__ = __webpack_require__(1000);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Response_ParameterGroupResponse__ = __webpack_require__(1001);
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
  Generated class for the ParameterGroupServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ParameterGroupServicesProvider = /** @class */ (function () {
    function ParameterGroupServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "ParameterGroup";
        console.log("Hello ParameterGroupServiceProvider Provider");
    }
    ParameterGroupServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "ParameterGroup?PageSize={1}&PageNumber={2}&keyword={3}&order_type={4}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.ParameterGroups = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_ParameterGroupListResponse__["a" /* ParameterGroupListResponse */]({
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
            return _this.ParameterGroups;
        });
    };
    ParameterGroupServicesProvider.prototype.PostPutAsync = function (ParameterGroupViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "ParameterGroup";
        else
            sub_url = "ParameterGroup/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, ParameterGroupViewModel.parameter_column_group);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, ParameterGroupViewModel, mode).map(function (item) {
            _this.ParameterGroup = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_ParameterGroupResponse__["a" /* ParameterGroupResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.ParameterGroup;
        });
    };
    ParameterGroupServicesProvider.prototype.DeleteAsync = function (parameter_column_group) {
        var _this = this;
        var sub_url;
        sub_url = "ParameterGroup/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, parameter_column_group);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.ParameterGroup = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_ParameterGroupResponse__["a" /* ParameterGroupResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.ParameterGroup;
        });
    };
    ParameterGroupServicesProvider.prototype.GetMaxParameterGroupNoAsync = function (parameter_column_group) {
        var sub_url;
        sub_url = "ParameterGroup/get_max_parameter_group/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, parameter_column_group);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    ParameterGroupServicesProvider.prototype.GetSqlAsync = function (parameter_column_group, method) {
        var sub_url;
        sub_url = "ParameterGroup/get_{2}_sql/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, parameter_column_group, method);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    ParameterGroupServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_services__["a" /* ServicesProvider */]])
    ], ParameterGroupServicesProvider);
    return ParameterGroupServicesProvider;
}());

//# sourceMappingURL=parameter-group-services.js.map

/***/ })

});
//# sourceMappingURL=240.js.map