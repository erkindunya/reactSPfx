define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/FocusZone", "office-ui-fabric-react/lib/List", "./List.Grid.Example.scss"], function (require, exports, tslib_1, React, FocusZone_1, List_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ROWS_PER_PAGE = 3;
    var MAX_ROW_HEIGHT = 250;
    var ListGridExample = /** @class */ (function (_super) {
        tslib_1.__extends(ListGridExample, _super);
        function ListGridExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._getItemCountForPage = function (itemIndex, surfaceRect) {
                if (itemIndex === 0) {
                    _this._columnCount = Math.ceil(surfaceRect.width / MAX_ROW_HEIGHT);
                    _this._columnWidth = Math.floor(surfaceRect.width / _this._columnCount);
                    _this._rowHeight = _this._columnWidth;
                }
                return _this._columnCount * ROWS_PER_PAGE;
            };
            _this._getPageHeight = function () {
                return _this._rowHeight * ROWS_PER_PAGE;
            };
            _this._onRenderCell = function (item, index) {
                return (React.createElement("div", { className: "ms-ListGridExample-tile", "data-is-focusable": true, style: {
                        width: 100 / _this._columnCount + '%'
                    } },
                    React.createElement("div", { className: "ms-ListGridExample-sizer" },
                        React.createElement("div", { className: "msListGridExample-padder" },
                            React.createElement("img", { src: item.thumbnail, className: "ms-ListGridExample-image" }),
                            React.createElement("span", { className: "ms-ListGridExample-label" }, "item " + index)))));
            };
            return _this;
        }
        ListGridExample.prototype.render = function () {
            return (React.createElement(FocusZone_1.FocusZone, null,
                React.createElement(List_1.List, { className: "ms-ListGridExample", items: this.props.items, getItemCountForPage: this._getItemCountForPage, getPageHeight: this._getPageHeight, renderedWindowsAhead: 4, onRenderCell: this._onRenderCell })));
        };
        return ListGridExample;
    }(React.Component));
    exports.ListGridExample = ListGridExample;
});
//# sourceMappingURL=List.Grid.Example.js.map