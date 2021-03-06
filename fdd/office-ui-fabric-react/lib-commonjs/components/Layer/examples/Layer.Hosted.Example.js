"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Toggle_1 = require("office-ui-fabric-react/lib/Toggle");
var exampleStyles = require("office-ui-fabric-react/lib/common/_exampleStyles.scss");
var Layer_1 = require("office-ui-fabric-react/lib/Layer");
var Styling_1 = require("office-ui-fabric-react/lib/Styling");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var React = require("react");
var styles = require("./Layer.Example.scss");
var rootClass = Styling_1.mergeStyles({
    selectors: { p: { marginTop: 30 } }
});
var LayerHostedExample = /** @class */ (function (_super) {
    tslib_1.__extends(LayerHostedExample, _super);
    function LayerHostedExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showLayer: false,
            showLayerNoId: false,
            showHost: true
        };
        // Use getId() to ensure that the ID is unique on the page.
        // (It's also okay to use a plain string without getId() and manually ensure uniqueness.)
        _this._layerHostId = Utilities_1.getId('layerhost');
        _this._onChangeCheckbox = function (ev, checked) {
            _this.setState({ showLayer: checked });
        };
        _this._onChangeCheckboxNoId = function (ev, checked) {
            _this.setState({ showLayerNoId: checked });
        };
        _this._onChangeToggle = function (ev, checked) {
            _this.setState({ showHost: checked });
        };
        return _this;
    }
    LayerHostedExample.prototype.render = function () {
        var _a = this.state, showLayer = _a.showLayer, showLayerNoId = _a.showLayerNoId, showHost = _a.showHost;
        var content = React.createElement("div", { className: Utilities_1.css(styles.content, Styling_1.AnimationClassNames.scaleUpIn100) }, "This is example layer content.");
        return (React.createElement("div", { className: rootClass },
            React.createElement(Toggle_1.Toggle, { label: "Show host", inlineLabel: true, checked: showHost, onChange: this._onChangeToggle }),
            showHost && React.createElement(Layer_1.LayerHost, { id: this._layerHostId, className: styles.customHost }),
            React.createElement("p", null, "In some cases, you may need to contain layered content within an area. Create an instance of a LayerHost along with an id, and provide a hostId on the layer to render it within the specific host. (Note that it's important that you don't include children within the LayerHost. It's meant to contain Layered content only.)"),
            React.createElement(Toggle_1.Toggle, { className: exampleStyles.exampleCheckbox, label: "Render the box below in a Layer and target it at hostId=" + this._layerHostId, inlineLabel: true, checked: showLayer, onChange: this._onChangeCheckbox }),
            showLayer ? (React.createElement(Layer_1.Layer, { hostId: this._layerHostId, onLayerDidMount: this._log('didmount'), onLayerWillUnmount: this._log('willunmount') }, content)) : (content),
            React.createElement("div", { className: styles.nonLayered }, "I am normally below the content."),
            React.createElement("p", null, "If you do not specify a hostId, the hosted layer will default to being fixed to the page by default."),
            React.createElement(Toggle_1.Toggle, { className: exampleStyles.exampleCheckbox, label: "Render the box below in a Layer without specifying a host, fixing it to the top of the page", inlineLabel: true, checked: showLayerNoId, onChange: this._onChangeCheckboxNoId }),
            showLayerNoId ? (React.createElement(Layer_1.Layer, { onLayerDidMount: this._log('didmount'), onLayerWillUnmount: this._log('willunmount') }, content)) : (content)));
    };
    LayerHostedExample.prototype._log = function (text) {
        return function () {
            console.log(text);
        };
    };
    return LayerHostedExample;
}(React.Component));
exports.LayerHostedExample = LayerHostedExample;
//# sourceMappingURL=Layer.Hosted.Example.js.map