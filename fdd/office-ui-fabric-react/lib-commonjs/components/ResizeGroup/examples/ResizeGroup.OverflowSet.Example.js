"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var ResizeGroup_1 = require("office-ui-fabric-react/lib/ResizeGroup");
var OverflowSet_1 = require("office-ui-fabric-react/lib/OverflowSet");
var Checkbox_1 = require("office-ui-fabric-react/lib/Checkbox");
var Dropdown_1 = require("office-ui-fabric-react/lib/Dropdown");
var stylesImport = require("./ResizeGroup.Example.scss");
var styles = stylesImport;
function generateData(count, cachingEnabled, checked) {
    var icons = ['Add', 'Share', 'Upload'];
    var dataItems = [];
    var cacheKey = '';
    for (var index = 0; index < count; index++) {
        var item = {
            key: "item" + index,
            name: "Item " + index,
            icon: icons[index % icons.length],
            checked: checked
        };
        cacheKey = cacheKey + item.key;
        dataItems.push(item);
    }
    var result = {
        primary: dataItems,
        overflow: []
    };
    if (cachingEnabled) {
        result = tslib_1.__assign({}, result, { cacheKey: cacheKey });
    }
    return result;
}
function computeCacheKey(primaryControls) {
    return primaryControls.reduce(function (acc, current) { return acc + current.key; }, '');
}
var ResizeGroupOverflowSetExample = /** @class */ (function (_super) {
    tslib_1.__extends(ResizeGroupOverflowSetExample, _super);
    function ResizeGroupOverflowSetExample(props) {
        var _this = _super.call(this, props) || this;
        _this._onReduceData = function (currentData) {
            if (currentData.primary.length === 0) {
                return undefined;
            }
            var overflow = currentData.primary.slice(-1).concat(currentData.overflow);
            var primary = currentData.primary.slice(0, -1);
            var cacheKey = undefined;
            if (_this.state.cachingEnabled) {
                cacheKey = computeCacheKey(primary);
            }
            return { primary: primary, overflow: overflow, cacheKey: cacheKey };
        };
        _this._onGrowData = function (currentData) {
            if (currentData.overflow.length === 0) {
                return undefined;
            }
            var overflow = currentData.overflow.slice(1);
            var primary = currentData.primary.concat(currentData.overflow.slice(0, 1));
            var cacheKey = undefined;
            if (_this.state.cachingEnabled) {
                cacheKey = computeCacheKey(primary);
            }
            return { primary: primary, overflow: overflow, cacheKey: cacheKey };
        };
        _this._onCachingEnabledChanged = function (_, checked) {
            _this.setState({ cachingEnabled: checked });
        };
        _this._onGrowDataEnabledChanged = function (_, checked) {
            _this.setState({ onGrowDataEnabled: checked });
        };
        _this._onButtonsCheckedChanged = function (_, checked) {
            _this.setState({ buttonsChecked: checked });
        };
        _this._onNumberOfItemsChanged = function (event, option) {
            _this.setState({ numberOfItems: parseInt(option.text, 10) });
        };
        _this.state = {
            short: false,
            buttonsChecked: false,
            cachingEnabled: false,
            onGrowDataEnabled: false,
            numberOfItems: 20
        };
        return _this;
    }
    ResizeGroupOverflowSetExample.prototype.render = function () {
        var _a = this.state, numberOfItems = _a.numberOfItems, cachingEnabled = _a.cachingEnabled, buttonsChecked = _a.buttonsChecked, short = _a.short, onGrowDataEnabled = _a.onGrowDataEnabled;
        var dataToRender = generateData(numberOfItems, cachingEnabled, buttonsChecked);
        return (React.createElement("div", { className: short ? styles.resizeIsShort : 'notResized' },
            React.createElement(ResizeGroup_1.ResizeGroup, { role: "tabpanel", "aria-label": "Resize Group with an Overflow Set", data: dataToRender, onReduceData: this._onReduceData, onGrowData: onGrowDataEnabled ? this._onGrowData : undefined, 
                // tslint:disable-next-line:jsx-no-lambda
                onRenderData: function (data) {
                    return (React.createElement(OverflowSet_1.OverflowSet, { items: data.primary, overflowItems: data.overflow.length ? data.overflow : null, onRenderItem: function (item) {
                            return (React.createElement(Button_1.CommandBarButton, { text: item.name, iconProps: { iconName: item.icon }, onClick: item.onClick, checked: item.checked }));
                        }, onRenderOverflowButton: function (overflowItems) {
                            return React.createElement(Button_1.CommandBarButton, { menuProps: { items: overflowItems } });
                        }, styles: { root: { height: 40 } } }));
                } }),
            React.createElement("div", { className: styles.settingsGroup },
                React.createElement(Checkbox_1.Checkbox, { label: "Enable caching", onChange: this._onCachingEnabledChanged, checked: cachingEnabled }),
                React.createElement(Checkbox_1.Checkbox, { label: "Set onGrowData", onChange: this._onGrowDataEnabledChanged, checked: onGrowDataEnabled }),
                React.createElement(Checkbox_1.Checkbox, { label: "Buttons checked", onChange: this._onButtonsCheckedChanged, checked: buttonsChecked }),
                React.createElement("div", { className: styles.itemCountDropdown },
                    React.createElement(Dropdown_1.Dropdown, { label: "Number of items to render", selectedKey: numberOfItems.toString(), onChange: this._onNumberOfItemsChanged, options: [
                            { key: '20', text: '20' },
                            { key: '30', text: '30' },
                            { key: '40', text: '40' },
                            { key: '50', text: '50' },
                            { key: '75', text: '75' },
                            { key: '100', text: '100' },
                            { key: '200', text: '200' }
                        ] })))));
    };
    return ResizeGroupOverflowSetExample;
}(Utilities_1.BaseComponent));
exports.ResizeGroupOverflowSetExample = ResizeGroupOverflowSetExample;
//# sourceMappingURL=ResizeGroup.OverflowSet.Example.js.map