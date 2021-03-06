"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.items = [
    (_a = {
            key: 'newItem',
            name: 'New',
            cacheKey: 'myCacheKey',
            iconProps: {
                iconName: 'Add'
            },
            ariaLabel: 'New. Use left and right arrow keys to navigate'
        },
        _a['data-automation-id'] = 'newItemMenu',
        _a.subMenuProps = {
            items: [
                (_b = {
                        key: 'emailMessage',
                        name: 'Email message',
                        iconProps: {
                            iconName: 'Mail'
                        }
                    },
                    _b['data-automation-id'] = 'newEmailButton',
                    _b),
                {
                    key: 'calendarEvent',
                    name: 'Calendar event',
                    iconProps: {
                        iconName: 'Calendar'
                    }
                }
            ]
        },
        _a),
    {
        key: 'upload',
        name: 'Upload',
        iconProps: {
            iconName: 'Upload'
        },
        href: 'https://dev.office.com/fabric',
        'data-automation-id': 'uploadButton',
        target: '_blank'
    },
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
exports.overflowItems = [
    {
        key: 'move',
        name: 'Move to...',
        iconProps: {
            iconName: 'MoveToFolder'
        }
    },
    {
        key: 'copy',
        name: 'Copy to...',
        iconProps: {
            iconName: 'Copy'
        }
    },
    {
        key: 'rename',
        name: 'Rename...',
        iconProps: {
            iconName: 'Edit'
        }
    }
];
exports.farItems = [
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
var _a, _b;
//# sourceMappingURL=data.js.map