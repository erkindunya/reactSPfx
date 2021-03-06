define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/HoverCard", "office-ui-fabric-react/lib/Fabric", "office-ui-fabric-react/lib/DetailsList", "office-ui-fabric-react/lib/utilities/exampleData", "office-ui-fabric-react/lib/Styling"], function (require, exports, tslib_1, React, HoverCard_1, Fabric_1, DetailsList_1, exampleData_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var classNames = Styling_1.mergeStyleSets({
        compactCard: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%'
        },
        expandedCard: {
            padding: '16px 24px'
        },
        item: {
            selectors: {
                '&:hover': {
                    textDecoration: 'underline',
                    cursor: 'pointer'
                }
            }
        }
    });
    var HoverCardBasicExample = /** @class */ (function (_super) {
        tslib_1.__extends(HoverCardBasicExample, _super);
        function HoverCardBasicExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._items = exampleData_1.createListItems(10);
            _this._columns = _this._buildColumns();
            _this._onRenderItemColumn = function (item, index, column) {
                var expandingCardProps = {
                    onRenderCompactCard: _this._onRenderCompactCard,
                    onRenderExpandedCard: _this._onRenderExpandedCard,
                    renderData: item
                };
                if (column.key === 'location') {
                    return (React.createElement(HoverCard_1.HoverCard, { expandingCardProps: expandingCardProps, instantOpenOnClick: true },
                        React.createElement("div", { className: classNames.item }, item.location)));
                }
                return item[column.key];
            };
            _this._onRenderCompactCard = function (item) {
                return (React.createElement("div", { className: classNames.compactCard },
                    React.createElement("a", { target: "_blank", href: "http://wikipedia.org/wiki/" + item.location }, item.location)));
            };
            _this._onRenderExpandedCard = function (item) {
                return (React.createElement("div", { className: classNames.expandedCard },
                    item.description,
                    React.createElement(DetailsList_1.DetailsList, { setKey: "expandedCardSet", items: _this._items, columns: _this._columns })));
            };
            return _this;
        }
        HoverCardBasicExample.prototype.render = function () {
            return (React.createElement(Fabric_1.Fabric, null,
                React.createElement("p", null,
                    "Hover over the ",
                    React.createElement("i", null, "location"),
                    " cell of a row item to see the card or use the keyboard to navigate to it."),
                React.createElement("p", null, "When using the keyboard to tab to it, the card will open but navigation inside of it will not be available."),
                React.createElement(DetailsList_1.DetailsList, { setKey: "hoverSet", items: this._items, columns: this._columns, onRenderItemColumn: this._onRenderItemColumn })));
        };
        HoverCardBasicExample.prototype._buildColumns = function () {
            return DetailsList_1.buildColumns(this._items).filter(function (column) { return column.name === 'location' || column.name === 'key'; });
        };
        return HoverCardBasicExample;
    }(React.Component));
    exports.HoverCardBasicExample = HoverCardBasicExample;
});
//# sourceMappingURL=HoverCard.Basic.Example.js.map