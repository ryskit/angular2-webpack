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
var MyApp = (function () {
    function MyApp(http) {
        this.http = http;
    }
    MyApp.prototype.updateStatus = function () {
        var _this = this;
        this.http.request(new http_1.Request({
            method: "Get",
            url: "./data.json"
        })).subscribe(function (res) {
            _this.status = res.status;
            _this.body = res.json();
        });
    };
    MyApp = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n  <h3>Http example</h3>\n  <button (click)=\"updateStatus();\">Get data.json</button>\n  <p>Status: {{ status }}</p>\n  <pre>{{ body | json }}</pre>\n  "
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MyApp);
    return MyApp;
}());
platform_browser_dynamic_1.bootstrap(MyApp, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map