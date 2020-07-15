(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["organizer-organizer-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/organizer/dashboard/dashboard.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organizer/dashboard/dashboard.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>{{event}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"4\">\n      <ion-input type=\"number\" #search id=\"search\" placeholder=\"receipt no\"></ion-input>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-button size=small expand=full (click)=\"getr1(search.value)\">Round1</ion-button>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-button size=small expand=full (click)=\"getr2(search.value)\">Round2</ion-button>\n    </ion-col>\n  </ion-row>\n  <br><br>\n\n  <div>\n    <ion-button expand=\"block\" type=\"submit\" (click)=\"Scancoder1()\">Scancode Round 1<ion-icon name=\"scan-outline\" slot=\"end\"></ion-icon></ion-button>\n    <ion-card *ngIf=\"qr1\"> \n      <ion-card-content>\n          {{status+\" \"}}<br>\n          receipt : {{data.receipt}} <br>\n          name : {{data.name}}<br>\n          college : {{data.college}}  <br>       \n          contact : {{data.phone}} <br>\n          rollno : {{data.rollno}} <br>\n          email : {{data.email}} \n      </ion-card-content>\n    </ion-card>\n    <ion-button expand=\"block\"  (click)=\"UpdateMarksr1()\" > Update Marks r1<ion-icon name=\"arrow-up-circle-outline\" slot=\"end\"></ion-icon></ion-button> \n    <ion-button expand=\"block\"  (click)=\"ViewMarksr1()\" >View Marks r1</ion-button> <br><br><br><br><br>\n    \n    <ion-button expand=\"block\" type=\"submit\" (click)=\"Scancoder2()\">Scancode Round 2<ion-icon name=\"scan-outline\" slot=\"end\"></ion-icon></ion-button>\n      <ion-card *ngIf=\"qr2\"> \n        <ion-card-content>\n            {{status+\" \"}}<br>\n            receipt : {{data.receipt}} <br>\n            name : {{data.name}}<br>\n            college : {{data.college}}  <br>       \n            contact : {{data.phone}} <br>\n            rollno : {{data.rollno}} <br>\n            email : {{data.email}} \n        </ion-card-content>\n      </ion-card>\n    <ion-button expand=\"block\"  (click)=\"UpdateMarksr2()\"> Update Marks r2<ion-icon name=\"arrow-up-circle-outline\" slot=\"end\"></ion-icon></ion-button> \n    <ion-button expand=\"block\"  (click)=\"ViewMarksr2()\">View Marks r2</ion-button> <br><br><br><br>\n    \n    <ion-button expand=\"block\"  (click)=\"logout()\" >logout<ion-icon name=\"log-out-outline\" slot=\"end\"></ion-icon></ion-button> \n</div>\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/organizer/organizer.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organizer/organizer.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Organizer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label position=\"floating\" size=small>EVENTS</ion-label>\n      <ion-select value=\"Event\" [(ngModel)]=\"event\" #ref>\n        <ion-select-option [value]=\"e.eventname\" *ngFor=\"let e of events\" >{{e.eventname}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\" size=small>password</ion-label>\n      <ion-input type=\"password\" #password></ion-input>\n    </ion-item>\n    \n      <ion-button (click)=\"SelectedEvent(password.value,ref.value)\" expand=\"block\">login</ion-button>\n{{msg}}\n  </ion-list>\n  \n</ion-content>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/organizer/update/update.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organizer/update/update.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{event}} Update Marks</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"2\">\n        ID\n      </ion-col>\n      <ion-col size=\"3\">\n        Name\n      </ion-col>\n      <ion-col size=\"2\">\n         Score\n      </ion-col>\n      <ion-col size=\"5\">\n        Update score\n      </ion-col>\n      <ion-col>\n      </ion-col>\n    </ion-row>\n    <ion-row *ngFor=\"let a of dataArray\">\n        <ion-col size=\"2\">\n          {{a.receipt}}\n        </ion-col>\n        <ion-col size=\"3\">\n          {{a.name}}\n        </ion-col>\n        <ion-col size=\"3\">       \n            <ion-item>\n              <ion-label position=\"floating\" size=\"small\">r{{round}} score</ion-label>\n              <ion-input type=\"number\" #marks  placeholder=0></ion-input>\n            </ion-item> \n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-button expand=\"full\" size=\"small\" (click)=\"update(a,marks.value)\"><ion-icon name=\"create-outline\"></ion-icon></ion-button>\n        </ion-col>\n    </ion-row>\n  </ion-grid>\n  <!--<ion-grid>\n    <ion-row>\n      <ion-col></ion-col>\n      <ion-col>\n        <ion-button expand=\"block\" size=\"small\" (click)=\"upload()\">Upload</ion-button>\n      </ion-col>\n      <ion-col></ion-col>\n    </ion-row>\n  </ion-grid>-->\n</ion-content>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/organizer/view/view.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organizer/view/view.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>{{event}} View Marks</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n<ion-content > \n  <ion-row>\n    <ion-col size=\"4\">\n      <ion-input type=\"number\" #search id=\"search\" placeholder=\"receipt\"></ion-input>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-button (click)=\"search1(search.value)\" size=small>search<ion-icon name=\"search-outline\" sloat=\"end\"></ion-icon></ion-button>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-button (click)=\"clear()\" size=small>clear</ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-list>\n    <ion-item *ngFor=\"let i of users\">\n      <div *ngIf=\"round==1; else bakaittop\">\n        <ion-item *ngIf=\"i.r1marks!=-1\" text-wrap>\n          <ion-avatar slot=\"start\" style=\"width: 20%;\">\n            <p>{{ i.receipt }}</p>\n          </ion-avatar>\n          <ion-label style=\"font-size: medium;width: 100%;\">\n              <ion-row>\n                <p>name : {{i.name}} </p>\n              </ion-row>\n              <ion-row>\n                <p>college : {{i.college}}</p>\n              </ion-row>\n              <ion-row> \n                <p>contact : {{i.phone}} </p> \n              </ion-row>\n              <ion-row>\n                <p>r1 score: {{i.r1marks}}</p>\n              </ion-row>\n          </ion-label>\n        </ion-item>\n      </div>\n      <ng-template #bakaittop>\n        <ion-item *ngIf=\"round==2 && i.r2marks!=-1\">\n          <ion-avatar slot=\"start\" style=\"width: 20%;\">\n            <p>{{ i.receipt }}</p>\n          </ion-avatar>\n          <ion-label style=\"font-size: medium;\">\n              <ion-row>\n                <p>name : {{i.name}} </p>\n              </ion-row>\n              <ion-row>\n                <p>college : {{i.college}}</p>\n              </ion-row>\n              <ion-row>\n                <p>contact :  {{i.phone}} </p> \n              </ion-row>\n              <ion-row>\n                <p>r1 score: {{i.r2marks}}</p>\n              </ion-row>\n              <ion-row>\n                <p>r2 score: {{i.r1marks}}</p>\n              </ion-row>\n          </ion-label>\n        </ion-item>\n      </ng-template>\n    </ion-item>\n  </ion-list>\n</ion-content>");

/***/ }),

