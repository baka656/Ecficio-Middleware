(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offline-registration-offline-registration-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/offline-registration/offline-registration.page.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/offline-registration/offline-registration.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Offline Registration</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item *ngIf=\"!bo\" onic cordo>\n    <ion-label position=\"floating\" >Security code</ion-label>\n    <ion-input type=\"password\" #pass></ion-input>\n    <ion-button (click)=\"authenticate(pass)\"> Authenticate </ion-button>\n  </ion-item>\n\n  <form *ngIf=\"bo\" [formGroup]=\"registrationForm\" (ngSubmit)=\"createCode()\">\n    <ion-list>\n      <ion-item>\n        <ion-label position=\"stacked\">Name</ion-label>\n        <ion-input formControlName=\"name\" type=\"text\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\"></ion-input>\n        <ion-item *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n          <p *ngIf=\"f.name.errors.required\">Name is required</p>\n        </ion-item>\n      </ion-item>\n      <ion-item >\n        <ion-label position=\"stacked\">College</ion-label>\n        <ion-input type=\"text\" formControlName=\"college\" class=\"form-control\" type=\"text\" [ngClass]=\"{ 'is-invalid': submitted && f.college.errors }\"></ion-input>\n        <ion-item *ngIf=\"submitted && f.college.errors\" class=\"invalid-feedback\">\n          <p *ngIf=\"f.college.errors.required\">College is required</p>\n        </ion-item>\n      </ion-item> \n      <ion-item >\n        <ion-label position=\"stacked\">Phone</ion-label>\n        <ion-input formControlName=\"phone\" type=\"number\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.phone.errors }\"></ion-input>\n        <ion-item *ngIf=\"submitted && f.phone.errors\" class=\"invalid-feedback\">\n          <p *ngIf=\"f.phone.errors.required\">Phone is required</p>\n          <p *ngIf=\"f.phone.errors.minLength\">phone number should have 10digits</p>\n          <p *ngIf=\"f.phone.errors.maxLength\">phone number should have 10digits</p>\n        </ion-item>\n      </ion-item> \n      <ion-item >\n        <ion-label position=\"stacked\">Roll no</ion-label>\n        <ion-input formControlName=\"rollno\" type=\"text\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && f.rollno.errors }\"></ion-input>\n        <ion-item *ngIf=\"submitted && f.rollno.errors\" class=\"invalid-feedback\">\n          <p *ngIf=\"f.rollno.errors.required\">Roll No is required</p>\n        </ion-item>       \n      </ion-item>\n      <ion-item>\n        <ion-label position=\"stacked\">Email</ion-label>\n        <ion-input type=\"text\" formControlName=\"email\" class=\"form-control\"  [ngClass]=\"{ 'is-invalid': submitted && f.email.errors }\"></ion-input>\n        <ion-item *ngIf=\"submitted && f.email.errors\" class=\"invalid-feedback\">\n            <p *ngIf=\"f.email.errors.required\">Email Id is required</p>\n            <p *ngIf=\"f.email.errors.pattern\">Please provide a valid email-id</p>\n        </ion-item>\n      </ion-item>     \n      <ion-item>\n        <button type=submit size=\"small\" class=\"btn btn-primary waves-effect waves-dark\">Register<ion-icon slot=\"end\" name=\"create\"></ion-icon></button>\n        <button size=\"small\" class=\"btn btn-primary waves-effect waves-dark\" (click)=\"logout()\">Logout</button>\n      </ion-item>\n    </ion-list>   \n  </form>\n\n  <ion-list inset=\"true\" *ngIf=\"bo\">\n    <ion-text> <h4> Registered Users : {{ dbUsers.length }} </h4> </ion-text>\n    <ion-item *ngFor=\"let i of dbUsers\" >\n      <ion-avatar slot=\"start\" style=\"width: 20%;\">\n        <p>{{ i.receipt }}<p>\n      </ion-avatar>\n      <ion-label style=\"font-size: medium;\">\n        <ion-row>\n          <p>name : {{ i.name }}</p>\n        </ion-row>\n        <ion-row >\n          <p>mobile-no : {{ i.phone }} </p>\n        </ion-row>\n        <ion-row>\n          <p>email : {{ i.email }}</p> \n        </ion-row>\n      </ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/offline-registration/offline-registration-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/offline-registration/offline-registration-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: OfflineRegistrationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineRegistrationPageRoutingModule", function() { return OfflineRegistrationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _offline_registration_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offline-registration.page */ "./src/app/offline-registration/offline-registration.page.ts");




const routes = [
    {
        path: '',
        component: _offline_registration_page__WEBPACK_IMPORTED_MODULE_3__["OfflineRegistrationPage"]
    }
];
let OfflineRegistrationPageRoutingModule = class OfflineRegistrationPageRoutingModule {
};
OfflineRegistrationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OfflineRegistrationPageRoutingModule);



