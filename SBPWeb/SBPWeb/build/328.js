webpackJsonp([328],{

/***/ 1616:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgramDetailAddEditModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_ProgramPageViewModel__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Model_ViewModel_ProgramViewModel__ = __webpack_require__(49);
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
 * Generated class for the ProgramDetailModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProgramDetailAddEditModalPage = /** @class */ (function () {
    function ProgramDetailAddEditModalPage(navCtrl, navParams, viewCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.item = new __WEBPACK_IMPORTED_MODULE_2__Model_ViewModel_ProgramPageViewModel__["a" /* ProgramPageViewModel */]();
        this.mode = navParams.data.mode;
        if (this.mode === "PUT") {
            this.item.page_name = navParams.data.item.page_name;
            this.item.page_desc = navParams.data.item.page_desc;
            this.item.program_no = navParams.data.item.program_no;
            this.item.creator = navParams.data.item.creator;
            this.item.create_time = navParams.data.item.create_time;
            this.item.modifier = navParams.data.item.modifier;
            this.item.last_update_time = navParams.data.item.last_update_time;
            this.CanEditPermission = navParams.data.CanEditPermission;
            if (navParams.data.item) {
                var p = new __WEBPACK_IMPORTED_MODULE_3__Model_ViewModel_ProgramViewModel__["a" /* ProgramViewModel */]();
                p.program_no = navParams.data.item.ProgramViewModel.program_no;
                p.program_desc = navParams.data.item.ProgramViewModel.program_desc;
                p.program_name = navParams.data.item.ProgramViewModel.program_name;
                p.bus_type_key = navParams.data.item.ProgramViewModel.bus_type_key;
                p.program_type_key =
                    navParams.data.item.ProgramViewModel.program_type_key;
                p.program_type_seq =
                    navParams.data.item.ProgramViewModel.program_type_seq;
                p.program_path_key =
                    (navParams.data.item &&
                        navParams.data.item.ProgramViewModel.program_path_key) ||
                        null;
                p.master_program_no =
                    (navParams.data.item &&
                        navParams.data.item.ProgramViewModel.master_program_no) ||
                        null;
                p.parent_program_no =
                    (navParams.data.item &&
                        navParams.data.item.ProgramViewModel.parent_program_no) ||
                        null;
                p.menu_key =
                    (navParams.data.item &&
                        navParams.data.item.ProgramViewModel.menu_key) ||
                        null;
                p.audit_flag =
                    (navParams.data.item &&
                        navParams.data.item.ProgramViewModel.audit_flag) ||
                        null;
                p.creator = navParams.data.item.ProgramViewModel.creator;
                p.create_time = navParams.data.item.ProgramViewModel.create_time;
                p.modifier = navParams.data.item.ProgramViewModel.modifier;
                p.last_update_time =
                    navParams.data.item.ProgramViewModel.last_update_time;
                this.item.ProgramViewModel = p;
                if (this.mode === "PUT")
                    this.title = "修改";
                else
                    this.title = "新增";
            }
        }
    }
    ProgramDetailAddEditModalPage.prototype.SelectProgram = function () {
        var _this = this;
        var modal = this.modalCtrl.create("ProgramDetailSelectModalPage", {
            item: this.item
        });
        modal.onDidDismiss(function (select_data) {
            if (select_data == null)
                return;
            _this.item.program_no = select_data.program_no;
            _this.item.ProgramViewModel = select_data;
        });
        modal.present();
    };
    ProgramDetailAddEditModalPage.prototype.Save = function () {
        this.viewCtrl.dismiss(this.item);
    };
    ProgramDetailAddEditModalPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ProgramDetailAddEditModalPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ProgramDetailModalPage");
    };
    ProgramDetailAddEditModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "page-program-detail-add-edit-modal",template:/*ion-inline-start:"C:\jones\ionic\prod\src\pages\program-detail-add-edit-modal\program-detail-add-edit-modal.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form #Form="ngForm">\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>功能名稱</ion-label>\n          <ion-input type="text" [disabled]="mode==\'PUT\'" name="page_name" #page_name="ngModel" [(ngModel)]="item.page_name" required></ion-input>\n        </ion-item>\n        <div *ngIf="page_name.errors && page_name.touched" class="error-message">\n          功能名稱不能為空白\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>功能說明</ion-label>\n          <ion-input type="text" [disabled]="CanEditPermission==false" name="page_desc" #page_desc="ngModel" [(ngModel)]="item.page_desc" required></ion-input>\n        </ion-item>\n        <div *ngIf="page_desc.errors && page_desc.touched" class="error-message">\n          功能說明不能為空白\n        </div>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <ion-label stacked>功能別編號</ion-label>\n          <ion-input type="text" [disabled]="CanEditPermission==false" name="program_no" #program_no="ngModel" [(ngModel)]="item.program_no" required></ion-input>\n\n          <button ion-button outline item-end icon-left [disabled]="CanEditPermission==false" (click)="SelectProgram()">\n              <ion-icon name="arrow-dropdown"></ion-icon>\n              選取\n            </button>\n        </ion-item>\n        <div *ngIf="program_no.errors && program_no.touched" class="error-message">\n            功能別\n          </div>\n        <ion-item *ngIf="item.ProgramViewModel" >\n          <!-- <div > -->\n              <ion-label stacked>功能別說明</ion-label>\n              <ion-input type="text" [disabled]="CanEditPermission==false" name="program_desc"  #program_desc="ngModel" [(ngModel)]="item.ProgramViewModel.program_desc" required></ion-input>\n\n              <!-- {{item.ProgramViewModel.program_desc}} -->\n            <!-- </div> -->\n\n        </ion-item>\n      </ion-col>\n    </ion-row>\n  </form>\n\n</ion-content>\n<ion-footer>\n  <ion-toolbar>\n    <ion-row>\n      <ion-col>\n        <div [ngClass]="[\'command\']">\n          <button small title="取消" ion-button color="dark" icon-left (click)="close()">\n            <ion-icon name="backspace"></ion-icon>\n          </button>\n          <button small [disabled]="CanEditPermission==false" title="確認" ion-button color="dark" [disabled]="!Form.form.valid" icon-left (click)="Save()">\n            <ion-icon name="checkmark-circle"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"C:\jones\ionic\prod\src\pages\program-detail-add-edit-modal\program-detail-add-edit-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */]])
    ], ProgramDetailAddEditModalPage);
    return ProgramDetailAddEditModalPage;
}());

//# sourceMappingURL=program-detail-add-edit-modal.js.map

/***/ }),

/***/ 709:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramDetailAddEditModalPageModule", function() { return ProgramDetailAddEditModalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__program_detail_add_edit_modal__ = __webpack_require__(1616);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProgramDetailAddEditModalPageModule = /** @class */ (function () {
    function ProgramDetailAddEditModalPageModule() {
    }
    ProgramDetailAddEditModalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__program_detail_add_edit_modal__["a" /* ProgramDetailAddEditModalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__program_detail_add_edit_modal__["a" /* ProgramDetailAddEditModalPage */]),
            ],
        })
    ], ProgramDetailAddEditModalPageModule);
    return ProgramDetailAddEditModalPageModule;
}());

//# sourceMappingURL=program-detail-add-edit-modal.module.js.map

/***/ })

});
//# sourceMappingURL=328.js.map