define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Panel", "office-ui-fabric-react/lib/Styling", "office-ui-fabric-react/lib/SearchBox"], function (require, exports, tslib_1, React, Button_1, Panel_1, Styling_1, SearchBox_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PanelNavigationExample = /** @class */ (function (_super) {
        tslib_1.__extends(PanelNavigationExample, _super);
        function PanelNavigationExample(props) {
            var _this = _super.call(this, props) || this;
            _this._onClosePanel = function () {
                _this.setState({ showPanel: false });
            };
            _this._onRenderNavigationContent = function (props, defaultRender) {
                var theme = Styling_1.getTheme();
                return (React.createElement(React.Fragment, null,
                    React.createElement(SearchBox_1.SearchBox, { placeholder: "Search here...", styles: {
                            root: {
                                margin: '5px',
                                height: 'auto',
                                width: '100%'
                            }
                        } }),
                    React.createElement(Button_1.IconButton, { styles: {
                            root: {
                                height: 'auto',
                                width: '44px',
                                color: theme.palette.neutralSecondary,
                                fontSize: Styling_1.IconFontSizes.large
                            },
                            menuIcon: {
                                display: 'none'
                            },
                            rootHovered: {
                                color: theme.palette.neutralPrimary
                            }
                        }, menuProps: {
                            items: [
                                {
                                    key: 'home',
                                    text: 'Home',
                                    iconProps: {
                                        iconName: 'Home'
                                    }
                                },
                                {
                                    key: 'refresh',
                                    text: 'Refresh',
                                    iconProps: {
                                        iconName: 'Refresh'
                                    }
                                },
                                {
                                    key: 'back',
                                    text: 'Back',
                                    iconProps: {
                                        iconName: 'Back'
                                    }
                                },
                                {
                                    key: 'forward',
                                    text: 'Forward',
                                    iconProps: {
                                        iconName: 'Forward'
                                    }
                                }
                            ]
                        }, "data-is-visible": true, iconProps: {
                            iconName: 'MoreVertical'
                        } }),
                    defaultRender(props)));
            };
            _this._onShowPanel = function () {
                _this.setState({ showPanel: true });
            };
            _this.state = { showPanel: false };
            return _this;
        }
        PanelNavigationExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(Button_1.DefaultButton, { secondaryText: "Opens the Sample Panel", onClick: this._onShowPanel, text: "Open Panel" }),
                React.createElement(Panel_1.Panel, { isOpen: this.state.showPanel, type: Panel_1.PanelType.smallFixedFar, onDismiss: this._onClosePanel, isFooterAtBottom: true, headerText: "Panel with custom navigation content", closeButtonAriaLabel: "Close", onRenderNavigationContent: this._onRenderNavigationContent },
                    React.createElement("span", null, "Content goes here."))));
        };
        return PanelNavigationExample;
    }(React.Component));
    exports.PanelNavigationExample = PanelNavigationExample;
});
//# sourceMappingURL=Panel.Navigation.Example.js.map