"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Panel_1 = require("office-ui-fabric-react/lib/Panel");
var React = require("react");
var PanelCustomExample = /** @class */ (function (_super) {
    tslib_1.__extends(PanelCustomExample, _super);
    function PanelCustomExample() {
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
    PanelCustomExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Button_1.DefaultButton, { text: "Open Panel", secondaryText: "Opens the Sample Panel", onClick: this._showPanel }),
            React.createElement(Panel_1.Panel, { isOpen: this.state.showPanel, onDismiss: this._hidePanel, type: Panel_1.PanelType.custom, customWidth: "888px", headerText: "Custom Panel with custom 888px width" },
                React.createElement("span", null, "Content goes here."))));
    };
    return PanelCustomExample;
}(React.Component));
exports.PanelCustomExample = PanelCustomExample;
//# sourceMappingURL=Panel.Custom.Example.js.map