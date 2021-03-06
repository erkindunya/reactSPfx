define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Callout", "office-ui-fabric-react/lib/Dropdown", "./CalloutExample.scss"], function (require, exports, tslib_1, React, Button_1, Callout_1, Dropdown_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    var CalloutCoverExample = /** @class */ (function (_super) {
        tslib_1.__extends(CalloutCoverExample, _super);
        function CalloutCoverExample(props) {
            var _this = _super.call(this, props) || this;
            _this._onDismiss = _this._onDismiss.bind(_this);
            _this._onShowMenuClicked = _this._onShowMenuClicked.bind(_this);
            _this._onDirectionalChanged = _this._onDirectionalChanged.bind(_this);
            _this.state = {
                isCalloutVisible: false,
                directionalHint: Callout_1.DirectionalHint.bottomLeftEdge
            };
            return _this;
        }
        CalloutCoverExample.prototype.render = function () {
            var _this = this;
            var _a = this.state, isCalloutVisible = _a.isCalloutVisible, directionalHint = _a.directionalHint;
            // ms-Callout-smallbeak is used in this directional example to reflect all the positions.
            // Large beak will disable some position to avoid beak over the callout edge.
            return (React.createElement("div", { className: "ms-CalloutExample" },
                React.createElement("div", { className: "ms-CalloutExample-configArea" },
                    React.createElement(Dropdown_1.Dropdown, { label: "Directional hint", selectedKey: directionalHint, options: DIRECTION_OPTIONS, onChange: this._onDirectionalChanged })),
                React.createElement("div", { className: "ms-CalloutCoverExample-buttonArea", ref: function (menuButton) { return (_this._menuButtonElement = menuButton); } },
                    React.createElement(Button_1.DefaultButton, { text: isCalloutVisible ? 'Hide callout' : 'Show callout', onClick: this._onShowMenuClicked })),
                isCalloutVisible ? (React.createElement(Callout_1.Callout, { className: "ms-CalloutExample-callout", onDismiss: this._onDismiss, target: this._menuButtonElement, directionalHint: directionalHint, coverTarget: true, isBeakVisible: false, gapSpace: 0 },
                    React.createElement("div", { className: "ms-CalloutExample-header" },
                        React.createElement("p", { className: "ms-CalloutExample-title" }, "I'm covering the target!")),
                    React.createElement("div", { className: "ms-CalloutExample-inner" },
                        React.createElement("div", { className: "ms-CalloutExample-content" },
                            React.createElement(Button_1.DefaultButton, { onClick: this._onShowMenuClicked, text: "Click to dismiss" }))))) : null));
        };
        CalloutCoverExample.prototype._onDismiss = function () {
            this.setState({ isCalloutVisible: false });
        };
        CalloutCoverExample.prototype._onShowMenuClicked = function () {
            this.setState({
                isCalloutVisible: !this.state.isCalloutVisible
            });
        };
        CalloutCoverExample.prototype._onDirectionalChanged = function (event, option) {
            this.setState({
                directionalHint: option.key
            });
        };
        return CalloutCoverExample;
    }(React.Component));
    exports.CalloutCoverExample = CalloutCoverExample;
});
//# sourceMappingURL=Callout.Cover.Example.js.map