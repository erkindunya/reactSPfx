define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/FocusZone", "office-ui-fabric-react/lib/List", "office-ui-fabric-react/lib/Image", "office-ui-fabric-react/lib/Styling"], function (require, exports, tslib_1, React, FocusZone_1, List_1, Image_1, Styling_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var theme = Styling_1.getTheme();
    var classNames = Styling_1.mergeStyleSets({
        container: {
            overflow: 'auto',
            maxHeight: 500
        },
        itemCell: [
            Styling_1.getFocusStyle(theme, { inset: -1 }),
            {
                minHeight: 54,
                padding: 10,
                boxSizing: 'border-box',
                borderBottom: "1px solid " + theme.semanticColors.bodyDivider,
                display: 'flex',
                selectors: {
                    '&:hover': { background: theme.palette.neutralLight }
                }
            }
        ],
        itemImage: {
            flexShrink: 0
        },
        itemContent: {
            marginLeft: 10,
            overflow: 'hidden',
            flexGrow: 1
        },
        itemName: [
            Styling_1.DefaultFontStyles.xLarge,
            {
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
            }
        ],
        itemIndex: {
            fontSize: Styling_1.FontSizes.small,
            color: theme.palette.neutralTertiary,
            marginBottom: 10
        },
        chevron: {
            alignSelf: 'center',
            marginLeft: 10,
            color: theme.palette.neutralTertiary,
            fontSize: Styling_1.FontSizes.large,
            flexShrink: 0
        }
    });
    var ListGhostingExample = /** @class */ (function (_super) {
        tslib_1.__extends(ListGhostingExample, _super);
        function ListGhostingExample() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        ListGhostingExample.prototype.render = function () {
            var items = this.props.items;
            return (React.createElement(FocusZone_1.FocusZone, { direction: FocusZone_1.FocusZoneDirection.vertical },
                React.createElement("div", { className: classNames.container, "data-is-scrollable": true },
                    React.createElement(List_1.List, { items: items, onRenderCell: this._onRenderCell }))));
        };
        ListGhostingExample.prototype._onRenderCell = function (item, index, isScrolling) {
            return (React.createElement("div", { className: classNames.itemCell, "data-is-focusable": true },
                React.createElement(Image_1.Image, { className: classNames.itemImage, src: isScrolling ? undefined : item.thumbnail, width: 50, height: 50, imageFit: Image_1.ImageFit.cover }),
                React.createElement("div", { className: classNames.itemContent },
                    React.createElement("div", { className: classNames.itemName }, item.name),
                    React.createElement("div", { className: classNames.itemIndex }, "Item " + index))));
        };
        return ListGhostingExample;
    }(React.Component));
    exports.ListGhostingExample = ListGhostingExample;
});
//# sourceMappingURL=List.Ghosting.Example.js.map