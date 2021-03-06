/// <reference types="react" />
import * as React from 'react';
import { IColumn } from 'office-ui-fabric-react/lib/DetailsList';
import { IExampleItem } from 'office-ui-fabric-react/lib/utilities/exampleData';
export interface IDetailsListDragDropExampleState {
    items: IExampleItem[];
    columns: IColumn[];
    isColumnReorderEnabled: boolean;
    frozenColumnCountFromStart: string;
    frozenColumnCountFromEnd: string;
}
export declare class DetailsListDragDropExample extends React.Component<{}, IDetailsListDragDropExampleState> {
    private _selection;
    private _dragDropEvents;
    private _draggedItem;
    private _draggedIndex;
    constructor(props: {});
    render(): JSX.Element;
    private _handleColumnReorder;
    private _getColumnReorderOptions();
    private _validateNumber(value);
    private _onChangeStartCountText;
    private _onChangeEndCountText;
    private _onChangeColumnReorderEnabled;
    private _getDragDropEvents();
    private _onItemInvoked;
    private _onRenderItemColumn;
    private _insertBeforeItem(item);
}
