/// <reference types="react" />
import { BaseComponent } from 'office-ui-fabric-react/lib/Utilities';
import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona';
export interface IPeoplePickerExampleState {
    currentPicker?: number | string;
    delayResults?: boolean;
    peopleList: IPersonaProps[];
    mostRecentlyUsed: IPersonaProps[];
    currentSelectedItems?: IPersonaProps[];
    isPickerDisabled?: boolean;
}
export declare class PeoplePickerTypesExample extends BaseComponent<any, IPeoplePickerExampleState> {
    private _picker;
    constructor(props: {});
    render(): JSX.Element;
    private _getTextFromItem(persona);
    private _renderListPicker();
    private _renderNormalPicker();
    private _renderCompactPicker();
    private _renderPreselectedItemsPicker();
    private _renderLimitedSearch();
    private _renderProcessSelectionPicker();
    private _renderControlledPicker();
    private _onItemsChange;
    private _onSetFocusButtonClicked;
    private _renderFooterText;
    private _onRemoveSuggestion;
    private _onItemSelected;
    private _onFilterChanged;
    private _returnMostRecentlyUsed;
    private _returnMostRecentlyUsedWithLimit;
    private _onFilterChangedWithLimit;
    private _filterPromise(personasToReturn);
    private _listContainsPersona(persona, personas);
    private _filterPersonasByText(filterText);
    private _doesTextStartWith(text, filterText);
    private _convertResultsToPromise(results);
    private _removeDuplicates(personas, possibleDupes);
    private _toggleDelayResultsChange;
    private _dropDownSelected;
    private _validateInput;
    /**
     * Takes in the picker input and modifies it in whichever way
     * the caller wants, i.e. parsing entries copied from Outlook (sample
     * input: "Aaron Reid <aaron>").
     *
     * @param input The text entered into the picker.
     */
    private _onInputChange(input);
    private _onDisabledButtonClick;
}
