"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Dialog_1 = require("office-ui-fabric-react/lib/Dialog");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var ChoiceGroup_1 = require("office-ui-fabric-react/lib/ChoiceGroup");
var DialogLargeHeaderExample = /** @class */ (function (_super) {
    tslib_1.__extends(DialogLargeHeaderExample, _super);
    function DialogLargeHeaderExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { hideDialog: true };
        _this._showDialog = function () {
            _this.setState({ hideDialog: false });
        };
        _this._closeDialog = function () {
            _this.setState({ hideDialog: true });
        };
        return _this;
    }
    DialogLargeHeaderExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Button_1.DefaultButton, { secondaryText: "Opens the Sample Dialog", onClick: this._showDialog, text: "Open Dialog" }),
            React.createElement(Dialog_1.Dialog, { hidden: this.state.hideDialog, onDismiss: this._closeDialog, dialogContentProps: {
                    type: Dialog_1.DialogType.largeHeader,
                    title: 'All emails together',
                    subText: 'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'
                }, modalProps: {
                    isBlocking: false,
                    styles: { main: { maxWidth: 450 } }
                } },
                React.createElement(ChoiceGroup_1.ChoiceGroup, { options: [
                        {
                            key: 'A',
                            text: 'Option A'
                        },
                        {
                            key: 'B',
                            text: 'Option B',
                            checked: true
                        },
                        {
                            key: 'C',
                            text: 'Option C',
                            disabled: true
                        }
                    ] }),
                React.createElement(Dialog_1.DialogFooter, null,
                    React.createElement(Button_1.PrimaryButton, { onClick: this._closeDialog, text: "Save" }),
                    React.createElement(Button_1.DefaultButton, { onClick: this._closeDialog, text: "Cancel" })))));
    };
    return DialogLargeHeaderExample;
}(React.Component));
exports.DialogLargeHeaderExample = DialogLargeHeaderExample;
//# sourceMappingURL=Dialog.LargeHeader.Example.js.map