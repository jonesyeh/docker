webpackJsonp([253],{

/***/ 1061:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileLoopServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_services__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileLoopListResponse__ = __webpack_require__(1175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Response_FileLoopResponse__ = __webpack_require__(1176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Model_Response_NumberResponse__ = __webpack_require__(128);
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
  Generated class for the FileLoopServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var FileLoopServicesProvider = /** @class */ (function () {
    function FileLoopServicesProvider(Services) {
        this.Services = Services;
        this.ctl = "FileLoop";
        console.log("Hello FileLoopServiceProvider Provider");
    }
    FileLoopServicesProvider.prototype.GetListsByAsync = function (PageSize, PageNumber, keyword, exec_file_seq, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "FileLoop?PageSize={1}&PageNumber={2}&keyword={3}&exec_file_seq={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, exec_file_seq, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            _this.FileLoops = new __WEBPACK_IMPORTED_MODULE_4__Model_Response_FileLoopListResponse__["a" /* FileLoopListResponse */]({
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
            return _this.FileLoops;
        });
    };
    FileLoopServicesProvider.prototype.GetMaxExecSeqAsync = function (exec_file_seq) {
        var sub_url;
        sub_url = "FileLoop/get_max_exec_seq?exec_file_seq={1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, exec_file_seq);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_6__Model_Response_NumberResponse__["a" /* NumberResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    FileLoopServicesProvider.prototype.PostPutAsync = function (FileLoopViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "FileLoop";
        else
            sub_url = "FileLoop/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, FileLoopViewModel.loop_seq);
        return this.Services.PostPutAsync(sub_url, this.ctl, true, FileLoopViewModel, mode).map(function (item) {
            _this.FileLoop = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_FileLoopResponse__["a" /* FileLoopResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.FileLoop;
        });
    };
    FileLoopServicesProvider.prototype.DeleteAsync = function (loop_seq) {
        var _this = this;
        var sub_url;
        sub_url = "FileLoop/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, loop_seq);
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.FileLoop = new __WEBPACK_IMPORTED_MODULE_5__Model_Response_FileLoopResponse__["a" /* FileLoopResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.FileLoop;
        });
    };
    FileLoopServicesProvider.prototype.GetSqlAsync = function (loop_seq, method) {
        var sub_url;
        sub_url = "FileLoop/get_{2}_sql/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, loop_seq, method);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_0__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    FileLoopServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_services__["a" /* ServicesProvider */]])
    ], FileLoopServicesProvider);
    return FileLoopServicesProvider;
}());

//# sourceMappingURL=file-loop-services.js.map

/***/ }),

/***/ 1175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileLoopListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileLoopViewModel__ = __webpack_require__(990);
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


var FileLoopListResponse = /** @class */ (function (_super) {
    __extends(FileLoopListResponse, _super);
    function FileLoopListResponse(obj) {
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
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_FileLoopViewModel__["a" /* FileLoopViewModel */]();
                item.loop_seq = data.loop_seq;
                item.exec_file_seq = data.exec_file_seq;
                item.lc01 = data.lc01;
                item.lc02 = data.lc02;
                item.lc03 = data.lc03;
                item.exec_seq = data.exec_seq;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return FileLoopListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=FileLoopListResponse.js.map

/***/ }),

/***/ 1176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileLoopResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileLoopViewModel__ = __webpack_require__(990);
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


var FileLoopResponse = /** @class */ (function (_super) {
    __extends(FileLoopResponse, _super);
    function FileLoopResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_FileLoopViewModel__["a" /* FileLoopViewModel */]();
            _this.Model.loop_seq = obj.Model.loop_seq;
            _this.Model.exec_file_seq = obj.Model.exec_file_seq;
            _this.Model.lc01 = obj.Model.lc01;
            _this.Model.lc02 = obj.Model.lc02;
            _this.Model.lc03 = obj.Model.lc03;
            _this.Model.exec_seq = obj.Model.exec_seq;
            _this.Model.creator = obj.Model.creator;
            _this.Model.create_time = obj.Model.create_time;
            _this.Model.modifier = obj.Model.modifier;
            _this.Model.last_update_time = obj.Model.last_update_time;
        }
        return _this;
    }
    return FileLoopResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=FileLoopResponse.js.map

/***/ }),

