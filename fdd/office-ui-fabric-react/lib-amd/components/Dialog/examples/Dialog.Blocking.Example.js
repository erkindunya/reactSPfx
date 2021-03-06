define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Dialog", "office-ui-fabric-react/lib/Button"], function (require, exports, tslib_1, React, Dialog_1, Button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DialogBlockingExample = /** @class */ (function (_super) {
        tslib_1.__extends(DialogBlockingExample, _super);
        function DialogBlockingExample() {
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
        DialogBlockingExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(Button_1.DefaultButton, { secondaryText: "Opens the Sample Dialog", onClick: this._showDialog, text: "Open Dialog" }),
                React.createElement(Dialog_1.Dialog, { hidden: this.state.hideDialog, onDismiss: this._closeDialog, dialogContentProps: {
                        type: Dialog_1.DialogType.normal,
                        title: 'All emails together',
                        subText: 'Your Inbox has changed. No longer does it include favorites, it is a singular destination for your emails.'
                    }, modalProps: {
                        isBlocking: true,
                        styles: { main: { maxWidth: 450 } }
                    } },
                    React.createElement(Dialog_1.DialogFooter, null,
                        React.createElement(Button_1.PrimaryButton, { onClick: this._closeDialog, text: "Save" }),
                        React.createElement(Button_1.DefaultButton, { onClick: this._closeDialog, text: "Cancel" })))));
        };
        return DialogBlockingExample;
    }(React.Component));
    exports.DialogBlockingExample = DialogBlockingExample;
});
//# sourceMappingURL=Dialog.Blocking.Example.js.map