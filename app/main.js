"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var SampleService = (function () {
    function SampleService(http) {
        this.http = http;
    }
    SampleService.prototype.fetch = function () {
        return this.http.get("./data.json").map(function (res) { return res.json(); });
    };
    SampleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SampleService);
    return SampleService;
}());
var MyApp = (function () {
    function MyApp(service) {
        this.service = service;
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        this.service.fetch().subscribe(function (data) { return _this.data = data; });
    };
    MyApp = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h3>Http Example</h3>\n    <pre>{{ data | json }}</pre>\n  ",
            providers: [SampleService]
        }), 
        __metadata('design:paramtypes', [SampleService])
    ], MyApp);
    return MyApp;
}());
exports.MyApp = MyApp;
platform_browser_dynamic_1.bootstrap(MyApp, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map