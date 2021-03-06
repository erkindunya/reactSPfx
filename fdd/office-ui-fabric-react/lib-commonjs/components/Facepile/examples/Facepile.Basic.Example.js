"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Checkbox_1 = require("office-ui-fabric-react/lib/Checkbox");
var Dropdown_1 = require("office-ui-fabric-react/lib/Dropdown");
var Facepile_1 = require("office-ui-fabric-react/lib/Facepile");
var Persona_1 = require("office-ui-fabric-react/lib/Persona");
var Slider_1 = require("office-ui-fabric-react/lib/Slider");
var FacepileExampleData_1 = require("./FacepileExampleData");
require("./Facepile.Examples.scss");
var exampleStylesImport = require("../../../common/_exampleStyles.scss");
var exampleStyles = exampleStylesImport;
var FacepileBasicExample = /** @class */ (function (_super) {
    tslib_1.__extends(FacepileBasicExample, _super);
    function FacepileBasicExample(props) {
        var _this = _super.call(this, props) || this;
        _this._onChangeFadeIn = function (ev, checked) {
            _this.setState(function (prevState) {
                prevState.imagesFadeIn = checked;
                return prevState;
            });
        };
        _this._onChangePersonaNumber = function (value) {
            _this.setState(function (prevState) {
                prevState.numberOfFaces = value;
                return prevState;
            });
        };
        _this._onChangePersonaSize = function (event, value) {
            _this.setState(function (prevState) {
                prevState.personaSize = value.key;
                return prevState;
            });
        };
        _this.state = {
            numberOfFaces: 3,
            imagesFadeIn: true,
            personaSize: Persona_1.PersonaSize.size32
        };
        return _this;
    }
    FacepileBasicExample.prototype.render = function () {
        var _this = this;
        var _a = this.state, numberOfFaces = _a.numberOfFaces, personaSize = _a.personaSize;
        var facepileProps = {
            personaSize: personaSize,
            personas: FacepileExampleData_1.facepilePersonas.slice(0, numberOfFaces),
            overflowPersonas: FacepileExampleData_1.facepilePersonas.slice(numberOfFaces),
            getPersonaProps: function (persona) {
                return {
                    imageShouldFadeIn: _this.state.imagesFadeIn
                };
            },
            ariaDescription: 'To move through the items use left and right arrow keys.'
        };
        return (React.createElement("div", { className: 'ms-FacepileExample' },
            React.createElement(Facepile_1.Facepile, tslib_1.__assign({}, facepileProps)),
            React.createElement("div", { className: 'control' },
                React.createElement(Slider_1.Slider, { label: "Number of Personas:", min: 1, max: 5, step: 1, showValue: true, value: numberOfFaces, onChange: this._onChangePersonaNumber }),
                React.createElement(Dropdown_1.Dropdown, { label: "Persona Size:", selectedKey: this.state.personaSize, options: [
                        { key: Persona_1.PersonaSize.size16, text: Persona_1.PersonaSize[Persona_1.PersonaSize.size16] },
                        { key: Persona_1.PersonaSize.size24, text: Persona_1.PersonaSize[Persona_1.PersonaSize.size24] },
                        { key: Persona_1.PersonaSize.size28, text: Persona_1.PersonaSize[Persona_1.PersonaSize.size28] },
                        { key: Persona_1.PersonaSize.size32, text: Persona_1.PersonaSize[Persona_1.PersonaSize.size32] },
                        { key: Persona_1.PersonaSize.size40, text: Persona_1.PersonaSize[Persona_1.PersonaSize.size40] }
                    ], onChange: this._onChangePersonaSize }),
                React.createElement(Checkbox_1.Checkbox, { className: exampleStyles.exampleCheckbox, label: "Fade In", checked: this.state.imagesFadeIn, onChange: this._onChangeFadeIn }))));
    };
    return FacepileBasicExample;
}(React.Component));
exports.FacepileBasicExample = FacepileBasicExample;
//# sourceMappingURL=Facepile.Basic.Example.js.map