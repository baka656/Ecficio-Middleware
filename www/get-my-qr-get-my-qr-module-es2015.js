(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["get-my-qr-get-my-qr-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/get-my-qr/get-my-qr.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/get-my-qr/get-my-qr.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Get My QR</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div *ngIf=\"bo\">\n    <ion-item>\n      <ion-label position=\"floating\">Receipt no</ion-label>\n      <ion-input type=\"text\" #r required></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Mobile no</ion-label>\n      <ion-input type=\"text\" #phne required></ion-input>\n    </ion-item>\n    <ion-button size=\"small\" expand=\"full\" (click)=\"getqr(r.value,phne.value)\"> get my qr </ion-button>\n  </div>\n  <div *ngIf=\"!bo\">\n    <ion-grid style=\"background-color:aquamarine;\">\n      <ion-row style=\"margin-top:10%\">\n        <ion-col>\n          <div></div>\n        </ion-col>\n        <ion-col>\n          <ion-text color=\"primary\" align=\"center\">\n            <h1 style=\"color:black;\"><b>Ecficio 4.0</b></h1> \n            <h2 style=\"color: black;\"><b>Receipt No:{{registerUser.receipt}}</b></h2>  \n         </ion-text>\n          <div align=\"center\">\n            <ngx-qrcode \n              [elementType]=\"canvas\" \n              [value] = \"qrdata\" >\n            </ngx-qrcode>\n          </div>\n          <ion-text color=\"primary\" align=\"center\">\n            <div align=\"center\" style=\"color:black;\">{{registerUser.name}}</div>\n            <p style=\"color:black;\">Thanks For Registering!!</p>\n          </ion-text>\n          <ion-datetime displayFormat=\"MMM DD YYYY, h:mm A\" [(ngModel)]=\"registerUser.timestamp\" style=\"color:black;\"></ion-datetime>\n          <p style=\"color:black;\"><b>Note:</b>Please Show The <b>QRCODE</b> at the Time of Participating in Events</p>\n        </ion-col>\n        <ion-col>\n          <div></div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n      </ion-row>\n    </ion-grid>\n        \n    <ion-button style=\"text-align: center;\" align=\"center\" (click)=\"done()\">Done</ion-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/get-my-qr/get-my-qr-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/get-my-qr/get-my-qr-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: GetMyQrPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMyQrPageRoutingModule", function() { return GetMyQrPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _get_my_qr_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./get-my-qr.page */ "./src/app/get-my-qr/get-my-qr.page.ts");




const routes = [
    {
        path: '',
        component: _get_my_qr_page__WEBPACK_IMPORTED_MODULE_3__["GetMyQrPage"]
    }
];
let GetMyQrPageRoutingModule = class GetMyQrPageRoutingModule {
};
GetMyQrPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GetMyQrPageRoutingModule);



/***/ }),

/***/ "./src/app/get-my-qr/get-my-qr.module.ts":
/*!***********************************************!*\
  !*** ./src/app/get-my-qr/get-my-qr.module.ts ***!
  \***********************************************/
/*! exports provided: GetMyQrPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMyQrPageModule", function() { return GetMyQrPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _get_my_qr_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./get-my-qr-routing.module */ "./src/app/get-my-qr/get-my-qr-routing.module.ts");
/* harmony import */ var _get_my_qr_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-my-qr.page */ "./src/app/get-my-qr/get-my-qr.page.ts");
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "./node_modules/@techiediaries/ngx-qrcode/__ivy_ngcc__/fesm2015/ngx-qrcode2.js");








let GetMyQrPageModule = class GetMyQrPageModule {
};
GetMyQrPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _get_my_qr_routing_module__WEBPACK_IMPORTED_MODULE_5__["GetMyQrPageRoutingModule"],
            _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_7__["NgxQRCodeModule"]
        ],
        declarations: [_get_my_qr_page__WEBPACK_IMPORTED_MODULE_6__["GetMyQrPage"]]
    })
], GetMyQrPageModule);



/***/ }),

/***/ "./src/app/get-my-qr/get-my-qr.page.scss":
/*!***********************************************!*\
  !*** ./src/app/get-my-qr/get-my-qr.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dldC1teS1xci9nZXQtbXktcXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/get-my-qr/get-my-qr.page.ts":
/*!*********************************************!*\
  !*** ./src/app/get-my-qr/get-my-qr.page.ts ***!
  \*********************************************/
/*! exports provided: GetMyQrPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetMyQrPage", function() { return GetMyQrPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ittop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ittop.service */ "./src/app/ittop.service.ts");



let GetMyQrPage = class GetMyQrPage {
    constructor(us) {
        this.us = us;
        this.registerUser = {};
        this.bo = true;
    }
    getqr(r, m) {
        this.rno = Number(r);
        console.log(this.rno, m);
        this.us.getUser({ receipt: this.rno }).subscribe(data => {
            if (data['message'] == 'success') {
                this.registerUser = data['data'];
                if (this.registerUser.phone.toString() == m) {
                    this.bo = false;
                    this.qrdata = this.registerUser.receipt.toString().replace(/\s/g, "") + " " + this.registerUser.name.replace(/\s/g, "") + " " +
                        this.registerUser.college.replace(/\s/g, "") + " " + this.registerUser.phone.toString().replace(/\s/g, "") + " " +
                        this.registerUser.rollno.replace(/\s/g, "") + " " + this.registerUser.email.replace(/\s/g, "");
                    console.log(this.qrdata);
                }
                else {
                    alert("Invalid details");
                }
            }
            else {
                alert(data);
            }
        });
    }
    done() {
        this.bo = true;
    }
    ngOnInit() {
    }
};
GetMyQrPage.ctorParameters = () => [
    { type: _ittop_service__WEBPACK_IMPORTED_MODULE_2__["IttopService"] }
];
GetMyQrPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-get-my-qr',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./get-my-qr.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/get-my-qr/get-my-qr.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./get-my-qr.page.scss */ "./src/app/get-my-qr/get-my-qr.page.scss")).default]
    })
], GetMyQrPage);



/***/ })

}]);
//# sourceMappingURL=get-my-qr-get-my-qr-module-es2015.js.map