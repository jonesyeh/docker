webpackJsonp([242],{

/***/ 1077:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobLoopServicesProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_Response_JobLoopListResponse__ = __webpack_require__(1198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_Response_JobLoopResponse__ = __webpack_require__(1199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_services__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__ = __webpack_require__(14);
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
  Generated class for the jobloopServicesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var JobLoopServicesProvider = /** @class */ (function () {
    function JobLoopServicesProvider(Services) {
        this.Services = Services;
        // this.originUrl =apiUrl;
        this.ctl = "jobloop";
        console.log("Hello jobloopServicesProvider Provider");
    }
    JobLoopServicesProvider.prototype.GetListsAsync = function (ssis_job_no, PageSize, PageNumber, keyword, order_type) {
        var _this = this;
        var sub_url;
        sub_url = "jobloop?PageSize={1}&PageNumber={2}&keyword={3}&ssis_job_no={4}&order_type={5}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, PageSize, PageNumber, keyword, ssis_job_no, order_type);
        return this.Services.GetAsync(sub_url, this.ctl, true)
            .map(function (item) {
            _this.jobloops = new __WEBPACK_IMPORTED_MODULE_0__Model_Response_JobLoopListResponse__["a" /* JobLoopListResponse */]({
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
            return _this.jobloops;
        });
    };
    JobLoopServicesProvider.prototype.PostPutAsync = function (JobLoopViewModel, mode) {
        var _this = this;
        var sub_url;
        if (mode === "POST")
            sub_url = "JobLoop";
        else
            sub_url = "JobLoop/" + JobLoopViewModel.loop_seq;
        return this.Services.PostPutAsync(sub_url, this.ctl, true, JobLoopViewModel, mode).map(function (item) {
            _this.jobloop = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_JobLoopResponse__["a" /* JobLoopResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.jobloop;
        });
    };
    JobLoopServicesProvider.prototype.DeleteAsync = function (loop_seq) {
        var _this = this;
        var sub_url;
        sub_url = "JobLoop/" + loop_seq;
        return this.Services.DeleteAsync(sub_url, this.ctl, true).map(function (item) {
            _this.jobloop = new __WEBPACK_IMPORTED_MODULE_3__Model_Response_JobLoopResponse__["a" /* JobLoopResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
            return _this.jobloop;
        });
    };
    JobLoopServicesProvider.prototype.GetSqlAsync = function (loop_seq, method) {
        var sub_url;
        sub_url = "JobLoop/get_{2}_sql/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, loop_seq, method);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    JobLoopServicesProvider.prototype.GetMaxLoopSeqAsync = function (ssis_job_no) {
        var sub_url;
        sub_url = "JobLoop/get_max_loop_seq?ssis_job_no={1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, ssis_job_no);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_6__Model_Response_NumberResponse__["a" /* NumberResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    JobLoopServicesProvider.prototype.GetMaxExecSeqAsync = function (ssis_job_no) {
        var sub_url;
        sub_url = "JobLoop/get_max_exec_seq?ssis_job_no={1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, ssis_job_no);
        return this.Services.GetAsync(sub_url, this.ctl, true).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_6__Model_Response_NumberResponse__["a" /* NumberResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    JobLoopServicesProvider.prototype.unzip_pwd = function (JobLoopViewModel) {
        var sub_url;
        sub_url = "JobLoop/unzip_pwd/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, JobLoopViewModel.loop_seq);
        return this.Services.PutAsync(sub_url, this.ctl, true, JobLoopViewModel).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    JobLoopServicesProvider.prototype.zip_pwd = function (JobLoopViewModel) {
        var sub_url;
        sub_url = "JobLoop/zip_pwd/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, JobLoopViewModel.loop_seq);
        return this.Services.PutAsync(sub_url, this.ctl, true, JobLoopViewModel).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    JobLoopServicesProvider.prototype.clear_unzip_pwd = function (JobLoopViewModel) {
        var sub_url;
        sub_url = "JobLoop/clear_unzip_pwd/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, JobLoopViewModel.loop_seq);
        return this.Services.PutAsync(sub_url, this.ctl, true, JobLoopViewModel).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    JobLoopServicesProvider.prototype.clear_zip_pwd = function (JobLoopViewModel) {
        var sub_url;
        sub_url = "JobLoop/clear_zip_pwd/{1}";
        sub_url = __WEBPACK_IMPORTED_MODULE_1__Model_String__["a" /* String */].Format(sub_url, this.ctl, JobLoopViewModel.loop_seq);
        return this.Services.PutAsync(sub_url, this.ctl, true, JobLoopViewModel).map(function (item) {
            return new __WEBPACK_IMPORTED_MODULE_5__Model_Response_StringResponse__["a" /* StringResponse */]({
                Message: item.Message,
                DidError: item.DidError,
                ErrorMessage: item.ErrorMessage,
                Model: item.Model
            });
        });
    };
    JobLoopServicesProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_services__["a" /* ServicesProvider */]])
    ], JobLoopServicesProvider);
    return JobLoopServicesProvider;
}());

//# sourceMappingURL=job-loop-services.js.map

/***/ }),

/***/ 1198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobLoopListResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewModel_JobLoopViewModel__ = __webpack_require__(946);
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


var JobLoopListResponse = /** @class */ (function (_super) {
    __extends(JobLoopListResponse, _super);
    function JobLoopListResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Messag;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = (obj && obj.ErrorMessage) || null;
        _this.PageNumber = obj.PageNumber;
        _this.PageSize = obj.PageSize;
        _this.PageRows = obj.PageRows;
        _this.TotalPages = obj.TotalPages;
        _this.TotalRows = obj.TotalRows;
        if (_this.DidError === false) {
            _this.Model = [];
            obj.Model.forEach(function (data) {
                var item = new __WEBPACK_IMPORTED_MODULE_0__ViewModel_JobLoopViewModel__["a" /* JobLoopViewModel */]();
                item.loop_seq = data.loop_seq;
                item.ssis_job_no = data.ssis_job_no;
                item.job01 = (data && data.job01) || null;
                item.job02 = (data && data.job02) || null;
                item.job03 = (data && data.job03) || null;
                item.exec_seq = data.exec_seq;
                item.is_active = data.is_active;
                item.job_loop_desc = (data && data.job_loop_desc) || null;
                item.job_loop_replace_desc =
                    (data && data.job_loop_replace_desc) || null;
                item.remote_conn_id = (data && data.remote_conn_id) || null;
                item.last_exec_date = (data && data.last_exec_date) || null;
                item.last_exec_status_key = (data && data.last_exec_status_key) || null;
                item.creator = data.creator;
                item.create_time = data.create_time;
                item.modifier = data.modifier;
                item.last_update_time = data.last_update_time;
                item.last_exec_status_desc = data.last_exec_status_desc;
                item.is_active_desc = data.is_active_desc;
                item.end_time = data.end_time;
                item.duration = data.duration;
                item.remote_conn_string = (data && data.remote_conn_string) || null;
                switch (data.last_exec_status_key) {
                    case "012|R": {
                        item.last_exec_status_color = "running-left";
                        break;
                    }
                    case "012|F": {
                        item.last_exec_status_color = "danger-left";
                        break;
                    }
                    default:
                        item.last_exec_status_color = "normal-left";
                }
                switch (data.is_active) {
                    case false: {
                        item.is_active_color = "danger-left";
                        break;
                    }
                    default:
                        item.is_active_color = "active-left";
                }
                _this.Model.push(item);
            }) || null;
        }
        return _this;
    }
    return JobLoopListResponse;
}(__WEBPACK_IMPORTED_MODULE_1__ListModelResponse__["a" /* ListModelResponse */]));

//# sourceMappingURL=JobLoopListResponse.js.map

/***/ }),

