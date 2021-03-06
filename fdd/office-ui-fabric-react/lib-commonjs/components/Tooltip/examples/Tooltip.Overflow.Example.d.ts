/// <reference types="react" />
import { BaseComponent } from 'office-ui-fabric-react/lib/Utilities';
export interface ITooltipOverflowExampleState {
    overflow: boolean;
    isTooltipVisible: boolean;
}
export declare class TooltipOverflowExample extends BaseComponent<{}, ITooltipOverflowExampleState> {
    private readonly tooltipId;
    constructor(props: any);
    render(): JSX.Element;
}
