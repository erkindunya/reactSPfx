define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Persona", "office-ui-fabric-react/lib/Checkbox", "office-ui-fabric-react/lib/Label", "../../../common/TestImages", "../../../common/_exampleStyles.scss"], function (require, exports, tslib_1, React, Persona_1, Checkbox_1, Label_1, TestImages_1, exampleStylesImport) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var exampleStyles = exampleStylesImport;
    var examplePersona = {
        imageUrl: TestImages_1.TestImages.personaFemale,
        imageInitials: 'AL',
        text: 'Annie Lindqvist',
        secondaryText: 'Software Engineer',
        tertiaryText: 'In a meeting',
        optionalText: 'Available at 4:00pm'
    };
    var PersonaBasicExample = /** @class */ (function (_super) {
        tslib_1.__extends(PersonaBasicExample, _super);
        function PersonaBasicExample(props) {
            var _this = _super.call(this, props) || this;
            _this._onChange = function (ev, checked) {
                _this.setState({ renderPersonaDetails: checked });
            };
            _this.state = {
                renderPersonaDetails: true
            };
            return _this;
        }
        PersonaBasicExample.prototype.render = function () {
            var renderPersonaDetails = this.state.renderPersonaDetails;
            return (React.createElement("div", null,
                React.createElement("div", null,
                    React.createElement(Checkbox_1.Checkbox, { label: "Include persona details", checked: renderPersonaDetails, onChange: this._onChange })),
                React.createElement(Label_1.Label, { className: exampleStyles.exampleLabel }, "Size 10 Persona, with no presence"),
                React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size10, hidePersonaDetails: !renderPersonaDetails })),
                React.createElement(Label_1.Label, { className: exampleStyles.exampleLabel }, "Size 10 Persona, with presence"),
                React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size10, presence: Persona_1.PersonaPresence.offline, hidePersonaDetails: !renderPersonaDetails })),
                React.createElement(Label_1.Label, { className: exampleStyles.exampleLabel }, "Size 24 Persona"),
                React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size24, presence: Persona_1.PersonaPresence.online, hidePersonaDetails: !renderPersonaDetails })),
                React.createElement(Label_1.Label, { className: exampleStyles.exampleLabel }, "Size 28 Persona"),
                React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size28, presence: Persona_1.PersonaPresence.online, hidePersonaDetails: !renderPersonaDetails })),
                React.createElement(Label_1.Label, { className: exampleStyles.exampleLabel }, "Size 32 Persona"),
                React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size32, presence: Persona_1.PersonaPresence.online, hidePersonaDetails: !renderPersonaDetails })),
                React.createElement(Label_1.Label, { className: exampleStyles.exampleLabel }, "Size 40 Persona"),
                React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size40, presence: Persona_1.PersonaPresence.away, hidePersonaDetails: !renderPersonaDetails })),
                React.createElement(Label_1.Label, { className: exampleStyles.exampleLabel }, "Size 48 Persona (default) "),
                React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { hidePersonaDetails: !renderPersonaDetails, presence: Persona_1.PersonaPresence.busy })),
                React.createElement(Label_1.Label, { className: exampleStyles.exampleLabel }, "Size 72 Persona"),
                React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size72, presence: Persona_1.PersonaPresence.dnd, hidePersonaDetails: !renderPersonaDetails })),
                React.createElement(Label_1.Label, { className: exampleStyles.exampleLabel }, "Size 100 Persona"),
                React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size100, presence: Persona_1.PersonaPresence.blocked, hidePersonaDetails: !renderPersonaDetails }))));
        };
        return PersonaBasicExample;
    }(React.Component));
    exports.PersonaBasicExample = PersonaBasicExample;
});
//# sourceMappingURL=Persona.Basic.Example.js.map