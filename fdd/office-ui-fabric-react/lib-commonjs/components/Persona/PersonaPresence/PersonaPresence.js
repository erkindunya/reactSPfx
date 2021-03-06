"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Utilities_1 = require("../../../Utilities");
var PersonaPresence_base_1 = require("./PersonaPresence.base");
var PersonaPresence_styles_1 = require("./PersonaPresence.styles");
/**
 * PersonaPresence is used to render an individual's presence.
 */
exports.PersonaPresence = Utilities_1.styled(PersonaPresence_base_1.PersonaPresenceBase, PersonaPresence_styles_1.getStyles, undefined, { scope: 'PersonaPresence' });
//# sourceMappingURL=PersonaPresence.js.map