"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Panel_1 = require("office-ui-fabric-react/lib/Panel");
var React = require("react");
var PanelSmallFluidExample = /** @class */ (function (_super) {
    tslib_1.__extends(PanelSmallFluidExample, _super);
    function PanelSmallFluidExample() {
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
    PanelSmallFluidExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Button_1.DefaultButton, { secondaryText: "Opens the Sample Panel", onClick: this._showPanel, text: "Open Panel" }),
            React.createElement(Panel_1.Panel, { isOpen: this.state.showPanel, type: Panel_1.PanelType.smallFluid, onDismiss: this._hidePanel, headerText: "Panel - Small, right-aligned, fixed" },
                React.createElement("span", null, "Content goes here."))));
    };
    return PanelSmallFluidExample;
}(React.Component));
exports.PanelSmallFluidExample = PanelSmallFluidExample;
//# sourceMappingURL=Panel.SmallFluid.Example.js.map