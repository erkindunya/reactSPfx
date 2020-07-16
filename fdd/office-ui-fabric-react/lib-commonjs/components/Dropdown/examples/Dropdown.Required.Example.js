"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Dropdown_1 = require("office-ui-fabric-react/lib/Dropdown");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Stack_1 = require("office-ui-fabric-react/lib/Stack");
exports.DropdownRequiredExample = function () {
    var dropdownRef = React.createRef();
    var onSetFocus = function () { return dropdownRef.current.focus(true); };
    var stackTokens = { childrenGap: 20 };
    return (React.createElement(Stack_1.Stack, { tokens: stackTokens, verticalAlign: "end" },
        React.createElement(Stack_1.Stack, { horizontal: true, tokens: stackTokens, verticalAlign: "end" },
            React.createElement(Dropdown_1.Dropdown, { componentRef: dropdownRef, placeholder: "Select an option", label: "Required dropdown example", options: [
                    { key: 'A', text: 'Option a', title: 'I am option a.' },
                    { key: 'B', text: 'Option b' },
                    { key: 'C', text: 'Option c', disabled: true },
                    { key: 'D', text: 'Option d' },
                    { key: 'E', text: 'Option e' }
                ], required: true, styles: { dropdown: { width: 300 } } }),
            React.createElement(Button_1.PrimaryButton, { text: "Set focus", onClick: onSetFocus })),
        React.createElement(Dropdown_1.Dropdown, { placeholder: "Required with no label", options: [
                { key: 'A', text: 'Option a', title: 'I am option a.' },
                { key: 'B', text: 'Option b' },
                { key: 'C', text: 'Option c', disabled: true },
                { key: 'D', text: 'Option d' },
                { key: 'E', text: 'Option e' }
            ], required: true, styles: { dropdown: { width: 300 } } })));
};
//# sourceMappingURL=Dropdown.Required.Example.js.map