"use strict";
var ElementsManipulation = (function () {
    function ElementsManipulation() {
        this.passwordShowHide = true;
        this.layoutInstruction = [
            { 'id': 'firstName', 'visible': true, 'remove': false, 'index': '1', 'onFocus': true },
            { 'id': 'email', 'visible': true, 'remove': false, 'index': '2', 'onFocus': false },
            {
                'id': 'password', 'visible': true, 'remove': false, 'index': '3', 'childElements': {
                    'id': 'confirmpassword', 'visible': true, 'remove': false, 'index': '4'
                }
            }
        ];
        this.routeInstructions = [
            { 'id': '100', 'path': 'home', 'active': true },
            { 'id': '101', 'path': 'login', 'active': true },
            { 'id': '102', 'path': 'welcome', 'active': true }
        ];
    }
    ElementsManipulation.prototype.ngAfterViewChecked = function () {
        for (var _i = 0, _a = this.layoutInstruction; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.id === 'password') {
                if (element.visible === false) {
                    this.passwordShowHide = false;
                }
            }
        }
    };
    return ElementsManipulation;
}());
exports.ElementsManipulation = ElementsManipulation;
//# sourceMappingURL=app.elements.manip.js.map