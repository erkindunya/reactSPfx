"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var FocusTrapZone_1 = require("office-ui-fabric-react/lib/FocusTrapZone");
var Stack_1 = require("office-ui-fabric-react/lib/Stack");
var Toggle_1 = require("office-ui-fabric-react/lib/Toggle");
var FocusTrapComponent = /** @class */ (function (_super) {
    tslib_1.__extends(FocusTrapComponent, _super);
    function FocusTrapComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onStringButtonClicked = function () {
            alert("Button " + _this.props.zoneNumber + " clicked");
        };
        _this._onFocusTrapZoneToggleChanged = function (ev, isChecked) {
            _this.props.setIsActive(_this.props.zoneNumber, isChecked);
        };
        return _this;
    }
    FocusTrapComponent.prototype.render = function () {
        var _a = this.props, isActive = _a.isActive, zoneNumber = _a.zoneNumber, children = _a.children;
        return (React.createElement(FocusTrapZone_1.FocusTrapZone, { disabled: !isActive, forceFocusInsideTrap: false },
            React.createElement(Stack_1.Stack, { horizontalAlign: "start", tokens: { childrenGap: 10 }, styles: {
                    root: { border: "2px solid " + (isActive ? '#ababab' : 'transparent'), padding: 10 }
                } },
                React.createElement(Toggle_1.Toggle, { checked: isActive, onChange: this._onFocusTrapZoneToggleChanged, label: 'Enable trap zone ' + zoneNumber, onText: "On (toggle to exit)", offText: "Off", styles: {
                        // Set a width on these toggles in the horizontal zone to prevent jumping when enabled
                        root: zoneNumber >= 2 && zoneNumber <= 4 && { width: 200 }
                    } }),
                React.createElement(Button_1.DefaultButton, { onClick: this._onStringButtonClicked, text: "Zone " + zoneNumber + " button" }),
                children)));
    };
    return FocusTrapComponent;
}(React.Component));
var FocusTrapZoneNestedExample = /** @class */ (function (_super) {
    tslib_1.__extends(FocusTrapZoneNestedExample, _super);
    function FocusTrapZoneNestedExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { activeStates: {} };
        _this._setIsActive = function (zoneNumber, isActive) {
            var activeStates = _this.state.activeStates;
            _this.setState({ activeStates: tslib_1.__assign({}, activeStates, (_a = {}, _a[zoneNumber] = isActive, _a)) });
            var _a;
        };
        // This randomize example is exposing a quirk in focus stack behavior.
        // For the randomize example, components render from the bottom up with all of the new "activeStates" simultaneously set.
        // The most recently active item in the focusStack ends up being the highest parent, which is the reverse order focus
        // trap zones would normally be put on the focusStack. That means children aren't capturing focus as one would normally
        // expect when toggling the FTZ's individually. This would also be an issue if anyone ever rendered multiple nested and enabled
        //  FocusTrapZones simultaneously.
        _this._randomize = function () {
            var activeStates = {};
            [1, 2, 3, 4, 5].forEach(function (zoneNumber) {
                activeStates[zoneNumber] = Math.random() >= 0.5;
            });
            _this.setState({ activeStates: activeStates });
        };
        return _this;
    }
    FocusTrapZoneNestedExample.prototype.render = function () {
        var activeStates = this.state.activeStates;
        return (React.createElement("div", null,
            React.createElement(Button_1.DefaultButton, { onClick: this._randomize, styles: { root: { marginBottom: 10 } } }, "Randomize"),
            React.createElement(FocusTrapComponent, { zoneNumber: 1, isActive: !!activeStates[1], setIsActive: this._setIsActive },
                React.createElement(FocusTrapComponent, { zoneNumber: 2, isActive: !!activeStates[2], setIsActive: this._setIsActive },
                    React.createElement(FocusTrapComponent, { zoneNumber: 3, isActive: !!activeStates[3], setIsActive: this._setIsActive }),
                    React.createElement(FocusTrapComponent, { zoneNumber: 4, isActive: !!activeStates[4], setIsActive: this._setIsActive })),
                React.createElement(FocusTrapComponent, { zoneNumber: 5, isActive: !!activeStates[5], setIsActive: this._setIsActive }))));
    };
    return FocusTrapZoneNestedExample;
}(React.Component));
exports.FocusTrapZoneNestedExample = FocusTrapZoneNestedExample;
//# sourceMappingURL=FocusTrapZone.Nested.Example.js.map