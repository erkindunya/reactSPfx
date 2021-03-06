"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Link_1 = require("office-ui-fabric-react/lib/Link");
var Label_1 = require("office-ui-fabric-react/lib/Label");
var Stack_1 = require("office-ui-fabric-react/lib/Stack");
var MessageBar_1 = require("office-ui-fabric-react/lib/MessageBar");
var log = function (text) { return function () { return console.log(text); }; };
exports.MessageBarBasicExample = function () { return (React.createElement(Stack_1.Stack, { tokens: { childrenGap: 20 } },
    React.createElement(Stack_1.StackItem, null,
        React.createElement(Label_1.Label, null, "Info/Default MessageBar"),
        React.createElement(MessageBar_1.MessageBar, null,
            "Info lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.",
            ' ',
            React.createElement(Link_1.Link, { href: "www.bing.com", target: "_blank" }, "Visit our website."))),
    React.createElement(Stack_1.StackItem, null,
        React.createElement(Label_1.Label, null, "Error MessageBar - single line, with dismiss button"),
        React.createElement(MessageBar_1.MessageBar, { messageBarType: MessageBar_1.MessageBarType.error, isMultiline: false, onDismiss: log('test'), dismissButtonAriaLabel: "Close" },
            "Error lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.",
            ' ',
            React.createElement(Link_1.Link, { href: "www.bing.com", target: "_blank" }, "Visit our website."))),
    React.createElement(Stack_1.StackItem, null,
        React.createElement(Label_1.Label, null, "Blocked MessageBar - single line, with dismiss button and truncated text. Truncation is not available if you use action buttons or multiline and should be used sparingly."),
        React.createElement(MessageBar_1.MessageBar, { messageBarType: MessageBar_1.MessageBarType.blocked, isMultiline: false, onDismiss: log('test'), dismissButtonAriaLabel: "Close", truncated: true, overflowButtonAriaLabel: "See more" },
            "Blocked lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus, purus a lobortis tristique, odio augue pharetra metus, ac placerat nunc mi nec dui. Vestibulum aliquam et nunc semper scelerisque. Curabitur vitae orci nec quam condimentum porttitor et sed lacus. Vivamus ac efficitur leo. Cras faucibus mauris libero, ac placerat erat euismod et. Donec pulvinar commodo odio sit amet faucibus. In hac habitasse platea dictumst. Duis eu ante commodo, condimentum nibh pellentesque, laoreet enim. Fusce massa lorem, ultrices eu mi a, fermentum suscipit magna. Integer porta purus pulvinar, hendrerit felis eget, condimentum mauris.",
            React.createElement(Link_1.Link, { href: "www.bing.com", target: "_blank" }, "Visit our website."))),
    React.createElement(Stack_1.StackItem, null,
        React.createElement(Label_1.Label, null, "SevereWarning MessageBar - defaults to multiline, with action buttons"),
        React.createElement(MessageBar_1.MessageBar, { messageBarType: MessageBar_1.MessageBarType.severeWarning, actions: React.createElement("div", null,
                React.createElement(Button_1.MessageBarButton, null, "Yes"),
                React.createElement(Button_1.MessageBarButton, null, "No")) },
            "Severe warning lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.",
            ' ',
            React.createElement(Link_1.Link, { href: "www.bing.com", target: "_blank" }, "Visit our website."))),
    React.createElement(Stack_1.StackItem, null,
        React.createElement(Label_1.Label, null, "Success MessageBar - single line, with action buttons"),
        React.createElement(MessageBar_1.MessageBar, { actions: React.createElement("div", null,
                React.createElement(Button_1.MessageBarButton, null, "Yes"),
                React.createElement(Button_1.MessageBarButton, null, "No")), messageBarType: MessageBar_1.MessageBarType.success, isMultiline: false },
            "Success lorem ipsum dolor sit amet.",
            ' ',
            React.createElement(Link_1.Link, { href: "www.bing.com", target: "_blank" }, "Visit our website."))),
    React.createElement(Stack_1.StackItem, null,
        React.createElement(Label_1.Label, null, "Warning MessageBar - single line, with dismiss and action buttons"),
        React.createElement(MessageBar_1.MessageBar, { messageBarType: MessageBar_1.MessageBarType.warning, isMultiline: false, onDismiss: log('test'), dismissButtonAriaLabel: "Close", actions: React.createElement("div", null,
                React.createElement(Button_1.MessageBarButton, null, "Action")) },
            "Warning lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.",
            ' ',
            React.createElement(Link_1.Link, { href: "www.bing.com", target: "_blank" }, "Visit our website."))),
    React.createElement(Stack_1.StackItem, null,
        React.createElement(Label_1.Label, null, "Warning MessageBar - defaults to multiline, with dismiss and action buttons"),
        React.createElement(MessageBar_1.MessageBar, { onDismiss: log('test'), dismissButtonAriaLabel: "Close", messageBarType: MessageBar_1.MessageBarType.warning, ariaLabel: "Aria help text here", actions: React.createElement("div", null,
                React.createElement(Button_1.MessageBarButton, null, "Yes"),
                React.createElement(Button_1.MessageBarButton, null, "No")) },
            "Warning lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus, purus a lobortis tristique, odio augue pharetra metus, ac placerat nunc mi nec dui. Vestibulum aliquam et nunc semper scelerisque. Curabitur vitae orci nec quam condimentum porttitor et sed lacus. Vivamus ac efficitur leo. Cras faucibus mauris libero, ac placerat erat euismod et. Donec pulvinar commodo odio sit amet faucibus. In hac habitasse platea dictumst. Duis eu ante commodo, condimentum nibh pellentesque, laoreet enim. Fusce massa lorem, ultrices eu mi a, fermentum suscipit magna. Integer porta purus pulvinar, hendrerit felis eget, condimentum mauris.",
            React.createElement(Link_1.Link, { href: "www.bing.com", target: "_blank" }, "Visit our website."))))); };
//# sourceMappingURL=MessageBar.Basic.Example.js.map