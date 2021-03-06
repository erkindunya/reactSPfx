define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/ContextualMenu", "office-ui-fabric-react/lib/Button", "./ContextualMenuExample.scss"], function (require, exports, tslib_1, React, ContextualMenu_1, Button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContextualMenuBasicExample = /** @class */ (function (_super) {
        tslib_1.__extends(ContextualMenuBasicExample, _super);
        function ContextualMenuBasicExample(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                showCallout: false
            };
            return _this;
        }
        ContextualMenuBasicExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(Button_1.DefaultButton, { text: "Click for ContextualMenu", menuProps: {
                        shouldFocusOnMount: true,
                        items: [
                            {
                                key: 'newItem',
                                text: 'New',
                                onClick: function () { return console.log('New clicked'); }
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
        return ContextualMenuBasicExample;
    }(React.Component));
    exports.ContextualMenuBasicExample = ContextualMenuBasicExample;
});
//# sourceMappingURL=ContextualMenu.Basic.Example.js.map