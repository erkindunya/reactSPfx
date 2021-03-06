/// <reference types="react" />
import * as React from 'react';
import { ScrollToMode } from 'office-ui-fabric-react/lib/List';
export declare type IExampleItem = {
    name: string;
};
export interface IListScrollingExampleProps {
    items: IExampleItem[];
}
export interface IListScrollingExampleState {
    selectedIndex: number;
    scrollToMode: ScrollToMode;
    showItemIndexInView: boolean;
}
export declare class ListScrollingExample extends React.Component<IListScrollingExampleProps, IListScrollingExampleState> {
    private _list;
    constructor(props: IListScrollingExampleProps);
    render(): JSX.Element;
    componentWillUnmount(): void;
    private _getPageHeight(idx);
    private _onChangeText;
    private _onDropdownChange;
    private _onRenderCell;
    private _scrollRelative;
    private _scroll;
    private _resolveList;
    private _onShowItemIndexInViewChanged;
}
