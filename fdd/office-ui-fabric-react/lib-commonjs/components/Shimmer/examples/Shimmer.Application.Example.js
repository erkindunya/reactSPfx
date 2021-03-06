"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var exampleData_1 = require("office-ui-fabric-react/lib/utilities/exampleData");
var index_1 = require("office-ui-fabric-react/lib/index");
var ShimmeredDetailsList_1 = require("office-ui-fabric-react/lib/ShimmeredDetailsList");
var fileIcons = [
    { name: 'accdb' },
    { name: 'csv' },
    { name: 'docx' },
    { name: 'dotx' },
    { name: 'mpt' },
    { name: 'odt' },
    { name: 'one' },
    { name: 'onepkg' },
    { name: 'onetoc' },
    { name: 'pptx' },
    { name: 'pub' },
    { name: 'vsdx' },
    { name: 'xls' },
    { name: 'xlsx' },
    { name: 'xsn' }
];
var ITEMS_COUNT = 200;
var INTERVAL_DELAY = 2500;
var _items;
var ShimmerApplicationExample = /** @class */ (function (_super) {
    tslib_1.__extends(ShimmerApplicationExample, _super);
    function ShimmerApplicationExample(props) {
        var _this = _super.call(this, props) || this;
        _this._loadData = function () {
            _this._lastIntervalId = _this._async.setInterval(function () {
                var randomQuantity = Math.floor(Math.random() * 10) + 1;
                var itemsCopy = _this.state.items.slice(0);
                itemsCopy.splice.apply(itemsCopy, [_this._lastIndexWithData,
                    randomQuantity].concat(_items.slice(_this._lastIndexWithData, _this._lastIndexWithData + randomQuantity)));
                _this._lastIndexWithData += randomQuantity;
                _this.setState({
                    items: itemsCopy
                });
            }, INTERVAL_DELAY);
        };
        _this._onLoadData = function (ev, checked) {
            if (!_items) {
                _items = exampleData_1.createListItems(ITEMS_COUNT);
                _items.map(function (item) {
                    var randomFileType = _this._randomFileIcon();
                    item.thumbnail = randomFileType.url;
                });
            }
            var items;
            var randomQuantity = Math.floor(Math.random() * 10) + 1;
            if (checked) {
                items = _items.slice(0, randomQuantity).concat(new Array(ITEMS_COUNT - randomQuantity));
                _this._lastIndexWithData = randomQuantity;
                _this._loadData();
            }
            else {
                items = [];
                _this._async.clearInterval(_this._lastIntervalId);
            }
            _this.setState({
                isDataLoaded: checked,
                items: items
            });
        };
        _this._onRenderItemColumn = function (item, index, column) {
            if (column.key === 'thumbnail') {
                return React.createElement("img", { src: item.thumbnail });
            }
            return item[column.key];
        };
        _this.state = {
            items: [],
            columns: _buildColumns(),
            isDataLoaded: false
        };
        return _this;
    }
    ShimmerApplicationExample.prototype.render = function () {
        var _a = this.state, items = _a.items, columns = _a.columns, isDataLoaded = _a.isDataLoaded;
        return (React.createElement("div", null,
            React.createElement(index_1.Toggle, { label: "Toggle to load content", style: { display: 'block', marginBottom: '20px' }, checked: isDataLoaded, onChange: this._onLoadData, onText: "Content", offText: "Shimmer" }),
            React.createElement("div", null,
                React.createElement(ShimmeredDetailsList_1.ShimmeredDetailsList, { setKey: "items", items: items, columns: columns, selectionMode: index_1.SelectionMode.none, onRenderItemColumn: this._onRenderItemColumn, enableShimmer: !isDataLoaded, listProps: { renderedWindowsAhead: 0, renderedWindowsBehind: 0 } }))));
    };
    ShimmerApplicationExample.prototype._randomFileIcon = function () {
        var docType = fileIcons[Math.floor(Math.random() * fileIcons.length) + 0].name;
        return {
            docType: docType,
            url: "https://static2.sharepointonline.com/files/fabric/assets/brand-icons/document/svg/" + docType + "_16x1.svg"
        };
    };
    return ShimmerApplicationExample;
}(Utilities_1.BaseComponent));
exports.ShimmerApplicationExample = ShimmerApplicationExample;
function _buildColumns() {
    var _item = exampleData_1.createListItems(1);
    var columns = index_1.buildColumns(_item);
    for (var _i = 0, columns_1 = columns; _i < columns_1.length; _i++) {
        var column = columns_1[_i];
        if (column.key === 'thumbnail') {
            column.name = 'FileType';
            column.minWidth = 16;
            column.maxWidth = 16;
            column.isIconOnly = true;
            column.iconName = 'Page';
            break;
        }
    }
    return columns;
}
//# sourceMappingURL=Shimmer.Application.Example.js.map