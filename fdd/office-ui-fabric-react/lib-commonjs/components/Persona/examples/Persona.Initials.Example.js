"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Persona_1 = require("office-ui-fabric-react/lib/Persona");
require("./PersonaExample.scss");
var examplePersona = {
    secondaryText: 'Designer',
    tertiaryText: 'In a meeting',
    optionalText: 'Available at 4:00pm'
};
var personaWithInitials = tslib_1.__assign({}, examplePersona, { text: 'Maor Sharett', imageInitials: 'MS' });
var PersonaInitialsExample = /** @class */ (function (_super) {
    tslib_1.__extends(PersonaInitialsExample, _super);
    function PersonaInitialsExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PersonaInitialsExample.prototype.render = function () {
        return (React.createElement("div", { className: "ms-PersonaExample" },
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { text: "Kat Larrson" })),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { text: "Annie" })),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { text: "Annie Lindqvist" })),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { text: "Annie Boyl Lindqvist" })),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { text: "Annie Boyl Carrie Lindqvist" })),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { text: "+1 (555) 123-4567 X4567" })),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { text: "+1 (555) 123-4567 X4567", allowPhoneInitials: true })),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { text: "\u5B8B\u667A\u6D0B" })),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { text: "\uB0A8\uAD81 \uC131\uC885" })),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { text: "\u062E\u0633\u0631\u0648 \u0631\u062D\u06CC\u0645\u06CC" })),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, personaWithInitials, { initialsColor: Persona_1.PersonaInitialsColor.lightBlue })),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, personaWithInitials, { initialsColor: Persona_1.PersonaInitialsColor.teal })),
            React.createElement(Persona_1.Persona, tslib_1.__assign({}, personaWithInitials, { initialsColor: Persona_1.PersonaInitialsColor.teal, coinSize: 150 }))));
    };
    return PersonaInitialsExample;
}(React.Component));
exports.PersonaInitialsExample = PersonaInitialsExample;
//# sourceMappingURL=Persona.Initials.Example.js.map