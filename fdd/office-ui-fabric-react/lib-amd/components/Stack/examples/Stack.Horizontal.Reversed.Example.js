define(["require", "exports", "tslib", "react", "office-ui-fabric-react"], function (require, exports, tslib_1, React, office_ui_fabric_react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HorizontalStackReversedExample = /** @class */ (function (_super) {
        tslib_1.__extends(HorizontalStackReversedExample, _super);
        function HorizontalStackReversedExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._onClick = function () {
                alert('Clicked Stack');
            };
            return _this;
        }
        HorizontalStackReversedExample.prototype.render = function () {
            var styles = office_ui_fabric_react_1.mergeStyleSets({
                root: {
                    background: office_ui_fabric_react_1.DefaultPalette.themeTertiary
                },
                item: {
                    color: office_ui_fabric_react_1.DefaultPalette.white,
                    background: office_ui_fabric_react_1.DefaultPalette.themePrimary,
                    padding: 5
                }
            });
            var tokens = {
                fiveGapStack: {
                    childrenGap: 5
                },
                tenGapStack: {
                    childrenGap: 10
                }
            };
            return (React.createElement(office_ui_fabric_react_1.Stack, { tokens: tokens.fiveGapStack },
                React.createElement("span", null, "Default horizontal stack"),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, reversed: true, disableShrink: true, className: styles.root },
                    React.createElement("span", null, "Item One"),
                    React.createElement("span", null, "Item Two"),
                    React.createElement("span", null, "Item Three")),
                React.createElement("span", null, "Horizontal gap between items"),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, reversed: true, disableShrink: true, tokens: tokens.tenGapStack, padding: 10, className: styles.root },
                    React.createElement("span", null, "Item One"),
                    React.createElement("span", null, "Item Two"),
                    React.createElement("span", null, "Item Three")),
                React.createElement("span", null, "Item alignments"),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, reversed: true, disableShrink: true, tokens: tokens.fiveGapStack, padding: 10, className: styles.root, styles: { root: { height: 100 } } },
                    React.createElement(office_ui_fabric_react_1.Stack.Item, { align: "auto", className: styles.item },
                        React.createElement("span", null, "Auto-aligned item")),
                    React.createElement(office_ui_fabric_react_1.Stack.Item, { align: "stretch", className: styles.item },
                        React.createElement("span", null, "Stretch-aligned item")),
                    React.createElement(office_ui_fabric_react_1.Stack.Item, { align: "baseline", className: styles.item },
                        React.createElement("span", null, "Baseline-aligned item")),
                    React.createElement(office_ui_fabric_react_1.Stack.Item, { align: "start", className: styles.item },
                        React.createElement("span", null, "Start-aligned item")),
                    React.createElement(office_ui_fabric_react_1.Stack.Item, { align: "center", className: styles.item },
                        React.createElement("span", null, "Center-aligned item")),
                    React.createElement(office_ui_fabric_react_1.Stack.Item, { align: "end", className: styles.item },
                        React.createElement("span", null, "End-aligned item"))),
                React.createElement("span", null, "Clickable stack"),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, onClick: this._onClick, padding: 10, className: styles.root },
                    React.createElement("span", null, "Click inside this box"))));
        };
        return HorizontalStackReversedExample;
    }(React.Component));
    exports.HorizontalStackReversedExample = HorizontalStackReversedExample;
});
//# sourceMappingURL=Stack.Horizontal.Reversed.Example.js.map