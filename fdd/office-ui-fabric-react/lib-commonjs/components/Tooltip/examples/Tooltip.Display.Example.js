"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Tooltip_1 = require("office-ui-fabric-react/lib/Tooltip");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var TooltipDisplayExample = /** @class */ (function (_super) {
    tslib_1.__extends(TooltipDisplayExample, _super);
    function TooltipDisplayExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Use getId() to ensure that the IDs are unique on the page.
        // (It's also okay to use plain strings without getId() and manually ensure uniqueness.)
        _this._host1Id = Utilities_1.getId('tooltipHost1');
        _this._host2Id = Utilities_1.getId('tooltipHost2');
        return _this;
    }
    TooltipDisplayExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("p", null, "In some cases when TooltipHost is wrapping inline-block or inline elements the positioning of the Tooltip may be off so it is recommended to modify the display property of the TooltipHost as in the following example."),
            React.createElement(Tooltip_1.TooltipHost, { content: "Incorrect positioning", id: this._host1Id, calloutProps: { gapSpace: 0 } },
                React.createElement("button", { style: { fontSize: '2em' }, "aria-labelledby": this._host1Id }, "Hover Over Me")),
            ' ',
            React.createElement(Tooltip_1.TooltipHost, { content: "Correct positioning", styles: { root: { display: 'inline-block' } }, id: this._host2Id, calloutProps: { gapSpace: 0 } },
                React.createElement("button", { style: { fontSize: '2em' }, "aria-labelledby": this._host2Id }, "Hover Over Me"))));
    };
    return TooltipDisplayExample;
}(React.Component));
exports.TooltipDisplayExample = TooltipDisplayExample;
//# sourceMappingURL=Tooltip.Display.Example.js.map