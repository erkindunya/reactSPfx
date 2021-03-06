define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Pivot", "office-ui-fabric-react/lib/Label"], function (require, exports, tslib_1, React, Pivot_1, Label_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PivotOnChangeExample = /** @class */ (function (_super) {
        tslib_1.__extends(PivotOnChangeExample, _super);
        function PivotOnChangeExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PivotOnChangeExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(Pivot_1.Pivot, { linkSize: Pivot_1.PivotLinkSize.large, linkFormat: Pivot_1.PivotLinkFormat.tabs, onLinkClick: this.onLinkClick },
                    React.createElement(Pivot_1.PivotItem, { headerText: "Foo" },
                        React.createElement(Label_1.Label, null, "Pivot #1")),
                    React.createElement(Pivot_1.PivotItem, { headerText: "Bar" },
                        React.createElement(Label_1.Label, null, "Pivot #2")),
                    React.createElement(Pivot_1.PivotItem, { headerText: "Bas" },
                        React.createElement(Label_1.Label, null, "Pivot #3")),
                    React.createElement(Pivot_1.PivotItem, { headerText: "Biz" },
                        React.createElement(Label_1.Label, null, "Pivot #4")))));
        };
        PivotOnChangeExample.prototype.onLinkClick = function (item) {
            alert(item.props.headerText);
        };
        return PivotOnChangeExample;
    }(React.Component));
    exports.PivotOnChangeExample = PivotOnChangeExample;
});
//# sourceMappingURL=Pivot.OnChange.Example.js.map