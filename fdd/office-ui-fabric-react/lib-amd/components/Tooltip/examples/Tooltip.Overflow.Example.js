define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Utilities", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Tooltip"], function (require, exports, tslib_1, React, Utilities_1, Button_1, Tooltip_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TooltipOverflowExample = /** @class */ (function (_super) {
        tslib_1.__extends(TooltipOverflowExample, _super);
        function TooltipOverflowExample(props) {
            var _this = _super.call(this, props) || this;
            _this.tooltipId = Utilities_1.getId('text-tooltip');
            _this.state = {
                overflow: false,
                isTooltipVisible: false
            };
            return _this;
        }
        // tslint:disable:jsx-no-lambda
        TooltipOverflowExample.prototype.render = function () {
            var _this = this;
            return (React.createElement("div", null,
                React.createElement(Button_1.DefaultButton, { onClick: function () { return _this.setState({ overflow: !_this.state.overflow }); } }, "Toggle showing overflow"),
                React.createElement("div", { style: {
                        marginTop: '40px'
                    } },
                    React.createElement("div", { style: {
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: this.state.overflow ? 'nowrap' : 'inherit',
                            width: this.state.overflow ? '200px' : 'auto',
                            border: '1px solid black'
                        } },
                        React.createElement(Tooltip_1.TooltipHost, { content: "This is the tooltip", id: this.tooltipId, overflowMode: Tooltip_1.TooltipOverflowMode.Parent, onTooltipToggle: function (isTooltipVisible) { return _this.setState({ isTooltipVisible: isTooltipVisible }); } },
                            React.createElement("span", { "aria-labelledby": this.state.isTooltipVisible ? this.tooltipId : undefined }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec volutpat lectus ut magna sodales, sit amet accumsan arcu accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit."))))));
        };
        return TooltipOverflowExample;
    }(Utilities_1.BaseComponent));
    exports.TooltipOverflowExample = TooltipOverflowExample;
});
//# sourceMappingURL=Tooltip.Overflow.Example.js.map