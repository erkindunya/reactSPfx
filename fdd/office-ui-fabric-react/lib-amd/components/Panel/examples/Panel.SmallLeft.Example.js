define(["require", "exports", "tslib", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Panel", "react"], function (require, exports, tslib_1, Button_1, Panel_1, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PanelSmallLeftExample = /** @class */ (function (_super) {
        tslib_1.__extends(PanelSmallLeftExample, _super);
        function PanelSmallLeftExample() {
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
        PanelSmallLeftExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(Button_1.DefaultButton, { secondaryText: "Opens the Sample Panel", onClick: this._showPanel, text: "Open Panel" }),
                React.createElement(Panel_1.Panel, { isOpen: this.state.showPanel, type: Panel_1.PanelType.smallFixedNear, onDismiss: this._hidePanel, headerText: "Panel - Small, left-aligned, fixed" },
                    React.createElement("span", null, "Content goes here."))));
        };
        return PanelSmallLeftExample;
    }(React.Component));
    exports.PanelSmallLeftExample = PanelSmallLeftExample;
});
//# sourceMappingURL=Panel.SmallLeft.Example.js.map