/***/ 1199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobLoopResponse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewModel_JobLoopViewModel__ = __webpack_require__(946);
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


var JobLoopResponse = /** @class */ (function (_super) {
    __extends(JobLoopResponse, _super);
    function JobLoopResponse(obj) {
        var _this = _super.call(this, obj) || this;
        _this.Message = obj.Message;
        _this.DidError = obj.DidError;
        _this.ErrorMessage = obj.ErrorMessage;
        if (_this.DidError === false) {
            if (obj.Model.loop_seq) {
                _this.Model = new __WEBPACK_IMPORTED_MODULE_1__ViewModel_JobLoopViewModel__["a" /* JobLoopViewModel */]();
                _this.Model.loop_seq = obj.Model.loop_seq;
                _this.Model.ssis_job_no = obj.Model.ssis_job_no;
                _this.Model.job01 = (obj && obj.Model.job01) || null;
                _this.Model.job02 = (obj && obj.Model.job02) || null;
                _this.Model.job03 = (obj && obj.Model.job03) || null;
                _this.Model.exec_seq = obj.Model.exec_seq;
                _this.Model.is_active = obj.Model.is_active;
                _this.Model.job_loop_desc = (obj && obj.Model.job_loop_desc) || null;
                _this.Model.remote_conn_id = (obj && obj.Model.remote_conn_id) || null;
                _this.Model.last_exec_date = (obj && obj.Model.last_exec_date) || null;
                _this.Model.last_exec_status_key =
                    (obj && obj.Model.last_exec_status_key) || null;
                _this.Model.creator = obj.Model.creator;
                _this.Model.create_time = obj.Model.create_time;
                _this.Model.modifier = obj.Model.modifier;
                _this.Model.last_update_time = obj.Model.last_update_time;
                _this.Model.remote_conn_string = (obj && obj.Model.remote_conn_string) || null;
            }
        }
        return _this;
    }
    return JobLoopResponse;
}(__WEBPACK_IMPORTED_MODULE_0__SingleModelResponse__["a" /* SingleModelResponse */]));

