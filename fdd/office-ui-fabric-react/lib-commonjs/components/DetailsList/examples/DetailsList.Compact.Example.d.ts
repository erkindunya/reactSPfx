/// <reference types="react" />
import * as React from 'react';
export interface IDetailsListCompactExampleItem {
    key: number;
    name: string;
    value: number;
}
export interface IDetailsListCompactExampleState {
    items: IDetailsListCompactExampleItem[];
    selectionDetails: string;
}
export declare class DetailsListCompactExample extends React.Component<{}, IDetailsListCompactExampleState> {
    private _selection;
    private _allItems;
    private _columns;
    constructor(props: {});
    render(): JSX.Element;
    private _getSelectionDetails();
    private _onFilter;
    private _onItemInvoked(item);
}
