webpackJsonp([287],{

/***/ 1093:
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

/***/ 1689:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UnZipFileLoopPwdAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_String__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Model_ViewModel_UnZipFileLoopPwdViewModel__ = __webpack_require__(1093);
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
        this.confirm_error = false;
        this.show_pwd = true;
        if (navParams.data.file_func_proc_key === "060|ENC" || navParams.data.file_func_proc_key === "060|DEC")
            this.show_pwd = false;
        else
            this.show_pwd = true;
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
        this.item.enc_type = navParams.data.item.enc_type;
        this.item.enc_type_desc = navParams.data.item.enc_type_desc;
        this.item.key = navParams.data.item.key;
        this.item.iv = navParams.data.item.iv;
        this.item.pad_left = navParams.data.item.pad_left;
        this.item.CliperMode = navParams.data.item.CliperMode;
        this.item.CliperMode_Desc = navParams.data.item.CliperMode_Desc;
        this.item.input_pwd = navParams.data.item.input_pwd;
        this.item.pwd = navParams.data.item.pwd;
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
    UnZipFileLoopPwdAddEditModalPage.prototype.Change_pwd = function () {
        if (this.item.enc_type === "PWD") {
            this.item.pwd = this.item.input_pwd;
        }
        else {
            var enc = "ENC=" + this.item.enc_type + "_" + this.item.CliperMode + (this.item.pad_left ? "1" : "0");
            this.item.pwd = enc + ";KEY=" + this.item.key + ";IV=" + this.item.iv + ";PWD=" + this.item.input_pwd;
        }
    };
    UnZipFileLoopPwdAddEditModalPage.prototype.Check_pwd = function () {
        if (this.item.input_pwd === undefined)
            this.item.input_pwd = "";
        if (this.confirm_password === undefined)
            this.confirm_password = "";
        if (this.item.input_pwd != this.confirm_password)
            this.confirm_error = true;
        else
            this.confirm_error = false;
    };
    UnZipFileLoopPwdAddEditModalPage.prototype.SelectEncType = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.enc_type,
            code_type: "079"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.enc_type = select_data.code_no;
            _this.item.enc_type_desc = select_data.code_desc;
            if (_this.item.CliperMode === "") {
                _this.item.CliperMode = "4";
                _this.item.CliperMode_Desc = "ECB";
            }
            if (_this.item.input_pwd === undefined)
                _this.item.input_pwd = "";
            _this.Change_pwd();
        });
        modal.present();
    };
    UnZipFileLoopPwdAddEditModalPage.prototype.SelectCliperMode = function () {
        var _this = this;
        var modal = this.modalCtrl.create("CodeSelectModalPage", {
            select_key: this.item.CliperMode,
            code_type: "080"
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.CliperMode = select_data.code_no;
            _this.item.CliperMode_Desc = select_data.code_desc;
            _this.Change_pwd();
        });
        modal.present();
    };
    UnZipFileLoopPwdAddEditModalPage.prototype.Save = function () {
        if (this.show_pwd) {
            if (this.item.input_pwd === undefined)
                this.item.input_pwd = "";
            if (this.confirm_password === undefined)
                this.confirm_password = "";
            if (this.confirm_password != this.item.input_pwd) {
                this.global.showPopup("密碼錯誤", "確認密碼不一致");
                return;
            }
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
            selector: "page-un-zip-file-loop-pwd-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\un-zip-file-loop-pwd-add-edit-modal\un-zip-file-loop-pwd-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n\n    <ion-row *ngIf="mode==\'PUT\'">\n      <ion-col >\n        <ion-item>\n          <ion-label stacked>迴圈序號</ion-label>\n          <ion-input  type="number" [disabled]=true name="file_loop_seq" #file_loop_seq="ngModel" [(ngModel)]="item.file_loop_seq"\n            required></ion-input>\n        </ion-item>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col >\n        <ion-item>\n          <ion-label stacked>JOB01</ion-label>\n          <ion-input type="text" [disabled]="CanEditBatch==false || mode==\'PUT\' " name="job01" #job01="ngModel" [(ngModel)]="item.job01"\n            maxlength="50"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n        <ion-col >\n          <ion-item>\n            <ion-label stacked>JOB02</ion-label>\n            <ion-input type="text" [disabled]="CanEditBatch==false || mode==\'PUT\'" name="job02" #job02="ngModel" [(ngModel)]="item.job02"\n              maxlength="50"></ion-input>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n          <ion-col >\n            <ion-item>\n              <ion-label stacked>JOB03</ion-label>\n              <ion-input type="text" [disabled]="CanEditBatch==false || mode==\'PUT\'" name="job03" #job03="ngModel" [(ngModel)]="item.job03"\n                maxlength="50"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col >\n            <ion-item>\n              <ion-label stacked>LC01</ion-label>\n              <ion-input type="text" [disabled]="CanEditBatch==false || mode==\'PUT\'" name="lc01" #lc01="ngModel" [(ngModel)]="item.lc01"\n                maxlength="50"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row>\n\n        <ion-row>\n            <ion-col >\n              <ion-item>\n                <ion-label stacked>LC02</ion-label>\n                <ion-input type="text" [disabled]="CanEditBatch==false || mode==\'PUT\'" name="lc02" #lc02="ngModel" [(ngModel)]="item.lc02"\n                  maxlength="50"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n              <ion-col >\n                <ion-item>\n                  <ion-label stacked>LC03</ion-label>\n                  <ion-input type="text" [disabled]="CanEditBatch==false || mode==\'PUT\'" name="lc03" #lc03="ngModel" [(ngModel)]="item.lc03"\n                    maxlength="50"></ion-input>\n                </ion-item>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n              <ion-col col-12 col-sm-6>\n                <ion-item>\n                  <ion-label stacked>內文壓密演算法</ion-label>\n                  <ion-input type="text" [disabled]="CanEditBatch==false" name="enc_type" #enc_type="ngModel" [(ngModel)]="item.enc_type"\n                    ></ion-input>\n        \n                  <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectEncType()">\n                    <ion-icon name="arrow-dropdown"></ion-icon>\n                  </button>\n                </ion-item>        \n              </ion-col>\n              <ion-col col-12 col-sm-6>\n                <ion-item>\n                  <ion-label stacked>內文壓密演算法</ion-label>\n                  <ion-input type="text" [disabled]=true name="enc_type_desc" #enc_type_desc="ngModel" [(ngModel)]="item.enc_type_desc"\n                    ></ion-input>\n        \n                \n                </ion-item>        \n              </ion-col>\n            </ion-row>\n            <ion-row>\n           \n            <ion-col *ngIf="item.enc_type!=\'PWD\'" col-12 col-sm-4>\n              <ion-item>\n                <ion-label stacked>CliperMode</ion-label>\n                <ion-input type="text" required readonly=true [disabled]="CanEditBatch==false" name="CliperMode" #CliperMode="ngModel" [(ngModel)]="item.CliperMode"\n                  ></ion-input>\n        \n                <button ion-button outline item-end *ngIf="CanEditBatch==true" icon-right (click)="SelectCliperMode()">\n                  <ion-icon name="arrow-dropdown"></ion-icon>\n                </button>\n              </ion-item>        \n              <div *ngIf="CliperMode.errors && CliperMode.touched" class="error-message">\n                CliperMode不能為空白\n              </div>\n            </ion-col>\n            <ion-col *ngIf="item.enc_type!=\'PWD\'" col-12 col-sm-4>\n              <ion-item>\n                <ion-label stacked>CliperMode</ion-label>\n                <ion-input type="text" readonly=true [disabled]=true name="CliperMode_Desc" #CliperMode_Desc="ngModel" [(ngModel)]="item.CliperMode_Desc"\n                  ></ion-input>          \n              </ion-item>        \n              \n            </ion-col>\n            <ion-col *ngIf="item.enc_type!=\'PWD\'" col-12 col-sm-4>\n              <ion-item>\n                <ion-label stacked>左補空白</ion-label>\n                <ion-checkbox name="pad_left" [disabled]="CanEditBatch==false" (click)="Change_pwd()" [(ngModel)]="item.pad_left"></ion-checkbox>\n              </ion-item>\n        \n            </ion-col>\n            </ion-row>\n            <ion-row *ngIf="item.enc_type!=\'PWD\'" >\n              <ion-col col-12 col-md-6 >\n                <ion-item>\n                  <ion-label stacked>Key</ion-label>\n                  <ion-input required type="text" (change)="Change_pwd()" [disabled]="CanEditBatch==false" name="key" #key="ngModel" [(ngModel)]="item.key" maxlength="128"></ion-input>\n                </ion-item>\n                <div *ngIf="key.errors && key.touched" class="error-message">\n                  Key不能為空白\n                </div>\n              </ion-col>\n              <ion-col col-12 col-md-6>\n                <ion-item>\n                  <ion-label stacked>IV</ion-label>\n                  <ion-input type="text" (change)="Change_pwd()" [disabled]="CanEditBatch==false" name="iv" #iv="ngModel" [(ngModel)]="item.iv" maxlength="128"></ion-input>\n                </ion-item>\n              </ion-col>\n             \n            </ion-row>\n            <ion-row *ngIf="item.enc_type!=\'PWD\'" >\n              <ion-col>\n                <ion-item>\n                  <ion-label stacked>密碼</ion-label>\n                  <ion-input [disabled]="CanEditBatch==false" (keyup)="Change_pwd()" type="password"  name="input_enc_pwd" #input_enc_pwd="ngModel" [(ngModel)]="item.input_pwd"\n                    ></ion-input>\n        \n                </ion-item>\n               \n        \n              </ion-col>\n        \n            </ion-row>\n            <ion-row *ngIf="item.enc_type!=\'PWD\'">\n              <ion-col>\n                <ion-item>\n                    <ion-label stacked>確認密碼</ion-label>\n                  <ion-input [disabled]="CanEditBatch==false" (keyup)="Check_pwd()" type="password"  name="confirm_password" #confirmpassword="ngModel" [(ngModel)]="confirm_password"\n                   ></ion-input>\n                </ion-item>       \n        \n                <div *ngIf="confirm_error && confirmpassword.touched" class="error-message">\n                  密碼與確認密碼不符合\n                </div>\n              </ion-col>\n        \n            </ion-row>\n            <ion-row *ngIf="item.enc_type===\'PWD\' && show_pwd===true">\n              <ion-col>\n                <ion-item>\n                  <ion-label stacked>密碼</ion-label>\n                  <ion-input [disabled]="CanEditBatch==false" (keyup)="Change_pwd()" type="password"  name="input_pwd" #input_pwd="ngModel" [(ngModel)]="item.input_pwd"\n                  required></ion-input>\n        \n                </ion-item>\n                <div *ngIf="input_pwd.errors && input_pwd.touched" class="error-message">\n                  密碼不能為空白\n                </div>\n        \n              </ion-col>\n        \n            </ion-row>\n            \n            <ion-row *ngIf="item.enc_type===\'PWD\' && show_pwd===true">\n              <ion-col>\n                <ion-item>\n                    <ion-label stacked>確認密碼</ion-label>\n                  <ion-input [disabled]="CanEditBatch==false" (keyup)="Check_pwd()" type="password"  name="confirm_password" #confirmpassword="ngModel" [(ngModel)]="confirm_password"\n                    required ></ion-input>\n                </ion-item>\n        \n                <div *ngIf="confirmpassword.errors && confirmpassword.touched" class="error-message">\n                  確認密碼不能為空白\n                </div>\n        \n                <div *ngIf="confirm_error && confirmpassword.touched" class="error-message">\n                  密碼與確認密碼不符合\n                </div>\n              </ion-col>\n        \n            </ion-row>\n            <!-- <ion-row *ngIf="item.enc_type>\'\'">\n              <ion-col>\n                <ion-item>\n                  <ion-label stacked>內文壓密字串</ion-label>\n                  <ion-input [disabled]=true  name="pwd" #pwd="ngModel" [(ngModel)]="item.pwd"\n                    ></ion-input>\n        \n                </ion-item>\n               \n        \n              </ion-col>\n        \n            </ion-row> -->\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認" [disabled]="CanEditBatch==false" ion-button color="dark" [disabled]="!Form.form.valid" icon-left\n            (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\un-zip-file-loop-pwd-add-edit-modal\un-zip-file-loop-pwd-add-edit-modal.html"*/
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

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnZipFileLoopPwdAddEditModalPageModule", function() { return UnZipFileLoopPwdAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__un_zip_file_loop_pwd_add_edit_modal__ = __webpack_require__(1689);
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
//# sourceMappingURL=287.js.map