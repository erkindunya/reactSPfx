define(["require", "exports", "tslib", "react", "office-ui-fabric-react"], function (require, exports, tslib_1, React, office_ui_fabric_react_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var PositioningContainerBasicExample = /** @class */ (function (_super) {
        tslib_1.__extends(PositioningContainerBasicExample, _super);
        function PositioningContainerBasicExample(props) {
            var _this = _super.call(this, props) || this;
            _this._onShowMenuClicked = _this._onShowMenuClicked.bind(_this);
            _this._onDismiss = _this._onDismiss.bind(_this);
            _this.state = {
                isPositioningContainerVisible: false
            };
            return _this;
        }
        PositioningContainerBasicExample.prototype.render = function () {
            var isPositioningContainerVisible = this.state.isPositioningContainerVisible;
            return (React.createElement("div", null,
                React.createElement("div", { className: "ms-PositioningContainerBasicExample-buttonArea" },
                    React.createElement(office_ui_fabric_react_1.DefaultButton, { onClick: this._onShowMenuClicked, text: isPositioningContainerVisible ? 'Hide Positioning Container' : 'Show Positioning Container', className: 'ms-PositioningContainer-basicExampleButton' })),
                isPositioningContainerVisible && (React.createElement(office_ui_fabric_react_1.PositioningContainer, { className: "ms-PositioningContainer", role: 'alertdialog', target: '.ms-PositioningContainer-basicExampleButton', onDismiss: this._onDismiss, setInitialFocus: true },
                    React.createElement("h1", null, "An H1 element")))));
        };
        PositioningContainerBasicExample.prototype._onShowMenuClicked = function () {
            this.setState({
                isPositioningContainerVisible: !this.state.isPositioningContainerVisible
            });
        };
        PositioningContainerBasicExample.prototype._onDismiss = function () {
            this.setState({
                isPositioningContainerVisible: false
            });
        };
        return PositioningContainerBasicExample;
    }(React.Component));
    exports.PositioningContainerBasicExample = PositioningContainerBasicExample;
});
//# sourceMappingURL=PositioningContainer.Basic.Example.js.map