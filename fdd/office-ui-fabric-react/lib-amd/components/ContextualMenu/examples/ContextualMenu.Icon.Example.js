define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/ContextualMenu", "office-ui-fabric-react/lib/Callout", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Icon", "./ContextualMenuExample.scss"], function (require, exports, tslib_1, React, ContextualMenu_1, Callout_1, Button_1, Icon_1, stylesImport) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // tslint:disable-next-line:no-any
    var styles = stylesImport;
    var ContextualMenuIconExample = /** @class */ (function (_super) {
        tslib_1.__extends(ContextualMenuIconExample, _super);
        function ContextualMenuIconExample(props) {
            var _this = _super.call(this, props) || this;
            _this.state = {
                showCallout: false
            };
            return _this;
        }
        ContextualMenuIconExample.prototype.render = function () {
            var _this = this;
            var showCallout = this.state.showCallout;
            return (React.createElement("div", null,
                React.createElement(Button_1.DefaultButton, { text: "Click for ContextualMenu", menuProps: {
                        shouldFocusOnMount: true,
                        items: [
                            {
                                key: 'openInWord',
                                text: 'Open in Word',
                                onRenderIcon: function (props) {
                                    return (React.createElement("span", { className: styles.iconContainer },
                                        React.createElement(Icon_1.Icon, { iconName: 'WordLogoFill16', className: styles.logoFillIcon }),
                                        React.createElement(Icon_1.Icon, { iconName: 'WordLogo16', className: styles.logoIcon })));
                                }
                            },
                            {
                                key: 'newItem',
                                iconProps: {
                                    iconName: 'Add'
                                },
                                text: 'New'
                            },
                            {
                                key: 'upload',
                                onClick: function () {
                                    _this.setState({ showCallout: true });
                                },
                                iconProps: {
                                    iconName: 'Upload',
                                    style: {
                                        color: 'salmon'
                                    }
                                },
                                text: 'Upload (Click for popup)',
                                title: 'Upload a file'
                            },
                            {
                                key: 'divider_1',
                                itemType: ContextualMenu_1.ContextualMenuItemType.Divider
                            },
                            {
                                key: 'share',
                                iconProps: {
                                    iconName: 'Share'
                                },
                                text: 'Share'
                            },
                            {
                                key: 'print',
                                iconProps: {
                                    iconName: 'Print'
                                },
                                text: 'Print'
                            },
                            {
                                key: 'music',
                                iconProps: {
                                    iconName: 'MusicInCollectionFill'
                                },
                                text: 'Music'
                            }
                        ]
                    } }),
                showCallout && (React.createElement(Callout_1.Callout, { setInitialFocus: true, 
                    // tslint:disable-next-line:jsx-no-lambda
                    onDismiss: function () { return _this.setState({ showCallout: false }); } },
                    React.createElement(Button_1.DefaultButton
                    // tslint:disable-next-line:jsx-no-lambda
                    , { 
                        // tslint:disable-next-line:jsx-no-lambda
                        onClick: function () { return _this.setState({ showCallout: false }); }, text: "Hello Popup" })))));
        };
        return ContextualMenuIconExample;
    }(React.Component));
    exports.ContextualMenuIconExample = ContextualMenuIconExample;
});
//# sourceMappingURL=ContextualMenu.Icon.Example.js.map