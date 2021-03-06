define(["require", "exports", "tslib", "react", "office-ui-fabric-react/lib/FloatingPicker", "office-ui-fabric-react/lib/SearchBox", "../../../ExtendedPicker/examples/PeopleExampleData"], function (require, exports, tslib_1, React, FloatingPicker_1, SearchBox_1, PeopleExampleData_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var FloatingPeoplePickerTypesExample = /** @class */ (function (_super) {
        tslib_1.__extends(FloatingPeoplePickerTypesExample, _super);
        function FloatingPeoplePickerTypesExample(props) {
            var _this = _super.call(this, props) || this;
            _this._picker = React.createRef();
            _this._onFocus = function () {
                if (_this._picker.current) {
                    _this._picker.current.showPicker();
                }
            };
            _this._setInputElementRef = function (ref) {
                var inputElements = ref && ref.getElementsByClassName('ms-SearchBox-field');
                if (inputElements && inputElements.length > 0) {
                    _this._inputElement = inputElements[0];
                }
            };
            _this._onSearchChange = function (newValue) {
                if (newValue !== _this.state.searchValue && _this._picker.current) {
                    _this.setState({ searchValue: newValue });
                    _this._picker.current.onQueryStringChanged(newValue);
                }
            };
            _this._onPickerChange = function (selectedSuggestion) {
                _this.setState({ searchValue: selectedSuggestion.text || '' });
                if (_this._picker.current) {
                    _this._picker.current.hidePicker();
                }
            };
            _this._onRemoveSuggestion = function (item) {
                var peopleList = _this.state.peopleList;
                var itemIndex = peopleList.indexOf(item);
                if (itemIndex >= 0) {
                    _this.setState({
                        peopleList: peopleList.slice(0, itemIndex).concat(peopleList.slice(itemIndex + 1))
                    });
                }
            };
            _this._onFilterChanged = function (filterText, currentPersonas) {
                if (filterText) {
                    // Filter by items starting with the current filter text, then remove duplicates
                    return _this.state.peopleList
                        .filter(function (item) { return _startsWith(item.text || '', filterText); })
                        .filter(function (persona) { return !_this._listContainsPersona(persona, currentPersonas); });
                }
                return [];
            };
            _this._getTextFromItem = function (persona) {
                return persona.text || '';
            };
            _this._validateInput = function (input) {
                return input.indexOf('@') !== -1;
            };
            _this.state = {
                peopleList: PeopleExampleData_1.people,
                searchValue: ''
            };
            return _this;
        }
        FloatingPeoplePickerTypesExample.prototype.render = function () {
            var _this = this;
            var suggestionProps = {
                footerItemsProps: [
                    {
                        renderItem: function () {
                            var picker = _this._picker.current;
                            return React.createElement("div", null,
                                "Showing ",
                                picker ? picker.suggestions.length : 0,
                                " results");
                        },
                        shouldShow: function () {
                            var picker = _this._picker.current;
                            return !!picker && picker.suggestions.length > 0;
                        }
                    }
                ]
            };
            return (React.createElement("div", null,
                React.createElement("div", { style: { width: 208 }, ref: this._setInputElementRef },
                    React.createElement(SearchBox_1.SearchBox, { placeholder: "Search for person", onChange: this._onSearchChange, value: this.state.searchValue, onFocus: this._onFocus })),
                React.createElement(FloatingPicker_1.FloatingPeoplePicker, { suggestionsStore: new FloatingPicker_1.SuggestionsStore(), onResolveSuggestions: this._onFilterChanged, getTextFromItem: this._getTextFromItem, pickerSuggestionsProps: suggestionProps, key: "normal", onRemoveSuggestion: this._onRemoveSuggestion, onValidateInput: this._validateInput, componentRef: this._picker, onChange: this._onPickerChange, inputElement: this._inputElement, resolveDelay: 300 })));
        };
        FloatingPeoplePickerTypesExample.prototype._listContainsPersona = function (persona, personas) {
            return !!personas && personas.some(function (item) { return item.text === persona.text; });
        };
        return FloatingPeoplePickerTypesExample;
    }(React.Component));
    exports.FloatingPeoplePickerTypesExample = FloatingPeoplePickerTypesExample;
    function _startsWith(text, filterText) {
        return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
    }
});
//# sourceMappingURL=FloatingPeoplePicker.Basic.Example.js.map