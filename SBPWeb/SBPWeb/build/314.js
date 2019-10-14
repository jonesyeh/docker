webpackJsonp([314],{

/***/ 1666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableCopyModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_CopyViewModel__ = __webpack_require__(1667);
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
 * Generated class for the TableModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TableCopyModalPage = /** @class */ (function () {
    function TableCopyModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_CopyViewModel__["a" /* CopyViewModel */]();
        this.item.src_schemaname = navParams.data.item.schemaname;
        this.item.src_tablename = navParams.data.item.tablename;
        this.item.to_schemaname = navParams.data.item.schemaname;
        this.item.to_tablename = navParams.data.item.tablename;
        this.item.to_tablecname = navParams.data.item.tablecname;
        this.item.to_file_group = navParams.data.item.file_group;
        this.title = "複製";
    }
    TableCopyModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    TableCopyModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    TableCopyModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad TableModalPage");
    };
    TableCopyModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-table-copy-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\table-copy-modal\table-copy-modal.html"*/'<ion-header>\n\n    <ion-navbar>\n\n      <ion-title>{{title}}</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n  <ion-content padding>\n    <form #Form="ngForm" >\n\n      <ion-row>\n          <ion-col col-12 col-sm-6 >\n              <ion-item>\n                <ion-label stacked>來源結構描述</ion-label>\n                <ion-input type="text" disabled="true" name="src_schemaname" #src_schemaname="ngModel" [(ngModel)]="item.src_schemaname" required></ion-input>\n              </ion-item>\n\n            </ion-col>\n        <ion-col col-12 col-sm-6>\n          <ion-item>\n            <ion-label stacked>來源資料表名稱</ion-label>\n            <ion-input type="text" disabled="true" name="src_tablename" #src_tablename="ngModel" [(ngModel)]="item.src_tablename" required></ion-input>\n          </ion-item>\n\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n          <ion-col col-12 col-sm-6 >\n              <ion-item>\n                <ion-label stacked>結構描述</ion-label>\n                <ion-input type="text" [disabled]="CanEditTable==false || mode==\'PUT\'" name="to_schemaname" #to_schemaname="ngModel" [(ngModel)]="item.to_schemaname" required></ion-input>\n              </ion-item>\n              <div *ngIf="to_schemaname.errors && to_schemaname.touched" class="error-message">\n                  結構描述不能為空白\n              </div>\n            </ion-col>\n        <ion-col col-12 col-sm-6>\n          <ion-item>\n            <ion-label stacked>資料表名稱</ion-label>\n            <ion-input type="text" [disabled]="CanEditTable==false || mode==\'PUT\'" name="to_tablename" #to_tablename="ngModel" [(ngModel)]="item.to_tablename" required></ion-input>\n          </ion-item>\n          <div *ngIf="to_tablename.errors && to_tablename.touched" class="error-message">\n            資料表名稱不能為空白\n          </div>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <ion-item>\n            <ion-label stacked>資料表說明</ion-label>\n            <ion-input type="text" [disabled]="CanEditTable==false" name="to_tablecname" #to_tablecname="ngModel" [(ngModel)]="item.to_tablecname" required></ion-input>\n          </ion-item>\n          <div *ngIf="to_tablecname.errors && to_tablecname.touched" class="error-message">\n            資料表說明不能為空白\n          </div>\n        </ion-col>\n\n      </ion-row>\n      <ion-row>\n\n        <ion-col col-12  col-sm-6>\n            <ion-item>\n              <ion-label stacked>檔案群組</ion-label>\n              <ion-input type="text" [disabled]="CanEditTable==false" name="to_file_group" #to_file_group="ngModel" [(ngModel)]="item.to_file_group" required></ion-input>\n\n            </ion-item>\n            <div *ngIf="to_file_group.errors && to_file_group.touched" class="error-message">\n              檔案群組不能為空白\n            </div>\n          </ion-col>\n      </ion-row>\n\n    </form>\n\n  </ion-content>\n  <ion-footer>\n    <ion-toolbar>\n      <ion-row>\n        <ion-col>\n          <div [ngClass]="[\'command\']">\n            <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n              <ion-icon name="backspace"></ion-icon>\n            </button>\n            <button small [disabled]="CanEditTable==false" title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n              <ion-icon name="checkmark-circle"></ion-icon>\n            </button>\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-toolbar>\n  </ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\table-copy-modal\table-copy-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
    ], TableCopyModalPage);
    return TableCopyModalPage;
}());

//# sourceMappingURL=table-copy-modal.js.map

/***/ }),

/***/ 1667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CopyViewModel; });
var CopyViewModel = /** @class */ (function () {
    function CopyViewModel() {
    }
    return CopyViewModel;
}());

//# sourceMappingURL=CopyViewModel.js.map

/***/ }),

/***/ 747:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableCopyModalPageModule", function() { return TableCopyModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__table_copy_modal__ = __webpack_require__(1666);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TableCopyModalPageModule = /** @class */ (function () {
    function TableCopyModalPageModule() {
    }
    TableCopyModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__table_copy_modal__["a" /* TableCopyModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__table_copy_modal__["a" /* TableCopyModalPage */]),
            ],
        })
    ], TableCopyModalPageModule);
    return TableCopyModalPageModule;
}());

//# sourceMappingURL=table-copy-modal.module.js.map

/***/ })

});
//# sourceMappingURL=314.js.map