/***/ 1478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileLoopAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_file_loop_services_file_loop_services__ = __webpack_require__(1061);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_FileLoopViewModel__ = __webpack_require__(990);
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
 * Generated class for the FileLoopModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FileLoopAddEditModalPage = /** @class */ (function () {
    function FileLoopAddEditModalPage(navCtrl, navParams, viewCtrl, FileLoopServices, loadingCtrl, global, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.FileLoopServices = FileLoopServices;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.modalCtrl = modalCtrl;
        this.sql_help = "\nLC01\u8B8A\u6578\u8AAA\u660E\uFF1A\n  \u4F9D\u8A2D\u5B9A\u503C\u53D6\u4EE3{LC01}\u8B8A\u6578\n  \u82E5\u7B2C\u4E00\u78BC\u70BA~\u8868\u8A72\u8A2D\u5B9A\u503C\u70BA\u6A94\u6848\u95DC\u9375\u5B57\u7684\u6392\u9664\u689D\u4EF6\n  \u82E5\u7B2C\u4E00\u78BC\u70BA@\u8868\u8A72\u8A2D\u5B9A\u503C\u70BA\u6A94\u6848\u95DC\u9375\u5B57\u7684\u4E0D\u6392\u9664\u689D\u4EF6\n  \u82E5\u7B2C\u4E00\u78BC\u70BA!\u8868\u8A72\u8A2D\u5B9A\u503C\u70BAhttp\u4E0A\u50B3\u6A94\u6848\u6642\u7528\u5230\u7684FormData(001|FMDATA) \u53C3\u6578\u4E2D\u7684key\n  \u82E5\u7B2C\u4E00\u78BC\u70BA#\u8868\u8A72\u8A2D\u5B9A\u503C\u70BAhttp Header \u4E2D\u7684key\nLC02\u8B8A\u6578\u8AAA\u660E\uFF1A\n  \u4F9D\u8A2D\u5B9A\u503C\u53D6\u4EE3{LC02}\u8B8A\u6578\n  \u82E5LC01\u7B2C\u4E00\u78BC\u70BA!\u8868\u8A72\u8A2D\u5B9A\u503C\u70BAhttp\u4E0A\u50B3\u6A94\u6848\u6642\u7528\u5230\u7684FormData \u53C3\u6578\u4E2D\u7684value\n  \u82E5LC01\u7B2C\u4E00\u78BC\u70BA#\u8868\u8A72\u8A2D\u5B9A\u503C\u70BAhttp Header \u4E2D\u7684Value\n  ";
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.file_type_key = navParams.data.file_type_key;
        this.item = new __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_FileLoopViewModel__["a" /* FileLoopViewModel */]();
        this.item.exec_file_seq = navParams.data.item.exec_file_seq;
        if (this.mode == "PUT")
            this.item.exec_seq = navParams.data.item.exec_seq;
        else
            this.item.exec_seq = navParams.data.totalRows + 1;
        if (this.mode == "PUT")
            this.item.loop_seq = navParams.data.item.loop_seq;
        else
            this.item.loop_seq = this.item.exec_file_seq * 100 + this.item.exec_seq;
        this.item.lc01 = navParams.data.item.lc01;
        this.item.lc02 = navParams.data.item.lc02;
        this.item.lc03 = navParams.data.item.lc03;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        if (this.change_mode != "e") {
            this.get_max_exec_seq();
        }
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.title = __WEBPACK_IMPORTED_MODULE_4__Model_String__["a" /* String */].Format("{0}", this.item.exec_file_seq);
    }
    FileLoopAddEditModalPage.prototype.Help = function () {
        var _this = this;
        this.global.createLoader();
        this.global.loading.present().then(function () {
            _this.global.showMessage("回圈變數說明", _this.sql_help);
        });
    };
    FileLoopAddEditModalPage.prototype.get_max_exec_seq = function () {
        var _this = this;
        this.global.createLoader("取得最大值中...");
        this.global.loading.present().then(function () {
            _this.FileLoopServices.GetMaxExecSeqAsync(_this.item.exec_file_seq).subscribe(function (data) {
                if (data.DidError === true) {
                    _this.global.dismissLoading();
                    _this.global.showError(data.ErrorMessage);
                }
                else {
                    _this.item.exec_seq = data.Model;
                    _this.item.loop_seq = _this.item.exec_file_seq * 100 + _this.item.exec_seq;
                    _this.global.dismissLoading();
                }
            }, function (err) {
                _this.global.dismissLoading();
                _this.global.showError("無法連上WebAPI伺服器-" + err.message);
            });
        });
    };
    FileLoopAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    FileLoopAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    FileLoopAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FileLoopModalPage");
    };
    FileLoopAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: "page-file-loop-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\file-loop-add-edit-modal\file-loop-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n\n    <ion-row>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label stacked>迴圈序號</ion-label>\n          <ion-input type="number" [disabled]="CanEditBatch==false  || mode==\'PUT\'" name="loop_seq" #loop_seq="ngModel" [(ngModel)]="item.loop_seq"\n            required></ion-input>\n        </ion-item>\n        <div *ngIf="loop_seq.errors && loop_seq.touched" class="error-message">\n          迴圈序號不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-6>\n        <ion-item>\n          <ion-label stacked>執行順序</ion-label>\n          <ion-input type="number" [disabled]="CanEditBatch==false " name="exec_seq" #exec_seq="ngModel" [(ngModel)]="item.exec_seq"\n            required></ion-input>\n        </ion-item>\n        <div *ngIf="loop_seq.errors && loop_seq.touched" class="error-message">\n          執行順序不能為空白\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-md-4>\n        <ion-item>\n          <ion-label stacked>LC01</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="lc01" #lc01="ngModel" [(ngModel)]="item.lc01" maxlength="50"></ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-md-4>\n        <ion-item>\n          <ion-label stacked>LC02</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="lc02" #lc02="ngModel" [(ngModel)]="item.lc02" maxlength="50"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-12 col-md-4>\n        <ion-item>\n          <ion-label stacked>LC03</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="lc03" #lc03="ngModel" [(ngModel)]="item.lc03" maxlength="50"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditBatch==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n            (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n          <button small title="變數說明" [disabled]="CanEditBatch==false" ion-button color="dark"  icon-left\n          (click)="Help()">\n          <ion-icon name="help"></ion-icon>\n        </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\file-loop-add-edit-modal\file-loop-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_file_loop_services_file_loop_services__["a" /* FileLoopServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1__components_global_global__["a" /* GlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */]])
    ], FileLoopAddEditModalPage);
    return FileLoopAddEditModalPage;
}());

//# sourceMappingURL=file-loop-add-edit-modal.js.map

/***/ }),

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileLoopAddEditModalPageModule", function() { return FileLoopAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__file_loop_add_edit_modal__ = __webpack_require__(1478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_file_loop_services_file_loop_services__ = __webpack_require__(1061);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FileLoopAddEditModalPageModule = /** @class */ (function () {
    function FileLoopAddEditModalPageModule() {
    }
    FileLoopAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__file_loop_add_edit_modal__["a" /* FileLoopAddEditModalPage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_file_loop_services_file_loop_services__["a" /* FileLoopServicesProvider */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__file_loop_add_edit_modal__["a" /* FileLoopAddEditModalPage */]),
            ],
        })
    ], FileLoopAddEditModalPageModule);
    return FileLoopAddEditModalPageModule;
}());

//# sourceMappingURL=file-loop-add-edit-modal.module.js.map

/***/ }),

/***/ 990:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileLoopViewModel; });
var FileLoopViewModel = /** @class */ (function () {
    function FileLoopViewModel() {
    }
    return FileLoopViewModel;
}());

//# sourceMappingURL=FileLoopViewModel.js.map

/***/ })

});
//# sourceMappingURL=253.js.map