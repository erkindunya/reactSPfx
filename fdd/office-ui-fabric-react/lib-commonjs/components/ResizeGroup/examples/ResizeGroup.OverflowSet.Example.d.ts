/// <reference types="react" />
import { BaseComponent } from 'office-ui-fabric-react/lib/Utilities';
import { IContextualMenuItem } from 'office-ui-fabric-react/lib/ContextualMenu';
export interface IOverflowData {
    primary: IContextualMenuItem[];
    overflow: IContextualMenuItem[];
    cacheKey?: string;
}
export interface IResizeGroupOverflowSetExampleState {
    short: boolean;
    numberOfItems: number;
    buttonsChecked: boolean;
    cachingEnabled: boolean;
    onGrowDataEnabled: boolean;
}
export declare class ResizeGroupOverflowSetExample extends BaseComponent<{}, IResizeGroupOverflowSetExampleState> {
    constructor(props: {});
    render(): JSX.Element;
    private _onReduceData;
    private _onGrowData;
    private _onCachingEnabledChanged;
    private _onGrowDataEnabledChanged;
    private _onButtonsCheckedChanged;
    private _onNumberOfItemsChanged;
}
