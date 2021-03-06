"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var SpinButton_1 = require("office-ui-fabric-react/lib/SpinButton");
var SpinButtonBasicWithIconExample = /** @class */ (function (_super) {
    tslib_1.__extends(SpinButtonBasicWithIconExample, _super);
    function SpinButtonBasicWithIconExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpinButtonBasicWithIconExample.prototype.render = function () {
        return (React.createElement("div", { style: { width: '400px' } },
            React.createElement(SpinButton_1.SpinButton, { defaultValue: "0", iconProps: { iconName: 'IncreaseIndentLegacy' }, label: 'Basic SpinButton:', min: 0, max: 100, step: 1, 
                // tslint:disable:jsx-no-lambda
                onFocus: function () { return console.log('onFocus called'); }, onBlur: function () { return console.log('onBlur called'); }, incrementButtonAriaLabel: 'Increase value by 1', decrementButtonAriaLabel: 'Decrease value by 1' })));
    };
    return SpinButtonBasicWithIconExample;
}(React.Component));
exports.SpinButtonBasicWithIconExample = SpinButtonBasicWithIconExample;
//# sourceMappingURL=SpinButton.BasicWithIcon.Example.js.map