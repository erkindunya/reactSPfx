"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Tooltip_1 = require("office-ui-fabric-react/lib/Tooltip");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var TooltipCustomExample = /** @class */ (function (_super) {
    tslib_1.__extends(TooltipCustomExample, _super);
    function TooltipCustomExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Use getId() to ensure that the ID is unique on the page.
        // (It's also okay to use a plain string without getId() and manually ensure uniqueness.)
        _this._hostId = Utilities_1.getId('tooltipHost');
        return _this;
    }
    TooltipCustomExample.prototype.render = function () {
        return (React.createElement(Tooltip_1.TooltipHost, { calloutProps: { gapSpace: 20 }, tooltipProps: {
                onRenderContent: function () {
                    return (React.createElement("div", null,
                        React.createElement("ul", { style: { margin: 0, padding: 0 } },
                            React.createElement("li", null, "1. One"),
                            React.createElement("li", null, "2. Two"))));
                }
            }, delay: Tooltip_1.TooltipDelay.zero, id: this._hostId, directionalHint: Tooltip_1.DirectionalHint.bottomCenter },
            React.createElement(Button_1.DefaultButton, { "aria-labelledby": this._hostId, text: "Hover Over Me" })));
    };
    return TooltipCustomExample;
}(React.Component));
exports.TooltipCustomExample = TooltipCustomExample;
//# sourceMappingURL=Tooltip.Custom.Example.js.map