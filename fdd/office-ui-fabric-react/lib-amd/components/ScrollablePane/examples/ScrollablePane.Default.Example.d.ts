/// <reference types="react" />
import * as React from 'react';
export interface IScrollablePaneExampleItem {
    color: string;
    text: string;
    index: number;
}
export declare class ScrollablePaneDefaultExample extends React.Component {
    private _items;
    constructor(props: any);
    render(): JSX.Element;
    private _createContentArea;
}
