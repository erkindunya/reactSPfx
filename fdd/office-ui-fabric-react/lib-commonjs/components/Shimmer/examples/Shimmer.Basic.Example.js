"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Shimmer_1 = require("office-ui-fabric-react/lib/Shimmer");
var Fabric_1 = require("office-ui-fabric-react/lib/Fabric");
var Styling_1 = require("office-ui-fabric-react/lib/Styling");
var wrapperClass = Styling_1.mergeStyles({
    padding: 2,
    selectors: {
        '& > *': {
            margin: '10px 0'
        }
    }
});
var ShimmerBasicExample = /** @class */ (function (_super) {
    tslib_1.__extends(ShimmerBasicExample, _super);
    function ShimmerBasicExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShimmerBasicExample.prototype.render = function () {
        return (React.createElement(Fabric_1.Fabric, { className: wrapperClass },
            "Basic Shimmer with no elements provided. It defaults to a line of 16px height.",
            React.createElement(Shimmer_1.Shimmer, null),
            React.createElement(Shimmer_1.Shimmer, { width: "75%" }),
            React.createElement(Shimmer_1.Shimmer, { width: "50%" }),
            "Basic Shimmer with elements provided.",
            React.createElement(Shimmer_1.Shimmer, { shimmerElements: [
                    { type: Shimmer_1.ShimmerElementType.circle },
                    { type: Shimmer_1.ShimmerElementType.gap, width: '2%' },
                    { type: Shimmer_1.ShimmerElementType.line }
                ] }),
            React.createElement(Shimmer_1.Shimmer, { shimmerElements: [
                    { type: Shimmer_1.ShimmerElementType.circle, height: 24 },
                    { type: Shimmer_1.ShimmerElementType.gap, width: '2%' },
                    { type: Shimmer_1.ShimmerElementType.line, height: 16, width: '20%' },
                    { type: Shimmer_1.ShimmerElementType.gap, width: '5%' },
                    { type: Shimmer_1.ShimmerElementType.line, height: 16, width: '20%' },
                    { type: Shimmer_1.ShimmerElementType.gap, width: '10%' },
                    { type: Shimmer_1.ShimmerElementType.line, height: 16, width: '15%' },
                    { type: Shimmer_1.ShimmerElementType.gap, width: '10%' },
                    { type: Shimmer_1.ShimmerElementType.line, height: 16 }
                ] }),
            React.createElement(Shimmer_1.Shimmer, { width: '70%', shimmerElements: [
                    { type: Shimmer_1.ShimmerElementType.circle, height: 24 },
                    { type: Shimmer_1.ShimmerElementType.gap, width: '2%' },
                    { type: Shimmer_1.ShimmerElementType.line, height: 16, width: '20%' },
                    { type: Shimmer_1.ShimmerElementType.gap, width: '5%' },
                    { type: Shimmer_1.ShimmerElementType.line, height: 16, width: '20%' },
                    { type: Shimmer_1.ShimmerElementType.gap, width: '10%' },
                    { type: Shimmer_1.ShimmerElementType.line, height: 16, width: '15%' },
                    { type: Shimmer_1.ShimmerElementType.gap, width: '10%' },
                    { type: Shimmer_1.ShimmerElementType.line, height: 16 }
                ] }),
            "Variations of vertical alignment for Circles and Lines.",
            React.createElement(Shimmer_1.Shimmer, { shimmerElements: [
                    { type: Shimmer_1.ShimmerElementType.circle },
                    { type: Shimmer_1.ShimmerElementType.gap, width: '2%' },
                    { type: Shimmer_1.ShimmerElementType.circle, height: 15, verticalAlign: 'top' },
                    { type: Shimmer_1.ShimmerElementType.gap, width: '2%' },
                    { type: Shimmer_1.ShimmerElementType.line, verticalAlign: 'bottom', width: '20%' },
                    { type: Shimmer_1.ShimmerElementType.gap, width: '2%' },
                    { type: Shimmer_1.ShimmerElementType.line, height: 5, verticalAlign: 'top', width: '20%' },
                    { type: Shimmer_1.ShimmerElementType.gap, width: '2%' },
                    { type: Shimmer_1.ShimmerElementType.line, height: 16, width: '15%' },
                    { type: Shimmer_1.ShimmerElementType.gap, width: '2%' },
                    { type: Shimmer_1.ShimmerElementType.line, height: 10, verticalAlign: 'bottom' }
                ] })));
    };
    return ShimmerBasicExample;
}(React.Component));
exports.ShimmerBasicExample = ShimmerBasicExample;
//# sourceMappingURL=Shimmer.Basic.Example.js.map