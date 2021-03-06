"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Persona_1 = require("office-ui-fabric-react/lib/Persona");
var TestImages_1 = require("../../../common/TestImages");
require("./PersonaExample.scss");
var examplePersona = {
    imageUrl: TestImages_1.TestImages.personaMale,
    imageInitials: 'AR',
    text: 'Annie Reid',
    secondaryText: 'Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm',
    showSecondaryText: true
};
var PersonaAlternateExample = /** @class */ (function (_super) {
    tslib_1.__extends(PersonaAlternateExample, _super);
    function PersonaAlternateExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            renderPersonaDetails: true
        };
        return _this;
    }
    PersonaAlternateExample.prototype.render = function () {
        var renderPersonaDetails = this.state.renderPersonaDetails;
        return (React.createElement("div", { className: "ms-PersonaExample" },
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size24, presence: Persona_1.PersonaPresence.none, hidePersonaDetails: !renderPersonaDetails })),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size28, presence: Persona_1.PersonaPresence.none, hidePersonaDetails: !renderPersonaDetails })),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size32, presence: Persona_1.PersonaPresence.online, hidePersonaDetails: !renderPersonaDetails }))));
    };
    return PersonaAlternateExample;
}(React.Component));
exports.PersonaAlternateExample = PersonaAlternateExample;
//# sourceMappingURL=Persona.Alternate.Example.js.map