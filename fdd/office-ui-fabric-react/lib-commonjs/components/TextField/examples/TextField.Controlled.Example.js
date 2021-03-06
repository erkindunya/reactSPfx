"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var TextField_1 = require("office-ui-fabric-react/lib/TextField");
var Stack_1 = require("office-ui-fabric-react/lib/Stack");
var TextFieldControlledExample = /** @class */ (function (_super) {
    tslib_1.__extends(TextFieldControlledExample, _super);
    function TextFieldControlledExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { value1: '', value2: '' };
        _this._onChange1 = function (ev, newValue) {
            _this.setState({ value1: newValue || '' });
        };
        _this._onChange2 = function (ev, newValue) {
            if (!newValue || newValue.length <= 5) {
                _this.setState({ value2: newValue || '' });
            }
            else {
                // This block should NOT be necessary, but there's currently a bug (#1350) where a controlled
                // TextField will continue to accept input even if its `value` prop isn't updated.
                // (The correct behavior is that the displayed value should *always* match the `value` prop.
                // If the `value` prop isn't updated in response to user input, the input should be ignored.)
                // Because this is a large behavior change, the bug won't be fixed until Fabric 7.
                // As a workaround, force re-rendering with the existing value.
                _this.setState({ value2: _this.state.value2 });
            }
        };
        return _this;
    }
    TextFieldControlledExample.prototype.render = function () {
        return (React.createElement(Stack_1.Stack, { tokens: { childrenGap: 15 } },
            React.createElement(TextField_1.TextField, { label: "Basic controlled TextField", value: this.state.value1, onChange: this._onChange1, styles: { fieldGroup: { width: 300 } } }),
            React.createElement(TextField_1.TextField, { label: "Controlled TextField limiting length of value to 5", value: this.state.value2, onChange: this._onChange2, styles: { fieldGroup: { width: 100 } } })));
    };
    return TextFieldControlledExample;
}(React.Component));
exports.TextFieldControlledExample = TextFieldControlledExample;
//# sourceMappingURL=TextField.Controlled.Example.js.map