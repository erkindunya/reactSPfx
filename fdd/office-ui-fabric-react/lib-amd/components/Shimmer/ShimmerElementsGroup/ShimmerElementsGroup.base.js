define(["require", "exports", "tslib", "react", "../../../Utilities", "../Shimmer.types", "../ShimmerLine/ShimmerLine", "../ShimmerGap/ShimmerGap", "../ShimmerCircle/ShimmerCircle"], function (require, exports, tslib_1, React, Utilities_1, Shimmer_types_1, ShimmerLine_1, ShimmerGap_1, ShimmerCircle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    /**
     * {@docCategory Shimmer}
     */
    var ShimmerElementsGroupBase = /** @class */ (function (_super) {
        tslib_1.__extends(ShimmerElementsGroupBase, _super);
        function ShimmerElementsGroupBase(props) {
            var _this = _super.call(this, props) || this;
            _this._getRenderedElements = function (shimmerElements, rowHeight) {
                var renderedElements = shimmerElements ? (shimmerElements.map(function (elem, index) {
                    var type = elem.type, filteredElem = tslib_1.__rest(elem, ["type"]);
                    switch (elem.type) {
                        case Shimmer_types_1.ShimmerElementType.circle:
                            return React.createElement(ShimmerCircle_1.ShimmerCircle, tslib_1.__assign({ key: index }, filteredElem, { styles: _this._getStyles(elem, rowHeight) }));
                        case Shimmer_types_1.ShimmerElementType.gap:
                            return React.createElement(ShimmerGap_1.ShimmerGap, tslib_1.__assign({ key: index }, filteredElem, { styles: _this._getStyles(elem, rowHeight) }));
                        case Shimmer_types_1.ShimmerElementType.line:
                            return React.createElement(ShimmerLine_1.ShimmerLine, tslib_1.__assign({ key: index }, filteredElem, { styles: _this._getStyles(elem, rowHeight) }));
                    }
                })) : (React.createElement(ShimmerLine_1.ShimmerLine, { height: Shimmer_types_1.ShimmerElementsDefaultHeights.line, styles: { root: [{ borderWidth: '0px' }] } }));
                return renderedElements;
            };
            _this._getStyles = function (elem, rowHeight) {
                var backgroundColor = _this.props.backgroundColor;
                var verticalAlign = elem.verticalAlign, type = elem.type;
                var elemHeight = elem.height;
                var dif = rowHeight && elemHeight ? rowHeight - elemHeight : 0;
                var borderStyle;
                if (!verticalAlign || verticalAlign === 'center') {
                    borderStyle = {
                        borderBottomWidth: (dif ? Math.floor(dif / 2) : 0) + "px",
                        borderTopWidth: (dif ? Math.ceil(dif / 2) : 0) + "px"
                    };
                }
                else if (verticalAlign && verticalAlign === 'top') {
                    borderStyle = {
                        borderBottomWidth: (dif ? dif : 0) + "px",
                        borderTopWidth: "0px"
                    };
                }
                else if (verticalAlign && verticalAlign === 'bottom') {
                    borderStyle = {
                        borderBottomWidth: "0px",
                        borderTopWidth: (dif ? dif : 0) + "px"
                    };
                }
                if (backgroundColor) {
                    switch (type) {
                        case Shimmer_types_1.ShimmerElementType.circle:
                            return {
                                root: tslib_1.__assign({}, borderStyle, { borderColor: backgroundColor }),
                                svg: { fill: backgroundColor }
                            };
                        case Shimmer_types_1.ShimmerElementType.gap:
                            return {
                                root: tslib_1.__assign({}, borderStyle, { borderColor: backgroundColor, backgroundColor: backgroundColor })
                            };
                        case Shimmer_types_1.ShimmerElementType.line:
                            return {
                                root: tslib_1.__assign({}, borderStyle, { borderColor: backgroundColor }),
                                topLeftCorner: { fill: backgroundColor },
                                topRightCorner: { fill: backgroundColor },
                                bottomLeftCorner: { fill: backgroundColor },
                                bottomRightCorner: { fill: backgroundColor }
                            };
                    }
                }
                return {
                    root: tslib_1.__assign({}, borderStyle)
                };
            };
            /**
             * User should not worry to provide which of the elements is the highest, we do the calculation for him.
             * Plus if user forgot to specify the height we assign their defaults.
             */
            _this._findMaxElementHeight = function (elements) {
                var itemsDefaulted = elements.map(function (elem) {
                    switch (elem.type) {
                        case Shimmer_types_1.ShimmerElementType.circle:
                            if (!elem.height) {
                                elem.height = Shimmer_types_1.ShimmerElementsDefaultHeights.circle;
                            }
                        case Shimmer_types_1.ShimmerElementType.line:
                            if (!elem.height) {
                                elem.height = Shimmer_types_1.ShimmerElementsDefaultHeights.line;
                            }
                        case Shimmer_types_1.ShimmerElementType.gap:
                            if (!elem.height) {
                                elem.height = Shimmer_types_1.ShimmerElementsDefaultHeights.gap;
                            }
                    }
                    return elem;
                });
                var rowHeight = itemsDefaulted.reduce(function (acc, next) {
                    return next.height ? (next.height > acc ? next.height : acc) : acc;
                }, 0);
                return rowHeight;
            };
            return _this;
        }
        ShimmerElementsGroupBase.prototype.render = function () {
            var _a = this.props, styles = _a.styles, width = _a.width, shimmerElements = _a.shimmerElements, rowHeight = _a.rowHeight, flexWrap = _a.flexWrap, theme = _a.theme;
            this._classNames = getClassNames(styles, {
                theme: theme,
                flexWrap: flexWrap
            });
            var height = rowHeight ? rowHeight : this._findMaxElementHeight(shimmerElements ? shimmerElements : []);
            return (
            // tslint:disable-next-line:jsx-ban-props
            React.createElement("div", { style: { width: width ? width : 'auto' }, className: this._classNames.root }, this._getRenderedElements(shimmerElements, height)));
        };
        ShimmerElementsGroupBase.defaultProps = {
            flexWrap: false
        };
        return ShimmerElementsGroupBase;
    }(Utilities_1.BaseComponent));
    exports.ShimmerElementsGroupBase = ShimmerElementsGroupBase;
});
//# sourceMappingURL=ShimmerElementsGroup.base.js.map