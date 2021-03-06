"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var FocusZone_1 = require("office-ui-fabric-react/lib/FocusZone");
var TextField_1 = require("office-ui-fabric-react/lib/TextField");
var Stack_1 = require("office-ui-fabric-react/lib/Stack");
exports.FocusZoneDisabledExample = function () {
    var tokens = { childrenGap: 20 };
    return (React.createElement(Stack_1.Stack, { tokens: tokens, horizontalAlign: "start" },
        React.createElement(FocusZone_1.FocusZone, { direction: FocusZone_1.FocusZoneDirection.horizontal },
            React.createElement(Stack_1.Stack, { tokens: tokens, horizontal: true },
                React.createElement("span", null, "Enabled FocusZone: "),
                React.createElement(Button_1.DefaultButton, null, "Button 1"),
                React.createElement(Button_1.DefaultButton, null, "Button 2"),
                React.createElement(TextField_1.TextField, { value: "FocusZone TextField", styles: { root: { width: 200 } } }),
                React.createElement(Button_1.DefaultButton, null, "Button 3"))),
        React.createElement(Button_1.DefaultButton, null, "Tabbable Element 1"),
        React.createElement(FocusZone_1.FocusZone, { disabled: true },
            React.createElement(Stack_1.Stack, { tokens: tokens, horizontal: true },
                React.createElement("span", null, "Disabled FocusZone: "),
                React.createElement(Button_1.DefaultButton, null, "Button 1"),
                React.createElement(Button_1.DefaultButton, null, "Button 2"))),
        React.createElement(TextField_1.TextField, { value: "Tabbable Element 2" })));
};
//# sourceMappingURL=FocusZone.Disabled.Example.js.map