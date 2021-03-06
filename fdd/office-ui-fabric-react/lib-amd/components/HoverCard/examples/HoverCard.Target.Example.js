define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/HoverCard", "office-ui-fabric-react/lib/DetailsList", "office-ui-fabric-react/lib/common/DirectionalHint", "office-ui-fabric-react/lib/Fabric", "office-ui-fabric-react/lib/utilities/exampleData", "@uifabric/utilities", "office-ui-fabric-react/lib/Styling"], function (require, exports, tslib_1, React, HoverCard_1, DetailsList_1, DirectionalHint_1, Fabric_1, exampleData_1, utilities_1, Styling_1) {
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
    var HoverCardField = /** @class */ (function (_super) {
        tslib_1.__extends(HoverCardField, _super);
        function HoverCardField(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                contentRendered: undefined
            };
            return _this;
        }
        HoverCardField.prototype.render = function () {
            var _this = this;
            return (React.createElement("div", { ref: function (c) { return !_this.state.contentRendered && _this.setState({ contentRendered: c }); }, "data-is-focusable": true },
                this.props.content,
                this.state.contentRendered && (React.createElement(HoverCard_1.HoverCard, { expandingCardProps: this.props.expandingCardProps, target: this.state.contentRendered, cardDismissDelay: 300, onCardVisible: this._log('onCardVisible'), onCardHide: this._log('onCardHide'), trapFocus: true, openHotKey: utilities_1.KeyCodes.enter }))));
        };
        HoverCardField.prototype._log = function (text) {
            return function () {
                console.log(text);
            };
        };
        return HoverCardField;
    }(React.Component));
    var HoverCardTargetExample = /** @class */ (function (_super) {
        tslib_1.__extends(HoverCardTargetExample, _super);
        function HoverCardTargetExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._items = exampleData_1.createListItems(10);
            _this._columns = _this._buildColumns();
            _this._onRenderItemColumn = function (item, index, column) {
                var expandingCardProps = {
                    onRenderCompactCard: _this._onRenderCompactCard,
                    onRenderExpandedCard: _this._onRenderExpandedCard,
                    renderData: item,
                    directionalHint: DirectionalHint_1.DirectionalHint.rightTopEdge,
                    gapSpace: 16
                };
                if (column.key === 'key') {
                    return (React.createElement("div", { className: classNames.item },
                        React.createElement(HoverCardField, { content: item.key, expandingCardProps: expandingCardProps })));
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
        HoverCardTargetExample.prototype.render = function () {
            return (React.createElement(Fabric_1.Fabric, null,
                React.createElement("p", null,
                    "Hover over the ",
                    React.createElement("i", null, "key"),
                    " cell of a row item to see the card or use the keyboard to navigate to it."),
                React.createElement("p", null, "When using the keyboard to tab to it, open the card with the hotKey and it will automatically focus the first focusable element in the card allowing further navigation inside the card."),
                React.createElement(DetailsList_1.DetailsList, { setKey: "hoverSet", items: this._items, columns: this._columns, onRenderItemColumn: this._onRenderItemColumn, ariaLabel: "Hover card DetailsList test" })));
        };
        HoverCardTargetExample.prototype._buildColumns = function () {
            return DetailsList_1.buildColumns(this._items).filter(function (column) { return column.name === 'location' || column.name === 'key'; });
        };
        return HoverCardTargetExample;
    }(React.Component));
    exports.HoverCardTargetExample = HoverCardTargetExample;
});
//# sourceMappingURL=HoverCard.Target.Example.js.map