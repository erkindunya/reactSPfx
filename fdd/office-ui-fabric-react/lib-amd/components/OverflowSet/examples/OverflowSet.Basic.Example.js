define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Link", "office-ui-fabric-react/lib/OverflowSet"], function (require, exports, tslib_1, React, Button_1, Link_1, OverflowSet_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var noOp = function () { return undefined; };
    var OverflowSetBasicExample = /** @class */ (function (_super) {
        tslib_1.__extends(OverflowSetBasicExample, _super);
        function OverflowSetBasicExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._onRenderItem = function (item) {
                return (React.createElement(Link_1.Link, { styles: { root: { marginRight: 10 } }, onClick: item.onClick }, item.name));
            };
            _this._onRenderOverflowButton = function (overflowItems) {
                var buttonStyles = {
                    root: {
                        minWidth: 0,
                        padding: '0 4px',
                        alignSelf: 'stretch',
                        height: 'auto'
                    }
                };
                return React.createElement(Button_1.IconButton, { styles: buttonStyles, menuIconProps: { iconName: 'More' }, menuProps: { items: overflowItems } });
            };
            return _this;
        }
        OverflowSetBasicExample.prototype.render = function () {
            return (React.createElement(OverflowSet_1.OverflowSet, { items: [
                    {
                        key: 'item1',
                        name: 'Link 1',
                        onClick: noOp
                    },
                    {
                        key: 'item2',
                        name: 'Link 2',
                        onClick: noOp
                    },
                    {
                        key: 'item3',
                        name: 'Link 3',
                        onClick: noOp
                    }
                ], overflowItems: [
                    {
                        key: 'item4',
                        name: 'Overflow Link 1',
                        onClick: noOp
                    },
                    {
                        key: 'item5',
                        name: 'Overflow Link 2',
                        onClick: noOp
                    }
                ], onRenderOverflowButton: this._onRenderOverflowButton, onRenderItem: this._onRenderItem }));
        };
        return OverflowSetBasicExample;
    }(React.PureComponent));
    exports.OverflowSetBasicExample = OverflowSetBasicExample;
});
//# sourceMappingURL=OverflowSet.Basic.Example.js.map