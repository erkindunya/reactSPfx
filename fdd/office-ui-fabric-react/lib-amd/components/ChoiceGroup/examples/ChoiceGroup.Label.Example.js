define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/ChoiceGroup", "office-ui-fabric-react/lib/Label", "office-ui-fabric-react/lib/Utilities"], function (require, exports, tslib_1, React, ChoiceGroup_1, Label_1, Utilities_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ChoiceGroupLabelExample = /** @class */ (function (_super) {
        tslib_1.__extends(ChoiceGroupLabelExample, _super);
        function ChoiceGroupLabelExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.state = {
                imageKey: ''
            };
            // Use getId() to ensure that the label ID is unique on the page.
            // (It's also okay to use a plain string without getId() and manually ensure its uniqueness.)
            _this._labelId = Utilities_1.getId('labelElement');
            _this._onChange = function (ev, option) {
                console.dir(option);
            };
            return _this;
        }
        ChoiceGroupLabelExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(Label_1.Label, { id: this._labelId, required: true }, "Custom label"),
                React.createElement(ChoiceGroup_1.ChoiceGroup, { defaultSelectedKey: "B", options: [
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
                    ], onChange: this._onChange, ariaLabelledBy: this._labelId, required: true })));
        };
        return ChoiceGroupLabelExample;
    }(React.Component));
    exports.ChoiceGroupLabelExample = ChoiceGroupLabelExample;
});
//# sourceMappingURL=ChoiceGroup.Label.Example.js.map