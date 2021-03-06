define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Separator", "office-ui-fabric-react/lib/Stack", "office-ui-fabric-react/lib/Text", "office-ui-fabric-react/lib/Icon"], function (require, exports, tslib_1, React, Separator_1, Stack_1, Text_1, Icon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var iconStyles = {
        root: {
            fontSize: '24px',
            height: '24px',
            width: '24px'
        }
    };
    var SeparatorIconExample = /** @class */ (function (_super) {
        tslib_1.__extends(SeparatorIconExample, _super);
        function SeparatorIconExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        SeparatorIconExample.prototype.render = function () {
            return (React.createElement(Stack_1.Stack, { gap: 12 },
                React.createElement(Text_1.Text, null, "Horizontal center aligned with an icon as content"),
                React.createElement(Separator_1.Separator, null,
                    React.createElement(Icon_1.Icon, { iconName: "Clock", styles: iconStyles }))));
        };
        return SeparatorIconExample;
    }(React.Component));
    exports.SeparatorIconExample = SeparatorIconExample;
});
//# sourceMappingURL=Separator.Icon.Example.js.map