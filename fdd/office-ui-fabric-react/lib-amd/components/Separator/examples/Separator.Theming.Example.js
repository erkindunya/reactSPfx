define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Separator", "office-ui-fabric-react/lib/Styling", "office-ui-fabric-react/lib/Stack", "office-ui-fabric-react/lib/Text"], function (require, exports, tslib_1, React, Separator_1, Styling_1, Stack_1, Text_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
});
//# sourceMappingURL=Separator.Theming.Example.js.map