"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var ChoiceGroup_1 = require("office-ui-fabric-react/lib/ChoiceGroup");
var ChoiceGroupBasicExample = /** @class */ (function (_super) {
    tslib_1.__extends(ChoiceGroupBasicExample, _super);
    function ChoiceGroupBasicExample(props) {
        var _this = _super.call(this, props) || this;
        _this._onChange = function (ev, option) {
            console.dir(option);
        };
        _this.state = {
            imageKey: ''
        };
        return _this;
    }
    ChoiceGroupBasicExample.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(ChoiceGroup_1.ChoiceGroup, { className: "defaultChoiceGroup", defaultSelectedKey: "B", options: [
                    {
                        key: 'A',
                        text: 'Option A',
                        'data-automation-id': 'auto1'
                    },
                    {
                        key: 'B',
                        text: 'Option B'
                    },
                    {
                        key: 'C',
                        text: 'Option C',
                        disabled: true
                    },
                    {
                        key: 'D',
                        text: 'Option D',
                        disabled: true
                    }
                ], onChange: this._onChange, label: "Pick one", required: true })));
    };
    return ChoiceGroupBasicExample;
}(React.Component));
exports.ChoiceGroupBasicExample = ChoiceGroupBasicExample;
//# sourceMappingURL=ChoiceGroup.Basic.Example.js.map