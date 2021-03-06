define(["require", "exports", "tslib", "react", "../../../Utilities", "../DefaultButton/DefaultButton"], function (require, exports, tslib_1, React, Utilities_1, DefaultButton_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * {@docCategory Button}
     */
    var PrimaryButton = /** @class */ (function (_super) {
        tslib_1.__extends(PrimaryButton, _super);
        function PrimaryButton() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            /**
             * Set this BaseComponent._skipComponentRefResolution to true, bypassing resolution of componentRef.
             */
            _this._skipComponentRefResolution = true;
            return _this;
        }
        PrimaryButton.prototype.render = function () {
            return React.createElement(DefaultButton_1.DefaultButton, tslib_1.__assign({}, this.props, { primary: true, onRenderDescription: Utilities_1.nullRender }));
        };
        PrimaryButton = tslib_1.__decorate([
            Utilities_1.customizable('PrimaryButton', ['theme', 'styles'], true)
        ], PrimaryButton);
        return PrimaryButton;
    }(Utilities_1.BaseComponent));
    exports.PrimaryButton = PrimaryButton;
});
//# sourceMappingURL=PrimaryButton.js.map