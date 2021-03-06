define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Button"], function (require, exports, tslib_1, React, Button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ContextualMenuIconSecondaryTextExample = /** @class */ (function (_super) {
        tslib_1.__extends(ContextualMenuIconSecondaryTextExample, _super);
        function ContextualMenuIconSecondaryTextExample(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                showCallout: false
            };
            return _this;
        }
        ContextualMenuIconSecondaryTextExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(Button_1.DefaultButton, { text: "Click for ContextualMenu", menuProps: {
                        shouldFocusOnMount: true,
                        items: [
                            {
                                key: 'Later Today',
                                iconProps: {
                                    iconName: 'Clock'
                                },
                                text: 'Later Today',
                                secondaryText: '7:00 PM'
                            },
                            {
                                key: 'Tomorrow',
                                iconProps: {
                                    iconName: 'Coffeescript'
                                },
                                text: 'Tomorrow',
                                secondaryText: 'Thu. 8:00 AM'
                            },
                            {
                                key: 'This Weekend',
                                iconProps: {
                                    iconName: 'Vacation'
                                },
                                text: 'This Weekend',
                                secondaryText: 'Sat. 10:00 AM'
                            },
                            {
                                key: 'Next Week',
                                iconProps: {
                                    iconName: 'Suitcase'
                                },
                                text: 'Next Week',
                                secondaryText: 'Mon. 8:00 AM'
                            }
                        ]
                    } })));
        };
        return ContextualMenuIconSecondaryTextExample;
    }(React.Component));
    exports.ContextualMenuIconSecondaryTextExample = ContextualMenuIconSecondaryTextExample;
});
//# sourceMappingURL=ContextualMenu.Icon.SecondaryText.Example.js.map