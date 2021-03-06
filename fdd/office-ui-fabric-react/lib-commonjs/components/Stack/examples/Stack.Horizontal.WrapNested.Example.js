"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
var HorizontalStackWrapNestedExample = /** @class */ (function (_super) {
    tslib_1.__extends(HorizontalStackWrapNestedExample, _super);
    function HorizontalStackWrapNestedExample(props) {
        var _this = _super.call(this, props) || this;
        _this._onWidthChange = function (value) {
            _this.setState({ stackWidth: value });
        };
        _this.state = {
            stackWidth: 100
        };
        return _this;
    }
    HorizontalStackWrapNestedExample.prototype.render = function () {
        var textStyles = {
            width: 50,
            height: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: office_ui_fabric_react_1.DefaultPalette.white
        };
        var styles = office_ui_fabric_react_1.mergeStyleSets({
            root: {
                background: office_ui_fabric_react_1.DefaultPalette.themeTertiary,
                width: this.state.stackWidth + "%"
            },
            stackOne: {
                background: office_ui_fabric_react_1.DefaultPalette.neutralTertiary,
                selectors: {
                    '& span': tslib_1.__assign({}, textStyles, { background: office_ui_fabric_react_1.DefaultPalette.themePrimary })
                }
            },
            stackTwo: {
                background: office_ui_fabric_react_1.DefaultPalette.neutralSecondary,
                selectors: {
                    '& span': tslib_1.__assign({}, textStyles, { background: office_ui_fabric_react_1.DefaultPalette.themeDark })
                }
            },
            stackThree: {
                background: office_ui_fabric_react_1.DefaultPalette.neutralPrimary,
                selectors: {
                    '& span': tslib_1.__assign({}, textStyles, { background: office_ui_fabric_react_1.DefaultPalette.themeDarker })
                }
            }
        });
        var tokens = {
            sectionStack: {
                childrenGap: 10
            },
            wrapStack: {
                childrenGap: '30 40'
            },
            firstStack: {
                childrenGap: '10 30'
            },
            secondStack: {
                childrenGap: '20 50'
            }
        };
        return (React.createElement(office_ui_fabric_react_1.Stack, { tokens: tokens.sectionStack },
            React.createElement(office_ui_fabric_react_1.Slider, { label: "Change the stack width to see how child items wrap onto multiple rows:", min: 1, max: 100, step: 1, defaultValue: 100, showValue: true, onChange: this._onWidthChange }),
            React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, wrap: true, tokens: tokens.wrapStack, className: styles.root },
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, wrap: true, tokens: tokens.firstStack, className: styles.stackOne },
                    React.createElement("span", null, "1"),
                    React.createElement("span", null, "2"),
                    React.createElement("span", null, "3"),
                    React.createElement("span", null, "4"),
                    React.createElement("span", null, "5"),
                    React.createElement("span", null, "6"),
                    React.createElement("span", null, "7")),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, wrap: true, tokens: tokens.secondStack, className: styles.stackTwo },
                    React.createElement("span", null, "1"),
                    React.createElement("span", null, "2"),
                    React.createElement("span", null, "3")),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, wrap: true, className: styles.stackThree },
                    React.createElement("span", null, "1"),
                    React.createElement("span", null, "2"),
                    React.createElement("span", null, "3"),
                    React.createElement("span", null, "4"),
                    React.createElement("span", null, "5"),
                    React.createElement("span", null, "6"),
                    React.createElement("span", null, "7"),
                    React.createElement("span", null, "8"),
                    React.createElement("span", null, "9"),
                    React.createElement("span", null, "10")))));
    };
    return HorizontalStackWrapNestedExample;
}(React.Component));
exports.HorizontalStackWrapNestedExample = HorizontalStackWrapNestedExample;
//# sourceMappingURL=Stack.Horizontal.WrapNested.Example.js.map