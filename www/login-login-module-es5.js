function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html":
  /*!*****************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-radio-group allow-empty-selection=\"true\">\n      <ion-item>\n        <ion-label>Participant</ion-label>\n        <ion-radio slot=\"start\" checked=\"1\" (click)=\"baka(1)\" color=\"secondary\"></ion-radio>\n      </ion-item>\n      <ion-item>\n        <ion-label>Organizer</ion-label>\n        <ion-radio slot=\"start\" (click)=\"baka(2)\" color=\"danger\"></ion-radio>\n      </ion-item>\n    </ion-radio-group>\n  </ion-list>\n  \n\n    <div *ngIf=\"!org\">\n      <ion-item>\n        <ion-label position=\"floating\">Receipt no:</ion-label>\n        <ion-input type=\"text\" #r required></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label position=\"floating\">Mobile no:</ion-label>\n        <ion-input type=\"text\" #phne required></ion-input>\n      </ion-item>\n      <ion-button size=\"small\" expand=\"full\" (click)=\"loginp(r.value,phne.value)\">Login</ion-button>\n    </div>\n    <div *ngIf=\"org\">\n      <ion-item>\n        <ion-label position=\"floating\">Password:</ion-label>\n        <ion-input type=\"text\" #pass required></ion-input>\n      </ion-item>\n      <ion-button size=\"small\" expand=\"full\" (click)=\"loginr(pass.value)\">Login</ion-button>\n    </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/login/login-routing.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/login/login-routing.module.ts ***!
    \***********************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login.module.ts":
  /*!***************************************!*\
    !*** ./src/app/login/login.module.ts ***!
    \***************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/login/login.page.ts");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/login/login.page.scss":
  /*!***************************************!*\
    !*** ./src/app/login/login.page.scss ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/login/login.page.ts":
  /*!*************************************!*\
    !*** ./src/app/login/login.page.ts ***!
    \*************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ittop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../ittop.service */
    "./src/app/ittop.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../app.component */
    "./src/app/app.component.ts");

    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(us, router, ac) {
        _classCallCheck(this, LoginPage);

        this.us = us;
        this.router = router;
        this.ac = ac;
        this.org = false;
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "baka",
        value: function baka(x) {
          if (x == "1") this.org = false;else this.org = true;
        }
      }, {
        key: "loginp",
        value: function loginp(r, m) {
          var _this = this;

          this.us.getUser({
            receipt: Number(r)
          }).subscribe(function (data) {
            if (data['message'] == 'success') {
              if (data['data']['phone'] == Number(m)) {
                alert('sucessfully logged in');

                _this.router.navigate(['events']);

                _this.us.setObject('logSession', {
                  user: 'participant',
                  name: data['data']['name'],
                  receipt: data['data']['receipt'].toString()
                }).then(function () {
                  _this.ac.initializeApp();
                });
              } else {
                alert('invalid credintials');
              }
            } else if (data['message'] == 'donot exist') {
              alert('participant not registered');
            }
          });
        }
      }, {
        key: "loginr",
        value: function loginr(pass) {
          var _this2 = this;

          this.us.getPass({
            name: 'organizerlogin'
          }).subscribe(function (data) {
            if (data['message'] == 'success') {
              if (data['data'] == pass) {
                alert('sucessfully logged in');

                _this2.us.setObject('logSession', {
                  user: 'organizer'
                }).then(function () {
                  _this2.ac.initializeApp();
                });

                _this2.router.navigate(['events']);
              } else {
                alert('Invalid credentials');
              }
            } else {
              alert('some error');
            }
          });
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ittop_service__WEBPACK_IMPORTED_MODULE_2__["IttopService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=login-login-module-es5.js.map