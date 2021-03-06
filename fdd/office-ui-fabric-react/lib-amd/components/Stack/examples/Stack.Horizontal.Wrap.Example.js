define(["require", "exports", "tslib", "react", "office-ui-fabric-react"], function (require, exports, tslib_1, React, office_ui_fabric_react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HorizontalStackWrapExample = /** @class */ (function (_super) {
        tslib_1.__extends(HorizontalStackWrapExample, _super);
        function HorizontalStackWrapExample(props) {
            var _this = _super.call(this, props) || this;
            _this._onWidthChange = function (value) {
                _this.setState({ stackWidth: value });
            };
            _this.state = {
                stackWidth: 100
            };
            return _this;
        }
        HorizontalStackWrapExample.prototype.render = function () {
            var styles = office_ui_fabric_react_1.mergeStyleSets({
                root: {
                    background: office_ui_fabric_react_1.DefaultPalette.themeTertiary,
                    width: this.state.stackWidth + "%",
                    selectors: {
                        '& span': {
                            width: 50,
                            height: 50,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: office_ui_fabric_react_1.DefaultPalette.themePrimary,
                            color: office_ui_fabric_react_1.DefaultPalette.white
                        }
                    }
                }
            });
            var tokens = {
                sectionStack: {
                    childrenGap: 10
                },
                wrapStack: {
                    childrenGap: 30
                }
            };
            return (React.createElement(office_ui_fabric_react_1.Stack, { tokens: tokens.sectionStack },
                React.createElement(office_ui_fabric_react_1.Slider, { label: "Change the stack width to see how child items wrap onto multiple rows:", min: 1, max: 100, step: 1, defaultValue: 100, showValue: true, onChange: this._onWidthChange }),
                React.createElement(office_ui_fabric_react_1.Stack, { horizontal: true, wrap: true, tokens: tokens.wrapStack, className: styles.root },
                    React.createElement("span", null, "1"),
                    React.createElement("span", null, "2"),
                    React.createElement("span", null, "3"),
                    React.createElement("span", null, "4"),
                    React.createElement("span", null, "5"),
                    React.createElement("span", null, "6"),
                    React.createElement("span", null, "7"),
                    React.createElement("span", null, "8"),
                    React.createElement("span", null, "9"),
                    React.createElement("span", null, "10"))));
        };
        return HorizontalStackWrapExample;
    }(React.Component));
    exports.HorizontalStackWrapExample = HorizontalStackWrapExample;
});
//# sourceMappingURL=Stack.Horizontal.Wrap.Example.js.map