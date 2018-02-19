webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
        $.material.init();
        console.log('start');
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_module__ = __webpack_require__("../../../../../src/app/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_home_content_body_info_body_info_component__ = __webpack_require__("../../../../../src/app/components/home/content/body-info/body-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_home_content_health_diary_health_diary_component__ = __webpack_require__("../../../../../src/app/components/home/content/health-diary/health-diary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_content_body_analysis_body_analysis_component__ = __webpack_require__("../../../../../src/app/components/home/content/body-analysis/body-analysis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_auth_guard__ = __webpack_require__("../../../../../src/app/services/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_sign_signin_sign_in_component__ = __webpack_require__("../../../../../src/app/components/sign/signin/sign.in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_sign_signup_sign_up_component__ = __webpack_require__("../../../../../src/app/components/sign/signup/sign.up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_sign_service__ = __webpack_require__("../../../../../src/app/services/sign.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_auth_interceptor__ = __webpack_require__("../../../../../src/app/services/auth.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_common_dialog_two_button_dialog_two_button_dialog_component__ = __webpack_require__("../../../../../src/app/components/common/dialog/two-button-dialog/two-button-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_home_content_user_info_user_info_component__ = __webpack_require__("../../../../../src/app/components/home/content/user-info/user-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_home_content_body_analysis_body_info_analysis_body_info_analysis_component__ = __webpack_require__("../../../../../src/app/components/home/content/body-analysis/body-info-analysis/body-info-analysis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_home_content_body_analysis_exercise_analysis_exercise_analysis_component__ = __webpack_require__("../../../../../src/app/components/home/content/body-analysis/exercise-analysis/exercise-analysis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_home_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/home/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_home_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/home/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_home_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/home/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var components = [
    __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */],
    __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_22__components_home_sidebar_sidebar_component__["b" /* SidebarComponent */],
    __WEBPACK_IMPORTED_MODULE_23__components_home_navbar_navbar_component__["a" /* NavbarComponent */],
    __WEBPACK_IMPORTED_MODULE_24__components_home_footer_footer_component__["a" /* FooterComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components_home_content_body_info_body_info_component__["a" /* BodyInfoComponent */],
    __WEBPACK_IMPORTED_MODULE_7__components_home_content_health_diary_health_diary_component__["a" /* HealthDiaryComponent */],
    __WEBPACK_IMPORTED_MODULE_8__components_home_content_body_analysis_body_analysis_component__["a" /* BodyAnalysisComponent */],
    __WEBPACK_IMPORTED_MODULE_13__components_sign_signin_sign_in_component__["a" /* SignInComponent */],
    __WEBPACK_IMPORTED_MODULE_14__components_sign_signup_sign_up_component__["a" /* SignUpComponent */],
    __WEBPACK_IMPORTED_MODULE_19__components_home_content_user_info_user_info_component__["a" /* UserInfoComponent */],
    __WEBPACK_IMPORTED_MODULE_20__components_home_content_body_analysis_body_info_analysis_body_info_analysis_component__["a" /* BodyInfoAnalysisComponent */],
    __WEBPACK_IMPORTED_MODULE_21__components_home_content_body_analysis_exercise_analysis_exercise_analysis_component__["a" /* ExerciseAnalysisComponent */],
    __WEBPACK_IMPORTED_MODULE_18__components_common_dialog_two_button_dialog_two_button_dialog_component__["a" /* TwoButtonDialogComponent */]
];
var modules = [
    __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
    __WEBPACK_IMPORTED_MODULE_5__material_module__["a" /* MaterialModule */],
    __WEBPACK_IMPORTED_MODULE_3__app_router__["a" /* appRouter */],
    __WEBPACK_IMPORTED_MODULE_10__angular_forms__["e" /* FormsModule */],
    __WEBPACK_IMPORTED_MODULE_10__angular_forms__["j" /* ReactiveFormsModule */],
    __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["c" /* HttpClientModule */]
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: components,
            entryComponents: [__WEBPACK_IMPORTED_MODULE_18__components_common_dialog_two_button_dialog_two_button_dialog_component__["a" /* TwoButtonDialogComponent */]],
            imports: modules,
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* HashLocationStrategy */] },
                { provide: __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_17__services_auth_interceptor__["a" /* AuthInterceptor */], multi: true },
                __WEBPACK_IMPORTED_MODULE_12__services_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_15__services_sign_service__["a" /* SignService */], __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRouter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_home_content_body_info_body_info_component__ = __webpack_require__("../../../../../src/app/components/home/content/body-info/body-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_content_health_diary_health_diary_component__ = __webpack_require__("../../../../../src/app/components/home/content/health-diary/health-diary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_home_content_body_analysis_body_analysis_component__ = __webpack_require__("../../../../../src/app/components/home/content/body-analysis/body-analysis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_guard__ = __webpack_require__("../../../../../src/app/services/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_sign_signin_sign_in_component__ = __webpack_require__("../../../../../src/app/components/sign/signin/sign.in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_sign_signup_sign_up_component__ = __webpack_require__("../../../../../src/app/components/sign/signup/sign.up.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_home_content_user_info_user_info_component__ = __webpack_require__("../../../../../src/app/components/home/content/user-info/user-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_home_content_body_analysis_body_info_analysis_body_info_analysis_component__ = __webpack_require__("../../../../../src/app/components/home/content/body-analysis/body-info-analysis/body-info-analysis.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_home_content_body_analysis_exercise_analysis_exercise_analysis_component__ = __webpack_require__("../../../../../src/app/components/home/content/body-analysis/exercise-analysis/exercise-analysis.component.ts");











var routes = [
    { path: '', redirectTo: 'home/diary', pathMatch: 'full' },
    { path: 'sign-in', component: __WEBPACK_IMPORTED_MODULE_6__components_sign_signin_sign_in_component__["a" /* SignInComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard__["a" /* AuthGuard */]] },
    { path: 'sign-up', component: __WEBPACK_IMPORTED_MODULE_7__components_sign_signup_sign_up_component__["a" /* SignUpComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard__["a" /* AuthGuard */]] },
    {
        path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: '', redirectTo: 'diary', pathMatch: 'full' },
            { path: 'diary', component: __WEBPACK_IMPORTED_MODULE_2__components_home_content_health_diary_health_diary_component__["a" /* HealthDiaryComponent */] },
            { path: 'body-info', component: __WEBPACK_IMPORTED_MODULE_1__components_home_content_body_info_body_info_component__["a" /* BodyInfoComponent */] },
            { path: 'body-analysis', component: __WEBPACK_IMPORTED_MODULE_3__components_home_content_body_analysis_body_analysis_component__["a" /* BodyAnalysisComponent */],
                children: [
                    { path: '', redirectTo: 'body-info', pathMatch: 'full' },
                    { path: 'body-info', component: __WEBPACK_IMPORTED_MODULE_9__components_home_content_body_analysis_body_info_analysis_body_info_analysis_component__["a" /* BodyInfoAnalysisComponent */] },
                    { path: 'exercise', component: __WEBPACK_IMPORTED_MODULE_10__components_home_content_body_analysis_exercise_analysis_exercise_analysis_component__["a" /* ExerciseAnalysisComponent */] }
                ] },
            { path: 'user-info', component: __WEBPACK_IMPORTED_MODULE_8__components_home_content_user_info_user_info_component__["a" /* UserInfoComponent */] }
        ]
    }
];
var appRouter = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(routes);


/***/ }),

/***/ "../../../../../src/app/components/common/dialog/two-button-dialog/two-button-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/common/dialog/two-button-dialog/two-button-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>{{ dialogTitle}}</h2>\n<mat-dialog-content>{{ dialogContent }}</mat-dialog-content>\n<mat-dialog-actions>\n  <button (click)=\"onLeftBtnClick()\" mat-button mat-dialog-close>{{ leftBtnTitle }}</button>\n  <button (click)=\"onRightBtnClick()\" mat-button mat-dialog-close>{{ rightBtnTitle }}</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/components/common/dialog/two-button-dialog/two-button-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TwoButtonDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var TwoButtonDialogComponent = /** @class */ (function () {
    function TwoButtonDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.dialogTitle = data.title;
        this.dialogContent = data.content;
        this.leftBtnTitle = data.leftBtnTitle;
        this.rightBtnTitle = data.rightBtnTitle;
    }
    TwoButtonDialogComponent.prototype.onLeftBtnClick = function () {
        this.dialogRef.close(this.leftBtnTitle);
    };
    TwoButtonDialogComponent.prototype.onRightBtnClick = function () {
        this.dialogRef.close(this.rightBtnTitle);
    };
    TwoButtonDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close('noclick');
    };
    TwoButtonDialogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-two-button-dialog',
            template: __webpack_require__("../../../../../src/app/components/common/dialog/two-button-dialog/two-button-dialog.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/common/dialog/two-button-dialog/two-button-dialog.component.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatDialogRef */], Object])
    ], TwoButtonDialogComponent);
    return TwoButtonDialogComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/content/body-analysis/body-analysis.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/content/body-analysis/body-analysis.component.html":
