"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Label_1 = require("office-ui-fabric-react/lib/Label");
var Pivot_1 = require("office-ui-fabric-react/lib/Pivot");
var PivotTabsExample = /** @class */ (function (_super) {
    tslib_1.__extends(PivotTabsExample, _super);
    function PivotTabsExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PivotTabsExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Pivot_1.Pivot, { linkFormat: Pivot_1.PivotLinkFormat.tabs },
                React.createElement(Pivot_1.PivotItem, { headerText: "Foo" },
                    React.createElement(Label_1.Label, null, "Pivot #1")),
                React.createElement(Pivot_1.PivotItem, { headerText: "Bar" },
                    React.createElement(Label_1.Label, null, "Pivot #2")),
                React.createElement(Pivot_1.PivotItem, { headerText: "Bas" },
                    React.createElement(Label_1.Label, null, "Pivot #3")),
                React.createElement(Pivot_1.PivotItem, { headerText: "Biz" },
                    React.createElement(Label_1.Label, null, "Pivot #4")))));
    };
    return PivotTabsExample;
}(React.Component));
exports.PivotTabsExample = PivotTabsExample;
//# sourceMappingURL=Pivot.Tabs.Example.js.map