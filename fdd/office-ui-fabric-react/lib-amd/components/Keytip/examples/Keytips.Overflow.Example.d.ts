/// <reference types="react" />
import * as React from 'react';
import { IOverflowSetItemProps } from 'office-ui-fabric-react/lib/OverflowSet';
export interface IKeytipsOverflowExampleState {
    items: IOverflowSetItemProps[];
    overflowItems: IOverflowSetItemProps[];
}
export declare class KeytipsOverflowExample extends React.Component<{}, IKeytipsOverflowExampleState> {
    private _initialItems;
    private _initialOverflowItems;
    constructor(props: {});
    render(): JSX.Element;
    private _onRenderItem(item);
    private _onRenderOverflowButton;
    private _toggleOverflowItems;
}
