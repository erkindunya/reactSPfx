"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Panel_1 = require("office-ui-fabric-react/lib/Panel");
var React = require("react");
var PanelLightDismissExample = /** @class */ (function (_super) {
    tslib_1.__extends(PanelLightDismissExample, _super);
    function PanelLightDismissExample() {
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
    PanelLightDismissExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Button_1.DefaultButton, { text: "Open panel", onClick: this._showPanel }),
            React.createElement(Panel_1.Panel, { isOpen: this.state.showPanel, isLightDismiss: true, headerText: "Light Dismiss Panel", onDismiss: this._hidePanel },
                React.createElement("span", null, "Light Dismiss usage is meant for the Contextual Menu on mobile sized breakpoints."))));
    };
    return PanelLightDismissExample;
}(React.Component));
exports.PanelLightDismissExample = PanelLightDismissExample;
//# sourceMappingURL=Panel.LightDismiss.Example.js.map