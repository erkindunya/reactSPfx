/// <reference types="react" />
import { BaseComponent, IContextualMenuItem } from 'office-ui-fabric-react';
export interface IOverflowData {
    primary: IContextualMenuItem[];
    overflow: IContextualMenuItem[];
    cacheKey?: string;
}
export declare class ResizeGroupVerticalOverflowSetExample extends BaseComponent {
    render(): JSX.Element;
    private _onReduceData;
}
