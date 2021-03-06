"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Panel_1 = require("office-ui-fabric-react/lib/Panel");
var PanelCustomLeftExample = /** @class */ (function (_super) {
    tslib_1.__extends(PanelCustomLeftExample, _super);
    function PanelCustomLeftExample(props) {
        var _this = _super.call(this, props) || this;
        _this._showPanel = function () {
            _this.setState({ showPanel: true });
        };
        _this._closePanel = function () {
            _this.setState({ showPanel: false });
        };
        _this.state = {
            showPanel: false
        };
        return _this;
    }
    PanelCustomLeftExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Button_1.DefaultButton, { text: "Open Panel", secondaryText: "Opens the Sample Panel", onClick: this._showPanel }),
            React.createElement(Panel_1.Panel, { isOpen: this.state.showPanel, onDismiss: this._closePanel, type: Panel_1.PanelType.customNear, customWidth: "888px", headerText: "Custom Left Panel with custom 888px width" },
                React.createElement("span", null, "Content goes here."))));
    };
    return PanelCustomLeftExample;
}(React.Component));
exports.PanelCustomLeftExample = PanelCustomLeftExample;
//# sourceMappingURL=Panel.CustomLeft.Example.js.map