"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var BaseButton_1 = require("../BaseButton");
var Utilities_1 = require("../../../Utilities");
var CommandBarButton_styles_1 = require("./CommandBarButton.styles");
/**
 * {@docCategory Button}
 */
var CommandBarButton = /** @class */ (function (_super) {
    tslib_1.__extends(CommandBarButton, _super);
    function CommandBarButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Tell BaseComponent to bypass resolution of componentRef.
         */
        _this._skipComponentRefResolution = true;
        return _this;
    }
    CommandBarButton.prototype.render = function () {
        var _a = this.props, styles = _a.styles, theme = _a.theme;
        return (React.createElement(BaseButton_1.BaseButton, tslib_1.__assign({}, this.props, { variantClassName: "ms-Button--commandBar", styles: CommandBarButton_styles_1.getStyles(theme, styles), onRenderDescription: Utilities_1.nullRender })));
    };
    CommandBarButton = tslib_1.__decorate([
        Utilities_1.customizable('CommandBarButton', ['theme', 'styles'], true)
    ], CommandBarButton);
    return CommandBarButton;
}(Utilities_1.BaseComponent));
exports.CommandBarButton = CommandBarButton;
//# sourceMappingURL=CommandBarButton.js.map