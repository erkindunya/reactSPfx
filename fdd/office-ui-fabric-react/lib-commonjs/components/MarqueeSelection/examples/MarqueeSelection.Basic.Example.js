"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var Checkbox_1 = require("office-ui-fabric-react/lib/Checkbox");
var MarqueeSelection_1 = require("office-ui-fabric-react/lib/MarqueeSelection");
var styles = require("./MarqueeSelection.Basic.Example.scss");
var exampleStyles = require("../../../common/_exampleStyles.scss");
var PHOTOS = Utilities_1.createArray(250, function (index) {
    var randomWidth = 50 + Math.floor(Math.random() * 150);
    return {
        key: index,
        url: "http://placehold.it/" + randomWidth + "x100",
        width: randomWidth,
        height: 100
    };
});
var MarqueeSelectionBasicExample = /** @class */ (function (_super) {
    tslib_1.__extends(MarqueeSelectionBasicExample, _super);
    function MarqueeSelectionBasicExample(props) {
        var _this = _super.call(this, props) || this;
        _this._onChange = function (ev, isMarqueeEnabled) {
            _this.setState({ isMarqueeEnabled: isMarqueeEnabled });
        };
        _this.state = {
            isMarqueeEnabled: true
        };
        _this._selection = new MarqueeSelection_1.Selection({
            onSelectionChanged: function () {
                if (_this._isMounted) {
                    _this.forceUpdate();
                }
            }
        });
        _this._selection.setItems(PHOTOS);
        return _this;
    }
    MarqueeSelectionBasicExample.prototype.componentDidMount = function () {
        this._isMounted = true;
    };
    MarqueeSelectionBasicExample.prototype.render = function () {
        var _this = this;
        return (React.createElement(MarqueeSelection_1.MarqueeSelection, { selection: this._selection, isEnabled: this.state.isMarqueeEnabled },
            React.createElement(Checkbox_1.Checkbox, { className: exampleStyles.exampleCheckbox, label: "Is marquee enabled", defaultChecked: true, onChange: this._onChange }),
            React.createElement("p", null, "Drag a rectangle around the items below to select them:"),
            React.createElement("ul", { className: styles.photoList }, PHOTOS.map(function (photo, index) { return (React.createElement("div", { key: index, className: Utilities_1.css(styles.photoCell, _this._selection.isIndexSelected(index) && 'is-selected'), "data-is-focusable": true, "data-selection-index": index, onClick: _this._log('clicked'), style: { width: photo.width, height: photo.height } }, index)); }))));
    };
    MarqueeSelectionBasicExample.prototype._log = function (text) {
        return function () {
            console.log(text);
        };
    };
    return MarqueeSelectionBasicExample;
}(React.Component));
exports.MarqueeSelectionBasicExample = MarqueeSelectionBasicExample;
//# sourceMappingURL=MarqueeSelection.Basic.Example.js.map