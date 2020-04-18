webpackJsonp([341],{

/***/ 1533:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlossaryAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_GlossaryViewModel__ = __webpack_require__(135);
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
 * Generated class for the GlossaryModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var GlossaryAddEditModalPage = /** @class */ (function () {
    function GlossaryAddEditModalPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_GlossaryViewModel__["a" /* GlossaryViewModel */]();
        this.item.cht_name = navParams.data.item.cht_name;
        this.item.eng_name = navParams.data.item.eng_name;
        this.item.eng_name_length = navParams.data.item.eng_name_length;
        this.item.data_type = navParams.data.item.data_type;
        this.item.glossary_type = navParams.data.item.glossary_type;
        this.item.glossary_type_desc = navParams.data.item.glossary_type_desc;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.mode = navParams.data.mode;
        this.CanEditTable = navParams.data.CanEditTable;
        if (this.mode === "POST")
            this.title = "新增";
        else
            this.title = "更新";
    }
    GlossaryAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    GlossaryAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    GlossaryAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad GlossaryAddEditModalPage");
    };
    GlossaryAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-glossary-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\glossary-add-edit-modal\glossary-add-edit-modal.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content padding>\n    <form #Form="ngForm" >\n\n      <ion-row>\n          <ion-col col-12 col-sm-6 >\n              <ion-item>\n                <ion-label stacked>欄位名稱</ion-label>\n                <ion-input type="text" [disabled]="CanEditTable==false || mode==\'PUT\'" name="eng_name" #eng_name="ngModel" [(ngModel)]="item.eng_name" required></ion-input>\n              </ion-item>\n              <div *ngIf="eng_name.errors && eng_name.touched" class="error-message">\n                  欄位名稱不能為空白\n              </div>\n            </ion-col>\n        <ion-col col-12 col-sm-6>\n          <ion-item>\n            <ion-label stacked>欄位說明</ion-label>\n            <ion-input type="text" [disabled]="CanEditTable==false " name="cht_name" #cht_name="ngModel" [(ngModel)]="item.cht_name" required></ion-input>\n          </ion-item>\n          <div *ngIf="cht_name.errors && cht_name.touched" class="error-message">\n              欄位說明不能為空白\n          </div>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col col-12  col-sm-6>\n          <ion-item>\n            <ion-label stacked>資料類型</ion-label>\n            <ion-input type="text" [disabled]="CanEditTable==false" name="data_type" #data_type="ngModel" [(ngModel)]="item.data_type" required></ion-input>\n          </ion-item>\n          <div *ngIf="data_type.errors && data_type.touched" class="error-message">\n              資料類型不能為空白\n          </div>\n        </ion-col>\n        <ion-col col-12  col-sm-6 >\n            <ion-item>\n              <ion-label stacked>類型</ion-label>\n              <ion-input type="text" *ngIf="mode==\'PUT\'" [disabled]="true" name="glossary_type_desc" #glossary_type_desc="ngModel" [(ngModel)]="item.glossary_type_desc" required></ion-input>\n\n            </ion-item>\n          </ion-col>\n      </ion-row>\n\n    </form>\n\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-row>\n        <ion-col>\n          <div [ngClass]="[\'command\']">\n            <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n              <ion-icon name="backspace"></ion-icon>\n            </button>\n            <button small [disabled]="CanEditTable==false" title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n              <ion-icon name="checkmark-circle"></ion-icon>\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\glossary-add-edit-modal\glossary-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], GlossaryAddEditModalPage);
    return GlossaryAddEditModalPage;
}());

//# sourceMappingURL=glossary-add-edit-modal.js.map

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlossaryAddEditModalPageModule", function() { return GlossaryAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__glossary_add_edit_modal__ = __webpack_require__(1533);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GlossaryAddEditModalPageModule = /** @class */ (function () {
    function GlossaryAddEditModalPageModule() {
    }
    GlossaryAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__glossary_add_edit_modal__["a" /* GlossaryAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__glossary_add_edit_modal__["a" /* GlossaryAddEditModalPage */]),
            ],
        })
    ], GlossaryAddEditModalPageModule);
    return GlossaryAddEditModalPageModule;
}());

//# sourceMappingURL=glossary-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=341.js.map