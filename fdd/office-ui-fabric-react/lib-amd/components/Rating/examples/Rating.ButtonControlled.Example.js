define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Rating", "office-ui-fabric-react/lib/Button"], function (require, exports, tslib_1, React, Rating_1, Button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RatingButtonControlledExample = /** @class */ (function (_super) {
        tslib_1.__extends(RatingButtonControlledExample, _super);
        function RatingButtonControlledExample(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                rating: 0
            };
            return _this;
        }
        // tslint:disable:jsx-no-lambda
        RatingButtonControlledExample.prototype.render = function () {
            var _this = this;
            var maxrating = 5;
            return (React.createElement("div", { className: "ms-RatingButtonControlledExample" },
                React.createElement(Rating_1.Rating, { rating: this.state.rating, max: 5, readOnly: true, allowZeroStars: true, getAriaLabel: this._getRatingComponentAriaLabel, ariaLabelFormat: '{0} of {1} stars selected' }),
                React.createElement(Button_1.PrimaryButton, { text: 'Click to change rating to ' + (maxrating - this.state.rating), onClick: function (e) {
                        if (_this.state.rating === 0) {
                            _this.setState({ rating: 5 });
                        }
                        else {
                            _this.setState({ rating: 0 });
                        }
                    } })));
        };
        RatingButtonControlledExample.prototype._getRatingComponentAriaLabel = function (rating, maxRating) {
            return "Rating value is " + rating + " of " + maxRating;
        };
        return RatingButtonControlledExample;
    }(React.Component));
    exports.RatingButtonControlledExample = RatingButtonControlledExample;
});
//# sourceMappingURL=Rating.ButtonControlled.Example.js.map