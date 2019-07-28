webpackJsonp([327],{

/***/ 1573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_MenuViewModel__ = __webpack_require__(136);
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
 * Generated class for the MenuModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MenuAddEditModalPage = /** @class */ (function () {
    function MenuAddEditModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.title = "選單";
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_MenuViewModel__["a" /* MenuViewModel */]();
        this.item.menu_no = navParams.data.item.menu_no;
        this.item.menu_desc = navParams.data.item.menu_desc;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.CanEditPermission = navParams.data.CanEditPermission;
        this.mode = navParams.data.mode;
    }
    MenuAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    MenuAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    MenuAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuModalPage');
    };
    MenuAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-menu-add-edit-modal',template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\menu-add-edit-modal\menu-add-edit-modal.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content  padding>\n      <form #Form="ngForm">\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label stacked >選單編號</ion-label>\n                <ion-input type="text"   [disabled]="CanEditPermission==false || mode==\'PUT\'" name="menu_no" #menu_no="ngModel" [(ngModel)]="item.menu_no"\n                  required></ion-input>\n              </ion-item>\n              <div *ngIf="menu_no.errors && menu_no.touched" class="error-message">\n                  選單編號不能為空白\n              </div>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                  <ion-label stacked >選單名稱</ion-label>\n                <ion-input [disabled]="CanEditPermission==false"  type="text" name="menu_desc" #menu_desc="ngModel" [(ngModel)]="item.menu_desc"\n                  required></ion-input>\n              </ion-item>\n              <div *ngIf="menu_desc.errors && menu_desc.touched" class="error-message">\n                  選單名稱不能為空白\n              </div>\n            </ion-col>\n          </ion-row>\n\n\n        </form>\n\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-row>\n        <ion-col>\n          <div [ngClass]="[\'command\']">\n            <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n              <ion-icon name="backspace"></ion-icon>\n            </button>\n            <button small [disabled]="CanEditPermission==false"  title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n              <ion-icon name="checkmark-circle"></ion-icon>\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\menu-add-edit-modal\menu-add-edit-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], MenuAddEditModalPage);
    return MenuAddEditModalPage;
}());

//# sourceMappingURL=menu-add-edit-modal.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuAddEditModalPageModule", function() { return MenuAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_add_edit_modal__ = __webpack_require__(1573);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuAddEditModalPageModule = /** @class */ (function () {
    function MenuAddEditModalPageModule() {
    }
    MenuAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu_add_edit_modal__["a" /* MenuAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu_add_edit_modal__["a" /* MenuAddEditModalPage */])
            ],
        })
    ], MenuAddEditModalPageModule);
    return MenuAddEditModalPageModule;
}());

//# sourceMappingURL=menu-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=327.js.map