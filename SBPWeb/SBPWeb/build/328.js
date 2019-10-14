webpackJsonp([328],{

/***/ 1605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_PermissionViewModel__ = __webpack_require__(66);
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
 * Generated class for the PermissionModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PermissionAddEditModalPage = /** @class */ (function () {
    function PermissionAddEditModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_PermissionViewModel__["a" /* PermissionViewModel */]();
        this.item.permission_no = navParams.data.item.permission_no;
        this.item.permission_desc = navParams.data.item.permission_desc;
        this.item.permission_func_desc = navParams.data.item.permission_func_desc;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.CanEditPermission = navParams.data.CanEditPermission;
        this.mode = navParams.data.mode;
        if (this.mode === "PUT")
            this.title = "修改";
        else
            this.title = "新增";
    }
    PermissionAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    PermissionAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    PermissionAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad PermissionModalPage");
    };
    PermissionAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-permission-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\permission-add-edit-modal\permission-add-edit-modal.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content  padding>\n      <form #Form="ngForm">\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label stacked >權限編號</ion-label>\n                <ion-input type="text" [disabled]="CanEditPermission==false" [disabled]="mode==\'PUT\'" name="permission_no" #permission_no="ngModel" [(ngModel)]="item.permission_no"\n                  required></ion-input>\n              </ion-item>\n              <div *ngIf="permission_no.errors?.required && permission_no.touched" class="error-message">\n                權限編號不能為空白\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                  <ion-label stacked >權限名稱</ion-label>\n                <ion-input type="text" [disabled]="CanEditPermission==false" name="permission_desc" #permission_desc="ngModel" [(ngModel)]="item.permission_desc"\n                  required></ion-input>\n              </ion-item>\n              <div *ngIf="permission_desc.errors?.required && permission_desc.touched" class="error-message">\n                權限名稱不能為空白\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                  <ion-label stacked >權限描述</ion-label>\n                <ion-input type="text" [disabled]="CanEditPermission==false" name="permission_func_desc" #permission_func_desc="ngModel" [(ngModel)]="item.permission_func_desc"\n                  required></ion-input>\n              </ion-item>\n              <div *ngIf="permission_func_desc.errors?.required && permission_func_desc.touched" class="error-message">\n                權限描述不能為空白\n              </div>\n            </ion-col>\n          </ion-row>\n        </form>\n\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-row>\n        <ion-col>\n          <div [ngClass]="[\'command\']">\n            <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n              <ion-icon name="backspace"></ion-icon>\n            </button>\n            <button small [disabled]="CanEditPermission==false" title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n              <ion-icon name="checkmark-circle"></ion-icon>\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\permission-add-edit-modal\permission-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], PermissionAddEditModalPage);
    return PermissionAddEditModalPage;
}());

//# sourceMappingURL=permission-add-edit-modal.js.map

/***/ }),

/***/ 699:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionAddEditModalPageModule", function() { return PermissionAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__permission_add_edit_modal__ = __webpack_require__(1605);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PermissionAddEditModalPageModule = /** @class */ (function () {
    function PermissionAddEditModalPageModule() {
    }
    PermissionAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__permission_add_edit_modal__["a" /* PermissionAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__permission_add_edit_modal__["a" /* PermissionAddEditModalPage */]),
            ],
        })
    ], PermissionAddEditModalPageModule);
    return PermissionAddEditModalPageModule;
}());

//# sourceMappingURL=permission-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=328.js.map