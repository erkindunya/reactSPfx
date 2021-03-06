define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/Checkbox"], function (require, exports, tslib_1, React, Checkbox_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CheckboxBasicExample = /** @class */ (function (_super) {
        tslib_1.__extends(CheckboxBasicExample, _super);
        function CheckboxBasicExample(props) {
            var _this = _super.call(this, props) || this;
            _this._onCheckboxChange = _this._onCheckboxChange.bind(_this);
            return _this;
        }
        CheckboxBasicExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(Checkbox_1.Checkbox, { label: "Standard checkbox", onChange: this._onCheckboxChange })));
        };
        CheckboxBasicExample.prototype._onCheckboxChange = function (ev, isChecked) {
            console.log("The option has been changed to " + isChecked + ".");
        };
        return CheckboxBasicExample;
    }(React.Component));
    exports.CheckboxBasicExample = CheckboxBasicExample;
});
//# sourceMappingURL=Checkbox.Basic.Example.js.map