"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var TextField_1 = require("office-ui-fabric-react/lib/TextField");
require("./ContextualMenuExample.scss");
var ContextualMenuSubmenuExample = /** @class */ (function (_super) {
    tslib_1.__extends(ContextualMenuSubmenuExample, _super);
    function ContextualMenuSubmenuExample(props) {
        var _this = _super.call(this, props) || this;
        _this._onHoverDelayChanged = function (ev, newValue) {
            _this.setState({
                hoverDelay: Number(newValue) || 0
            });
        };
        _this.state = {
            hoverDelay: 250
        };
        return _this;
    }
    ContextualMenuSubmenuExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(TextField_1.TextField, { value: String(this.state.hoverDelay), label: "Hover delay (ms)", type: "number", onChange: this._onHoverDelayChanged, styles: {
                    subComponentStyles: {
                        label: { root: { display: 'inline-block', marginRight: '10px' } }
                    },
                    fieldGroup: { display: 'inline-flex', maxWidth: '100px' },
                    wrapper: { display: 'block', marginBottom: '10px' }
                } }),
            React.createElement(Button_1.DefaultButton, { text: "Click for ContextualMenu", menuProps: {
                    shouldFocusOnMount: true,
                    subMenuHoverDelay: this.state.hoverDelay,
                    items: [
                        {
                            key: 'newItem',
                            subMenuProps: {
                                items: [
                                    {
                                        key: 'emailMessage',
                                        text: 'Email message',
                                        title: 'Create an email'
                                    },
                                    {
                                        key: 'calendarEvent',
                                        text: 'Calendar event',
                                        title: 'Create a calendar event'
                                    }
                                ]
                            },
                            href: 'https://bing.com',
                            text: 'New',
                            target: '_blank'
                        },
                        {
                            key: 'share',
                            subMenuProps: {
                                items: [
                                    {
                                        key: 'sharetotwitter',
                                        text: 'Share to Twitter'
                                    },
                                    {
                                        key: 'sharetofacebook',
                                        text: 'Share to Facebook'
                                    },
                                    {
                                        key: 'sharetoemail',
                                        text: 'Share to Email',
                                        subMenuProps: {
                                            items: [
                                                {
                                                    key: 'sharetooutlook_1',
                                                    text: 'Share to Outlook',
                                                    title: 'Share to Outlook'
                                                },
                                                {
                                                    key: 'sharetogmail_1',
                                                    text: 'Share to Gmail',
                                                    title: 'Share to Gmail'
                                                }
                                            ]
                                        }
                                    }
                                ]
                            },
                            text: 'Share'
                        },
                        {
                            key: 'shareSplit',
                            split: true,
                            'aria-roledescription': 'split button',
                            subMenuProps: {
                                items: [
                                    {
                                        key: 'sharetotwittersplit',
                                        text: 'Share to Twitter'
                                    },
                                    {
                                        key: 'sharetofacebooksplit',
                                        text: 'Share to Facebook'
                                    },
                                    {
                                        key: 'sharetoemailsplit',
                                        text: 'Share to Email',
                                        subMenuProps: {
                                            items: [
                                                {
                                                    key: 'sharetooutlooksplit_1',
                                                    text: 'Share to Outlook',
                                                    title: 'Share to Outlook'
                                                },
                                                {
                                                    key: 'sharetogmailsplit_1',
                                                    text: 'Share to Gmail',
                                                    title: 'Share to Gmail'
                                                }
                                            ]
                                        }
                                    }
                                ]
                            },
                            text: 'Share w/ Split'
                        }
                    ]
                } })));
    };
    return ContextualMenuSubmenuExample;
}(React.Component));
exports.ContextualMenuSubmenuExample = ContextualMenuSubmenuExample;
//# sourceMappingURL=ContextualMenu.Submenu.Example.js.map