/// <reference types="react" />
import * as React from 'react';
import { BaseComponent, IBaseProps } from '../../../../Utilities';
import { IExtendedPersonaProps } from '../SelectedPeopleList';
import { IContextualMenuItem } from '../../../../ContextualMenu';
export interface IPeoplePickerItemState {
    contextualMenuVisible: boolean;
}
export interface ISelectedItemWithContextMenuProps extends IBaseProps {
    renderedItem: JSX.Element;
    beginEditing?: (item: IExtendedPersonaProps) => void;
    menuItems: IContextualMenuItem[];
    item: IExtendedPersonaProps;
}
export declare class SelectedItemWithContextMenu extends BaseComponent<ISelectedItemWithContextMenuProps, IPeoplePickerItemState> {
    protected itemElement: React.RefObject<HTMLDivElement>;
    constructor(props: ISelectedItemWithContextMenuProps);
    render(): JSX.Element;
    private _onClick;
    private _onCloseContextualMenu;
}
