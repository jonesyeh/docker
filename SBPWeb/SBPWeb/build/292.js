webpackJsonp([292],{

/***/ 1091:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchMonthLastdayTimeViewModel; });
var SchMonthLastdayTimeViewModel = /** @class */ (function () {
    function SchMonthLastdayTimeViewModel() {
    }
    return SchMonthLastdayTimeViewModel;
}());

//# sourceMappingURL=SchMonthLastdayTimeViewModel.js.map

/***/ }),

/***/ 1644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchMonthLastdayTimeAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_SchMonthLastdayTimeViewModel__ = __webpack_require__(1091);
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
 * Generated class for the SchMonthLastdayTimeModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SchMonthLastdayTimeAddEditModalPage = /** @class */ (function () {
    function SchMonthLastdayTimeAddEditModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_SchMonthLastdayTimeViewModel__["a" /* SchMonthLastdayTimeViewModel */]();
        this.item.sch_no = navParams.data.item.sch_no;
        this.item.sch_name = navParams.data.item.sch_name;
        this.item.freq_recurrence_factor = navParams.data.item.freq_recurrence_factor;
        this.item.active_start_date = navParams.data.item.active_start_date;
        this.item.active_end_date = navParams.data.item.active_end_date;
        this.item.active_start_time = navParams.data.item.active_start_time;
        this.item.is_active = navParams.data.item.is_active;
        this.item.freq_subday_type = navParams.data.item.freq_subday_type;
        this.item.freq_subday_interval = navParams.data.item.freq_subday_interval;
        this.item.active_end_time = navParams.data.item.active_end_time;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.mode = navParams.data.mode;
        this.CanEditSch = navParams.data.CanEditSch;
        if (this.mode === "POST")
            this.title = "新增";
        else
            this.title = "更新";
    }
    SchMonthLastdayTimeAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    SchMonthLastdayTimeAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    SchMonthLastdayTimeAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SchMonthLastdayTimeModalPage");
    };
    SchMonthLastdayTimeAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-sch-month-lastday-time-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\sch-month-lastday-time-add-edit-modal\sch-month-lastday-time-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label>排程名稱</ion-label>\n          <ion-input type="text" [disabled]="CanEditSch==false" name="sch_name" #sch_name="ngModel" [(ngModel)]="item.sch_name" required></ion-input>\n        </ion-item>\n        <div *ngIf="sch_name.errors && sch_name.touched" class="error-message">\n          排程名稱不能為空白\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col col-12 col-sm-9>\n        <ion-item>\n          <ion-label item-start>每隔</ion-label>\n          <ion-input item-start type="number" [disabled]="CanEditSch==false" name="freq_recurrence_factor" #freq_recurrence_factor="ngModel" [(ngModel)]="item.freq_recurrence_factor"\n            required></ion-input>\n            <ion-label>月</ion-label>\n        </ion-item>\n        <div *ngIf="freq_recurrence_factor.errors && freq_recurrence_factor.touched" class="error-message">\n          每隔月數不能為空白\n        </div>\n      </ion-col>\n\n      <ion-col col-12 col-sm-3>\n        <ion-item>\n          <ion-label>啟用</ion-label>\n          <ion-checkbox name="is_active" [disabled]="CanEditSch==false" [(ngModel)]="item.is_active"></ion-checkbox>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col col-12 col-sm-12 *ngIf="item.freq_subday_type>1">\n          <ion-item>\n            <ion-label item-start>每隔</ion-label>\n            <ion-input  item-start type="number" [disabled]="CanEditSch==false" name="freq_subday_interval" #freq_subday_interval="ngModel" [(ngModel)]="item.freq_subday_interval"\n              required></ion-input>\n              <ion-select item-start name="freq_subday_type" [disabled]="CanEditSch==false" [(ngModel)]="item.freq_subday_type">\n                  <ion-option value=1>指定時間</ion-option>\n                  <ion-option value=2>秒</ion-option>\n                  <ion-option value=4>分</ion-option>\n                  <ion-option value=8>小時</ion-option>\n                </ion-select>\n          </ion-item>\n          <div *ngIf="freq_subday_interval.errors && freq_subday_interval.touched" class="error-message">\n            每隔頻率值不能為空白\n          </div>\n        </ion-col>\n        <ion-col col-12 col-sm-12 *ngIf="item.freq_subday_type==1">\n            <ion-item>\n                <ion-select name="freq_subday_type" [disabled]="CanEditSch==false" [(ngModel)]="item.freq_subday_type">\n                    <ion-option value=1>指定時間</ion-option>\n                    <ion-option value=2>秒</ion-option>\n                    <ion-option value=4>分</ion-option>\n                    <ion-option value=8>小時</ion-option>\n                  </ion-select>\n            </ion-item>\n\n          </ion-col>\n\n      </ion-row>\n    <ion-row>\n      <ion-col col-12 col-sm-6 col-md-6>\n        <ion-item>\n\n          <ion-label>開始日期</ion-label>\n          <ion-datetime name="active_start_date" [disabled]="CanEditSch==false" displayFormat="YYYY-MM-DD" [(ngModel)]="item.active_start_date"></ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-6 col-md-6>\n        <ion-item>\n          <ion-label>截止日期</ion-label>\n          <ion-datetime name="active_end_date" [disabled]="CanEditSch==false" max="2100" displayFormat="YYYY-MM-DD" [(ngModel)]="item.active_end_date"></ion-datetime>\n\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col *ngIf="item.freq_subday_type!=2" >\n        <ion-item>\n          <ion-label>開始時間</ion-label>\n          <ion-datetime name="active_start_time" [disabled]="CanEditSch==false" #active_start_time="ngModel" displayFormat="HH:mm" [(ngModel)]="item.active_start_time"></ion-datetime>\n\n        </ion-item>\n\n      </ion-col>\n      <ion-col *ngIf="item.freq_subday_type==2" >\n        <ion-item>\n          <ion-label>開始時間</ion-label>\n          <ion-datetime name="active_start_time" [disabled]="CanEditSch==false" #active_start_time="ngModel" displayFormat="HH:mm:ss" [(ngModel)]="item.active_start_time"></ion-datetime>\n\n        </ion-item>\n\n      </ion-col>\n      <ion-col *ngIf="item.freq_subday_type!=2 && item.freq_subday_type>1">\n        <ion-item>\n          <ion-label>截止時間</ion-label>\n          <ion-datetime name="active_end_time" #active_start_time="ngModel" displayFormat="HH:mm" [(ngModel)]="item.active_end_time"></ion-datetime>\n\n        </ion-item>\n\n      </ion-col>\n       <ion-col *ngIf="item.freq_subday_type==2">\n        <ion-item>\n          <ion-label>截止時間</ion-label>\n          <ion-datetime name="active_end_time" #active_start_time="ngModel" displayFormat="HH:mm:ss" [(ngModel)]="item.active_end_time"></ion-datetime>\n\n        </ion-item>\n\n      </ion-col>\n\n    </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small [disabled]="CanEditSch==false" title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\sch-month-lastday-time-add-edit-modal\sch-month-lastday-time-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], SchMonthLastdayTimeAddEditModalPage);
    return SchMonthLastdayTimeAddEditModalPage;
}());

//# sourceMappingURL=sch-month-lastday-time-add-edit-modal.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchMonthLastdayTimeAddEditModalPageModule", function() { return SchMonthLastdayTimeAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sch_month_lastday_time_add_edit_modal__ = __webpack_require__(1644);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SchMonthLastdayTimeAddEditModalPageModule = /** @class */ (function () {
    function SchMonthLastdayTimeAddEditModalPageModule() {
    }
    SchMonthLastdayTimeAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sch_month_lastday_time_add_edit_modal__["a" /* SchMonthLastdayTimeAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sch_month_lastday_time_add_edit_modal__["a" /* SchMonthLastdayTimeAddEditModalPage */]),
            ],
        })
    ], SchMonthLastdayTimeAddEditModalPageModule);
    return SchMonthLastdayTimeAddEditModalPageModule;
}());

//# sourceMappingURL=sch-month-lastday-time-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=292.js.map