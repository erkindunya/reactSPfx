"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Dialog_1 = require("office-ui-fabric-react/lib/Dialog");
var Panel_1 = require("office-ui-fabric-react/lib/Panel");
var React = require("react");
var PanelLightDismissCustomExample = /** @class */ (function (_super) {
    tslib_1.__extends(PanelLightDismissCustomExample, _super);
    function PanelLightDismissCustomExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showPanel: false,
            hideDialog: true
        };
        _this._showPanel = function () {
            _this.setState({ showPanel: true });
        };
        _this._hidePanel = function () {
            _this.setState({ showPanel: false });
        };
        _this._showDialog = function () {
            _this.setState({ hideDialog: false });
        };
        _this._closeDialog = function () {
            _this.setState({ hideDialog: true });
        };
        _this._closeDialogAndHidePanel = function () {
            _this._hidePanel();
            _this._closeDialog();
        };
        return _this;
    }
    PanelLightDismissCustomExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Button_1.DefaultButton, { text: "Open panel", onClick: this._showPanel }),
            React.createElement(Panel_1.Panel, { isOpen: this.state.showPanel, isLightDismiss: true, headerText: "Light Dismiss Panel", onDismiss: this._hidePanel, onLightDismissClick: this._showDialog },
                React.createElement("span", null, "Light Dismiss usage is meant for the Contextual Menu on mobile sized breakpoints.")),
            React.createElement(Dialog_1.Dialog, { hidden: this.state.hideDialog, onDismiss: this._closeDialog, dialogContentProps: {
                    type: Dialog_1.DialogType.normal,
                    title: 'Are you sure you want to close the panel?'
                }, modalProps: {
                    titleAriaId: 'myLabelId',
                    subtitleAriaId: 'mySubTextId',
                    isBlocking: true,
                    styles: { main: { maxWidth: 450 } }
                } },
                React.createElement(Dialog_1.DialogFooter, null,
                    React.createElement(Button_1.PrimaryButton, { onClick: this._closeDialogAndHidePanel, text: "Yes" }),
                    React.createElement(Button_1.DefaultButton, { onClick: this._closeDialog, text: "No" })))));
    };
    return PanelLightDismissCustomExample;
}(React.Component));
exports.PanelLightDismissCustomExample = PanelLightDismissCustomExample;
//# sourceMappingURL=Panel.LightDismissCustom.Example.js.map