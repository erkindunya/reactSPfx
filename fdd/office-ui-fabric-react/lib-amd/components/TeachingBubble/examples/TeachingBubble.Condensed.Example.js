define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/TeachingBubble"], function (require, exports, tslib_1, React, Button_1, TeachingBubble_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TeachingBubbleCondensedExample = /** @class */ (function (_super) {
        tslib_1.__extends(TeachingBubbleCondensedExample, _super);
        function TeachingBubbleCondensedExample(props) {
            var _this = _super.call(this, props) || this;
            _this._onDismiss = _this._onDismiss.bind(_this);
            _this._onShow = _this._onShow.bind(_this);
            _this.state = {
                isTeachingBubbleVisible: false
            };
            return _this;
        }
        TeachingBubbleCondensedExample.prototype.render = function () {
            var isTeachingBubbleVisible = this.state.isTeachingBubbleVisible;
            return (React.createElement("div", { className: "ms-TeachingBubbleExample" },
                React.createElement("span", { className: "ms-TeachingBubbleBasicExample-buttonArea" },
                    React.createElement(Button_1.DefaultButton, { onClick: isTeachingBubbleVisible ? this._onDismiss : this._onShow, text: isTeachingBubbleVisible ? 'Hide TeachingBubble' : 'Show TeachingBubble', id: 'buttonId' })),
                isTeachingBubbleVisible ? (React.createElement("div", null,
                    React.createElement(TeachingBubble_1.TeachingBubble, { target: '#buttonId', hasCondensedHeadline: true, onDismiss: this._onDismiss, hasCloseIcon: true, headline: "Discover what\u2019s trending around you" }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, nulla, ipsum? Molestiae quis aliquam magni harum non?"))) : null));
        };
        TeachingBubbleCondensedExample.prototype._onDismiss = function (ev) {
            this.setState({
                isTeachingBubbleVisible: false
            });
        };
        TeachingBubbleCondensedExample.prototype._onShow = function (ev) {
            this.setState({
                isTeachingBubbleVisible: true
            });
        };
        return TeachingBubbleCondensedExample;
    }(React.Component));
    exports.TeachingBubbleCondensedExample = TeachingBubbleCondensedExample;
});
//# sourceMappingURL=TeachingBubble.Condensed.Example.js.map