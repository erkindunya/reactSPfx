define(["require", "exports", "tslib", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Panel", "react"], function (require, exports, tslib_1, Button_1, Panel_1, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PanelHiddenOnDismissExample = /** @class */ (function (_super) {
        tslib_1.__extends(PanelHiddenOnDismissExample, _super);
        function PanelHiddenOnDismissExample() {
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
        PanelHiddenOnDismissExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(Button_1.DefaultButton, { text: "Open panel", onClick: this._showPanel }),
                React.createElement(Panel_1.Panel, { isOpen: this.state.showPanel, isHiddenOnDismiss: true, headerText: "Hidden on Dismiss Panel", onDismiss: this._hidePanel },
                    React.createElement("span", null, "When dismissed, this panel will be hidden instead of destroyed."))));
        };
        return PanelHiddenOnDismissExample;
    }(React.Component));
    exports.PanelHiddenOnDismissExample = PanelHiddenOnDismissExample;
});
//# sourceMappingURL=Panel.HiddenOnDismiss.Example.js.map