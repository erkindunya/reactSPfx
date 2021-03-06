define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/index"], function (require, exports, tslib_1, React, index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
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
    var ComboBoxControlledExample = /** @class */ (function (_super) {
        tslib_1.__extends(ComboBoxControlledExample, _super);
        function ComboBoxControlledExample(props) {
            var _this = _super.call(this, props) || this;
            _this._getOptions = function (currentOptions) {
                if (_this.state.options.length > 0) {
                    return _this.state.options;
                }
                var options = INITIAL_OPTIONS.slice();
                _this.setState({
                    options: options,
                    selectedOptionKey: 'C',
                    initialDisplayValue: undefined
                });
                return options;
            };
            _this._getOptionsMulti = function (currentOptions) {
                if (_this.state.optionsMulti.length > 0) {
                    return _this.state.optionsMulti;
                }
                var options = INITIAL_OPTIONS.slice();
                _this.setState({
                    optionsMulti: options,
                    selectedOptionKeys: ['C', 'D'],
                    initialDisplayValueMulti: undefined
                });
                return options;
            };
            _this._onChange = function (event, option, index, value) {
                console.log('_onChanged() is called: option = ' + JSON.stringify(option));
                if (option) {
                    // User chose an existing option
                    _this.setState({
                        selectedOptionKey: option.key
                    });
                }
                else if (value !== undefined) {
                    // User typed a new option
                    var newOption = { key: value, text: value };
                    _this.setState({
                        options: _this.state.options.concat([newOption]),
                        selectedOptionKey: newOption.key
                    });
                }
            };
            _this._onChangeMulti = function (event, option, index, value) {
                console.log('_onChangeMulti() is called: option = ' + JSON.stringify(option));
                var currentSelectedKeys = _this.state.selectedOptionKeys || [];
                if (option) {
                    // User selected/de-selected an existing option
                    _this.setState({
                        selectedOptionKeys: _this._updateSelectedOptionKeys(currentSelectedKeys, option)
                    });
                }
                else if (value !== undefined) {
                    // User typed a freeform option
                    var newOption = { key: value, text: value };
                    var updatedSelectedKeys = currentSelectedKeys.concat([newOption.key]);
                    _this.setState({
                        optionsMulti: _this.state.optionsMulti.concat([newOption]),
                        selectedOptionKeys: updatedSelectedKeys
                    });
                }
            };
            _this._updateSelectedOptionKeys = function (selectedKeys, option) {
                selectedKeys = selectedKeys.slice(); // modify a copy
                var index = selectedKeys.indexOf(option.key);
                if (option.selected && index < 0) {
                    selectedKeys.push(option.key);
                }
                else {
                    selectedKeys.splice(index, 1);
                }
                return selectedKeys;
            };
            _this.state = {
                // The options will be resolved (and updated in state) the first time each example is focused
                options: [],
                optionsMulti: [],
                // This is the text of the option which will be initially selected after the options are resolved
                initialDisplayValue: 'Option C',
                initialDisplayValueMulti: 'Option C, Option D'
            };
            return _this;
        }
        ComboBoxControlledExample.prototype.render = function () {
            var state = this.state;
            return (React.createElement(index_1.Fabric, { className: wrapperClassName },
                React.createElement(index_1.ComboBox, { selectedKey: state.selectedOptionKey, label: "Controlled single-select ComboBox (allowFreeform: T)", allowFreeform: true, autoComplete: "on", options: state.options, onChange: this._onChange, onResolveOptions: this._getOptions, text: state.initialDisplayValue }),
                React.createElement(index_1.ComboBox, { multiSelect: true, selectedKey: state.selectedOptionKeys, label: "Controlled multi-select ComboBox (allowFreeform: T)", allowFreeform: true, autoComplete: "on", options: state.optionsMulti, onChange: this._onChangeMulti, onResolveOptions: this._getOptionsMulti, text: state.initialDisplayValueMulti })));
        };
        return ComboBoxControlledExample;
    }(React.Component));
    exports.ComboBoxControlledExample = ComboBoxControlledExample;
});
//# sourceMappingURL=ComboBox.Controlled.Example.js.map