webpackJsonp([338],{

/***/ 1538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonicProgramDetailAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_ProgramPageViewModel__ = __webpack_require__(48);
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
 * Generated class for the ProgramDetailModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IonicProgramDetailAddEditModalPage = /** @class */ (function () {
    function IonicProgramDetailAddEditModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_ProgramPageViewModel__["a" /* ProgramPageViewModel */]();
        this.item.page_name = navParams.data.item.page_name;
        this.item.page_desc = navParams.data.item.page_desc;
        this.item.program_no = navParams.data.item.program_no;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.mode = navParams.data.mode;
        this.CanEditPermission = navParams.data.CanEditPermission;
    }
    IonicProgramDetailAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    IonicProgramDetailAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    IonicProgramDetailAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad IonicProgramDetailModalPage");
    };
    IonicProgramDetailAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-ionic-program-detail-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\ionic-program-detail-add-edit-modal\ionic-program-detail-add-edit-modal.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content  padding>\n      <form #Form="ngForm">\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label stacked >功能名稱</ion-label>\n                <ion-input type="text" [disabled]="CanEditPermission==false" [disabled]="mode==\'PUT\'" name="page_name" #page_name="ngModel" [(ngModel)]="item.page_name"\n                  required></ion-input>\n              </ion-item>\n              <div *ngIf="page_name.errors?.required && page_name.touched" class="error-message">\n                  功能名稱不能為空白\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                  <ion-label stacked >功能說明</ion-label>\n                <ion-input type="text" [disabled]="CanEditPermission==false" name="page_desc" #page_desc="ngModel" [(ngModel)]="item.page_desc"\n                  required></ion-input>\n              </ion-item>\n              <div *ngIf="page_desc.errors?.required && page_desc.touched" class="error-message">\n                  功能說明不能為空白\n              </div>\n            </ion-col>\n          </ion-row>\n        </form>\n\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-row>\n        <ion-col>\n          <div [ngClass]="[\'command\']">\n            <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n              <ion-icon name="backspace"></ion-icon>\n            </button>\n            <button small [disabled]="CanEditPermission==false" title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n              <ion-icon name="checkmark-circle"></ion-icon>\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\ionic-program-detail-add-edit-modal\ionic-program-detail-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], IonicProgramDetailAddEditModalPage);
    return IonicProgramDetailAddEditModalPage;
}());

//# sourceMappingURL=ionic-program-detail-add-edit-modal.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicProgramDetailAddEditModalPageModule", function() { return IonicProgramDetailAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_program_detail_add_edit_modal__ = __webpack_require__(1538);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IonicProgramDetailAddEditModalPageModule = /** @class */ (function () {
    function IonicProgramDetailAddEditModalPageModule() {
    }
    IonicProgramDetailAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ionic_program_detail_add_edit_modal__["a" /* IonicProgramDetailAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ionic_program_detail_add_edit_modal__["a" /* IonicProgramDetailAddEditModalPage */]),
            ],
        })
    ], IonicProgramDetailAddEditModalPageModule);
    return IonicProgramDetailAddEditModalPageModule;
}());

//# sourceMappingURL=ionic-program-detail-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=338.js.map