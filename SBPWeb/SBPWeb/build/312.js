webpackJsonp([312],{

/***/ 1343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailUserAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_EmailUserViewModel__ = __webpack_require__(942);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_global_global__ = __webpack_require__(119);
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
 * Generated class for the EmailUserModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmailUserAddEditModalPage = /** @class */ (function () {
    function EmailUserAddEditModalPage(navCtrl, navParams, viewCtrl, loadingCtrl, modalCtrl, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.global = global;
        this.sql_help = "\n  \u6A19\u984C\u8207\u5167\u6587-\u8B8A\u6578\u8AAA\u660E\uFF1A\n  {SSIS_JOB_NO}=\u4F5C\u696D\u7DE8\u865F,\n  {JOBDESC}=\u4F5C\u696D\u8AAA\u660E,\n  {ERR_MSG}=\u7570\u5E38\u8A0A\u606F,\n  {ERR_MSG_SEQ}=\u7570\u5E38\u8A0A\u606F\u7DE8\u865F,\n  {JOB01},{JOB02},{JOB03}=\u4F5C\u696D\u8FF4\u5708\u53C3\u6578,\n  ";
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_EmailUserViewModel__["a" /* EmailUserViewModel */]();
        this.item.email_id = navParams.data.item.email_id;
        this.item.email_desc = navParams.data.item.email_desc;
        this.item.fromaddress = navParams.data.item.fromaddress;
        this.item.toaddress = navParams.data.item.toaddress;
        this.item.ccaddress = navParams.data.item.ccaddress;
        this.item.bccaddress = navParams.data.item.bccaddress;
        this.item.subject = navParams.data.item.subject;
        this.item.body = navParams.data.item.body;
        this.item.parameter_column_group = navParams.data.item.parameter_column_group;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.item.send_status_key = navParams.data.item.send_status_key;
        this.item.send_status = navParams.data.item.send_status;
        this.item.can_rerun = navParams.data.item.can_rerun;
        this.CanEditEmail = navParams.data.CanEditEmail;
        this.mode = navParams.data.mode;
        this.title = "收件者分類";
    }
    EmailUserAddEditModalPage.prototype.SelectSendStatus = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.send_status_key,
            code_type: "071"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.send_status_key = select_data.code_key;
            _this.item.send_status = select_data.code_desc;
        });
        modal.present();
    };
    EmailUserAddEditModalPage.prototype.SelectParameterGroup = function () {
        var _this = this;
        var modal = this.modalCtrl.create("ParameterGroupSelectModelPage", {
            select_parameter_column_group: this.item.parameter_column_group,
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.parameter_column_group = select_data.parameter_column_group;
        });
        modal.present();
    };
    EmailUserAddEditModalPage.prototype.Help = function () {
        var _this = this;
        this.global.createLoader();
        this.global.loading.present().then(function () {
            _this.global.showMessage("SQL語法說明", _this.sql_help);
        });
    };
    EmailUserAddEditModalPage.prototype.openNavParameterColumnPage = function (item) {
        var _this = this;
        this.global.createLoader("連線中...");
        this.global.loading.present().then(function () {
            _this.navCtrl.push("ParameterColumnPage", { item: item });
        });
        this.global.dismissLoading();
    };
    EmailUserAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    EmailUserAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    EmailUserAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad EmailUserModalPage");
    };
    EmailUserAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-email-user-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\email-user-add-edit-modal\email-user-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  padding>\n    <form #Form="ngForm">\n\n        <ion-row>\n          <ion-col col-6 >\n            <ion-item>\n              <ion-label stacked >郵件編號</ion-label>\n              <ion-input type="text" [disabled]="CanEditEmail==false || mode==\'PUT\'" name="email_id" #email_id="ngModel" [(ngModel)]="item.email_id"\n                required maxlength="50"></ion-input>\n            </ion-item>\n            <div *ngIf="email_id.errors && email_id.touched" class="error-message">\n              郵件編號不能為空白\n            </div>\n          </ion-col>\n          <ion-col col-6 >\n            <ion-item>\n              <ion-label stacked>重送</ion-label>\n              <ion-checkbox [disabled]="CanEditEmail==false" name="can_rerun" #can_rerun="ngModel" [(ngModel)]="item.can_rerun"></ion-checkbox>\n            </ion-item>\n\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label stacked >郵件說明</ion-label>\n              <ion-input type="text"  name="email_desc" #email_desc="ngModel" [(ngModel)]="item.email_desc"\n                required  maxlength="50"></ion-input>\n            </ion-item>\n            <div *ngIf="email_desc.errors && email_desc.touched" class="error-message">\n              郵件說明不能為空白\n            </div>\n\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n          <ion-col>\n            <ion-item>\n                <ion-label stacked >寄件者清單</ion-label>\n              <ion-input type="text"  [disabled]="CanEditEmail==false" name="fromaddress" #fromaddress="ngModel" [(ngModel)]="item.fromaddress"\n                required  maxlength="255"></ion-input>\n            </ion-item>\n            <div *ngIf="fromaddress.errors && fromaddress.touched" class="error-message">\n              寄件者清單不能為空白\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n                <ion-label stacked >收件者清單</ion-label>\n              <ion-input type="text"  [disabled]="CanEditEmail==false" name="toaddress" #toaddress="ngModel" [(ngModel)]="item.toaddress"\n                required  maxlength="255"></ion-input>\n            </ion-item>\n            <div *ngIf="fromaddress.errors && fromaddress.touched" class="error-message">\n              收件者清單不能為空白\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n                <ion-label stacked >收件者副本清單</ion-label>\n              <ion-input type="text"  [disabled]="CanEditEmail==false" name="ccaddress" #ccaddress="ngModel" [(ngModel)]="item.ccaddress"\n                  maxlength="255"></ion-input>\n            </ion-item>\n            <div *ngIf="ccaddress.errors && ccaddress.touched" class="error-message">\n              收件者副本清單不能為空白\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n                <ion-label stacked >隱密收件者清單</ion-label>\n              <ion-input type="text"  [disabled]="CanEditEmail==false" name="bccaddress" #bccaddress="ngModel" [(ngModel)]="item.bccaddress"\n                maxlength="255"></ion-input>\n            </ion-item>\n            <div *ngIf="bccaddress.errors && bccaddress.touched" class="error-message">\n              隱密收件者清單不能為空白\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n              <ion-item>\n                <ion-label stacked>參數群組</ion-label>\n                <ion-input type="text" readonly=true [disabled]="CanEditEmail==false" name="parameter_column_group" #parameter_column_group="ngModel" [(ngModel)]="item.parameter_column_group"\n                  required maxlength="3"></ion-input>\n\n                <button ion-button outline item-end *ngIf="CanEditEmail==true" icon-right (click)="SelectParameterGroup()">\n                  <ion-icon name="arrow-dropdown"></ion-icon>\n                </button>\n              </ion-item>\n\n              <div *ngIf="parameter_column_group.errors && parameter_column_group.touched " class="error-message">\n                參數群組不能為空白\n              </div>\n            </ion-col>\n      </ion-row>\n      <ion-row *ngIf="mode==\'PUT\'">\n        <ion-col col-12 col-sm-4>\n          <ion-item>\n            <ion-label stacked>寄送狀態</ion-label>\n            <ion-input type="text" readonly=true [disabled]="CanEditEmail==false" name="send_status_key" #send_status_key="ngModel" [(ngModel)]="item.send_status_key"\n              required></ion-input>\n\n            <button ion-button outline item-end *ngIf="CanEditEmail==true" icon-right (click)="SelectSendStatus()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-item>\n\n          <div *ngIf="send_status_key.errors && send_status_key.touched " class="error-message">\n            寄送狀態不能為空白\n          </div>\n        </ion-col>\n        <ion-col col-12 col-sm-8>\n          <ion-item>\n            <ion-label stacked>寄送狀態</ion-label>\n\n            <ion-textarea [disabled]=true name="send_status" #send_status="ngModel" [(ngModel)]="item.send_status" required>\n            </ion-textarea>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n                <ion-label stacked >標題</ion-label>\n              <ion-input type="text"  [disabled]="CanEditEmail==false" name="subject" #subject="ngModel" [(ngModel)]="item.subject"\n                required  maxlength="40"></ion-input>\n            </ion-item>\n            <div *ngIf="subject.errors && subject.touched" class="error-message">\n              標題不能為空白\n            </div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col>\n            <ion-item>\n              <ion-label stacked>內文</ion-label>\n              <ion-textarea [disabled]="CanEditEmail==false" name="body" #body="ngModel" rows="10" [(ngModel)]="item.body"   required></ion-textarea>\n            </ion-item>\n            <div *ngIf="body.errors && body.touched " class="error-message">\n                內文不能為空白\n            </div>\n          </ion-col>\n        </ion-row>\n      </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditEmail==false"  ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n          <button small title="變數說明" [disabled]="CanEditEmail==false" ion-button color="dark"  icon-left\n          (click)="Help()">\n          <ion-icon name="help"></ion-icon>\n        </button>\n        <button small title="參數群組" ion-button color="dark" icon-left (click)="openNavParameterColumnPage(item)">\n          <ion-icon name="outlet"></ion-icon>\n        </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\email-user-add-edit-modal\email-user-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__components_global_global__["a" /* GlobalComponent */]])
    ], EmailUserAddEditModalPage);
    return EmailUserAddEditModalPage;
}());

//# sourceMappingURL=email-user-add-edit-modal.js.map

/***/ }),

/***/ 496:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailUserAddEditModalPageModule", function() { return EmailUserAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_user_add_edit_modal__ = __webpack_require__(1343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmailUserAddEditModalPageModule = /** @class */ (function () {
    function EmailUserAddEditModalPageModule() {
    }
    EmailUserAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__email_user_add_edit_modal__["a" /* EmailUserAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__email_user_add_edit_modal__["a" /* EmailUserAddEditModalPage */]),
            ],
        })
    ], EmailUserAddEditModalPageModule);
    return EmailUserAddEditModalPageModule;
}());

//# sourceMappingURL=email-user-add-edit-modal.module.js.map

/***/ }),

/***/ 942:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailUserViewModel; });
var EmailUserViewModel = /** @class */ (function () {
    function EmailUserViewModel() {
    }
    return EmailUserViewModel;
}());

//# sourceMappingURL=EmailUserViewModel.js.map

/***/ })

});
//# sourceMappingURL=312.js.map