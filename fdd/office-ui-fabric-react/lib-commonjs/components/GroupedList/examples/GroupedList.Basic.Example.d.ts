/// <reference types="react" />
import * as React from 'react';
export interface IGroupedListExampleState {
    isCompactMode?: boolean;
}
export declare class GroupedListBasicExample extends React.Component<{}, IGroupedListExampleState> {
    private _items;
    private _columns;
    private _groups;
    private _selection;
    constructor(props: {});
    render(): JSX.Element;
    private _onRenderCell;
    private _onChangeCompactMode;
}
