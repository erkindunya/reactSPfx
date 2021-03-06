define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/FocusZone", "office-ui-fabric-react/lib/Image", "office-ui-fabric-react/lib/Utilities", "office-ui-fabric-react/lib/Styling"], function (require, exports, tslib_1, React, FocusZone_1, Image_1, Utilities_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var theme = Styling_1.getTheme();
    var classNames = Styling_1.mergeStyleSets({
        photoList: {
            display: 'inline-block',
            border: '1px solid ' + theme.palette.neutralTertiary,
            padding: 10,
            lineHeight: 0,
            overflow: 'hidden'
        },
        photoCell: {
            position: 'relative',
            display: 'inline-block',
            padding: 2,
            boxSizing: 'border-box',
            selectors: {
                '&:focus': {
                    outline: 'none'
                },
                '&:focus:after': {
                    content: '""',
                    position: 'absolute',
                    right: 4,
                    left: 4,
                    top: 4,
                    bottom: 4,
                    border: '1px solid ' + theme.palette.white,
                    outline: '2px solid ' + theme.palette.themePrimary
                }
            }
        }
    });
    var MAX_COUNT = 20;
    var FocusZonePhotosExample = /** @class */ (function (_super) {
        tslib_1.__extends(FocusZonePhotosExample, _super);
        function FocusZonePhotosExample(props) {
            var _this = _super.call(this, props) || this;
            _this._items = _this._getItems();
            return _this;
        }
        FocusZonePhotosExample.prototype.render = function () {
            var _this = this;
            return (React.createElement(FocusZone_1.FocusZone, { as: "ul", className: classNames.photoList }, this._items.map(function (item, index) { return (React.createElement("li", { key: item.id, className: classNames.photoCell, "aria-posinset": index + 1, "aria-setsize": _this._items.length, "aria-label": "Photo", "data-is-focusable": true },
                React.createElement(Image_1.Image, { src: item.url, width: item.width, height: item.height }))); })));
        };
        FocusZonePhotosExample.prototype._getItems = function () {
            var items = [];
            for (var i = 0; i < MAX_COUNT; i++) {
                var randomWidth = 50 + Math.floor(Math.random() * 150);
                items.push({
                    id: Utilities_1.getId('photo'),
                    url: "http://placehold.it/" + randomWidth + "x100",
                    width: randomWidth,
                    height: 100
                });
            }
            return items;
        };
        return FocusZonePhotosExample;
    }(React.PureComponent));
    exports.FocusZonePhotosExample = FocusZonePhotosExample;
});
//# sourceMappingURL=FocusZone.Photos.Example.js.map