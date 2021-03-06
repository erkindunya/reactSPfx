/// <reference types="react" />
import { BaseComponent } from '../../../../Utilities';
import { IPeoplePickerItemWithMenuProps } from './PeoplePickerItem.types';
/** PeoplePickerItemWithMenu state interface. */
export interface IPeoplePickerItemWithMenuState {
    contextualMenuVisible: boolean;
}
/**
 * PeoplePickerItem with an additional contextual menu.
 * @deprecated Do not use. Will be removed in Fabric 7.0
 */
export declare class SelectedItemWithMenu extends BaseComponent<IPeoplePickerItemWithMenuProps, IPeoplePickerItemWithMenuState> {
    refs: {
        [key: string]: any;
    };
    private _ellipsisRef;
    constructor(props: IPeoplePickerItemWithMenuProps);
    render(): JSX.Element;
    private _onContextualMenu;
    private _onCloseContextualMenu;
}
