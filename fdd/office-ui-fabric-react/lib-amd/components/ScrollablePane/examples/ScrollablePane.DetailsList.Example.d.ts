/// <reference types="react" />
import * as React from 'react';
export interface IScrollablePaneDetailsListExampleItem {
    key: number | string;
    test1: string;
    test2: string;
    test3: string;
    test4: string;
    test5: string;
    test6: string;
}
export interface IScrollablePaneDetailsListExampleState {
    items: IScrollablePaneDetailsListExampleItem[];
}
export declare class ScrollablePaneDetailsListExample extends React.Component<{}, IScrollablePaneDetailsListExampleState> {
    private _selection;
    private _allItems;
    private _columns;
    constructor(props: {});
    render(): JSX.Element;
    private _onFilterChange;
}
