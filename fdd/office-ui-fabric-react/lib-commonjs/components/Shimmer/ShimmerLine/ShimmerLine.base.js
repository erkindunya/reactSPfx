"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("../../../Utilities");
var getClassNames = Utilities_1.classNamesFunction();
/**
 * {@docCategory Shimmer}
 */
var ShimmerLineBase = /** @class */ (function (_super) {
    tslib_1.__extends(ShimmerLineBase, _super);
    function ShimmerLineBase(props) {
        return _super.call(this, props) || this;
    }
    ShimmerLineBase.prototype.render = function () {
        var _a = this.props, height = _a.height, styles = _a.styles, width = _a.width, borderStyle = _a.borderStyle, theme = _a.theme;
        this._classNames = getClassNames(styles, {
            theme: theme,
            height: height,
            borderStyle: borderStyle
        });
        return (React.createElement("div", { style: { width: width ? width : '100%', minWidth: typeof width === 'number' ? width + "px" : 'auto' }, className: this._classNames.root },
            React.createElement("svg", { width: "2", height: "2", className: this._classNames.topLeftCorner },
                React.createElement("path", { d: "M0 2 A 2 2, 0, 0, 1, 2 0 L 0 0 Z" })),
            React.createElement("svg", { width: "2", height: "2", className: this._classNames.topRightCorner },
                React.createElement("path", { d: "M0 0 A 2 2, 0, 0, 1, 2 2 L 2 0 Z" })),
            React.createElement("svg", { width: "2", height: "2", className: this._classNames.bottomRightCorner },
                React.createElement("path", { d: "M2 0 A 2 2, 0, 0, 1, 0 2 L 2 2 Z" })),
            React.createElement("svg", { width: "2", height: "2", className: this._classNames.bottomLeftCorner },
                React.createElement("path", { d: "M2 2 A 2 2, 0, 0, 1, 0 0 L 0 2 Z" }))));
    };
    return ShimmerLineBase;
}(Utilities_1.BaseComponent));
exports.ShimmerLineBase = ShimmerLineBase;
//# sourceMappingURL=ShimmerLine.base.js.map