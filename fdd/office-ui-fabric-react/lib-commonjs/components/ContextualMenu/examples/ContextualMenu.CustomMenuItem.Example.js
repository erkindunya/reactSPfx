"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ContextualMenu_1 = require("office-ui-fabric-react/lib/ContextualMenu");
var Button_1 = require("office-ui-fabric-react/lib/Button");
require("./ContextualMenuExample.scss");
var ContextualMenuWithCustomMenuItemExample = /** @class */ (function (_super) {
    tslib_1.__extends(ContextualMenuWithCustomMenuItemExample, _super);
    function ContextualMenuWithCustomMenuItemExample(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            showCallout: false
        };
        return _this;
    }
    ContextualMenuWithCustomMenuItemExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Button_1.DefaultButton, { text: "Click for ContextualMenu", menuProps: {
                    shouldFocusOnMount: true,
                    items: [
                        {
                            key: 'newItem',
                            text: 'New'
                        },
                        {
                            key: 'divider_1',
                            itemType: ContextualMenu_1.ContextualMenuItemType.Divider
                        },
                        {
                            key: 'rename',
                            text: 'Rename'
                        },
                        {
                            key: 'edit',
                            text: 'Edit'
                        },
                        {
                            key: 'properties',
                            text: 'Properties'
                        },
                        {
                            key: 'disabled',
                            text: 'Disabled item',
                            disabled: true
                        }
                    ],
                    contextualMenuItemAs: function (props) { return React.createElement("div", null,
                        "Custom rendered ",
                        props.item.text); }
                } })));
    };
    return ContextualMenuWithCustomMenuItemExample;
}(React.Component));
exports.ContextualMenuWithCustomMenuItemExample = ContextualMenuWithCustomMenuItemExample;
//# sourceMappingURL=ContextualMenu.CustomMenuItem.Example.js.map