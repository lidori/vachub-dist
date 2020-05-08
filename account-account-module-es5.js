function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"], {
  /***/
  "./src/app/account/account-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/account/account-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: AccountRoutingModule */

  /***/
  function srcAppAccountAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountRoutingModule", function () {
      return AccountRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./layout.component */
    "./src/app/account/layout.component.ts");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/account/login.component.ts");
    /* harmony import */


    var _register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register.component */
    "./src/app/account/register.component.ts");

    var routes = [{
      path: '',
      component: _layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
      children: [{
        path: 'login',
        component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
      }, {
        path: 'register',
        component: _register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
      }]
    }];

    var AccountRoutingModule = function AccountRoutingModule() {
      _classCallCheck(this, AccountRoutingModule);
    };

    AccountRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AccountRoutingModule
    });
    AccountRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AccountRoutingModule_Factory(t) {
        return new (t || AccountRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/account/account.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/account/account.module.ts ***!
    \*******************************************/

  /*! exports provided: AccountModule */

  /***/
  function srcAppAccountAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountModule", function () {
      return AccountModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _account_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./account-routing.module */
    "./src/app/account/account-routing.module.ts");
    /* harmony import */


    var _layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./layout.component */
    "./src/app/account/layout.component.ts");
    /* harmony import */


    var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login.component */
    "./src/app/account/login.component.ts");
    /* harmony import */


    var _register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./register.component */
    "./src/app/account/register.component.ts");
    /* harmony import */


    var _angular_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../angular-material.module */
    "./src/app/angular-material.module.ts");

    var AccountModule = function AccountModule() {
      _classCallCheck(this, AccountModule);
    };

    AccountModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AccountModule
    });
    AccountModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AccountModule_Factory(t) {
        return new (t || AccountModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountRoutingModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AccountModule, {
        declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"], _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountRoutingModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ReactiveFormsModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_3__["AccountRoutingModule"], _angular_material_module__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"]],
          declarations: [_layout_component__WEBPACK_IMPORTED_MODULE_4__["LayoutComponent"], _login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/account/layout.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/account/layout.component.ts ***!
    \*********************************************/

  /*! exports provided: LayoutComponent */

  /***/
  function srcAppAccountLayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutComponent", function () {
      return LayoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services */
    "./src/app/_services/index.ts");

    var LayoutComponent = function LayoutComponent(router, accountService) {
      _classCallCheck(this, LayoutComponent);

      this.router = router;
      this.accountService = accountService; // redirect to home if already logged in

      if (this.accountService.userValue) {
        this.router.navigate(['/']);
      }
    };

    LayoutComponent.ɵfac = function LayoutComponent_Factory(t) {
      return new (t || LayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]));
    };

    LayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LayoutComponent,
      selectors: [["ng-component"]],
      decls: 1,
      vars: 0,
      template: function LayoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: 'layout.component.html'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/account/login.component.ts":
  /*!********************************************!*\
    !*** ./src/app/account/login.component.ts ***!
    \********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppAccountLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../_services */
    "./src/app/_services/index.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");

    var _c0 = ["loginRef"];

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(route, router, accountService, alertService, ngZone) {
        _classCallCheck(this, LoginComponent);

        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.alertService = alertService;
        this.ngZone = ngZone;
        this.loading = false;
        this.submitted = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // get return url from route parameters or default to '/'
          this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.googleSDK();
        }
      }, {
        key: "prepareLoginButton",
        value: function prepareLoginButton() {
          var _this = this;

          this.auth2.attachClickHandler(this.loginElement.nativeElement, {}, function (googleUser) {
            var profile = googleUser.getBasicProfile();
            _this.token = googleUser.getAuthResponse().id_token;
            _this.id = profile.getId();
            _this.userName = profile.getName();
            _this.userImage = profile.getImageUrl();
            _this.userEmail = profile.getEmail();
            console.log(_this.token);
            console.log(_this.id);
            console.log(_this.userName);
            console.log(_this.userImage);
            console.log(_this.userEmail);

            var authenticated = _this.accountService.login({
              id: _this.userEmail,
              username: _this.userName,
              image: _this.userImage
            }, _this.auth2); //remove


            console.log('in prepare login auth is ', authenticated);

            if (authenticated) {
              _this.ngZone.run(function () {
                return _this.router.navigate([_this.returnUrl]);
              });
            } else {
              _this.alertService.error('Not authenticated');

              _this.loading = false;
            }
          }, function (error) {
            //alert(JSON.stringify(error, undefined, 2));
            _this.alertService.error(error);

            _this.loading = false;
          });
        }
      }, {
        key: "fakeSignIn",
        value: function fakeSignIn() {
          this.fakeData();
          var authenticated = this.accountService.login({
            id: this.userEmail,
            username: this.userName,
            image: this.userImage
          });

          if (authenticated) {
            this.router.navigate([this.returnUrl]);
          } else {
            this.alertService.error('Not authenticated');
            this.loading = false;
          }
        } // signOut() {
        //   this.auth2.signOut().then(function () {
        //     this.token = undefined;
        //     this.id = undefined;
        //     this.userName = undefined;
        //     this.userImage = undefined;
        //     this.userEmail = undefined;
        //     console.log('User signed out.');
        //   });
        // }
        //
        // fakeSignOut() {
        //   this.token = undefined;
        //   this.id = undefined;
        //   this.userName = undefined;
        //   this.userImage = undefined;
        //   this.userEmail = undefined;
        //   console.log('User signed out.');
        // }

      }, {
        key: "googleSDK",
        value: function googleSDK() {
          var _this2 = this;

          window['googleSDKLoaded'] = function () {
            window['gapi'].load('auth2', function () {
              _this2.auth2 = window['gapi'].auth2.init({
                client_id: '84095791683-jamqlcm8okffem4uldev6oas68stqjlh.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin',
                scope: 'profile email'
              });

              _this2.prepareLoginButton();
            });
          };

          (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];

            if (d.getElementById(id)) {
              return;
            }

            js = d.createElement(s);
            js.id = id;
            js.src = "https://apis.google.com/js/platform.js?onload=googleSDKLoaded";
            fjs.parentNode.insertBefore(js, fjs);
          })(document, 'script', 'google-jssdk');
        }
      }, {
        key: "fakeData",
        value: function fakeData() {
          this.token = 'abc';
          this.id = '1';
          this.userName = 'Guest';
          this.userImage = '';
          this.userEmail = 'guest';
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_2__["AlertService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["ng-component"]],
      viewQuery: function LoginComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.loginElement = _t.first);
        }
      },
      decls: 7,
      vars: 0,
      consts: [["mat-flat-button", "", "color", "accent", 3, "click"], ["svgIcon", "google", 1, "vh-icon"], [1, "vh-login-google"], ["loginRef", ""]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_0_listener() {
            return ctx.fakeSignIn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Guest Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Sign In with Google");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: 'login.component.html'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_2__["AlertService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, {
        loginElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['loginRef', {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/account/register.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/account/register.component.ts ***!
    \***********************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppAccountRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../_services */
    "./src/app/_services/index.ts");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(formBuilder, route, router, accountService, alertService) {
        _classCallCheck(this, RegisterComponent);

        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.accountService = accountService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.form = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]]
          });
        } // convenience getter for easy access to form fields

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.submitted = true; // reset alerts on submit

          this.alertService.clear(); // stop here if form is invalid

          if (this.form.invalid) {
            return;
          }

          this.loading = true; // this.accountService.register(this.form.value)
          //     .pipe(first())
          //     .subscribe(
          //         data => {
          //             this.alertService.success('Registration successful', { keepAfterRouteChange: true });
          //             this.router.navigate(['../login'], { relativeTo: this.route });
          //         },
          //         error => {
          //             this.alertService.error(error);
          //             this.loading = false;
          //         });
        }
      }, {
        key: "f",
        get: function get() {
          return this.form.controls;
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["ng-component"]],
      decls: 4,
      vars: 0,
      consts: [["href", "/"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\nBye Bye!\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Login Again");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          templateUrl: 'register.component.html'
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_3__["AccountService"]
        }, {
          type: _services__WEBPACK_IMPORTED_MODULE_3__["AlertService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=account-account-module-es5.js.map