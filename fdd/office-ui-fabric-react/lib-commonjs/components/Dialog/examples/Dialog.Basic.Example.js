"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Dialog_1 = require("office-ui-fabric-react/lib/Dialog");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var Styling_1 = require("office-ui-fabric-react/lib/Styling");
var Checkbox_1 = require("office-ui-fabric-react/lib/Checkbox");
var ContextualMenu_1 = require("office-ui-fabric-react/lib/ContextualMenu");
var screenReaderOnly = Styling_1.mergeStyles(Styling_1.hiddenContentStyle);
var DialogBasicExample = /** @class */ (function (_super) {
    tslib_1.__extends(DialogBasicExample, _super);
    function DialogBasicExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            hideDialog: true,
            isDraggable: false
        };
        // Use getId() to ensure that the IDs are unique on the page.
        // (It's also okay to use plain strings without getId() and manually ensure uniqueness.)
        _this._labelId = Utilities_1.getId('dialogLabel');
        _this._subTextId = Utilities_1.getId('subTextLabel');
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
    DialogBasicExample.prototype.render = function () {
        var _a = this.state, hideDialog = _a.hideDialog, isDraggable = _a.isDraggable;
        return (React.createElement("div", null,
            React.createElement(Checkbox_1.Checkbox, { label: "Is draggable", onChange: this._toggleDraggable, checked: isDraggable }),
            React.createElement(Button_1.DefaultButton, { secondaryText: "Opens the Sample Dialog", onClick: this._showDialog, text: "Open Dialog" }),
            React.createElement("label", { id: this._labelId, className: screenReaderOnly }, "My sample Label"),
            React.createElement("label", { id: this._subTextId, className: screenReaderOnly }, "My Sample description"),
            React.createElement(Dialog_1.Dialog, { hidden: hideDialog, onDismiss: this._closeDialog, dialogContentProps: {
                    type: Dialog_1.DialogType.normal,
                    title: 'All emails together',
                    subText: 'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'
                }, modalProps: {
                    titleAriaId: this._labelId,
                    subtitleAriaId: this._subTextId,
                    isBlocking: false,
                    styles: { main: { maxWidth: 450 } },
                    dragOptions: isDraggable ? this._dragOptions : undefined
                } },
                React.createElement(Dialog_1.DialogFooter, null,
                    React.createElement(Button_1.PrimaryButton, { onClick: this._closeDialog, text: "Save" }),
                    React.createElement(Button_1.DefaultButton, { onClick: this._closeDialog, text: "Cancel" })))));
    };
    return DialogBasicExample;
}(React.Component));
exports.DialogBasicExample = DialogBasicExample;
//# sourceMappingURL=Dialog.Basic.Example.js.map