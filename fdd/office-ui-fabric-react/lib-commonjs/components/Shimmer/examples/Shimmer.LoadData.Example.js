"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Shimmer_1 = require("office-ui-fabric-react/lib/Shimmer");
var Persona_1 = require("office-ui-fabric-react/lib/Persona");
var Toggle_1 = require("office-ui-fabric-react/lib/Toggle");
var Styling_1 = require("office-ui-fabric-react/lib/Styling");
var wrapperClass = Styling_1.mergeStyles({
    padding: 2,
    selectors: {
        '& > *': {
            margin: '10px 0'
        }
    }
});
var ShimmerLoadDataExample = /** @class */ (function (_super) {
    tslib_1.__extends(ShimmerLoadDataExample, _super);
    function ShimmerLoadDataExample(props) {
        var _this = _super.call(this, props) || this;
        _this._getContentOne = function (ev, checked) {
            var isDataLoadedOne = _this.state.isDataLoadedOne;
            _this.setState({
                isDataLoadedOne: checked,
                contentOne: !isDataLoadedOne ? 'Congratulations!!! You have successfully loaded the content. ' : ''
            });
        };
        _this._getContentTwo = function (ev, checked) {
            var isDataLoadedTwo = _this.state.isDataLoadedTwo;
            _this.setState({
                isDataLoadedTwo: checked,
                examplePersona: !isDataLoadedTwo
                    ? {
                        imageUrl: 'https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-female.png',
                        imageInitials: 'AL',
                        primaryText: 'Annie Lindqvist',
                        secondaryText: 'Software Engineer'
                    }
                    : {}
            });
        };
        _this._getCustomElements = function () {
            return (React.createElement("div", { style: { display: 'flex' } },
                React.createElement(Shimmer_1.ShimmerElementsGroup, { shimmerElements: [{ type: Shimmer_1.ShimmerElementType.circle, height: 40 }, { type: Shimmer_1.ShimmerElementType.gap, width: 16, height: 40 }] }),
                React.createElement(Shimmer_1.ShimmerElementsGroup, { flexWrap: true, width: "100%", shimmerElements: [
                        { type: Shimmer_1.ShimmerElementType.line, width: '100%', height: 10, verticalAlign: 'bottom' },
                        { type: Shimmer_1.ShimmerElementType.line, width: '90%', height: 8 },
                        { type: Shimmer_1.ShimmerElementType.gap, width: '10%', height: 20 }
                    ] })));
        };
        _this.state = {
            isDataLoadedOne: false,
            isDataLoadedTwo: false,
            contentOne: '',
            examplePersona: {}
        };
        return _this;
    }
    ShimmerLoadDataExample.prototype.render = function () {
        var _a = this.state, isDataLoadedOne = _a.isDataLoadedOne, isDataLoadedTwo = _a.isDataLoadedTwo, contentOne = _a.contentOne, examplePersona = _a.examplePersona;
        return (React.createElement("div", { className: wrapperClass },
            React.createElement(Toggle_1.Toggle, { checked: isDataLoadedOne, onChange: this._getContentOne, onText: "Toggle to show shimmer", offText: "Toggle to load content" }),
            React.createElement(Shimmer_1.Shimmer, { isDataLoaded: isDataLoadedOne, ariaLabel: "Loading content" },
                React.createElement("div", { style: {
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        lineHeight: '1',
                        minHeight: '16px' // Default height of Shimmer when no elements being provided.
                    } },
                    contentOne,
                    contentOne,
                    contentOne)),
            React.createElement(Toggle_1.Toggle, { checked: isDataLoadedTwo, onChange: this._getContentTwo, onText: "Toggle to show shimmer", offText: "Toggle to load content" }),
            React.createElement(Shimmer_1.Shimmer, { customElementsGroup: this._getCustomElements(), width: 300, isDataLoaded: isDataLoadedTwo },
                React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size40, presence: Persona_1.PersonaPresence.away })))));
    };
    return ShimmerLoadDataExample;
}(React.Component));
exports.ShimmerLoadDataExample = ShimmerLoadDataExample;
//# sourceMappingURL=Shimmer.LoadData.Example.js.map