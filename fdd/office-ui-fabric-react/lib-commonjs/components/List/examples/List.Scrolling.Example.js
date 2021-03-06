"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var FocusZone_1 = require("office-ui-fabric-react/lib/FocusZone");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Dropdown_1 = require("office-ui-fabric-react/lib/Dropdown");
var List_1 = require("office-ui-fabric-react/lib/List");
var TextField_1 = require("office-ui-fabric-react/lib/TextField");
var Checkbox_1 = require("office-ui-fabric-react/lib/Checkbox");
var styles = require("./List.Scrolling.Example.scss");
var evenItemHeight = 25;
var oddItemHeight = 50;
var numberOfItemsOnPage = 10;
var ListScrollingExample = /** @class */ (function (_super) {
    tslib_1.__extends(ListScrollingExample, _super);
    function ListScrollingExample(props) {
        var _this = _super.call(this, props) || this;
        _this._onChangeText = function (ev, value) {
            _this._scroll(parseInt(value, 10) || 0, _this.state.scrollToMode);
        };
        _this._onDropdownChange = function (event, option) {
            var scrollMode = _this.state.scrollToMode;
            switch (option.key) {
                case 'auto':
                    scrollMode = List_1.ScrollToMode.auto;
                    break;
                case 'top':
                    scrollMode = List_1.ScrollToMode.top;
                    break;
                case 'bottom':
                    scrollMode = List_1.ScrollToMode.bottom;
                    break;
                case 'center':
                    scrollMode = List_1.ScrollToMode.center;
                    break;
            }
            _this._scroll(_this.state.selectedIndex, scrollMode);
        };
        _this._onRenderCell = function (item, index) {
            return (React.createElement("div", { "data-is-focusable": true },
                React.createElement("div", { className: Utilities_1.css(styles.itemContent, index % 2 === 0 ? styles.itemContentEven : styles.itemContentOdd) },
                    index,
                    " \u00A0 ",
                    item.name)));
        };
        _this._scrollRelative = function (delta) {
            return function () {
                _this._scroll(_this.state.selectedIndex + delta, _this.state.scrollToMode);
            };
        };
        _this._scroll = function (index, scrollToMode) {
            var updatedSelectedIndex = Math.min(Math.max(index, 0), _this.props.items.length - 1);
            _this.setState({
                selectedIndex: updatedSelectedIndex,
                scrollToMode: scrollToMode
            }, function () {
                _this._list.scrollToIndex(updatedSelectedIndex, function (idx) { return (idx % 2 === 0 ? evenItemHeight : oddItemHeight); }, scrollToMode);
            });
        };
        _this._resolveList = function (list) {
            _this._list = list;
        };
        _this._onShowItemIndexInViewChanged = function (event, checked) {
            _this.setState({
                showItemIndexInView: checked
            });
        };
        _this.state = {
            selectedIndex: 0,
            scrollToMode: List_1.ScrollToMode.auto,
            showItemIndexInView: false
        };
        return _this;
    }
    ListScrollingExample.prototype.render = function () {
        var items = this.props.items;
        return (React.createElement(FocusZone_1.FocusZone, { direction: FocusZone_1.FocusZoneDirection.vertical },
            React.createElement("div", null,
                React.createElement(Button_1.DefaultButton, { onClick: this._scrollRelative(-10) }, "-10"),
                React.createElement(Button_1.DefaultButton, { onClick: this._scrollRelative(-1) }, "-1"),
                React.createElement(Button_1.DefaultButton, { onClick: this._scrollRelative(1) }, "+1"),
                React.createElement(Button_1.DefaultButton, { onClick: this._scrollRelative(10) }, "+10")),
            React.createElement(Dropdown_1.Dropdown, { placeholder: "Select an Option", label: "Scroll To Mode:", ariaLabel: "Scroll To Mode", defaultSelectedKey: 'auto', options: [
                    { key: 'auto', text: 'Auto' },
                    { key: 'top', text: 'Top' },
                    { key: 'bottom', text: 'Bottom' },
                    { key: 'center', text: 'Center' }
                ], onChange: this._onDropdownChange }),
            React.createElement("div", null,
                "Scroll item index:",
                React.createElement(TextField_1.TextField, { value: this.state.selectedIndex.toString(10), onChange: this._onChangeText })),
            React.createElement("div", null,
                React.createElement(Checkbox_1.Checkbox, { label: "Show index of the first item in view when unmounting", checked: this.state.showItemIndexInView, onChange: this._onShowItemIndexInViewChanged })),
            React.createElement("div", { className: styles.container, "data-is-scrollable": true },
                React.createElement(List_1.List, { ref: this._resolveList, items: items, getPageHeight: this._getPageHeight, onRenderCell: this._onRenderCell }))));
    };
    ListScrollingExample.prototype.componentWillUnmount = function () {
        if (this.state.showItemIndexInView) {
            var itemIndexInView = this._list.getStartItemIndexInView(function (idx) { return (idx % 2 === 0 ? evenItemHeight : oddItemHeight); } /* measureItem */);
            alert('unmounting, getting first item index that was in view: ' + itemIndexInView);
        }
    };
    ListScrollingExample.prototype._getPageHeight = function (idx) {
        var h = 0;
        for (var i = idx; i < idx + numberOfItemsOnPage; ++i) {
            var isEvenRow = i % 2 === 0;
            h += isEvenRow ? evenItemHeight : oddItemHeight;
        }
        return h;
    };
    return ListScrollingExample;
}(React.Component));
exports.ListScrollingExample = ListScrollingExample;
//# sourceMappingURL=List.Scrolling.Example.js.map