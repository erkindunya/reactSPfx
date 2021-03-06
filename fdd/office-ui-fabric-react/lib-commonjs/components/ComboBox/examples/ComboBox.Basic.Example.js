"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var index_1 = require("office-ui-fabric-react/lib/index");
var INITIAL_OPTIONS = [
    { key: 'Header1', text: 'First heading', itemType: index_1.SelectableOptionMenuItemType.Header },
    { key: 'A', text: 'Option A' },
    { key: 'B', text: 'Option B' },
    { key: 'C', text: 'Option C' },
    { key: 'D', text: 'Option D' },
    { key: 'divider', text: '-', itemType: index_1.SelectableOptionMenuItemType.Divider },
    { key: 'Header2', text: 'Second heading', itemType: index_1.SelectableOptionMenuItemType.Header },
    { key: 'E', text: 'Option E' },
    { key: 'F', text: 'Option F', disabled: true },
    { key: 'G', text: 'Option G' },
    { key: 'H', text: 'Option H' },
    { key: 'I', text: 'Option I' },
    { key: 'J', text: 'Option J' }
];
var wrapperClassName = index_1.mergeStyles({
    selectors: {
        '& > *': { marginBottom: '20px' },
        '& .ms-ComboBox': { maxWidth: '300px' }
    }
});
// tslint:disable:jsx-no-lambda
var ComboBoxBasicExample = /** @class */ (function (_super) {
    tslib_1.__extends(ComboBoxBasicExample, _super);
    function ComboBoxBasicExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._basicComboBox = React.createRef();
        return _this;
    }
    ComboBoxBasicExample.prototype.render = function () {
        var _this = this;
        return (React.createElement(index_1.Fabric, { className: wrapperClassName },
            React.createElement("div", null,
                React.createElement(index_1.ComboBox, { defaultSelectedKey: "C", label: "Single-select ComboBox (uncontrolled, allowFreeform: T, autoComplete: T)", allowFreeform: true, autoComplete: "on", options: INITIAL_OPTIONS, componentRef: this._basicComboBox, onFocus: function () { return console.log('onFocus called for basic uncontrolled example'); }, onBlur: function () { return console.log('onBlur called for basic uncontrolled example'); }, onMenuOpen: function () { return console.log('ComboBox menu opened'); }, onPendingValueChanged: function (option, pendingIndex, pendingValue) {
                        return console.log("Preview value was changed. Pending index: " + pendingIndex + ". Pending value: " + pendingValue + ".");
                    } }),
                React.createElement(index_1.PrimaryButton, { text: "Open ComboBox", style: { display: 'block', marginTop: '10px' }, onClick: function () {
                        if (_this._basicComboBox.current) {
                            _this._basicComboBox.current.focus(true);
                        }
                    } })),
            React.createElement(index_1.ComboBox, { multiSelect: true, defaultSelectedKey: ['C', 'E'], label: "Multi-select ComboBox (uncontrolled)", allowFreeform: true, autoComplete: "on", options: INITIAL_OPTIONS }),
            React.createElement(index_1.ComboBox, { label: "ComboBox with placeholder text", placeholder: "Select or type an option", allowFreeform: true, autoComplete: "on", options: INITIAL_OPTIONS }),
            React.createElement(index_1.ComboBox, { label: "ComboBox with persisted menu", defaultSelectedKey: "B", allowFreeform: true, autoComplete: "on", persistMenu: true, options: INITIAL_OPTIONS }),
            React.createElement(index_1.ComboBox, { label: "ComboBox with error message", defaultSelectedKey: "B", errorMessage: "Oh no! This ComboBox has an error!", options: INITIAL_OPTIONS }),
            React.createElement(index_1.ComboBox, { disabled: true, label: "Disabled ComboBox", defaultSelectedKey: "D", options: INITIAL_OPTIONS })));
    };
    return ComboBoxBasicExample;
}(React.Component));
exports.ComboBoxBasicExample = ComboBoxBasicExample;
//# sourceMappingURL=ComboBox.Basic.Example.js.map