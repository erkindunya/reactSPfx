define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Label", "office-ui-fabric-react/lib/Pivot"], function (require, exports, tslib_1, React, Label_1, Pivot_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PivotLargeExample = /** @class */ (function (_super) {
        tslib_1.__extends(PivotLargeExample, _super);
        function PivotLargeExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PivotLargeExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(Pivot_1.Pivot, { linkSize: Pivot_1.PivotLinkSize.large },
                    React.createElement(Pivot_1.PivotItem, { headerText: "My Files" },
                        React.createElement(Label_1.Label, null, "Pivot #1")),
                    React.createElement(Pivot_1.PivotItem, { headerText: "Recent" },
                        React.createElement(Label_1.Label, null, "Pivot #2")),
                    React.createElement(Pivot_1.PivotItem, { headerText: "Shared with me" },
                        React.createElement(Label_1.Label, null, "Pivot #3")))));
        };
        return PivotLargeExample;
    }(React.Component));
    exports.PivotLargeExample = PivotLargeExample;
});
//# sourceMappingURL=Pivot.Large.Example.js.map