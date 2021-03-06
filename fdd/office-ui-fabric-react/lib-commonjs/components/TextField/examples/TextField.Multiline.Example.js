"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var TextField_1 = require("office-ui-fabric-react/lib/TextField");
var exampleData_1 = require("office-ui-fabric-react/lib/utilities/exampleData");
var Stack_1 = require("office-ui-fabric-react/lib/Stack");
var TextFieldMultilineExample = /** @class */ (function (_super) {
    tslib_1.__extends(TextFieldMultilineExample, _super);
    function TextFieldMultilineExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { multiline: false };
        _this._lorem = exampleData_1.lorem(100);
        _this._onChange = function (ev, newText) {
            var newMultiline = newText.length > 50;
            if (newMultiline !== _this.state.multiline) {
                _this.setState({ multiline: newMultiline });
            }
        };
        return _this;
    }
    TextFieldMultilineExample.prototype.render = function () {
        // TextFields don't have to be inside Stacks, we're just using Stacks for layout
        var columnProps = {
            tokens: { childrenGap: 15 },
            styles: { root: { width: 300 } }
        };
        return (React.createElement(Stack_1.Stack, { horizontal: true, tokens: { childrenGap: 50 }, styles: { root: { width: 650 } } },
            React.createElement(Stack_1.Stack, tslib_1.__assign({}, columnProps),
                React.createElement(TextField_1.TextField, { label: "Standard", multiline: true, rows: 3 }),
                React.createElement(TextField_1.TextField, { label: "Disabled", multiline: true, rows: 3, disabled: true, defaultValue: this._lorem }),
                React.createElement(TextField_1.TextField, { label: "Non-resizable", multiline: true, resizable: false })),
            React.createElement(Stack_1.Stack, tslib_1.__assign({}, columnProps),
                React.createElement(TextField_1.TextField, { label: "With auto adjusting height", multiline: true, autoAdjustHeight: true }),
                React.createElement(TextField_1.TextField, { label: "Switches from single to multiline if more than 50 characters are entered", multiline: this.state.multiline, onChange: this._onChange }))));
    };
    return TextFieldMultilineExample;
}(React.Component));
exports.TextFieldMultilineExample = TextFieldMultilineExample;
//# sourceMappingURL=TextField.Multiline.Example.js.map