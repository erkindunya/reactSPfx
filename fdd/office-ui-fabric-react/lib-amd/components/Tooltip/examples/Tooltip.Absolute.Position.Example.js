define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Tooltip", "office-ui-fabric-react/lib/Utilities"], function (require, exports, tslib_1, React, Button_1, Tooltip_1, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TooltipAbsolutePositionExample = /** @class */ (function (_super) {
        tslib_1.__extends(TooltipAbsolutePositionExample, _super);
        function TooltipAbsolutePositionExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // Use getId() to ensure that the ID is unique on the page.
            // (It's also okay to use a plain string without getId() and manually ensure uniqueness.)
            _this._hostId = Utilities_1.getId('tooltipHost');
            _this._buttonId = Utilities_1.getId('targetButton');
            return _this;
        }
        TooltipAbsolutePositionExample.prototype.render = function () {
            return (React.createElement("div", { style: {
                    minHeight: 50
                } },
                React.createElement(Tooltip_1.TooltipHost, { content: "This is the tooltip", id: this._hostId, calloutProps: {
                        gapSpace: 0,
                        target: "#" + this._buttonId
                    } },
                    React.createElement(Button_1.DefaultButton, { id: this._buttonId, "aria-labelledby": this._hostId, style: {
                            position: 'absolute',
                            top: 50,
                            left: 200
                        } }, "Hover Over Me"))));
        };
        return TooltipAbsolutePositionExample;
    }(React.Component));
    exports.TooltipAbsolutePositionExample = TooltipAbsolutePositionExample;
});
//# sourceMappingURL=Tooltip.Absolute.Position.Example.js.map