webpackJsonp([311],{

/***/ 1024:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailViewModel; });
var EmailViewModel = /** @class */ (function () {
    function EmailViewModel() {
    }
    return EmailViewModel;
}());

//# sourceMappingURL=EmailViewModel.js.map

/***/ }),

/***/ 1334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_EmailViewModel__ = __webpack_require__(1024);
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
 * Generated class for the EmailModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmailAddEditModalPage = /** @class */ (function () {
    function EmailAddEditModalPage(navCtrl, navParams, viewCtrl, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_EmailViewModel__["a" /* EmailViewModel */]();
        this.item.exec_group = navParams.data.item.exec_group;
        this.item.exec_status_key = navParams.data.item.exec_status_key;
        this.item.exec_status = navParams.data.item.exec_status;
        this.item.email_id = navParams.data.item.email_id;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.item.email_desc = navParams.data.item.email_desc;
        this.item.email_full_desc = navParams.data.item.email_full_desc;
        this.CanEditEmail = navParams.data.CanEditEmail;
        this.mode = navParams.data.mode;
        this.title = "Email寄發設定";
    }
    EmailAddEditModalPage.prototype.SelectExecStatus = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.exec_status_key,
            code_key: "012|C,012|F,012|S",
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.exec_status_key = select_data.code_key;
            _this.item.exec_status = select_data.code_desc;
        });
        modal.present();
    };
    EmailAddEditModalPage.prototype.SelectEmailID = function () {
        var _this = this;
        var modal = this.modalCtrl.create("EmailUserSelectModelPage", {
            select_id: this.item.email_id,
            show_select_add: (this.mode === "POST" ? true : false),
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.email_id = select_data.email_id;
            _this.item.email_desc = select_data.email_desc;
        });
        modal.present();
    };
    EmailAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    EmailAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    EmailAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad EmailModalPage");
    };
    EmailAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-email-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\email-add-edit-modal\email-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  padding>\n    <form #Form="ngForm">\n\n      <ion-row>\n        <ion-col >\n          <ion-item>\n            <ion-label stacked>作業編號</ion-label>\n            <ion-input type="text" [disabled]="CanEditEmail==false || mode==\'PUT\'" name="exec_group" #exec_group="ngModel" [(ngModel)]="item.exec_group"\n              required maxlength="30"></ion-input>\n          </ion-item>\n          <div *ngIf="exec_group.errors && exec_group.touched" class="error-message">\n            作業編號不能為空白\n          </div>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-4>\n          <ion-item>\n            <ion-label stacked>執行狀態</ion-label>\n            <ion-input type="text" readonly=true [disabled]="CanEditEmail==false || mode==\'PUT\'" name="exec_status_key" #exec_status_key="ngModel" [(ngModel)]="item.exec_status_key"\n              required></ion-input>\n\n            <button ion-button outline item-end *ngIf="CanEditEmail==true && mode==\'POST\'" icon-right (click)="SelectExecStatus()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-item>\n\n          <div *ngIf="exec_status_key.errors && exec_status_key.touched " class="error-message">\n            執行狀態不能為空白\n          </div>\n        </ion-col>\n        <ion-col col-12 col-sm-8>\n          <ion-item>\n            <ion-label stacked>執行狀態</ion-label>\n            <ion-input type="text" [disabled]=true name="exec_status" #exec_status="ngModel" [(ngModel)]="item.exec_status" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 col-sm-4>\n          <ion-item>\n            <ion-label stacked>收件者</ion-label>\n            <ion-input type="text" readonly=true [disabled]="CanEditEmail==false || mode==\'PUT\' " name="email_id" #email_id="ngModel" [(ngModel)]="item.email_id"\n              required maxlength="255"></ion-input>\n\n            <button ion-button outline item-end *ngIf="CanEditEmail==true" icon-right (click)="SelectEmailID()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-item>\n\n          <div *ngIf="email_id.errors && email_id.touched " class="error-message">\n            收件者不能為空白\n          </div>\n        </ion-col>\n        <ion-col col-12 col-sm-8>\n          <ion-item>\n            <ion-label stacked>收件者</ion-label>\n            <ion-input type="text" [disabled]=true name="email_desc" #email_desc="ngModel" [(ngModel)]="item.email_desc" required></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditEmail==false || mode==\'PUT\'"  ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\email-add-edit-modal\email-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ModalController */]])
    ], EmailAddEditModalPage);
    return EmailAddEditModalPage;
}());

//# sourceMappingURL=email-add-edit-modal.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailAddEditModalPageModule", function() { return EmailAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_add_edit_modal__ = __webpack_require__(1334);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmailAddEditModalPageModule = /** @class */ (function () {
    function EmailAddEditModalPageModule() {
    }
    EmailAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__email_add_edit_modal__["a" /* EmailAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__email_add_edit_modal__["a" /* EmailAddEditModalPage */]),
            ],
        })
    ], EmailAddEditModalPageModule);
    return EmailAddEditModalPageModule;
}());

//# sourceMappingURL=email-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=311.js.map