"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ProgressIndicator_1 = require("office-ui-fabric-react/lib/ProgressIndicator");
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
//# sourceMappingURL=ProgressIndicator.Indeterminate.Example.js.map