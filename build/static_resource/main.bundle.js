webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/components/sign/signin/sign.in.module": [
		"../../../../../src/app/components/sign/signin/sign.in.module.ts",
		"sign.in.module"
	],
	"app/components/sign/signup/sign.up.module": [
		"../../../../../src/app/components/sign/signup/sign.up.module.ts",
		"sign.up.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
        console.log('start');
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var components = [
    __WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */],
    __WEBPACK_IMPORTED_MODULE_9__components_home_home_component__["a" /* HomeComponent */],
    __WEBPACK_IMPORTED_MODULE_6__components_home_content_body_info_body_info_component__["a" /* BodyInfoComponent */],
    __WEBPACK_IMPORTED_MODULE_7__components_home_content_health_diary_health_diary_component__["a" /* HealthDiaryComponent */],
    __WEBPACK_IMPORTED_MODULE_8__components_home_content_body_analysis_body_analysis_component__["a" /* BodyAnalysisComponent */]
];
var modules = [
    __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
    __WEBPACK_IMPORTED_MODULE_5__material_module__["a" /* MaterialModule */],
    __WEBPACK_IMPORTED_MODULE_3__app_router__["a" /* appRouter */],
    __WEBPACK_IMPORTED_MODULE_10__angular_forms__["e" /* FormsModule */],
    __WEBPACK_IMPORTED_MODULE_10__angular_forms__["j" /* ReactiveFormsModule */],
    __WEBPACK_IMPORTED_MODULE_11__angular_common_http__["b" /* HttpClientModule */]
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: components,
            imports: modules,
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_2__angular_common__["d" /* HashLocationStrategy */] }],
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





var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__components_home_home_component__["a" /* HomeComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_2__components_home_content_health_diary_health_diary_component__["a" /* HealthDiaryComponent */] },
            { path: 'body-info', component: __WEBPACK_IMPORTED_MODULE_1__components_home_content_body_info_body_info_component__["a" /* BodyInfoComponent */] },
            { path: 'body-analysis', component: __WEBPACK_IMPORTED_MODULE_3__components_home_content_body_analysis_body_analysis_component__["a" /* BodyAnalysisComponent */] }
        ]
    },
    { path: 'sign-in', loadChildren: 'app/components/sign/signin/sign.in.module#SignInModule' },
    { path: 'sign-up', loadChildren: 'app/components/sign/signup/sign.up.module#SignUpModule' }
];
var appRouter = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(routes);


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

