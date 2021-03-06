define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Pivot", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Label"], function (require, exports, tslib_1, React, Pivot_1, Button_1, Label_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PivotRemoveExample = /** @class */ (function (_super) {
        tslib_1.__extends(PivotRemoveExample, _super);
        function PivotRemoveExample(props) {
            var _this = _super.call(this, props) || this;
            _this._shouldShowFirstPivotItem = true;
            _this.state = {
                shouldShowFirstPivotItem: true
            };
            _this._handleClick = _this._handleClick.bind(_this);
            return _this;
        }
        PivotRemoveExample.prototype.render = function () {
            var pivotArray = [];
            if (this.state.shouldShowFirstPivotItem) {
                pivotArray.push(React.createElement(Pivot_1.PivotItem, { headerText: "Foo", itemKey: "Foo", key: "Foo" },
                    React.createElement(Label_1.Label, null, "Click the button below to show/hide this pivot item."),
                    React.createElement(Label_1.Label, null, "The selected item will not change when the number of pivot items changes."),
                    React.createElement(Label_1.Label, null, "If the selected item was removed, the new first item will be selected.")));
            }
            pivotArray = pivotArray.concat(React.createElement(Pivot_1.PivotItem, { headerText: "Bar", itemKey: "Bar", key: "Bar" },
                React.createElement(Label_1.Label, null, "Pivot #2")), React.createElement(Pivot_1.PivotItem, { headerText: "Bas", itemKey: "Bas", key: "Bas" },
                React.createElement(Label_1.Label, null, "Pivot #3")), React.createElement(Pivot_1.PivotItem, { headerText: "Biz", itemKey: "Biz", key: "Biz" },
                React.createElement(Label_1.Label, null, "Pivot #4")));
            return (React.createElement("div", null,
                React.createElement(Pivot_1.Pivot, { linkSize: Pivot_1.PivotLinkSize.large, linkFormat: Pivot_1.PivotLinkFormat.tabs }, pivotArray),
                React.createElement("div", null,
                    React.createElement(Button_1.DefaultButton, { onClick: this._handleClick, text: (this.state.shouldShowFirstPivotItem ? 'Hide' : 'Show') + " First Pivot Item" }))));
        };
        PivotRemoveExample.prototype._handleClick = function () {
            this._shouldShowFirstPivotItem = !this._shouldShowFirstPivotItem;
            this.setState({
                shouldShowFirstPivotItem: this._shouldShowFirstPivotItem
            });
        };
        return PivotRemoveExample;
    }(React.Component));
    exports.PivotRemoveExample = PivotRemoveExample;
});
//# sourceMappingURL=Pivot.Remove.Example.js.map