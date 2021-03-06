/// <reference types="react" />
import * as React from 'react';
export interface ISelectedPeopleListBasicExampleState {
    nextPersonIndex: number;
}
export declare class SelectedPeopleListBasicExample extends React.Component<{}, ISelectedPeopleListBasicExampleState> {
    private _selectionList;
    private _selection;
    constructor(props: {});
    render(): JSX.Element;
    private _onRenderItem;
    private _onAddItemButtonClicked;
    private _onExpandItem;
    private _onCopyItems(items);
}
