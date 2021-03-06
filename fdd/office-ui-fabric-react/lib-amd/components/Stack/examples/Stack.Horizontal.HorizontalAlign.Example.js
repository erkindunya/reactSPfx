define(["require", "exports", "tslib", "react", "office-ui-fabric-react"], function (require, exports, tslib_1, React, office_ui_fabric_react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HorizontalStackHorizontalAlignExample = /** @class */ (function (_super) {
        tslib_1.__extends(HorizontalStackHorizontalAlignExample, _super);
        function HorizontalStackHorizontalAlignExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HorizontalStackHorizontalAlignExample.prototype.render = function () {
            var styles = office_ui_fabric_react_1.mergeStyleSets({
                root: {
                    background: office_ui_fabric_react_1.DefaultPalette.themeTertiary,
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
            var stackTokens = { childrenGap: 5 };
            return (React.createElement(office_ui_fabric_react_1.Stack, { tokens: stackTokens },
                React.createElement("span", null, "Left-aligned"),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, horizontalAlign: "start", className: styles.root },
                    React.createElement("span", null, "1"),
                    React.createElement("span", null, "2"),
                    React.createElement("span", null, "3")),
                React.createElement("span", null, "Horizontally centered"),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, horizontalAlign: "center", className: styles.root },
                    React.createElement("span", null, "1"),
                    React.createElement("span", null, "2"),
                    React.createElement("span", null, "3")),
                React.createElement("span", null, "Right-aligned"),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, horizontalAlign: "end", className: styles.root },
                    React.createElement("span", null, "1"),
                    React.createElement("span", null, "2"),
                    React.createElement("span", null, "3")),
                React.createElement("span", null, "Horizontal space around items"),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, horizontalAlign: "space-around", className: styles.root },
                    React.createElement("span", null, "1"),
                    React.createElement("span", null, "2"),
                    React.createElement("span", null, "3")),
                React.createElement("span", null, "Horizontal space between items"),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, horizontalAlign: "space-between", className: styles.root },
                    React.createElement("span", null, "1"),
                    React.createElement("span", null, "2"),
                    React.createElement("span", null, "3")),
                React.createElement("span", null, "Items horizontally evenly spaced"),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, horizontalAlign: "space-evenly", className: styles.root },
                    React.createElement("span", null, "1"),
                    React.createElement("span", null, "2"),
                    React.createElement("span", null, "3"))));
        };
        return HorizontalStackHorizontalAlignExample;
    }(React.Component));
    exports.HorizontalStackHorizontalAlignExample = HorizontalStackHorizontalAlignExample;
});
//# sourceMappingURL=Stack.Horizontal.HorizontalAlign.Example.js.map