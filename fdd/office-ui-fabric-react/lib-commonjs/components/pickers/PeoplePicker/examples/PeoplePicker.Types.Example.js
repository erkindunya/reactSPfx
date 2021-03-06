"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var Utilities_1 = require("office-ui-fabric-react/lib/Utilities");
var Dropdown_1 = require("office-ui-fabric-react/lib/Dropdown");
var Toggle_1 = require("office-ui-fabric-react/lib/Toggle");
var Persona_1 = require("office-ui-fabric-react/lib/Persona");
var Pickers_1 = require("office-ui-fabric-react/lib/Pickers");
var Button_1 = require("office-ui-fabric-react/lib/Button");
var es6_promise_1 = require("es6-promise");
// Helper imports to generate data for this particular examples. Not exported by any package.
var PeoplePickerExampleData_1 = require("./PeoplePickerExampleData");
var Checkbox_1 = require("office-ui-fabric-react/lib/Checkbox");
var suggestionProps = {
    suggestionsHeaderText: 'Suggested People',
    mostRecentlyUsedHeaderText: 'Suggested Contacts',
    noResultsFoundText: 'No results found',
    loadingText: 'Loading',
    showRemoveButtons: true,
    suggestionsAvailableAlertText: 'People Picker Suggestions available',
    suggestionsContainerAriaLabel: 'Suggested contacts'
};
var limitedSearchAdditionalProps = {
    searchForMoreText: 'Load all Results',
    resultsMaximumNumber: 10,
    searchingText: 'Searching...'
};
var limitedSearchSuggestionProps = Utilities_1.assign(limitedSearchAdditionalProps, suggestionProps);
var PeoplePickerTypesExample = /** @class */ (function (_super) {
    tslib_1.__extends(PeoplePickerTypesExample, _super);
    function PeoplePickerTypesExample(props) {
        var _this = _super.call(this, props) || this;
        // All pickers extend from BasePicker specifying the item type.
        _this._picker = React.createRef();
        _this._onItemsChange = function (items) {
            _this.setState({
                currentSelectedItems: items
            });
        };
        _this._onSetFocusButtonClicked = function () {
            if (_this._picker.current) {
                _this._picker.current.focusInput();
            }
        };
        _this._renderFooterText = function () {
            return React.createElement("div", null, "No additional results");
        };
        _this._onRemoveSuggestion = function (item) {
            var _a = _this.state, peopleList = _a.peopleList, mruState = _a.mostRecentlyUsed;
            var indexPeopleList = peopleList.indexOf(item);
            var indexMostRecentlyUsed = mruState.indexOf(item);
            if (indexPeopleList >= 0) {
                var newPeople = peopleList.slice(0, indexPeopleList).concat(peopleList.slice(indexPeopleList + 1));
                _this.setState({ peopleList: newPeople });
            }
            if (indexMostRecentlyUsed >= 0) {
                var newSuggestedPeople = mruState
                    .slice(0, indexMostRecentlyUsed)
                    .concat(mruState.slice(indexMostRecentlyUsed + 1));
                _this.setState({ mostRecentlyUsed: newSuggestedPeople });
            }
        };
        _this._onItemSelected = function (item) {
            var processedItem = tslib_1.__assign({}, item);
            processedItem.text = item.text + " (selected)";
            return new es6_promise_1.Promise(function (resolve, reject) { return setTimeout(function () { return resolve(processedItem); }, 250); });
        };
        _this._onFilterChanged = function (filterText, currentPersonas, limitResults) {
            if (filterText) {
                var filteredPersonas = _this._filterPersonasByText(filterText);
                filteredPersonas = _this._removeDuplicates(filteredPersonas, currentPersonas);
                filteredPersonas = limitResults ? filteredPersonas.splice(0, limitResults) : filteredPersonas;
                return _this._filterPromise(filteredPersonas);
            }
            else {
                return [];
            }
        };
        _this._returnMostRecentlyUsed = function (currentPersonas) {
            var mostRecentlyUsed = _this.state.mostRecentlyUsed;
            mostRecentlyUsed = _this._removeDuplicates(mostRecentlyUsed, currentPersonas);
            return _this._filterPromise(mostRecentlyUsed);
        };
        _this._returnMostRecentlyUsedWithLimit = function (currentPersonas) {
            var mostRecentlyUsed = _this.state.mostRecentlyUsed;
            mostRecentlyUsed = _this._removeDuplicates(mostRecentlyUsed, currentPersonas);
            mostRecentlyUsed = mostRecentlyUsed.splice(0, 3);
            return _this._filterPromise(mostRecentlyUsed);
        };
        _this._onFilterChangedWithLimit = function (filterText, currentPersonas) {
            return _this._onFilterChanged(filterText, currentPersonas, 3);
        };
        _this._toggleDelayResultsChange = function (ev, toggleState) {
            _this.setState({ delayResults: toggleState });
        };
        _this._dropDownSelected = function (event, option) {
            _this.setState({ currentPicker: option.key });
        };
        _this._validateInput = function (input) {
            if (input.indexOf('@') !== -1) {
                return Pickers_1.ValidationState.valid;
            }
            else if (input.length > 1) {
                return Pickers_1.ValidationState.warning;
            }
            else {
                return Pickers_1.ValidationState.invalid;
            }
        };
        _this._onDisabledButtonClick = function () {
            _this.setState({
                isPickerDisabled: !_this.state.isPickerDisabled
            });
        };
        _this.state = {
            currentPicker: 1,
            delayResults: false,
            peopleList: PeoplePickerExampleData_1.people,
            mostRecentlyUsed: PeoplePickerExampleData_1.mru,
            currentSelectedItems: [],
            isPickerDisabled: false
        };
        return _this;
    }
    PeoplePickerTypesExample.prototype.render = function () {
        var currentPicker = undefined;
        switch (this.state.currentPicker) {
            case 1:
                currentPicker = this._renderNormalPicker();
                break;
            case 2:
                currentPicker = this._renderCompactPicker();
                break;
            case 3:
                currentPicker = this._renderListPicker();
                break;
            case 4:
                currentPicker = this._renderPreselectedItemsPicker();
                break;
            case 5:
                currentPicker = this._renderLimitedSearch();
                break;
            case 6:
                currentPicker = this._renderProcessSelectionPicker();
                break;
            case 7:
                currentPicker = this._renderControlledPicker();
                break;
            default:
        }
        return (React.createElement("div", null,
            currentPicker,
            React.createElement("div", { style: { width: 200 } },
                React.createElement(Dropdown_1.Dropdown, { label: "Select People Picker Type", options: [
                        { key: 1, text: 'Normal' },
                        { key: 2, text: 'Compact' },
                        { key: 3, text: 'Members List' },
                        { key: 4, text: 'Preselected Items' },
                        { key: 5, text: 'Limit Search' },
                        { key: 6, text: 'Process Selection' },
                        { key: 7, text: 'Controlled Picker' }
                    ], selectedKey: this.state.currentPicker, onChange: this._dropDownSelected }),
                React.createElement(Checkbox_1.Checkbox, { styles: { root: { marginTop: 10 } }, label: "Disable People Picker", checked: this.state.isPickerDisabled, onChange: this._onDisabledButtonClick }),
                React.createElement(Toggle_1.Toggle, { label: "Delay Suggestion Results", defaultChecked: false, onChange: this._toggleDelayResultsChange })),
            React.createElement(Button_1.PrimaryButton, { text: "Set focus", onClick: this._onSetFocusButtonClicked })));
    };
    PeoplePickerTypesExample.prototype._getTextFromItem = function (persona) {
        return persona.text;
    };
    PeoplePickerTypesExample.prototype._renderListPicker = function () {
        return (React.createElement(Pickers_1.ListPeoplePicker, { onResolveSuggestions: this._onFilterChanged, onEmptyInputFocus: this._returnMostRecentlyUsed, getTextFromItem: this._getTextFromItem, className: 'ms-PeoplePicker', pickerSuggestionsProps: suggestionProps, key: 'list', onRemoveSuggestion: this._onRemoveSuggestion, onValidateInput: this._validateInput, inputProps: {
                onBlur: function (ev) { return console.log('onBlur called'); },
                onFocus: function (ev) { return console.log('onFocus called'); },
                'aria-label': 'People Picker'
            }, componentRef: this._picker, resolveDelay: 300, disabled: this.state.isPickerDisabled }));
    };
    PeoplePickerTypesExample.prototype._renderNormalPicker = function () {
        return (React.createElement(Pickers_1.NormalPeoplePicker, { onResolveSuggestions: this._onFilterChanged, onEmptyInputFocus: this._returnMostRecentlyUsed, getTextFromItem: this._getTextFromItem, pickerSuggestionsProps: suggestionProps, className: 'ms-PeoplePicker', key: 'normal', onRemoveSuggestion: this._onRemoveSuggestion, onValidateInput: this._validateInput, removeButtonAriaLabel: 'Remove', inputProps: {
                onBlur: function (ev) { return console.log('onBlur called'); },
                onFocus: function (ev) { return console.log('onFocus called'); },
                'aria-label': 'People Picker'
            }, componentRef: this._picker, onInputChange: this._onInputChange, resolveDelay: 300, disabled: this.state.isPickerDisabled }));
    };
    PeoplePickerTypesExample.prototype._renderCompactPicker = function () {
        return (React.createElement(Pickers_1.CompactPeoplePicker, { onResolveSuggestions: this._onFilterChanged, onEmptyInputFocus: this._returnMostRecentlyUsed, getTextFromItem: this._getTextFromItem, pickerSuggestionsProps: suggestionProps, className: 'ms-PeoplePicker', onRemoveSuggestion: this._onRemoveSuggestion, onValidateInput: this._validateInput, inputProps: {
                onBlur: function (ev) { return console.log('onBlur called'); },
                onFocus: function (ev) { return console.log('onFocus called'); },
                'aria-label': 'People Picker'
            }, componentRef: this._picker, resolveDelay: 300, disabled: this.state.isPickerDisabled }));
    };
    PeoplePickerTypesExample.prototype._renderPreselectedItemsPicker = function () {
        return (React.createElement(Pickers_1.CompactPeoplePicker, { onResolveSuggestions: this._onFilterChanged, onEmptyInputFocus: this._returnMostRecentlyUsed, getTextFromItem: this._getTextFromItem, className: 'ms-PeoplePicker', defaultSelectedItems: PeoplePickerExampleData_1.people.splice(0, 3), key: 'list', pickerSuggestionsProps: suggestionProps, onRemoveSuggestion: this._onRemoveSuggestion, onValidateInput: this._validateInput, inputProps: {
                onBlur: function (ev) { return console.log('onBlur called'); },
                onFocus: function (ev) { return console.log('onFocus called'); },
                'aria-label': 'People Picker'
            }, componentRef: this._picker, resolveDelay: 300, disabled: this.state.isPickerDisabled }));
    };
    PeoplePickerTypesExample.prototype._renderLimitedSearch = function () {
        limitedSearchSuggestionProps.resultsFooter = this._renderFooterText;
        return (React.createElement(Pickers_1.CompactPeoplePicker, { onResolveSuggestions: this._onFilterChangedWithLimit, onEmptyInputFocus: this._returnMostRecentlyUsedWithLimit, getTextFromItem: this._getTextFromItem, className: 'ms-PeoplePicker', onGetMoreResults: this._onFilterChanged, pickerSuggestionsProps: limitedSearchSuggestionProps, onRemoveSuggestion: this._onRemoveSuggestion, inputProps: {
                onBlur: function (ev) { return console.log('onBlur called'); },
                onFocus: function (ev) { return console.log('onFocus called'); },
                'aria-label': 'People Picker'
            }, componentRef: this._picker, resolveDelay: 300, disabled: this.state.isPickerDisabled }));
    };
    PeoplePickerTypesExample.prototype._renderProcessSelectionPicker = function () {
        return (React.createElement(Pickers_1.NormalPeoplePicker, { onResolveSuggestions: this._onFilterChanged, onEmptyInputFocus: this._returnMostRecentlyUsed, getTextFromItem: this._getTextFromItem, pickerSuggestionsProps: suggestionProps, className: 'ms-PeoplePicker', onRemoveSuggestion: this._onRemoveSuggestion, onValidateInput: this._validateInput, removeButtonAriaLabel: 'Remove', onItemSelected: this._onItemSelected, inputProps: {
                onBlur: function (ev) { return console.log('onBlur called'); },
                onFocus: function (ev) { return console.log('onFocus called'); },
                'aria-label': 'People Picker'
            }, componentRef: this._picker, resolveDelay: 300, disabled: this.state.isPickerDisabled }));
    };
    PeoplePickerTypesExample.prototype._renderControlledPicker = function () {
        var _this = this;
        var controlledItems = [];
        for (var i = 0; i < 5; i++) {
            var item = this.state.peopleList[i];
            if (this.state.currentSelectedItems.indexOf(item) === -1) {
                controlledItems.push(this.state.peopleList[i]);
            }
        }
        return (React.createElement("div", null,
            React.createElement(Pickers_1.NormalPeoplePicker, { onResolveSuggestions: this._onFilterChanged, getTextFromItem: this._getTextFromItem, pickerSuggestionsProps: suggestionProps, className: 'ms-PeoplePicker', key: 'controlled', selectedItems: this.state.currentSelectedItems, onChange: this._onItemsChange, inputProps: {
                    onBlur: function (ev) { return console.log('onBlur called'); },
                    onFocus: function (ev) { return console.log('onFocus called'); }
                }, componentRef: this._picker, resolveDelay: 300, disabled: this.state.isPickerDisabled }),
            React.createElement("label", null, " Click to Add a person "),
            controlledItems.map(function (item, index) { return (React.createElement("div", { key: index },
                React.createElement(Button_1.DefaultButton, { styles: { root: { height: 'auto' } }, 
                    // tslint:disable-next-line:jsx-no-lambda
                    onClick: function () {
                        _this.setState({
                            currentSelectedItems: _this.state.currentSelectedItems.concat([item])
                        });
                    } },
                    React.createElement(Persona_1.Persona, tslib_1.__assign({}, item))))); })));
    };
    PeoplePickerTypesExample.prototype._filterPromise = function (personasToReturn) {
        if (this.state.delayResults) {
            return this._convertResultsToPromise(personasToReturn);
        }
        else {
            return personasToReturn;
        }
    };
    PeoplePickerTypesExample.prototype._listContainsPersona = function (persona, personas) {
        if (!personas || !personas.length || personas.length === 0) {
            return false;
        }
        return personas.filter(function (item) { return item.text === persona.text; }).length > 0;
    };
    PeoplePickerTypesExample.prototype._filterPersonasByText = function (filterText) {
        var _this = this;
        return this.state.peopleList.filter(function (item) { return _this._doesTextStartWith(item.text, filterText); });
    };
    PeoplePickerTypesExample.prototype._doesTextStartWith = function (text, filterText) {
        return text.toLowerCase().indexOf(filterText.toLowerCase()) === 0;
    };
    PeoplePickerTypesExample.prototype._convertResultsToPromise = function (results) {
        return new es6_promise_1.Promise(function (resolve, reject) { return setTimeout(function () { return resolve(results); }, 2000); });
    };
    PeoplePickerTypesExample.prototype._removeDuplicates = function (personas, possibleDupes) {
        var _this = this;
        return personas.filter(function (persona) { return !_this._listContainsPersona(persona, possibleDupes); });
    };
    /**
     * Takes in the picker input and modifies it in whichever way
     * the caller wants, i.e. parsing entries copied from Outlook (sample
     * input: "Aaron Reid <aaron>").
     *
     * @param input The text entered into the picker.
     */
    PeoplePickerTypesExample.prototype._onInputChange = function (input) {
        var outlookRegEx = /<.*>/g;
        var emailAddress = outlookRegEx.exec(input);
        if (emailAddress && emailAddress[0]) {
            return emailAddress[0].substring(1, emailAddress[0].length - 1);
        }
        return input;
    };
    return PeoplePickerTypesExample;
}(Utilities_1.BaseComponent));
exports.PeoplePickerTypesExample = PeoplePickerTypesExample;
//# sourceMappingURL=PeoplePicker.Types.Example.js.map