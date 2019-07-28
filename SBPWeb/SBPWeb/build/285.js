webpackJsonp([285],{

/***/ 1076:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchOneDayTimeViewModel; });
var SchOneDayTimeViewModel = /** @class */ (function () {
    function SchOneDayTimeViewModel() {
    }
    return SchOneDayTimeViewModel;
}());

//# sourceMappingURL=SchOneDayTimeViewModel.js.map

/***/ }),

/***/ 1625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SchOneDayTimeAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_SchOneDayTimeViewModel__ = __webpack_require__(1076);
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
 * Generated class for the SchOneDayTimeModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SchOneDayTimeAddEditModalPage = /** @class */ (function () {
    function SchOneDayTimeAddEditModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_SchOneDayTimeViewModel__["a" /* SchOneDayTimeViewModel */]();
        this.item.sch_no = navParams.data.item.sch_no;
        this.item.sch_name = navParams.data.item.sch_name;
        this.item.active_start_date = navParams.data.item.active_start_date;
        this.item.active_start_time = navParams.data.item.active_start_time;
        this.item.is_active = navParams.data.item.is_active;
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
    SchOneDayTimeAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    SchOneDayTimeAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    SchOneDayTimeAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad SchOneDayTimeModalPage");
    };
    SchOneDayTimeAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-sch-one-day-time-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\sch-one-day-time-add-edit-modal\sch-one-day-time-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n    <ion-row>\n      <ion-col col-8>\n        <ion-item>\n          <ion-label>排程名稱</ion-label>\n          <ion-input type="text"  name="sch_name" [disabled]="CanEditSch==false" #sch_name="ngModel" [(ngModel)]="item.sch_name" required></ion-input>\n        </ion-item>\n        <div *ngIf="sch_name.errors && sch_name.touched" class="error-message">\n          排程名稱不能為空白\n        </div>\n      </ion-col>\n      <ion-col col-4>\n        <ion-item>\n          <ion-label>啟用</ion-label>\n          <ion-checkbox name="is_active" [disabled]="CanEditSch==false" [(ngModel)]="item.is_active"></ion-checkbox>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n\n\n    </ion-row>\n\n\n    <ion-row>\n      <ion-col col-12 col-sm-6 col-md-6>\n        <ion-item>\n\n          <ion-label>開始日期</ion-label>\n          <ion-datetime [disabled]="CanEditSch==false" name="active_start_date" displayFormat="YYYY-MM-DD" [(ngModel)]="item.active_start_date"></ion-datetime>\n        </ion-item>\n      </ion-col>\n      <ion-col col-12 col-sm-6 col-md-6>\n        <ion-item>\n          <ion-label>開始時間</ion-label>\n          <ion-datetime [disabled]="CanEditSch==false" name="active_start_time" #active_start_time="ngModel" pickerFormat="HH:mm" displayFormat="HH:mm" [(ngModel)]="item.active_start_time"></ion-datetime>\n\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n\n\n\n    </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button [disabled]="CanEditSch==false" small title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\sch-one-day-time-add-edit-modal\sch-one-day-time-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], SchOneDayTimeAddEditModalPage);
    return SchOneDayTimeAddEditModalPage;
}());

//# sourceMappingURL=sch-one-day-time-add-edit-modal.js.map

/***/ }),

/***/ 718:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SchOneDayTimeAddEditModalPageModule", function() { return SchOneDayTimeAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sch_one_day_time_add_edit_modal__ = __webpack_require__(1625);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SchOneDayTimeAddEditModalPageModule = /** @class */ (function () {
    function SchOneDayTimeAddEditModalPageModule() {
    }
    SchOneDayTimeAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sch_one_day_time_add_edit_modal__["a" /* SchOneDayTimeAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sch_one_day_time_add_edit_modal__["a" /* SchOneDayTimeAddEditModalPage */]),
            ],
        })
    ], SchOneDayTimeAddEditModalPageModule);
    return SchOneDayTimeAddEditModalPageModule;
}());

//# sourceMappingURL=sch-one-day-time-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=285.js.map