function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["events-events-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/events/events.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/events/events.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEventsEventsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>Events</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size-xs size=\"5\">\n        <ion-card button=\"true\" *ngFor=\"let item of eventsData\" routerDirection=\"forward\" (click)=\"goTo(item)\">\n          <img [src]=\"item.imagepath\" >\n          <ion-card-header>\n            <ion-card-subtitle><h6 align=center>{{item.eventname}}</h6></ion-card-subtitle>\n            <ion-card-title></ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n          </ion-card-content>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/events/selected-event/selected-event.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/events/selected-event/selected-event.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEventsSelectedEventSelectedEventComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Ecficio</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1 align=center> {{ selectedEvent.eventname }}</h1>\n  <ion-row>\n    <ion-col size=\"4\">\n      <h4> Venue: </h4>\n    </ion-col>\n    <ion-col size=\"8\">\n       <h4>Room no-{{selectedEvent.venue}} </h4>\n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"4\">\n      <h4>Description: </h4>\n    </ion-col>\n    <ion-col size=\"8\">\n       <p *ngFor=\"let f of selectedEvent.description\">{{f}}</p>\n       \n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"4\">\n      <h4>Contacts: </h4>\n    </ion-col>\n    <ion-col size=\"8\">\n       <p *ngFor=\"let f of selectedEvent.contactDetails\">{{f}} </p>\n       \n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"4\">\n      <h4>Prize: </h4>\n    </ion-col>\n    <ion-col size=\"8\">\n       <p *ngFor=\"let f of selectedEvent.prize; let i=index\"> {{i+1 }}st {{\" \"}}Prize: {{f}} {{\" /-\"}} </p>\n       \n    </ion-col>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"3\"><h4> Status : </h4></ion-col>\n    <ion-col size=\"7\">\n       <h5 style=\"float:left\">{{ ap }} </h5> <h5 style=\"float:right\">  {{ tp }}  </h5>\n             <ion-progress-bar [value]=\"ap/tp\" type=\"determinate\" style=\"height:10px; border-radius:2rem;\"></ion-progress-bar>\n    </ion-col>\n    <ion-col size=\"2\"></ion-col>\n  </ion-row>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/events/events-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/events/events-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: EventsPageRoutingModule */

  /***/
  function srcAppEventsEventsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsPageRoutingModule", function () {
      return EventsPageRoutingModule;
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


    var _events_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./events.page */
    "./src/app/events/events.page.ts");
    /* harmony import */


    var _selected_event_selected_event_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./selected-event/selected-event.component */
    "./src/app/events/selected-event/selected-event.component.ts");

    var routes = [{
      path: '',
      component: _events_page__WEBPACK_IMPORTED_MODULE_3__["EventsPage"]
    }, {
      path: ':id',
      component: _selected_event_selected_event_component__WEBPACK_IMPORTED_MODULE_4__["SelectedEventComponent"]
    }];

    var EventsPageRoutingModule = function EventsPageRoutingModule() {
      _classCallCheck(this, EventsPageRoutingModule);
    };

    EventsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EventsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/events/events.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/events/events.module.ts ***!
    \*****************************************/

  /*! exports provided: EventsPageModule */

  /***/
  function srcAppEventsEventsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsPageModule", function () {
      return EventsPageModule;
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


    var _events_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./events-routing.module */
    "./src/app/events/events-routing.module.ts");
    /* harmony import */


    var _events_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./events.page */
    "./src/app/events/events.page.ts");
    /* harmony import */


    var _selected_event_selected_event_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./selected-event/selected-event.component */
    "./src/app/events/selected-event/selected-event.component.ts");

    var EventsPageModule = function EventsPageModule() {
      _classCallCheck(this, EventsPageModule);
    };

    EventsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _events_routing_module__WEBPACK_IMPORTED_MODULE_5__["EventsPageRoutingModule"]],
      declarations: [_events_page__WEBPACK_IMPORTED_MODULE_6__["EventsPage"], _selected_event_selected_event_component__WEBPACK_IMPORTED_MODULE_7__["SelectedEventComponent"]]
    })], EventsPageModule);
    /***/
  },

  /***/
  "./src/app/events/events.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/events/events.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppEventsEventsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9ldmVudHMucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/events/events.page.ts":
  /*!***************************************!*\
    !*** ./src/app/events/events.page.ts ***!
    \***************************************/

  /*! exports provided: EventsPage */

  /***/
  function srcAppEventsEventsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventsPage", function () {
      return EventsPage;
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


    var _ittop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../ittop.service */
    "./src/app/ittop.service.ts");

    var EventsPage = /*#__PURE__*/function () {
      function EventsPage(router, it) {
        _classCallCheck(this, EventsPage);

        this.router = router;
        this.it = it;
        this.eventsData = [];
      }

      _createClass(EventsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.it.getEvents().subscribe(function (data) {
            if (data['message'] == 'success') {
              _this.eventsData = data['data'];
              console.log(_this.eventsData);
            } else console.log(data);
          });
        }
      }, {
        key: "goTo",
        value: function goTo(x) {
          this.router.navigate(['events/', x.eventname]);
        }
      }]);

      return EventsPage;
    }();

    EventsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ittop_service__WEBPACK_IMPORTED_MODULE_3__["IttopService"]
      }];
    };

    EventsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-events',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./events.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/events/events.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./events.page.scss */
      "./src/app/events/events.page.scss"))["default"]]
    })], EventsPage);
    /***/
  },

  /***/
  "./src/app/events/selected-event/selected-event.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/events/selected-event/selected-event.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEventsSelectedEventSelectedEventComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW50cy9zZWxlY3RlZC1ldmVudC9zZWxlY3RlZC1ldmVudC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/events/selected-event/selected-event.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/events/selected-event/selected-event.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SelectedEventComponent */

  /***/
  function srcAppEventsSelectedEventSelectedEventComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectedEventComponent", function () {
      return SelectedEventComponent;
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


    var src_app_ittop_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/ittop.service */
    "./src/app/ittop.service.ts");

    var SelectedEventComponent = /*#__PURE__*/function () {
      function SelectedEventComponent(route, it) {
        _classCallCheck(this, SelectedEventComponent);

        this.route = route;
        this.it = it;
        this.selectedEvent = {};
        this.tp = 0;
        this.ap = 0;
      }

      _createClass(SelectedEventComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.selectedItem = this.route.snapshot.paramMap.get('id');
          this.it.getEvent({
            eventname: this.selectedItem
          }).subscribe(function (data) {
            if (data['message'] == 'success') {
              _this2.selectedEvent = data['data'];
            } else console.log(data);
          });
          this.it.getCount({
            eventname: this.selectedItem
          }).subscribe(function (data) {
            if (data['message'] == 'success') {
              _this2.tp = data['tp'];
              _this2.ap = data['ap'];
              console.log(data);
            } else console.log(data);
          });
          /*
            this.fs.getUsers(this.selectedItem.eventname).valueChanges().subscribe((da:User[])=>{
              this.dbUsers=da;
            })
              
            
             console.log(this.dbUsers);
             this.fs.getUsers('participants').valueChanges().subscribe((da:User[])=>{
              this.dbUsers1=da;
            })*/
        }
      }]);

      return SelectedEventComponent;
    }();

    SelectedEventComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_ittop_service__WEBPACK_IMPORTED_MODULE_3__["IttopService"]
      }];
    };

    SelectedEventComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-selected-event',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./selected-event.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/events/selected-event/selected-event.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./selected-event.component.scss */
      "./src/app/events/selected-event/selected-event.component.scss"))["default"]]
    })], SelectedEventComponent);
    /***/
  }
}]);
//# sourceMappingURL=events-events-module-es5.js.map