"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Label_1 = require("office-ui-fabric-react/lib/Label");
var TextField_1 = require("office-ui-fabric-react/lib/TextField");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
exports.LabelBasicExample = function () {
    // Use getId() to ensure that the ID is unique on the page.
    // (It's also okay to use a plain string without getId() and manually ensure uniqueness.)
    var textFieldId = Utilities_1.getId('anInput');
    return (React.createElement("div", null,
        React.createElement(Label_1.Label, null, "I'm a Label"),
        React.createElement(Label_1.Label, { disabled: true }, "I'm a disabled Label"),
        React.createElement(Label_1.Label, { required: true }, "I'm a required Label"),
        React.createElement(Label_1.Label, { htmlFor: textFieldId }, "A Label for An Input"),
        React.createElement(TextField_1.TextField, { id: textFieldId })));
};
//# sourceMappingURL=Label.Basic.Example.js.map