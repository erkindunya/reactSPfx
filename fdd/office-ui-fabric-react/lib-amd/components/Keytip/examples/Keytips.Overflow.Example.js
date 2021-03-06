define(["require", "exports", "tslib", "react", "./KeytipSetup", "office-ui-fabric-react/lib/OverflowSet", "office-ui-fabric-react/lib/Button"], function (require, exports, tslib_1, React, KeytipSetup_1, OverflowSet_1, Button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KeytipsOverflowExample = /** @class */ (function (_super) {
        tslib_1.__extends(KeytipsOverflowExample, _super);
        function KeytipsOverflowExample(props) {
            var _this = _super.call(this, props) || this;
            // Setup initial overflow items
            _this._initialItems = [
                {
                    key: 'item1',
                    name: 'Link 1',
                    onClick: function () {
                        return;
                    },
                    keytipProps: KeytipSetup_1.keytipMap.OverflowButton1
                },
                {
                    key: 'item2',
                    name: 'Link 2',
                    onClick: function () {
                        return;
                    },
                    keytipProps: KeytipSetup_1.keytipMap.OverflowButton2
                },
                {
                    key: 'item3',
                    name: 'Link 3',
                    onClick: function () {
                        return;
                    },
                    keytipProps: KeytipSetup_1.keytipMap.OverflowButton3
                }
            ];
            _this._initialOverflowItems = [
                {
                    key: 'item5',
                    name: 'Overflow Link 1',
                    keytipProps: tslib_1.__assign({}, KeytipSetup_1.keytipMap.OverflowButton5, { onExecute: function (el) {
                            if (el) {
                                el.click();
                            }
                            else {
                                console.log('first overflow item');
                            }
                        } }),
                    onClick: function () {
                        console.log('first overflow item');
                    }
                },
                {
                    key: 'item6',
                    name: 'Overflow Link 2',
                    keytipProps: tslib_1.__assign({}, KeytipSetup_1.keytipMap.OverflowButton6, { onExecute: function (el) {
                            if (el) {
                                el.click();
                            }
                            else {
                                console.log('second overflow item');
                            }
                        } }),
                    onClick: function () {
                        console.log('second overflow item');
                    },
                    subMenuProps: {
                        items: [
                            {
                                key: 'overflowSubMenu1',
                                name: 'Overflow Submenu Item 1',
                                keytipProps: KeytipSetup_1.keytipMap.OverflowSubMenuButton1
                            },
                            {
                                key: 'overflowSubMenu2',
                                name: 'Overflow Submenu Item 2'
                            }
                        ]
                    }
                }
            ];
            _this._onRenderOverflowButton = function (overflowItems) {
                return (React.createElement(Button_1.CommandBarButton, { menuIconProps: { iconName: 'More' }, menuProps: { items: overflowItems }, keytipProps: KeytipSetup_1.keytipMap.OverflowButton4 }));
            };
            _this._toggleOverflowItems = function () {
                _this.setState(function (prevState) {
                    var items = prevState.items;
                    var overflowItems = prevState.overflowItems;
                    if (overflowItems.length) {
                        // Move all overflowItems to items
                        items = items.concat(overflowItems);
                        overflowItems = [];
                    }
                    else {
                        // Move last two items to overflowItems
                        overflowItems = items.slice(-2);
                        items = items.slice(0, -2);
                    }
                    return { items: items, overflowItems: overflowItems };
                });
            };
            // Setup state
            _this.state = {
                items: _this._initialItems,
                overflowItems: _this._initialOverflowItems
            };
            return _this;
        }
        /* tslint:disable:jsx-ban-props jsx-no-lambda */
        KeytipsOverflowExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement("p", null, "Keytips in an overflow well have a special behavior. When a keytip goes into the overflow button menu, it will also register a 'persisted' keytip that can be accessed from the top level as a shortcut. A shortcut to a normal button item will trigger that button. A shortcut to a menu button item will open the overflow button menu and then open that item's menu as well. In this example triggering 'T' and 'Y' will show off this functionality (see console messages)."),
                React.createElement(OverflowSet_1.OverflowSet, { styles: { root: { marginBottom: 28 } }, items: this.state.items, overflowItems: this.state.overflowItems, keytipSequences: KeytipSetup_1.keytipMap.OverflowButton4.keySequences, onRenderOverflowButton: this._onRenderOverflowButton, onRenderItem: this._onRenderItem }),
                React.createElement("p", null, "When an item is moved out of the overflow well, it behaves as a normal keytip."),
                React.createElement(Button_1.DefaultButton, { text: 'Move overflow items', onClick: this._toggleOverflowItems })));
        };
        KeytipsOverflowExample.prototype._onRenderItem = function (item) {
            return (React.createElement(Button_1.CommandBarButton, tslib_1.__assign({}, item, { styles: { root: { padding: '10px' } }, menuProps: item.subMenuProps }), item.name));
        };
        return KeytipsOverflowExample;
    }(React.Component));
    exports.KeytipsOverflowExample = KeytipsOverflowExample;
});
//# sourceMappingURL=Keytips.Overflow.Example.js.map