define(["require", "exports", "tslib", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Panel", "react"], function (require, exports, tslib_1, Button_1, Panel_1, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PanelFooterExample = /** @class */ (function (_super) {
        tslib_1.__extends(PanelFooterExample, _super);
        function PanelFooterExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                showPanel: false
            };
            _this._onRenderFooterContent = function () {
                return (React.createElement("div", null,
                    React.createElement(Button_1.PrimaryButton, { onClick: _this._hidePanel, style: { marginRight: '8px' } }, "Save"),
                    React.createElement(Button_1.DefaultButton, { onClick: _this._hidePanel }, "Cancel")));
            };
            _this._showPanel = function () {
                _this.setState({ showPanel: true });
            };
            _this._hidePanel = function () {
                _this.setState({ showPanel: false });
            };
            return _this;
        }
        PanelFooterExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(Button_1.DefaultButton, { secondaryText: "Opens the Sample Panel", onClick: this._showPanel, text: "Open Panel" }),
                React.createElement(Panel_1.Panel, { isOpen: this.state.showPanel, type: Panel_1.PanelType.smallFixedFar, onDismiss: this._hidePanel, isFooterAtBottom: true, headerText: "Panel with footer at bottom", closeButtonAriaLabel: "Close", onRenderFooterContent: this._onRenderFooterContent },
                    React.createElement("span", null, "Content goes here."))));
        };
        return PanelFooterExample;
    }(React.Component));
    exports.PanelFooterExample = PanelFooterExample;
});
//# sourceMappingURL=Panel.Footer.Example.js.map