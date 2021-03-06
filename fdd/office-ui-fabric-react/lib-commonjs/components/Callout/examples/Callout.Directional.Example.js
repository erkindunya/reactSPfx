"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Callout_1 = require("office-ui-fabric-react/lib/Callout");
var Dropdown_1 = require("office-ui-fabric-react/lib/Dropdown");
var Checkbox_1 = require("office-ui-fabric-react/lib/Checkbox");
var Slider_1 = require("office-ui-fabric-react/lib/Slider");
require("./CalloutExample.scss");
var exampleStylesImport = require("../../../common/_exampleStyles.scss");
var exampleStyles = exampleStylesImport;
var DIRECTION_OPTIONS = [
    { key: Callout_1.DirectionalHint.topLeftEdge, text: 'Top Left Edge' },
    { key: Callout_1.DirectionalHint.topCenter, text: 'Top Center' },
    { key: Callout_1.DirectionalHint.topRightEdge, text: 'Top Right Edge' },
    { key: Callout_1.DirectionalHint.topAutoEdge, text: 'Top Auto Edge' },
    { key: Callout_1.DirectionalHint.bottomLeftEdge, text: 'Bottom Left Edge' },
    { key: Callout_1.DirectionalHint.bottomCenter, text: 'Bottom Center' },
    { key: Callout_1.DirectionalHint.bottomRightEdge, text: 'Bottom Right Edge' },
    { key: Callout_1.DirectionalHint.bottomAutoEdge, text: 'Bottom Auto Edge' },
    { key: Callout_1.DirectionalHint.leftTopEdge, text: 'Left Top Edge' },
    { key: Callout_1.DirectionalHint.leftCenter, text: 'Left Center' },
    { key: Callout_1.DirectionalHint.leftBottomEdge, text: 'Left Bottom Edge' },
    { key: Callout_1.DirectionalHint.rightTopEdge, text: 'Right Top Edge' },
    { key: Callout_1.DirectionalHint.rightCenter, text: 'Right Center' },
    { key: Callout_1.DirectionalHint.rightBottomEdge, text: 'Right Bottom Edge' }
];
var CalloutDirectionalExample = /** @class */ (function (_super) {
    tslib_1.__extends(CalloutDirectionalExample, _super);
    function CalloutDirectionalExample(props) {
        var _this = _super.call(this, props) || this;
        _this._onCalloutDismiss = function () {
            _this.setState({
                isCalloutVisible: false
            });
        };
        _this._onShowMenuClicked = function () {
            _this.setState({
                isCalloutVisible: !_this.state.isCalloutVisible
            });
        };
        _this._onShowBeakChange = function (ev, isVisible) {
            _this.setState({
                isBeakVisible: isVisible,
                beakWidth: 10
            });
        };
        _this._onDirectionalChanged = function (event, option) {
            _this.setState({
                directionalHint: option.key
            });
        };
        _this._onGapSlider = function (value) {
            _this.setState({
                gapSpace: value
            });
        };
        _this._onBeakWidthSlider = function (value) {
            _this.setState({
                beakWidth: value
            });
        };
        _this.state = {
            isCalloutVisible: false,
            isBeakVisible: true,
            directionalHint: Callout_1.DirectionalHint.bottomLeftEdge
        };
        return _this;
    }
    CalloutDirectionalExample.prototype.render = function () {
        var _this = this;
        var _a = this.state, isCalloutVisible = _a.isCalloutVisible, isBeakVisible = _a.isBeakVisible, directionalHint = _a.directionalHint, gapSpace = _a.gapSpace, beakWidth = _a.beakWidth;
        //  ms-Callout-smallbeak is used in this directional example to reflect all the positions.
        //  Large beak will disable some position to avoid beak over the callout edge.
        return (React.createElement("div", { className: "ms-CalloutExample" },
            React.createElement("div", { className: "ms-CalloutExample-configArea" },
                React.createElement(Checkbox_1.Checkbox, { className: exampleStyles.exampleCheckbox, label: "Show beak", checked: isBeakVisible, onChange: this._onShowBeakChange }),
                React.createElement(Slider_1.Slider, { max: 30, label: "Gap Space", min: 0, defaultValue: 0, onChange: this._onGapSlider }),
                isBeakVisible && React.createElement(Slider_1.Slider, { max: 50, label: "Beak Width", min: 10, defaultValue: 16, onChange: this._onBeakWidthSlider }),
                React.createElement(Dropdown_1.Dropdown, { label: "Directional hint", selectedKey: directionalHint, options: DIRECTION_OPTIONS, onChange: this._onDirectionalChanged })),
            React.createElement("div", { className: "ms-CalloutExample-buttonArea", ref: function (menuButton) { return (_this._menuButtonElement = menuButton); } },
                React.createElement(Button_1.DefaultButton, { className: 'calloutExampleButton', onClick: this._onShowMenuClicked, text: isCalloutVisible ? 'Hide callout' : 'Show callout' })),
            isCalloutVisible ? (React.createElement(Callout_1.Callout, { className: "ms-CalloutExample-callout", gapSpace: gapSpace, target: this._menuButtonElement, isBeakVisible: isBeakVisible, beakWidth: beakWidth, onDismiss: this._onCalloutDismiss, directionalHint: directionalHint },
                React.createElement("div", { className: "ms-CalloutExample-header" },
                    React.createElement("p", { className: "ms-CalloutExample-title" }, "All of your favorite people")),
                React.createElement("div", { className: "ms-CalloutExample-inner" },
                    React.createElement("div", { className: "ms-CalloutExample-content" },
                        React.createElement("p", { className: "ms-CalloutExample-subText" }, "Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom."))))) : null));
    };
    return CalloutDirectionalExample;
}(React.Component));
exports.CalloutDirectionalExample = CalloutDirectionalExample;
//# sourceMappingURL=Callout.Directional.Example.js.map