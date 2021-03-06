define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Utilities", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Tooltip"], function (require, exports, tslib_1, React, Utilities_1, Button_1, Tooltip_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TooltipNoScrollExample = /** @class */ (function (_super) {
        tslib_1.__extends(TooltipNoScrollExample, _super);
        function TooltipNoScrollExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.tooltipId = Utilities_1.getId('text-tooltip');
            return _this;
        }
        TooltipNoScrollExample.prototype.render = function () {
            return (React.createElement(Tooltip_1.TooltipHost, { content: "This is the tooltip", id: this.tooltipId, tooltipProps: { style: { overflowY: 'auto' } } },
                React.createElement(Button_1.DefaultButton, { "aria-labelledby": this.tooltipId }, "Tooltip without scroll")));
        };
        return TooltipNoScrollExample;
    }(Utilities_1.BaseComponent));
    exports.TooltipNoScrollExample = TooltipNoScrollExample;
});
//# sourceMappingURL=Tooltip.NoScroll.Example.js.map