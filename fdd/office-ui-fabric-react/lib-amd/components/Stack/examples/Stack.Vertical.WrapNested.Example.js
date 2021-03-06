define(["require", "exports", "tslib", "react", "office-ui-fabric-react"], function (require, exports, tslib_1, React, office_ui_fabric_react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var VerticalStackWrapNestedExample = /** @class */ (function (_super) {
        tslib_1.__extends(VerticalStackWrapNestedExample, _super);
        function VerticalStackWrapNestedExample(props) {
            var _this = _super.call(this, props) || this;
            _this._onHeightChange = function (value) {
                _this.setState({ stackHeight: value });
            };
            _this.state = {
                stackHeight: 420
            };
            return _this;
        }
        VerticalStackWrapNestedExample.prototype.render = function () {
            var textStyles = {
                width: 50,
                height: 50,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: office_ui_fabric_react_1.DefaultPalette.white
            };
            var stackHeight = this.state.stackHeight;
            var styles = office_ui_fabric_react_1.mergeStyleSets({
                root: {
                    background: office_ui_fabric_react_1.DefaultPalette.themeTertiary,
                    height: stackHeight
                },
                stackOne: {
                    background: office_ui_fabric_react_1.DefaultPalette.neutralTertiary,
                    selectors: {
                        '& span': tslib_1.__assign({}, textStyles, { background: office_ui_fabric_react_1.DefaultPalette.themePrimary })
                    }
                },
                stackTwo: {
                    background: office_ui_fabric_react_1.DefaultPalette.neutralSecondary,
                    selectors: {
                        '& span': tslib_1.__assign({}, textStyles, { background: office_ui_fabric_react_1.DefaultPalette.themeDark })
                    }
                },
                stackThree: {
                    background: office_ui_fabric_react_1.DefaultPalette.neutralPrimary,
                    selectors: {
                        '& span': tslib_1.__assign({}, textStyles, { background: office_ui_fabric_react_1.DefaultPalette.themeDarker })
                    }
                }
            });
            var tokens = {
                sectionStack: {
                    childrenGap: 10
                },
                wrapStack: {
                    childrenGap: '30 40'
                },
                firstStack: {
                    childrenGap: '10 30'
                },
                secondStack: {
                    childrenGap: '20 50'
                }
            };
            return (React.createElement(office_ui_fabric_react_1.Stack, { tokens: tokens.sectionStack },
                React.createElement(office_ui_fabric_react_1.Slider, { label: "Change the stack height to see how child items wrap onto multiple columns:", min: 1, max: 420, step: 1, defaultValue: 420, showValue: true, onChange: this._onHeightChange }),
                React.createElement(office_ui_fabric_react_1.Stack, { wrap: true, tokens: tokens.wrapStack, className: styles.root },
                    React.createElement(office_ui_fabric_react_1.Stack, { wrap: true, tokens: tokens.firstStack, className: styles.stackOne },
                        React.createElement("span", null, "1"),
                        React.createElement("span", null, "2"),
                        React.createElement("span", null, "3"),
                        React.createElement("span", null, "4"),
                        React.createElement("span", null, "5"),
                        React.createElement("span", null, "6"),
                        React.createElement("span", null, "7")),
                    React.createElement(office_ui_fabric_react_1.Stack, { wrap: true, tokens: tokens.secondStack, className: styles.stackTwo },
                        React.createElement("span", null, "1"),
                        React.createElement("span", null, "2"),
                        React.createElement("span", null, "3")),
                    React.createElement(office_ui_fabric_react_1.Stack, { wrap: true, className: styles.stackThree },
                        React.createElement("span", null, "1"),
                        React.createElement("span", null, "2"),
                        React.createElement("span", null, "3"),
                        React.createElement("span", null, "4"),
                        React.createElement("span", null, "5"),
                        React.createElement("span", null, "6"),
                        React.createElement("span", null, "7"),
                        React.createElement("span", null, "8"),
                        React.createElement("span", null, "9"),
                        React.createElement("span", null, "10"))),
                React.createElement("span", null,
                    React.createElement("b", null, "Note:")),
                React.createElement("span", null, "Support for nested wrapping of vertical flex-boxes is scarce across browsers, especially in the way they handle overflows."),
                React.createElement("span", null, "Most browsers don't scale the width of the flex-box when the inner items overflow and wrap around it."),
                React.createElement("span", null, "The one exception to this case being Microsoft Edge that handles it correctly (though this might go soon with the switch to Chromium)."),
                React.createElement("span", null, "There are ways in which we could have gone around this issue."),
                React.createElement("span", null, "However, we have chosen to adhere to the flex-box spec so that we have the correct implementation if support comes down the line.")));
        };
        return VerticalStackWrapNestedExample;
    }(React.Component));
    exports.VerticalStackWrapNestedExample = VerticalStackWrapNestedExample;
});
//# sourceMappingURL=Stack.Vertical.WrapNested.Example.js.map