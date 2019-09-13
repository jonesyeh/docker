webpackJsonp([286],{

/***/ 1091:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnZipFileLoopPwdViewModel; });
var UnZipFileLoopPwdViewModel = /** @class */ (function () {
    function UnZipFileLoopPwdViewModel() {
    }
    return UnZipFileLoopPwdViewModel;
}());

//# sourceMappingURL=UnZipFileLoopPwdViewModel.js.map

/***/ }),

/***/ 1687:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnZipFileLoopPwdAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_ViewModel_UnZipFileLoopPwdViewModel__ = __webpack_require__(1091);
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
 * Generated class for the UnZipFileLoopPwdModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UnZipFileLoopPwdAddEditModalPage = /** @class */ (function () {
    function UnZipFileLoopPwdAddEditModalPage(navCtrl, navParams, viewCtrl, loadingCtrl, global, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.modalCtrl = modalCtrl;
        this.mode = navParams.data.mode;
        this.change_mode = navParams.data.change_mode;
        this.file_type_key = navParams.data.file_type_key;
        this.item = new __WEBPACK_IMPORTED_MODULE_4__Model_ViewModel_UnZipFileLoopPwdViewModel__["a" /* UnZipFileLoopPwdViewModel */]();
        this.item.file_loop_seq = navParams.data.item.file_loop_seq;
        this.item.exec_file_seq = navParams.data.item.exec_file_seq;
        this.item.job01 = navParams.data.item.job01;
        this.item.job02 = navParams.data.item.job02;
        this.item.job03 = navParams.data.item.job03;
        this.item.lc01 = navParams.data.item.lc01;
        this.item.lc02 = navParams.data.item.lc02;
        this.item.lc03 = navParams.data.item.lc03;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        // if (this.change_mode!="e") {
        //   this.get_max_exec_seq();
        // }
        this.CanEditBatch = navParams.data.CanEditBatch;
        this.title = __WEBPACK_IMPORTED_MODULE_3__Model_String__["a" /* String */].Format("{0}", this.item.exec_file_seq);
    }
    // get_max_exec_seq() {
    //   this.global.createLoader("取得最大值中...");
    //   this.global.loading.present().then(() => {
    //     this.UnZipFileLoopPwdServices.GetMaxExecSeqAsync(
    //       this.item.exec_file_seq
    //     ).subscribe(
    //       data => {
    //         if (data.DidError === true) {
    //           this.global.dismissLoading();
    //           this.global.showError(data.ErrorMessage);
    //         } else {
    //           this.item.exec_seq = data.Model;
    //           this.item.file_loop_seq=this.item.exec_file_seq*100+this.item.exec_seq;
    //           this.global.dismissLoading();
    //         }
    //       },
    //       err => {
    //         this.global.dismissLoading();
    //         this.global.showError("無法連上WebAPI伺服器-"+err.message);
    //       }
    //     );
    //   });
    // }
    UnZipFileLoopPwdAddEditModalPage.prototype.Save = function () {
        if (this.confirm_password != this.item.pwd) {
            this.global.showPopup("密碼錯誤", "確認密碼不一致");
            return;
        }
        this.viewCtrl.dismiss(this.item);
    };
    UnZipFileLoopPwdAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    UnZipFileLoopPwdAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad UnZipFileLoopPwdModalPage");
    };
    UnZipFileLoopPwdAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: "page-un-zip-file-loop-pwd-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\un-zip-file-loop-pwd-add-edit-modal\un-zip-file-loop-pwd-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n\n    <ion-row *ngIf="mode==\'PUT\'">\n      <ion-col >\n        <ion-item>\n          <ion-label stacked>迴圈序號</ion-label>\n          <ion-input  type="number" [disabled]=true name="file_loop_seq" #file_loop_seq="ngModel" [(ngModel)]="item.file_loop_seq"\n            required></ion-input>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col >\n        <ion-item>\n          <ion-label stacked>JOB01</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false" name="job01" #job01="ngModel" [(ngModel)]="item.job01"\n            maxlength="50"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col >\n          <ion-item>\n            <ion-label stacked>JOB02</ion-label>\n            <ion-input type="text" [disabled]="CanEditBatch==false" name="job02" #job02="ngModel" [(ngModel)]="item.job02"\n              maxlength="50"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col >\n            <ion-item>\n              <ion-label stacked>JOB03</ion-label>\n              <ion-input type="text" [disabled]="CanEditBatch==false" name="job03" #job03="ngModel" [(ngModel)]="item.job03"\n                maxlength="50"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col >\n            <ion-item>\n              <ion-label stacked>LC01</ion-label>\n              <ion-input type="text" [disabled]="CanEditBatch==false" name="lc01" #lc01="ngModel" [(ngModel)]="item.lc01"\n                maxlength="50"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col >\n              <ion-item>\n                <ion-label stacked>LC02</ion-label>\n                <ion-input type="text" [disabled]="CanEditBatch==false" name="lc02" #lc02="ngModel" [(ngModel)]="item.lc02"\n                  maxlength="50"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col >\n                <ion-item>\n                  <ion-label stacked>LC03</ion-label>\n                  <ion-input type="text" [disabled]="CanEditBatch==false" name="lc03" #lc03="ngModel" [(ngModel)]="item.lc03"\n                    maxlength="50"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                  <ion-label stacked>密碼</ion-label>\n                  <ion-input [disabled]="CanEditBatch==false" type="password"  name="zip_pwd" #zip_pwd="ngModel" [(ngModel)]="item.pwd"\n                    ></ion-input>\n\n                </ion-item>\n                <div *ngIf="zip_pwd.errors && zip_pwd.touched" class="error-message">\n                  密碼不能為空白\n                </div>\n\n              </ion-col>\n\n            </ion-row>\n            <ion-row>\n              <ion-col>\n                <ion-item>\n                    <ion-label stacked>確認密碼</ion-label>\n                  <ion-input [disabled]="CanEditBatch==false" type="password"  name="confirm_password" #confirmpassword="ngModel" [(ngModel)]="confirm_password"\n                    required ></ion-input>\n                </ion-item>\n\n                <div *ngIf="confirmpassword.errors && confirmpassword.touched" class="error-message">\n                  密碼不能為空白\n                </div>\n\n\n              </ion-col>\n\n            </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditBatch==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n            (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\un-zip-file-loop-pwd-add-edit-modal\un-zip-file-loop-pwd-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_0__components_global_global__["a" /* GlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], UnZipFileLoopPwdAddEditModalPage);
    return UnZipFileLoopPwdAddEditModalPage;
}());

//# sourceMappingURL=un-zip-file-loop-pwd-add-edit-modal.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnZipFileLoopPwdAddEditModalPageModule", function() { return UnZipFileLoopPwdAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__un_zip_file_loop_pwd_add_edit_modal__ = __webpack_require__(1687);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UnZipFileLoopPwdAddEditModalPageModule = /** @class */ (function () {
    function UnZipFileLoopPwdAddEditModalPageModule() {
    }
    UnZipFileLoopPwdAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__un_zip_file_loop_pwd_add_edit_modal__["a" /* UnZipFileLoopPwdAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__un_zip_file_loop_pwd_add_edit_modal__["a" /* UnZipFileLoopPwdAddEditModalPage */]),
            ],
        })
    ], UnZipFileLoopPwdAddEditModalPageModule);
    return UnZipFileLoopPwdAddEditModalPageModule;
}());

//# sourceMappingURL=un-zip-file-loop-pwd-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=286.js.map