define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/TextField", "office-ui-fabric-react/lib/DetailsList", "office-ui-fabric-react/lib/Tooltip", "office-ui-fabric-react/lib/ScrollablePane", "office-ui-fabric-react/lib/Sticky", "office-ui-fabric-react/lib/MarqueeSelection", "office-ui-fabric-react/lib/utilities/selection/index", "office-ui-fabric-react/lib/Styling"], function (require, exports, tslib_1, React, TextField_1, DetailsList_1, Tooltip_1, ScrollablePane_1, Sticky_1, MarqueeSelection_1, index_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var classNames = Styling_1.mergeStyleSets({
        wrapper: {
            height: '80vh',
            position: 'relative'
        },
        filter: {
            paddingBottom: 20,
            maxWidth: 300
        },
        header: {
            margin: 0
        },
        row: {
            display: 'inline-block'
        }
    });
    var _footerItem = {
        key: 'footer',
        test1: 'Footer 1',
        test2: 'Footer 2',
        test3: 'Footer 3',
        test4: 'Footer 4',
        test5: 'Footer 5',
        test6: 'Footer 6'
    };
    var ScrollablePaneDetailsListExample = /** @class */ (function (_super) {
        tslib_1.__extends(ScrollablePaneDetailsListExample, _super);
        function ScrollablePaneDetailsListExample(props) {
            var _this = _super.call(this, props) || this;
            _this._onFilterChange = function (ev, text) {
                _this.setState({
                    items: text ? _this._allItems.filter(function (item) { return hasText(item, text); }) : _this._allItems
                });
            };
            _this._selection = new DetailsList_1.Selection();
            _this._allItems = [];
            for (var i = 0; i < 200; i++) {
                _this._allItems.push({
                    key: i,
                    test1: _lorem(4),
                    test2: _lorem(4),
                    test3: _lorem(4),
                    test4: _lorem(4),
                    test5: _lorem(4),
                    test6: _lorem(4)
                });
            }
            _this._columns = [];
            for (var i = 1; i < 7; i++) {
                _this._columns.push({
                    key: 'column' + i,
                    name: 'Test ' + i,
                    fieldName: 'test' + i,
                    minWidth: 100,
                    maxWidth: 200,
                    isResizable: true
                });
            }
            _this.state = {
                items: _this._allItems
            };
            return _this;
        }
        ScrollablePaneDetailsListExample.prototype.render = function () {
            var items = this.state.items;
            return (React.createElement("div", { className: classNames.wrapper },
                React.createElement(ScrollablePane_1.ScrollablePane, { scrollbarVisibility: ScrollablePane_1.ScrollbarVisibility.auto },
                    React.createElement(Sticky_1.Sticky, { stickyPosition: Sticky_1.StickyPositionType.Header },
                        React.createElement(TextField_1.TextField, { className: classNames.filter, label: "Filter by name:", onChange: this._onFilterChange })),
                    React.createElement(Sticky_1.Sticky, { stickyPosition: Sticky_1.StickyPositionType.Header },
                        React.createElement("h1", { className: classNames.header }, "Item list")),
                    React.createElement(MarqueeSelection_1.MarqueeSelection, { selection: this._selection },
                        React.createElement(DetailsList_1.DetailsList, { items: items, columns: this._columns, setKey: "set", layoutMode: DetailsList_1.DetailsListLayoutMode.fixedColumns, constrainMode: DetailsList_1.ConstrainMode.unconstrained, onRenderDetailsHeader: onRenderDetailsHeader, onRenderDetailsFooter: onRenderDetailsFooter, selection: this._selection, selectionPreservedOnEmptyClick: true, ariaLabelForSelectionColumn: "Toggle selection", ariaLabelForSelectAllCheckbox: "Toggle selection for all items", onItemInvoked: _onItemInvoked })))));
        };
        return ScrollablePaneDetailsListExample;
    }(React.Component));
    exports.ScrollablePaneDetailsListExample = ScrollablePaneDetailsListExample;
    function _onItemInvoked(item) {
        alert('Item invoked: ' + item.test1);
    }
    function onRenderDetailsHeader(props, defaultRender) {
        return (React.createElement(Sticky_1.Sticky, { stickyPosition: Sticky_1.StickyPositionType.Header, isScrollSynced: true }, defaultRender(tslib_1.__assign({}, props, { onRenderColumnHeaderTooltip: function (tooltipHostProps) { return React.createElement(Tooltip_1.TooltipHost, tslib_1.__assign({}, tooltipHostProps)); } }))));
    }
    function onRenderDetailsFooter(props, defaultRender) {
        return (React.createElement(Sticky_1.Sticky, { stickyPosition: Sticky_1.StickyPositionType.Footer, isScrollSynced: true },
            React.createElement("div", { className: classNames.row },
                React.createElement(DetailsList_1.DetailsRow, { columns: props.columns, item: _footerItem, itemIndex: -1, selection: props.selection, selectionMode: (props.selection && props.selection.mode) || index_1.SelectionMode.none, viewport: props.viewport }))));
    }
    function hasText(item, text) {
        return (item.test1 + "|" + item.test2 + "|" + item.test3 + "|" + item.test4 + "|" + item.test5 + "|" + item.test6).indexOf(text) > -1;
    }
    var LOREM_IPSUM = ('lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut ' +
        'labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut ' +
        'aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore ' +
        'eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt ').split(' ');
    var loremIndex = 0;
    function _lorem(wordCount) {
        var startIndex = loremIndex + wordCount > LOREM_IPSUM.length ? 0 : loremIndex;
        loremIndex = startIndex + wordCount;
        return LOREM_IPSUM.slice(startIndex, loremIndex).join(' ');
    }
});
//# sourceMappingURL=ScrollablePane.DetailsList.Example.js.map