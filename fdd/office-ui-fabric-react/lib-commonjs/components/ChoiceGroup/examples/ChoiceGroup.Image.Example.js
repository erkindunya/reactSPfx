"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ChoiceGroup_1 = require("office-ui-fabric-react/lib/ChoiceGroup");
var TestImages_1 = require("../../../common/TestImages");
var ChoiceGroupImageExample = /** @class */ (function (_super) {
    tslib_1.__extends(ChoiceGroupImageExample, _super);
    function ChoiceGroupImageExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            selectedKey: 'bar'
        };
        _this._onImageChoiceGroupChange = _this._onImageChoiceGroupChange.bind(_this);
        return _this;
    }
    ChoiceGroupImageExample.prototype.render = function () {
        var selectedKey = this.state.selectedKey;
        return (React.createElement("div", null,
            React.createElement(ChoiceGroup_1.ChoiceGroup, { label: "Pick one image", selectedKey: selectedKey, options: [
                    {
                        key: 'bar',
                        imageSrc: TestImages_1.TestImages.choiceGroupBarUnselected,
                        imageAlt: 'Bar chart icon',
                        selectedImageSrc: TestImages_1.TestImages.choiceGroupBarSelected,
                        imageSize: { width: 32, height: 32 },
                        text: 'Clustered bar chart' // This text is long to show text wrapping.
                    },
                    {
                        key: 'pie',
                        imageSrc: TestImages_1.TestImages.choiceGroupBarUnselected,
                        selectedImageSrc: TestImages_1.TestImages.choiceGroupBarSelected,
                        imageSize: { width: 32, height: 32 },
                        text: 'Pie chart'
                    }
                ], onChange: this._onImageChoiceGroupChange })));
    };
    ChoiceGroupImageExample.prototype._onImageChoiceGroupChange = function (ev, option) {
        this.setState({
            selectedKey: option.key
        });
    };
    return ChoiceGroupImageExample;
}(React.Component));
exports.ChoiceGroupImageExample = ChoiceGroupImageExample;
//# sourceMappingURL=ChoiceGroup.Image.Example.js.map