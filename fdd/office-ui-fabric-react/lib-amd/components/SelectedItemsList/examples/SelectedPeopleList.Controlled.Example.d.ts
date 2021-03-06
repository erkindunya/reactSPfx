/// <reference types="react" />
import * as React from 'react';
import { IExtendedPersonaProps } from 'office-ui-fabric-react/lib/SelectedItemsList';
export interface ISelectedPeopleListControlledExampleState {
    currentSelectedItems: IExtendedPersonaProps[];
    nextPersonIndex: number;
}
export declare class SelectedPeopleListControlledExample extends React.Component<{}, ISelectedPeopleListControlledExampleState> {
    private _selectionList;
    private _selection;
    constructor(props: {});
    render(): JSX.Element;
    private _onRenderItem;
    private _onAddItemButtonClicked;
    private _onItemDeleted;
    private _onExpandItem;
    private _onCopyItems(items);
}
