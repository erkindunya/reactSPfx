"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var SpinButton_1 = require("office-ui-fabric-react/lib/SpinButton");
var SpinButtonBasicDisabledExample = /** @class */ (function (_super) {
    tslib_1.__extends(SpinButtonBasicDisabledExample, _super);
    function SpinButtonBasicDisabledExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpinButtonBasicDisabledExample.prototype.render = function () {
        return (React.createElement("div", { style: { width: '400px' } },
            React.createElement(SpinButton_1.SpinButton, { defaultValue: "25", label: 'Basic SpinButton:', min: 0, max: 100, step: 1, disabled: true, 
                // tslint:disable:jsx-no-lambda
                onFocus: function () { return console.log('onFocus called'); }, onBlur: function () { return console.log('onBlur called'); }, incrementButtonAriaLabel: 'Increase value by 1', decrementButtonAriaLabel: 'Decrease value by 1' })));
    };
    return SpinButtonBasicDisabledExample;
}(React.Component));
exports.SpinButtonBasicDisabledExample = SpinButtonBasicDisabledExample;
//# sourceMappingURL=SpinButton.BasicDisabled.Example.js.map