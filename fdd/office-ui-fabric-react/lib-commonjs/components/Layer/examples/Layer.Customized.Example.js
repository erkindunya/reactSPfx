"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var utilities_1 = require("@uifabric/utilities");
var Toggle_1 = require("office-ui-fabric-react/lib/Toggle");
var Layer_1 = require("office-ui-fabric-react/lib/Layer");
var Panel_1 = require("office-ui-fabric-react/lib/Panel");
var React = require("react");
var LayerCustomizedExample = /** @class */ (function (_super) {
    tslib_1.__extends(LayerCustomizedExample, _super);
    function LayerCustomizedExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showPanel: false,
            trapPanel: false
        };
        // Use getId() to ensure that the ID is unique on the page.
        // (It's also okay to use a plain string without getId() and manually ensure uniqueness.)
        _this._layerHostId = utilities_1.getId('layerHost');
        _this._onDismissPanel = function () {
            _this.setState({
                showPanel: false
            });
        };
        _this._onShowPanelChange = function (event, checked) {
            _this.setState({
                showPanel: !!checked
            });
        };
        _this._onTrapPanelChange = function (event, checked) {
            _this.setState({
                trapPanel: !!checked
            });
        };
        return _this;
    }
    LayerCustomizedExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("p", null,
                "A ",
                React.createElement("code", null, "Panel"),
                " is rendered, trapped in a specified container. Use ",
                React.createElement("b", null, "Show panel"),
                " to show/hide the panel (or click the X to dismiss it). Use ",
                React.createElement("b", null, "Trap panel"),
                " to release the panel from its bounds."),
            React.createElement(Toggle_1.Toggle, { label: "Show panel", inlineLabel: true, checked: this.state.showPanel, onChange: this._onShowPanelChange }),
            React.createElement(Toggle_1.Toggle, { label: "Trap panel", inlineLabel: true, checked: this.state.trapPanel, onChange: this._onTrapPanelChange }),
            React.createElement(utilities_1.Customizer, { scopedSettings: this.state.trapPanel
                    ? {
                        Layer: {
                            hostId: this._layerHostId
                        }
                    }
                    : {} }, this.state.showPanel && (React.createElement(Panel_1.Panel, { isOpen: true, hasCloseButton: true, headerText: "Test", focusTrapZoneProps: {
                    isClickableOutsideFocusTrap: true,
                    forceFocusInsideTrap: false
                }, onDismissed: this._onDismissPanel }))),
            React.createElement(Layer_1.LayerHost, { id: this._layerHostId, style: {
                    position: 'relative',
                    height: '400px',
                    overflow: 'hidden',
                    border: '1px solid #ccc'
                } })));
    };
    return LayerCustomizedExample;
}(React.Component));
exports.LayerCustomizedExample = LayerCustomizedExample;
//# sourceMappingURL=Layer.Customized.Example.js.map