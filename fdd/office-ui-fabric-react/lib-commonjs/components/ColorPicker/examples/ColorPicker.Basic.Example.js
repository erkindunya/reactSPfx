"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var index_1 = require("office-ui-fabric-react/lib/index");
var Styling_1 = require("office-ui-fabric-react/lib/Styling");
var updateA_1 = require("office-ui-fabric-react/lib/utilities/color/updateA");
var classNames = Styling_1.mergeStyleSets({
    wrapper: {
        display: 'flex'
    },
    column2: {
        marginLeft: 10
    },
    colorSquare: {
        width: 100,
        height: 100,
        margin: '16px 0',
        border: '1px solid #c8c6c4',
        selectors: (_a = {},
            _a[Styling_1.HighContrastSelector] = {
                MsHighContrastAdjust: 'none'
            },
            _a)
    }
});
var ColorPickerBasicExample = /** @class */ (function (_super) {
    tslib_1.__extends(ColorPickerBasicExample, _super);
    function ColorPickerBasicExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            color: index_1.getColorFromString('#ffffff'),
            alphaSliderHidden: false
        };
        _this._updateColor = function (ev, colorObj) {
            _this.setState({ color: colorObj });
        };
        _this._onHideAlphaClick = function (ev, checked) {
            var color = _this.state.color;
            if (checked) {
                // If hiding the alpha slider, remove transparency from the color
                color = updateA_1.updateA(_this.state.color, 100);
            }
            _this.setState({ alphaSliderHidden: !!checked, color: color });
        };
        return _this;
    }
    ColorPickerBasicExample.prototype.render = function () {
        var _a = this.state, color = _a.color, alphaSliderHidden = _a.alphaSliderHidden;
        return (React.createElement("div", { className: classNames.wrapper },
            React.createElement(index_1.ColorPicker, { color: color, onChange: this._updateColor, alphaSliderHidden: alphaSliderHidden }),
            React.createElement("div", { className: classNames.column2 },
                React.createElement("div", { className: classNames.colorSquare, style: {
                        backgroundColor: color.str
                    } }),
                React.createElement(index_1.Toggle, { label: "Hide alpha slider", onChange: this._onHideAlphaClick, checked: alphaSliderHidden }))));
    };
    return ColorPickerBasicExample;
}(React.Component));
exports.ColorPickerBasicExample = ColorPickerBasicExample;
var _a;
//# sourceMappingURL=ColorPicker.Basic.Example.js.map