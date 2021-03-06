/// <reference types="react" />
import * as React from 'react';
import { BaseComponent } from '../../../../Utilities';
import { IBaseFloatingPickerProps } from '../../../../FloatingPicker';
import { ISelectedPeopleItemProps } from '../SelectedPeopleList';
import { IExtendedPersonaProps } from '../SelectedPeopleList';
import { IPeoplePickerItemState } from './ExtendedSelectedItem';
import { IPersonaProps } from '../../../../Persona';
export interface IEditingSelectedPeopleItemProps extends ISelectedPeopleItemProps {
    onEditingComplete: (oldItem: any, newItem: any) => void;
    onRenderFloatingPicker?: React.ComponentType<IBaseFloatingPickerProps<IPersonaProps>>;
    floatingPickerProps?: IBaseFloatingPickerProps<IPersonaProps>;
    getEditingItemText?: (item: IExtendedPersonaProps) => string;
}
export declare class EditingItem extends BaseComponent<IEditingSelectedPeopleItemProps, IPeoplePickerItemState> {
    private _editingInput;
    private _editingFloatingPicker;
    constructor(props: IEditingSelectedPeopleItemProps);
    componentDidMount(): void;
    render(): JSX.Element;
    private _renderEditingSuggestions;
    private _resolveInputRef;
    private _onInputClick;
    private _onInputBlur;
    private _onInputChange;
    private _onInputKeyDown(ev);
    private _onSuggestionSelected;
}
