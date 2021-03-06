"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
var VerticalStackVerticalAlignExample = /** @class */ (function (_super) {
    tslib_1.__extends(VerticalStackVerticalAlignExample, _super);
    function VerticalStackVerticalAlignExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VerticalStackVerticalAlignExample.prototype.render = function () {
        var styles = office_ui_fabric_react_1.mergeStyleSets({
            root: {
                background: office_ui_fabric_react_1.DefaultPalette.themeTertiary,
                height: 250,
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
            }
        });
        var tokens = {
            sectionStack: {
                childrenGap: 10
            },
            headingStack: {
                childrenGap: 30
            }
        };
        return (React.createElement(office_ui_fabric_react_1.Stack, { tokens: tokens.sectionStack },
            React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, disableShrink: true, tokens: tokens.headingStack, horizontalAlign: "space-between" },
                React.createElement(office_ui_fabric_react_1.Stack, { grow: true },
                    React.createElement("span", null, "Top-aligned"),
                    React.createElement(office_ui_fabric_react_1.Stack, { verticalAlign: "start", className: styles.root },
                        React.createElement("span", null, "1"),
                        React.createElement("span", null, "2"),
                        React.createElement("span", null, "3"))),
                React.createElement(office_ui_fabric_react_1.Stack, { grow: true },
                    React.createElement("span", null, "Vertically centered"),
                    React.createElement(office_ui_fabric_react_1.Stack, { verticalAlign: "center", className: styles.root },
                        React.createElement("span", null, "1"),
                        React.createElement("span", null, "2"),
                        React.createElement("span", null, "3"))),
                React.createElement(office_ui_fabric_react_1.Stack, { grow: true },
                    React.createElement("span", null, "Bottom-aligned"),
                    React.createElement(office_ui_fabric_react_1.Stack, { verticalAlign: "end", className: styles.root },
                        React.createElement("span", null, "1"),
                        React.createElement("span", null, "2"),
                        React.createElement("span", null, "3")))),
            React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, disableShrink: true, tokens: tokens.headingStack, horizontalAlign: "space-between" },
                React.createElement(office_ui_fabric_react_1.Stack, { grow: true },
                    React.createElement("span", null, "Vertical space around items"),
                    React.createElement(office_ui_fabric_react_1.Stack, { verticalAlign: "space-around", className: styles.root },
                        React.createElement("span", null, "1"),
                        React.createElement("span", null, "2"),
                        React.createElement("span", null, "3"))),
                React.createElement(office_ui_fabric_react_1.Stack, { grow: true },
                    React.createElement("span", null, "Vertical space between items"),
                    React.createElement(office_ui_fabric_react_1.Stack, { verticalAlign: "space-between", className: styles.root },
                        React.createElement("span", null, "1"),
                        React.createElement("span", null, "2"),
                        React.createElement("span", null, "3"))),
                React.createElement(office_ui_fabric_react_1.Stack, { grow: true },
                    React.createElement("span", null, "Items vertically evenly spaced"),
                    React.createElement(office_ui_fabric_react_1.Stack, { verticalAlign: "space-evenly", className: styles.root },
                        React.createElement("span", null, "1"),
                        React.createElement("span", null, "2"),
                        React.createElement("span", null, "3"))))));
    };
    return VerticalStackVerticalAlignExample;
}(React.Component));
exports.VerticalStackVerticalAlignExample = VerticalStackVerticalAlignExample;
//# sourceMappingURL=Stack.Vertical.VerticalAlign.Example.js.map