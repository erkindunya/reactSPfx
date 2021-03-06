"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Dialog_1 = require("office-ui-fabric-react/lib/Dialog");
var Button_2 = require("office-ui-fabric-react/lib/Button");
var Panel_1 = require("office-ui-fabric-react/lib/Panel");
var FocusTrapZoneDialogInPanelExample = /** @class */ (function (_super) {
    tslib_1.__extends(FocusTrapZoneDialogInPanelExample, _super);
    function FocusTrapZoneDialogInPanelExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            hideDialog: true,
            showPanel: false
        };
        _this._showDialog = function () {
            _this.setState({ hideDialog: false });
        };
        _this._closeDialog = function () {
            _this.setState({ hideDialog: true });
        };
        _this._onClosePanel = function () {
            _this.setState({ showPanel: false });
        };
        _this._onShowPanel = function () {
            _this.setState({ showPanel: true });
        };
        return _this;
    }
    FocusTrapZoneDialogInPanelExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Button_1.DefaultButton, { text: "Open Panel", secondaryText: "Opens the Sample Panel", onClick: this._onShowPanel }),
            React.createElement(Panel_1.Panel, { isOpen: this.state.showPanel, type: Panel_1.PanelType.smallFixedFar, onDismiss: this._onClosePanel, headerText: "This panel makes use of FocusTrapZone. Focus should be trapped in the panel.", closeButtonAriaLabel: "Close" },
                React.createElement(Button_1.DefaultButton, { text: "Open Dialog", secondaryText: "Opens the Sample Dialog", onClick: this._showDialog }),
                React.createElement(Dialog_1.Dialog, { hidden: this.state.hideDialog, onDismiss: this._closeDialog, isBlocking: true, dialogContentProps: {
                        type: Dialog_1.DialogType.normal,
                        title: 'This dialog also makes use of FocusTrapZone. Focus should be trapped in the dialog.',
                        subText: "Focus will move back to the panel if you press 'OK' or 'Cancel'."
                    }, modalProps: {
                        titleAriaId: 'myLabelId',
                        subtitleAriaId: 'mySubTextId',
                        isBlocking: false,
                        styles: { main: { maxWidth: 450 } }
                    } },
                    React.createElement(Dialog_1.DialogFooter, null,
                        React.createElement(Button_2.PrimaryButton, { onClick: this._closeDialog, text: "OK" }),
                        React.createElement(Button_1.DefaultButton, { onClick: this._closeDialog, text: "Cancel" }))))));
    };
    return FocusTrapZoneDialogInPanelExample;
}(React.Component));
exports.FocusTrapZoneDialogInPanelExample = FocusTrapZoneDialogInPanelExample;
//# sourceMappingURL=FocusTrapZone.DialogInPanel.Example.js.map