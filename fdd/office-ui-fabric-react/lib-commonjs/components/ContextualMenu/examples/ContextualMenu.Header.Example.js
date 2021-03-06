"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var ContextualMenu_1 = require("office-ui-fabric-react/lib/ContextualMenu");
require("./ContextualMenuExample.scss");
var ContextualMenuHeaderExample = /** @class */ (function (_super) {
    tslib_1.__extends(ContextualMenuHeaderExample, _super);
    function ContextualMenuHeaderExample() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContextualMenuHeaderExample.prototype.render = function () {
        return (React.createElement(Button_1.DefaultButton, { text: "Click for ContextualMenu", menuProps: {
                shouldFocusOnMount: true,
                items: [
                    {
                        key: 'Actions',
                        itemType: ContextualMenu_1.ContextualMenuItemType.Header,
                        text: 'Actions',
                        itemProps: {
                            lang: 'en-us'
                        }
                    },
                    {
                        key: 'upload',
                        iconProps: {
                            iconName: 'Upload',
                            style: {
                                color: 'salmon'
                            }
                        },
                        text: 'Upload',
                        title: 'Upload a file'
                    },
                    {
                        key: 'rename',
                        text: 'Rename'
                    },
                    {
                        key: 'share',
                        iconProps: {
                            iconName: 'Share'
                        },
                        subMenuProps: {
                            items: [
                                {
                                    key: 'sharetoemail',
                                    text: 'Share to Email',
                                    iconProps: {
                                        iconName: 'Mail'
                                    }
                                },
                                {
                                    key: 'sharetofacebook',
                                    text: 'Share to Facebook'
                                },
                                {
                                    key: 'sharetotwitter',
                                    text: 'Share to Twitter',
                                    iconProps: {
                                        iconName: 'Share'
                                    }
                                }
                            ]
                        },
                        text: 'Sharing'
                    },
                    {
                        key: 'navigation',
                        itemType: ContextualMenu_1.ContextualMenuItemType.Header,
                        text: 'Navigation'
                    },
                    {
                        key: 'properties',
                        text: 'Properties'
                    },
                    {
                        key: 'print',
                        iconProps: {
                            iconName: 'Print'
                        },
                        text: 'Print'
                    },
                    {
                        key: 'Bing',
                        text: 'Go to Bing',
                        href: 'http://www.bing.com',
                        target: '_blank'
                    }
                ]
            } }));
    };
    return ContextualMenuHeaderExample;
}(React.Component));
exports.ContextualMenuHeaderExample = ContextualMenuHeaderExample;
//# sourceMappingURL=ContextualMenu.Header.Example.js.map