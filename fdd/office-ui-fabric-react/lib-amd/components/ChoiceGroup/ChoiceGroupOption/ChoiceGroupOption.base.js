define(["require", "exports", "tslib", "react", "../../../Image", "../../../Icon", "../../../Utilities"], function (require, exports, tslib_1, React, Image_1, Icon_1, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    /**
     * {@docCategory ChoiceGroup}
     */
    var ChoiceGroupOptionBase = /** @class */ (function (_super) {
        tslib_1.__extends(ChoiceGroupOptionBase, _super);
        function ChoiceGroupOptionBase() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._inputElement = React.createRef();
            _this._onRenderField = function (props) {
                var _a = props.onRenderLabel, onRenderLabel = _a === void 0 ? _this._onRenderLabel : _a, id = props.id, imageSrc = props.imageSrc, imageAlt = props.imageAlt, selectedImageSrc = props.selectedImageSrc, iconProps = props.iconProps;
                var imageSize = props.imageSize ? props.imageSize : { width: 32, height: 32 };
                return (React.createElement("label", { htmlFor: id, className: _this._classNames.field },
                    imageSrc && (React.createElement("div", { className: _this._classNames.innerField, style: { height: imageSize.height, width: imageSize.width } },
                        React.createElement("div", { className: _this._classNames.imageWrapper },
                            React.createElement(Image_1.Image, { src: imageSrc, alt: imageAlt ? imageAlt : '', width: imageSize.width, height: imageSize.height })),
                        React.createElement("div", { className: _this._classNames.selectedImageWrapper },
                            React.createElement(Image_1.Image, { src: selectedImageSrc, alt: imageAlt ? imageAlt : '', width: imageSize.width, height: imageSize.height })))),
                    iconProps ? (React.createElement("div", { className: _this._classNames.innerField },
                        React.createElement("div", { className: _this._classNames.iconWrapper },
                            React.createElement(Icon_1.Icon, tslib_1.__assign({}, iconProps))))) : null,
                    imageSrc || iconProps ? (React.createElement("div", { className: _this._classNames.labelWrapper, style: { maxWidth: imageSize.width * 2 } }, onRenderLabel(props))) : (onRenderLabel(props))));
            };
            _this._onRenderLabel = function (props) {
                return (React.createElement("span", { id: props.labelId, className: "ms-ChoiceFieldLabel" }, props.text));
            };
            return _this;
        }
        ChoiceGroupOptionBase.prototype.render = function () {
            var _a = this.props, ariaLabel = _a.ariaLabel, focused = _a.focused, required = _a.required, theme = _a.theme, iconProps = _a.iconProps, imageSrc = _a.imageSrc, _b = _a.imageSize, imageSize = _b === void 0 ? { width: 32, height: 32 } : _b, disabled = _a.disabled, checked = _a.checked, id = _a.id, styles = _a.styles, name = _a.name, _c = _a.onRenderField, onRenderField = _c === void 0 ? this._onRenderField : _c, rest = tslib_1.__rest(_a, ["ariaLabel", "focused", "required", "theme", "iconProps", "imageSrc", "imageSize", "disabled", "checked", "id", "styles", "name", "onRenderField"]);
            this._classNames = getClassNames(styles, {
                theme: theme,
                hasIcon: !!iconProps,
                hasImage: !!imageSrc,
                checked: checked,
                disabled: disabled,
                imageIsLarge: !!imageSrc && (imageSize.width > 71 || imageSize.height > 71),
                focused: focused
            });
            var _d = Utilities_1.getNativeProps(rest, Utilities_1.inputProperties), className = _d.className, nativeProps = tslib_1.__rest(_d, ["className"]);
            return (React.createElement("div", { className: this._classNames.root },
                React.createElement("div", { className: this._classNames.choiceFieldWrapper },
                    React.createElement("input", tslib_1.__assign({ "aria-label": ariaLabel ? ariaLabel : undefined, ref: this._inputElement, id: id, className: Utilities_1.css(this._classNames.input, className), type: "radio", name: name, disabled: disabled, checked: checked, required: required, onChange: this._onChange.bind(this, this.props), onFocus: this._onFocus.bind(this, this.props), onBlur: this._onBlur.bind(this, this.props) }, nativeProps)),
                    onRenderField(this.props, this._onRenderField))));
        };
        ChoiceGroupOptionBase.prototype._onChange = function (props, evt) {
            var onChange = props.onChange;
            if (onChange) {
                onChange(evt, props);
            }
        };
        ChoiceGroupOptionBase.prototype._onBlur = function (props, evt) {
            var onBlur = props.onBlur;
            if (onBlur) {
                onBlur(evt, props);
            }
        };
        ChoiceGroupOptionBase.prototype._onFocus = function (props, evt) {
            var onFocus = props.onFocus;
            if (onFocus) {
                onFocus(evt, props);
            }
        };
        return ChoiceGroupOptionBase;
    }(React.Component));
    exports.ChoiceGroupOptionBase = ChoiceGroupOptionBase;
});
//# sourceMappingURL=ChoiceGroupOption.base.js.map