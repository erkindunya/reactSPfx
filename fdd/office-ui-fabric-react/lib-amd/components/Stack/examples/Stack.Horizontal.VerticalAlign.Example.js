define(["require", "exports", "tslib", "react", "office-ui-fabric-react"], function (require, exports, tslib_1, React, office_ui_fabric_react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HorizontalStackVerticalAlignExample = /** @class */ (function (_super) {
        tslib_1.__extends(HorizontalStackVerticalAlignExample, _super);
        function HorizontalStackVerticalAlignExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        HorizontalStackVerticalAlignExample.prototype.render = function () {
            var styles = office_ui_fabric_react_1.mergeStyleSets({
                root: {
                    background: office_ui_fabric_react_1.DefaultPalette.themeTertiary,
                    height: 100,
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
                React.createElement("span", null, "Top-aligned"),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, verticalAlign: "start", className: styles.root },
                    React.createElement("span", null, "1"),
                    React.createElement("span", null, "2"),
                    React.createElement("span", null, "3")),
                React.createElement("span", null, "Vertically centered"),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, verticalAlign: "center", className: styles.root },
                    React.createElement("span", null, "1"),
                    React.createElement("span", null, "2"),
                    React.createElement("span", null, "3")),
                React.createElement("span", null, "Bottom-aligned"),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, verticalAlign: "end", className: styles.root },
                    React.createElement("span", null, "1"),
                    React.createElement("span", null, "2"),
                    React.createElement("span", null, "3"))));
        };
        return HorizontalStackVerticalAlignExample;
    }(React.Component));
    exports.HorizontalStackVerticalAlignExample = HorizontalStackVerticalAlignExample;
});
//# sourceMappingURL=Stack.Horizontal.VerticalAlign.Example.js.map