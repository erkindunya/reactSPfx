"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var CommandBar_1 = require("office-ui-fabric-react/lib/CommandBar");
var KeytipSetup_1 = require("./KeytipSetup");
var Modal_1 = require("office-ui-fabric-react/lib/Modal");
var MessageBar_1 = require("office-ui-fabric-react/lib/MessageBar");
var KeytipsCommandBarExample = /** @class */ (function (_super) {
    tslib_1.__extends(KeytipsCommandBarExample, _super);
    function KeytipsCommandBarExample(props) {
        var _this = _super.call(this, props) || this;
        _this._showModal = function () {
            _this.setState({ showModal: true });
        };
        _this._hideModal = function () {
            _this.setState({ showModal: false });
        };
        _this._showMessageBar = function () {
            _this.setState({ showMessageBar: true });
            // Hide the MessageBar after 2 seconds
            setTimeout(_this._hideMessageBar, 2000);
        };
        _this._hideMessageBar = function () {
            _this.setState({ showMessageBar: false });
        };
        _this.state = {
            showModal: false,
            showMessageBar: false
        };
        return _this;
    }
    /* tslint:disable:jsx-ban-props jsx-no-lambda */
    KeytipsCommandBarExample.prototype.render = function () {
        return (React.createElement("div", { style: { height: 100 } },
            React.createElement(CommandBar_1.CommandBar, { items: [
                    {
                        key: 'commandBarItem1',
                        text: 'New',
                        iconProps: {
                            iconName: 'Add'
                        },
                        onClick: this._showModal,
                        keytipProps: KeytipSetup_1.keytipMap.CommandButton1Keytip
                    },
                    {
                        key: 'commandBarItem2',
                        text: 'Upload',
                        iconProps: {
                            iconName: 'Upload'
                        },
                        onClick: this._showMessageBar,
                        keytipProps: KeytipSetup_1.keytipMap.CommandButton2Keytip
                    }
                ], farItems: [
                    {
                        key: 'farItem1',
                        text: 'Options',
                        iconProps: {
                            iconName: 'SortLines'
                        },
                        keytipProps: KeytipSetup_1.keytipMap.CommandButton3Keytip,
                        subMenuProps: {
                            items: [
                                {
                                    key: 'emailMessage',
                                    text: 'Send Email',
                                    iconProps: {
                                        iconName: 'Mail'
                                    },
                                    keytipProps: KeytipSetup_1.keytipMap.SubmenuKeytip1,
                                    onClick: function () {
                                        console.log('test1');
                                    }
                                },
                                {
                                    key: 'calendarEvent',
                                    text: 'Make Calendar Event',
                                    iconProps: {
                                        iconName: 'Calendar'
                                    },
                                    keytipProps: KeytipSetup_1.keytipMap.SubmenuKeytip2,
                                    onClick: function () {
                                        console.log('test2');
                                    },
                                    subMenuProps: {
                                        items: [
                                            {
                                                key: 'testButton',
                                                text: 'Add to Outlook',
                                                keytipProps: KeytipSetup_1.keytipMap.SubmenuKeytip3,
                                                onClick: function () {
                                                    console.log('test3');
                                                }
                                            },
                                            {
                                                key: 'testButton2',
                                                text: 'Go to Bing',
                                                keytipProps: KeytipSetup_1.keytipMap.SubmenuKeytip4,
                                                href: 'http://www.bing.com',
                                                target: '_blank'
                                            }
                                        ]
                                    }
                                },
                                {
                                    key: 'splitButtonTest',
                                    text: 'Other...',
                                    split: true,
                                    keytipProps: KeytipSetup_1.keytipMap.SubmenuKeytip5,
                                    subMenuProps: {
                                        items: [
                                            {
                                                key: 'splitButtonSubMenu1',
                                                text: 'Submenu Item w/o Keytip'
                                            },
                                            {
                                                key: 'splitButtonSubMenu2',
                                                text: 'Submenu Item w/o Keytip'
                                            }
                                        ]
                                    }
                                }
                            ]
                        }
                    }
                ] }),
            this.state.showMessageBar && React.createElement(MessageBar_1.MessageBar, { messageBarType: MessageBar_1.MessageBarType.success }, "Success Uploading"),
            React.createElement(Modal_1.Modal, { isOpen: this.state.showModal, onDismiss: this._hideModal, isBlocking: false },
                React.createElement("h3", null, "New Modal"))));
    };
    return KeytipsCommandBarExample;
}(React.Component));
exports.KeytipsCommandBarExample = KeytipsCommandBarExample;
//# sourceMappingURL=Keytips.CommandBar.Example.js.map