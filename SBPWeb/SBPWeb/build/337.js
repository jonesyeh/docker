webpackJsonp([337],{

/***/ 1556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobLoopEventAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_JobLoopEventViewModel__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_file_path_services_file_path_services__ = __webpack_require__(268);
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
 * Generated class for the JobLoopEventModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var JobLoopEventAddEditModalPage = /** @class */ (function () {
    function JobLoopEventAddEditModalPage(navCtrl, navParams, viewCtrl, loadingCtrl, modalCtrl, global, FilePathServices, ConnServices) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.global = global;
        this.FilePathServices = FilePathServices;
        this.ConnServices = ConnServices;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_JobLoopEventViewModel__["a" /* JobLoopEventViewModel */]();
        this.item.loop_seq = navParams.data.item.loop_seq; //迴圈序號
        this.item.ssis_job_no = navParams.data.item.ssis_job_no; //SSIS作業編號
        this.item.job01 = navParams.data.item.job01; //作業迴圈欄位一
        this.item.job02 = navParams.data.item.job02; //作業迴圈欄位二
        this.item.job03 = navParams.data.item.job03; //作業迴圈欄位三
        this.item.event_type_key = navParams.data.item.event_type_key; //觸發事件類別主鍵
        this.item.src_path_key = navParams.data.item.src_path_key; //來源路徑主鍵
        this.item.file_keyword = navParams.data.item.file_keyword; //檔案搜尋關鍵字
        this.item.remote_conn_id = navParams.data.item.remote_conn_id; //遠端連線編號
        this.item.period_min = navParams.data.item.period_min; //每隔分鐘數
        this.item.active_start_date = navParams.data.item.active_start_date; //開始作業日期
        this.item.active_start_time = navParams.data.item.active_start_time; //開始作業時間
        this.item.next_start_time = navParams.data.item.next_start_time; //下次開始執行時間
        this.item.sbp_conn_id = navParams.data.item.sbp_conn_id; //sbpclient連線編號
        this.item.is_active = navParams.data.item.is_active; //啟用註記
        this.item.creator = navParams.data.item.creator; //鍵檔人員
        this.item.create_time = navParams.data.item.create_time; //建立時間
        this.item.modifier = navParams.data.item.modifier; //異動人員
        this.item.last_update_time = navParams.data.item.last_update_time; //最後更新時間
        this.item.event_type = navParams.data.item.event_type;
        this.item.src_path = navParams.data.item.src_path;
        this.item.remote_conn_string = navParams.data.item.remote_conn_string;
        this.item.sbp_conn_string = navParams.data.item.sbp_conn_string;
        this.CanEditLoopJob = navParams.data.CanEditLoopJob;
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.title = this.item.ssis_job_no;
        if (this.mode === "POST") {
            this.get_src_path();
            this.get_remote_conn_string(this.item.remote_conn_id);
            this.get_sbp_conn_string(this.item.sbp_conn_id);
        }
    }
    JobLoopEventAddEditModalPage.prototype.SelectFtpConn = function () {
        var _this = this;
        var modal = this.modalCtrl.create("ConnSelectModalPage", {
            select_remote_conn_id: this.item.remote_conn_id,
            conn_type_key: "065|002"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.remote_conn_id = select_data.remote_conn_id;
            _this.item.remote_conn_string = select_data.conn_string;
        });
        modal.present();
    };
    JobLoopEventAddEditModalPage.prototype.SelectSBPClientConn = function () {
        var _this = this;
        var modal = this.modalCtrl.create("ConnSelectModalPage", {
            select_remote_conn_id: this.item.remote_conn_id,
            conn_type_key: "065|005"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.sbp_conn_id = select_data.remote_conn_id;
            _this.item.sbp_conn_string = select_data.conn_string;
        });
        modal.present();
    };
    JobLoopEventAddEditModalPage.prototype.SelectSrcPath = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.src_path_key,
            code_type: "005"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.src_path_key = select_data.code_key;
            _this.item.src_path = select_data.code_desc;
        });
        modal.present();
    };
    JobLoopEventAddEditModalPage.prototype.get_src_path = function () {
        var _this = this;
        this.global.createLoader("取得預設資料夾中...");
        this.global.loading.present().then(function () {
            _this.FilePathServices.GetDefaultListsByAsync("014|2").subscribe(function (data) {
                if (data.DidError === true) {
                    _this.global.dismissLoading();
                    _this.global.showError(data.ErrorMessage);
                }
                else {
                    _this.default_path = data.Model;
                    _this.src_file_path = _this.default_path.filter(function (item, FilePathViewModel) { return item.file_path_type_key === "004|SRC"; })[0];
                    _this.item.src_path_key = _this.src_file_path.file_path_key;
                    _this.item.src_path = _this.src_file_path.file_path;
                    _this.global.dismissLoading();
                }
            }, function (err) {
                _this.global.dismissLoading();
                _this.global.showError("無法連上WebAPI伺服器-" + err.message);
            });
        });
    };
    JobLoopEventAddEditModalPage.prototype.get_remote_conn_string = function (remote_conn_id) {
        var _this = this;
        this.global.createLoader("取得連線字串中...");
        this.global.loading.present().then(function () {
            _this.ConnServices.GetConnAsync(remote_conn_id).subscribe(function (data) {
                if (data.DidError === true) {
                    _this.global.dismissLoading();
                    _this.global.showError(data.ErrorMessage);
                }
                else {
                    _this.item.remote_conn_string = data.Model.conn_string;
                    _this.global.dismissLoading();
                }
            }, function (err) {
                _this.global.dismissLoading();
                _this.global.showError("無法連上WebAPI伺服器-" + err.message);
            });
        });
    };
    JobLoopEventAddEditModalPage.prototype.get_sbp_conn_string = function (sbp_conn_id) {
        var _this = this;
        this.global.createLoader("取得連線字串中...");
        this.global.loading.present().then(function () {
            _this.ConnServices.GetConnAsync(sbp_conn_id).subscribe(function (data) {
                if (data.DidError === true) {
                    _this.global.dismissLoading();
                    _this.global.showError(data.ErrorMessage);
                }
                else {
                    _this.item.sbp_conn_string = data.Model.conn_string;
                    _this.global.dismissLoading();
                }
            }, function (err) {
                _this.global.dismissLoading();
                _this.global.showError("無法連上WebAPI伺服器-" + err.message);
            });
        });
    };
    JobLoopEventAddEditModalPage.prototype.SelectEventType = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.event_type_key,
            code_type: "078"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.event_type_key = select_data.code_key;
            _this.item.event_type = select_data.code_desc;
            if (select_data.code_key == "078|HTTP") {
                _this.item.period_min = 5;
                _this.item.file_keyword = "";
            }
        });
        modal.present();
    };
    JobLoopEventAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    JobLoopEventAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    JobLoopEventAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad JobLoopEventModalPage");
    };
    JobLoopEventAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-job-loop-event-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\job-loop-event-add-edit-modal\job-loop-event-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>Job01</ion-label>\n          <ion-input [disabled]="CanEditLoopJob==false" type="text" name="job01" #job01="ngModel" [(ngModel)]="item.job01"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>Job02</ion-label>\n          <ion-input [disabled]="CanEditLoopJob==false" type="text" name="job02" #job02="ngModel" [(ngModel)]="item.job02"></ion-input>\n        </ion-item>\n      </ion-col>\n\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>Job03</ion-label>\n          <ion-input [disabled]="CanEditLoopJob==false" type="text" name="job03" #job03="ngModel" [(ngModel)]="item.job03"></ion-input>\n        </ion-item>\n      </ion-col>\n\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>觸發事件類型</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditLoopJob==false" name="event_type_key" #event_type_key="ngModel" [(ngModel)]="item.event_type_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditLoopJob==true" icon-right (click)="SelectEventType()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="event_type_key.errors && event_type_key.touched " class="error-message">\n          觸發事件類型不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>觸發事件類型</ion-label>\n          <ion-input type="text" [disabled]=true name="event_type" #file_type="ngModel" [(ngModel)]="item.event_type" required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>SBPClient程式</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditLoopJob==false" name="sbp_conn_id" #sbp_conn_id="ngModel" [(ngModel)]="item.sbp_conn_id"></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditLoopJob==true" icon-right (click)="SelectSBPClientConn()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>SBPClient程式</ion-label>\n\n          <ion-textarea [disabled]=true name="sbp_conn_string" #sbp_conn_string="ngModel" [(ngModel)]="item.sbp_conn_string"\n            required>\n          </ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="item.event_type_key==\'078|FILE\' || item.event_type_key.indexOf(\'FTP\')>0 || item.event_type_key==\'078|UNC\' " >\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>來源路徑</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditLoopJob==false" name="src_path_key" #src_path_key="ngModel" [(ngModel)]="item.src_path_key"\n            required></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditLoopJob==true" icon-right (click)="SelectSrcPath()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n        <div *ngIf="src_path_key.errors && src_path_key.touched " class="error-message">\n          來源路徑不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>來源路徑</ion-label>\n          <ion-input type="text" [disabled]=true name="src_path" #file_type="ngModel" [(ngModel)]="item.src_path" required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="item.event_type_key==\'078|FILE\' || item.event_type_key.indexOf(\'FTP\')>0 || item.event_type_key==\'078|UNC\'">\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>檔案關鍵字</ion-label>\n          <ion-input [disabled]="CanEditLoopJob==false" type="text" name="file_keyword" #job03="ngModel" [(ngModel)]="item.file_keyword"></ion-input>\n        </ion-item>\n      </ion-col>\n\n    </ion-row>\n    <ion-row *ngIf="item.event_type_key==\'078|HTTP\'">\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>事件群組</ion-label>\n          <ion-input [disabled]="CanEditLoopJob==false" type="text" name="file_keyword" #job03="ngModel" [(ngModel)]="item.file_keyword"></ion-input>\n        </ion-item>\n      </ion-col>\n\n    </ion-row>\n    <ion-row *ngIf="item.event_type_key.indexOf(\'FTP\')>0 || item.event_type_key==\'078|UNC\' " >\n      <ion-col col-12 col-sm-4>\n        <ion-item>\n          <ion-label stacked>連線</ion-label>\n          <ion-input type="text" readonly=true [disabled]="CanEditLoopJob==false" name="remote_conn_id" #remote_conn_id="ngModel" [(ngModel)]="item.remote_conn_id"></ion-input>\n\n          <button ion-button outline item-end *ngIf="CanEditLoopJob==true" icon-right (click)="SelectFtpConn()">\n            <ion-icon name="arrow-dropdown"></ion-icon>\n          </button>\n        </ion-item>\n\n      </ion-col>\n      <ion-col col-12 col-sm-8>\n        <ion-item>\n          <ion-label stacked>連線</ion-label>\n\n          <ion-textarea [disabled]=true name="remote_conn_string" #remote_conn_string="ngModel" [(ngModel)]="item.remote_conn_string"\n            required>\n          </ion-textarea>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n          <ion-col *ngIf="item.event_type_key!=\'078|STOP\' && item.event_type_key!=\'078|HTTP\' " col-12 col-sm-6 col-md-6>\n            <ion-item>\n                <ion-label stacked>每隔分鐘數</ion-label>\n            <ion-input  type="number" [disabled]="CanEditLoopJob==false" name="period_min" #period_min="ngModel" [(ngModel)]="item.period_min"\n              required></ion-input>\n              </ion-item>\n            <div *ngIf="period_min.errors && period_min.touched" class="error-message">\n                每隔分鐘數不能為空白\n            </div>\n          </ion-col>\n          <ion-col *ngIf="item.event_type_key==\'078|HTTP\'" col-12 col-sm-6 col-md-6>\n            <ion-item>\n                <ion-label stacked>每隔秒數</ion-label>\n            <ion-input  type="number" [disabled]="CanEditLoopJob==false" name="period_min" #period_min="ngModel" [(ngModel)]="item.period_min"\n              required></ion-input>\n              </ion-item>\n            <div *ngIf="period_min.errors && period_min.touched" class="error-message">\n                每隔秒數不能為空白\n            </div>\n          </ion-col>\n      <ion-col col-12 col-sm-6>\n        <ion-item>\n          <ion-label stacked>啟用</ion-label>\n          <ion-checkbox name="is_active" [disabled]="CanEditLoopJob==false" [(ngModel)]="item.is_active"></ion-checkbox>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-6 col-md-6>\n        <ion-item>\n\n          <ion-label>開始日期</ion-label>\n          <ion-datetime  max="2050-12-31" [disabled]="CanEditLoopJob==false" name="active_start_date" displayFormat="YYYY-MM-DD" [(ngModel)]="item.active_start_date"></ion-datetime>\n        </ion-item>\n    </ion-col>\n    <ion-col col-12 col-sm-6 col-md-6 >\n      <ion-item>\n        <ion-label>開始時間</ion-label>\n        <ion-datetime [disabled]="CanEditLoopJob==false" name="active_start_time" #active_start_time="ngModel" pickerFormat="HH:mm:ss" displayFormat="HH:mm:ss" [(ngModel)]="item.active_start_time"></ion-datetime>\n\n      </ion-item>\n\n    </ion-col>\n    </ion-row>\n\n\n\n\n\n\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button [disabled]="CanEditLoopJob==false" small title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\job-loop-event-add-edit-modal\job-loop-event-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__components_global_global__["a" /* GlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_4__providers_file_path_services_file_path_services__["a" /* FilePathServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_conn_services_conn_services__["a" /* ConnServicesProvider */]])
    ], JobLoopEventAddEditModalPage);
    return JobLoopEventAddEditModalPage;
}());

//# sourceMappingURL=job-loop-event-add-edit-modal.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobLoopEventAddEditModalPageModule", function() { return JobLoopEventAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__job_loop_event_add_edit_modal__ = __webpack_require__(1556);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var JobLoopEventAddEditModalPageModule = /** @class */ (function () {
    function JobLoopEventAddEditModalPageModule() {
    }
    JobLoopEventAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__job_loop_event_add_edit_modal__["a" /* JobLoopEventAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__job_loop_event_add_edit_modal__["a" /* JobLoopEventAddEditModalPage */]),
            ],
        })
    ], JobLoopEventAddEditModalPageModule);
    return JobLoopEventAddEditModalPageModule;
}());

//# sourceMappingURL=job-loop-event-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=337.js.map