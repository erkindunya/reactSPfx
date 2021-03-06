/// <reference types="react" />
import * as React from 'react';
export interface IDetailsListCustomFooterExampleItem {
    key: number;
    name: string;
    value: number;
}
export declare class DetailsListCustomFooterExample extends React.Component<{}, {}> {
    private _items;
    private _columns;
    constructor(props: {});
    render(): JSX.Element;
    private _onRenderDetailsFooter(detailsFooterProps);
}
