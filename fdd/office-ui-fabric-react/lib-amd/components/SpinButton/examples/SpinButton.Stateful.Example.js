define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/SpinButton"], function (require, exports, tslib_1, React, SpinButton_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // tslint:disable:jsx-no-lambda
    var SpinButtonStatefulExample = /** @class */ (function (_super) {
        tslib_1.__extends(SpinButtonStatefulExample, _super);
        function SpinButtonStatefulExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SpinButtonStatefulExample.prototype.render = function () {
            var _this = this;
            var suffix = ' cm';
            return (React.createElement("div", { style: { width: '400px' } },
                React.createElement(SpinButton_1.SpinButton, { label: 'SpinButton with custom implementation:', min: 0, max: 100, value: '7' + suffix, onValidate: function (value) {
                        value = _this._removeSuffix(value, suffix);
                        if (Number(value) > 100 || Number(value) < 0 || value.trim().length === 0 || isNaN(+value)) {
                            return '0' + suffix;
                        }
                        return String(value) + suffix;
                    }, onIncrement: function (value) {
                        value = _this._removeSuffix(value, suffix);
                        if (Number(value) + 2 > 100) {
                            return String(+value) + suffix;
                        }
                        else {
                            return String(+value + 2) + suffix;
                        }
                    }, onDecrement: function (value) {
                        value = _this._removeSuffix(value, suffix);
                        if (Number(value) - 2 < 0) {
                            return String(+value) + suffix;
                        }
                        else {
                            return String(+value - 2) + suffix;
                        }
                    }, onFocus: function () { return console.log('onFocus called'); }, onBlur: function () { return console.log('onBlur called'); }, incrementButtonAriaLabel: 'Increase value by 2', decrementButtonAriaLabel: 'Decrease value by 2' })));
        };
        SpinButtonStatefulExample.prototype._hasSuffix = function (value, suffix) {
            var subString = value.substr(value.length - suffix.length);
            return subString === suffix;
        };
        SpinButtonStatefulExample.prototype._removeSuffix = function (value, suffix) {
            if (!this._hasSuffix(value, suffix)) {
                return value;
            }
            return value.substr(0, value.length - suffix.length);
        };
        return SpinButtonStatefulExample;
    }(React.Component));
    exports.SpinButtonStatefulExample = SpinButtonStatefulExample;
});
//# sourceMappingURL=SpinButton.Stateful.Example.js.map