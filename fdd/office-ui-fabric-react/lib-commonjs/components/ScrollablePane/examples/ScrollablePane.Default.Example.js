"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ScrollablePane_1 = require("office-ui-fabric-react/lib/ScrollablePane");
var Sticky_1 = require("office-ui-fabric-react/lib/Sticky");
var exampleData_1 = require("office-ui-fabric-react/lib/utilities/exampleData");
var Styling_1 = require("office-ui-fabric-react/lib/Styling");
var theme = Styling_1.getTheme();
var classNames = Styling_1.mergeStyleSets({
    wrapper: {
        height: '80vh',
        position: 'relative',
        maxHeight: 'inherit'
    },
    pane: {
        maxWidth: 400,
        border: '1px solid ' + theme.palette.neutralLight
    },
    sticky: {
        color: theme.palette.neutralDark,
        padding: '5px 20px 5px 10px',
        fontSize: '13px',
        borderTop: '1px solid ' + theme.palette.black,
        borderBottom: '1px solid ' + theme.palette.black
    },
    textContent: {
        padding: '15px 10px'
    }
});
var ScrollablePaneDefaultExample = /** @class */ (function (_super) {
    tslib_1.__extends(ScrollablePaneDefaultExample, _super);
    function ScrollablePaneDefaultExample(props) {
        var _this = _super.call(this, props) || this;
        _this._createContentArea = function (item) {
            return (React.createElement("div", { key: item.index, style: {
                    backgroundColor: item.color
                } },
                React.createElement(Sticky_1.Sticky, { stickyPosition: Sticky_1.StickyPositionType.Both },
                    React.createElement("div", { className: classNames.sticky },
                        "Sticky Component #",
                        item.index + 1)),
                React.createElement("div", { className: classNames.textContent }, item.text)));
        };
        var colors = ['#eaeaea', '#dadada', '#d0d0d0', '#c8c8c8', '#a6a6a6', '#c7e0f4', '#71afe5', '#eff6fc', '#deecf9'];
        _this._items = [];
        // Using splice prevents the colors from being duplicated
        for (var i = 0; i < 5; i++) {
            _this._items.push({
                color: colors.splice(Math.floor(Math.random() * colors.length), 1)[0],
                text: exampleData_1.lorem(200),
                index: i
            });
        }
        return _this;
    }
    ScrollablePaneDefaultExample.prototype.render = function () {
        var contentAreas = this._items.map(this._createContentArea);
        return (React.createElement("div", { className: classNames.wrapper },
            React.createElement(ScrollablePane_1.ScrollablePane, { styles: { root: classNames.pane } }, contentAreas)));
    };
    return ScrollablePaneDefaultExample;
}(React.Component));
exports.ScrollablePaneDefaultExample = ScrollablePaneDefaultExample;
//# sourceMappingURL=ScrollablePane.Default.Example.js.map