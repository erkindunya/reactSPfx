"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Callout_1 = require("office-ui-fabric-react/lib/Callout");
var CommandBar_1 = require("office-ui-fabric-react/lib/CommandBar");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
require("./CalloutExample.scss");
var CalloutFocusTrapExample = /** @class */ (function (_super) {
    tslib_1.__extends(CalloutFocusTrapExample, _super);
    function CalloutFocusTrapExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isCalloutVisible: false
        };
        // Use getId() to ensure that the callout title ID is unique on the page.
        // (It's also okay to use a plain string without getId() and manually ensure its uniqueness.)
        _this._titleId = Utilities_1.getId('callout-label');
        _this._onDismiss = function () {
            _this.setState({
                isCalloutVisible: !_this.state.isCalloutVisible
            });
        };
        return _this;
    }
    CalloutFocusTrapExample.prototype.render = function () {
        var _this = this;
        var isCalloutVisible = this.state.isCalloutVisible;
        return (React.createElement("div", { className: "ms-CalloutExample" },
            React.createElement("div", { className: "ms-CalloutBasicExample-buttonArea", ref: function (menuButton) { return (_this._menuButtonElement = menuButton); } },
                React.createElement(Button_1.DefaultButton, { onClick: this._onDismiss, text: isCalloutVisible ? 'Hide callout' : 'Show callout' })),
            isCalloutVisible ? (React.createElement("div", null,
                React.createElement(Callout_1.FocusTrapCallout, { role: "alertdialog", ariaLabelledBy: this._titleId, className: "ms-CalloutExample-callout", gapSpace: 0, target: this._menuButtonElement, onDismiss: this._onDismiss, setInitialFocus: true },
                    React.createElement("div", { className: "ms-CalloutExample-header" },
                        React.createElement("p", { className: "ms-CalloutExample-title", id: this._titleId }, "Callout title here")),
                    React.createElement("div", { className: "ms-CalloutExample-inner" },
                        React.createElement("div", { className: "ms-CalloutExample-content" },
                            React.createElement("p", { className: "ms-CalloutExample-subText" }, "Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom."))),
                    React.createElement(CommandBar_1.CommandBar, { items: this.props.items })))) : null));
    };
    return CalloutFocusTrapExample;
}(React.Component));
exports.CalloutFocusTrapExample = CalloutFocusTrapExample;
//# sourceMappingURL=Callout.FocusTrap.Example.js.map