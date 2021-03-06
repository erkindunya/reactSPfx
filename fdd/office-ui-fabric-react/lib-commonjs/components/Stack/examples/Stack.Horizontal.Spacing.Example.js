"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
var HorizontalStackSpacingExample = /** @class */ (function (_super) {
    tslib_1.__extends(HorizontalStackSpacingExample, _super);
    function HorizontalStackSpacingExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HorizontalStackSpacingExample.prototype.render = function () {
        var styles = office_ui_fabric_react_1.mergeStyleSets({
            root: {
                background: office_ui_fabric_react_1.DefaultPalette.themeTertiary,
                width: 300,
                selectors: {
                    '> *': {
                        width: 50,
                        height: 50,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: office_ui_fabric_react_1.DefaultPalette.themePrimary,
                        color: office_ui_fabric_react_1.DefaultPalette.white
                    }
                }
            },
            item: {
                width: 50,
                height: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: office_ui_fabric_react_1.DefaultPalette.themePrimary,
                color: office_ui_fabric_react_1.DefaultPalette.white
            }
        });
        var tokens = {
            numericalSpacing: {
                childrenGap: 10
            },
            customSpacing: {
                childrenGap: '10%'
            },
            themedExtraSmall: {
                childrenGap: 's2'
            },
            themedSmall: {
                childrenGap: 's1'
            },
            themedMedium: {
                childrenGap: 'm'
            },
            themedLarge: {
                childrenGap: 'l1'
            },
            themedExtraLarge: {
                childrenGap: 'l2'
            }
        };
        return (React.createElement(office_ui_fabric_react_1.Stack, { tokens: tokens.numericalSpacing },
            React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, disableShrink: true, horizontalAlign: "space-between" },
                React.createElement(office_ui_fabric_react_1.Stack, null,
                    React.createElement("span", null, "Numerical spacing"),
                    React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, className: styles.root, tokens: tokens.numericalSpacing, padding: 10 },
                        React.createElement("span", null, "1"),
                        React.createElement("span", null, "2"),
                        React.createElement("span", null, "3"))),
                React.createElement(office_ui_fabric_react_1.Stack, null,
                    React.createElement("span", null, "Custom spacing"),
                    React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, className: styles.root, tokens: tokens.customSpacing, padding: "s1 15%" },
                        React.createElement("span", null, "1"),
                        React.createElement("span", null, "2"),
                        React.createElement("span", null, "3")))),
            React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, disableShrink: true, horizontalAlign: "space-between" },
                React.createElement(office_ui_fabric_react_1.Stack, null,
                    React.createElement("span", null, "Themed spacing (extra small)"),
                    React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, className: styles.root, tokens: tokens.themedExtraSmall, padding: "s2" },
                        React.createElement("span", null, "1"),
                        React.createElement("span", null, "2"),
                        React.createElement("span", null, "3"))),
                React.createElement(office_ui_fabric_react_1.Stack, null,
                    React.createElement("span", null, "Themed spacing (small)"),
                    React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, className: styles.root, tokens: tokens.themedSmall, padding: "s1" },
                        React.createElement("span", null, "1"),
                        React.createElement("span", null, "2"),
                        React.createElement("span", null, "3"))),
                React.createElement(office_ui_fabric_react_1.Stack, null,
                    React.createElement("span", null, "Themed spacing (medium)"),
                    React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, className: styles.root, tokens: tokens.themedMedium, padding: "m" },
                        React.createElement("span", null, "1"),
                        React.createElement("span", null, "2"),
                        React.createElement("span", null, "3")))),
            React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, horizontalAlign: "space-between" },
                React.createElement(office_ui_fabric_react_1.Stack, null,
                    React.createElement("span", null, "Themed spacing (large)"),
                    React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, className: styles.root, tokens: tokens.themedLarge, padding: "l1" },
                        React.createElement("span", null, "1"),
                        React.createElement("span", null, "2"),
                        React.createElement("span", null, "3"))),
                React.createElement(office_ui_fabric_react_1.Stack, null,
                    React.createElement("span", null, "Themed spacing (extra large)"),
                    React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, className: styles.root, tokens: tokens.themedExtraLarge, padding: "l2" },
                        React.createElement("span", null, "1"),
                        React.createElement("span", null, "2"),
                        React.createElement("span", null, "3"))))));
    };
    return HorizontalStackSpacingExample;
}(React.Component));
exports.HorizontalStackSpacingExample = HorizontalStackSpacingExample;
//# sourceMappingURL=Stack.Horizontal.Spacing.Example.js.map