/***/ (function(module, exports) {

module.exports = "<nav mat-tab-nav-bar>\n  <a mat-tab-link\n     *ngFor=\"let tab of tabs\"\n     routerLink=\"{{ tab.link }}\">{{ tab.title }}</a>\n</nav>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/content/body-analysis/body-analysis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyAnalysisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyAnalysisComponent = /** @class */ (function () {
    function BodyAnalysisComponent() {
        this.tabs = [
            { title: "How much it has changed", link: "./body-info" },
            { title: "How did you exercise", link: "./exercise" }
        ];
    }
    BodyAnalysisComponent.prototype.ngOnInit = function () {
    };
    BodyAnalysisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-body-analysis',
            template: __webpack_require__("../../../../../src/app/components/home/content/body-analysis/body-analysis.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/content/body-analysis/body-analysis.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyAnalysisComponent);
    return BodyAnalysisComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/content/body-analysis/body-info-analysis/body-info-analysis.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chart-container {\n  position: relative;\n  height: 80vh;\n  width: 160vh;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/content/body-analysis/body-info-analysis/body-info-analysis.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"chart-container\" *ngIf=\"chart\">\n  <canvas id=\"canvas\">{{ chart }}</canvas>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/content/body-analysis/body-info-analysis/body-info-analysis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyInfoAnalysisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_chart_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_calendar_service__ = __webpack_require__("../../../../../src/app/services/calendar.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BodyInfoAnalysisComponent = /** @class */ (function () {
    function BodyInfoAnalysisComponent(calendarService) {
        this.calendarService = calendarService;
        this.chart = [];
    }
    BodyInfoAnalysisComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.calendarService.getEventList()
            .map(function (array) {
            return array.map(function (r) { return { date: r.date, bodyInfo: r.bodyInfo }; });
        })
            .subscribe(function (res) {
            console.log(res);
            var dates = res.map(function (r) { return r.date; });
            var bodyInfos = res.map(function (r) { return r.bodyInfo.weight; });
            _this.chart = new __WEBPACK_IMPORTED_MODULE_1_chart_js__["Chart"]('canvas', {
                type: 'line',
                data: {
                    labels: dates,
                    datasets: [
                        {
                            data: bodyInfos,
                            borderColor: '#3cba9f',
                            fill: false
                        }
                    ]
                },
                option: {
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                                display: true
                            }],
                        yAxes: [{
                                display: true
                            }]
                    }
                }
            });
        }, function (err) {
            console.log(err);
        }, function () {
            console.log('complete');
        });
    };
    BodyInfoAnalysisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-body-info-analysis',
            template: __webpack_require__("../../../../../src/app/components/home/content/body-analysis/body-info-analysis/body-info-analysis.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/content/body-analysis/body-info-analysis/body-info-analysis.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_calendar_service__["a" /* CalendarService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_calendar_service__["a" /* CalendarService */]])
    ], BodyInfoAnalysisComponent);
    return BodyInfoAnalysisComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/content/body-analysis/exercise-analysis/exercise-analysis.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/content/body-analysis/exercise-analysis/exercise-analysis.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  exercise-analysis works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/content/body-analysis/exercise-analysis/exercise-analysis.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExerciseAnalysisComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExerciseAnalysisComponent = /** @class */ (function () {
    function ExerciseAnalysisComponent() {
    }
    ExerciseAnalysisComponent.prototype.ngOnInit = function () {
    };
    ExerciseAnalysisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-exercise-analysis',
            template: __webpack_require__("../../../../../src/app/components/home/content/body-analysis/exercise-analysis/exercise-analysis.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/content/body-analysis/exercise-analysis/exercise-analysis.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ExerciseAnalysisComponent);
    return ExerciseAnalysisComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/content/body-info/body-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/content/body-info/body-info.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  body-info works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/content/body-info/body-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BodyInfoComponent = /** @class */ (function () {
    function BodyInfoComponent() {
    }
    BodyInfoComponent.prototype.ngOnInit = function () {
    };
    BodyInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-body-info',
            template: __webpack_require__("../../../../../src/app/components/home/content/body-info/body-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/content/body-info/body-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyInfoComponent);
    return BodyInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/content/health-diary/health-diary.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".health-diary-container {\n  width:100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.calendar-container {\n  margin: 0 15px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n\n}\n\n.calendar-indicator {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 50%;\n  height: 40px;\n  margin: 10px auto 0;\n}\n\n.current-date {\n  text-align: center;\n  -ms-flex-preferred-size: 400px;\n      flex-basis: 400px;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  font-size: 20pt;\n  margin-top: 7px;\n}\n\n.prev-btn {\n  float: left;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n.next-btn {\n  float: right;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n.calendar-header {\n  margin-top: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 40px;\n}\n\n.day-of-weeks {\n  -webkit-box-flex: 2;\n      -ms-flex-positive: 2;\n          flex-grow: 2;\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  text-align: center;\n  font-size: 13pt;\n  margin-top: 14px;\n}\n\n.calendar-content {\n  margin-bottom: 20px;\n}\n\n.calendar-tile {\n  background-color: lightgrey;\n}\n\n.calendar-tile-content {\n  width: 100%;\n  height: 100%;\n}\n\n.grid-tile-date {\n  position: absolute;\n  top: 5%;\n  right: 5%;\n  font-size: 10pt;\n}\n\n.current-day {\n  font-weight: bold;\n}\n\n.grid-tile-icon {\n  position: absolute;\n  bottom: 5%;\n  left: 5%;\n}\n\n.event-info-container {\n  width: 100%;\n  display: block;\n}\n\n.event-info {\n  width: 90%;\n  margin: 0 auto;\n}\n\n.event-info-table {\n  width:100%;\n}\n\n.event-title {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.event-input {\n  width: 55%;\n}\n\n.event-min-select {\n  width: 25%;\n}\n\n.event-btns button{\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-right: 10px;\n}\n\n.weight {\n  width: 50%;\n}\n\n.divider {\n  margin: 20px 5px;\n}\n\nselect.form-control {\n  -webkit-appearance: menulist;\n}\n\n.error-msg {\n  color: #a94442;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/content/health-diary/health-diary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content health-diary-container\">\n  <div class=\"calendar-container\">\n    <div class=\"calendar-indicator\">\n      <button class=\"prev-btn btn btn-primary btn-simple btn-xs\" (click)=\"clickPrevBtn()\">\n        <i class=\"material-icons\">keyboard_arrow_left</i>\n      </button>\n      <span class=\"current-date\">{{ currentDate | date : 'yy MMM' }}</span>\n      <button class=\"next-btn btn btn-primary btn-simple btn-xs\" (click)=\"clickNextBtn()\">\n        <i class=\"material-icons\">keyboard_arrow_right</i>\n      </button>\n    </div>\n\n    <div class=\"calendar-header\">\n      <div class=\"day-of-weeks\" *ngFor=\"let day of dayOfWeeks\">\n        <span>{{ day }}</span>\n      </div>\n    </div>\n\n    <div class=\"calendar-content\">\n      <mat-grid-list cols=\"7\" rowHeight=\"1:1\">\n        <mat-grid-tile class=\"calendar-tile\" *ngFor=\"let day of days\">\n          <div *ngIf=\"day.date != null\" class=\"calendar-tile-content\">\n            <span class=\"grid-tile-date\" [class.current-day]=\"day.isCurrentDay\">{{ day.date.getDate() }}</span>\n            <button *ngIf=\"day.isEmptyEvent\" class=\"grid-tile-icon btn btn-primary btn-simple btn-xs\" (click)=\"clickAddEvent(day)\">\n              <i class=\"material-icons\">add</i>\n            </button>\n            <button *ngIf=\"!day.isEmptyEvent\" class=\"grid-tile-icon btn btn-primary btn-simple btn-xs\" (click)=\"clickEditEvent(day)\">\n              <i class=\"material-icons\">event</i>\n            </button>\n          </div>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </div>\n  </div>\n\n  <div class=\"event-info-container\">\n    <div class=\"event-info\">\n      <div class=\"event-title\">\n        <h2>{{ currentDate | date : 'MM.dd'}} diary</h2>\n      </div>\n      <button class=\"btn btn-primary btn-simple btn-lg\" (click)=\"addInputEvent()\">\n        <i class=\"material-icons\">add</i>\n        <span>Add event</span>\n      </button>\n      <form #form=\"ngForm\" class=\"event-info-form\" novalidate>\n        <table class=\"event-info-table\">\n          <tbody>\n            <tr *ngFor=\"let event of currentEvents, let i = index\" ngModelGroup=\"formGroup{{ i }}\" class=\"event-info-form-group\">\n              <td class=\"col-sm-6\">\n                <div class=\"form-group label-floating\">\n                  <label class=\"control-label\">Enter your event</label>\n                  <input type=\"text\" class=\"form-control\" name=\"what\" [(ngModel)]=\"event.what\" #what=\"ngModel\" required/>\n                </div>\n              </td>\n              <td class=\"col-sm-4\">\n                <div class=\"form-group\">\n                  <select class=\"form-control\" name=\"time\" [(ngModel)]=\"event.time\" #time=\"ngModel\" required>\n                    <option hidden>Minute</option>\n                    <option *ngFor=\"let min of minList\" value=\"{{ min }}\">{{ min }}</option>\n                  </select>\n                </div>\n              </td>\n              <td class=\"col-sm-2\">\n                <button *ngIf=\"currentEvents.length > 1\" class=\"btn btn-primary btn-simple\" (click)=\"removeEvent(i)\">\n                  <i class=\"material-icons\">clear</i>\n                </button>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        <div *ngIf=\"isInvalidForm\" class=\"error-msg\">\n          <span>{{ errorMessage }}</span>\n        </div>\n        <div class=\"event-btns\">\n          <button class=\"btn btn-primary btn-simple btn-lg\" (click)=\"submit(form.value, form.valid)\">\n            <i class=\"material-icons\">cloud_upload</i>\n            <span>Save</span>\n          </button>\n          <!--<button class=\"btn btn-primary btn-simple btn-lg\" *ngIf=\"eventsInServer !== undefined && eventsInServer.length > 1\" (click)=\"deleteAll()\">-->\n            <!--<i class=\"material-icons\">delete_forever</i>-->\n            <!--<span>Delete all</span>-->\n          <!--</button>-->\n        </div>\n        <mat-error *ngIf=\"isSameEvent\">Same with previous events</mat-error>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/content/health-diary/health-diary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthDiaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_calendar_service__ = __webpack_require__("../../../../../src/app/services/calendar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HealthDiaryComponent = /** @class */ (function () {
    function HealthDiaryComponent(calendarService, dialog) {
        this.calendarService = calendarService;
        this.dialog = dialog;
        this.currentBodyInfo = {
            weight: ''
        };
        this.days = new Array();
        this.minList = new Array();
        this.isSameEvent = false;
        this.isInvalidForm = false;
        for (var min = 5; min <= 180; min = min + 5) {
            this.minList.push(min);
        }
        this.dayOfWeeks = this.calendarService.getDayOfWeeks();
    }
    HealthDiaryComponent.prototype.refreshData = function (date) {
        var _this = this;
        this.calendarService.getEventList().subscribe(function (events) {
            // this.eventList.push(events);
            _this.eventList = events;
            var thisDate = date;
            _this.setCalendarData(thisDate.getFullYear(), thisDate.getMonth(), thisDate.getDate());
        }, function (err) {
            console.log(err);
            _this.eventList = [];
            var thisDate = date;
            _this.setCalendarData(thisDate.getFullYear(), thisDate.getMonth(), thisDate.getDate());
        }, function () {
            console.log('complete');
        });
    };
    HealthDiaryComponent.prototype.ngOnInit = function () {
        this.refreshData(new Date());
    };
    HealthDiaryComponent.prototype.setCalendarData = function (year, month, date) {
        this.isSameEvent = false;
        this.currentDate = new Date(year, month, date);
        this.days = new Array();
        var lastDateOfMonth = new Date(year, month + 1, 0);
        var lastDay = lastDateOfMonth.getDate();
        var _loop_1 = function (i) {
            var tempDate = new Date(year, month, i + 1);
            var eventObj = this_1.eventList.find(function (e) {
                return (e.date.getDate() === tempDate.getDate() &&
                    e.date.getMonth() === tempDate.getMonth() &&
                    e.date.getFullYear() === tempDate.getFullYear());
            });
            var events = void 0;
            var bodyInfo = {
                weight: ''
            };
            var isEmptyEvent = true;
            if (typeof eventObj !== 'undefined' && eventObj.events.length > 0) {
                events = eventObj.events;
                bodyInfo = eventObj.bodyInfo;
                isEmptyEvent = false;
            }
            else {
                events = [{ what: '', time: '' }];
            }
            var isCurrentDay = false;
            if ((i + 1) === date) {
                isCurrentDay = true;
                this_1.eventsInServer = events;
                this_1.currentEvents = JSON.parse(JSON.stringify(events));
                this_1.currentBodyInfo = bodyInfo;
            }
            var dayObj = new __WEBPACK_IMPORTED_MODULE_1__services_calendar_service__["b" /* Day */](tempDate, events, bodyInfo, isCurrentDay, isEmptyEvent);
            if (i === 0) {
                for (var j = 0; j < dayObj.date.getDay(); j++) {
                    this_1.days.push(new __WEBPACK_IMPORTED_MODULE_1__services_calendar_service__["b" /* Day */](null, [], false, true));
                }
            }
            this_1.days.push(dayObj);
            if (i === lastDay - 1) {
                for (var j = dayObj.date.getDay() + 1; j < this_1.dayOfWeeks.length; j++) {
                    this_1.days.push(new __WEBPACK_IMPORTED_MODULE_1__services_calendar_service__["b" /* Day */](null, [], false, true));
                }
            }
        };
        var this_1 = this;
        for (var i = 0; i < lastDay; i++) {
            _loop_1(i);
        }
    };
    HealthDiaryComponent.prototype.clickPrevBtn = function () {
        this.setCalendarData(this.currentDate.getFullYear(), this.currentDate.getMonth() - 1, this.currentDate.getDate());
    };
    HealthDiaryComponent.prototype.clickNextBtn = function () {
        this.setCalendarData(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, this.currentDate.getDate());
    };
    HealthDiaryComponent.prototype.clickAddEvent = function (dayObj) {
        this.setCalendarData(dayObj.date.getFullYear(), dayObj.date.getMonth(), dayObj.date.getDate());
    };
    HealthDiaryComponent.prototype.clickEditEvent = function (dayObj) {
        this.setCalendarData(dayObj.date.getFullYear(), dayObj.date.getMonth(), dayObj.date.getDate());
    };
    HealthDiaryComponent.prototype.addInputEvent = function () {
        var lastEvent = this.currentEvents[this.currentEvents.length - 1];
        if (lastEvent.event === '' || lastEvent.min === '') {
            console.log('Input event info');
            return;
        }
        this.currentEvents.push({ what: '', time: '' });
    };
    HealthDiaryComponent.prototype.removeEvent = function (i) {
        this.currentEvents.splice(i, 1);
    };
    HealthDiaryComponent.prototype.submit = function (value, isValid) {
        var _this = this;
        if (!isValid) {
            this.isInvalidForm = true;
            this.errorMessage = 'Enter your exercise info';
            return;
        }
        var bodyInfo = {
            weight: value.weight
        };
        delete value.weight;
        var events = Object.values(value);
        if (events.length === 0) {
            console.log('Empty event');
        }
        else if (JSON.stringify(events) === JSON.stringify(this.eventsInServer)) {
            this.isSameEvent = true;
        }
        else {
            if (this.eventsInServer[0].what === '' && this.eventsInServer[0].time === '') {
                this.calendarService.addEventOfDay(this.currentDate, events, bodyInfo)
                    .subscribe(function (res) {
                    console.log(res);
                    _this.refreshData(_this.currentDate);
                    _this.isInvalidForm = false;
                }, function (err) {
                    console.log(err);
                    _this.isInvalidForm = true;
                    _this.errorMessage = 'Server error';
                }, function () {
                    console.log('send event complete');
                });
            }
            else {
                this.calendarService.updateEventOfDay(this.currentDate, events, bodyInfo)
                    .subscribe(function (res) {
                    console.log(res);
                    _this.refreshData(_this.currentDate);
                }, function (err) {
                    console.log(err);
                }, function () {
                    console.log('send event complete');
                });
            }
        }
    };
    HealthDiaryComponent.prototype.deleteAll = function () {
        var _this = this;
        this.calendarService.updateEventOfDay(this.currentDate, null, null)
            .subscribe(function (res) {
            console.log(res);
            _this.refreshData(_this.currentDate);
        }, function (err) {
            console.log(err);
        }, function () {
            console.log('delete all event complete');
        });
    };
    HealthDiaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-health-diary',
            template: __webpack_require__("../../../../../src/app/components/home/content/health-diary/health-diary.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/content/health-diary/health-diary.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_calendar_service__["a" /* CalendarService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_calendar_service__["a" /* CalendarService */], __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatDialog */]])
    ], HealthDiaryComponent);
    return HealthDiaryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/content/user-info/user-info.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-info-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n}\n\n.logo {\n  text-align: center;\n}\n\n.user-info {\n  width: 500px;\n  margin: 0 auto;\n}\n\n.user-info-form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 5px;\n}\n\n.btn .find {\n  float: right;\n}\n\n.user-id, .user-pw, .user-email, .user-gender, .user-body-info {\n  width: 100%;\n}\n\ndiv.title {\n  width: 25%;\n  display: inline-block;\n}\n\n.height, .weight {\n  width: 35%;\n}\n\n.user-body-info .weight {\n  float: right;\n}\n\n.user-delete {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.btn-modify, .btn-delete {\n  width: 200px;\n  margin: 0 auto;\n}\n\n.radio + .radio {\n  margin-top: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/content/user-info/user-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content user-info-container\">\n  <div class=\"user-info\">\n    <form #form=\"ngForm\" class=\"user-info-form\" novalidate>\n      <fieldset>\n\n        <div class=\"col-sm-12\">\n          <div class=\"form-group label-floating\">\n            <label class=\"control-label\">Enter your email</label>\n            <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"email\"/>\n          </div>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <div class=\"form-group label-floating\">\n            <label class=\"control-label\">Enter your nickname</label>\n            <input type=\"text\" class=\"form-control\" disabled name=\"nickname\" [(ngModel)]=\"nickname\"/>\n          </div>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <div class=\"form-group label-floating\">\n            <label class=\"control-label\">Enter your password</label>\n            <input type=\"password\" class=\"form-control\" name=\"password\"/>\n          </div>\n        </div>\n\n        <div class=\"body-info\">\n          <div class=\"col-sm-6\">\n            <div class=\"form-group label-floating\">\n              <label class=\"control-label\">Enter your height</label>\n              <input type=\"text\" class=\"form-control\" name=\"height\" [(ngModel)]=\"height\"/>\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"form-group label-floating\">\n              <label class=\"control-label\">Enter your weight</label>\n              <input type=\"text\" class=\"form-control\" name=\"weight\" [(ngModel)]=\"weight\"/>\n            </div>\n          </div>\n        </div>\n\n        <div>\n          <div class=\"radio col-sm-6\">\n            <label>\n              <input type=\"radio\" value=\"Female\" name=\"gender\" [(ngModel)]=\"gender\">\n              Female\n            </label>\n          </div>\n          <div class=\"radio col-sm-6\">\n            <label>\n              <input type=\"radio\" value=\"Male\" name=\"gender\" [(ngModel)]=\"gender\">\n              Male\n            </label>\n          </div>\n        </div>\n      </fieldset>\n      <button class=\"btn-modify\" (click)=\"submit(form.value)\" mat-raised-button color=\"primary\">Modify user info</button>\n    </form>\n    <div class=\"user-delete\">\n      <button class=\"btn-delete\" (click)=\"deleteUser()\" mat-raised-button color=\"primary\">Delete your account</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/content/user-info/user-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sign_service__ = __webpack_require__("../../../../../src/app/services/sign.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserInfoComponent = /** @class */ (function () {
    function UserInfoComponent(signService) {
        var _this = this;
        this.signService = signService;
        this.formModel = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email),
            nickname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            gender: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */](),
            height: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            weight: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required)
        });
        this.signService.getUserInfo()
            .subscribe(function (res) {
            console.log(res);
            if (res) {
                _this.nickname = res.nickname;
                _this.email = res.email;
                _this.gender = res.gender;
                _this.height = res.height;
                _this.weight = res.weight;
            }
        }, function (err) {
            console.log(err);
            _this.nickname = 'nickname';
            _this.email = 'email';
            _this.gender = 'Female';
            _this.height = 222;
            _this.weight = 222;
        }, function () {
        });
    }
    UserInfoComponent.prototype.ngOnInit = function () {
    };
    UserInfoComponent.prototype.submit = function (formValue) {
        var userInfo = this.formModel.value;
        this.signService.updateUserInfo(userInfo)
            .subscribe(function (res) {
            if (res.result === 'ok')
                console.log('update successfully');
        }, function (error) {
            console.log('error : ', error);
        }, function () {
            console.log('post complete');
        });
    };
    UserInfoComponent.prototype.deleteUser = function () {
        var _this = this;
        this.signService.deleteUser()
            .subscribe(function (res) {
            if (res.result === 'ok') {
                _this.signService.signOut();
            }
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    UserInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user-info',
            template: __webpack_require__("../../../../../src/app/components/home/content/user-info/user-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/content/user-info/user-info.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_sign_service__["a" /* SignService */]])
    ], UserInfoComponent);
    return UserInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer>\n    <div class=\"container-fluid\">\n        <p class=\"copyright pull-right\">\n            GitHub : <a href=\"https://github.com/valhadreams/HealthDiary\">valhadreams, jang4427</a>\n        </p>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/home/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n  <div class=\"sidebar\" data-color='red' data-image=\"\">\n    <app-sidebar></app-sidebar>\n    <div class=\"sidebar-background\" style=\"background-image: url(../assets/img/sidebar-4.jpg)\"></div>\n  </div>\n  <div class=\"main-panel\">\n    <app-navbar></app-navbar>\n    <router-outlet></router-outlet>\n    <app-footer></app-footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_sign_service__ = __webpack_require__("../../../../../src/app/services/sign.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(signService) {
        this.signService = signService;
        this.menus = [
            { title: "Health Diary", link: "" },
            { title: "Body Info", link: "./body-info" },
            { title: "Body Analysis", link: "./body-analysis" },
            { title: "User Info", link: "./user-info" }
        ];
    }
    HomeComponent.prototype.logout = function () {
        this.signService.signOut();
    };
    HomeComponent.prototype.ngOnDestroy = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_sign_service__["a" /* SignService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-transparent navbar-absolute\">\n    <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" (click)=\"sidebarToggle()\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">{{getTitle()}}</a>\n        </div>\n        <!--<div class=\"collapse navbar-collapse\">-->\n            <!--<ul class=\"nav navbar-nav navbar-right\">-->\n                <!--<li>-->\n                    <!--<a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">-->\n                        <!--<i class=\"material-icons\">dashboard</i>-->\n                        <!--<p class=\"hidden-lg hidden-md\">Dashboard</p>-->\n                    <!--</a>-->\n                <!--</li>-->\n                <!--<li class=\"dropdown\">-->\n                    <!--<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">-->\n                        <!--<i class=\"material-icons\">notifications</i>-->\n                        <!--<span class=\"notification\">5</span>-->\n                        <!--<p class=\"hidden-lg hidden-md\">Notifications</p>-->\n                    <!--</a>-->\n                    <!--<ul class=\"dropdown-menu\">-->\n                        <!--<li><a href=\"#\">Mike John responded to your email</a></li>-->\n                        <!--<li><a href=\"#\">You have 5 new tasks</a></li>-->\n                        <!--<li><a href=\"#\">You're now friend with Andrew</a></li>-->\n                        <!--<li><a href=\"#\">Another Notification</a></li>-->\n                        <!--<li><a href=\"#\">Another One</a></li>-->\n                    <!--</ul>-->\n                <!--</li>-->\n                <!--<li>-->\n                    <!--<a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">-->\n                       <!--<i class=\"material-icons\">person</i>-->\n                       <!--<p class=\"hidden-lg hidden-md\">Profile</p>-->\n                    <!--</a>-->\n                <!--</li>-->\n            <!--</ul>-->\n\n            <!--<form class=\"navbar-form navbar-right\" role=\"search\">-->\n                <!--<div class=\"form-group form-black is-empty\">-->\n                    <!--<input type=\"text\" class=\"form-control\" placeholder=\"Search\">-->\n                    <!--<span class=\"material-input\"></span>-->\n                <!--</div>-->\n                <!--<button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">-->\n                    <!--<i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>-->\n                <!--</button>-->\n            <!--</form>-->\n        <!--</div>-->\n    </div>\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/components/home/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.element = element;
        this.location = location;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.listTitles = __WEBPACK_IMPORTED_MODULE_1__sidebar_sidebar_component__["a" /* ROUTES */].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee.charAt(0) === '#') {
            titlee = titlee.slice(2);
        }
        titlee = titlee.split('/').pop();
        for (var item = 0; item < this.listTitles.length; item++) {
            if (this.listTitles[item].path === titlee) {
                return this.listTitles[item].title;
            }
        }
        return 'Dashboard';
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/home/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common__["f" /* Location */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\n    <a href=\"/\" class=\"simple-text\">\n        Health Diary\n    </a>\n</div>\n<div class=\"sidebar-wrapper\">\n    <!--<form class=\"navbar-form navbar-right\" role=\"search\" *ngIf=\"isMobileMenu()\">-->\n        <!--<div class=\"form-group form-black is-empty\">-->\n            <!--<input type=\"text\" class=\"form-control\" placeholder=\"Search\">-->\n            <!--<span class=\"material-input\"></span>-->\n        <!--</div>-->\n        <!--<button type=\"submit\" class=\"btn btn-white btn-round btn-just-icon\">-->\n            <!--<i class=\"material-icons\">search</i><div class=\"ripple-container\"></div>-->\n        <!--</button>-->\n    <!--</form>-->\n\n    <!--<ul class=\"nav nav-mobile-menu\" *ngIf=\"isMobileMenu()\">-->\n        <!--<li>-->\n            <!--<a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">-->\n                <!--<i class=\"material-icons\">dashboard</i>-->\n                <!--<p class=\"hidden-lg hidden-md\">Dashboard</p>-->\n            <!--</a>-->\n        <!--</li>-->\n        <!--<li class=\"dropdown\">-->\n            <!--<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">-->\n                <!--<i class=\"material-icons\">notifications</i>-->\n                <!--<span class=\"notification\">5</span>-->\n                <!--<p class=\"hidden-lg hidden-md\">Notifications</p>-->\n            <!--</a>-->\n            <!--<ul class=\"dropdown-menu\">-->\n                <!--<li><a href=\"#\">Mike John responded to your email</a></li>-->\n                <!--<li><a href=\"#\">You have 5 new tasks</a></li>-->\n                <!--<li><a href=\"#\">You're now friend with Andrew</a></li>-->\n                <!--<li><a href=\"#\">Another Notification</a></li>-->\n                <!--<li><a href=\"#\">Another One</a></li>-->\n            <!--</ul>-->\n        <!--</li>-->\n        <!--<li>-->\n            <!--<a href=\"#pablo\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">-->\n               <!--<i class=\"material-icons\">person</i>-->\n               <!--<p class=\"hidden-lg hidden-md\">Profile</p>-->\n            <!--</a>-->\n        <!--</li>-->\n    <!--</ul>-->\n\n    <div class=\"nav-container\">\n        <ul class=\"nav\">\n            <li routerLinkActive=\"active\" *ngFor=\"let menuItem of menuItems\" class=\"{{menuItem.class}}\">\n                <a  [routerLink]=\"[menuItem.path]\">\n                    <i class=\"material-icons\">{{menuItem.icon}}</i>\n                    <p>{{menuItem.title}}</p>\n                </a>\n            </li>\n        </ul>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ROUTES = [
    { path: 'diary', title: 'Diary', icon: 'event_note', class: '' },
    { path: 'body-info', title: 'Body Info', icon: 'accessibility', class: '' },
    { path: 'body-analysis', title: 'Analysis', icon: 'content_paste', class: '' },
    { path: 'user-info', title: 'User Profile', icon: 'person', class: '' }
];
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/components/home/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sign/signin/sign.in.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sign-in-container {\n  width: 100%;\n  margin-bottom: 10px;\n}\n\n.logo {\n  text-align: center;\n}\n\n.sign-in {\n  width: 300px;\n  margin: 0 auto;\n}\n\n.sign-in-form {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-bottom: 5px;\n}\n\n.sign-in-btn {\n  width: 100%;\n  margin-top: 5px;\n}\n\n.sign-up {\n  width: 100%;\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.btn .find {\n  float: right;\n}\n\n.error-msg {\n  color: #a94442;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sign/signin/sign.in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sign-in-container\">\n  <div class=\"sign-in\">\n\n    <div class=\"logo\">\n      <h1>Health Diary</h1>\n    </div>\n\n    <form class=\"sign-in-form\" [formGroup]=\"signInFormGroup\" novalidate>\n      <div class=\"col-sm-12\">\n        <div class=\"form-group label-floating\"\n             [ngClass]=\"displayFieldCss('email')\">\n          <label class=\"control-label\">Enter your email</label>\n          <input type=\"email\" class=\"form-control\" formControlName=\"email\"/>\n        </div>\n      </div>\n\n      <div class=\"col-sm-12\">\n        <div class=\"form-group label-floating\"\n             [ngClass]=\"displayFieldCss('password')\">\n          <label class=\"control-label\">Enter your password</label>\n          <input type=\"password\" class=\"form-control\" formControlName=\"password\"/>\n        </div>\n      </div>\n\n      <div *ngIf=\"isInvalidForm\" class=\"error-msg\">\n        <span>{{ errorMessage }}</span>\n      </div>\n\n      <button class=\"sign-in-btn btn btn-primary\" (click)=\"submit()\">Sign In</button>\n    </form>\n\n    <div class=\"sign-up\">\n      <a class=\"sign-up-link\" color=\"primary\" routerLink=\"/sign-up\">Sign Up</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/sign/signin/sign.in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sign_service__ = __webpack_require__("../../../../../src/app/services/sign.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignInComponent = /** @class */ (function () {
    function SignInComponent(signService, router) {
        this.signService = signService;
        this.router = router;
        this.isInvalidForm = false;
        this.signInFormGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required)
        });
    }
    SignInComponent.prototype.submit = function () {
        var _this = this;
        if (!this.signInFormGroup.valid) {
            Object.keys(this.signInFormGroup.controls).forEach(function (field) {
                var control = _this.signInFormGroup.get(field);
                control.markAsDirty({ onlySelf: true });
            });
            this.isInvalidForm = true;
            this.errorMessage = 'Invalid user data';
            return;
        }
        var _a = this.signInFormGroup.value, id = _a.id, password = _a.password;
        console.log(id, password);
        this.signService.signIn(id, password)
            .subscribe(function (res) {
            if (res.result) {
                localStorage.setItem('token', res.token);
                _this.router.navigate(['/diary']);
            }
        }, function (error) {
            console.log(error);
            _this.isInvalidForm = true;
            if (error.status === 404) {
                _this.errorMessage = 'Server error';
            }
            else {
                _this.errorMessage = 'Invalid user data';
            }
        }, function () {
            console.log('sign in succeccfully');
        });
    };
    SignInComponent.prototype.isFieldValid = function (field) {
        return !this.signInFormGroup.get(field).valid && this.signInFormGroup.get(field).dirty;
    };
    SignInComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field)
        };
    };
    SignInComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('spinner'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["A" /* MatSpinner */])
    ], SignInComponent.prototype, "spinner", void 0);
    SignInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__("../../../../../src/app/components/sign/signin/sign.in.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sign/signin/sign.in.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_sign_service__["a" /* SignService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/sign/signup/sign.up.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sign-up-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  margin-bottom: 10px;\n}\n\n.logo {\n  text-align: center;\n}\n\n.sign-up {\n  width: 300px;\n  margin: 0 auto;\n}\n\n.sign-up-form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  margin-bottom: 5px;\n}\n\n.sign-up-btn {\n  width: 100%;\n  margin-top: 5px;\n}\n\n.btn .find {\n  float: right;\n}\n\n.error-msg {\n  color: #a94442;\n}\n\n/*.gender {*/\n  /*height: 65.5px;*/\n/*}*/\n\n/*.gender .gender-wrapper {*/\n  /*width: 300px;*/\n  /*position: relative;*/\n  /*top: 50%;*/\n  /*margin-top: -10px;*/\n/*}*/\n\n/*.gender mat-radio-button {*/\n  /*width: 49%;*/\n/*}*/\n\n/*.body-info > * {*/\n  /*width: 48%;*/\n/*}*/\n\n/*.body-info .weight {*/\n  /*float: right;*/\n/*}*/\n\n.radio + .radio {\n  margin-top: 10px;\n}\n\n.sign-in {\n  width: 100%;\n  text-align: center;\n  margin-top: 10px;\n}\n\n\nmat-spinner {\n  margin: auto;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sign/signup/sign.up.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"sign-up-container\">\n  <div class=\"sign-up\">\n\n    <div class=\"logo\">\n      <h1>Health Diary</h1>\n    </div>\n\n    <form class=\"sign-up-form\" [formGroup]=\"signUpformGroup\" novalidate>\n      <fieldset>\n\n        <div class=\"col-sm-12\">\n          <div class=\"form-group label-floating\"\n               [ngClass]=\"displayFieldCss('email')\">\n            <label class=\"control-label\">Enter your email</label>\n            <input type=\"email\" class=\"form-control\" formControlName=\"email\"/>\n          </div>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <div class=\"form-group label-floating\"\n               [ngClass]=\"displayFieldCss('nickname')\">\n            <label class=\"control-label\">Enter your nickname</label>\n            <input type=\"text\" class=\"form-control\" formControlName=\"nickname\" required/>\n          </div>\n        </div>\n\n        <div class=\"col-sm-12\">\n          <div class=\"form-group label-floating\"\n               [ngClass]=\"displayFieldCss('password')\">\n            <label class=\"control-label\">Enter your password</label>\n            <input type=\"password\" class=\"form-control\" formControlName=\"password\"/>\n          </div>\n        </div>\n\n        <div class=\"body-info\">\n          <div class=\"col-sm-6\">\n            <div class=\"form-group label-floating\"\n                 [ngClass]=\"displayFieldCss('height')\">\n              <label class=\"control-label\">Enter your height</label>\n              <input type=\"number\" class=\"form-control\" formControlName=\"height\"/>\n            </div>\n          </div>\n          <div class=\"col-sm-6\">\n            <div class=\"form-group label-floating\"\n                 [ngClass]=\"displayFieldCss('weight')\">\n              <label class=\"control-label\">Enter your weight</label>\n              <input type=\"number\" class=\"form-control\" formControlName=\"weight\"/>\n            </div>\n          </div>\n        </div>\n\n        <div>\n          <div class=\"radio col-sm-6\"\n               [ngClass]=\"displayFieldCss('gender')\">\n            <label>\n              <input type=\"radio\" value=\"G\" formControlName=\"gender\">\n              Female\n            </label>\n          </div>\n          <div class=\"radio col-sm-6\"\n               [ngClass]=\"displayFieldCss('gender')\">\n            <label>\n              <input type=\"radio\" value=\"B\" formControlName=\"gender\">\n              Male\n            </label>\n          </div>\n        </div>\n      </fieldset>\n\n      <div *ngIf=\"isInvalidForm\" class=\"error-msg\">\n        <span>{{ errorMessage }}</span>\n      </div>\n      <button class=\"sign-up-btn btn btn-primary\" (click)=\"submit()\">Sign Up</button>\n    </form>\n\n    <div class=\"sign-in\">\n      <a class=\"sign-in-link\" color=\"primary\" routerLink=\"/sign-in\">Sign In</a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/sign/signup/sign.up.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_sign_service__ = __webpack_require__("../../../../../src/app/services/sign.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(signService, router) {
        this.signService = signService;
        this.router = router;
        this.isInvalidForm = false;
        this.signUpformGroup = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].email),
            nickname: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            gender: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            height: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required),
            weight: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["k" /* Validators */].required)
        });
    }
    SignUpComponent.prototype.submit = function () {
        var _this = this;
        if (!this.signUpformGroup.valid) {
            Object.keys(this.signUpformGroup.controls).forEach(function (field) {
                var control = _this.signUpformGroup.get(field);
                control.markAsDirty({ onlySelf: true });
            });
            this.isInvalidForm = true;
            this.errorMessage = 'Invalid user data';
            return;
        }
        var _a = this.signUpformGroup.value, email = _a.email, nickname = _a.nickname, password = _a.password, gender = _a.gender, height = _a.height, weight = _a.weight;
        var signInfo = new __WEBPACK_IMPORTED_MODULE_2__services_sign_service__["b" /* SignUpObj */](email, nickname, password, gender, height, weight);
        this.signService.signUp(signInfo)
            .subscribe(function (res) {
            if (res.result)
                _this.router.navigate(['/sign-in']);
        }, function (error) {
            _this.isInvalidForm = true;
            if (error.status === 409) {
                _this.errorMessage = 'Duplicate user email';
            }
            else if (error.status === 404) {
                _this.errorMessage = 'Server error';
            }
            console.log('post error : ', error);
        }, function () {
            console.log('post complete');
        });
    };
    SignUpComponent.prototype.isFieldValid = function (field) {
        return !this.signUpformGroup.get(field).valid && this.signUpformGroup.get(field).dirty;
    };
    SignUpComponent.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field)
        };
    };
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__("../../../../../src/app/components/sign/signup/sign.up.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/sign/signup/sign.up.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_sign_service__["a" /* SignService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "../../../../../src/app/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("../../../cdk/esm5/table.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatAutocompleteModule */],
                // MatButtonModule,
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                // MatCheckboxModule,
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatProgressSpinnerModule */],
                // MatRadioModule,
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatTooltipModule */],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (destination, state) {
        var url = state.url;
        var isAuthenticated = this.authService.isAuthenticated();
        if (url === '/sign-in' || url === '/sign-up') {
            if (!isAuthenticated) {
                return true;
            }
            this.router.navigate(['/home']);
            return false;
        }
        if (!isAuthenticated) {
            this.router.navigate(['/sign-in']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        var requestClone = request.clone({
            setHeaders: {
                Authorization: "Bearer " + this.authService.getToken()
            }
        });
        return next.handle(requestClone);
    };
    AuthInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.getToken = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.isAuthenticated = function () {
        // get the token
        var token = this.getToken();
        // return a boolean reflecting
        // whether or not the token is expired
        return Object(__WEBPACK_IMPORTED_MODULE_1_angular2_jwt__["tokenNotExpired"])(null, token);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/calendar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Day; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Day = /** @class */ (function () {
    function Day(date, events, bodyInfo, isCurrentDay, isEmptyEvent) {
        this.date = date;
        this.events = events;
        this.bodyInfo = bodyInfo;
        this.isCurrentDay = isCurrentDay;
        this.isEmptyEvent = isEmptyEvent;
    }
    return Day;
}());

var CalendarService = /** @class */ (function () {
    function CalendarService(http) {
        this.http = http;
        this.dayOfWeeks = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];
    }
    CalendarService.prototype.getDayOfWeeks = function () {
        return this.dayOfWeeks;
    };
    CalendarService.prototype.getEventList = function () {
        return this.http.get('/api/auth/events')
            .map(function (res) {
            var result = res['result'];
            return Object.values(result);
        })
            .map(function (array) { return array.map(function (r) { return new Day(new Date(r.date), r.event, r.bodyInfo); }); });
    };
    // getEventOfDay(year : number, month: number, date: number){
    //
    // }
    //
    CalendarService.prototype.addEventOfDay = function (date, events, bodyInfo) {
        var data = {
            "data": {
                "date": date,
                'bodyInfo': bodyInfo,
                "event": events
            }
        };
        return this.http.post('/api/auth/events', data);
    };
    CalendarService.prototype.updateEventOfDay = function (date, events, bodyInfo) {
        var data = {
            "data": {
                "date": date,
                'bodyInfo': bodyInfo,
                "event": events
            }
        };
        return this.http.put('/api/auth/events', data);
    };
    CalendarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CalendarService);
    return CalendarService;
}());



/***/ }),

