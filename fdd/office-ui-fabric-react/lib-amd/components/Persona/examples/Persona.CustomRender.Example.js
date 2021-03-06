define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Persona", "office-ui-fabric-react/lib/Icon", "../../../common/TestImages", "../../../common/_exampleStyles.scss", "./PersonaExample.scss"], function (require, exports, tslib_1, React, Persona_1, Icon_1, TestImages_1, exampleStylesImport) {
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
    var PersonaCustomRenderExample = /** @class */ (function (_super) {
        tslib_1.__extends(PersonaCustomRenderExample, _super);
        function PersonaCustomRenderExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._onRenderSecondaryText = function (props) {
                return (React.createElement("div", null,
                    React.createElement(Icon_1.Icon, { iconName: 'Suitcase', className: 'ms-JobIconExample' }),
                    props.secondaryText));
            };
            return _this;
        }
        PersonaCustomRenderExample.prototype.render = function () {
            return (React.createElement("div", { className: "ms-PersonaExample" },
                React.createElement("div", { className: exampleStyles.exampleLabel }, "Custom icon in secondary text"),
                React.createElement(Persona_1.Persona, tslib_1.__assign({}, examplePersona, { size: Persona_1.PersonaSize.size72, presence: Persona_1.PersonaPresence.offline, onRenderSecondaryText: this._onRenderSecondaryText }))));
        };
        return PersonaCustomRenderExample;
    }(React.Component));
    exports.PersonaCustomRenderExample = PersonaCustomRenderExample;
});
//# sourceMappingURL=Persona.CustomRender.Example.js.map