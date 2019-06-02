webpackJsonp([329],{

/***/ 1563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineMessageAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_line_message_services_line_message_services__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_ViewModel_LineMessageViewModel__ = __webpack_require__(141);
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
 * Generated class for the LineMessageAddEditModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LineMessageAddEditModalPage = /** @class */ (function () {
    function LineMessageAddEditModalPage(navCtrl, navParams, LineMessageServices, loadingCtrl, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.LineMessageServices = LineMessageServices;
        this.loadingCtrl = loadingCtrl;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.title = "Token訊息";
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.title = navParams.data.item.tokenname;
        this.item = new __WEBPACK_IMPORTED_MODULE_3__Model_ViewModel_LineMessageViewModel__["a" /* LineMessageViewModel */]();
        this.item.tokenname = navParams.data.item.tokenname;
        if (this.change_mode === "c")
            this.item.subject_no = navParams.data.item.subject_no + "_copy";
        else
            this.item.subject_no = navParams.data.item.subject_no;
        this.item.subject = navParams.data.item.subject;
        this.item.message = navParams.data.item.message;
    }
    LineMessageAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    LineMessageAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    LineMessageAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad LineMessageAddEditModalPage");
    };
    LineMessageAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-line-message-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\line-message-add-edit-modal\line-message-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>標題編號</ion-label>\n          <ion-input type="text"  [readonly]="mode==\'PUT\'" name="subject_no" #subject_no="ngModel" [(ngModel)]="item.subject_no"\n            required maxlength="50"></ion-input>\n\n        </ion-item>\n        <div *ngIf="subject_no.errors && subject_no.touched" class="error-message">\n          標題編號\n        </div>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>標題</ion-label>\n          <ion-input type="text" name="subject" #subject="ngModel" [(ngModel)]="item.subject"\n            required maxlength="50"></ion-input>\n\n        </ion-item>\n        <div *ngIf="subject.errors && subject.touched" class="error-message">\n          標題編號\n        </div>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n        <ion-col>\n          <!-- <ion-item>\n            <ion-label stacked>立即傳送</ion-label>\n            <ion-checkbox item-right name="is_send_now"  [(ngModel)]="item.is_send_now"></ion-checkbox>\n\n          </ion-item> -->\n          <div float-left class="my-checkbox">\n              <ion-label text-uppercase>立即傳送</ion-label>\n              <ion-checkbox name="is_send_now"  [(ngModel)]="item.is_send_now">\n              </ion-checkbox>\n            </div>\n\n        </ion-col>\n      </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>訊息</ion-label>\n          <ion-textarea rows=20 autosize name="message" #message="ngModel"  [(ngModel)]="item.message" >\n\n          </ion-textarea>\n        </ion-item>\n        <div *ngIf="message.errors && message.touched" class="error-message">\n          訊息\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認"  ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n            (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\line-message-add-edit-modal\line-message-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_line_message_services_line_message_services__["a" /* LineMessageServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], LineMessageAddEditModalPage);
    return LineMessageAddEditModalPage;
}());

//# sourceMappingURL=line-message-add-edit-modal.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineMessageAddEditModalPageModule", function() { return LineMessageAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__line_message_add_edit_modal__ = __webpack_require__(1563);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LineMessageAddEditModalPageModule = /** @class */ (function () {
    function LineMessageAddEditModalPageModule() {
    }
    LineMessageAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__line_message_add_edit_modal__["a" /* LineMessageAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__line_message_add_edit_modal__["a" /* LineMessageAddEditModalPage */]),
            ],
        })
    ], LineMessageAddEditModalPageModule);
    return LineMessageAddEditModalPageModule;
}());

//# sourceMappingURL=line-message-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=329.js.map