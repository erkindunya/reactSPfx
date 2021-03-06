define(["require", "exports", "tslib", "react", "../../../Utilities"], function (require, exports, tslib_1, React, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var getClassNames = Utilities_1.classNamesFunction();
    var ShimmerCircleBase = /** @class */ (function (_super) {
        tslib_1.__extends(ShimmerCircleBase, _super);
        function ShimmerCircleBase(props) {
            return _super.call(this, props) || this;
        }
        ShimmerCircleBase.prototype.render = function () {
            var _a = this.props, height = _a.height, styles = _a.styles, borderStyle = _a.borderStyle, theme = _a.theme;
            this._classNames = getClassNames(styles, {
                theme: theme,
                height: height,
                borderStyle: borderStyle
            });
            return (React.createElement("div", { className: this._classNames.root },
                React.createElement("svg", { viewBox: "0 0 10 10", width: height, height: height, className: this._classNames.svg },
                    React.createElement("path", { 
                        // tslint:disable-next-line:max-line-length
                        d: "M0,0 L10,0 L10,10 L0,10 L0,0 Z M0,5 C0,7.76142375 2.23857625,10 5,10 C7.76142375,10 10,7.76142375 10,5 C10,2.23857625 7.76142375,2.22044605e-16 5,0 C2.23857625,-2.22044605e-16 0,2.23857625 0,5 L0,5 Z" }))));
        };
        return ShimmerCircleBase;
    }(Utilities_1.BaseComponent));
    exports.ShimmerCircleBase = ShimmerCircleBase;
});
//# sourceMappingURL=ShimmerCircle.base.js.map