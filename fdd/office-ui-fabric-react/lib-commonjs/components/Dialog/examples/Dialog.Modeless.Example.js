"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Dialog_1 = require("office-ui-fabric-react/lib/Dialog");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Checkbox_1 = require("office-ui-fabric-react/lib/Checkbox");
var ContextualMenu_1 = require("office-ui-fabric-react/lib/ContextualMenu");
var DialogModelessExample = /** @class */ (function (_super) {
    tslib_1.__extends(DialogModelessExample, _super);
    function DialogModelessExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            hideDialog: true,
            isDraggable: false
        };
        _this._dragOptions = {
            moveMenuItemText: 'Move',
            closeMenuItemText: 'Close',
            menu: ContextualMenu_1.ContextualMenu
        };
        _this._showDialog = function () {
            _this.setState({ hideDialog: false });
        };
        _this._closeDialog = function () {
            _this.setState({ hideDialog: true });
        };
        _this._toggleDraggable = function () {
            _this.setState({ isDraggable: !_this.state.isDraggable });
        };
        return _this;
    }
    DialogModelessExample.prototype.render = function () {
        var _a = this.state, hideDialog = _a.hideDialog, isDraggable = _a.isDraggable;
        return (React.createElement("div", null,
            React.createElement("input", { type: "text", placeholder: "Focus Me While Open" }),
            React.createElement("div", null,
                React.createElement(Checkbox_1.Checkbox, { label: "Is draggable", onChange: this._toggleDraggable, checked: isDraggable, disabled: !hideDialog }),
                React.createElement(Button_1.DefaultButton, { secondaryText: "Opens the Sample Dialog", onClick: this._showDialog, text: "Open Dialog" }),
                React.createElement(Button_1.DefaultButton, { secondaryText: "Closes the Sample Dialog", onClick: this._closeDialog, text: "Close Dialog" })),
            React.createElement(Dialog_1.Dialog, { hidden: hideDialog, onDismiss: this._closeDialog, dialogContentProps: {
                    type: Dialog_1.DialogType.normal,
                    title: 'All emails together',
                    subText: 'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'
                }, modalProps: {
                    styles: { main: { maxWidth: 450 } },
                    isModeless: true,
                    dragOptions: isDraggable ? this._dragOptions : undefined,
                    onDismissed: this._closeDialog
                } },
                React.createElement(Dialog_1.DialogFooter, null,
                    React.createElement(Button_1.PrimaryButton, { onClick: this._closeDialog, text: "Save" }),
                    React.createElement(Button_1.DefaultButton, { onClick: this._closeDialog, text: "Cancel" })))));
    };
    return DialogModelessExample;
}(React.Component));
exports.DialogModelessExample = DialogModelessExample;
//# sourceMappingURL=Dialog.Modeless.Example.js.map