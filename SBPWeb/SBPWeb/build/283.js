webpackJsonp([283],{

/***/ 1196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExistsVaildator; });
var ExistsVaildator = /** @class */ (function () {
    function ExistsVaildator() {
    }
    ExistsVaildator.validateConnIDFactory = function (lists) {
        return function (c) {
            if (c.value) {
                if (lists) {
                    return lists.findIndex(function (p) { return p === c.value; }) >= 0
                        ? {
                            validateConnIDFactory: true
                        }
                        : null;
                }
                else
                    return null;
            }
            else
                return null;
        };
    };
    ExistsVaildator.EquieFactory = function (compare_name) {
        return function (c) {
            if (c.value) {
                var compare_to = c.parent.get(compare_name).value;
                if (compare_to > "") {
                    return compare_to !== c.value
                        ? {
                            EquieFactory: true
                        }
                        : null;
                }
                else
                    return null;
            }
            else
                return null;
        };
    };
    return ExistsVaildator;
}());

//# sourceMappingURL=ExistsVaildator.js.map

/***/ }),

/***/ 1575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LineAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_conn_services_conn_services__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_global_global__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_ConnHttpViewModel__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__validators_ExistsVaildator__ = __webpack_require__(1196);
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
 * Generated class for the LineAddEditModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LineAddEditModalPage = /** @class */ (function () {
    function LineAddEditModalPage(navCtrl, navParams, ConnServices, loadingCtrl, global, viewCtrl, modalCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ConnServices = ConnServices;
        this.loadingCtrl = loadingCtrl;
        this.global = global;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.formBuilder = formBuilder;
        this.title = "Token申請";
        this.help = "\n  \u672C\u7CFB\u7D71\u63A1\u7528line\u539F\u5EE0\u63D0\u4F9B\u7684Line Notify(\u53C3\u8003https://notify-bot.line.me/zh_TW/),\n \u53EA\u8981\u8207LINE Notify\u9023\u52D5\uFF0CLINE\u7528\u6236\u5C31\u80FD\u8F15\u9B06\u5730\u63A5\u6536\u4F86\u81EA\u5176\u4ED6\u670D\u52D9\u7684\u901A\u77E5\uFF0C\n  \u9996\u5148\u4F60\u5FC5\u9808\u5148\u65B0\u589E\u4E00\u500BToken\u6A19\u7C64\uFF0C\u7528\u4F86\u5132\u5B58Line\u539F\u5EE0\u63D0\u4F9B\u7684Token\uFF0C\n  \u53D6\u5F97Token\u65B9\u6CD5\u6709\u5169\u7A2E\uFF0C\u4E00\u7A2E\u662F\u53D6\u5F97\u767C\u884C\u5B58\u53D6\u6B0A\u6756\u5F8C\u8907\u88FD\u6B0A\u6756\u5F8C\u8CBC\u4E0A\u4E0A\u50B3\u5230\u672C\u7CFB\u7D71\uFF0C\u53E6\u4E00\u65B9\u5F0F\u662F\n  \u4F7F\u7528Line\u81EA\u52D5\u5C07Token\u63D0\u4F9B\u672C\u7CFB\u7D71\u81EA\u52D5\u5132\u5B58\u3002\u6240\u4EE5\u7576\u4F60\u6309\u4E0B\u65B0\u589E(\u5341)\u6642\uFF0C\u8F38\u5165Line\u6A19\u7C64\u5F8C\uFF0C\n  \u6709\u5169\u500B\u6309\u9215\u53EF\u4EE5\u9078\u64C7\u3002\n\n  <<\u624B\u52D5\u5230Line Notify\u7DB2\u7AD9\u624B\u52D5\u8907\u88FD\u53D6\u5F97\u767C\u884C\u5B58\u53D6\u6B0A\u6756\u5F8C\u53D6\u4EE3{token}>>\n\n  \u7CFB\u7D71\u6703\u958B\u555FLine Notify\u7DB2\u7AD9\uFF0C\u82E5\u6C92\u6709\u767B\u5165\u904E\uFF0CLine\u6703\u8981\u6C42\u4F60\u8F38\u5165Line\u5E33\u865F\u767B\u5165\uFF0C\n  (\u672C\u7CFB\u7D71\u4E0D\u6703\u53D6\u5F97\u4F60\u7684Line\u5E33\u865F)\uFF0CLine Notify\u6703\u5E6B\u4F60\u81EA\u52D5\u7522\u751F\u4E00\u500BLine Notify\u7FA4\u7D44\n  \u4E26\u767C\u9001\u8A0A\u606F\u7D66\u4F60\uFF0C\u7576\u767B\u5165\u5F8C\u5728\u81EA\u5DF1\u7684\u59D3\u540D\u9EDE\u9078\u500B\u4EBA\u9801\u9762\uFF0C\u6309\u4E0B\u6700\u4E0B\u65B9\u6709\u4E00\u500B\u767C\u884C\u6B0A\u6756\u6309\u9215\u5F8C\uFF0C\n  \u8F38\u5165\u6B0A\u6756\u540D\u7A31(\u6700\u597D\u8207\u672C\u7CFB\u7D71\u7684Token\u6A19\u7C64\u4E00\u6A23)\uFF0C\u9019\u6642\u5019\uFF0C\u4F60\u540C\u6642\u53EF\u4EE5\u9078\u64C7\u672A\u4F86\u8981\u900F\u904E\u672C\u7CFB\u7D71\u767C\u9001\u7D66\u4F60\u7684Line\u7FA4\u7D44\uFF0C\n  \u7576\u4F60\u6309\u4E0B\u767C\u884C\u6642\uFF0CLine\u5C07\u7522\u751F\u7684\u6B0A\u6756\uFF0C\u8ACB\u6309\u4E0B\u8907\u88FD\u4E26\u8CBC\u4E0A\u5230\u767C\u884C\u5B58\u53D6\u6B0A\u6756\u6B04\u4F4D\u53D6\u4EE3{token}\n  \u4F8B\u5982\uFF1ABearer 94rNOTozTHknR1dbtZ7qa\n\n  <<\u81EA\u52D5\u5230Line Notify\u53D6\u5F97\u767C\u884C\u5B58\u53D6\u6B0A\u6756\u5132\u5B58\u8CC7\u6599\u5EAB\u5167>>\n\n  \u7CFB\u7D71\u6703\u958B\u555FLine Notify\u7DB2\u7AD9\uFF0C\u82E5\u6C92\u6709\u767B\u5165\u904E\uFF0CLine\u6703\u8981\u6C42\u4F60\u8F38\u5165Line\u5E33\u865F\u767B\u5165\uFF0C\n  (\u672C\u7CFB\u7D71\u4E0D\u6703\u53D6\u5F97\u4F60\u7684Line\u5E33\u865F)\uFF0CLine Notify\u6703\u5E6B\u4F60\u81EA\u52D5\u7522\u751F\u4E00\u500BLine Notify\u7FA4\u7D44\n  \u4E26\u767C\u9001\u8A0A\u606F\u7D66\u4F60\uFF0C\u7576\u767B\u5165\u5F8C\u53EF\u4EE5\u9078\u64C7\u672A\u4F86\u8981\u900F\u904E\u672C\u7CFB\u7D71\u767C\u9001\u7D66\u4F60\u7684Line\u7FA4\u7D44\uFF0C\n  \u7576\u4F60\u6309\u4E0B\u540C\u610F\u9023\u52D5\u6642\uFF0C\u672C\u7CFB\u7D71\u6703\u5F9ELine Notify\u53D6\u5F97Token\u4E26\u5132\u5B58\u5728\u672C\u7CFB\u7D71\u8CC7\u6599\u5EAB\u5167\uFF0C\n   \u540C\u6642\u6703\u900F\u904ELine\u5BC4\u767CToken\u7D66\u4F60\uFF0C\u9019\u6642\u5019\u4F60\u6703\u5728\u7DB2\u9801\u4E0A\u6536\u5230\u6210\u529F\u8A0A\u606F\uFF0C\u5C07\u7DB2\u9801\u95DC\u9589\u5373\u53EF\uFF0C\n   \u7136\u5F8C\u56DE\u5230\u65B0\u589E\u756B\u9762\u6309\u4E0B\u91CD\u65B0\u67E5\u8A62\u5C31\u53EF\u4EE5\u770B\u5230\u65B0\u589E\u7684Token\u6A19\u7C64\uFF0C\u672A\u4F86\u518D\u900F\u904E\u5BC4\u767C\u8A0A\u606F\u8A2D\u5B9A\u9032\u884C\u5BC4\u767C\u8A0A\u606F\u5373\u53EF\n   ";
        this.remote_conn_id_list = [];
        this.mode = navParams.data.mode;
        this.id_list = navParams.data.id_list.Model;
        for (var i = 0; i < this.id_list.length; i++) {
            this.remote_conn_id_list.push(this.id_list[i].remote_conn_id);
        }
        this.item = new __WEBPACK_IMPORTED_MODULE_5__Model_ViewModel_ConnHttpViewModel__["a" /* ConnHttpViewModel */]();
        this.item.remote_conn_id = navParams.data.item.remote_conn_id;
        this.item.user_name = navParams.data.item.user_name;
        this.item.conn_string = navParams.data.item.conn_string;
        this.item.pwd = navParams.data.item.pwd;
        this.item.creator = navParams.data.item.creator;
        this.item.create_time = navParams.data.item.create_time;
        this.item.modifier = navParams.data.item.modifier;
        this.item.last_update_time = navParams.data.item.last_update_time;
        this.item.conn_type_key = navParams.data.item.conn_type_key;
        this.item.conn_type = navParams.data.item.conn_type;
        this.myForm = this.formBuilder.group({
            remote_conn_id: new __WEBPACK_IMPORTED_MODULE_0__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_6__validators_ExistsVaildator__["a" /* ExistsVaildator */].validateConnIDFactory(this.remote_conn_id_list)),
            pwd: [''],
        });
        if (this.mode == "POST")
            this.GetLineUrl("I");
        else
            this.GetLineUrl("U");
    }
    LineAddEditModalPage.prototype.GetLineUrl = function (data_action) {
        var _this = this;
        this.global.createLoader("讀取資料中...");
        this.global.loading.present().then(function () {
            _this.ConnServices.GetLineUrlAsync(data_action).subscribe(function (data) {
                if (data.DidError === true) {
                    _this.global.dismissLoading();
                    _this.global.showError(data.ErrorMessage);
                }
                else {
                    _this.line_url = data.Model;
                    _this.global.dismissLoading();
                }
            }, function (err) {
                _this.global.dismissLoading();
                _this.global.showError("無法連上WebAPI伺服器-" + err.message);
            });
        });
    };
    LineAddEditModalPage.prototype.OpenLineNotify = function () {
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        window.open("https://notify-bot.line.me/my/", "_blank", "width=" + this.innerWidth + ",height=" + this.innerHeight + ",toolbar=no,top=0,left=0,status=no,scrollbars=yes,resizable=no,menubar=no,location=no,directories=no");
    };
    LineAddEditModalPage.prototype.OpenLineNotifyOAuth = function () {
        this.innerWidth = window.innerWidth;
        this.innerHeight = window.innerHeight;
        window.open(this.line_url + this.item.remote_conn_id, "_blank", "width=" + this.innerWidth + ",height=" + this.innerHeight + ",toolbar=no,top=0,left=0,status=no,scrollbars=yes,resizable=no,menubar=no,location=no,directories=no");
        this.viewCtrl.dismiss();
    };
    LineAddEditModalPage.prototype.Help = function () {
        var _this = this;
        this.global.createLoader();
        this.global.loading.present().then(function () {
            _this.global.showMessage("說明", _this.help);
        });
    };
    LineAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    LineAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    LineAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LineAddEditModalPage');
    };
    LineAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-line-add-edit-modal',template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\line-add-edit-modal\line-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="myForm">\n\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>Token標簽</ion-label>\n          <ion-input type="text" [readonly]="mode==\'PUT\'" formControlName="remote_conn_id" [(ngModel)]="item.remote_conn_id"\n            required maxlength="20" ></ion-input>\n\n        </ion-item>\n        <div *ngIf="myForm.get(\'remote_conn_id\').hasError(\'required\') &&  myForm.controls[\'remote_conn_id\'].touched" class="error-message">\n          Token標簽不能為空\n        </div>\n        <div *ngIf="myForm.get(\'remote_conn_id\').hasError(\'validateConnIDFactory\') &&  myForm.controls[\'remote_conn_id\'].touched" class="error-message">\n          Token標簽已經被其他人使用\n        </div>\n\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>發行存取權杖</ion-label>\n          <ion-input type="text" title="手動到Line Notify網站手動複製取得發行存取權杖後貼上"  [readonly]="mode==\'PUT\'" formControlName="pwd"  [(ngModel)]="item.pwd"\n             maxlength="128"></ion-input>\n        </ion-item>\n\n\n      </ion-col>\n      <ion-col>\n        <button small title="手動到Line Notify網站手動複製取得發行存取權杖後取代{token}"  ion-button color="dark"  icon-left\n            (click)="OpenLineNotify()">\n            <ion-icon name="browsers"></ion-icon>\n          </button>\n          <button small title="自動到Line Notify取得發行存取權杖儲存資料庫內" [disabled]="!myForm.valid" ion-button color="dark"  icon-left\n            (click)="OpenLineNotifyOAuth()">\n            <ion-icon name="chatbubbles"></ion-icon>\n          </button>\n      </ion-col>\n    </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small title="確認"  ion-button color="dark" [disabled]="!myForm.valid" icon-left\n            (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n          <button small title="說明"  ion-button color="dark"  icon-left\n          (click)="Help()">\n          <ion-icon name="help"></ion-icon>\n        </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\line-add-edit-modal\line-add-edit-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_conn_services_conn_services__["a" /* ConnServicesProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__components_global_global__["a" /* GlobalComponent */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormBuilder */]])
    ], LineAddEditModalPage);
    return LineAddEditModalPage;
}());

//# sourceMappingURL=line-add-edit-modal.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineAddEditModalPageModule", function() { return LineAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__line_add_edit_modal__ = __webpack_require__(1575);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LineAddEditModalPageModule = /** @class */ (function () {
    function LineAddEditModalPageModule() {
    }
    LineAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__line_add_edit_modal__["a" /* LineAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__line_add_edit_modal__["a" /* LineAddEditModalPage */]),
            ],
        })
    ], LineAddEditModalPageModule);
    return LineAddEditModalPageModule;
}());

//# sourceMappingURL=line-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=283.js.map