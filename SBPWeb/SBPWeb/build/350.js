webpackJsonp([350],{

/***/ 1302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CodeCheckAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_CodeCheckViewModel__ = __webpack_require__(138);
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
 * Generated class for the CodeCheckModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CodeCheckAddEditModalPage = /** @class */ (function () {
    function CodeCheckAddEditModalPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_CodeCheckViewModel__["a" /* CodeCheckViewModel */]();
        this.item.schemaname = navParams.data.item.schemaname;
        this.item.tablename = navParams.data.item.tablename;
        this.item.columnname = navParams.data.item.columnname;
        this.item.check_type = navParams.data.item.check_type;
        this.item.is_active = navParams.data.item.is_active;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.mode = navParams.data.mode;
        this.CanEditBatch = navParams.data.CanEditBatch;
        if (this.mode === "POST")
            this.title = "新增";
        else
            this.title = "更新";
    }
    CodeCheckAddEditModalPage.prototype.SelectCheckType = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CheckTypeSelectModalPage", {
            item: this.item,
            selecdt_data: this.item.check_type,
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.check_type = select_data.code_type;
        });
        modal.present();
    };
    CodeCheckAddEditModalPage.prototype.SelectCheckCodeColumn = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CheckCodeColumnSelectModalPage", {
            item: this.item,
            select_data: this.item.columnname,
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.columnname = select_data.columnname;
        });
        modal.present();
    };
    CodeCheckAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    CodeCheckAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    CodeCheckAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad CodeCheckAddEditModalPage");
    };
    CodeCheckAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page code-check-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\code-check-add-edit-modal\code-check-add-edit-modal.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content padding>\n    <form #Form="ngForm" >\n\n      <ion-row>\n\n        <ion-col>\n          <ion-item>\n            <ion-label stacked>欄位名稱</ion-label>\n            <ion-input type="text" readonly=true [disabled]="mode==\'PUT\'"  name="columnname" #columnname="ngModel" [(ngModel)]="item.columnname" required></ion-input>\n\n            <button ion-button outline item-end *ngIf="CanEditBatch==true && mode==\'POST\'"  icon-right (click)="SelectCheckCodeColumn()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n            </button>\n          </ion-item>\n\n          <div *ngIf="columnname.errors && columnname.touched " class="error-message">\n            欄位名稱不能為空白\n          </div>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col col-12  col-sm-6 >\n            <ion-item>\n                <ion-label stacked>檢核類型</ion-label>\n                <ion-input type="text" readonly=true  name="check_type" #check_type="ngModel" [(ngModel)]="item.check_type" required></ion-input>\n\n                <button ion-button outline item-end   icon-right (click)="SelectCheckType()">\n                  <ion-icon name="arrow-dropdown"></ion-icon>\n                </button>\n              </ion-item>\n              <div *ngIf="check_type.errors && check_type.touched " class="error-message">\n                  檢核類型不能為空白\n                </div>\n        </ion-col>\n        <ion-col col-12  col-sm-6 >\n            <ion-item>\n              <ion-label stacked>啟用</ion-label>\n              <ion-checkbox  [disabled]="CanEditBatch==false" name="is_active" #is_active="ngModel" [(ngModel)]="item.is_active"></ion-checkbox>\n            </ion-item>\n          </ion-col>\n      </ion-row>\n\n\n\n    </form>\n\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-row>\n        <ion-col>\n          <div [ngClass]="[\'command\']">\n            <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n              <ion-icon name="backspace"></ion-icon>\n            </button>\n            <button small [disabled]="CanEditBatch==false" title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n              <ion-icon name="checkmark-circle"></ion-icon>\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\code-check-add-edit-modal\code-check-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], CodeCheckAddEditModalPage);
    return CodeCheckAddEditModalPage;
}());

//# sourceMappingURL=code-check-add-edit-modal.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeCheckAddEditModalPageModule", function() { return CodeCheckAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_check_add_edit_modal__ = __webpack_require__(1302);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CodeCheckAddEditModalPageModule = /** @class */ (function () {
    function CodeCheckAddEditModalPageModule() {
    }
    CodeCheckAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__code_check_add_edit_modal__["a" /* CodeCheckAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__code_check_add_edit_modal__["a" /* CodeCheckAddEditModalPage */]),
            ],
        })
    ], CodeCheckAddEditModalPageModule);
    return CodeCheckAddEditModalPageModule;
}());

//# sourceMappingURL=code-check-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=350.js.map