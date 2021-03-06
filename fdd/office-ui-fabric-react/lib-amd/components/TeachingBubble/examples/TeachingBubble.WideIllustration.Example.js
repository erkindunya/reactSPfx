define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/TeachingBubble", "office-ui-fabric-react/lib/common/DirectionalHint"], function (require, exports, tslib_1, React, Button_1, TeachingBubble_1, DirectionalHint_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TeachingBubbleWideIllustrationExample = /** @class */ (function (_super) {
        tslib_1.__extends(TeachingBubbleWideIllustrationExample, _super);
        function TeachingBubbleWideIllustrationExample(props) {
            var _this = _super.call(this, props) || this;
            _this._onDismiss = _this._onDismiss.bind(_this);
            _this._onShow = _this._onShow.bind(_this);
            _this.state = {
                isTeachingBubbleVisible: false
            };
            return _this;
        }
        TeachingBubbleWideIllustrationExample.prototype.render = function () {
            var _this = this;
            var isTeachingBubbleVisible = this.state.isTeachingBubbleVisible;
            var exampleImageProps = { src: 'http://placehold.it/154x140' };
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
                    React.createElement(TeachingBubble_1.TeachingBubble, { illustrationImage: exampleImageProps, calloutProps: { directionalHint: DirectionalHint_1.DirectionalHint.bottomCenter }, isWide: true, hasSmallHeadline: true, hasCloseIcon: true, target: this._menuButtonElement, primaryButtonProps: examplePrimaryButton, secondaryButtonProps: exampleSecondaryButtonProps, onDismiss: this._onDismiss, headline: "Discover what\u2019s trending around you" }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni harum non?"))) : null));
        };
        TeachingBubbleWideIllustrationExample.prototype._onDismiss = function (ev) {
            this.setState({
                isTeachingBubbleVisible: false
            });
        };
        TeachingBubbleWideIllustrationExample.prototype._onShow = function (ev) {
            this.setState({
                isTeachingBubbleVisible: true
            });
        };
        return TeachingBubbleWideIllustrationExample;
    }(React.Component));
    exports.TeachingBubbleWideIllustrationExample = TeachingBubbleWideIllustrationExample;
});
//# sourceMappingURL=TeachingBubble.WideIllustration.Example.js.map