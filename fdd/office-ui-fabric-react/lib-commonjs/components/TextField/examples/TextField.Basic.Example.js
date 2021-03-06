"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var TextField_1 = require("office-ui-fabric-react/lib/TextField");
var Stack_1 = require("office-ui-fabric-react/lib/Stack");
exports.TextFieldBasicExample = function () {
    // TextFields don't have to be inside Stacks, we're just using Stacks for layout
    var columnProps = {
        tokens: { childrenGap: 15 },
        styles: { root: { width: 300 } }
    };
    return (React.createElement(Stack_1.Stack, { horizontal: true, tokens: { childrenGap: 50 }, styles: { root: { width: 650 } } },
        React.createElement(Stack_1.Stack, tslib_1.__assign({}, columnProps),
            React.createElement(TextField_1.TextField, { label: "Standard" }),
            React.createElement(TextField_1.TextField, { label: "Disabled", disabled: true, defaultValue: "I am disabled" }),
            React.createElement(TextField_1.TextField, { label: "Read-only", readOnly: true, defaultValue: "I am read-only" }),
            React.createElement(TextField_1.TextField, { label: "Required ", required: true }),
            React.createElement(TextField_1.TextField, { required: true }),
            React.createElement(TextField_1.TextField, { label: "With error message", errorMessage: "Error message" })),
        React.createElement(Stack_1.Stack, tslib_1.__assign({}, columnProps),
            React.createElement(TextField_1.MaskedTextField, { label: "With input mask", mask: "m\\ask: (999) 999 - 9999" }),
            React.createElement(TextField_1.TextField, { label: "With an icon", iconProps: { iconName: 'Calendar' } }),
            React.createElement(TextField_1.TextField, { label: "With placeholder", placeholder: "Please enter text here" }),
            React.createElement(TextField_1.TextField, { label: "Disabled with placeholder", disabled: true, placeholder: "I am disabled" }))));
};
//# sourceMappingURL=TextField.Basic.Example.js.map