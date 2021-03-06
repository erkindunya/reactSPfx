"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Checkbox_1 = require("office-ui-fabric-react/lib/Checkbox");
var CheckboxOtherExamples = /** @class */ (function (_super) {
    tslib_1.__extends(CheckboxOtherExamples, _super);
    function CheckboxOtherExamples() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isChecked: false
        };
        _this._onCheckboxChange = function (ev, isChecked) {
            console.log("The option has been changed to " + isChecked + ".");
        };
        _this._onControlledCheckboxChange = function (ev, checked) {
            _this.setState({ isChecked: checked });
        };
        _this._renderLabelWithLink = function () {
            return (React.createElement("span", null,
                "This is a ",
                React.createElement("a", { href: "https://www.microsoft.com" }, "link"),
                " inside a label."));
        };
        return _this;
    }
    CheckboxOtherExamples.prototype.render = function () {
        var isChecked = this.state.isChecked;
        var checkboxStyles = function () {
            return {
                root: {
                    marginTop: '10px'
                }
            };
        };
        return (React.createElement("div", null,
            React.createElement(Checkbox_1.Checkbox, { label: "Uncontrolled checkbox", onChange: this._onCheckboxChange, inputProps: {
                    onFocus: function () {
                        console.log('Uncontrolled checkbox is focused');
                    },
                    onBlur: function () {
                        console.log('Uncontrolled checkbox is blured');
                    }
                }, styles: checkboxStyles }),
            React.createElement(Checkbox_1.Checkbox, { label: "Uncontrolled checkbox with defaultChecked true", defaultChecked: true, onChange: this._onCheckboxChange, styles: checkboxStyles }),
            React.createElement(Checkbox_1.Checkbox, { label: "Disabled uncontrolled checkbox", disabled: true, styles: checkboxStyles }),
            React.createElement(Checkbox_1.Checkbox, { label: "Disabled uncontrolled checkbox with defaultChecked true", disabled: true, defaultChecked: true, onChange: this._onCheckboxChange, styles: checkboxStyles }),
            React.createElement(Checkbox_1.Checkbox, { label: "Controlled checkbox", checked: isChecked, onChange: this._onControlledCheckboxChange, styles: checkboxStyles }),
            React.createElement(Checkbox_1.Checkbox, { label: 'Checkbox rendered with boxSide "end" test', boxSide: "end", styles: checkboxStyles }),
            React.createElement(Checkbox_1.Checkbox, { label: "Persona Checkbox", styles: checkboxStyles, onRenderLabel: this._renderLabelWithLink })));
    };
    return CheckboxOtherExamples;
}(React.Component));
exports.CheckboxOtherExamples = CheckboxOtherExamples;
//# sourceMappingURL=Checkbox.Other.Example.js.map