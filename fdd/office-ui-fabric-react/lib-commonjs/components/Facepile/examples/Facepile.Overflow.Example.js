"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Facepile_1 = require("office-ui-fabric-react/lib/Facepile");
var Dropdown_1 = require("office-ui-fabric-react/lib/Dropdown");
var Slider_1 = require("office-ui-fabric-react/lib/Slider");
var FacepileExampleData_1 = require("./FacepileExampleData");
require("./Facepile.Examples.scss");
var facepileProps = {
    personas: FacepileExampleData_1.facepilePersonas,
    maxDisplayablePersonas: 5,
    overflowButtonType: Facepile_1.OverflowButtonType.downArrow,
    overflowButtonProps: {
        ariaLabel: 'More users',
        onClick: function (ev) { return alert('overflow icon clicked'); }
    },
    ariaDescription: 'To move through the items use left and right arrow keys.'
};
var FacepileOverflowExample = /** @class */ (function (_super) {
    tslib_1.__extends(FacepileOverflowExample, _super);
    function FacepileOverflowExample(props) {
        var _this = _super.call(this, props) || this;
        _this._onChangePersonaNumber = function (value) {
            _this.setState(function (prevState) {
                prevState.displayedPersonas = value;
                return prevState;
            });
        };
        _this._onChangeType = function (event, value) {
            _this.setState(function (prevState) {
                prevState.overflowButtonType = value.key;
                return prevState;
            });
        };
        _this.state = {
            displayedPersonas: 5,
            overflowButtonType: Facepile_1.OverflowButtonType.none
        };
        return _this;
    }
    FacepileOverflowExample.prototype.render = function () {
        var _a = this.state, displayedPersonas = _a.displayedPersonas, overflowButtonType = _a.overflowButtonType;
        facepileProps.maxDisplayablePersonas = displayedPersonas;
        facepileProps.overflowButtonType = overflowButtonType;
        return (React.createElement("div", { className: 'ms-FacepileExample' },
            React.createElement(Facepile_1.Facepile, tslib_1.__assign({}, facepileProps)),
            React.createElement("div", { className: 'control' },
                React.createElement(Slider_1.Slider, { label: "Number of Personas:", min: 1, max: 5, step: 1, showValue: true, value: this.state.displayedPersonas, onChange: this._onChangePersonaNumber }),
                React.createElement(Dropdown_1.Dropdown, { label: "Overflow Button Type:", selectedKey: this.state.overflowButtonType, options: [
                        { key: Facepile_1.OverflowButtonType.none, text: Facepile_1.OverflowButtonType[Facepile_1.OverflowButtonType.none] },
                        { key: Facepile_1.OverflowButtonType.descriptive, text: Facepile_1.OverflowButtonType[Facepile_1.OverflowButtonType.descriptive] },
                        { key: Facepile_1.OverflowButtonType.downArrow, text: Facepile_1.OverflowButtonType[Facepile_1.OverflowButtonType.downArrow] },
                        { key: Facepile_1.OverflowButtonType.more, text: Facepile_1.OverflowButtonType[Facepile_1.OverflowButtonType.more] }
                    ], onChange: this._onChangeType }))));
    };
    return FacepileOverflowExample;
}(React.Component));
exports.FacepileOverflowExample = FacepileOverflowExample;
//# sourceMappingURL=Facepile.Overflow.Example.js.map