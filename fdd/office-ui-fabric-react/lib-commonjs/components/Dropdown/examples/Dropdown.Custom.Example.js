"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Dropdown_1 = require("office-ui-fabric-react/lib/Dropdown");
var Icon_1 = require("office-ui-fabric-react/lib/Icon");
var DropdownCustomExample = /** @class */ (function (_super) {
    tslib_1.__extends(DropdownCustomExample, _super);
    function DropdownCustomExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._onRenderOption = function (option) {
            return (React.createElement("div", null,
                option.data && option.data.icon && (React.createElement(Icon_1.Icon, { style: { marginRight: '8px' }, iconName: option.data.icon, "aria-hidden": "true", title: option.data.icon })),
                React.createElement("span", null, option.text)));
        };
        _this._onRenderTitle = function (options) {
            var option = options[0];
            return (React.createElement("div", null,
                option.data && option.data.icon && (React.createElement(Icon_1.Icon, { style: { marginRight: '8px' }, iconName: option.data.icon, "aria-hidden": "true", title: option.data.icon })),
                React.createElement("span", null, option.text)));
        };
        _this._onRenderPlaceholder = function (props) {
            return (React.createElement("div", { className: "dropdownExample-placeholder" },
                React.createElement(Icon_1.Icon, { style: { marginRight: '8px' }, iconName: 'MessageFill', "aria-hidden": "true" }),
                React.createElement("span", null, props.placeholder)));
        };
        _this._onRenderCaretDown = function (props) {
            return React.createElement(Icon_1.Icon, { iconName: "CirclePlus" });
        };
        return _this;
    }
    DropdownCustomExample.prototype.render = function () {
        return (React.createElement(Dropdown_1.Dropdown, { placeholder: "Select an option", label: "Custom example", ariaLabel: "Custom dropdown example", onRenderPlaceholder: this._onRenderPlaceholder, onRenderTitle: this._onRenderTitle, onRenderOption: this._onRenderOption, onRenderCaretDown: this._onRenderCaretDown, styles: { dropdown: { width: 300 } }, options: [
                { key: 'Header', text: 'Options', itemType: Dropdown_1.DropdownMenuItemType.Header },
                { key: 'A', text: 'Option a', data: { icon: 'Memo' } },
                { key: 'B', text: 'Option b', data: { icon: 'Print' } },
                { key: 'C', text: 'Option c', data: { icon: 'ShoppingCart' } },
                { key: 'D', text: 'Option d', data: { icon: 'Train' } },
                { key: 'E', text: 'Option e', data: { icon: 'Repair' } },
                { key: 'divider_2', text: '-', itemType: Dropdown_1.DropdownMenuItemType.Divider },
                { key: 'Header2', text: 'More options', itemType: Dropdown_1.DropdownMenuItemType.Header },
                { key: 'F', text: 'Option f', data: { icon: 'Running' } },
                { key: 'G', text: 'Option g', data: { icon: 'EmojiNeutral' } },
                { key: 'H', text: 'Option h', data: { icon: 'ChatInviteFriend' } },
                { key: 'I', text: 'Option i', data: { icon: 'SecurityGroup' } },
                { key: 'J', text: 'Option j', data: { icon: 'AddGroup' } }
            ] }));
    };
    return DropdownCustomExample;
}(React.PureComponent));
exports.DropdownCustomExample = DropdownCustomExample;
//# sourceMappingURL=Dropdown.Custom.Example.js.map