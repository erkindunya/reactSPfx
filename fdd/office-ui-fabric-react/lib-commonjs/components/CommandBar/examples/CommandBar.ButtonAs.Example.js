"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var CommandBar_1 = require("office-ui-fabric-react/lib/CommandBar");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Callout_1 = require("office-ui-fabric-react/lib/Callout");
var CommandBarButtonAsExample = /** @class */ (function (_super) {
    tslib_1.__extends(CommandBarButtonAsExample, _super);
    function CommandBarButtonAsExample() {
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
                        href: 'https://dev.office.com/fabric'
                    },
                    _b['data-automation-id'] = 'uploadButton',
                    _b),
                {
                    key: 'share',
                    name: 'Share',
                    iconProps: {
                        iconName: 'Share'
                    },
                    onClick: function () { return console.log('Share'); }
                },
                {
                    key: 'download',
                    name: 'Download',
                    iconProps: {
                        iconName: 'Download'
                    },
                    onClick: function () { return console.log('Download'); }
                }
            ];
            var _a, _b;
        };
        _this.getOverflowItems = function () {
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
    CommandBarButtonAsExample.prototype.render = function () {
        var customButton = function (props) {
            var buttonOnMouseClick = function () { return alert(props.text + " clicked"); };
            return (React.createElement(Button_1.CommandBarButton, tslib_1.__assign({}, props, { onClick: buttonOnMouseClick, styles: tslib_1.__assign({}, props.styles, { textContainer: { fontSize: 18 }, icon: { color: '#E20000' } }) })));
        };
        return (React.createElement("div", null,
            React.createElement(CommandBar_1.CommandBar, { overflowButtonProps: {
                    ariaLabel: 'More commands',
                    menuProps: {
                        items: [],
                        isBeakVisible: true,
                        beakWidth: 20,
                        gapSpace: 10,
                        directionalHint: Callout_1.DirectionalHint.topCenter
                    }
                }, buttonAs: customButton, items: this.getItems(), overflowItems: this.getOverflowItems(), farItems: this.getFarItems(), ariaLabel: 'Use left and right arrow keys to navigate between commands' })));
    };
    return CommandBarButtonAsExample;
}(React.Component));
exports.CommandBarButtonAsExample = CommandBarButtonAsExample;
//# sourceMappingURL=CommandBar.ButtonAs.Example.js.map