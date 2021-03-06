"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Separator_1 = require("office-ui-fabric-react/lib/Separator");
var Styling_1 = require("office-ui-fabric-react/lib/Styling");
var Stack_1 = require("office-ui-fabric-react/lib/Stack");
var Text_1 = require("office-ui-fabric-react/lib/Text");
var HorizontalSeparatorStack = function (props) { return (React.createElement(React.Fragment, null, React.Children.map(props.children, function (child) {
    return React.createElement(Stack_1.Stack, { gap: 12 }, child);
}))); };
var VerticalSeparatorStack = function (props) { return (React.createElement(Stack_1.Stack, { horizontal: true, horizontalAlign: "space-evenly" }, React.Children.map(props.children, function (child) {
    return (React.createElement(Stack_1.Stack, { gap: 12, horizontalAlign: "center" }, child));
}))); };
var verticalStyle = Styling_1.mergeStyles({
    height: '200px'
});
var SeparatorBasicExample = /** @class */ (function (_super) {
    tslib_1.__extends(SeparatorBasicExample, _super);
    function SeparatorBasicExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SeparatorBasicExample.prototype.render = function () {
        var content = 'Today';
        return (React.createElement(Stack_1.Stack, { gap: 12 },
            React.createElement(HorizontalSeparatorStack, null,
                React.createElement(React.Fragment, null,
                    React.createElement(Text_1.Text, null, "Horizontal center aligned"),
                    React.createElement(Separator_1.Separator, null, content)),
                React.createElement(React.Fragment, null,
                    React.createElement(Text_1.Text, null, "Horizontal start aligned"),
                    React.createElement(Separator_1.Separator, { alignContent: "start" }, content)),
                React.createElement(React.Fragment, null,
                    React.createElement(Text_1.Text, null, "Horizontal end aligned"),
                    React.createElement(Separator_1.Separator, { alignContent: "end" }, content)),
                React.createElement(React.Fragment, null,
                    React.createElement(Text_1.Text, null, "Empty horizontal"),
                    React.createElement(Separator_1.Separator, null))),
            React.createElement(VerticalSeparatorStack, null,
                React.createElement(React.Fragment, null,
                    React.createElement(Text_1.Text, null, "Vertical center aligned"),
                    React.createElement(Stack_1.Stack.Item, { className: verticalStyle },
                        React.createElement(Separator_1.Separator, { vertical: true }, content))),
                React.createElement(React.Fragment, null,
                    React.createElement(Text_1.Text, null, "Vertical start aligned"),
                    React.createElement(Stack_1.Stack.Item, { className: verticalStyle },
                        React.createElement(Separator_1.Separator, { vertical: true, alignContent: "start" }, content))),
                React.createElement(React.Fragment, null,
                    React.createElement(Text_1.Text, null, "Vertical end aligned"),
                    React.createElement(Stack_1.Stack.Item, { className: verticalStyle },
                        React.createElement(Separator_1.Separator, { vertical: true }, content))),
                React.createElement(React.Fragment, null,
                    React.createElement(Text_1.Text, null, "Empty vertical"),
                    React.createElement(Stack_1.Stack.Item, { className: verticalStyle },
                        React.createElement(Separator_1.Separator, { vertical: true }))))));
    };
    return SeparatorBasicExample;
}(React.Component));
exports.SeparatorBasicExample = SeparatorBasicExample;
//# sourceMappingURL=Separator.Basic.Example.js.map