"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var app_elements_manip_1 = require("./app.elements.manip");
var AppComponent = (function (_super) {
    __extends(AppComponent, _super);
    function AppComponent() {
        return _super.apply(this, arguments) || this;
    }
    return AppComponent;
}(app_elements_manip_1.ElementsManipulation));
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: './app/views/regestrationForm.html',
        styles: ["\n  body {\n    background-color: #eee;\n}\n\n*[role=\"form\"] {\n    max-width: 530px;\n    padding: 15px;\n    margin: 0 auto;\n    background-color: #fff;\n    border-radius: 0.3em;\n}\n\n*[role=\"form\"] h2 {\n    margin-left: 5em;\n    margin-bottom: 1em;\n}\n\n\n  "]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map