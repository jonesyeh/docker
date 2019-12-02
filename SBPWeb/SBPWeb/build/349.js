webpackJsonp([349],{

/***/ 1319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnDbAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_ViewModel_ConnViewModel__ = __webpack_require__(40);
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
 * Generated class for the ConnModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ConnDbAddEditModalPage = /** @class */ (function () {
    function ConnDbAddEditModalPage(navCtrl, navParams, viewCtrl, loadingCtrl, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.item = new __WEBPACK_IMPORTED_MODULE_3__Model_ViewModel_ConnViewModel__["a" /* ConnViewModel */]();
        this.item.remote_conn_id = navParams.data.item.remote_conn_id;
        this.item.db_provider = navParams.data.item.db_provider;
        this.item.conn_string = navParams.data.item.conn_string;
        this.item.pwd = navParams.data.item.pwd;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.item.conn_type_key = navParams.data.item.conn_type_key;
        this.item.conn_type = navParams.data.item.conn_type;
        if (this.change_mode === "c")
            this.item.remote_conn_id = this.item.remote_conn_id + "_copy";
        this.CanEditConn = navParams.data.CanEditConn;
        this.title = "DB連線";
    }
    ConnDbAddEditModalPage.prototype.Save = function () {
        if (this.item.pwd > "" && this.confirm_pwd != this.item.pwd) {
            this.global.showPopup("密碼錯誤", "確認密碼不一致");
            return;
        }
        this.viewCtrl.dismiss(this.item);
    };
    ConnDbAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ConnDbAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ConnModalPage");
    };
    ConnDbAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: "page-conn-db-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\conn-db-add-edit-modal\conn-db-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>遠端連線編號</ion-label>\n          <ion-input type="text" [disabled]="CanEditConn==false || mode==\'PUT\'" name="remote_conn_id" #remote_conn_id="ngModel" [(ngModel)]="item.remote_conn_id"\n            required maxlength="20"></ion-input>\n\n        </ion-item>\n        <div *ngIf="remote_conn_id.errors && remote_conn_id.touched" class="error-message">\n          遠端連線編號不能為空白\n        </div>\n\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>DB Provider</ion-label>\n          <ion-input type="text" [disabled]="CanEditConn==false" name="db_provider" #db_provider="ngModel" [(ngModel)]="item.db_provider"\n            maxlength="50"></ion-input>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>連線字串</ion-label>\n          <ion-textarea type="text" Rows="5"  required [disabled]="CanEditConn==false" name="conn_string" #conn_string="ngModel" [(ngModel)]="item.conn_string"\n            maxlength="250"></ion-textarea>\n          <!-- <ion-input type="text"  required [disabled]="CanEditConn==false" name="conn_string" #conn_string="ngModel" [(ngModel)]="item.conn_string"\n            maxlength="250"></ion-input> -->\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="change_mode==\'password\' || change_mode==\'c\' ">\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>密碼</ion-label>\n          <ion-input type="password"   [disabled]="CanEditConn==false" name="pwd" #pwd="ngModel" [(ngModel)]="item.pwd"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n    <ion-row *ngIf="change_mode==\'password\' || change_mode==\'c\' " >\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>確認密碼</ion-label>\n          <ion-input type="password"   [disabled]="CanEditConn==false" name="confirm_pwd" #confirmpwd="ngModel" [(ngModel)]="confirm_pwd"></ion-input>\n\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditConn==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n            (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\conn-db-add-edit-modal\conn-db-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__components_global_global__["a" /* GlobalComponent */]])
    ], ConnDbAddEditModalPage);
    return ConnDbAddEditModalPage;
}());

//# sourceMappingURL=conn-db-add-edit-modal.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnDbAddEditModalPageModule", function() { return ConnDbAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__conn_db_add_edit_modal__ = __webpack_require__(1319);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ConnDbAddEditModalPageModule = /** @class */ (function () {
    function ConnDbAddEditModalPageModule() {
    }
    ConnDbAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__conn_db_add_edit_modal__["a" /* ConnDbAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__conn_db_add_edit_modal__["a" /* ConnDbAddEditModalPage */]),
            ],
        })
    ], ConnDbAddEditModalPageModule);
    return ConnDbAddEditModalPageModule;
}());

//# sourceMappingURL=conn-db-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=349.js.map