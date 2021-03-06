"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var TeachingBubble_1 = require("office-ui-fabric-react/lib/TeachingBubble");
var TeachingBubbleBasicExample = /** @class */ (function (_super) {
    tslib_1.__extends(TeachingBubbleBasicExample, _super);
    function TeachingBubbleBasicExample(props) {
        var _this = _super.call(this, props) || this;
        _this._onDismiss = _this._onDismiss.bind(_this);
        _this._onShow = _this._onShow.bind(_this);
        _this.state = {
            isTeachingBubbleVisible: false
        };
        return _this;
    }
    TeachingBubbleBasicExample.prototype.render = function () {
        var _this = this;
        var isTeachingBubbleVisible = this.state.isTeachingBubbleVisible;
        var examplePrimaryButton = {
            children: 'Try it out'
        };
        var exampleSecondaryButtonProps = {
            children: 'Maybe later',
            onClick: this._onDismiss
        };
        return (React.createElement("div", { className: "ms-TeachingBubbleExample" },
            React.createElement("span", { className: "ms-TeachingBubbleBasicExample-buttonArea", ref: function (menuButton) { return (_this._menuButtonElement = menuButton); } },
                React.createElement(Button_1.DefaultButton, { onClick: isTeachingBubbleVisible ? this._onDismiss : this._onShow, text: isTeachingBubbleVisible ? 'Hide TeachingBubble' : 'Show TeachingBubble' })),
            isTeachingBubbleVisible ? (React.createElement("div", null,
                React.createElement(TeachingBubble_1.TeachingBubble, { target: this._menuButtonElement, primaryButtonProps: examplePrimaryButton, secondaryButtonProps: exampleSecondaryButtonProps, onDismiss: this._onDismiss, footerContent: "1 of 2", headline: "Discover what\u2019s trending around you" }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni harum non?"))) : null));
    };
    TeachingBubbleBasicExample.prototype._onDismiss = function (ev) {
        this.setState({
            isTeachingBubbleVisible: false
        });
    };
    TeachingBubbleBasicExample.prototype._onShow = function (ev) {
        this.setState({
            isTeachingBubbleVisible: true
        });
    };
    return TeachingBubbleBasicExample;
}(React.Component));
exports.TeachingBubbleBasicExample = TeachingBubbleBasicExample;
//# sourceMappingURL=TeachingBubble.Basic.Example.js.map