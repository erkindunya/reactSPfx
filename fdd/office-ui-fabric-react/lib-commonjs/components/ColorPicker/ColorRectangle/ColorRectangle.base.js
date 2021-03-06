"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../../Utilities");
var consts_1 = require("../../../utilities/color/consts");
var getFullColorString_1 = require("../../../utilities/color/getFullColorString");
var updateSV_1 = require("../../../utilities/color/updateSV");
var clamp_1 = require("../../../utilities/color/clamp");
var getClassNames = Utilities_1.classNamesFunction();
/**
 * {@docCategory ColorPicker}
 */
var ColorRectangleBase = /** @class */ (function (_super) {
    tslib_1.__extends(ColorRectangleBase, _super);
    function ColorRectangleBase(props) {
        var _this = _super.call(this, props) || this;
        _this._root = React.createRef();
        _this._onMouseDown = function (ev) {
            _this._events.on(window, 'mousemove', _this._onMouseMove, true);
            _this._events.on(window, 'mouseup', _this._disableEvents, true);
            _this._onMouseMove(ev);
        };
        _this._onMouseMove = function (ev) {
            var _a = _this.props, color = _a.color, onSVChanged = _a.onSVChanged, onChange = _a.onChange;
            if (!_this._root.current) {
                return;
            }
            // If the primary button (1) isn't pressed, the user is no longer dragging, so turn off the
            // event handlers and exit. (this may only be relevant while debugging)
            // tslint:disable-next-line:no-bitwise
            if (!(ev.buttons & 1)) {
                _this._disableEvents();
                return;
            }
            var newColor = _getNewColor(ev, color, _this._root.current);
            if (newColor) {
                _this.setState({
                    color: newColor
                });
                if (onChange) {
                    onChange(ev, newColor);
                }
                if (onSVChanged) {
                    onSVChanged(newColor.s, newColor.v);
                }
            }
            ev.preventDefault();
            ev.stopPropagation();
        };
        _this._disableEvents = function () {
            _this._events.off();
        };
        _this._warnDeprecations({
            onSVChanged: 'onChange'
        });
        var color = _this.props.color;
        _this.state = {
            color: color
        };
        return _this;
    }
    Object.defineProperty(ColorRectangleBase.prototype, "color", {
        get: function () {
            return this.state.color;
        },
        enumerable: true,
        configurable: true
    });
    ColorRectangleBase.prototype.componentWillReceiveProps = function (newProps) {
        var color = newProps.color;
        this.setState({
            color: color
        });
    };
    ColorRectangleBase.prototype.render = function () {
        var _a = this.props, minSize = _a.minSize, theme = _a.theme, className = _a.className, styles = _a.styles;
        var color = this.state.color;
        var classNames = getClassNames(styles, {
            theme: theme,
            className: className
        });
        return (React.createElement("div", { ref: this._root, className: classNames.root, style: { minWidth: minSize, minHeight: minSize, backgroundColor: getFullColorString_1.getFullColorString(color) }, onMouseDown: this._onMouseDown },
            React.createElement("div", { className: classNames.light }),
            React.createElement("div", { className: classNames.dark }),
            React.createElement("div", { className: classNames.thumb, style: { left: color.s + '%', top: consts_1.MAX_COLOR_VALUE - color.v + '%', backgroundColor: color.str } })));
    };
    ColorRectangleBase.defaultProps = {
        minSize: 220
    };
    return ColorRectangleBase;
}(Utilities_1.BaseComponent));
exports.ColorRectangleBase = ColorRectangleBase;
/**
 * Exported for testing only.
 * @internal
 */
function _getNewColor(ev, prevColor, root) {
    var rectSize = root.getBoundingClientRect();
    var sPercentage = (ev.clientX - rectSize.left) / rectSize.width;
    var vPercentage = (ev.clientY - rectSize.top) / rectSize.height;
    return updateSV_1.updateSV(prevColor, clamp_1.clamp(sPercentage * consts_1.MAX_COLOR_SATURATION, consts_1.MAX_COLOR_SATURATION), clamp_1.clamp(consts_1.MAX_COLOR_VALUE - vPercentage * consts_1.MAX_COLOR_VALUE, consts_1.MAX_COLOR_VALUE));
}
exports._getNewColor = _getNewColor;
//# sourceMappingURL=ColorRectangle.base.js.map