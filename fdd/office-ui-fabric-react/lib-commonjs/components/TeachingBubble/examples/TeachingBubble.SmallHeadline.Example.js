"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var TeachingBubble_1 = require("office-ui-fabric-react/lib/TeachingBubble");
var TeachingBubbleSmallHeadlineExample = /** @class */ (function (_super) {
    tslib_1.__extends(TeachingBubbleSmallHeadlineExample, _super);
    function TeachingBubbleSmallHeadlineExample(props) {
        var _this = _super.call(this, props) || this;
        _this._onDismiss = _this._onDismiss.bind(_this);
        _this._onShow = _this._onShow.bind(_this);
        _this.state = {
            isTeachingBubbleVisible: false
        };
        return _this;
    }
    TeachingBubbleSmallHeadlineExample.prototype.render = function () {
        var _this = this;
        var isTeachingBubbleVisible = this.state.isTeachingBubbleVisible;
        var examplePrimaryButton = {
            children: 'Try it out'
        };
        return (React.createElement("div", { className: "ms-TeachingBubbleExample" },
            React.createElement("span", { className: "ms-TeachingBubbleBasicExample-buttonArea", ref: function (menuButton) { return (_this._menuButtonElement = menuButton); } },
                React.createElement(Button_1.DefaultButton, { onClick: isTeachingBubbleVisible ? this._onDismiss : this._onShow, text: isTeachingBubbleVisible ? 'Hide TeachingBubble' : 'Show TeachingBubble' })),
            isTeachingBubbleVisible ? (React.createElement("div", null,
                React.createElement(TeachingBubble_1.TeachingBubble, { target: this._menuButtonElement, hasSmallHeadline: true, onDismiss: this._onDismiss, hasCloseIcon: true, primaryButtonProps: examplePrimaryButton, headline: "Discover what\u2019s trending around you" }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni harum non?"))) : null));
    };
    TeachingBubbleSmallHeadlineExample.prototype._onDismiss = function (ev) {
        this.setState({
            isTeachingBubbleVisible: false
        });
    };
    TeachingBubbleSmallHeadlineExample.prototype._onShow = function (ev) {
        this.setState({
            isTeachingBubbleVisible: true
        });
    };
    return TeachingBubbleSmallHeadlineExample;
}(React.Component));
exports.TeachingBubbleSmallHeadlineExample = TeachingBubbleSmallHeadlineExample;
//# sourceMappingURL=TeachingBubble.SmallHeadline.Example.js.map