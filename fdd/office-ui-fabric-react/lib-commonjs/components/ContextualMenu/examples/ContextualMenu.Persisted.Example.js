"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ContextualMenu_1 = require("office-ui-fabric-react/lib/ContextualMenu");
var Button_1 = require("office-ui-fabric-react/lib/Button");
require("./ContextualMenuExample.scss");
var ContextualMenuPersistedExample = /** @class */ (function (_super) {
    tslib_1.__extends(ContextualMenuPersistedExample, _super);
    function ContextualMenuPersistedExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showCallout: false
        };
        return _this;
    }
    ContextualMenuPersistedExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Button_1.DefaultButton, { text: "Click for ContextualMenu", persistMenu: true, menuProps: {
                    shouldFocusOnMount: true,
                    shouldFocusOnContainer: true,
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
                            key: 'divider_1',
                            itemType: ContextualMenu_1.ContextualMenuItemType.Divider
                        },
                        {
                            key: 'rename',
                            text: 'Rename',
                            onClick: function () { return console.log('Rename clicked'); }
                        },
                        {
                            key: 'edit',
                            text: 'Edit',
                            onClick: function () { return console.log('Edit clicked'); }
                        },
                        {
                            key: 'properties',
                            text: 'Properties',
                            onClick: function () { return console.log('Properties clicked'); }
                        },
                        {
                            key: 'linkNoTarget',
                            text: 'Link same window',
                            href: 'http://bing.com'
                        },
                        {
                            key: 'linkWithTarget',
                            text: 'Link new window',
                            href: 'http://bing.com',
                            target: '_blank'
                        },
                        {
                            key: 'linkWithOnClick',
                            name: 'Link click',
                            href: 'http://bing.com',
                            onClick: function (ev) {
                                alert('Link clicked');
                                ev.preventDefault();
                            },
                            target: '_blank'
                        },
                        {
                            key: 'disabled',
                            text: 'Disabled item',
                            disabled: true,
                            onClick: function () { return console.error('Disabled item should not be clickable.'); }
                        }
                    ]
                } })));
    };
    return ContextualMenuPersistedExample;
}(React.Component));
exports.ContextualMenuPersistedExample = ContextualMenuPersistedExample;
//# sourceMappingURL=ContextualMenu.Persisted.Example.js.map