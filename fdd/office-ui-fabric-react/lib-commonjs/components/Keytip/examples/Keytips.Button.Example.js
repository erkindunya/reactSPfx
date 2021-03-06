"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var KeytipSetup_1 = require("./KeytipSetup");
var Toggle_1 = require("office-ui-fabric-react/lib/Toggle");
var Stack_1 = require("office-ui-fabric-react/lib/Stack");
var stackTokens = { childrenGap: 20 };
var marginBottom = { root: { marginBottom: 28 } };
var KeytipsButtonExample = /** @class */ (function (_super) {
    tslib_1.__extends(KeytipsButtonExample, _super);
    function KeytipsButtonExample(props) {
        var _this = _super.call(this, props) || this;
        _this._toggleDisabled = function (ev, checked) {
            _this.setState({ btnDisabled: !checked });
        };
        _this.state = {
            btnDisabled: false
        };
        return _this;
    }
    /* tslint:disable:jsx-no-lambda */
    KeytipsButtonExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("p", null, "When multiple Keytips start with the same character, typing that character will filter the visible keytips."),
            React.createElement(Stack_1.Stack, { horizontal: true, tokens: stackTokens },
                React.createElement(Button_1.DefaultButton, { keytipProps: KeytipSetup_1.keytipMap.Button, text: "Button", onClick: function () {
                        console.log('Button');
                    } }),
                React.createElement(Button_1.CompoundButton, { styles: marginBottom, keytipProps: KeytipSetup_1.keytipMap.CompoundButton, text: "Compound Button", secondaryText: 'With a Keytip', onClick: function () {
                        console.log('Compound Button');
                    } }),
                React.createElement(Button_1.DefaultButton, { keytipProps: KeytipSetup_1.keytipMap.ButtonWithMenu, text: "Button with Menu", onClick: function () {
                        console.log('Button with Menu');
                    }, menuProps: {
                        items: [
                            {
                                key: 'buttonMenuItem1',
                                text: 'Menu Item 1',
                                keytipProps: KeytipSetup_1.keytipMap.ButtonMenuItem1
                            },
                            {
                                key: 'buttonMenuItem2',
                                text: 'Menu Item 2',
                                keytipProps: KeytipSetup_1.keytipMap.ButtonMenuItem2
                            }
                        ]
                    } }),
                React.createElement(Button_1.DefaultButton, { styles: { splitButtonContainer: { height: 32 } }, keytipProps: KeytipSetup_1.keytipMap.SplitButton, text: "Split Button", split: true, onClick: function () {
                        console.log('Split Button');
                    }, menuProps: {
                        items: [
                            {
                                key: 'splitButtonMenuButton1',
                                text: 'Split Button Menu Item 1',
                                keytipProps: KeytipSetup_1.keytipMap.SplitButtonMenuItem1
                            },
                            {
                                key: 'splitButtonMenuButton2',
                                text: 'Split Button Menu Item 2',
                                keytipProps: KeytipSetup_1.keytipMap.SplitButtonMenuItem2
                            }
                        ]
                    } }),
                React.createElement(Button_1.DefaultButton, { text: "I do not have a keytip" })),
            React.createElement("p", null, "The 'offset' prop can be used to position the keytip a set distance from the top-left corner of the element."),
            React.createElement(Button_1.DefaultButton, { styles: marginBottom, keytipProps: KeytipSetup_1.keytipMap.ButtonOffset, text: "Button keytip offset 10x10", onClick: function () {
                    console.log('Button');
                } }),
            React.createElement("p", null, "When a Keytip's corresponding component is disabled, the keytip still appears but cannot be triggered."),
            React.createElement(Toggle_1.Toggle, { onText: 'Enabled', offText: 'Disabled', defaultChecked: !this.state.btnDisabled, onChange: this._toggleDisabled }),
            React.createElement(Button_1.DefaultButton, { keytipProps: KeytipSetup_1.keytipMap.DisabledButton, disabled: this.state.btnDisabled, text: (this.state.btnDisabled ? 'Disabled' : 'Enabled') + ' Button', onClick: function () {
                    console.log('Disabled Button');
                } })));
    };
    return KeytipsButtonExample;
}(React.Component));
exports.KeytipsButtonExample = KeytipsButtonExample;
//# sourceMappingURL=Keytips.Button.Example.js.map