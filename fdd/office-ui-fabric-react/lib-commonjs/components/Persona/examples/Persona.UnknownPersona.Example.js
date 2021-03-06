"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Persona_1 = require("office-ui-fabric-react/lib/Persona");
require("./PersonaExample.scss");
var TestImages_1 = require("../../../common/TestImages");
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
//# sourceMappingURL=Persona.UnknownPersona.Example.js.map