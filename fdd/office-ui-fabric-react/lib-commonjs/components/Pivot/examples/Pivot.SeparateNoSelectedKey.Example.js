"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Pivot_1 = require("office-ui-fabric-react/lib/Pivot");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var PivotSeparateNoSelectedKeyExample = /** @class */ (function (_super) {
    tslib_1.__extends(PivotSeparateNoSelectedKeyExample, _super);
    function PivotSeparateNoSelectedKeyExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { selectedKey: 'Settings' };
        _this._handleSettingsIconClick = function () { return _this.setState({ selectedKey: 'Settings' }); };
        _this._handleLinkClick = function (item) {
            _this.setState({
                selectedKey: item.props.itemKey
            });
        };
        _this._getTabId = function (itemKey) {
            return "ShapeColorPivot_" + itemKey;
        };
        return _this;
    }
    PivotSeparateNoSelectedKeyExample.prototype.render = function () {
        var pivotItems = { Thing1: React.createElement("div", null, "thing 1"), Thing2: React.createElement("div", null, "thing 2"), Thing3: React.createElement("div", null, "thing 3") };
        var items = tslib_1.__assign({}, pivotItems, { Settings: React.createElement("div", null, "settings") });
        return (React.createElement("div", { style: { width: '50%', maxWidth: '500px' } },
            "Current selectedKey: ",
            this.state.selectedKey || 'null',
            React.createElement("div", { style: {
                    display: 'flex',
                    alignItems: 'center'
                } },
                React.createElement(Pivot_1.Pivot, { style: { flexGrow: 1 }, selectedKey: Object.keys(pivotItems).indexOf(this.state.selectedKey) >= 0 ? this.state.selectedKey : null, onLinkClick: this._handleLinkClick, headersOnly: true, getTabId: this._getTabId }, Object.keys(pivotItems).map(function (name) { return (React.createElement(Pivot_1.PivotItem, { key: "pivotItemKey_" + name, headerText: name, itemKey: name })); })),
                React.createElement(Button_1.IconButton, { iconProps: { iconName: 'Settings', style: { color: this.state.selectedKey === 'Settings' ? 'blue' : 'black' } }, onClick: this._handleSettingsIconClick })),
            items[this.state.selectedKey]));
    };
    return PivotSeparateNoSelectedKeyExample;
}(React.Component));
exports.PivotSeparateNoSelectedKeyExample = PivotSeparateNoSelectedKeyExample;
//# sourceMappingURL=Pivot.SeparateNoSelectedKey.Example.js.map