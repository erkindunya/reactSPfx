"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var ChoiceGroup_1 = require("office-ui-fabric-react/lib/ChoiceGroup");
var Panel_1 = require("office-ui-fabric-react/lib/Panel");
var React = require("react");
var PanelSmallRightExample = /** @class */ (function (_super) {
    tslib_1.__extends(PanelSmallRightExample, _super);
    function PanelSmallRightExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showPanel: false
        };
        _this._onRenderFooterContent = function () {
            return (React.createElement("div", null,
                React.createElement(Button_1.PrimaryButton, { onClick: _this._hidePanel, style: { marginRight: '8px' } }, "Save"),
                React.createElement(Button_1.DefaultButton, { onClick: _this._showPanel }, "Cancel")));
        };
        _this._showPanel = function () {
            _this.setState({ showPanel: true });
        };
        _this._hidePanel = function () {
            _this.setState({ showPanel: false });
        };
        return _this;
    }
    PanelSmallRightExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Button_1.DefaultButton, { secondaryText: "Opens the Sample Panel", onClick: this._showPanel, text: "Open Panel" }),
            React.createElement(Panel_1.Panel, { isOpen: this.state.showPanel, type: Panel_1.PanelType.smallFixedFar, onDismiss: this._hidePanel, headerText: "Panel - Small, right-aligned, fixed, with footer", closeButtonAriaLabel: "Close", onRenderFooterContent: this._onRenderFooterContent },
                React.createElement(ChoiceGroup_1.ChoiceGroup, { options: [
                        {
                            key: 'A',
                            text: 'Option A'
                        },
                        {
                            key: 'B',
                            text: 'Option B',
                            checked: true
                        },
                        {
                            key: 'C',
                            text: 'Option C',
                            disabled: true
                        },
                        {
                            key: 'D',
                            text: 'Option D',
                            checked: true,
                            disabled: true
                        }
                    ], label: "Pick one", required: true }))));
    };
    return PanelSmallRightExample;
}(React.Component));
exports.PanelSmallRightExample = PanelSmallRightExample;
//# sourceMappingURL=Panel.SmallRight.Example.js.map