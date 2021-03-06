"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var SearchBox_1 = require("office-ui-fabric-react/lib/SearchBox");
var Icon_1 = require("office-ui-fabric-react/lib/Icon");
require("./ContextualMenuExample.scss");
var ITEMS = [
    {
        key: 'newItem',
        text: 'New',
        onClick: function () { return console.log('New clicked'); }
    },
    {
        key: 'rename',
        text: 'Rename',
        onClick: function () { return console.log('Rename clicked'); }
    },
    {
        key: 'edit',
        text: 'Edit',
        onClick: function () { return console.log('Edit clicked'); }
    },
    {
        key: 'properties',
        text: 'Properties',
        onClick: function () { return console.log('Properties clicked'); }
    },
    {
        key: 'linkNoTarget',
        text: 'Link same window',
        href: 'http://bing.com'
    },
    {
        key: 'linkWithTarget',
        text: 'Link new window',
        href: 'http://bing.com',
        target: '_blank'
    },
    {
        key: 'linkWithOnClick',
        name: 'Link click',
        href: 'http://bing.com',
        onClick: function (ev) {
            alert('Link clicked');
            ev.preventDefault();
        },
        target: '_blank'
    },
    {
        key: 'disabled',
        text: 'Disabled item',
        disabled: true,
        onClick: function () { return console.error('Disabled item should not be clickable.'); }
    }
];
var ContextualMenuWithCustomMenuListExample = /** @class */ (function (_super) {
    tslib_1.__extends(ContextualMenuWithCustomMenuListExample, _super);
    function ContextualMenuWithCustomMenuListExample(props) {
        var _this = _super.call(this, props) || this;
        _this._onAbort = function () {
            _this.setState({ items: ITEMS });
        };
        _this._onChange = function (newValue) {
            var filteredItems = ITEMS.filter(function (item) { return item.text && item.text.toLowerCase().indexOf(newValue.toLowerCase()) !== -1; });
            if (!filteredItems || !filteredItems.length) {
                filteredItems.push({
                    key: 'no_results',
                    onRender: function (item, dismissMenu) { return (React.createElement("div", { key: "no_results", style: {
                            width: '100%',
                            height: '100px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        } },
                        React.createElement(Icon_1.Icon, { iconName: "SearchIssue", title: "No actions found" }),
                        React.createElement("span", null, "No actions found"))); }
                });
            }
            _this.setState(function (prevState, props) { return ({
                items: filteredItems
            }); });
        };
        _this._renderMenuList = function (menuListProps, defaultRender) {
            return (React.createElement("div", null,
                React.createElement("div", { style: { borderBottom: '1px solid #ccc' } },
                    React.createElement(SearchBox_1.SearchBox, { ariaLabel: "Filter actions by text", placeholder: "Filter actions", onAbort: _this._onAbort, onChange: _this._onChange, styles: {
                            root: [{ margin: '8px' }]
                        } })),
                defaultRender(menuListProps)));
        };
        _this.state = {
            items: ITEMS
        };
        return _this;
    }
    ContextualMenuWithCustomMenuListExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Button_1.DefaultButton, { text: "Click for ContextualMenu", menuProps: {
                    onRenderMenuList: this._renderMenuList,
                    title: 'Actions',
                    shouldFocusOnMount: true,
                    items: this.state.items
                } })));
    };
    return ContextualMenuWithCustomMenuListExample;
}(React.Component));
exports.ContextualMenuWithCustomMenuListExample = ContextualMenuWithCustomMenuListExample;
//# sourceMappingURL=ContextualMenu.CustomMenuList.Example.js.map