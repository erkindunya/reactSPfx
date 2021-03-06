"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Panel_1 = require("office-ui-fabric-react/lib/Panel");
var React = require("react");
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
//# sourceMappingURL=Panel.NonModal.Example.js.map