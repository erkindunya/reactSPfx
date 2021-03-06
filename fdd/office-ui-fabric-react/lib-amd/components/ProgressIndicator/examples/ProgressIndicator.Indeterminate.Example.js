define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/ProgressIndicator"], function (require, exports, tslib_1, React, ProgressIndicator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ProgressIndicatorIndeterminateExample = /** @class */ (function (_super) {
        tslib_1.__extends(ProgressIndicatorIndeterminateExample, _super);
        function ProgressIndicatorIndeterminateExample(props) {
            return _super.call(this, props) || this;
        }
        ProgressIndicatorIndeterminateExample.prototype.render = function () {
            return React.createElement(ProgressIndicator_1.ProgressIndicator, { label: "Example title", description: "Example description" });
        };
        return ProgressIndicatorIndeterminateExample;
    }(React.Component));
    exports.ProgressIndicatorIndeterminateExample = ProgressIndicatorIndeterminateExample;
});
//# sourceMappingURL=ProgressIndicator.Indeterminate.Example.js.map