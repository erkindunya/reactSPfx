define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/SpinButton"], function (require, exports, tslib_1, React, SpinButton_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpinButtonBasicWithIconDisabledExample = /** @class */ (function (_super) {
        tslib_1.__extends(SpinButtonBasicWithIconDisabledExample, _super);
        function SpinButtonBasicWithIconDisabledExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpinButtonBasicWithIconDisabledExample.prototype.render = function () {
            return (React.createElement("div", { style: { width: '400px' } },
                React.createElement(SpinButton_1.SpinButton, { defaultValue: "0", disabled: true, iconProps: { iconName: 'IncreaseIndentLegacy' }, label: 'Basic SpinButton:', min: 0, max: 100, step: 1, incrementButtonAriaLabel: 'Increase value by 1', decrementButtonAriaLabel: 'Decrease value by 1' })));
        };
        return SpinButtonBasicWithIconDisabledExample;
    }(React.Component));
    exports.SpinButtonBasicWithIconDisabledExample = SpinButtonBasicWithIconDisabledExample;
});
//# sourceMappingURL=SpinButton.BasicWithIconDisabled.Example.js.map