//# sourceMappingURL=JobLoopResponse.js.map

/***/ }),

/***/ 1550:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobLoopAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_JobLoopViewModel__ = __webpack_require__(946);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_job_loop_services_job_loop_services__ = __webpack_require__(1077);
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
 * Generated class for the JobLoopModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JobLoopAddEditModalPage = /** @class */ (function () {
    function JobLoopAddEditModalPage(navCtrl, navParams, viewCtrl, loadingCtrl, modalCtrl, global, JobLoopServices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.global = global;
        this.JobLoopServices = JobLoopServices;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_JobLoopViewModel__["a" /* JobLoopViewModel */]();
        this.item.loop_seq = navParams.data.item.loop_seq;
        this.item.ssis_job_no = navParams.data.item.ssis_job_no;
        this.item.job01 = navParams.data.item.job01;
        this.item.job02 = navParams.data.item.job02;
        this.item.job03 = navParams.data.item.job03;
        this.item.exec_seq = navParams.data.item.exec_seq;
        this.item.is_active = navParams.data.item.is_active;
        this.item.job_loop_desc = navParams.data.item.job_loop_desc;
        this.item.remote_conn_id = navParams.data.item.remote_conn_id;
        this.item.last_exec_date = navParams.data.item.last_exec_date;
        this.item.last_exec_status_key = navParams.data.item.last_exec_status_key;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.item.remote_conn_string = navParams.data.item.remote_conn_string;
        this.CanEditLoopJob = navParams.data.CanEditLoopJob;
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.title = this.item.ssis_job_no;
        if (this.mode === 'POST') {
            this.get_max_loop_seq();
            this.get_max_exec_seq();
        }
    }
    JobLoopAddEditModalPage.prototype.get_max_loop_seq = function () {
        var _this = this;
        this.global.createLoader("取得最大值中...");
        this.global.loading.present().then(function () {
            _this.JobLoopServices.GetMaxLoopSeqAsync(_this.item.ssis_job_no).subscribe(function (data) {
                if (data.DidError === true) {
                    _this.global.dismissLoading();
                    _this.global.showError(data.ErrorMessage);
                }
                else {
                    _this.item.loop_seq = data.Model;
                    _this.global.dismissLoading();
                }
            }, function (err) {
                _this.global.dismissLoading();
                _this.global.showError("無法連上WebAPI伺服器-" + err.message);
            });
        });
    };
    JobLoopAddEditModalPage.prototype.get_max_exec_seq = function () {
        var _this = this;
        this.global.createLoader("取得最大值中...");
        this.global.loading.present().then(function () {
            _this.JobLoopServices.GetMaxExecSeqAsync(_this.item.ssis_job_no).subscribe(function (data) {
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
    JobLoopAddEditModalPage.prototype.SelectConn = function () {
        var _this = this;
        var modal = this.modalCtrl.create("ConnSelectModalPage", {
            select_remote_conn_id: this.item.remote_conn_id,
            conn_type_key: "",
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.remote_conn_id = select_data.remote_conn_id;
            _this.item.remote_conn_string = select_data.conn_string;
        });
        modal.present();
    };
    JobLoopAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    JobLoopAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    JobLoopAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad JobLoopModalPage");
    };
    JobLoopAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-job-loop-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\job-loop-add-edit-modal\job-loop-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n    <ion-row>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>作業回圈序號</ion-label>\n          <ion-input type="number" name="loop_seq" [disabled]="CanEditLoopJob==false || mode==\'PUT\'" #loop_seq="ngModel" [(ngModel)]="item.loop_seq"\n            required></ion-input>\n          <button ion-button outline item-end *ngIf="CanEditLoopJob==true && mode==\'POST\'" icon-right (click)="get_max_loop_seq()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n        <div *ngIf="loop_seq.errors && loop_seq.touched" class="error-message">\n          作業回圈序號不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>執行順序</ion-label>\n          <ion-input type="number" [disabled]="CanEditLoopJob==false" name="exec_seq" #exec_seq="ngModel" [(ngModel)]="item.exec_seq" required></ion-input>\n          <button ion-button outline item-end *ngIf="CanEditLoopJob==true " icon-right (click)="get_max_exec_seq()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n        <div *ngIf="exec_seq.errors && exec_seq.touched" class="error-message">\n          執行順序不能為空白\n        </div>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Job01</ion-label>\n          <ion-input [disabled]="CanEditLoopJob==false" type="text" name="job01" #job01="ngModel" [(ngModel)]="item.job01"></ion-input>\n        </ion-item>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Job02</ion-label>\n          <ion-input [disabled]="CanEditLoopJob==false" type="text" name="job02" #job02="ngModel" [(ngModel)]="item.job02"></ion-input>\n        </ion-item>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Job03</ion-label>\n          <ion-input [disabled]="CanEditLoopJob==false" type="text" name="job03" #job03="ngModel" [(ngModel)]="item.job03"></ion-input>\n        </ion-item>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>說明</ion-label>\n          <ion-input type="text" [disabled]="CanEditLoopJob==false" name="job_loop_desc" #job_loop_desc="ngModel" [(ngModel)]="item.job_loop_desc" required></ion-input>\n        </ion-item>\n        <div *ngIf="job_loop_desc.errors && job_loop_desc.touched " class="error-message">\n          說明不能為空白\n        </div>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>連線</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditLoopJob==false" name="remote_conn_id" #remote_conn_id="ngModel" [(ngModel)]="item.remote_conn_id"></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditLoopJob==true" icon-right (click)="SelectConn()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>連線</ion-label>\n\n          <ion-textarea [disabled]=true name="remote_conn_string" #remote_conn_string="ngModel" [(ngModel)]="item.remote_conn_string"\n            required>\n          </ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>啟用</ion-label>\n          <ion-checkbox name="is_active" [disabled]="CanEditLoopJob==false" [(ngModel)]="item.is_active"></ion-checkbox>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n\n\n\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button [disabled]="CanEditLoopJob==false" small title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\job-loop-add-edit-modal\job-loop-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__components_global_global__["a" /* GlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_4__providers_job_loop_services_job_loop_services__["a" /* JobLoopServicesProvider */]])
    ], JobLoopAddEditModalPage);
    return JobLoopAddEditModalPage;
}());

//# sourceMappingURL=job-loop-add-edit-modal.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobLoopAddEditModalPageModule", function() { return JobLoopAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_loop_add_edit_modal__ = __webpack_require__(1550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_job_loop_services_job_loop_services__ = __webpack_require__(1077);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var JobLoopAddEditModalPageModule = /** @class */ (function () {
    function JobLoopAddEditModalPageModule() {
    }
    JobLoopAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__job_loop_add_edit_modal__["a" /* JobLoopAddEditModalPage */],
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__providers_job_loop_services_job_loop_services__["a" /* JobLoopServicesProvider */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__job_loop_add_edit_modal__["a" /* JobLoopAddEditModalPage */]),
            ],
        })
    ], JobLoopAddEditModalPageModule);
    return JobLoopAddEditModalPageModule;
}());

//# sourceMappingURL=job-loop-add-edit-modal.module.js.map

/***/ }),

/***/ 946:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobLoopViewModel; });
/**
 * 作業回圈ViewModel
 *
 * @public
 * @class JobLoopViewModel
 */
var JobLoopViewModel = /** @class */ (function () {
    function JobLoopViewModel() {
    }
    return JobLoopViewModel;
}());

//# sourceMappingURL=JobLoopViewModel.js.map

/***/ })

});
//# sourceMappingURL=242.js.map