module.exports = "<p>\n  body-analysis works!\n</p>\n"

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
    }
    BodyAnalysisComponent.prototype.ngOnInit = function () {
    };
    BodyAnalysisComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-body-analysis',
            template: __webpack_require__("../../../../../src/app/components/home/content/body-analysis/body-analysis.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/content/body-analysis/body-analysis.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BodyAnalysisComponent);
    return BodyAnalysisComponent;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
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
exports.push([module.i, ".health-diary-container {\n  width:100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.calendar-container {\n  margin: 0 15px;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n\n}\n\n.calendar-indicator {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 50%;\n  height: 40px;\n  margin: 10px auto 0;\n}\n\n.current-date {\n  text-align: center;\n  -ms-flex-preferred-size: 400px;\n      flex-basis: 400px;\n  -ms-flex-negative: 1;\n      flex-shrink: 1;\n  font-size: 20pt;\n  margin-top: 7px;\n}\n\n.prev-btn {\n  float: left;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n.next-btn {\n  float: right;\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1;\n}\n\n.calendar-header {\n  margin-top: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  height: 40px;\n}\n\n.day-of-weeks {\n  -webkit-box-flex: 2;\n      -ms-flex-positive: 2;\n          flex-grow: 2;\n  -ms-flex-preferred-size: 0;\n      flex-basis: 0;\n  text-align: center;\n  font-size: 18pt;\n  margin-top: 7px;\n}\n\n.calendar-content {\n  margin-bottom: 20px;\n}\n\n.calendar-tile {\n  background-color: lightgrey;\n}\n\n.calendar-tile-content {\n  width: 100%;\n  height: 100%;\n}\n\n.grid-tile-date {\n  position: absolute;\n  top: 5%;\n  right: 5%;\n  font-size: 18pt;\n}\n\n.current-day {\n  font-weight: bold;\n}\n\n.grid-tile-icon {\n  position: absolute;\n  bottom: 5%;\n  left: 5%;\n}\n\n.event-info-container {\n  -ms-flex-preferred-size: 350px;\n      flex-basis: 350px;\n  width: 350px;\n  display: block;\n}\n\n.event-info {\n  margin: 0 10px;\n}\n\n.event-info-form > mat-form-field {\n  width: 100%;\n}\n\n.event-title {\n  text-align: center;\n  margin-top: 20px;\n}\n\n.event-input {\n  width: 60%;\n}\n\n.event-min-select {\n  width: 20%;\n}\n\n@media (max-width: 700px) {\n  .health-diary-container {\n    width:100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n  }\n\n  .day-of-weeks {\n    -webkit-box-flex: 2;\n        -ms-flex-positive: 2;\n            flex-grow: 2;\n    -ms-flex-preferred-size: 0;\n        flex-basis: 0;\n    text-align: center;\n    font-size: 13pt;\n    margin-top: 14px;\n  }\n\n  .grid-tile-date {\n    position: absolute;\n    top: 5%;\n    right: 5%;\n    font-size: 10pt;\n  }\n\n  .event-info-container {\n    width: 100%;\n    display: block;\n  }\n\n  .event-info {\n    width: 300px;\n    margin: 0 auto;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/content/health-diary/health-diary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"health-diary-container\">\n  <div class=\"calendar-container\">\n    <div class=\"calendar-indicator\">\n      <button class=\"prev-btn\" (click)=\"clickPrevBtn()\" mat-icon-button>\n        <mat-icon aria-label=\"Example icon-button with a heart icon\">keyboard_arrow_left</mat-icon>\n      </button>\n      <span class=\"current-date\">{{ currentDate | date : 'yy MMM' }}</span>\n      <button class=\"next-btn\" (click)=\"clickNextBtn()\" mat-icon-button>\n        <mat-icon>keyboard_arrow_right</mat-icon>\n      </button>\n    </div>\n\n    <div class=\"calendar-header\">\n      <div class=\"day-of-weeks\" *ngFor=\"let day of dayOfWeeks\">\n        <span>{{ day }}</span>\n      </div>\n    </div>\n\n    <div class=\"calendar-content\">\n      <mat-grid-list cols=\"7\" rowHeight=\"1:1\">\n        <mat-grid-tile class=\"calendar-tile\" *ngFor=\"let day of days\">\n          <div *ngIf=\"day.date != null\" class=\"calendar-tile-content\">\n            <span class=\"grid-tile-date\" [class.current-day]=\"day.isCurrentDay\">{{ day.date.getDate() }}</span>\n            <button *ngIf=\"day.isEmptyEvent\" class=\"grid-tile-icon\" (click)=\"clickAddEvent(day)\" mat-icon-button>\n              <mat-icon>add</mat-icon>\n            </button>\n            <button *ngIf=\"!day.isEmptyEvent\" class=\"grid-tile-icon\" (click)=\"clickEditEvent(day)\" mat-icon-button>\n              <mat-icon>event</mat-icon>\n            </button>\n          </div>\n        </mat-grid-tile>\n      </mat-grid-list>\n    </div>\n  </div>\n\n  <div class=\"event-info-container\">\n    <div class=\"event-info\">\n      <div class=\"event-title\">\n        <h2>{{ currentDate | date : 'MM.dd'}} diary</h2>\n      </div>\n      <button (click)=\"addInputEvent()\" mat-icon-button>\n        <mat-icon>add</mat-icon>\n        <span>Add event</span>\n      </button>\n      <form #form=\"ngForm\" class=\"event-info-form\" (ngSubmit)=\"submit(form.value, form.valid)\">\n        <div *ngFor=\"let event of currentEvents, let i = index\" ngModelGroup=\"formGroup{{ i }}\" class=\"event-info-form-group\">\n          <mat-form-field class=\"event-input\">\n            <input matInput #input=\"ngModel\" name=\"event\" [(ngModel)]=\"event.event\" placeholder=\"Input your health event\" required>\n            <mat-error *ngIf=\"input.invalid\">Input your health event</mat-error>\n          </mat-form-field>\n          <mat-form-field class=\"event-min-select\">\n            <mat-select #select=\"ngModel\" name=\"min\" [(ngModel)]=\"event.min\" required>\n              <mat-option *ngFor=\"let min of minList\" value=\"{{ min }}\">{{ min }}</mat-option>\n            </mat-select>\n            <mat-error *ngIf=\"select.invalid\">Select time</mat-error>\n          </mat-form-field>\n          <span>min</span>\n        </div>\n        <button mat-icon-button>\n          <mat-icon>cloud_upload</mat-icon>\n          <span>Save</span>\n        </button>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/content/health-diary/health-diary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthDiaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_calendar_service__ = __webpack_require__("../../../../../src/app/services/calendar.service.ts");
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
    function HealthDiaryComponent(calendarService) {
        this.calendarService = calendarService;
        this.days = new Array();
        this.minList = new Array();
        for (var min = 5; min <= 180; min = min + 5) {
            this.minList.push(min);
        }
        this.dayOfWeeks = this.calendarService.getDayOfWeeks();
    }
    HealthDiaryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.calendarService.getEventList().subscribe(function (events) {
            // this.eventList.push(events);
            _this.eventList = events;
            var thisDate = new Date();
            _this.setCalendarData(thisDate.getFullYear(), thisDate.getMonth(), thisDate.getDate());
        }, function (err) { return console.log(err); }, function () {
            console.log('complete');
        });
    };
    HealthDiaryComponent.prototype.setCalendarData = function (year, month, date) {
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
            var isEmptyEvent = true;
            if (typeof eventObj !== 'undefined' && eventObj.events.length > 0) {
                events = eventObj.events;
                isEmptyEvent = false;
            }
            else {
                events = [{ event: '', min: '' }];
            }
            var isCurrentDay = false;
            if ((i + 1) === date) {
                isCurrentDay = true;
                this_1.eventsInServer = events;
                this_1.currentEvents = JSON.parse(JSON.stringify(events));
            }
            var dayObj = new __WEBPACK_IMPORTED_MODULE_1__services_calendar_service__["b" /* Day */](tempDate, events, isCurrentDay, isEmptyEvent);
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
        this.currentEvents.push({ event: '', min: '' });
    };
    HealthDiaryComponent.prototype.submit = function (value, isValid) {
        if (!isValid)
            return;
        var events = Object.values(value);
        if (events.length === 0) {
            console.log('Empty event');
        }
        else if (JSON.stringify(events) === JSON.stringify(this.eventsInServer)) {
            console.log('Same event');
        }
        else {
            alert(JSON.stringify(events));
        }
    };
    HealthDiaryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-health-diary',
            template: __webpack_require__("../../../../../src/app/components/home/content/health-diary/health-diary.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/content/health-diary/health-diary.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_calendar_service__["a" /* CalendarService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_calendar_service__["a" /* CalendarService */]])
    ], HealthDiaryComponent);
    return HealthDiaryComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.toolbar .logo {\n  font-size: 16pt;\n}\n\n.sign > * {\n  font-size: 12pt;\n}\n\n.is-mobile .toolbar {\n  position: fixed;\n  /* Make sure the toolbar will stay on top of the content as it scrolls past. */\n  z-index: 2;\n}\n\n.sidenav-container {\n  /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\n     causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  background-color: cyan;\n}\n\n.is-mobile .sidenav-container {\n  /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\n     `<body>` to be our scrolling element for mobile layouts. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 auto;\n          flex: 1 0 auto;\n}\n\n.space {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto;\n}\n\n.side-nav {\n  width: 250px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-toolbar color=\"primary\" class=\"toolbar\">\n    <button mat-icon-button (click)=\"sideNav.toggle()\"><mat-icon>menu</mat-icon></button>\n    <a mat-button class=\"logo\" routerLink=\"/home\">Health Diary</a>\n    <div class=\"space\"></div>\n    <div class=\"sign\">\n      <a mat-button routerLink=\"/sign-in\">Sign In</a>\n    </div>\n  </mat-toolbar>\n\n  <mat-sidenav-container class=\"sidenav-container\">\n    <mat-sidenav #sideNav [mode]=\"over\" fixedTopGap=\"56\">\n      <mat-nav-list class=\"side-nav\">\n        <mat-list-item *ngFor=\"let menu of menus\" (click)=\"sideNav.toggle()\">\n          <a matLine routerLink=\"{{ menu.link }}\">{{ menu.title }}</a>\n        </mat-list-item>\n      </mat-nav-list>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.menus = [
            { title: "Health Diary", link: "" },
            { title: "Body Info", link: "./body-info" },
            { title: "Body Analysis", link: "./body-analysis" }
        ];
    }
    HomeComponent.prototype.ngOnDestroy = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatTooltipModule */],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
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
    function Day(date, events, isCurrentDay, isEmptyEvent) {
        this.date = date;
        this.events = events;
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
        return this.http.get('/totalevents')
            .map(function (res) { return Object.values(res); })
            .map(function (array) { return array.map(function (r) { return new Day(new Date(r.date), r.events); }); });
    };
    CalendarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CalendarService);
    return CalendarService;
}());

