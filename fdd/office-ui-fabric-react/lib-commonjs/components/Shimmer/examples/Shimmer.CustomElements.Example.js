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
var ShimmerCustomElementsExample = /** @class */ (function (_super) {
    tslib_1.__extends(ShimmerCustomElementsExample, _super);
    function ShimmerCustomElementsExample(props) {
        var _this = _super.call(this, props) || this;
        _this._getCustomElementsExampleOne = function () {
            return (React.createElement("div", { 
                // tslint:disable-next-line:jsx-ban-props
                style: { display: 'flex' } },
                React.createElement(Shimmer_1.ShimmerElementsGroup, { shimmerElements: [
                        { type: Shimmer_1.ShimmerElementType.line, width: 40, height: 40 },
                        { type: Shimmer_1.ShimmerElementType.gap, width: 10, height: 40 }
                    ] }),
                React.createElement(Shimmer_1.ShimmerElementsGroup, { flexWrap: true, shimmerElements: [
                        { type: Shimmer_1.ShimmerElementType.line, width: 300, height: 10 },
                        { type: Shimmer_1.ShimmerElementType.line, width: 200, height: 10 },
                        { type: Shimmer_1.ShimmerElementType.gap, width: 100, height: 20 }
                    ] })));
        };
        _this._getCustomElementsExampleTwo = function () {
            return (React.createElement("div", { 
                // tslint:disable-next-line:jsx-ban-props
                style: { display: 'flex' } },
                React.createElement(Shimmer_1.ShimmerElementsGroup, { shimmerElements: [{ type: Shimmer_1.ShimmerElementType.circle, height: 40 }, { type: Shimmer_1.ShimmerElementType.gap, width: 10, height: 40 }] }),
                React.createElement(Shimmer_1.ShimmerElementsGroup, { flexWrap: true, shimmerElements: [
                        { type: Shimmer_1.ShimmerElementType.line, width: 400, height: 10 },
                        { type: Shimmer_1.ShimmerElementType.gap, width: 100, height: 20 },
                        { type: Shimmer_1.ShimmerElementType.line, width: 500, height: 10 }
                    ] })));
        };
        _this._getCustomElementsExampleThree = function () {
            return (React.createElement("div", { 
                // tslint:disable-next-line:jsx-ban-props
                style: { display: 'flex' } },
                React.createElement(Shimmer_1.ShimmerElementsGroup, { width: '90px', shimmerElements: [
                        { type: Shimmer_1.ShimmerElementType.line, height: 80, width: 80 },
                        { type: Shimmer_1.ShimmerElementType.gap, width: 10, height: 80 }
                    ] }),
                React.createElement("div", { 
                    // tslint:disable-next-line:jsx-ban-props
                    style: { display: 'flex', flexWrap: 'wrap', width: '100%' } },
                    React.createElement(Shimmer_1.ShimmerElementsGroup, { shimmerElements: [{ type: Shimmer_1.ShimmerElementType.circle, height: 40 }, { type: Shimmer_1.ShimmerElementType.gap, width: 10, height: 40 }] }),
                    React.createElement(Shimmer_1.ShimmerElementsGroup, { flexWrap: true, width: 'calc(100% - 50px)', shimmerElements: [
                            { type: Shimmer_1.ShimmerElementType.line, width: '90%', height: 10 },
                            { type: Shimmer_1.ShimmerElementType.gap, width: '10%', height: 20 },
                            { type: Shimmer_1.ShimmerElementType.line, width: '100%', height: 10 }
                        ] }),
                    React.createElement(Shimmer_1.ShimmerElementsGroup, { flexWrap: true, width: '100%', shimmerElements: [
                            { type: Shimmer_1.ShimmerElementType.line, width: '80%', height: 10, verticalAlign: 'bottom' },
                            { type: Shimmer_1.ShimmerElementType.gap, width: '20%', height: 20 },
                            { type: Shimmer_1.ShimmerElementType.line, width: '40%', height: 10, verticalAlign: 'bottom' },
                            { type: Shimmer_1.ShimmerElementType.gap, width: '2%', height: 20 },
                            { type: Shimmer_1.ShimmerElementType.line, width: '58%', height: 10, verticalAlign: 'bottom' }
                        ] }))));
        };
        return _this;
    }
    ShimmerCustomElementsExample.prototype.render = function () {
        return (React.createElement(Fabric_1.Fabric, { className: wrapperClass },
            "Using ShimmerElementsGroup component to build complex structures of the placeholder you need.",
            React.createElement(Shimmer_1.Shimmer, { customElementsGroup: this._getCustomElementsExampleOne(), width: 350 }),
            React.createElement(Shimmer_1.Shimmer, { customElementsGroup: this._getCustomElementsExampleTwo(), width: 550 }),
            React.createElement(Shimmer_1.Shimmer, { customElementsGroup: this._getCustomElementsExampleThree(), width: '90%' })));
    };
    return ShimmerCustomElementsExample;
}(React.Component));
exports.ShimmerCustomElementsExample = ShimmerCustomElementsExample;
//# sourceMappingURL=Shimmer.CustomElements.Example.js.map