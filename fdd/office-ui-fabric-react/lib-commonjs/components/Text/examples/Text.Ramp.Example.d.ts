/// <reference types="react" />
import * as React from 'react';
export interface ITextRampExampleItem {
    key: string;
    variant: string;
    example: JSX.Element;
}
export interface ITextRampExampleState {
    items: ITextRampExampleItem[];
}
export declare class TextRampExample extends React.Component<{}, ITextRampExampleState> {
    private _allItems;
    private _columns;
    constructor(props: {});
    render(): JSX.Element;
    private _renderDetailsRow(props);
}