/***/ }),

/***/ "./src/app/offline-registration/offline-registration.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/offline-registration/offline-registration.module.ts ***!
  \*********************************************************************/
/*! exports provided: OfflineRegistrationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineRegistrationPageModule", function() { return OfflineRegistrationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _offline_registration_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offline-registration-routing.module */ "./src/app/offline-registration/offline-registration-routing.module.ts");
/* harmony import */ var _offline_registration_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offline-registration.page */ "./src/app/offline-registration/offline-registration.page.ts");







let OfflineRegistrationPageModule = class OfflineRegistrationPageModule {
};
OfflineRegistrationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _offline_registration_routing_module__WEBPACK_IMPORTED_MODULE_5__["OfflineRegistrationPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_offline_registration_page__WEBPACK_IMPORTED_MODULE_6__["OfflineRegistrationPage"]]
    })
], OfflineRegistrationPageModule);



/***/ }),

/***/ "./src/app/offline-registration/offline-registration.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/offline-registration/offline-registration.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmxpbmUtcmVnaXN0cmF0aW9uL29mZmxpbmUtcmVnaXN0cmF0aW9uLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/offline-registration/offline-registration.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/offline-registration/offline-registration.page.ts ***!
  \*******************************************************************/
/*! exports provided: OfflineRegistrationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfflineRegistrationPage", function() { return OfflineRegistrationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ittop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ittop.service */ "./src/app/ittop.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let OfflineRegistrationPage = class OfflineRegistrationPage {
    constructor(us, alrt, fb, router, lc, toastCtrl) {
        this.us = us;
        this.alrt = alrt;
        this.fb = fb;
        this.router = router;
        this.lc = lc;
        this.toastCtrl = toastCtrl;
        this.bo = false;
        this.submitted = false;
        this.userDetails = {};
        this.dbUsers = [];
    }
    ngOnInit() {
        this.us.getString('regSession').then((res) => {
            if (res == undefined) {
                this.bo = false;
            }
            else if (res['value'] == 'true') {
                this.bo = true;
            }
        });
        this.us.getUsers().subscribe(data => {
            if (data['message'] == 'success') {
                this.dbUsers = data['data'];
            }
            else
                console.log(data);
        });
        this.registrationForm = this.fb.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
                ])],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            rollno: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            college: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]],
        });
    }
    get f() {
        return this.registrationForm.controls;
    }
    authenticate(pass) {
        this.lc.create({ message: "please wait" }).then((loading) => {
            loading.present();
            setTimeout(() => {
                this.us.getPass({ name: "registrationpass" }).subscribe(data => {
                    if (data['message'] == 'success') {
                        console.log(data, pass.value);
                        if (data['data'] == pass.value) {
                            this.bo = true;
                            this.us.setString('regSession', 'true');
                        }
                        else {
                            alert('Invalid credentials / Check your Internet connection');
                        }
                    }
                    else {
                        alert("some error occured. Please try again");
                    }
                });
                loading.dismiss();
            }, 1000);
        });
    }
    logout() {
        this.bo = false;
        this.us.removeItem('regSession');
    }
    createCode() {
        this.submitted = true;
        if (this.registrationForm.invalid) {
            return;
        }
        this.us.validEmail({ email: this.registrationForm.value.email }).subscribe(data => {
            console.log(data);
            if (data == true) {
                this.userDetails.name = this.registrationForm.value.name;
                this.userDetails.email = this.registrationForm.value.email;
                this.userDetails.phone = this.registrationForm.value.phone;
                this.userDetails.college = this.registrationForm.value.college;
                this.userDetails.rollno = this.registrationForm.value.rollno;
                this.userDetails.timestamp = new Date();
                console.log(this.userDetails);
                this.us.addUser(this.userDetails).subscribe((baka) => {
                    if (baka['message'] == 'already exists') {
                        alert("email already registered");
                    }
                    else if (baka['message'] == 'success') {
                        alert("receipt:" + baka['receipt']);
                        this.router.navigate(['online-registration/', baka['receipt']]);
                    }
                    else {
                        alert("some error occured.please try again");
                    }
                });
            }
            else {
                alert('enter valid email address');
            }
        });
    }
};
OfflineRegistrationPage.ctorParameters = () => [
    { type: _ittop_service__WEBPACK_IMPORTED_MODULE_3__["IttopService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
OfflineRegistrationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-offline-registration',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./offline-registration.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/offline-registration/offline-registration.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./offline-registration.page.scss */ "./src/app/offline-registration/offline-registration.page.scss")).default]
    })
], OfflineRegistrationPage);



/***/ })

}]);
//# sourceMappingURL=offline-registration-offline-registration-module-es2015.js.map