/***/ "./src/app/organizer/dashboard/dashboard.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/organizer/dashboard/dashboard.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZ2FuaXplci9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/organizer/dashboard/dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/organizer/dashboard/dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_ittop_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/ittop.service */ "./src/app/ittop.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");







const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_6__["Plugins"];
let DashboardComponent = class DashboardComponent {
    constructor(qr, lc, toastCtrl, us, route, router) {
        this.qr = qr;
        this.lc = lc;
        this.toastCtrl = toastCtrl;
        this.us = us;
        this.route = route;
        this.router = router;
        this.event = "";
        this.msg = "";
        this.data = {};
        this.status = "";
        this.qr1 = false;
        this.qr2 = false;
    }
    ngOnInit() {
        this.event = this.route.snapshot.paramMap.get('id');
        this.qr1 = false;
        this.qr2 = false;
    }
    getr1(receipt) {
        this.data = {};
        this.data.eventname = this.event;
        this.data.r1marks = -1;
        this.data.r2marks = -1;
        this.data.receipt = Number(receipt);
        this.data.timestamp = new Date();
        this.us.scanUser1(this.data).subscribe(baka => {
            if (baka['message'] == 'success') {
                var p = [];
                this.data.name = baka['data'];
                Storage.get({ key: this.event + "1" }).then((val) => {
                    if (val.value != null)
                        p = JSON.parse(val.value);
                    p.push(this.data);
                    console.log(val.value, p);
                    Storage.set({ key: this.event + "1", value: JSON.stringify(p) });
                });
                alert("successfully registered for round1");
            }
            else if (baka['message'] == 'already registered') {
                alert("already registered");
            }
            else if (baka['message'] == 'not in participants') {
                alert("not a participant");
            }
        });
    }
    getr2(receipt) {
        this.data = {};
        this.data.eventname = this.event;
        this.data.r2marks = -1;
        this.data.receipt = Number(receipt);
        this.data.timestamp = new Date();
        console.log(this.data);
        this.us.scanUser2({ eventname: this.data.eventname, receipt: this.data.receipt }).subscribe(baka => {
            if (baka['message'] == 'success') {
                var p = [];
                this.data.name = baka['data'];
                Storage.get({ key: this.event + "2" }).then((val) => {
                    if (val.value != null)
                        p = JSON.parse(val.value);
                    p.push(this.data);
                    console.log("success", p);
                    Storage.set({ key: this.event + "2", value: JSON.stringify(p) });
                });
                alert("successfully registered for round2");
            }
            else if (baka['message'] == 'already registered') {
                alert("already registered");
            }
            else if (baka['message'] == 'not participated in round1') {
                alert("not participated in round1");
            }
        });
    }
    Scancoder1() {
        this.data = {};
        this.data.eventname = this.event;
        this.qr.scan().then((data) => {
            this.qr1 = true;
            let s = data.text.split(" ");
            this.data.r1marks = -1;
            this.data.r2marks = -1;
            this.data.receipt = Number(s[0]);
            this.data.name = s[1];
            this.data.college = s[2];
            this.data.phone = Number(s[3]);
            this.data.rollno = s[4];
            this.data.email = s[5];
            this.data.timestamp = new Date();
            console.log(this.data);
            this.us.scanUser1(this.data).subscribe(baka => {
                if (baka['message'] == 'success') {
                    var p = [];
                    Storage.get({ key: this.event + "1" }).then((val) => {
                        if (val.value != null)
                            p = JSON.parse(val.value);
                        p.push(this.data);
                        console.log("success", p);
                        Storage.set({ key: this.event + "1", value: JSON.stringify(p) });
                    });
                    alert("successfully registered for round1");
                }
                else if (baka['message'] == 'already registered') {
                    alert("already registered");
                }
                else if (baka['message'] == 'not in participants') {
                    alert("not a participant");
                }
            });
        });
    }
    Scancoder2() {
        this.data = {};
        this.data.eventname = this.event;
        this.qr.scan().then((data) => {
            let s = data.text.split(" ");
            this.qr2 = true;
            this.data.r2marks = -1;
            this.data.receipt = Number(s[0]);
            this.data.name = s[1];
            this.data.college = s[2];
            this.data.phone = Number(s[3]);
            this.data.rollno = s[4];
            this.data.email = s[5];
            this.data.timestamp = new Date();
            console.log(this.data);
            this.us.scanUser2({ eventname: this.data.eventname, receipt: this.data.receipt }).subscribe((baka) => {
                if (baka['message'] == 'success') {
                    var p = [];
                    Storage.get({ key: this.event + "2" }).then((val) => {
                        if (val.value != null)
                            p = JSON.parse(val.value);
                        p.push(this.data);
                        console.log("success", p);
                        Storage.set({ key: this.event + "2", value: JSON.stringify(p) });
                    });
                    alert("successfully registered for round2");
                }
                else if (baka['message'] == 'already registered') {
                    alert("already registered");
                }
                else if (baka['message'] == 'not participated in round1') {
                    alert("not a participant");
                }
            });
        });
    }
    UpdateMarksr1() {
        this.data = {};
        this.qr1 = false;
        this.router.navigate(['organizer/update/', this.event + "1"]);
    }
    ViewMarksr1() {
        this.qr1 = false;
        this.router.navigate(['organizer/view/', this.event + "1"]);
    }
    UpdateMarksr2() {
        this.data = {};
        this.qr2 = false;
        this.router.navigate(['organizer/update/', this.event + "2"]);
    }
    ViewMarksr2() {
        this.qr2 = false;
        this.router.navigate(['organizer/view/', this.event + "2"]);
    }
    logout() {
        this.us.removeItem('orgSession');
        this.router.navigate(['organizer']);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] },
    { type: src_app_ittop_service__WEBPACK_IMPORTED_MODULE_5__["IttopService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/organizer/dashboard/dashboard.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/organizer/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/organizer/organizer-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/organizer/organizer-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: OrganizerPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizerPageRoutingModule", function() { return OrganizerPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _organizer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organizer.page */ "./src/app/organizer/organizer.page.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/organizer/dashboard/dashboard.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./update/update.component */ "./src/app/organizer/update/update.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view/view.component */ "./src/app/organizer/view/view.component.ts");







const routes = [
    {
        path: '',
        component: _organizer_page__WEBPACK_IMPORTED_MODULE_3__["OrganizerPage"]
    },
    {
        path: ':id',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"]
    },
    {
        path: 'update/:id',
        component: _update_update_component__WEBPACK_IMPORTED_MODULE_5__["UpdateComponent"]
    },
    {
        path: 'view/:id',
        component: _view_view_component__WEBPACK_IMPORTED_MODULE_6__["ViewComponent"]
    }
];
let OrganizerPageRoutingModule = class OrganizerPageRoutingModule {
};
OrganizerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OrganizerPageRoutingModule);



/***/ }),

