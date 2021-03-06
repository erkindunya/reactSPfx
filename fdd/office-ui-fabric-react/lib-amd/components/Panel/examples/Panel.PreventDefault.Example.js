define(["require", "exports", "tslib", "@uifabric/utilities", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Panel", "office-ui-fabric-react/lib/Toggle", "react"], function (require, exports, tslib_1, utilities_1, Button_1, Panel_1, Toggle_1, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PanelPreventDefaultExample = /** @class */ (function (_super) {
        tslib_1.__extends(PanelPreventDefaultExample, _super);
        function PanelPreventDefaultExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                showPanel: false,
                allowEsc: true
            };
            _this._onKeyDown = function (ev) {
                if (ev.keyCode === utilities_1.KeyCodes.escape) {
                    ev.preventDefault();
                    ev.stopPropagation();
                }
            };
            _this._toggleAllowEsc = function () {
                _this.setState({ allowEsc: !_this.state.allowEsc });
            };
            _this._hidePanel = function (ev) {
                if (ev && ev.keyCode === utilities_1.KeyCodes.escape && !_this.state.allowEsc) {
                    ev.preventDefault();
                    return;
                }
                _this.setState({ showPanel: false });
            };
            _this._showPanel = function () {
                _this.setState({ showPanel: true });
            };
            return _this;
        }
        PanelPreventDefaultExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(Button_1.DefaultButton, { secondaryText: "Opens the Sample Panel", onClick: this._showPanel, text: "Open Panel" }),
                React.createElement(Panel_1.Panel, { isOpen: this.state.showPanel, type: Panel_1.PanelType.smallFixedNear, onDismiss: this._hidePanel, headerText: "Panel" },
                    React.createElement("div", null, "Hitting escape inside the text area will not close the Panel"),
                    React.createElement("textarea", { onKeyDown: this._onKeyDown }),
                    React.createElement(Toggle_1.Toggle, { checked: this.state.allowEsc, onChange: this._toggleAllowEsc, label: "Allow ESC key to close panel" }))));
        };
        return PanelPreventDefaultExample;
    }(React.Component));
    exports.PanelPreventDefaultExample = PanelPreventDefaultExample;
});
//# sourceMappingURL=Panel.PreventDefault.Example.js.map