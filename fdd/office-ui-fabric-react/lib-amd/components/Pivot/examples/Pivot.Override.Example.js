define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Label", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Pivot"], function (require, exports, tslib_1, React, Label_1, Button_1, Pivot_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PivotOverrideExample = /** @class */ (function (_super) {
        tslib_1.__extends(PivotOverrideExample, _super);
        function PivotOverrideExample(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                selectedKey: 0
            };
            _this._handleClick = _this._handleClick.bind(_this);
            return _this;
        }
        PivotOverrideExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(Pivot_1.Pivot, { selectedKey: "" + this.state.selectedKey },
                    React.createElement(Pivot_1.PivotItem, { headerText: "My Files", itemKey: "0" },
                        React.createElement(Label_1.Label, null, "Pivot #1")),
                    React.createElement(Pivot_1.PivotItem, { headerText: "Recent", itemKey: "1" },
                        React.createElement(Label_1.Label, null, "Pivot #2")),
                    React.createElement(Pivot_1.PivotItem, { headerText: "Shared with me", itemKey: "2" },
                        React.createElement(Label_1.Label, null, "Pivot #3"))),
                React.createElement(Button_1.DefaultButton, { onClick: this._handleClick }, "Select next item")));
        };
        PivotOverrideExample.prototype._handleClick = function () {
            this.setState({ selectedKey: (this.state.selectedKey + 1) % 3 });
        };
        return PivotOverrideExample;
    }(React.Component));
    exports.PivotOverrideExample = PivotOverrideExample;
});
//# sourceMappingURL=Pivot.Override.Example.js.map