/***/ "./src/app/organizer/organizer.module.ts":
/*!***********************************************!*\
  !*** ./src/app/organizer/organizer.module.ts ***!
  \***********************************************/
/*! exports provided: OrganizerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizerPageModule", function() { return OrganizerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _organizer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organizer-routing.module */ "./src/app/organizer/organizer-routing.module.ts");
/* harmony import */ var _organizer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./organizer.page */ "./src/app/organizer/organizer.page.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/organizer/dashboard/dashboard.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update/update.component */ "./src/app/organizer/update/update.component.ts");
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view/view.component */ "./src/app/organizer/view/view.component.ts");










let OrganizerPageModule = class OrganizerPageModule {
};
OrganizerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _organizer_routing_module__WEBPACK_IMPORTED_MODULE_5__["OrganizerPageRoutingModule"]
        ],
        declarations: [
            _organizer_page__WEBPACK_IMPORTED_MODULE_6__["OrganizerPage"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"],
            _update_update_component__WEBPACK_IMPORTED_MODULE_8__["UpdateComponent"],
            _view_view_component__WEBPACK_IMPORTED_MODULE_9__["ViewComponent"]
        ]
    })
], OrganizerPageModule);



/***/ }),

/***/ "./src/app/organizer/organizer.page.scss":
/*!***********************************************!*\
  !*** ./src/app/organizer/organizer.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZ2FuaXplci9vcmdhbml6ZXIucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/organizer/organizer.page.ts":
/*!*********************************************!*\
  !*** ./src/app/organizer/organizer.page.ts ***!
  \*********************************************/
