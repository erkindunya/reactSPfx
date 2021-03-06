"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Separator_1 = require("office-ui-fabric-react/lib/Separator");
var Styling_1 = require("office-ui-fabric-react/lib/Styling");
var Stack_1 = require("office-ui-fabric-react/lib/Stack");
var Text_1 = require("office-ui-fabric-react/lib/Text");
var theme = Styling_1.createTheme({
    fonts: {
        medium: {
            fontFamily: 'Monaco, Menlo, Consolas',
            fontSize: '30px'
        }
    }
});
var SeparatorThemingExample = /** @class */ (function (_super) {
    tslib_1.__extends(SeparatorThemingExample, _super);
    function SeparatorThemingExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeparatorThemingExample.prototype.render = function () {
        var content = 'Today';
        return (React.createElement(Stack_1.Stack, { gap: 12 },
            React.createElement(Text_1.Text, null, "Horizontal center aligned with custom theme"),
            React.createElement(Separator_1.Separator, { theme: theme }, content)));
    };
    return SeparatorThemingExample;
}(React.Component));
exports.SeparatorThemingExample = SeparatorThemingExample;
//# sourceMappingURL=Separator.Theming.Example.js.map