"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
var VerticalStackWrapAdvancedExample = /** @class */ (function (_super) {
    tslib_1.__extends(VerticalStackWrapAdvancedExample, _super);
    function VerticalStackWrapAdvancedExample(props) {
        var _this = _super.call(this, props) || this;
        _this._onWidthChange = function (value) {
            _this.setState({ stackWidth: value });
        };
        _this._onHeightChange = function (value) {
            _this.setState({ containerHeight: value });
        };
        _this._onHorizontalAlignChange = function (ev, option) {
            _this.setState({ horizontalAlignment: option.key });
        };
        _this._onVerticalAlignChange = function (ev, option) {
            _this.setState({ verticalAlignment: option.key });
        };
        _this._onOverflowChange = function (ev, option) {
            _this.setState({ overflow: option.key });
        };
        _this.state = {
            stackWidth: 100,
            containerHeight: 420,
            horizontalAlignment: 'start',
            verticalAlignment: 'start',
            overflow: 'visible'
        };
        return _this;
    }
    VerticalStackWrapAdvancedExample.prototype.render = function () {
        var _a = this.state, stackWidth = _a.stackWidth, containerHeight = _a.containerHeight, overflow = _a.overflow, horizontalAlignment = _a.horizontalAlignment, verticalAlignment = _a.verticalAlignment;
        var styles = office_ui_fabric_react_1.mergeStyleSets({
            root: {
                background: office_ui_fabric_react_1.DefaultPalette.themeTertiary,
                width: stackWidth + "%",
                overflow: overflow,
                selectors: {
                    '& span': {
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
            container: {
                height: containerHeight
            }
        });
        var tokens = {
            sectionStack: {
                childrenGap: 10
            },
            wrapStack: {
                childrenGap: 20
            }
        };
        return (React.createElement(office_ui_fabric_react_1.Stack, { tokens: tokens.sectionStack },
            React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true },
                React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: true },
                    React.createElement(office_ui_fabric_react_1.Slider, { label: "Stack height:", min: 1, max: 420, step: 1, defaultValue: 420, showValue: true, onChange: this._onHeightChange })),
                React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: true },
                    React.createElement(office_ui_fabric_react_1.Slider, { label: "Container width:", min: 1, max: 100, step: 1, defaultValue: 100, showValue: true, onChange: this._onWidthChange }))),
            React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, tokens: tokens.wrapStack },
                React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: true },
                    React.createElement(office_ui_fabric_react_1.Dropdown, { selectedKey: horizontalAlignment, placeholder: "Select Horizontal Alignment", label: "Horizontal alignment:", options: [{ key: 'start', text: 'Left' }, { key: 'center', text: 'Center' }, { key: 'end', text: 'Right' }], onChange: this._onHorizontalAlignChange })),
                React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: true },
                    React.createElement(office_ui_fabric_react_1.Dropdown, { selectedKey: verticalAlignment, placeholder: "Select Vertical Alignment", label: "Vertical alignment:", options: [
                            { key: 'start', text: 'Top' },
                            { key: 'center', text: 'Center' },
                            { key: 'end', text: 'Bottom' },
                            { key: 'space-around', text: 'Space around' },
                            { key: 'space-between', text: 'Space between' },
                            { key: 'space-evenly', text: 'Space evenly' }
                        ], onChange: this._onVerticalAlignChange })),
                React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: true },
                    React.createElement(office_ui_fabric_react_1.Dropdown, { selectedKey: overflow, placeholder: "Select Overflow", label: "Overflow:", options: [{ key: 'visible', text: 'Visible' }, { key: 'auto', text: 'Auto' }, { key: 'hidden', text: 'Hidden' }], onChange: this._onOverflowChange }))),
            React.createElement("div", { className: styles.container },
                React.createElement(office_ui_fabric_react_1.Stack, { wrap: true, tokens: tokens.wrapStack, horizontalAlign: horizontalAlignment, verticalAlign: verticalAlignment, className: styles.root },
                    React.createElement("span", null, "1"),
                    React.createElement("span", null, "2"),
                    React.createElement("span", null, "3"),
                    React.createElement("span", null, "4"),
                    React.createElement("span", null, "5")))));
    };
    return VerticalStackWrapAdvancedExample;
}(React.Component));
exports.VerticalStackWrapAdvancedExample = VerticalStackWrapAdvancedExample;
//# sourceMappingURL=Stack.Vertical.WrapAdvanced.Example.js.map