define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Rating", "office-ui-fabric-react/lib/Styling", "./Rating.Basic.Example.scss"], function (require, exports, tslib_1, React, Rating_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RatingBasicExample = /** @class */ (function (_super) {
        tslib_1.__extends(RatingBasicExample, _super);
        function RatingBasicExample(props) {
            var _this = _super.call(this, props) || this;
            _this._onFocus = function () {
                console.log('onFocus called');
            };
            _this._onBlur = function () {
                console.log('onBlur called');
            };
            _this._onLargeStarChange = function (ev, rating) {
                _this.setState({ largeStarRating: rating });
            };
            _this._onSmallStarChange = function (ev, rating) {
                _this.setState({ smallStarRating: rating });
            };
            _this._onTenStarChange = function (ev, rating) {
                _this.setState({ tenStarRating: rating });
            };
            _this._onThemedStarChange = function (ev, rating) {
                _this.setState({ themedStarRating: rating });
            };
            _this.state = {
                largeStarRating: undefined,
                smallStarRating: 3,
                tenStarRating: undefined,
                themedStarRating: undefined
            };
            _this._customTheme = Styling_1.createTheme(Styling_1.getTheme());
            _this._customTheme.semanticColors.bodySubtext = '#DFDFDF';
            _this._customTheme.semanticColors.bodyTextChecked = '#1E9FE8';
            return _this;
        }
        RatingBasicExample.prototype.render = function () {
            return (React.createElement("div", { className: "ms-RatingBasicExample" },
                "Large Stars:",
                React.createElement(Rating_1.Rating, { min: 1, max: 5, size: Rating_1.RatingSize.Large, rating: this.state.largeStarRating, getAriaLabel: this._getRatingComponentAriaLabel, onChange: this._onLargeStarChange, onFocus: this._onFocus, onBlur: this._onBlur, ariaLabelFormat: '{0} of {1} stars selected' }),
                "Small Stars",
                React.createElement(Rating_1.Rating, { min: 1, max: 5, rating: this.state.smallStarRating, onChange: this._onSmallStarChange, getAriaLabel: this._getRatingComponentAriaLabel, onFocus: this._onFocus, onBlur: this._onBlur, ariaLabelFormat: '{0} of {1} stars selected' }),
                "10 Small Stars",
                React.createElement(Rating_1.Rating, { min: 1, max: 10, rating: this.state.tenStarRating, onChange: this._onTenStarChange, getAriaLabel: this._getRatingComponentAriaLabel, onFocus: this._onFocus, onBlur: this._onBlur, ariaLabelFormat: '{0} of {1} stars selected' }),
                "Disabled:",
                React.createElement(Rating_1.Rating, { min: 1, max: 5, rating: this.state.rating, disabled: true, onFocus: this._onFocus, onBlur: this._onBlur, ariaLabelFormat: '{0} of {1} stars selected' }),
                "Half star in readOnly mode:",
                React.createElement(Rating_1.Rating, { min: 1, max: 5, rating: 2.5, getAriaLabel: this._getRatingComponentAriaLabel, readOnly: true, ariaLabelFormat: '{0} of {1} stars selected' }),
                "Custom icons:",
                React.createElement(Rating_1.Rating, { min: 1, max: 5, rating: 2.5, getAriaLabel: this._getRatingComponentAriaLabel, readOnly: true, ariaLabelFormat: '{0} of {1} stars selected', icon: "StarburstSolid", unselectedIcon: "Starburst" }),
                "Themed star",
                React.createElement(Rating_1.Rating, { min: 1, max: 5, rating: this.state.themedStarRating, onChange: this._onThemedStarChange, getAriaLabel: this._getRatingComponentAriaLabel, onFocus: this._onFocus, onBlur: this._onBlur, ariaLabelFormat: '{0} of {1} stars selected', theme: this._customTheme })));
        };
        RatingBasicExample.prototype._getRatingComponentAriaLabel = function (rating, maxRating) {
            return "Rating value is " + rating + " of " + maxRating;
        };
        return RatingBasicExample;
    }(React.Component));
    exports.RatingBasicExample = RatingBasicExample;
});
//# sourceMappingURL=Rating.Basic.Example.js.map