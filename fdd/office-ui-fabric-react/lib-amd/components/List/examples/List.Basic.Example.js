define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Utilities", "office-ui-fabric-react/lib/FocusZone", "office-ui-fabric-react/lib/TextField", "office-ui-fabric-react/lib/Image", "office-ui-fabric-react/lib/Icon", "office-ui-fabric-react/lib/List", "./List.Basic.Example.scss"], function (require, exports, tslib_1, React, Utilities_1, FocusZone_1, TextField_1, Image_1, Icon_1, List_1, styles) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ListBasicExample = /** @class */ (function (_super) {
        tslib_1.__extends(ListBasicExample, _super);
        function ListBasicExample(props) {
            var _this = _super.call(this, props) || this;
            _this._onFilterChanged = _this._onFilterChanged.bind(_this);
            _this.state = {
                filterText: '',
                items: props.items
            };
            return _this;
        }
        ListBasicExample.prototype.render = function () {
            var originalItems = this.props.items;
            var _a = this.state.items, items = _a === void 0 ? [] : _a;
            var resultCountText = items.length === originalItems.length ? '' : " (" + items.length + " of " + originalItems.length + " shown)";
            return (React.createElement(FocusZone_1.FocusZone, { direction: FocusZone_1.FocusZoneDirection.vertical },
                React.createElement(TextField_1.TextField, { label: 'Filter by name' + resultCountText, onChange: this._onFilterChanged }),
                React.createElement(List_1.List, { items: items, onRenderCell: this._onRenderCell })));
        };
        ListBasicExample.prototype._onFilterChanged = function (_, text) {
            var items = this.props.items;
            this.setState({
                filterText: text,
                items: text ? items.filter(function (item) { return item.name.toLowerCase().indexOf(text.toLowerCase()) >= 0; }) : items
            });
        };
        ListBasicExample.prototype._onRenderCell = function (item, index) {
            return (React.createElement("div", { className: styles.itemCell, "data-is-focusable": true },
                React.createElement(Image_1.Image, { className: styles.itemImage, src: item.thumbnail, width: 50, height: 50, imageFit: Image_1.ImageFit.cover }),
                React.createElement("div", { className: styles.itemContent },
                    React.createElement("div", { className: styles.itemName }, item.name),
                    React.createElement("div", { className: styles.itemIndex }, "Item " + index),
                    React.createElement("div", null, item.description)),
                React.createElement(Icon_1.Icon, { className: styles.chevron, iconName: Utilities_1.getRTL() ? 'ChevronLeft' : 'ChevronRight' })));
        };
        return ListBasicExample;
    }(React.Component));
    exports.ListBasicExample = ListBasicExample;
});
//# sourceMappingURL=List.Basic.Example.js.map