"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var ButtonToggleExample = /** @class */ (function (_super) {
    tslib_1.__extends(ButtonToggleExample, _super);
    function ButtonToggleExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            muted: false
        };
        return _this;
    }
    ButtonToggleExample.prototype.render = function () {
        var _this = this;
        var _a = this.props, disabled = _a.disabled, checked = _a.checked;
        // tslint:disable:jsx-no-lambda
        return (React.createElement("div", null,
            React.createElement("div", null,
                React.createElement(Button_1.DefaultButton, { "data-automation-id": "test", allowDisabledFocus: true, disabled: disabled, toggle: true, checked: this.state.muted || checked, text: this.state.muted ? 'Volume Muted' : 'Volume Unmuted', onClick: function () {
                        _this.setState({ muted: !_this.state.muted });
                    } }))));
    };
    return ButtonToggleExample;
}(React.Component));
exports.ButtonToggleExample = ButtonToggleExample;
//# sourceMappingURL=Button.Toggle.Example.js.map