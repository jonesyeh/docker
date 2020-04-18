webpackJsonp([315],{

/***/ 1029:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailAttachViewModel; });
var EmailAttachViewModel = /** @class */ (function () {
    function EmailAttachViewModel() {
    }
    return EmailAttachViewModel;
}());

//# sourceMappingURL=EmailAttachViewModel.js.map

/***/ }),

/***/ 1342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailAttachAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_EmailAttachViewModel__ = __webpack_require__(1029);
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
 * Generated class for the EmailAttachModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EmailAttachAddEditModalPage = /** @class */ (function () {
    function EmailAttachAddEditModalPage(navCtrl, navParams, viewCtrl, loadingCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.modalCtrl = modalCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_EmailAttachViewModel__["a" /* EmailAttachViewModel */]();
        this.item.exec_group = navParams.data.item.exec_group;
        this.item.exec_status_key = navParams.data.item.exec_status_key;
        this.item.attach_exec_group = navParams.data.item.attach_exec_group;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.item.email_id = navParams.data.item.email_id;
        this.CanEditEmail = navParams.data.CanEditEmail;
        this.mode = navParams.data.mode;
        this.title = "Email附件設定";
    }
    EmailAttachAddEditModalPage.prototype.SelectBatchExecProgram = function () {
        var _this = this;
        var modal = this.modalCtrl.create("BatchExecProgramSelectModalPage", {
            select_item: "attach_filelist_" + this.item.attach_exec_group,
            ssis_program_set_no: "attach_filelist",
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.attach_exec_group = select_data.exec_group;
        });
        modal.present();
    };
    EmailAttachAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    EmailAttachAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    EmailAttachAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad EmailAttachModalPage");
    };
    EmailAttachAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: "page-email-attach-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\email-attach-add-edit-modal\email-attach-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  padding>\n    <form #Form="ngForm">\n\n      <ion-row>\n        <ion-col >\n          <ion-item>\n            <ion-label stacked>附件轉檔群組</ion-label>\n            <ion-input type="text" [disabled]="CanEditEmail==false || mode==\'PUT\'" name="attach_exec_group" #attach_exec_group="ngModel" [(ngModel)]="item.attach_exec_group"\n              required maxlength="30"></ion-input>\n              <button ion-button outline item-end *ngIf="CanEditEmail==true" icon-right (click)="SelectBatchExecProgram()">\n                <ion-icon name="arrow-dropdown"></ion-icon>\n              </button>\n          </ion-item>\n          <div *ngIf="attach_exec_group.errors && attach_exec_group.touched" class="error-message">\n            附件轉檔群組不能為空白\n          </div>\n        </ion-col>\n\n      </ion-row>\n\n      </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditEmail==false || mode==\'PUT\'"  ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\email-attach-add-edit-modal\email-attach-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ModalController */]])
    ], EmailAttachAddEditModalPage);
    return EmailAttachAddEditModalPage;
}());

//# sourceMappingURL=email-attach-add-edit-modal.js.map

/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailAttachAddEditModalPageModule", function() { return EmailAttachAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__email_attach_add_edit_modal__ = __webpack_require__(1342);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmailAttachAddEditModalPageModule = /** @class */ (function () {
    function EmailAttachAddEditModalPageModule() {
    }
    EmailAttachAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__email_attach_add_edit_modal__["a" /* EmailAttachAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__email_attach_add_edit_modal__["a" /* EmailAttachAddEditModalPage */]),
            ],
        })
    ], EmailAttachAddEditModalPageModule);
    return EmailAttachAddEditModalPageModule;
}());

//# sourceMappingURL=email-attach-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=315.js.map