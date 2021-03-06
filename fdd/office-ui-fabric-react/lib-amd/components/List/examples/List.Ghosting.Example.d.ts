/// <reference types="react" />
import * as React from 'react';
export declare type IExampleItem = {
    name: string;
    thumbnail: string;
};
export interface IListGhostingExampleProps {
    items: IExampleItem[];
}
export declare class ListGhostingExample extends React.Component<IListGhostingExampleProps> {
    render(): JSX.Element;
    private _onRenderCell(item, index, isScrolling);
}
