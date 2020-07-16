define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/ChoiceGroup", "office-ui-fabric-react/lib/Utilities", "office-ui-fabric-react/lib/Dropdown", "./ChoiceGroup.Custom.Example.scss"], function (require, exports, tslib_1, React, ChoiceGroup_1, Utilities_1, Dropdown_1, stylesImport) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var styles = stylesImport;
    var ChoiceGroupCustomExample = /** @class */ (function (_super) {
        tslib_1.__extends(ChoiceGroupCustomExample, _super);
        function ChoiceGroupCustomExample() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._onChange = function (ev, option) {
                console.dir(option);
            };
            return _this;
        }
        ChoiceGroupCustomExample.prototype.render = function () {
            return (React.createElement("div", null,
                React.createElement(ChoiceGroup_1.ChoiceGroup, { defaultSelectedKey: "B", options: [
                        {
                            key: 'A',
                            text: 'Mark displayed items as read after',
                            ariaLabel: 'Mark displayed items as read after - Press tab for further action',
                            onRenderField: function (props, render) {
                                return (React.createElement("div", { className: Utilities_1.css(styles.root) },
                                    render(props),
                                    React.createElement(Dropdown_1.Dropdown, { className: Utilities_1.css(styles.dropdown), defaultSelectedKey: "A", options: [{ key: 'A', text: '5 seconds' }, { key: 'B', text: '10 seconds' }, { key: 'C', text: '20 seconds' }], disabled: props ? !props.checked : false, ariaLabel: "Select a time span" })));
                            }
                        },
                        {
                            key: 'B',
                            text: 'Option B',
                            styles: {
                                root: {
                                    border: '1px solid green'
                                }
                            }
                        },
                        {
                            key: 'C',
                            text: 'Option C',
                            disabled: true
                        },
                        {
                            key: 'D',
                            text: 'Option D',
                            disabled: false
                        }
                    ], onChange: this._onChange, label: "Pick one", required: true })));
        };
        return ChoiceGroupCustomExample;
    }(React.Component));
    exports.ChoiceGroupCustomExample = ChoiceGroupCustomExample;
});
//# sourceMappingURL=ChoiceGroup.Custom.Example.js.map