define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Icon", "./IconExample.scss"], function (require, exports, tslib_1, React, Icon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IconColorExample = /** @class */ (function (_super) {
        tslib_1.__extends(IconColorExample, _super);
        function IconColorExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        IconColorExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(Icon_1.Icon, { iconName: 'CompassNW', className: 'ms-IconExample ms-IconColorExample-deepSkyBlue' }),
                React.createElement(Icon_1.Icon, { iconName: 'Dictionary', className: 'ms-IconExample ms-IconColorExample-greenYellow' }),
                React.createElement(Icon_1.Icon, { iconName: 'TrainSolid', className: 'ms-IconExample ms-IconColorExample-salmon' })));
        };
        return IconColorExample;
    }(React.Component));
    exports.IconColorExample = IconColorExample;
});
//# sourceMappingURL=Icon.Color.Example.js.map