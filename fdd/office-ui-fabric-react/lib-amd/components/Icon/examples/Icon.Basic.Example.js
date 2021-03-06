define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Icon", "./IconExample.scss"], function (require, exports, tslib_1, React, Icon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var IconBasicExample = /** @class */ (function (_super) {
        tslib_1.__extends(IconBasicExample, _super);
        function IconBasicExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        IconBasicExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(Icon_1.Icon, { iconName: "CompassNW", className: "ms-IconExample" }),
                React.createElement(Icon_1.Icon, { iconName: "Dictionary", className: "ms-IconExample" }),
                React.createElement(Icon_1.Icon, { iconName: "TrainSolid", className: "ms-IconExample" })));
        };
        return IconBasicExample;
    }(React.Component));
    exports.IconBasicExample = IconBasicExample;
});
//# sourceMappingURL=Icon.Basic.Example.js.map