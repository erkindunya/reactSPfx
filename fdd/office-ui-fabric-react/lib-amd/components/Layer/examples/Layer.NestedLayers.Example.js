define(["require", "exports", "tslib", "office-ui-fabric-react/lib/Button", "office-ui-fabric-react/lib/Dialog", "office-ui-fabric-react/lib/Panel", "react"], function (require, exports, tslib_1, Button_1, Dialog_1, Panel_1, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LayerNestedLayersExample = /** @class */ (function (_super) {
        tslib_1.__extends(LayerNestedLayersExample, _super);
        function LayerNestedLayersExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                hideDialog: true,
                showPanel: false
            };
            _this._showDialog = function () {
                _this.setState({ hideDialog: false });
            };
            _this._dismissDialog = function () {
                _this.setState({ hideDialog: true });
            };
            _this._dismissPanel = function () {
                _this.setState({ showPanel: false });
            };
            _this._onShowPanel = function () {
                _this.setState({ showPanel: true });
            };
            return _this;
        }
        LayerNestedLayersExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(Button_1.DefaultButton, { secondaryText: "Opens the Sample Panel", onClick: this._onShowPanel, text: "Open Panel" }),
                React.createElement(Panel_1.Panel, { isOpen: this.state.showPanel, type: Panel_1.PanelType.smallFixedFar, onDismiss: this._dismissPanel, headerText: "This panel makes use of Layer and FocusTrapZone. Focus should be trapped in the panel.", closeButtonAriaLabel: "Close" },
                    React.createElement(Button_1.DefaultButton, { secondaryText: "Opens the Sample Dialog", onClick: this._showDialog, text: "Open Dialog" }),
                    React.createElement(Dialog_1.Dialog, { hidden: this.state.hideDialog, onDismiss: this._dismissDialog, isBlocking: true, dialogContentProps: {
                            type: Dialog_1.DialogType.normal,
                            title: 'This dialog uses Modal, which also makes use of Layer and FocusTrapZone. Focus should be trapped in the dialog.',
                            subText: "Focus will move back to the panel if you press 'OK' or 'Cancel'."
                        }, modalProps: {
                            titleAriaId: 'myLabelId',
                            subtitleAriaId: 'mySubTextId',
                            isBlocking: false,
                            styles: { main: { maxWidth: 450 } }
                        } },
                        React.createElement(Dialog_1.DialogFooter, null,
                            React.createElement(Button_1.PrimaryButton, { onClick: this._dismissDialog, text: "OK" }),
                            React.createElement(Button_1.DefaultButton, { onClick: this._dismissDialog, text: "Cancel" }))))));
        };
        return LayerNestedLayersExample;
    }(React.Component));
    exports.LayerNestedLayersExample = LayerNestedLayersExample;
});
//# sourceMappingURL=Layer.NestedLayers.Example.js.map