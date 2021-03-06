define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/SpinButton", "office-ui-fabric-react/lib/utilities/positioning"], function (require, exports, tslib_1, React, SpinButton_1, positioning_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpinButtonBasicWithEndPositionExample = /** @class */ (function (_super) {
        tslib_1.__extends(SpinButtonBasicWithEndPositionExample, _super);
        function SpinButtonBasicWithEndPositionExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpinButtonBasicWithEndPositionExample.prototype.render = function () {
            return (React.createElement("div", { style: { width: '400px' } },
                React.createElement(SpinButton_1.SpinButton, { defaultValue: "0", iconProps: { iconName: 'Light' }, label: 'Basic SpinButton', labelPosition: positioning_1.Position.end, min: 0, max: 100, step: 1, 
                    // tslint:disable:jsx-no-lambda
                    onFocus: function () { return console.log('onFocus called'); }, onBlur: function () { return console.log('onBlur called'); }, incrementButtonAriaLabel: 'Increase value by 1', decrementButtonAriaLabel: 'Decrease value by 1' })));
        };
        return SpinButtonBasicWithEndPositionExample;
    }(React.Component));
    exports.SpinButtonBasicWithEndPositionExample = SpinButtonBasicWithEndPositionExample;
});
//# sourceMappingURL=SpinButton.BasicWithEndPosition.Example.js.map