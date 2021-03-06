"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var es6_promise_1 = require("es6-promise");
var React = require("react");
var TextField_1 = require("office-ui-fabric-react/lib/TextField");
var Stack_1 = require("office-ui-fabric-react/lib/Stack");
var Toggle_1 = require("office-ui-fabric-react/lib/Toggle");
var TextFieldErrorMessageExample = /** @class */ (function (_super) {
    tslib_1.__extends(TextFieldErrorMessageExample, _super);
    function TextFieldErrorMessageExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showFields: false
        };
        _this._toggleShowFields = function (_, displayEnabled) {
            _this.setState({ showFields: displayEnabled });
        };
        _this._getErrorMessage = function (value) {
            return value.length < 3 ? '' : "Input value length must be less than 3. Actual length is " + value.length + ".";
        };
        _this._getErrorMessagePromise = function (value) {
            return new es6_promise_1.Promise(function (resolve) {
                // resolve the promise after 3 second.
                setTimeout(function () { return resolve(_this._getErrorMessage(value)); }, 5000);
            });
        };
        return _this;
    }
    TextFieldErrorMessageExample.prototype.render = function () {
        var showFields = this.state.showFields;
        return (React.createElement(Stack_1.Stack, { tokens: { childrenGap: 20 }, maxWidth: 350 },
            React.createElement(Toggle_1.Toggle, { label: "Show text fields", inlineLabel: true, checked: showFields, onChange: this._toggleShowFields }),
            showFields && (React.createElement(React.Fragment, null,
                React.createElement("strong", null, "Hint: the input length must be less than 3."),
                React.createElement(TextField_1.TextField, { label: "String-based validation", onGetErrorMessage: this._getErrorMessage }),
                React.createElement(TextField_1.TextField, { label: "Promise-based validation", onGetErrorMessage: this._getErrorMessagePromise }),
                React.createElement(TextField_1.TextField, { label: "String-based validation on render", defaultValue: "Shows an error message on render", onGetErrorMessage: this._getErrorMessage }),
                React.createElement(TextField_1.TextField, { label: "String-based validation only on change", defaultValue: "Validates only on input change, not on render", onGetErrorMessage: this._getErrorMessage, validateOnLoad: false }),
                React.createElement(TextField_1.TextField, { label: "Promise-based validation", defaultValue: "Shows an error message 5 seconds after render", onGetErrorMessage: this._getErrorMessagePromise }),
                React.createElement(TextField_1.TextField, { label: "Both description and error message", defaultValue: "Shows description and error message on render", description: "Field description", onGetErrorMessage: this._getErrorMessage }),
                React.createElement(TextField_1.TextField, { label: "Deferred string-based validation", placeholder: "Validates after user stops typing for 2 seconds", onGetErrorMessage: this._getErrorMessage, deferredValidationTime: 2000 }),
                React.createElement(TextField_1.TextField, { label: "Validates only on focus and blur", placeholder: "Validates only on input focus and blur", onGetErrorMessage: this._getErrorMessage, validateOnFocusIn: true, validateOnFocusOut: true }),
                React.createElement(TextField_1.TextField, { label: "Validates only on blur", placeholder: "Validates only on input blur", onGetErrorMessage: this._getErrorMessage, validateOnFocusOut: true }),
                React.createElement(TextField_1.TextField, { label: "Underlined field:", defaultValue: "This value is too long", underlined: true, onGetErrorMessage: this._getErrorMessage }),
                React.createElement(TextField_1.TextField, { label: "Uses the errorMessage property to set an error state", placeholder: "This field always has an error", errorMessage: "This is a statically set error message" })))));
    };
    return TextFieldErrorMessageExample;
}(React.Component));
exports.TextFieldErrorMessageExample = TextFieldErrorMessageExample;
//# sourceMappingURL=TextField.ErrorMessage.Example.js.map