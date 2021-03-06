"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Toggle_1 = require("office-ui-fabric-react/lib/Toggle");
var Link_1 = require("office-ui-fabric-react/lib/Link");
var Icon_1 = require("office-ui-fabric-react/lib/Icon");
var Tooltip_1 = require("office-ui-fabric-react/lib/Tooltip");
var ToggleBasicExample = /** @class */ (function (_super) {
    tslib_1.__extends(ToggleBasicExample, _super);
    function ToggleBasicExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToggleBasicExample.prototype.render = function () {
        // tslint:disable:jsx-no-lambda
        return (React.createElement("div", { style: { padding: '2px' } },
            React.createElement(Toggle_1.Toggle, { defaultChecked: true, label: "Enabled and checked", onText: "On", offText: "Off", onFocus: function () { return console.log('onFocus called'); }, onBlur: function () { return console.log('onBlur called'); }, onChange: this._onChange }),
            React.createElement(Toggle_1.Toggle, { defaultChecked: false, label: "Enabled and unchecked", onText: "On", offText: "Off", onFocus: function () { return console.log('onFocus called'); }, onBlur: function () { return console.log('onBlur called'); }, onChange: this._onChange }),
            React.createElement(Toggle_1.Toggle, { defaultChecked: true, disabled: true, label: "Disabled and checked", onText: "On", offText: "Off", onFocus: function () { return console.log('onFocus called'); }, onBlur: function () { return console.log('onBlur called'); } }),
            React.createElement(Toggle_1.Toggle, { defaultChecked: false, disabled: true, label: "Disabled and unchecked", onText: "On", offText: "Off", onFocus: function () { return console.log('onFocus called'); }, onBlur: function () { return console.log('onBlur called'); } }),
            React.createElement(Toggle_1.Toggle, { defaultChecked: true, label: "With inline label", inlineLabel: true, onText: "On", offText: "Off", onFocus: function () { return console.log('onFocus called'); }, onBlur: function () { return console.log('onBlur called'); }, onChange: this._onChange }),
            React.createElement(Toggle_1.Toggle, { defaultChecked: true, label: React.createElement("div", null,
                    React.createElement(Link_1.Link, { href: "https://bing.com", target: "_blank" }, "Learn More"),
                    React.createElement(Tooltip_1.TooltipHost, { content: "JSX Element Label" },
                        React.createElement(Icon_1.Icon, { iconName: "Info" }))), inlineLabel: true, onText: "On", offText: "Off", onFocus: function () { return console.log('onFocus called'); }, onBlur: function () { return console.log('onBlur called'); }, onChange: this._onChange }),
            React.createElement(Toggle_1.Toggle, { defaultChecked: true, disabled: true, label: "Disabled with inline label", inlineLabel: true, onText: "On", offText: "Off", onFocus: function () { return console.log('onFocus called'); }, onBlur: function () { return console.log('onBlur called'); } }),
            React.createElement(Toggle_1.Toggle, { defaultChecked: true, label: "With inline label and without onText and offText", inlineLabel: true, onFocus: function () { return console.log('onFocus called'); }, onBlur: function () { return console.log('onBlur called'); }, onChange: this._onChange }),
            React.createElement(Toggle_1.Toggle, { defaultChecked: true, label: React.createElement("div", null,
                    React.createElement(Link_1.Link, { href: "https://bing.com", target: "_blank" }, "Learn More"),
                    React.createElement(Tooltip_1.TooltipHost, { content: "JSX Element Label" },
                        React.createElement(Icon_1.Icon, { iconName: "Info" }))), inlineLabel: true, onFocus: function () { return console.log('onFocus called'); }, onBlur: function () { return console.log('onBlur called'); }, onChange: this._onChange }),
            React.createElement(Toggle_1.Toggle, { defaultChecked: true, disabled: true, label: "Disabled with inline label and without onText and offText", inlineLabel: true, onFocus: function () { return console.log('onFocus called'); }, onBlur: function () { return console.log('onBlur called'); } })));
    };
    ToggleBasicExample.prototype._onChange = function (ev, checked) {
        console.log('toggle is ' + (checked ? 'checked' : 'not checked'));
    };
    return ToggleBasicExample;
}(React.Component));
exports.ToggleBasicExample = ToggleBasicExample;
//# sourceMappingURL=Toggle.Basic.Example.js.map