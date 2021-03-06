/// <reference types="react" />
import * as React from 'react';
import { IPersonaProps } from 'office-ui-fabric-react/lib/Persona';
export interface IPeoplePickerExampleState {
    peopleList: IPersonaProps[];
    searchValue: string;
}
export declare class FloatingPeoplePickerTypesExample extends React.Component<{}, IPeoplePickerExampleState> {
    private _picker;
    private _inputElement;
    constructor(props: {});
    render(): JSX.Element;
    private _onFocus;
    private _setInputElementRef;
    private _onSearchChange;
    private _onPickerChange;
    private _onRemoveSuggestion;
    private _onFilterChanged;
    private _getTextFromItem;
    private _listContainsPersona(persona, personas?);
    private _validateInput;
}
