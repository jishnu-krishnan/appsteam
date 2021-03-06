(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! J:\React\Appsteam-challenge\frontend\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "ChHb":
/*!*************************************!*\
  !*** ./src/app/services.service.ts ***!
  \*************************************/
/*! exports provided: ServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesService", function() { return ServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





class ServicesService {
    constructor(http) {
        this.http = http;
        //baseUrl:string = 'http://localhost:3000/api';
        this.baseUrl = 'api';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    // Get select Movie for home page
    getMovies() {
        let url = `${this.baseUrl}/list`;
        return this.http.get(url, { headers: this.headers }); //.pipe(map((response:[])=> response.map(item => item['Name'])))
    }
    // Get select Movie names for selection box
    getMovieNames() {
        let url = `${this.baseUrl}/movies`;
        return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => response.map(item => item['Name'])));
    }
    // Get full details of movie details for a selected item
    getMovieDetails(data) {
        let url = `${this.baseUrl}/search`;
        return this.http.post(url, data, { headers: this.headers });
    }
}
ServicesService.??fac = function ServicesService_Factory(t) { return new (t || ServicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ServicesService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ServicesService, factory: ServicesService.??fac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ServicesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/services.service */ "ChHb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");










function AppComponent_mat_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-option", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("value", item_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", item_r3, " ");
} }
function AppComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Genre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](14, "Rating");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} if (rf & 2) {
    const val_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](val_r4.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](val_r4.Genre);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"]("", val_r4.Rating, " %");
} }
class AppComponent {
    constructor(fb, Service) {
        this.fb = fb;
        this.Service = Service;
        this.title = 'frontend';
        this.details = [];
        this.movieList = [];
        this.options = [];
        this.filteredOptions = [];
    }
    ngOnInit() {
        this.initForm();
        this.getNames();
        this.getMovie();
    }
    initForm() {
        this.searchForm = this.fb.group({
            'name': ['']
        });
        this.searchForm.get('name').valueChanges.subscribe(response => {
            if (response && response.length) {
                this.filterData(response);
                this.getDetails(response);
            }
            else {
                this.filteredOptions = [];
            }
        });
    }
    filterData(enteredData) {
        this.filteredOptions = this.options.filter(item => {
            return item.toLowerCase().indexOf(enteredData.toLowerCase()) > -1;
        });
    }
    getNames() {
        this.Service.getMovieNames().subscribe(response => {
            this.options = response;
            //this.filteredOptions = response;
        });
    }
    getDetails(value) {
        const data = {
            name: value
        };
        this.Service.getMovieDetails(JSON.stringify(data)).subscribe(response => {
            this.details = response;
            //console.log(this.details)
        });
    }
    getMovie() {
        this.Service.getMovies().subscribe(response => {
            this.details = response;
        });
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_app_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 20, vars: 4, consts: [[1, "container"], [1, "title", "container", "center"], [1, "content"], [3, "formGroup"], ["formControlName", "name", "matInput", "", "type", "text", 3, "matAutocomplete"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "card", 4, "ngFor", "ngForOf"], [3, "value"], [1, "card"], [1, "name"], [1, "items"], [1, "row"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Malayalam movies list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "The new malayalam movies list and its rating");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, " Search.... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](13, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "mat-autocomplete", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](16, AppComponent_mat_option_16_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, AppComponent_div_18_Template, 17, 3, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](19, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????reference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.searchForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.filteredOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngForOf", ctx.details);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], styles: [".toolbar[_ngcontent-%COMP%]{\r\n    background-color:#4441fff6;   \r\n}\r\n.brand-logo[_ngcontent-%COMP%]{\r\n    padding-left: 1em;\r\n    margin: -1rem 10 1rem 10;\r\n}\r\n.title[_ngcontent-%COMP%]{\r\n    width: 500px;\r\n    margin-top: 50px;\r\n    font-size: 26px;\r\n}\r\n.content[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n    width: 75%;\r\n    padding-left: 105px;\r\n    font-weight: 50px;\r\n}\r\ntable[_ngcontent-%COMP%]{\r\n    border-collapse: inherit;\r\n}\r\n.items[_ngcontent-%COMP%]{\r\n    font-size: 16px;\r\n    padding: 25px;\r\n}\r\n.card[_ngcontent-%COMP%]{\r\n    padding: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzQ0NDFmZmY2OyAgIFxyXG59XHJcbi5icmFuZC1sb2dve1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxZW07XHJcbiAgICBtYXJnaW46IC0xcmVtIDEwIDFyZW0gMTA7XHJcbn1cclxuLnRpdGxle1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxufVxyXG4uY29udGVudHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHdpZHRoOiA3NSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwcHg7XHJcbn1cclxudGFibGV7XHJcbiAgICBib3JkZXItY29sbGFwc2U6IGluaGVyaXQ7XHJcbn1cclxuLml0ZW1ze1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMjVweDtcclxufVxyXG4uY2FyZHtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _app_services_service__WEBPACK_IMPORTED_MODULE_2__["ServicesService"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _services_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services.service */ "ChHb");











class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _services_service__WEBPACK_IMPORTED_MODULE_9__["ServicesService"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _services_service__WEBPACK_IMPORTED_MODULE_9__["ServicesService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map