define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Tooltip", "office-ui-fabric-react/lib/Utilities"], function (require, exports, tslib_1, React, Button_1, Tooltip_1, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TooltipInteractiveExample = /** @class */ (function (_super) {
        tslib_1.__extends(TooltipInteractiveExample, _super);
        function TooltipInteractiveExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // Use getId() to ensure that the ID is unique on the page.
            // (It's also okay to use a plain string without getId() and manually ensure uniqueness.)
            _this._hostId = Utilities_1.getId('tooltipHost');
            return _this;
        }
        TooltipInteractiveExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(Tooltip_1.TooltipHost, { content: "This is the tooltip", id: this._hostId, calloutProps: { gapSpace: 0 }, closeDelay: 500 },
                    React.createElement(Button_1.DefaultButton, { "aria-labelledby": this._hostId }, "Interact with my tooltip"))));
        };
        return TooltipInteractiveExample;
    }(React.Component));
    exports.TooltipInteractiveExample = TooltipInteractiveExample;
});
//# sourceMappingURL=Tooltip.Interactive.Example.js.map