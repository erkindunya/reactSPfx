define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/HoverCard", "office-ui-fabric-react/lib/DetailsList", "office-ui-fabric-react/lib/utilities/exampleData", "office-ui-fabric-react/lib/Image", "office-ui-fabric-react/lib/Fabric", "office-ui-fabric-react/lib/Color", "office-ui-fabric-react/lib/Styling"], function (require, exports, tslib_1, React, HoverCard_1, DetailsList_1, exampleData_1, Image_1, Fabric_1, Color_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var itemClass = Styling_1.mergeStyles({
        selectors: {
            '&:hover': {
                textDecoration: 'underline',
                cursor: 'pointer'
            }
        }
    });
    var HoverCardPlainCardExample = /** @class */ (function (_super) {
        tslib_1.__extends(HoverCardPlainCardExample, _super);
        function HoverCardPlainCardExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._items = exampleData_1.createListItems(10);
            _this._columns = _this._buildColumns();
            _this._onRenderItemColumn = function (item, index, column) {
                var plainCardProps = {
                    onRenderPlainCard: _this._onRenderPlainCard,
                    renderData: item
                };
                if (column.key === 'color') {
                    return (React.createElement(HoverCard_1.HoverCard, { plainCardProps: plainCardProps, instantOpenOnClick: true, type: HoverCard_1.HoverCardType.plain },
                        React.createElement("div", { className: itemClass, style: { color: item.color } }, item.color)));
                }
                return item[column.key];
            };
            _this._onRenderPlainCard = function (item) {
                var src = item.thumbnail + ("/" + Color_1.getColorFromString(item.color).hex);
                return React.createElement(Image_1.Image, { src: src, width: item.width, height: item.height, imageFit: Image_1.ImageFit.cover });
            };
            return _this;
        }
        HoverCardPlainCardExample.prototype.render = function () {
            return (React.createElement(Fabric_1.Fabric, null,
                React.createElement("p", null,
                    "Hover over the ",
                    React.createElement("i", null, "color"),
                    " cell of a row item to see the card."),
                React.createElement(DetailsList_1.DetailsList, { setKey: "hoverSet", items: this._items, columns: this._columns, onRenderItemColumn: this._onRenderItemColumn })));
        };
        HoverCardPlainCardExample.prototype._buildColumns = function () {
            return DetailsList_1.buildColumns(this._items).filter(function (column) { return column.name === 'color' || column.name === 'width' || column.name === 'height'; });
        };
        return HoverCardPlainCardExample;
    }(React.Component));
    exports.HoverCardPlainCardExample = HoverCardPlainCardExample;
});
//# sourceMappingURL=HoverCard.PlainCard.Example.js.map