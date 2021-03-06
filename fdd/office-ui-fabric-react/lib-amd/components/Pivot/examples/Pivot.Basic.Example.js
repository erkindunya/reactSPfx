define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Label", "office-ui-fabric-react/lib/Pivot", "../../../common/_exampleStyles.scss"], function (require, exports, tslib_1, React, Label_1, Pivot_1, exampleStylesImport) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var exampleStyles = exampleStylesImport;
    var PivotBasicExample = /** @class */ (function (_super) {
        tslib_1.__extends(PivotBasicExample, _super);
        function PivotBasicExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        PivotBasicExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(Pivot_1.Pivot, null,
                    React.createElement(Pivot_1.PivotItem, { headerText: "My Files", headerButtonProps: {
                            'data-order': 1,
                            'data-title': 'My Files Title'
                        } },
                        React.createElement(Label_1.Label, { className: exampleStyles.exampleLabel }, "Pivot #1")),
                    React.createElement(Pivot_1.PivotItem, { headerText: "Recent" },
                        React.createElement(Label_1.Label, null, "Pivot #2")),
                    React.createElement(Pivot_1.PivotItem, { headerText: "Shared with me" },
                        React.createElement(Label_1.Label, null, "Pivot #3")))));
        };
        return PivotBasicExample;
    }(React.Component));
    exports.PivotBasicExample = PivotBasicExample;
});
//# sourceMappingURL=Pivot.Basic.Example.js.map