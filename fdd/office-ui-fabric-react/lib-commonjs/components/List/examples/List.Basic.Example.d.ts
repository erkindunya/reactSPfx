/// <reference types="react" />
import * as React from 'react';
export declare type IExampleItem = {
    name: string;
    thumbnail: string;
    description: string;
};
export interface IListBasicExampleProps {
    items: IExampleItem[];
}
export interface IListBasicExampleState {
    filterText?: string;
    items?: IExampleItem[];
}
export declare class ListBasicExample extends React.Component<IListBasicExampleProps, IListBasicExampleState> {
    constructor(props: IListBasicExampleProps);
    render(): JSX.Element;
    private _onFilterChanged(_, text);
    private _onRenderCell(item, index);
}
