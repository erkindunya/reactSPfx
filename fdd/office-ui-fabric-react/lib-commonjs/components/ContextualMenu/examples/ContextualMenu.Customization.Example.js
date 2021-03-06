"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ContextualMenu_1 = require("office-ui-fabric-react/lib/ContextualMenu");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var FocusZone_1 = require("office-ui-fabric-react/lib/FocusZone");
require("./ContextualMenuExample.scss");
var ContextualMenuCustomizationExample = /** @class */ (function (_super) {
    tslib_1.__extends(ContextualMenuCustomizationExample, _super);
    function ContextualMenuCustomizationExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._renderCharmMenuItem = function (item, dismissMenu) {
            return (React.createElement(Button_1.IconButton, { iconProps: { iconName: item.name }, className: "ms-ContextualMenu-customizationExample-icon ms-ContextualMenu-link", "data-is-focusable": true, onClick: dismissMenu }));
        };
        return _this;
    }
    ContextualMenuCustomizationExample.prototype.render = function () {
        return (React.createElement(Button_1.DefaultButton, { className: "ContextualMenuButton3", text: "Click for ContextualMenu", menuProps: {
                shouldFocusOnMount: true,
                directionalHint: ContextualMenu_1.DirectionalHint.bottomLeftEdge,
                className: 'ms-ContextualMenu-customizationExample',
                items: [
                    {
                        key: 'newItem',
                        text: 'New'
                    },
                    {
                        key: 'upload',
                        text: 'Upload'
                    },
                    {
                        key: 'divider_1',
                        itemType: ContextualMenu_1.ContextualMenuItemType.Divider
                    },
                    {
                        key: 'charm',
                        text: 'Charm',
                        className: 'Charm-List',
                        subMenuProps: {
                            focusZoneProps: { direction: FocusZone_1.FocusZoneDirection.bidirectional },
                            items: [
                                {
                                    key: 'none',
                                    text: 'None'
                                },
                                {
                                    key: 'bulb',
                                    text: 'Lightbulb',
                                    onRender: this._renderCharmMenuItem,
                                    className: 'ms-ContextualMenu-customizationExample-item'
                                },
                                {
                                    key: 'run',
                                    text: 'Running',
                                    onRender: this._renderCharmMenuItem,
                                    className: 'ms-ContextualMenu-customizationExample-item'
                                },
                                {
                                    key: 'plane',
                                    text: 'Airplane',
                                    onRender: this._renderCharmMenuItem,
                                    className: 'ms-ContextualMenu-customizationExample-item'
                                },
                                {
                                    key: 'page',
                                    text: 'Page',
                                    onRender: this._renderCharmMenuItem,
                                    className: 'ms-ContextualMenu-customizationExample-item'
                                },
                                {
                                    key: 'cake',
                                    text: 'Cake',
                                    onRender: this._renderCharmMenuItem,
                                    className: 'ms-ContextualMenu-customizationExample-item'
                                },
                                {
                                    key: 'soccer',
                                    text: 'Soccer',
                                    onRender: this._renderCharmMenuItem,
                                    className: 'ms-ContextualMenu-customizationExample-item'
                                },
                                {
                                    key: 'home',
                                    text: 'Home',
                                    onRender: this._renderCharmMenuItem,
                                    className: 'ms-ContextualMenu-customizationExample-item'
                                },
                                {
                                    key: 'emoji',
                                    text: 'Emoji2',
                                    onRender: this._renderCharmMenuItem,
                                    className: 'ms-ContextualMenu-customizationExample-item'
                                },
                                {
                                    key: 'work',
                                    text: 'Work',
                                    onRender: this._renderCharmMenuItem,
                                    className: 'ms-ContextualMenu-customizationExample-item'
                                },
                                {
                                    key: 'coffee',
                                    text: 'Coffee',
                                    onRender: this._renderCharmMenuItem,
                                    className: 'ms-ContextualMenu-customizationExample-item'
                                },
                                {
                                    key: 'people',
                                    text: 'People',
                                    onRender: this._renderCharmMenuItem,
                                    className: 'ms-ContextualMenu-customizationExample-item'
                                },
                                {
                                    key: 'stopwatch',
                                    text: 'Stopwatch',
                                    onRender: this._renderCharmMenuItem,
                                    className: 'ms-ContextualMenu-customizationExample-item'
                                },
                                {
                                    key: 'music',
                                    text: 'MusicInCollectionFill',
                                    onRender: this._renderCharmMenuItem,
                                    className: 'ms-ContextualMenu-customizationExample-item'
                                },
                                {
                                    key: 'lock',
                                    text: 'Lock',
                                    onRender: this._renderCharmMenuItem,
                                    className: 'ms-ContextualMenu-customizationExample-item'
                                }
                            ]
                        }
                    },
                    {
                        key: 'categories',
                        text: 'Categorize',
                        subMenuProps: {
                            items: [
                                {
                                    key: 'categories',
                                    text: 'categories',
                                    categoryList: [
                                        {
                                            name: 'Personal',
                                            color: 'yellow'
                                        },
                                        {
                                            name: 'Work',
                                            color: 'green'
                                        },
                                        {
                                            name: 'Birthday',
                                            color: 'blue'
                                        },
                                        {
                                            name: 'Spam',
                                            color: 'grey'
                                        },
                                        {
                                            name: 'Urgent',
                                            color: 'red'
                                        },
                                        {
                                            name: 'Hobbies',
                                            color: 'black'
                                        }
                                    ],
                                    onRender: this._renderCategoriesList
                                },
                                {
                                    key: 'divider_1',
                                    itemType: ContextualMenu_1.ContextualMenuItemType.Divider
                                },
                                {
                                    key: 'clear',
                                    text: 'Clear categories'
                                },
                                {
                                    key: 'manage',
                                    text: 'Manage categories'
                                }
                            ]
                        }
                    }
                ]
            } }));
    };
    ContextualMenuCustomizationExample.prototype._renderCategoriesList = function (item) {
        return (React.createElement("ul", { className: "ms-ContextualMenu-customizationExample-categoriesList" },
            React.createElement("li", { className: "ms-ContextualMenu-item" }, item.categoryList.map(function (category) { return (React.createElement(Button_1.DefaultButton, { className: "ms-ContextualMenu-link ms-ContextualMenu-customizationExample-button", role: "menuitem", key: category.name },
                React.createElement("div", null,
                    React.createElement("span", { className: "ms-ContextualMenu-icon ms-ContextualMenu-customizationExample-categorySwatch", style: { backgroundColor: category.color } }),
                    React.createElement("span", { className: "ms-ContextualMenu-itemText" }, category.name)))); }))));
    };
    return ContextualMenuCustomizationExample;
}(React.Component));
exports.ContextualMenuCustomizationExample = ContextualMenuCustomizationExample;
//# sourceMappingURL=ContextualMenu.Customization.Example.js.map