define(["require", "exports", "tslib", "react", "../BaseButton", "../../../Utilities", "./DefaultButton.styles"], function (require, exports, tslib_1, React, BaseButton_1, Utilities_1, DefaultButton_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * {@docCategory Button}
     */
    var DefaultButton = /** @class */ (function (_super) {
        tslib_1.__extends(DefaultButton, _super);
        function DefaultButton() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * Tell BaseComponent to bypass resolution of componentRef.
             */
            _this._skipComponentRefResolution = true;
            return _this;
        }
        DefaultButton.prototype.render = function () {
            var _a = this.props, _b = _a.primary, primary = _b === void 0 ? false : _b, styles = _a.styles, theme = _a.theme;
            return (React.createElement(BaseButton_1.BaseButton, tslib_1.__assign({}, this.props, { variantClassName: primary ? 'ms-Button--primary' : 'ms-Button--default', styles: DefaultButton_styles_1.getStyles(theme, styles, primary), onRenderDescription: Utilities_1.nullRender })));
        };
        DefaultButton = tslib_1.__decorate([
            Utilities_1.customizable('DefaultButton', ['theme', 'styles'], true)
        ], DefaultButton);
        return DefaultButton;
    }(Utilities_1.BaseComponent));
    exports.DefaultButton = DefaultButton;
});
//# sourceMappingURL=DefaultButton.js.map