/*! exports provided: OrganizerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizerPage", function() { return OrganizerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ittop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ittop.service */ "./src/app/ittop.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");





let OrganizerPage = class OrganizerPage {
    constructor(router, us, lc, toastCtrl) {
        this.router = router;
        this.us = us;
        this.lc = lc;
        this.toastCtrl = toastCtrl;
        this.events = [];
    }
    ngOnInit() {
        this.us.getObject('orgSession').then((res) => {
            if (res == undefined) {
                this.us.getEvents().subscribe(data => {
                    if (data['message'] == 'success') {
                        this.events = data['data'];
                    }
                });
            }
            else if (res['auth'] == 'true') {
                this.router.navigate(['organizer/', res['event']]);
            }
        });
    }
    SelectedEvent(x, e) {
        console.log(e);
        if (e == "") {
            alert('nope');
        }
        else {
            this.lc.create({ message: "please wait" }).then((loading) => {
                loading.present();
                setTimeout(() => {
                    this.us.getPass({ name: "organizerpass" }).subscribe(data => {
                        if (data['message'] == 'success') {
                            if (data['data'] == x) {
                                this.us.setObject('orgSession', { auth: 'true', event: e });
                                this.router.navigate(['organizer/', e]);
                            }
                            else {
                                alert('Invalid credentials / Check your Internet connection');
                            }
                        }
                        else {
                            alert('some error');
                        }
                    });
                    loading.dismiss();
                }, 1000);
            });
        }
    }
};
OrganizerPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ittop_service__WEBPACK_IMPORTED_MODULE_3__["IttopService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] }
];
OrganizerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-organizer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./organizer.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/organizer/organizer.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./organizer.page.scss */ "./src/app/organizer/organizer.page.scss")).default]
    })
], OrganizerPage);



/***/ }),

