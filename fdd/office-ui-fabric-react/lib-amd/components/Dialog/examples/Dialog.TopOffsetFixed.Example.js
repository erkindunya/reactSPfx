define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Dialog", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/ChoiceGroup"], function (require, exports, tslib_1, React, Dialog_1, Button_1, ChoiceGroup_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DialogTopOffsetFixedExample = /** @class */ (function (_super) {
        tslib_1.__extends(DialogTopOffsetFixedExample, _super);
        function DialogTopOffsetFixedExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                hideDialog: true,
                optionSelected: 'A'
            };
            _this._onChange = function (ev, option) {
                _this.setState({ optionSelected: option.key });
            };
            _this._showDialog = function () {
                _this.setState({ hideDialog: false });
            };
            _this._closeDialog = function () {
                _this.setState({ hideDialog: true });
            };
            return _this;
        }
        DialogTopOffsetFixedExample.prototype.render = function () {
            var _a = this.state, optionSelected = _a.optionSelected, hideDialog = _a.hideDialog;
            return (React.createElement("div", null,
                React.createElement(Button_1.DefaultButton, { secondaryText: "Opens the Sample Dialog", onClick: this._showDialog, text: "Open Dialog" }),
                React.createElement(Dialog_1.Dialog, { hidden: hideDialog, onDismiss: this._closeDialog, modalProps: {
                        isBlocking: true,
                        topOffsetFixed: true
                    } },
                    React.createElement(ChoiceGroup_1.ChoiceGroup, { label: "Pick one icon", options: [
                            {
                                key: 'A',
                                iconProps: { iconName: 'CalendarDay' },
                                text: 'Day',
                                checked: optionSelected === 'A'
                            },
                            {
                                key: 'B',
                                iconProps: { iconName: 'CalendarWeek' },
                                text: 'Week',
                                checked: optionSelected === 'B'
                            },
                            {
                                key: 'C',
                                iconProps: { iconName: 'Calendar' },
                                text: 'Month',
                                checked: optionSelected === 'C'
                            }
                        ], onChange: this._onChange, required: true }),
                    optionSelected === 'A' && (React.createElement("div", null,
                        React.createElement("h1", null, "Description"),
                        React.createElement("div", null,
                            ' ',
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                            ' '))),
                    optionSelected === 'B' && (React.createElement("div", null,
                        React.createElement("h1", null, "Description"),
                        React.createElement("div", null,
                            ' ',
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                            ' '))),
                    optionSelected === 'C' && (React.createElement("div", null,
                        React.createElement("h1", null, "Description"))),
                    React.createElement(Dialog_1.DialogFooter, null,
                        React.createElement(Button_1.PrimaryButton, { onClick: this._closeDialog, text: "Save" }),
                        React.createElement(Button_1.DefaultButton, { onClick: this._closeDialog, text: "Cancel" })))));
        };
        return DialogTopOffsetFixedExample;
    }(React.Component));
    exports.DialogTopOffsetFixedExample = DialogTopOffsetFixedExample;
});
//# sourceMappingURL=Dialog.TopOffsetFixed.Example.js.map