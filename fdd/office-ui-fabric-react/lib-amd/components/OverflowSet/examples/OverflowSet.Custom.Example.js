define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/SearchBox", "office-ui-fabric-react/lib/OverflowSet"], function (require, exports, tslib_1, React, Button_1, SearchBox_1, OverflowSet_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var noOp = function () { return undefined; };
    var OverflowSetCustomExample = /** @class */ (function (_super) {
        tslib_1.__extends(OverflowSetCustomExample, _super);
        function OverflowSetCustomExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._onRenderItem = function (item) {
                if (item.onRender) {
                    return item.onRender(item);
                }
                return React.createElement(Button_1.CommandBarButton, { iconProps: { iconName: item.icon }, menuProps: item.subMenuProps, text: item.name });
            };
            _this._onRenderOverflowButton = function (overflowItems) {
                var buttonStyles = {
                    root: {
                        minWidth: 0,
                        padding: '0 4px',
                        alignSelf: 'stretch',
                        height: 'auto'
                    }
                };
                return React.createElement(Button_1.CommandBarButton, { styles: buttonStyles, menuIconProps: { iconName: 'More' }, menuProps: { items: overflowItems } });
            };
            return _this;
        }
        OverflowSetCustomExample.prototype.render = function () {
            return (React.createElement(OverflowSet_1.OverflowSet, { items: [
                    {
                        key: 'search',
                        onRender: function () {
                            return React.createElement(SearchBox_1.SearchBox, { placeholder: "Search", styles: { root: { marginBottom: 0, width: 200 } } });
                        }
                    },
                    {
                        key: 'newItem',
                        name: 'New',
                        icon: 'Add',
                        ariaLabel: 'New. Use left and right arrow keys to navigate',
                        onClick: noOp,
                        subMenuProps: {
                            items: [
                                {
                                    key: 'emailMessage',
                                    name: 'Email message',
                                    icon: 'Mail'
                                },
                                {
                                    key: 'calendarEvent',
                                    name: 'Calendar event',
                                    icon: 'Calendar'
                                }
                            ]
                        }
                    },
                    {
                        key: 'upload',
                        name: 'Upload',
                        icon: 'Upload',
                        onClick: noOp
                    },
                    {
                        key: 'share',
                        name: 'Share',
                        icon: 'Share',
                        onClick: noOp
                    }
                ], overflowItems: [
                    {
                        key: 'newItem',
                        name: 'Add',
                        icon: 'Add',
                        ariaLabel: 'New. Use left and right arrow keys to navigate',
                        onClick: noOp,
                        subMenuProps: {
                            items: [
                                {
                                    key: 'emailMessage',
                                    name: 'Email message',
                                    icon: 'Mail'
                                },
                                {
                                    key: 'calendarEvent',
                                    name: 'Calendar event',
                                    icon: 'Calendar'
                                }
                            ]
                        }
                    },
                    {
                        key: 'move',
                        name: 'Move to...',
                        icon: 'MoveToFolder',
                        onClick: noOp
                    },
                    {
                        key: 'copy',
                        name: 'Copy to...',
                        icon: 'Copy',
                        onClick: noOp
                    },
                    {
                        key: 'rename',
                        name: 'Rename...',
                        icon: 'Edit',
                        onClick: noOp
                    },
                    {
                        key: 'disabled',
                        name: 'Disabled...',
                        icon: 'Cancel',
                        disabled: true,
                        onClick: noOp
                    }
                ], onRenderOverflowButton: this._onRenderOverflowButton, onRenderItem: this._onRenderItem }));
        };
        return OverflowSetCustomExample;
    }(React.PureComponent));
    exports.OverflowSetCustomExample = OverflowSetCustomExample;
});
//# sourceMappingURL=OverflowSet.Custom.Example.js.map