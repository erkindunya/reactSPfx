/// <reference types="react" />
import { BaseComponent } from 'office-ui-fabric-react/lib/Utilities';
import { IExampleItem } from 'office-ui-fabric-react/lib/utilities/exampleData';
import { IColumn } from 'office-ui-fabric-react/lib/index';
export interface IShimmerApplicationExampleState {
    items: IExampleItem[];
    columns?: IColumn[];
    isDataLoaded?: boolean;
}
export declare class ShimmerApplicationExample extends BaseComponent<{}, IShimmerApplicationExampleState> {
    private _lastIntervalId;
    private _lastIndexWithData;
    constructor(props: {});
    render(): JSX.Element;
    private _loadData;
    private _onLoadData;
    private _onRenderItemColumn;
    private _randomFileIcon();
}
