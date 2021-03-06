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
    display: 'flex',
    selectors: {
        '& > *': { marginRight: '20px' },
        '& .ms-ComboBox': { maxWidth: '300px' }
    }
});
// tslint:disable:jsx-no-lambda
var ComboBoxTogglesExample = /** @class */ (function (_super) {
    tslib_1.__extends(ComboBoxTogglesExample, _super);
    function ComboBoxTogglesExample() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            autoComplete: false,
            allowFreeform: true
        };
        return _this;
    }
    ComboBoxTogglesExample.prototype.render = function () {
        var _this = this;
        var state = this.state;
        return (React.createElement(index_1.Fabric, { className: wrapperClassName },
            React.createElement(index_1.ComboBox, { label: "ComboBox with toggleable freeform/auto-complete", key: '' + state.autoComplete + state.allowFreeform /*key causes re-render when toggles change*/, allowFreeform: state.allowFreeform, autoComplete: state.autoComplete ? 'on' : 'off', options: INITIAL_OPTIONS }),
            React.createElement(index_1.Toggle, { label: "Allow freeform", checked: state.allowFreeform, onChange: function (ev, checked) {
                    _this.setState({ allowFreeform: !!checked });
                } }),
            React.createElement(index_1.Toggle, { label: "Auto-complete", checked: state.autoComplete, onChange: function (ev, checked) {
                    _this.setState({ autoComplete: !!checked });
                } })));
    };
    return ComboBoxTogglesExample;
}(React.Component));
exports.ComboBoxTogglesExample = ComboBoxTogglesExample;
//# sourceMappingURL=ComboBox.Toggles.Example.js.map