"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Nav_1 = require("office-ui-fabric-react/lib/Nav");
exports.NavBasicExample = function () {
    return (React.createElement(Nav_1.Nav, { onLinkClick: _onLinkClick, expandedStateText: "expanded", collapsedStateText: "collapsed", selectedKey: "key3", expandButtonAriaLabel: "Expand or collapse", styles: {
            root: {
                width: 208,
                height: 350,
                boxSizing: 'border-box',
                border: '1px solid #eee',
                overflowY: 'auto'
            }
        }, groups: [
            {
                links: [
                    {
                        name: 'Home',
                        url: 'http://example.com',
                        links: [
                            {
                                name: 'Activity',
                                url: 'http://msn.com',
                                key: 'key1',
                                target: '_blank'
                            },
                            {
                                name: 'MSN',
                                url: 'http://msn.com',
                                disabled: true,
                                key: 'key2',
                                target: '_blank'
                            }
                        ],
                        isExpanded: true
                    },
                    {
                        name: 'Documents',
                        url: 'http://example.com',
                        key: 'key3',
                        isExpanded: true,
                        target: '_blank'
                    },
                    {
                        name: 'Pages',
                        url: 'http://msn.com',
                        key: 'key4',
                        target: '_blank'
                    },
                    {
                        name: 'Notebook',
                        url: 'http://msn.com',
                        key: 'key5',
                        disabled: true
                    },
                    {
                        name: 'Communication and Media',
                        url: 'http://msn.com',
                        key: 'key6',
                        target: '_blank'
                    },
                    {
                        name: 'News',
                        url: 'http://cnn.com',
                        icon: 'News',
                        key: 'key7',
                        target: '_blank'
                    }
                ]
            }
        ] }));
};
function _onLinkClick(ev, item) {
    if (item && item.name === 'News') {
        alert('News link clicked');
    }
}
//# sourceMappingURL=Nav.Basic.Example.js.map