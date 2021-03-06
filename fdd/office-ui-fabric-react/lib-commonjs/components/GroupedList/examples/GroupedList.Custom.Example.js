"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var GroupedList_1 = require("office-ui-fabric-react/lib/GroupedList");
var Link_1 = require("office-ui-fabric-react/lib/Link");
var exampleData_1 = require("office-ui-fabric-react/lib/utilities/exampleData");
var Styling_1 = require("office-ui-fabric-react/lib/Styling");
var theme = Styling_1.getTheme();
var headerAndFooterStyles = {
    minWidth: 300,
    minHeight: 40,
    lineHeight: 40,
    paddingLeft: 16
};
var classNames = Styling_1.mergeStyleSets({
    header: [headerAndFooterStyles, theme.fonts.xLarge],
    footer: [headerAndFooterStyles, theme.fonts.large],
    name: {
        display: 'inline-block',
        overflow: 'hidden',
        height: 24,
        cursor: 'default',
        padding: 8,
        boxSizing: 'border-box',
        verticalAlign: 'top',
        background: 'none',
        backgroundColor: 'transparent',
        border: 'none',
        paddingLeft: 32
    }
});
var GroupedListCustomExample = /** @class */ (function (_super) {
    tslib_1.__extends(GroupedListCustomExample, _super);
    function GroupedListCustomExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._items = exampleData_1.createListItems(20);
        _this._groups = exampleData_1.createGroups(4, 0, 0, 5);
        return _this;
    }
    GroupedListCustomExample.prototype.render = function () {
        return (React.createElement(GroupedList_1.GroupedList, { items: this._items, onRenderCell: this._onRenderCell, groupProps: {
                onRenderHeader: this._onRenderHeader,
                onRenderFooter: this._onRenderFooter
            }, groups: this._groups }));
    };
    GroupedListCustomExample.prototype._onRenderCell = function (nestingDepth, item, itemIndex) {
        return (React.createElement("div", { "data-selection-index": itemIndex },
            React.createElement("span", { className: classNames.name }, item.name)));
    };
    GroupedListCustomExample.prototype._onRenderHeader = function (props) {
        var toggleCollapse = function () {
            props.onToggleCollapse(props.group);
        };
        return (React.createElement("div", { className: classNames.header },
            "This is a custom header for ",
            props.group.name,
            "\u00A0 (",
            React.createElement(Link_1.Link, { onClick: toggleCollapse }, props.group.isCollapsed ? 'Expand' : 'Collapse'),
            ")"));
    };
    GroupedListCustomExample.prototype._onRenderFooter = function (props) {
        return React.createElement("div", { className: classNames.footer },
            "This is a custom footer for ",
            props.group.name);
    };
    return GroupedListCustomExample;
}(React.Component));
exports.GroupedListCustomExample = GroupedListCustomExample;
//# sourceMappingURL=GroupedList.Custom.Example.js.map