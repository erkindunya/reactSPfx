define(["require", "exports", "tslib", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Panel", "react"], function (require, exports, tslib_1, Button_1, Panel_1, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PanelNonModalExample = /** @class */ (function (_super) {
        tslib_1.__extends(PanelNonModalExample, _super);
        function PanelNonModalExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                showPanel: false
            };
            _this._showPanel = function () {
                _this.setState({ showPanel: true });
            };
            _this._hidePanel = function () {
                _this.setState({ showPanel: false });
            };
            return _this;
        }
        PanelNonModalExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(Button_1.DefaultButton, { text: "Open panel", onClick: this._showPanel }),
                React.createElement(Panel_1.Panel, { isBlocking: false, isOpen: this.state.showPanel, onDismiss: this._hidePanel, type: Panel_1.PanelType.medium, headerText: "Non-Modal Panel", closeButtonAriaLabel: "Close" },
                    React.createElement("span", null, "Content goes here."))));
        };
        return PanelNonModalExample;
    }(React.Component));
    exports.PanelNonModalExample = PanelNonModalExample;
});
//# sourceMappingURL=Panel.NonModal.Example.js.map