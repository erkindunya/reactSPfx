"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Nav_1 = require("office-ui-fabric-react/lib/Nav");
exports.NavNestedExample = function () {
    return (React.createElement(Nav_1.Nav, { expandButtonAriaLabel: "Expand or collapse", groups: [
            {
                links: [
                    {
                        name: 'Parent link 1',
                        url: 'http://example.com',
                        target: '_blank',
                        links: [
                            {
                                name: 'Child link 1',
                                url: 'http://example.com',
                                target: '_blank'
                            },
                            {
                                name: 'Child link 2',
                                url: 'http://example.com',
                                target: '_blank',
                                links: [
                                    {
                                        name: '3rd level link 1',
                                        url: 'http://example.com',
                                        target: '_blank'
                                    },
                                    {
                                        name: '3rd level link 2',
                                        url: 'http://example.com',
                                        target: '_blank'
                                    }
                                ]
                            },
                            {
                                name: 'Child link 3',
                                url: 'http://example.com',
                                target: '_blank'
                            }
                        ]
                    },
                    {
                        name: 'Parent link 2',
                        url: 'http://example.com',
                        target: '_blank',
                        links: [
                            {
                                name: 'Child link 4',
                                url: 'http://example.com',
                                target: '_blank'
                            }
                        ]
                    }
                ]
            }
        ] }));
};
//# sourceMappingURL=Nav.Nested.Example.js.map