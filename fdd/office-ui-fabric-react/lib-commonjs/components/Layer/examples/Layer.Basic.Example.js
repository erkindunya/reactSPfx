"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var Toggle_1 = require("office-ui-fabric-react/lib/Toggle");
require("office-ui-fabric-react/lib/common/_exampleStyles.scss");
var Layer_1 = require("office-ui-fabric-react/lib/Layer");
var Styling_1 = require("office-ui-fabric-react/lib/Styling");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var PropTypes = require("prop-types");
var React = require("react");
var styles = require("./Layer.Example.scss");
var LayerContentExample = /** @class */ (function (_super) {
    tslib_1.__extends(LayerContentExample, _super);
    function LayerContentExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            time: new Date().toLocaleTimeString()
        };
        return _this;
    }
    LayerContentExample.prototype.componentDidMount = function () {
        var _this = this;
        this._async.setInterval(function () {
            _this.setState({
                time: new Date().toLocaleTimeString()
            });
        }, 1000);
    };
    LayerContentExample.prototype.render = function () {
        return (React.createElement("div", { className: Utilities_1.css(styles.content, Styling_1.AnimationClassNames.scaleUpIn100) },
            React.createElement("div", { className: styles.textContent }, this.context.message),
            React.createElement("div", null, this.state.time)));
    };
    LayerContentExample.contextTypes = {
        message: PropTypes.string
    };
    return LayerContentExample;
}(Utilities_1.BaseComponent));
exports.LayerContentExample = LayerContentExample;
var LayerBasicExample = /** @class */ (function (_super) {
    tslib_1.__extends(LayerBasicExample, _super);
    function LayerBasicExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            showLayer: false
        };
        _this._onChange = function (ev, checked) {
            _this.setState({ showLayer: checked });
        };
        return _this;
    }
    LayerBasicExample.prototype.getChildContext = function () {
        return {
            message: 'Hello world.'
        };
    };
    LayerBasicExample.prototype.render = function () {
        var showLayer = this.state.showLayer;
        return (React.createElement("div", null,
            React.createElement(Toggle_1.Toggle, { label: "Wrap the content box below in a Layer", inlineLabel: true, checked: showLayer, onChange: this._onChange }),
            showLayer ? (React.createElement(Layer_1.Layer, null,
                React.createElement(LayerContentExample, null))) : (React.createElement(LayerContentExample, null))));
    };
    LayerBasicExample.childContextTypes = {
        message: PropTypes.string
    };
    return LayerBasicExample;
}(Utilities_1.BaseComponent));
exports.LayerBasicExample = LayerBasicExample;
//# sourceMappingURL=Layer.Basic.Example.js.map