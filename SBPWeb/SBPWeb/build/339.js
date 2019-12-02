webpackJsonp([339],{

/***/ 1536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonicProgramAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_ProgramViewModel__ = __webpack_require__(49);
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
 * Generated class for the programModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IonicProgramAddEditModalPage = /** @class */ (function () {
    function IonicProgramAddEditModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_ProgramViewModel__["a" /* ProgramViewModel */]();
        this.item.program_no = navParams.data.item.program_no;
        this.item.program_desc = navParams.data.item.program_desc;
        this.item.program_name = navParams.data.item.program_name;
        this.item.bus_type_key = navParams.data.item.bus_type_key;
        this.item.program_type_key = navParams.data.item.program_type_key;
        this.item.program_type_seq = navParams.data.item.program_type_seq;
        this.item.program_path_key = navParams.data.item.program_path_key;
        this.item.master_program_no = navParams.data.item.master_program_no;
        this.item.parent_program_no = navParams.data.item.parent_program_no;
        this.item.menu_key = navParams.data.item.menu_key;
        this.item.audit_flag = navParams.data.item.audit_flag;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.CanEditPermission = navParams.data.CanEditPermission;
        this.mode = navParams.data.mode;
        console.log(this.CanEditPermission);
    }
    IonicProgramAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    IonicProgramAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    IonicProgramAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ProgramModalPage");
    };
    IonicProgramAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-ionic-program-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\ionic-program-add-edit-modal\ionic-program-add-edit-modal.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content  padding>\n      <form #Form="ngForm">\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label stacked >程式編號</ion-label>\n                <ion-input type="text" disabled=true name="program_no" #program_no="ngModel" [(ngModel)]="item.program_no"\n                  required></ion-input>\n              </ion-item>\n              <div *ngIf="program_no.errors?.required && program_no.touched" class="error-message">\n                程式編號不能為空白\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                  <ion-label stacked >功能名稱</ion-label>\n                <ion-input type="text" [disabled]="CanEditPermission==false"  name="program_name" #program_name="ngModel" [(ngModel)]="item.program_name"\n                  required></ion-input>\n              </ion-item>\n              <div *ngIf="program_name.errors && program_name.touched" class="error-message">\n                功能名稱不能為空白\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                  <ion-label stacked >功能說明</ion-label>\n                <ion-input type="text" [disabled]="CanEditPermission==false" name="program_desc" #program_desc="ngModel" [(ngModel)]="item.program_desc"\n                  required></ion-input>\n              </ion-item>\n              <div *ngIf="program_desc.errors && program_desc.touched" class="error-message">\n                功能說明不能為空白\n              </div>\n            </ion-col>\n          </ion-row>\n\n\n        </form>\n\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-row>\n        <ion-col>\n          <div [ngClass]="[\'command\']">\n            <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n              <ion-icon name="backspace"></ion-icon>\n            </button>\n            <button small title="確認" [disabled]="CanEditPermission==false"  ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n              <ion-icon name="checkmark-circle"></ion-icon>\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\ionic-program-add-edit-modal\ionic-program-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], IonicProgramAddEditModalPage);
    return IonicProgramAddEditModalPage;
}());

//# sourceMappingURL=ionic-program-add-edit-modal.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IonicProgramAddEditModalPageModule", function() { return IonicProgramAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_program_add_edit_modal__ = __webpack_require__(1536);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IonicProgramAddEditModalPageModule = /** @class */ (function () {
    function IonicProgramAddEditModalPageModule() {
    }
    IonicProgramAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__ionic_program_add_edit_modal__["a" /* IonicProgramAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__ionic_program_add_edit_modal__["a" /* IonicProgramAddEditModalPage */]),
            ],
        })
    ], IonicProgramAddEditModalPageModule);
    return IonicProgramAddEditModalPageModule;
}());

//# sourceMappingURL=ionic-program-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=339.js.map