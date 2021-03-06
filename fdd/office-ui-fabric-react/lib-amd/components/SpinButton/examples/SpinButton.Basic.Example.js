define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/SpinButton"], function (require, exports, tslib_1, React, SpinButton_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpinButtonBasicExample = /** @class */ (function (_super) {
        tslib_1.__extends(SpinButtonBasicExample, _super);
        function SpinButtonBasicExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpinButtonBasicExample.prototype.render = function () {
            return (React.createElement("div", { style: { width: '400px' } },
                React.createElement(SpinButton_1.SpinButton, { defaultValue: "0", label: 'Basic SpinButton:', min: 0, max: 100, step: 1, iconProps: { iconName: 'IncreaseIndentLegacy' }, 
                    // tslint:disable:jsx-no-lambda
                    onFocus: function () { return console.log('onFocus called'); }, onBlur: function () { return console.log('onBlur called'); }, incrementButtonAriaLabel: 'Increase value by 1', decrementButtonAriaLabel: 'Decrease value by 1' }),
                React.createElement(SpinButton_1.SpinButton, { defaultValue: "0", label: 'Decimal SpinButton:', min: 0, max: 10, step: 0.1, onFocus: function () { return console.log('onFocus called'); }, onBlur: function () { return console.log('onBlur called'); }, incrementButtonAriaLabel: 'Increase value by 0.1', decrementButtonAriaLabel: 'Decrease value by 0.1' })));
        };
        return SpinButtonBasicExample;
    }(React.Component));
    exports.SpinButtonBasicExample = SpinButtonBasicExample;
});
//# sourceMappingURL=SpinButton.Basic.Example.js.map