/***/ "../../../../../src/app/services/sign.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SignUpObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUpObj = /** @class */ (function () {
    function SignUpObj(nickname, password, email, gender, height, weight) {
        this.nickname = nickname;
        this.password = password;
        this.email = email;
        this.gender = gender;
        this.height = height;
        this.weight = weight;
    }
    return SignUpObj;
}());

var SignService = /** @class */ (function () {
    function SignService(httpClient) {
        this.httpClient = httpClient;
    }
    SignService.prototype.signUp = function (signInfo) {
        var signUpInfo = {
            'nickname': signInfo.nickname,
            'password': signInfo.password,
            'email': signInfo.email,
            'gender': signInfo.gender,
            'height': signInfo.height,
            'weight': signInfo.weight
        };
        return this.httpClient.post('/api/auth/user', signUpInfo);
    };
    SignService.prototype.signIn = function (id, password) {
        var signInInfo = {
            'email': id,
            'password': password
        };
        return this.httpClient.post('/api/auth/login', signInInfo);
    };
    SignService.prototype.signOut = function () {
        localStorage.removeItem('token');
        window.location.reload();
    };
    SignService.prototype.getUserInfo = function () {
        return this.httpClient.get('api/auth/user');
    };
    SignService.prototype.updateUserInfo = function (userInfo) {
        return this.httpClient.put('api/auth/user', userInfo);
    };
    SignService.prototype.deleteUser = function () {
        return this.httpClient.delete('api/auth/user');
    };
    SignService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], SignService);
    return SignService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map