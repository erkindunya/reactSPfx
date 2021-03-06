/// <reference types="react" />
import * as React from 'react';
import { IContextualMenuProps } from 'office-ui-fabric-react/lib/ContextualMenu';
import { CheckboxVisibility, ConstrainMode, DetailsListLayoutMode, IColumn, IGroup, SelectionMode } from 'office-ui-fabric-react/lib/DetailsList';
import { IExampleItem } from 'office-ui-fabric-react/lib/utilities/exampleData';
export interface IDetailsListAdvancedExampleState {
    canResizeColumns?: boolean;
    checkboxVisibility?: CheckboxVisibility;
    columns: IColumn[];
    constrainMode?: ConstrainMode;
    contextualMenuProps?: IContextualMenuProps;
    groupItemLimit?: number;
    groups?: IGroup[];
    isHeaderVisible?: boolean;
    isLazyLoaded?: boolean;
    isSortedDescending?: boolean;
    items: IExampleItem[];
    layoutMode?: DetailsListLayoutMode;
    selectionMode?: SelectionMode;
    sortedColumnKey?: string;
    selectionCount: number;
}
export declare class DetailsListAdvancedExample extends React.Component<{}, IDetailsListAdvancedExampleState> {
    private _isFetchingItems;
    private _selection;
    private _allItems;
    constructor(props: {});
    render(): JSX.Element;
    private _onRenderDivider;
    private _onDataMiss(index);
    private _onRenderMissingItem;
    private _onToggleLazyLoad;
    private _onToggleHeaderVisible;
    private _onToggleResizing;
    private _onCheckboxVisibilityChanged;
    private _onLayoutChanged;
    private _onConstrainModeChanged;
    private _onSelectionChanged;
    private _onItemLimitChanged;
    private _getCommandItems;
    private _getContextualMenuProps(ev, column);
    private _onItemInvoked;
    private _onItemContextMenu;
    private _onColumnClick;
    private _onColumnContextMenu;
    private _onContextualMenuDismissed;
    private _onSortColumn;
    private _onGroupByColumn;
    private _groupByKey(groups, items, key);
    private _getGroups(groupedItems, key, parentGroup?);
    private _getLeafGroupKey(key, separator);
    private _onAddRow;
    private _onDeleteRow;
    private _onItemsSelectionChanged;
    private _buildColumns(items, canResizeColumns?, onColumnClick?, sortedColumnKey?, isSortedDescending?, groupedColumnKey?, onColumnContextMenu?);
}
