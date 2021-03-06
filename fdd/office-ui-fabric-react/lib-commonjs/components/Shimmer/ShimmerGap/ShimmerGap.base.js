"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../../Utilities");
var getClassNames = Utilities_1.classNamesFunction();
/**
 * {@docCategory Shimmer}
 */
var ShimmerGapBase = /** @class */ (function (_super) {
    tslib_1.__extends(ShimmerGapBase, _super);
    function ShimmerGapBase(props) {
        return _super.call(this, props) || this;
    }
    ShimmerGapBase.prototype.render = function () {
        var _a = this.props, height = _a.height, styles = _a.styles, width = _a.width, borderStyle = _a.borderStyle, theme = _a.theme;
        this._classNames = getClassNames(styles, {
            theme: theme,
            height: height,
            borderStyle: borderStyle
        });
        return (React.createElement("div", { style: { width: width ? width : '10px', minWidth: typeof width === 'number' ? width + "px" : 'auto' }, className: this._classNames.root }));
    };
    return ShimmerGapBase;
}(Utilities_1.BaseComponent));
exports.ShimmerGapBase = ShimmerGapBase;
//# sourceMappingURL=ShimmerGap.base.js.map