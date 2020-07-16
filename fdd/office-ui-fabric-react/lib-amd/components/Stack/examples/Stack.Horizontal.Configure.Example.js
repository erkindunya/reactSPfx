define(["require", "exports", "tslib", "react", "office-ui-fabric-react"], function (require, exports, tslib_1, React, office_ui_fabric_react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HorizontalStackConfigureExample = /** @class */ (function (_super) {
        tslib_1.__extends(HorizontalStackConfigureExample, _super);
        function HorizontalStackConfigureExample(props) {
            var _this = _super.call(this, props) || this;
            _this._onNumItemsChange = function (value) {
                _this.setState({ numItems: value });
            };
            _this._range = function (start, end) {
                var result = [];
                for (var i = start; i <= end; i++) {
                    result.push(i);
                }
                return result;
            };
            _this._onBoxShadowChange = function (ev, isChecked) {
                _this.setState({ showBoxShadow: isChecked });
            };
            _this._onPreventOverflowChange = function (ev, isChecked) {
                _this.setState({ preventOverflow: isChecked });
            };
            _this._onWrapChange = function (ev, isChecked) {
                _this.setState({ wrap: isChecked });
            };
            _this._onShrinkChange = function (ev, isChecked) {
                _this.setState({ disableShrink: !isChecked });
            };
            _this._onWrapperWidthChange = function (value) {
                _this.setState({ wrapperWidth: value });
            };
            _this._onGapChange = function (value) {
                _this.setState({ columnGap: value });
            };
            _this._onVerticalGapChange = function (value) {
                _this.setState({ rowGap: value });
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
            _this._onHorizontalAlignChange = function (ev, option) {
                _this.setState({ horizontalAlignment: option.key });
            };
            _this._onVerticalAlignChange = function (ev, option) {
                _this.setState({ verticalAlignment: option.key });
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
                wrap: false,
                wrapperWidth: 100,
                disableShrink: true,
                columnGap: 0,
                rowGap: 0,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                horizontalAlignment: 'start',
                verticalAlignment: 'start',
                hideEmptyChildren: false,
                emptyChildren: []
            };
            return _this;
        }
        HorizontalStackConfigureExample.prototype.render = function () {
            var _a = this.state, numItems = _a.numItems, showBoxShadow = _a.showBoxShadow, preventOverflow = _a.preventOverflow, wrap = _a.wrap, wrapperWidth = _a.wrapperWidth, disableShrink = _a.disableShrink, columnGap = _a.columnGap, rowGap = _a.rowGap, paddingLeft = _a.paddingLeft, paddingRight = _a.paddingRight, paddingTop = _a.paddingTop, paddingBottom = _a.paddingBottom, horizontalAlignment = _a.horizontalAlignment, verticalAlignment = _a.verticalAlignment, hideEmptyChildren = _a.hideEmptyChildren, emptyChildren = _a.emptyChildren;
            var styles = office_ui_fabric_react_1.mergeStyleSets({
                root: [
                    {
                        background: office_ui_fabric_react_1.DefaultPalette.themeTertiary,
                        minHeight: 100,
                        marginLeft: 10,
                        marginRight: 10,
                        width: "calc(" + wrapperWidth + "% - 20px)"
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
            var stackStyles = {
                inner: {
                    overflow: preventOverflow ? 'hidden' : 'visible'
                }
            };
            var tokens = {
                sectionStack: {
                    childrenGap: 10
                },
                configureStack: {
                    childrenGap: 20
                }
            };
            return (React.createElement(office_ui_fabric_react_1.Stack, { tokens: tokens.sectionStack },
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, disableShrink: true },
                    React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: true },
                        React.createElement(office_ui_fabric_react_1.Stack, null,
                            React.createElement(office_ui_fabric_react_1.Slider, { label: "Number of items:", min: 1, max: 30, step: 1, defaultValue: 5, showValue: true, onChange: this._onNumItemsChange }),
                            React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, disableShrink: true },
                                React.createElement(office_ui_fabric_react_1.Checkbox, { label: "Shadow around items", onChange: this._onBoxShadowChange, styles: { root: { marginRight: 10 } } }),
                                React.createElement(office_ui_fabric_react_1.Checkbox, { label: "Prevent item overflow", onChange: this._onPreventOverflowChange })))),
                    React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: true },
                        React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, disableShrink: true, tokens: tokens.configureStack },
                            React.createElement(office_ui_fabric_react_1.Stack, null,
                                React.createElement(office_ui_fabric_react_1.Checkbox, { label: "Wrap items", onChange: this._onWrapChange, styles: { root: { marginBottom: 10 } } }),
                                React.createElement(office_ui_fabric_react_1.Checkbox, { label: "Shrink items", onChange: this._onShrinkChange })),
                            React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: true },
                                React.createElement(office_ui_fabric_react_1.Slider, { label: "Container width:", min: 1, max: 100, step: 1, defaultValue: 100, showValue: true, onChange: this._onWrapperWidthChange }))))),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, disableShrink: true, tokens: tokens.configureStack },
                    React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: true },
                        React.createElement(office_ui_fabric_react_1.Stack, null,
                            React.createElement(office_ui_fabric_react_1.Slider, { label: "Horizontal gap between items:", min: 0, max: 50, step: 1, defaultValue: 0, showValue: true, onChange: this._onGapChange }),
                            React.createElement(office_ui_fabric_react_1.Slider, { label: "Vertical gap between items:", min: 0, max: 50, step: 1, defaultValue: 0, showValue: true, onChange: this._onVerticalGapChange }))),
                    React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: true },
                        React.createElement(office_ui_fabric_react_1.Stack, null,
                            React.createElement(office_ui_fabric_react_1.Slider, { label: "Left padding:", min: 0, max: 50, step: 1, defaultValue: 0, showValue: true, onChange: this._onPaddingLeftChange }),
                            React.createElement(office_ui_fabric_react_1.Slider, { label: "Right padding:", min: 0, max: 50, step: 1, defaultValue: 0, showValue: true, onChange: this._onPaddingRightChange }))),
                    React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: true },
                        React.createElement(office_ui_fabric_react_1.Stack, null,
                            React.createElement(office_ui_fabric_react_1.Slider, { label: "Top padding:", min: 0, max: 50, step: 1, defaultValue: 0, showValue: true, onChange: this._onPaddingTopChange }),
                            React.createElement(office_ui_fabric_react_1.Slider, { label: "Bottom padding:", min: 0, max: 50, step: 1, defaultValue: 0, showValue: true, onChange: this._onPaddingBottomChange })))),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, disableShrink: true, tokens: tokens.configureStack, verticalAlign: "end" },
                    React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: true },
                        React.createElement(office_ui_fabric_react_1.Dropdown, { selectedKey: horizontalAlignment, placeholder: "Select Horizontal Alignment", label: "Horizontal alignment:", options: [
                                { key: 'start', text: 'Left' },
                                { key: 'center', text: 'Center' },
                                { key: 'end', text: 'Right' },
                                { key: 'space-around', text: 'Space around' },
                                { key: 'space-between', text: 'Space between' },
                                { key: 'space-evenly', text: 'Space evenly' }
                            ], onChange: this._onHorizontalAlignChange })),
                    React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: true },
                        React.createElement(office_ui_fabric_react_1.Dropdown, { selectedKey: verticalAlignment, placeholder: "Select Vertical Alignment", label: "Vertical alignment:", options: [{ key: 'start', text: 'Top' }, { key: 'center', text: 'Center' }, { key: 'end', text: 'Bottom' }], onChange: this._onVerticalAlignChange })),
                    React.createElement(office_ui_fabric_react_1.Stack.Item, null,
                        React.createElement(office_ui_fabric_react_1.Checkbox, { label: "Hide empty children", onChange: this._onHideEmptyChildrenChange })),
                    React.createElement(office_ui_fabric_react_1.Stack.Item, { grow: true },
                        React.createElement(office_ui_fabric_react_1.TextField, { label: "Enter a space-separated list of empty children (e.g. 1 2 3):", onChange: this._onEmptyChildrenChange }))),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, wrap: wrap, disableShrink: disableShrink, tokens: { childrenGap: rowGap + ' ' + columnGap }, padding: paddingTop + "px " + paddingRight + "px " + paddingBottom + "px " + paddingLeft + "px", horizontalAlign: horizontalAlignment, verticalAlign: verticalAlignment, className: styles.root, styles: stackStyles }, this._range(1, numItems).map(function (value, index) {
                    if (emptyChildren.indexOf(value.toString()) !== -1) {
                        return hideEmptyChildren ? React.createElement(office_ui_fabric_react_1.Stack.Item, { key: index, className: styles.item }) : React.createElement("span", { key: index, className: styles.item });
                    }
                    return (React.createElement("span", { key: index, className: styles.item }, value));
                }))));
        };
        return HorizontalStackConfigureExample;
    }(React.Component));
    exports.HorizontalStackConfigureExample = HorizontalStackConfigureExample;
});
//# sourceMappingURL=Stack.Horizontal.Configure.Example.js.map