define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/CommandBar"], function (require, exports, tslib_1, React, CommandBar_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CommandBarSplitDisabledExample = /** @class */ (function (_super) {
        tslib_1.__extends(CommandBarSplitDisabledExample, _super);
        function CommandBarSplitDisabledExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // Data for CommandBar
            _this.getItems = function () {
                return [
                    {
                        key: 'newItem',
                        name: 'New',
                        cacheKey: 'myCacheKey',
                        iconProps: {
                            iconName: 'Add'
                        },
                        split: true,
                        ariaLabel: 'New',
                        subMenuProps: {
                            items: [
                                (_a = {
                                        key: 'emailMessage',
                                        name: 'Email message',
                                        iconProps: {
                                            iconName: 'Mail'
                                        }
                                    },
                                    _a['data-automation-id'] = 'newEmailButton',
                                    _a),
                                {
                                    key: 'calendarEvent',
                                    name: 'Calendar event',
                                    iconProps: {
                                        iconName: 'Calendar'
                                    }
                                }
                            ]
                        }
                    },
                    (_b = {
                            key: 'upload',
                            name: 'Upload',
                            iconProps: {
                                iconName: 'Upload'
                            },
                            split: true,
                            disabled: true,
                            href: 'https://dev.office.com/fabric'
                        },
                        _b['data-automation-id'] = 'uploadButton',
                        _b.subMenuProps = {
                            items: [
                                {
                                    key: 'item1',
                                    name: 'Item One'
                                },
                                {
                                    key: 'item2',
                                    name: 'Item Two'
                                }
                            ]
                        },
                        _b),
                    {
                        key: 'share',
                        name: 'Share',
                        iconProps: {
                            iconName: 'Share'
                        },
                        disabled: true
                    },
                    {
                        key: 'download',
                        name: 'Download',
                        iconProps: {
                            iconName: 'Download'
                        },
                        iconOnly: true,
                        disabled: true
                    }
                ];
                var _a, _b;
            };
            _this.getOverlflowItems = function () {
                return [
                    {
                        key: 'move',
                        name: 'Move to...',
                        onClick: function () { return console.log('Move to'); },
                        iconProps: {
                            iconName: 'MoveToFolder'
                        }
                    },
                    {
                        key: 'copy',
                        name: 'Copy to...',
                        onClick: function () { return console.log('Copy to'); },
                        iconProps: {
                            iconName: 'Copy'
                        }
                    },
                    {
                        key: 'rename',
                        name: 'Rename...',
                        onClick: function () { return console.log('Rename'); },
                        iconProps: {
                            iconName: 'Edit'
                        }
                    }
                ];
            };
            _this.getFarItems = function () {
                return [
                    {
                        key: 'sort',
                        name: 'Sort',
                        ariaLabel: 'Sort',
                        iconProps: {
                            iconName: 'SortLines'
                        },
                        onClick: function () { return console.log('Sort'); }
                    },
                    {
                        key: 'tile',
                        name: 'Grid view',
                        ariaLabel: 'Grid view',
                        iconProps: {
                            iconName: 'Tiles'
                        },
                        iconOnly: true,
                        onClick: function () { return console.log('Tiles'); }
                    },
                    {
                        key: 'info',
                        name: 'Info',
                        ariaLabel: 'Info',
                        iconProps: {
                            iconName: 'Info'
                        },
                        iconOnly: true,
                        onClick: function () { return console.log('Info'); }
                    }
                ];
            };
            return _this;
        }
        CommandBarSplitDisabledExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(CommandBar_1.CommandBar, { items: this.getItems(), overflowItems: this.getOverlflowItems(), overflowButtonProps: { ariaLabel: 'More commands' }, farItems: this.getFarItems(), ariaLabel: 'Use left and right arrow keys to navigate between commands' })));
        };
        return CommandBarSplitDisabledExample;
    }(React.Component));
    exports.CommandBarSplitDisabledExample = CommandBarSplitDisabledExample;
});
//# sourceMappingURL=CommandBar.SplitDisabled.Example.js.map