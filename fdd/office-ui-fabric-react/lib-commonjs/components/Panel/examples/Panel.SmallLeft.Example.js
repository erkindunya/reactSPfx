"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var Panel_1 = require("office-ui-fabric-react/lib/Panel");
var React = require("react");
var PanelSmallLeftExample = /** @class */ (function (_super) {
    tslib_1.__extends(PanelSmallLeftExample, _super);
    function PanelSmallLeftExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showPanel: false
        };
        _this._showPanel = function () {
            _this.setState({ showPanel: true });
        };
        _this._hidePanel = function () {
            _this.setState({ showPanel: false });
        };
        return _this;
    }
    PanelSmallLeftExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(Button_1.DefaultButton, { secondaryText: "Opens the Sample Panel", onClick: this._showPanel, text: "Open Panel" }),
            React.createElement(Panel_1.Panel, { isOpen: this.state.showPanel, type: Panel_1.PanelType.smallFixedNear, onDismiss: this._hidePanel, headerText: "Panel - Small, left-aligned, fixed" },
                React.createElement("span", null, "Content goes here."))));
    };
    return PanelSmallLeftExample;
}(React.Component));
exports.PanelSmallLeftExample = PanelSmallLeftExample;
//# sourceMappingURL=Panel.SmallLeft.Example.js.map