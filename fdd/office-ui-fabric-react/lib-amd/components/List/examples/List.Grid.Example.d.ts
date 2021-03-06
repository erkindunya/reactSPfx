/// <reference types="react" />
import * as React from 'react';
import './List.Grid.Example.scss';
export interface IListGridExampleProps {
    items: any[];
}
export declare class ListGridExample extends React.Component<IListGridExampleProps> {
    private _columnCount;
    private _columnWidth;
    private _rowHeight;
    render(): JSX.Element;
    private _getItemCountForPage;
    private _getPageHeight;
    private _onRenderCell;
}
