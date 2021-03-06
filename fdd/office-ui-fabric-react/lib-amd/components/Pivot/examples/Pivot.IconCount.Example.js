define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Label", "office-ui-fabric-react/lib/Icon", "office-ui-fabric-react/lib/Pivot"], function (require, exports, tslib_1, React, Label_1, Icon_1, Pivot_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PivotIconCountExample = /** @class */ (function (_super) {
        tslib_1.__extends(PivotIconCountExample, _super);
        function PivotIconCountExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PivotIconCountExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(Pivot_1.Pivot, null,
                    React.createElement(Pivot_1.PivotItem, { headerText: "My Files", itemCount: 42, itemIcon: "Emoji2" },
                        React.createElement(Label_1.Label, null, "Pivot #1")),
                    React.createElement(Pivot_1.PivotItem, { itemCount: 23, itemIcon: "Recent" },
                        React.createElement(Label_1.Label, null, "Pivot #2")),
                    React.createElement(Pivot_1.PivotItem, { itemIcon: "Globe" },
                        React.createElement(Label_1.Label, null, "Pivot #3")),
                    React.createElement(Pivot_1.PivotItem, { headerText: "Shared with me", itemIcon: "Ringer", itemCount: 1 },
                        React.createElement(Label_1.Label, null, "Pivot #4")),
                    React.createElement(Pivot_1.PivotItem, { headerText: "Customized Rendering", itemIcon: "Globe", itemCount: 10, onRenderItemLink: this._customRenderer },
                        React.createElement(Label_1.Label, null, "Customized Rendering")))));
        };
        PivotIconCountExample.prototype._customRenderer = function (link, defaultRenderer) {
            return (React.createElement("span", null,
                defaultRenderer(link),
                React.createElement(Icon_1.Icon, { iconName: "Airplane", style: { color: 'red' } })));
        };
        return PivotIconCountExample;
    }(React.Component));
    exports.PivotIconCountExample = PivotIconCountExample;
});
//# sourceMappingURL=Pivot.IconCount.Example.js.map