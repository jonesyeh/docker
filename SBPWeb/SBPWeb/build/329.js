webpackJsonp([329],{

/***/ 1594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuDetailEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Model_ViewModel_ProgramPageMenuViewModel__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_ViewModel_ProgramPageViewModel__ = __webpack_require__(48);
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
var MenuDetailEditModalPage = /** @class */ (function () {
    function MenuDetailEditModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.title = "順序修改";
        this.item = new __WEBPACK_IMPORTED_MODULE_0__Model_ViewModel_ProgramPageMenuViewModel__["a" /* ProgramPageMenuViewModel */]();
        this.item.page_name = navParams.data.item.page_name;
        this.item.menu_no = navParams.data.item.menu_no;
        this.item.display_order_no = navParams.data.item.display_order_no;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        var pm = new __WEBPACK_IMPORTED_MODULE_3__Model_ViewModel_ProgramPageViewModel__["a" /* ProgramPageViewModel */]();
        pm.page_desc = navParams.data.item.ProgramPageViewModel.page_desc;
        this.item.ProgramPageViewModel = pm;
        this.CanEditPermission = navParams.data.CanEditPermission;
        // console.log(this.item);
    }
    MenuDetailEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    MenuDetailEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    MenuDetailEditModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MenuModalPage');
    };
    MenuDetailEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-menu-detail-edit-modal',template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\menu-detail-edit-modal\menu-detail-edit-modal.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content  padding>\n      <form #Form="ngForm">\n\n          <ion-row>\n            <ion-col>\n              <ion-item>\n                <ion-label stacked >選單編號</ion-label>\n                <ion-input type="text"   disabled=true name="menu_no"  [(ngModel)]="item.menu_no"\n                  required></ion-input>\n              </ion-item>\n\n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label stacked >功能名稱</ion-label>\n                  <ion-input type="text"  disabled=true name="page_name"  [(ngModel)]="item.page_name"\n                    required></ion-input>\n                </ion-item>\n\n              </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col>\n                  <ion-item>\n                    <ion-label stacked >功能說明</ion-label>\n                    <ion-input type="text" disabled=true name="page_desc" [(ngModel)]="item.ProgramPageViewModel.page_desc"\n                      required></ion-input>\n                  </ion-item>\n\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                  <ion-col>\n                    <ion-item>\n                      <ion-label stacked>顯示順序</ion-label>\n                      <ion-input type="number" [disabled]="CanEditPermission==false"  #display_order_no="ngModel"  name="display_order_no" [(ngModel)]="item.display_order_no"\n                        required></ion-input>\n                    </ion-item>\n                    <div *ngIf="display_order_no.errors?.required && display_order_no.touched" class="error-message">\n                        顯示順序不能為空白\n                    </div>\n                  </ion-col>\n                </ion-row>\n\n\n\n        </form>\n\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-row>\n        <ion-col>\n          <div [ngClass]="[\'command\']">\n            <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n              <ion-icon name="backspace"></ion-icon>\n            </button>\n            <button small [disabled]="CanEditPermission==false"  title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n              <ion-icon name="checkmark-circle"></ion-icon>\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\menu-detail-edit-modal\menu-detail-edit-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */]])
    ], MenuDetailEditModalPage);
    return MenuDetailEditModalPage;
}());

//# sourceMappingURL=menu-detail-edit-modal.js.map

/***/ }),

/***/ 690:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuDetailEditModalPageModule", function() { return MenuDetailEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__menu_detail_edit_modal__ = __webpack_require__(1594);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuDetailEditModalPageModule = /** @class */ (function () {
    function MenuDetailEditModalPageModule() {
    }
    MenuDetailEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__menu_detail_edit_modal__["a" /* MenuDetailEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__menu_detail_edit_modal__["a" /* MenuDetailEditModalPage */]),
            ],
        })
    ], MenuDetailEditModalPageModule);
    return MenuDetailEditModalPageModule;
}());

//# sourceMappingURL=menu-detail-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=329.js.map