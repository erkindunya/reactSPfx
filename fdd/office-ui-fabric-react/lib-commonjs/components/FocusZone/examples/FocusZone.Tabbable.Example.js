"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var FocusZone_1 = require("office-ui-fabric-react/lib/FocusZone");
var TextField_1 = require("office-ui-fabric-react/lib/TextField");
var Stack_1 = require("office-ui-fabric-react/lib/Stack");
var alertClicked = function () {
    alert('Clicked');
};
exports.FocusZoneTabbableExample = function () {
    var tokens = { childrenGap: 20 };
    return (React.createElement(Stack_1.Stack, { tokens: tokens, horizontalAlign: "start" },
        React.createElement(FocusZone_1.FocusZone, { direction: FocusZone_1.FocusZoneDirection.horizontal, handleTabKey: FocusZone_1.FocusZoneTabbableElements.all, isCircularNavigation: true },
            React.createElement(Stack_1.Stack, { tokens: tokens, horizontal: true },
                React.createElement("span", null, "Circular Tabbable FocusZone: "),
                React.createElement(Button_1.DefaultButton, null, "Button 1"),
                React.createElement(Button_1.DefaultButton, null, "Button 2"),
                React.createElement(TextField_1.TextField, { value: "FocusZone TextField", styles: { root: { width: 200 } } }),
                React.createElement(Button_1.DefaultButton, null, "Button 3"),
                React.createElement(Button_1.DefaultButton, { text: "Create account", split: true, onClick: alertClicked, splitButtonAriaLabel: "See 2 sample options", menuProps: {
                        items: [
                            {
                                key: 'emailMessage',
                                text: 'Email message',
                                iconProps: { iconName: 'Mail' }
                            },
                            {
                                key: 'calendarEvent',
                                text: 'Calendar event',
                                iconProps: { iconName: 'Calendar' }
                            }
                        ]
                    } }))),
        React.createElement(FocusZone_1.FocusZone, { direction: FocusZone_1.FocusZoneDirection.horizontal, handleTabKey: FocusZone_1.FocusZoneTabbableElements.inputOnly, isCircularNavigation: false },
            React.createElement(Stack_1.Stack, { tokens: tokens, horizontal: true },
                React.createElement("span", null, "Input Only FocusZone: "),
                React.createElement(Button_1.DefaultButton, null, "Button 1"),
                React.createElement(Button_1.DefaultButton, null, "Button 2"),
                React.createElement(TextField_1.TextField, { value: "FocusZone TextField", styles: { root: { width: 200 } } }),
                React.createElement(Button_1.DefaultButton, null, "Button 3")))));
};
//# sourceMappingURL=FocusZone.Tabbable.Example.js.map