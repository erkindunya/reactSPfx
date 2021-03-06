"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ContextualMenu_1 = require("office-ui-fabric-react/lib/ContextualMenu");
var Button_1 = require("office-ui-fabric-react/lib/Button");
require("./ContextualMenuExample.scss");
var ContextualMenuSectionExample = /** @class */ (function (_super) {
    tslib_1.__extends(ContextualMenuSectionExample, _super);
    function ContextualMenuSectionExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContextualMenuSectionExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Button_1.DefaultButton, { text: "Click for ContextualMenu", menuProps: {
                    items: [
                        {
                            key: 'section1',
                            itemType: ContextualMenu_1.ContextualMenuItemType.Section,
                            sectionProps: {
                                topDivider: true,
                                bottomDivider: true,
                                title: 'Actions',
                                items: [
                                    {
                                        key: 'newItem',
                                        text: 'New'
                                    },
                                    {
                                        key: 'deleteItem',
                                        text: 'Delete'
                                    }
                                ]
                            }
                        },
                        {
                            key: 'section2',
                            itemType: ContextualMenu_1.ContextualMenuItemType.Section,
                            sectionProps: {
                                title: 'Social',
                                items: [
                                    {
                                        key: 'share',
                                        text: 'Share'
                                    },
                                    {
                                        key: 'print',
                                        text: 'Print'
                                    },
                                    {
                                        key: 'music',
                                        text: 'Music'
                                    }
                                ]
                            }
                        },
                        {
                            key: 'section3',
                            itemType: ContextualMenu_1.ContextualMenuItemType.Section,
                            sectionProps: {
                                title: 'Navigation',
                                items: [
                                    {
                                        key: 'Bing',
                                        text: 'Go to Bing',
                                        href: 'http://www.bing.com',
                                        target: '_blank'
                                    }
                                ]
                            }
                        }
                    ]
                } })));
    };
    return ContextualMenuSectionExample;
}(React.Component));
exports.ContextualMenuSectionExample = ContextualMenuSectionExample;
//# sourceMappingURL=ContextualMenu.Section.Example.js.map