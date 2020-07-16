define(["require", "exports", "tslib", "react", "../BaseButton", "../../../Utilities", "./ActionButton.styles"], function (require, exports, tslib_1, React, BaseButton_1, Utilities_1, ActionButton_styles_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * {@docCategory Button}
     */
    var ActionButton = /** @class */ (function (_super) {
        tslib_1.__extends(ActionButton, _super);
        function ActionButton() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * Tell BaseComponent to bypass resolution of componentRef.
             */
            _this._skipComponentRefResolution = true;
            return _this;
        }
        ActionButton.prototype.render = function () {
            var _a = this.props, styles = _a.styles, theme = _a.theme;
            return (React.createElement(BaseButton_1.BaseButton, tslib_1.__assign({}, this.props, { variantClassName: "ms-Button--action ms-Button--command", styles: ActionButton_styles_1.getStyles(theme, styles), onRenderDescription: Utilities_1.nullRender })));
        };
        ActionButton = tslib_1.__decorate([
            Utilities_1.customizable('ActionButton', ['theme', 'styles'], true)
        ], ActionButton);
        return ActionButton;
    }(Utilities_1.BaseComponent));
    exports.ActionButton = ActionButton;
});
//# sourceMappingURL=ActionButton.js.map