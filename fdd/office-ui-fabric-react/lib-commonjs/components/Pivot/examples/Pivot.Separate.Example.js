"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Pivot_1 = require("office-ui-fabric-react/lib/Pivot");
var PivotSeparateExample = /** @class */ (function (_super) {
    tslib_1.__extends(PivotSeparateExample, _super);
    function PivotSeparateExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { selectedKey: 'rectangleRed' };
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
    PivotSeparateExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", { "aria-labelledby": this._getTabId(this.state.selectedKey), role: "tabitem", style: {
                    float: 'left',
                    width: 100,
                    height: this.state.selectedKey === 'squareRed' ? 100 : 200,
                    background: this.state.selectedKey === 'rectangleGreen' ? 'green' : 'red'
                } }),
            React.createElement(Pivot_1.Pivot, { selectedKey: this.state.selectedKey, onLinkClick: this._handleLinkClick, headersOnly: true, getTabId: this._getTabId },
                React.createElement(Pivot_1.PivotItem, { headerText: "Rectangle red", itemKey: "rectangleRed" }),
                React.createElement(Pivot_1.PivotItem, { headerText: "Square red", itemKey: "squareRed" }),
                React.createElement(Pivot_1.PivotItem, { headerText: "Rectangle green", itemKey: "rectangleGreen" }))));
    };
    return PivotSeparateExample;
}(React.Component));
exports.PivotSeparateExample = PivotSeparateExample;
//# sourceMappingURL=Pivot.Separate.Example.js.map