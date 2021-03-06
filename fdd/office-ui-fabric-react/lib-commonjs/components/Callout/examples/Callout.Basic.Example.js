"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Callout_1 = require("office-ui-fabric-react/lib/Callout");
var Link_1 = require("office-ui-fabric-react/lib/Link");
var Styling_1 = require("office-ui-fabric-react/lib/Styling");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
// Themed styles for the example.
var theme = Styling_1.getTheme();
var styles = Styling_1.mergeStyleSets({
    buttonArea: {
        verticalAlign: 'top',
        display: 'inline-block',
        textAlign: 'center'
    },
    callout: {
        maxWidth: 300
    },
    header: {
        padding: '18px 24px 12px'
    },
    title: [
        theme.fonts.xLarge,
        {
            margin: 0,
            color: theme.palette.neutralPrimary,
            fontWeight: Styling_1.FontWeights.semilight
        }
    ],
    inner: {
        height: '100%',
        padding: '0 24px 20px'
    },
    actions: {
        position: 'relative',
        marginTop: 20,
        width: '100%',
        whiteSpace: 'nowrap'
    },
    link: [
        theme.fonts.medium,
        {
            color: theme.palette.neutralPrimary
        }
    ]
});
// Example code
var CalloutBasicExample = /** @class */ (function (_super) {
    tslib_1.__extends(CalloutBasicExample, _super);
    function CalloutBasicExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isCalloutVisible: false
        };
        _this._menuButtonElement = React.createRef();
        // Use getId() to ensure that the callout label and description IDs are unique on the page.
        // (It's also okay to use plain strings without getId() and manually ensure their uniqueness.)
        _this._labelId = Utilities_1.getId('callout-label');
        _this._descriptionId = Utilities_1.getId('callout-description');
        _this._onShowMenuClicked = function () {
            _this.setState({
                isCalloutVisible: !_this.state.isCalloutVisible
            });
        };
        _this._onCalloutDismiss = function () {
            _this.setState({
                isCalloutVisible: false
            });
        };
        return _this;
    }
    CalloutBasicExample.prototype.render = function () {
        var isCalloutVisible = this.state.isCalloutVisible;
        return (React.createElement("div", null,
            React.createElement("div", { className: styles.buttonArea, ref: this._menuButtonElement },
                React.createElement(Button_1.DefaultButton, { onClick: this._onShowMenuClicked, text: isCalloutVisible ? 'Hide callout' : 'Show callout' })),
            React.createElement(Callout_1.Callout, { className: "ms-CalloutExample-callout", ariaLabelledBy: this._labelId, ariaDescribedBy: this._descriptionId, role: "alertdialog", gapSpace: 0, target: this._menuButtonElement.current, onDismiss: this._onCalloutDismiss, setInitialFocus: true, hidden: !this.state.isCalloutVisible },
                React.createElement("div", { className: "ms-CalloutExample-header" },
                    React.createElement("p", { className: "ms-CalloutExample-title", id: this._labelId }, "All of your favorite people")),
                React.createElement("div", { className: "ms-CalloutExample-inner" },
                    React.createElement("div", { className: "ms-CalloutExample-content" },
                        React.createElement("p", { className: "ms-CalloutExample-subText", id: this._descriptionId }, "Message body is optional. If help documentation is available, consider adding a link to learn more at the bottom.")),
                    React.createElement("div", { className: "ms-CalloutExample-actions" },
                        React.createElement(Link_1.Link, { className: "ms-CalloutExample-link", href: "http://microsoft.com", target: "_blank" }, "Go to microsoft"))))));
    };
    return CalloutBasicExample;
}(React.Component));
exports.CalloutBasicExample = CalloutBasicExample;
//# sourceMappingURL=Callout.Basic.Example.js.map