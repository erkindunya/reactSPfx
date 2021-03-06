/// <reference types="react" />
import * as React from 'react';
import { BaseComponent } from '../../../../Utilities';
import { ISelectedPeopleItemProps } from '../SelectedPeopleList';
export interface IPeoplePickerItemState {
    contextualMenuVisible: boolean;
}
export declare class ExtendedSelectedItem extends BaseComponent<ISelectedPeopleItemProps, IPeoplePickerItemState> {
    protected persona: React.RefObject<HTMLDivElement>;
    constructor(props: ISelectedPeopleItemProps);
    render(): JSX.Element;
    private _onClickIconButton(action);
}