var tempEventList = [
    { date: new Date(2017, 11, 2),
        events: [
            { event: "Boxing", min: '30' },
            { event: "Swimming", min: '50' }
        ]
    },
    { date: new Date(2017, 11, 4),
        events: [
            { event: "Tennis", min: '50' },
            { event: "Running", min: '50' }
        ]
    },
    { date: new Date(2017, 11, 6),
        events: [
            { event: "Running", min: '50' },
            { event: "Swimming", min: '50' }
        ]
    },
    { date: new Date(2017, 11, 7),
        events: [
            { event: "Boxing", min: '30' },
            { event: "Running", min: '20' }
        ]
    },
    { date: new Date(2017, 11, 9),
        events: [
            { event: "Boxing", min: '30' },
            { event: "Running", min: '40' }
        ]
    },
    { date: new Date(2017, 11, 12),
        events: [
            { event: "Tennis", min: '40' },
            { event: "Swimming", min: '50' }
        ]
    },
    { date: new Date(2017, 11, 15),
        events: [
            { event: "Boxing", min: '30' },
            { event: "Running", min: '45' }
        ]
    },
    { date: new Date(2017, 11, 19),
        events: [
            { event: "Tennis", min: '35' },
            { event: "Swimming", min: '25' }
        ]
    },
    { date: new Date(2017, 11, 21),
        events: [
            { event: "Boxing", min: '25' },
            { event: "Running", min: '50' }
        ]
    },
    { date: new Date(2017, 11, 24),
        events: [
            { event: "Tennis", min: '55' },
            { event: "Running", min: '25' }
        ]
    },
    { date: new Date(2017, 11, 30),
        events: [
            { event: "Boxing", min: '50' },
            { event: "Swimming", min: '35' }
        ]
    },
    { date: new Date(2018, 0, 12),
        events: [
            { event: "Boxing", min: '50' },
            { event: "Swimming", min: '35' }
        ]
    }
];


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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map