"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var office_ui_fabric_react_1 = require("office-ui-fabric-react");
var VerticalStackConfigureExample = /** @class */ (function (_super) {
    tslib_1.__extends(VerticalStackConfigureExample, _super);
    function VerticalStackConfigureExample(props) {
        var _this = _super.call(this, props) || this;
        _this._range = function (start, end) {
            var result = [];
            for (var i = start; i <= end; i++) {
                result.push(i);
            }
            return result;
        };
        _this._onNumItemsChange = function (value) {
            _this.setState({ numItems: value });
        };
        _this._onBoxShadowChange = function (ev, isChecked) {
            _this.setState({ showBoxShadow: isChecked });
        };
        _this._onPreventOverflowChange = function (ev, isChecked) {
            _this.setState({ preventOverflow: isChecked });
        };
        _this._onShrinkItemsChange = function (ev, isChecked) {
            _this.setState({ disableShrink: !isChecked });
        };
        _this._onWrapChange = function (ev, isChecked) {
            _this.setState({ wrap: isChecked });
        };
        _this._onStackHeightChange = function (value) {
            _this.setState({ stackHeight: value });
        };
        _this._onAutoHeightChange = function (ev, isChecked) {
            _this.setState({ autoHeight: isChecked });
        };
        _this._onGapChange = function (value) {
            _this.setState({ childrenGap: value });
        };
        _this._onPaddingLeftChange = function (value) {
            _this.setState({ paddingLeft: value });
        };
        _this._onPaddingRightChange = function (value) {
            _this.setState({ paddingRight: value });
        };
        _this._onPaddingTopChange = function (value) {
            _this.setState({ paddingTop: value });
        };
        _this._onPaddingBottomChange = function (value) {
            _this.setState({ paddingBottom: value });
        };
        _this._onVerticalAlignChange = function (ev, option) {
            _this.setState({ verticalAlignment: option.key });
        };
        _this._onHorizontalAlignChange = function (ev, option) {
            _this.setState({ horizontalAlignment: option.key });
        };
        _this._onHideEmptyChildrenChange = function (ev, isChecked) {
            _this.setState({ hideEmptyChildren: isChecked });
        };
        _this._onEmptyChildrenChange = function (ev, value) {
            if (value === undefined) {
                return;
            }
            _this.setState({ emptyChildren: value.replace(/,/g, '').split(' ') });
        };
        _this.state = {
            numItems: 5,
            showBoxShadow: false,
            preventOverflow: false,
            disableShrink: true,
            wrap: false,
            stackHeight: 200,
            autoHeight: true,
            childrenGap: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            verticalAlignment: 'start',
            horizontalAlignment: 'start',
            hideEmptyChildren: false,
            emptyChildren: []
        };
        return _this;
    }
    VerticalStackConfigureExample.prototype.render = function () {
        var _a = this.state, numItems = _a.numItems, showBoxShadow = _a.showBoxShadow, preventOverflow = _a.preventOverflow, disableShrink = _a.disableShrink, wrap = _a.wrap, stackHeight = _a.stackHeight, autoHeight = _a.autoHeight, childrenGap = _a.childrenGap, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, paddingTop = _a.paddingTop, paddingBottom = _a.paddingBottom, verticalAlignment = _a.verticalAlignment, horizontalAlignment = _a.horizontalAlignment, hideEmptyChildren = _a.hideEmptyChildren, emptyChildren = _a.emptyChildren;
        var styles = office_ui_fabric_react_1.mergeStyleSets({
            root: [
                {
                    background: office_ui_fabric_react_1.DefaultPalette.themeTertiary,
                    marginLeft: 10,
                    marginRight: 10,
                    height: autoHeight ? 'auto' : stackHeight
                },
                preventOverflow && {
                    overflow: 'hidden'
                }
            ],
            item: {
                width: 50,
                height: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: office_ui_fabric_react_1.DefaultPalette.themePrimary,
                color: office_ui_fabric_react_1.DefaultPalette.white,
                boxShadow: showBoxShadow ? "0px 0px 10px 5px " + office_ui_fabric_react_1.DefaultPalette.themeDarker : ''
            }
        });
        var tokens = {
            sectionStack: {
                childrenGap: 10
            },
            configureStack: {
                childrenGap: 20
            }
        };
        return (React.createElement(office_ui_fabric_react_1.Stack, { tokens: tokens.sectionStack },
            React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, tokens: tokens.configureStack },
                React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: true },
                    React.createElement(office_ui_fabric_react_1.Stack, null,
                        React.createElement(office_ui_fabric_react_1.Slider, { label: "Number of items:", min: 1, max: 10, step: 1, defaultValue: 5, showValue: true, onChange: this._onNumItemsChange }),
                        React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true },
                            React.createElement(office_ui_fabric_react_1.Checkbox, { label: "Shadow around items", onChange: this._onBoxShadowChange, styles: { root: { marginRight: 10 } } }),
                            React.createElement(office_ui_fabric_react_1.Checkbox, { label: "Prevent item overflow", onChange: this._onPreventOverflowChange, styles: { root: { marginRight: 10 } } }),
                            React.createElement(office_ui_fabric_react_1.Checkbox, { label: "Shrink items", onChange: this._onShrinkItemsChange, styles: { root: { marginRight: 10 } } }),
                            React.createElement(office_ui_fabric_react_1.Checkbox, { label: "Wrap items", onChange: this._onWrapChange })))),
                React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: true },
                    React.createElement(office_ui_fabric_react_1.Stack, null,
                        React.createElement(office_ui_fabric_react_1.Slider, { label: "Container height:", min: 1, max: 400, step: 1, defaultValue: 200, showValue: true, onChange: this._onStackHeightChange, disabled: autoHeight }),
                        React.createElement(office_ui_fabric_react_1.Checkbox, { label: "Automatic height (based on items)", defaultChecked: true, onChange: this._onAutoHeightChange })))),
            React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, tokens: tokens.configureStack },
                React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: true },
                    React.createElement(office_ui_fabric_react_1.Stack, null,
                        React.createElement(office_ui_fabric_react_1.Slider, { label: "Vertical gap between items:", min: 0, max: 50, step: 1, defaultValue: 0, showValue: true, onChange: this._onGapChange }),
                        React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, tokens: tokens.configureStack, verticalAlign: "end" },
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
                                React.createElement(office_ui_fabric_react_1.Dropdown, { selectedKey: horizontalAlignment, placeholder: "Select Horizontal Alignment", label: "Horizontal alignment:", options: [{ key: 'start', text: 'Left' }, { key: 'center', text: 'Center' }, { key: 'end', text: 'Right' }], onChange: this._onHorizontalAlignChange })),
                            React.createElement(office_ui_fabric_react_1.Stack.Item, null,
                                React.createElement(office_ui_fabric_react_1.Checkbox, { label: "Hide empty children", onChange: this._onHideEmptyChildrenChange })),
                            React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: true },
                                React.createElement(office_ui_fabric_react_1.TextField, { label: "List of empty children (e.g. 1 2 3):", onChange: this._onEmptyChildrenChange }))))),
                React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: true },
                    React.createElement(office_ui_fabric_react_1.Stack, null,
                        React.createElement(office_ui_fabric_react_1.Slider, { label: "Left padding:", min: 0, max: 50, step: 1, defaultValue: 0, showValue: true, onChange: this._onPaddingLeftChange }),
                        React.createElement(office_ui_fabric_react_1.Slider, { label: "Right padding:", min: 0, max: 50, step: 1, defaultValue: 0, showValue: true, onChange: this._onPaddingRightChange }))),
                React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: true },
                    React.createElement(office_ui_fabric_react_1.Stack, null,
                        React.createElement(office_ui_fabric_react_1.Slider, { label: "Top padding:", min: 0, max: 50, step: 1, defaultValue: 0, showValue: true, onChange: this._onPaddingTopChange }),
                        React.createElement(office_ui_fabric_react_1.Slider, { label: "Bottom padding:", min: 0, max: 50, step: 1, defaultValue: 0, showValue: true, onChange: this._onPaddingBottomChange })))),
            React.createElement(office_ui_fabric_react_1.Stack, { disableShrink: disableShrink, wrap: wrap, tokens: { childrenGap: childrenGap + ' ' + 0 }, padding: paddingTop + "px " + paddingRight + "px " + paddingBottom + "px " + paddingLeft + "px", verticalAlign: verticalAlignment, horizontalAlign: horizontalAlignment, className: styles.root }, this._range(1, numItems).map(function (value, index) {
                if (emptyChildren.indexOf(value.toString()) !== -1) {
                    return hideEmptyChildren ? React.createElement(office_ui_fabric_react_1.Stack.Item, { key: index, className: styles.item }) : React.createElement("span", { key: index, className: styles.item });
                }
                return (React.createElement("span", { key: index, className: styles.item }, value));
            }))));
    };
    return VerticalStackConfigureExample;
}(React.Component));
exports.VerticalStackConfigureExample = VerticalStackConfigureExample;
//# sourceMappingURL=Stack.Vertical.Configure.Example.js.map