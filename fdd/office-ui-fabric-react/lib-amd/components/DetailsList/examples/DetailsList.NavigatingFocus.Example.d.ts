/// <reference types="react" />
import * as React from 'react';
export interface IDetailsListNavigatingFocusExampleState {
    items: string[];
    initialFocusedIndex?: number;
    key: number;
}
export declare class DetailsListNavigatingFocusExample extends React.Component<{}, IDetailsListNavigatingFocusExampleState> {
    state: IDetailsListNavigatingFocusExampleState;
    private _columns;
    render(): JSX.Element;
    private _navigate;
}
