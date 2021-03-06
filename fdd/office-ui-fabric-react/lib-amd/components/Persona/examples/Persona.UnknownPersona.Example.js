define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Persona", "../../../common/TestImages", "./PersonaExample.scss"], function (require, exports, tslib_1, React, Persona_1, TestImages_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var UnknownPersonaExample = /** @class */ (function (_super) {
        tslib_1.__extends(UnknownPersonaExample, _super);
        function UnknownPersonaExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        UnknownPersonaExample.prototype.render = function () {
            return (React.createElement("div", { className: "ms-PersonaExample" },
                React.createElement(Persona_1.Persona, { showUnknownPersonaCoin: true, text: "Maor Sharett", secondaryText: "Designer", size: Persona_1.PersonaSize.size40 }),
                React.createElement(Persona_1.Persona, { showUnknownPersonaCoin: true, text: "Kat Larrson", secondaryText: "Designer", tertiaryText: "Unverified sender", size: Persona_1.PersonaSize.size72, imageUrl: TestImages_1.TestImages.personaFemale })));
        };
        return UnknownPersonaExample;
    }(React.Component));
    exports.UnknownPersonaExample = UnknownPersonaExample;
});
//# sourceMappingURL=Persona.UnknownPersona.Example.js.map