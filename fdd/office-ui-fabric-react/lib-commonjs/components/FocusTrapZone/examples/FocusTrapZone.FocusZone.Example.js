"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var FocusTrapZone_1 = require("office-ui-fabric-react/lib/FocusTrapZone");
var FocusZone_1 = require("office-ui-fabric-react/lib/FocusZone");
var Toggle_1 = require("office-ui-fabric-react/lib/Toggle");
var Stack_1 = require("office-ui-fabric-react/lib/Stack");
var FocusTrapZoneFocusZoneExample = /** @class */ (function (_super) {
    tslib_1.__extends(FocusTrapZoneFocusZoneExample, _super);
    function FocusTrapZoneFocusZoneExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            useTrapZone: false
        };
        _this._toggle = React.createRef();
        _this._onFocusTrapZoneToggleChanged = function (ev, checked) {
            _this.setState({ useTrapZone: !!checked }, function () {
                // Restore focus to toggle after re-rendering
                _this._toggle.current.focus();
            });
        };
        return _this;
    }
    FocusTrapZoneFocusZoneExample.prototype.render = function () {
        var useTrapZone = this.state.useTrapZone;
        var padding = 10;
        var border = '2px dashed #ababab';
        var rootBorder = "2px solid " + (useTrapZone ? '#ababab' : 'transparent');
        var tokens = { childrenGap: 10 };
        return (React.createElement(FocusTrapZone_1.FocusTrapZone, { disabled: !useTrapZone, forceFocusInsideTrap: true, focusPreviouslyFocusedInnerElement: true },
            React.createElement(Stack_1.Stack, { tokens: tokens, horizontalAlign: "start", styles: { root: { border: rootBorder, padding: padding } } },
                React.createElement(Toggle_1.Toggle, { label: "Use trap zone", componentRef: this._toggle, checked: useTrapZone, onChange: this._onFocusTrapZoneToggleChanged, onText: "On (toggle to exit)", offText: "Off" }),
                React.createElement(FocusZone_1.FocusZone, { direction: FocusZone_1.FocusZoneDirection.horizontal, "data-is-visible": true },
                    React.createElement(Stack_1.Stack, { horizontal: true, tokens: tokens, styles: { root: { border: border, padding: padding } } },
                        React.createElement(Button_1.DefaultButton, { text: "FZ1" }),
                        React.createElement(Button_1.DefaultButton, { text: "FZ1" }),
                        React.createElement(Button_1.DefaultButton, { text: "FZ1" }))),
                React.createElement(Button_1.DefaultButton, { text: "No FZ" }),
                React.createElement(FocusZone_1.FocusZone, { direction: FocusZone_1.FocusZoneDirection.horizontal, "data-is-visible": true },
                    React.createElement(Stack_1.Stack, { horizontal: true, tokens: tokens, styles: { root: { border: border, padding: padding } } },
                        React.createElement(Button_1.DefaultButton, { text: "FZ2" }),
                        React.createElement(Button_1.DefaultButton, { text: "FZ2" }),
                        React.createElement(Button_1.DefaultButton, { text: "FZ2" }))))));
    };
    return FocusTrapZoneFocusZoneExample;
}(React.Component));
exports.FocusTrapZoneFocusZoneExample = FocusTrapZoneFocusZoneExample;
//# sourceMappingURL=FocusTrapZone.FocusZone.Example.js.map