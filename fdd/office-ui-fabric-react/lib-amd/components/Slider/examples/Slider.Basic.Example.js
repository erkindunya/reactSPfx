define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Slider", "office-ui-fabric-react/lib/Stack"], function (require, exports, tslib_1, React, Slider_1, Stack_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // tslint:disable:jsx-no-lambda
    var SliderBasicExample = /** @class */ (function (_super) {
        tslib_1.__extends(SliderBasicExample, _super);
        function SliderBasicExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = { value: 0 };
            return _this;
        }
        SliderBasicExample.prototype.render = function () {
            var _this = this;
            var stackTokens = { childrenGap: 20 };
            return (React.createElement(Stack_1.Stack, { tokens: stackTokens, styles: { root: { maxWidth: 300 } } },
                React.createElement(Slider_1.Slider, { label: "Basic example", min: 1, max: 5, step: 1, defaultValue: 2, showValue: true, onChange: function (value) { return console.log(value); } }),
                React.createElement(Slider_1.Slider, { label: "Disabled example", min: 50, max: 500, step: 50, defaultValue: 300, showValue: true, disabled: true }),
                React.createElement(Slider_1.Slider, { label: "Controlled example", max: 10, value: this.state.value, onChange: function (value) { return _this.setState({ value: value }); }, showValue: true }),
                React.createElement(Slider_1.Slider, { label: "Example with formatted value", max: 100, valueFormat: function (value) { return value + "%"; }, showValue: true }),
                React.createElement(Slider_1.Slider, { label: "Origin from zero", min: -5, max: 5, step: 1, defaultValue: 2, showValue: true, originFromZero: true })));
        };
        return SliderBasicExample;
    }(React.Component));
    exports.SliderBasicExample = SliderBasicExample;
});
//# sourceMappingURL=Slider.Basic.Example.js.map