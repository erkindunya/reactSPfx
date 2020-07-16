"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
var VerticalStackBasicExample = /** @class */ (function (_super) {
    tslib_1.__extends(VerticalStackBasicExample, _super);
    function VerticalStackBasicExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onClick = function () {
            alert('Clicked VerticalStack');
        };
        return _this;
    }
    VerticalStackBasicExample.prototype.render = function () {
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
            React.createElement("span", null, "Default vertical stack"),
            React.createElement(office_ui_fabric_react_1.Stack, { className: styles.root },
                React.createElement("span", null, "Item One"),
                React.createElement("span", null, "Item Two"),
                React.createElement("span", null, "Item Three")),
            React.createElement("span", null, "Ordered stack"),
            React.createElement(office_ui_fabric_react_1.Stack, { className: styles.root },
                React.createElement(office_ui_fabric_react_1.Stack.Item, { order: 2 },
                    React.createElement("span", null, "Item One")),
                React.createElement(office_ui_fabric_react_1.Stack.Item, { order: 3 },
                    React.createElement("span", null, "Item Two")),
                React.createElement(office_ui_fabric_react_1.Stack.Item, { order: 1 },
                    React.createElement("span", null, "Item Three"))),
            React.createElement("span", null, "Vertical gap between items"),
            React.createElement(office_ui_fabric_react_1.Stack, { tokens: tokens.tenGapStack, padding: 10, className: styles.root },
                React.createElement("span", null, "Item One"),
                React.createElement("span", null, "Item Two"),
                React.createElement("span", null, "Item Three")),
            React.createElement("span", null, "Item alignments"),
            React.createElement(office_ui_fabric_react_1.Stack, { tokens: tokens.fiveGapStack, padding: 10, className: styles.root },
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
            React.createElement("span", null, "Clickable vertical stack"),
            React.createElement(office_ui_fabric_react_1.Stack, { onClick: this._onClick, padding: 10, className: styles.root },
                React.createElement("span", null, "Click inside this box"))));
    };
    return VerticalStackBasicExample;
}(React.Component));
exports.VerticalStackBasicExample = VerticalStackBasicExample;
//# sourceMappingURL=Stack.Vertical.Basic.Example.js.map