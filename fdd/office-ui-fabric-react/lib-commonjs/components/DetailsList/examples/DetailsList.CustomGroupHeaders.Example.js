"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Link_1 = require("office-ui-fabric-react/lib/Link");
var DetailsList_1 = require("office-ui-fabric-react/lib/DetailsList");
var exampleData_1 = require("office-ui-fabric-react/lib/utilities/exampleData");
var Styling_1 = require("office-ui-fabric-react/lib/Styling");
var DetailsRow_styles_1 = require("office-ui-fabric-react/lib/components/DetailsList/DetailsRow.styles");
var ROW_HEIGHT = DetailsRow_styles_1.DEFAULT_ROW_HEIGHTS.rowHeight;
var GROUP_HEADER_AND_FOOTER_SPACING = 8;
var GROUP_HEADER_AND_FOOTER_BORDER_WIDTH = 1;
var GROUP_HEADER_HEIGHT = 95;
var GROUP_FOOTER_HEIGHT = GROUP_HEADER_AND_FOOTER_SPACING * 4 + GROUP_HEADER_AND_FOOTER_BORDER_WIDTH * 2;
var theme = Styling_1.getTheme();
var classNames = Styling_1.mergeStyleSets({
    headerAndFooter: {
        borderTop: GROUP_HEADER_AND_FOOTER_BORDER_WIDTH + "px solid " + theme.palette.neutralQuaternary,
        borderBottom: GROUP_HEADER_AND_FOOTER_BORDER_WIDTH + "px solid " + theme.palette.neutralQuaternary,
        padding: GROUP_HEADER_AND_FOOTER_SPACING,
        margin: GROUP_HEADER_AND_FOOTER_SPACING + "px 0",
        background: theme.palette.neutralLighterAlt,
        // Overlay the sizer bars
        position: 'relative',
        zIndex: 100
    },
    headerTitle: [
        theme.fonts.xLarge,
        {
            padding: '4px 0'
        }
    ],
    headerLinkSet: {
        margin: '4px -8px'
    },
    headerLink: {
        margin: '0 8px'
    }
});
var ITEMS_PER_GROUP = 20;
var GROUP_COUNT = 20;
var DetailsListCustomGroupHeadersExample = /** @class */ (function (_super) {
    tslib_1.__extends(DetailsListCustomGroupHeadersExample, _super);
    function DetailsListCustomGroupHeadersExample(props) {
        var _this = _super.call(this, props) || this;
        _this._onRenderGroupHeader = function (props) {
            return (React.createElement("div", { className: classNames.headerAndFooter },
                React.createElement("div", { className: classNames.headerTitle }, "Custom header for " + props.group.name),
                React.createElement("div", { className: classNames.headerLinkSet },
                    React.createElement(Link_1.Link, { className: classNames.headerLink, onClick: _this._onToggleSelectGroup(props) }, props.isSelected ? 'Remove selection' : 'Select group'),
                    React.createElement(Link_1.Link, { className: classNames.headerLink, onClick: _this._onToggleCollapse(props) }, props.group.isCollapsed ? 'Expand group' : 'Collapse group'))));
        };
        _this._onRenderGroupFooter = function (props) {
            return (React.createElement("div", { className: classNames.headerAndFooter },
                React.createElement("em", null, "Custom footer for " + props.group.name)));
        };
        _this._getGroupTotalRowHeight = function (group) {
            return group.isCollapsed ? 0 : ROW_HEIGHT * group.count;
        };
        _this._getGroupHeight = function (group, _groupIndex) {
            return GROUP_HEADER_HEIGHT + GROUP_FOOTER_HEIGHT + _this._getGroupTotalRowHeight(group);
        };
        _this._items = exampleData_1.createListItems(500);
        _this._groups = exampleData_1.createGroups(GROUP_COUNT, 1, 0, ITEMS_PER_GROUP);
        return _this;
    }
    DetailsListCustomGroupHeadersExample.prototype.render = function () {
        return (React.createElement(DetailsList_1.DetailsList, { items: this._items, groups: this._groups, groupProps: {
                onRenderHeader: this._onRenderGroupHeader,
                onRenderFooter: this._onRenderGroupFooter
            }, getGroupHeight: this._getGroupHeight, ariaLabelForSelectionColumn: "Toggle selection", ariaLabelForSelectAllCheckbox: "Toggle selection for all items" }));
    };
    DetailsListCustomGroupHeadersExample.prototype._onToggleSelectGroup = function (props) {
        return function () {
            props.onToggleSelectGroup(props.group);
        };
    };
    DetailsListCustomGroupHeadersExample.prototype._onToggleCollapse = function (props) {
        return function () {
            props.onToggleCollapse(props.group);
        };
    };
    return DetailsListCustomGroupHeadersExample;
}(React.Component));
exports.DetailsListCustomGroupHeadersExample = DetailsListCustomGroupHeadersExample;
//# sourceMappingURL=DetailsList.CustomGroupHeaders.Example.js.map