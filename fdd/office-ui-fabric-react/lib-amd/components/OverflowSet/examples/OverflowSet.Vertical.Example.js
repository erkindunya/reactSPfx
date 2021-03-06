define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Tooltip", "office-ui-fabric-react/lib/OverflowSet"], function (require, exports, tslib_1, React, Button_1, Tooltip_1, OverflowSet_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var noOp = function () { return undefined; };
    var OverflowSetVerticalExample = /** @class */ (function (_super) {
        tslib_1.__extends(OverflowSetVerticalExample, _super);
        function OverflowSetVerticalExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._onRenderItem = function (item) {
                return (React.createElement(Tooltip_1.TooltipHost, { content: item.name, calloutProps: { directionalHint: Tooltip_1.DirectionalHint.rightCenter, beakWidth: 12 } },
                    React.createElement(Button_1.CommandBarButton, { styles: { root: { padding: '10px' } }, iconProps: { iconName: item.icon }, onClick: item.onClick })));
            };
            _this._onRenderOverflowButton = function (overflowItems) {
                return (React.createElement(Button_1.CommandBarButton, { styles: { root: { padding: '10px' }, menuIcon: { fontSize: '16px' } }, menuIconProps: { iconName: 'More' }, menuProps: { items: overflowItems } }));
            };
            return _this;
        }
        OverflowSetVerticalExample.prototype.render = function () {
            return (React.createElement(OverflowSet_1.OverflowSet, { vertical: true, items: [
                    {
                        key: 'item1',
                        icon: 'Add',
                        name: 'Link 1',
                        ariaLabel: 'New. Use left and right arrow keys to navigate',
                        onClick: noOp
                    },
                    {
                        key: 'item2',
                        icon: 'Upload',
                        name: 'Link 2',
                        onClick: noOp
                    },
                    {
                        key: 'item3',
                        icon: 'Share',
                        name: 'Link 3',
                        onClick: noOp
                    }
                ], overflowItems: [
                    {
                        key: 'item4',
                        icon: 'Mail',
                        name: 'Overflow Link 1',
                        onClick: noOp
                    },
                    {
                        key: 'item5',
                        icon: 'Calendar',
                        name: 'Overflow Link 2',
                        onClick: noOp
                    }
                ], onRenderOverflowButton: this._onRenderOverflowButton, onRenderItem: this._onRenderItem }));
        };
        return OverflowSetVerticalExample;
    }(React.PureComponent));
    exports.OverflowSetVerticalExample = OverflowSetVerticalExample;
});
//# sourceMappingURL=OverflowSet.Vertical.Example.js.map