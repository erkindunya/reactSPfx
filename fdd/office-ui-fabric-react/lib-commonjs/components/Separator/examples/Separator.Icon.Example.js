"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Separator_1 = require("office-ui-fabric-react/lib/Separator");
var Stack_1 = require("office-ui-fabric-react/lib/Stack");
var Text_1 = require("office-ui-fabric-react/lib/Text");
var Icon_1 = require("office-ui-fabric-react/lib/Icon");
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
//# sourceMappingURL=Separator.Icon.Example.js.map