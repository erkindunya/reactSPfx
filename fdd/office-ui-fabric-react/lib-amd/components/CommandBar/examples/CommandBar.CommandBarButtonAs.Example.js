define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/CommandBar", "office-ui-fabric-react/lib/Callout", "office-ui-fabric-react/lib/Coachmark", "office-ui-fabric-react/lib/Utilities", "office-ui-fabric-react/lib/TeachingBubble", "office-ui-fabric-react/lib/Button"], function (require, exports, tslib_1, React, CommandBar_1, Callout_1, Coachmark_1, Utilities_1, TeachingBubble_1, Button_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CoachmarkCommandBarButton = /** @class */ (function (_super) {
        tslib_1.__extends(CoachmarkCommandBarButton, _super);
        function CoachmarkCommandBarButton() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._targetButton = React.createRef();
            return _this;
        }
        CoachmarkCommandBarButton.prototype.render = function () {
            var _a = this.props, _b = _a.defaultRender, DefaultRender = _b === void 0 ? Button_1.CommandBarButton : _b, isCoachmarkVisible = _a.isCoachmarkVisible, onDismiss = _a.onDismiss, buttonProps = tslib_1.__rest(_a, ["defaultRender", "isCoachmarkVisible", "onDismiss"]);
            return (React.createElement(React.Fragment, null,
                React.createElement("div", { ref: this._targetButton },
                    React.createElement(DefaultRender, tslib_1.__assign({}, buttonProps))),
                isCoachmarkVisible && (React.createElement(Coachmark_1.Coachmark, { target: this._targetButton.current, positioningContainerProps: {
                        directionalHint: Callout_1.DirectionalHint.bottomCenter
                    }, ariaAlertText: "A Coachmark has appeared", ariaDescribedBy: 'coachmark-desc1', ariaLabelledBy: 'coachmark-label1', ariaLabelledByText: 'Coachmark notification' },
                    React.createElement(TeachingBubble_1.TeachingBubbleContent, { headline: "Example Title", hasCloseIcon: true, closeButtonAriaLabel: "Close", onDismiss: onDismiss, ariaDescribedBy: 'example-description1', ariaLabelledBy: 'example-label1' }, "Welcome to the land of Coachmarks!")))));
        };
        return CoachmarkCommandBarButton;
    }(Utilities_1.BaseComponent));
    var IndividualCommandBarButtonAsExample = /** @class */ (function (_super) {
        tslib_1.__extends(IndividualCommandBarButtonAsExample, _super);
        function IndividualCommandBarButtonAsExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            // Data for CommandBar
            _this._getItems = function () {
                var _a = _this.props, onDismissCoachmark = _a.onDismissCoachmark, isCoachmarkVisible = _a.isCoachmarkVisible;
                var customCommandBarButton = function (props) {
                    return React.createElement(CoachmarkCommandBarButton, tslib_1.__assign({}, props, { isCoachmarkVisible: isCoachmarkVisible, onDismiss: onDismissCoachmark }));
                };
                return [
                    {
                        key: 'newItem',
                        name: 'New',
                        cacheKey: 'myCacheKey',
                        iconProps: {
                            iconName: 'Add'
                        },
                        ariaLabel: 'New',
                        subMenuProps: {
                            items: [
                                (_b = {
                                        key: 'emailMessage',
                                        name: 'Email message',
                                        iconProps: {
                                            iconName: 'Mail'
                                        }
                                    },
                                    _b['data-automation-id'] = 'newEmailButton',
                                    _b),
                                {
                                    key: 'calendarEvent',
                                    name: 'Calendar event',
                                    iconProps: {
                                        iconName: 'Calendar'
                                    }
                                }
                            ]
                        }
                    },
                    (_c = {
                            key: 'upload',
                            name: 'Upload',
                            iconProps: {
                                iconName: 'Upload'
                            },
                            href: 'https://dev.office.com/fabric'
                        },
                        _c['data-automation-id'] = 'uploadButton',
                        _c),
                    {
                        key: 'share',
                        name: 'Share',
                        iconProps: {
                            iconName: 'Share'
                        },
                        commandBarButtonAs: customCommandBarButton,
                        onClick: function () { return console.log('Share'); }
                    },
                    {
                        key: 'download',
                        name: 'Download',
                        iconProps: {
                            iconName: 'Download'
                        },
                        onClick: function () { return console.log('Download'); }
                    }
                ];
                var _b, _c;
            };
            _this.getOverlflowItems = function () {
                return [
                    {
                        key: 'move',
                        name: 'Move to...',
                        onClick: function () { return console.log('Move to'); },
                        iconProps: {
                            iconName: 'MoveToFolder'
                        }
                    },
                    {
                        key: 'copy',
                        name: 'Copy to...',
                        onClick: function () { return console.log('Copy to'); },
                        iconProps: {
                            iconName: 'Copy'
                        }
                    },
                    {
                        key: 'rename',
                        name: 'Rename...',
                        onClick: function () { return console.log('Rename'); },
                        iconProps: {
                            iconName: 'Edit'
                        }
                    }
                ];
            };
            _this.getFarItems = function () {
                return [
                    {
                        key: 'sort',
                        name: 'Sort',
                        ariaLabel: 'Sort',
                        iconProps: {
                            iconName: 'SortLines'
                        },
                        onClick: function () { return console.log('Sort'); }
                    },
                    {
                        key: 'tile',
                        name: 'Grid view',
                        ariaLabel: 'Grid view',
                        iconProps: {
                            iconName: 'Tiles'
                        },
                        iconOnly: true,
                        onClick: function () { return console.log('Tiles'); }
                    },
                    {
                        key: 'info',
                        name: 'Info',
                        ariaLabel: 'Info',
                        iconProps: {
                            iconName: 'Info'
                        },
                        iconOnly: true,
                        onClick: function () { return console.log('Info'); }
                    }
                ];
            };
            return _this;
        }
        IndividualCommandBarButtonAsExample.prototype.render = function () {
            return (React.createElement(CommandBar_1.CommandBar, { overflowButtonProps: {
                    ariaLabel: 'More commands',
                    menuProps: {
                        items: [],
                        isBeakVisible: true,
                        beakWidth: 20,
                        gapSpace: 10,
                        directionalHint: Callout_1.DirectionalHint.topCenter
                    }
                }, items: this._getItems(), overflowItems: this.getOverlflowItems(), farItems: this.getFarItems(), ariaLabel: 'Use left and right arrow keys to navigate between commands' }));
        };
        return IndividualCommandBarButtonAsExample;
    }(React.Component));
    exports.IndividualCommandBarButtonAsExample = IndividualCommandBarButtonAsExample;
    var IndividualCommandBarButtonAsExampleWrapper = /** @class */ (function (_super) {
        tslib_1.__extends(IndividualCommandBarButtonAsExampleWrapper, _super);
        function IndividualCommandBarButtonAsExampleWrapper(props) {
            var _this = _super.call(this, props) || this;
            _this._onDismissCoachmark = function () {
                _this.setState({
                    isCoachmarkVisible: false
                });
            };
            _this.state = {
                isCoachmarkVisible: true
            };
            return _this;
        }
        IndividualCommandBarButtonAsExampleWrapper.prototype.render = function () {
            var isCoachmarkVisible = this.state.isCoachmarkVisible;
            return React.createElement(IndividualCommandBarButtonAsExample, { onDismissCoachmark: this._onDismissCoachmark, isCoachmarkVisible: isCoachmarkVisible });
        };
        return IndividualCommandBarButtonAsExampleWrapper;
    }(React.Component));
    exports.IndividualCommandBarButtonAsExampleWrapper = IndividualCommandBarButtonAsExampleWrapper;
});
//# sourceMappingURL=CommandBar.CommandBarButtonAs.Example.js.map