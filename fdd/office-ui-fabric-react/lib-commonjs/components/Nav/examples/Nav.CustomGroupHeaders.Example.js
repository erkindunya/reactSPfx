"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var Nav_1 = require("office-ui-fabric-react/lib/Nav");
exports.NavCustomGroupHeadersExample = function () {
    return (React.createElement(Nav_1.Nav, { onRenderGroupHeader: _onRenderGroupHeader, groups: [
            {
                name: 'Pages',
                links: [
                    // prettier-ignore
                    { name: 'Activity', url: 'http://msn.com', key: 'key1', target: '_blank' },
                    { name: 'News', url: 'http://msn.com', key: 'key2', target: '_blank' }
                ]
            },
            {
                name: 'More pages',
                links: [
                    // prettier-ignore
                    { name: 'Settings', url: 'http://msn.com', key: 'key3', target: '_blank' },
                    { name: 'Notes', url: 'http://msn.com', key: 'key4', target: '_blank' }
                ]
            }
        ] }));
};
function _onRenderGroupHeader(group) {
    return React.createElement("h3", null, group.name);
}
//# sourceMappingURL=Nav.CustomGroupHeaders.Example.js.map