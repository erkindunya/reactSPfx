define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Checkbox", "office-ui-fabric-react/lib/ContextualMenu", "office-ui-fabric-react/lib/Dropdown", "office-ui-fabric-react/lib/Utilities", "../../../common/_exampleStyles.scss", "./ContextualMenuExample.scss"], function (require, exports, tslib_1, React, Button_1, Checkbox_1, ContextualMenu_1, Dropdown_1, Utilities_1, exampleStylesImport) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var exampleStyles = exampleStylesImport;
    var DIRECTION_OPTIONS = [
        { key: ContextualMenu_1.DirectionalHint.topLeftEdge, text: 'Top Left Edge' },
        { key: ContextualMenu_1.DirectionalHint.topCenter, text: 'Top Center' },
        { key: ContextualMenu_1.DirectionalHint.topRightEdge, text: 'Top Right Edge' },
        { key: ContextualMenu_1.DirectionalHint.topAutoEdge, text: 'Top Auto Edge' },
        { key: ContextualMenu_1.DirectionalHint.bottomLeftEdge, text: 'Bottom Left Edge' },
        { key: ContextualMenu_1.DirectionalHint.bottomCenter, text: 'Bottom Center' },
        { key: ContextualMenu_1.DirectionalHint.bottomRightEdge, text: 'Bottom Right Edge' },
        { key: ContextualMenu_1.DirectionalHint.bottomAutoEdge, text: 'Bottom Auto Edge' },
        { key: ContextualMenu_1.DirectionalHint.leftTopEdge, text: 'Left Top Edge' },
        { key: ContextualMenu_1.DirectionalHint.leftCenter, text: 'Left Center' },
        { key: ContextualMenu_1.DirectionalHint.leftBottomEdge, text: 'Left Bottom Edge' },
        { key: ContextualMenu_1.DirectionalHint.rightTopEdge, text: 'Right Top Edge' },
        { key: ContextualMenu_1.DirectionalHint.rightCenter, text: 'Right Center' },
        { key: ContextualMenu_1.DirectionalHint.rightBottomEdge, text: 'Right Bottom Edge' }
    ];
    var ContextualMenuDirectionalExample = /** @class */ (function (_super) {
        tslib_1.__extends(ContextualMenuDirectionalExample, _super);
        function ContextualMenuDirectionalExample(props) {
            var _this = _super.call(this, props) || this;
            _this._onShowBeakChange = function (event, isVisible) {
                _this.setState({
                    isBeakVisible: isVisible
                });
            };
            _this._onUseRtlHintChange = function (event, isVisible) {
                _this.setState({
                    useDirectionalHintForRtl: isVisible
                });
            };
            _this._onDirectionalChanged = function (event, option) {
                _this.setState({
                    directionalHint: option.key
                });
            };
            _this._onDirectionalRtlChanged = function (event, option) {
                _this.setState({
                    directionalHintForRTL: option.key
                });
            };
            _this.state = {
                isBeakVisible: false,
                directionalHint: ContextualMenu_1.DirectionalHint.bottomLeftEdge,
                directionalHintForRTL: ContextualMenu_1.DirectionalHint.bottomLeftEdge,
                useDirectionalHintForRtl: false,
                gapSpace: 0,
                beakWidth: 20,
                edgeFixed: false
            };
            return _this;
        }
        ContextualMenuDirectionalExample.prototype.render = function () {
            var _a = this.state, beakWidth = _a.beakWidth, directionalHint = _a.directionalHint, directionalHintForRTL = _a.directionalHintForRTL, edgeFixed = _a.edgeFixed, gapSpace = _a.gapSpace, isBeakVisible = _a.isBeakVisible, useDirectionalHintForRtl = _a.useDirectionalHintForRtl;
            return (React.createElement("div", { className: "ms-ContextualMenuDirectionalExample" },
                React.createElement("div", { className: "ms-ContextualMenuDirectionalExample-configArea" },
                    React.createElement(Checkbox_1.Checkbox, { className: exampleStyles.exampleCheckbox, label: "Show beak", checked: isBeakVisible, onChange: this._onShowBeakChange }),
                    React.createElement(Dropdown_1.Dropdown, { label: "Directional hint", selectedKey: directionalHint, options: DIRECTION_OPTIONS, onChange: this._onDirectionalChanged }),
                    Utilities_1.getRTL() && React.createElement(Checkbox_1.Checkbox, { label: "Use RTL directional hint", checked: useDirectionalHintForRtl, onChange: this._onUseRtlHintChange }),
                    Utilities_1.getRTL() && (React.createElement(Dropdown_1.Dropdown, { label: "Directional hint for RTL", selectedKey: directionalHintForRTL, options: DIRECTION_OPTIONS, onChange: this._onDirectionalRtlChanged, disabled: !useDirectionalHintForRtl }))),
                React.createElement("div", { className: "ms-ContextualMenuDirectionalExample-buttonArea" },
                    React.createElement(Button_1.DefaultButton, { text: "Show context menu", menuProps: {
                            isBeakVisible: isBeakVisible,
                            directionalHint: directionalHint,
                            directionalHintForRTL: useDirectionalHintForRtl ? directionalHintForRTL : undefined,
                            gapSpace: gapSpace,
                            beakWidth: beakWidth,
                            directionalHintFixed: edgeFixed,
                            items: [
                                {
                                    key: 'newItem',
                                    text: 'New'
                                },
                                {
                                    key: 'divider_1',
                                    itemType: ContextualMenu_1.ContextualMenuItemType.Divider
                                },
                                {
                                    key: 'rename',
                                    text: 'Rename'
                                },
                                {
                                    key: 'edit',
                                    text: 'Edit'
                                },
                                {
                                    key: 'properties',
                                    text: 'Properties'
                                },
                                {
                                    key: 'disabled',
                                    text: 'Disabled item',
                                    disabled: true
                                }
                            ]
                        } }))));
        };
        return ContextualMenuDirectionalExample;
    }(React.Component));
    exports.ContextualMenuDirectionalExample = ContextualMenuDirectionalExample;
});
//# sourceMappingURL=ContextualMenu.Directional.Example.js.map