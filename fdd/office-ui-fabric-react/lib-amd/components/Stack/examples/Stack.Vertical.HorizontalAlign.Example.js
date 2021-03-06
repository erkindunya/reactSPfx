define(["require", "exports", "tslib", "react", "office-ui-fabric-react"], function (require, exports, tslib_1, React, office_ui_fabric_react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VerticalStackHorizontalAlignExample = /** @class */ (function (_super) {
        tslib_1.__extends(VerticalStackHorizontalAlignExample, _super);
        function VerticalStackHorizontalAlignExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        VerticalStackHorizontalAlignExample.prototype.render = function () {
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
                React.createElement(office_ui_fabric_react_1.Stack, { horizontalAlign: "start", className: styles.root },
                    React.createElement("span", null, "1"),
                    React.createElement("span", null, "2")),
                React.createElement("span", null, "Horizontally centered"),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontalAlign: "center", className: styles.root },
                    React.createElement("span", null, "1"),
                    React.createElement("span", null, "2")),
                React.createElement("span", null, "Right-aligned"),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontalAlign: "end", className: styles.root },
                    React.createElement("span", null, "1"),
                    React.createElement("span", null, "2"))));
        };
        return VerticalStackHorizontalAlignExample;
    }(React.Component));
    exports.VerticalStackHorizontalAlignExample = VerticalStackHorizontalAlignExample;
});
//# sourceMappingURL=Stack.Vertical.HorizontalAlign.Example.js.map