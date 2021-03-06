define(["require", "exports", "tslib", "react", "../../../Utilities"], function (require, exports, tslib_1, React, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    /**
     * {@docCategory ColorPicker}
     */
    var ColorSliderBase = /** @class */ (function (_super) {
        tslib_1.__extends(ColorSliderBase, _super);
        function ColorSliderBase(props) {
            var _this = _super.call(this, props) || this;
            _this._root = React.createRef();
            _this._onMouseDown = function (ev) {
                _this._events.on(window, 'mousemove', _this._onMouseMove, true);
                _this._events.on(window, 'mouseup', _this._onMouseUp, true);
                _this._onMouseMove(ev);
            };
            _this._onMouseMove = function (ev) {
                if (!_this._root.current) {
                    return;
                }
                var _a = _this.props, onChange = _a.onChange, onChanged = _a.onChanged, minValue = _a.minValue, maxValue = _a.maxValue;
                var rectSize = _this._root.current.getBoundingClientRect();
                var currentPercentage = (ev.clientX - rectSize.left) / rectSize.width;
                var newValue = Math.min(maxValue, Math.max(minValue, currentPercentage * maxValue));
                _this.setState({
                    isAdjusting: true,
                    currentValue: newValue
                });
                if (onChange) {
                    onChange(ev, newValue);
                }
                if (onChanged) {
                    onChanged(newValue);
                }
                ev.preventDefault();
                ev.stopPropagation();
            };
            _this._onMouseUp = function (ev) {
                _this._events.off();
                _this.setState({
                    isAdjusting: false,
                    origin: undefined
                });
            };
            _this._warnDeprecations({
                onChanged: 'onChange'
            });
            var value = _this.props.value;
            _this.state = {
                isAdjusting: false,
                origin: undefined,
                currentValue: value
            };
            return _this;
        }
        ColorSliderBase.prototype.componentWillReceiveProps = function (newProps) {
            if (newProps && newProps.value) {
                this.setState({ currentValue: newProps.value });
            }
        };
        ColorSliderBase.prototype.render = function () {
            var _a = this.props, isAlpha = _a.isAlpha, minValue = _a.minValue, maxValue = _a.maxValue, overlayStyle = _a.overlayStyle, theme = _a.theme, className = _a.className, styles = _a.styles;
            var currentValue = this.state.currentValue;
            var classNames = getClassNames(styles, {
                theme: theme,
                className: className
            });
            var currentPercentage = (100 * (currentValue - minValue)) / (maxValue - minValue);
            var hueStyle = {
                background: 
                // tslint:disable-next-line:max-line-length
                'linear-gradient(to left,red 0,#f09 10%,#cd00ff 20%,#3200ff 30%,#06f 40%,#00fffd 50%,#0f6 60%,#35ff00 70%,#cdff00 80%,#f90 90%,red 100%)'
            };
            var alphaStyle = {
                backgroundImage: 
                // tslint:disable-next-line:max-line-length
                'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAJUlEQVQYV2N89erVfwY0ICYmxoguxjgUFKI7GsTH5m4M3w1ChQC1/Ca8i2n1WgAAAABJRU5ErkJggg==)'
            };
            var sliderStyle = isAlpha ? alphaStyle : hueStyle;
            return (React.createElement("div", { ref: this._root, className: classNames.root, onMouseDown: this._onMouseDown, style: sliderStyle },
                React.createElement("div", { className: classNames.sliderOverlay, style: overlayStyle }),
                React.createElement("div", { className: classNames.sliderThumb, style: { left: currentPercentage + '%' } })));
        };
        ColorSliderBase.defaultProps = {
            minValue: 0,
            maxValue: 100,
            thumbColor: 'inherit',
            value: 0
        };
        return ColorSliderBase;
    }(Utilities_1.BaseComponent));
    exports.ColorSliderBase = ColorSliderBase;
});
//# sourceMappingURL=ColorSlider.base.js.map