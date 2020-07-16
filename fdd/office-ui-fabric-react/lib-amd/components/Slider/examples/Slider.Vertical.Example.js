define(["require", "exports", "react", "office-ui-fabric-react/lib/Slider", "office-ui-fabric-react/lib/Stack"], function (require, exports, React, Slider_1, Stack_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // tslint:disable:jsx-no-lambda
    exports.SliderVerticalExample = function () {
        var stackTokens = { childrenGap: 20 };
        return (React.createElement(Stack_1.Stack, { horizontal: true, tokens: stackTokens, styles: { root: { height: 200 } } },
            React.createElement(Slider_1.Slider // prettier-ignore
            , { label: "Basic", min: 1, max: 5, step: 1, defaultValue: 2, showValue: true, vertical: true }),
            React.createElement(Slider_1.Slider // prettier-ignore
            , { label: "Disabled", min: 50, max: 500, step: 50, defaultValue: 300, showValue: true, vertical: true, disabled: true }),
            React.createElement(Slider_1.Slider // prettier-ignore
            , { label: "Controlled", max: 10, vertical: true, showValue: true }),
            React.createElement(Slider_1.Slider // prettier-ignore
            , { label: "Formatted value", max: 100, valueFormat: function (value) { return value + "%"; }, showValue: true, vertical: true }),
            React.createElement(Slider_1.Slider // prettier-ignore
            , { label: "Origin from zero", min: -5, max: 15, step: 1, defaultValue: 5, showValue: true, vertical: true, originFromZero: true })));
    };
});
//# sourceMappingURL=Slider.Vertical.Example.js.map