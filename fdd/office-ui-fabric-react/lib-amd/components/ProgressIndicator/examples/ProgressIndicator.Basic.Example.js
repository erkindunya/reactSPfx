define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/ProgressIndicator", "office-ui-fabric-react/lib/Utilities"], function (require, exports, tslib_1, React, ProgressIndicator_1, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var INTERVAL_DELAY = 100;
    var INTERVAL_INCREMENT = 0.01;
    var RESTART_WAIT_TIME = 2000;
    var ProgressIndicatorBasicExample = /** @class */ (function (_super) {
        tslib_1.__extends(ProgressIndicatorBasicExample, _super);
        function ProgressIndicatorBasicExample(props) {
            var _this = _super.call(this, props) || this;
            _this._async = new Utilities_1.Async(_this);
            _this.state = {
                percentComplete: 0
            };
            _this._startProgressDemo = _this._startProgressDemo.bind(_this);
            return _this;
        }
        ProgressIndicatorBasicExample.prototype.componentDidMount = function () {
            this._startProgressDemo();
        };
        ProgressIndicatorBasicExample.prototype.componentWillUnmount = function () {
            this._async.dispose();
        };
        ProgressIndicatorBasicExample.prototype.render = function () {
            var percentComplete = this.state.percentComplete;
            return React.createElement(ProgressIndicator_1.ProgressIndicator, { label: "Example title", description: "Example description", percentComplete: percentComplete });
        };
        ProgressIndicatorBasicExample.prototype._startProgressDemo = function () {
            var _this = this;
            // reset the demo
            this.setState({
                percentComplete: 0
            });
            // update progress
            this._interval = this._async.setInterval(function () {
                var percentComplete = _this.state.percentComplete + INTERVAL_INCREMENT;
                // once complete, set the demo to start again
                if (percentComplete >= 1.0) {
                    percentComplete = 1.0;
                    _this._async.clearInterval(_this._interval);
                    _this._async.setTimeout(_this._startProgressDemo, RESTART_WAIT_TIME);
                }
                _this.setState({
                    percentComplete: percentComplete
                });
            }, INTERVAL_DELAY);
        };
        return ProgressIndicatorBasicExample;
    }(React.Component));
    exports.ProgressIndicatorBasicExample = ProgressIndicatorBasicExample;
});
//# sourceMappingURL=ProgressIndicator.Basic.Example.js.map