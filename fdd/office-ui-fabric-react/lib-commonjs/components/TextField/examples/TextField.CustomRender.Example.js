"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var TextField_1 = require("office-ui-fabric-react/lib/TextField");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Callout_1 = require("office-ui-fabric-react/lib/Callout");
var Stack_1 = require("office-ui-fabric-react/lib/Stack");
var Text_1 = require("office-ui-fabric-react/lib/Text");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var Styling_1 = require("office-ui-fabric-react/lib/Styling");
var stackTokens = { childrenGap: 20 };
var TextFieldCustomRenderExample = /** @class */ (function (_super) {
    tslib_1.__extends(TextFieldCustomRenderExample, _super);
    function TextFieldCustomRenderExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = { isCalloutVisible: false };
        _this._descriptionId = Utilities_1.getId('description');
        _this._iconButtonId = Utilities_1.getId('iconButton');
        _this._onRenderDescription = function (props) {
            var theme = Styling_1.getTheme();
            return (React.createElement(Text_1.Text, { variant: "small", styles: { root: { color: theme.palette.green, fontWeight: Styling_1.FontWeights.bold } } }, props.description));
        };
        _this._onRenderLabel = function (props) {
            return (React.createElement(React.Fragment, null,
                React.createElement(Stack_1.Stack, { horizontal: true, verticalAlign: "center" },
                    React.createElement("span", null, props.label),
                    React.createElement(Button_1.IconButton, { id: _this._iconButtonId, iconProps: { iconName: 'Info' }, title: "Info", ariaLabel: "Info", onClick: _this._onIconClick, styles: { root: { marginBottom: -3 } } })),
                _this.state.isCalloutVisible && (React.createElement(Callout_1.Callout, { target: '#' + _this._iconButtonId, setInitialFocus: true, onDismiss: _this._onDismiss, ariaDescribedBy: _this._descriptionId, role: "alertdialog" },
                    React.createElement(Stack_1.Stack, { tokens: stackTokens, horizontalAlign: "start", maxWidth: 300, styles: { root: { padding: 20 } } },
                        React.createElement("span", { id: _this._descriptionId }, "The custom label includes an IconButton that displays this Callout on click."),
                        React.createElement(Button_1.DefaultButton, { onClick: _this._onDismiss }, "Close"))))));
        };
        _this._onIconClick = function () {
            _this.setState({ isCalloutVisible: !_this.state.isCalloutVisible });
        };
        _this._onDismiss = function () {
            _this.setState({ isCalloutVisible: false });
        };
        return _this;
    }
    TextFieldCustomRenderExample.prototype.render = function () {
        return (React.createElement(Stack_1.Stack, { tokens: stackTokens, maxWidth: 300 },
            React.createElement(TextField_1.TextField, { label: "Custom label rendering", onRenderLabel: this._onRenderLabel, description: "Click the (i) icon!" }),
            React.createElement(TextField_1.TextField, { label: "Custom description rendering", description: "A colorful description!", onRenderDescription: this._onRenderDescription })));
    };
    return TextFieldCustomRenderExample;
}(React.Component));
exports.TextFieldCustomRenderExample = TextFieldCustomRenderExample;
//# sourceMappingURL=TextField.CustomRender.Example.js.map