/***/ "./src/app/organizer/update/update.component.scss":
/*!********************************************************!*\
  !*** ./src/app/organizer/update/update.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZ2FuaXplci91cGRhdGUvdXBkYXRlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/organizer/update/update.component.ts":
/*!******************************************************!*\
  !*** ./src/app/organizer/update/update.component.ts ***!
  \******************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_ittop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/ittop.service */ "./src/app/ittop.service.ts");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");





const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_4__["Plugins"];
let UpdateComponent = class UpdateComponent {
    constructor(route, us, router) {
        this.route = route;
        this.us = us;
        this.router = router;
        this.event = "";
        this.dataArray = [];
    }
    ngOnInit() {
        this.event = this.route.snapshot.paramMap.get('id');
        this.round = Number(this.event.substr(this.event.length - 1));
        console.log(this.round);
        Storage.get({ key: this.event }).then((val) => {
            this.dataArray = JSON.parse(val.value);
            console.log(val.value);
        });
    }
    update(a, m1) {
        if (this.round == 1) {
            a.r1marks = Number(m1);
            this.us.updateMarks1(a).subscribe((data) => {
                if (data['message'] == 'success') {
                    alert('updated');
                    var baka = [];
                    for (var i of this.dataArray)
                        if (a.receipt != i.receipt)
                            baka.push(i);
                    Storage.set({ key: this.event, value: JSON.stringify(baka) });
                    this.dataArray = baka;
                }
                else {
                    alert('not updated');
                }
            });
        }
        else if (this.round == 2) {
            a.r2marks = Number(m1);
            this.us.updateMarks2(a).subscribe((data) => {
                if (data['message'] == 'success') {
                    alert('updated');
                    var baka = [];
                    for (var i of this.dataArray)
                        if (a.receipt != i.receipt)
                            baka.push(i);
                    Storage.set({ key: this.event, value: JSON.stringify(baka) });
                    this.dataArray = baka;
                }
                else {
                    alert('not updated');
                }
            });
        }
    }
};
UpdateComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_ittop_service__WEBPACK_IMPORTED_MODULE_3__["IttopService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
UpdateComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./update.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/organizer/update/update.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./update.component.scss */ "./src/app/organizer/update/update.component.scss")).default]
    })
], UpdateComponent);



/***/ }),

/***/ "./src/app/organizer/view/view.component.scss":
/*!****************************************************!*\
  !*** ./src/app/organizer/view/view.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29yZ2FuaXplci92aWV3L3ZpZXcuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/organizer/view/view.component.ts":
/*!**************************************************!*\
  !*** ./src/app/organizer/view/view.component.ts ***!
  \**************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_ittop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/ittop.service */ "./src/app/ittop.service.ts");




let ViewComponent = class ViewComponent {
    constructor(us, route) {
        this.us = us;
        this.route = route;
        this.users = [];
        this.ittop = [];
        this.event = "";
    }
    ngOnInit() {
        this.event = this.route.snapshot.paramMap.get('id');
        this.round = Number(this.event.substr(this.event.length - 1));
        this.ename = this.event.slice(0, -1);
        console.log(this.ename);
        this.us.getRegEvent({ eventname: this.ename }).subscribe((data) => {
            if (data['message'] == 'success') {
                this.users = data['data'];
                this.ittop = data['data'];
                if (this.round == 1) {
                    this.users.sort((a, b) => b.r1marks - a.r1marks);
                    this.ittop.sort((a, b) => b.r1marks - a.r1marks);
                    console.log(this.users);
                }
                else if (this.round == 2) {
                    this.users.sort((a, b) => b.r2marks - a.r2marks);
                    this.ittop.sort((a, b) => b.r2marks - a.r2marks);
                }
            }
            else {
                alert('some error');
            }
        });
    }
    search1(s) {
        console.log(s, typeof (s));
        var ss = Number(s);
        this.users = [];
        for (var i of this.ittop)
            if (i.receipt == ss)
                this.users.push(i);
    }
    clear() {
        document.querySelector('ion-input').value = '';
        this.users = this.ittop;
    }
};
ViewComponent.ctorParameters = () => [
    { type: src_app_ittop_service__WEBPACK_IMPORTED_MODULE_3__["IttopService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ViewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./view.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/organizer/view/view.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./view.component.scss */ "./src/app/organizer/view/view.component.scss")).default]
    })
], ViewComponent);



/***/ })

}]);
//# sourceMappingURL=organizer-organizer-module-es2015.js.map