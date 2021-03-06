/// <reference types="react" />
import { BaseComponent, IGroup } from 'office-ui-fabric-react';
export interface IDetailsListGroupedExampleItem {
    key: string;
    name: string;
    color: string;
}
export interface IDetailsListGroupedExampleState {
    items: IDetailsListGroupedExampleItem[];
    groups: IGroup[];
    showItemIndexInView: boolean;
    isCompactMode: boolean;
}
export declare class DetailsListGroupedExample extends BaseComponent<{}, IDetailsListGroupedExampleState> {
    private _root;
    private _columns;
    constructor(props: {});
    componentWillUnmount(): void;
    render(): JSX.Element;
    private _addItem;
    private _onRenderDetailsHeader(props, _defaultRender?);
    private _onRenderColumn(item, index, column);
    private _onShowItemIndexInViewChanged;
    private _onChangeCompactMode;
}
