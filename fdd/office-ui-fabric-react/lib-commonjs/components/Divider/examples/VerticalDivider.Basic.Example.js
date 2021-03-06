"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Divider_1 = require("office-ui-fabric-react/lib/Divider");
var Styling_1 = require("office-ui-fabric-react/lib/Styling");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var getExampleClassNames = Utilities_1.memoizeFunction(function () {
    var exampleHeight = 40;
    return Styling_1.mergeStyleSets({
        wrapper: {
            height: 40,
            backgroundColor: '#F4F4F4',
            padding: '0 10px'
        },
        text: {
            display: 'inline-block',
            padding: '0 8px',
            height: exampleHeight,
            lineHeight: exampleHeight,
            verticalAlign: 'top',
            margin: 'auto'
        }
    });
});
var VerticalDividerBasicExample = /** @class */ (function (_super) {
    tslib_1.__extends(VerticalDividerBasicExample, _super);
    function VerticalDividerBasicExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VerticalDividerBasicExample.prototype.render = function () {
        var classNames = getExampleClassNames();
        return (React.createElement("div", { className: classNames.wrapper },
            React.createElement("p", { className: classNames.text }, " Some text before the divider. "),
            React.createElement(Divider_1.VerticalDivider, null),
            React.createElement("p", { className: classNames.text }, "Some text after the divider. ")));
    };
    return VerticalDividerBasicExample;
}(React.Component));
exports.VerticalDividerBasicExample = VerticalDividerBasicExample;
//# sourceMappingURL=VerticalDivider.Basic.Example.js.map