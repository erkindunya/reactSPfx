"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Link_1 = require("office-ui-fabric-react/lib/Link");
var Label_1 = require("office-ui-fabric-react/lib/Label");
var Stack_1 = require("office-ui-fabric-react/lib/Stack");
var MessageBar_1 = require("office-ui-fabric-react/lib/MessageBar");
var log = function (text) { return function () { return console.log(text); }; };
exports.MessageBarStyledExample = function () { return (React.createElement(Stack_1.Stack, { tokens: { childrenGap: 20 } },
    React.createElement(Stack_1.StackItem, null,
        React.createElement(Label_1.Label, null, "Info/Default MessageBar - custom styles"),
        React.createElement(MessageBar_1.MessageBar, { styles: {
                root: {
                    background: 'rgba(113, 175, 229, 0.2)',
                    color: '#00188f'
                },
                icon: {
                    color: '#00188f'
                }
            } },
            "Info lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.",
            ' ',
            React.createElement(Link_1.Link, { href: "www.bing.com", target: "_blank" }, "Visit our website."))),
    React.createElement(Stack_1.StackItem, null,
        React.createElement(Label_1.Label, null, "Error, single line, with dismiss button - custom styles"),
        React.createElement(MessageBar_1.MessageBar, { styles: {
                content: {
                    background: 'rgba(50, 20, 90, 0.2)'
                },
                text: {
                    background: 'rgba(166, 166, 166, 0.5)'
                },
                dismissal: {
                    selectors: {
                        '& .ms-Button-icon': {
                            color: '#107c10'
                        }
                    }
                }
            }, messageBarType: MessageBar_1.MessageBarType.error, isMultiline: false, onDismiss: log('test'), dismissButtonAriaLabel: "Close" },
            "Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.",
            ' ',
            React.createElement(Link_1.Link, { href: "www.bing.com", target: "_blank" }, "Visit our website."))),
    React.createElement(Stack_1.StackItem, null,
        React.createElement(Label_1.Label, null, "Blocked, single line, with dismiss button and truncated text - custom styles"),
        React.createElement(MessageBar_1.MessageBar, { styles: {
                root: {
                    background: 'rgba(0, 178, 148, 0.2)'
                },
                dismissSingleLine: {
                    border: '1px solid #5c2d91'
                },
                expandSingleLine: {
                    border: '1px solid #e3008c'
                },
                dismissal: {
                    selectors: {
                        '& .ms-Button-icon': {
                            color: '#004b50'
                        }
                    }
                },
                expand: {
                    selectors: {
                        '& .ms-Button-icon': {
                            color: '#004b50'
                        }
                    }
                },
                innerText: {
                    textDecoration: 'underline'
                }
            }, messageBarType: MessageBar_1.MessageBarType.blocked, isMultiline: false, onDismiss: log('test'), dismissButtonAriaLabel: "Close", truncated: true, overflowButtonAriaLabel: "See more" },
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus, purus a lobortis tristique, odio augue pharetra metus, ac placerat nunc mi nec dui. Vestibulum aliquam et nunc semper scelerisque. Curabitur vitae orci nec quam condimentum porttitor et sed lacus. Vivamus ac efficitur leo. Cras faucibus mauris libero, ac placerat erat euismod et. Donec pulvinar commodo odio sit amet faucibus. In hac habitasse platea dictumst. Duis eu ante commodo, condimentum nibh pellentesque, laoreet enim. Fusce massa lorem, ultrices eu mi a, fermentum suscipit magna. Integer porta purus pulvinar, hendrerit felis eget, condimentum mauris.",
            ' ',
            React.createElement(Link_1.Link, { href: "www.bing.com", target: "_blank" }, "Visit our website."))),
    React.createElement(Stack_1.StackItem, null,
        React.createElement(Label_1.Label, null, "Severe warning, multiline, with action buttons - custom styles"),
        React.createElement(MessageBar_1.MessageBar, { styles: {
                root: { background: 'rgba(227, 0, 140, 0.2)' },
                icon: { color: '#e3008c' },
                actions: { background: 'rgba(180, 0, 158, 0.4)' }
            }, messageBarType: MessageBar_1.MessageBarType.severeWarning, actions: React.createElement("div", null,
                React.createElement(Button_1.MessageBarButton, { styles: { root: { color: '#e3008c' } } }, "Yes"),
                React.createElement(Button_1.MessageBarButton, { styles: { root: { color: '#e3008c' } } }, "No")) },
            "Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.",
            ' ',
            React.createElement(Link_1.Link, { href: "www.bing.com", target: "_blank" }, "Visit our website."))),
    React.createElement(Stack_1.StackItem, null,
        React.createElement(Label_1.Label, null, "Success, single line, with action buttons - custom styles"),
        React.createElement(MessageBar_1.MessageBar, { styles: { actions: { background: '#007d84', border: '1px solid #ffb900' } }, actions: React.createElement("div", null,
                React.createElement(Button_1.MessageBarButton, null, "Yes"),
                React.createElement(Button_1.MessageBarButton, null, "No")), messageBarType: MessageBar_1.MessageBarType.success, isMultiline: false },
            "Lorem ipsum dolor sit amet.",
            ' ',
            React.createElement(Link_1.Link, { href: "www.bing.com", target: "_blank" }, "Visit our website."))),
    React.createElement(Stack_1.StackItem, null,
        React.createElement(Label_1.Label, null, "Warning, single line, with dismiss and action buttons - custom styles"),
        React.createElement(MessageBar_1.MessageBar, { styles: {
                content: {
                    background: 'rgba(234, 67, 0, 0.2)'
                },
                actions: {
                    border: '1px solid #ea4300'
                },
                dismissSingleLine: {
                    border: '1px solid #ea4300'
                }
            }, messageBarType: MessageBar_1.MessageBarType.warning, isMultiline: false, onDismiss: log('test'), dismissButtonAriaLabel: "Close", actions: React.createElement("div", null,
                React.createElement(Button_1.MessageBarButton, null, "Action")) },
            "Lorem ipsum dolor sit amet, a elit sem interdum consectetur adipiscing elit.",
            ' ',
            React.createElement(Link_1.Link, { href: "www.bing.com", target: "_blank" }, "Visit our website."))),
    React.createElement(Stack_1.StackItem, null,
        React.createElement(Label_1.Label, null, "Warning, multiline, with dismiss and action buttons - custom styles"),
        React.createElement(MessageBar_1.MessageBar, { styles: {
                root: {
                    background: 'rgba(0, 188, 242, 0.4)'
                },
                dismissal: {
                    border: '1px solid #00188f'
                },
                actions: {
                    border: '1px solid #0078d4',
                    flexDirection: 'row'
                }
            }, onDismiss: log('test'), dismissButtonAriaLabel: "Close", messageBarType: MessageBar_1.MessageBarType.warning, ariaLabel: "Aria help text here", actions: React.createElement("div", null,
                React.createElement(Button_1.MessageBarButton, null, "Yes"),
                React.createElement(Button_1.MessageBarButton, null, "No")) },
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus, purus a lobortis tristique, odio augue pharetra metus, ac placerat nunc mi nec dui. Vestibulum aliquam et nunc semper scelerisque. Curabitur vitae orci nec quam condimentum porttitor et sed lacus. Vivamus ac efficitur leo. Cras faucibus mauris libero, ac placerat erat euismod et. Donec pulvinar commodo odio sit amet faucibus. In hac habitasse platea dictumst. Duis eu ante commodo, condimentum nibh pellentesque, laoreet enim. Fusce massa lorem, ultrices eu mi a, fermentum suscipit magna. Integer porta purus pulvinar, hendrerit felis eget, condimentum mauris.",
            React.createElement(Link_1.Link, { href: "www.bing.com", target: "_blank" }, "Visit our website."))))); };
//# sourceMappingURL=MessageBar.Styled.Example.js.map