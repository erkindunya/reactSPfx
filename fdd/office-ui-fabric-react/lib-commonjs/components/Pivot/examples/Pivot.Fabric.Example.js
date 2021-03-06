"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Label_1 = require("office-ui-fabric-react/lib/Label");
var Pivot_1 = require("office-ui-fabric-react/lib/Pivot");
var Callout_Basic_Example_1 = require("../../Callout/examples/Callout.Basic.Example");
var Spinner_Basic_Example_1 = require("../../Spinner/examples/Spinner.Basic.Example");
var Persona_Basic_Example_1 = require("../../Persona/examples/Persona.Basic.Example");
var PivotFabricExample = /** @class */ (function (_super) {
    tslib_1.__extends(PivotFabricExample, _super);
    function PivotFabricExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PivotFabricExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Pivot_1.Pivot, { linkFormat: Pivot_1.PivotLinkFormat.links, linkSize: Pivot_1.PivotLinkSize.normal },
                React.createElement(Pivot_1.PivotItem, { headerText: "Callout" },
                    React.createElement(Label_1.Label, null, "Callout Example"),
                    React.createElement(Callout_Basic_Example_1.CalloutBasicExample, null)),
                React.createElement(Pivot_1.PivotItem, { headerText: "Spinner" },
                    React.createElement(Label_1.Label, null, "Spinner Example"),
                    React.createElement(Spinner_Basic_Example_1.SpinnerBasicExample, null)),
                React.createElement(Pivot_1.PivotItem, { headerText: "Persona" },
                    React.createElement(Label_1.Label, null, "Persona Example"),
                    React.createElement(Persona_Basic_Example_1.PersonaBasicExample, null)))));
    };
    return PivotFabricExample;
}(React.Component));
exports.PivotFabricExample = PivotFabricExample;
//# sourceMappingURL=Pivot.Fabric.Example.js.map