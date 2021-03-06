"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ContextualMenu_1 = require("office-ui-fabric-react/lib/ContextualMenu");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var FocusZone_1 = require("office-ui-fabric-react/lib/FocusZone");
require("./ContextualMenuExample.scss");
var ContextualMenuCustomizationWithNoWrapExample = /** @class */ (function (_super) {
    tslib_1.__extends(ContextualMenuCustomizationWithNoWrapExample, _super);
    function ContextualMenuCustomizationWithNoWrapExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._renderCharmMenuItem = function (item, dismissMenu) {
            return (React.createElement(Button_1.IconButton, tslib_1.__assign({}, item, { iconProps: { iconName: item.text }, className: "ms-ContextualMenu-customizationExample-icon ms-ContextualMenu-link", "data-is-focusable": true, onClick: dismissMenu, "data-no-vertical-wrap": true })));
        };
        return _this;
    }
    ContextualMenuCustomizationWithNoWrapExample.prototype.render = function () {
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
                            focusZoneProps: {
                                direction: FocusZone_1.FocusZoneDirection.bidirectional,
                                checkForNoWrap: true
                            },
                            items: [
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
                                },
                                {
                                    key: 'item3',
                                    text: 'Item 3',
                                    'data-no-horizontal-wrap': true
                                },
                                {
                                    key: 'item4',
                                    text: 'Item 4',
                                    'data-no-horizontal-wrap': true
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
    ContextualMenuCustomizationWithNoWrapExample.prototype._renderCategoriesList = function (item) {
        return (React.createElement("ul", { className: "ms-ContextualMenu-customizationExample-categoriesList" },
            React.createElement("li", { className: "ms-ContextualMenu-item" }, item.categoryList.map(function (category) { return (React.createElement(Button_1.DefaultButton, { key: category.name, className: "ms-ContextualMenu-link ms-ContextualMenu-customizationExample-button", role: "menuitem" },
                React.createElement("div", null,
                    React.createElement("span", { className: "ms-ContextualMenu-icon ms-ContextualMenu-customizationExample-categorySwatch", style: { backgroundColor: category.color } }),
                    React.createElement("span", { className: "ms-ContextualMenu-itemText" }, category.name)))); }))));
    };
    return ContextualMenuCustomizationWithNoWrapExample;
}(React.Component));
exports.ContextualMenuCustomizationWithNoWrapExample = ContextualMenuCustomizationWithNoWrapExample;
//# sourceMappingURL=ContextualMenu.CustomizationWithNoWrap.Example.js.map