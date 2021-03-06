"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Panel_1 = require("office-ui-fabric-react/lib/Panel");
var React = require("react");
var PanelHandleDismissTargetExample = /** @class */ (function (_super) {
    tslib_1.__extends(PanelHandleDismissTargetExample, _super);
    function PanelHandleDismissTargetExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showPanel: false
        };
        _this._onRenderFooterContent = function () {
            return (React.createElement("div", null,
                React.createElement(Button_1.DefaultButton, { onClick: _this._hidePanel }, "Dismiss")));
        };
        _this._showPanel = function () {
            _this.setState({ showPanel: true });
        };
        _this._hidePanel = function () {
            _this.setState({ showPanel: false });
        };
        _this._onDismiss = function (ev) {
            if (!ev) {
                console.log('Panel dismissed.');
                return;
            }
            console.log('Close button clicked or light dismissed.');
            if (ev.nativeEvent.srcElement && ev.nativeEvent.srcElement.className.indexOf('ms-Button-icon') !== -1) {
                console.log('Close button clicked.');
            }
            if (ev.nativeEvent.srcElement && ev.nativeEvent.srcElement.className.indexOf('ms-Overlay') !== -1) {
                console.log('Light dismissed.');
            }
        };
        return _this;
    }
    PanelHandleDismissTargetExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Button_1.DefaultButton, { secondaryText: "Opens the Sample Panel", onClick: this._showPanel, text: "Open Panel" }),
            React.createElement(Panel_1.Panel, { headerText: "Panel - Handle close button clicks or light dismissal", isOpen: this.state.showPanel, type: Panel_1.PanelType.smallFixedNear, isFooterAtBottom: true, onDismiss: this._onDismiss, onRenderFooterContent: this._onRenderFooterContent, isLightDismiss: true },
                React.createElement("span", null, "Content goes here."))));
    };
    return PanelHandleDismissTargetExample;
}(React.Component));
exports.PanelHandleDismissTargetExample = PanelHandleDismissTargetExample;
//# sourceMappingURL=Panel.HandleDismissTarget.Example.js.map